/**
 * Spanish translations for page-level chrome on About, Contact, Destinations,
 * and Treatments (list + detail). Deep per-item content lives in
 * es-treatments.ts / es-destinations.ts; this file covers headings, labels,
 * form copy, and other component props for those pages.
 */

export const esAbout = {
	pageHeader: {
		badge: 'Desde el primer día',
		title: 'Quiénes somos,',
		highlight: 'y por qué importa',
		subtitle:
			'Somos un equipo de coordinadores de pacientes, evaluadores médicos y especialistas en logística que creemos que la atención médica de clase mundial no debería depender de dónde vive.',
	},
	story: {
		badge: 'Nuestra historia',
		titleLead: 'Construidos para hacer que la atención médica de clase mundial sea',
		titleHighlight: 'accesible para todos',
		paragraphs: [
			'Alis Pro Med Tour se fundó para cerrar la brecha entre la atención médica de clase mundial y su costo. Creemos que el lugar donde nació no debería determinar si puede permitirse la cirugía que necesita. Desde nuestro inicio, hemos guiado a miles de pacientes — desde la primera opinión médica hasta la recuperación completa — a través de los hospitales más acreditados de la India, ahorrando a las familias sumas que cambian sus vidas, sin comprometer nunca la calidad.',
			'Lo que comenzó como un pequeño equipo de coordinadores de pacientes se ha convertido en una red completa de servicios de conserjería que abarca 45 países, con comités médicos internos, especialistas dedicados en visados y apoyo multilingüe 24/7 — porque navegar por el sistema de salud de un país extranjero nunca debería sentirse como un viaje en solitario.',
		],
		statsLabels: ['Hospitales asociados', 'Países atendidos', 'Apoyo al paciente', 'Pacientes atendidos'],
		valuesTitle: 'Nuestros valores',
		values: [
			{
				title: 'La compasión primero',
				description: 'Cada decisión comienza con lo que es mejor para el paciente frente a nosotros — no con lo que es más rápido o más rentable.',
			},
			{
				title: 'Transparencia total',
				description: 'Precios claros, plazos honestos y sin cargos ocultos. Lo que le cotizamos es lo que paga.',
			},
			{
				title: 'Excelencia clínica',
				description: 'Trabajamos únicamente con hospitales acreditados por la JCI y la NABH y especialistas con trayectoria comprobada.',
			},
			{
				title: 'Siempre responsables',
				description: 'Desde su primer mensaje hasta su última llamada de seguimiento, un único coordinador gestiona su caso de principio a fin.',
			},
		],
	},
	journey: {
		badge: 'Nuestro recorrido',
		titleLead: 'Una década construyendo',
		titleHighlight: 'la confianza de los pacientes',
		subtitle: 'De un pequeño equipo de coordinadores a una red de pacientes en 45 países.',
		milestones: [
			{ title: 'Fundada en Mumbai', description: 'Alis Pro Med Tour se lanza con un puñado de hospitales asociados en Delhi y Mumbai.' },
			{
				title: 'La red de acreditación se expande',
				description: 'Expansión a más de 100 hospitales acreditados por la JCI y la NABH en los principales centros médicos de la India.',
			},
			{
				title: 'Expansión global',
				description: 'Comienza a atender a pacientes de más de 20 países, con apoyo dedicado para visados y viajes.',
			},
			{
				title: 'Hito de 5,000 pacientes',
				description: 'Superamos los 5,000 pacientes internacionales tratados con éxito, a pesar de las interrupciones globales en los viajes.',
			},
			{
				title: 'Lanzamiento del servicio de conserjería 24/7',
				description: 'Se introduce el apoyo multilingüe permanente al paciente y coordinadores de caso dedicados.',
			},
			{
				title: '45 países, más de 12,000 pacientes',
				description: 'Apoyamos a pacientes de 45 países a través de más de 500 hospitales asociados a nivel nacional.',
			},
		],
	},
	testimonials: {
		badge: 'Historias de pacientes',
		title: 'Lo que dicen',
		highlight: 'nuestros pacientes',
		subtitle: 'Resultados reales de pacientes reales que confiaron en nosotros su cuidado.',
		items: [
			{
				quote:
					'Desde mi primer mensaje hasta el día en que regresé a casa recuperado, cada paso fue gestionado con cuidado. El equipo de cardiología en Delhi me dio una segunda vida, y pagué solo una fracción de lo que habría gastado en casa.',
				name: 'James Whitfield',
				countryCode: 'gb',
				country: 'Reino Unido',
				treatment: 'Bypass cardíaco',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'Estaba nerviosa por viajar al extranjero para una cirugía, pero mi coordinadora respondió cada pregunta incluso a las 2 de la madrugada si era necesario. El hospital en Estambul se sentía más como un hotel de cinco estrellas que como una clínica.',
				name: 'Amara Okafor',
				countryCode: 'ng',
				country: 'Nigeria',
				treatment: 'Cirugía estética',
				rating: 5,
				theme: 'teal' as const,
			},
			{
				quote:
					'Ahorré más de 40,000 dólares en la cirugía de columna de mi hija sin comprometer la calidad. El cirujano en Bangkok se formó en Estados Unidos y eso se notó en cada detalle de su cuidado.',
				name: 'Michael Chen',
				countryCode: 'ca',
				country: 'Canadá',
				treatment: 'Ortopedia pediátrica',
				rating: 5,
				theme: 'green' as const,
			},
			{
				quote:
					'Apoyo para el visado, recepción en el aeropuerto, intérprete, hotel cerca del hospital — pensaron en todo para que pudiera concentrarme en mi recuperación completa. No podría haber gestionado este viaje sola.',
				name: 'Sofia Marchetti',
				countryCode: 'it',
				country: 'Italia',
				treatment: 'Tratamiento de fertilidad',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'El comité médico me emparejó con un especialista que trata regularmente mi afección exacta, no solo en general. Esa experiencia marcó toda la diferencia en mi recuperación.',
				name: 'David Okoye',
				countryCode: 'us',
				country: 'Estados Unidos',
				treatment: 'Oncología',
				rating: 4,
				theme: 'teal' as const,
			},
			{
				quote:
					'Las llamadas de seguimiento continuaron durante meses después de regresar a casa. Nunca sentí que la relación terminara en el aeropuerto — realmente les importaba cómo progresaba mi recuperación.',
				name: 'Hana Yamamoto',
				countryCode: 'jp',
				country: 'Japón',
				treatment: 'Reemplazo articular',
				rating: 5,
				theme: 'green' as const,
			},
		],
	},
	faq: {
		badge: '¿Tiene preguntas?',
		title: 'Sobre nosotros —',
		highlight: 'respuestas',
		subtitle: 'Las preguntas que más escuchamos de pacientes que consideran tratarse en el extranjero.',
	},
};

