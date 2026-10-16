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
	detailedProcedures?: { name: string; description: string }[];
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
		detailedProcedures: [
			{
				name: 'Angioplastie coronarienne',
				description:
					"L'angioplastie coronarienne est une procédure mini-invasive utilisée pour élargir une artère coronaire rétrécie ou obstruée et rétablir le flux sanguin vers le muscle cardiaque chez les patients atteints de maladie coronarienne. Sous anesthésie locale, un cardiologue fait progresser un fin cathéter par une artère du poignet ou de l'aine jusqu'au site de l'obstruction, guidé par une imagerie radiographique en temps réel, puis gonfle un petit ballonnet pour comprimer la plaque contre la paroi artérielle ; dans la plupart des cas, un stent en treillis métallique est ensuite laissé en place pour maintenir le vaisseau ouvert et réduire le risque de nouveau rétrécissement. Elle est généralement recommandée chez les patients souffrant d'angine de poitrine, présentant une diminution du flux sanguin lors d'un test d'effort, ou en traitement d'urgence lors d'une crise cardiaque pour rouvrir rapidement un vaisseau obstrué. La procédure est réalisée en laboratoire de cathétérisme et dure généralement moins d'une heure, la plupart des patients étant surveillés une nuit et sortant sous un ou deux jours. Les centres cardiaques indiens réalisent un grand nombre d'angioplasties avec une imagerie moderne et un large choix de stents, et les patients reprennent généralement une activité légère en une semaine, le cardiologue fournissant des conseils sur le traitement médicamenteux et le suivi avant le retour au pays.",
			},
			{
				name: 'Pontage aorto-coronarien (PAC)',
				description:
					"Le pontage aorto-coronarien, communément appelé PAC ou chirurgie de pontage, est réalisé lorsqu'une ou plusieurs artères coronaires sont sévèrement rétrécies ou obstruées et que l'angioplastie n'est pas adaptée, souvent chez des patients présentant une atteinte coronarienne multi-vaisseaux ou complexe. Pendant l'opération, un chirurgien cardiaque prélève un vaisseau sanguin sain ailleurs dans le corps, généralement l'artère mammaire interne du thorax ou une veine de la jambe, et le greffe pour dériver le flux sanguin autour du segment obstrué. Le PAC traditionnel est réalisé par une incision du sternum, le patient étant placé sous circulation extracorporelle, bien que des approches à cœur battant et mini-invasives soient utilisées dans certains cas sélectionnés. L'objectif est de soulager l'angine de poitrine, de réduire le risque de crise cardiaque et d'améliorer la fonction cardiaque à long terme. La récupération comprend plusieurs jours d'hospitalisation, dont un passage en soins intensifs immédiatement après l'opération, suivi d'une période structurée de restriction d'activité et de réadaptation cardiaque. Les programmes de chirurgie cardiaque indiens associent des équipes chirurgicales expérimentées à des unités de soins intensifs bien équipées, et les patients internationaux prévoient généralement un séjour hospitalier d'environ une semaine suivi de quelques semaines de récupération locale avant de reprendre l'avion, avec un suivi de cicatrisation et des conseils de réadaptation tout au long du séjour.",
			},
			{
				name: 'Chirurgie de remplacement de la valve mitrale',
				description:
					"Le remplacement de la valve mitrale est réalisé lorsque la valve mitrale, qui contrôle le flux sanguin entre l'oreillette gauche et le ventricule gauche du cœur, devient trop étroite (sténose) ou devient fuyante (régurgitation) au point de ne plus fonctionner correctement et ne peut plus être réparée de manière adéquate. Sous anesthésie générale et circulation extracorporelle, le chirurgien ouvre le cœur, retire la valve endommagée et suture une valve de remplacement — soit une valve mécanique, durable mais nécessitant un traitement anticoagulant à vie, soit une valve biologique, qui évite l'anticoagulation à long terme mais peut s'user plus tôt. Le choix entre les types de valve dépend de l'âge, du mode de vie et de l'état de santé général du patient, et est discuté au préalable avec l'équipe chirurgicale. La procédure peut être réalisée par sternotomie traditionnelle ou, chez certains patients sélectionnés, par de plus petites incisions mini-invasives. Les patients passent généralement un jour ou deux en soins intensifs, suivis de plusieurs jours supplémentaires en service avant la sortie. Les centres cardiaques indiens proposent des valves mécaniques et biologiques ainsi qu'des soins cardiaques postopératoires expérimentés, et les patients internationaux prévoient généralement un séjour hospitalier d'environ une semaine, avec des échocardiographies de suivi organisées avant le retour pour confirmer le bon fonctionnement de la valve.",
			},
			{
				name: 'Remplacement de la valve aortique',
				description:
					"Le remplacement de la valve aortique traite une valve aortique malade — la valve qui contrôle le flux sanguin du cœur vers l'artère principale du corps — devenue rétrécie (sténose) ou fuyante (régurgitation), provoquant des symptômes tels qu'essoufflement, douleur thoracique ou évanouissements. Lors d'une chirurgie à cœur ouvert classique, le thorax est ouvert, le cœur est temporairement arrêté et pris en charge par une circulation extracorporelle, et le chirurgien retire la valve malade et suture un remplacement mécanique ou biologique adapté à l'anatomie du patient. Les valves mécaniques durent plus longtemps mais nécessitent un traitement anticoagulant à vie, tandis que les valves biologiques évitent cela mais peuvent nécessiter un remplacement après dix à vingt ans ; l'équipe chirurgicale aide les patients à évaluer ces compromis selon leur âge et leur état de santé. L'opération dure généralement quelques heures, les patients passant un certain temps en soins intensifs avant de rejoindre un service classique. C'est l'une des chirurgies cardiaques les plus établies pratiquées en Inde, les centres proposant une gamme complète de types de valves et une surveillance périopératoire expérimentée. Les patients internationaux séjournent généralement en Inde environ deux à trois semaines au total pour permettre la chirurgie, la récupération initiale et une évaluation de suivi avant de reprendre l'avion.",
			},
			{
				name: 'Remplacement valvulaire aortique par cathéter (TAVI)',
				description:
					"Le remplacement valvulaire aortique par cathéter, ou TAVI, est une alternative mini-invasive à la chirurgie à cœur ouvert pour traiter une sténose aortique sévère, en particulier chez les patients âgés ou considérés à risque plus élevé pour une chirurgie classique. Plutôt que d'ouvrir le thorax, un cardiologue interventionnel fait progresser un cathéter portant une valve de remplacement repliable à travers un vaisseau sanguin, le plus souvent au niveau de l'aine, jusqu'au cœur, où elle est déployée et positionnée à l'intérieur de la valve malade existante du patient, la repoussant sur le côté et prenant immédiatement le relais de sa fonction. La procédure est généralement réalisée sous sédation ou anesthésie générale légère et guidée par imagerie en temps réel, sans qu'il soit nécessaire d'arrêter le cœur ou d'utiliser une circulation extracorporelle. Comme elle évite une grande incision thoracique, la récupération est généralement plus rapide qu'avec un remplacement valvulaire chirurgical, de nombreux patients se mobilisant en une journée et quittant l'hôpital en quelques jours. Le TAVI est de plus en plus proposé dans les centres cardiaques avancés indiens pour les patients répondant aux critères anatomiques appropriés, après une évaluation d'imagerie minutieuse confirmant leur éligibilité. Les patients internationaux prévoient généralement une à deux semaines en Inde pour permettre l'évaluation préalable, la procédure elle-même et une courte période de récupération avant le suivi et le retour au pays.",
			},
			{
				name: 'Cathétérisme cardiaque',
				description:
					"Le cathétérisme cardiaque est une procédure diagnostique, et parfois thérapeutique, au cours de laquelle un fin cathéter flexible est guidé à travers un vaisseau sanguin, généralement au niveau du poignet ou de l'aine, jusque dans les cavités et les artères du cœur afin d'évaluer directement son fonctionnement. À l'aide de la radioscopie et d'un produit de contraste, le cardiologue peut visualiser les artères coronaires à la recherche d'obstructions, mesurer les pressions au sein des cavités cardiaques, évaluer la fonction valvulaire et, dans certains cas, prélever des échantillons de tissu. Elle est couramment utilisée pour explorer des douleurs thoraciques, des résultats anormaux de test d'effort, une insuffisance cardiaque de cause indéterminée ou une suspicion de valvulopathie ou de cardiopathie congénitale, et constitue souvent la première étape avant de décider si une angioplastie, la pose d'un stent ou une chirurgie est nécessaire. La procédure est réalisée sous anesthésie locale avec sédation légère, dure généralement de trente minutes à une heure, et la plupart des patients peuvent rentrer chez eux le jour même ou après une nuit d'observation. Les laboratoires de cathétérisme indiens sont équipés de systèmes d'imagerie modernes permettant un diagnostic précis et, le cas échéant, un traitement immédiat au cours de la même séance. Les patients internationaux n'ont généralement besoin que d'une courte visite pour la procédure elle-même, les résultats et les prochaines étapes étant discutés directement avec l'équipe de cardiologie.",
			},
			{
				name: 'Valvuloplastie pulmonaire par ballonnet',
				description:
					"La valvuloplastie pulmonaire par ballonnet est une procédure par cathéter utilisée pour traiter la sténose de la valve pulmonaire, une affection dans laquelle la valve contrôlant le flux sanguin du ventricule droit vers les poumons est anormalement rétrécie, obligeant le cœur à travailler davantage et réduisant le flux sanguin vers les poumons. Elle est souvent diagnostiquée chez les nourrissons, les enfants ou les jeunes adultes, parfois dans le cadre d'une cardiopathie congénitale présente dès la naissance. Pendant la procédure, un cardiologue guide un cathéter muni d'un ballonnet dégonflé à son extrémité à travers une veine, généralement au niveau de l'aine, jusqu'à la valve rétrécie, puis gonfle le ballonnet pour l'étirer et soulager l'obstruction. La procédure est réalisée sous sédation ou anesthésie générale dans un laboratoire de cathétérisme, guidée par radioscopie et échocardiographie, et dure généralement une à deux heures. Comme elle évite la chirurgie à cœur ouvert, la récupération est généralement rapide, la plupart des patients étant surveillés une nuit et sortant sous un ou deux jours. Les centres de cardiologie pédiatrique et structurelle indiens réalisent couramment la valvuloplastie par ballonnet chez les enfants comme chez les adultes, avec une imagerie préalable minutieuse pour confirmer l'éligibilité. Les familles voyageant pour cette procédure prévoient généralement un court séjour d'environ une semaine, comprenant l'évaluation préalable et l'échocardiographie de suivi.",
			},
			{
				name: 'Pose de stimulateur cardiaque',
				description:
					"Un stimulateur cardiaque est un petit dispositif électronique implanté pour aider à réguler un rythme cardiaque anormalement lent ou irrégulier, couramment utilisé pour traiter des affections telles que la bradycardie, le bloc cardiaque ou certaines arythmies où le système électrique naturel du cœur ne fonctionne pas de manière fiable. Le dispositif se compose d'un générateur d'impulsions, implanté juste sous la peau près de la clavicule, relié à une ou plusieurs fines sondes guidées par une veine jusque dans les cavités cardiaques, où elles détectent le rythme du cœur et délivrent de petites impulsions électriques lorsque nécessaire pour maintenir un rythme régulier. L'implantation est généralement réalisée sous anesthésie locale avec sédation, dure environ une à deux heures, et se fait par une petite incision plutôt que par chirurgie ouverte. La plupart des patients restent hospitalisés une nuit pour surveillance et font vérifier les réglages du dispositif avant la sortie. Les centres d'électrophysiologie et de cardiologie indiens proposent une gamme de dispositifs à simple chambre, double chambre et plus avancés, adaptés à différents troubles du rythme. Les patients internationaux prévoient généralement environ une semaine en Inde pour permettre l'évaluation préalable, l'implantation et une première vérification du dispositif, avec des conseils sur la surveillance à distance et le suivi auprès de leur médecin à domicile par la suite.",
			},
			{
				name: 'Chirurgie cardiaque pédiatrique',
				description:
					"La chirurgie cardiaque pédiatrique couvre un ensemble d'opérations pratiquées chez les nourrissons et les enfants pour corriger des malformations cardiaques congénitales — des anomalies structurelles du cœur présentes dès la naissance, telles que des trous entre les cavités cardiaques, des valves malformées ou des connexions anormales des gros vaisseaux sanguins. La procédure spécifique dépend de la malformation : certaines affections peuvent être fermées à l'aide d'un patch lors d'une chirurgie à cœur ouvert avec une circulation extracorporelle adaptée à un petit patient, tandis que d'autres impliquent la reconstruction ou le réacheminement des vaisseaux sanguins pour établir une circulation normale. Le diagnostic repose généralement sur l'échocardiographie, et parfois sur une imagerie par scanner ou IRM, pour cartographier l'anatomie exacte avant de planifier l'opération. Comme le cœur et les vaisseaux sanguins des enfants sont petits et encore en développement, ces procédures nécessitent des chirurgiens cardiaques pédiatriques et des anesthésistes expérimentés dans les cardiopathies congénitales, ainsi qu'une unité de soins intensifs pédiatriques dédiée par la suite. Le temps de récupération varie considérablement selon la complexité de la malformation et l'âge de l'enfant, allant d'environ une semaine à plusieurs semaines d'hospitalisation. Les programmes de cardiologie pédiatrique indiens traitent un large éventail de malformations congénitales, souvent pour des enfants venus d'autres pays, avec un hébergement familial et des soins pré- et postopératoires coordonnés autour des besoins des jeunes patients et de leurs parents.",
			},
			{
				name: "Cœur artificiel / implantation d'un LVAD",
				description:
					"Un dispositif d'assistance ventriculaire gauche, ou LVAD, est une pompe mécanique implantée pour aider un cœur sévèrement affaibli à faire circuler le sang, utilisée chez les patients atteints d'insuffisance cardiaque avancée qui n'ont pas répondu de manière adéquate au traitement médicamenteux. Le dispositif est connecté chirurgicalement au ventricule gauche et à l'aorte, prélevant le sang de la cavité affaiblie et le pompant vers l'artère principale du corps à la place du muscle cardiaque défaillant ; un câble sort à travers la peau vers un contrôleur externe et un bloc de batteries portés par le patient. Les LVAD peuvent servir de pont vers une greffe cardiaque pendant qu'un patient attend un organe de donneur, ou de traitement à plus long terme pour ceux qui ne sont pas candidats à la greffe. L'implantation nécessite une chirurgie à cœur ouvert sous circulation extracorporelle, suivie d'un séjour hospitalier prolongé comprenant une surveillance en soins intensifs et une formation du patient et des aidants à l'utilisation du dispositif. Le terme cœur artificiel est parfois employé de manière approximative pour désigner les LVAD, bien que les cœurs artificiels totaux remplaçant entièrement le cœur constituent une technologie distincte et plus rare. Les centres indiens spécialisés dans l'insuffisance cardiaque avancée proposent l'implantation de LVAD et le suivi spécialisé qu'elle requiert, et les patients doivent prévoir un séjour prolongé de plusieurs semaines pour la chirurgie, la récupération et la formation au dispositif avant le voyage retour.",
			},
			{
				name: "Réparation endovasculaire d'anévrisme aortique (EVAR)",
				description:
					"La réparation endovasculaire d'anévrisme aortique, ou EVAR, est une procédure mini-invasive utilisée pour traiter un anévrisme aortique — une section renflée et affaiblie de l'artère principale du corps qui comporte un risque de rupture si elle n'est pas traitée. Plutôt que d'ouvrir l'abdomen ou le thorax pour remplacer directement le segment atteint, un chirurgien vasculaire accède aux artères fémorales au niveau de l'aine et fait progresser une endoprothèse recouverte de tissu à travers les vaisseaux sanguins jusqu'au site de l'anévrisme, où elle est déployée pour tapisser l'artère de l'intérieur et détourner le flux sanguin de la paroi affaiblie. La procédure est réalisée sous anesthésie locorégionale ou générale, guidée par imagerie radiographique continue, et dure généralement une à trois heures selon la localisation et la complexité de l'anévrisme. Comme elle évite une large incision chirurgicale, la récupération est généralement plus rapide qu'avec une réparation ouverte, de nombreux patients se mobilisant en un jour ou deux et quittant l'hôpital en environ une semaine. Une imagerie par scanner minutieuse en amont confirme que la forme et la taille de l'anévrisme sont adaptées à une endoprothèse. Les centres de chirurgie vasculaire indiens proposent l'EVAR avec une gamme d'endoprothèses, et les patients internationaux prévoient généralement environ deux semaines pour permettre l'évaluation, la procédure et le suivi d'imagerie postopératoire.",
			},
			{
				name: 'Chirurgie à cœur ouvert',
				description:
					"La chirurgie à cœur ouvert est un terme général désignant toute opération cardiaque au cours de laquelle le thorax est ouvert chirurgicalement, généralement par une incision du sternum, afin de donner à l'équipe chirurgicale un accès direct au cœur et à ses principaux vaisseaux. De nombreuses opérations de ce type sont réalisées le cœur temporairement arrêté, une circulation extracorporelle prenant le relais de la circulation et de la respiration, ce qui permet au chirurgien de travailler sur un cœur immobile et exsangue avant qu'il ne soit redémarré. Parmi les raisons courantes de recourir à la chirurgie à cœur ouvert figurent le pontage d'artères coronaires obstruées, la réparation ou le remplacement de valves cardiaques endommagées, la correction de malformations congénitales et la réparation d'anévrismes touchant le cœur ou les vaisseaux principaux. La technique et la durée dépendent de l'affection sous-jacente, mais la plupart des opérations durent plusieurs heures et sont suivies d'un passage en soins intensifs pendant que le patient est sevré de l'assistance ventilatoire et surveillé pour détecter saignements, infections et troubles du rythme. Un séjour hospitalier plus long d'une à deux semaines suit généralement, accompagné d'une réadaptation cardiaque structurée pour reconstruire force et endurance. Les centres de chirurgie cardiaque indiens réalisent un grand nombre d'interventions à cœur ouvert dans toutes ces catégories, appuyés par des unités de soins intensifs cardiaques dédiées, et les patients internationaux prévoient généralement plusieurs semaines sur place pour couvrir la chirurgie et la récupération initiale.",
			},
			{
				name: 'Traitement des cardiopathies congénitales',
				description:
					"La cardiopathie congénitale désigne des anomalies structurelles du cœur ou des gros vaisseaux sanguins présentes dès la naissance, allant de petits trous entre les cavités cardiaques pouvant se refermer spontanément à des malformations complexes nécessitant une correction chirurgicale par étapes. Le traitement est hautement individualisé et commence par une imagerie diagnostique détaillée, généralement une échocardiographie et parfois un scanner ou une IRM cardiaque, pour cartographier la malformation exacte avant qu'un cardiologue spécialisé en cardiopathies congénitales, pédiatrique ou adulte, et une équipe chirurgicale ne décident de la meilleure approche. Certaines malformations, telles que de petites communications interauriculaires ou interventriculaires, peuvent être fermées à l'aide de dispositifs introduits par cathéter sans chirurgie ouverte, tandis que des affections plus complexes nécessitent une chirurgie à cœur ouvert, parfois réalisée par étapes sur plusieurs mois ou années à mesure que le patient grandit. De nombreux patients sont diagnostiqués et traités dans l'enfance, mais un nombre croissant d'adultes atteints de cardiopathie congénitale ont également besoin de soins continus ou correctifs à mesure que des malformations initialement bénignes évoluent avec le temps. Les programmes indiens de cardiopathie congénitale prennent en charge l'ensemble du spectre de ces affections, des simples fermetures par dispositif aux reconstructions complexes par étapes, avec des équipes dédiées pour les patients pédiatriques comme adultes. Les plans de traitement variant considérablement selon la malformation, les familles internationales commencent généralement par une évaluation détaillée à distance ou sur place avant qu'un calendrier de traitement et une durée de séjour ne soient confirmés.",
			},
		],
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
		detailedProcedures: [
			{
				name: 'Prothèse totale de genou',
				description:
					"La prothèse totale de genou, ou arthroplastie totale du genou, est une intervention chirurgicale qui resurface une articulation du genou endommagée par l'arthrose, la polyarthrite rhumatoïde ou une usure post-traumatique à l'aide d'un implant artificiel en alliage métallique et en polyéthylène de qualité médicale. Le chirurgien orthopédiste retire le cartilage usé et une fine couche d'os à l'extrémité du fémur et au sommet du tibia, puis fixe des composants métalliques façonnés sur ces surfaces avec un espaceur en plastique entre eux qui recrée un mouvement articulaire fluide ; la surface de la rotule peut également être resurfacée selon son état. Elle est généralement recommandée une fois que des mesures conservatrices telles que la kinésithérapie, la gestion du poids, les médicaments et les injections ne parviennent plus à contrôler la douleur ou à restaurer la mobilité. L'opération est réalisée sous rachianesthésie ou anesthésie générale et dure environ une à deux heures, de nombreux centres utilisant désormais un guidage assisté par ordinateur ou par bras robotisé pour améliorer l'alignement de l'implant. Les hôpitaux indiens traitent un grand volume de cas de remplacement articulaire chaque année et proposent des techniques traditionnelles et mini-invasives. La récupération comprend une marche surveillée dès le lendemain de l'opération, un séjour hospitalier de plusieurs jours et un programme de kinésithérapie structuré au cours des semaines suivantes pour retrouver force et amplitude de mouvement.",
			},
			{
				name: 'Prothèse totale de hanche',
				description:
					"La prothèse totale de hanche, ou arthroplastie totale de la hanche, remplace une articulation de la hanche usée par l'arthrose, la nécrose avasculaire, la polyarthrite rhumatoïde ou une fracture par un implant artificiel à rotule et cupule. Pendant l'opération, le chirurgien orthopédiste retire la tête fémorale endommagée et remodèle la cavité de la hanche (cotyle), puis insère une tige métallique ou céramique dans le fémur, surmontée d'une bille qui s'articule contre un nouvel insert cotyloïdien fixé dans le bassin. L'approche peut être postérieure, antérieure ou mini-invasive, choisie selon l'anatomie du patient et la préférence du chirurgien, et la procédure dure généralement une à deux heures sous rachianesthésie ou anesthésie générale. Elle est généralement envisagée lorsque la douleur de hanche, la raideur et la mobilité réduite persistent malgré la kinésithérapie, les précautions de mise en charge et les antalgiques, et lorsque l'imagerie confirme une dégénérescence articulaire importante. De nombreux centres orthopédiques indiens réalisent un grand volume de prothèses de hanche chaque année et proposent des options de fixation cimentée, non cimentée et hybride, ainsi que des techniques robotisées ou assistées par navigation informatique pour un positionnement précis de l'implant. Après l'opération, les patients sont généralement mobilisés avec un déambulateur en un ou deux jours, restent hospitalisés plusieurs jours et suivent un programme de rééducation structuré au cours des semaines suivantes pour retrouver force et schéma de marche.",
			},
			{
				name: 'Arthroscopie du genou',
				description:
					"L'arthroscopie du genou est une technique chirurgicale mini-invasive utilisée pour diagnostiquer et traiter des problèmes à l'intérieur de l'articulation du genou par de petites incisions plutôt que par une large ouverture chirurgicale. Le chirurgien insère une fine caméra à fibre optique, appelée arthroscope, ainsi que des instruments chirurgicaux fins par quelques petits orifices autour du genou, permettant une visualisation directe du cartilage, des ligaments, du ménisque et de la membrane synoviale sur un écran. Elle est couramment utilisée pour parer ou réparer un ménisque déchiré, retirer des fragments de cartilage libres, lisser des surfaces cartilagineuses rugueuses, nettoyer un tissu articulaire enflammé, ou traiter d'autres causes structurelles de douleur, gonflement, blocage ou accrochage persistants du genou qui n'ont pas répondu au repos, à la kinésithérapie ou aux médicaments. La procédure est généralement réalisée sous rachianesthésie, anesthésie locorégionale ou générale et dure de trente minutes à un peu plus d'une heure selon les constatations et le traitement requis. Comme les incisions sont petites, les patients ressentent généralement moins de douleur postopératoire et retrouvent plus rapidement leurs activités quotidiennes qu'avec une chirurgie ouverte du genou. Les centres orthopédiques indiens réalisent couramment l'arthroscopie du genou en hospitalisation de jour ou de courte durée, la plupart des patients marchant avec un appui le jour même et commençant une kinésithérapie guidée peu après pour restaurer la pleine fonction du genou.",
			},
			{
				name: 'Reconstruction arthroscopique du LCA',
				description:
					"La reconstruction arthroscopique du ligament croisé antérieur (LCA) répare un LCA rompu, l'un des principaux ligaments stabilisateurs du genou fréquemment blessé lors de sports impliquant des pivots brusques, des sauts ou des changements de direction. Comme un LCA rompu ne guérit pas de manière fiable de lui-même, les chirurgiens le reconstruisent à l'aide d'une greffe, généralement prélevée sur les tendons ischio-jambiers ou le tendon rotulien du patient, parfois sur un tissu de donneur, qui est passée à travers des tunnels forés dans le fémur et le tibia puis fixée par des vis ou des dispositifs de fixation pour recréer la position et la fonction d'origine du ligament. La procédure est réalisée par arthroscopie à travers de petites incisions à l'aide d'une caméra et d'instruments spécialisés, évitant une large incision ouverte, et dure généralement une à deux heures sous anesthésie locorégionale ou générale. Elle est généralement recommandée chez les patients présentant une instabilité du genou, des épisodes de dérobement ou une incapacité à reprendre le sport ou un travail physiquement exigeant après une rupture du LCA. Les unités indiennes de médecine du sport et d'orthopédie proposent des techniques de greffe des ischio-jambiers et du tendon rotulien ainsi qu'un placement des tunnels assisté par robot ou navigation. La récupération implique un programme de rééducation structuré s'étalant sur plusieurs mois, avec mise en charge progressive, renforcement et travail de l'équilibre avant un retour sûr à l'activité sportive.",
			},
			{
				name: 'Reconstruction arthroscopique du LCP',
				description:
					"La reconstruction arthroscopique du ligament croisé postérieur (LCP) traite une rupture de ce ligament stabilisateur plus robuste et moins fréquemment blessé que le LCA, situé derrière lui, qui se rompt généralement suite à un coup direct à l'avant du tibia, comme lors d'un traumatisme contre le tableau de bord pendant un accident de la route, ou à une chute brutale sur un genou fléchi. De nombreuses lésions partielles du LCP sont prises en charge sans chirurgie, par immobilisation et kinésithérapie, mais les ruptures complètes entraînant une instabilité persistante, ou associées à d'autres lésions ligamentaires, nécessitent généralement une reconstruction chirurgicale. Le chirurgien utilise des instruments arthroscopiques et une caméra insérés par de petits orifices pour retirer les vestiges du ligament endommagé et faire passer une greffe tendineuse, souvent prélevée sur les ischio-jambiers, le tendon rotulien ou une source de donneur, à travers des tunnels osseux dans le fémur et le tibia, en la fixant sous tension contrôlée pour restaurer la stabilité du genou. L'opération dure généralement deux à trois heures sous anesthésie locorégionale ou générale et est techniquement plus exigeante que la reconstruction du LCA en raison de la position du ligament et de sa vascularisation. Les centres orthopédiques et de traumatologie sportive indiens disposent de chirurgiens expérimentés dans les techniques de reconstruction du LCP à un ou deux faisceaux. La récupération nécessite un programme de rééducation plus long et soigneusement échelonné que pour la chirurgie du LCA, avec immobilisation et protocoles de mise en charge progressive pour protéger la greffe en cours de cicatrisation.",
			},
			{
				name: 'Chirurgie de la déchirure du ménisque',
				description:
					"La chirurgie de la déchirure du ménisque traite les lésions des coussinets cartilagineux en forme de C à l'intérieur du genou qui absorbent les chocs et stabilisent l'articulation entre le fémur et le tibia, des blessures qui surviennent couramment lors de mouvements de torsion pendant le sport ou d'une dégénérescence progressive chez les adultes plus âgés. Selon la localisation, la taille et le type de la déchirure, le chirurgien réalise l'une des deux procédures arthroscopiques suivantes : la réparation méniscale, dans laquelle les bords déchirés sont suturés pour préserver autant de cartilage que possible, en particulier chez les patients plus jeunes présentant des déchirures dans la zone externe bien vascularisée, ou la méniscectomie partielle, dans laquelle la portion endommagée et instable du ménisque est retirée tout en préservant le tissu sain. Les deux procédures sont réalisées par de petites incisions à l'aide d'un arthroscope et d'instruments fins, durant généralement de trente à soixante minutes sous rachianesthésie ou anesthésie générale. La chirurgie est généralement conseillée lorsque la douleur, le gonflement, l'accrochage ou le blocage persistent malgré le repos et la kinésithérapie, ou lorsqu'une IRM confirme une déchirure réparable ou instable. Les unités d'arthroscopie indiennes proposent couramment les techniques de réparation et de méniscectomie, en choisissant l'approche qui préserve le mieux la fonction du genou à long terme. La récupération après méniscectomie est généralement plus rapide, tandis que la réparation nécessite une période de rééducation plus protégée pour permettre au tissu suturé de cicatriser.",
			},
			{
				name: 'Chirurgie par échafaudage cartilagineux',
				description:
					"La chirurgie par échafaudage cartilagineux est une technique de préservation articulaire utilisée pour traiter les zones de cartilage articulaire endommagé ou manquant, le tissu lisse recouvrant les extrémités osseuses au sein d'une articulation, le plus souvent au niveau du genou à la suite d'une blessure, d'un stress répétitif ou d'une dégénérescence localisée précoce. Comme le cartilage a une capacité limitée à se régénérer, la procédure consiste à implanter un échafaudage biocompatible, parfois ensemencé avec les propres cellules cartilagineuses du patient ou des cellules dérivées de la moelle osseuse, dans la lésion afin de fournir une structure qui favorise la formation progressive d'un nouveau tissu de type cartilagineux. Elle est généralement réalisée par arthroscopie ou par une petite incision, la zone endommagée étant d'abord préparée et mesurée avant que l'échafaudage ne soit façonné, fixé avec de la colle de fibrine ou des sutures, et laissé à s'intégrer au tissu environnant. Les candidats sont généralement des patients plus jeunes et actifs présentant une lésion cartilagineuse focale et un alignement articulaire raisonnablement préservé, plutôt qu'une arthrose étendue, l'objectif étant de retarder ou d'éviter le recours au remplacement articulaire. Les centres orthopédiques indiens proposant des services de médecine régénérative et sportive offrent diverses techniques de réparation cartilagineuse par échafaudage et cellules, adaptées à la taille et à la profondeur de la lésion. La récupération implique une période de mise en charge protégée et une rééducation progressive et étroitement supervisée pour permettre la maturation du nouveau tissu.",
			},
			{
				name: "Stabilisation arthroscopique de l'épaule",
				description:
					"La stabilisation arthroscopique de l'épaule est réalisée pour corriger une épaule qui se luxe ou se subluxe de manière répétée en raison de ligaments et de tissu labral étirés, déchirés ou détachés qui maintiennent normalement la tête de l'articulation de l'épaule solidement dans sa cavité. L'instabilité fait souvent suite à une luxation traumatique initiale, fréquemment lors du sport ou d'une chute, après laquelle les structures de soutien des tissus mous de l'articulation ne guérissent pas suffisamment pour empêcher de nouveaux épisodes. À l'aide d'un arthroscope et d'instruments fins insérés par de petites incisions autour de l'épaule, le chirurgien rattache ou resserre le labrum et la capsule déchirés au rebord de la cavité à l'aide d'ancres de suture, restaurant la tension nécessaire pour maintenir l'articulation centrée pendant le mouvement. La procédure dure généralement environ une heure et est réalisée sous bloc nerveux locorégional associé à une sédation légère ou à une anesthésie générale. Elle est généralement recommandée chez les patients présentant une instabilité récurrente, un signe d'appréhension positif à l'examen et une imagerie montrant une lésion labrale ou capsulaire, en particulier chez les sujets plus jeunes ou physiquement actifs à haut risque de nouvelle luxation. Les unités indiennes spécialisées dans l'épaule et la traumatologie sportive réalisent couramment cette technique arthroscopique. La récupération implique une période d'immobilisation par écharpe suivie d'un programme de kinésithérapie structuré pour retrouver la mobilité et reconstruire la force autour de l'articulation.",
			},
			{
				name: 'Réparation arthroscopique de la coiffe des rotateurs',
				description:
					"La réparation arthroscopique de la coiffe des rotateurs traite une rupture de la coiffe des rotateurs, le groupe de quatre muscles et tendons qui stabilisent l'épaule et lèvent le bras, qui peut se rompre soudainement lors d'une chute ou d'une blessure, ou progressivement en raison de l'usure liée à l'âge et d'une activité répétitive au-dessus de la tête. Les patients présentent généralement une douleur à l'épaule qui s'aggrave la nuit, une faiblesse pour lever ou faire pivoter le bras et une difficulté pour les tâches au-dessus de la tête qui ne s'est pas améliorée avec le repos, la kinésithérapie ou les injections. Pendant la procédure, le chirurgien insère un arthroscope et de petits instruments par quelques incisions autour de l'épaule, pare tout tissu enflammé ou effiloché, et rattache le bord du tendon déchiré à son empreinte d'origine sur l'humérus à l'aide d'ancres de suture, restaurant la traction du tendon sur l'os. L'opération est généralement réalisée sous bloc locorégional avec sédation ou anesthésie générale et dure environ une à deux heures selon la taille et la complexité de la déchirure. Les unités indiennes d'orthopédie et de spécialité de l'épaule proposent cette technique pour les déchirures partielles comme pour les déchirures transfixiantes. Après l'opération, le bras est protégé par une écharpe pendant plusieurs semaines pendant que le tendon cicatrise, suivi d'un programme de kinésithérapie progressif passant de la mobilisation passive au renforcement actif sur une période de plusieurs mois.",
			},
			{
				name: 'Réparation arthroscopique de Bankart',
				description:
					"La réparation arthroscopique de Bankart traite spécifiquement une lésion de Bankart, une déchirure du labrum, l'anneau de cartilage qui approfondit la cavité de l'épaule, au niveau du rebord antéro-inférieur de l'articulation, une blessure qui survient couramment lors d'une luxation traumatique de l'épaule et constitue une cause majeure d'instabilité récurrente. Non traitée, une lésion de Bankart permet à l'épaule de continuer à glisser ou à se luxer complètement sous un stress relativement mineur, en particulier chez les patients jeunes et sportifs. Par de petites incisions, le chirurgien utilise un arthroscope pour visualiser le labrum détaché et le rattache au rebord osseux de la cavité à l'aide d'ancres de suture placées à intervalles le long de la déchirure, restaurant l'effet de butée labrale qui aide à maintenir la tête humérale centrée. Dans les cas présentant une perte osseuse associée au niveau de la cavité, des procédures de greffe osseuse supplémentaires peuvent être combinées à la réparation. L'opération dure généralement environ une heure sous anesthésie locorégionale avec sédation ou anesthésie générale. Les unités indiennes d'arthroscopie de l'épaule réalisent couramment la réparation de Bankart chez les patients présentant une lésion labrale confirmée par IRM ou arthro-scanner et des antécédents de luxation récurrente. Les soins postopératoires comprennent plusieurs semaines d'immobilisation par écharpe suivies d'un programme de kinésithérapie par phases pour restaurer mobilité, stabilité et force.",
			},
			{
				name: "Chirurgie de l'épaule par trou de serrure (arthroscopique)",
				description:
					"La chirurgie de l'épaule par trou de serrure, ou arthroscopique, est une approche mini-invasive utilisée pour diagnostiquer et traiter un large éventail d'affections de l'épaule par quelques petites incisions plutôt que par une large ouverture chirurgicale. Une fine caméra appelée arthroscope est insérée dans l'articulation pour donner au chirurgien une vue agrandie et détaillée des tendons, ligaments, cartilage et membrane synoviale sur un écran, tandis que des instruments fins passés par des orifices séparés sont utilisés pour parer, réparer ou reconstruire le tissu endommagé. Cette technique est appliquée à des affections allant des déchirures de la coiffe des rotateurs et de l'instabilité de l'épaule au syndrome de conflit, à la libération de l'épaule gelée et au retrait de corps libres ou d'ostéophytes, les étapes spécifiques dépendant de ce qui est constaté et traité. Elle est généralement proposée une fois que des symptômes tels que douleur, faiblesse, raideur ou mobilité restreinte ne s'améliorent pas avec le repos, la kinésithérapie et les médicaments. Réalisée sous bloc nerveux locorégional, sédation ou anesthésie générale, les incisions plus petites entraînent généralement moins de douleur postopératoire, un risque d'infection plus faible et une récupération initiale plus rapide qu'une chirurgie ouverte traditionnelle de l'épaule. Les centres orthopédiques indiens dotés d'unités dédiées à l'épaule proposent cette technique pour la plupart des troubles courants de l'épaule. La récupération nécessite tout de même un programme de kinésithérapie structuré et spécifique à l'affection pour retrouver la pleine fonction de l'épaule au cours des semaines et des mois suivants.",
			},
			{
				name: 'Chirurgie du cancer des os',
				description:
					"La chirurgie du cancer des os est réalisée pour retirer des tumeurs malignes se développant dans le tissu osseux, telles que l'ostéosarcome, le sarcome d'Ewing ou le chondrosarcome, ou s'étant propagées à l'os depuis un cancer ailleurs dans le corps. La planification du traitement commence généralement par une imagerie, comprenant radiographies, IRM, scanner et scintigraphie osseuse, ainsi qu'une biopsie pour confirmer le type et le grade de la tumeur, après quoi une équipe pluridisciplinaire décide de la combinaison la plus appropriée de chirurgie, de chimiothérapie et de radiothérapie. Lorsque cela est possible, les chirurgiens privilégient désormais la chirurgie de préservation du membre, retirant la tumeur avec une marge de tissu sain et reconstruisant l'os et l'articulation touchés à l'aide d'une endoprothèse métallique, d'une greffe osseuse, ou d'une combinaison des deux, préservant le membre plutôt que de recourir à l'amputation, réservée aux cas où la tumeur touche des nerfs, vaisseaux ou tissus mous majeurs. La chirurgie est généralement réalisée sous anesthésie générale et peut durer plusieurs heures selon la taille, la localisation de la tumeur et la complexité de la reconstruction requise. Les centres indiens d'oncologie orthopédique proposent des techniques de préservation du membre associées à des protocoles de chimiothérapie administrés avant et après la chirurgie. La récupération implique un séjour hospitalier d'une à deux semaines suivi d'un programme de rééducation prolongé pour retrouver la fonction, avec une surveillance continue pour détecter toute récidive.",
			},
			{
				name: 'Chirurgie d\'allongement des membres',
				description:
					"La chirurgie d'allongement des membres augmente progressivement la longueur d'un os raccourci, le plus souvent au niveau de la jambe, pour corriger une inégalité de longueur des membres causée par des affections congénitales, une lésion du cartilage de croissance pendant l'enfance, une infection, un cal vicieux de fracture ou certaines dysplasies squelettiques. Le chirurgien réalise d'abord une section osseuse contrôlée, appelée ostéotomie, sans perturber la vascularisation environnante, puis applique soit un fixateur externe porté à l'extérieur du membre, soit un clou d'allongement interne à commande magnétique placé à l'intérieur de l'os. Au cours des semaines suivantes, le dispositif est ajusté quotidiennement par petits incréments, généralement d'environ un millimètre par jour, permettant à un nouvel os de se former progressivement dans l'espace créé tandis que les tissus mous, nerfs et vaisseaux sanguins s'étirent en parallèle. La durée totale du traitement, incluant la phase d'allongement et la consolidation osseuse ultérieure, s'étend généralement sur plusieurs mois et nécessite une surveillance étroite avec des radiographies périodiques pour suivre la consolidation osseuse et ajuster le plan si nécessaire. Les centres indiens de reconstruction des membres proposent des techniques de fixateur externe et de clou interne selon l'ampleur de l'allongement requis et la préférence du patient. La kinésithérapie tout au long du processus aide à maintenir la mobilité articulaire et la force musculaire, et la plupart des patients ont besoin d'un séjour prolongé dans le pays de traitement pour permettre une surveillance sûre pendant la phase active d'allongement.",
			},
			{
				name: 'Chirurgie du pied bot',
				description:
					"La chirurgie du pied bot traite le pied bot varus équin congénital, une malformation présente à la naissance dans laquelle un ou les deux pieds sont tournés vers l'intérieur et vers le bas en raison de tendons raccourcis et d'un alignement anormal des os du pied. La plupart des cas sont désormais pris en charge initialement par la méthode de Ponseti, une approche non chirurgicale utilisant des manipulations douces répétées et des plâtres successifs sur plusieurs semaines pour corriger progressivement la position du pied, souvent suivie d'une petite intervention pour libérer un tendon d'Achille tendu. La chirurgie devient nécessaire lorsque la correction par plâtre est incomplète, lorsque la déformité est résistante ou récidive, ou chez les enfants plus âgés dont le pied bot n'a pas été traité précocement, et peut aller d'une simple libération ou d'un transfert tendineux à des interventions osseuses et articulaires plus étendues pour réaligner structurellement le pied. L'opération spécifique dépend de l'âge de l'enfant, de la sévérité de la déformité et des tissus contribuant à la position anormale. La chirurgie est réalisée sous anesthésie générale, et le pied est généralement immobilisé dans un plâtre par la suite pour protéger la correction pendant la cicatrisation. Les centres indiens d'orthopédie pédiatrique prennent en charge le pied bot à la fois par des protocoles basés sur la méthode de Ponseti et par correction chirurgicale pour les cas résistants ou négligés. Un suivi à long terme avec appareillage et surveillance est généralement nécessaire à mesure que l'enfant grandit.",
			},
			{
				name: 'Traitement de la dysplasie de la hanche',
				description:
					"Le traitement de la dysplasie de la hanche s'adresse à la dysplasie développementale de la hanche, une affection dans laquelle la cavité de la hanche est trop peu profonde pour couvrir et stabiliser correctement la tête du fémur, allant d'un simple relâchement à une luxation complète, le plus souvent identifiée dans la petite enfance par dépistage mais parfois diagnostiquée plus tard pendant l'enfance ou à l'âge adulte. Chez les jeunes nourrissons, le traitement commence généralement par un harnais de positionnement, tel qu'un harnais de Pavlik, porté pendant plusieurs semaines pour guider en douceur la hanche vers une position stable et bien centrée pendant que la cavité se développe normalement. Lorsque la dysplasie est diagnostiquée plus tard, est plus sévère, ou ne répond pas à l'appareillage, des options chirurgicales peuvent être nécessaires, allant de la réduction fermée ou ouverte de l'articulation de la hanche à une ostéotomie péri-acétabulaire ou pelvienne qui remodèle et repositionne la cavité pour mieux couvrir la tête fémorale, parfois combinée à une ostéotomie fémorale. La chirurgie est réalisée sous anesthésie générale et est généralement suivie d'une période d'immobilisation par plâtre ou attelle pour protéger la correction. Les unités indiennes de préservation de la hanche, pédiatriques et adultes, proposent à la fois des protocoles d'appareillage pour les nourrissons et des techniques d'ostéotomie reconstructrice pour les enfants plus âgés et les jeunes adultes. Un suivi à long terme est important, car une dysplasie non traitée ou insuffisamment corrigée peut entraîner une arthrose précoce de la hanche.",
			},
			{
				name: 'Traitement des troubles musculo-squelettiques',
				description:
					"Le traitement des troubles musculo-squelettiques couvre le diagnostic et la prise en charge d'un large éventail d'affections touchant les os, articulations, muscles, tendons, ligaments et nerfs qui composent le système de mouvement du corps, notamment l'arthrose, les douleurs chroniques du dos et du cou, les lésions tendineuses et ligamentaires, les fractures, les déformités et les affections dégénératives de la colonne vertébrale. La prise en charge commence généralement par une évaluation clinique et une imagerie, telle que radiographies, IRM ou scanner, pour identifier la cause sous-jacente de la douleur, de la raideur, de la faiblesse ou de la mobilité restreinte, après quoi un spécialiste en orthopédie recommande une voie de traitement pouvant inclure kinésithérapie, médicaments, injections ciblées, appareillage ou chirurgie selon la sévérité et la nature de l'affection. Lorsqu'une chirurgie est requise, elle peut aller de procédures arthroscopiques mini-invasives au remplacement articulaire, à la fixation vertébrale ou à une chirurgie reconstructrice correctrice, choisie selon le diagnostic spécifique et l'état de santé général et les objectifs fonctionnels du patient. Les centres orthopédiques multi-spécialités indiens réunissent des équipes de remplacement articulaire, de chirurgie du rachis, de médecine du sport et de kinésithérapie pour prendre en charge des problèmes musculo-squelettiques complexes ou de longue date dans le cadre d'un plan coordonné unique. Les présentations variant considérablement, un examen préalable de l'imagerie et des rapports cliniques antérieurs aide à déterminer l'approche thérapeutique la plus appropriée avant que le patient ne voyage. Les délais de récupération et de rééducation dépendent entièrement du trouble spécifique traité et de l'intervention choisie.",
			},
		],
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
		detailedProcedures: [
			{
				name: 'Traitement du cancer du sein',
				description:
					"Le traitement du cancer du sein en Inde est planifié par un comité pluridisciplinaire dédié qui examine vos rapports de mammographie, de biopsie et de récepteurs hormonaux (ER/PR/HER2) avant de recommander un parcours adapté au stade et au type de tumeur. Selon le diagnostic, la prise en charge peut associer une chirurgie conservatrice du sein (tumorectomie) ou une mastectomie avec biopsie du ganglion sentinelle, suivie d'une chimiothérapie adjuvante, d'une thérapie ciblée (comme le trastuzumab pour les tumeurs HER2-positives), d'une hormonothérapie et d'une radiothérapie pour réduire le risque de récidive. Des options de reconstruction, immédiate ou différée, sont disponibles pour les patientes optant pour une mastectomie. Les grands centres d'oncologie indiens utilisent la mammographie numérique, la biopsie guidée par IRM et l'analyse extemporanée peropératoire pour planifier une chirurgie conservatrice préservant les tissus chaque fois que le stade de la tumeur le permet. Les patientes ont généralement besoin d'un court séjour hospitalier pour la chirurgie, la chimiothérapie et la radiothérapie étant administrées en ambulatoire au cours des semaines suivantes — de nombreuses patientes prévoient un séjour plus long en Inde pour terminer un premier cycle de traitement adjuvant avant de rentrer chez elles dans le cadre d'un suivi partagé avec leur oncologue local. Les deuxièmes avis sur les lames de biopsie et l'imagerie sont examinés gratuitement avant tout engagement à voyager.",
			},
			{
				name: 'Traitement du cancer buccal',
				description:
					"Le cancer buccal — touchant la langue, la muqueuse jugale, les gencives, le plancher de la bouche ou les lèvres — figure parmi les cancers les plus fréquemment traités en Inde, où des unités d'oncologie cervico-faciale à fort volume prennent en charge une grande part de cas liés au tabac et à la noix de bétel. Le traitement commence par une biopsie et une imagerie (scanner/IRM, parfois TEP-scan) pour stadifier la tumeur, suivie d'une résection chirurgicale à marges saines, souvent associée à un curage ganglionnaire cervical pour retirer les ganglions lymphatiques à risque de dissémination. La chirurgie reconstructrice microvasculaire — utilisant des lambeaux tissulaires prélevés sur l'avant-bras, la cuisse ou le péroné — restaure forme et fonction lorsqu'une partie importante de la mâchoire ou de la langue est retirée. Selon l'anatomopathologie, la chirurgie est suivie d'une radiothérapie ou d'une chimioradiothérapie adjuvante pour réduire le risque de récidive. Une équipe pluridisciplinaire de chirurgiens cervico-faciaux, d'oncologues, de prothésistes dentaires et d'orthophonistes spécialisés en déglutition prend en charge l'ensemble du parcours de soins, y compris la rééducation de la parole et de l'alimentation après la chirurgie. Les cancers détectés à un stade précoce, avant dissémination ganglionnaire, ont un pronostic nettement meilleur ; les patients sont donc encouragés à transmettre leurs rapports de biopsie et d'imagerie pour un avis du comité oncologique dès qu'un diagnostic est suspecté.",
			},
			{
				name: 'Traitement du cancer de la prostate',
				description:
					"Le traitement du cancer de la prostate en Inde va de la surveillance active pour les tumeurs à très faible risque et à croissance lente, à la prostatectomie radicale assistée par robot, la radiothérapie et l'hormonothérapie pour les formes plus avancées. Après le diagnostic par dosage du PSA, IRM et biopsie, un onco-urologue évalue le cancer à l'aide du score de Gleason pour déterminer l'approche la plus appropriée. La prostatectomie robotisée (da Vinci) est largement disponible dans les grands centres d'urologie indiens, offrant une chirurgie préservant les nerfs qui vise à conserver la continence et la fonction sexuelle tout en retirant la prostate et, si nécessaire, les ganglions lymphatiques environnants. Pour les patients non éligibles à la chirurgie ou préférant une voie non chirurgicale, la radiothérapie externe, la curiethérapie ou l'IMRT/IGRT peuvent délivrer une radiation très ciblée tout en limitant l'exposition des organes voisins. L'hormonothérapie de privation androgénique est utilisée en complément de la chirurgie ou de la radiothérapie dans les cas à risque intermédiaire et élevé, ou seule pour les maladies avancées. La récupération après chirurgie robotisée est généralement plus rapide qu'après chirurgie ouverte, la plupart des patients sortant en quelques jours et reprenant une activité normale en plusieurs semaines. Votre dossier est examiné par un comité oncologique avant toute recommandation définitive.",
			},
			{
				name: "Traitement du cancer de l'endomètre",
				description:
					"Le cancer de l'endomètre (muqueuse utérine) est l'un des cancers gynécologiques les plus curables lorsqu'il est détecté précocement, et les unités d'oncologie gynécologique indiennes proposent une stadification et une chirurgie complètes pour les femmes diagnostiquées à tout stade. Le bilan initial comprend une échographie transvaginale, une biopsie de l'endomètre et une imagerie pour évaluer l'étendue de la maladie. Le traitement standard est une hystérectomie totale avec ablation des trompes de Fallope et des ovaires (salpingo-ovariectomie), généralement réalisée par laparoscopie ou par robot pour réduire les pertes sanguines, les cicatrices et le temps de récupération par rapport à la chirurgie ouverte. Un prélèvement ganglionnaire ou une biopsie du ganglion sentinelle est réalisé pendant la même opération pour aider à déterminer si un traitement complémentaire est nécessaire. Selon le grade et le stade de la tumeur constatés lors de la chirurgie, une radiothérapie adjuvante (externe ou curiethérapie) ou une chimiothérapie peut être recommandée pour réduire le risque de récidive. Pour les femmes plus jeunes souhaitant préserver leur fertilité en cas de maladie très précoce et de bas grade, un traitement hormonal non chirurgical peut être envisagé après évaluation minutieuse. La plupart des patientes bénéficiant d'une hystérectomie mini-invasive sortent sous deux à trois jours et reprennent une activité normale en quelques semaines.",
			},
			{
				name: 'Traitement de la leucémie',
				description:
					"La leucémie — cancer des cellules souches hématopoïétiques de la moelle osseuse — est traitée en Inde par des équipes d'hémato-oncologie dédiées disposant d'un accès à des diagnostics avancés, notamment la cytométrie en flux, la cytogénétique et les tests moléculaires, essentiels pour classifier le sous-type exact (aiguë ou chronique, lymphoblastique ou myéloïde) et choisir le protocole adapté. Le traitement commence généralement par une chimiothérapie d'induction pour obtenir une rémission, suivie d'une chimiothérapie de consolidation pour éliminer les cellules leucémiques restantes ; certains sous-types, comme la leucémie myéloïde chronique, sont pris en charge par des thérapies orales ciblées (inhibiteurs de tyrosine kinase) plutôt qu'une chimiothérapie intensive. Pour les cas à haut risque ou en rechute, une greffe de moelle osseuse ou de cellules souches peut être recommandée, utilisant soit un donneur apparenté compatible, soit un donneur non apparenté, soit les propres cellules du patient. Les soins sont délivrés dans des unités d'hématologie spécialisées disposant de chambres en isolement protecteur, d'un soutien de banque du sang et de protocoles de contrôle des infections adaptés aux patients immunodéprimés pendant le traitement. Les protocoles contre la leucémie s'étalant sur plusieurs mois, de nombreux patients coordonnent une phase intensive initiale en Inde avec un suivi de chimiothérapie surveillé par leur médecin local, des rapports réguliers étant partagés entre les équipes pour maintenir le plan de traitement sur la bonne voie.",
			},
			{
				name: 'Traitement du lymphome de Hodgkin',
				description:
					"Le lymphome de Hodgkin, un cancer du système lymphatique caractérisé par la présence de cellules de Reed-Sternberg, présente l'un des taux de guérison les plus élevés parmi les cancers lorsqu'il est traité par un schéma de chimiothérapie standard (généralement l'ABVD), et les centres d'oncologie indiens suivent des protocoles de stadification et de traitement reconnus internationalement. Le diagnostic est confirmé par biopsie ganglionnaire et stadifié à l'aide d'une imagerie TEP-scan pour cartographier l'étendue de la maladie au-dessus et en dessous du diaphragme. La plupart des patients sont traités par une cure de chimiothérapie combinée sur plusieurs mois, la réponse étant évaluée par des TEP-scans intermédiaires qui aident les oncologues à décider de poursuivre, d'ajuster ou d'ajouter une radiothérapie pour la maladie résiduelle. Une maladie localisée à un stade précoce peut être traitée par une chimiothérapie plus courte suivie d'une radiothérapie du site atteint, tandis qu'une maladie à un stade avancé nécessite généralement une chimiothérapie plus longue seule. Pour les cas en rechute ou résistants, une chimiothérapie de rattrapage suivie d'une autogreffe de cellules souches est disponible dans les grands centres. Les cycles de chimiothérapie sont administrés en hôpital de jour chaque fois que possible, et votre comité oncologique établira un calendrier détaillé cycle par cycle avant votre voyage.",
			},
			{
				name: 'Chimiothérapie',
				description:
					"La chimiothérapie utilise des médicaments cytotoxiques ou ciblés pour détruire les cellules cancéreuses ou empêcher leur division, et elle est utilisée soit comme traitement principal des cancers du sang et des lymphomes, soit comme thérapie adjuvante/néoadjuvante en complément de la chirurgie et de la radiothérapie pour les tumeurs solides. Les unités d'oncologie de jour indiennes sont équipées de fauteuils de chimiothérapie dédiés, de personnel infirmier spécialisé en oncologie formé, et de protocoles préparés en pharmacie, dosés selon le poids et la surface corporelle, conformes aux protocoles de traitement internationaux. Avant de commencer, votre oncologue examine la numération sanguine, la fonction des organes et les rapports antérieurs pour choisir le protocole, la durée des cycles et le nombre de cures adaptés à votre type et stade de cancer. La plupart des protocoles sont administrés en perfusion ambulatoire de quelques heures, répétée toutes les deux à trois semaines, avec des traitements de soutien (antiémétiques, facteurs de croissance) administrés en parallèle pour gérer les effets secondaires. Des bilans sanguins réguliers entre les cycles surveillent les complications telles qu'une baisse de la numération sanguine, et les doses sont ajustées en conséquence. Pour les patients combinant un séjour en Inde avec une phase initiale de chimiothérapie, votre équipe d'oncologie fournit un protocole écrit et des rapports permettant à un médecin local de poursuivre ou de surveiller en toute sécurité les cycles suivants à domicile.",
			},
			{
				name: "Radiothérapie conformationnelle avec modulation d'intensité (IMRT)",
				description:
					"La radiothérapie conformationnelle avec modulation d'intensité (IMRT) est une forme avancée de radiothérapie externe qui façonne et fait varier l'intensité de centaines de faisceaux de rayonnement individuels pour épouser étroitement la forme tridimensionnelle d'une tumeur, délivrant une dose plus élevée et plus efficace au cancer tout en épargnant les tissus et organes sains environnants. Elle est largement utilisée en Inde pour les cancers de la tête et du cou, de la prostate, du sein, du cerveau et gynécologiques, où des structures proches comme la moelle épinière, les glandes salivaires ou la vessie doivent être protégées des dommages liés aux radiations. La planification du traitement commence par un scanner de simulation, qu'un radio-oncologue et un physicien médical utilisent pour cartographier la tumeur et concevoir un plan de faisceaux sur un logiciel spécialisé avant le début du traitement. L'IMRT est délivrée en courtes séances ambulatoires quotidiennes, généralement cinq jours par semaine pendant plusieurs semaines, chaque séance durant 15 à 20 minutes. Comme la technique réduit l'irradiation des tissus sains, les patients présentent généralement moins d'effets secondaires qu'avec les anciennes techniques de radiothérapie, comme une sécheresse buccale moindre après un traitement cervico-facial ou une meilleure tolérance intestinale et vésicale après une radiothérapie pelvienne. Des contrôles d'imagerie réguliers garantissent que le traitement reste précisément ciblé tout au long de la cure.",
			},
			{
				name: 'Radiothérapie guidée par imagerie (IGRT)',
				description:
					"La radiothérapie guidée par imagerie (IGRT) associe une imagerie avancée — telle que le scanner à faisceau conique ou la vérification par rayons X — à chaque séance de radiothérapie pour confirmer la position exacte de la tumeur immédiatement avant le traitement, corrigeant les petites variations quotidiennes causées par la respiration, le remplissage des organes ou le positionnement du patient. Ce niveau supplémentaire de précision est particulièrement précieux pour les tumeurs mobiles ou qui se déplacent, telles que les cancers du poumon, du foie, de la prostate et du pancréas, permettant aux radio-oncologues de délivrer en toute sécurité des doses plus élevées et plus efficaces tout en réduisant encore l'exposition des organes sains environnants. L'IGRT est généralement associée à l'IMRT ou à d'autres techniques de radiothérapie conformationnelle plutôt qu'utilisée seule, et les centres indiens de cancérologie qui la proposent sont équipés de systèmes d'imagerie intégrés à l'accélérateur linéaire, de sorte que la vérification se déroule lors de la même séance que le traitement, sans visite supplémentaire. Une équipe de radio-oncologie examine l'imagerie à chaque séance, ou à intervalles définis, et ajuste la position du patient avant l'émission du faisceau. Comme pour les autres formes de radiothérapie externe, les séances sont courtes, indolores et délivrées en ambulatoire selon une cure planifiée en fonction de votre type et stade de cancer spécifiques.",
			},
			{
				name: 'Traitement par CyberKnife',
				description:
					"Le CyberKnife est un système de radiochirurgie robotisé qui délivre un rayonnement hautement focalisé et à haute dose sur des tumeurs petites ou difficiles d'accès avec une précision sub-millimétrique, grâce à un accélérateur linéaire monté sur un bras robotisé qui suit la position de la tumeur et s'ajuste en temps réel pendant le traitement — y compris les tumeurs qui se déplacent avec la respiration — sans nécessiter de cadre de tête invasif. Il est couramment utilisé en Inde pour les tumeurs cérébrales, les tumeurs vertébrales, le cancer du poumon à un stade précoce, les tumeurs du foie, et les cas où une tumeur se situe à proximité de structures critiques telles que le tronc cérébral, les nerfs optiques ou la moelle épinière, rendant la chirurgie ou la radiothérapie conventionnelle plus risquées. Grâce à sa précision, le CyberKnife peut délivrer une dose de rayonnement efficace en seulement une à cinq séances (radiothérapie/radiochirurgie stéréotaxique du corps entier), comparé à plusieurs semaines de traitement quotidien avec la radiothérapie conventionnelle — un avantage significatif pour les patients voyageant depuis l'étranger. La planification du traitement utilise une imagerie IRM et scanner haute résolution fusionnée pour cartographier précisément la tumeur, et chaque séance est entièrement non invasive et indolore, durant généralement de 30 à 90 minutes sans nécessiter d'anesthésie. La plupart des patients rentrent chez eux le jour même de chaque séance et reprennent immédiatement leurs activités normales.",
			},
			{
				name: 'Chirurgie ganglionnaire',
				description:
					"La chirurgie ganglionnaire couvre un ensemble de procédures utilisées en cancérologie pour retirer, prélever ou évaluer les ganglions lymphatiques afin de déterminer si le cancer s'est propagé au-delà de la tumeur d'origine — un facteur clé pour une stadification et une planification thérapeutique précises. L'approche la plus courante est la biopsie du ganglion sentinelle, dans laquelle un colorant traceur ou un marqueur radioactif identifie le ou les premiers ganglions vers lesquels une tumeur est susceptible de se propager ; si ceux-ci sont indemnes, un retrait ganglionnaire plus étendu peut souvent être évité, réduisant le risque de complications telles que le lymphœdème. Lorsque le cancer est confirmé ou suspecté dans plusieurs ganglions, un curage ganglionnaire plus complet — tel qu'un curage axillaire pour le cancer du sein ou un curage cervical pour un cancer de la tête et du cou — retire un groupe plus large de ganglions de la région concernée. Ces procédures sont généralement réalisées en même temps que la chirurgie de la tumeur primaire sous anesthésie générale, souvent à l'aide de techniques mini-invasives ou robotisées pour réduire les cicatrices et accélérer la récupération. Les résultats anatomopathologiques des ganglions retirés orientent les décisions quant à la nécessité d'une chimiothérapie ou d'une radiothérapie par la suite, et des conseils de kinésithérapie ou de prévention du lymphœdème sont fournis dans le cadre des soins postopératoires.",
			},
		],
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
		detailedProcedures: [
			{
				name: 'Rhinoplastie (chirurgie du nez)',
				description:
					"La rhinoplastie est une intervention chirurgicale qui remodèle l'os et le cartilage du nez pour en modifier la taille, la forme ou les proportions, ou pour corriger des problèmes respiratoires causés par une déviation de la cloison nasale ou des voies nasales étroites. Le chirurgien peut travailler par de petites incisions dissimulées à l'intérieur des narines (technique fermée) ou par une petite incision externe à la base du nez (technique ouverte), selon l'ampleur de la correction nécessaire. Le cartilage peut être taillé, remodelé ou prélevé ailleurs dans le nez ou l'oreille pour reconstruire la structure. La procédure est généralement réalisée sous anesthésie générale ou locale avec sédation et dure une à trois heures. Les candidats incluent les personnes gênées par la forme ou la taille de leur nez, celles présentant des difficultés respiratoires, ou les patients nécessitant une révision après une chirurgie antérieure. La récupération comprend un gonflement et des ecchymoses pendant une à deux semaines, avec une attelle portée les premiers jours et des résultats définitifs visibles sur plusieurs mois à mesure que le gonflement se résorbe. Les patients internationaux venant en Inde pour une rhinoplastie prévoient généralement une consultation initiale, l'intervention elle-même et une visite de suivi avant le retrait de l'attelle, permettant de surveiller en personne la majeure partie de la cicatrisation précoce.",
			},
			{
				name: 'Lifting du visage',
				description:
					"Un lifting du visage, ou rhytidectomie, est une intervention chirurgicale qui traite le relâchement cutané, les plis profonds et la perte de définition au niveau du bas du visage, de la mâchoire et du cou qui apparaissent avec l'âge. Par des incisions généralement placées le long de la ligne des cheveux et autour de l'oreille, le chirurgien soulève et repositionne le muscle facial et le tissu conjonctif sous-jacents (la couche SMAS), retire l'excès de peau et redrape la peau restante sur le nouveau contour. Il est souvent associé à un lifting du cou ou à une greffe de graisse pour traiter les changements associés. La procédure est réalisée sous anesthésie générale ou locale avec sédation et dure généralement trois à cinq heures. Les bons candidats sont généralement en bonne santé raisonnable, avec des attentes réalistes quant au degré d'amélioration qu'un lifting peut apporter, car il traite le relâchement plutôt que les ridules ou les dommages solaires. La récupération comprend gonflement, ecchymoses et tiraillements pendant une à deux semaines, les sutures étant retirées dans ce délai et la plupart des patients reprenant une activité normale en deux à trois semaines. La procédure nécessitant un suivi en personne pour vérifier la cicatrisation et retirer les sutures, les patients venant en Inde pour un lifting du visage prévoient généralement un séjour d'environ deux semaines.",
			},
			{
				name: 'Lifting du visage non chirurgical',
				description:
					"Le lifting du visage non chirurgical n'est pas une intervention unique mais une combinaison de traitements injectables et énergétiques utilisés pour redresser et rafraîchir le visage sans incision ni anesthésie générale. Selon les préoccupations du patient, un plan de traitement peut combiner des produits de comblement dermiques pour restaurer le volume des joues et des tempes, des injections de toxine botulique pour atténuer les rides d'expression, et des technologies de raffermissement cutané telles que la radiofréquence ou les ultrasons (par exemple le HIFU) pour stimuler le collagène et raffermir la peau relâchée. Les séances sont généralement réalisées en cabinet avec une crème anesthésiante topique, et la plupart des traitements durent trente minutes à une heure. Il n'y a que peu ou pas d'éviction sociale au-delà d'une rougeur ou d'un léger gonflement temporaire, de sorte que les patients peuvent généralement reprendre leurs activités normales le jour même ou le lendemain. Cette approche convient aux patients présentant des signes de vieillissement légers à modérés qui souhaitent une amélioration visible sans chirurgie, bien que les résultats soient plus subtils et temporaires qu'un lifting chirurgical, durant généralement de plusieurs mois à deux ans selon les traitements utilisés. Les séances étant rapides et renouvelables, certains patients combinent un lifting non chirurgical avec d'autres interventions lors d'un même séjour en Inde, les traitements d'entretien étant prévus lors d'un voyage ultérieur ou auprès d'un praticien local.",
			},
			{
				name: 'Lifting du visage par fils tenseurs',
				description:
					"Le lifting du visage par fils tenseurs est une procédure mini-invasive qui utilise de fins fils chirurgicaux résorbables, souvent en polydioxanone (PDO), pour redresser la peau relâchée et stimuler la production de collagène sans les incisions d'un lifting traditionnel. Les fils, dont certains comportent de minuscules cônes ou crans, sont insérés sous la peau à l'aide d'une aiguille fine ou d'une canule et ancrés pour repositionner doucement les tissus des joues, de la mâchoire ou des sourcils avant que les extrémités ne soient coupées. La procédure est réalisée sous anesthésie locale en cabinet et dure généralement trente à soixante minutes. Au cours des semaines suivantes, le corps forme du collagène autour des fils en cours de résorption, ce qui ajoute progressivement un raffermissement léger à l'effet de lifting initial. Elle convient aux patients présentant un relâchement précoce qui ne sont pas encore prêts pour la chirurgie, et les résultats sont nettement plus modestes et de plus courte durée, généralement douze à dix-huit mois, qu'un lifting chirurgical. L'éviction sociale est minime, avec un peu de gonflement, d'ecchymoses ou une sensation de tiraillement pendant quelques jours. La récupération étant courte, un lifting par fils peut souvent être programmé en même temps que d'autres traitements lors d'un seul voyage en Inde, bien que les patients doivent discuter du calendrier avec leur chirurgien en cas de combinaison avec des procédures plus invasives.",
			},
			{
				name: 'Blépharoplastie (chirurgie des paupières)',
				description:
					"La blépharoplastie est une intervention chirurgicale qui retire ou repositionne l'excès de peau, de muscle et de graisse autour des paupières supérieures ou inférieures pour traiter l'affaissement, le gonflement ou les poches sous les yeux. Pour la paupière supérieure, le chirurgien pratique une incision le long du pli naturel pour retirer l'excès de tissu ; pour la paupière inférieure, l'incision peut être placée juste sous la ligne des cils ou à l'intérieur de la paupière (approche transconjonctivale) pour éviter une cicatrice visible. La procédure est généralement réalisée sous anesthésie locale avec sédation et dure une à deux heures selon qu'une ou les deux paupières sont traitées. Les candidats incluent les personnes dont la peau de la paupière supérieure gêne la vision, celles gênées par des yeux d'apparence fatiguée ou gonflée, et les patients recherchant une apparence plus éveillée. La récupération comprend gonflement et ecchymoses pendant une à deux semaines, les sutures étant retirées en environ une semaine et la plupart des patients étant à l'aise en public sous dix à quatorze jours grâce au maquillage ou aux lunettes de soleil. Le tissu palpébral cicatrisant relativement vite mais nécessitant tout de même un contrôle des sutures et un suivi des progrès, les patients venant en Inde pour une blépharoplastie prévoient généralement un séjour de dix jours à deux semaines pour couvrir l'intervention et le suivi précoce.",
			},
			{
				name: 'Chirurgie oculoplastique',
				description:
					"La chirurgie oculoplastique est une branche spécialisée de l'ophtalmologie et de la chirurgie plastique qui traite les problèmes structurels et fonctionnels des paupières, des canaux lacrymaux, de l'orbite et des tissus environnants. Elle couvre un large éventail de procédures, notamment la réparation d'une paupière tombante (ptosis) gênant la vision, la correction d'une malposition palpébrale telle que l'ectropion ou l'entropion, le traitement des canaux lacrymaux bouchés, l'ablation de tumeurs ou de kystes palpébraux avec reconstruction, la réparation des fractures orbitaires, et la reconstruction de la cavité orbitaire après une blessure ou une énucléation oculaire. Des chirurgiens formés à la fois en ophtalmologie et en techniques de chirurgie plastique réalisent ces procédures, qui peuvent être effectuées sous anesthésie locale ou générale selon la complexité et la localisation. Les candidats sont des patients présentant un problème fonctionnel affectant la vision, le confort oculaire ou la fermeture des paupières, ainsi que ceux nécessitant une reconstruction après un traumatisme, une ablation tumorale ou une chirurgie antérieure. Ces affections touchant souvent la protection de l'œil et sa capacité à se fermer, l'évaluation comprend généralement un examen oculaire détaillé en plus du bilan chirurgical. La récupération varie considérablement selon la procédure, de quelques jours pour des réparations palpébrales mineures à plusieurs semaines pour une reconstruction orbitaire, et les centres oculoplastiques indiens prennent couramment en charge des cas complexes nécessitant une chirurgie par étapes et une imagerie de suivi.",
			},
			{
				name: 'Injections de Botox',
				description:
					"Le Botox est la marque la plus connue de toxine botulique de type A, une protéine purifiée injectée à petites doses précises dans les muscles du visage pour relâcher temporairement les contractions à l'origine des rides d'expression, telles que les rides du lion entre les sourcils, les pattes d'oie autour des yeux et les rides horizontales du front. La toxine agit en bloquant les signaux nerveux vers le muscle traité, de sorte que la peau au-dessus se lisse tandis que les expressions environnantes restent largement naturelles si la dose est bien ajustée. Le traitement est réalisé en cabinet avec une aiguille fine et sans anesthésie autre qu'une crème anesthésiante optionnelle, durant généralement dix à vingt minutes pour plusieurs points d'injection. Les effets apparaissent sous trois à sept jours, atteignent leur maximum vers deux semaines, et durent généralement trois à quatre mois avant que l'activité musculaire ne revienne progressivement, moment auquel un nouveau traitement est nécessaire pour maintenir l'effet. Le Botox est également utilisé à des fins médicales pour des affections telles que la transpiration excessive, la migraine chronique et certains troubles de spasme musculaire. Il n'y a essentiellement aucune éviction sociale au-delà d'une légère rougeur ou d'un petit hématome aux points d'injection, ce qui en fait un complément courant pour les patients déjà en Inde pour un autre traitement esthétique ou médical.",
			},
			{
				name: "Otoplastie (chirurgie des oreilles)",
				description:
					"L'otoplastie est une intervention chirurgicale qui remodèle le cartilage de l'oreille externe, le plus souvent pour rapprocher des oreilles décollées de la tête ou corriger des irrégularités de forme ou de taille présentes dès la naissance ou causées par une blessure. Le chirurgien pratique généralement une incision derrière l'oreille, puis incise, replie ou suture le cartilage dans une position plus naturelle avant de refermer l'incision de sorte que la cicatrice résultante soit dissimulée dans le pli naturel. La procédure peut être réalisée sous anesthésie locale avec sédation chez l'adulte ou sous anesthésie générale chez l'enfant, et dure généralement une à deux heures pour les deux oreilles. C'est l'une des rares interventions esthétiques couramment pratiquées chez les enfants, généralement une fois que le cartilage de l'oreille s'est suffisamment développé, souvent pour traiter une gêne avant l'entrée à l'école. La récupération comprend un pansement protecteur sur la tête les premiers jours, suivi d'un bandeau plus léger porté la nuit pendant plusieurs semaines pour protéger la nouvelle position pendant la cicatrisation. Le gonflement et la gêne légère s'atténuent en une à deux semaines. Les familles venant en Inde pour l'otoplastie d'un enfant prévoient généralement un court séjour couvrant la chirurgie et le changement initial de pansement.",
			},
			{
				name: 'Greffe de cheveux',
				description:
					"La greffe de cheveux relocalise des follicules pileux d'une zone donneuse, généralement l'arrière ou les côtés du cuir chevelu où la croissance des cheveux résiste naturellement à l'amincissement, vers des zones de calvitie visible. Les deux principales techniques sont la transplantation d'unités folliculaires (FUT), où une bande de cuir chevelu est prélevée puis divisée en greffons individuels, et l'extraction d'unités folliculaires (FUE), où les follicules sont prélevés un par un à l'aide d'un petit outil de ponction, laissant des cicatrices minimales. Les greffons sont placés dans de minuscules incisions receveuses suivant l'angle et la densité naturels des cheveux environnants pour un résultat d'aspect naturel. La procédure est réalisée sous anesthésie locale et, selon le nombre de greffons requis, dure environ quatre à huit heures, parfois réparties sur deux séances. Les candidats appropriés sont les hommes et les femmes présentant une alopécie et une réserve donneuse adéquate, évaluée au préalable quant à la cause sous-jacente de la chute. Les cheveux transplantés tombent généralement en quelques semaines avant de repousser progressivement, avec une nouvelle croissance visible sur six à douze mois. L'intervention elle-même impliquant une éviction sociale modeste, les patients venant en Inde prévoient souvent un séjour d'environ une semaine pour permettre au cuir chevelu de se stabiliser avant de reprendre l'avion.",
			},
			{
				name: 'Augmentation mammaire',
				description:
					"L'augmentation mammaire est une intervention chirurgicale qui augmente la taille des seins et modifie leur forme à l'aide d'implants en silicone ou en sérum physiologique, ou, dans certains cas, de la propre graisse de la patiente transférée depuis une autre zone du corps. Le chirurgien place l'implant par une incision, généralement autour de l'aréole, dans le pli naturel sous le sein, ou au niveau de l'aisselle, en le positionnant au-dessus ou en dessous du muscle pectoral selon l'anatomie de la patiente et le résultat souhaité. La procédure est réalisée sous anesthésie générale et dure généralement une à deux heures. Les candidates incluent les femmes estimant que la taille de leur poitrine est disproportionnée par rapport à leur silhouette, celles souhaitant restaurer le volume perdu après une grossesse ou une variation de poids, et les patientes en reconstruction. La récupération comprend gonflement, tiraillements et mouvement du bras restreint pendant une à deux semaines, la plupart des patientes reprenant une activité légère dans ce délai et un exercice complet après quatre à six semaines. Les implants ne sont pas considérés comme des dispositifs à vie et peuvent nécessiter une surveillance ou un remplacement ultérieur. Les patientes venant en Inde pour une augmentation mammaire prévoient généralement un séjour de dix à quatorze jours pour permettre au chirurgien de vérifier les incisions et la cicatrisation précoce avant le voyage retour.",
			},
			{
				name: 'Réduction mammaire',
				description:
					"La chirurgie de réduction mammaire, ou mammoplastie de réduction, retire l'excès de graisse, de tissu glandulaire et de peau du sein pour en réduire la taille et le poids, et repositionne le mamelon et l'aréole plus haut sur un sein plus petit. La procédure est généralement réalisée par une incision en forme d'ancre ou verticale, le chirurgien remodelant le tissu restant pour créer un contour proportionné avant de refermer les incisions. Elle est réalisée sous anesthésie générale et dure généralement deux à quatre heures. Les candidates sont généralement des patientes présentant des symptômes physiques liés à une poitrine trop volumineuse, tels que douleurs au cou, au dos ou aux épaules, irritation cutanée sous le pli mammaire, ou activité physique restreinte, ainsi que celles recherchant une meilleure proportion avec leur silhouette. La récupération comprend gonflement, ecchymoses et sensibilité pendant une à deux semaines, la plupart des patientes reprenant des activités quotidiennes normales en deux semaines et l'exercice après quatre à six semaines, une fois autorisées par le chirurgien. La sensation au niveau du mamelon peut être temporairement, ou plus rarement définitivement, modifiée. La réduction mammaire ayant souvent un bénéfice fonctionnel documenté en plus du bénéfice esthétique, les patientes venant en Inde pour cette intervention organisent généralement un séjour de deux semaines pour permettre le retrait des sutures et un contrôle des plaies.",
			},
			{
				name: 'Lifting mammaire',
				description:
					"Un lifting mammaire, ou mastopexie, soulève et remodèle des seins qui se sont affaissés en raison de l'âge, de la grossesse, de l'allaitement ou d'une variation de poids, en retirant l'excès de peau et en repositionnant plus haut sur la poitrine le tissu mammaire restant et le complexe aréolo-mamelonnaire. Selon le degré d'affaissement, le chirurgien peut utiliser une incision plus courte autour de l'aréole ou une incision plus longue en forme d'ancre s'étendant jusqu'au pli mammaire et le long de celui-ci. Contrairement à l'augmentation, un lifting n'ajoute pas de volume, de sorte que les patientes souhaitant à la fois un profil mammaire plus plein et plus haut peuvent combiner la mastopexie avec des implants lors de la même opération. La procédure est réalisée sous anesthésie générale et dure généralement deux à trois heures. Les bonnes candidates sont des patientes présentant un tissu mammaire affaissé et une élasticité cutanée adéquate, avec un poids raisonnablement stable, car une grossesse future ou une variation de poids importante peut affecter les résultats. La récupération comprend gonflement et mouvement du bras restreint pendant une à deux semaines, la plupart des patientes reprenant une activité non contraignante dans ce délai et un exercice complet après quatre à six semaines. Les patientes venant en Inde pour un lifting mammaire prévoient généralement un séjour d'environ deux semaines pour couvrir la chirurgie et la visite de suivi pour le contrôle des incisions.",
			},
			{
				name: 'Liposuccion',
				description:
					"La liposuccion est une intervention chirurgicale de remodelage corporel qui retire des amas localisés de graisse n'ayant pas répondu au régime alimentaire et à l'exercice, dans des zones telles que l'abdomen, les flancs, les cuisses, les bras ou le menton. Par de petites incisions, le chirurgien insère une fine canule reliée à un dispositif d'aspiration et la déplace à travers la couche de graisse pour fragmenter et retirer les cellules adipeuses, des techniques telles que la liposuccion tumescente, assistée par ultrasons ou assistée par laser étant utilisées pour faciliter le retrait de la graisse et favoriser la rétraction cutanée. La procédure est réalisée sous anesthésie générale ou locale avec sédation, selon la zone et l'étendue du traitement, et dure généralement une à trois heures. Les bons candidats sont des personnes proches de leur poids cible, avec une bonne élasticité cutanée et des attentes réalistes, la liposuccion étant une procédure de remodelage plutôt qu'un traitement de perte de poids. La récupération comprend gonflement, ecchymoses et port d'un vêtement de compression pendant plusieurs semaines, la plupart des patients reprenant une activité légère en une semaine et le contour définitif étant visible sur trois à six mois à mesure que le gonflement se résorbe. Les patients venant en Inde pour une liposuccion prévoient généralement un séjour d'environ dix jours pour permettre l'ajustement du vêtement de compression, un suivi précoce et la surveillance de la cicatrisation initiale.",
			},
			{
				name: 'Abdominoplastie (plastie abdominale)',
				description:
					"L'abdominoplastie, ou chirurgie de plastie abdominale, retire l'excès de peau et de graisse de l'abdomen et raffermit les muscles abdominaux sous-jacents, qui peuvent s'étirer ou se séparer (diastasis des grands droits) après une grossesse ou une perte de poids importante. Par une incision horizontale basse sur l'abdomen, le chirurgien répare la couche musculaire avec des sutures internes, retire l'excès de tissu et repositionne le nombril avant de refermer l'incision, combinant parfois la procédure avec une liposuccion pour un remodelage supplémentaire. Elle est réalisée sous anesthésie générale et dure généralement deux à quatre heures. Les candidats sont généralement à un poids stable et sain, avec une peau abdominale relâchée ou une séparation musculaire ne s'étant pas améliorée avec l'exercice, et qui ne prévoient pas de futures grossesses, car une grossesse ultérieure peut annuler la réparation musculaire. La récupération comprend plusieurs semaines d'activité restreinte, avec un vêtement de compression porté pour soutenir la cicatrisation, des drains généralement retirés dans la première semaine, et la plupart des patients reprenant une activité normale et non contraignante en quatre à six semaines. La récupération après une réparation musculaire abdominale étant plus longue que pour de nombreuses autres procédures de remodelage corporel, les patients venant en Inde pour une plastie abdominale prévoient généralement un séjour de deux à trois semaines pour permettre le retrait des drains et la surveillance de la cicatrisation avant de reprendre l'avion.",
			},
			{
				name: 'Lifting brésilien des fessiers',
				description:
					"Un lifting brésilien des fessiers (BBL) utilise la propre graisse de la patiente, prélevée par liposuccion dans des zones telles que l'abdomen, les flancs ou les cuisses, pour ajouter du volume et de la forme aux fessiers. La graisse prélevée est traitée pour séparer les cellules adipeuses viables avant d'être soigneusement injectée en plusieurs petites quantités dans différentes couches des fessiers afin de créer un contour plus rond et plus plein, tandis que les zones donneuses bénéficient également du remodelage par liposuccion. La procédure est réalisée sous anesthésie générale et dure généralement deux à quatre heures selon la quantité de graisse prélevée et greffée. Les candidates sont des patientes disposant de suffisamment de graisse donneuse à prélever et souhaitant une forme de fessiers plus pleine sans implant. Les greffes de graisse nécessitant un apport sanguin stable pour survivre, il est généralement demandé aux patientes d'éviter de s'asseoir directement sur les fessiers pendant une période après l'intervention, en utilisant des coussins spéciaux ou en s'allongeant sur le ventre, et une partie de la graisse greffée est naturellement réabsorbée au cours des mois suivants. La récupération comprend le port de vêtements de compression pendant plusieurs semaines et l'évitement d'exercices intenses pendant environ six semaines. Les patientes venant en Inde pour un BBL prévoient généralement un séjour d'environ deux semaines pour permettre une cicatrisation précoce et un suivi avant le voyage retour.",
			},
			{
				name: 'Augmentation des fessiers',
				description:
					"L'augmentation des fessiers accroît la taille des fessiers et améliore leur contour à l'aide d'implants en silicone ou de greffe de graisse, choisis selon la graisse donneuse disponible, l'anatomie et le résultat souhaité de la patiente. Lorsque des implants sont utilisés, le chirurgien les place par une petite incision, généralement dans le pli fessier, en les positionnant à l'intérieur ou sous le muscle grand fessier pour un résultat stable et d'aspect naturel. Lorsque la greffe de graisse est préférée, la graisse est prélevée par liposuccion dans une autre zone et injectée dans les fessiers, ce qui a également l'avantage de remodeler la zone donneuse. L'augmentation par implants est réalisée sous anesthésie générale et dure généralement environ deux heures, tandis que les procédures de greffe de graisse durent plus longtemps selon le volume transféré. Les candidates aux implants sont généralement des patientes disposant de peu de graisse donneuse, tandis que celles disposant de suffisamment de graisse ailleurs peuvent préférer la greffe pour éviter un implant étranger. La récupération pour les deux approches nécessite d'éviter une pression directe sur les fessiers pendant plusieurs semaines, avec des coussins spécialisés ou des positions de sommeil modifiées recommandés, ainsi qu'un vêtement de compression et un retour progressif à l'exercice sur quatre à six semaines. Les patientes envisageant une augmentation des fessiers en Inde discutent généralement des options d'implants et de greffe de graisse avec leur chirurgien lors de la consultation pour déterminer la mieux adaptée à leur morphologie.",
			},
			{
				name: 'Lifting des bras',
				description:
					"Un lifting des bras, ou brachioplastie, retire l'excès de peau et de graisse du haut du bras et raffermit le tissu sous-jacent pour créer un contour plus lisse et plus tonique, traitant la peau relâchée et pendante qui peut se développer après une perte de poids importante ou avec l'âge. Le chirurgien pratique généralement une incision le long de la face interne ou arrière du bras, s'étendant du coude vers l'aisselle selon la quantité de peau à retirer, et peut combiner la procédure avec une liposuccion pour affiner davantage le contour. Elle est réalisée sous anesthésie générale et dure généralement environ deux heures. Les candidats sont des patients présentant une peau relâchée et pendante du haut du bras ne s'étant pas améliorée avec l'exercice, souvent après une perte de poids majeure, à un poids stable et en bonne santé générale. La récupération comprend le port d'un vêtement de compression pendant plusieurs semaines, avec gonflement et mouvement du bras restreint les une à deux premières semaines et un retour progressif à une activité normale sur quatre à six semaines. La cicatrice résultante s'étendant sur toute la longueur de la face interne du bras, les patients reçoivent des conseils sur les soins de la cicatrice pendant la récupération. Les patients venant en Inde pour un lifting des bras prévoient généralement un séjour d'environ deux semaines pour permettre le retrait des sutures et la surveillance des plaies.",
			},
			{
				name: 'Lifting des cuisses',
				description:
					"Un lifting des cuisses, ou plastie des cuisses, retire l'excès de peau et de graisse de la face interne ou externe de la cuisse et raffermit le tissu sous-jacent pour créer un contour plus lisse, le plus souvent pour des patients présentant une peau relâchée et pendante après une perte de poids importante. Selon la zone et l'ampleur de la correction nécessaire, le chirurgien peut utiliser une incision dans le pli de l'aine pour un lifting de la face interne, ou une incision s'étendant le long de la face externe de la cuisse pour un retrait de peau plus étendu, parfois combinée à une liposuccion. La procédure est réalisée sous anesthésie générale et dure généralement deux à trois heures. Les candidats sont des patients à poids stable présentant une peau des cuisses relâchée n'ayant pas répondu à l'exercice, et comprenant que la contrepartie d'une peau plus ferme est une cicatrice visible le long de la ligne d'incision. La récupération comprend le port d'un vêtement de compression, l'évitement d'une activité intense, et une limitation de la station debout ou de la marche prolongée les une à deux premières semaines, avec un retour progressif à une activité normale sur quatre à six semaines. Les incisions du lifting des cuisses se trouvant dans des zones de friction et de mouvement, des soins minutieux des plaies pendant la période de cicatrisation précoce sont importants. Les patients venant en Inde pour un lifting des cuisses prévoient généralement un séjour d'environ deux semaines pour permettre au chirurgien de surveiller la cicatrisation.",
			},
			{
				name: 'Labiaplastie',
				description:
					"La labiaplastie est une intervention chirurgicale qui réduit ou remodèle les petites lèvres (les replis internes de la vulve), et plus rarement les grandes lèvres, pour traiter une gêne ou un malaise liés à leur taille ou à leur asymétrie. À l'aide d'une technique de résection des bords, qui retire l'excès de tissu le long du bord, ou d'une technique en coin, qui retire une section en forme de V tout en préservant le bord naturel, le chirurgien remodèle le tissu et referme l'incision avec des sutures résorbables. La procédure est généralement réalisée sous anesthésie locale avec sédation ou sous anesthésie générale et dure environ une à deux heures. Les candidates incluent les patientes ressentant une gêne physique due à des petites lèvres hypertrophiées ou irrégulières, telle qu'une irritation ou une douleur pendant l'exercice, ainsi que celles recherchant un changement pour leur confort personnel. La récupération comprend gonflement et sensibilité pendant une à deux semaines, les patientes étant invitées à éviter l'exercice intense, les vêtements serrés et l'activité sexuelle pendant environ quatre à six semaines le temps que le tissu cicatrise complètement. La procédure étant sensible et la récupération bénéficiant d'un environnement calme et privé, les patientes venant en Inde pour une labiaplastie organisent souvent un séjour discret d'environ dix jours à deux semaines pour permettre un suivi avant le voyage retour.",
			},
			{
				name: 'Chirurgie de révision des cicatrices',
				description:
					"La chirurgie de révision des cicatrices regroupe plusieurs techniques chirurgicales utilisées pour améliorer l'apparence des cicatrices laissées par une blessure, des brûlures, de l'acné ou une chirurgie antérieure, car aucune méthode ne peut effacer complètement une cicatrice mais beaucoup peuvent la rendre plus plate, plus fine ou moins visible. Selon le type de cicatrice, les options incluent la révision de cicatrice, où l'ancienne cicatrice est retirée chirurgicalement et la plaie refermée avec une technique plus précise pour favoriser une cicatrisation plus fine ; la greffe de peau ou la chirurgie par lambeau pour de plus grandes zones cicatricielles ; et la plastie en Z ou en W, qui repositionne une cicatrice le long des lignes cutanées naturelles pour la rendre visuellement moins apparente. Les cas plus simples peuvent être pris en charge par injections de stéroïdes, resurfaçage au laser ou microneedling plutôt que par chirurgie. L'anesthésie utilisée dépend de la taille, de la profondeur et de la localisation de la cicatrice, allant de l'anesthésie locale pour une révision mineure à l'anesthésie générale pour une greffe. Les candidats sont des patients présentant des cicatrices causant une restriction fonctionnelle, telle qu'une tension limitant le mouvement, ou une préoccupation esthétique importante. La récupération varie de quelques jours pour des révisions mineures à plusieurs semaines pour des greffes, les résultats définitifs étant visibles sur plusieurs mois à mesure que la nouvelle cicatrice mûrit. Les patients venant en Inde pour une révision de cicatrice font généralement évaluer leur cicatrice lors de la consultation pour déterminer la technique la plus adaptée avant de programmer l'intervention.",
			},
		],
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
		detailedProcedures: [
			{
				name: 'Fécondation in vitro (FIV)',
				description:
					"La fécondation in vitro est un traitement de fertilité dans lequel des ovocytes sont prélevés dans les ovaires après une stimulation hormonale et combinés avec des spermatozoïdes dans une boîte de laboratoire pour obtenir une fécondation hors du corps. Les embryons obtenus sont cultivés pendant plusieurs jours, leur développement étant surveillé, puis un ou plusieurs sont transférés dans l'utérus, les éventuels embryons viables supplémentaires étant généralement congelés pour un usage futur. Le processus comprend un cycle initial de médicaments hormonaux injectables pour stimuler la maturation de plusieurs ovocytes, surveillé par des analyses sanguines et des échographies, suivi d'une petite intervention de ponction ovocytaire réalisée sous sédation, d'une fécondation en laboratoire, d'une culture embryonnaire et enfin d'un transfert d'embryon, qui ne nécessite pas d'anesthésie. La FIV est recommandée pour un large éventail de causes d'infertilité, notamment des trompes de Fallope obstruées ou endommagées, des troubles de l'ovulation, une infertilité masculine, une infertilité inexpliquée, ou après l'échec d'autres traitements tels que l'IIU. Un cycle complet, du début de la stimulation au transfert d'embryon, s'étend généralement sur deux à trois semaines, suivi d'un test de grossesse environ deux semaines après le transfert. Les patientes venant en Inde pour une FIV planifient généralement leur séjour autour de cette fenêtre stimulation-transfert, les cliniques coordonnant à l'avance le calendrier du cycle en fonction des résultats des examens initiaux de la patiente.",
			},
			{
				name: 'Injection intracytoplasmique de spermatozoïde (ICSI)',
				description:
					"L'injection intracytoplasmique de spermatozoïde, ou ICSI, est une technique de laboratoire spécialisée utilisée en complément de la FIV, dans laquelle un seul spermatozoïde est sélectionné et injecté directement au centre d'un ovocyte mature à l'aide d'une fine aiguille en verre, plutôt que de laisser la fécondation se produire naturellement dans une boîte. Cela permet de contourner les obstacles qui pourraient autrement empêcher le spermatozoïde de pénétrer seul dans l'ovocyte. L'ICSI suit le même processus de stimulation ovarienne et de ponction ovocytaire que la FIV conventionnelle, la différence intervenant au stade de la fécondation en laboratoire ; les embryons obtenus sont ensuite cultivés et transférés selon les mêmes protocoles. L'ICSI est principalement recommandée en cas d'infertilité masculine, notamment une faible numération spermatique, une mobilité spermatique insuffisante, une forme anormale des spermatozoïdes, ou lorsque les spermatozoïdes ont été prélevés chirurgicalement plutôt qu'éjaculés, ainsi qu'en cas d'échec de fécondation antérieur avec une FIV standard. Elle ne modifie pas le calendrier de stimulation, de ponction ou de transfert, de sorte que la durée globale du cycle est similaire à celle d'une FIV standard, généralement environ deux à trois semaines entre la stimulation et le transfert. La technique ne nécessitant aucune procédure supplémentaire côté patiente par rapport à une FIV standard, les patientes venant en Inde pour une ICSI suivent généralement la même structure de visite qu'un cycle de FIV, coordonnée autour de leurs dates de stimulation et de ponction.",
			},
			{
				name: 'Insémination intra-utérine (IIU)',
				description:
					"L'insémination intra-utérine est un traitement de fertilité dans lequel des spermatozoïdes spécialement lavés et concentrés sont déposés directement dans l'utérus au moment de l'ovulation, raccourcissant la distance que doivent parcourir les spermatozoïdes et augmentant la concentration de spermatozoïdes sains près de l'ovocyte. Le cycle peut être naturel ou soutenu par des médicaments oraux ou injectables pour favoriser la libération programmée d'un ou de quelques ovocytes, l'ovulation étant suivie par analyses sanguines et échographie pour identifier le jour optimal de l'insémination. La procédure elle-même est rapide et généralement indolore, impliquant un fin cathéter passé à travers le col de l'utérus, et ne nécessite ni anesthésie ni temps de récupération significatif, les patientes pouvant généralement reprendre une activité normale immédiatement après. L'IIU est souvent recommandée comme traitement de première intention pour une infertilité masculine légère, une infertilité inexpliquée, des irrégularités de l'ovulation, ou pour des femmes célibataires ou des couples de même sexe utilisant un don de spermatozoïdes, et elle est généralement tentée avant de passer à la FIV. Un seul cycle s'étend généralement sur environ deux semaines, du début de la surveillance à l'insémination, avec un test de grossesse environ deux semaines plus tard. La surveillance et l'insémination se déroulant dans une fenêtre assez courte, l'IIU est l'un des traitements de fertilité les plus efficaces en termes de temps à entreprendre lors d'un séjour en Inde.",
			},
			{
				name: 'Insémination intracervicale (IIC)',
				description:
					"L'insémination intracervicale est une forme plus simple d'insémination artificielle dans laquelle des spermatozoïdes, frais ou préalablement congelés, sont déposés directement à l'entrée du col de l'utérus à l'aide d'une seringue ou d'une cape cervicale spécialement conçue, plutôt que d'être traités et injectés dans l'utérus comme avec l'IIU. Les spermatozoïdes étant déposés à proximité mais à l'extérieur de l'utérus, ils n'ont pas besoin d'être lavés ou spécialement préparés au préalable, ce qui rend la procédure moins invasive et généralement moins coûteuse que les techniques utérines. La procédure peut être programmée selon un cycle d'ovulation naturel suivi à l'aide de tests prédictifs d'ovulation ou d'une surveillance échographique, et elle ne dure que quelques minutes, sans nécessiter d'anesthésie ni de récupération notable. L'IIC est souvent choisie par des individus ou des couples utilisant un don de spermatozoïdes, ceux présentant des préoccupations de fertilité légères, ou des patientes préférant l'option la moins invasive avant d'envisager l'IIU ou la FIV, bien que les taux de réussite par cycle soient généralement inférieurs à ceux des techniques intra-utérines puisque moins de spermatozoïdes atteignent l'utérus. Les patientes suivent généralement plusieurs cycles surveillés avant d'évaluer s'il faut poursuivre avec l'IIC ou passer à un traitement plus poussé. La procédure nécessitant peu de préparation, l'IIC peut souvent être organisée lors d'une visite courte et flexible dans une clinique de fertilité en Inde.",
			},
			{
				name: 'Insémination artificielle',
				description:
					"L'insémination artificielle est un terme général désignant les procédures de fertilité dans lesquelles des spermatozoïdes sont déposés dans l'appareil reproducteur d'une femme par des moyens autres que les rapports sexuels, le plus souvent par insémination intra-utérine (IIU), où des spermatozoïdes préparés sont injectés dans l'utérus, ou par insémination intracervicale (IIC), où les spermatozoïdes sont déposés au niveau du col. Les spermatozoïdes utilisés peuvent provenir d'un partenaire ou d'un donneur dépisté, et le cycle est généralement programmé pour coïncider avec l'ovulation, suivie par surveillance de la température basale, des tests d'ovulation ou une échographie clinique, avec ou sans médication stimulant l'ovulation selon les antécédents de la patiente. La procédure elle-même est brève, réalisée en clinique sans anesthésie, et entraîne un inconfort minime sans période de récupération notable, permettant aux patientes de reprendre immédiatement leurs activités normales. L'insémination artificielle est généralement recommandée pour des problèmes de fertilité légers, une infertilité inexpliquée, l'utilisation d'un don de spermatozoïdes par des patientes célibataires ou des couples de même sexe, ou comme première étape avant d'envisager des traitements plus poussés tels que la FIV. Chaque cycle reposant sur un minutage précis de l'ovulation, les patientes peuvent avoir besoin de plusieurs tentatives avant de concevoir. Sa nature relativement courte et peu invasive fait de l'insémination artificielle un traitement que les patientes internationales peuvent souvent accomplir en une seule visite courte dans une clinique de fertilité en Inde.",
			},
			{
				name: "FIV avec don d'ovocytes",
				description:
					"La FIV avec don d'ovocytes est une forme de fécondation in vitro qui utilise des ovocytes prélevés chez une donneuse dépistée plutôt que chez la future mère, fécondés en laboratoire avec des spermatozoïdes d'un partenaire ou d'un donneur avant que l'embryon obtenu ne soit transféré dans l'utérus de la receveuse. La donneuse suit le processus standard de stimulation hormonale et de ponction ovocytaire, tandis que la muqueuse utérine de la receveuse est préparée avec des médicaments hormonaux, synchronisés avec le cycle de la donneuse ou avec un ovocyte ou un embryon de donneuse congelé. Cette approche est recommandée pour les femmes présentant une réserve ovarienne diminuée, une insuffisance ovarienne prématurée, une qualité ovocytaire réduite liée à l'âge ou aux antécédents médicaux, des cycles de FIV précédents ayant échoué en raison de la qualité des ovocytes, ou des affections génétiques rendant déconseillée l'utilisation de leurs propres ovocytes. Les donneuses sont généralement dépistées pour leurs antécédents médicaux, les maladies infectieuses et les affections génétiques avant d'être associées ou sélectionnées dans un programme. La receveuse ne nécessitant pas de ponction ovocytaire, sa partie du processus est relativement courte, impliquant principalement la préparation de la muqueuse et le transfert d'embryon lui-même, qui ne nécessite pas d'anesthésie. Les patientes venant en Inde pour une FIV avec don d'ovocytes coordonnent généralement à l'avance avec la clinique l'appariement de la donneuse et la synchronisation du cycle avant de planifier le calendrier de leur visite autour du transfert d'embryon.",
			},
			{
				name: 'FIV avec TESA',
				description:
					"La FIV avec TESA combine la fécondation in vitro standard avec l'aspiration testiculaire de spermatozoïdes, une petite intervention utilisée pour prélever des spermatozoïdes directement dans le testicule lorsqu'aucun n'est présent dans l'éjaculat, une affection appelée azoospermie. Sous anesthésie locale, une fine aiguille est insérée dans le testicule pour prélever un petit échantillon de tissu ou de liquide contenant des spermatozoïdes, qui est ensuite examiné en laboratoire pour identifier des cellules spermatiques viables à utiliser pour la fécondation. Les spermatozoïdes ainsi prélevés étant souvent limités en nombre, ils sont généralement combinés à l'ICSI, où un seul spermatozoïde est injecté directement dans chaque ovocyte mature, plutôt qu'à une insémination conventionnelle en boîte. Du côté de la partenaire féminine, le processus suit le parcours habituel de la FIV : stimulation ovarienne, surveillance et ponction ovocytaire, programmé pour coïncider avec la TESA afin que des spermatozoïdes et des ovocytes frais soient disponibles simultanément, bien que les spermatozoïdes puissent également être congelés à l'avance. Cette approche est utilisée pour les hommes présentant une azoospermie obstructive ou non obstructive, lorsque la production de spermatozoïdes se poursuit dans le testicule malgré une voie absente ou bloquée vers l'éjaculation. Les patients venant en Inde pour une FIV avec TESA planifient généralement leur visite autour du calendrier combiné de la stimulation ovarienne et de l'intervention de prélèvement spermatique.",
			},
			{
				name: "Traitement de l'infertilité chez la femme",
				description:
					"Le traitement de l'infertilité chez la femme commence par un bilan diagnostique visant à identifier la cause sous-jacente, pouvant inclure des analyses sanguines du taux d'hormones, une échographie pour évaluer les ovaires et l'utérus, et une imagerie telle qu'une hystérosalpingographie pour vérifier la perméabilité des trompes de Fallope. Selon les constatations, le traitement peut aller de médicaments pour induire ou réguler l'ovulation, à la correction chirurgicale de problèmes structurels tels que fibromes, polypes ou endométriose, jusqu'aux techniques de procréation médicalement assistée telles que l'IIU ou la FIV lorsque d'autres approches échouent ou ne conviennent pas. Les causes courantes traitées incluent les troubles de l'ovulation tels que le syndrome des ovaires polykystiques, les trompes de Fallope obstruées ou endommagées, l'endométriose, les anomalies utérines et le déclin de la quantité ou de la qualité des ovocytes lié à l'âge, et le traitement est adapté au diagnostic spécifique plutôt que de suivre un protocole unique. De nombreux cas impliquent une approche progressive, commençant par l'option la moins invasive appropriée et progressant si nécessaire. Un bilan approfondi orientant le plan de traitement, les patientes venant en Inde pour un traitement de l'infertilité envoient généralement leurs résultats d'examens et rapports antérieurs avant leur visite afin que le spécialiste puisse esquisser un parcours de traitement probable et la durée de séjour attendue avant leur voyage.",
			},
			{
				name: "Traitement de l'infertilité chez l'homme",
				description:
					"Le traitement de l'infertilité chez l'homme commence par une analyse du sperme pour évaluer la numération, la mobilité et la morphologie des spermatozoïdes, ainsi que des analyses sanguines hormonales et, si nécessaire, un examen physique ou une échographie scrotale pour vérifier d'éventuels problèmes structurels tels qu'une varicocèle. Selon la cause identifiée, le traitement peut inclure des mesures d'hygiène de vie et une prise en charge médicale pour améliorer les paramètres spermatiques, des médicaments pour corriger des déséquilibres hormonaux, une réparation chirurgicale d'une varicocèle ou d'une obstruction des voies reproductrices, ou des techniques chirurgicales de prélèvement spermatique telles que la TESA ou la TESE pour les hommes produisant peu ou pas de spermatozoïdes dans l'éjaculat. Lorsque la conception naturelle reste peu probable, les spermatozoïdes prélevés ou éjaculés peuvent être utilisés avec l'IIU, la FIV ou l'ICSI selon la qualité et la quantité des spermatozoïdes. Les causes traitées vont d'une faible numération spermatique et d'une mobilité insuffisante à des obstructions structurelles, des troubles hormonaux et des facteurs génétiques affectant la production spermatique. Bon nombre de ces évaluations et petites interventions peuvent être réalisées relativement rapidement comparé au cycle de traitement de la partenaire féminine. Les patients venant en Inde pour une évaluation de l'infertilité masculine apportent généralement leurs résultats antérieurs d'analyse du sperme et de dosages hormonaux afin que le spécialiste puisse conseiller, avant la visite, sur les examens ou procédures supplémentaires probablement nécessaires.",
			},
			{
				name: "Traitement de l'azoospermie",
				description:
					"L'azoospermie est l'absence totale de spermatozoïdes dans l'éjaculat, et son traitement dépend de la cause, obstructive (les spermatozoïdes sont produits normalement mais ne peuvent atteindre l'éjaculat) ou non obstructive (la production spermatique elle-même est altérée). Le diagnostic implique des analyses sanguines hormonales, une analyse du sperme, une échographie scrotale et parfois un test génétique pour distinguer les deux types et identifier la cause sous-jacente, telle qu'une vasectomie antérieure, une absence congénitale des canaux déférents, une infection, ou un trouble hormonal ou testiculaire. Les cas obstructifs peuvent être traités par reconnexion chirurgicale ou contournement de l'obstruction, comme une inversion de vasectomie, ou par prélèvement direct de spermatozoïdes dans le testicule ou l'épididyme à l'aide de petites interventions telles que la TESA, la PESA ou la micro-TESE. Les cas non obstructifs sont d'abord pris en charge en corrigeant tout problème hormonal sous-jacent lorsque cela est possible, et si les spermatozoïdes restent absents de l'éjaculat, un prélèvement chirurgical peut tout de même localiser de petites zones de production spermatique dans le testicule pour une utilisation avec l'ICSI. Les spermatozoïdes prélevés, lorsqu'ils sont trouvés, sont généralement utilisés immédiatement ou congelés pour un cycle ultérieur de FIV/ICSI. Les patients venant en Inde pour un traitement de l'azoospermie subissent généralement des examens diagnostiques dès le début de leur visite pour déterminer l'approche de prélèvement appropriée avant de procéder.",
			},
			{
				name: 'Traitement du SOPK',
				description:
					"Le syndrome des ovaires polykystiques (SOPK) est un trouble hormonal pouvant provoquer une ovulation irrégulière ou absente, des taux élevés d'androgènes et de multiples petits follicules sur les ovaires, et constitue l'une des causes les plus courantes d'infertilité chez la femme. Le diagnostic repose sur une combinaison de symptômes, de dosages hormonaux sanguins et de résultats échographiques plutôt que sur un test unique. Le traitement est adapté selon que l'objectif immédiat est de réguler le cycle, de gérer des symptômes tels qu'une pilosité excessive ou de l'acné, ou d'obtenir une grossesse. Pour la fertilité, le traitement de première intention implique souvent des mesures d'hygiène de vie associées à des médicaments oraux pour induire l'ovulation, des médicaments hormonaux injectables ou un drilling ovarien laparoscopique étant envisagés si le traitement oral n'est pas efficace. Lorsque l'induction de l'ovulation seule ne conduit pas à une grossesse, le traitement peut évoluer vers l'IIU ou la FIV, en particulier si d'autres facteurs de fertilité sont également présents. Le SOPK variant considérablement en sévérité d'une personne à l'autre, le plan de traitement est ajusté en fonction d'une surveillance continue de l'ovulation et de la réponse hormonale. Les patientes venant en Inde pour un traitement de fertilité lié au SOPK partagent généralement leurs bilans hormonaux récents et leurs rapports échographiques à l'avance afin que le spécialiste puisse suggérer une première étape probable et la durée de surveillance que leur visite pourrait nécessiter.",
			},
			{
				name: "Traitement de l'endométriose",
				description:
					"L'endométriose est une affection dans laquelle un tissu similaire à la muqueuse utérine se développe en dehors de l'utérus, couramment sur les ovaires, les trompes de Fallope ou le péritoine pelvien, où il peut provoquer douleur, inflammation, cicatrices et problèmes de fertilité. Le diagnostic est généralement étayé par échographie ou IRM, bien que la chirurgie laparoscopique reste le moyen le plus définitif de confirmer et de stadifier l'étendue de la maladie. Le traitement dépend de la sévérité des symptômes et de la priorité accordée à la fertilité, allant de la gestion de la douleur et de médicaments hormonaux pour supprimer le tissu anormal, à la chirurgie laparoscopique pour retirer ou détruire les implants endométriaux, kystes et adhérences tout en préservant le tissu ovarien sain lorsque cela est possible. Pour les patientes essayant de concevoir, le traitement chirurgical peut améliorer les chances de conception naturelle en cas de maladie légère à modérée, tandis que les cas plus avancés ou ceux présentant une réserve ovarienne réduite peuvent être orientés directement vers la FIV, parfois en complément de la chirurgie. La chirurgie laparoscopique est réalisée sous anesthésie générale par de petites incisions et implique généralement un court séjour hospitalier avec une période de récupération d'une à deux semaines. Les patientes venant en Inde pour un traitement de l'endométriose combinent souvent imagerie diagnostique, chirurgie laparoscopique si nécessaire, et consultation de suivi en une seule visite planifiée.",
			},
			{
				name: 'Traitement des trompes de Fallope bouchées',
				description:
					"Des trompes de Fallope bouchées empêchent la rencontre de l'ovocyte et du spermatozoïde ou empêchent un ovocyte fécondé de rejoindre l'utérus, et constituent une cause structurelle courante d'infertilité, résultant souvent d'une infection pelvienne antérieure, d'une endométriose, d'une chirurgie ou de tissu cicatriciel. Le diagnostic est généralement établi par hystérosalpingographie, une procédure radiographique qui trace un colorant à travers l'utérus et les trompes, ou par laparoscopie avec test au colorant, qui permet une visualisation directe et le traitement de certaines obstructions lors de la même procédure. Le traitement dépend de la localisation et de l'étendue de l'obstruction : certaines obstructions tubaires proches de l'utérus peuvent être levées à l'aide d'une procédure mini-invasive faisant passer un petit cathéter à travers le col, tandis que les obstructions situées ailleurs dans la trompe, ou le tissu cicatriciel autour de celle-ci, peuvent être traités par chirurgie laparoscopique pour retirer les adhérences ou réparer la trompe. Lorsque les trompes sont trop endommagées pour être réparées, ou que la réparation a peu de chances de restaurer la fonction, la FIV est généralement recommandée puisqu'elle contourne entièrement les trompes. Les procédures laparoscopiques sont réalisées sous anesthésie générale avec un court séjour hospitalier et une à deux semaines de récupération. Les patientes venant en Inde pour un traitement d'obstruction tubaire subissent généralement une imagerie diagnostique dès le début de leur visite pour orienter le choix entre chirurgie tubaire et passage direct à la FIV.",
			},
			{
				name: 'Myomectomie laparoscopique',
				description:
					"La myomectomie laparoscopique est une intervention chirurgicale mini-invasive visant à retirer les fibromes utérins, des excroissances bénignes dans la paroi musculaire de l'utérus, tout en préservant l'utérus lui-même, ce qui en fait une option privilégiée pour les femmes souhaitant conserver leur fertilité ou éviter une hystérectomie. Par plusieurs petites incisions abdominales, le chirurgien utilise une caméra et des instruments spécialisés pour localiser, retirer et énucléer chaque fibrome, puis répare la couche musculaire utérine couche par couche pour maintenir la solidité de la paroi en vue d'une future grossesse. La procédure est réalisée sous anesthésie générale et peut durer une à plusieurs heures selon le nombre, la taille et la localisation des fibromes. Elle est généralement recommandée pour les femmes présentant des fibromes symptomatiques provoquant des saignements abondants, des douleurs, des symptômes de pression ou des problèmes de fertilité, lorsque la localisation et la taille du fibrome rendent une approche laparoscopique réalisable. La récupération après une chirurgie laparoscopique est généralement plus rapide qu'après une chirurgie ouverte, avec un séjour hospitalier d'un à deux jours et un retour à une activité normale en deux à trois semaines, bien qu'il soit généralement conseillé de retarder une grossesse de plusieurs mois pour permettre à la réparation utérine de cicatriser. Les patientes venant en Inde pour une myomectomie laparoscopique prévoient généralement un séjour d'environ deux semaines pour couvrir la chirurgie et la récupération précoce.",
			},
			{
				name: 'Hystérectomie laparoscopique',
				description:
					"L'hystérectomie laparoscopique est une intervention chirurgicale mini-invasive visant à retirer l'utérus à l'aide d'une caméra et d'instruments spécialisés insérés par plusieurs petites incisions abdominales, plutôt que par la seule incision plus large utilisée en chirurgie ouverte. Selon l'état de la patiente, le chirurgien peut réaliser une hystérectomie totale, retirant l'utérus et le col, ou une procédure subtotale préservant le col, les ovaires pouvant ou non être retirés en même temps selon le diagnostic et l'âge de la patiente. La procédure est réalisée sous anesthésie générale et dure généralement une à trois heures. Elle est généralement recommandée pour des affections telles que des fibromes volumineux ou nombreux, l'adénomyose, des douleurs pelviennes chroniques, des saignements utérins anormaux ne répondant pas à d'autres traitements, ou certaines affections gynécologiques où la préservation de la fertilité n'est plus un objectif. Comparée à la chirurgie ouverte, l'approche laparoscopique implique généralement des cicatrices plus petites, moins de douleur postopératoire, un séjour hospitalier plus court d'un à deux jours, et un retour plus rapide à une activité normale, généralement en deux à quatre semaines. Les patientes venant en Inde pour une hystérectomie laparoscopique prévoient généralement un séjour d'environ deux semaines pour permettre à l'équipe chirurgicale de surveiller la récupération et de confirmer la cicatrisation avant un voyage international.",
			},
		],
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
		detailedProcedures: [
			{
				name: 'Greffe de foie',
				description:
					"Une greffe de foie remplace un foie malade ou défaillant par un foie sain, réalisée chez des patients atteints d'une maladie hépatique en phase terminale, de cirrhose, de certains cancers du foie dans des limites de taille et de nombre définies, ou d'insuffisance hépatique aiguë. Le foie de remplacement peut provenir d'un donneur décédé ou, plus fréquemment en Inde, d'un donneur vivant qui fait don d'une partie de son propre foie, lequel régénère jusqu'à une taille quasi complète chez le donneur comme chez le receveur en quelques mois. Pendant l'opération, le foie malade est retiré et le foie ou segment hépatique du donneur est connecté aux vaisseaux sanguins et au canal biliaire du receveur, une procédure complexe qui dure généralement huit à douze heures et nécessite une équipe chirurgicale de transplantation expérimentée. Les receveurs passent du temps en soins intensifs immédiatement après l'opération, suivis d'une à deux semaines d'hospitalisation, et commencent un traitement immunosuppresseur à vie pour prévenir le rejet de l'organe. Les centres de transplantation indiens ont une vaste expérience de la greffe de foie à partir de donneur vivant, avec une évaluation approfondie du donneur pour confirmer sa sécurité. Les patients internationaux ont généralement besoin d'un donneur vivant potentiel les accompagnant et doivent prévoir un séjour prolongé de plusieurs semaines pour terminer l'évaluation du donneur et du receveur, la chirurgie et la période critique de récupération précoce avant qu'un retour au pays ne soit jugé sûr.",
			},
			{
				name: 'Greffe de foie pédiatrique',
				description:
					"La greffe de foie pédiatrique est réalisée chez les nourrissons et les enfants présentant une insuffisance hépatique causée par des affections telles que l'atrésie des voies biliaires, des troubles métaboliques héréditaires ou une insuffisance hépatique aiguë, lorsque le foie ne peut plus soutenir la croissance et la santé de l'enfant. Les organes de donneurs décédés adaptés à la taille des jeunes enfants étant limités, la transplantation à partir de donneur vivant est particulièrement importante dans les cas pédiatriques, un parent ou un proche faisant souvent don d'un petit segment de son foie qui est façonné chirurgicalement et connecté pour correspondre aux vaisseaux sanguins et au canal biliaire plus petits de l'enfant. L'opération nécessite une équipe chirurgicale de transplantation pédiatrique expérimentée dans la précision technique qu'exige une petite anatomie, ainsi qu'un soutien en soins intensifs pédiatriques par la suite pour gérer l'équilibre hydrique, l'immunosuppression et le risque d'infection. Les enfants passent généralement une à deux semaines à l'hôpital après l'opération, avec une surveillance étroite de la fonction hépatique et une introduction progressive du traitement anti-rejet à vie. Les programmes de transplantation pédiatrique indiens ont l'expérience du traitement de jeunes enfants venus de l'étranger, coordonnant l'évaluation des donneurs pour les membres de la famille accompagnants en parallèle du bilan propre de l'enfant. Les familles doivent prévoir un séjour prolongé de plusieurs semaines pour couvrir l'évaluation du donneur et du receveur, la chirurgie et la période de récupération précoce pendant laquelle l'enfant est étroitement surveillé pour détecter d'éventuelles complications.",
			},
			{
				name: 'Greffe de rein',
				description:
					"Une greffe de rein est réalisée pour les patients atteints d'insuffisance rénale terminale dont les reins ne peuvent plus filtrer correctement les déchets du sang, offrant une alternative à la dialyse à long terme. Le rein du donneur, qui peut provenir d'un proche vivant ou d'un donneur vivant approuvé, ou dans certains cas d'un donneur décédé, est placé chirurgicalement dans le bas de l'abdomen du receveur et connecté aux vaisseaux sanguins voisins et à la vessie ; les propres reins non fonctionnels du patient sont généralement laissés en place. L'opération dure généralement trois à quatre heures sous anesthésie générale, et le rein transplanté commence souvent à produire de l'urine en quelques heures. Les receveurs nécessitent un traitement immunosuppresseur à vie pour prévenir le rejet et sont étroitement surveillés dans les premières semaines pour détecter des signes de rejet ou d'infection. Les donneurs vivants subissent une procédure distincte, généralement laparoscopique, pour retirer un rein, la plupart continuant à vivre en bonne santé avec leur rein restant. Les centres de transplantation indiens réalisent un important volume de greffes de rein à partir de donneur vivant, avec des tests de compatibilité rigoureux et une évaluation de la sécurité du donneur. Les patients internationaux ont généralement besoin d'un donneur accompagnant le cas échéant et doivent prévoir un séjour de plusieurs semaines pour permettre l'évaluation, la chirurgie et la surveillance de la fonction rénale précoce avant de rentrer chez eux.",
			},
			{
				name: 'Greffe de moelle osseuse',
				description:
					"Une greffe de moelle osseuse, également appelée greffe de cellules souches, remplace la moelle osseuse malade ou endommagée d'un patient par des cellules souches hématopoïétiques saines, utilisée pour traiter des affections telles que la leucémie, le lymphome, le myélome multiple, l'anémie aplasique et certains troubles sanguins héréditaires. Dans une greffe autologue, les propres cellules souches du patient sont collectées, stockées et réinjectées après une chimiothérapie à haute dose ; dans une greffe allogénique, les cellules souches proviennent d'un donneur compatible, souvent un frère ou une sœur ou un donneur non apparenté identifié par typage tissulaire. Avant la greffe, les patients suivent un traitement de conditionnement par chimiothérapie et parfois radiothérapie pour éliminer la moelle malade et supprimer le système immunitaire, après quoi les cellules souches sont perfusées par voie intraveineuse et migrent vers la moelle osseuse pour commencer à produire de nouvelles cellules sanguines au cours des deux à quatre semaines suivantes. Cette période nécessite un isolement dans une unité de transplantation spécialisée pour se protéger des infections pendant que la numération sanguine se rétablit. Les receveurs de greffe allogénique ont également besoin de médicaments pour prévenir la maladie du greffon contre l'hôte, où les cellules immunitaires du donneur réagissent contre les tissus du receveur. Les centres de transplantation indiens proposent des greffes de moelle osseuse autologues et allogéniques avec des installations d'isolement dédiées, et les patients internationaux prévoient généralement un séjour de six à huit semaines pour couvrir le conditionnement, la greffe et la récupération initiale.",
			},
			{
				name: 'Greffe cardiaque',
				description:
					"Une greffe cardiaque remplace un cœur sévèrement malade ou défaillant par un cœur de donneur sain, généralement envisagée pour les patients atteints d'insuffisance cardiaque avancée n'ayant pas répondu aux médicaments, aux dispositifs ou à d'autres traitements chirurgicaux. Un cœur de donneur adapté devant provenir d'un donneur décédé et être compatible en termes de groupe sanguin et de morphologie, les candidats sont inscrits sur une liste d'attente et font l'objet d'une évaluation approfondie pour confirmer leur aptitude à la chirurgie et à l'immunosuppression à long terme. Pendant l'opération, réalisée avec le patient sous circulation extracorporelle, le cœur malade est retiré et le cœur du donneur est connecté aux principaux vaisseaux sanguins, ce qui dure généralement quatre à six heures. Les receveurs passent du temps en soins intensifs immédiatement après et restent hospitalisés plusieurs semaines pendant que les médecins surveillent le rejet et l'infection et ajustent le traitement anti-rejet à vie. Des biopsies régulières du nouveau cœur sont réalisées dans les premiers mois pour vérifier l'absence de rejet. Les programmes de transplantation indiens gèrent l'ensemble du parcours, de l'évaluation aux soins post-transplantation, bien que les patients internationaux doivent savoir que la disponibilité des cœurs de donneurs et les délais d'attente varient selon les processus d'attribution locaux. Des séjours prolongés de plusieurs semaines à plusieurs mois sont généralement nécessaires pour couvrir la période d'attente, la chirurgie et la récupération.",
			},
			{
				name: 'Greffe cœur-poumon',
				description:
					"Une greffe combinée cœur-poumon remplace à la fois le cœur et les poumons en une seule opération et est réservée aux patients atteints d'une maladie sévère et avancée affectant les deux organes conjointement, telle que des cardiopathies congénitales complexes avec atteinte pulmonaire associée, ou une hypertension pulmonaire sévère ayant provoqué une insuffisance cardiaque irréversible. Nécessitant un ensemble compatible d'organes de donneur provenant d'un seul donneur décédé, il s'agit d'une procédure plus rare et plus complexe qu'une greffe mono-organe, avec des délais d'attente plus longs en raison de la disponibilité limitée des donneurs. L'opération est réalisée avec le patient sous circulation extracorporelle pendant que l'équipe chirurgicale retire le cœur et les poumons malades et connecte les organes du donneur aux voies respiratoires et aux principaux vaisseaux sanguins du receveur. La récupération implique un séjour prolongé en soins intensifs, une gestion minutieuse de la respiration et de la fonction pulmonaire, et une surveillance étroite du rejet de l'un ou l'autre organe, en plus d'un traitement immunosuppresseur à vie. La rééducation reconstruit progressivement la capacité pulmonaire et l'endurance physique sur plusieurs mois. Les centres de transplantation indiens dotés d'une capacité de transplantation thoracique combinée évaluent minutieusement les candidats avant inscription, et les patients internationaux doivent s'attendre à un processus long englobant évaluation, délai d'attente, chirurgie et une récupération prolongée de plusieurs mois avant qu'un retour au pays ne soit envisagé.",
			},
			{
				name: 'Greffe de poumon',
				description:
					"Une greffe de poumon remplace un ou les deux poumons malades par des poumons sains de donneur et est envisagée pour les patients atteints d'une maladie pulmonaire en phase terminale telle que la bronchopneumopathie chronique obstructive, la fibrose pulmonaire, la mucoviscidose ou une hypertension pulmonaire sévère, lorsque le traitement médical ne peut plus maintenir une fonction respiratoire adéquate. Selon l'affection, un seul poumon ou les deux peuvent être transplantés ; la procédure est réalisée sous anesthésie générale, souvent avec un support circulatoire tel qu'une circulation extracorporelle, pendant que l'équipe chirurgicale retire le tissu pulmonaire malade et connecte les voies respiratoires et les vaisseaux sanguins du poumon du donneur à ceux du receveur. L'opération dure généralement plusieurs heures par poumon, et les receveurs passent du temps sous ventilation assistée et en soins intensifs par la suite pendant que la fonction pulmonaire se stabilise. Un programme de réadaptation pulmonaire structuré suit au cours des mois suivants pour reconstruire la capacité respiratoire et l'endurance, en plus d'un traitement immunosuppresseur à vie et d'une surveillance régulière du rejet ou de l'infection. Les centres de transplantation indiens évaluent soigneusement l'éligibilité des candidats, y compris la sévérité de la maladie et l'aptitude générale à une chirurgie majeure. La disponibilité des poumons de donneur affectant les délais d'attente, les patients internationaux doivent prévoir un séjour prolongé et quelque peu variable couvrant l'évaluation, la période d'attente, la chirurgie et la réadaptation précoce avant un retour au pays.",
			},
		],
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
