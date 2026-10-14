import type { DoctorData } from '../data/doctors';

/**
 * Translated doctor copy for one locale, keyed by doctor slug. Every field is
 * optional: anything missing falls back to the English text in data/doctors.ts.
 * Array fields (education, experience, memberships, testimonials) are matched
 * to the English array by index — translate in the same order, same length;
 * a shorter array only covers that many leading entries.
 */
export interface DoctorTranslationEducation {
	degree?: string;
	institution?: string;
}

export interface DoctorTranslationExperience {
	role?: string;
	place?: string;
	period?: string;
}

export interface DoctorTranslationTestimonial {
	name?: string;
	country?: string;
	text?: string;
}

export interface DoctorTranslation {
	name?: string;
	specialty?: string;
	title?: string;
	qualification?: string;
	hospital?: string;
	city?: string;
	languages?: string[];
	about?: string;
	specializations?: string[];
	education?: DoctorTranslationEducation[];
	experience?: DoctorTranslationExperience[];
	awards?: string[];
	memberships?: string[];
	testimonials?: DoctorTranslationTestimonial[];
}

export type DoctorTranslations = Record<string, DoctorTranslation>;

export function translateDoctor(doctor: DoctorData, translations: DoctorTranslations): DoctorData {
	const tr = translations[doctor.slug];
	if (!tr) return doctor;
	return {
		...doctor,
		name: tr.name ?? doctor.name,
		specialty: tr.specialty ?? doctor.specialty,
		title: tr.title ?? doctor.title,
		qualification: tr.qualification ?? doctor.qualification,
		hospital: tr.hospital ?? doctor.hospital,
		city: tr.city ?? doctor.city,
		languages: tr.languages ?? doctor.languages,
		about: tr.about ?? doctor.about,
		specializations: tr.specializations ?? doctor.specializations,
		education: doctor.education.map((entry, i) => ({
			...entry,
			degree: tr.education?.[i]?.degree ?? entry.degree,
			institution: tr.education?.[i]?.institution ?? entry.institution,
		})),
		experience: doctor.experience.map((entry, i) => ({
			...entry,
			role: tr.experience?.[i]?.role ?? entry.role,
			place: tr.experience?.[i]?.place ?? entry.place,
			period: tr.experience?.[i]?.period ?? entry.period,
		})),
		awards: doctor.awards.map((award, i) => ({ ...award, title: tr.awards?.[i] ?? award.title })),
		memberships: tr.memberships ?? doctor.memberships,
		testimonials: doctor.testimonials.map((testimonial, i) => ({
			...testimonial,
			name: tr.testimonials?.[i]?.name ?? testimonial.name,
			country: tr.testimonials?.[i]?.country ?? testimonial.country,
			text: tr.testimonials?.[i]?.text ?? testimonial.text,
		})),
	};
}

export const translateDoctors = (doctors: DoctorData[], translations: DoctorTranslations) =>
	doctors.map((doctor) => translateDoctor(doctor, translations));
