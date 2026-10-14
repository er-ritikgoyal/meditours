/**
 * French translations for the deep treatment content in src/data/treatments.ts.
 *
 * Keyed by slug. Only translatable fields are included — numeric fields
 * (prices, durations, counts) live in the English source and are reused as-is.
 * AI-generated; recommend a native French speaker with medical background
 * reviews this before it's relied on for clinical decisions.
 */

export interface FaqItemFr {
	question: string;
	answer: string;
}

export interface CostRowFr {
	country: string;
	waitTime: string;
	successRate: string;
}

export interface TreatmentDataFr {
	name: string;
	shortDescription: string;
	overview: string;
	procedures: string[];
	benefits: string[];
	flagshipProcedure: string;
	costComparison: CostRowFr[];
	inclusions: string[];
	exclusions: string[];
	faqs: FaqItemFr[];
}

export const frTreatments: Record<string, TreatmentDataFr> = {
	'cardiac-care': {
		name: 'Soins cardiaques',
		shortDescription:
			'Pontage coronarien, réparation valvulaire et angioplastie par des chirurgiens formés dans les plus grands centres cardiaques.',
		overview:
			"Les programmes cardiaques indiens réunissent des chirurgiens formés à l'international et certains des plus hauts volumes chirurgicaux au monde, donnant aux patients accès à des procédures avancées comme le pontage à cœur battant et la réparation valvulaire mini-invasive, à une fraction du prix occidental — sans liste d'attente.",
		procedures: ['Pontage coronarien', 'Remplacement valvulaire', 'Angioplastie'],
		benefits: [
			'Chirurgiens formés et certifiés aux États-Unis, au Royaume-Uni et en Europe',
			"Parmi les plus hauts volumes de chirurgie cardiaque au monde, gage d'une expertise pratique approfondie",
			'Unité de soins intensifs cardiaques dédiée et unité de récupération intermédiaire',
			"Aucune liste d'attente — la plupart des interventions sont programmées quelques jours après le premier avis",
		],
		flagshipProcedure: 'Pontage aorto-coronarien (PAC)',
		costComparison: [
			{ country: 'États-Unis', waitTime: '4 à 8 semaines', successRate: '95–97 %' },
			{ country: 'Royaume-Uni', waitTime: '3 à 12 mois (NHS)', successRate: '95–97 %' },
			{ country: 'Allemagne', waitTime: '4 à 10 semaines', successRate: '94–96 %' },
			{ country: 'Thaïlande', waitTime: '2 à 4 semaines', successRate: '93–95 %' },
			{ country: 'Inde', waitTime: '1 à 2 semaines', successRate: '96 %+' },
		],
		inclusions: [
			"Bilan cardiaque préopératoire, ECG, échographie et analyse de l'angiographie",
			'Honoraires du chirurgien pour le pontage ou la procédure valvulaire',
			"Frais de bloc opératoire et d'anesthésie",
			'Séjour en soins intensifs cardiaques (3 jours) et chambre individuelle de récupération (6 jours)',
			"Soins infirmiers, surveillance et kinésithérapie pendant l'hospitalisation",
			'Médicaments cardiaques standards et consommables durant le séjour',
			"Frais de laboratoire et de radiologie liés à l'intervention",
			'Compte-rendu de sortie et plan de soins postopératoires écrit',
		],
		exclusions: [
			"Séjour de pré-admission pour stabiliser un patient avant que la chirurgie ne soit validée",
			"Séjour hospitalier ou en soins intensifs au-delà de la durée du forfait",
			"Interventions avancées telles qu'un second pontage ou une réparation valvulaire hors du périmètre initial",
			'Dispositifs implantables comme les stimulateurs cardiaques, sauf mention contraire',
			'Médicaments à emporter au-delà du kit de sortie standard',
			'Traitement de pathologies préexistantes sans lien découvertes lors du bilan',
			"Réintervention pour des complications sans lien avec la procédure initiale",
		],
		faqs: [
			{
				question: "Quel est le coût d'un pontage coronarien en Inde ?",
				answer:
					"Un forfait de pontage coronarien (PAC) en Inde démarre à partir de 8 000 USD, soit environ 90 % de moins que les 120 000 USD généralement facturés aux États-Unis. Le forfait couvre le bilan préopératoire, l'intervention elle-même, le séjour en soins intensifs et en chambre, les soins infirmiers et les médicaments standards.",
			},
			{
				question: 'Quel est le taux de réussite de la chirurgie cardiaque en Inde ?',
				answer:
					"Les principaux centres cardiaques indiens affichent des taux de réussite de pontage et de chirurgie valvulaire de 96 % et plus, comparables aux meilleurs programmes des États-Unis et d'Europe, soutenus par des unités de soins intensifs cardiaques dédiées et des volumes chirurgicaux annuels élevés.",
			},
			{
				question: 'Combien de temps dois-je rester en Inde pour une chirurgie cardiaque ?',
				answer:
					"La plupart des patients restent environ 9 jours à l'hôpital (3 en soins intensifs, 6 en chambre de récupération) et il est conseillé de rester en Inde environ 3 semaines au total, afin que l'équipe cardiaque puisse surveiller le rétablissement avant le voyage retour.",
			},
			{
				question: "Ai-je besoin d'un bilan de santé complet avant la confirmation de l'intervention ?",
				answer:
					"Oui. Vos rapports (ECG, échocardiogramme, angiographie si disponible) sont examinés par notre comité cardiaque avant la finalisation de votre plan de traitement et de votre devis, et une téléconsultation avec le chirurgien est organisée si nécessaire.",
			},
			{
				question: 'Le pontage mini-invasif ou à cœur battant est-il disponible ?',
				answer:
					"Oui, plusieurs de nos hôpitaux partenaires proposent le pontage à cœur battant (sans circulation extracorporelle) et la réparation valvulaire mini-invasive, ce qui peut raccourcir le séjour en soins intensifs et le temps de récupération selon votre cas.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez vos derniers rapports cardiaques via notre formulaire de contact ou WhatsApp, et un coordinateur organisera un avis spécialisé gratuit et un devis transparent sous 24 heures.",
			},
		],
	},

	orthopedics: {
		name: 'Orthopédie',
		shortDescription: 'Remplacement articulaire et médecine du sport avec programmes de rééducation accélérée.',
		overview:
			"De la prothèse de genou assistée par robot à la fusion vertébrale complexe, les centres d'orthopédie indiens allient technologie d'implants moderne et programmes de kinésithérapie structurés conçus pour remettre les patients sur pied plus rapidement.",
		procedures: ['Prothèse de genou', 'Prothèse de hanche', 'Fusion vertébrale'],
		benefits: [
			'Remplacement articulaire robotisé et assisté par ordinateur disponible dans les centres de pointe',
			'Kinésithérapie structurée en milieu hospitalier dès le premier jour',
			"Implants de haute qualité d'origine internationale",
			'Séjour hospitalier typique de 3 à 5 jours pour un remplacement articulaire',
		],
		flagshipProcedure: 'Prothèse totale de genou',
		costComparison: [
			{ country: 'États-Unis', waitTime: '4 à 6 semaines', successRate: '96–98 %' },
			{ country: 'Royaume-Uni', waitTime: '6 à 12 mois (NHS)', successRate: '96–98 %' },
			{ country: 'Allemagne', waitTime: '3 à 6 semaines', successRate: '95–97 %' },
			{ country: 'Thaïlande', waitTime: '2 à 3 semaines', successRate: '94–96 %' },
			{ country: 'Inde', waitTime: '1 à 2 semaines', successRate: '97 %+' },
		],
		inclusions: [
			"Bilan orthopédique préopératoire incluant radiographies et bilan d'aptitude",
			"Honoraires du chirurgien et de l'anesthésiste pour le remplacement articulaire",
			'Frais de bloc opératoire et implant (standard, sauf option supérieure)',
			'Unité de soins intensifs/récupération pendant 1 jour puis 4 jours en chambre individuelle',
			'Séances de kinésithérapie structurées en milieu hospitalier',
			'Laboratoire, radiologie et médicaments postopératoires standards durant le séjour',
			"Compte-rendu de sortie avec programme d'exercices à domicile et plan de rééducation",
		],
		exclusions: [
			"Implants premium ou sur mesure au-delà de l'implant standard",
			'Séjour hospitalier au-delà de la durée du forfait',
			'Chirurgie bilatérale (deux genoux) sauf devis séparé',
			'Séances de kinésithérapie ambulatoire après la sortie',
			'Traitement de pathologies sans lien identifiées lors du bilan préopératoire',
			"Chirurgie de reprise pour des complications sans lien avec l'intervention initiale",
		],
		faqs: [
			{
				question: "Quel est le coût d'une prothèse de genou en Inde ?",
				answer:
					"Un forfait de prothèse totale de genou en Inde démarre à partir de 5 500 USD, environ 85 % de moins que les tarifs américains habituels, et inclut les honoraires du chirurgien, l'implant, le séjour hospitalier et la kinésithérapie en milieu hospitalier.",
			},
			{
				question: 'La prothèse de genou assistée par robot est-elle disponible ?',
				answer:
					"Oui, plusieurs de nos hôpitaux partenaires proposent un remplacement articulaire robotisé et assisté par ordinateur, ce qui peut améliorer l'alignement de l'implant et raccourcir le temps de récupération pour les patients éligibles.",
			},
			{
				question: 'Quelle est la durée du séjour hospitalier et de la récupération ?',
				answer:
					"La plupart des patients restent environ 5 jours à l'hôpital et il est conseillé de rester en Inde 2 à 3 semaines afin que les kinésithérapeutes puissent guider la rééducation précoce avant le retour.",
			},
			{
				question: "Quelles marques d'implants sont utilisées ?",
				answer:
					"Nos hôpitaux partenaires utilisent des marques d'implants certifiées à l'international en standard, avec des options d'implants premium disponibles sur demande et devis séparé.",
			},
			{
				question: 'Les deux genoux peuvent-ils être remplacés lors du même voyage ?',
				answer:
					"Oui, un remplacement bilatéral simultané ou par étapes est possible pour les candidats adaptés — votre chirurgien confirmera la meilleure approche après examen de vos radiographies et de votre état de santé général.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Envoyez vos radiographies et un résumé de vos symptômes via notre formulaire de contact, et vous recevrez un avis spécialisé et un devis transparent sous 24 heures.",
			},
		],
	},

	oncology: {
		name: 'Oncologie',
		shortDescription: 'Soins oncologiques multidisciplinaires combinant chirurgie, chimiothérapie et radiothérapie ciblée.',
		overview:
			"Le traitement du cancer en Inde est assuré par des comités pluridisciplinaires réunissant chirurgiens oncologues, oncologues médicaux et spécialistes en radiothérapie afin d'établir un plan de traitement coordonné — le même modèle multidisciplinaire utilisé dans les grands centres occidentaux.",
		procedures: ['Chirurgie tumorale', 'Chimiothérapie', 'Radiothérapie'],
		benefits: [
			'Comités pluridisciplinaires pour chaque dossier',
			'Accès à la radiothérapie avancée (IMRT, IGRT, options de protonthérapie dans certains centres)',
			'Prise en charge complète du diagnostic au suivi post-traitement',
			'Conseillers en oncologie dédiés pour accompagner patients et familles',
		],
		flagshipProcedure: 'Chirurgie de résection tumorale',
		costComparison: [
			{ country: 'États-Unis', waitTime: '4 à 8 semaines', successRate: 'Varie selon le stade' },
			{ country: 'Royaume-Uni', waitTime: '2 à 6 mois (NHS)', successRate: 'Varie selon le stade' },
			{ country: 'Allemagne', waitTime: '4 à 8 semaines', successRate: 'Varie selon le stade' },
			{ country: 'Thaïlande', waitTime: '2 à 4 semaines', successRate: 'Varie selon le stade' },
			{ country: 'Inde', waitTime: '1 à 2 semaines', successRate: 'Varie selon le stade' },
		],
		inclusions: [
			"Examen par le comité pluridisciplinaire des rapports de biopsie, d'imagerie et d'anatomopathologie existants",
			"Honoraires du chirurgien, de l'anesthésiste et de l'équipe d'oncologie pour l'intervention principale",
			'Frais de bloc opératoire et de soins intensifs (2 jours) puis 6 jours en chambre individuelle',
			"Soins infirmiers et médicaments de chimiothérapie/soutien standards pendant l'hospitalisation",
			"Frais de laboratoire, radiologie et anatomopathologie liés à l'intervention principale",
			"Accompagnement dédié d'un conseiller en oncologie pour le patient et sa famille",
			'Compte-rendu de sortie avec plan structuré de suivi chimiothérapie/radiothérapie',
		],
		exclusions: [
			'Cycles de chimiothérapie ou séances de radiothérapie supplémentaires au-delà du forfait initial',
			'Tests de profilage génomique/moléculaire sauf demande spécifique',
			'Séjour hospitalier au-delà de la durée du forfait',
			'Thérapies ciblées ou immunothérapie, facturées séparément en raison de coûts variables',
			'Traitement de pathologies sans lien identifiées lors du bilan',
			"Réintervention pour des complications sans lien avec la procédure initiale",
		],
		faqs: [
			{
				question: "Quel est le coût d'une chirurgie du cancer en Inde ?",
				answer:
					"Un forfait de résection tumorale en Inde démarre à partir de 6 000 USD, environ 90 % de moins qu'une chirurgie comparable aux États-Unis, couvrant l'examen par le comité pluridisciplinaire, la chirurgie, le séjour en soins intensifs/chambre et les soins de soutien initiaux.",
			},
			{
				question: 'Comment sont tarifées la chimiothérapie et la radiothérapie ?',
				answer:
					"Les cycles de chimiothérapie et les séances de radiothérapie (IMRT/IGRT) sont facturés séparément selon votre protocole spécifique, car les traitements varient largement selon le type et le stade du cancer — votre comité pluridisciplinaire fournit une estimation détaillée après examen de vos rapports.",
			},
			{
				question: 'Une équipe de spécialistes examinera-t-elle mon dossier, ou un seul médecin ?',
				answer:
					"Chaque dossier passe par un comité pluridisciplinaire — chirurgien oncologue, oncologue médical et radiothérapeute — avant qu'un plan de traitement ne soit finalisé, le même modèle utilisé dans les grands centres occidentaux du cancer.",
			},
			{
				question: 'Combien de temps devrai-je rester en Inde ?',
				answer:
					"Les patients opérés restent généralement 8 jours à l'hôpital, avec un séjour total recommandé d'environ 4 semaines en Inde si une chimiothérapie ou une radiothérapie suit la chirurgie.",
			},
			{
				question: "Puis-je obtenir un second avis avant de m'engager pour une chirurgie ?",
				answer:
					"Oui. Envoyez vos rapports de biopsie, d'imagerie et d'anatomopathologie pour un examen gratuit par le comité pluridisciplinaire et un second avis avant de décider de voyager pour le traitement.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez vos rapports diagnostiques via notre formulaire de contact ou WhatsApp, et notre coordinateur en oncologie organisera un examen par le comité pluridisciplinaire et une estimation transparente sous 48 heures.",
			},
		],
	},

	'cosmetic-surgery': {
		name: 'Chirurgie esthétique et plastique',
		shortDescription: "Interventions esthétiques et reconstructrices réalisées par des chirurgiens certifiés à l'international.",
		overview:
			"En combinant des chirurgiens certifiés avec des soins post-opératoires haut de gamme axés sur la récupération, l'Inde est devenue une destination privilégiée pour les interventions esthétiques et reconstructrices — avec la confidentialité et la discrétion attendues par les patients internationaux.",
		procedures: ['Rhinoplastie', 'Liposuccion', 'Greffe de cheveux'],
		benefits: [
			'Chirurgiens plasticiens et reconstructeurs certifiés',
			'Suites de récupération privées et discrètes, séparées des services hospitaliers généraux',
			'Techniques modernes incluant la greffe de cheveux FUE et la liposuccion VASER',
			"Consultation complète avant/après avec imagerie 3D dans certaines cliniques",
		],
		flagshipProcedure: 'Rhinoplastie',
		costComparison: [
			{ country: 'États-Unis', waitTime: '2 à 4 semaines', successRate: 'Grande satisfaction des patients' },
			{ country: 'Royaume-Uni', waitTime: '3 à 6 semaines', successRate: 'Grande satisfaction des patients' },
			{ country: 'Allemagne', waitTime: '2 à 4 semaines', successRate: 'Grande satisfaction des patients' },
			{ country: 'Thaïlande', waitTime: '1 à 2 semaines', successRate: 'Grande satisfaction des patients' },
			{ country: 'Inde', waitTime: '3 à 7 jours', successRate: 'Grande satisfaction des patients' },
		],
		inclusions: [
			'Consultation avec imagerie 3D et planification préopératoire',
			"Honoraires du chirurgien pour l'intervention",
			"Frais de bloc opératoire et d'anesthésie",
			'Une nuit dans une suite de récupération privée',
			'Pansements postopératoires, vêtements de compression et première visite de suivi',
			'Médicaments standards pendant le séjour de récupération',
		],
		exclusions: [
			'Interventions combinées (par ex. rhinoplastie et augmentation du menton) sauf devis conjoint',
			"Séjour de récupération au-delà d'une nuit, ou soins post-opératoires prolongés de type hôtelier",
			'Chirurgie de reprise pour retouches esthétiques après la période de guérison initiale',
			'Médicaments à emporter au-delà du kit de sortie standard',
			'Vêtements ou produits de soin des cicatrices au-delà de ceux fournis à la sortie',
		],
		faqs: [
			{
				question: "Quel est le coût d'une rhinoplastie en Inde ?",
				answer:
					"La rhinoplastie en Inde démarre à partir de 2 000 USD, environ 75 à 85 % de moins qu'aux États-Unis ou au Royaume-Uni, et inclut la consultation, la chirurgie, l'anesthésie et une nuit de récupération privée.",
			},
			{
				question: "Les chirurgiens sont-ils formés à l'international ?",
				answer:
					"Oui, nos chirurgiens esthétiques partenaires sont certifiés et beaucoup ont suivi une formation ou un fellowship supplémentaire aux États-Unis, au Royaume-Uni ou en Europe en chirurgie esthétique et reconstructrice.",
			},
			{
				question: 'Quel niveau de confidentialité et de discrétion est assuré ?',
				answer:
					"Les patients récupèrent dans des suites privées séparées des services hospitaliers généraux, et toutes les consultations et dossiers sont traités avec une stricte confidentialité.",
			},
			{
				question: 'Combien de temps dois-je prévoir de rester en Inde ?',
				answer:
					"La plupart des interventions esthétiques nécessitent environ 1 à 2 semaines en Inde pour la chirurgie et le suivi initial, bien que cela varie selon l'intervention — votre chirurgien confirmera le calendrier exact lors de la consultation.",
			},
			{
				question: 'Puis-je combiner plusieurs interventions en un seul voyage ?',
				answer:
					"Oui, de nombreux patients combinent des interventions comme la rhinoplastie et la liposuccion en un seul voyage ; votre chirurgien vous conseillera sur ce qui peut être fait ensemble en toute sécurité selon votre état de santé et vos besoins de récupération.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez vos objectifs et des photos via notre formulaire de contact, et notre équipe organisera une consultation privée avec imagerie 3D et un devis transparent sous 24 heures.",
			},
		],
	},

	fertility: {
		name: 'Traitement de la fertilité',
		shortDescription: 'FIV et soins de procréation avec des taux de réussite élevés et des protocoles personnalisés.',
		overview:
			"Les cliniques de fertilité indiennes affichent des taux de réussite comparables aux meilleurs centres de FIV mondiaux, avec des protocoles hormonaux personnalisés, des laboratoires d'embryologie internes, et aucune des listes d'attente de plusieurs mois courantes en Europe et en Amérique du Nord.",
		procedures: ['FIV', 'IIU', "Congélation d'ovocytes"],
		benefits: [
			"Laboratoires internes d'embryologie et de dépistage génétique",
			'Protocoles de stimulation hormonale personnalisés',
			"Aucune liste d'attente de plusieurs mois — les cycles débutent généralement en quelques semaines",
			"Forfaits groupés couvrant les médicaments, le suivi et l'intervention elle-même",
		],
		flagshipProcedure: 'Cycle de FIV',
		costComparison: [
			{ country: 'États-Unis', waitTime: '4 à 8 semaines', successRate: '40–50 % par cycle' },
			{ country: 'Royaume-Uni', waitTime: '6 à 12 mois (NHS)', successRate: '35–45 % par cycle' },
			{ country: 'Allemagne', waitTime: '4 à 8 semaines', successRate: '35–45 % par cycle' },
			{ country: 'Thaïlande', waitTime: '2 à 4 semaines', successRate: '40–48 % par cycle' },
			{ country: 'Inde', waitTime: '1 à 2 semaines', successRate: '40–50 % par cycle' },
		],
		inclusions: [
			'Bilan de fertilité initial incluant évaluation hormonale et échographique',
			'Visites de suivi de la stimulation ovarienne',
			"Ponction ovocytaire et frais d'anesthésie",
			'Embryologie interne, fécondation et culture embryonnaire',
			"Transfert d'un embryon unique",
			'Médicaments de fertilité standards pour le cycle de stimulation',
		],
		exclusions: [
			"Don d'ovocytes, don de sperme ou arrangements de gestation pour autrui",
			'Diagnostic génétique préimplantatoire (DPI) sauf demande spécifique',
			"Transferts d'embryons supplémentaires au-delà du premier, ou cycles de transfert d'embryons congelés",
			'Médicaments au-delà du protocole de stimulation standard',
			"Traitement de l'infertilité masculine tel que ICSI/TESA sauf devis séparé",
		],
		faqs: [
			{
				question: "Quel est le coût d'un traitement de FIV en Inde ?",
				answer:
					"Un cycle de FIV en Inde démarre à partir de 3 000 USD, environ 80 % de moins qu'aux États-Unis, et couvre le bilan, le suivi de la stimulation, la ponction ovocytaire, l'embryologie et un transfert d'embryon unique.",
			},
			{
				question: 'Quel est le taux de réussite de la FIV en Inde ?',
				answer:
					"Les principales cliniques de fertilité indiennes affichent des taux de réussite par cycle de 40 à 50 %, comparables aux meilleures cliniques des États-Unis et d'Europe, les résultats dépendant de l'âge et des facteurs de fertilité sous-jacents.",
			},
			{
				question: 'Combien de temps dure un cycle de FIV ?',
				answer:
					"Un cycle complet de la stimulation au transfert dure généralement 2 à 3 semaines, la plupart des patients internationaux prévoyant de rester en Inde environ 3 semaines pour terminer le suivi, la ponction et le transfert.",
			},
			{
				question: "Proposez-vous des programmes de don d'ovocytes ou de gestation pour autrui ?",
				answer:
					"Ces arrangements impliquent des démarches légales et médicales supplémentaires et sont facturés séparément — contactez notre coordinateur en fertilité pour discuter de l'éligibilité et de la réglementation en vigueur.",
			},
			{
				question: 'Le traitement peut-il commencer sans voyager d\'abord ?',
				answer:
					"Oui, une téléconsultation initiale et un examen des rapports peuvent avoir lieu avant votre voyage, afin que votre protocole soit planifié à l'avance et que votre voyage soit calé sur le cycle de stimulation.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez vos antécédents de fertilité et tout rapport d'examen antérieur via notre formulaire de contact, et un coordinateur en fertilité organisera un avis spécialisé et une estimation transparente sous 24 heures.",
			},
		],
	},

	'organ-transplant': {
		name: "Greffe d'organe",
		shortDescription: 'Programmes de greffe du foie et du rein avec équipes de soins postopératoires dédiées.',
		overview:
			"L'Inde réalise certains des plus hauts volumes mondiaux de greffes du foie et du rein à donneur vivant, soutenus par des unités de soins intensifs de transplantation dédiées et des programmes de suivi postopératoire à long terme pour les patients internationaux.",
		procedures: ['Greffe de rein', 'Greffe de foie', 'Greffe de moelle osseuse'],
		benefits: [
			'Programmes de greffe à donneur vivant à haut volume',
			'Unités de soins intensifs de transplantation dédiées et unités de récupération isolées',
			"Planification à long terme de l'immunosuppression et du suivi",
			'Accompagnement juridique et éthique du donneur tout au long du processus',
		],
		flagshipProcedure: 'Greffe de foie à donneur vivant',
		costComparison: [
			{ country: 'États-Unis', waitTime: "Années (liste d'attente)", successRate: '88–92 %' },
			{ country: 'Royaume-Uni', waitTime: '1 à 3 ans', successRate: '88–91 %' },
			{ country: 'Allemagne', waitTime: '6 à 18 mois', successRate: '87–90 %' },
			{ country: 'Thaïlande', waitTime: 'Modéré', successRate: '85–88 %' },
			{ country: 'Inde', waitTime: '2 à 4 semaines', successRate: '90 %+' },
		],
		inclusions: [
			"Bilan pré-greffe du receveur et d'un donneur en consultation externe",
			"Frais de chambre : receveur — 21 jours (5 jours en soins intensifs + 16 jours en chambre individuelle) ; donneur — 8 jours (2 jours en soins intensifs + 6 jours en chambre individuelle)",
			'Honoraires du chirurgien pour le donneur et le receveur',
			"Honoraires de l'anesthésiste pour le donneur et le receveur",
			'Frais de bloc opératoire pour le donneur et le receveur',
			"Frais de service d'anesthésie pour le donneur et le receveur",
			'Frais de services de laboratoire',
			'Frais de services de transfusion',
			'Frais de services de radiologie',
			'Frais de services de kinésithérapie',
			'Frais de services de pharmacie incluant médicaments et consommables médicaux',
		],
		exclusions: [
			"Séjour hospitalier avant l'opération pour améliorer l'état du patient, ainsi que médicaments/examens après la sortie de l'hôpital",
			'Bilan de tout donneur supplémentaire',
			'Toute période de séjour hospitalier ou en soins intensifs au-delà de la durée du forfait',
			'Tous les examens, médicaments et consommables au-delà des plafonds tarifaires',
			'Médicaments coûteux ou peu utilisés tels que Zenapax, Simulect, Valcyte, Novoseven, Thymoglobulin, Ambisome, Caspofungin et Anidulafungin',
			"Frais de consultation et d'intervention pour tout spécialiste non lié à la greffe",
			'Frais de radiologie interventionnelle incluant drainage percutané, drainage biliaire trans-hépatique percutané et angiographie',
			"Interventions cardiologiques (échographie, angiographie) et frais liés à la néphrologie (dialyse, épuration extra-rénale continue)",
			'Interventions endoscopiques telles que la CPRE',
			'Réintervention',
		],
		faqs: [
			{
				question: "Quel est le coût d'une greffe du foie en Inde ?",
				answer:
					"La chirurgie de greffe du foie en Inde démarre à partir de 25 000 USD, environ 60 à 70 % de moins qu'aux États-Unis ou au Royaume-Uni. Le forfait couvre le bilan pré-greffe du receveur et d'un donneur, la chirurgie pour les deux, le séjour en soins intensifs et à l'hôpital, les frais de bloc opératoire, les soins infirmiers, le laboratoire et la pharmacie.",
			},
			{
				question: 'Quel est le taux de réussite de la greffe du foie en Inde ?',
				answer:
					"Les meilleurs centres de greffe du foie en Inde affichent un taux de réussite à un an supérieur à 90 %, comparable aux meilleurs programmes des États-Unis et d'Europe. Le taux de survie à cinq ans est d'environ 75 %, selon la maladie sous-jacente, l'état de santé général du patient et l'observance du suivi.",
			},
			{
				question: 'Qui peut être donneur de foie pour une greffe en Inde ?',
				answer:
					"Pour une greffe de foie à donneur vivant, le donneur doit être un proche parent (parent, frère/sœur, enfant ou conjoint), âgé de 18 à 55 ans, en bonne santé, avec un groupe sanguin compatible et une fonction hépatique normale. Le don doit être entièrement volontaire — toute transaction financière entre donneur et receveur est illégale selon la loi indienne. Le bilan complet du donneur est généralement réalisé en 2 à 3 jours.",
			},
			{
				question: 'Quelle est la durée du séjour hospitalier pour une greffe du foie en Inde ?',
				answer:
					"Le receveur reste environ 21 jours — 5 jours en soins intensifs et 16 jours en chambre individuelle. Le donneur reste environ 8 jours — 2 jours en soins intensifs et 6 jours en chambre individuelle. Après la sortie, il est conseillé au receveur de rester en Inde au moins 1 mois pour une surveillance étroite, portant le séjour total en Inde à environ 2 mois.",
			},
			{
				question: 'Le foie peut-il se régénérer après un don par donneur vivant ?',
				answer:
					"Oui. Le foie est le seul organe solide du corps humain capable de se régénérer entièrement. Après le don d'une partie, le foie restant du donneur retrouve environ 80 % de sa taille initiale en quelques semaines, et une taille quasi initiale en quelques mois. La portion greffée chez le receveur atteint également sa taille complète.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Envoyez les rapports médicaux du receveur et du donneur potentiel via notre formulaire de contact ou WhatsApp, et notre équipe de coordination de greffe organisera un avis spécialisé gratuit et une téléconsultation avec le chirurgien transplanteur avant votre voyage.",
			},
		],
	},

	'dental-care': {
		name: 'Soins dentaires',
		shortDescription: 'Implants, facettes et restauration complète de la bouche grâce à la dentisterie numérique la plus récente.',
		overview:
			"La conception numérique du sourire, les couronnes CAD/CAM en une journée et la réhabilitation implantaire complète sont la norme dans les meilleurs centres dentaires indiens — avec des résultats en quelques jours plutôt qu'en plusieurs mois pour un traitement par étapes à l'étranger.",
		procedures: ['Implants dentaires', 'Facettes', 'Restauration complète de la bouche'],
		benefits: [
			'Conception numérique du sourire et couronnes CAD/CAM en une journée',
			'Réhabilitation implantaire complète réalisable en un seul voyage',
			"Marques d'implants de niveau international utilisées systématiquement",
			'Combinez le traitement avec un séjour de récupération près de la clinique',
		],
		flagshipProcedure: 'Implants dentaires complets',
		costComparison: [
			{ country: 'États-Unis', waitTime: '2 à 4 semaines', successRate: '95–97 %' },
			{ country: 'Royaume-Uni', waitTime: '3 à 6 semaines', successRate: '95–97 %' },
			{ country: 'Allemagne', waitTime: '2 à 4 semaines', successRate: '94–96 %' },
			{ country: 'Thaïlande', waitTime: '1 à 2 semaines', successRate: '93–95 %' },
			{ country: 'Inde', waitTime: '3 à 5 jours', successRate: '95 %+' },
		],
		inclusions: [
			'Consultation de conception numérique du sourire et scan 3D',
			"Honoraires du dentiste pour la pose d'implant ou la restauration",
			'Implant et pilier de qualité standard',
			'Fabrication de couronne CAD/CAM en une journée le cas échéant',
			'Anesthésie locale et frais de procédure stérile',
			"Une visite de suivi pour vérifier la guérison et l'ajustement",
		],
		exclusions: [
			'Greffe osseuse ou élévation du plancher sinusien sauf identifiée lors du scan initial',
			"Options d'implants premium au-delà de l'implant standard",
			'Couronnes, facettes ou restaurations supplémentaires au-delà du plan de traitement convenu',
			"Traitement orthodontique ou alignement dentaire avant la pose d'implant",
			'Visites de suivi au-delà de celle incluse',
		],
		faqs: [
			{
				question: "Quel est le coût d'un implant dentaire en Inde ?",
				answer:
					"Un implant dentaire unique en Inde démarre à partir de 800 USD, environ 80 % de moins qu'aux États-Unis, et inclut la consultation, la pose de l'implant et une couronne CAD/CAM en une journée le cas échéant.",
			},
			{
				question: 'La restauration complète de la bouche peut-elle être réalisée en un seul voyage ?',
				answer:
					"Oui, grâce à la conception numérique du sourire et à la technologie de couronne en une journée, la plupart des cas d'implants complets peuvent être réalisés en un seul voyage de 7 à 10 jours, contre plusieurs mois habituellement nécessaires pour un traitement par étapes à l'étranger.",
			},
			{
				question: 'Quelles marques d\'implants sont utilisées ?',
				answer:
					"Nos centres dentaires partenaires utilisent des marques d'implants certifiées à l'international en standard, avec des options de marques premium disponibles sur demande.",
			},
			{
				question: "L'intervention est-elle douloureuse ?",
				answer:
					"La pose d'implant se fait sous anesthésie locale et est généralement bien tolérée, la plupart des patients reprenant une activité normale en un jour ou deux.",
			},
			{
				question: 'Combien de temps dois-je prévoir de rester en Inde ?',
				answer:
					"La plupart des cas d'implants et de restauration nécessitent environ 7 à 10 jours en Inde pour permettre la pose, tout travail de couronne en une journée et une visite de suivi avant le retour.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez une radiographie dentaire récente ou des photos de vos dents via notre formulaire de contact, et notre coordinateur dentaire organisera un examen et un devis transparent sous 24 heures.",
			},
		],
	},

	'eye-care': {
		name: 'Soins oculaires',
		shortDescription: 'Chirurgie de la cataracte et correction de la vue avec sortie le jour même dans la plupart des cas.',
		overview:
			"Les hôpitaux ophtalmologiques indiens réalisent des interventions de la cataracte et réfractives à des volumes extrêmement élevés, donnant aux chirurgiens une expertise approfondie des techniques sans lame assistées par laser, avec une sortie le jour même pour la plupart des patients.",
		procedures: ['Chirurgie de la cataracte', 'LASIK', 'Traitement de la rétine'],
		benefits: [
			'Chirurgie de la cataracte sans lame assistée par laser',
			'Sortie le jour même pour la plupart des interventions',
			'Centres à haut volume avec une expertise chirurgicale approfondie',
			'Options de lentilles intraoculaires premium disponibles',
		],
		flagshipProcedure: 'Chirurgie de la cataracte (phacoémulsification)',
		costComparison: [
			{ country: 'États-Unis', waitTime: '2 à 4 semaines', successRate: '98–99 %' },
			{ country: 'Royaume-Uni', waitTime: '8 à 18 semaines (NHS)', successRate: '98–99 %' },
			{ country: 'Allemagne', waitTime: '2 à 4 semaines', successRate: '97–99 %' },
			{ country: 'Thaïlande', waitTime: '1 à 2 semaines', successRate: '97–98 %' },
			{ country: 'Inde', waitTime: '2 à 4 jours', successRate: '98 %+' },
		],
		inclusions: [
			"Bilan oculaire préopératoire incluant biométrie et contrôle d'aptitude",
			'Honoraires du chirurgien pour la chirurgie de la cataracte sans lame assistée par laser',
			'Lentille intraoculaire (LIO) monofocale standard',
			'Frais de bloc opératoire et de procédure stérile',
			'Sortie le jour même avec collyres postopératoires',
			'Une visite de suivi pour confirmer la guérison et la correction visuelle',
		],
		exclusions: [
			'Options de LIO premium (lentilles multifocales ou toriques) au-delà de la lentille monofocale standard',
			'Traitement de pathologies oculaires sans lien telles que le glaucome ou une maladie rétinienne découvertes lors du bilan',
			'Chirurgie du second œil sauf devis conjoint',
			'Visites de suivi au-delà de celle incluse',
			"Lunettes ou lentilles de contact après l'intervention",
		],
		faqs: [
			{
				question: "Quel est le coût d'une chirurgie de la cataracte en Inde ?",
				answer:
					"La chirurgie de la cataracte en Inde démarre à partir de 700 USD par œil, environ 80 % de moins qu'aux États-Unis, et inclut le bilan préopératoire, la chirurgie assistée par laser, une LIO standard et une visite de suivi.",
			},
			{
				question: 'La chirurgie est-elle indolore et rapide ?',
				answer:
					"Oui, la chirurgie moderne de la cataracte sans lame assistée par laser dure généralement 15 à 20 minutes par œil sous anesthésie locale, la plupart des patients sortant le jour même.",
			},
			{
				question: 'Puis-je choisir une lentille premium (multifocale ou torique) ?',
				answer:
					"Oui, des options de lentilles intraoculaires premium sont disponibles pour les patients souhaitant réduire leur dépendance aux lunettes après la chirurgie — elles sont facturées séparément de la lentille monofocale standard.",
			},
			{
				question: 'Combien de temps dois-je prévoir de rester en Inde ?',
				answer:
					"La plupart des patients de la cataracte prévoient environ 4 à 7 jours en Inde pour le bilan préopératoire, la chirurgie et une visite de suivi avant le retour ; le LASIK suit un calendrier tout aussi court.",
			},
			{
				question: 'Le LASIK est-il disponible pour les deux yeux en une seule visite ?',
				answer:
					"Oui, le LASIK et les autres interventions réfractives sont généralement réalisés sur les deux yeux en une seule visite le même jour pour les candidats adaptés, après une évaluation préopératoire détaillée.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez votre prescription oculaire récente ou tout rapport existant via notre formulaire de contact, et notre coordinateur en soins oculaires organisera un avis spécialisé et un devis transparent sous 24 heures.",
			},
		],
	},

	neurology: {
		name: 'Neurologie et neurochirurgie',
		shortDescription: 'Spécialistes du cerveau, de la colonne vertébrale et des nerfs traitant tumeurs, AVC et troubles neurologiques complexes.',
		overview:
			"Les centres de neurochirurgie indiens combinent techniques microchirurgicales et guidées par l'image avec des unités de soins intensifs neurologiques dédiées, donnant aux patients internationaux accès à des soins avancés pour les tumeurs cérébrales et les AVC sans les longues listes d'attente courantes ailleurs.",
		procedures: ['Chirurgie de tumeur cérébrale', "Chirurgie de l'épilepsie", "Prise en charge de l'AVC"],
		benefits: [
			'Neurochirurgiens formés aux techniques microchirurgicales et mini-invasives',
			'IRM peropératoire et neuronavigation disponibles dans les centres de pointe',
			'Unité de soins intensifs neurologiques dédiée avec surveillance critique 24h/24',
			'Accompagnement structuré de neuro-rééducation après la chirurgie',
		],
		flagshipProcedure: 'Résection de tumeur cérébrale',
		costComparison: [
			{ country: 'États-Unis', waitTime: '4 à 8 semaines', successRate: '85–90 %' },
			{ country: 'Royaume-Uni', waitTime: '3 à 9 mois (NHS)', successRate: '85–90 %' },
			{ country: 'Allemagne', waitTime: '4 à 8 semaines', successRate: '84–89 %' },
			{ country: 'Thaïlande', waitTime: '2 à 4 semaines', successRate: '82–87 %' },
			{ country: 'Inde', waitTime: '1 à 2 semaines', successRate: '85 %+' },
		],
		inclusions: [
			"Bilan neurologique préopératoire, examen IRM/scanner et bilan d'aptitude",
			"Honoraires du neurochirurgien et de l'anesthésiste pour l'intervention principale",
			'Frais de bloc opératoire incluant la neuronavigation le cas échéant',
			'Séjour en soins intensifs neurologiques (4 jours) puis 8 jours en chambre de récupération intermédiaire',
			"Soins infirmiers et surveillance neurologique standard pendant l'hospitalisation",
			"Frais de laboratoire et de radiologie liés à l'intervention",
			'Compte-rendu de sortie avec plan structuré de neuro-rééducation',
		],
		exclusions: [
			"Séjour de pré-admission pour stabiliser un patient avant que la chirurgie ne soit validée",
			"Séjour hospitalier ou en soins intensifs au-delà de la durée du forfait",
			'Radiothérapie ou chimiothérapie pour tumeurs malignes, facturées séparément',
			'Séances de neuro-rééducation ambulatoire après la sortie',
			'Traitement de pathologies sans lien identifiées lors du bilan préopératoire',
			"Réintervention pour des complications sans lien avec la procédure initiale",
		],
		faqs: [
			{
				question: "Quel est le coût d'une chirurgie de tumeur cérébrale en Inde ?",
				answer:
					"La résection de tumeur cérébrale en Inde démarre à partir de 9 000 USD, environ 90 % de moins qu'aux États-Unis, et inclut le bilan préopératoire, la chirurgie, le séjour en soins intensifs neurologiques et un plan de rééducation structuré.",
			},
			{
				question: 'Des techniques de neurochirurgie mini-invasives sont-elles disponibles ?',
				answer:
					"Oui, plusieurs de nos hôpitaux partenaires proposent des approches guidées par l'image et mini-invasives, incluant l'IRM peropératoire et la neuronavigation, qui peuvent améliorer la précision et raccourcir la récupération pour les cas éligibles.",
			},
			{
				question: 'Quelle est la durée du séjour hospitalier pour une neurochirurgie ?',
				answer:
					"La plupart des patients restent environ 12 jours à l'hôpital — 4 jours en soins intensifs neurologiques et 8 jours en chambre de récupération intermédiaire — avec un séjour total recommandé en Inde d'environ 3 à 4 semaines pour le suivi.",
			},
			{
				question: 'Une radiothérapie ou une chimiothérapie sera-t-elle nécessaire après la chirurgie ?',
				answer:
					"Pour les tumeurs malignes, votre équipe de neuro-oncologie peut recommander une radiothérapie ou une chimiothérapie après la chirurgie — celles-ci sont facturées séparément selon votre protocole spécifique et sont discutées dans le cadre de votre plan de traitement.",
			},
			{
				question: 'Puis-je obtenir un second avis avant de voyager ?',
				answer:
					"Oui, envoyez vos IRM/scanners et rapports pour un avis spécialisé gratuit — notre comité de neurochirurgie confirmera si une chirurgie est recommandée avant que vous ne vous engagiez à voyager.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez vos rapports neurologiques et votre imagerie via notre formulaire de contact ou WhatsApp, et un coordinateur organisera un avis spécialisé et une estimation transparente sous 48 heures.",
			},
		],
	},

	'spine-surgery': {
		name: 'Chirurgie de la colonne vertébrale',
		shortDescription: 'Fusion vertébrale, remplacement discal et correction de la scoliose avec programmes de rééducation structurés.',
		overview:
			"Les centres de la colonne vertébrale indiens associent des chirurgiens spécialisés formés en fellowship à des techniques mini-invasives préservant la mobilité, aidant les patients souffrant de douleurs dorsales chroniques, de maladie discale et de déformation rachidienne à éviter les longues listes d'attente courantes en Occident.",
		procedures: ['Fusion vertébrale', 'Remplacement discal', 'Correction de la scoliose'],
		benefits: [
			'Chirurgiens de la colonne formés en fellowship utilisant des techniques mini-invasives',
			'Options de remplacement discal préservant la mobilité dans certains centres',
			'Kinésithérapie structurée en milieu hospitalier dès le premier jour',
			'Séjour hospitalier typique de 5 à 7 jours pour une chirurgie majeure de la colonne',
		],
		flagshipProcedure: 'Fusion vertébrale lombaire',
		costComparison: [
			{ country: 'États-Unis', waitTime: '4 à 8 semaines', successRate: '88–92 %' },
			{ country: 'Royaume-Uni', waitTime: '6 à 12 mois (NHS)', successRate: '88–92 %' },
			{ country: 'Allemagne', waitTime: '4 à 8 semaines', successRate: '87–91 %' },
			{ country: 'Thaïlande', waitTime: '2 à 4 semaines', successRate: '85–89 %' },
			{ country: 'Inde', waitTime: '1 à 2 semaines', successRate: '90 %+' },
		],
		inclusions: [
			'Bilan préopératoire de la colonne incluant examen IRM/radiographie',
			"Honoraires du chirurgien et de l'anesthésiste pour l'intervention rachidienne",
			'Frais de bloc opératoire et matériel/implant rachidien standard',
			'Séjour en soins intensifs (1 jour) puis 5 jours en chambre individuelle',
			'Séances de kinésithérapie structurées en milieu hospitalier',
			'Laboratoire, radiologie et médicaments postopératoires standards durant le séjour',
			"Compte-rendu de sortie avec programme d'exercices à domicile et plan de rééducation",
		],
		exclusions: [
			'Implants rachidiens premium ou sur mesure au-delà du matériel standard',
			'Séjour hospitalier au-delà de la durée du forfait',
			'Fusion multi-niveaux au-delà des niveaux prévus dans le bilan initial',
			'Séances de kinésithérapie ambulatoire après la sortie',
			'Traitement de pathologies sans lien identifiées lors du bilan préopératoire',
			"Chirurgie de reprise pour des complications sans lien avec l'intervention initiale",
		],
		faqs: [
			{
				question: "Quel est le coût d'une fusion vertébrale en Inde ?",
				answer:
					"Un forfait de fusion vertébrale lombaire en Inde démarre à partir de 6 500 USD, environ 90 % de moins que les tarifs américains habituels, et inclut les honoraires du chirurgien, l'implant, le séjour hospitalier et la kinésithérapie en milieu hospitalier.",
			},
			{
				question: 'La chirurgie mini-invasive de la colonne est-elle disponible ?',
				answer:
					"Oui, plusieurs de nos hôpitaux partenaires proposent des techniques mini-invasives et préservant la mobilité comme le remplacement discal, ce qui peut réduire les pertes sanguines et raccourcir la récupération pour les candidats adaptés.",
			},
			{
				question: 'Quelle est la durée du séjour hospitalier et de la récupération ?',
				answer:
					"La plupart des patients restent environ 6 jours à l'hôpital et il est conseillé de rester en Inde 2 à 3 semaines afin que l'équipe rachidienne puisse surveiller la récupération précoce avant le retour.",
			},
			{
				question: 'Quel implant/matériel est utilisé ?',
				answer:
					"Nos hôpitaux partenaires utilisent des systèmes d'implants rachidiens certifiés à l'international en standard, avec des options de matériel premium disponibles sur demande et devis séparé.",
			},
			{
				question: 'Aurai-je besoin de kinésithérapie après la chirurgie ?',
				answer:
					"Oui, une kinésithérapie structurée en milieu hospitalier débute peu après la chirurgie, et votre chirurgien fournira un programme d'exercices à domicile pour poursuivre la rééducation après votre retour.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Envoyez votre IRM ou vos radiographies de la colonne via notre formulaire de contact, et vous recevrez un avis spécialisé et une estimation transparente sous 24 heures.",
			},
		],
	},

	'bariatric-surgery': {
		name: 'Chirurgie bariatrique',
		shortDescription: 'Sleeve gastrique, bypass et ballon gastrique pour une perte de poids durable et médicalement supervisée.',
		overview:
			"Les centres bariatriques indiens combinent une expertise chirurgicale laparoscopique avec un accompagnement diététique structuré avant et après l'opération, aidant les patients à obtenir une perte de poids durable avec des séjours hospitaliers plus courts et une récupération plus rapide qu'en chirurgie ouverte.",
		procedures: ['Sleeve gastrique', 'Bypass gastrique', 'Ballon gastrique'],
		benefits: [
			'Chirurgie bariatrique laparoscopique (mini-invasive) en standard',
			'Accompagnement diététique et lifestyle structuré avant et après l\'opération',
			'Séjour hospitalier typique de seulement 2 à 3 jours pour la sleeve gastrectomie',
			'Suivi à long terme pour suivre les progrès de la perte de poids',
		],
		flagshipProcedure: 'Sleeve gastrectomie laparoscopique',
		costComparison: [
			{ country: 'États-Unis', waitTime: '3 à 6 semaines', successRate: '90–95 %' },
			{ country: 'Royaume-Uni', waitTime: '6 à 12 mois (NHS)', successRate: '90–95 %' },
			{ country: 'Allemagne', waitTime: '4 à 8 semaines', successRate: '89–94 %' },
			{ country: 'Thaïlande', waitTime: '1 à 3 semaines', successRate: '88–93 %' },
			{ country: 'Inde', waitTime: '1 à 2 semaines', successRate: '92 %+' },
		],
		inclusions: [
			"Bilan préopératoire incluant endoscopie et bilan d'aptitude",
			'Consultation diététique et planification du régime préopératoire',
			"Honoraires du chirurgien et de l'anesthésiste pour l'intervention laparoscopique",
			'Frais de bloc opératoire et agrafeuses/consommables chirurgicaux standards',
			'3 jours de séjour hospitalier incluant la surveillance postopératoire',
			'Compte-rendu de sortie avec plan structuré de progression du régime postopératoire',
		],
		exclusions: [
			'Séjour hospitalier au-delà de la durée du forfait',
			'Chirurgie de reprise pour une intervention bariatrique antérieure réalisée ailleurs',
			"Chirurgie plastique pour ablation de l'excès de peau après une perte de poids importante",
			'Compléments nutritionnels à long terme au-delà du kit de sortie initial',
			'Traitement de pathologies sans lien identifiées lors du bilan préopératoire',
			"Réintervention pour des complications sans lien avec la procédure initiale",
		],
		faqs: [
			{
				question: "Quel est le coût d'une chirurgie de sleeve gastrique en Inde ?",
				answer:
					"Un forfait de sleeve gastrectomie laparoscopique en Inde démarre à partir de 4 500 USD, environ 80 % de moins qu'aux États-Unis, et inclut le bilan préopératoire, la chirurgie, le séjour hospitalier et le plan diététique postopératoire.",
			},
			{
				question: 'Suis-je éligible à la chirurgie bariatrique ?',
				answer:
					"L'éligibilité repose généralement sur l'IMC et les pathologies associées — partagez votre taille, votre poids et vos éventuelles pathologies via notre formulaire de contact pour un examen d'éligibilité gratuit par notre équipe bariatrique.",
			},
			{
				question: 'Combien de poids puis-je espérer perdre ?',
				answer:
					"La plupart des patients perdent 60 à 70 % de leur excès de poids dans les 12 à 18 mois suivant une sleeve gastrectomie ou un bypass, bien que les résultats varient selon l'intervention choisie et le respect du régime et du mode de vie postopératoires.",
			},
			{
				question: 'Quelle est la durée du séjour hospitalier et de la récupération ?',
				answer:
					"La plupart des patients restent environ 3 jours à l'hôpital et il est conseillé de rester en Inde 10 à 14 jours afin que l'équipe chirurgicale puisse confirmer une récupération précoce avant le retour.",
			},
			{
				question: "L'intervention est-elle réalisée par laparoscopie ?",
				answer:
					"Oui, la sleeve gastrectomie, le bypass gastrique et la pose de ballon sont tous réalisés par laparoscopie en standard, ce qui signifie généralement moins de douleur et une récupération plus rapide qu'en chirurgie ouverte.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez votre taille, votre poids et vos antécédents médicaux via notre formulaire de contact, et notre coordinateur bariatrique organisera un examen d'éligibilité spécialisé sous 24 heures.",
			},
		],
	},

	'nephrology-urology': {
		name: 'Néphrologie et urologie',
		shortDescription: "Traitement des calculs rénaux, chirurgie de la prostate et soins de dialyse par des équipes d'urologie spécialisées.",
		overview:
			"Les centres d'urologie et de néphrologie indiens réalisent des interventions sur les calculs rénaux et la prostate à des volumes élevés grâce à des techniques laser et mini-invasives, offrant aux patients internationaux un accès rapide à des spécialistes sans les listes d'attente courantes ailleurs.",
		procedures: ['Extraction de calculs rénaux', 'Chirurgie de la prostate', 'Soins de dialyse'],
		benefits: [
			'Extraction laser et mini-invasive des calculs rénaux (NLPC/URSS)',
			'Chirurgie de la prostate robotisée et laparoscopique disponible dans les centres de pointe',
			'Unités de dialyse dédiées pour les patients nécessitant des soins rénaux continus',
			'Sortie le jour même ou le lendemain pour de nombreuses interventions mini-invasives',
		],
		flagshipProcedure: 'Néphrolithotomie percutanée (NLPC)',
		costComparison: [
			{ country: 'États-Unis', waitTime: '3 à 6 semaines', successRate: '92–96 %' },
			{ country: 'Royaume-Uni', waitTime: '3 à 9 mois (NHS)', successRate: '92–96 %' },
			{ country: 'Allemagne', waitTime: '3 à 6 semaines', successRate: '91–95 %' },
			{ country: 'Thaïlande', waitTime: '1 à 3 semaines', successRate: '90–94 %' },
			{ country: 'Inde', waitTime: '3 à 7 jours', successRate: '94 %+' },
		],
		inclusions: [
			"Bilan préopératoire incluant échographie/scanner et bilan d'aptitude",
			"Honoraires de l'urologue et de l'anesthésiste pour l'intervention",
			"Frais de bloc opératoire et d'équipement laser/endoscopique",
			'2 jours de séjour hospitalier incluant la surveillance postopératoire',
			'Médicaments et consommables standards durant le séjour',
			"Compte-rendu de sortie avec plan d'imagerie de suivi",
		],
		exclusions: [
			'Séjour hospitalier au-delà de la durée du forfait',
			'Traitement de calculs bilatéraux (deux reins) sauf devis conjoint',
			"Séances de dialyse à long terme au-delà d'un séjour d'évaluation initial",
			'Médicaments à emporter au-delà du kit de sortie standard',
			'Traitement de pathologies sans lien identifiées lors du bilan préopératoire',
			"Réintervention pour des complications sans lien avec la procédure initiale",
		],
		faqs: [
			{
				question: "Quel est le coût d'une extraction de calculs rénaux en Inde ?",
				answer:
					"Un forfait de NLPC (extraction de calculs rénaux) en Inde démarre à partir de 3 500 USD, environ 85 % de moins qu'aux États-Unis, et inclut le bilan préopératoire, l'intervention, le séjour hospitalier et l'imagerie de suivi.",
			},
			{
				question: 'Le traitement des calculs rénaux est-il mini-invasif ?',
				answer:
					"Oui, la plupart des calculs sont traités par des techniques laser mini-invasives telles que la NLPC ou l'URSS, qui permettent généralement une sortie sous 1 à 2 jours selon la taille et la localisation du calcul.",
			},
			{
				question: 'La chirurgie robotisée de la prostate est-elle disponible ?',
				answer:
					"Oui, plusieurs de nos hôpitaux partenaires proposent une chirurgie de la prostate assistée par robot et laparoscopique, qui peut réduire les pertes sanguines et raccourcir la récupération par rapport à la chirurgie ouverte.",
			},
			{
				question: 'Combien de temps dois-je prévoir de rester en Inde ?',
				answer:
					"La plupart des interventions urologiques nécessitent environ 7 à 10 jours en Inde pour le bilan préopératoire, l'intervention et une visite de suivi avant le retour ; les cas complexes peuvent nécessiter un séjour plus long.",
			},
			{
				question: 'Accompagnez-vous les patients nécessitant une dialyse continue ?',
				answer:
					"Oui, nos hôpitaux partenaires disposent d'unités de dialyse dédiées et peuvent coordonner des soins rénaux continus pour les patients en voyage pour évaluation ou en attente d'une greffe de rein.",
			},
			{
				question: 'Comment puis-je commencer ?',
				answer:
					"Partagez vos rapports d'imagerie (échographie/scanner) via notre formulaire de contact, et notre coordinateur en urologie organisera un avis spécialisé et un devis transparent sous 24 heures.",
			},
		],
	},
};

export const getFrTreatment = (slug: string) => frTreatments[slug];
