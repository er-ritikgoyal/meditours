import { getImage } from 'astro:assets';
import pastelIndia from '../assets/banners/pastel-india.png';

/** Breakpoint where SearchBar.astro switches to the small background. Keep in step with its CSS. */
export const SEARCH_HERO_MOBILE_MAX = 760;

/** The search banner backgrounds (desktop and phone sizes), shared by SearchBar and the preload in Layout. */
export async function getSearchHeroBackgrounds() {
	const [desktop, mobile] = await Promise.all([
		getImage({ src: pastelIndia, format: 'webp', quality: 80 }),
		getImage({ src: pastelIndia, format: 'webp', quality: 75, width: 1000 }),
	]);
	return { desktop, mobile };
}
