#!/usr/bin/env node
/**
 * SEO crawler — Phase 2+3 MVP per SEO_AUTOPILOT_ARCHITECTURE.md.
 *
 * Crawls a running build of the site (default: `astro preview` on
 * localhost:4322), starting from every URL in the site's own generated
 * sitemap.xml plus whatever internal links it discovers along the way
 * (so it also finds pages linked-to but missing from the sitemap, and
 * pages in the sitemap that nothing links to).
 *
 * Output: one JSON report under seo-bot/reports/ containing every crawled
 * page's full audit data plus a deduplicated, severity-tagged issue list.
 * No database yet — this MVP's whole job is proving detection is accurate
 * before Phase 4 (database) and Phase 5 (dashboard) get built on top of it.
 *
 * Usage:
 *   node crawler/crawl.mjs [--base http://localhost:4322] [--out ./reports]
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { performance } from 'node:perf_hooks';
import { readSitemapPaths, readRobotsTxt } from './discoverRoutes.mjs';
import { parsePage } from './parsePage.mjs';
import { severityOf, THIN_CONTENT_WORD_THRESHOLD, SLOW_RESPONSE_MS, POOR_LINKING_INBOUND_THRESHOLD, MAX_REDIRECT_HOPS } from './severity.mjs';

function parseArgs(argv) {
	const args = { base: 'http://localhost:4322', out: join(import.meta.dirname, '..', 'reports') };
	for (let i = 0; i < argv.length; i++) {
		if (argv[i] === '--base') args.base = argv[++i];
		else if (argv[i] === '--out') args.out = argv[++i];
	}
	return args;
}

/** Fetches one URL, following redirects manually so the whole hop chain is visible. */
async function fetchFollowingRedirects(url, origin) {
	const chain = [];
	let current = url;
	const start = performance.now();

	for (let hop = 0; hop <= MAX_REDIRECT_HOPS; hop++) {
		let res;
		try {
			res = await fetch(current, { redirect: 'manual' });
		} catch (err) {
			return { error: String(err.message ?? err), chain, responseTimeMs: performance.now() - start };
		}

		if (res.status >= 300 && res.status < 400) {
			const location = res.headers.get('location');
			chain.push({ status: res.status, location });
			if (!location) break;
			current = new URL(location, current).toString();
			if (hop === MAX_REDIRECT_HOPS) {
				return { redirectLoop: true, chain, responseTimeMs: performance.now() - start };
			}
			continue;
		}

		const contentType = res.headers.get('content-type') ?? '';
		const body = contentType.includes('text/html') ? await res.text() : null;
		return {
			finalUrl: current,
			finalStatus: res.status,
			contentType,
			body,
			chain,
			responseTimeMs: performance.now() - start,
		};
	}

	return { redirectLoop: true, chain, responseTimeMs: performance.now() - start };
}

async function crawl({ base }) {
	const origin = new URL(base).origin;
	const sitemapPaths = new Set(readSitemapPaths());
	const robotsTxt = readRobotsTxt();

	const queue = [...sitemapPaths, '/'];
	const visited = new Map(); // path -> page record
	const inbound = new Map(); // path -> [{ from, anchor }]
	const queued = new Set(queue);

	while (queue.length > 0) {
		const path = queue.shift();
		if (visited.has(path)) continue;

		const url = new URL(path, base).toString();
		const result = await fetchFollowingRedirects(url, origin);
		visited.set(path, { path, ...result });

		if (result.body) {
			const parsed = parsePage(result.body, { url: result.finalUrl, origin });
			visited.set(path, { path, ...result, parsed });

			for (const link of parsed.internalLinks) {
				const target = link.href;
				if (!inbound.has(target)) inbound.set(target, []);
				inbound.get(target).push({ from: path, anchor: link.anchor });
				if (!queued.has(target)) {
					queued.add(target);
					queue.push(target);
				}
			}
		}
	}

	return { visited, inbound, sitemapPaths, robotsTxt, origin };
}

function isHomePath(path) {
	return path === '/' || /^\/[a-z]{2}\/$/.test(path);
}

function addIssue(issues, type, details) {
	issues.push({ type, severity: severityOf(type), ...details });
}

