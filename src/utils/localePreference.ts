import { SITE_LOCALES, type SiteLocale } from '../i18n/siteUi';

const localeRoutes: Record<SiteLocale, string> = {
	en: '/',
	fr: '/fr/',
	ru: '/ru/',
	bn: '/bn/',
	ro: '/ro/',
	es: '/es/',
	pt: '/pt/',
	vi: '/vi/',
	ar: '/ar/',
};

export function isSiteLocale(locale: string): locale is SiteLocale {
	return SITE_LOCALES.includes(locale as SiteLocale);
}

export function rememberLocalePreference(locale: SiteLocale): void {
	const expires = new Date();
	expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000);
	document.cookie = `site_locale=${locale};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function stripLocalePrefix(pathname: string): string {
	const match = pathname.match(/^\/(fr|ru|bn|ro|es|pt|vi|ar)(\/.*)?$/);
	if (!match) return pathname;
	return match[2] && match[2] !== '/' ? match[2] : '/';
}

export function targetUrlForLocale(locale: SiteLocale): string {
	const alternate = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${locale}"]`);
	if (alternate) return new URL(alternate.href).pathname;

	const basePath = stripLocalePrefix(window.location.pathname);
	const procedureMatch = basePath.match(/^(\/treatments\/[^/]+)\/[^/]+\/?$/);
	if (procedureMatch) {
		const categoryPath = procedureMatch[1];
		return locale === 'en' ? categoryPath : `/${locale}${categoryPath}`;
	}

	return localeRoutes[locale];
}
