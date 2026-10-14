import type { ImageMetadata } from 'astro';
import { doctors } from '../data/doctors';
import { hospitals } from '../data/hospitals';
import { treatments } from '../data/treatments';
import imgCardiacCare from '../assets/treatments/cardiac-care.jpg';
import imgOrthopedics from '../assets/treatments/orthopedics2.jpg';
import imgOncology from '../assets/treatments/oncology2.jpg';
import imgCosmeticSurgery from '../assets/treatments/cosmetic-surgery2.jpg';
import imgFertility from '../assets/treatments/fertility2.png';
import imgOrganTransplant from '../assets/treatments/organ-transplant2.jpg';
import imgDentalCare from '../assets/treatments/oral.avif';
import imgEyeCare from '../assets/treatments/eye-care2.jpg';
import imgUrology from '../assets/treatments/urology.jpg';
import imgNeurology from '../assets/treatments/neuro.jpg';
import imgSpineSurgery from '../assets/treatments/spine.jpg';
import imgBariatric from '../assets/treatments/Bariatric.png';
import { translateDoctor } from '../i18n/doctorsTranslate';
import { localizeCity, localizeHospitalName, type HospitalLocale } from '../i18n/hospitalNames';
import { frDoctorsTr } from '../i18n/fr-doctors';
import { esDoctorsTr } from '../i18n/es-doctors';
import { ptDoctorsTr } from '../i18n/pt-doctors';
import { ruDoctorsTr } from '../i18n/ru-doctors';
import { bnDoctorsTr } from '../i18n/bn-doctors';
import { roDoctorsTr } from '../i18n/ro-doctors';
import { viDoctorsTr } from '../i18n/vi-doctors';
import { arDoctorsTr } from '../i18n/ar-doctors';
import { frTreatments } from '../i18n/fr-treatments';
import { esTreatments } from '../i18n/es-treatments';
import { ptTreatments } from '../i18n/pt-treatments';
import { ruTreatments } from '../i18n/ru-treatments';
import { bnTreatments } from '../i18n/bn-treatments';
import { roTreatments } from '../i18n/ro-treatments';
import { viTreatments } from '../i18n/vi-treatments';
import { arTreatments } from '../i18n/ar-treatments';

const doctorTrByLocale: Record<string, typeof frDoctorsTr | undefined> = {
	fr: frDoctorsTr,
	es: esDoctorsTr,
	pt: ptDoctorsTr,
	ru: ruDoctorsTr,
	bn: bnDoctorsTr,
	ro: roDoctorsTr,
	vi: viDoctorsTr,
	ar: arDoctorsTr,
};

const treatmentTrByLocale: Record<string, Record<string, { name: string; shortDescription: string }> | undefined> = {
	fr: frTreatments,
	es: esTreatments,
	pt: ptTreatments,
	ru: ruTreatments,
	bn: bnTreatments,
	ro: roTreatments,
	vi: viTreatments,
	ar: arTreatments,
};

export interface SearchItem {
	/** Group this result belongs to. */
	type: 'doctor' | 'hospital' | 'treatment';
	/** Primary label shown in the results list. */
	title: string;
	/** Secondary line shown under the title. */
	subtitle: string;
	/** Fully-formed link, already locale-prefixed. */
	href: string;
	/** Lowercased, accent-stripped text this entry is matched against. */
	haystack: string;
	/** Resolved image URL, if this entry has a photo — falls back to a type icon when absent. */
	image?: string;
}

const TREATMENT_IMAGES: Record<string, ImageMetadata> = {
	cardiacCare: imgCardiacCare,
	orthopedics: imgOrthopedics,
	oncology: imgOncology,
	cosmeticSurgery: imgCosmeticSurgery,
	fertility: imgFertility,
	organTransplant: imgOrganTransplant,
	dentalCare: imgDentalCare,
	eyeCare: imgEyeCare,
	urology: imgUrology,
	neurology: imgNeurology,
	spineSurgery: imgSpineSurgery,
	bariatric: imgBariatric,
};

/** Normalizes an astro:assets ImageMetadata or a plain public/ URL string into a URL string. */
const resolveImage = (image: ImageMetadata | string | undefined): string | undefined =>
	typeof image === 'string' ? image : image?.src;

const normalize = (value: string) =>
	value
		.toLowerCase()
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '');

/**
 * Builds the flat, locale-aware search index (doctors + hospitals + treatments)
 * used by SearchBar.astro. Cheap enough (≈125 items) to rebuild per page.
 */
export function buildSearchIndex(locale = 'en'): SearchItem[] {
	const prefix = locale === 'en' ? '/' : `/${locale}/`;
	const doctorTr = doctorTrByLocale[locale];
	const treatmentTr = treatmentTrByLocale[locale];

	const doctorItems: SearchItem[] = doctors.map((doctor) => {
		const localized = doctorTr ? translateDoctor(doctor, doctorTr) : doctor;
		return {
			type: 'doctor',
			title: localized.name,
			subtitle: `${localized.specialty} · ${localized.hospital}`,
			href: `${prefix}doctors/${doctor.slug}`,
			haystack: normalize(
				`${doctor.name} ${localized.name} ${doctor.specialty} ${localized.specialty} ${doctor.hospital} ${localized.hospital} ${doctor.city} ${localized.city}`,
			),
			image: resolveImage(doctor.photo),
		};
	});

	const hospitalItems: SearchItem[] = hospitals.map((hospital) => {
		const name = locale === 'en' ? hospital.name : localizeHospitalName(hospital, locale as HospitalLocale);
		const city = locale === 'en' ? hospital.city : localizeCity(hospital.city, locale as HospitalLocale);
		return {
			type: 'hospital',
			title: name,
			subtitle: `${city}, ${hospital.country}`,
			href: `${prefix}hospitals/${hospital.slug}`,
			haystack: normalize(`${hospital.name} ${name} ${hospital.city} ${city} ${hospital.country} ${hospital.specialties.join(' ')}`),
			image: resolveImage(hospital.image),
		};
	});

	const treatmentItems: SearchItem[] = treatments.map((treatment) => {
		const localized = treatmentTr?.[treatment.slug];
		const name = localized?.name ?? treatment.name;
		return {
			type: 'treatment',
			title: name,
			subtitle: localized?.shortDescription ?? treatment.shortDescription,
			href: `${prefix}treatments/${treatment.slug}`,
			haystack: normalize(`${treatment.name} ${name}`),
			image: treatment.imageKey ? resolveImage(TREATMENT_IMAGES[treatment.imageKey]) : undefined,
		};
	});

	return [...doctorItems, ...hospitalItems, ...treatmentItems];
}
