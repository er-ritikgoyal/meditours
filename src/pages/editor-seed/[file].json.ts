/**
 * Build-time snapshot of the site's content for the PHP admin (/editor/) and
 * the PHP page renderer (/cms/render.php). Emitted as static JSON files:
 *
 *   /editor-seed/meta.json        when this build ran + lookup lists
 *   /editor-seed/blogs.json       every blog post
 *   /editor-seed/doctors.json     every doctor
 *   /editor-seed/hospitals.json   every hospital (with address/established/certs)
 *   /editor-seed/treatments.json  every treatment (with sub-treatments)
 *
 * Images are resolved to their built URLs so PHP can show them. Nothing here
 * is secret — it is the same content the public pages already show.
 */
import type { APIRoute } from 'astro';
import type { ImageMetadata } from 'astro';
import { blogPosts } from '../../data/blog';
import { doctors } from '../../data/doctors';
import { hospitals } from '../../data/hospitals';
import { hospitalDetails } from '../../data/hospitalDetails';
import { treatments } from '../../data/treatments';
import { destinations } from '../../data/destinations';
import { TREATMENT_IMAGES } from '../../utils/searchIndex';
import { frDoctorsTr } from '../../i18n/fr-doctors';
import { ruDoctorsTr } from '../../i18n/ru-doctors';
import { bnDoctorsTr } from '../../i18n/bn-doctors';
import { roDoctorsTr } from '../../i18n/ro-doctors';
import { esDoctorsTr } from '../../i18n/es-doctors';
import { ptDoctorsTr } from '../../i18n/pt-doctors';
import { viDoctorsTr } from '../../i18n/vi-doctors';
import { arDoctorsTr } from '../../i18n/ar-doctors';
import { frTreatments } from '../../i18n/fr-treatments';
import { ruTreatments } from '../../i18n/ru-treatments';
import { bnTreatments } from '../../i18n/bn-treatments';
import { roTreatments } from '../../i18n/ro-treatments';
import { esTreatments } from '../../i18n/es-treatments';
import { ptTreatments } from '../../i18n/pt-treatments';
import { viTreatments } from '../../i18n/vi-treatments';
import { arTreatments } from '../../i18n/ar-treatments';
import { translateHospital as translateHospitalFr } from '../../i18n/fr-hospitals';
import { translateHospital as translateHospitalRu } from '../../i18n/ru-hospitals';
import { translateHospital as translateHospitalBn } from '../../i18n/bn-hospitals';
import { translateHospital as translateHospitalRo } from '../../i18n/ro-hospitals';
import { translateHospital as translateHospitalEs } from '../../i18n/es-hospitals';
import { translateHospital as translateHospitalPt } from '../../i18n/pt-hospitals';
import { translateHospital as translateHospitalVi } from '../../i18n/vi-hospitals';
import { translateHospital as translateHospitalAr } from '../../i18n/ar-hospitals';
import { blogPostTr } from '../../i18n/blog';
import { hospitalAboutFields } from '../../i18n/about';
import { getOverview } from '../../i18n/overviews';
import cmsBlogs from '../../data/cms/blogs.json';
import cmsDoctors from '../../data/cms/doctors.json';
import cmsHospitals from '../../data/cms/hospitals.json';
import cmsTreatments from '../../data/cms/treatments.json';

/**
 * Which saved editor version of each item this build contains (its save time),
 * so the PHP renderer knows when a newer save must be shown live instead.
 */
const cmsSaved: Record<string, Record<string, { _cms?: { updatedAt?: number } }>> = {
	blogs: cmsBlogs, doctors: cmsDoctors, hospitals: cmsHospitals, treatments: cmsTreatments,
};
const withVersion = (type: string) => <T extends { slug: string }>(item: T) => ({ ...item, _cmsVersion: cmsSaved[type][item.slug]?._cms?.updatedAt ?? 0 });

const LOCALES = ['fr', 'ru', 'bn', 'ro', 'es', 'pt', 'vi', 'ar'] as const;
const doctorTr = { fr: frDoctorsTr, ru: ruDoctorsTr, bn: bnDoctorsTr, ro: roDoctorsTr, es: esDoctorsTr, pt: ptDoctorsTr, vi: viDoctorsTr, ar: arDoctorsTr } as Record<string, Record<string, any>>;
const treatmentTr = { fr: frTreatments, ru: ruTreatments, bn: bnTreatments, ro: roTreatments, es: esTreatments, pt: ptTreatments, vi: viTreatments, ar: arTreatments } as Record<string, Record<string, any>>;
const hospitalTr = { fr: translateHospitalFr, ru: translateHospitalRu, bn: translateHospitalBn, ro: translateHospitalRo, es: translateHospitalEs, pt: translateHospitalPt, vi: translateHospitalVi, ar: translateHospitalAr };

