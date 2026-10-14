/**
 * Portuguese translations for the Hotel, Flights, and Tourism Package pages
 * and their supporting components.
 */

export const ptHotel = {
	pageHeader: {
		badge: 'Hospedagem e bem-estar',
		title: 'Hospedagem confortável,',
		highlight: 'perto do tratamento',
		subtitle:
			'Hotéis previamente verificados e hospedagens adequadas para o bem-estar, perto de cada hospital parceiro — reservados e gerenciados pelo seu coordenador.',
	},
	stats: [
		{ value: 200, suffix: '+', label: 'Hospedagens parceiras', decimals: 0 },
		{ value: 4.8, suffix: '', label: 'Avaliação média', decimals: 1 },
		{ value: 15, suffix: ' min', label: 'Distância média até o hospital', decimals: 0 },
	],
	tiers: {
		badge: 'Opções de hospedagem',
		mostPopularLabel: 'Mais popular',
		perNightLabel: '/ noite',
		ctaLabel: 'Perguntar sobre esta hospedagem',
		items: [
			{
				name: 'Estadia confortável',
				description: 'Pousadas e apartamentos com serviços a preços acessíveis, a poucos passos do seu hospital.',
				features: ['Quartos climatizados com kitchenette', 'Wi-Fi grátis', 'Limpeza diária', 'Serviço de transporte ao hospital'],
			},
			{
				name: 'Suíte premium',
				description: 'Hotéis 3–4 estrelas adequados para o bem-estar, a poucos passos de nossos maiores hospitais parceiros.',
				features: [
					'Tudo incluído na Estadia confortável',
					'Assistência de chamada de enfermagem',
					'Planejamento de refeições dietéticas',
					'Quartos acessíveis para cadeira de rodas',
					'Traslado do aeroporto incluído',
				],
			},
			{
				name: 'Vila de recuperação de luxo',
				description: 'Hotéis 5 estrelas e residências privadas com assistência médica no quarto para total privacidade.',
				features: [
					'Tudo incluído na Suíte premium',
					'Assistência médica privada no quarto',
					'Chef pessoal e personalização de refeições',
					'Serviço de carro com motorista',
					'Concierge dedicado 24/7',
				],
			},
		],
	},
	amenities: {
		badge: 'Projetadas para o bem-estar',
		titleLead: 'Cada hospedagem',
		titleHighlight: 'preparada para pacientes',
		subtitle: 'Padrão em cada categoria de hospedagem, para que você nunca precise perguntar duas vezes.',
		labels: [
			'Wi-Fi grátis',
			'Transporte ao hospital',
			'Assistência de chamada de enfermagem',
			'Planejamento de refeições dietéticas',
			'Acessível para cadeira de rodas',
			'Recepção 24/7',
			'Serviço de lavanderia',
			'Ar-condicionado',
		],
	},
	featuredStays: {
		badge: 'Hospedagens parceiras',
		titleLead: 'Hospedagens em destaque',
		titleHighlight: 'perto de nossos melhores hospitais',
		subtitle: 'Uma amostra das hospedagens que nossos coordenadores mais reservam.',
		fromLabel: 'a partir de',
		perNightLabel: '/noite',
		viewDetailsLabel: 'Ver detalhes',
		stays: [
			{ name: 'The Wellness Residency', city: 'Delhi NCR', distance: '0,4 km do Hospital Apollo' },
			{ name: 'Kokilaben Guest Suites', city: 'Mumbai', distance: '0,6 km do hospital parceiro' },
			{ name: 'Apollo Comfort Inn', city: 'Chennai', distance: '0,3 km do Apollo Chennai' },
			{ name: 'Narayana Recovery Stays', city: 'Bangalore', distance: '0,5 km do Narayana Health' },
		],
	},
	ctaHeading: 'Não tem certeza de qual hospedagem é a mais adequada para você?',
	ctaBody: 'Conte ao seu coordenador seu orçamento e necessidades de bem-estar — ele selecionará as melhores opções para sua viagem.',
};

