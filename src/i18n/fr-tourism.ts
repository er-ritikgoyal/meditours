/**
 * French translations for the Hotel, Flights, and Tourism Package pages
 * and their supporting components.
 */

export const frHotel = {
	pageHeader: {
		badge: 'Séjour et rétablissement',
		title: 'Des séjours confortables,',
		highlight: 'proches des soins',
		subtitle:
			'Des hôtels pré-validés et adaptés au rétablissement à proximité de chaque hôpital partenaire — réservés et gérés par votre coordinateur.',
	},
	stats: [
		{ value: 200, suffix: '+', label: 'Hébergements partenaires', decimals: 0 },
		{ value: 4.8, suffix: '', label: 'Note moyenne', decimals: 1 },
		{ value: 15, suffix: ' min', label: "Distance moy. de l'hôpital", decimals: 0 },
	],
	tiers: {
		badge: "Options d'hébergement",
		mostPopularLabel: 'Le plus populaire',
		perNightLabel: '/ nuit',
		ctaLabel: 'Se renseigner sur ce séjour',
		items: [
			{
				name: 'Séjour Confort',
				description: 'Maisons d\'hôtes et appartements meublés économiques à quelques minutes de route de votre hôpital.',
				features: ['Chambre climatisée avec kitchenette', 'Wi-Fi gratuit', 'Ménage quotidien', 'Navette hôpital'],
			},
			{
				name: 'Suite Premium',
				description: 'Hôtels 3-4 étoiles adaptés au rétablissement, à distance de marche des grands hôpitaux partenaires.',
				features: [
					'Tout ce qui est inclus dans Séjour Confort',
					'Assistance infirmière sur appel',
					'Plans de repas diététiques',
					'Chambres accessibles en fauteuil roulant',
					'Transfert aéroport inclus',
				],
			},
			{
				name: 'Villa de Récupération de Luxe',
				description: 'Hôtels 5 étoiles et résidences privées avec assistance infirmière en chambre pour une confidentialité totale.',
				features: [
					'Tout ce qui est inclus dans Suite Premium',
					'Assistance infirmière privée en chambre',
					'Chef personnel et repas sur mesure',
					'Service de voiture avec chauffeur',
					'Conciergerie dédiée 24 h/24 et 7 j/7',
				],
			},
		],
	},
	amenities: {
		badge: 'Conçu pour le rétablissement',
		titleLead: 'Chaque séjour est',
		titleHighlight: 'prêt pour le patient',
		subtitle: 'Standard dans chaque catégorie d\'hébergement, pour ne jamais avoir à demander deux fois.',
		labels: [
			'Wi-Fi gratuit',
			'Navette hôpital',
			'Assistance infirmière sur appel',
			'Plans de repas diététiques',
			'Accessible en fauteuil roulant',
			'Réception 24 h/24',
			'Service de blanchisserie',
			'Climatisation',
		],
	},
	featuredStays: {
		badge: 'Séjours partenaires',
		titleLead: 'Séjours en vedette près de',
		titleHighlight: 'nos meilleurs hôpitaux',
		subtitle: 'Un échantillon des hébergements que nos coordinateurs réservent le plus souvent.',
		fromLabel: 'À partir de',
		perNightLabel: '/nuit',
		viewDetailsLabel: 'Voir les détails',
		stays: [
			{ name: 'The Wellness Residency', city: 'Delhi NCR', distance: "0,4 km de l'hôpital Apollo" },
			{ name: 'Kokilaben Guest Suites', city: 'Mumbai', distance: "0,6 km de l'hôpital partenaire" },
			{ name: 'Apollo Comfort Inn', city: 'Chennai', distance: "0,3 km d'Apollo Chennai" },
			{ name: 'Narayana Recovery Stays', city: 'Bangalore', distance: '0,5 km de Narayana Health' },
		],
	},
	ctaHeading: 'Vous ne savez pas quel séjour vous convient ?',
	ctaBody: 'Indiquez votre budget et vos besoins de récupération à votre coordinateur — il présélectionnera les meilleures options pour votre voyage.',
};

