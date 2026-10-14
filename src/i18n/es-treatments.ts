/**
 * Spanish translations for the deep treatment content in src/data/treatments.ts.
 *
 * Keyed by slug. Only translatable fields are included — numeric fields
 * (prices, durations, counts) live in the English source and are reused as-is.
 * AI-generated; recommend a native Spanish speaker with medical background
 * reviews this before it's relied on for clinical decisions.
 */

export interface FaqItemEs {
	question: string;
	answer: string;
}

export interface CostRowEs {
	country: string;
	waitTime: string;
	successRate: string;
}

export interface TreatmentDataEs {
	name: string;
	shortDescription: string;
	overview: string;
	procedures: string[];
	benefits: string[];
	flagshipProcedure: string;
	costComparison: CostRowEs[];
	inclusions: string[];
	exclusions: string[];
	faqs: FaqItemEs[];
}

export const esTreatments: Record<string, TreatmentDataEs> = {
	'cardiac-care': {
		name: 'Cardiología',
		shortDescription: 'Bypass, reparación de válvulas y angioplastia realizados por cirujanos formados en los centros cardíacos más importantes.',
		overview:
			'Los programas cardíacos de la India reúnen a cirujanos formados a nivel internacional con algunos de los mayores volúmenes quirúrgicos del mundo, dando a los pacientes acceso a procedimientos avanzados como el bypass sin bomba y la reparación mínimamente invasiva de válvulas — a una fracción del precio occidental, sin listas de espera.',
		procedures: ['Bypass cardíaco', 'Reemplazo de válvula', 'Angioplastia'],
		benefits: [
			'Cirujanos formados y certificados en EE. UU., Reino Unido y Europa',
			'Uno de los mayores volúmenes de cirugía cardíaca del mundo, lo que significa una experiencia práctica profunda',
			'UCI cardíaca dedicada y unidad de recuperación intermedia',
			'Sin listas de espera — la mayoría de las intervenciones se programan en pocos días tras la primera opinión',
		],
		flagshipProcedure: 'Cirugía de bypass coronario (CABG)',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: '95–97%' },
			{ country: 'Reino Unido', waitTime: '3–12 meses (NHS)', successRate: '95–97%' },
			{ country: 'Alemania', waitTime: '4–10 semanas', successRate: '94–96%' },
			{ country: 'Tailandia', waitTime: '2–4 semanas', successRate: '93–95%' },
			{ country: 'India', waitTime: '1–2 semanas', successRate: '96%+' },
		],
		inclusions: [
			'Evaluación cardíaca preoperatoria, ECG, ecocardiograma y análisis de angiografía',
			'Honorarios del cirujano para el procedimiento de bypass o válvula',
			'Tarifas de quirófano y anestesia',
			'Estancia en UCI cardíaca (3 días) y habitación individual de recuperación (6 días)',
			'Atención médica, monitoreo y fisioterapia durante la hospitalización',
			'Medicamentos cardíacos estándar y suministros durante la estancia',
			'Tarifas de laboratorio y radiología relacionadas con el procedimiento',
			'Resumen de alta y plan escrito de cuidados posoperatorios',
		],
		exclusions: [
			'Estancia previa a la internación para estabilizar al paciente antes de aprobar la intervención',
			'Estancia hospitalaria o en UCI más allá de la duración del paquete',
			'Intervenciones avanzadas como un segundo bypass o reparación de válvula fuera del alcance inicial',
			'Dispositivos implantables como marcapasos, si no se mencionan de antemano',
			'Medicamentos para llevar a casa más allá del kit estándar de alta',
			'Tratamiento de afecciones preexistentes no relacionadas, descubiertas en la evaluación',
			'Reintervención por complicaciones no relacionadas con el procedimiento inicial',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta la cirugía de bypass en la India?',
				answer:
					'Un paquete de bypass coronario (CABG) en la India comienza desde 8,000 USD, aproximadamente un 90% menos que los 120,000+ USD que se cobran habitualmente en EE. UU. El paquete cubre la evaluación preoperatoria, la intervención en sí, la estancia en UCI y habitación, la atención médica y los medicamentos estándar.',
			},
			{
				question: '¿Cuál es la tasa de éxito de la cirugía cardíaca en la India?',
				answer:
					'Los principales centros cardíacos de la India reportan tasas de éxito del 96% o más en cirugía de bypass y valvular, comparables a los mejores programas de EE. UU. y Europa, respaldadas por UCI cardíacas dedicadas y altos volúmenes quirúrgicos anuales.',
			},
			{
				question: '¿Cuánto tiempo debo permanecer en la India para una cirugía cardíaca?',
				answer:
					'La mayoría de los pacientes permanecen hospitalizados aproximadamente 9 días (3 en UCI, 6 en habitación de recuperación) y se recomienda permanecer en la India un total de aproximadamente 3 semanas, para que el equipo cardíaco pueda monitorear la recuperación antes del viaje de regreso.',
			},
			{
				question: '¿Necesito un chequeo médico completo antes de que se confirme la cirugía?',
				answer:
					'Sí. Sus informes (ECG, ecocardiograma, angiografía si está disponible) son revisados por nuestro comité cardíaco antes de finalizar el plan de tratamiento y la cotización, y se organiza una teleconsulta con el cirujano si es necesario.',
			},
			{
				question: '¿Está disponible el bypass mínimamente invasivo o sin bomba?',
				answer:
					'Sí, muchos de nuestros hospitales asociados ofrecen bypass sin bomba (corazón latiendo) y reparación de válvulas mínimamente invasiva, lo que puede reducir la estancia en UCI y el tiempo de recuperación, según su caso.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta sus informes cardíacos recientes a través de nuestro formulario de contacto o WhatsApp, y un coordinador organizará una evaluación especializada gratuita y una cotización transparente en 24 horas.',
			},
		],
	},

	orthopedics: {
		name: 'Ortopedia',
		shortDescription: 'Reemplazo articular y medicina deportiva con programas de recuperación acelerada.',
		overview:
			'Desde el reemplazo robótico de rodilla hasta la fusión espinal compleja, los centros ortopédicos de la India combinan tecnología de implantes moderna con programas estructurados de fisioterapia diseñados para ayudar a los pacientes a volver a ponerse de pie más rápido.',
		procedures: ['Reemplazo de rodilla', 'Reemplazo de cadera', 'Fusión espinal'],
		benefits: [
			'Reemplazo articular robótico y asistido por computadora disponible en centros de primer nivel',
			'Fisioterapia estructurada en el hospital desde el primer día',
			'Implantes de alta calidad, de origen internacional',
			'Estancia hospitalaria típica de 3–5 días para el reemplazo articular',
		],
		flagshipProcedure: 'Reemplazo total de rodilla',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–6 semanas', successRate: '96–98%' },
			{ country: 'Reino Unido', waitTime: '6–12 meses (NHS)', successRate: '96–98%' },
			{ country: 'Alemania', waitTime: '3–6 semanas', successRate: '95–97%' },
			{ country: 'Tailandia', waitTime: '2–3 semanas', successRate: '94–96%' },
			{ country: 'India', waitTime: '1–2 semanas', successRate: '97%+' },
		],
		inclusions: [
			'Evaluación ortopédica preoperatoria, incluidas radiografías y verificación de aptitud',
			'Honorarios del cirujano y anestesista para el reemplazo articular',
			'Tarifas de quirófano e implante (calidad estándar, si no se elige un nivel superior)',
			'1 día en UCI/recuperación más 4 días en habitación individual',
			'Sesiones estructuradas de fisioterapia en el hospital',
			'Laboratorio, radiología y medicamentos posoperatorios estándar durante la estancia',
			'Resumen de alta con programa de ejercicios en casa y plan de recuperación',
		],
		exclusions: [
			'Implantes premium o personalizados más allá del implante estándar',
			'Estancia hospitalaria más allá de la duración del paquete',
			'Cirugía bilateral (ambas rodillas), si no se cotiza por separado',
			'Sesiones de fisioterapia ambulatoria tras el alta',
			'Tratamiento de afecciones no relacionadas identificadas en el chequeo preoperatorio',
			'Cirugía de revisión por complicaciones no relacionadas con el procedimiento inicial',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta el reemplazo de rodilla en la India?',
				answer:
					'Un paquete de reemplazo total de rodilla en la India comienza desde 5,500 USD, aproximadamente un 85% menos que los precios habituales en EE. UU., e incluye los honorarios del cirujano, el implante, la estancia hospitalaria y la fisioterapia en el hospital.',
			},
			{
				question: '¿Está disponible el reemplazo robótico de rodilla?',
				answer:
					'Sí, varios de nuestros hospitales asociados ofrecen reemplazo articular robótico y asistido por computadora, lo que puede mejorar la alineación del implante y reducir el tiempo de recuperación para los pacientes elegibles.',
			},
			{
				question: '¿Cuál es la duración de la estancia hospitalaria y la recuperación?',
				answer:
					'La mayoría de los pacientes permanecen hospitalizados aproximadamente 5 días y se recomienda permanecer en la India 2–3 semanas, para que los fisioterapeutas puedan guiar la recuperación temprana antes de regresar a casa.',
			},
			{
				question: '¿Qué marcas de implantes se utilizan?',
				answer:
					'Nuestros hospitales asociados utilizan como estándar marcas de implantes certificadas internacionalmente, con opciones de implantes premium disponibles bajo solicitud y cotización separada.',
			},
			{
				question: '¿Se pueden reemplazar ambas rodillas en el mismo viaje?',
				answer:
					'Sí, el reemplazo bilateral simultáneo o por etapas de rodilla es posible para candidatos adecuados — su cirujano confirmará el mejor enfoque tras revisar las radiografías y el estado general de salud.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Envíe sus radiografías y un resumen de sus síntomas a través de nuestro formulario de contacto y recibirá una evaluación especializada y una cotización transparente en 24 horas.',
			},
		],
	},

	oncology: {
		name: 'Oncología',
		shortDescription: 'Atención oncológica multidisciplinaria que combina cirugía, quimioterapia y radioterapia dirigida.',
		overview:
			'El tratamiento del cáncer en la India lo brindan comités oncológicos que reúnen a cirujanos oncólogos, oncólogos médicos y especialistas en radioterapia para elaborar un plan de tratamiento coordinado — el mismo modelo multidisciplinario utilizado en los principales centros oncológicos occidentales.',
		procedures: ['Cirugía de tumor', 'Quimioterapia', 'Radioterapia'],
		benefits: [
			'Comités oncológicos multidisciplinarios para cada caso',
			'Acceso a radioterapia avanzada (IMRT, IGRT, opciones de terapia de protones en centros seleccionados)',
			'Atención integral, desde el diagnóstico hasta el seguimiento posterior al tratamiento',
			'Consejeros oncológicos dedicados que apoyan a pacientes y familias',
		],
		flagshipProcedure: 'Cirugía de resección tumoral',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: 'Varía según la etapa' },
			{ country: 'Reino Unido', waitTime: '2–6 meses (NHS)', successRate: 'Varía según la etapa' },
			{ country: 'Alemania', waitTime: '4–8 semanas', successRate: 'Varía según la etapa' },
			{ country: 'Tailandia', waitTime: '2–4 semanas', successRate: 'Varía según la etapa' },
			{ country: 'India', waitTime: '1–2 semanas', successRate: 'Varía según la etapa' },
		],
		inclusions: [
			'Revisión por el comité oncológico de los informes existentes de biopsia, imágenes y patología',
			'Honorarios del cirujano, anestesista y equipo oncológico para la intervención principal',
			'Tarifas de quirófano y UCI (2 días) más 6 días en habitación individual',
			'Atención médica y medicamentos estándar de quimioterapia/soporte durante la hospitalización',
			'Tarifas de laboratorio, radiología y patología relacionadas con el procedimiento principal',
			'Apoyo dedicado de un consejero oncológico para el paciente y la familia',
			'Resumen de alta con plan estructurado de quimioterapia/radioterapia posterior',
		],
		exclusions: [
			'Ciclos adicionales de quimioterapia o sesiones de radioterapia más allá del paquete inicial',
			'Pruebas de perfil genómico/molecular, a menos que se soliciten específicamente',
			'Estancia hospitalaria más allá de la duración del paquete',
			'Terapia dirigida o inmunoterapia, cotizadas por separado debido a costos variables',
			'Tratamiento de afecciones no relacionadas identificadas en la evaluación',
			'Reintervención por complicaciones no relacionadas con el procedimiento inicial',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta la cirugía oncológica en la India?',
				answer:
					'Un paquete de resección tumoral en la India comienza desde 6,000 USD, aproximadamente un 90% menos que una intervención comparable en EE. UU., cubriendo la revisión del comité oncológico, la intervención, la estancia en UCI/habitación y la atención de soporte inicial.',
			},
			{
				question: '¿Cómo se cotizan la quimioterapia y la radioterapia?',
				answer:
					'Los ciclos de quimioterapia y las sesiones de radioterapia (IMRT/IGRT) se cotizan por separado, según su protocolo específico, ya que los regímenes varían ampliamente según el tipo y la etapa del cáncer — el comité oncológico le proporcionará una estimación detallada tras revisar los informes.',
			},
			{
				question: '¿Un equipo de especialistas revisará mi caso, o solo un médico?',
				answer:
					'Cada caso pasa por un comité oncológico multidisciplinario — cirujano oncólogo, oncólogo médico y radioterapeuta — antes de que se finalice el plan de tratamiento, el mismo modelo utilizado en los principales centros oncológicos occidentales.',
			},
			{
				question: '¿Cuánto tiempo tendré que permanecer en la India?',
				answer:
					'Los pacientes intervenidos quirúrgicamente suelen permanecer hospitalizados 8 días, con una estancia total recomendada de aproximadamente 4 semanas en la India si la intervención es seguida de quimioterapia o radioterapia.',
			},
			{
				question: '¿Puedo obtener una segunda opinión antes de comprometerme con la cirugía?',
				answer:
					'Sí. Envíe sus informes de biopsia, imágenes y patología para una revisión gratuita del comité oncológico y una segunda opinión, antes de decidir si viajar para el tratamiento.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta sus informes de diagnóstico a través de nuestro formulario de contacto o WhatsApp, y nuestro coordinador oncológico organizará una revisión del comité y una estimación transparente en 48 horas.',
			},
		],
	},

	'cosmetic-surgery': {
		name: 'Cirugía estética y plástica',
		shortDescription: 'Procedimientos estéticos y reconstructivos realizados por cirujanos certificados internacionalmente.',
		overview:
			'Combinando cirujanos certificados con una atención posoperatoria enfocada en la recuperación, tipo hotel, la India se ha convertido en un destino preferido para procedimientos estéticos y reconstructivos — con la privacidad y discreción que esperan los pacientes internacionales.',
		procedures: ['Rinoplastia', 'Liposucción', 'Trasplante de cabello'],
		benefits: [
			'Cirujanos plásticos y reconstructivos certificados',
			'Suites privadas y discretas de recuperación, separadas de las salas generales del hospital',
			'Técnicas modernas, incluidos trasplante de cabello FUE y liposucción VASER',
			'Consulta completa antes/después con imágenes 3D en clínicas seleccionadas',
		],
		flagshipProcedure: 'Rinoplastia',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '2–4 semanas', successRate: 'Alta satisfacción del paciente' },
			{ country: 'Reino Unido', waitTime: '3–6 semanas', successRate: 'Alta satisfacción del paciente' },
			{ country: 'Alemania', waitTime: '2–4 semanas', successRate: 'Alta satisfacción del paciente' },
			{ country: 'Tailandia', waitTime: '1–2 semanas', successRate: 'Alta satisfacción del paciente' },
			{ country: 'India', waitTime: '3–7 días', successRate: 'Alta satisfacción del paciente' },
		],
		inclusions: [
			'Consulta con imágenes 3D y planificación preoperatoria',
			'Honorarios del cirujano para el procedimiento',
			'Tarifas de quirófano y anestesia',
			'Una noche en una suite privada de recuperación',
			'Vendajes posoperatorios, prendas de compresión y primera visita de seguimiento',
			'Medicamentos estándar durante la estancia de recuperación',
		],
		exclusions: [
			'Procedimientos combinados (p. ej., rinoplastia y aumento de mentón), si no se cotizan juntos',
			'Estancia de recuperación más allá de una noche, o cuidados posoperatorios prolongados tipo hotel',
			'Cirugía de revisión para retoques estéticos después del período inicial de curación',
			'Medicamentos para llevar a casa más allá del kit estándar de alta',
			'Prendas o productos para el cuidado de cicatrices más allá de los proporcionados al alta',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta la rinoplastia en la India?',
				answer:
					'La rinoplastia en la India comienza desde 2,000 USD, aproximadamente un 75–85% menos que en EE. UU. o el Reino Unido, e incluye la consulta, la intervención, la anestesia y una noche de recuperación privada.',
			},
			{
				question: '¿Los cirujanos están formados a nivel internacional?',
				answer:
					'Sí, nuestros cirujanos estéticos asociados están certificados y muchos han realizado formación adicional o pasantías especializadas en EE. UU., Reino Unido o Europa en cirugía estética y reconstructiva.',
			},
			{
				question: '¿Cuánta privacidad y discreción se ofrece?',
				answer:
					'Los pacientes se recuperan en suites privadas, separadas de las salas generales del hospital, y todas las consultas y registros se gestionan con estricta confidencialidad.',
			},
			{
				question: '¿Cuánto tiempo debería planear permanecer en la India?',
				answer:
					'La mayoría de los procedimientos estéticos requieren aproximadamente 1–2 semanas en la India para la intervención y el seguimiento inicial, aunque esto varía según el procedimiento — su cirujano confirmará el cronograma exacto durante la consulta.',
			},
			{
				question: '¿Puedo combinar varios procedimientos en un solo viaje?',
				answer:
					'Sí, muchos pacientes combinan procedimientos como rinoplastia con liposucción en un solo viaje; su cirujano le aconsejará qué se puede hacer de forma segura en conjunto, según su estado de salud y necesidades de recuperación.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta sus objetivos y fotos a través de nuestro formulario de contacto, y nuestro equipo organizará una consulta privada con imágenes 3D y una cotización transparente en 24 horas.',
			},
		],
	},

	fertility: {
		name: 'Tratamiento de fertilidad',
		shortDescription: 'FIV y atención reproductiva con altas tasas de éxito y protocolos personalizados.',
		overview:
			'Las clínicas de fertilidad de la India reportan tasas de éxito comparables a los principales centros de FIV del mundo, con protocolos hormonales personalizados, laboratorios de embriología propios y sin las listas de espera de varios meses habituales en Europa y América del Norte.',
		procedures: ['FIV', 'IIU', 'Congelación de óvulos'],
		benefits: [
			'Laboratorios de embriología y cribado genético propios',
			'Protocolos personalizados de estimulación hormonal',
			'Sin listas de espera de varios meses — los ciclos suelen comenzar en pocas semanas',
			'Paquetes agrupados que cubren medicamentos, monitoreo y el procedimiento en sí',
		],
		flagshipProcedure: 'Ciclo de FIV',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: '40–50% por ciclo' },
			{ country: 'Reino Unido', waitTime: '6–12 meses (NHS)', successRate: '35–45% por ciclo' },
			{ country: 'Alemania', waitTime: '4–8 semanas', successRate: '35–45% por ciclo' },
			{ country: 'Tailandia', waitTime: '2–4 semanas', successRate: '40–48% por ciclo' },
			{ country: 'India', waitTime: '1–2 semanas', successRate: '40–50% por ciclo' },
		],
		inclusions: [
			'Evaluación inicial de fertilidad, incluido análisis hormonal y ecográfico',
			'Visitas de monitoreo de la estimulación ovárica',
			'Procedimiento de recolección de óvulos y tarifas de anestesia',
			'Embriología, fecundación y cultivo embrionario propios',
			'Procedimiento de transferencia de un solo embrión',
			'Medicamentos estándar de fertilidad para el ciclo de estimulación',
		],
		exclusions: [
			'Óvulos donados, esperma donado o acuerdos de maternidad subrogada',
			'Prueba genética preimplantacional (PGT), a menos que se solicite específicamente',
			'Intentos adicionales de transferencia embrionaria más allá del primero, o ciclos de transferencia de embriones congelados',
			'Medicamentos más allá del protocolo de estimulación estándar',
			'Tratamiento de la infertilidad masculina, como ICSI/TESA, si no se cotiza por separado',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta el tratamiento de FIV en la India?',
				answer:
					'Un ciclo de FIV en la India comienza desde 3,000 USD, aproximadamente un 80% menos que en EE. UU., y cubre la evaluación, el monitoreo de la estimulación, la recolección de óvulos, la embriología y la transferencia de un solo embrión.',
			},
			{
				question: '¿Cuál es la tasa de éxito de la FIV en la India?',
				answer:
					'Las principales clínicas de fertilidad de la India reportan tasas de éxito por ciclo del 40–50%, comparables a las mejores clínicas de EE. UU. y Europa, con resultados que dependen de la edad y los factores de fertilidad subyacentes.',
			},
			{
				question: '¿Cuánto dura un ciclo de FIV?',
				answer:
					'Un ciclo completo, desde la estimulación hasta la transferencia, suele durar 2–3 semanas, por lo que la mayoría de los pacientes internacionales planean permanecer en la India aproximadamente 3 semanas para completar el monitoreo, la recolección y la transferencia.',
			},
			{
				question: '¿Ofrecen programas de óvulos donados o maternidad subrogada?',
				answer:
					'Estos acuerdos implican pasos legales y médicos adicionales y se cotizan por separado — contacte a nuestro coordinador de fertilidad para hablar sobre la elegibilidad y las regulaciones actuales.',
			},
			{
				question: '¿Puede iniciar el tratamiento sin viajar primero?',
				answer:
					'Sí, se puede realizar una teleconsulta inicial y una revisión de informes antes de viajar, para que su protocolo se planifique con anticipación y el viaje se sincronice con el ciclo de estimulación.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta su historial de fertilidad y cualquier informe de pruebas anterior a través de nuestro formulario de contacto, y un coordinador de fertilidad organizará una evaluación especializada y una estimación transparente en 24 horas.',
			},
		],
	},

	'organ-transplant': {
		name: 'Trasplante de órganos',
		shortDescription: 'Programas de trasplante de hígado y riñón con equipos dedicados de cuidados posoperatorios.',
		overview:
			'La India realiza uno de los mayores volúmenes del mundo de trasplantes de hígado y riñón de donante vivo, respaldados por UCI de trasplante dedicadas y programas de monitoreo posoperatorio a largo plazo para pacientes internacionales.',
		procedures: ['Trasplante de riñón', 'Trasplante de hígado', 'Trasplante de médula ósea'],
		benefits: [
			'Programas de trasplante de donante vivo de alto volumen',
			'UCI de trasplante dedicadas y salas de recuperación aisladas',
			'Planificación de inmunosupresión a largo plazo y atención de seguimiento',
			'Apoyo legal y ético para la evaluación del donante en todo momento',
		],
		flagshipProcedure: 'Trasplante de hígado de donante vivo',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: 'Años (lista de espera)', successRate: '88–92%' },
			{ country: 'Reino Unido', waitTime: '1–3 años', successRate: '88–91%' },
			{ country: 'Alemania', waitTime: '6–18 meses', successRate: '87–90%' },
			{ country: 'Tailandia', waitTime: 'Moderado', successRate: '85–88%' },
			{ country: 'India', waitTime: '2–4 semanas', successRate: '90%+' },
		],
		inclusions: [
			'Evaluación pretrasplante del receptor y un donante, de forma ambulatoria',
			'Alquiler de habitación: receptor — 21 días (5 días UCI + 16 días habitación individual); donante — 8 días (2 días UCI + 6 días habitación individual)',
			'Honorarios del cirujano para donante y receptor',
			'Honorarios del anestesista para donante y receptor',
			'Tarifas de quirófano para donante y receptor',
			'Tarifas de servicios de anestesia para donante y receptor',
			'Tarifas de servicios de laboratorio',
			'Tarifas de servicios de transfusión',
			'Tarifas de servicios de radiología',
			'Tarifas de servicios de fisioterapia',
			'Tarifas de servicios de farmacia, incluidos medicamentos y suministros médicos',
		],
		exclusions: [
			'Estancia hospitalaria previa a la operación para mejorar el estado del paciente, así como medicamentos/investigaciones tras el alta hospitalaria',
			'Evaluación de cualquier donante adicional',
			'Cualquier período de estancia hospitalaria o en UCI más allá de la duración del paquete',
			'Todas las investigaciones, medicamentos y suministros más allá de las tarifas límite',
			'Medicamentos costosos o de uso poco frecuente, como Zenapax, Simulect, Valcyte, Novoseven, Thymoglobulin, Ambisome, Caspofungin y Anidulafungin',
			'Tarifas por cualquier consulta o procedimiento con un especialista no relacionado con el trasplante',
			'Tarifas de radiología intervencionista, incluidos drenaje percutáneo, drenaje biliar transhepático percutáneo y angiografía',
			'Procedimientos cardiológicos (ecocardiograma, angiografía) y tarifas relacionadas con nefrología (diálisis, CRRT)',
			'Procedimientos endoscópicos como CPRE',
			'Reintervención',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta el trasplante de hígado en la India?',
				answer:
					'La intervención de trasplante de hígado en la India comienza desde 25,000 USD, aproximadamente un 60–70% menos que en EE. UU. o el Reino Unido. El paquete cubre la evaluación pretrasplante del receptor y un donante, la intervención para ambos, la estancia en UCI y hospital, las tarifas de quirófano, la atención médica, el laboratorio y los servicios de farmacia.',
			},
			{
				question: '¿Cuál es la tasa de éxito del trasplante de hígado en la India?',
				answer:
					'Los mejores centros de trasplante de hígado de la India reportan una tasa de éxito al año de más del 90%, comparable a los principales programas de EE. UU. y Europa. La tasa de supervivencia a cinco años es de aproximadamente el 75%, dependiendo de la enfermedad subyacente, el estado general de salud del paciente y la adherencia al seguimiento.',
			},
			{
				question: '¿Quién puede ser donante de hígado para trasplante en la India?',
				answer:
					'Para un trasplante de hígado de donante vivo, el donante debe ser un familiar de sangre cercano (padre, hermano/a, hijo o cónyuge), de entre 18–55 años, sano, con un tipo de sangre compatible y función hepática normal. La donación debe ser completamente voluntaria — cualquier transacción financiera entre donante y receptor es ilegal según la ley india. La evaluación completa del donante suele completarse en 2–3 días.',
			},
			{
				question: '¿Cuál es la duración de la estancia hospitalaria para el trasplante de hígado en la India?',
				answer:
					'El receptor permanece aproximadamente 21 días — 5 días en UCI y 16 días en habitación individual. El donante permanece aproximadamente 8 días — 2 días en UCI y 6 días en habitación individual. Tras el alta, se recomienda que el receptor permanezca en la India al menos 1 mes para un monitoreo cuidadoso, lo que hace que la estancia total en la India sea normalmente de aproximadamente 2 meses.',
			},
			{
				question: '¿Puede el hígado regenerarse después de la donación de un donante vivo?',
				answer:
					'Sí. El hígado es el único órgano sólido del cuerpo humano que puede regenerarse por completo. Después de donar una parte, el hígado restante del donante crece hasta aproximadamente el 80% de su tamaño original en pocas semanas y casi hasta su tamaño original en pocos meses. La parte trasplantada en el receptor también crece hasta su tamaño completo.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Envíe los informes médicos del receptor y del posible donante a través de nuestro formulario de contacto o WhatsApp, y nuestro equipo de coordinación de trasplantes organizará una evaluación especializada gratuita y una teleconsulta con el cirujano de trasplantes antes del viaje.',
			},
		],
	},

	'dental-care': {
		name: 'Odontología',
		shortDescription: 'Implantes, carillas y restauración bucal completa, utilizando la odontología digital más reciente.',
		overview:
			'El diseño digital de la sonrisa, las coronas CAD/CAM en el mismo día y la rehabilitación completa con implantes son estándar en los principales centros odontológicos de la India — ofreciendo resultados en días, no en los meses habituales para el tratamiento por etapas en el extranjero.',
		procedures: ['Implantes dentales', 'Carillas', 'Restauración bucal completa'],
		benefits: [
			'Diseño digital de la sonrisa y coronas CAD/CAM en el mismo día',
			'Rehabilitación completa con implantes finalizada en un solo viaje',
			'Marcas de implantes de nivel internacional utilizadas en todos los casos',
			'Combine el tratamiento con una estancia de recuperación cerca de la clínica',
		],
		flagshipProcedure: 'Implantes dentales de boca completa',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '2–4 semanas', successRate: '95–97%' },
			{ country: 'Reino Unido', waitTime: '3–6 semanas', successRate: '95–97%' },
			{ country: 'Alemania', waitTime: '2–4 semanas', successRate: '94–96%' },
			{ country: 'Tailandia', waitTime: '1–2 semanas', successRate: '93–95%' },
			{ country: 'India', waitTime: '3–5 días', successRate: '95%+' },
		],
		inclusions: [
			'Consulta de diseño digital de la sonrisa y escaneo 3D',
			'Honorarios del odontólogo por la colocación del implante o restauración',
			'Fijación del implante y pilar de calidad estándar',
			'Fabricación de la corona CAD/CAM el mismo día, cuando corresponda',
			'Anestesia local y tarifas por el procedimiento estéril',
			'Una visita de seguimiento para verificar la cicatrización y el ajuste',
		],
		exclusions: [
			'Injerto óseo o elevación de seno, si no se identifican en el escaneo inicial',
			'Mejoras de implantes premium más allá de la fijación estándar',
			'Coronas, carillas o restauraciones adicionales más allá del plan de tratamiento acordado',
			'Tratamiento ortodóntico o alineación dental antes de la colocación del implante',
			'Visitas de seguimiento más allá de la incluida',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta un implante dental en la India?',
				answer:
					'Un solo implante dental en la India comienza desde 800 USD, aproximadamente un 80% menos que en EE. UU., e incluye la consulta, la colocación del implante y una corona CAD/CAM el mismo día, cuando corresponda.',
			},
			{
				question: '¿Se puede completar la restauración bucal completa en un solo viaje?',
				answer:
					'Sí, utilizando el diseño digital de la sonrisa y la tecnología de coronas en el mismo día, la mayoría de los casos de implantes de boca completa se pueden finalizar en un solo viaje de 7–10 días, en comparación con los meses que suele requerir el tratamiento por etapas en el extranjero.',
			},
			{
				question: '¿Qué marcas de implantes se utilizan?',
				answer:
					'Nuestros centros odontológicos asociados utilizan como estándar marcas de implantes certificadas internacionalmente, con mejoras a marcas premium disponibles bajo solicitud.',
			},
			{
				question: '¿Es doloroso el procedimiento?',
				answer:
					'La colocación del implante se realiza bajo anestesia local y suele ser bien tolerada, con la mayoría de los pacientes retomando su actividad normal en uno o dos días.',
			},
			{
				question: '¿Cuánto tiempo debería planear permanecer en la India?',
				answer:
					'La mayoría de los casos de implantes y restauración requieren aproximadamente 7–10 días en la India para la colocación, cualquier trabajo de corona en el mismo día y un control de seguimiento antes de regresar a casa.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta una radiografía dental reciente o fotos de sus dientes a través de nuestro formulario de contacto, y nuestro coordinador odontológico organizará una revisión y una cotización transparente en 24 horas.',
			},
		],
	},

	'eye-care': {
		name: 'Oftalmología',
		shortDescription: 'Cirugía de cataratas y corrección de la visión, con alta el mismo día en la mayoría de los casos.',
		overview:
			'Los hospitales oftalmológicos de la India realizan procedimientos de cataratas y refractivos en volúmenes extremadamente altos, dando a los cirujanos una profunda experiencia en técnicas sin bisturí, asistidas por láser, con alta el mismo día para la mayoría de los pacientes.',
		procedures: ['Cirugía de cataratas', 'LASIK', 'Tratamiento de retina'],
		benefits: [
			'Cirugía de cataratas sin bisturí, asistida por láser',
			'Alta el mismo día para la mayoría de los procedimientos',
			'Centros de alto volumen con profunda experiencia quirúrgica',
			'Opciones de lentes intraoculares premium disponibles',
		],
		flagshipProcedure: 'Cirugía de cataratas (facoemulsificación)',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '2–4 semanas', successRate: '98–99%' },
			{ country: 'Reino Unido', waitTime: '8–18 semanas (NHS)', successRate: '98–99%' },
			{ country: 'Alemania', waitTime: '2–4 semanas', successRate: '97–99%' },
			{ country: 'Tailandia', waitTime: '1–2 semanas', successRate: '97–98%' },
			{ country: 'India', waitTime: '2–4 días', successRate: '98%+' },
		],
		inclusions: [
			'Evaluación ocular preoperatoria, incluida biometría y verificación de aptitud',
			'Honorarios del cirujano para la cirugía de cataratas sin bisturí, asistida por láser',
			'Lente intraocular (LIO) monofocal estándar',
			'Tarifas de quirófano y procedimiento estéril',
			'Alta el mismo día con gotas oculares posoperatorias',
			'Una visita de seguimiento para confirmar la cicatrización y la corrección de la visión',
		],
		exclusions: [
			'Mejoras de LIO premium (lentes multifocales o tóricas) más allá de la lente monofocal estándar',
			'Tratamiento de afecciones oculares no relacionadas, como glaucoma o enfermedades de retina, descubiertas en la evaluación',
			'Cirugía del segundo ojo, si no se cotiza en conjunto',
			'Visitas de seguimiento más allá de la incluida',
			'Gafas o lentes de contacto después del procedimiento',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta la cirugía de cataratas en la India?',
				answer:
					'La cirugía de cataratas en la India comienza desde 700 USD por ojo, aproximadamente un 80% menos que en EE. UU., e incluye la evaluación preoperatoria, la cirugía asistida por láser, una LIO estándar y una visita de seguimiento.',
			},
			{
				question: '¿La intervención es indolora y rápida?',
				answer:
					'Sí, la cirugía de cataratas moderna sin bisturí, asistida por láser, suele durar 15–20 minutos por ojo, bajo anestesia local, con la mayoría de los pacientes dados de alta el mismo día.',
			},
			{
				question: '¿Puedo elegir una lente premium (multifocal o tórica)?',
				answer:
					'Sí, hay opciones de lentes intraoculares premium disponibles para los pacientes que desean reducir la dependencia de gafas después de la intervención — se cotizan por separado de la lente monofocal estándar.',
			},
			{
				question: '¿Cuánto tiempo debería planear permanecer en la India?',
				answer:
					'La mayoría de los pacientes de cataratas planean aproximadamente 4–7 días en la India para la evaluación preoperatoria, la intervención y una visita de seguimiento antes de regresar a casa; LASIK sigue un cronograma igualmente corto.',
			},
			{
				question: '¿Está disponible LASIK para ambos ojos en una sola visita?',
				answer:
					'Sí, LASIK y otros procedimientos refractivos suelen realizarse en ambos ojos en una sola visita, el mismo día, para candidatos adecuados, tras una evaluación preoperatoria detallada.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta su receta ocular reciente o informes existentes a través de nuestro formulario de contacto, y nuestro coordinador de oftalmología organizará una evaluación especializada y una cotización transparente en 24 horas.',
			},
		],
	},

	neurology: {
		name: 'Neurología y neurocirugía',
		shortDescription: 'Especialistas en cerebro, columna vertebral y nervios, que tratan tumores, accidentes cerebrovasculares y trastornos neurológicos complejos.',
		overview:
			'Los centros de neurocirugía de la India combinan técnicas microquirúrgicas y guiadas por imágenes con UCI neurológicas dedicadas, dando a los pacientes internacionales acceso a atención avanzada para tumores cerebrales y accidentes cerebrovasculares, sin las largas listas de espera de especialistas habituales en otros países.',
		procedures: ['Cirugía de tumor cerebral', 'Cirugía de epilepsia', 'Atención de accidente cerebrovascular'],
		benefits: [
			'Neurocirujanos formados en técnicas microquirúrgicas y mínimamente invasivas',
			'RM intraoperatoria y neuronavegación disponibles en centros de primer nivel',
			'UCI neurológica dedicada con monitoreo crítico permanente',
			'Apoyo estructurado de neurorehabilitación tras la intervención',
		],
		flagshipProcedure: 'Resección de tumor cerebral',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: '85–90%' },
			{ country: 'Reino Unido', waitTime: '3–9 meses (NHS)', successRate: '85–90%' },
			{ country: 'Alemania', waitTime: '4–8 semanas', successRate: '84–89%' },
			{ country: 'Tailandia', waitTime: '2–4 semanas', successRate: '82–87%' },
			{ country: 'India', waitTime: '1–2 semanas', successRate: '85%+' },
		],
		inclusions: [
			'Evaluación neurológica preoperatoria, análisis de RM/TC y verificación de aptitud',
			'Honorarios del neurocirujano y anestesista para el procedimiento principal',
			'Tarifas de quirófano, incluida neuronavegación, cuando corresponda',
			'Estancia en UCI neurológica (4 días) más 8 días en habitación de recuperación intermedia',
			'Atención médica y monitoreo neurológico estándar durante la hospitalización',
			'Tarifas de laboratorio y radiología relacionadas con el procedimiento',
			'Resumen de alta con plan estructurado de neurorehabilitación',
		],
		exclusions: [
			'Estancia previa a la internación para estabilizar al paciente antes de aprobar la intervención',
			'Estancia hospitalaria o en UCI más allá de la duración del paquete',
			'Radioterapia o quimioterapia para tumores malignos, cotizadas por separado',
			'Sesiones de neurorehabilitación ambulatoria tras el alta',
			'Tratamiento de afecciones no relacionadas identificadas en el chequeo preoperatorio',
			'Reintervención por complicaciones no relacionadas con el procedimiento inicial',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta la cirugía de un tumor cerebral en la India?',
				answer:
					'La resección de un tumor cerebral en la India comienza desde 9,000 USD, aproximadamente un 90% menos que en EE. UU., e incluye la evaluación preoperatoria, la intervención, la estancia en UCI neurológica y un plan estructurado de recuperación.',
			},
			{
				question: '¿Están disponibles técnicas de neurocirugía mínimamente invasiva?',
				answer:
					'Sí, muchos de nuestros hospitales asociados ofrecen enfoques guiados por imágenes y mínimamente invasivos, incluida RM intraoperatoria y neuronavegación, que pueden mejorar la precisión y reducir la recuperación para los casos elegibles.',
			},
			{
				question: '¿Cuál es la duración de la estancia hospitalaria para la neurocirugía?',
				answer:
					'La mayoría de los pacientes permanecen hospitalizados aproximadamente 12 días — 4 días en UCI neurológica y 8 días en habitación de recuperación intermedia — con una estancia total recomendada en la India de aproximadamente 3–4 semanas para el seguimiento.',
			},
			{
				question: '¿Será necesaria radioterapia o quimioterapia después de la intervención?',
				answer:
					'Para tumores malignos, su equipo de neurooncología puede recomendar radioterapia o quimioterapia después de la intervención — estas se cotizan por separado, según su protocolo específico, y se discuten como parte del plan de tratamiento.',
			},
			{
				question: '¿Puedo obtener una segunda opinión antes de viajar?',
				answer:
					'Sí, envíe sus escáneres de RM/TC e informes para una evaluación especializada gratuita — nuestro comité de neurocirugía confirmará si se recomienda la intervención, antes de que se comprometa a viajar.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta sus informes neurológicos e imágenes a través de nuestro formulario de contacto o WhatsApp, y un coordinador organizará una evaluación especializada y una estimación transparente en 48 horas.',
			},
		],
	},

	'spine-surgery': {
		name: 'Cirugía de columna',
		shortDescription: 'Fusión espinal, reemplazo de disco y corrección de escoliosis, con programas estructurados de recuperación.',
		overview:
			'Los centros de cirugía de columna de la India combinan cirujanos de columna formados mediante fellowship con técnicas mínimamente invasivas y de preservación de la movilidad, ayudando a pacientes con dolor de espalda crónico, enfermedad discal y deformidades de columna a evitar las largas listas de espera habituales en Occidente.',
		procedures: ['Fusión espinal', 'Reemplazo de disco', 'Corrección de escoliosis'],
		benefits: [
			'Cirujanos de columna formados mediante fellowship, utilizando técnicas mínimamente invasivas',
			'Opciones de reemplazo de disco con preservación de la movilidad, en centros seleccionados',
			'Fisioterapia estructurada en el hospital desde el primer día',
			'Estancia hospitalaria típica de 5–7 días para cirugía mayor de columna',
		],
		flagshipProcedure: 'Fusión espinal lumbar',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: '88–92%' },
			{ country: 'Reino Unido', waitTime: '6–12 meses (NHS)', successRate: '88–92%' },
			{ country: 'Alemania', waitTime: '4–8 semanas', successRate: '87–91%' },
			{ country: 'Tailandia', waitTime: '2–4 semanas', successRate: '85–89%' },
			{ country: 'India', waitTime: '1–2 semanas', successRate: '90%+' },
		],
		inclusions: [
			'Evaluación preoperatoria de columna, incluido análisis de RM/radiografía',
			'Honorarios del cirujano y anestesista para el procedimiento de columna',
			'Tarifas de quirófano e implante/hardware espinal estándar',
			'Estancia en UCI (1 día) más 5 días en habitación individual',
			'Sesiones estructuradas de fisioterapia en el hospital',
			'Laboratorio, radiología y medicamentos posoperatorios estándar durante la estancia',
			'Resumen de alta con programa de ejercicios en casa y plan de recuperación',
		],
		exclusions: [
			'Implantes espinales premium o personalizados más allá del hardware estándar',
			'Estancia hospitalaria más allá de la duración del paquete',
			'Fusión en múltiples niveles, más allá de los niveles cotizados en la evaluación inicial',
			'Sesiones de fisioterapia ambulatoria tras el alta',
			'Tratamiento de afecciones no relacionadas identificadas en el chequeo preoperatorio',
			'Cirugía de revisión por complicaciones no relacionadas con el procedimiento inicial',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta la fusión espinal en la India?',
				answer:
					'Un paquete de fusión espinal lumbar en la India comienza desde 6,500 USD, aproximadamente un 90% menos que los precios habituales en EE. UU., e incluye los honorarios del cirujano, el implante, la estancia hospitalaria y la fisioterapia en el hospital.',
			},
			{
				question: '¿Está disponible la cirugía mínimamente invasiva de columna?',
				answer:
					'Sí, varios de nuestros hospitales asociados ofrecen técnicas mínimamente invasivas y de preservación de la movilidad, como el reemplazo de disco, que pueden reducir la pérdida de sangre y acortar la recuperación para candidatos adecuados.',
			},
			{
				question: '¿Cuál es la duración de la estancia hospitalaria y la recuperación?',
				answer:
					'La mayoría de los pacientes permanecen hospitalizados aproximadamente 6 días y se recomienda permanecer en la India 2–3 semanas, para que el equipo de columna pueda monitorear la recuperación temprana antes de regresar a casa.',
			},
			{
				question: '¿Qué implante/hardware se utiliza?',
				answer:
					'Nuestros hospitales asociados utilizan como estándar sistemas de implantes espinales certificados internacionalmente, con mejoras de hardware premium disponibles bajo solicitud y cotización separada.',
			},
			{
				question: '¿Necesitaré fisioterapia después de la intervención?',
				answer:
					'Sí, la fisioterapia estructurada en el hospital comienza poco después de la intervención, y su cirujano proporcionará un programa de ejercicios en casa para continuar la recuperación tras regresar a casa.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Envíe la RM o las radiografías de su columna a través de nuestro formulario de contacto y recibirá una evaluación especializada y una estimación transparente de costos en 24 horas.',
			},
		],
	},

	'bariatric-surgery': {
		name: 'Cirugía bariátrica',
		shortDescription: 'Manga gástrica, bypass y balón gástrico para una pérdida de peso duradera y supervisada médicamente.',
		overview:
			'Los centros bariátricos de la India combinan experiencia quirúrgica laparoscópica con orientación dietética estructurada pre y posoperatoria, ayudando a los pacientes a lograr una pérdida de peso duradera, con estancias hospitalarias más cortas y una recuperación más rápida que la cirugía abierta.',
		procedures: ['Manga gástrica', 'Bypass gástrico', 'Balón gástrico'],
		benefits: [
			'Cirugía bariátrica laparoscópica (mínimamente invasiva) como estándar',
			'Orientación dietética y de estilo de vida estructurada, pre y posoperatoria',
			'Estancia hospitalaria típica de solo 2–3 días para gastrectomía en manga',
			'Apoyo de seguimiento a largo plazo para monitorear el progreso de la pérdida de peso',
		],
		flagshipProcedure: 'Gastrectomía en manga laparoscópica',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '3–6 semanas', successRate: '90–95%' },
			{ country: 'Reino Unido', waitTime: '6–12 meses (NHS)', successRate: '90–95%' },
			{ country: 'Alemania', waitTime: '4–8 semanas', successRate: '89–94%' },
			{ country: 'Tailandia', waitTime: '1–3 semanas', successRate: '88–93%' },
			{ country: 'India', waitTime: '1–2 semanas', successRate: '92%+' },
		],
		inclusions: [
			'Evaluación preoperatoria, incluida endoscopia y verificación de aptitud',
			'Consulta con el dietista y planificación de la dieta preoperatoria',
			'Honorarios del cirujano y anestesista para el procedimiento laparoscópico',
			'Tarifas de quirófano y grapadoras/insumos quirúrgicos estándar',
			'3 días de estancia hospitalaria, incluido monitoreo posoperatorio',
			'Resumen de alta con plan estructurado de progresión dietética posoperatoria',
		],
		exclusions: [
			'Estancia hospitalaria más allá de la duración del paquete',
			'Cirugía de revisión de un procedimiento bariátrico previo realizado en otro lugar',
			'Cirugía plástica para eliminar el exceso de piel tras una pérdida de peso significativa',
			'Suplementos nutricionales a largo plazo más allá del kit inicial de alta',
			'Tratamiento de afecciones no relacionadas identificadas en el chequeo preoperatorio',
			'Reintervención por complicaciones no relacionadas con el procedimiento inicial',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta la cirugía de manga gástrica en la India?',
				answer:
					'Un paquete de gastrectomía en manga laparoscópica en la India comienza desde 4,500 USD, aproximadamente un 80% menos que en EE. UU., e incluye la evaluación preoperatoria, la intervención, la estancia hospitalaria y el plan dietético posoperatorio.',
			},
			{
				question: '¿Soy elegible para la cirugía bariátrica?',
				answer:
					'La elegibilidad suele determinarse por el IMC y las afecciones asociadas — comparta su altura, peso y cualquier afección existente a través de nuestro formulario de contacto para una evaluación gratuita de elegibilidad por nuestro equipo bariátrico.',
			},
			{
				question: '¿Cuánto peso puedo esperar perder?',
				answer:
					'La mayoría de los pacientes pierden el 60–70% de su exceso de peso en 12–18 meses después de la gastrectomía en manga o el bypass, aunque los resultados varían según el procedimiento elegido y la adherencia a la dieta y el estilo de vida posoperatorio.',
			},
			{
				question: '¿Cuál es la duración de la estancia hospitalaria y la recuperación?',
				answer:
					'La mayoría de los pacientes permanecen hospitalizados aproximadamente 3 días y se recomienda permanecer en la India 10–14 días, para que el equipo quirúrgico pueda confirmar la recuperación temprana antes de regresar a casa.',
			},
			{
				question: '¿Se realiza el procedimiento por laparoscopia?',
				answer:
					'Sí, la gastrectomía en manga, el bypass gástrico y la colocación del balón se realizan por laparoscopia como estándar, lo que generalmente significa menos dolor y una recuperación más rápida que la cirugía abierta.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta su altura, peso e historial médico a través de nuestro formulario de contacto, y nuestro coordinador bariátrico organizará una evaluación especializada en 24 horas.',
			},
		],
	},

	'nephrology-urology': {
		name: 'Nefrología y urología',
		shortDescription: 'Tratamiento de cálculos renales, cirugía de próstata y atención de diálisis por parte de equipos urológicos especializados.',
		overview:
			'Los centros de urología y nefrología de la India realizan procedimientos de cálculos renales y próstata en grandes volúmenes, utilizando técnicas láser y mínimamente invasivas, dando a los pacientes internacionales acceso rápido a especialistas, sin las listas de espera habituales en otros países.',
		procedures: ['Eliminación de cálculos renales', 'Cirugía de próstata', 'Atención de diálisis'],
		benefits: [
			'Eliminación de cálculos renales con láser y mínimamente invasiva (NLPC/RIRS)',
			'Cirugía de próstata robótica y laparoscópica disponible en centros de primer nivel',
			'Unidades de diálisis dedicadas para pacientes que necesitan atención renal continua',
			'Alta el mismo día o al día siguiente para muchos procedimientos mínimamente invasivos',
		],
		flagshipProcedure: 'Nefrolitotomía percutánea (NLPC)',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '3–6 semanas', successRate: '92–96%' },
			{ country: 'Reino Unido', waitTime: '3–9 meses (NHS)', successRate: '92–96%' },
			{ country: 'Alemania', waitTime: '3–6 semanas', successRate: '91–95%' },
			{ country: 'Tailandia', waitTime: '1–3 semanas', successRate: '90–94%' },
			{ country: 'India', waitTime: '3–7 días', successRate: '94%+' },
		],
		inclusions: [
			'Evaluación preoperatoria, incluida ecografía/TC y verificación de aptitud',
			'Honorarios del urólogo y anestesista para el procedimiento',
			'Tarifas de quirófano y equipo láser/endoscópico',
			'2 días de estancia hospitalaria, incluido monitoreo posoperatorio',
			'Medicamentos e insumos estándar durante la estancia',
			'Resumen de alta con plan de imágenes de seguimiento',
		],
		exclusions: [
			'Estancia hospitalaria más allá de la duración del paquete',
			'Tratamiento de cálculos bilaterales (ambos riñones), si no se cotiza en conjunto',
			'Sesiones de diálisis a largo plazo más allá de la estancia inicial de evaluación',
			'Medicamentos para llevar a casa más allá del kit estándar de alta',
			'Tratamiento de afecciones no relacionadas identificadas en el chequeo preoperatorio',
			'Reintervención por complicaciones no relacionadas con el procedimiento inicial',
		],
		faqs: [
			{
				question: '¿Cuánto cuesta la eliminación de cálculos renales en la India?',
				answer:
					'Un paquete NLPC (eliminación de cálculos renales) en la India comienza desde 3,500 USD, aproximadamente un 85% menos que en EE. UU., e incluye la evaluación preoperatoria, el procedimiento, la estancia hospitalaria y las imágenes de seguimiento.',
			},
			{
				question: '¿El tratamiento de cálculos renales es mínimamente invasivo?',
				answer:
					'Sí, la mayoría de los cálculos se tratan con técnicas láser mínimamente invasivas, como NLPC o RIRS, que generalmente permiten el alta en 1–2 días, según el tamaño y la ubicación del cálculo.',
			},
			{
				question: '¿Está disponible la cirugía robótica de próstata?',
				answer:
					'Sí, varios de nuestros hospitales asociados ofrecen cirugía de próstata robótica y laparoscópica, que puede reducir la pérdida de sangre y acortar la recuperación en comparación con la cirugía abierta.',
			},
			{
				question: '¿Cuánto tiempo debería planear permanecer en la India?',
				answer:
					'La mayoría de los procedimientos urológicos requieren aproximadamente 7–10 días en la India para la evaluación preoperatoria, el procedimiento y un control de seguimiento antes de regresar a casa; los casos complejos pueden requerir una estancia más larga.',
			},
			{
				question: '¿Apoyan a pacientes que necesitan diálisis continua?',
				answer:
					'Sí, nuestros hospitales asociados cuentan con unidades de diálisis dedicadas y pueden coordinar atención renal continua para pacientes que viajan para evaluación o que esperan un trasplante de riñón.',
			},
			{
				question: '¿Cómo empiezo?',
				answer:
					'Comparta sus informes de imágenes (ecografía/TC) a través de nuestro formulario de contacto, y nuestro coordinador de urología organizará una evaluación especializada y una cotización transparente en 24 horas.',
			},
		],
	},
};

export const getEsTreatment = (slug: string) => esTreatments[slug];
