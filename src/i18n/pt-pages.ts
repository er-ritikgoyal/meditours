/**
 * Portuguese translations for page-level chrome on About, Contact, Destinations,
 * and Treatments (list + detail). Deep per-item content lives in
 * pt-treatments.ts / pt-destinations.ts; this file covers headings, labels,
 * form copy, and other component props for those pages.
 */

export const ptAbout = {
	pageHeader: {
		badge: 'Desde o primeiro dia',
		title: 'Quem somos,',
		highlight: 'e por que isso importa',
		subtitle:
			'Somos uma equipe de coordenadores de pacientes, avaliadores médicos e especialistas em logística que acreditam que cuidados médicos de classe mundial não deveriam depender de onde você mora.',
	},
	story: {
		badge: 'Nossa história',
		titleLead: 'Construídos para tornar os cuidados médicos de classe mundial',
		titleHighlight: 'acessíveis a todos',
		paragraphs: [
			'A Alis Pro Med Tour foi fundada para fechar a lacuna entre cuidados médicos de classe mundial e seu custo. Acreditamos que o lugar onde você nasceu não deveria determinar se você pode pagar pela cirurgia de que precisa. Desde nossa fundação, guiamos milhares de pacientes — da primeira opinião médica até a recuperação completa — pelos hospitais mais credenciados da Índia, economizando para as famílias somas que mudam vidas, sem nunca comprometer a qualidade.',
			'O que começou como uma pequena equipe de coordenadores de pacientes se tornou uma rede completa de serviços de concierge que abrange 45 países, com comitês médicos internos, especialistas dedicados em vistos e apoio multilíngue 24/7 — porque navegar pelo sistema de saúde de um país estrangeiro nunca deveria parecer uma jornada solitária.',
		],
		statsLabels: ['Hospitais parceiros', 'Países atendidos', 'Apoio ao paciente', 'Pacientes atendidos'],
		valuesTitle: 'Nossos valores',
		values: [
			{
				title: 'Compaixão em primeiro lugar',
				description: 'Cada decisão começa com o que é melhor para o paciente à nossa frente — não com o que é mais rápido ou mais lucrativo.',
			},
			{
				title: 'Transparência total',
				description: 'Preços claros, prazos honestos e sem taxas ocultas. O que orçamos é o que você paga.',
			},
			{
				title: 'Excelência clínica',
				description: 'Trabalhamos apenas com hospitais credenciados pela JCI e pela NABH e especialistas com histórico comprovado.',
			},
			{
				title: 'Sempre responsáveis',
				description: 'Da sua primeira mensagem até sua última ligação de acompanhamento, um único coordenador gerencia seu caso do início ao fim.',
			},
		],
	},
	journey: {
		badge: 'Nossa trajetória',
		titleLead: 'Uma década construindo',
		titleHighlight: 'a confiança dos pacientes',
		subtitle: 'De uma pequena equipe de coordenadores a uma rede de pacientes em 45 países.',
		milestones: [
			{ title: 'Fundada em Mumbai', description: 'A Alis Pro Med Tour é lançada com um punhado de hospitais parceiros em Delhi e Mumbai.' },
			{
				title: 'A rede de credenciamento se expande',
				description: 'Expansão para mais de 100 hospitais credenciados pela JCI e pela NABH nos principais centros médicos da Índia.',
			},
			{
				title: 'Expansão global',
				description: 'Começa a atender pacientes de mais de 20 países, com apoio dedicado para vistos e viagens.',
			},
			{
				title: 'Marco de 5.000 pacientes',
				description: 'Ultrapassamos 5.000 pacientes internacionais tratados com sucesso, apesar das interrupções globais de viagem.',
			},
			{
				title: 'Lançamento do serviço de concierge 24/7',
				description: 'É introduzido o apoio multilíngue permanente ao paciente e coordenadores de caso dedicados.',
			},
			{
				title: '45 países, mais de 12.000 pacientes',
				description: 'Apoiamos pacientes de 45 países por meio de mais de 500 hospitais parceiros em todo o país.',
			},
		],
	},
	testimonials: {
		badge: 'Histórias de pacientes',
		title: 'O que dizem',
		highlight: 'nossos pacientes',
		subtitle: 'Resultados reais de pacientes reais que confiaram seus cuidados a nós.',
		items: [
			{
				quote:
					'Desde minha primeira mensagem até o dia em que voltei para casa recuperado, cada etapa foi gerenciada com cuidado. A equipe de cardiologia em Delhi me deu uma segunda vida, e paguei apenas uma fração do que teria gasto em casa.',
				name: 'James Whitfield',
				countryCode: 'gb',
				country: 'Reino Unido',
				treatment: 'Bypass cardíaco',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'Eu estava nervosa por viajar para o exterior para uma cirurgia, mas minha coordenadora respondeu a cada pergunta, mesmo às 2 da manhã, se necessário. O hospital em Istambul parecia mais um hotel cinco estrelas do que uma clínica.',
				name: 'Amara Okafor',
				countryCode: 'ng',
				country: 'Nigéria',
				treatment: 'Cirurgia estética',
				rating: 5,
				theme: 'teal' as const,
			},
			{
				quote:
					'Economizei mais de 40.000 dólares na cirurgia de coluna da minha filha sem comprometer a qualidade. O cirurgião em Bangkok se formou nos Estados Unidos e isso ficou evidente em cada detalhe do cuidado dela.',
				name: 'Michael Chen',
				countryCode: 'ca',
				country: 'Canadá',
				treatment: 'Ortopedia pediátrica',
				rating: 5,
				theme: 'green' as const,
			},
			{
				quote:
					'Apoio para visto, recepção no aeroporto, intérprete, hotel perto do hospital — eles pensaram em tudo para que eu pudesse me concentrar em minha recuperação completa. Eu não conseguiria gerenciar essa viagem sozinha.',
				name: 'Sofia Marchetti',
				countryCode: 'it',
				country: 'Itália',
				treatment: 'Tratamento de fertilidade',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'O comitê médico me combinou com um especialista que trata regularmente minha condição exata, não apenas de forma geral. Essa expertise fez toda a diferença na minha recuperação.',
				name: 'David Okoye',
				countryCode: 'us',
				country: 'Estados Unidos',
				treatment: 'Oncologia',
				rating: 4,
				theme: 'teal' as const,
			},
			{
				quote:
					'As ligações de acompanhamento continuaram por meses depois que voltei para casa. Nunca senti que o relacionamento terminou no aeroporto — eles realmente se importavam com o progresso da minha recuperação.',
				name: 'Hana Yamamoto',
				countryCode: 'jp',
				country: 'Japão',
				treatment: 'Substituição articular',
				rating: 5,
				theme: 'green' as const,
			},
		],
	},
	faq: {
		badge: 'Tem dúvidas?',
		title: 'Sobre nós —',
		highlight: 'respostas',
		subtitle: 'As perguntas que mais ouvimos de pacientes que consideram se tratar no exterior.',
	},
};

