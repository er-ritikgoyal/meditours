import { hospitalOverviews } from '../../data/hospitalOverviews';
import { frOverviews } from './fr';
import { esOverviews } from './es';
import { ptOverviews } from './pt';
import { roOverviews } from './ro';
import { ruOverviews } from './ru';
import { bnOverviews } from './bn';
import { viOverviews } from './vi';
import { arOverviews } from './ar';

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
	const text = byLocale[locale]?.[slug];
	return text ? text.split(baseName).join(localName) : undefined;
}
