/**
 * Romanian translations for the Hotel, Flights, and Tourism Package pages
 * and their supporting components.
 */

export const roHotel = {
	pageHeader: {
		badge: 'Cazare și bunăstare',
		title: 'Cazare confortabilă,',
		highlight: 'aproape de tratament',
		subtitle:
			'Hoteluri verificate în prealabil și cazări prietenoase cu bunăstarea, aproape de fiecare spital partener — rezervate și gestionate de coordonatorul dumneavoastră.',
	},
	stats: [
		{ value: 200, suffix: '+', label: 'Cazări partenere', decimals: 0 },
		{ value: 4.8, suffix: '', label: 'Evaluare medie', decimals: 1 },
		{ value: 15, suffix: ' min', label: 'Distanță medie față de spital', decimals: 0 },
	],
	tiers: {
		badge: 'Opțiuni de cazare',
		mostPopularLabel: 'Cea mai populară',
		perNightLabel: '/ noapte',
		ctaLabel: 'Întrebați despre această cazare',
		items: [
			{
				name: 'Sejur confortabil',
				description: 'Pensiuni și apartamente cu servicii la prețuri accesibile, la scurtă distanță de spitalul dumneavoastră.',
				features: ['Camere climatizate cu chicinetă', 'Wi-Fi gratuit', 'Curățenie zilnică', 'Serviciu navetă la spital'],
			},
			{
				name: 'Suită premium',
				description: 'Hoteluri de 3–4 stele prietenoase cu bunăstarea, la distanță de mers pe jos de spitalele noastre partenere mai mari.',
				features: [
					'Tot ce include Sejurul confortabil',
					'Asistență prin apel la asistentă medicală',
					'Planificare de mese dietetice',
					'Camere accesibile pentru scaun cu rotile',
					'Transfer de la aeroport inclus',
				],
			},
			{
				name: 'Vilă de recuperare de lux',
				description: 'Hoteluri de 5 stele și reședințe private cu asistență medicală în cameră pentru intimitate completă.',
				features: [
					'Tot ce include Suita premium',
					'Asistență medicală privată în cameră',
					'Bucătar personal și personalizarea meselor',
					'Serviciu de mașină cu șofer',
					'Concierge dedicat 24/7',
				],
			},
		],
	},
	amenities: {
		badge: 'Concepute pentru bunăstare',
		titleLead: 'Fiecare cazare',
		titleHighlight: 'pregătită pentru pacienți',
		subtitle: 'Standard în fiecare categorie de cazare, astfel încât să nu trebuiască să întrebați niciodată de două ori.',
		labels: [
			'Wi-Fi gratuit',
			'Navetă la spital',
			'Asistență prin apel la asistentă medicală',
			'Planificare de mese dietetice',
			'Accesibil pentru scaun cu rotile',
			'Recepție 24/7',
			'Serviciu de spălătorie',
			'Climatizare',
		],
	},
	featuredStays: {
		badge: 'Cazări partenere',
		titleLead: 'Cazări recomandate',
		titleHighlight: 'aproape de spitalele noastre de top',
		subtitle: 'O mostră a cazărilor pe care coordonatorii noștri le rezervă cel mai des.',
		fromLabel: 'de la',
		perNightLabel: '/noapte',
		viewDetailsLabel: 'Vedeți detaliile',
		stays: [
			{ name: 'The Wellness Residency', city: 'Delhi NCR', distance: '0,4 km de Spitalul Apollo' },
			{ name: 'Kokilaben Guest Suites', city: 'Mumbai', distance: '0,6 km de spitalul partener' },
			{ name: 'Apollo Comfort Inn', city: 'Chennai', distance: '0,3 km de Apollo Chennai' },
			{ name: 'Narayana Recovery Stays', city: 'Bangalore', distance: '0,5 km de Narayana Health' },
		],
	},
	ctaHeading: 'Nu sunteți sigur ce cazare vi se potrivește?',
	ctaBody: 'Spuneți-i coordonatorului dumneavoastră bugetul și nevoile de bunăstare — el va selecta cele mai bune opțiuni pentru călătoria dumneavoastră.',
};

