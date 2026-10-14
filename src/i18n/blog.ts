/**
 * Blog UI strings and per-locale post translations. Post text is keyed by the
 * post slug from data/blog.ts; body arrays keep the same order/length as the
 * English body (a string starting with "## " renders as a subheading).
 */
export type BlogLocale = 'en' | 'fr' | 'es' | 'pt' | 'ro' | 'ru' | 'bn' | 'vi' | 'ar';

export interface BlogUi {
	metaTitle: string;
	metaDescription: string;
	badge: string;
	title: string;
	highlight: string;
	subtitle: string;
	breadcrumb: string;
	minRead: string; // "{n}" is replaced by the minutes
	allArticles: string;
	dateLocale: string;
}

export interface BlogPostTr {
	title: string;
	excerpt: string;
	category: string;
	body: string[];
}

export const blogUi: Record<BlogLocale, BlogUi> = {
	en: {
		metaTitle: 'Blog | Medical Travel Guides & Tips | AlisPro MediTours',
		metaDescription: 'Guides, checklists and tips for international patients planning treatment in India.',
		badge: 'Blog',
		title: 'Medical Travel',
		highlight: 'Guides & Tips',
		subtitle: 'Practical advice for patients planning treatment in India.',
		breadcrumb: 'Blog',
		minRead: '{n} min read',
		allArticles: '← All articles',
		dateLocale: 'en-GB',
	},
	fr: {
		metaTitle: 'Blog | Guides et conseils de tourisme médical | AlisPro MediTours',
		metaDescription: 'Guides, listes de contrôle et conseils pour les patients internationaux qui préparent un traitement en Inde.',
		badge: 'Blog',
		title: 'Tourisme médical :',
		highlight: 'guides et conseils',
		subtitle: 'Des conseils pratiques pour les patients qui préparent un traitement en Inde.',
		breadcrumb: 'Blog',
		minRead: '{n} min de lecture',
		allArticles: '← Tous les articles',
		dateLocale: 'fr-FR',
	},
	es: {
		metaTitle: 'Blog | Guías y consejos de turismo médico | AlisPro MediTours',
		metaDescription: 'Guías, listas de verificación y consejos para pacientes internacionales que planean un tratamiento en la India.',
		badge: 'Blog',
		title: 'Turismo médico:',
		highlight: 'guías y consejos',
		subtitle: 'Consejos prácticos para pacientes que planean un tratamiento en la India.',
		breadcrumb: 'Blog',
		minRead: '{n} min de lectura',
		allArticles: '← Todos los artículos',
		dateLocale: 'es-ES',
	},
	pt: {
		metaTitle: 'Blogue | Guias e dicas de turismo médico | AlisPro MediTours',
		metaDescription: 'Guias, listas de verificação e dicas para pacientes internacionais que planeiam um tratamento na Índia.',
		badge: 'Blogue',
		title: 'Turismo médico:',
		highlight: 'guias e dicas',
		subtitle: 'Conselhos práticos para pacientes que planeiam um tratamento na Índia.',
		breadcrumb: 'Blogue',
		minRead: '{n} min de leitura',
		allArticles: '← Todos os artigos',
		dateLocale: 'pt-PT',
	},
	ro: {
		metaTitle: 'Blog | Ghiduri și sfaturi de turism medical | AlisPro MediTours',
		metaDescription: 'Ghiduri, liste de verificare și sfaturi pentru pacienții internaționali care își planifică tratamentul în India.',
		badge: 'Blog',
		title: 'Turism medical:',
		highlight: 'ghiduri și sfaturi',
		subtitle: 'Sfaturi practice pentru pacienții care își planifică tratamentul în India.',
		breadcrumb: 'Blog',
		minRead: '{n} min de citit',
		allArticles: '← Toate articolele',
		dateLocale: 'ro-RO',
	},
	ru: {
		metaTitle: 'Блог | Руководства и советы по медицинскому туризму | AlisPro MediTours',
		metaDescription: 'Руководства, чек-листы и советы для иностранных пациентов, планирующих лечение в Индии.',
		badge: 'Блог',
		title: 'Медицинский туризм:',
		highlight: 'руководства и советы',
		subtitle: 'Практические советы для пациентов, планирующих лечение в Индии.',
		breadcrumb: 'Блог',
		minRead: '{n} мин чтения',
		allArticles: '← Все статьи',
		dateLocale: 'ru-RU',
	},
	bn: {
		metaTitle: 'ব্লগ | মেডিক্যাল ট্রাভেল গাইড ও পরামর্শ | AlisPro MediTours',
		metaDescription: 'ভারতে চিকিৎসার পরিকল্পনাকারী আন্তর্জাতিক রোগীদের জন্য গাইড, চেকলিস্ট ও পরামর্শ।',
		badge: 'ব্লগ',
		title: 'মেডিক্যাল ট্রাভেল',
		highlight: 'গাইড ও পরামর্শ',
		subtitle: 'ভারতে চিকিৎসার পরিকল্পনাকারী রোগীদের জন্য বাস্তব পরামর্শ।',
		breadcrumb: 'ব্লগ',
		minRead: '{n} মিনিটের পাঠ',
		allArticles: '← সব নিবন্ধ',
		dateLocale: 'bn-BD',
	},
	vi: {
		metaTitle: 'Blog | Hướng dẫn và mẹo du lịch chữa bệnh | AlisPro MediTours',
		metaDescription: 'Hướng dẫn, danh sách kiểm tra và mẹo dành cho bệnh nhân quốc tế đang lên kế hoạch điều trị tại Ấn Độ.',
		badge: 'Blog',
		title: 'Du lịch chữa bệnh:',
		highlight: 'hướng dẫn và mẹo',
		subtitle: 'Lời khuyên thiết thực cho bệnh nhân đang lên kế hoạch điều trị tại Ấn Độ.',
		breadcrumb: 'Blog',
		minRead: '{n} phút đọc',
		allArticles: '← Tất cả bài viết',
		dateLocale: 'vi-VN',
	},
	ar: {
		metaTitle: 'المدونة | أدلة ونصائح السياحة العلاجية | AlisPro MediTours',
		metaDescription: 'أدلة وقوائم مراجعة ونصائح للمرضى الدوليين الذين يخططون للعلاج في الهند.',
		badge: 'المدونة',
		title: 'السياحة العلاجية:',
		highlight: 'أدلة ونصائح',
		subtitle: 'نصائح عملية للمرضى الذين يخططون للعلاج في الهند.',
		breadcrumb: 'المدونة',
		minRead: 'قراءة {n} دقائق',
		allArticles: 'جميع المقالات ←',
		dateLocale: 'ar',
	},
};

