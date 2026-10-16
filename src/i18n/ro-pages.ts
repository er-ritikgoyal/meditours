/**
 * Romanian translations for page-level chrome on About, Contact, Destinations,
 * and Treatments (list + detail). Deep per-item content lives in
 * ro-treatments.ts / ro-destinations.ts; this file covers headings, labels,
 * form copy, and other component props for those pages.
 */

export const roAbout = {
	pageHeader: {
		badge: 'Din prima zi',
		title: 'Cine suntem,',
		highlight: 'și de ce contează',
		subtitle:
			'Suntem o echipă de coordonatori de pacienți, evaluatori medicali și specialiști în logistică care credem că îngrijirea medicală de talie mondială nu ar trebui să depindă de locul unde locuiți.',
	},
	story: {
		badge: 'Povestea noastră',
		titleLead: 'Construiți pentru a face îngrijirea medicală de talie mondială',
		titleHighlight: 'accesibilă tuturor',
		paragraphs: [
			'Alis Pro Med Tour a fost fondată pentru a reduce decalajul dintre îngrijirea medicală de talie mondială și costul acesteia. Credem că locul unde v-ați născut nu ar trebui să determine dacă vă puteți permite intervenția chirurgicală de care aveți nevoie. De la înființarea noastră, am ghidat mii de pacienți — de la prima opinie medicală până la recuperarea completă — prin cele mai acreditate spitale din India, economisind familiilor sume de bani care le schimbă viața, fără a face vreodată compromisuri privind calitatea.',
			'Ceea ce a început ca o mică echipă de coordonatori de pacienți a devenit o rețea completă de servicii concierge care se extinde în peste 40 de țări, cu comisii medicale interne, specialiști dedicați în vize și sprijin multilingv 24/7 — pentru că navigarea în sistemul de sănătate al unei țări străine nu ar trebui niciodată să pară o experiență de parcurs singur.',
		],
		statsLabels: ['Spitale partenere', 'Țări deservite', 'Sprijin pentru pacienți', 'Pacienți ajutați'],
		valuesTitle: 'Valorile noastre',
		values: [
			{
				title: 'Compasiunea pe primul loc',
				description: 'Fiecare decizie începe cu ceea ce este mai bine pentru pacientul din fața noastră — nu cu ceea ce este mai rapid sau mai profitabil.',
			},
			{
				title: 'Transparență totală',
				description: 'Prețuri clare, termene oneste și fără taxe ascunse. Ceea ce vă oferim ca ofertă este ceea ce plătiți.',
			},
			{
				title: 'Excelență clinică',
				description: 'Lucrăm doar cu spitale acreditate JCI și NABH și specialiști cu un istoric verificat.',
			},
			{
				title: 'Întotdeauna responsabili',
				description: 'De la primul dumneavoastră mesaj până la ultimul apel de urmărire, un singur coordonator se ocupă de cazul dumneavoastră de la început până la sfârșit.',
			},
		],
	},
	journey: {
		badge: 'Parcursul nostru',
		titleLead: 'Peste 5 ani de construire a',
		titleHighlight: 'încrederii pacienților',
		subtitle: 'De la o mică echipă de coordonatori la o rețea de pacienți în peste 40 de țări.',
		milestones: [
			{ title: 'Fondată la Mumbai', description: 'Alis Pro Med Tour se lansează cu câteva spitale partenere în Delhi și Mumbai.' },
			{
				title: 'Rețeaua de acreditare se extinde',
				description: 'Extindere la peste 100 de spitale acreditate JCI și NABH în cele mai importante centre medicale din India.',
			},
			{
				title: 'Extindere globală',
				description: 'Începe deservirea pacienților din peste 20 de țări, cu sprijin dedicat pentru vize și călătorii.',
			},
			{
				title: 'Pragul de 5.000 de pacienți',
				description: 'Depășirea a 5.000 de pacienți internaționali tratați cu succes, în ciuda perturbărilor globale ale călătoriilor.',
			},
			{
				title: 'Lansarea serviciului concierge 24/7',
				description: 'Introducerea sprijinului multilingv non-stop pentru pacienți și a coordonatorilor de caz dedicați.',
			},
			{
				title: 'Peste 40 de țări, peste 10.000 de pacienți',
				description: 'Sprijinirea pacienților din peste 40 de țări prin peste 100 de spitale partenere acreditate la nivel național.',
			},
		],
	},
	testimonials: {
		badge: 'Povești ale pacienților',
		title: 'Ce spun',
		highlight: 'pacienții noștri',
		subtitle: 'Rezultate reale de la pacienți reali care ne-au încredințat îngrijirea lor.',
		items: [
			{
				quote:
					'De la primul meu mesaj până în ziua în care m-am întors acasă recuperat, fiecare pas a fost gestionat cu grijă. Echipa cardiacă din Delhi mi-a oferit o a doua viață, iar eu am plătit doar o fracțiune din ceea ce aș fi cheltuit acasă.',
				name: 'James Whitfield',
				countryCode: 'gb',
				country: 'Regatul Unit',
				treatment: 'Bypass cardiac',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'Eram nervoasă în legătură cu călătoria în străinătate pentru o operație, dar coordonatoarea mea a răspuns la fiecare întrebare chiar și la ora 2 dimineața, dacă era nevoie. Spitalul din Istanbul părea mai degrabă un hotel de cinci stele decât o clinică.',
				name: 'Amara Okafor',
				countryCode: 'ng',
				country: 'Nigeria',
				treatment: 'Chirurgie estetică',
				rating: 5,
				theme: 'teal' as const,
			},
			{
				quote:
					'Am economisit peste 40.000 de dolari la operația de coloană a fiicei mele, fără compromisuri privind calitatea. Chirurgul din Bangkok a fost instruit în SUA și acest lucru s-a văzut în fiecare detaliu al îngrijirii ei.',
				name: 'Michael Chen',
				countryCode: 'ca',
				country: 'Canada',
				treatment: 'Ortopedie pediatrică',
				rating: 5,
				theme: 'green' as const,
			},
			{
				quote:
					'Sprijin pentru viză, întâmpinare la aeroport, interpret, hotel aproape de spital — s-au gândit la tot, astfel încât să mă pot concentra pe recuperarea mea completă. Nu aș fi putut gestiona singură această călătorie.',
				name: 'Sofia Marchetti',
				countryCode: 'it',
				country: 'Italia',
				treatment: 'Tratament de fertilitate',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'Comisia medicală m-a potrivit cu un specialist care tratează efectiv, în mod regulat, afecțiunea mea exactă, nu doar în general. Această expertiză a făcut toată diferența în recuperarea mea.',
				name: 'David Okoye',
				countryCode: 'us',
				country: 'Statele Unite',
				treatment: 'Oncologie',
				rating: 4,
				theme: 'teal' as const,
			},
			{
				quote:
					'Apelurile de urmărire au continuat luni de zile după ce m-am întors acasă. Nu am simțit niciodată că relația s-a încheiat la aeroport — le-a păsat cu adevărat de modul în care progresa recuperarea mea.',
				name: 'Hana Yamamoto',
				countryCode: 'jp',
				country: 'Japonia',
				treatment: 'Înlocuire articulară',
				rating: 5,
				theme: 'green' as const,
			},
		],
	},
	faq: {
		badge: 'Aveți întrebări?',
		title: 'Despre noi —',
		highlight: 'răspunsuri',
		subtitle: 'Întrebările pe care le auzim cel mai des de la pacienții care iau în considerare tratamentul în străinătate.',
	},
};