export const frFlights = {
	pageHeader: {
		badge: 'Voyagez en toute confiance',
		title: 'Des vols fluides,',
		highlight: 'droit vers les soins',
		subtitle: "De la réservation du billet aux escortes médicales, notre service voyage coordonne chaque étape de votre trajet vers l'Inde.",
	},
	stats: [
		{ value: 15, suffix: '+', label: 'Compagnies aériennes partenaires', decimals: 0 },
		{ value: 10000, suffix: '+', label: 'Patients transportés', decimals: 0 },
		{ value: 24, suffix: '/7', label: 'Assistance du service voyage', decimals: 0 },
	],
	services: {
		badge: 'Assistance voyage',
		titleLead: 'Des services de vol conçus',
		titleHighlight: 'autour de vos soins',
		subtitle: "De la première réservation jusqu'à l'atterrissage de retour, votre coordinateur gère chaque détail du voyage.",
		ctaLabel: 'Se renseigner',
		items: [
			{
				name: 'Assistance à la réservation de vols',
				description: 'Notre service voyage trouve et réserve les meilleurs tarifs auprès de compagnies partenaires, calés sur votre calendrier de traitement.',
				features: ['Comparaison des tarifs entre compagnies', 'Horaires alignés sur le traitement', 'Réservation de groupe pour la famille'],
			},
			{
				name: 'Escorte médicale et vols en civière',
				description: "Pour les patients nécessitant une supervision médicale en vol, nous organisons des vols avec escorte ou en configuration civière.",
				features: ['Infirmier ou paramédical à bord', 'Sièges en classe civière', "Coordination de l'oxygène et de l'équipement"],
			},
			{
				name: 'Billets accompagnant et assistant',
				description: 'Tarifs accompagnant réduits et itinéraires synchronisés pour qu\'un proche puisse voyager avec vous.',
				features: ['Tarifs accompagnant réduits', 'Sièges et escales synchronisés', "Gestion d'itinéraire partagé"],
			},
			{
				name: 'Visa et documentation de voyage',
				description: "Accompagnement complet pour les visas médicaux, lettres d'invitation hospitalière et vérification des documents de voyage.",
				features: ["Lettres d'invitation pour visa médical", 'Liste de vérification des documents', "Accompagnement au rendez-vous à l'ambassade"],
			},
		],
	},
	perks: {
		badge: 'Voyage simplifié',
		titleLead: 'Chaque vol est',
		titleHighlight: 'entièrement pris en charge',
		subtitle: 'Standard sur chaque réservation, pour que le voyage soit une préoccupation en moins.',
		labels: [
			'Assistance fauteuil roulant',
			'Embarquement prioritaire',
			"Assistance oxygène et équipement",
			'Assistance bagages',
			'Transfert aéroport-hôpital',
			'Report de vol flexible',
			'Service voyage 24 h/24',
			'Assistance multilingue',
		],
	},
	routes: {
		badge: 'Trajets populaires',
		titleLead: 'Trajets patients',
		titleHighlight: 'fréquemment réservés',
		subtitle: 'Un échantillon des trajets internationaux que notre service voyage réserve le plus souvent.',
		fromLabel: 'À partir de',
		ctaLabel: 'Vérifier la disponibilité',
		items: [
			{ originCity: 'Nigéria', destinationCity: 'Delhi NCR' },
			{ originCity: 'Libye', destinationCity: 'Mumbai' },
			{ originCity: 'Dubaï', destinationCity: 'Chennai' },
			{ originCity: 'Soudan', destinationCity: 'Bangalore' },
		],
	},
	ctaHeading: 'Vous n\'êtes pas sûr de votre plan de voyage ?',
	ctaBody: 'Indiquez à votre coordinateur vos dates de voyage et vos besoins médicaux — il gérera la réservation de bout en bout.',
};