/**
 * Current translations per language, for pre-filling the editor's language
 * tabs. Only fields that differ from the English text are included, so an
 * untranslated field shows as empty (with the English as a hint).
 */
function translationsFor(english: Record<string, any>, perLocale: (locale: string) => Record<string, any> | undefined, keys: string[]) {
	const out: Record<string, Record<string, unknown>> = {};
	for (const locale of LOCALES) {
		const tr = perLocale(locale);
		if (!tr) continue;
		const fields: Record<string, unknown> = {};
		for (const key of keys) {
			if (tr[key] === undefined || tr[key] === null) continue;
			if (JSON.stringify(tr[key]) !== JSON.stringify(english[key])) fields[key] = tr[key];
		}
		if (Object.keys(fields).length) out[locale] = fields;
	}
	return out;
}


/** A hospital's write-up sections and overview as editor fields, in one language. */
const writeUpFields = (slug: string, locale: string, name: string) => {
	const overview = getOverview(slug, locale, name, name);
	return { ...hospitalAboutFields(slug, locale), ...(overview ? { overview } : {}) };
};

const url = (image: ImageMetadata | string | undefined) => (typeof image === 'string' ? image : image?.src ?? '');

const files: Record<string, () => unknown> = {
	meta: () => ({
		builtAt: new Date().toISOString(),
		destinations: destinations.map((d) => ({ slug: d.slug, city: d.city })),
		treatmentImages: Object.fromEntries(Object.entries(TREATMENT_IMAGES).map(([key, img]) => [key, url(img)])),
	}),
	blogs: () =>
		blogPosts.map(withVersion('blogs')).map((post) => ({
			...post,
			image: url(post.image),
			i18n: translationsFor(post, (l) => blogPostTr[l as keyof typeof blogPostTr]?.[post.slug], ['title', 'excerpt', 'category', 'body']),
		})),
	doctors: () =>
		doctors.map(withVersion('doctors')).map((doctor) => ({
			...doctor,
			photo: url(doctor.photo),
			bannerPhoto: url(doctor.bannerPhoto),
			topRightPhoto: url(doctor.topRightPhoto),
			i18n: translationsFor(
				{ ...doctor, awards: doctor.awards.map((a) => ({ title: a.title })) },
				(l) => {
					const tr = doctorTr[l]?.[doctor.slug];
					return tr && { ...tr, awards: tr.awards?.map((title: string) => ({ title })) };
				},
				['name', 'specialty', 'title', 'qualification', 'hospital', 'city', 'languages', 'about', 'specializations', 'education', 'experience', 'awards', 'memberships'],
			),
		})),
	hospitals: () =>
		hospitals.map(withVersion('hospitals')).map((hospital) => {
			const details = hospitalDetails[hospital.slug];
			return {
				...hospital,
				image: url(hospital.image),
				address: details?.address ?? '',
				established: details?.established ?? null,
				certs: details?.certs ?? [],
				...writeUpFields(hospital.slug, 'en', hospital.name),
				// The short "about" is left out: a translated one saved in the editor replaces the long per-language write-up.
				i18n: translationsFor(
					{ ...hospital, ...writeUpFields(hospital.slug, 'en', hospital.name) },
					(l) => ({ ...hospitalTr[l as keyof typeof hospitalTr](hospital), ...writeUpFields(hospital.slug, l, hospital.name) }),
					['name', 'city', 'accreditation', 'specialties', 'beds', 'aboutHistory', 'aboutSpecialities', 'aboutTechnology', 'aboutInternational', 'overview'],
				),
			};
		}),
	treatments: () =>
		treatments.map(withVersion('treatments')).map((t) => ({
			...t,
			detailedProcedures: t.detailedProcedures?.map((p) => ({ ...p, image: url(p.image) })),
			i18n: translationsFor(t, (l) => treatmentTr[l]?.[t.slug], ['name', 'shortDescription', 'overview', 'procedures', 'benefits', 'detailedProcedures', 'flagshipProcedure', 'inclusions', 'exclusions', 'faqs']),
		})),
};

export function getStaticPaths() {
	return Object.keys(files).map((file) => ({ params: { file } }));
}

export const GET: APIRoute = ({ params }) =>
	new Response(JSON.stringify(files[params.file as string]()), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
