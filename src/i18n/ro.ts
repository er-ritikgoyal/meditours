/**
 * Romanian (ro) translation strings — site-wide UI text (nav, footer, hero,
 * common form/button labels, floating widget, insurance modal).
 *
 * Mirrors the structure of fr.ts / ru.ts / bn.ts exactly so Layout.astro can
 * drive all locales from the same rendering logic.
 *
 * Translation source: AI-generated. Recommend a native Romanian speaker
 * reviews this before it's relied on for medical terminology.
 */

export const ro = {
	nav: {
		home: 'Acasă',
		destinations: 'Destinații',
		treatments: 'Tratamente',
		about: 'Despre noi',
		contact: 'Contact',
		more: 'Mai mult',
		hotels: 'Hoteluri',
		flights: 'Zboruri',
		tourismPackage: 'Pachet turistic',
		cta: 'Consultație gratuită',
		checkInsuranceEligibility: 'Verificați eligibilitatea asigurării',
		tagline: 'Consultantul dumneavoastră medical',
	},

	footer: {
		description:
			'Conectăm pacienții cu spitale acreditate și specialiști certificați în peste 20 de țări — sprijin complet, de la prima opinie medicală până la recuperare.',
		quickLinks: 'Linkuri rapide',
		home: 'Acasă',
		aboutUs: 'Despre noi',
		destinations: 'Destinații',
		treatments: 'Tratamente',
		ourDoctors: 'Medicii noștri',
		contact: 'Contact',
		popularTreatments: 'Tratamente populare',
		treatmentNames: {
			cardiacCare: 'Îngrijire cardiacă',
			orthopedics: 'Ortopedie',
			oncology: 'Oncologie',
			cosmeticSurgery: 'Chirurgie estetică',
			fertilityTreatment: 'Tratament de fertilitate',
			organTransplant: 'Transplant de organe',
			dentalCare: 'Îngrijire dentară',
			eyeCare: 'Îngrijire oftalmologică',
		},
		getInTouch: 'Contactați-ne',
		officeAddress: '238 Westend Mall, Janakpuri, New Delhi, India',
		supportHours: 'Disponibil 24/7',
		privacyPolicy: 'Politica de confidențialitate',
		termsOfService: 'Termeni și condiții',
		sitemap: 'Harta site-ului',
		cookiePolicy: 'Politica de cookie-uri',
		manageCookies: 'Gestionați preferințele de cookie-uri',
		allRightsReserved: 'Toate drepturile rezervate.',
		backToTop: 'Înapoi sus',
	},

	hero: {
		slides: [
			{
				eyebrow: 'Spitale acreditate JCI',
				title: 'Îngrijire medicală de talie mondială,',
				highlight: 'fără așteptare sau prețuri exagerate',
				description:
					'Comparați spitale acreditate și specialiști din peste 20 de țări și economisiți până la 70% la tratamentul de care aveți nevoie.',
				primaryCta: 'Consultație gratuită',
				secondaryCta: 'Explorați destinațiile',
			},
			{
				eyebrow: 'Specialiști verificați',
				title: 'Spitale cel mai bine cotate,',
				highlight: 'potrivite diagnosticului dumneavoastră exact',
				description:
					'Comisia noastră medicală analizează fiecare caz și vă conectează cu chirurgi specializați în afecțiunea dumneavoastră.',
				primaryCta: 'Găsiți un specialist',
				secondaryCta: 'Cum funcționează',
			},
			{
				eyebrow: 'Sprijin complet',
				title: 'Ne ocupăm noi de călătorie,',
				highlight: 'dumneavoastră vă concentrați pe recuperare',
				description:
					'Zboruri, vize, interpreți și monitorizare post-tratament — un coordonator dedicat gestionează fiecare detaliu al călătoriei dumneavoastră.',
				primaryCta: 'Vorbiți cu un coordonator',
			},
		],
		trust: [
			{ value: '500+', label: 'Spitale partenere' },
			{ value: '45', label: 'Țări' },
			{ value: '24/7', label: 'Sprijin pentru pacienți' },
			{ value: '12.000+', label: 'Pacienți ajutați' },
		],
		treatmentOptions: [
			'Chirurgie cardiacă',
			'Ortopedie și înlocuire articulară',
			'Oncologie',
			'Chirurgie estetică și plastică',
			'Tratament de fertilitate',
			'Transplant de organe',
			'Altele',
		],
		enquiry: {
			title: 'Obțineți o consultație gratuită',
			subtitle: 'Echipa noastră medicală răspunde în 24 de ore',
			treatmentPlaceholder: 'Caut...',
			namePlaceholder: 'Nume complet',
			emailPlaceholder: 'Adresă de e-mail',
			countryPlaceholder: '---Selectați țara---',
			phonePlaceholder: 'Număr WhatsApp / telefon',
			uploadLabel: 'Încărcați rapoarte medicale (PDF/JPG, opțional)',
			submit: 'Consultație gratuită',
			privacyNote: 'Informațiile dumneavoastră sunt confidențiale',
			successMessage: 'Mulțumim! Un coordonator de pacienți vă va contacta în curând.',
		},
	},

	floatingWidget: {
		whatsappLabel: 'WhatsApp',
		whatsappAriaLabel: 'Discutați cu noi pe WhatsApp',
		callbackLabel: 'Solicitați un apel',
		closeLabel: 'Închideți',
		modalTitle: 'Solicitați un apel',
		modalSubtitle: 'Distribuiți datele dumneavoastră și un coordonator de pacienți vă va suna în curând.',
		namePlaceholder: 'Nume complet',
		countryPlaceholder: '---Selectați țara---',
		phonePlaceholder: 'Număr de telefon / WhatsApp',
		emailPlaceholder: 'Adresă de e-mail',
		preferredTimePlaceholder: 'Ora preferată pentru apel (opțional)',
		submitLabel: 'Solicitați apelul',
		privacyNote: 'Informațiile dumneavoastră sunt confidențiale',
		successMessage: 'Mulțumim! Un coordonator de pacienți vă va suna în curând.',
	},

	insuranceModal: {
		closeLabel: 'Închideți',
		modalTitle: 'Verificați eligibilitatea asigurării',
		modalSubtitle:
			'Distribuiți datele și informațiile despre asigurarea dumneavoastră — coordonatorul nostru va confirma acoperirea și vă va contacta.',
		patientNamePlaceholder: 'Numele pacientului',
		patientAgePlaceholder: 'Vârsta pacientului',
		genderPlaceholder: 'Sex',
		genderMale: 'Masculin',
		genderFemale: 'Feminin',
		genderOther: 'Altul',
		countryPlaceholder: '---Selectați țara---',
		phonePlaceholder: 'Număr de telefon*',
		emailPlaceholder: 'E-mail',
		hasInsurancePlaceholder: '---Am asigurare---',
		yes: 'Da',
		no: 'Nu',
		uploadLabel: 'Încărcați cardul de asigurare (opțional — PDF/JPG/PNG)',
		messagePlaceholder: 'Mesaj',
		submitLabel: 'Verificați eligibilitatea',
		successMessage: 'Mulțumim! Echipa noastră va analiza informațiile dumneavoastră de asigurare și vă va contacta în curând.',
	},

	common: {
		fullName: 'Nume complet',
		emailAddress: 'Adresă de e-mail',
		phoneWhatsapp: 'Telefon / WhatsApp',
		message: 'Mesaj',
		sendMessage: 'Trimiteți mesajul',
		country: 'Țara',
		selectCountryPlaceholder: '---Selectați țara---',
		learnMore: 'Aflați mai multe',
		viewProfile: 'Vedeți profilul',
		contactUs: 'Contactați-ne',
		requestCallback: 'Solicitați un apel',
		checkEligibility: 'Verificați eligibilitatea',
		confidentialNote: 'Informațiile dumneavoastră sunt confidențiale',
	},
	cookieBanner: {
		title: 'Prețuim confidențialitatea dumneavoastră',
		description:
			'Folosim cookie-uri pentru a reține preferința dumneavoastră de limbă și pentru a înțelege modul în care vizitatorii utilizează site-ul nostru, pentru a-l putea îmbunătăți. Puteți accepta toate cookie-urile, le puteți respinge pe cele neesențiale sau vă puteți personaliza alegerea.',
		necessaryLabel: 'Necesare',
		necessaryDescription: 'Necesare pentru funcționarea site-ului, cum ar fi reținerea limbii selectate. Mereu active.',
		analyticsLabel: 'Analitice',
		analyticsDescription: 'Ne ajută să înțelegem cum utilizează vizitatorii site-ul, pentru a-l putea îmbunătăți. Opțional.',
		acceptAllLabel: 'Acceptă tot',
		rejectLabel: 'Respinge cele neesențiale',
		customizeLabel: 'Personalizează',
		savePreferencesLabel: 'Salvează preferințele',
		policyLinkLabel: 'Politica de cookie-uri',
		closeLabel: 'Închide',
	},
} as const;

export type RoDictionary = typeof ro;
