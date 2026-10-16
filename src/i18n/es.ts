/**
 * Spanish (es) translation strings — site-wide UI text (nav, footer, hero,
 * common form/button labels, floating widget, insurance modal).
 *
 * Mirrors the structure of fr.ts / ru.ts / bn.ts / ro.ts exactly so Layout.astro can
 * drive all locales from the same rendering logic.
 *
 * Translation source: AI-generated. Recommend a native Spanish speaker
 * reviews this before it's relied on for medical terminology.
 */

export const es = {
	nav: {
		home: 'Inicio',
		destinations: 'Destinos',
		treatments: 'Tratamientos',
		about: 'Sobre nosotros',
		contact: 'Contacto',
		more: 'Más',
		hotels: 'Hoteles',
		flights: 'Vuelos',
		tourismPackage: 'Paquete turístico',
		cta: 'Consulta gratuita',
		checkInsuranceEligibility: 'Verificar cobertura del seguro',
		tagline: 'Su asesor médico',
	},

	footer: {
		description:
			'Conectamos a los pacientes con hospitales acreditados y especialistas certificados en más de 40 países — apoyo integral, desde la primera opinión médica hasta la recuperación.',
		quickLinks: 'Enlaces rápidos',
		home: 'Inicio',
		aboutUs: 'Sobre nosotros',
		destinations: 'Destinos',
		treatments: 'Tratamientos',
		ourDoctors: 'Nuestros médicos',
		contact: 'Contacto',
		popularTreatments: 'Tratamientos populares',
		treatmentNames: {
			cardiacCare: 'Cardiología',
			orthopedics: 'Ortopedia',
			oncology: 'Oncología',
			cosmeticSurgery: 'Cirugía estética',
			fertilityTreatment: 'Tratamiento de fertilidad',
			organTransplant: 'Trasplante de órganos',
			dentalCare: 'Odontología',
			eyeCare: 'Oftalmología',
		},
		getInTouch: 'Póngase en contacto',
		officeAddress: '238 Westend Mall, Janakpuri, Nueva Delhi, India',
		supportHours: 'Disponible 24/7',
		privacyPolicy: 'Política de privacidad',
		termsOfService: 'Términos de servicio',
		sitemap: 'Mapa del sitio',
		cookiePolicy: 'Política de cookies',
		manageCookies: 'Gestionar preferencias de cookies',
		allRightsReserved: 'Todos los derechos reservados.',
		backToTop: 'Volver arriba',
	},

	hero: {
		slides: [
			{
				eyebrow: 'Hospitales acreditados por la JCI',
				title: 'Atención médica de clase mundial,',
				highlight: 'sin esperas ni precios excesivos',
				description:
					'Compare hospitales acreditados y especialistas de más de 40 países, y ahorre hasta un 70% en el tratamiento que necesita.',
				primaryCta: 'Consulta gratuita',
				secondaryCta: 'Explorar destinos',
			},
			{
				eyebrow: 'Especialistas verificados',
				title: 'Hospitales mejor valorados,',
				highlight: 'adaptados a su diagnóstico exacto',
				description:
					'Nuestro comité médico revisa cada caso y le conecta con cirujanos especializados en su afección.',
				primaryCta: 'Encontrar un especialista',
				secondaryCta: 'Cómo funciona',
			},
			{
				eyebrow: 'Apoyo integral',
				title: 'Nosotros nos encargamos del viaje,',
				highlight: 'usted concéntrese en recuperarse',
				description:
					'Vuelos, visados, intérpretes y seguimiento posterior al tratamiento — un coordinador dedicado gestiona cada detalle de su viaje.',
				primaryCta: 'Hablar con un coordinador',
			},
		],
		trust: [
			{ value: '100+', label: 'Hospitales asociados' },
			{ value: '40+', label: 'Países' },
			{ value: '24/7', label: 'Apoyo al paciente' },
			{ value: '10,000+', label: 'Pacientes atendidos' },
		],
		treatmentOptions: [
			'Cardiología',
			'Ortopedia y reemplazo articular',
			'Oncología',
			'Cirugía estética y plástica',
			'Tratamiento de fertilidad',
			'Trasplante de órganos',
			'Otros',
		],
		enquiry: {
			title: 'Obtenga una consulta gratuita',
			subtitle: 'Nuestro equipo médico responde en 24 horas',
			treatmentPlaceholder: 'Buscar...',
			namePlaceholder: 'Nombre completo',
			emailPlaceholder: 'Correo electrónico',
			countryPlaceholder: '---Seleccione el país---',
			phonePlaceholder: 'Número de WhatsApp / teléfono',
			uploadLabel: 'Suba informes médicos (PDF/JPG, opcional)',
			submit: 'Consulta gratuita',
			privacyNote: 'Su información es confidencial',
			successMessage: '¡Gracias! Un coordinador de pacientes se pondrá en contacto con usted pronto.',
		},
	},

	floatingWidget: {
		whatsappLabel: 'WhatsApp',
		whatsappAriaLabel: 'Chatee con nosotros por WhatsApp',
		callbackLabel: 'Solicitar llamada',
		closeLabel: 'Cerrar',
		modalTitle: 'Solicitar llamada',
		modalSubtitle: 'Comparta sus datos y un coordinador de pacientes le llamará pronto.',
		namePlaceholder: 'Nombre completo',
		countryPlaceholder: '---Seleccione el país---',
		phonePlaceholder: 'Número de teléfono / WhatsApp',
		emailPlaceholder: 'Correo electrónico',
		preferredTimePlaceholder: 'Hora preferida para la llamada (opcional)',
		submitLabel: 'Solicitar llamada',
		privacyNote: 'Su información es confidencial',
		successMessage: '¡Gracias! Un coordinador de pacientes le llamará pronto.',
	},

	insuranceModal: {
		closeLabel: 'Cerrar',
		modalTitle: 'Verificar cobertura del seguro',
		modalSubtitle:
			'Comparta sus datos e información del seguro — nuestro coordinador confirmará la cobertura y se pondrá en contacto con usted.',
		patientNamePlaceholder: 'Nombre del paciente',
		patientAgePlaceholder: 'Edad del paciente',
		genderPlaceholder: 'Sexo',
		genderMale: 'Masculino',
		genderFemale: 'Femenino',
		genderOther: 'Otro',
		countryPlaceholder: '---Seleccione el país---',
		phonePlaceholder: 'Número de teléfono*',
		emailPlaceholder: 'Correo electrónico',
		hasInsurancePlaceholder: '---Tengo seguro---',
		yes: 'Sí',
		no: 'No',
		uploadLabel: 'Suba la tarjeta del seguro (opcional — PDF/JPG/PNG)',
		messagePlaceholder: 'Mensaje',
		submitLabel: 'Verificar cobertura',
		successMessage: '¡Gracias! Nuestro equipo revisará la información de su seguro y se pondrá en contacto con usted pronto.',
	},

	common: {
		fullName: 'Nombre completo',
		emailAddress: 'Correo electrónico',
		phoneWhatsapp: 'Teléfono / WhatsApp',
		message: 'Mensaje',
		sendMessage: 'Enviar mensaje',
		country: 'País',
		selectCountryPlaceholder: '---Seleccione el país---',
		learnMore: 'Saber más',
		viewProfile: 'Ver perfil',
		contactUs: 'Contáctenos',
		requestCallback: 'Solicitar llamada',
		checkEligibility: 'Verificar cobertura',
		confidentialNote: 'Su información es confidencial',
	},
	cookieBanner: {
		title: 'Valoramos su privacidad',
		description:
			'Utilizamos cookies para recordar su preferencia de idioma y comprender cómo los visitantes utilizan nuestro sitio, para poder mejorarlo. Puede aceptar todas las cookies, rechazar las no esenciales o personalizar su elección.',
		necessaryLabel: 'Necesarias',
		necessaryDescription: 'Necesarias para que el sitio funcione, como recordar el idioma seleccionado. Siempre activas.',
		analyticsLabel: 'Analítica',
		analyticsDescription: 'Nos ayuda a entender cómo los visitantes usan el sitio para poder mejorarlo. Opcional.',
		acceptAllLabel: 'Aceptar todo',
		rejectLabel: 'Rechazar no esenciales',
		customizeLabel: 'Personalizar',
		savePreferencesLabel: 'Guardar preferencias',
		policyLinkLabel: 'Política de cookies',
		closeLabel: 'Cerrar',
	},
} as const;

export type EsDictionary = typeof es;
