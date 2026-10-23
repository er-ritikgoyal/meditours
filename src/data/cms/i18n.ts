/**
 * Translations saved in the content editor (/editor/), per content type and
 * language. Each saved record may carry `i18n: { fr: {...}, ru: {...} }` with
 * only the fields the editor translated; everything else keeps the existing
 * translation (src/i18n/*) or falls back to English.
 *
 * The per-language translation modules (src/i18n/{lang}-doctors.ts, …) apply
 * these on top of their own entries, so every page and card in that language
 * uses them.
 */
import blogs from './blogs.json';
import doctors from './doctors.json';
import hospitals from './hospitals.json';
import treatments from './treatments.json';
import type { CmsRecord } from './merge';

export const CMS_LOCALES = ['fr', 'ru', 'bn', 'ro', 'es', 'pt', 'vi', 'ar'] as const;
export type CmsType = 'blogs' | 'doctors' | 'hospitals' | 'treatments';

type I18nRecord = CmsRecord & { i18n?: Record<string, Record<string, unknown>> };
const byType: Record<CmsType, Record<string, I18nRecord>> = {
	blogs: blogs as Record<string, I18nRecord>,
	doctors: doctors as Record<string, I18nRecord>,
	hospitals: hospitals as Record<string, I18nRecord>,
	treatments: treatments as Record<string, I18nRecord>,
};

const isEmpty = (v: unknown) => v === undefined || v === null || v === '' || (Array.isArray(v) && v.length === 0);

/**
 * slug → translated fields for one type and language. Translated rows of
 * repeating groups (sub-treatments, FAQs, education…) are lined up with the
 * English rows by position; blank translated fields fall back to English.
 */
export function cmsTranslations(type: CmsType, locale: string): Record<string, Record<string, any>> {
	const out: Record<string, Record<string, any>> = {};
	for (const record of Object.values(byType[type])) {
		if (!record?.slug || record._cms?.deleted || record._cms?.imported) continue;
		const tr = record.i18n?.[locale];
		if (!tr || typeof tr !== 'object') continue;
		const clean: Record<string, any> = {};
		for (const [key, value] of Object.entries(tr)) {
			if (isEmpty(value)) continue;
			if (Array.isArray(value) && value.some((row) => row && typeof row === 'object')) {
				const english = Array.isArray(record[key]) ? (record[key] as Record<string, unknown>[]) : [];
				clean[key] = value.map((row, i) => {
					const filled: Record<string, unknown> = { ...(english[i] ?? {}) };
					for (const [k, v] of Object.entries((row ?? {}) as Record<string, unknown>)) if (!isEmpty(v)) filled[k] = v;
					return filled;
				});
			} else {
				clean[key] = value;
			}
		}
		// Doctor award translations are plain titles, matched by position.
		if (type === 'doctors' && Array.isArray(clean.awards)) {
			clean.awards = clean.awards.map((a: { title?: string } | string) => (typeof a === 'string' ? a : a?.title ?? ''));
		}
		if (Object.keys(clean).length) out[record.slug] = clean;
	}
	return out;
}
