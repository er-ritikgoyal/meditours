/**
 * Romanian translations for the remaining homepage-only sections:
 * OurDoctors, OurPartnerHospitals (homepage heading), SupportServices, TravelProcess.
 */

export const roDoctors = {
	badge: 'Echipa noastră medicală',
	title: 'Medici care',
	highlight: 'au grijă de dumneavoastră',
	subtitle: 'Specialiști certificați, afiliați cu spitale acreditate, verificați pentru fiecare caz pe care îl gestionăm.',
	yearsExpLabel: 'ani experiență',
	reviewsLabel: 'recenzii',
	contactLabel: 'Contactați',
	verifiedLabel: 'Specialist verificat',
	doctors: [
		{
			specialty: 'Chirurg cardiac',
			qualification: 'MBBS, MS, MCh — Chirurgie cardiotoracică',
			languages: ['Engleză', 'Hindi'],
		},
		{
			specialty: 'Chirurg ortoped',
			qualification: 'MBBS, MS — Ortopedie și înlocuire articulară',
			languages: ['Engleză', 'Hindi'],
		},
		{
			specialty: 'Oncolog',
			qualification: 'MBBS, MD — Oncologie medicală',
			languages: ['Engleză', 'Hindi', 'Malayalam'],
		},
		{
			specialty: 'Chirurg estetic și plastic',
			qualification: 'MD — Chirurgie plastică, reconstructivă și estetică',
			languages: ['Engleză', 'Hindi'],
		},
		{
			specialty: 'Neurolog',
			qualification: 'MBBS, DM — Neurologie',
			languages: ['Engleză', 'Hindi', 'Tamilă'],
		},
		{
			specialty: 'Specialist în fertilitate',
			qualification: 'MD — Endocrinologie reproductivă',
			languages: ['Engleză', 'Spaniolă'],
		},
	],
};

export const roPartnerHospitalsHome = {
	badge: 'Rețeaua noastră',
	title: 'Spitalele noastre',
	highlight: 'partenere',
	subtitle: 'Lucrăm doar cu spitale acreditate care îndeplinesc standardele internaționale de siguranță, igienă și rezultate clinice.',
};

export const roSupportServices = {
	badge: 'Sprijin pentru pacienți',
	titleLead: 'Sprijin care vă însoțește,',
	titleHighlight: 'oriunde v-ați afla',
	subtitle: 'De la viză până la recuperarea de acasă, coordonatorii noștri vă însoțesc la fiecare pas.',
	services: [
		{
			icon: 'passport' as const,
			title: 'Asistență pentru viza medicală',
			description: 'Specialiștii noștri pregătesc scrisorile de invitație și documentele, astfel încât viza dumneavoastră medicală să fie aprobată fără întârzieri.',
			theme: 'blue' as const,
		},
		{
			icon: 'video' as const,
			title: 'Teleconsultație video',
			description: 'Vorbiți față în față online cu specialistul dumneavoastră pentru a confirma diagnosticul și planul de tratament înainte de călătorie.',
			theme: 'teal' as const,
		},
		{
			icon: 'translate' as const,
			title: 'Servicii de interpretariat',
			description: 'Un interpret medical certificat este prezent la fiecare consultație și procedură, în limba cu care vă simțiți cel mai confortabil.',
			theme: 'green' as const,
		},
		{
			icon: 'opinion' as const,
			title: 'A doua opinie medicală',
			description: 'Obțineți o evaluare independentă a diagnosticului și opțiunilor de tratament de la un specialist certificat din străinătate.',
			theme: 'blue' as const,
		},
		{
			icon: 'care' as const,
			title: 'Coordonarea îngrijirii post-tratament',
			description: 'Coordonatorul dumneavoastră planifică urmăririle și partajează rapoartele cu medicul dumneavoastră după întoarcerea acasă.',
			theme: 'teal' as const,
		},
	],
};

