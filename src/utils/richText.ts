/**
 * Long text fields (about, write-ups, overviews, descriptions, FAQ answers,
 * blog paragraphs) may contain a little HTML typed in the content editor
 * (/editor/). The same allowlist is enforced when saving (PHP) and here when
 * rendering, so a stray or pasted tag can never break a page or run script.
 */

const ALLOWED = new Set(['b', 'strong', 'i', 'em', 'u', 'a', 'br', 'ul', 'ol', 'li', 'p', 'h2', 'h3', 'h4', 'span', 'sub', 'sup', 'blockquote', 'small']);

const escapeHtml = (s: string) => s.replace(/&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Allowed link targets: web, mail, phone, on-site paths and anchors. */
function safeHref(href: string): string | null {
	const h = href.trim();
	return /^(https?:|mailto:|tel:|\/|#)/i.test(h) ? h : null;
}

/** Text that may contain allowlisted HTML → safe HTML. Plain text (no tags) is escaped. */
export function richHtml(text: string | undefined | null): string {
	const s = String(text ?? '');
	if (!/<\/?[a-zA-Z]/.test(s)) return escapeHtml(s);
	return s
		.replace(/<(script|style|iframe|object|embed|template|svg|math)\b[\s\S]*?<\/\1\s*>/gi, '')
		.replace(/<!--[\s\S]*?-->/g, '')
		.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g, (tag, rawName: string, attrs: string) => {
			const name = rawName.toLowerCase();
			if (!ALLOWED.has(name)) return '';
			if (tag.startsWith('</')) return `</${name}>`;
			if (name !== 'a') return name === 'br' ? '<br>' : `<${name}>`;
			const href = attrs.match(/\shref\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/i);
			const url = href ? safeHref(href[2] ?? href[3] ?? href[4] ?? '') : null;
			const blank = /\starget\s*=\s*["']?_blank/i.test(attrs);
			return `<a${url ? ` href="${escapeHtml(url)}"` : ''}${blank ? ' target="_blank" rel="noopener noreferrer"' : ''}>`;
		});
}

/** The text without any tags, for meta descriptions, teasers, structured data and search. */
export function stripTags(text: string | undefined | null): string {
	return String(text ?? '')
		.replace(/<(script|style)\b[\s\S]*?<\/\1\s*>/gi, '')
		.replace(/<br\s*\/?>/gi, ' ')
		.replace(/<[^>]*>/g, '')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#0?39;/g, "'")
		.replace(/[ \t]+/g, ' ')
		.trim();
}