function detectIssues({ visited, inbound, sitemapPaths, robotsTxt }) {
	const issues = [];
	const okPages = [...visited.values()].filter((p) => p.finalStatus === 200 && p.parsed);

	// --- Per-page structural issues ---
	for (const page of okPages) {
		const { path, parsed, responseTimeMs } = page;

		if (!parsed.title) addIssue(issues, 'missing_title', { path });
		if (!parsed.metaDescription) addIssue(issues, 'missing_meta_description', { path });
		if (parsed.h1.length === 0) addIssue(issues, 'missing_h1', { path });
		if (parsed.h1.length > 1) addIssue(issues, 'multiple_h1', { path, count: parsed.h1.length, values: parsed.h1 });
		if (!parsed.canonical) addIssue(issues, 'missing_canonical', { path });
		else {
			const canonicalPath = (() => {
				try {
					return new URL(parsed.canonical).pathname;
				} catch {
					return null;
				}
			})();
			if (canonicalPath && canonicalPath.replace(/\/$/, '') !== path.replace(/\/$/, '')) {
				addIssue(issues, 'canonical_mismatch', { path, canonical: parsed.canonical });
			}
		}
		if (parsed.noindex && sitemapPaths.has(path)) addIssue(issues, 'unexpected_noindex', { path });
		if (parsed.structuredData.length === 0) addIssue(issues, 'missing_structured_data', { path });
		if (parsed.wordCount < THIN_CONTENT_WORD_THRESHOLD) addIssue(issues, 'thin_content', { path, wordCount: parsed.wordCount });
		if (responseTimeMs > SLOW_RESPONSE_MS) addIssue(issues, 'slow_response', { path, responseTimeMs: Math.round(responseTimeMs) });

		const missingAlt = parsed.images.filter((i) => !i.hasAlt);
		if (missingAlt.length > 0) {
			addIssue(issues, 'missing_alt_text', { path, count: missingAlt.length, images: missingAlt.map((i) => i.src) });
		}

		if (page.chain.length === 1) addIssue(issues, 'single_redirect', { path, chain: page.chain });
		else if (page.chain.length > 1) addIssue(issues, 'redirect_chain', { path, chain: page.chain });
		if (page.redirectLoop) addIssue(issues, 'redirect_loop', { path, chain: page.chain });
		if (page.error) addIssue(issues, 'fetch_error', { path, error: page.error });
	}

	// --- Broken/missing pages ---
	for (const [path, page] of visited) {
		if (page.finalStatus && page.finalStatus !== 200) {
			addIssue(issues, 'page_404', { path, status: page.finalStatus, error: page.error });
		}
	}
	for (const [path, page] of visited) {
		if (page.finalStatus && page.finalStatus !== 200 && inbound.has(path)) {
			const referrers = inbound.get(path);
			addIssue(issues, 'broken_internal_link', {
				path,
				status: page.finalStatus,
				referrerCount: referrers.length,
				referrers: referrers.slice(0, 10),
			});
		}
	}

	// --- Sitemap drift ---
	for (const path of sitemapPaths) {
		const page = visited.get(path);
		if (!page || page.finalStatus !== 200) addIssue(issues, 'sitemap_url_not_ok', { path, status: page?.finalStatus ?? 'no response' });
	}
	for (const page of okPages) {
		if (!sitemapPaths.has(page.path)) addIssue(issues, 'page_missing_from_sitemap', { path: page.path });
	}

	// --- Duplicate titles/descriptions (across sitemap pages only — that's the indexable set) ---
	const byTitle = new Map();
	const byDescription = new Map();
	for (const page of okPages) {
		if (!sitemapPaths.has(page.path)) continue;
		if (page.parsed.title) {
			if (!byTitle.has(page.parsed.title)) byTitle.set(page.parsed.title, []);
			byTitle.get(page.parsed.title).push(page.path);
		}
		if (page.parsed.metaDescription) {
			if (!byDescription.has(page.parsed.metaDescription)) byDescription.set(page.parsed.metaDescription, []);
			byDescription.get(page.parsed.metaDescription).push(page.path);
		}
	}
	for (const [title, paths] of byTitle) {
		if (paths.length > 1) addIssue(issues, 'duplicate_title', { title, paths });
	}
	for (const [description, paths] of byDescription) {
		if (paths.length > 1) addIssue(issues, 'duplicate_meta_description', { description, paths });
	}

	// --- Internal linking health ---
	for (const path of sitemapPaths) {
		if (isHomePath(path)) continue;
		const count = (inbound.get(path) ?? []).length;
		if (count === 0) addIssue(issues, 'orphan_page', { path });
		else if (count <= POOR_LINKING_INBOUND_THRESHOLD) addIssue(issues, 'poor_internal_linking', { path, inboundCount: count });
	}

	// --- robots.txt ---
	if (robotsTxt) {
		const blocksEverything = /User-agent:\s*\*[^]*?Disallow:\s*\/\s*(?:\n|$)/im.test(robotsTxt) && !/Allow:\s*\//i.test(robotsTxt);
		if (blocksEverything) addIssue(issues, 'robots_disallow_all', {});
	}

	return issues;
}