export const ptContact = {
	pageHeader: {
		badge: 'Estamos aqui para ajudar',
		title: 'Entre em contato com',
		highlight: 'nossa equipe',
		subtitle: 'Tem dúvidas sobre tratamento, custo ou logística de viagem? Um coordenador de pacientes geralmente responde em poucas horas.',
	},
	quickOptions: [
		{ title: 'Ligue para nós', detail: '+91 98217 01155' },
		{ title: 'WhatsApp', detail: 'Converse com um coordenador' },
		{ title: 'Escreva para nós', detail: 'care@alispromeditours.com' },
	],
	form: {
		heading: 'Envie-nos uma mensagem',
		subheading: 'Compartilhe alguns detalhes e nossa equipe médica entrará em contato com os próximos passos.',
		fullName: 'Nome completo',
		fullNamePlaceholder: 'Seu nome completo',
		emailAddress: 'Endereço de e-mail',
		emailPlaceholder: 'you@example.com',
		country: 'País',
		selectCountryPlaceholder: '---Selecione o país---',
		treatmentOfInterest: 'Tratamento de interesse',
		selectTreatmentPlaceholder: 'Selecione um tratamento',
		phoneWhatsapp: 'Telefone / WhatsApp',
		phonePlaceholder: '555 123 4567',
		message: 'Mensagem',
		messagePlaceholder: 'Conte-nos sobre sua condição, cronograma ou qualquer dúvida que tenha...',
		medicalReports: 'Relatórios médicos (opcional)',
		fileHint: 'PDF ou JPG, até 5MB',
		submit: 'Enviar mensagem',
		successMessage: 'Obrigado por entrar em contato — um coordenador de pacientes entrará em contato com você em breve.',
	},
	info: {
		heading: 'Informações de contato',
		officeAddressLabel: 'Endereço do escritório',
		phoneLabel: 'Telefone',
		emailLabel: 'E-mail',
		supportHoursLabel: 'Horário de atendimento',
		supportHoursValue: 'Disponível 24/7',
		coordinatorLabel: 'Coordenador dedicado',
		coordinatorDetail: 'Designado dentro de 24 horas após sua primeira mensagem',
		noteText: 'Prefere falar primeiro? Escreva-nos no WhatsApp e retornaremos a ligação em uma hora.',
	},
	treatmentOptions: [
		'Cardiologia',
		'Ortopedia',
		'Oncologia',
		'Cirurgia estética e plástica',
		'Tratamento de fertilidade',
		'Transplante de órgãos',
		'Odontologia',
		'Oftalmologia',
		'Outros',
	],
};

