import { hospitalAbout } from '../../data/hospitalAbout';
import type { AboutShared } from './shared/types';
import { enShared } from './shared/en';
import { frShared } from './shared/fr';
import { esShared } from './shared/es';
import { ptShared } from './shared/pt';
import { roShared } from './shared/ro';
import { ruShared } from './shared/ru';
import { bnShared } from './shared/bn';
import { viShared } from './shared/vi';
import { arShared } from './shared/ar';
import { frAbout } from './fr';
import { esAbout } from './es';
import { ptAbout } from './pt';
import { roAbout } from './ro';
import { ruAbout } from './ru';
import { bnAbout } from './bn';
import { viAbout } from './vi';
import { arAbout } from './ar';
import { cmsTranslations } from '../../data/cms/i18n';
import cmsHospitals from '../../data/cms/hospitals.json';

/** The hospital-specific parts of the write-up, in page order, and their content-editor fields. */
export const ABOUT_KEYS = ['history', 'specialities', 'technology', 'international'] as const;
export type AboutKey = (typeof ABOUT_KEYS)[number];
export const ABOUT_FIELDS: Record<AboutKey, string> = {
	history: 'aboutHistory',
	specialities: 'aboutSpecialities',
	technology: 'aboutTechnology',
	international: 'aboutInternational',
};

/** "##history\npara\npara##specialities\n…" → { history: [para, para], … } */
function parseRaw(raw: string | undefined): Partial<Record<AboutKey, string[]>> {
	const out: Partial<Record<AboutKey, string[]>> = {};
	for (const block of (raw ?? '').split('##').slice(1)) {
		const [key, ...lines] = block.split('\n');
		if ((ABOUT_KEYS as readonly string[]).includes(key.trim())) out[key.trim() as AboutKey] = lines.filter(Boolean);
	}
	return out;
}

/** Write-up fields saved in the content editor for this hospital and language (English: the record itself). */
function editorFields(slug: string, locale: string): Record<string, unknown> | undefined {
	if (locale !== 'en') return cmsTranslations('hospitals', locale)[slug];
	const record = (cmsHospitals as Record<string, Record<string, any>>)[slug];
	return record && !record._cms?.deleted && !record._cms?.imported ? record : undefined;
}

const splitParagraphs = (value: unknown) =>
	typeof value === 'string' ? value.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean) : undefined;

/**
 * The hospital's write-up sections for a language: the content editor's text
 * where saved (section by section), otherwise the stored write-up.
 */
function writeUp(slug: string, locale: string): Partial<Record<AboutKey, string[]>> {
	const stored = parseRaw(texts[locale]?.[slug]);
	const edited = editorFields(slug, locale);
	if (!edited) return stored;
	const out: Partial<Record<AboutKey, string[]>> = {};
	for (const key of ABOUT_KEYS) {
		const field = ABOUT_FIELDS[key];
		// A field present in the saved record (even empty) replaces the stored section.
		const paras = field in edited ? splitParagraphs(edited[field]) ?? [] : stored[key];
		if (paras && paras.length) out[key] = paras;
	}
	return out;
}

/** The write-up as editor fields (paragraphs separated by blank lines), for pre-filling the content editor. */
export function hospitalAboutFields(slug: string, locale: string): Record<string, string> {
	const sections = writeUp(slug, locale);
	const out: Record<string, string> = {};
	for (const key of ABOUT_KEYS) if (sections[key]?.length) out[ABOUT_FIELDS[key]] = sections[key]!.join('\n\n');
	return out;
}

/** True when the content editor saved any write-up section for this hospital and language. */
function hasEditorWriteUp(slug: string, locale: string): boolean {
	const edited = editorFields(slug, locale);
	return !!edited && ABOUT_KEYS.some((k) => ABOUT_FIELDS[k] in edited);
}

const texts: Record<string, Record<string, string>> = {
	en: hospitalAbout,
	fr: frAbout,
	es: esAbout,
	pt: ptAbout,
	ro: roAbout,
	ru: ruAbout,
	bn: bnAbout,
	vi: viAbout,
	ar: arAbout,
};

const shared: Record<string, AboutShared> = {
	en: enShared,
	fr: frShared,
	es: esShared,
	pt: ptShared,
	ro: roShared,
	ru: ruShared,
	bn: bnShared,
	vi: viShared,
	ar: arShared,
};

export interface AboutSection {
	title: string;
	paragraphs: string[];
	/** Set on the hospital-specific parts (editable in the content editor); unset on the shared ones. */
	key?: AboutKey;
}

/** Maps a hospital's free-text city onto one of the city guides. */
function cityKey(citySlug: string, city: string): string {
	if (citySlug !== 'delhi-ncr') return citySlug;
	if (/delhi/i.test(city)) return 'delhi';
	for (const k of ['gurugram', 'noida', 'faridabad', 'ghaziabad']) if (city.toLowerCase().includes(k)) return k;
	return 'delhi';
}

/**
 * Long web-sourced write-up for a hospital in the given locale as headed
 * sections (history, specialities, technology, international, how we help,
 * before you travel, city guide), or undefined when no text exists. The English
 * hospital name embedded in the text is swapped for the localised one.
 */
export function getHospitalAbout(
	slug: string,
	locale: string,
	baseName: string,
	localName: string,
	citySlug: string,
	city: string,
): AboutSection[] | undefined {
	// A translated short "about" saved in the editor (without write-up sections) replaces the write-up.
	if (locale !== 'en' && cmsTranslations('hospitals', locale)[slug]?.about && !hasEditorWriteUp(slug, locale)) return undefined;
	const parts = writeUp(slug, locale);
	const s = shared[locale];
	if (!s || !ABOUT_KEYS.some((k) => parts[k]?.length)) return undefined;

	const sections: AboutSection[] = [];
	for (const key of ABOUT_KEYS) {
		const title = s.headings[key];
		if (!title || !parts[key]?.length) continue;
		sections.push({ key, title, paragraphs: parts[key]!.map((l) => l.split(baseName).join(localName)) });
	}
	sections.push({ title: s.headings.howWeHelp, paragraphs: s.howWeHelp });
	sections.push({ title: s.headings.prepare, paragraphs: s.prepare });
	const key = cityKey(citySlug, city);
	if (s.cities[key]) {
		sections.push({ title: `${s.headings.cityGuide} ${s.cityNames[key] ?? key}`, paragraphs: [s.cities[key]] });
	}
	return sections;
}