export const roFlights = {
	pageHeader: {
		badge: 'Zburați cu încredere',
		title: 'Zboruri fără probleme,',
		highlight: 'direct spre tratamentul dumneavoastră',
		subtitle: 'De la rezervarea biletelor până la escortă medicală, biroul nostru de călătorii coordonează fiecare etapă a călătoriei dumneavoastră în India.',
	},
	stats: [
		{ value: 15, suffix: '+', label: 'Companii aeriene partenere', decimals: 0 },
		{ value: 10000, suffix: '+', label: 'Pacienți transportați', decimals: 0 },
		{ value: 24, suffix: '/7', label: 'Sprijin birou de călătorii', decimals: 0 },
	],
	services: {
		badge: 'Sprijin pentru călătorie',
		titleLead: 'Servicii de zbor concepute',
		titleHighlight: 'în jurul tratamentului dumneavoastră',
		subtitle: 'De la prima rezervare până la aterizarea la întoarcerea acasă, coordonatorul dumneavoastră gestionează fiecare detaliu al călătoriei.',
		ctaLabel: 'Întrebați',
		items: [
			{
				name: 'Asistență pentru rezervarea zborurilor',
				description: 'Biroul nostru de călătorii găsește și rezervă cele mai bune tarife la companiile aeriene partenere, sincronizate cu programul dumneavoastră de tratament.',
				features: ['Comparație de tarife între companii aeriene', 'Programare corelată cu tratamentul', 'Rezervări de grup pentru familii'],
			},
			{
				name: 'Escortă medicală și zboruri cu targă',
				description: 'Pentru pacienții care necesită supraveghere medicală în timpul zborului, organizăm zboruri escortate sau configurate cu targă.',
				features: ['Asistentă medicală sau paramedic la bord', 'Locuri configurate pentru targă', 'Coordonarea oxigenului și echipamentului'],
			},
			{
				name: 'Bilete pentru însoțitor și aparținător',
				description: 'Tarife reduse pentru însoțitor și itinerarii coordonate, astfel încât un membru al familiei să poată călători alături de dumneavoastră.',
				features: ['Tarife reduse pentru însoțitor', 'Locuri și escale coordonate', 'Gestionarea itinerariului comun'],
			},
			{
				name: 'Viză și documentație de călătorie',
				description: 'Sprijin complet pentru viza medicală, scrisorile de invitație ale spitalului și verificarea documentelor de călătorie.',
				features: ['Scrisoare de invitație pentru viza medicală', 'Listă de verificare și analiză a documentelor', 'Asistență pentru programarea la ambasadă'],
			},
		],
	},
	perks: {
		badge: 'Călătorie ușoară',
		titleLead: 'Fiecare zbor',
		titleHighlight: 'sprijinit integral',
		subtitle: 'Standard la fiecare rezervare, astfel încât călătoria să fie un motiv de îngrijorare în minus.',
		labels: [
			'Asistență pentru scaun cu rotile',
			'Îmbarcare prioritară',
			'Asistență pentru oxigen și echipament',
			'Asistență pentru bagaje',
			'Transfer aeroport-spital',
			'Rezervare flexibilă',
			'Birou de călătorii 24/7',
			'Sprijin multilingv',
		],
	},
	routes: {
		badge: 'Rute populare',
		titleLead: 'Rutele pacienților',
		titleHighlight: 'rezervate frecvent',
		subtitle: 'O mostră a rutelor internaționale pe care biroul nostru de călătorii le rezervă cel mai des.',
		fromLabel: 'din',
		ctaLabel: 'Verificați disponibilitatea',
		items: [
			{ originCity: 'Nigeria', destinationCity: 'Delhi NCR' },
			{ originCity: 'Libia', destinationCity: 'Mumbai' },
			{ originCity: 'Dubai', destinationCity: 'Chennai' },
			{ originCity: 'Sudan', destinationCity: 'Bangalore' },
		],
	},
	ctaHeading: 'Nu sunteți sigur de planul dumneavoastră de călătorie?',
	ctaBody: 'Spuneți-i coordonatorului dumneavoastră datele de călătorie și nevoile medicale — el va gestiona rezervarea de la început până la sfârșit.',
};