export const ptFlights = {
	pageHeader: {
		badge: 'Voe com confiança',
		title: 'Voos sem complicações,',
		highlight: 'direto para o seu tratamento',
		subtitle: 'Da reserva de passagens à escolta médica, nosso departamento de viagens coordena cada etapa da sua jornada até a Índia.',
	},
	stats: [
		{ value: 15, suffix: '+', label: 'Companhias aéreas parceiras', decimals: 0 },
		{ value: 10000, suffix: '+', label: 'Pacientes transportados', decimals: 0 },
		{ value: 24, suffix: '/7', label: 'Apoio do departamento de viagens', decimals: 0 },
	],
	services: {
		badge: 'Apoio de viagem',
		titleLead: 'Serviços de voo projetados',
		titleHighlight: 'em torno do seu tratamento',
		subtitle: 'Da primeira reserva ao pouso de volta para casa, seu coordenador gerencia cada detalhe da viagem.',
		ctaLabel: 'Perguntar',
		items: [
			{
				name: 'Assistência para reserva de voos',
				description: 'Nosso departamento de viagens encontra e reserva as melhores tarifas entre companhias aéreas parceiras, sincronizadas com seu cronograma de tratamento.',
				features: ['Comparação de tarifas entre companhias aéreas', 'Programação vinculada ao tratamento', 'Reservas em grupo para famílias'],
			},
			{
				name: 'Escolta médica e voos em maca',
				description: 'Para pacientes que necessitam de supervisão médica durante o voo, organizamos voos com escolta ou configurados com maca.',
				features: ['Enfermeiro ou paramédico a bordo', 'Assentos configurados para maca', 'Coordenação de oxigênio e equipamento'],
			},
			{
				name: 'Passagens para acompanhante',
				description: 'Tarifas reduzidas para acompanhante e itinerários coordenados, para que um familiar possa viajar com você.',
				features: ['Tarifas reduzidas para acompanhante', 'Assentos e escalas coordenados', 'Gestão conjunta do itinerário'],
			},
			{
				name: 'Visto e documentação de viagem',
				description: 'Apoio completo para o visto médico, cartas-convite do hospital e verificação de documentos de viagem.',
				features: ['Carta-convite para visto médico', 'Lista de verificação e revisão de documentos', 'Assistência para agendamento na embaixada'],
			},
		],
	},
	perks: {
		badge: 'Viagem sem complicações',
		titleLead: 'Cada voo',
		titleHighlight: 'com apoio completo',
		subtitle: 'Padrão em cada reserva, para que a viagem seja uma preocupação a menos.',
		labels: [
			'Assistência com cadeira de rodas',
			'Embarque prioritário',
			'Assistência com oxigênio e equipamento',
			'Assistência com bagagem',
			'Traslado aeroporto-hospital',
			'Reagendamento flexível',
			'Departamento de viagens 24/7',
			'Apoio multilíngue',
		],
	},
	routes: {
		badge: 'Rotas populares',
		titleLead: 'Rotas de pacientes',
		titleHighlight: 'reservadas com frequência',
		subtitle: 'Uma amostra das rotas internacionais que nosso departamento de viagens mais reserva.',
		fromLabel: 'de',
		ctaLabel: 'Verificar disponibilidade',
		items: [
			{ originCity: 'Nigéria', destinationCity: 'Delhi NCR' },
			{ originCity: 'Líbia', destinationCity: 'Mumbai' },
			{ originCity: 'Dubai', destinationCity: 'Chennai' },
			{ originCity: 'Sudão', destinationCity: 'Bangalore' },
		],
	},
	ctaHeading: 'Não tem certeza do seu plano de viagem?',
	ctaBody: 'Conte ao seu coordenador suas datas de viagem e necessidades médicas — ele gerenciará a reserva do início ao fim.',
};

