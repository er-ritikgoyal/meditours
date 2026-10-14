/**
 * Spanish translations for the remaining homepage-only sections:
 * OurDoctors, OurPartnerHospitals (homepage heading), SupportServices, TravelProcess.
 */

export const esDoctors = {
	badge: 'Nuestro equipo médico',
	title: 'Médicos que',
	highlight: 'cuidan de usted',
	subtitle: 'Especialistas certificados, afiliados a hospitales acreditados, verificados para cada caso que gestionamos.',
	yearsExpLabel: 'años de experiencia',
	reviewsLabel: 'opiniones',
	contactLabel: 'Contactar',
	verifiedLabel: 'Especialista verificado',
	doctors: [
		{
			specialty: 'Cirujano cardíaco',
			qualification: 'MBBS, MS, MCh — Cirugía cardiotorácica',
			languages: ['Inglés', 'Hindi'],
		},
		{
			specialty: 'Cirujano ortopédico',
			qualification: 'MBBS, MS — Ortopedia y reemplazo articular',
			languages: ['Inglés', 'Hindi'],
		},
		{
			specialty: 'Oncólogo',
			qualification: 'MBBS, MD — Oncología médica',
			languages: ['Inglés', 'Hindi', 'Malayalam'],
		},
		{
			specialty: 'Cirujano estético y plástico',
			qualification: 'MD — Cirugía plástica, reconstructiva y estética',
			languages: ['Inglés', 'Hindi'],
		},
		{
			specialty: 'Neurólogo',
			qualification: 'MBBS, DM — Neurología',
			languages: ['Inglés', 'Hindi', 'Tamil'],
		},
		{
			specialty: 'Especialista en fertilidad',
			qualification: 'MD — Endocrinología reproductiva',
			languages: ['Inglés', 'Español'],
		},
	],
};

export const esPartnerHospitalsHome = {
	badge: 'Nuestra red',
	title: 'Nuestros hospitales',
	highlight: 'asociados',
	subtitle: 'Trabajamos únicamente con hospitales acreditados que cumplen los estándares internacionales de seguridad, higiene y resultados clínicos.',
};

export const esSupportServices = {
	badge: 'Apoyo al paciente',
	titleLead: 'Apoyo que le acompaña,',
	titleHighlight: 'dondequiera que esté',
	subtitle: 'Desde el visado hasta la recuperación en casa, nuestros coordinadores le acompañan en cada paso.',
	services: [
		{
			icon: 'passport' as const,
			title: 'Asistencia para visado médico',
			description: 'Nuestros especialistas preparan las cartas de invitación y los documentos para que su visado médico se apruebe sin demoras.',
			theme: 'blue' as const,
		},
		{
			icon: 'video' as const,
			title: 'Teleconsulta por vídeo',
			description: 'Hable cara a cara en línea con su especialista para confirmar el diagnóstico y el plan de tratamiento antes de viajar.',
			theme: 'teal' as const,
		},
		{
			icon: 'translate' as const,
			title: 'Servicios de interpretación',
			description: 'Un intérprete médico certificado está presente en cada consulta y procedimiento, en el idioma con el que se sienta más cómodo.',
			theme: 'green' as const,
		},
		{
			icon: 'opinion' as const,
			title: 'Segunda opinión médica',
			description: 'Obtenga una evaluación independiente de su diagnóstico y opciones de tratamiento de un especialista certificado en el extranjero.',
			theme: 'blue' as const,
		},
		{
			icon: 'care' as const,
			title: 'Coordinación de cuidados posteriores',
			description: 'Su coordinador programa los seguimientos y comparte los informes con su médico tras su regreso a casa.',
			theme: 'teal' as const,
		},
	],
};

export const esTravelProcess = {
	badge: 'Guía paso a paso',
	titleLead: 'El viaje del paciente',
	titleHighlight: 'internacional',
	subtitle: 'Desde su primera consulta hasta su regreso a casa — estamos con usted en cada paso',
	steps: [
		{
			icon: 'document' as const,
			title: 'Envíe los datos médicos del paciente',
			description: 'Comparta sus informes y su consulta — reciba una opinión relevante en 24 horas.',
		},
		{
			icon: 'stethoscope' as const,
			title: 'Reciba una opinión médica y una estimación de costos',
			description: 'Elija libremente entre nuestros mejores hospitales y médicos afiliados.',
		},
		{
			icon: 'idCard' as const,
			title: 'Reciba la invitación para el visado',
			description: 'Nos encargamos de todos los trámites del visado médico en su nombre.',
		},
		{
			icon: 'plane' as const,
			title: 'Planifique su viaje',
			description: 'Hotel, apartamento o pensión organizados cerca del hospital.',
		},
		{
			icon: 'car' as const,
			title: 'Recepción en el aeropuerto',
			description: 'Recepción en el aeropuerto, traslado y tarjeta SIM gratuitos.',
		},
		{
			icon: 'building' as const,
			title: 'Siga su tratamiento',
			description: 'Un intérprete dedicado y un gestor de caso le acompañan durante todo el proceso.',
		},
		{
			icon: 'home' as const,
			title: 'Regreso a casa',
			description: 'Apoyo de seguimiento posterior al tratamiento tras su regreso a casa.',
		},
	],
};
