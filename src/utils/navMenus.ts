import iconPersonBadge from 'bootstrap-icons/icons/person-badge-fill.svg?raw';
import iconPeople from 'bootstrap-icons/icons/people-fill.svg?raw';
import iconHospital from 'bootstrap-icons/icons/hospital-fill.svg?raw';
import iconGeo from 'bootstrap-icons/icons/geo-alt-fill.svg?raw';
import { doctors } from '../data/doctors';
import { hospitals } from '../data/hospitals';
import { destinations } from '../data/destinations';
import { localizeCity, type HospitalLocale } from '../i18n/hospitalNames';
import { buildSearchIndex } from './searchIndex';

export interface NavChild {
	label: string;
	href: string;
	icon?: string;
}

const LABELS: Record<string, { doctors: string; allDoctors: string; hospitals: string; allDestinations: string }> = {
	en: { doctors: 'Doctors', allDoctors: 'All Doctors', hospitals: 'Hospitals', allDestinations: 'All Destinations' },
	fr: { doctors: 'Médecins', allDoctors: 'Tous les médecins', hospitals: 'Hôpitaux', allDestinations: 'Toutes les destinations' },
	es: { doctors: 'Médicos', allDoctors: 'Todos los médicos', hospitals: 'Hospitales', allDestinations: 'Todos los destinos' },
	pt: { doctors: 'Médicos', allDoctors: 'Todos os médicos', hospitals: 'Hospitais', allDestinations: 'Todos os destinos' },
	ru: { doctors: 'Врачи', allDoctors: 'Все врачи', hospitals: 'Больницы', allDestinations: 'Все направления' },
	bn: { doctors: 'ডাক্তার', allDoctors: 'সব ডাক্তার', hospitals: 'হাসপাতাল', allDestinations: 'সব গন্তব্য' },
	ro: { doctors: 'Medici', allDoctors: 'Toți medicii', hospitals: 'Spitale', allDestinations: 'Toate destinațiile' },
	vi: { doctors: 'Bác sĩ', allDoctors: 'Tất cả bác sĩ', hospitals: 'Bệnh viện', allDestinations: 'Tất cả điểm đến' },
	ar: { doctors: 'الأطباء', allDoctors: 'جميع الأطباء', hospitals: 'المستشفيات', allDestinations: 'جميع الوجهات' },
};

const cache = new Map<string, ReturnType<typeof build>>();

function build(locale: string) {
	const prefix = locale === 'en' ? '/' : `/${locale}/`;
	const l = LABELS[locale] ?? LABELS.en;

	// Localized doctor names come from the search index, which already applies
	// each locale's doctor translations.
	const doctorTitles = new Map(
		buildSearchIndex(locale)
			.filter((item) => item.type === 'doctor')
			.map((item) => [item.href.slice(item.href.lastIndexOf('/') + 1), item.title]),
	);

	const doctorChildren: NavChild[] = [
		{ label: l.allDoctors, href: `${prefix}doctors`, icon: iconPeople },
		...doctors.map((d) => ({ label: doctorTitles.get(d.slug) ?? d.name, href: `${prefix}doctors/${d.slug}`, icon: iconPersonBadge })),
	];

	// 100+ hospitals is too many for one menu, so list them by city — each
	// destination page shows that city's hospitals.
	const hospitalChildren: NavChild[] = [
		{ label: l.allDestinations, href: `${prefix}destinations`, icon: iconGeo },
		...destinations.map((dest) => {
			const city = locale === 'en' ? dest.city : localizeCity(dest.city, locale as HospitalLocale);
			const count = hospitals.filter((h) => h.citySlug === dest.slug).length;
			return { label: `${city} (${count})`, href: `${prefix}destinations/${dest.slug}`, icon: iconHospital };
		}),
	];

	return {
		doctors: { label: l.doctors, href: `${prefix}doctors`, children: doctorChildren },
		hospitals: { label: l.hospitals, href: `${prefix}destinations`, children: hospitalChildren },
	};
}

/** Navbar "Doctors" and "Hospitals" dropdown entries for a locale. */
export function getNavMenus(locale = 'en') {
	if (!cache.has(locale)) cache.set(locale, build(locale));
	return cache.get(locale)!;
}