const P1 = 'how-to-plan-medical-treatment-in-india';
const P2 = 'questions-to-ask-your-surgeon-before-joint-replacement';
const P3 = 'understanding-ivf-success-rates';
const P4 = 'what-to-expect-from-cataract-and-lasik-surgery';

export const blogPostTr: Record<Exclude<BlogLocale, 'en'>, Record<string, BlogPostTr>> = {
	fr: {
		[P1]: {
			title: 'Comment planifier un traitement médical en Inde : guide pas à pas',
			excerpt: 'Du partage de vos dossiers à la réservation de votre vol, voici à quoi ressemble le parcours d’un patient international.',
			category: 'Organisation',
			body: [
				'Voyager à l’étranger pour se faire soigner est plus simple lorsqu’on connaît la marche à suivre. La plupart des patients suivent le même parcours, de la première demande jusqu’à la convalescence.',
				'## 1. Partagez vos dossiers médicaux',
				'Envoyez vos derniers examens, imageries et un bref historique. Un coordinateur les transmet aux spécialistes concernés pour avis.',
				'## 2. Comparez les avis et les coûts',
				'Vous recevez un plan de traitement avec une estimation du coût et de la durée du séjour, afin de décider avant de vous engager à voyager.',
				'## 3. Organisez le voyage et l’hébergement',
				'Une fois votre accord donné, l’aide au visa, les vols, l’hébergement et l’accueil à l’aéroport peuvent être coordonnés pour vous.',
				'## 4. Traitement et suivi',
				'Après le traitement, votre équipe organise des consultations de suivi afin que votre rétablissement se poursuive sereinement à votre retour.',
			],
		},
		[P2]: {
			title: 'Questions à poser à votre chirurgien avant une prothèse articulaire',
			excerpt: 'Une courte liste pour comparer en confiance les chirurgiens, les implants et les programmes de rééducation.',
			category: 'Orthopédie',
			body: [
				'Une prothèse articulaire est une décision importante. Préparer vos questions à l’avance vous aide à obtenir des réponses claires.',
				'## À propos du chirurgien',
				'Demandez combien d’interventions similaires il réalise chaque année et quels résultats il obtient habituellement.',
				'## À propos de l’implant et de la technique',
				'Demandez quel implant sera utilisé, si une assistance robotique est disponible et quelle est la durée de vie attendue.',
				'## À propos de la convalescence',
				'Demandez combien de temps durera votre séjour, quand vous pourrez reprendre l’avion et quelle kinésithérapie sera nécessaire.',
			],
		},
		[P3]: {
			title: 'Comprendre les taux de réussite de la FIV avant de choisir une clinique',
			excerpt: 'Les taux de réussite peuvent être présentés de différentes manières. Voici comment les lire équitablement.',
			category: 'Fertilité',
			body: [
				'Les cliniques annoncent souvent un seul chiffre de réussite, mais il dépend de ce qui est mesuré.',
				'## Par cycle ou par transfert',
				'Un taux par transfert d’embryon est généralement plus élevé qu’un taux par cycle démarré. Demandez lequel est cité.',
				'## L’âge compte',
				'Les taux de réussite diminuent avec l’âge maternel : comparez les chiffres de votre tranche d’âge plutôt que la moyenne de la clinique.',
				'## Naissances vivantes, pas seulement grossesses',
				'Le chiffre le plus significatif est celui des naissances vivantes, et non des tests de grossesse positifs.',
			],
		},
		[P4]: {
			title: 'À quoi s’attendre d’une chirurgie de la cataracte et du LASIK',
			excerpt: 'Ce sont deux interventions rapides, en ambulatoire. Ce guide explique la différence et la convalescence.',
			category: 'Soins oculaires',
			body: [
				'La chirurgie de la cataracte remplace un cristallin opacifié, tandis que le LASIK remodèle la cornée pour réduire la dépendance aux lunettes.',
				'## Avant l’intervention',
				'Un bilan oculaire détaillé confirme si vous êtes un bon candidat pour l’une ou l’autre intervention.',
				'## Convalescence',
				'La plupart des patients reprennent une activité légère en un jour ou deux, avec des contrôles de suivi durant les premières semaines.',
			],
		},
	},
	es: {
		[P1]: {
			title: 'Cómo planificar un tratamiento médico en la India: guía paso a paso',
			excerpt: 'Desde compartir sus informes hasta reservar el vuelo, así es el recorrido de un paciente internacional.',
			category: 'Planificación',
			body: [
				'Viajar al extranjero para recibir tratamiento es más fácil cuando se conoce la secuencia. La mayoría de los pacientes sigue el mismo camino, desde la primera consulta hasta la recuperación.',
				'## 1. Comparta sus informes médicos',
				'Envíe informes recientes, pruebas de imagen y un breve historial. Un coordinador los remite a los especialistas adecuados para obtener su opinión.',
				'## 2. Compare opiniones y costes',
				'Recibirá un plan de tratamiento con un coste estimado y la duración de la estancia, para que pueda decidir antes de comprometerse a viajar.',
				'## 3. Organice el viaje y el alojamiento',
				'Una vez confirmado, se pueden coordinar por usted el apoyo con el visado, los vuelos, el alojamiento y la recogida en el aeropuerto.',
				'## 4. Tratamiento y seguimiento',
				'Tras el tratamiento, su equipo organiza consultas de seguimiento para que la recuperación continúe sin problemas cuando regrese a casa.',
			],
		},
		[P2]: {
			title: 'Preguntas para hacer a su cirujano antes de una prótesis articular',
			excerpt: 'Una breve lista para comparar con confianza cirujanos, implantes y planes de rehabilitación.',
			category: 'Ortopedia',
			body: [
				'La prótesis articular es una decisión importante. Preparar las preguntas con antelación ayuda a obtener respuestas claras.',
				'## Sobre el cirujano',
				'Pregunte cuántos procedimientos similares realiza al año y qué resultados obtiene habitualmente.',
				'## Sobre el implante y la técnica',
				'Pregunte qué implante se utilizará, si hay asistencia robótica disponible y cuál es la vida útil esperada.',
				'## Sobre la recuperación',
				'Pregunte cuánto tiempo permanecerá ingresado, cuándo podrá volar de regreso y qué fisioterapia necesitará.',
			],
		},
		[P3]: {
			title: 'Cómo entender las tasas de éxito de la FIV antes de elegir una clínica',
			excerpt: 'Las tasas de éxito pueden presentarse de distintas formas. Así se interpretan con criterio.',
			category: 'Fertilidad',
			body: [
				'Las clínicas suelen citar una única cifra de éxito, pero el número depende de lo que se esté midiendo.',
				'## Por ciclo o por transferencia',
				'La tasa por transferencia de embriones suele ser mayor que la tasa por ciclo iniciado. Pregunte cuál se está citando.',
				'## La edad importa',
				'Las tasas de éxito disminuyen con la edad materna, así que compare las cifras de su grupo de edad y no el promedio de la clínica.',
				'## Nacidos vivos, no solo embarazos',
				'La cifra más significativa son los nacidos vivos, no las pruebas de embarazo positivas.',
			],
		},
		[P4]: {
			title: 'Qué esperar de la cirugía de cataratas y del LASIK',
			excerpt: 'Ambas son intervenciones rápidas y ambulatorias. Esta guía explica la diferencia y la recuperación.',
			category: 'Cuidado ocular',
			body: [
				'La cirugía de cataratas sustituye un cristalino opaco, mientras que el LASIK remodela la córnea para reducir la dependencia de las gafas.',
				'## Antes del procedimiento',
				'Una evaluación ocular detallada confirma si es candidato adecuado para cualquiera de los dos procedimientos.',
				'## Recuperación',
				'La mayoría de los pacientes retoma la actividad ligera en uno o dos días, con revisiones de seguimiento durante las primeras semanas.',
			],
		},
	},
	pt: {
		[P1]: {
			title: 'Como planear um tratamento médico na Índia: guia passo a passo',
			excerpt: 'Desde o envio dos seus relatórios até à reserva do voo, eis como é o percurso de um paciente internacional.',
			category: 'Planeamento',
			body: [
				'Viajar para o estrangeiro para tratamento é mais fácil quando se conhece a sequência. A maioria dos pacientes segue o mesmo caminho, do primeiro contacto até à recuperação.',
				'## 1. Partilhe os seus relatórios médicos',
				'Envie relatórios recentes, exames de imagem e um breve historial. Um coordenador encaminha-os para os especialistas adequados para obter uma opinião.',
				'## 2. Compare opiniões e custos',
				'Recebe um plano de tratamento com uma estimativa de custo e duração da estadia, para poder decidir antes de se comprometer a viajar.',
				'## 3. Organize a viagem e o alojamento',
				'Depois de confirmar, o apoio com o visto, os voos, o alojamento e a receção no aeroporto podem ser coordenados por si.',
				'## 4. Tratamento e acompanhamento',
				'Após o tratamento, a sua equipa organiza consultas de acompanhamento para que a recuperação continue sem problemas quando regressar a casa.',
			],
		},
		[P2]: {
			title: 'Perguntas a fazer ao seu cirurgião antes de uma prótese articular',
			excerpt: 'Uma lista curta para comparar com confiança cirurgiões, implantes e planos de reabilitação.',
			category: 'Ortopedia',
			body: [
				'A prótese articular é uma decisão importante. Preparar as perguntas antecipadamente ajuda a obter respostas claras.',
				'## Sobre o cirurgião',
				'Pergunte quantos procedimentos semelhantes realiza por ano e que resultados costuma obter.',
				'## Sobre o implante e a técnica',
				'Pergunte qual o implante que será utilizado, se existe assistência robótica e qual é a durabilidade esperada.',
				'## Sobre a recuperação',
				'Pergunte quanto tempo ficará internado, quando poderá viajar de regresso e que fisioterapia será necessária.',
			],
		},
		[P3]: {
			title: 'Compreender as taxas de sucesso da FIV antes de escolher uma clínica',
			excerpt: 'As taxas de sucesso podem ser apresentadas de formas diferentes. Veja como interpretá-las com rigor.',
			category: 'Fertilidade',
			body: [
				'As clínicas costumam citar um único número de sucesso, mas esse valor depende do que está a ser medido.',
				'## Por ciclo ou por transferência',
				'A taxa por transferência de embriões é normalmente mais alta do que a taxa por ciclo iniciado. Pergunte qual está a ser citada.',
				'## A idade conta',
				'As taxas de sucesso diminuem com a idade materna, por isso compare os valores da sua faixa etária e não a média da clínica.',
				'## Nados-vivos, não apenas gravidezes',
				'O valor mais relevante é o de nados-vivos, e não o de testes de gravidez positivos.',
			],
		},
		[P4]: {
			title: 'O que esperar da cirurgia de catarata e do LASIK',
			excerpt: 'Ambos são procedimentos rápidos, em ambulatório. Este guia explica a diferença e a recuperação.',
			category: 'Saúde ocular',
			body: [
				'A cirurgia de catarata substitui um cristalino opaco, enquanto o LASIK remodela a córnea para reduzir a dependência dos óculos.',
				'## Antes do procedimento',
				'Uma avaliação ocular detalhada confirma se é candidato adequado a qualquer um dos procedimentos.',
				'## Recuperação',
				'A maioria dos pacientes retoma a atividade leve em um ou dois dias, com consultas de acompanhamento nas primeiras semanas.',
			],
		},
	},
	ro: {
		[P1]: {
			title: 'Cum să îți planifici tratamentul medical în India: ghid pas cu pas',
			excerpt: 'De la trimiterea rapoartelor medicale până la rezervarea zborului, iată cum arată parcursul unui pacient internațional.',
			category: 'Planificare',
			body: [
				'Călătoria în străinătate pentru tratament este mai simplă atunci când cunoști pașii. Majoritatea pacienților urmează același drum, de la prima solicitare până la recuperare.',
				'## 1. Trimite rapoartele medicale',
				'Trimite rapoarte recente, investigații imagistice și un scurt istoric. Un coordonator le transmite specialiștilor potriviți pentru un punct de vedere.',
				'## 2. Compară opiniile și costurile',
				'Primești un plan de tratament cu un cost estimat și durata șederii, astfel încât să poți decide înainte de a te angaja să călătorești.',
				'## 3. Organizează călătoria și cazarea',
				'După confirmare, sprijinul pentru viză, zborurile, cazarea și preluarea de la aeroport pot fi coordonate pentru tine.',
				'## 4. Tratament și monitorizare',
				'După tratament, echipa ta organizează consultații de control, astfel încât recuperarea să continue fără probleme după întoarcerea acasă.',
			],
		},
		[P2]: {
			title: 'Întrebări de pus chirurgului înainte de o proteză articulară',
			excerpt: 'O listă scurtă pentru a compara cu încredere chirurgii, implanturile și planurile de recuperare.',
			category: 'Ortopedie',
			body: [
				'Protezarea unei articulații este o decizie importantă. Pregătirea întrebărilor din timp te ajută să primești răspunsuri clare.',
				'## Despre chirurg',
				'Întreabă câte intervenții similare efectuează anual și ce rezultate obține de obicei.',
				'## Despre implant și tehnică',
				'Întreabă ce implant va fi folosit, dacă este disponibilă asistența robotică și care este durata de viață estimată.',
				'## Despre recuperare',
				'Întreabă cât timp vei rămâne internat, când poți zbura acasă și de ce fizioterapie vei avea nevoie.',
			],
		},
		[P3]: {
			title: 'Cum înțelegi ratele de succes ale FIV înainte de a alege o clinică',
			excerpt: 'Ratele de succes pot fi raportate în moduri diferite. Iată cum să le interpretezi corect.',
			category: 'Fertilitate',
			body: [
				'Clinicile citează adesea o singură cifră de succes, dar valoarea depinde de ceea ce se măsoară.',
				'## Pe ciclu sau pe transfer',
				'Rata pe transfer de embrion este de obicei mai mare decât rata pe ciclu început. Întreabă care dintre ele este citată.',
				'## Vârsta contează',
				'Ratele de succes scad odată cu vârsta mamei, așa că compară cifrele pentru grupa ta de vârstă, nu media clinicii.',
				'## Nașteri vii, nu doar sarcini',
				'Cea mai relevantă cifră este cea a nașterilor vii, nu a testelor de sarcină pozitive.',
			],
		},
		[P4]: {
			title: 'La ce să te aștepți de la operația de cataractă și de la LASIK',
			excerpt: 'Ambele sunt proceduri rapide, în regim de zi. Acest ghid explică diferența și recuperarea.',
			category: 'Îngrijirea ochilor',
			body: [
				'Operația de cataractă înlocuiește cristalinul opacifiat, în timp ce LASIK remodelează corneea pentru a reduce dependența de ochelari.',
				'## Înainte de procedură',
				'Un consult oftalmologic detaliat confirmă dacă ești un candidat potrivit pentru oricare dintre proceduri.',
				'## Recuperarea',
				'Majoritatea pacienților reiau activitățile ușoare în una-două zile, cu controale de monitorizare în primele săptămâni.',
			],
		},
	},
	ru: {
		[P1]: {
			title: 'Как спланировать лечение в Индии: пошаговое руководство',
			excerpt: 'От отправки медицинских документов до бронирования авиабилета — так выглядит путь иностранного пациента.',
			category: 'Планирование',
			body: [
				'Поехать за границу на лечение проще, если знать порядок действий. Большинство пациентов проходят один и тот же путь — от первого обращения до восстановления.',
				'## 1. Отправьте медицинские документы',
				'Пришлите свежие обследования, снимки и краткую историю болезни. Координатор передаст их подходящим специалистам для заключения.',
				'## 2. Сравните мнения и стоимость',
				'Вы получите план лечения с ориентировочной стоимостью и сроками пребывания, чтобы принять решение до поездки.',
				'## 3. Организуйте поездку и проживание',
				'После вашего согласия можно организовать визовую поддержку, авиабилеты, проживание и встречу в аэропорту.',
				'## 4. Лечение и наблюдение',
				'После лечения команда организует последующие консультации, чтобы восстановление продолжалось без осложнений и после возвращения домой.',
			],
		},
		[P2]: {
			title: 'Какие вопросы задать хирургу перед эндопротезированием сустава',
			excerpt: 'Краткий список, который поможет уверенно сравнить хирургов, импланты и программы реабилитации.',
			category: 'Ортопедия',
			body: [
				'Эндопротезирование сустава — серьёзное решение. Подготовленные заранее вопросы помогут получить чёткие ответы.',
				'## О хирурге',
				'Спросите, сколько подобных операций он выполняет в год и каких результатов обычно достигает.',
				'## Об импланте и методике',
				'Спросите, какой имплант будет использован, доступна ли роботизированная помощь и каков ожидаемый срок службы.',
				'## О восстановлении',
				'Спросите, сколько времени вы проведёте в стационаре, когда сможете лететь домой и какая физиотерапия потребуется.',
			],
		},
		[P3]: {
			title: 'Как понимать показатели успешности ЭКО перед выбором клиники',
			excerpt: 'Показатели успеха можно считать по-разному. Вот как читать их объективно.',
			category: 'Репродуктивное здоровье',
			body: [
				'Клиники часто называют одну цифру успеха, но она зависит от того, что именно измеряется.',
				'## На цикл или на перенос',
				'Показатель на перенос эмбриона обычно выше, чем на начатый цикл. Уточните, какой из них указан.',
				'## Возраст имеет значение',
				'Успешность снижается с возрастом матери, поэтому сравнивайте цифры для своей возрастной группы, а не среднее по клинике.',
				'## Живорождение, а не только беременность',
				'Самый показательный результат — число живорождений, а не положительных тестов на беременность.',
			],
		},
		[P4]: {
			title: 'Чего ожидать от операции по удалению катаракты и LASIK',
			excerpt: 'Обе процедуры быстрые и проводятся в режиме дневного стационара. В статье объясняются различия и восстановление.',
			category: 'Здоровье глаз',
			body: [
				'При операции по поводу катаракты помутневший хрусталик заменяют, а LASIK изменяет форму роговицы, чтобы снизить зависимость от очков.',
				'## Перед процедурой',
				'Подробное обследование глаз подтвердит, подходит ли вам та или иная процедура.',
				'## Восстановление',
				'Большинство пациентов возвращаются к лёгкой активности через день-два, а контрольные осмотры проходят в первые недели.',
			],
		},
	},
	bn: {
		[P1]: {
			title: 'ভারতে চিকিৎসার পরিকল্পনা কীভাবে করবেন: ধাপে ধাপে নির্দেশিকা',
			excerpt: 'রিপোর্ট পাঠানো থেকে ফ্লাইট বুকিং পর্যন্ত — একজন আন্তর্জাতিক রোগীর যাত্রা কেমন হয় তা জেনে নিন।',
			category: 'পরিকল্পনা',
			body: [
				'ধাপগুলো জানা থাকলে চিকিৎসার জন্য বিদেশ যাত্রা সহজ হয়। প্রথম অনুসন্ধান থেকে সুস্থ হওয়া পর্যন্ত বেশিরভাগ রোগী একই পথ অনুসরণ করেন।',
				'## ১. আপনার মেডিক্যাল রিপোর্ট পাঠান',
				'সাম্প্রতিক রিপোর্ট, স্ক্যান ও সংক্ষিপ্ত ইতিহাস পাঠান। একজন সমন্বয়কারী সেগুলো উপযুক্ত বিশেষজ্ঞদের কাছে মতামতের জন্য পাঠান।',
				'## ২. মতামত ও খরচ তুলনা করুন',
				'আপনি আনুমানিক খরচ ও থাকার মেয়াদসহ একটি চিকিৎসা পরিকল্পনা পাবেন, যাতে ভ্রমণে অঙ্গীকারবদ্ধ হওয়ার আগেই সিদ্ধান্ত নিতে পারেন।',
				'## ৩. ভ্রমণ ও থাকার ব্যবস্থা করুন',
				'আপনি নিশ্চিত করলে ভিসা সহায়তা, ফ্লাইট, থাকার ব্যবস্থা ও বিমানবন্দরে রিসিভ করার সব ব্যবস্থা সমন্বয় করা যায়।',
				'## ৪. চিকিৎসা ও ফলো-আপ',
				'চিকিৎসার পর আপনার দল ফলো-আপ পরামর্শের ব্যবস্থা করে, যাতে দেশে ফেরার পরও আপনার সুস্থতা মসৃণভাবে চলতে থাকে।',
			],
		},
		[P2]: {
			title: 'জয়েন্ট রিপ্লেসমেন্টের আগে সার্জনকে যেসব প্রশ্ন করবেন',
			excerpt: 'সার্জন, ইমপ্ল্যান্ট ও পুনর্বাসন পরিকল্পনা আত্মবিশ্বাসের সঙ্গে তুলনা করতে সহায়ক একটি সংক্ষিপ্ত চেকলিস্ট।',
			category: 'অর্থোপেডিক্স',
			body: [
				'জয়েন্ট রিপ্লেসমেন্ট একটি গুরুত্বপূর্ণ সিদ্ধান্ত। আগে থেকে প্রশ্ন তৈরি রাখলে স্পষ্ট উত্তর পেতে সুবিধা হয়।',
				'## সার্জন সম্পর্কে',
				'জিজ্ঞাসা করুন তিনি বছরে কতগুলো অনুরূপ অস্ত্রোপচার করেন এবং সাধারণত কী ফলাফল দেখেন।',
				'## ইমপ্ল্যান্ট ও কৌশল সম্পর্কে',
				'জিজ্ঞাসা করুন কোন ইমপ্ল্যান্ট ব্যবহার করা হবে, রোবটিক সহায়তা আছে কি না এবং প্রত্যাশিত স্থায়িত্ব কত।',
				'## সুস্থ হওয়া সম্পর্কে',
				'জিজ্ঞাসা করুন কতদিন হাসপাতালে থাকতে হবে, কবে বিমানে ফেরা যাবে এবং কী ধরনের ফিজিওথেরাপি লাগবে।',
			],
		},
		[P3]: {
			title: 'ক্লিনিক বেছে নেওয়ার আগে আইভিএফ সাফল্যের হার বোঝা',
			excerpt: 'সাফল্যের হার বিভিন্নভাবে উপস্থাপন করা হতে পারে। এখানে জানুন কীভাবে সেগুলো নিরপেক্ষভাবে পড়বেন।',
			category: 'ফার্টিলিটি',
			body: [
				'ক্লিনিকগুলো প্রায়ই একটি মাত্র সাফল্যের সংখ্যা উল্লেখ করে, কিন্তু সংখ্যাটি নির্ভর করে কী পরিমাপ করা হচ্ছে তার ওপর।',
				'## প্রতি চক্র বনাম প্রতি ট্রান্সফার',
				'প্রতি ভ্রূণ ট্রান্সফারের হার সাধারণত শুরু করা প্রতি চক্রের হারের চেয়ে বেশি হয়। কোনটি উল্লেখ করা হচ্ছে তা জিজ্ঞাসা করুন।',
				'## বয়স গুরুত্বপূর্ণ',
				'মায়ের বয়স বাড়লে সাফল্যের হার কমে, তাই ক্লিনিকের গড়ের বদলে আপনার বয়সভিত্তিক সংখ্যার সঙ্গে তুলনা করুন।',
				'## শুধু গর্ভধারণ নয়, জীবিত জন্ম',
				'সবচেয়ে অর্থবহ সংখ্যা হলো জীবিত জন্ম, শুধু পজিটিভ গর্ভধারণ পরীক্ষা নয়।',
			],
		},
		[P4]: {
			title: 'ছানি ও ল্যাসিক অস্ত্রোপচারে কী আশা করবেন',
			excerpt: 'দুটিই দ্রুত, ডে-কেয়ার পদ্ধতি। এই নির্দেশিকায় পার্থক্য ও সুস্থ হওয়ার সময় ব্যাখ্যা করা হয়েছে।',
			category: 'চক্ষুসেবা',
			body: [
				'ছানি অস্ত্রোপচারে ঘোলাটে লেন্স বদলানো হয়, আর ল্যাসিক কর্নিয়ার আকার বদলে চশমার ওপর নির্ভরতা কমায়।',
				'## পদ্ধতির আগে',
				'বিস্তারিত চোখ পরীক্ষার মাধ্যমে নিশ্চিত করা হয় আপনি কোনো একটি পদ্ধতির উপযুক্ত প্রার্থী কি না।',
				'## সুস্থ হওয়া',
				'বেশিরভাগ রোগী এক-দুই দিনের মধ্যে হালকা কাজকর্মে ফিরতে পারেন, প্রথম কয়েক সপ্তাহে ফলো-আপ পরীক্ষা থাকে।',
			],
		},
	},
	vi: {
		[P1]: {
			title: 'Cách lên kế hoạch điều trị y tế tại Ấn Độ: hướng dẫn từng bước',
			excerpt: 'Từ việc gửi hồ sơ bệnh án đến đặt vé máy bay, đây là hành trình của một bệnh nhân quốc tế.',
			category: 'Lập kế hoạch',
			body: [
				'Đi nước ngoài điều trị sẽ dễ dàng hơn khi bạn nắm rõ trình tự. Hầu hết bệnh nhân đều đi theo cùng một lộ trình, từ lần hỏi thăm đầu tiên đến khi hồi phục.',
				'## 1. Gửi hồ sơ y tế của bạn',
				'Gửi các kết quả xét nghiệm, chẩn đoán hình ảnh gần đây và tóm tắt bệnh sử. Điều phối viên sẽ chuyển đến các bác sĩ chuyên khoa phù hợp để xin ý kiến.',
				'## 2. So sánh ý kiến và chi phí',
				'Bạn sẽ nhận được phác đồ điều trị kèm chi phí dự kiến và thời gian lưu trú để quyết định trước khi cam kết đi.',
				'## 3. Sắp xếp chuyến đi và chỗ ở',
				'Sau khi bạn xác nhận, việc hỗ trợ thị thực, vé máy bay, chỗ ở và đón tại sân bay đều có thể được phối hợp giúp bạn.',
				'## 4. Điều trị và theo dõi',
				'Sau điều trị, đội ngũ của bạn sắp xếp các buổi tái khám để quá trình hồi phục tiếp tục thuận lợi sau khi bạn về nước.',
			],
		},
		[P2]: {
			title: 'Những câu hỏi nên hỏi bác sĩ phẫu thuật trước khi thay khớp',
			excerpt: 'Một danh sách ngắn giúp bạn tự tin so sánh bác sĩ, loại khớp và kế hoạch phục hồi chức năng.',
			category: 'Chấn thương chỉnh hình',
			body: [
				'Thay khớp là một quyết định lớn. Chuẩn bị sẵn câu hỏi giúp bạn nhận được những câu trả lời rõ ràng.',
				'## Về bác sĩ phẫu thuật',
				'Hỏi mỗi năm bác sĩ thực hiện bao nhiêu ca tương tự và thường đạt kết quả như thế nào.',
				'## Về khớp nhân tạo và kỹ thuật',
				'Hỏi sẽ dùng loại khớp nào, có hỗ trợ bằng robot hay không và tuổi thọ dự kiến là bao lâu.',
				'## Về quá trình hồi phục',
				'Hỏi bạn sẽ nằm viện bao lâu, khi nào có thể bay về và cần vật lý trị liệu gì.',
			],
		},
		[P3]: {
			title: 'Hiểu đúng tỷ lệ thành công IVF trước khi chọn phòng khám',
			excerpt: 'Tỷ lệ thành công có thể được báo cáo theo nhiều cách khác nhau. Đây là cách đọc chúng một cách công bằng.',
			category: 'Hiếm muộn',
			body: [
				'Các phòng khám thường đưa ra một con số thành công duy nhất, nhưng con số đó phụ thuộc vào việc đang đo cái gì.',
				'## Theo chu kỳ hay theo lần chuyển phôi',
				'Tỷ lệ theo mỗi lần chuyển phôi thường cao hơn tỷ lệ theo chu kỳ bắt đầu. Hãy hỏi con số nào đang được nêu.',
				'## Tuổi tác rất quan trọng',
				'Tỷ lệ thành công giảm theo tuổi của người mẹ, vì vậy hãy so sánh con số của nhóm tuổi bạn thay vì mức trung bình của phòng khám.',
				'## Trẻ sinh sống, không chỉ có thai',
				'Con số có ý nghĩa nhất là số trẻ sinh sống, chứ không phải số lần thử thai dương tính.',
			],
		},
		[P4]: {
			title: 'Những điều cần biết về phẫu thuật đục thủy tinh thể và LASIK',
			excerpt: 'Cả hai đều là thủ thuật nhanh, trong ngày. Hướng dẫn này giải thích sự khác biệt và quá trình hồi phục.',
			category: 'Chăm sóc mắt',
			body: [
				'Phẫu thuật đục thủy tinh thể thay thế thủy tinh thể bị đục, còn LASIK định hình lại giác mạc để giảm phụ thuộc vào kính.',
				'## Trước khi thực hiện',
				'Khám mắt chi tiết sẽ xác nhận bạn có phù hợp với một trong hai thủ thuật hay không.',
				'## Hồi phục',
				'Hầu hết bệnh nhân có thể sinh hoạt nhẹ nhàng trở lại sau một đến hai ngày, kèm các lần tái khám trong những tuần đầu.',
			],
		},
	},
	ar: {
		[P1]: {
			title: 'كيف تخطط لعلاجك الطبي في الهند: دليل خطوة بخطوة',
			excerpt: 'من مشاركة تقاريرك الطبية إلى حجز رحلتك، هكذا تبدو رحلة المريض الدولي.',
			category: 'التخطيط',
			body: [
				'يصبح السفر للعلاج في الخارج أسهل عندما تعرف التسلسل. يتبع معظم المرضى المسار نفسه، من الاستفسار الأول حتى التعافي.',
				'## 1. شارك تقاريرك الطبية',
				'أرسل أحدث التقارير والفحوصات وملخصًا للتاريخ المرضي. يحيلها المنسّق إلى الأخصائيين المناسبين لإبداء الرأي.',
				'## 2. قارن الآراء والتكاليف',
				'تتلقى خطة علاج مع تكلفة تقديرية ومدة إقامة، لتتمكن من اتخاذ القرار قبل الالتزام بالسفر.',
				'## 3. رتّب السفر والإقامة',
				'بعد تأكيدك، يمكن تنسيق المساعدة في التأشيرة والرحلات الجوية والإقامة والاستقبال في المطار نيابةً عنك.',
				'## 4. العلاج والمتابعة',
				'بعد العلاج، ينظّم فريقك استشارات المتابعة ليستمر تعافيك بسلاسة بعد عودتك إلى بلدك.',
			],
		},
		[P2]: {
			title: 'أسئلة تطرحها على جرّاحك قبل استبدال المفصل',
			excerpt: 'قائمة قصيرة تساعدك على مقارنة الجرّاحين والغرسات وخطط إعادة التأهيل بثقة.',
			category: 'جراحة العظام',
			body: [
				'استبدال المفصل قرار كبير. وإعداد الأسئلة مسبقًا يساعدك على الحصول على إجابات واضحة.',
				'## عن الجرّاح',
				'اسأل كم عملية مماثلة يجريها سنويًا وما النتائج التي يحققها عادةً.',
				'## عن الغرسة والتقنية',
				'اسأل عن نوع الغرسة المستخدمة، وهل تتوفر مساعدة روبوتية، وما العمر المتوقع للمفصل الجديد.',
				'## عن التعافي',
				'اسأل كم ستبقى في المستشفى، ومتى يمكنك السفر عائدًا، وما العلاج الطبيعي الذي ستحتاجه.',
			],
		},
		[P3]: {
			title: 'فهم معدلات نجاح أطفال الأنابيب قبل اختيار العيادة',
			excerpt: 'قد تُعرض معدلات النجاح بطرق مختلفة. إليك كيف تقرؤها بإنصاف.',
			category: 'الخصوبة',
			body: [
				'كثيرًا ما تذكر العيادات رقم نجاح واحدًا، لكن هذا الرقم يعتمد على ما يجري قياسه.',
				'## لكل دورة أم لكل نقل',
				'يكون المعدل لكل عملية نقل جنين عادةً أعلى من المعدل لكل دورة بدأت. اسأل أيهما يُذكر.',
				'## العمر مهم',
				'تنخفض معدلات النجاح مع تقدم عمر الأم، لذا قارن الأرقام الخاصة بفئتك العمرية بدلًا من متوسط العيادة.',
				'## المواليد الأحياء، وليس الحمل فقط',
				'الرقم الأكثر أهمية هو عدد المواليد الأحياء، وليس اختبارات الحمل الإيجابية.',
			],
		},
		[P4]: {
			title: 'ماذا تتوقع من جراحة المياه البيضاء والليزك',
			excerpt: 'كلاهما إجراء سريع يُجرى في اليوم نفسه. يشرح هذا الدليل الفرق ومدة التعافي.',
			category: 'العناية بالعيون',
			body: [
				'تستبدل جراحة المياه البيضاء العدسة المعتمة، بينما يعيد الليزك تشكيل القرنية لتقليل الاعتماد على النظارات.',
				'## قبل الإجراء',
				'يؤكد فحص العين المفصّل ما إذا كنت مرشحًا مناسبًا لأي من الإجراءين.',
				'## التعافي',
				'يستأنف معظم المرضى نشاطهم الخفيف خلال يوم أو يومين، مع فحوصات متابعة في الأسابيع الأولى.',
			],
		},
	},
};

