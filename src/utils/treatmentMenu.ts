import { arTreatments } from '../i18n/ar-treatments';
import { bnTreatments } from '../i18n/bn-treatments';
import { esTreatments } from '../i18n/es-treatments';
import { frTreatments } from '../i18n/fr-treatments';
import { ptTreatments } from '../i18n/pt-treatments';
import { roTreatments } from '../i18n/ro-treatments';
import { ruTreatments } from '../i18n/ru-treatments';
import { viTreatments } from '../i18n/vi-treatments';
import { SITE_LOCALES, type SiteLocale } from '../i18n/siteUi';
import type { TreatmentData } from '../data/treatments';

const translations: Partial<Record<SiteLocale, Record<string, { name: string }>>> = {
	ar: arTreatments,
	bn: bnTreatments,
	es: esTreatments,
	fr: frTreatments,
	pt: ptTreatments,
	ro: roTreatments,
	ru: ruTreatments,
	vi: viTreatments,
};

const entLabels: Partial<Record<SiteLocale, string>> = {
	bn: 'কান, নাক ও গলা',
	es: 'Otorrinolaringología',
	pt: 'Otorrinolaringologia',
	ro: 'Otorinolaringologie',
	ru: 'Оториноларингология',
	vi: 'Tai Mũi Họng',
};

export function getTreatmentMenuLabel(locale: string, treatment: Pick<TreatmentData, 'slug' | 'name'>): string {
	const supportedLocale = SITE_LOCALES.find((siteLocale) => siteLocale === locale);
	if (!supportedLocale || supportedLocale === 'en') return treatment.name;

	const translatedName = translations[supportedLocale]?.[treatment.slug]?.name;
	if (translatedName) return translatedName;
	if (treatment.slug === 'ent-care') return entLabels[supportedLocale] ?? treatment.name;
	return treatment.name;
}
