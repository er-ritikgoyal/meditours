import type { DoctorData } from '../data/doctors';
import { hospitals, type HospitalData } from '../data/hospitals';

/**
 * The listed hospital a doctor practises at. A doctor's `hospital` field is
 * free text ("Marengo Asia Hospitals, Faridabad"), not a slug, so match on
 * the hospital's name — preferring the branch whose city also appears, then
 * the longest (most specific) name, so "Fortis Hospital Shalimar Bagh" wins
 * over "Fortis Hospital".
 */
export function findDoctorHospital(doctor: Pick<DoctorData, 'hospital'>): HospitalData | undefined {
	const cityToken = (h: HospitalData) => h.city.split(/[,/]/)[0].trim();
	return hospitals
		.filter((h) => doctor.hospital.includes(h.name))
		.sort(
			(a, b) =>
				Number(doctor.hospital.includes(cityToken(b))) - Number(doctor.hospital.includes(cityToken(a))) ||
				b.name.length - a.name.length,
		)[0];
}

/** Photo for the doctor page's top-right box: the doctor's own clinic photo, else their hospital's photo. */
export function doctorCornerPhoto(doctor: Pick<DoctorData, 'hospital' | 'topRightPhoto'>) {
	return doctor.topRightPhoto ?? findDoctorHospital(doctor)?.image;
}
