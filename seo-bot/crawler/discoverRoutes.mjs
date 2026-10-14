import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(__dirname, '..', '..');

/**
 * Reads the site's own generated sitemap.xml (public/sitemap.xml, built by
 * scripts/generate-seo-files.mjs) as the authoritative "what pages should
 * exist" list, per the SEO_AUTOPILOT_ARCHITECTURE.md recommendation — the
 * crawler doesn't re-derive routes itself, it trusts the site's own source
 * of truth and flags any drift between the two (see checkSitemapDrift).
 *
 * Returns an array of pathnames, e.g. ['/', '/fr/', '/treatments/fertility', ...]
 */
export function readSitemapPaths(sitemapPath = join(siteRoot, 'public/sitemap.xml')) {
	const xml = readFileSync(sitemapPath, 'utf8');
	const paths = [];
	const locRe = /<loc>([^<]+)<\/loc>/g;
	let m;
	while ((m = locRe.exec(xml))) {
		try {
			paths.push(new URL(m[1]).pathname);
		} catch {
			// malformed <loc> — surfaced separately as a sitemap problem, not here
		}
	}
	return paths;
}

export function readRobotsTxt(robotsPath = join(siteRoot, 'public/robots.txt')) {
	try {
		return readFileSync(robotsPath, 'utf8');
	} catch {
		return null;
	}
}
