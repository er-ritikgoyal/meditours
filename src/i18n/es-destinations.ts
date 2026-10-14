/**
 * Spanish translations for src/data/destinations.ts.
 * Keyed by slug. Numeric fields (hospitalsCount, avgSavings) are reused from the English source.
 */

export interface DestinationDataEs {
	description: string;
	popularTreatments: string[];
}

export const esDestinations: Record<string, DestinationDataEs> = {
	'delhi-ncr': {
		description:
			'La región capital de la India, sede de los hospitales multiespecialidad más importantes, líder en cardiología y neurología avanzadas.',
		popularTreatments: ['Cirugía cardíaca', 'Neurología', 'Ortopedia'],
	},
	mumbai: {
		description:
			'La capital financiera de la India, con hospitales acreditados internacionalmente, reconocidos por su atención oncológica y trasplantes de órganos.',
		popularTreatments: ['Oncología', 'Trasplante de órganos', 'Cirugía cardíaca'],
	},
	chennai: {
		description:
			'Conocida como la capital médica de la India, con décadas de experiencia atendiendo a pacientes internacionales en todas las especialidades.',
		popularTreatments: ['Cirugía cardíaca', 'Ortopedia', 'Tratamiento de fertilidad'],
	},
	bangalore: {
		description:
			'Un centro médico tecnológico en auge que combina cirujanos de primer nivel con algunos de los centros de reemplazo articular más avanzados del país.',
		popularTreatments: ['Ortopedia', 'Cirugía estética', 'Cirugía cardíaca'],
	},
	hyderabad: {
		description: 'Un centro médico de rápido crecimiento con hospitales de última generación especializados en trasplantes de riñón y de órganos.',
		popularTreatments: ['Trasplante de órganos', 'Nefrología', 'Oncología'],
	},
	kochi: {
		description:
			'La cuna del Ayurveda, que combina tratamientos de bienestar tradicionales con atención de primer nivel en fertilidad y salud de la mujer.',
		popularTreatments: ['Tratamiento de fertilidad', 'Ayurveda y bienestar', 'Cirugía cardíaca'],
	},
	kolkata: {
		description: 'El principal centro médico del este de la India, sede de algunos de los institutos de oftalmología y oncología más respetados del país.',
		popularTreatments: ['Oftalmología', 'Oncología', 'Ortopedia'],
	},
	ahmedabad: {
		description:
			'La capital médica del estado de Gujarat, que ofrece atención accesible y de alta calidad para trasplantes de hígado y riñón en modernos campus hospitalarios.',
		popularTreatments: ['Trasplante de hígado', 'Trasplante de riñón', 'Cirugía cardíaca'],
	},
};

export const getEsDestination = (slug: string) => esDestinations[slug];
