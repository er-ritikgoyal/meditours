/**
 * French translations for the remaining homepage-only sections:
 * OurDoctors, OurPartnerHospitals (homepage heading), SupportServices, TravelProcess.
 */

export const frDoctors = {
	badge: 'Notre équipe médicale',
	title: 'Des médecins qui',
	highlight: "prennent soin de vous",
	subtitle:
		'Des spécialistes certifiés, affiliés à des hôpitaux accrédités, validés pour chaque dossier que nous prenons en charge.',
	yearsExpLabel: "Ans d'exp.",
	reviewsLabel: 'Avis',
	contactLabel: 'Nous contacter',
	verifiedLabel: 'Spécialiste vérifié',
	doctors: [
		{
			specialty: 'Chirurgien cardiaque',
			qualification: 'MBBS, MS, MCh — Chirurgie cardiothoracique',
			languages: ['Anglais', 'Hindi'],
		},
		{
			specialty: 'Chirurgien orthopédiste',
			qualification: 'MBBS, MS — Orthopédie et remplacement articulaire',
			languages: ['Anglais', 'Hindi'],
		},
		{
			specialty: 'Oncologue',
			qualification: 'MBBS, MD — Oncologie médicale',
			languages: ['Anglais', 'Hindi', 'Malayalam'],
		},
		{
			specialty: 'Chirurgien esthétique et plastique',
			qualification: 'MD — Chirurgie plastique, reconstructrice et esthétique',
			languages: ['Anglais', 'Hindi'],
		},
		{
			specialty: 'Neurologue',
			qualification: 'MBBS, DM — Neurologie',
			languages: ['Anglais', 'Hindi', 'Tamoul'],
		},
		{
			specialty: 'Spécialiste de la fertilité',
			qualification: 'MD — Endocrinologie de la reproduction',
			languages: ['Anglais', 'Espagnol'],
		},
	],
};

export const frPartnerHospitalsHome = {
	badge: 'Notre réseau',
	title: 'Nos hôpitaux',
	highlight: 'partenaires',
	subtitle: 'Nous ne travaillons qu\'avec des hôpitaux accrédités répondant aux normes internationales de sécurité, d\'hygiène et de résultats cliniques.',
};

export const frSupportServices = {
	badge: 'Assistance patient',
	titleLead: 'Une assistance qui vous accompagne,',
	titleHighlight: 'où que vous soyez',
	subtitle: 'De votre visa à votre rétablissement une fois rentré chez vous, nos coordinateurs sont avec vous à chaque étape du parcours.',
	services: [
		{
			icon: 'passport' as const,
			title: 'Assistance visa médical',
			description: "Nos spécialistes préparent les lettres d'invitation et les documents, pour que votre visa médical soit approuvé sans délai.",
			theme: 'blue' as const,
		},
		{
			icon: 'video' as const,
			title: 'Téléconsultation vidéo',
			description: 'Échangez en face à face en ligne avec votre spécialiste pour confirmer votre diagnostic et votre plan de traitement avant de voyager.',
			theme: 'teal' as const,
		},
		{
			icon: 'translate' as const,
			title: "Services d'interprétation linguistique",
			description: 'Un interprète médical certifié est présent à chaque consultation et intervention, dans la langue avec laquelle vous êtes le plus à l\'aise.',
			theme: 'green' as const,
		},
		{
			icon: 'opinion' as const,
			title: 'Second avis médical',
			description: "Obtenez un examen indépendant de votre diagnostic et de vos options de traitement par un spécialiste certifié à l'étranger.",
			theme: 'blue' as const,
		},
		{
			icon: 'care' as const,
			title: 'Coordination des soins post-traitement',
			description: 'Votre coordinateur planifie les suivis et partage les rapports avec votre médecin traitant après votre retour.',
			theme: 'teal' as const,
		},
	],
};

export const frTravelProcess = {
	badge: 'Guide étape par étape',
	titleLead: 'Parcours du patient',
	titleHighlight: 'international',
	subtitle: 'De votre première question jusqu\'à votre retour à la maison — nous sommes avec vous à chaque étape',
	steps: [
		{
			icon: 'document' as const,
			title: 'Fournissez les détails médicaux du patient',
			description: 'Partagez vos rapports et votre question — recevez un avis pertinent sous 24 heures.',
		},
		{
			icon: 'stethoscope' as const,
			title: 'Recevez un avis médical et une estimation de coût',
			description: 'Choisissez librement parmi nos meilleurs hôpitaux et médecins affiliés.',
		},
		{
			icon: 'idCard' as const,
			title: 'Recevez votre invitation pour le visa',
			description: 'Nous gérons toutes les formalités de visa médical en votre nom.',
		},
		{
			icon: 'plane' as const,
			title: 'Planifiez votre voyage',
			description: 'Hôtel, appartement ou maison d\'hôtes organisé près de l\'hôpital.',
		},
		{
			icon: 'car' as const,
			title: "Accueil à l'aéroport par nos soins",
			description: 'Accueil à l\'aéroport, transfert et carte SIM offerts.',
		},
		{
			icon: 'building' as const,
			title: 'Recevez votre traitement',
			description: 'Un interprète dédié et un gestionnaire de dossier vous accompagnent tout au long.',
		},
		{
			icon: 'home' as const,
			title: 'Retour à la maison',
			description: 'Assistance de suivi post-traitement après votre retour chez vous.',
		},
	],
};
