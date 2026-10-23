import { hospitalOverviews } from '../../data/hospitalOverviews';
import { frOverviews } from './fr';
import { esOverviews } from './es';
import { ptOverviews } from './pt';
import { roOverviews } from './ro';
import { ruOverviews } from './ru';
import { bnOverviews } from './bn';
import { viOverviews } from './vi';
import { arOverviews } from './ar';
import { cmsTranslations } from '../../data/cms/i18n';
import cmsHospitals from '../../data/cms/hospitals.json';

/** Overview saved in the content editor for this hospital and language, if any. */
function editorOverview(slug: string, locale: string): string | undefined {
	if (locale !== 'en') return cmsTranslations('hospitals', locale)[slug]?.overview;
	const record = (cmsHospitals as Record<string, Record<string, any>>)[slug];
	if (!record || record._cms?.deleted || record._cms?.imported || !('overview' in record)) return undefined;
	return String(record.overview ?? '');
}

const byLocale: Record<string, Record<string, string>> = {
	en: hospitalOverviews,
	fr: frOverviews,
	es: esOverviews,
	pt: ptOverviews,
	ro: roOverviews,
	ru: ruOverviews,
	bn: bnOverviews,
	vi: viOverviews,
	ar: arOverviews,
};

/**
 * Longer web-sourced description for a hospital in the given locale, or
 * undefined when none exists. The English hospital name embedded in the text is
 * swapped for the localised one so names stay consistent on the page.
 */
export function getOverview(slug: string, locale: string, baseName: string, localName: string): string | undefined {
	const edited = editorOverview(slug, locale);
	if (edited === undefined && locale !== 'en' && cmsTranslations('hospitals', locale)[slug]?.about) return undefined;
	const text = edited !== undefined ? edited || undefined : byLocale[locale]?.[slug];
	return text ? text.split(baseName).join(localName) : undefined;
}
