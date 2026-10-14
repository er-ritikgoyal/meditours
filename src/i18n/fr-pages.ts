/**
 * French translations for page-level chrome on About, Contact, Destinations,
 * and Treatments (list + detail). Deep per-item content lives in
 * fr-treatments.ts / fr-destinations.ts; this file covers headings, labels,
 * form copy, and other component props for those pages.
 */

export const frAbout = {
	pageHeader: {
		badge: 'Depuis le premier jour',
		title: 'Qui nous sommes,',
		highlight: 'et pourquoi cela compte',
		subtitle:
			"Nous sommes une équipe de coordinateurs de patients, de réviseurs médicaux et de spécialistes en logistique qui pensons que des soins de classe mondiale ne devraient pas dépendre de votre lieu de résidence.",
	},
	story: {
		badge: 'Notre histoire',
		titleLead: 'Conçus pour rendre des soins de classe mondiale',
		titleHighlight: 'accessibles à tous',
		paragraphs: [
			"Alis Pro Med Tour a été fondée pour combler l'écart entre les soins médicaux de classe mondiale et leur coût. Nous croyons que l'endroit où vous êtes né ne devrait pas déterminer si vous pouvez vous permettre l'intervention dont vous avez besoin. Depuis notre création, nous avons accompagné des milliers de patients — du premier avis médical au rétablissement complet — à travers les hôpitaux les plus accrédités d'Inde, permettant aux familles d'économiser des sommes qui changent une vie, sans jamais transiger sur la qualité.",
			"Ce qui a commencé comme une petite équipe de coordinateurs de patients est devenu un réseau de conciergerie complet couvrant 45 pays, avec des comités de révision médicale internes, des spécialistes des visas dédiés et une assistance multilingue 24 h/24 et 7 j/7 — car naviguer dans le système de santé d'un pays étranger ne devrait jamais donner l'impression de le faire seul.",
		],
		statsLabels: ['Hôpitaux partenaires', 'Pays desservis', 'Assistance patients', 'Patients accompagnés'],
		valuesTitle: 'Nos valeurs',
		values: [
			{
				title: "L'humain d'abord",
				description:
					"Chaque décision part de ce qui est le mieux pour le patient devant nous — pas de ce qui est le plus rapide ou le plus rentable.",
			},
			{
				title: 'Transparence radicale',
				description: 'Tarifs clairs, délais honnêtes et aucun frais caché. Ce que nous annonçons est ce que vous payez.',
			},
			{
				title: 'Excellence clinique',
				description: "Nous ne travaillons qu'avec des hôpitaux accrédités JCI et NABH et des spécialistes au parcours vérifié.",
			},
			{
				title: 'Toujours responsables',
				description:
					'De votre premier message à votre dernier appel de suivi, un seul coordinateur suit votre dossier du début à la fin.',
			},
		],
	},
	journey: {
		badge: 'Notre parcours',
		titleLead: 'Une décennie à bâtir la confiance',
		titleHighlight: 'de nos patients',
		subtitle: "D'une petite équipe de coordinateurs à un réseau de patients présent dans 45 pays.",
		milestones: [
			{ title: 'Fondation à Mumbai', description: "Alis Pro Med Tour se lance avec une poignée d'hôpitaux partenaires à Delhi et Mumbai." },
			{
				title: "Le réseau d'accréditation s'agrandit",
				description: "Extension à plus de 100 hôpitaux accrédités JCI et NABH dans les principaux pôles médicaux d'Inde.",
			},
			{
				title: 'Expansion mondiale',
				description: 'Début de la prise en charge de patients venant de plus de 20 pays, avec une assistance dédiée pour les visas et les voyages.',
			},
			{
				title: 'Cap des 5 000 patients',
				description: 'Franchissement du cap des 5 000 patients internationaux traités avec succès, malgré les perturbations mondiales des voyages.',
			},
			{
				title: 'Lancement de la conciergerie 24 h/24',
				description: "Mise en place d'une assistance patient multilingue permanente et de coordinateurs de dossier dédiés.",
			},
			{
				title: '45 pays, plus de 12 000 patients',
				description: 'Accompagnement de patients venant de 45 pays à travers plus de 500 hôpitaux partenaires à travers le pays.',
			},
		],
	},
	testimonials: {
		badge: 'Témoignages de patients',
		title: 'Ce que disent nos',
		highlight: 'patients',
		subtitle: 'Des résultats réels de patients qui nous ont fait confiance pour leurs soins.',
		items: [
			{
				quote:
					"Depuis mon tout premier message jusqu'au jour où je suis rentré chez moi rétabli, chaque étape a été gérée avec soin. L'équipe cardiaque de Delhi m'a offert une seconde vie, et j'ai payé une fraction de ce que cela m'aurait coûté chez moi.",
				name: 'James Whitfield',
				countryCode: 'gb',
				country: 'Royaume-Uni',
				treatment: 'Pontage cardiaque',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					"J'étais nerveuse à l'idée de voyager à l'étranger pour une opération, mais ma coordinatrice répondait à toutes mes questions même à 2h du matin s'il le fallait. L'hôpital d'Istanbul ressemblait plus à un hôtel cinq étoiles qu'à une clinique.",
				name: 'Amara Okafor',
				countryCode: 'ng',
				country: 'Nigéria',
				treatment: 'Chirurgie esthétique',
				rating: 5,
				theme: 'teal' as const,
			},
			{
				quote:
					"Nous avons économisé plus de 40 000 $ sur la chirurgie de la colonne de ma fille sans compromis sur la qualité. Le chirurgien de Bangkok, formé aux États-Unis, cela se voyait dans chaque détail de ses soins.",
				name: 'Michael Chen',
				countryCode: 'ca',
				country: 'Canada',
				treatment: 'Orthopédie pédiatrique',
				rating: 5,
				theme: 'green' as const,
			},
			{
				quote:
					"Assistance visa, accueil à l'aéroport, interprète, hôtel proche de l'hôpital — ils avaient pensé à tout pour que je puisse me concentrer sur ma guérison. Je n'aurais pas pu gérer ce voyage seule.",
				name: 'Sofia Marchetti',
				countryCode: 'it',
				country: 'Italie',
				treatment: 'Traitement de la fertilité',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					"Le comité médical m'a mis en relation avec un spécialiste qui traite réellement ma pathologie exacte régulièrement, pas seulement en général. Cette expertise a fait toute la différence dans ma guérison.",
				name: 'David Okoye',
				countryCode: 'us',
				country: 'États-Unis',
				treatment: 'Oncologie',
				rating: 4,
				theme: 'teal' as const,
			},
			{
				quote:
					"Les appels de suivi ont continué pendant des mois après mon retour. On n'a jamais eu l'impression que la relation s'arrêtait à l'aéroport — ils se souciaient vraiment de l'avancée de ma guérison.",
				name: 'Hana Yamamoto',
				countryCode: 'jp',
				country: 'Japon',
				treatment: 'Remplacement articulaire',
				rating: 5,
				theme: 'green' as const,
			},
		],
	},
	faq: {
		badge: 'Des questions ?',
		title: 'À propos de nous,',
		highlight: 'en clair',
		subtitle: "Les questions que nous entendons le plus souvent de la part des patients envisageant un traitement à l'étranger.",
	},
};

