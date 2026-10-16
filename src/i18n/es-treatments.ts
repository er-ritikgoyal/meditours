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
	detailedProcedures?: { name: string; description: string }[];
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
		detailedProcedures: [
			{
				name: 'Angioplastia Coronaria',
				description:
					"La angioplastia coronaria es un procedimiento mínimamente invasivo utilizado para ensanchar una arteria coronaria estrechada u obstruida y restablecer el flujo sanguíneo al músculo cardíaco en pacientes con enfermedad arterial coronaria. Bajo anestesia local, un cardiólogo introduce un catéter delgado a través de una arteria en la muñeca o la ingle hasta el sitio de la obstrucción, guiado por imágenes de rayos X en tiempo real, e infla un pequeño globo para comprimir la placa contra la pared arterial; en la mayoría de los casos se deja colocado un stent de malla metálica para mantener el vaso abierto y reducir la probabilidad de un nuevo estrechamiento. Se recomienda habitualmente en pacientes con angina, flujo sanguíneo reducido detectado en una prueba de esfuerzo, o como tratamiento de emergencia durante un infarto para reabrir rápidamente un vaso obstruido. El procedimiento se realiza en un laboratorio de cateterismo y generalmente dura menos de una hora, con la mayoría de los pacientes en observación durante la noche y dados de alta en uno o dos días. Los centros cardíacos de la India realizan un alto volumen de angioplastias utilizando imágenes modernas y una amplia variedad de opciones de stents, y los pacientes generalmente retoman la actividad ligera en una semana, con el cardiólogo asesorando sobre la medicación y el seguimiento antes de regresar a casa.",
			},
			{
				name: 'Injerto de Bypass de Arteria Coronaria (CABG)',
				description:
					"El injerto de bypass de arteria coronaria, conocido comúnmente como CABG o cirugía de bypass, se realiza cuando una o más arterias coronarias están gravemente estrechadas u obstruidas y la angioplastia no es adecuada, a menudo en pacientes con enfermedad coronaria multivaso o compleja. Durante la operación, un cirujano cardíaco toma un vaso sanguíneo sano de otra parte del cuerpo, generalmente la arteria mamaria interna del tórax o una vena de la pierna, y lo injerta para redirigir el flujo sanguíneo alrededor del segmento obstruido. El CABG tradicional se realiza mediante una incisión en el esternón con el paciente conectado a una máquina de circulación extracorpórea, aunque en casos seleccionados se utilizan técnicas sin bomba y mínimamente invasivas. El objetivo es aliviar la angina, reducir el riesgo de infarto y mejorar la función cardíaca a largo plazo. La recuperación implica varios días de hospitalización, incluido un tiempo en cuidados intensivos inmediatamente después de la cirugía, seguido de un período estructurado de restricción de actividad y rehabilitación cardíaca. Los programas de cirugía cardíaca de la India combinan equipos quirúrgicos experimentados con unidades de cuidados intensivos bien equipadas, y los pacientes internacionales generalmente planifican una estancia hospitalaria de aproximadamente una semana seguida de algunas semanas de recuperación local antes de volar a casa, con revisiones de la herida y orientación de rehabilitación durante todo el proceso.",
			},
			{
				name: 'Cirugía de Reemplazo de Válvula Mitral',
				description:
					"El reemplazo de válvula mitral se realiza cuando la válvula mitral, que controla el flujo sanguíneo entre la aurícula izquierda y el ventrículo izquierdo del corazón, se vuelve demasiado estrecha (estenosis) o presenta fugas (regurgitación) y no puede repararse adecuadamente. Bajo anestesia general y con el paciente conectado a una máquina de circulación extracorpórea, el cirujano abre el corazón, retira la válvula dañada y cose una de reemplazo — ya sea una válvula mecánica, duradera pero que requiere medicación anticoagulante de por vida, o una válvula de tejido biológico, que evita la anticoagulación a largo plazo pero puede desgastarse antes. La elección entre los tipos de válvula depende de la edad, el estilo de vida y la salud general del paciente, y se discute previamente con el equipo quirúrgico. El procedimiento puede realizarse mediante una esternotomía tradicional o, en pacientes seleccionados, a través de incisiones más pequeñas y mínimamente invasivas. Los pacientes generalmente pasan uno o dos días en cuidados intensivos seguidos de varios días más en planta antes del alta. Los centros cardíacos de la India ofrecen tanto válvulas mecánicas como de tejido, junto con una atención cardíaca postoperatoria experimentada, y los pacientes internacionales generalmente planifican una estancia hospitalaria de aproximadamente una semana, con ecocardiogramas de seguimiento programados antes de viajar a casa para confirmar que la válvula funciona correctamente.",
			},
			{
				name: 'Reemplazo de Válvula Aórtica',
				description:
					"El reemplazo de válvula aórtica trata una válvula aórtica enferma — la válvula que controla el flujo sanguíneo del corazón hacia la arteria principal del cuerpo — que se ha estrechado (estenosis) o presenta fugas (regurgitación), causando síntomas como dificultad para respirar, dolor torácico o desmayos. En la cirugía convencional a corazón abierto, se abre el tórax, se detiene temporalmente el corazón con el apoyo de una máquina de circulación extracorpórea, y el cirujano retira la válvula enferma y cose una de reemplazo mecánica o biológica, dimensionada según la anatomía del paciente. Las válvulas mecánicas duran más pero requieren medicación anticoagulante de por vida, mientras que las válvulas de tejido evitan esto pero pueden necesitar reemplazo después de diez a veinte años, y el equipo quirúrgico ayuda a los pacientes a sopesar estas alternativas según la edad y la salud. La operación generalmente dura unas horas, y los pacientes pasan tiempo en cuidados intensivos antes de trasladarse a una planta regular. Es una de las cirugías cardíacas más establecidas realizadas en la India, con centros que ofrecen una gama completa de tipos de válvulas y un monitoreo perioperatorio experimentado. Los pacientes internacionales generalmente permanecen en la India entre dos y tres semanas en total para permitir la cirugía, la recuperación inicial y una evaluación de seguimiento antes de volar a casa.",
			},
			{
				name: 'Reemplazo de Válvula Aórtica Transcatéter (TAVR)',
				description:
					"El reemplazo de válvula aórtica transcatéter, o TAVR, es una alternativa mínimamente invasiva a la cirugía a corazón abierto para tratar la estenosis aórtica severa, especialmente en pacientes mayores o considerados de alto riesgo para la cirugía convencional. En lugar de abrir el tórax, un cardiólogo intervencionista introduce un catéter que transporta una válvula de reemplazo plegable a través de un vaso sanguíneo, generalmente en la ingle, hasta el corazón, donde se expande y se posiciona dentro de la válvula enferma existente del paciente, desplazándola e inmediatamente asumiendo su función. El procedimiento generalmente se realiza bajo sedación o anestesia general ligera y se guía por imágenes en tiempo real, sin necesidad de detener el corazón ni usar una máquina de circulación extracorpórea. Debido a que evita una gran incisión torácica, la recuperación suele ser más rápida que con el reemplazo quirúrgico de válvula, y muchos pacientes se movilizan en un día y son dados de alta en pocos días. El TAVR se ofrece cada vez más en los centros cardíacos avanzados de la India para pacientes que cumplen los criterios anatómicos adecuados, tras una cuidadosa evaluación por imágenes que confirme la idoneidad. Los pacientes internacionales generalmente planifican entre una y dos semanas en la India para permitir la evaluación previa, el procedimiento en sí y un breve período de recuperación antes del seguimiento y el viaje de regreso.",
			},
			{
				name: 'Cateterismo Cardíaco',
				description:
					"El cateterismo cardíaco es un procedimiento diagnóstico y, en algunos casos, terapéutico, en el que se guía un catéter delgado y flexible a través de un vaso sanguíneo, generalmente en la muñeca o la ingle, hasta las cámaras y arterias del corazón para evaluar directamente su funcionamiento. Mediante guía radiológica y contraste, el cardiólogo puede visualizar las arterias coronarias en busca de obstrucciones, medir las presiones dentro de las cámaras cardíacas, evaluar la función valvular y, en algunos casos, tomar muestras de tejido. Se utiliza habitualmente para investigar el dolor torácico, resultados anormales en pruebas de esfuerzo, insuficiencia cardíaca de causa incierta o sospecha de enfermedad valvular o cardíaca congénita, y a menudo es el primer paso antes de decidir si se necesita angioplastia, colocación de stent o cirugía. El procedimiento se realiza bajo anestesia local con sedación ligera, generalmente dura entre treinta minutos y una hora, y la mayoría de los pacientes pueden irse a casa el mismo día o después de una noche de observación. Los laboratorios de cateterismo de la India están equipados con sistemas de imagen modernos que permiten un diagnóstico preciso y, cuando corresponde, un tratamiento inmediato en la misma sesión. Los pacientes internacionales generalmente solo necesitan una visita breve para el procedimiento en sí, y los resultados y los próximos pasos se discuten directamente con el equipo de cardiología.",
			},
			{
				name: 'Valvotomía Pulmonar con Balón',
				description:
					"La valvotomía pulmonar con balón es un procedimiento basado en catéter utilizado para tratar la estenosis de la válvula pulmonar, una afección en la que la válvula que controla el flujo sanguíneo desde el ventrículo derecho del corazón hacia los pulmones está anormalmente estrechada, obligando al corazón a trabajar más y reduciendo el flujo sanguíneo hacia los pulmones. A menudo se diagnostica en bebés, niños o adultos jóvenes, a veces como parte de una afección cardíaca congénita presente desde el nacimiento. Durante el procedimiento, un cardiólogo guía un catéter con un globo desinflado en su punta a través de una vena, generalmente en la ingle, hasta la válvula estrechada, y luego infla el globo para estirarla y aliviar la obstrucción. El procedimiento se realiza bajo sedación o anestesia general en un laboratorio de cateterismo, guiado por imágenes de rayos X y ecocardiografía, y generalmente dura entre una y dos horas. Debido a que evita la cirugía a corazón abierto, la recuperación suele ser rápida, con la mayoría de los pacientes en observación durante la noche y dados de alta en uno o dos días. Los centros de cardiología pediátrica y estructural de la India realizan rutinariamente valvotomías con balón tanto en niños como en adultos, con una cuidadosa evaluación por imágenes previa para confirmar la idoneidad. Las familias que viajan para este procedimiento generalmente planifican una estancia corta de aproximadamente una semana, incluyendo la evaluación previa al procedimiento y la ecocardiografía de seguimiento.",
			},
			{
				name: 'Instalación de Marcapasos Cardíaco',
				description:
					"Un marcapasos cardíaco es un pequeño dispositivo electrónico implantado para ayudar a regular un latido cardíaco anormalmente lento o irregular, utilizado comúnmente para tratar afecciones como la bradicardia, el bloqueo cardíaco o ciertas arritmias en las que el sistema eléctrico natural del corazón no funciona de manera confiable. El dispositivo consta de un generador de pulsos, implantado justo debajo de la piel cerca de la clavícula, conectado a uno o más cables delgados que se guían a través de una vena hasta las cámaras cardíacas, donde detectan el ritmo del corazón y envían pequeños impulsos eléctricos cuando es necesario para mantener un latido regular. La implantación generalmente se realiza bajo anestesia local con sedación, dura entre una y dos horas, y se hace mediante una pequeña incisión en lugar de cirugía abierta. La mayoría de los pacientes permanecen hospitalizados durante la noche para monitoreo y se verifica la configuración del dispositivo antes del alta. Los centros de electrofisiología y cardiología de la India ofrecen una variedad de dispositivos de marcapasos de cámara única, doble cámara y más avanzados, adecuados para diferentes trastornos del ritmo. Los pacientes internacionales generalmente planifican aproximadamente una semana en la India para permitir la evaluación previa, la implantación y una revisión inicial del dispositivo, con orientación sobre monitoreo remoto y seguimiento con su médico de origen posteriormente.",
			},
			{
				name: 'Cirugía Cardíaca Pediátrica',
				description:
					"La cirugía cardíaca pediátrica abarca una variedad de operaciones realizadas en bebés y niños para corregir defectos cardíacos congénitos — problemas estructurales del corazón presentes desde el nacimiento, como orificios entre las cámaras cardíacas, válvulas malformadas o conexiones anormales de los principales vasos sanguíneos. El procedimiento específico depende del defecto: algunas afecciones pueden cerrarse con un parche durante la cirugía a corazón abierto utilizando una máquina de circulación extracorpórea adaptada a un paciente pequeño, mientras que otras implican reconstruir o redirigir vasos sanguíneos para establecer una circulación normal. El diagnóstico generalmente se basa en la ecocardiografía, y a veces en imágenes de TC o RM, para mapear la anatomía exacta antes de planificar la operación. Debido a que los corazones y vasos sanguíneos de los niños son pequeños y aún están en desarrollo, estos procedimientos requieren cirujanos cardíacos pediátricos y anestesiólogos con experiencia en afecciones cardíacas congénitas, junto con apoyo dedicado de cuidados intensivos pediátricos posteriormente. El tiempo de recuperación varía ampliamente según la complejidad del defecto y la edad del niño, desde aproximadamente una semana hasta varias semanas de hospitalización. Los programas de cardiología pediátrica de la India tratan un amplio espectro de defectos congénitos, a menudo para niños de otros países, con alojamiento familiar y atención pre y postoperatoria coordinada en torno a las necesidades de los pacientes jóvenes y sus padres.",
			},
			{
				name: 'Implante de Corazón Artificial / DAVI (LVAD)',
				description:
					"Un dispositivo de asistencia ventricular izquierda, o DAVI (LVAD), es una bomba mecánica implantada para ayudar a un corazón gravemente debilitado a hacer circular la sangre, utilizada en pacientes con insuficiencia cardíaca avanzada que no han respondido adecuadamente a la medicación. El dispositivo se conecta quirúrgicamente al ventrículo izquierdo y a la aorta, extrayendo sangre de la cámara debilitada y bombeándola hacia la arteria principal del cuerpo en lugar del músculo cardíaco insuficiente; un cable sale a través de la piel hacia un controlador externo y una batería que lleva el paciente. Los DAVI pueden servir como puente hacia un trasplante de corazón mientras el paciente espera un órgano donante, o como terapia a más largo plazo para quienes no son candidatos a trasplante. La implantación requiere cirugía a corazón abierto con circulación extracorpórea, seguida de una hospitalización prolongada que incluye monitoreo en cuidados intensivos y capacitación para el paciente y los cuidadores sobre el manejo del dispositivo. El término corazón artificial a veces se utiliza de manera informal para los DAVI, aunque los corazones artificiales totales que reemplazan completamente el corazón son una tecnología separada y más rara. Los centros avanzados de insuficiencia cardíaca de la India ofrecen la implantación de DAVI y el seguimiento especializado que requiere, y los pacientes deben esperar una estancia prolongada de varias semanas para la cirugía, la recuperación y la capacitación con el dispositivo antes de viajar.",
			},
			{
				name: 'Reparación Endovascular de Aneurisma Aórtico',
				description:
					"La reparación endovascular de aneurisma aórtico, o EVAR, es un procedimiento mínimamente invasivo utilizado para tratar un aneurisma aórtico — una sección abultada y debilitada de la arteria principal del cuerpo que conlleva riesgo de rotura si no se trata. En lugar de abrir el abdomen o el tórax para reemplazar directamente el segmento afectado, un cirujano vascular accede a las arterias femorales en la ingle e introduce un stent-injerto de metal recubierto de tela a través de los vasos sanguíneos hasta el sitio del aneurisma, donde se expande para revestir la arteria desde el interior y redirigir el flujo sanguíneo lejos de la pared debilitada. El procedimiento se realiza bajo anestesia regional o general, guiado por imágenes continuas de rayos X, y generalmente dura entre una y tres horas según la ubicación y complejidad del aneurisma. Debido a que evita una incisión quirúrgica grande, la recuperación suele ser más rápida que con la reparación abierta, y muchos pacientes se movilizan en uno o dos días y son dados de alta en aproximadamente una semana. Una cuidadosa evaluación por TC previa confirma que la forma y el tamaño del aneurisma son adecuados para un stent-injerto. Los centros de cirugía vascular de la India ofrecen EVAR con una variedad de dispositivos de stent-injerto, y los pacientes internacionales generalmente planifican unas dos semanas para permitir la evaluación, el procedimiento y el seguimiento por imágenes posterior.",
			},
			{
				name: 'Cirugía a Corazón Abierto',
				description:
					"La cirugía a corazón abierto es un término amplio para cualquier operación cardíaca en la que se abre quirúrgicamente el tórax, generalmente mediante una incisión en el esternón, para dar al equipo quirúrgico acceso directo al corazón y sus vasos principales. Muchas de estas operaciones se realizan con el corazón detenido temporalmente y una máquina de circulación extracorpórea asumiendo la circulación y la respiración, lo que permite al cirujano trabajar en un corazón quieto y sin sangre antes de reiniciarlo. Las razones comunes para la cirugía a corazón abierto incluyen derivar arterias coronarias obstruidas, reparar o reemplazar válvulas cardíacas dañadas, corregir defectos congénitos y reparar aneurismas que afectan al corazón o a los vasos principales. La técnica y la duración dependen de la afección subyacente, pero la mayoría de las operaciones duran varias horas y van seguidas de tiempo en cuidados intensivos mientras se retira al paciente del soporte ventilatorio y se le monitorea por sangrado, infección y cambios en el ritmo. Generalmente sigue una hospitalización más larga de una a dos semanas, junto con rehabilitación cardíaca estructurada para recuperar fuerza y resistencia. Los centros de cirugía cardíaca de la India realizan un alto volumen de procedimientos a corazón abierto en estas categorías, respaldados por unidades de cuidados intensivos cardíacos dedicadas, y los pacientes internacionales generalmente planifican varias semanas en el país para cubrir la cirugía y la recuperación inicial.",
			},
			{
				name: 'Tratamiento de Cardiopatía Congénita',
				description:
					"La cardiopatía congénita se refiere a anomalías estructurales del corazón o de los principales vasos sanguíneos presentes desde el nacimiento, que van desde pequeños orificios entre las cámaras cardíacas que pueden cerrarse por sí solos hasta malformaciones complejas que requieren corrección quirúrgica por etapas. El tratamiento es altamente individualizado y comienza con imágenes diagnósticas detalladas, generalmente ecocardiografía y a veces TC o RM cardíaca, para mapear el defecto exacto antes de que un cardiólogo pediátrico o de cardiopatías congénitas en adultos y el equipo quirúrgico decidan el mejor enfoque. Algunos defectos, como pequeñas comunicaciones interauriculares o interventriculares, pueden cerrarse mediante dispositivos basados en catéter sin cirugía abierta, mientras que afecciones más complejas requieren cirugía a corazón abierto, a veces realizada por etapas durante meses o años a medida que el paciente crece. Muchos pacientes son diagnosticados y tratados en la infancia, pero un número creciente de adultos con cardiopatía congénita también necesita atención continua o correctiva a medida que defectos que eran leves en la infancia progresan con el tiempo. Los programas de cardiopatías congénitas de la India manejan todo el espectro de estas afecciones, desde cierres sencillos con dispositivos hasta reconstrucciones complejas por etapas, con equipos dedicados tanto para pacientes pediátricos como adultos. Debido a que los planes de tratamiento varían mucho según el defecto, las familias internacionales generalmente comienzan con una evaluación detallada remota o presencial antes de confirmar un cronograma de tratamiento y duración de estancia.",
			},
		],
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
		detailedProcedures: [
			{
				name: 'Reemplazo Total de Rodilla',
				description:
					"El reemplazo total de rodilla, o artroplastia total de rodilla, es un procedimiento quirúrgico que remodela una articulación de rodilla dañada por osteoartritis, artritis reumatoide o desgaste postraumático mediante un implante artificial fabricado en aleación metálica y polietileno de grado médico. El cirujano ortopédico retira el cartílago desgastado y una fina capa de hueso del extremo del fémur y la parte superior de la tibia, y luego ajusta componentes metálicos moldeados sobre estas superficies con un espaciador de plástico entre ellos que recrea un movimiento articular suave; la superficie de la rótula también puede remodelarse según su estado. Generalmente se recomienda una vez que medidas conservadoras como la fisioterapia, el control de peso, la medicación y las inyecciones ya no controlan el dolor ni restauran la movilidad. La cirugía se realiza bajo anestesia raquídea o general y dura aproximadamente entre una y dos horas, y muchos centros utilizan actualmente guía asistida por computadora o robótica para mejorar la alineación del implante. Los hospitales de la India tratan un alto volumen de casos de reemplazo articular cada año y ofrecen tanto técnicas tradicionales como mínimamente invasivas. La recuperación incluye caminar con supervisión dentro de un día tras la cirugía, una hospitalización de varios días y un programa estructurado de fisioterapia durante las semanas siguientes para recuperar fuerza y rango de movimiento.",
			},
			{
				name: 'Reemplazo Total de Cadera',
				description:
					"El reemplazo total de cadera, o artroplastia total de cadera, reemplaza una articulación de cadera desgastada por osteoartritis, necrosis avascular, artritis reumatoide o fractura con un implante artificial de bola y cavidad. Durante la cirugía, el cirujano ortopédico retira la cabeza femoral dañada y remodela la cavidad de la cadera (acetábulo), y luego coloca un vástago metálico o cerámico en el fémur, rematado con un componente esférico que se articula contra un nuevo revestimiento de la cavidad fijado en la pelvis. El abordaje puede ser posterior, anterior o mínimamente invasivo, elegido según la anatomía del paciente y la preferencia del cirujano, y el procedimiento generalmente dura entre una y dos horas bajo anestesia raquídea o general. Generalmente se considera una vez que el dolor de cadera, la rigidez y la movilidad reducida persisten a pesar de la fisioterapia, las precauciones de carga de peso y los analgésicos, y cuando las imágenes confirman una degeneración articular significativa. Muchos centros ortopédicos de la India realizan grandes volúmenes de reemplazos de cadera anualmente y ofrecen opciones de fijación cementada, no cementada e híbrida junto con técnicas robóticas o de navegación por computadora para un posicionamiento preciso del implante. Después de la cirugía, los pacientes generalmente se movilizan con un andador en uno o dos días, permanecen hospitalizados varios días y siguen un programa de rehabilitación estructurado durante las semanas siguientes para restaurar la fuerza y el patrón de marcha.",
			},
			{
				name: 'Artroscopia de Rodilla',
				description:
					"La artroscopia de rodilla es una técnica quirúrgica mínimamente invasiva utilizada para diagnosticar y tratar problemas dentro de la articulación de la rodilla a través de pequeñas incisiones en lugar de un gran corte abierto. El cirujano inserta una cámara delgada de fibra óptica, llamada artroscopio, junto con instrumentos quirúrgicos finos a través de unos pocos portales pequeños alrededor de la rodilla, lo que permite visualizar directamente el cartílago, los ligamentos, el menisco y el revestimiento articular en un monitor. Se utiliza habitualmente para recortar o reparar tejido de menisco desgarrado, extraer fragmentos de cartílago sueltos, alisar superficies de cartílago rugosas, lavar tejido articular inflamado o abordar otras causas estructurales de dolor persistente de rodilla, hinchazón, bloqueo o enganche que no han respondido al descanso, la fisioterapia o la medicación. El procedimiento generalmente se realiza bajo anestesia raquídea, regional o general y dura entre treinta minutos y poco más de una hora según los hallazgos y el tratamiento requerido. Debido a que las incisiones son pequeñas, los pacientes generalmente experimentan menos dolor postoperatorio y un retorno más rápido a la actividad diaria que con la cirugía abierta de rodilla. Los centros ortopédicos de la India realizan rutinariamente artroscopia de rodilla de manera ambulatoria o de estancia corta, y la mayoría de los pacientes caminan con apoyo el mismo día y comienzan fisioterapia guiada poco después para restaurar la función completa de la rodilla.",
			},
			{
				name: 'Reconstrucción Artroscópica del LCA',
				description:
					"La reconstrucción artroscópica del ligamento cruzado anterior (LCA) repara un ligamento cruzado anterior desgarrado, uno de los principales ligamentos estabilizadores de la rodilla que se lesiona con frecuencia durante deportes que involucran giros bruscos, saltos o cambios de dirección. Debido a que un LCA desgarrado no sana de manera confiable por sí solo, los cirujanos lo reconstruyen utilizando un injerto, comúnmente tomado del propio tendón isquiotibial o rotuliano del paciente, u ocasionalmente de tejido donante, que se pasa a través de túneles perforados en el fémur y la tibia y se fija con tornillos o dispositivos de fijación para recrear la posición y función original del ligamento. El procedimiento se realiza artroscópicamente a través de pequeñas incisiones portales utilizando una cámara e instrumentos especializados, evitando la necesidad de una incisión abierta grande, y generalmente dura entre una y dos horas bajo anestesia regional o general. Generalmente se recomienda para pacientes con inestabilidad de rodilla, episodios de fallo o incapacidad para volver al deporte o al trabajo físicamente exigente después de una lesión del LCA. Las unidades de medicina deportiva y ortopedia de la India ofrecen tanto técnicas de injerto de isquiotibiales como rotuliano, junto con colocación de túneles asistida por robótica o navegación. La recuperación implica un programa de rehabilitación estructurado de varios meses con carga de peso progresiva, fortalecimiento y entrenamiento de equilibrio antes de un regreso seguro a la actividad deportiva.",
			},
			{
				name: 'Reconstrucción Artroscópica del LCP',
				description:
					"La reconstrucción artroscópica del ligamento cruzado posterior (LCP) aborda un ligamento cruzado posterior desgarrado, un ligamento estabilizador más fuerte y menos comúnmente lesionado situado detrás del LCA, que típicamente se desgarra por un golpe directo en la parte delantera de la espinilla, como en una lesión por impacto con el tablero durante un accidente de tráfico, o por una caída fuerte sobre una rodilla flexionada. Muchas lesiones parciales del LCP se manejan sin cirugía con férulas y fisioterapia, pero los desgarros completos que causan inestabilidad persistente, o aquellos combinados con otras lesiones de ligamentos, generalmente requieren reconstrucción quirúrgica. El cirujano utiliza instrumentos artroscópicos y una cámara insertada a través de pequeños portales para retirar los restos del ligamento dañado y pasar un injerto de tendón, a menudo tomado del isquiotibial, el tendón rotuliano o una fuente donante, a través de túneles óseos en el fémur y la tibia, fijándolo bajo tensión controlada para restaurar la estabilidad de la rodilla. La operación generalmente dura entre dos y tres horas bajo anestesia regional o general y es técnicamente más exigente que la reconstrucción del LCA debido a la posición y el aporte sanguíneo del ligamento. Los centros ortopédicos y de lesiones deportivas de la India cuentan con cirujanos experimentados que realizan técnicas de reconstrucción de LCP de haz único y doble. La recuperación requiere un programa de rehabilitación más largo y cuidadosamente escalonado en comparación con la cirugía del LCA, con protocolos de férulas y carga gradual para proteger el injerto en cicatrización.",
			},
			{
				name: 'Cirugía de Rotura de Menisco',
				description:
					"La cirugía de rotura de menisco trata el daño en los cojines de cartílago en forma de C dentro de la rodilla que absorben los impactos y estabilizan la articulación entre el fémur y la tibia, lesiones que ocurren comúnmente por movimientos de torsión durante el deporte o por degeneración gradual en adultos mayores. Según la ubicación, el tamaño y el patrón del desgarro, el cirujano realiza uno de dos procedimientos artroscópicos: la reparación de menisco, en la que los bordes desgarrados se suturan para preservar la mayor cantidad posible de cartílago, particularmente en pacientes jóvenes con desgarros en la zona externa bien vascularizada, o la meniscectomía parcial, en la que se recorta la porción dañada e inestable del menisco conservando el tejido sano. Ambos procedimientos se realizan a través de pequeñas incisiones portales utilizando un artroscopio e instrumentos finos, generalmente durando entre treinta y sesenta minutos bajo anestesia raquídea o general. La cirugía generalmente se aconseja cuando el dolor, la hinchazón, el enganche o el bloqueo persisten a pesar del descanso y la fisioterapia, o cuando una resonancia magnética confirma un desgarro reparable o inestable. Las unidades de artroscopia de la India ofrecen rutinariamente tanto técnicas de reparación como de meniscectomía, seleccionando el enfoque que mejor preserve la función de la rodilla a largo plazo. La recuperación después de la meniscectomía generalmente es más rápida, mientras que la reparación requiere un período de rehabilitación más protegido para permitir que el tejido suturado sane.",
			},
			{
				name: 'Cirugía de Andamiaje de Cartílago',
				description:
					"La cirugía de andamiaje de cartílago es una técnica de preservación articular utilizada para tratar áreas de cartílago articular dañado o faltante, el tejido liso que cubre los extremos de los huesos dentro de una articulación, más a menudo en la rodilla tras una lesión, estrés repetitivo o degeneración localizada temprana. Debido a que el cartílago tiene una capacidad limitada para sanar por sí mismo, el procedimiento implica implantar un andamiaje biocompatible, a veces sembrado con las propias células de cartílago del paciente o células derivadas de médula ósea, en el defecto para proporcionar un marco estructural que fomente la formación de nuevo tejido similar al cartílago con el tiempo. Generalmente se realiza artroscópicamente o a través de una pequeña incisión, con el área dañada primero preparada y medida antes de dar forma al andamiaje, fijarlo con pegamento de fibrina o suturas, y dejarlo integrarse con el tejido circundante. Los candidatos suelen ser pacientes más jóvenes y activos con un defecto focal de cartílago y una alineación articular razonablemente preservada, en lugar de artritis generalizada, ya que el objetivo es retrasar o evitar la necesidad de un reemplazo articular. Los centros ortopédicos de la India que ofrecen servicios de medicina regenerativa y deportiva proporcionan varias técnicas de reparación de cartílago con andamiaje y basadas en células, adecuadas al tamaño y profundidad del defecto. La recuperación implica un período de carga de peso protegida y una rehabilitación gradual y estrechamente supervisada para permitir que el nuevo tejido madure.",
			},
			{
				name: 'Estabilización Artroscópica de Hombro',
				description:
					"La estabilización artroscópica de hombro se realiza para corregir un hombro que se disloca o subluxa repetidamente debido a ligamentos y tejido labral estirados, desgarrados o desprendidos que normalmente mantienen la bola de la articulación del hombro de forma segura dentro de su cavidad. La inestabilidad a menudo sigue a una dislocación traumática inicial, frecuentemente durante el deporte o una caída, después de la cual las restricciones de tejido blando de la articulación no sanan lo suficientemente firmes como para prevenir nuevos episodios. Utilizando un artroscopio e instrumentos finos insertados a través de pequeñas incisiones portales alrededor del hombro, el cirujano vuelve a fijar o tensa el labrum y la cápsula desgarrados al borde de la cavidad utilizando anclajes de sutura, restaurando la tensión necesaria para mantener la articulación centrada durante el movimiento. El procedimiento generalmente dura alrededor de una hora y se realiza bajo bloqueo nervioso regional combinado con sedación ligera o anestesia general. Generalmente se recomienda para pacientes con inestabilidad recurrente, un signo de aprehensión positivo en el examen e imágenes que muestran lesión labral o capsular, particularmente en individuos más jóvenes o físicamente activos con alto riesgo de nuevas dislocaciones. Las unidades de hombro y lesiones deportivas de la India realizan rutinariamente esta técnica artroscópica. La recuperación implica un período de inmovilización con cabestrillo seguido de un programa de fisioterapia estructurado para recuperar movimiento y reconstruir fuerza alrededor de la articulación.",
			},
			{
				name: 'Reparación Artroscópica del Manguito Rotador',
				description:
					"La reparación artroscópica del manguito rotador trata un manguito rotador desgarrado, el grupo de cuatro músculos y tendones que estabilizan el hombro y levantan el brazo, que puede desgarrarse repentinamente por una caída o lesión o gradualmente por el desgaste relacionado con la edad y la actividad repetitiva por encima de la cabeza. Los pacientes generalmente presentan dolor de hombro que empeora por la noche, debilidad al levantar o rotar el brazo, y dificultad con tareas por encima de la cabeza que no ha mejorado con el descanso, la fisioterapia o las inyecciones. Durante el procedimiento, el cirujano inserta un artroscopio e instrumentos pequeños a través de unas pocas incisiones portales alrededor del hombro, recorta cualquier tejido inflamado o deshilachado, y vuelve a fijar el borde del tendón desgarrado a su posición original en el húmero utilizando anclajes de sutura, restaurando la tracción del tendón sobre el hueso. La operación generalmente se realiza bajo bloqueo regional con sedación o anestesia general y dura aproximadamente entre una y dos horas según el tamaño y la complejidad del desgarro. Las unidades ortopédicas y de especialidad de hombro de la India ofrecen esta técnica tanto para desgarros parciales como de espesor completo. Después de la cirugía, el brazo se protege en un cabestrillo durante varias semanas mientras el tendón sana, seguido de un programa de fisioterapia gradual que progresa de movimiento pasivo a ejercicios de fortalecimiento activo durante varios meses.",
			},
			{
				name: 'Reparación Artroscópica de Bankart',
				description:
					"La reparación artroscópica de Bankart aborda específicamente una lesión de Bankart, un desgarro del labrum, el anillo de cartílago que profundiza la cavidad del hombro, en el borde anteroinferior de la articulación, una lesión que ocurre comúnmente durante una dislocación traumática del hombro y es una causa principal de inestabilidad recurrente. Sin tratamiento, una lesión de Bankart permite que el hombro siga deslizándose o dislocándose completamente con un estrés relativamente menor, particularmente en pacientes jóvenes y deportistas. A través de pequeñas incisiones portales, el cirujano utiliza un artroscopio para visualizar el labrum desprendido y lo vuelve a fijar al borde óseo de la cavidad utilizando anclajes de sutura colocados a intervalos a lo largo del desgarro, restaurando el efecto de amortiguación labral que ayuda a mantener la cabeza humeral centrada. En casos con pérdida ósea asociada en la cavidad, pueden combinarse procedimientos adicionales de injerto óseo con la reparación. La cirugía generalmente dura alrededor de una hora bajo anestesia regional con sedación o anestesia general. Las unidades de artroscopia de hombro de la India realizan rutinariamente la reparación de Bankart para pacientes con lesión labral confirmada por resonancia magnética o artrografía por TC y antecedentes de dislocación recurrente. El cuidado postoperatorio implica varias semanas de inmovilización con cabestrillo seguidas de un programa de fisioterapia por etapas para restaurar el movimiento, la estabilidad y la fuerza.",
			},
			{
				name: 'Cirugía de Hombro por Ojo de Cerradura (Artroscópica)',
				description:
					"La cirugía de hombro por ojo de cerradura, o artroscópica, es un enfoque mínimamente invasivo utilizado para diagnosticar y tratar una amplia variedad de afecciones del hombro a través de un puñado de pequeñas incisiones en lugar de un gran corte abierto. Se inserta en la articulación una cámara delgada llamada artroscopio para dar al cirujano una vista magnificada y detallada de los tendones, ligamentos, cartílago y revestimiento articular en un monitor, mientras que instrumentos finos pasados a través de portales separados se utilizan para recortar, reparar o reconstruir tejido dañado. Esta técnica se aplica a afecciones que van desde desgarros del manguito rotador e inestabilidad de hombro hasta síndrome de pinzamiento, liberación de hombro congelado y extracción de cuerpos sueltos o espolones óseos, con los pasos específicos dependiendo de lo que se encuentre y trate. Generalmente se ofrece una vez que síntomas como dolor, debilidad, rigidez o movimiento restringido no mejoran con el descanso, la fisioterapia y la medicación. Realizada bajo bloqueo nervioso regional, sedación o anestesia general, las incisiones más pequeñas generalmente resultan en menos dolor postoperatorio, menor riesgo de infección y una recuperación inicial más rápida que la cirugía de hombro abierta tradicional. Los centros ortopédicos de la India con unidades dedicadas de hombro ofrecen esta técnica para la mayoría de los trastornos comunes del hombro. La recuperación aún requiere un programa de fisioterapia estructurado y específico para la afección a fin de recuperar la función completa del hombro durante las semanas o meses siguientes.",
			},
			{
				name: 'Cirugía de Cáncer Óseo',
				description:
					"La cirugía de cáncer óseo se realiza para extirpar tumores malignos que surgen dentro del tejido óseo, como el osteosarcoma, el sarcoma de Ewing o el condrosarcoma, o que se han propagado al hueso desde cáncer en otra parte del cuerpo. La planificación del tratamiento generalmente comienza con imágenes, incluidas radiografías, resonancia magnética, TC y gammagrafías óseas, junto con una biopsia para confirmar el tipo y grado del tumor, tras lo cual un equipo multidisciplinario decide la combinación más apropiada de cirugía, quimioterapia y radiación. Cuando es posible, los cirujanos ahora favorecen la cirugía de preservación de la extremidad, extirpando el tumor junto con un margen de tejido sano y reconstruyendo el hueso y la articulación afectados utilizando una endoprótesis metálica, injerto óseo o una combinación de ambos, preservando la extremidad en lugar de recurrir a la amputación, que se reserva para casos donde el tumor involucra nervios principales, vasos o tejido blando extenso. La cirugía generalmente se realiza bajo anestesia general y puede durar varias horas según el tamaño, la ubicación del tumor y la complejidad de la reconstrucción requerida. Los centros de oncología ortopédica de la India ofrecen técnicas de preservación de la extremidad junto con protocolos de quimioterapia administrados antes y después de la cirugía. La recuperación implica una hospitalización de una a dos semanas seguida de un programa de rehabilitación extendido para recuperar la función, con vigilancia continua para monitorear la recurrencia.",
			},
			{
				name: 'Cirugía de Alargamiento de Extremidades',
				description:
					"La cirugía de alargamiento de extremidades aumenta gradualmente la longitud de un hueso acortado, más a menudo en la pierna, para corregir la discrepancia de longitud de las extremidades causada por afecciones congénitas, lesión de la placa de crecimiento infantil, infección, consolidación viciosa de una fractura o ciertas displasias esqueléticas. El cirujano primero realiza un corte quirúrgico controlado del hueso, llamado osteotomía, sin alterar el suministro sanguíneo circundante, y luego aplica ya sea un marco de fijador externo usado fuera de la extremidad o un clavo de alargamiento interno impulsado magnéticamente colocado dentro del hueso. Durante las semanas siguientes, el dispositivo se ajusta diariamente en pequeños incrementos, generalmente alrededor de un milímetro por día, permitiendo que se forme nuevo hueso gradualmente en el espacio mientras los tejidos blandos, nervios y vasos sanguíneos se estiran junto con él. El período total de tratamiento, incluida la fase de alargamiento y la consolidación ósea posterior, generalmente abarca varios meses y requiere un monitoreo cercano con radiografías periódicas para seguir la cicatrización ósea y ajustar el plan según sea necesario. Los centros de reconstrucción de extremidades de la India ofrecen tanto técnicas de fijador externo como de clavo interno según la cantidad de alargamiento requerida y la preferencia del paciente. La fisioterapia durante todo el proceso ayuda a mantener el movimiento articular y la fuerza muscular, y la mayoría de los pacientes necesitan una estancia prolongada en el país de tratamiento para permitir un monitoreo seguro durante la fase activa de alargamiento.",
			},
			{
				name: 'Cirugía de Pie Zambo',
				description:
					"La cirugía de pie zambo trata el talipes equinovaro congénito, una condición de nacimiento en la que uno o ambos pies están girados hacia adentro y hacia abajo debido a tendones acortados y una alineación anormal de los huesos del pie. La mayoría de los casos ahora se manejan inicialmente con el método Ponseti, un enfoque no quirúrgico que utiliza manipulación suave en serie y enyesado durante varias semanas para corregir gradualmente la posición del pie, a menudo seguido de un procedimiento menor para liberar un tendón de Aquiles tenso. La cirugía se vuelve necesaria cuando la corrección mediante enyesado es incompleta, cuando la deformidad es resistente o recae, o en niños mayores cuyo pie zambo no fue tratado tempranamente, y puede variar desde una liberación o transferencia limitada del tendón hasta procedimientos óseos y articulares más extensos para realinear el pie estructuralmente. La operación específica depende de la edad del niño, la gravedad de la deformidad y qué tejidos contribuyen a la posición anormal. La cirugía se realiza bajo anestesia general, y el pie generalmente se inmoviliza en un yeso después para proteger la corrección mientras sana. Los centros de ortopedia pediátrica de la India manejan el pie zambo tanto mediante protocolos basados en Ponseti como mediante corrección quirúrgica para casos resistentes o no tratados. Generalmente se necesita un seguimiento a largo plazo con férulas y monitoreo a medida que el niño crece.",
			},
			{
				name: 'Tratamiento de Displasia de Cadera',
				description:
					"El tratamiento de la displasia de cadera aborda la displasia del desarrollo de la cadera, una afección en la que la cavidad de la cadera es demasiado poco profunda para cubrir y estabilizar adecuadamente la cabeza del fémur, que va desde una leve laxitud hasta la dislocación completa, y se identifica con mayor frecuencia en la infancia mediante cribado, pero a veces se diagnostica más tarde en la niñez o la edad adulta. En bebés pequeños, el tratamiento generalmente comienza con un arnés de posicionamiento, como el arnés de Pavlik, usado durante varias semanas para guiar suavemente la cadera hacia una posición estable y bien asentada mientras la cavidad se desarrolla normalmente. Cuando la displasia se diagnostica más tarde, es más grave o no responde a la férula, pueden ser necesarias opciones quirúrgicas, que van desde la reducción cerrada o abierta de la articulación de la cadera hasta una osteotomía periacetabular o pélvica que remodela y reposiciona la cavidad para cubrir mejor la cabeza femoral, a veces combinada con una osteotomía femoral. La cirugía se realiza bajo anestesia general y generalmente va seguida de un período de inmovilización con yeso o férula para proteger la corrección. Las unidades de preservación de cadera pediátrica y adulta de la India ofrecen tanto protocolos de férulas para bebés como técnicas de osteotomía reconstructiva para niños mayores y adultos jóvenes. El seguimiento a largo plazo es importante, ya que la displasia no tratada o corregida de manera inadecuada puede provocar artritis de cadera temprana.",
			},
			{
				name: 'Tratamiento de Trastornos Musculoesqueléticos',
				description:
					"El tratamiento de trastornos musculoesqueléticos abarca el diagnóstico y manejo de una amplia gama de afecciones que afectan los huesos, articulaciones, músculos, tendones, ligamentos y nervios que componen el sistema de movimiento del cuerpo, incluyendo artritis, dolor crónico de espalda y cuello, lesiones de tendones y ligamentos, fracturas, deformidades y afecciones degenerativas de la columna. El manejo generalmente comienza con una evaluación clínica e imágenes, como radiografías, resonancia magnética o TC, para identificar la causa subyacente del dolor, la rigidez, la debilidad o el movimiento restringido, tras lo cual un especialista ortopédico recomienda una vía de tratamiento que puede incluir fisioterapia, medicación, inyecciones específicas, férulas o cirugía según la gravedad y naturaleza de la afección. Cuando se requiere cirugía, puede variar desde procedimientos artroscópicos mínimamente invasivos hasta reemplazo articular, fijación espinal o cirugía reconstructiva correctiva, elegida según el diagnóstico específico y los objetivos generales de salud y funcionalidad del paciente. Los centros ortopédicos multiespecialidad de la India reúnen equipos de reemplazo articular, columna, medicina deportiva y fisioterapia para manejar problemas musculoesqueléticos complejos o de larga data bajo un plan coordinado. Debido a que las presentaciones varían ampliamente, una revisión inicial de imágenes e informes clínicos previos ayuda a determinar el enfoque de tratamiento más apropiado antes de que el paciente viaje. Los plazos de recuperación y rehabilitación dependen completamente del trastorno específico tratado y la intervención elegida.",
			},
		],
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
		detailedProcedures: [
			{
				name: 'Tratamiento del Cáncer de Mama',
				description:
					"El tratamiento del cáncer de mama en la India es planificado por un comité tumoral multidisciplinario dedicado que revisa sus informes de mamografía, biopsia y receptores hormonales (ER/PR/HER2) antes de recomendar un curso adaptado al estadio y tipo de tumor. Según el diagnóstico, la atención puede combinar cirugía conservadora de mama (tumorectomía) o mastectomía con biopsia de ganglio centinela, seguida de quimioterapia adyuvante, terapia dirigida (como trastuzumab para enfermedad HER2 positiva), terapia hormonal y radiación para reducir el riesgo de recurrencia. Se ofrecen opciones de reconstrucción, incluida la reconstrucción mamaria inmediata o diferida, para las pacientes que optan por la mastectomía. Los principales centros oncológicos de la India utilizan mamografía digital, biopsia guiada por resonancia magnética y análisis intraoperatorio por sección congelada para planificar una cirugía conservadora que preserve el tejido siempre que el estadio del tumor lo permita. Las pacientes generalmente necesitan una hospitalización breve para la cirugía, con quimioterapia y radiación administradas de forma ambulatoria durante las semanas siguientes — muchas pacientes planifican una estancia más larga en la India para completar un ciclo inicial de tratamiento adyuvante antes de regresar a casa bajo un plan de atención compartida con su oncólogo local. Las segundas opiniones sobre las láminas de biopsia e imágenes se revisan de forma gratuita antes de comprometerse a viajar.",
			},
			{
				name: 'Tratamiento del Cáncer Oral',
				description:
					"El cáncer oral — que surge en la lengua, el revestimiento de la mejilla, las encías, el piso de la boca o los labios — se encuentra entre los cánceres más tratados en la India, donde las unidades de oncología de cabeza y cuello de alto volumen atienden una gran proporción de casos relacionados con el tabaco y la nuez de areca. El tratamiento comienza con una biopsia e imágenes (TC/RM, a veces PET-TC) para estadificar el tumor, seguido de resección quirúrgica con márgenes claros, a menudo combinada con disección cervical para extirpar los ganglios linfáticos en riesgo de propagación. La cirugía reconstructiva microvascular — utilizando colgajos de tejido del antebrazo, el muslo o el peroné — restaura la forma y la función cuando se extirpa una porción significativa de la mandíbula o la lengua. Según la patología, la cirugía va seguida de radiación adyuvante o quimiorradiación para reducir la probabilidad de recurrencia. Un equipo multidisciplinario de cirujanos de cabeza y cuello, oncólogos, prostodoncistas y terapeutas del habla y la deglución gestiona todo el curso de la atención, incluida la rehabilitación del habla y la alimentación después de la cirugía. Los cánceres en etapa temprana detectados antes de la propagación ganglionar tienen un pronóstico sustancialmente mejor, por lo que se anima a los pacientes a enviar los informes de biopsia e imágenes para una opinión del comité tumoral tan pronto como se sospeche un diagnóstico.",
			},
			{
				name: 'Tratamiento del Cáncer de Próstata',
				description:
					"El tratamiento del cáncer de próstata en la India abarca desde la vigilancia activa para tumores de muy bajo riesgo y crecimiento lento hasta la prostatectomía radical asistida por robot, la radioterapia y la terapia hormonal para enfermedad más avanzada. Tras el diagnóstico mediante prueba de PSA, resonancia magnética y biopsia, un uro-oncólogo clasifica el cáncer utilizando la puntuación de Gleason para determinar el enfoque más apropiado. La prostatectomía robótica (da Vinci) está ampliamente disponible en los principales centros urológicos de la India, ofreciendo cirugía con preservación nerviosa que busca conservar la continencia y la función sexual mientras se extirpa la glándula prostática y, cuando es necesario, los ganglios linfáticos circundantes. Para pacientes que no son candidatos quirúrgicos o prefieren una vía no quirúrgica, la radiación de haz externo, la braquiterapia o la IMRT/IGRT pueden administrar radiación altamente dirigida mientras se limita la exposición a los órganos cercanos. La terapia de privación de andrógenos (terapia hormonal) se utiliza junto con la cirugía o la radiación en casos de riesgo intermedio y alto, o sola en enfermedad avanzada. La recuperación tras la cirugía robótica generalmente es más rápida que la cirugía abierta, con la mayoría de los pacientes dados de alta en pocos días y retomando la actividad normal en varias semanas. Su caso es revisado por un comité tumoral antes de finalizar una recomendación.",
			},
			{
				name: 'Tratamiento del Cáncer de Endometrio',
				description:
					"El cáncer de endometrio (revestimiento uterino) es uno de los cánceres ginecológicos más tratables cuando se detecta a tiempo, y las unidades de oncología ginecológica de la India ofrecen estadificación y cirugía integrales para mujeres diagnosticadas en cualquier etapa. La evaluación inicial incluye ecografía transvaginal, biopsia endometrial e imágenes para determinar hasta dónde se ha propagado la enfermedad. El tratamiento estándar es una histerectomía total con extirpación de las trompas de Falopio y los ovarios (salpingooforectomía), generalmente realizada por vía laparoscópica o robótica para reducir la pérdida de sangre, las cicatrices y el tiempo de recuperación en comparación con la cirugía abierta. Durante la misma operación se realiza un muestreo de ganglios linfáticos o una biopsia de ganglio centinela para ayudar a determinar si se necesita tratamiento adicional. Según el grado y el estadio del tumor encontrado durante la cirugía, puede recomendarse radioterapia adyuvante (haz externo o braquiterapia) o quimioterapia para reducir el riesgo de recurrencia. Para mujeres más jóvenes que desean preservar la fertilidad con enfermedad muy temprana y de bajo grado, el tratamiento hormonal no quirúrgico puede ser una opción tras una cuidadosa evaluación. La mayoría de las pacientes sometidas a histerectomía mínimamente invasiva son dadas de alta en dos o tres días y retoman la actividad normal en pocas semanas.",
			},
			{
				name: 'Tratamiento de la Leucemia',
				description:
					"La leucemia — cáncer de las células formadoras de sangre en la médula ósea — se trata en la India mediante equipos dedicados de hemato-oncología con acceso a diagnósticos avanzados, incluida la citometría de flujo, la citogenética y las pruebas moleculares, esenciales para clasificar el subtipo exacto (aguda o crónica, linfocítica o mieloide) y elegir el protocolo adecuado. El tratamiento generalmente comienza con quimioterapia de inducción para llevar la enfermedad a remisión, seguida de terapia de consolidación para eliminar las células leucémicas restantes; algunos subtipos, como la leucemia mieloide crónica, se manejan con terapias orales dirigidas (inhibidores de la tirosina quinasa) en lugar de quimioterapia intensiva. Para casos de alto riesgo o recaída, puede recomendarse un trasplante de médula ósea o células madre, utilizando un donante hermano compatible, un donante no emparentado, o las propias células del paciente. La atención se brinda en unidades hematológicas especializadas con habitaciones de aislamiento inverso, apoyo de banco de sangre y protocolos de control de infecciones adecuados para pacientes inmunocomprometidos durante el tratamiento. Debido a que los protocolos de leucemia se extienden durante meses, muchos pacientes coordinan una fase intensiva inicial en la India con quimioterapia de seguimiento supervisada por su médico de origen, con informes regulares compartidos entre los equipos para mantener el plan de tratamiento en curso.",
			},
			{
				name: 'Tratamiento del Linfoma de Hodgkin',
				description:
					"El linfoma de Hodgkin, un cáncer del sistema linfático marcado por la presencia de células de Reed-Sternberg, tiene una de las tasas de curación más altas entre los cánceres cuando se trata con un régimen de quimioterapia estándar (comúnmente ABVD), y los centros oncológicos de la India siguen protocolos reconocidos internacionalmente para la estadificación y el tratamiento. El diagnóstico se confirma mediante una biopsia de ganglio linfático y se estadifica utilizando imágenes PET-TC para mapear la extensión de la enfermedad por encima y por debajo del diafragma. La mayoría de los pacientes se tratan con un curso de quimioterapia combinada durante varios meses, con la respuesta evaluada mediante exploraciones PET-TC intermedias que ayudan a los oncólogos a decidir si continuar, ajustar o añadir radioterapia para la enfermedad residual. La enfermedad localizada en etapa temprana puede tratarse con un curso de quimioterapia más corto seguido de radiación en el sitio afectado, mientras que la enfermedad en etapa avanzada generalmente necesita un curso de quimioterapia más prolongado por sí solo. Para casos recidivantes o resistentes, en los principales centros está disponible la quimioterapia de rescate seguida de trasplante autólogo de células madre. Los ciclos de quimioterapia se administran de forma ambulatoria siempre que sea posible, y su comité tumoral describirá un cronograma completo ciclo por ciclo antes de viajar.",
			},
			{
				name: 'Quimioterapia',
				description:
					"La quimioterapia utiliza fármacos citotóxicos o dirigidos para destruir las células cancerosas o detener su división, y se utiliza ya sea como tratamiento principal para cánceres de la sangre y linfomas, o como terapia adyuvante/neoadyuvante junto con la cirugía y la radiación para tumores sólidos. Las unidades de oncología ambulatoria de la India están equipadas con sillones de quimioterapia dedicados, personal de enfermería oncológica capacitado y regímenes preparados por farmacia, dosificados según el peso y la superficie corporal, ajustados a protocolos de tratamiento internacionales. Antes de comenzar, su oncólogo revisa los recuentos sanguíneos, la función orgánica e informes previos para seleccionar el régimen, la duración del ciclo y el número de ciclos apropiados para su tipo y estadio de cáncer. La mayoría de los regímenes se administran como infusión ambulatoria de pocas horas, repetida cada dos o tres semanas, con medicación de apoyo (antieméticos, factores de crecimiento) administrada junto para manejar los efectos secundarios. Los análisis de sangre regulares entre ciclos monitorean complicaciones como recuentos sanguíneos bajos, y las dosis se ajustan en consecuencia. Para pacientes que combinan un viaje a la India con una fase inicial de quimioterapia, su equipo oncológico proporciona un protocolo escrito e informes para que un médico local pueda continuar o supervisar de forma segura los ciclos posteriores en casa.",
			},
			{
				name: 'Radioterapia de Intensidad Modulada (IMRT)',
				description:
					"La Radioterapia de Intensidad Modulada (IMRT) es una forma avanzada de radiación de haz externo que moldea y varía la intensidad de cientos de haces de radiación individuales para ajustarse estrechamente a la forma tridimensional de un tumor, administrando una dosis más alta y efectiva al cáncer mientras se preserva el tejido sano y los órganos circundantes. Se utiliza ampliamente en la India para cánceres de cabeza y cuello, próstata, mama, cerebro y ginecológicos, donde estructuras cercanas como la médula espinal, las glándulas salivales o la vejiga necesitan protegerse del daño por radiación. La planificación del tratamiento comienza con una exploración de simulación por TC, que un oncólogo radioterápico y un físico médico utilizan para mapear el tumor y diseñar un plan de haces en software especializado antes de que comience el tratamiento. La IMRT se administra en sesiones ambulatorias diarias y breves, generalmente cinco días a la semana durante varias semanas, con cada sesión durando entre 15 y 20 minutos. Debido a que la técnica reduce la radiación al tejido sano, los pacientes generalmente experimentan menos efectos secundarios que con técnicas de radiación más antiguas, como menos sequedad bucal tras el tratamiento de cabeza y cuello o mejor tolerancia intestinal y vesical tras la radiación pélvica. Los controles de imagen regulares aseguran que el tratamiento se mantenga precisamente dirigido durante todo el curso.",
			},
			{
				name: 'Radioterapia Guiada por Imágenes (IGRT)',
				description:
					"La Radioterapia Guiada por Imágenes (IGRT) combina imágenes avanzadas — como TC de haz cónico o verificación por rayos X — con cada sesión de radiación para confirmar la posición exacta del tumor inmediatamente antes del tratamiento, corrigiendo pequeños cambios diarios causados por la respiración, el llenado de órganos o el posicionamiento del paciente. Esta capa adicional de precisión es especialmente valiosa para tumores que se mueven o desplazan, como los cánceres de pulmón, hígado, próstata y páncreas, permitiendo a los oncólogos radioterápicos administrar de forma segura dosis más altas y efectivas mientras se reduce aún más la exposición a los órganos sanos circundantes. La IGRT generalmente se combina con la IMRT u otras técnicas de radiación conformada en lugar de usarse como terapia independiente, y los centros oncológicos de la India que la ofrecen están equipados con sistemas de imagen integrados en el acelerador lineal, de modo que la verificación ocurre en la misma sesión que el tratamiento, sin visitas adicionales. Un equipo de oncología radioterápica revisa las imágenes en cada sesión, o a intervalos establecidos, y ajusta la posición del paciente antes de administrar el haz. Como con otras formas de radiación externa, las sesiones son breves, indoloras y se administran de forma ambulatoria durante un curso planificado según su tipo y estadio específico de cáncer.",
			},
			{
				name: 'Tratamiento con CyberKnife',
				description:
					"CyberKnife es un sistema de radiocirugía robótica que administra radiación altamente enfocada y de alta dosis a tumores pequeños o de difícil acceso con precisión submilimétrica, utilizando un acelerador lineal montado en un brazo robótico que rastrea la posición del tumor y se ajusta en tiempo real durante el tratamiento — incluidos tumores que se mueven con la respiración — sin necesidad de un marco de cabeza invasivo. Se utiliza comúnmente en la India para tumores cerebrales, tumores espinales, cáncer de pulmón en etapa temprana, tumores hepáticos y casos en los que un tumor se encuentra cerca de estructuras críticas como el tronco encefálico, los nervios ópticos o la médula espinal, lo que hace que la cirugía o radiación convencional sea más riesgosa. Debido a su precisión, CyberKnife puede administrar una dosis de radiación efectiva en tan solo una a cinco sesiones (radioterapia/radiocirugía estereotáctica corporal), en comparación con varias semanas de tratamiento diario con radiación convencional — una ventaja significativa para pacientes que viajan desde el extranjero. La planificación del tratamiento utiliza imágenes de resonancia magnética y TC de alta resolución fusionadas para mapear el tumor con precisión, y cada sesión es completamente no invasiva e indolora, generalmente durando entre 30 y 90 minutos sin necesidad de anestesia. La mayoría de los pacientes regresan a casa el mismo día de cada sesión y retoman las actividades normales inmediatamente después.",
			},
			{
				name: 'Cirugía de Ganglios Linfáticos',
				description:
					"La cirugía de ganglios linfáticos abarca una variedad de procedimientos utilizados en la atención del cáncer para extirpar, muestrear o evaluar los ganglios linfáticos y determinar si el cáncer se ha propagado más allá del tumor original — un factor clave para una estadificación y planificación del tratamiento precisas. El enfoque más común es la biopsia de ganglio centinela, en la que un tinte trazador o marcador radiactivo identifica el o los primeros ganglios a los que un tumor probablemente se propague; si estos están libres de cáncer, a menudo puede evitarse la extirpación más extensa de ganglios, reduciendo el riesgo de complicaciones como el linfedema. Cuando el cáncer se confirma o se sospecha en múltiples ganglios, una disección más completa de ganglios linfáticos — como una disección axilar para el cáncer de mama o una disección cervical para el cáncer de cabeza y cuello — extirpa un grupo más amplio de ganglios de la región afectada. Estos procedimientos generalmente se realizan al mismo tiempo que la cirugía del tumor primario bajo anestesia general, a menudo utilizando técnicas mínimamente invasivas o robóticas para reducir las cicatrices y acelerar la recuperación. Los resultados de patología de los ganglios extirpados guían las decisiones sobre si se necesita quimioterapia o radiación después, y se proporciona fisioterapia u orientación de prevención del linfedema como parte de la atención postoperatoria.",
			},
		],
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
		detailedProcedures: [
			{
				name: 'Rinoplastia (Cirugía de Nariz)',
				description:
					"La rinoplastia es un procedimiento quirúrgico que remodela el hueso y el cartílago de la nariz para cambiar su tamaño, forma o proporción, o para corregir problemas respiratorios causados por un tabique desviado o vías nasales estrechas. El cirujano puede trabajar a través de pequeñas incisiones ocultas dentro de las fosas nasales (técnica cerrada) o una pequeña incisión externa en la base de la nariz (técnica abierta), según la cantidad de corrección necesaria. El cartílago puede recortarse, remodelarse o injertarse desde otra parte de la nariz o la oreja para construir estructura. El procedimiento generalmente se realiza bajo anestesia general o local con sedación y dura entre una y tres horas. Los candidatos incluyen personas incómodas con la forma o el tamaño de su nariz, quienes tienen dificultad para respirar, o pacientes que necesitan una revisión tras una cirugía previa. La recuperación implica hinchazón y hematomas durante una a dos semanas, con una férula durante los primeros días y resultados finales visibles durante varios meses a medida que la hinchazón disminuye. Los pacientes internacionales que viajan a la India para una rinoplastia generalmente planifican una consulta inicial, el procedimiento en sí y una visita de seguimiento antes de retirar la férula, permitiendo que la mayor parte de la cicatrización temprana se supervise en persona.",
			},
			{
				name: 'Lifting Facial',
				description:
					"Un lifting facial, o ritidectomía, es un procedimiento quirúrgico que aborda la piel flácida, los pliegues profundos y la pérdida de definición a lo largo de la parte inferior del rostro, la mandíbula y el cuello que se desarrollan con la edad. A través de incisiones generalmente ubicadas a lo largo del cuero cabelludo y alrededor de la oreja, el cirujano levanta y reposiciona el músculo facial subyacente y el tejido conectivo (la capa SMAS), elimina el exceso de piel y vuelve a drapear la piel restante sobre el nuevo contorno. A menudo se combina con un lifting de cuello o injerto de grasa para abordar cambios relacionados. El procedimiento se realiza bajo anestesia general o local con sedación y generalmente dura entre tres y cinco horas. Los buenos candidatos suelen tener una salud razonablemente buena y expectativas realistas sobre el grado de mejora que puede proporcionar un lifting, ya que aborda la flacidez más que las líneas finas o el daño solar. La recuperación incluye hinchazón, hematomas y tirantez durante una a dos semanas, con las suturas retiradas dentro de ese período y la mayoría de los pacientes retomando la actividad normal en dos a tres semanas. Debido a que el procedimiento requiere un período de seguimiento en persona para verificar la cicatrización y retirar las suturas, los pacientes que viajan a la India para un lifting facial generalmente planifican una estancia de alrededor de dos semanas.",
			},
			{
				name: 'Lifting Facial No Quirúrgico',
				description:
					"Un lifting facial no quirúrgico no es un único procedimiento, sino una combinación de tratamientos inyectables y basados en energía utilizados para levantar y refrescar el rostro sin incisiones ni anestesia general. Según las inquietudes del paciente, un plan de tratamiento puede combinar rellenos dérmicos para restaurar el volumen en las mejillas y las sienes, inyecciones de toxina botulínica para suavizar las líneas dinámicas, y tecnologías de tensado de piel como la radiofrecuencia o el ultrasonido (por ejemplo, HIFU) para estimular el colágeno y firmar la piel flácida. Las sesiones generalmente se realizan en un entorno ambulatorio con crema anestésica tópica, y la mayoría de los tratamientos duran entre treinta minutos y una hora. Hay poco o ningún tiempo de inactividad más allá de enrojecimiento temporal o hinchazón leve, por lo que los pacientes generalmente pueden retomar las actividades normales el mismo día o al día siguiente. Este enfoque es adecuado para pacientes con signos tempranos a moderados de envejecimiento que desean una mejora visible sin cirugía, aunque los resultados son más sutiles y temporales que un lifting quirúrgico, generalmente durando desde varios meses hasta un par de años según los tratamientos utilizados. Debido a que las sesiones son rápidas y repetibles, algunos pacientes combinan un lifting facial no quirúrgico con otros procedimientos durante una sola visita a la India, con tratamientos de mantenimiento planificados para un viaje posterior o a través de un proveedor local.",
			},
			{
				name: 'Lifting Facial con Hilos',
				description:
					"Un lifting facial con hilos es un procedimiento mínimamente invasivo que utiliza hilos quirúrgicos finos y disolubles, a menudo fabricados de polidioxanona (PDO), para levantar la piel flácida y estimular la producción de colágeno sin las incisiones de un lifting facial tradicional. Los hilos, algunos de los cuales tienen pequeños conos o púas, se insertan bajo la piel mediante una aguja fina o cánula y se anclan para reposicionar suavemente el tejido en las mejillas, la mandíbula o la frente antes de recortar los extremos. El procedimiento se realiza bajo anestesia local en un entorno ambulatorio y generalmente dura entre treinta y sesenta minutos. Durante las semanas siguientes, el cuerpo forma colágeno alrededor de los hilos que se disuelven, lo que gradualmente añade una firmeza leve al efecto de elevación inicial. Es adecuado para pacientes con flacidez temprana que aún no están listos para la cirugía, y los resultados son notablemente más modestos y de menor duración, típicamente de doce a dieciocho meses, que un lifting quirúrgico. El tiempo de inactividad es mínimo, con algo de hinchazón, hematomas o una sensación de tirantez durante unos días. Debido a que la recuperación es corta, un lifting con hilos a menudo puede programarse junto con otros tratamientos durante un solo viaje a la India, aunque los pacientes deben discutir el momento con su cirujano si lo combinan con procedimientos más invasivos.",
			},
			{
				name: 'Blefaroplastia (Cirugía de Párpados)',
				description:
					"La blefaroplastia es un procedimiento quirúrgico que elimina o reposiciona el exceso de piel, músculo y grasa alrededor de los párpados superiores o inferiores para abordar la caída, la hinchazón o las bolsas debajo de los ojos. En la cirugía del párpado superior, el cirujano hace una incisión a lo largo del pliegue natural para eliminar el exceso de tejido; en la cirugía del párpado inferior, la incisión puede colocarse justo debajo de la línea de pestañas o dentro del párpado (abordaje transconjuntival) para evitar una cicatriz visible. El procedimiento generalmente se realiza bajo anestesia local con sedación y dura entre una y dos horas según se traten uno o ambos párpados. Los candidatos incluyen personas cuya piel del párpado superior obstruye la visión, aquellas incómodas con ojos de apariencia cansada o hinchados, y pacientes que buscan una apariencia más despierta. La recuperación implica hinchazón y hematomas durante una a dos semanas, con las suturas retiradas en aproximadamente una semana y la mayoría de los pacientes cómodos en público en diez a catorce días usando maquillaje o gafas de sol. Debido a que el tejido del párpado sana relativamente rápido pero aún necesita una revisión de suturas y seguimiento del progreso, los pacientes que viajan a la India para una blefaroplastia generalmente planifican una estancia de diez días a dos semanas para cubrir el procedimiento y el seguimiento temprano.",
			},
			{
				name: 'Cirugía Oculoplástica',
				description:
					"La cirugía oculoplástica es una rama especializada de la cirugía oftálmica y plástica que trata problemas estructurales y funcionales de los párpados, las vías lagrimales, la cavidad ocular y el tejido circundante. Abarca una amplia gama de procedimientos, incluida la reparación de párpados caídos (ptosis) que interfieren con la visión, la corrección de la mala posición del párpado como el ectropión o el entropión, el tratamiento de vías lagrimales bloqueadas, la extirpación de tumores o quistes del párpado con reconstrucción, la reparación de fracturas orbitarias y la reconstrucción de la cavidad tras una lesión ocular o extirpación. Cirujanos formados tanto en oftalmología como en técnicas de cirugía plástica realizan estos procedimientos, que pueden hacerse bajo anestesia local o general según la complejidad y la ubicación. Los candidatos son pacientes con un problema funcional que afecta la visión, la comodidad ocular o el cierre del párpado, así como aquellos que necesitan reconstrucción tras un trauma, extirpación de tumor o cirugía previa. Debido a que muchas de estas afecciones afectan cómo se protege el ojo y qué tan bien puede cerrarse, la evaluación generalmente incluye un examen ocular detallado junto con la evaluación quirúrgica. La recuperación varía ampliamente según el procedimiento, desde unos pocos días para reparaciones menores de párpados hasta varias semanas para la reconstrucción orbitaria, y los centros oculoplásticos con sede en la India comúnmente manejan casos complejos que requieren cirugía por etapas y seguimiento por imágenes.",
			},
			{
				name: 'Inyecciones de Botox',
				description:
					"Botox es la marca más conocida de toxina botulínica tipo A, una proteína purificada que se inyecta en dosis pequeñas y precisas en los músculos faciales para relajar temporalmente las contracciones que causan arrugas dinámicas, como las líneas de expresión entre las cejas, las patas de gallo alrededor de los ojos y las líneas horizontales de la frente. La toxina actúa bloqueando las señales nerviosas al músculo tratado, por lo que la piel sobre él se suaviza mientras la expresión circundante permanece en gran medida natural si la dosis está bien calculada. El tratamiento se realiza en un entorno de clínica con una aguja fina y sin anestesia más allá de una crema anestésica opcional, generalmente durando entre diez y veinte minutos para varios puntos de inyección. Los efectos comienzan dentro de tres a siete días, alcanzan su punto máximo alrededor de las dos semanas, y generalmente duran de tres a cuatro meses antes de que la actividad muscular regrese gradualmente, momento en el cual se necesita un tratamiento repetido para mantener el efecto. El Botox también se utiliza médicamente para afecciones como el exceso de sudoración, la migraña crónica y ciertos trastornos de espasmos musculares. Esencialmente no hay tiempo de inactividad más allá de un leve enrojecimiento o un pequeño hematoma en los sitios de inyección, lo que lo convierte en un complemento común para pacientes que ya visitan la India para otro tratamiento cosmético o médico.",
			},
			{
				name: 'Otoplastia (Cirugía de Orejas)',
				description:
					"La otoplastia es un procedimiento quirúrgico que remodela el cartílago de la oreja externa, más comúnmente para acercar orejas prominentes a la cabeza o para corregir irregularidades en la forma o el tamaño de la oreja presentes desde el nacimiento o causadas por una lesión. El cirujano generalmente hace una incisión detrás de la oreja, y luego marca, dobla o sutura el cartílago en una posición más natural antes de cerrar la incisión para que cualquier cicatriz resultante quede oculta en el pliegue natural. El procedimiento puede realizarse bajo anestesia local con sedación en adultos o anestesia general en niños, y generalmente dura entre una y dos horas para ambas orejas. Es uno de los pocos procedimientos estéticos realizados comúnmente en niños, generalmente una vez que el cartílago de la oreja se ha desarrollado lo suficiente, a menudo para abordar la timidez antes de los años escolares. La recuperación implica un vendaje acolchado en la cabeza durante los primeros días, seguido de una banda más ligera usada por la noche durante varias semanas para proteger la nueva posición mientras sana. La hinchazón y la molestia leve se resuelven en una a dos semanas. Las familias que viajan a la India para la otoplastia de un niño generalmente planifican una estancia corta que cubra la cirugía y el primer cambio de vendaje.",
			},
			{
				name: 'Cirugía de Trasplante Capilar',
				description:
					"La cirugía de trasplante capilar reubica folículos pilosos de un área donante, generalmente la parte posterior o los laterales del cuero cabelludo donde el crecimiento del cabello es naturalmente resistente al adelgazamiento, hacia áreas de calvicie visible. Las dos técnicas principales son el trasplante de unidades foliculares (FUT), donde se extrae una tira de cuero cabelludo y se divide en injertos individuales, y la extracción de unidades foliculares (FUE), donde los folículos se obtienen uno a la vez con una pequeña herramienta de punción, dejando una cicatrización mínima. Los injertos se colocan en pequeñas incisiones receptoras siguiendo el ángulo natural y la densidad del cabello circundante para un resultado de aspecto natural. El procedimiento se realiza bajo anestesia local y, según el número de injertos requeridos, dura aproximadamente de cuatro a ocho horas, a veces distribuidas en dos sesiones. Los candidatos adecuados son hombres y mujeres con pérdida de cabello de patrón y suministro donante adecuado, evaluados previamente por la causa subyacente de la caída. Los cabellos trasplantados generalmente se caen dentro de semanas antes de volver a crecer gradualmente, con un nuevo crecimiento visible durante seis a doce meses. Debido a que la cirugía en sí implica un tiempo de inactividad modesto, los pacientes que viajan a la India a menudo planifican una estancia de aproximadamente una semana para permitir que el cuero cabelludo se asiente antes de volar a casa.",
			},
			{
				name: 'Aumento Mamario',
				description:
					"El aumento mamario es un procedimiento quirúrgico que aumenta el tamaño del busto y cambia su forma utilizando implantes de silicona o solución salina, o en algunos casos grasa propia de la paciente transferida desde otra área del cuerpo. El cirujano coloca el implante a través de una incisión, comúnmente alrededor de la areola, en el pliegue natural bajo el busto, o en la axila, posicionándolo por encima o por debajo del músculo pectoral según la anatomía de la paciente y el resultado deseado. El procedimiento se realiza bajo anestesia general y generalmente dura entre una y dos horas. Las candidatas incluyen mujeres que sienten que el tamaño de su busto es desproporcionado respecto a su complexión, aquellas que desean restaurar el volumen perdido tras el embarazo o un cambio de peso, y pacientes sometidas a reconstrucción. La recuperación implica hinchazón, tirantez y movimiento restringido del brazo durante una a dos semanas, con la mayoría de las pacientes retomando actividad ligera dentro de ese tiempo y ejercicio completo tras cuatro a seis semanas. Los implantes no se consideran dispositivos de por vida y eventualmente pueden necesitar monitoreo o reemplazo. Las pacientes que viajan a la India para un aumento mamario generalmente planifican una estancia de diez a catorce días para que el cirujano revise las incisiones y la cicatrización temprana antes de viajar.",
			},
			{
				name: 'Reducción Mamaria',
				description:
					"La cirugía de reducción mamaria, o mamoplastia de reducción, elimina el exceso de grasa, tejido glandular y piel del busto para reducir su tamaño y peso, y para reposicionar el pezón y la areola más arriba en un busto más pequeño. El procedimiento generalmente se realiza mediante un patrón de incisión en forma de ancla o vertical, con el cirujano remodelando el tejido restante para crear un contorno proporcionado antes de cerrar las incisiones. Se realiza bajo anestesia general y generalmente dura entre dos y cuatro horas. Las candidatas suelen ser pacientes que experimentan síntomas físicos por un busto excesivamente grande, como dolor de cuello, espalda u hombros, irritación de la piel bajo el pliegue mamario, o actividad física restringida, así como aquellas que buscan una mejor proporción con su complexión. La recuperación implica hinchazón, hematomas y molestias durante una a dos semanas, con la mayoría de las pacientes retomando las actividades diarias normales en dos semanas y ejercicio tras cuatro a seis semanas, una vez autorizadas por el cirujano. La sensibilidad en el área del pezón puede alterarse temporal, o menos comúnmente, permanentemente. Debido a que la reducción mamaria a menudo tiene un beneficio funcional documentado junto con el estético, las pacientes que viajan a la India para el procedimiento generalmente organizan una estancia de dos semanas para permitir la retirada de suturas y una revisión de la herida.",
			},
			{
				name: 'Lifting Mamario',
				description:
					"Un lifting mamario, o mastopexia, levanta y remodela senos que se han caído debido al envejecimiento, el embarazo, la lactancia o un cambio de peso, eliminando el exceso de piel y reposicionando el tejido mamario restante y el complejo pezón-areola más arriba en el pecho. Según el grado de caída, el cirujano puede utilizar una incisión más corta alrededor de la areola o una incisión más larga en forma de ancla que se extiende hacia abajo y a lo largo del pliegue mamario. A diferencia del aumento, un lifting no añade volumen, por lo que las pacientes que desean un perfil mamario más lleno y más alto pueden combinar la mastopexia con implantes en la misma operación. El procedimiento se realiza bajo anestesia general y generalmente dura entre dos y tres horas. Las buenas candidatas son pacientes con tejido mamario caído y elasticidad de piel adecuada, con un peso razonablemente estable, ya que un futuro embarazo o un cambio de peso significativo puede afectar los resultados. La recuperación implica hinchazón y movimiento restringido del brazo durante una a dos semanas, con la mayoría de las pacientes retomando actividad no extenuante dentro de ese período y ejercicio completo tras cuatro a seis semanas. Las pacientes que viajan a la India para un lifting mamario generalmente planifican una estancia de alrededor de dos semanas para cubrir la cirugía y la visita de seguimiento para revisar las incisiones.",
			},
			{
				name: 'Liposucción',
				description:
					"La liposucción es un procedimiento quirúrgico de contorno corporal que elimina depósitos localizados de grasa que no han respondido a la dieta y el ejercicio, en áreas como el abdomen, los flancos, los muslos, los brazos o el mentón. A través de pequeñas incisiones, el cirujano inserta una cánula delgada conectada a un dispositivo de succión y la mueve a través de la capa de grasa para descomponer y eliminar las células grasas, con técnicas como la liposucción tumescente, asistida por ultrasonido o asistida por láser utilizadas para facilitar la eliminación de grasa y favorecer la contracción de la piel. El procedimiento se realiza bajo anestesia general o local con sedación, según el área y la extensión del tratamiento, y generalmente dura entre una y tres horas. Los buenos candidatos son personas cercanas a su peso objetivo con buena elasticidad de piel y expectativas realistas, ya que la liposucción es un procedimiento de contorno más que un tratamiento de pérdida de peso. La recuperación implica hinchazón, hematomas y el uso de una prenda de compresión durante varias semanas, con la mayoría de los pacientes retomando actividad ligera dentro de una semana y el contorno final visible durante tres a seis meses a medida que se resuelve la hinchazón. Los pacientes que viajan a la India para la liposucción generalmente planifican una estancia de aproximadamente diez días para permitir el ajuste de la prenda, un seguimiento temprano y el monitoreo de la cicatrización inicial.",
			},
			{
				name: 'Abdominoplastia',
				description:
					"La abdominoplastia elimina el exceso de piel y grasa del abdomen y tensa los músculos abdominales subyacentes, que pueden estirarse o separarse (diástasis de los rectos) tras el embarazo o una pérdida de peso significativa. A través de una incisión horizontal baja en el abdomen, el cirujano repara la capa muscular con suturas internas, elimina el tejido excedente y reposiciona el ombligo antes de cerrar la incisión, a veces combinando el procedimiento con liposucción para un contorno adicional. Se realiza bajo anestesia general y generalmente dura entre dos y cuatro horas. Las candidatas generalmente tienen un peso estable y saludable con piel abdominal flácida o separación muscular que no ha mejorado con el ejercicio, y que no planean futuros embarazos, ya que un embarazo posterior puede revertir la reparación muscular. La recuperación implica varias semanas de actividad restringida, con una prenda de compresión para apoyar la cicatrización, drenajes generalmente retirados dentro de la primera semana, y la mayoría de las pacientes retomando actividad normal no extenuante en cuatro a seis semanas. Debido a que la recuperación de la reparación del músculo abdominal lleva más tiempo que muchos otros procedimientos de contorno corporal, las pacientes que viajan a la India para una abdominoplastia generalmente planifican una estancia de dos a tres semanas para permitir la retirada de drenajes y el monitoreo de la cicatrización antes de volar.",
			},
			{
				name: 'Lifting Brasileño de Glúteos',
				description:
					"Un lifting brasileño de glúteos (BBL) utiliza la propia grasa de la paciente, obtenida mediante liposucción de áreas como el abdomen, los flancos o los muslos, para añadir volumen y forma a los glúteos. La grasa extraída se procesa para separar las células grasas viables antes de inyectarse cuidadosamente en pequeñas cantidades múltiples en diferentes capas del glúteo para crear un contorno más redondeado y lleno, mientras que las áreas donantes también se benefician del contorno de la liposucción. El procedimiento se realiza bajo anestesia general y generalmente dura entre dos y cuatro horas según la cantidad de grasa extraída e injertada. Las candidatas son pacientes con suficiente grasa donante disponible para la extracción y que desean una forma de glúteos más llena sin un implante. Debido a que los injertos de grasa necesitan un suministro sanguíneo estable para sobrevivir, generalmente se pide a las pacientes que eviten sentarse directamente sobre los glúteos durante un período después de la cirugía, utilizando cojines especiales o acostándose boca abajo, y una parte de la grasa injertada se reabsorbe naturalmente durante los meses siguientes. La recuperación implica usar prendas de compresión durante varias semanas y evitar el ejercicio extenuante durante aproximadamente seis semanas. Las pacientes que viajan a la India para un BBL generalmente planifican una estancia de alrededor de dos semanas para permitir la cicatrización temprana y el seguimiento antes de viajar.",
			},
			{
				name: 'Aumento de Glúteos',
				description:
					"El aumento de glúteos incrementa el tamaño y mejora el contorno de los glúteos utilizando implantes de silicona o injerto de grasa, elegido según la grasa donante disponible de la paciente, su anatomía y el resultado deseado. Cuando se utilizan implantes, el cirujano los coloca a través de una pequeña incisión, generalmente dentro del pliegue glúteo, posicionándolos dentro o debajo del músculo glúteo para un resultado estable y de sensación natural. Cuando se prefiere el injerto de grasa, esta se obtiene mediante liposucción de otra área y se inyecta en los glúteos, lo que también tiene el beneficio de contornear el área donante. El aumento basado en implantes se realiza bajo anestesia general y generalmente dura alrededor de dos horas, mientras que los procedimientos de injerto de grasa duran más según el volumen transferido. Las candidatas para implantes suelen ser pacientes con grasa donante limitada, mientras que aquellas con grasa adecuada en otras áreas pueden preferir el injerto para evitar un implante extraño. La recuperación de ambos enfoques requiere evitar la presión directa sobre los glúteos durante varias semanas, con cojines especializados o posiciones de sueño alteradas recomendadas, junto con una prenda de compresión y un regreso gradual al ejercicio durante cuatro a seis semanas. Las pacientes que consideran el aumento de glúteos en la India generalmente discuten tanto las opciones de implante como de injerto de grasa con su cirujano durante la consulta para determinar la mejor opción para su tipo de cuerpo.",
			},
			{
				name: 'Lifting de Brazos',
				description:
					"Un lifting de brazos, o braquioplastia, elimina el exceso de piel y grasa del brazo superior y tensa el tejido subyacente para crear un contorno más suave y tonificado, abordando la piel flácida y colgante que puede desarrollarse tras una pérdida de peso significativa o con el envejecimiento. El cirujano generalmente hace una incisión a lo largo de la parte interna o posterior del brazo superior, extendiéndose desde el codo hacia la axila según la cantidad de piel que deba eliminarse, y puede combinar el procedimiento con liposucción para refinar aún más el contorno. Se realiza bajo anestesia general y generalmente dura alrededor de dos horas. Las candidatas son pacientes con piel flácida y caída en el brazo superior que no ha mejorado con el ejercicio, a menudo tras una pérdida de peso importante, que tienen un peso estable y buena salud general. La recuperación implica usar una prenda de compresión durante varias semanas, con hinchazón y movimiento restringido del brazo durante las primeras una a dos semanas y un regreso gradual a la actividad normal durante cuatro a seis semanas. Debido a que la cicatriz resultante recorre la longitud del brazo interno, se asesora a los pacientes sobre el cuidado de la cicatriz durante la recuperación. Los pacientes que viajan a la India para un lifting de brazos generalmente planifican una estancia de alrededor de dos semanas para permitir la retirada de suturas y el monitoreo de la herida.",
			},
			{
				name: 'Lifting de Muslos',
				description:
					"Un lifting de muslos, o muslo-plastia, elimina el exceso de piel y grasa del muslo interno o externo y tensa el tejido subyacente para crear un contorno más suave, con mayor frecuencia para pacientes que quedan con piel flácida y caída tras una pérdida de peso significativa. Según el área y la cantidad de corrección necesaria, el cirujano puede usar una incisión en el pliegue inguinal para un lifting de muslo interno, o una incisión que se extiende a lo largo del muslo externo para una eliminación de piel más extensa, a veces combinada con liposucción. El procedimiento se realiza bajo anestesia general y generalmente dura entre dos y tres horas. Las candidatas son pacientes con un peso estable y piel del muslo flácida que no ha respondido al ejercicio, y que entienden que el precio de una piel más tensa es una cicatriz visible a lo largo de la línea de incisión. La recuperación implica usar una prenda de compresión, evitar la actividad extenuante y limitar estar de pie o caminar prolongadamente durante las primeras una a dos semanas, con un regreso gradual a la actividad normal durante cuatro a seis semanas. Debido a que las incisiones del lifting de muslos se encuentran en áreas de fricción y movimiento, el cuidado cuidadoso de la herida durante el período de cicatrización temprana es importante. Los pacientes que viajan a la India para un lifting de muslos generalmente planifican una estancia de aproximadamente dos semanas para que el cirujano monitoree la cicatrización.",
			},
			{
				name: 'Labioplastia',
				description:
					"La labioplastia es un procedimiento quirúrgico que reduce o remodela los labios menores (los pliegues internos de la vulva), y con menos frecuencia los labios mayores, para abordar la incomodidad o la inseguridad relacionada con su tamaño o asimetría. Utilizando ya sea una técnica de recorte, que elimina el exceso de tejido a lo largo del borde, o una técnica en cuña, que elimina una sección en forma de v preservando el borde natural, el cirujano remodela el tejido y cierra la incisión con suturas disolubles. El procedimiento generalmente se realiza bajo anestesia local con sedación o anestesia general y dura aproximadamente entre una y dos horas. Las candidatas incluyen pacientes que experimentan incomodidad física por labios agrandados o irregulares, como rozaduras o dolor durante el ejercicio, así como aquellas que buscan un cambio por comodidad personal. La recuperación implica hinchazón y sensibilidad durante una a dos semanas, con las pacientes aconsejadas a evitar el ejercicio extenuante, la ropa ajustada y la actividad sexual durante aproximadamente cuatro a seis semanas mientras el tejido sana completamente. Debido a que el procedimiento es sensible y la recuperación se beneficia de un entorno tranquilo y privado, las pacientes que viajan a la India para una labioplastia a menudo organizan una estancia discreta de aproximadamente diez días a dos semanas para permitir el seguimiento antes de viajar.",
			},
			{
				name: 'Cirugía de Eliminación de Cicatrices',
				description:
					"La cirugía de eliminación de cicatrices abarca varias técnicas quirúrgicas utilizadas para mejorar la apariencia de cicatrices dejadas por lesiones, quemaduras, acné o cirugías previas, ya que ningún método puede borrar completamente una cicatriz, pero muchos pueden hacerla más plana, más estrecha o menos notable. Según el tipo de cicatriz, las opciones incluyen la revisión de cicatrices, donde la cicatriz antigua se extirpa quirúrgicamente y la herida se cierra con una técnica más precisa para fomentar una cicatrización más fina; el injerto de piel o la cirugía de colgajo para áreas más grandes de cicatrización; y la Z-plastia o W-plastia, que reposicionan una cicatriz a lo largo de las líneas naturales de la piel para hacerla menos visualmente obvia. Los casos más simples pueden manejarse con inyecciones de esteroides, resurfacing láser o microneedling en lugar de cirugía. La anestesia utilizada depende del tamaño, la profundidad y la ubicación de la cicatriz, desde anestesia local para una revisión pequeña hasta anestesia general para un injerto. Los candidatos son pacientes con cicatrices que causan restricción funcional, como tirantez que limita el movimiento, o una preocupación visible significativa. La recuperación varía desde días para revisiones menores hasta varias semanas para injertos, con resultados finales visibles durante meses a medida que la nueva cicatriz madura. Los pacientes que viajan a la India para una revisión de cicatrices generalmente tienen su cicatriz evaluada durante la consulta para determinar la técnica más adecuada antes de programar la cirugía.",
			},
		],
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
