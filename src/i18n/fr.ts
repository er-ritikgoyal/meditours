/**
 * French (fr) translation strings — pilot language file.
 *
 * Scope: site-wide UI text only (nav, footer, hero, common form/button labels).
 * Deep page content (treatment overviews, FAQs, hospital/doctor data, destination
 * descriptions) is not translated yet — that's a much larger follow-up.
 *
 * Not yet wired into rendering: no routing/locale-switching consumes this file
 * yet. It's a standalone content asset ready for that integration.
 *
 * Translation source: AI-generated. Recommend a native French speaker reviews
 * this before it's shown to real users, especially anything touching medical
 * terminology.
 */

export const fr = {
	nav: {
		home: 'Accueil',
		destinations: 'Destinations',
		treatments: 'Traitements',
		about: 'À propos',
		contact: 'Contact',
		more: 'Plus',
		hotels: 'Hôtels',
		flights: 'Vols',
		tourismPackage: 'Circuit touristique',
		cta: 'Devis gratuit',
		checkInsuranceEligibility: "Vérifier l'éligibilité à l'assurance",
		tagline: 'Votre consultant médical',
	},

	footer: {
		description:
			'Nous mettons en relation les patients avec des hôpitaux accrédités et des spécialistes agréés dans plus de 20 pays — un accompagnement complet, du premier avis médical jusqu\'au rétablissement.',
		quickLinks: 'Liens rapides',
		home: 'Accueil',
		aboutUs: 'À propos de nous',
		destinations: 'Destinations',
		treatments: 'Traitements',
		ourDoctors: 'Nos médecins',
		contact: 'Contact',
		popularTreatments: 'Traitements populaires',
		treatmentNames: {
			cardiacCare: 'Soins cardiaques',
			orthopedics: 'Orthopédie',
			oncology: 'Oncologie',
			cosmeticSurgery: 'Chirurgie esthétique',
			fertilityTreatment: 'Traitement de la fertilité',
			organTransplant: "Greffe d'organe",
			dentalCare: 'Soins dentaires',
			eyeCare: 'Soins oculaires',
		},
		getInTouch: 'Nous contacter',
		officeAddress: '238 Westend Mall, Janakpuri, New Delhi, Inde',
		supportHours: '24 h/24 et 7 j/7',
		privacyPolicy: 'Politique de confidentialité',
		termsOfService: "Conditions d'utilisation",
		sitemap: 'Plan du site',
		cookiePolicy: 'Politique relative aux cookies',
		manageCookies: 'Gérer les préférences de cookies',
		allRightsReserved: 'Tous droits réservés.',
		backToTop: 'Retour en haut',
	},

	hero: {
		slides: [
			{
				eyebrow: 'Hôpitaux accrédités JCI',
				title: 'Des soins de classe mondiale,',
				highlight: "sans l'attente ni le prix fort",
				description:
					'Comparez des hôpitaux accrédités et des spécialistes dans plus de 20 pays, et économisez jusqu\'à 70 % sur le traitement dont vous avez besoin.',
				primaryCta: 'Devis gratuit',
				secondaryCta: 'Découvrir les destinations',
			},
			{
				eyebrow: 'Spécialistes vérifiés',
				title: 'Des hôpitaux les mieux notés,',
				highlight: 'adaptés à votre diagnostic exact',
				description:
					'Notre comité médical examine chaque dossier et vous met en relation avec des chirurgiens spécialisés dans votre pathologie.',
				primaryCta: 'Trouver un spécialiste',
				secondaryCta: 'Comment ça marche',
			},
			{
				eyebrow: 'Accompagnement de bout en bout',
				title: 'Nous gérons le voyage,',
				highlight: 'vous vous concentrez sur votre rétablissement',
				description:
					"Vols, visas, interprètes et suivi post-traitement — un coordinateur dédié gère chaque détail de votre voyage.",
				primaryCta: 'Parler à un coordinateur',
			},
		],
		trust: [
			{ value: '500+', label: 'Hôpitaux partenaires' },
			{ value: '45', label: 'Pays' },
			{ value: '24 h/24 et 7 j/7', label: 'Assistance patients' },
			{ value: '12 000+', label: 'Patients accompagnés' },
		],
		treatmentOptions: [
			'Chirurgie cardiaque',
			'Orthopédie et remplacement articulaire',
			'Oncologie',
			'Chirurgie esthétique et plastique',
			'Traitement de la fertilité',
			"Greffe d'organe",
			'Autre',
		],
		enquiry: {
			title: 'Obtenez une consultation gratuite',
			subtitle: 'Notre équipe médicale répond sous 24 heures',
			treatmentPlaceholder: 'Je recherche...',
			namePlaceholder: 'Nom complet',
			emailPlaceholder: 'Adresse e-mail',
			countryPlaceholder: '---Sélectionnez un pays---',
			phonePlaceholder: 'Numéro WhatsApp / téléphone',
			uploadLabel: 'Téléverser les rapports médicaux (PDF/JPG, facultatif)',
			submit: 'Devis gratuit',
			privacyNote: 'Vos informations sont confidentielles',
			successMessage: 'Merci ! Un coordinateur patient vous contactera sous peu.',
		},
	},

	floatingWidget: {
		whatsappLabel: 'WhatsApp',
		whatsappAriaLabel: 'Discuter avec nous sur WhatsApp',
		callbackLabel: 'Demander un rappel',
		closeLabel: 'Fermer',
		modalTitle: 'Demander un rappel',
		modalSubtitle: 'Partagez vos coordonnées et un coordinateur de patients vous rappellera sous peu.',
		namePlaceholder: 'Nom complet',
		countryPlaceholder: '---Sélectionnez un pays---',
		phonePlaceholder: 'Numéro de téléphone / WhatsApp',
		emailPlaceholder: 'Adresse e-mail',
		preferredTimePlaceholder: 'Heure de rappel préférée (facultatif)',
		submitLabel: 'Demander un rappel',
		privacyNote: 'Vos informations sont confidentielles',
		successMessage: 'Merci ! Un coordinateur de patients vous rappellera sous peu.',
	},

	insuranceModal: {
		closeLabel: 'Fermer',
		modalTitle: "Vérifier l'éligibilité à l'assurance",
		modalSubtitle:
			"Partagez vos informations et vos données d'assurance — notre coordinateur confirmera votre couverture et vous recontactera.",
		patientNamePlaceholder: 'Nom du patient',
		patientAgePlaceholder: 'Âge du patient',
		genderPlaceholder: 'Genre',
		genderMale: 'Homme',
		genderFemale: 'Femme',
		genderOther: 'Autre',
		countryPlaceholder: '---Sélectionnez un pays---',
		phonePlaceholder: 'Numéro de téléphone*',
		emailPlaceholder: 'E-mail',
		hasInsurancePlaceholder: "---J'ai une assurance---",
		yes: 'Oui',
		no: 'Non',
		uploadLabel: 'Téléverser votre carte d\'assurance (facultatif — PDF/JPG/PNG)',
		messagePlaceholder: 'Message',
		submitLabel: "Vérifier l'éligibilité",
		successMessage: 'Merci ! Notre équipe examinera vos informations d\'assurance et vous recontactera sous peu.',
	},

	common: {
		fullName: 'Nom complet',
		emailAddress: 'Adresse e-mail',
		phoneWhatsapp: 'Téléphone / WhatsApp',
		message: 'Message',
		sendMessage: 'Envoyer le message',
		country: 'Pays',
		selectCountryPlaceholder: '---Sélectionnez un pays---',
		learnMore: 'En savoir plus',
		viewProfile: 'Voir le profil',
		contactUs: 'Nous contacter',
		requestCallback: 'Demander un rappel',
		checkEligibility: "Vérifier l'éligibilité",
		confidentialNote: 'Vos informations sont confidentielles',
	},
	cookieBanner: {
		title: 'Nous respectons votre vie privée',
		description:
			'Nous utilisons des cookies pour mémoriser votre préférence de langue et comprendre comment les visiteurs utilisent notre site, afin de l\'améliorer. Vous pouvez accepter tous les cookies, refuser les cookies non essentiels, ou personnaliser votre choix.',
		necessaryLabel: 'Nécessaires',
		necessaryDescription: 'Indispensables au fonctionnement du site, comme la mémorisation de la langue choisie. Toujours activés.',
		analyticsLabel: 'Analytique',
		analyticsDescription: 'Nous aide à comprendre comment les visiteurs utilisent le site afin de l\'améliorer. Facultatif.',
		acceptAllLabel: 'Tout accepter',
		rejectLabel: 'Refuser les cookies non essentiels',
		customizeLabel: 'Personnaliser',
		savePreferencesLabel: 'Enregistrer les préférences',
		policyLinkLabel: 'Politique relative aux cookies',
		closeLabel: 'Fermer',
	},
} as const;

export type FrDictionary = typeof fr;