export const frTourism = {
	pageHeader: {
		badge: 'Circuit touristique',
		title: 'Récupérez bien,',
		highlight: 'découvrez de belles choses',
		subtitle:
			"Des circuits touristiques adaptés au rétablissement qui vous permettent de découvrir l'Inde pendant que votre corps guérit — planifiés autour de votre traitement, pas contre lui.",
	},
	stats: [
		{ value: 12, suffix: '+', label: 'Circuits sur mesure', decimals: 0 },
		{ value: 4.9, suffix: '', label: 'Note des visiteurs', decimals: 1 },
		{ value: 100, suffix: '%', label: 'Rythme adapté au rétablissement', decimals: 0 },
	],
	packages: {
		badge: 'Circuits sur mesure',
		titleLead: 'Circuits au rythme du rétablissement',
		titleHighlight: "à travers l'Inde",
		subtitle: 'Chaque itinéraire est calé sur votre calendrier de traitement et de rétablissement — jamais l\'inverse.',
		ctaLabel: 'Se renseigner',
		perPersonLabel: '/ personne',
		fromLabel: 'À partir de',
		items: [
			{
				name: 'Triangle d\'or — Rétablissement',
				route: 'Delhi · Agra · Jaipur',
				duration: '5 jours',
				description: "Un circuit doux et adapté au rétablissement sur le circuit patrimonial le plus emblématique de l'Inde, programmé autour de vos jours de repos.",
				highlights: ['Taj Mahal au lever du soleil', 'Fort Amber en voiture privée', 'Étapes accessibles en fauteuil roulant'],
			},
			{
				name: 'Bien-être dans les backwaters du Kerala',
				route: 'Kochi · Alleppey',
				duration: '4 jours',
				description: 'Naviguez sur des eaux calmes à bord d\'une péniche privée — une évasion reposante et sereine pour la récupération.',
				highlights: ['Séjour en péniche privée', 'Séance de bien-être ayurvédique', 'Suite de récupération en bord de rivière'],
			},
			{
				name: 'Retraite de récupération sur les plages de Goa',
				route: 'Goa Nord et Sud',
				duration: '6 jours',
				description: 'Séjours de récupération face à la mer avec promenades douces sur la plage, vues sur le coucher du soleil et activités à faible impact approuvées par un médecin.',
				highlights: ['Suite de récupération face à la mer', 'Accès à la physiothérapie en bord de plage', 'Rythme quotidien flexible'],
			},
			{
				name: 'Patrimoine de Mysore et Bangalore',
				route: 'Bangalore · Mysore',
				duration: '3 jours',
				description: 'Un circuit patrimonial court et confortable pour les patients en convalescence près de nos hôpitaux partenaires de Bangalore.',
				highlights: ['Visite privée du palais de Mysore', 'Visite du jardin botanique', 'Itinéraire à transferts courts'],
			},
		],
	},
	inclusions: {
		badge: 'Ce qui est inclus',
		titleLead: 'Chaque circuit est',
		titleHighlight: 'entièrement organisé',
		subtitle: 'Standard sur chaque itinéraire, pour que vous puissiez vous concentrer sur le rétablissement, pas sur la logistique.',
		labels: [
			'Véhicule privé climatisé',
			'Guide francophone/anglophone',
			'Étapes accessibles en fauteuil roulant',
			'Itinéraire au rythme du rétablissement',
			"Prise en charge et retour à l'hôtel",
			'Découvertes culinaires locales',
			'Arrêts photo',
			'Conciergerie 24 h/24',
		],
	},
	attractions: {
		badge: 'Attractions à proximité',
		titleLead: 'Des sites à ajouter',
		titleHighlight: 'à votre itinéraire',
		subtitle: 'Une sélection d\'attractions à faible effort, proches de nos hôpitaux partenaires.',
		ctaLabel: "Ajouter à l'itinéraire",
		items: [
			{
				name: 'Taj Mahal',
				city: 'Agra · près de Delhi NCR',
				description: "Une courte visite accessible en fauteuil roulant de l'un des monuments les plus emblématiques du monde.",
			},
			{
				name: 'Marine Drive',
				city: 'Mumbai',
				description: 'Une promenade plane et facile au coucher du soleil — une sortie à faible effort appréciée des patients en convalescence.',
			},
			{
				name: 'Backwaters d\'Alleppey',
				city: 'près de Kochi',
				description: 'Une croisière calme en péniche privée à travers les canaux tranquilles du Kerala.',
			},
			{
				name: 'Palais de Mysore',
				city: 'près de Bangalore',
				description: "Une visite d'un grand palais patrimonial avec des allées accessibles et des transferts en voiturette de golf.",
			},
		],
	},
	ctaHeading: 'Vous ne savez pas quel circuit correspond à votre rétablissement ?',
	ctaBody: 'Indiquez à votre coordinateur votre calendrier de traitement — il vous recommandera un itinéraire au rythme adapté.',
};

export const frCommon = {
	talkToCoordinator: 'Parler à un coordinateur',
};