export const roContact = {
	pageHeader: {
		badge: 'Suntem aici să ajutăm',
		title: 'Contactați',
		highlight: 'echipa noastră',
		subtitle: 'Aveți întrebări despre tratament, cost sau logistica călătoriei? Un coordonator de pacienți răspunde de obicei în câteva ore.',
	},
	quickOptions: [
		{ title: 'Sunați-ne', detail: '+91 98217 01155' },
		{ title: 'WhatsApp', detail: 'Discutați cu un coordonator' },
		{ title: 'Scrieți-ne', detail: 'care@alispromeditours.com' },
	],
	form: {
		heading: 'Trimiteți-ne un mesaj',
		subheading: 'Distribuiți câteva detalii și echipa noastră medicală vă va contacta cu pașii următori.',
		fullName: 'Nume complet',
		fullNamePlaceholder: 'Numele dumneavoastră complet',
		emailAddress: 'Adresă de e-mail',
		emailPlaceholder: 'you@example.com',
		country: 'Țara',
		selectCountryPlaceholder: '---Selectați țara---',
		treatmentOfInterest: 'Tratament de interes',
		selectTreatmentPlaceholder: 'Selectați un tratament',
		phoneWhatsapp: 'Telefon / WhatsApp',
		phonePlaceholder: '555 123 4567',
		message: 'Mesaj',
		messagePlaceholder: 'Spuneți-ne despre afecțiunea dumneavoastră, calendar sau orice întrebări aveți...',
		medicalReports: 'Rapoarte medicale (opțional)',
		fileHint: 'PDF sau JPG, până la 5MB',
		submit: 'Trimiteți mesajul',
		successMessage: 'Vă mulțumim că ne-ați contactat — un coordonator de pacienți vă va contacta în curând.',
	},
	info: {
		heading: 'Informații de contact',
		officeAddressLabel: 'Adresa biroului',
		phoneLabel: 'Telefon',
		emailLabel: 'E-mail',
		supportHoursLabel: 'Program de sprijin',
		supportHoursValue: 'Disponibil 24/7',
		coordinatorLabel: 'Coordonator dedicat',
		coordinatorDetail: 'Alocat în termen de 24 de ore de la primul dumneavoastră mesaj',
		noteText: 'Preferați să discutați mai întâi? Scrieți-ne pe WhatsApp și vă vom suna înapoi în decurs de o oră.',
	},
	treatmentOptions: [
		'Îngrijire cardiacă',
		'Ortopedie',
		'Oncologie',
		'Chirurgie estetică și plastică',
		'Tratament de fertilitate',
		'Transplant de organe',
		'Îngrijire dentară',
		'Îngrijire oftalmologică',
		'ENT (Ear, Nose & Throat)',
		'Neurology & Neurosurgery',
		'Spine Surgery',
		'Bariatric Surgery',
		'Nephrology & Urology',
		'Altele',
	],
};

