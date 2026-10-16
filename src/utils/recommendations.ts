import type { ImageMetadata } from 'astro';
import { doctors } from '../data/doctors';
import { hospitals } from '../data/hospitals';
import { treatments } from '../data/treatments';
import { buildSearchIndex, TREATMENT_IMAGES, type SearchItem } from './searchIndex';

export type RecommendationKind = 'doctor' | 'hospital' | 'treatment';

export interface Recommendation {
	title: string;
	subtitle: string;
	href: string;
	image?: ImageMetadata | string;
	theme?: 'blue' | 'teal' | 'green';
}

// The search index already holds every doctor/hospital/treatment with its
// localized name, subtitle and locale-prefixed link — reuse it rather than
// re-deriving translations. Memoized because every page builds it per locale.
const indexCache = new Map<string, SearchItem[]>();
const localizedIndex = (locale: string) => {
	if (!indexCache.has(locale)) indexCache.set(locale, buildSearchIndex(locale));
	return indexCache.get(locale)!;
};

/** Items after `index`, wrapping around, so neighbouring pages don't all recommend the same first few entries. */
const rotateAfter = <T>(list: T[], index: number): T[] => [...list.slice(index + 1), ...list.slice(0, Math.max(index, 0))];

/** Stable sort by descending score — ties keep their rotated order. */
const rankBy = <T>(list: T[], score: (item: T) => number): T[] =>
	list
		.map((item, i) => ({ item, i, s: score(item) }))
		.sort((a, b) => b.s - a.s || a.i - b.i)
		.map(({ item }) => item);

/**
 * Other doctors / hospitals / treatments to recommend on a detail page:
 * doctors with the same specialty or city first, hospitals in the same city
 * (then by shared specialties), and the treatments that follow this one.
 */
export function getRecommendations(kind: RecommendationKind, slug: string, locale = 'en', limit = 6): Recommendation[] {
	const prefix = locale === 'en' ? '/' : `/${locale}/`;
	const bySlug = new Map(
		localizedIndex(locale)
			.filter((item) => item.type === kind)
			.map((item) => [item.href.slice(item.href.lastIndexOf('/') + 1), item]),
	);

	if (kind === 'doctor') {
		const current = doctors.find((d) => d.slug === slug);
		const currentCity = bySlug.get(slug)?.citySlug;
		const others = rotateAfter(doctors, doctors.indexOf(current!)).filter((d) => d.slug !== slug);
		const ranked = rankBy(others, (d) => (d.specialty === current?.specialty ? 2 : 0) + (currentCity && bySlug.get(d.slug)?.citySlug === currentCity ? 1 : 0));
		return ranked.slice(0, limit).map((d) => {
			const item = bySlug.get(d.slug);
			return {
				title: item?.title ?? d.name,
				// Index subtitle is "specialty · hospital" — the rail only has room for the specialty.
				subtitle: (item?.subtitle ?? d.specialty).split(' · ')[0],
				href: item?.href ?? `${prefix}doctors/${d.slug}`,
				image: d.photo,
				theme: d.theme,
			};
		});
	}

	if (kind === 'hospital') {
		const current = hospitals.find((h) => h.slug === slug);
		const others = rotateAfter(hospitals, hospitals.indexOf(current!)).filter((h) => h.slug !== slug);
		const ranked = rankBy(
			others,
			(h) => (h.citySlug === current?.citySlug ? 10 : 0) + h.specialties.filter((sp) => current?.specialties.includes(sp)).length,
		);
		return ranked.slice(0, limit).map((h) => {
			const item = bySlug.get(h.slug);
			return {
				title: item?.title ?? h.name,
				subtitle: item?.subtitle ?? `${h.city}, ${h.country}`,
				href: item?.href ?? `${prefix}hospitals/${h.slug}`,
				image: h.image,
				theme: h.theme,
			};
		});
	}

	const index = treatments.findIndex((t) => t.slug === slug);
	return rotateAfter(treatments, index)
		.filter((t) => t.slug !== slug)
		.slice(0, limit)
		.map((t) => {
			const item = bySlug.get(t.slug);
			return {
				title: item?.title ?? t.name,
				subtitle: item?.subtitle ?? t.shortDescription,
				href: item?.href ?? `${prefix}treatments/${t.slug}`,
				image: t.imageKey ? TREATMENT_IMAGES[t.imageKey] : undefined,
				theme: t.theme,
			};
		});
}
