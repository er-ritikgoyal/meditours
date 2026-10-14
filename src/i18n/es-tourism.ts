/**
 * Spanish translations for the Hotel, Flights, and Tourism Package pages
 * and their supporting components.
 */

export const esHotel = {
	pageHeader: {
		badge: 'Alojamiento y bienestar',
		title: 'Alojamiento cómodo,',
		highlight: 'cerca del tratamiento',
		subtitle:
			'Hoteles previamente verificados y alojamientos aptos para el bienestar, cerca de cada hospital asociado — reservados y gestionados por su coordinador.',
	},
	stats: [
		{ value: 200, suffix: '+', label: 'Alojamientos asociados', decimals: 0 },
		{ value: 4.8, suffix: '', label: 'Calificación media', decimals: 1 },
		{ value: 15, suffix: ' min', label: 'Distancia media al hospital', decimals: 0 },
	],
	tiers: {
		badge: 'Opciones de alojamiento',
		mostPopularLabel: 'Más popular',
		perNightLabel: '/ noche',
		ctaLabel: 'Preguntar por este alojamiento',
		items: [
			{
				name: 'Estancia confortable',
				description: 'Casas de huéspedes y apartamentos con servicios a precios accesibles, a poca distancia de su hospital.',
				features: ['Habitaciones climatizadas con cocina', 'Wi-Fi gratis', 'Limpieza diaria', 'Servicio de transporte al hospital'],
			},
			{
				name: 'Suite premium',
				description: 'Hoteles de 3–4 estrellas aptos para el bienestar, a distancia caminable de nuestros hospitales asociados más grandes.',
				features: [
					'Todo lo incluido en Estancia confortable',
					'Asistencia de llamada a enfermería',
					'Planificación de comidas dietéticas',
					'Habitaciones accesibles para silla de ruedas',
					'Traslado desde el aeropuerto incluido',
				],
			},
			{
				name: 'Villa de recuperación de lujo',
				description: 'Hoteles de 5 estrellas y residencias privadas con asistencia médica en la habitación para total privacidad.',
				features: [
					'Todo lo incluido en Suite premium',
					'Asistencia médica privada en la habitación',
					'Chef personal y personalización de comidas',
					'Servicio de coche con chofer',
					'Conserjería dedicada 24/7',
				],
			},
		],
	},
	amenities: {
		badge: 'Diseñados para el bienestar',
		titleLead: 'Cada alojamiento',
		titleHighlight: 'preparado para pacientes',
		subtitle: 'Estándar en cada categoría de alojamiento, para que nunca tenga que preguntar dos veces.',
		labels: [
			'Wi-Fi gratis',
			'Transporte al hospital',
			'Asistencia de llamada a enfermería',
			'Planificación de comidas dietéticas',
			'Accesible para silla de ruedas',
			'Recepción 24/7',
			'Servicio de lavandería',
			'Aire acondicionado',
		],
	},
	featuredStays: {
		badge: 'Alojamientos asociados',
		titleLead: 'Alojamientos destacados',
		titleHighlight: 'cerca de nuestros mejores hospitales',
		subtitle: 'Una muestra de los alojamientos que nuestros coordinadores reservan con más frecuencia.',
		fromLabel: 'desde',
		perNightLabel: '/noche',
		viewDetailsLabel: 'Ver detalles',
		stays: [
			{ name: 'The Wellness Residency', city: 'Delhi NCR', distance: '0.4 km del Hospital Apollo' },
			{ name: 'Kokilaben Guest Suites', city: 'Mumbai', distance: '0.6 km del hospital asociado' },
			{ name: 'Apollo Comfort Inn', city: 'Chennai', distance: '0.3 km de Apollo Chennai' },
			{ name: 'Narayana Recovery Stays', city: 'Bangalore', distance: '0.5 km de Narayana Health' },
		],
	},
	ctaHeading: '¿No está seguro de qué alojamiento le conviene?',
	ctaBody: 'Cuéntele a su coordinador su presupuesto y necesidades de bienestar — él seleccionará las mejores opciones para su viaje.',
};