export interface BlogCta {
	homeLabel: string;
	title: string;
	text: string;
	primaryLabel: string;
	secondaryLabel: string;
}

/** Localised page-bottom estimate banner and breadcrumb home label. */
export const blogCta: Record<BlogLocale, BlogCta> = {
	"en": {
		"homeLabel": "Home",
		"title": "Want an Exact Treatment Estimate?",
		"text": "Upload your medical reports and receive a personalized treatment plan with a transparent cost estimate from our specialists within 24 hours.",
		"primaryLabel": "Get Free Cost Estimate",
		"secondaryLabel": "Upload Medical Reports"
	},
	"fr": {
		"homeLabel": "Accueil",
		"title": "Vous voulez une estimation précise de votre traitement ?",
		"text": "Téléversez vos rapports médicaux et recevez un plan de traitement personnalisé avec une estimation de coût transparente de nos spécialistes sous 24 heures.",
		"primaryLabel": "Obtenir un devis gratuit",
		"secondaryLabel": "Téléverser des rapports médicaux"
	},
	"es": {
		"homeLabel": "Inicio",
		"title": "¿Quiere una estimación precisa de su tratamiento?",
		"text": "Suba sus informes médicos y reciba un plan de tratamiento personalizado con una estimación de costo transparente de nuestros especialistas en 24 horas.",
		"primaryLabel": "Obtener presupuesto gratuito",
		"secondaryLabel": "Subir informes médicos"
	},
	"pt": {
		"homeLabel": "Início",
		"title": "Quer uma estimativa exata do seu tratamento?",
		"text": "Envie os seus relatórios médicos e receba um plano de tratamento personalizado com uma estimativa de custo transparente dos nossos especialistas em 24 horas.",
		"primaryLabel": "Obter orçamento gratuito",
		"secondaryLabel": "Enviar relatórios médicos"
	},
	"ro": {
		"homeLabel": "Acasă",
		"title": "Doriți o estimare exactă a tratamentului dumneavoastră?",
		"text": "Încărcați rapoartele medicale și primiți un plan de tratament personalizat cu o estimare de cost transparentă de la specialiștii noștri în 24 de ore.",
		"primaryLabel": "Obțineți o ofertă gratuită",
		"secondaryLabel": "Încărcați rapoarte medicale"
	},
	"ru": {
		"homeLabel": "Главная",
		"title": "Хотите точную оценку стоимости лечения?",
		"text": "Загрузите свои медицинские документы и получите индивидуальный план лечения с прозрачной оценкой стоимости от наших специалистов в течение 24 часов.",
		"primaryLabel": "Получить бесплатную оценку",
		"secondaryLabel": "Загрузить медицинские документы"
	},
	"bn": {
		"homeLabel": "হোম",
		"title": "আপনার চিকিৎসার সঠিক খরচ জানতে চান?",
		"text": "আপনার মেডিকেল রিপোর্ট আপলোড করুন এবং ২৪ ঘণ্টার মধ্যে আমাদের বিশেষজ্ঞদের কাছ থেকে স্বচ্ছ খরচসহ ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা পান।",
		"primaryLabel": "বিনামূল্যে কোট নিন",
		"secondaryLabel": "মেডিকেল রিপোর্ট আপলোড করুন"
	},
	"vi": {
		"homeLabel": "Trang chủ",
		"title": "Bạn muốn có ước tính chính xác cho phương pháp điều trị của mình?",
		"text": "Tải lên hồ sơ y tế của bạn và nhận kế hoạch điều trị cá nhân hóa với ước tính chi phí minh bạch từ các chuyên gia của chúng tôi trong vòng 24 giờ.",
		"primaryLabel": "Nhận báo giá miễn phí",
		"secondaryLabel": "Tải lên hồ sơ y tế"
	},
	"ar": {
		"homeLabel": "الرئيسية",
		"title": "هل تريد تقديرًا دقيقًا لتكلفة علاجك؟",
		"text": "ارفع تقاريرك الطبية واحصل على خطة علاج مخصصة مع تقدير تكلفة شفاف من أخصائيينا خلال 24 ساعة.",
		"primaryLabel": "احصل على عرض سعر مجاني",
		"secondaryLabel": "ارفع التقارير الطبية"
	}
};