export const roDestinationsPage = {
	grid: {
		badge: 'Centre medicale din toată India',
		title: 'Explorați cele mai bune',
		highlight: 'centre medicale din India',
		subtitle: 'Fiecare oraș de mai jos găzduiește spitale acreditate JCI sau NABH, verificate de comisia noastră medicală.',
		exploreLabel: 'Explorați destinația',
	},
	detail: {
		verifiedBadge: 'Rețea de parteneri verificată',
		hospitalsInLabel: 'Spitale în',
		hospitalsInSubtitleTemplate: (city: string) =>
			`Spitale acreditate în ${city}, verificate de comisia noastră medicală pentru siguranță, igienă și rezultate clinice.`,
		soonTitleTemplate: (city: string) => `Profilurile spitalelor pentru ${city} vor fi disponibile în curând`,
		soonBodyTemplate: (city: string) =>
			`Adăugăm spitale partenere nominalizate pentru ${city}. Între timp, distribuiți cazul dumneavoastră unui coordonator și vă vom potrivi direct cu un spital acreditat.`,
		talkToCoordinator: 'Vorbiți cu un coordonator',
		otherHubsTitle: 'Alte centre medicale',
	},
};

export const roTreatmentsPage = {
	grid: {
		badge: 'Specializările noastre',
		title: 'Tratamente în care',
		highlight: 'suntem specializați',
		subtitle: 'Specialiști certificați în fiecare specialitate majoră, în spitale acreditate din întreaga lume.',
		searchPlaceholder: 'Căutați tratamente — de ex. cardiac, dentar, chirurgie estetică...',
		searchAriaLabel: 'Căutați tratamente',
		clearAriaLabel: 'Ștergeți căutarea',
		showingCountTemplate: 'Se afișează {visible} din {total} tratamente',
		noResultsTitle: 'Niciun tratament găsit',
		noResultsBody: 'Încercați un alt termen de căutare sau răsfoiți toate specializările noastre de mai sus.',
		fromPrefix: 'De la',
		learnMore: 'Aflați mai multe',
	},
	costComparison: {
		title: 'Comparați costurile tratamentelor la nivel mondial',
		subtitle: 'Beneficiați de îngrijire medicală de talie mondială în India, economisind până la 80% din costurile tratamentului, fără compromisuri privind calitatea.',
		note: 'Toate prețurile sunt medii aproximative în USD și pot varia în funcție de spital, specialist și complexitatea cazului.',
		scrollHint: 'Glisați spre stânga pentru a compara toate cele 5 țări, inclusiv India',
		mostAffordable: 'Cel mai accesibil',
		saveTemplate: (pct: number) => `Economisiți ${pct}%`,
		countries: { usa: 'Statele Unite', uk: 'Regatul Unit', germany: 'Germania', uae: 'Emiratele Arabe Unite', india: 'India' },
		treatmentNames: {
			'Heart Bypass Surgery': 'Bypass cardiac',
			'Knee Replacement': 'Înlocuire de genunchi',
			'Hip Replacement': 'Înlocuire de șold',
			'IVF Treatment': 'Tratament FIV',
			'Dental Implant': 'Implant dentar',
			'Spinal Fusion': 'Fuziune spinală',
			'Liver Transplant': 'Transplant de ficat',
			'Kidney Transplant': 'Transplant de rinichi',
			'Cataract Surgery': 'Operație de cataractă',
		} as Record<string, string>,
		stats: [
			{ title: 'Economisiți până la 80%', description: 'Comparativ cu țările occidentale' },
			{ title: 'Spitale de talie mondială', description: 'Acreditate JCI și NABH' },
			{ title: 'Specialiști cu experiență', description: 'Medici recunoscuți la nivel mondial' },
		],
	},
	detail: {
		savingsBadgeTemplate: (pct: number) => `Economisiți până la ${pct}%`,
		overviewHeading: 'Prezentare generală',
		proceduresHeading: 'Proceduri pe care le oferim',
		whyChooseTemplate: (name: string) => `De ce să alegeți India pentru ${name}`,
		startingPriceLabel: 'Preț de pornire',
		avgSavingsLabel: 'Economie medie',
		partnerHospitalsLabel: 'Spitale partenere',
		packageHeading: 'Costul pachetului și șederea în spital',
		sampleBadgeTemplate: (procedure: string) => `Exemplu de pachet: ${procedure}`,
		packageIntroTemplate: (priceHtml: string, daysHtml: string) =>
			`Pachetul începe de la ${priceHtml} — planificați aproximativ ${daysHtml} în India, de la sosire până la externare și urmărire.`,
		patientStayLabel: 'Șederea pacientului',
		donorStayLabel: 'Șederea donatorului',
		outpatientText: 'Procedură ambulatorie / în aceeași zi',
		daysTotalTemplate: (total: number, icu: number, room: number) =>
			`${total} zile în total — ${icu} la ATI + ${room} în cameră`,
		tableHeaders: { country: 'Țara', cost: 'Cost estimat', waitTime: 'Timp de așteptare', successRate: 'Rata de succes' },
		inclusionsHeading: 'Ce include pachetul',
		exclusionsHeading: 'Ce nu include pachetul',
		packageNoteTemplate: (procedure: string) =>
			`Fiecare caz este diferit — cifrele de mai sus sunt puncte de plecare orientative pentru ${procedure}. Distribuiți rapoartele dumneavoastră medicale pentru o ofertă personalizată și detaliată.`,
		ctaHeadingTemplate: (name: string) => `Sunteți gata să începeți cu ${name}?`,
		ctaBody: 'Distribuiți rapoartele dumneavoastră medicale și primiți un plan de tratament personalizat în 24 de ore.',
		getFreeQuote: 'Obțineți o consultație gratuită',
		browseAll: 'Răsfoiți toate tratamentele',
		otherTreatmentsHeading: 'Alte tratamente',
	},
	faq: {
		badge: 'Întrebări frecvente',
		highlight: 'Întrebări frecvente',
		subtitleTemplate: (procedure: string) => `Întrebări frecvente despre ${procedure} și tratamentul în India.`,
	},
};