export const esContact = {
	pageHeader: {
		badge: 'Estamos aquí para ayudar',
		title: 'Contacte a',
		highlight: 'nuestro equipo',
		subtitle: '¿Tiene preguntas sobre el tratamiento, el costo o la logística del viaje? Un coordinador de pacientes suele responder en pocas horas.',
	},
	quickOptions: [
		{ title: 'Llámenos', detail: '+91 98217 01155' },
		{ title: 'WhatsApp', detail: 'Chatee con un coordinador' },
		{ title: 'Escríbanos', detail: 'care@alispromeditours.com' },
	],
	form: {
		heading: 'Envíenos un mensaje',
		subheading: 'Comparta algunos detalles y nuestro equipo médico se pondrá en contacto con los próximos pasos.',
		fullName: 'Nombre completo',
		fullNamePlaceholder: 'Su nombre completo',
		emailAddress: 'Correo electrónico',
		emailPlaceholder: 'you@example.com',
		country: 'País',
		selectCountryPlaceholder: '---Seleccione el país---',
		treatmentOfInterest: 'Tratamiento de interés',
		selectTreatmentPlaceholder: 'Seleccione un tratamiento',
		phoneWhatsapp: 'Teléfono / WhatsApp',
		phonePlaceholder: '555 123 4567',
		message: 'Mensaje',
		messagePlaceholder: 'Cuéntenos sobre su afección, cronograma o cualquier pregunta que tenga...',
		medicalReports: 'Informes médicos (opcional)',
		fileHint: 'PDF o JPG, hasta 5MB',
		submit: 'Enviar mensaje',
		successMessage: 'Gracias por contactarnos — un coordinador de pacientes se pondrá en contacto con usted pronto.',
	},
	info: {
		heading: 'Información de contacto',
		officeAddressLabel: 'Dirección de la oficina',
		phoneLabel: 'Teléfono',
		emailLabel: 'Correo electrónico',
		supportHoursLabel: 'Horario de atención',
		supportHoursValue: 'Disponible 24/7',
		coordinatorLabel: 'Coordinador dedicado',
		coordinatorDetail: 'Asignado dentro de las 24 horas posteriores a su primer mensaje',
		noteText: '¿Prefiere hablar primero? Escríbanos por WhatsApp y le devolveremos la llamada en una hora.',
	},
	treatmentOptions: [
		'Cardiología',
		'Ortopedia',
		'Oncología',
		'Cirugía estética y plástica',
		'Tratamiento de fertilidad',
		'Trasplante de órganos',
		'Odontología',
		'Oftalmología',
		'Otros',
	],
};