export const ptDestinationsPage = {
	grid: {
		badge: 'Centros médicos em toda a Índia',
		title: 'Explore os melhores',
		highlight: 'centros médicos da Índia',
		subtitle: 'Cada cidade abaixo abriga hospitais credenciados pela JCI ou pela NABH, verificados por nosso comitê médico.',
		exploreLabel: 'Explorar destino',
	},
	detail: {
		verifiedBadge: 'Rede de parceiros verificada',
		hospitalsInLabel: 'Hospitais em',
		hospitalsInSubtitleTemplate: (city: string) =>
			`Hospitais credenciados em ${city}, verificados por nosso comitê médico quanto a segurança, higiene e resultados clínicos.`,
		soonTitleTemplate: (city: string) => `Perfis de hospitais para ${city} estarão disponíveis em breve`,
		soonBodyTemplate: (city: string) =>
			`Estamos adicionando hospitais parceiros indicados para ${city}. Enquanto isso, compartilhe seu caso com um coordenador e o conectaremos diretamente a um hospital credenciado.`,
		talkToCoordinator: 'Falar com um coordenador',
		otherHubsTitle: 'Outros centros médicos',
	},
};

export const ptTreatmentsPage = {
	grid: {
		badge: 'Nossas especialidades',
		title: 'Tratamentos nos quais',
		highlight: 'somos especializados',
		subtitle: 'Especialistas certificados em cada especialidade principal, em hospitais credenciados em todo o mundo.',
		searchPlaceholder: 'Pesquisar tratamentos — ex.: cardíaco, dental, cirurgia estética...',
		searchAriaLabel: 'Pesquisar tratamentos',
		clearAriaLabel: 'Limpar pesquisa',
		showingCountTemplate: 'Mostrando {visible} de {total} tratamentos',
		noResultsTitle: 'Nenhum tratamento encontrado',
		noResultsBody: 'Tente outro termo de pesquisa ou explore todas as nossas especialidades acima.',
		fromPrefix: 'A partir de',
		learnMore: 'Saiba mais',
	},
	costComparison: {
		title: 'Compare os custos de tratamento em todo o mundo',
		subtitle: 'Obtenha cuidados médicos de classe mundial na Índia, economizando até 80% nos custos de tratamento, sem comprometer a qualidade.',
		note: 'Todos os preços são médias aproximadas em USD e podem variar de acordo com o hospital, o especialista e a complexidade do caso.',
		scrollHint: 'Deslize para a esquerda para comparar todos os 5 países, incluindo a Índia',
		mostAffordable: 'Mais acessível',
		saveTemplate: (pct: number) => `Economize ${pct}%`,
		countries: { usa: 'Estados Unidos', uk: 'Reino Unido', germany: 'Alemanha', uae: 'Emirados Árabes Unidos', india: 'Índia' },
		treatmentNames: {
			'Heart Bypass Surgery': 'Bypass cardíaco',
			'Knee Replacement': 'Substituição de joelho',
			'Hip Replacement': 'Substituição de quadril',
			'IVF Treatment': 'Tratamento de FIV',
			'Dental Implant': 'Implante dentário',
			'Spinal Fusion': 'Fusão espinhal',
			'Liver Transplant': 'Transplante de fígado',
			'Kidney Transplant': 'Transplante de rim',
			'Cataract Surgery': 'Cirurgia de catarata',
		} as Record<string, string>,
		stats: [
			{ title: 'Economize até 80%', description: 'Em comparação com os países ocidentais' },
			{ title: 'Hospitais de classe mundial', description: 'Credenciados pela JCI e pela NABH' },
			{ title: 'Especialistas experientes', description: 'Médicos reconhecidos mundialmente' },
		],
	},
	detail: {
		savingsBadgeTemplate: (pct: number) => `Economize até ${pct}%`,
		overviewHeading: 'Visão geral',
		proceduresHeading: 'Procedimentos que oferecemos',
		whyChooseTemplate: (name: string) => `Por que escolher a Índia para ${name}`,
		startingPriceLabel: 'Preço inicial',
		avgSavingsLabel: 'Economia média',
		partnerHospitalsLabel: 'Hospitais parceiros',
		packageHeading: 'Custo do pacote e estadia hospitalar',
		sampleBadgeTemplate: (procedure: string) => `Pacote de exemplo: ${procedure}`,
		packageIntroTemplate: (priceHtml: string, daysHtml: string) =>
			`O pacote começa em ${priceHtml} — planeje cerca de ${daysHtml} na Índia, da chegada até a alta e o acompanhamento.`,
		patientStayLabel: 'Estadia do paciente',
		donorStayLabel: 'Estadia do doador',
		outpatientText: 'Procedimento ambulatorial / no mesmo dia',
		daysTotalTemplate: (total: number, icu: number, room: number) =>
			`${total} dias no total — ${icu} na UTI + ${room} no quarto`,
		tableHeaders: { country: 'País', cost: 'Custo estimado', waitTime: 'Tempo de espera', successRate: 'Taxa de sucesso' },
		inclusionsHeading: 'O que o pacote inclui',
		exclusionsHeading: 'O que o pacote não inclui',
		packageNoteTemplate: (procedure: string) =>
			`Cada caso é diferente — os números acima são pontos de partida orientativos para ${procedure}. Compartilhe seus relatórios médicos para obter um orçamento personalizado e detalhado.`,
		ctaHeadingTemplate: (name: string) => `Pronto para começar com ${name}?`,
		ctaBody: 'Compartilhe seus relatórios médicos e receba um plano de tratamento personalizado em 24 horas.',
		getFreeQuote: 'Obter consulta gratuita',
		browseAll: 'Ver todos os tratamentos',
		otherTreatmentsHeading: 'Outros tratamentos',
	},
	faq: {
		badge: 'Perguntas frequentes',
		highlight: 'Perguntas frequentes',
		subtitleTemplate: (procedure: string) => `Perguntas frequentes sobre ${procedure} e o tratamento na Índia.`,
	},
};