export const esFlights = {
	pageHeader: {
		badge: 'Vuele con confianza',
		title: 'Vuelos sin complicaciones,',
		highlight: 'directo a su tratamiento',
		subtitle: 'Desde la reserva de billetes hasta la escolta médica, nuestro departamento de viajes coordina cada paso de su viaje a la India.',
	},
	stats: [
		{ value: 15, suffix: '+', label: 'Aerolíneas asociadas', decimals: 0 },
		{ value: 10000, suffix: '+', label: 'Pacientes transportados', decimals: 0 },
		{ value: 24, suffix: '/7', label: 'Apoyo del departamento de viajes', decimals: 0 },
	],
	services: {
		badge: 'Apoyo de viaje',
		titleLead: 'Servicios de vuelo diseñados',
		titleHighlight: 'en torno a su tratamiento',
		subtitle: 'Desde la primera reserva hasta el aterrizaje de regreso a casa, su coordinador gestiona cada detalle del viaje.',
		ctaLabel: 'Preguntar',
		items: [
			{
				name: 'Asistencia para reserva de vuelos',
				description: 'Nuestro departamento de viajes encuentra y reserva las mejores tarifas entre aerolíneas asociadas, sincronizadas con su cronograma de tratamiento.',
				features: ['Comparación de tarifas entre aerolíneas', 'Programación vinculada al tratamiento', 'Reservas grupales para familias'],
			},
			{
				name: 'Escolta médica y vuelos en camilla',
				description: 'Para pacientes que requieren supervisión médica durante el vuelo, organizamos vuelos con escolta o configurados con camilla.',
				features: ['Enfermero o paramédico a bordo', 'Asientos configurados para camilla', 'Coordinación de oxígeno y equipo'],
			},
			{
				name: 'Boletos para acompañante',
				description: 'Tarifas reducidas para acompañante e itinerarios coordinados, para que un familiar pueda viajar con usted.',
				features: ['Tarifas reducidas para acompañante', 'Asientos y escalas coordinados', 'Gestión conjunta del itinerario'],
			},
			{
				name: 'Visado y documentación de viaje',
				description: 'Apoyo integral para el visado médico, cartas de invitación del hospital y verificación de documentos de viaje.',
				features: ['Carta de invitación para visado médico', 'Lista de verificación y revisión de documentos', 'Asistencia para citas en la embajada'],
			},
		],
	},
	perks: {
		badge: 'Viaje sin complicaciones',
		titleLead: 'Cada vuelo',
		titleHighlight: 'con apoyo integral',
		subtitle: 'Estándar en cada reserva, para que el viaje sea una preocupación menos.',
		labels: [
			'Asistencia con silla de ruedas',
			'Embarque prioritario',
			'Asistencia con oxígeno y equipo',
			'Asistencia con equipaje',
			'Traslado aeropuerto-hospital',
			'Reprogramación flexible',
			'Departamento de viajes 24/7',
			'Apoyo multilingüe',
		],
	},
	routes: {
		badge: 'Rutas populares',
		titleLead: 'Rutas de pacientes',
		titleHighlight: 'reservadas con frecuencia',
		subtitle: 'Una muestra de las rutas internacionales que nuestro departamento de viajes reserva con más frecuencia.',
		fromLabel: 'desde',
		ctaLabel: 'Verificar disponibilidad',
		items: [
			{ originCity: 'Nigeria', destinationCity: 'Delhi NCR' },
			{ originCity: 'Libia', destinationCity: 'Mumbai' },
			{ originCity: 'Dubái', destinationCity: 'Chennai' },
			{ originCity: 'Sudán', destinationCity: 'Bangalore' },
		],
	},
	ctaHeading: '¿No está seguro de su plan de viaje?',
	ctaBody: 'Cuéntele a su coordinador sus fechas de viaje y necesidades médicas — él gestionará la reserva de principio a fin.',
};