export const frContact = {
	pageHeader: {
		badge: 'Nous sommes là pour vous aider',
		title: 'Contactez',
		highlight: 'notre équipe',
		subtitle:
			"Des questions sur un traitement, un coût ou la logistique du voyage ? Un coordinateur de patients répond généralement en quelques heures.",
	},
	quickOptions: [
		{ title: 'Appelez-nous', detail: '+91 98217 01155' },
		{ title: 'WhatsApp', detail: 'Discutez avec un coordinateur' },
		{ title: 'Écrivez-nous', detail: 'care@alispromeditours.com' },
	],
	form: {
		heading: 'Envoyez-nous un message',
		subheading: 'Partagez quelques détails et notre équipe médicale vous recontactera avec les prochaines étapes.',
		fullName: 'Nom complet',
		fullNamePlaceholder: 'Votre nom complet',
		emailAddress: 'Adresse e-mail',
		emailPlaceholder: 'vous@exemple.com',
		country: 'Pays',
		selectCountryPlaceholder: '---Sélectionnez un pays---',
		treatmentOfInterest: 'Traitement recherché',
		selectTreatmentPlaceholder: 'Sélectionnez un traitement',
		phoneWhatsapp: 'Téléphone / WhatsApp',
		phonePlaceholder: '555 123 4567',
		message: 'Message',
		messagePlaceholder: 'Parlez-nous de votre condition, de votre calendrier ou de toute question que vous pourriez avoir...',
		medicalReports: 'Rapports médicaux (facultatif)',
		fileHint: "PDF ou JPG, jusqu'à 5 Mo",
		submit: 'Envoyer le message',
		successMessage: 'Merci de nous avoir contactés — un coordinateur de patients vous contactera sous peu.',
	},
	info: {
		heading: 'Coordonnées',
		officeAddressLabel: 'Adresse du bureau',
		phoneLabel: 'Téléphone',
		emailLabel: 'E-mail',
		supportHoursLabel: "Horaires d'assistance",
		supportHoursValue: '24 h/24 et 7 j/7',
		coordinatorLabel: 'Coordinateur dédié',
		coordinatorDetail: 'Attribué dans les 24 heures suivant votre premier message',
		noteText: "Vous préférez en discuter d'abord ? Contactez-nous sur WhatsApp et nous vous rappellerons dans l'heure.",
	},
	treatmentOptions: [
		'Soins cardiaques',
		'Orthopédie',
		'Oncologie',
		'Chirurgie esthétique et plastique',
		'Traitement de la fertilité',
		"Greffe d'organe",
		'Soins dentaires',
		'Soins oculaires',
		'Autre',
	],
};