export const esDestinationsPage = {
	grid: {
		badge: 'Centros médicos en toda la India',
		title: 'Explore los mejores',
		highlight: 'centros médicos de la India',
		subtitle: 'Cada ciudad a continuación alberga hospitales acreditados por la JCI o la NABH, verificados por nuestro comité médico.',
		exploreLabel: 'Explorar destino',
	},
	detail: {
		verifiedBadge: 'Red de socios verificada',
		hospitalsInLabel: 'Hospitales en',
		hospitalsInSubtitleTemplate: (city: string) =>
			`Hospitales acreditados en ${city}, verificados por nuestro comité médico por seguridad, higiene y resultados clínicos.`,
		soonTitleTemplate: (city: string) => `Los perfiles de hospitales para ${city} estarán disponibles pronto`,
		soonBodyTemplate: (city: string) =>
			`Estamos añadiendo hospitales asociados nominados para ${city}. Mientras tanto, comparta su caso con un coordinador y le emparejaremos directamente con un hospital acreditado.`,
		talkToCoordinator: 'Hablar con un coordinador',
		otherHubsTitle: 'Otros centros médicos',
	},
};

export const esTreatmentsPage = {
	grid: {
		badge: 'Nuestras especialidades',
		title: 'Tratamientos en los que',
		highlight: 'nos especializamos',
		subtitle: 'Especialistas certificados en cada especialidad principal, en hospitales acreditados de todo el mundo.',
		searchPlaceholder: 'Buscar tratamientos — p. ej., cardíaco, dental, cirugía estética...',
		searchAriaLabel: 'Buscar tratamientos',
		clearAriaLabel: 'Borrar búsqueda',
		showingCountTemplate: 'Mostrando {visible} de {total} tratamientos',
		noResultsTitle: 'No se encontraron tratamientos',
		noResultsBody: 'Pruebe otro término de búsqueda o explore todas nuestras especialidades arriba.',
		fromPrefix: 'Desde',
		learnMore: 'Saber más',
	},
	costComparison: {
		title: 'Compare los costos de tratamiento a nivel mundial',
		subtitle: 'Obtenga atención médica de clase mundial en la India, ahorrando hasta un 80% en los costos de tratamiento, sin comprometer la calidad.',
		note: 'Todos los precios son promedios aproximados en USD y pueden variar según el hospital, el especialista y la complejidad del caso.',
		scrollHint: 'Deslice a la izquierda para comparar los 5 países, incluida la India',
		mostAffordable: 'Más económico',
		saveTemplate: (pct: number) => `Ahorre ${pct}%`,
		countries: { usa: 'Estados Unidos', uk: 'Reino Unido', germany: 'Alemania', uae: 'Emiratos Árabes Unidos', india: 'India' },
		treatmentNames: {
			'Heart Bypass Surgery': 'Bypass cardíaco',
			'Knee Replacement': 'Reemplazo de rodilla',
			'Hip Replacement': 'Reemplazo de cadera',
			'IVF Treatment': 'Tratamiento de FIV',
			'Dental Implant': 'Implante dental',
			'Spinal Fusion': 'Fusión espinal',
			'Liver Transplant': 'Trasplante de hígado',
			'Kidney Transplant': 'Trasplante de riñón',
			'Cataract Surgery': 'Cirugía de cataratas',
		} as Record<string, string>,
		stats: [
			{ title: 'Ahorre hasta un 80%', description: 'En comparación con los países occidentales' },
			{ title: 'Hospitales de clase mundial', description: 'Acreditados por la JCI y la NABH' },
			{ title: 'Especialistas experimentados', description: 'Médicos reconocidos a nivel mundial' },
		],
	},
	detail: {
		savingsBadgeTemplate: (pct: number) => `Ahorre hasta un ${pct}%`,
		overviewHeading: 'Descripción general',
		proceduresHeading: 'Procedimientos que ofrecemos',
		whyChooseTemplate: (name: string) => `Por qué elegir la India para ${name}`,
		startingPriceLabel: 'Precio inicial',
		avgSavingsLabel: 'Ahorro promedio',
		partnerHospitalsLabel: 'Hospitales asociados',
		packageHeading: 'Costo del paquete y estancia hospitalaria',
		sampleBadgeTemplate: (procedure: string) => `Paquete de ejemplo: ${procedure}`,
		packageIntroTemplate: (priceHtml: string, daysHtml: string) =>
			`El paquete comienza desde ${priceHtml} — planifique aproximadamente ${daysHtml} en la India, desde la llegada hasta el alta y el seguimiento.`,
		patientStayLabel: 'Estancia del paciente',
		donorStayLabel: 'Estancia del donante',
		outpatientText: 'Procedimiento ambulatorio / el mismo día',
		daysTotalTemplate: (total: number, icu: number, room: number) =>
			`${total} días en total — ${icu} en la UCI + ${room} en habitación`,
		tableHeaders: { country: 'País', cost: 'Costo estimado', waitTime: 'Tiempo de espera', successRate: 'Tasa de éxito' },
		inclusionsHeading: 'Qué incluye el paquete',
		exclusionsHeading: 'Qué no incluye el paquete',
		packageNoteTemplate: (procedure: string) =>
			`Cada caso es diferente — las cifras anteriores son puntos de partida orientativos para ${procedure}. Comparta sus informes médicos para obtener una cotización personalizada y detallada.`,
		ctaHeadingTemplate: (name: string) => `¿Listo para comenzar con ${name}?`,
		ctaBody: 'Comparta sus informes médicos y reciba un plan de tratamiento personalizado en 24 horas.',
		getFreeQuote: 'Obtener consulta gratuita',
		browseAll: 'Ver todos los tratamientos',
		otherTreatmentsHeading: 'Otros tratamientos',
	},
	faq: {
		badge: 'Preguntas frecuentes',
		highlight: 'Preguntas frecuentes',
		subtitleTemplate: (procedure: string) => `Preguntas frecuentes sobre ${procedure} y el tratamiento en la India.`,
	},
};

