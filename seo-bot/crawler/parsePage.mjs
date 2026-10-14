import { parse } from 'node-html-parser';

const text = (el) => (el ? el.text.replace(/\s+/g, ' ').trim() : '');
const attr = (el, name) => (el ? (el.getAttribute(name) ?? '') : '');

/**
 * Extracts every SEO-relevant field from one page's HTML. Pure function —
 * no network, no filesystem — so it's independently testable and reusable
 * whether the HTML came from a live fetch or a saved fixture.
 */
export function parsePage(html, { url, origin }) {
	const root = parse(html, { comment: false });

	const titleEl = root.querySelector('title');
	const title = text(titleEl);

	const metaDescription = attr(root.querySelector('meta[name="description" i]'), 'content').trim();
	const canonicalHref = attr(root.querySelector('link[rel="canonical" i]'), 'href').trim();
	const robotsMeta = attr(root.querySelector('meta[name="robots" i]'), 'content').trim().toLowerCase();

	const h1s = root.querySelectorAll('h1').map(text).filter(Boolean);
	const h2s = root.querySelectorAll('h2').map(text).filter(Boolean);
	const h3s = root.querySelectorAll('h3').map(text).filter(Boolean);

	// Strip script/style before computing word count so JSON-LD/JS isn't counted as prose.
	const bodyClone = root.querySelector('body') ?? root;
	for (const el of bodyClone.querySelectorAll('script, style, noscript')) el.remove();
	const bodyText = text(bodyClone);
	const wordCount = bodyText.length === 0 ? 0 : bodyText.split(/\s+/).filter(Boolean).length;

	const images = root.querySelectorAll('img').map((img) => ({
		src: attr(img, 'src'),
		alt: attr(img, 'alt'),
		hasAlt: img.getAttribute('alt') !== null && attr(img, 'alt').trim().length > 0,
	}));

	const internalLinks = [];
	const externalLinks = [];
	for (const a of root.querySelectorAll('a[href]')) {
		const href = attr(a, 'href').trim();
		if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue;
		let resolved;
		try {
			resolved = new URL(href, url);
		} catch {
			continue;
		}
		const entry = { href: resolved.pathname + resolved.search, anchor: text(a) };
		if (resolved.origin === origin) internalLinks.push(entry);
		else externalLinks.push({ href: resolved.toString(), anchor: text(a) });
	}

	const structuredData = [];
	for (const script of root.querySelectorAll('script[type="application/ld+json" i]')) {
		try {
			structuredData.push(JSON.parse(script.rawText));
		} catch (err) {
			structuredData.push({ __parseError: String(err.message ?? err) });
		}
	}

	const openGraph = {};
	for (const m of root.querySelectorAll('meta[property^="og:" i]')) {
		const prop = attr(m, 'property');
		if (prop) openGraph[prop] = attr(m, 'content');
	}

	const twitterCard = {};
	for (const m of root.querySelectorAll('meta[name^="twitter:" i]')) {
		const name = attr(m, 'name');
		if (name) twitterCard[name] = attr(m, 'content');
	}

	const hreflangAlternates = root.querySelectorAll('link[rel="alternate" i][hreflang]').map((l) => ({
		hreflang: attr(l, 'hreflang'),
		href: attr(l, 'href'),
	}));

	return {
		title,
		metaDescription,
		canonical: canonicalHref || null,
		robotsMeta: robotsMeta || null,
		noindex: robotsMeta.includes('noindex'),
		h1: h1s,
		h2: h2s,
		h3: h3s,
		wordCount,
		images,
		internalLinks,
		externalLinks,
		structuredData,
		openGraph,
		twitterCard,
		hreflangAlternates,
	};
}
