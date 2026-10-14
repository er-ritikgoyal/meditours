/**
 * Romanian translations for src/data/destinations.ts.
 * Keyed by slug. Numeric fields (hospitalsCount, avgSavings) are reused from the English source.
 */

export interface DestinationDataRo {
	description: string;
	popularTreatments: string[];
}

export const roDestinations: Record<string, DestinationDataRo> = {
	'delhi-ncr': {
		description:
			'Regiunea capitalei Indiei, sediul celor mai importante spitale multidisciplinare, lider în îngrijirea cardiacă și neurologică avansată.',
		popularTreatments: ['Chirurgie cardiacă', 'Neurologie', 'Ortopedie'],
	},
	mumbai: {
		description:
			'Capitala financiară a Indiei, cu spitale acreditate internațional, renumite pentru îngrijirea oncologică și transplanturile de organe.',
		popularTreatments: ['Oncologie', 'Transplant de organe', 'Chirurgie cardiacă'],
	},
	chennai: {
		description:
			'Cunoscut ca fiind capitala medicală a Indiei, cu decenii de experiență în tratarea pacienților internaționali în toate specialitățile.',
		popularTreatments: ['Chirurgie cardiacă', 'Ortopedie', 'Tratament de fertilitate'],
	},
	bangalore: {
		description:
			'Un centru medical tehnologic înfloritor, care asociază chirurgi de top cu unele dintre cele mai avansate centre de înlocuire articulară din țară.',
		popularTreatments: ['Ortopedie', 'Chirurgie estetică', 'Chirurgie cardiacă'],
	},
	hyderabad: {
		description: 'Un centru medical în creștere rapidă, cu spitale ultramoderne specializate în transplanturile de rinichi și de organe.',
		popularTreatments: ['Transplant de organe', 'Nefrologie', 'Oncologie'],
	},
	kochi: {
		description:
			'Locul de naștere al Ayurvedei, care combină tratamentele tradiționale de wellness cu îngrijiri de top în fertilitate și sănătatea femeii.',
		popularTreatments: ['Tratament de fertilitate', 'Ayurveda și wellness', 'Chirurgie cardiacă'],
	},
	kolkata: {
		description: 'Principalul centru medical al Indiei de Est, găzduind unele dintre cele mai respectate institute de oftalmologie și oncologie din țară.',
		popularTreatments: ['Îngrijire oftalmologică', 'Oncologie', 'Ortopedie'],
	},
	ahmedabad: {
		description:
			'Capitala medicală a statului Gujarat, oferind îngrijiri accesibile și de înaltă calitate pentru transplantul de ficat și rinichi în campusuri spitalicești moderne.',
		popularTreatments: ['Transplant de ficat', 'Transplant de rinichi', 'Chirurgie cardiacă'],
	},
};

export const getRoDestination = (slug: string) => roDestinations[slug];