export const esDoctorsPage = {
	listing: {
		pageHeaderBadge: 'Nuestro equipo médico',
		pageHeaderTitle: 'Médicos que',
		pageHeaderHighlight: 'cuidan de usted',
		pageHeaderSubtitle:
			'Cada especialista de nuestra red está certificado, afiliado a un hospital acreditado por JCI o NABH, y verificado por nuestro comité médico antes de asignarlo a un caso.',
		gridBadge: 'Nuestro equipo médico',
		gridTitle: 'Conozca a nuestros',
		gridHighlight: 'especialistas',
		gridSubtitle: 'Especialistas certificados, afiliados a hospitales acreditados, verificados para cada caso que atendemos.',
	},
	card: {
		yearsExpLabel: 'Años exp.',
		reviewsLabel: 'Reseñas',
		contactLabel: 'Ver perfil',
		verifiedLabel: 'Especialista verificado',
	},
	detail: {
		home: 'Inicio',
		ourDoctors: 'Nuestros médicos',
		photoLabel: 'Foto',
		verifiedSpecialist: 'Especialista verificado',
		reviewsSuffix: 'reseñas',
		yearsExperienceSuffix: 'años de experiencia',
		bookAppointment: 'Reservar una cita',
		videoConsultation: 'Consulta por video',
		tabs: {
			about: 'Sobre el médico',
			specializations: 'Especializaciones',
			qualifications: 'Cualificaciones',
			experience: 'Experiencia',
			awards: 'Premios',
			memberships: 'Membresías',
		},
		aboutPrefix: 'Sobre',
		patientReviews: 'Reseñas de pacientes',
		otherSpecialists: 'Otros especialistas',
		bookConsultation: 'Reservar una consulta',
		sendCaseTemplate: (name: string) => `Envíe su caso al equipo de coordinación de ${name}`,
		whatsappMessageTemplate: (name: string) => `Hola, me gustaría reservar una consulta con ${name}.`,
	},
};