export const roTourism = {
	pageHeader: {
		badge: 'Pachet turistic',
		title: 'Recuperați-vă bine,',
		highlight: 'vedeți ceva frumos',
		subtitle:
			'Pachete turistice în ritmul recuperării, care vă permit să explorați India în timp ce vă vindecați — planificate în jurul tratamentului dumneavoastră, nu împotriva lui.',
	},
	stats: [
		{ value: 12, suffix: '+', label: 'Pachete personalizate', decimals: 0 },
		{ value: 4.9, suffix: '', label: 'Evaluare a oaspeților', decimals: 1 },
		{ value: 100, suffix: '%', label: 'În ritmul recuperării', decimals: 0 },
	],
	packages: {
		badge: 'Pachete personalizate',
		titleLead: 'Tururi în ritmul recuperării',
		titleHighlight: 'din toată India',
		subtitle: 'Fiecare itinerariu este programat în jurul tratamentului și recuperării dumneavoastră — niciodată invers.',
		ctaLabel: 'Întrebați',
		perPersonLabel: '/ persoană',
		fromLabel: 'de la',
		items: [
			{
				name: 'Recuperare pe Triunghiul de Aur',
				route: 'Delhi · Agra · Jaipur',
				duration: '5 zile',
				description: 'O călătorie ușoară, în ritmul recuperării, prin cel mai emblematic circuit patrimonial al Indiei, programată în jurul zilelor dumneavoastră de odihnă.',
				highlights: ['Taj Mahal la răsărit', 'Fortul Amber cu mașină privată', 'Opriri accesibile pentru scaun cu rotile'],
			},
			{
				name: 'Bunăstare pe apele interioare din Kerala',
				route: 'Kochi · Alleppey',
				duration: '4 zile',
				description: 'Plutiți pe apele interioare liniștite într-o barcă-casă privată — o evadare de bunăstare cu efort redus și liniște profundă.',
				highlights: ['Cazare privată pe barcă-casă', 'Sesiuni de bunăstare Ayurvedică', 'Suită de bunăstare la malul apei'],
			},
			{
				name: 'Refugiu de recuperare pe plaja din Goa',
				route: 'Goa de Nord și de Sud',
				duration: '6 zile',
				description: 'Cazare de bunăstare cu vedere la ocean, plimbări ușoare pe plajă, apusuri de soare și activități cu impact redus, aprobate de medic.',
				highlights: ['Suită de bunăstare cu vedere la ocean', 'Acces la fizioterapie pe plajă', 'Ritm zilnic flexibil'],
			},
			{
				name: 'Patrimoniul din Mysore și Bangalore',
				route: 'Bangalore · Mysore',
				duration: '3 zile',
				description: 'O călătorie patrimonială scurtă și confortabilă pentru pacienții în recuperare aproape de spitalul nostru partener din Bangalore.',
				highlights: ['Tur privat al Palatului Mysore', 'Vizită la grădina botanică', 'Itinerariu cu transferuri scurte'],
			},
		],
	},
	inclusions: {
		badge: 'Ce este inclus',
		titleLead: 'Fiecare pachet',
		titleHighlight: 'complet organizat',
		subtitle: 'Standard la fiecare itinerariu, astfel încât să vă puteți concentra pe recuperare, nu pe logistică.',
		labels: [
			'Mașină privată climatizată',
			'Ghid vorbitor de engleză',
			'Opriri accesibile pentru scaun cu rotile',
			'Itinerariu în ritmul recuperării',
			'Preluare și lăsare la hotel',
			'Experiențe culinare locale',
			'Opriri pentru fotografii',
			'Concierge 24/7',
		],
	},
	attractions: {
		badge: 'Atracții din apropiere',
		titleLead: 'Obiective turistice de adăugat',
		titleHighlight: 'în itinerariul dumneavoastră',
		subtitle: 'Atracții cu efort redus, selectate atent, aproape de spitalele noastre partenere.',
		ctaLabel: 'Adăugați în itinerariu',
		items: [
			{
				name: 'Taj Mahal',
				city: 'Agra · aproape de Delhi NCR',
				description: 'O vizită scurtă, prietenoasă cu scaunul cu rotile, la unul dintre cele mai emblematice monumente din lume.',
			},
			{
				name: 'Marine Drive',
				city: 'Mumbai',
				description: 'O promenadă ușoară și plană pentru apus de soare — o ieșire preferată cu efort redus pentru pacienții în recuperare.',
			},
			{
				name: 'Apele interioare din Alleppey',
				city: 'aproape de Kochi',
				description: 'O croazieră liniștită, privată, pe barcă-casă, pe canalele calme ale apelor interioare din Kerala.',
			},
			{
				name: 'Palatul Mysore',
				city: 'aproape de Bangalore',
				description: 'Un tur impunător al unui palat patrimonial, cu căi accesibile și transferuri cu golf-cart.',
			},
		],
	},
	ctaHeading: 'Nu sunteți sigur care tur se potrivește recuperării dumneavoastră?',
	ctaBody: 'Spuneți-i coordonatorului dumneavoastră programul de tratament — el va recomanda un itinerariu în ritmul potrivit.',
};

export const roCommon = {
	talkToCoordinator: 'Vorbiți cu un coordonator',
};
