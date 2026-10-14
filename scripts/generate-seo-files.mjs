#!/usr/bin/env node
/**
 * Auto-generates public/sitemap.xml and public/robots.txt from the site's
 * actual route structure and content data.
 *
 * Runs automatically before every `npm run build` (see the "prebuild" script
 * in package.json), so:
 *   - a new treatment or destination added to src/data/*.ts
 *   - a new locale added to astro.config.mjs
 * is picked up on the very next deploy with zero manual steps.
 *
 * No new dependency is added on purpose: treatment/destination slugs are
 * read straight out of the existing data files with a small regex instead
 * of importing them (this file runs under plain Node, not through Astro/
 * Vite's TypeScript pipeline), so it can't silently drift out of sync with
 * the site's own data.
 *
 * If you add a new top-level static page (its own src/pages/whatever.astro
 * that also exists under every locale folder), add its route name to
 * STATIC_ROUTES below so it's included too.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Keep in sync with astro.config.mjs -> i18n.locales / defaultLocale.
const SITE_URL = 'https://alispromeditours.com';
const LOCALES = ['en', 'fr', 'ru', 'bn', 'ro', 'es', 'pt', 'vi', 'ar'];
const DEFAULT_LOCALE = 'en'; // prefixDefaultLocale: false -> no /en/ prefix

// Static routes that exist under every locale (see src/pages/<locale>/*.astro).
// '' means the locale's home page.
const STATIC_ROUTES = ['', 'about', 'contact', 'destinations', 'treatments', 'doctors', 'hotel', 'flights', 'tourism'];

function extractSlugs(relativePath) {
	const text = readFileSync(join(root, relativePath), 'utf8');
	const slugs = [];
	const re = /slug:\s*'([^']+)'/g;
	let m;
	while ((m = re.exec(text))) slugs.push(m[1]);
	if (slugs.length === 0) {
		throw new Error(`[seo] found 0 slugs in ${relativePath} — data file format may have changed, check STATIC_ROUTES/regex`);
	}
	return slugs;
}

const treatmentSlugs = extractSlugs('src/data/treatments.ts');
const destinationSlugs = extractSlugs('src/data/destinations.ts');
const doctorSlugs = extractSlugs('src/data/doctors.ts');
const hospitalSlugs = extractSlugs('src/data/hospitals.ts');

/** Mirrors src/utils/slugify.ts -> slugifyProcedure, so sitemap URLs match the live routes exactly. */
function slugifyProcedure(name) {
	return name
		.toLowerCase()
		.replace(/['’]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * Procedure sub-pages (/treatments/{slug}/{procedure}) are English-only (see
 * src/pages/treatments/[slug]/[procedure].astro) and only exist for
 * treatments with a `detailedProcedures` array, so they're extracted and
 * listed separately from the per-locale `groups` below.
 */
function extractProcedurePaths(relativePath) {
	const text = readFileSync(join(root, relativePath), 'utf8');
	const slugRe = /slug:\s*'([^']+)'/g;
	const positions = [];
	let m;
	while ((m = slugRe.exec(text))) positions.push({ slug: m[1], idx: m.index });
	positions.push({ slug: 'END', idx: text.length });

	const paths = [];
	const nameRe = /name:\s*(?:'([^']*)'|"([^"]*)")/g;
	for (let i = 0; i < positions.length - 1; i++) {
		const block = text.slice(positions[i].idx, positions[i + 1].idx);
		const detailedMatch = block.match(/detailedProcedures: \[([\s\S]*?)\n\t\t\],/);
		if (!detailedMatch) continue;
		nameRe.lastIndex = 0;
		let nm;
		while ((nm = nameRe.exec(detailedMatch[1]))) {
			const procedureName = nm[1] ?? nm[2];
			paths.push(`/treatments/${positions[i].slug}/${slugifyProcedure(procedureName)}`);
		}
	}
	return paths;
}

const procedurePaths = extractProcedurePaths('src/data/treatments.ts');

function localePrefix(locale) {
	return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

function pathFor(prefix, route) {
	if (route === '') return prefix === '' ? '/' : `${prefix}/`;
	return `${prefix}/${route}`;
}

/** Each group is { locale: path } for one logical page across every locale. */
function buildGroups() {
	const groups = [];

	for (const route of STATIC_ROUTES) {
		const group = {};
		for (const locale of LOCALES) group[locale] = pathFor(localePrefix(locale), route);
		groups.push(group);
	}

	for (const slug of treatmentSlugs) {
		const group = {};
		for (const locale of LOCALES) group[locale] = `${localePrefix(locale)}/treatments/${slug}`;
		groups.push(group);
	}

	for (const slug of destinationSlugs) {
		const group = {};
		for (const locale of LOCALES) group[locale] = `${localePrefix(locale)}/destinations/${slug}`;
		groups.push(group);
	}

	for (const slug of doctorSlugs) {
		const group = {};
		for (const locale of LOCALES) group[locale] = `${localePrefix(locale)}/doctors/${slug}`;
		groups.push(group);
	}

	for (const slug of hospitalSlugs) {
		const group = {};
		for (const locale of LOCALES) group[locale] = `${localePrefix(locale)}/hospitals/${slug}`;
		groups.push(group);
	}

	return groups;
}

function escapeXml(value) {
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function generateSitemap(groups, standalonePaths) {
	const today = new Date().toISOString().slice(0, 10);
	const blocks = [];

	for (const group of groups) {
		for (const locale of LOCALES) {
			const loc = escapeXml(SITE_URL + group[locale]);
			const alternates = LOCALES.map(
				(l) => `\t\t<xhtml:link rel="alternate" hreflang="${l}" href="${escapeXml(SITE_URL + group[l])}" />`,
			).join('\n');
			const xDefault = `\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(SITE_URL + group[DEFAULT_LOCALE])}" />`;
			blocks.push(`\t<url>\n\t\t<loc>${loc}</loc>\n\t\t<lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n\t</url>`);
		}
	}

	for (const path of standalonePaths) {
		const loc = escapeXml(SITE_URL + path);
		blocks.push(`\t<url>\n\t\t<loc>${loc}</loc>\n\t\t<lastmod>${today}</lastmod>\n\t</url>`);
	}

	return (
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
		`${blocks.join('\n')}\n` +
		`</urlset>\n`
	);
}

function generateRobots() {
	return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}

const groups = buildGroups();
const urlCount = groups.length * LOCALES.length + procedurePaths.length;

writeFileSync(join(root, 'public/sitemap.xml'), generateSitemap(groups, procedurePaths));
writeFileSync(join(root, 'public/robots.txt'), generateRobots());

console.log(
	`[seo] wrote public/sitemap.xml (${urlCount} URLs: ${groups.length} pages x ${LOCALES.length} locales + ${procedurePaths.length} procedure pages) and public/robots.txt`,
);