export const frDestinationsPage = {
	grid: {
		badge: 'Pôles médicaux à travers l\'Inde',
		title: 'Découvrez les meilleurs',
		highlight: 'pôles médicaux indiens',
		subtitle: "Chaque ville ci-dessous abrite des hôpitaux accrédités JCI ou NABH, validés par notre comité médical.",
		exploreLabel: 'Découvrir la destination',
	},
	detail: {
		verifiedBadge: 'Réseau partenaire vérifié',
		hospitalsInLabel: 'Hôpitaux à',
		hospitalsInSubtitleTemplate: (city: string) =>
			`Hôpitaux accrédités à ${city}, validés par notre comité médical pour la sécurité, l'hygiène et les résultats cliniques.`,
		soonTitleTemplate: (city: string) => `Les profils d'hôpitaux pour ${city} arrivent bientôt`,
		soonBodyTemplate: (city: string) =>
			`Nous intégrons des hôpitaux partenaires nommés pour ${city}. En attendant, partagez votre dossier avec un coordinateur et nous vous mettrons directement en relation avec un hôpital accrédité.`,
		talkToCoordinator: 'Parler à un coordinateur',
		otherHubsTitle: 'Autres pôles médicaux',
	},
};

export const frTreatmentsPage = {
	grid: {
		badge: 'Nos spécialités',
		title: 'Traitements dans lesquels nous',
		highlight: 'sommes spécialisés',
		subtitle: 'Des spécialistes certifiés dans toutes les grandes spécialités, dans des hôpitaux accrédités à travers le monde.',
		searchPlaceholder: 'Rechercher un traitement — ex. cardiaque, dentaire, chirurgie esthétique...',
		searchAriaLabel: 'Rechercher des traitements',
		clearAriaLabel: 'Effacer la recherche',
		showingCountTemplate: (visible: number, total: number) => `Affichage de ${visible} sur ${total} traitements`,
		noResultsTitle: 'Aucun traitement trouvé',
		noResultsBody: 'Essayez un autre terme de recherche, ou parcourez toutes nos spécialités ci-dessus.',
		fromPrefix: 'À partir de',
		learnMore: 'En savoir plus',
	},
	costComparison: {
		title: 'Comparer les coûts de traitement dans le monde',
		subtitle:
			"Bénéficiez de soins de santé de classe mondiale en Inde tout en économisant jusqu'à 80 % sur les coûts de traitement, sans compromis sur la qualité.",
		note: "Tous les prix sont des moyennes approximatives en USD et peuvent varier selon l'hôpital, le spécialiste et la complexité du cas.",
		scrollHint: "Faites glisser vers la gauche pour comparer les 5 pays, y compris l'Inde",
		mostAffordable: 'Le plus abordable',
		saveTemplate: (pct: number) => `Économisez ${pct} %`,
		countries: { usa: 'États-Unis', uk: 'Royaume-Uni', germany: 'Allemagne', uae: 'É.A.U.', india: 'Inde' },
		treatmentNames: {
			'Heart Bypass Surgery': 'Pontage cardiaque',
			'Knee Replacement': 'Prothèse de genou',
			'Hip Replacement': 'Prothèse de hanche',
			'IVF Treatment': 'Traitement FIV',
			'Dental Implant': 'Implant dentaire',
			'Spinal Fusion': 'Fusion vertébrale',
			'Liver Transplant': 'Greffe du foie',
			'Kidney Transplant': 'Greffe du rein',
			'Cataract Surgery': 'Chirurgie de la cataracte',
		} as Record<string, string>,
		stats: [
			{ title: "Économisez jusqu'à 80 %", description: 'Par rapport aux pays occidentaux' },
			{ title: 'Hôpitaux de classe mondiale', description: 'Accrédités JCI et NABH' },
			{ title: 'Spécialistes expérimentés', description: 'Médecins reconnus mondialement' },
		],
	},
	detail: {
		savingsBadgeTemplate: (pct: number) => `Économisez jusqu'à ${pct} %`,
		overviewHeading: 'Aperçu',
		proceduresHeading: 'Interventions proposées',
		whyChooseTemplate: (name: string) => `Pourquoi choisir l'Inde pour ${name}`,
		startingPriceLabel: 'Prix de départ',
		avgSavingsLabel: 'Économie moyenne',
		partnerHospitalsLabel: 'Hôpitaux partenaires',
		packageHeading: 'Coût du forfait et séjour hospitalier',
		sampleBadgeTemplate: (procedure: string) => `Exemple de forfait : ${procedure}`,
		packageIntroTemplate: (priceHtml: string, daysHtml: string) =>
			`Le forfait démarre à partir de ${priceHtml} — prévoyez environ ${daysHtml} en Inde, de l'arrivée à la sortie et au suivi.`,
		patientStayLabel: 'Séjour du patient',
		donorStayLabel: 'Séjour du donneur',
		outpatientText: 'Intervention ambulatoire / le jour même',
		daysTotalTemplate: (total: number, icu: number, room: number) =>
			`${total} jours au total — ${icu} en soins intensifs + ${room} en chambre`,
		tableHeaders: { country: 'Pays', cost: 'Coût estimé', waitTime: "Délai d'attente", successRate: 'Taux de réussite' },
		inclusionsHeading: 'Inclusions du forfait',
		exclusionsHeading: 'Exclusions du forfait',
		packageNoteTemplate: (procedure: string) =>
			`Chaque cas est différent — les chiffres ci-dessus sont des points de départ indicatifs pour ${procedure}. Partagez vos rapports médicaux pour un devis personnalisé et détaillé.`,
		ctaHeadingTemplate: (name: string) => `Prêt à commencer avec ${name} ?`,
		ctaBody: 'Partagez vos rapports médicaux et recevez un plan de traitement personnalisé sous 24 heures.',
		getFreeQuote: 'Obtenir un devis gratuit',
		browseAll: 'Parcourir tous les traitements',
		otherTreatmentsHeading: 'Autres traitements',
	},
	faq: {
		badge: 'FAQ',
		highlight: 'Questions et réponses',
		subtitleTemplate: (procedure: string) => `Questions fréquentes sur ${procedure} et le traitement en Inde.`,
	},
};

