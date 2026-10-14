/**
 * French translations for src/data/destinations.ts.
 * Keyed by slug. Numeric fields (hospitalsCount, avgSavings) are reused from the English source.
 */

export interface DestinationDataFr {
	description: string;
	popularTreatments: string[];
}

export const frDestinations: Record<string, DestinationDataFr> = {
	'delhi-ncr': {
		description:
			"La région capitale de l'Inde, siège des plus grands hôpitaux multi-spécialités, à la pointe en cardiologie et en neurologie avancées.",
		popularTreatments: ['Chirurgie cardiaque', 'Neurologie', 'Orthopédie'],
	},
	mumbai: {
		description:
			"La capitale financière de l'Inde, avec des hôpitaux accrédités à l'international réputés pour leurs soins en cancérologie et en greffe d'organes.",
		popularTreatments: ['Oncologie', "Greffe d'organe", 'Chirurgie cardiaque'],
	},
	chennai: {
		description:
			"Connue comme la capitale médicale de l'Inde, avec des décennies d'expérience dans le traitement des patients internationaux dans toutes les spécialités.",
		popularTreatments: ['Chirurgie cardiaque', 'Orthopédie', 'Traitement de la fertilité'],
	},
	bangalore: {
		description:
			"Un pôle de santé technologique en plein essor, associant des chirurgiens de premier plan à certains des centres de remplacement articulaire les plus avancés du pays.",
		popularTreatments: ['Orthopédie', 'Chirurgie esthétique', 'Chirurgie cardiaque'],
	},
	hyderabad: {
		description:
			"Un pôle médical en croissance rapide doté d'hôpitaux de pointe spécialisés dans la greffe du rein et d'organes.",
		popularTreatments: ["Greffe d'organe", 'Néphrologie', 'Oncologie'],
	},
	kochi: {
		description:
			"Le berceau de l'Ayurveda, alliant soins de bien-être traditionnels et excellence en fertilité et santé de la femme.",
		popularTreatments: ['Traitement de la fertilité', 'Ayurveda et bien-être', 'Chirurgie cardiaque'],
	},
	kolkata: {
		description:
			"Le principal pôle médical de l'Inde de l'Est, abritant certains des instituts d'ophtalmologie et de cancérologie les plus respectés du pays.",
		popularTreatments: ['Soins oculaires', 'Oncologie', 'Orthopédie'],
	},
	ahmedabad: {
		description:
			"La capitale médicale du Gujarat, offrant des soins de greffe du foie et du rein abordables et de haute qualité dans des campus hospitaliers modernes.",
		popularTreatments: ['Greffe du foie', 'Greffe du rein', 'Chirurgie cardiaque'],
	},
};

export const getFrDestination = (slug: string) => frDestinations[slug];