export const ptDoctorsPage = {
	listing: {
		pageHeaderBadge: 'Nossa equipa médica',
		pageHeaderTitle: 'Médicos que',
		pageHeaderHighlight: 'cuidam de si',
		pageHeaderSubtitle:
			'Cada especialista da nossa rede é certificado, está associado a um hospital acreditado JCI ou NABH, e é validado pelo nosso conselho médico antes de ser associado a um caso.',
		gridBadge: 'Nossa equipa médica',
		gridTitle: 'Conheça os nossos',
		gridHighlight: 'especialistas',
		gridSubtitle: 'Especialistas certificados, associados a hospitais acreditados, validados para cada caso que assumimos.',
	},
	card: {
		yearsExpLabel: 'Anos exp.',
		reviewsLabel: 'Avaliações',
		contactLabel: 'Ver perfil',
		verifiedLabel: 'Especialista verificado',
	},
	detail: {
		home: 'Início',
		ourDoctors: 'Nossos médicos',
		photoLabel: 'Foto',
		verifiedSpecialist: 'Especialista verificado',
		reviewsSuffix: 'avaliações',
		yearsExperienceSuffix: 'anos de experiência',
		bookAppointment: 'Marcar consulta',
		videoConsultation: 'Consulta por vídeo',
		tabs: {
			about: 'Sobre o médico',
			specializations: 'Especializações',
			qualifications: 'Qualificações',
			experience: 'Experiência',
			awards: 'Prémios',
			memberships: 'Associações',
		},
		aboutPrefix: 'Sobre',
		patientReviews: 'Avaliações de pacientes',
		otherSpecialists: 'Outros especialistas',
		bookConsultation: 'Marcar uma consulta',
		sendCaseTemplate: (name: string) => `Envie o seu caso à equipa de coordenação de ${name}`,
		whatsappMessageTemplate: (name: string) => `Olá, gostaria de marcar uma consulta com ${name}.`,
	},
};