export const frDoctorsPage = {
	listing: {
		pageHeaderBadge: 'Notre équipe médicale',
		pageHeaderTitle: 'Des médecins qui',
		pageHeaderHighlight: 'prennent soin de vous',
		pageHeaderSubtitle:
			"Chaque spécialiste de notre réseau est certifié, rattaché à un hôpital accrédité JCI ou NABH, et validé par notre comité médical avant d'être associé à un dossier.",
		gridBadge: 'Notre équipe médicale',
		gridTitle: 'Découvrez nos',
		gridHighlight: 'spécialistes',
		gridSubtitle: 'Des spécialistes certifiés, rattachés à des hôpitaux accrédités, validés pour chaque dossier que nous prenons en charge.',
	},
	card: {
		yearsExpLabel: "Ans d'exp.",
		reviewsLabel: 'Avis',
		contactLabel: 'Voir le profil',
		verifiedLabel: 'Spécialiste vérifié',
	},
	detail: {
		home: 'Accueil',
		ourDoctors: 'Nos médecins',
		photoLabel: 'Photo',
		verifiedSpecialist: 'Spécialiste vérifié',
		reviewsSuffix: 'avis',
		yearsExperienceSuffix: "ans d'expérience",
		bookAppointment: 'Prendre rendez-vous',
		videoConsultation: 'Consultation vidéo',
		tabs: {
			about: 'À propos',
			specializations: 'Spécialisations',
			qualifications: 'Qualifications',
			experience: 'Expérience',
			awards: 'Distinctions',
			memberships: 'Adhésions',
		},
		aboutPrefix: 'À propos de',
		patientReviews: 'Avis des patients',
		otherSpecialists: 'Autres spécialistes',
		bookConsultation: 'Réserver une consultation',
		sendCaseTemplate: (name: string) => `Envoyez votre dossier à l'équipe de coordination de ${name}`,
		whatsappMessageTemplate: (name: string) => `Bonjour, je souhaiterais prendre rendez-vous avec ${name}.`,
	},
};
