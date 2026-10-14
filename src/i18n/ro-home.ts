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
