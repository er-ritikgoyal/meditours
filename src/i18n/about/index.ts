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
	const raw = texts[locale]?.[slug];
	const s = shared[locale];
	if (!raw || !s) return undefined;

	const sections: AboutSection[] = [];
	for (const block of raw.split('##').slice(1)) {
		const [key, ...lines] = block.split('\n');
		const title = s.headings[key.trim() as keyof AboutShared['headings']];
		if (!title) continue;
		sections.push({ title, paragraphs: lines.filter(Boolean).map((l) => l.split(baseName).join(localName)) });
	}
	sections.push({ title: s.headings.howWeHelp, paragraphs: s.howWeHelp });
	sections.push({ title: s.headings.prepare, paragraphs: s.prepare });
	const key = cityKey(citySlug, city);
	if (s.cities[key]) {
		sections.push({ title: `${s.headings.cityGuide} ${s.cityNames[key] ?? key}`, paragraphs: [s.cities[key]] });
	}
	return sections;
}