export const roTravelProcess = {
	badge: 'Ghid pas cu pas',
	titleLead: 'Călătoria pacientului',
	titleHighlight: 'internațional',
	subtitle: 'De la prima dumneavoastră întrebare până la întoarcerea acasă — suntem alături de dumneavoastră la fiecare pas',
	steps: [
		{
			icon: 'document' as const,
			title: 'Furnizați detaliile medicale ale pacientului',
			description: 'Distribuiți rapoartele și întrebarea dumneavoastră — primiți o opinie relevantă în 24 de ore.',
		},
		{
			icon: 'stethoscope' as const,
			title: 'Primiți o opinie medicală și o estimare de cost',
			description: 'Alegeți liber dintre cele mai bune spitale și medici afiliați ai noștri.',
		},
		{
			icon: 'idCard' as const,
			title: 'Primiți invitația pentru viză',
			description: 'Ne ocupăm de toate formalitățile vizei medicale în numele dumneavoastră.',
		},
		{
			icon: 'plane' as const,
			title: 'Planificați-vă călătoria',
			description: 'Hotel, apartament sau pensiune organizate aproape de spital.',
		},
		{
			icon: 'car' as const,
			title: 'Întâmpinare la aeroport',
			description: 'Întâmpinare la aeroport, transfer și cartelă SIM gratuite.',
		},
		{
			icon: 'building' as const,
			title: 'Urmați tratamentul',
			description: 'Un interpret dedicat și un manager de caz vă însoțesc pe tot parcursul.',
		},
		{
			icon: 'home' as const,
			title: 'Întoarcerea acasă',
			description: 'Sprijin de urmărire post-tratament după întoarcerea dumneavoastră acasă.',
		},
	],
};

export const roCostComparison = {
	title: 'Cele mai mici prețuri garantate',
	subtitle:
		'Negociem constant prețuri și alternative mai bune, fără a compromite calitatea tratamentului. Prețurile noastre sunt constant mai mici.',
	discoverText: 'Descoperiți ce vă oferim!',
	startingLabel: 'Începând de la',
	getQuoteLabel: 'Obțineți o ofertă',
	chatLabel: 'Chat',
	treatmentNames: [
		'Protezare de genunchi',
		'Protezare de șold',
		'Tumoră cerebrală',
		'Bypass coronarian',
		'Înlocuire de valvă cardiacă',
		'Cancer de sân',
		'Cancer pulmonar',
		'Rinoplastie',
		'Implanturi mamare',
		'Transplant de păr',
		'Tratament FIV',
		'Histerectomie',
	],
};

export const roWhyChooseUs = {
	badge: 'De ce să ne alegeți',
	title: 'Alegerea de încredere pentru',
	highlight: 'pacienții din întreaga lume',
	subtitle: 'Mii de pacienți călătoresc cu noi în fiecare an — iată ce face experiența diferită.',
	reasons: [
		{
			icon: 'shield' as const,
			title: 'Spitale acreditate JCI și NABH',
			description:
				'Fiecare spital partener respectă aceleași standarde de acreditare în care au încredere pacienții din întreaga lume.',
			theme: 'blue' as const,
		},
		{
			icon: 'piggyBank' as const,
			title: 'Economisiți până la 80% la tratament',
			description:
				'Îngrijire de clasă mondială la o fracțiune din prețurile occidentale, fără compromisuri privind calitatea sau siguranța.',
			theme: 'teal' as const,
		},
		{
			icon: 'mortarboard' as const,
			title: 'Specialiști instruiți la nivel internațional',
			description:
				'Consiliul nostru medical selectează chirurgi instruiți și certificați în SUA, Marea Britanie și Europa.',
			theme: 'green' as const,
		},
		{
			icon: 'compass' as const,
			title: 'Asistență completă de tip concierge',
			description:
				'Vize, zboruri, cazare și traducători — un singur coordonator gestionează întreaga călătorie.',
			theme: 'blue' as const,
		},
		{
			icon: 'headset' as const,
			title: 'Asistență multilingvă 24/7',
			description:
				'Contactați echipa dumneavoastră medicală oricând, în limba dumneavoastră, înainte, în timpul și după tratament.',
			theme: 'teal' as const,
		},
		{
			icon: 'cash' as const,
			title: 'Costuri transparente, fără taxe ascunse',
			description:
				'O singură ofertă inițială acoperă tratamentul dumneavoastră — fără facturi surpriză la sosire.',
			theme: 'green' as const,
		},
	],
};