export const ptTourism = {
	pageHeader: {
		badge: 'Pacote turístico',
		title: 'Recupere-se bem,',
		highlight: 'veja algo lindo',
		subtitle:
			'Pacotes turísticos no ritmo da recuperação que permitem explorar a Índia enquanto você se cura — planejados em torno do seu tratamento, não contra ele.',
	},
	stats: [
		{ value: 12, suffix: '+', label: 'Pacotes personalizados', decimals: 0 },
		{ value: 4.9, suffix: '', label: 'Avaliação dos hóspedes', decimals: 1 },
		{ value: 100, suffix: '%', label: 'No ritmo da recuperação', decimals: 0 },
	],
	packages: {
		badge: 'Pacotes personalizados',
		titleLead: 'Tours no ritmo da recuperação',
		titleHighlight: 'por toda a Índia',
		subtitle: 'Cada itinerário é programado em torno do seu tratamento e recuperação — nunca o contrário.',
		ctaLabel: 'Perguntar',
		perPersonLabel: '/ pessoa',
		fromLabel: 'a partir de',
		items: [
			{
				name: 'Recuperação no Triângulo Dourado',
				route: 'Delhi · Agra · Jaipur',
				duration: '5 dias',
				description: 'Uma viagem suave, no ritmo da recuperação, pelo circuito patrimonial mais icônico da Índia, programada em torno dos seus dias de descanso.',
				highlights: ['Taj Mahal ao amanhecer', 'Forte de Amber em carro particular', 'Paradas acessíveis para cadeira de rodas'],
			},
			{
				name: 'Bem-estar nos canais de Kerala',
				route: 'Kochi · Alleppey',
				duration: '4 dias',
				description: 'Navegue pelos tranquilos canais internos em uma casa flutuante privada — uma escapada de bem-estar de baixo esforço e profunda tranquilidade.',
				highlights: ['Hospedagem privada em casa flutuante', 'Sessões de bem-estar ayurvédico', 'Suíte de bem-estar à beira d’água'],
			},
			{
				name: 'Refúgio de recuperação na praia de Goa',
				route: 'Goa Norte e Sul',
				duration: '6 dias',
				description: 'Hospedagem de bem-estar de frente para o mar, passeios suaves na praia, vistas do pôr do sol e atividades de baixo impacto aprovadas pelo médico.',
				highlights: ['Suíte de bem-estar de frente para o mar', 'Acesso a fisioterapia na praia', 'Ritmo diário flexível'],
			},
			{
				name: 'Patrimônio de Mysore e Bangalore',
				route: 'Bangalore · Mysore',
				duration: '3 dias',
				description: 'Uma viagem patrimonial breve e confortável para pacientes em recuperação perto do nosso hospital parceiro em Bangalore.',
				highlights: ['Tour privado do Palácio de Mysore', 'Visita ao jardim botânico', 'Itinerário com traslados curtos'],
			},
		],
	},
	inclusions: {
		badge: 'O que está incluído',
		titleLead: 'Cada pacote',
		titleHighlight: 'totalmente organizado',
		subtitle: 'Padrão em cada itinerário, para que você possa se concentrar na recuperação, não na logística.',
		labels: [
			'Carro particular climatizado',
			'Guia falante de inglês',
			'Paradas acessíveis para cadeira de rodas',
			'Itinerário no ritmo da recuperação',
			'Busca e traslado ao hotel',
			'Experiências gastronômicas locais',
			'Paradas para fotos',
			'Concierge 24/7',
		],
	},
	attractions: {
		badge: 'Atrações próximas',
		titleLead: 'Pontos turísticos para adicionar',
		titleHighlight: 'ao seu itinerário',
		subtitle: 'Atrações de baixo esforço, cuidadosamente selecionadas, perto de nossos hospitais parceiros.',
		ctaLabel: 'Adicionar ao itinerário',
		items: [
			{
				name: 'Taj Mahal',
				city: 'Agra · perto de Delhi NCR',
				description: 'Uma visita breve e adequada para cadeira de rodas a um dos monumentos mais icônicos do mundo.',
			},
			{
				name: 'Marine Drive',
				city: 'Mumbai',
				description: 'Um calçadão suave e plano para o pôr do sol — um passeio favorito de baixo esforço para pacientes em recuperação.',
			},
			{
				name: 'Canais de Alleppey',
				city: 'perto de Kochi',
				description: 'Um tranquilo cruzeiro privado em casa flutuante pelos calmos canais internos de Kerala.',
			},
			{
				name: 'Palácio de Mysore',
				city: 'perto de Bangalore',
				description: 'Um imponente tour por um palácio patrimonial, com caminhos acessíveis e traslados em carrinho de golfe.',
			},
		],
	},
	ctaHeading: 'Não tem certeza de qual tour se adapta à sua recuperação?',
	ctaBody: 'Conte ao seu coordenador seu cronograma de tratamento — ele recomendará um itinerário no ritmo certo.',
};

export const ptCommon = {
	talkToCoordinator: 'Falar com um coordenador',
};