export const roDoctorsPage = {
	listing: {
		pageHeaderBadge: 'Echipa noastră medicală',
		pageHeaderTitle: 'Medici care',
		pageHeaderHighlight: 'au grijă de dumneavoastră',
		pageHeaderSubtitle:
			'Fiecare specialist din rețeaua noastră este atestat, afiliat unui spital acreditat JCI sau NABH și verificat de comisia noastră medicală înainte de a fi alocat unui caz.',
		gridBadge: 'Echipa noastră medicală',
		gridTitle: 'Descoperiți-i pe',
		gridHighlight: 'specialiștii noștri',
		gridSubtitle: 'Specialiști atestați, afiliați unor spitale acreditate, verificați pentru fiecare caz pe care îl preluăm.',
	},
	card: {
		yearsExpLabel: 'Ani exp.',
		reviewsLabel: 'Recenzii',
		contactLabel: 'Vezi profilul',
		verifiedLabel: 'Specialist verificat',
	},
	detail: {
		home: 'Acasă',
		ourDoctors: 'Medicii noștri',
		photoLabel: 'Fotografie',
		verifiedSpecialist: 'Specialist verificat',
		reviewsSuffix: 'recenzii',
		yearsExperienceSuffix: 'ani de experiență',
		bookAppointment: 'Programează o vizită',
		videoConsultation: 'Consultație video',
		tabs: {
			about: 'Despre medic',
			specializations: 'Specializări',
			qualifications: 'Calificări',
			experience: 'Experiență',
			awards: 'Premii',
			memberships: 'Afilieri',
		},
		aboutPrefix: 'Despre',
		patientReviews: 'Recenzii ale pacienților',
		otherSpecialists: 'Alți specialiști',
		bookConsultation: 'Programează o consultație',
		sendCaseTemplate: (name: string) => `Trimiteți cazul dumneavoastră echipei de coordonare a lui ${name}`,
		whatsappMessageTemplate: (name: string) => `Bună ziua, aș dori să programez o consultație video cu ${name}.`,
	},
};