function summarize(issues) {
	const bySeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, INFO: 0 };
	for (const issue of issues) bySeverity[issue.severity] = (bySeverity[issue.severity] ?? 0) + 1;
	return bySeverity;
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	console.log(`[crawl] target: ${args.base}`);

	const { visited, inbound, sitemapPaths, robotsTxt, origin } = await crawl(args);
	const issues = detectIssues({ visited, inbound, sitemapPaths, robotsTxt });
	const bySeverity = summarize(issues);

	const pages = [...visited.values()].map((p) => ({
		path: p.path,
		httpStatus: p.finalStatus ?? null,
		responseTimeMs: p.responseTimeMs ? Math.round(p.responseTimeMs) : null,
		redirectChain: p.chain,
		error: p.error ?? null,
		inSitemap: sitemapPaths.has(p.path),
		inboundLinkCount: (inbound.get(p.path) ?? []).length,
		...(p.parsed
			? {
					title: p.parsed.title,
					metaDescription: p.parsed.metaDescription,
					canonical: p.parsed.canonical,
					robotsMeta: p.parsed.robotsMeta,
					h1: p.parsed.h1,
					h2: p.parsed.h2,
					h3: p.parsed.h3,
					wordCount: p.parsed.wordCount,
					images: p.parsed.images,
					internalLinkCount: p.parsed.internalLinks.length,
					externalLinkCount: p.parsed.externalLinks.length,
					structuredDataTypes: p.parsed.structuredData.flatMap((d) => d?.['@graph']?.map((g) => g['@type']) ?? d?.['@type'] ?? []),
					openGraph: p.parsed.openGraph,
					twitterCard: p.parsed.twitterCard,
					hreflangAlternates: p.parsed.hreflangAlternates,
				}
			: {}),
	}));

	const report = {
		generatedAt: new Date().toISOString(),
		target: args.base,
		origin,
		pagesCrawled: visited.size,
		sitemapUrlCount: sitemapPaths.size,
		summary: bySeverity,
		issues: issues.sort((a, b) => Object.keys(bySeverity).indexOf(a.severity) - Object.keys(bySeverity).indexOf(b.severity)),
		pages,
	};

	mkdirSync(args.out, { recursive: true });
	const filename = `crawl-${report.generatedAt.replace(/[:.]/g, '-')}.json`;
	const outPath = join(args.out, filename);
	writeFileSync(outPath, JSON.stringify(report, null, 2));

	console.log(`[crawl] pages crawled: ${report.pagesCrawled} (sitemap has ${report.sitemapUrlCount})`);
	console.log('[crawl] issues by severity:', bySeverity);
	console.log(`[crawl] report written to ${outPath}`);

	const top = issues.filter((i) => i.severity === 'CRITICAL' || i.severity === 'HIGH').slice(0, 15);
	if (top.length > 0) {
		console.log('\n[crawl] top CRITICAL/HIGH issues:');
		for (const issue of top) console.log(`  - [${issue.severity}] ${issue.type}: ${issue.path ?? ''}`);
	}
}

main().catch((err) => {
	console.error('[crawl] fatal error:', err);
	process.exit(1);
});