export const esTourism = {
	pageHeader: {
		badge: 'Paquete turístico',
		title: 'Recupérese bien,',
		highlight: 'vea algo hermoso',
		subtitle:
			'Paquetes turísticos al ritmo de la recuperación que le permiten explorar la India mientras se cura — planificados en torno a su tratamiento, no en su contra.',
	},
	stats: [
		{ value: 12, suffix: '+', label: 'Paquetes personalizados', decimals: 0 },
		{ value: 4.9, suffix: '', label: 'Calificación de huéspedes', decimals: 1 },
		{ value: 100, suffix: '%', label: 'Al ritmo de la recuperación', decimals: 0 },
	],
	packages: {
		badge: 'Paquetes personalizados',
		titleLead: 'Tours al ritmo de la recuperación',
		titleHighlight: 'por toda la India',
		subtitle: 'Cada itinerario está programado en torno a su tratamiento y recuperación — nunca al revés.',
		ctaLabel: 'Preguntar',
		perPersonLabel: '/ persona',
		fromLabel: 'desde',
		items: [
			{
				name: 'Recuperación en el Triángulo Dorado',
				route: 'Delhi · Agra · Jaipur',
				duration: '5 días',
				description: 'Un viaje suave, al ritmo de la recuperación, por el circuito patrimonial más emblemático de la India, programado en torno a sus días de descanso.',
				highlights: ['Taj Mahal al amanecer', 'Fuerte Amber en auto privado', 'Paradas accesibles para silla de ruedas'],
			},
			{
				name: 'Bienestar en los canales de Kerala',
				route: 'Kochi · Alleppey',
				duration: '4 días',
				description: 'Navegue por los tranquilos canales interiores en una casa flotante privada — una escapada de bienestar de bajo esfuerzo y profunda tranquilidad.',
				highlights: ['Alojamiento privado en casa flotante', 'Sesiones de bienestar ayurvédico', 'Suite de bienestar junto al agua'],
			},
			{
				name: 'Refugio de recuperación en la playa de Goa',
				route: 'Goa Norte y Sur',
				duration: '6 días',
				description: 'Alojamiento de bienestar frente al mar, paseos suaves por la playa, vistas del atardecer y actividades de bajo impacto aprobadas por el médico.',
				highlights: ['Suite de bienestar frente al mar', 'Acceso a fisioterapia en la playa', 'Ritmo diario flexible'],
			},
			{
				name: 'Patrimonio de Mysore y Bangalore',
				route: 'Bangalore · Mysore',
				duration: '3 días',
				description: 'Un viaje patrimonial breve y cómodo para pacientes en recuperación cerca de nuestro hospital asociado en Bangalore.',
				highlights: ['Tour privado del Palacio de Mysore', 'Visita al jardín botánico', 'Itinerario con traslados cortos'],
			},
		],
	},
	inclusions: {
		badge: 'Qué incluye',
		titleLead: 'Cada paquete',
		titleHighlight: 'completamente organizado',
		subtitle: 'Estándar en cada itinerario, para que pueda concentrarse en la recuperación, no en la logística.',
		labels: [
			'Coche privado climatizado',
			'Guía de habla inglesa',
			'Paradas accesibles para silla de ruedas',
			'Itinerario al ritmo de la recuperación',
			'Recogida y traslado al hotel',
			'Experiencias gastronómicas locales',
			'Paradas para fotografías',
			'Conserjería 24/7',
		],
	},
	attractions: {
		badge: 'Atracciones cercanas',
		titleLead: 'Lugares turísticos para agregar',
		titleHighlight: 'a su itinerario',
		subtitle: 'Atracciones de bajo esfuerzo, cuidadosamente seleccionadas, cerca de nuestros hospitales asociados.',
		ctaLabel: 'Agregar al itinerario',
		items: [
			{
				name: 'Taj Mahal',
				city: 'Agra · cerca de Delhi NCR',
				description: 'Una visita breve y apta para silla de ruedas a uno de los monumentos más emblemáticos del mundo.',
			},
			{
				name: 'Marine Drive',
				city: 'Mumbai',
				description: 'Un paseo marítimo suave y plano para el atardecer — una salida favorita de bajo esfuerzo para pacientes en recuperación.',
			},
			{
				name: 'Canales de Alleppey',
				city: 'cerca de Kochi',
				description: 'Un tranquilo crucero privado en casa flotante por los apacibles canales interiores de Kerala.',
			},
			{
				name: 'Palacio de Mysore',
				city: 'cerca de Bangalore',
				description: 'Un imponente tour por un palacio patrimonial, con rutas accesibles y traslados en carrito de golf.',
			},
		],
	},
	ctaHeading: '¿No está seguro de qué tour se adapta a su recuperación?',
	ctaBody: 'Cuéntele a su coordinador su cronograma de tratamiento — él recomendará un itinerario al ritmo adecuado.',
};

export const esCommon = {
	talkToCoordinator: 'Hablar con un coordinador',
};
