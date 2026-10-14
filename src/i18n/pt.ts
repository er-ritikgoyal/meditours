/**
 * Portuguese (pt) translation strings — site-wide UI text (nav, footer, hero,
 * common form/button labels, floating widget, insurance modal).
 *
 * Mirrors the structure of fr.ts / ru.ts / bn.ts / ro.ts / es.ts exactly so Layout.astro can
 * drive all locales from the same rendering logic.
 *
 * Translation source: AI-generated. Recommend a native Portuguese speaker
 * reviews this before it's relied on for medical terminology.
 */

export const pt = {
	nav: {
		home: 'Início',
		destinations: 'Destinos',
		treatments: 'Tratamentos',
		about: 'Sobre nós',
		contact: 'Contato',
		more: 'Mais',
		hotels: 'Hotéis',
		flights: 'Voos',
		tourismPackage: 'Pacote turístico',
		cta: 'Consulta gratuita',
		checkInsuranceEligibility: 'Verificar cobertura do seguro',
		tagline: 'Seu consultor médico',
	},

	footer: {
		description:
			'Conectamos pacientes a hospitais credenciados e especialistas certificados em mais de 20 países — apoio completo, da primeira opinião médica até a recuperação.',
		quickLinks: 'Links rápidos',
		home: 'Início',
		aboutUs: 'Sobre nós',
		destinations: 'Destinos',
		treatments: 'Tratamentos',
		ourDoctors: 'Nossos médicos',
		contact: 'Contato',
		popularTreatments: 'Tratamentos populares',
		treatmentNames: {
			cardiacCare: 'Cardiologia',
			orthopedics: 'Ortopedia',
			oncology: 'Oncologia',
			cosmeticSurgery: 'Cirurgia estética',
			fertilityTreatment: 'Tratamento de fertilidade',
			organTransplant: 'Transplante de órgãos',
			dentalCare: 'Odontologia',
			eyeCare: 'Oftalmologia',
		},
		getInTouch: 'Entre em contato',
		officeAddress: '238 Westend Mall, Janakpuri, Nova Deli, Índia',
		supportHours: 'Disponível 24/7',
		privacyPolicy: 'Política de privacidade',
		termsOfService: 'Termos de serviço',
		sitemap: 'Mapa do site',
		cookiePolicy: 'Política de cookies',
		manageCookies: 'Gerir preferências de cookies',
		allRightsReserved: 'Todos os direitos reservados.',
		backToTop: 'Voltar ao topo',
	},

	hero: {
		slides: [
			{
				eyebrow: 'Hospitais credenciados pela JCI',
				title: 'Cuidados médicos de classe mundial,',
				highlight: 'sem espera ou preços exagerados',
				description:
					'Compare hospitais credenciados e especialistas de mais de 20 países e economize até 70% no tratamento de que precisa.',
				primaryCta: 'Consulta gratuita',
				secondaryCta: 'Explorar destinos',
			},
			{
				eyebrow: 'Especialistas verificados',
				title: 'Hospitais mais bem avaliados,',
				highlight: 'adaptados ao seu diagnóstico exato',
				description:
					'Nosso comitê médico analisa cada caso e conecta você a cirurgiões especializados em sua condição.',
				primaryCta: 'Encontrar um especialista',
				secondaryCta: 'Como funciona',
			},
			{
				eyebrow: 'Apoio completo',
				title: 'Nós cuidamos da viagem,',
				highlight: 'você se concentra em se recuperar',
				description:
					'Voos, vistos, intérpretes e acompanhamento pós-tratamento — um coordenador dedicado gerencia cada detalhe da sua viagem.',
				primaryCta: 'Falar com um coordenador',
			},
		],
		trust: [
			{ value: '500+', label: 'Hospitais parceiros' },
			{ value: '45', label: 'Países' },
			{ value: '24/7', label: 'Apoio ao paciente' },
			{ value: '12.000+', label: 'Pacientes atendidos' },
		],
		treatmentOptions: [
			'Cardiologia',
			'Ortopedia e substituição articular',
			'Oncologia',
			'Cirurgia estética e plástica',
			'Tratamento de fertilidade',
			'Transplante de órgãos',
			'Outros',
		],
		enquiry: {
			title: 'Obtenha uma consulta gratuita',
			subtitle: 'Nossa equipe médica responde em 24 horas',
			treatmentPlaceholder: 'Pesquisar...',
			namePlaceholder: 'Nome completo',
			emailPlaceholder: 'Endereço de e-mail',
			countryPlaceholder: '---Selecione o país---',
			phonePlaceholder: 'Número de WhatsApp / telefone',
			uploadLabel: 'Envie relatórios médicos (PDF/JPG, opcional)',
			submit: 'Consulta gratuita',
			privacyNote: 'Suas informações são confidenciais',
			successMessage: 'Obrigado! Um coordenador de pacientes entrará em contato em breve.',
		},
	},

	floatingWidget: {
		whatsappLabel: 'WhatsApp',
		whatsappAriaLabel: 'Converse conosco no WhatsApp',
		callbackLabel: 'Solicitar retorno',
		closeLabel: 'Fechar',
		modalTitle: 'Solicitar retorno',
		modalSubtitle: 'Compartilhe seus dados e um coordenador de pacientes ligará para você em breve.',
		namePlaceholder: 'Nome completo',
		countryPlaceholder: '---Selecione o país---',
		phonePlaceholder: 'Número de telefone / WhatsApp',
		emailPlaceholder: 'Endereço de e-mail',
		preferredTimePlaceholder: 'Horário preferido para a ligação (opcional)',
		submitLabel: 'Solicitar retorno',
		privacyNote: 'Suas informações são confidenciais',
		successMessage: 'Obrigado! Um coordenador de pacientes ligará para você em breve.',
	},

	insuranceModal: {
		closeLabel: 'Fechar',
		modalTitle: 'Verificar cobertura do seguro',
		modalSubtitle:
			'Compartilhe seus dados e informações do seguro — nosso coordenador confirmará a cobertura e entrará em contato com você.',
		patientNamePlaceholder: 'Nome do paciente',
		patientAgePlaceholder: 'Idade do paciente',
		genderPlaceholder: 'Sexo',
		genderMale: 'Masculino',
		genderFemale: 'Feminino',
		genderOther: 'Outro',
		countryPlaceholder: '---Selecione o país---',
		phonePlaceholder: 'Número de telefone*',
		emailPlaceholder: 'E-mail',
		hasInsurancePlaceholder: '---Tenho seguro---',
		yes: 'Sim',
		no: 'Não',
		uploadLabel: 'Envie o cartão do seguro (opcional — PDF/JPG/PNG)',
		messagePlaceholder: 'Mensagem',
		submitLabel: 'Verificar cobertura',
		successMessage: 'Obrigado! Nossa equipe analisará as informações do seu seguro e entrará em contato em breve.',
	},

	common: {
		fullName: 'Nome completo',
		emailAddress: 'Endereço de e-mail',
		phoneWhatsapp: 'Telefone / WhatsApp',
		message: 'Mensagem',
		sendMessage: 'Enviar mensagem',
		country: 'País',
		selectCountryPlaceholder: '---Selecione o país---',
		learnMore: 'Saiba mais',
		viewProfile: 'Ver perfil',
		contactUs: 'Fale conosco',
		requestCallback: 'Solicitar retorno',
		checkEligibility: 'Verificar cobertura',
		confidentialNote: 'Suas informações são confidenciais',
	},
	cookieBanner: {
		title: 'Valorizamos a sua privacidade',
		description:
			'Utilizamos cookies para memorizar a sua preferência de idioma e compreender como os visitantes utilizam o nosso site, para que possamos melhorá-lo. Pode aceitar todos os cookies, rejeitar os não essenciais ou personalizar a sua escolha.',
		necessaryLabel: 'Necessários',
		necessaryDescription: 'Necessários para o funcionamento do site, como memorizar o idioma selecionado. Sempre ativos.',
		analyticsLabel: 'Análise',
		analyticsDescription: 'Ajuda-nos a compreender como os visitantes utilizam o site para que possamos melhorá-lo. Opcional.',
		acceptAllLabel: 'Aceitar tudo',
		rejectLabel: 'Rejeitar não essenciais',
		customizeLabel: 'Personalizar',
		savePreferencesLabel: 'Guardar preferências',
		policyLinkLabel: 'Política de cookies',
		closeLabel: 'Fechar',
	},
} as const;

export type PtDictionary = typeof pt;
