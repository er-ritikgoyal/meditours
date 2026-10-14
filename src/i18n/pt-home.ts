/**
 * Portuguese translations for the remaining homepage-only sections:
 * OurDoctors, OurPartnerHospitals (homepage heading), SupportServices, TravelProcess.
 */

export const ptDoctors = {
	badge: 'Nossa equipe médica',
	title: 'Médicos que',
	highlight: 'cuidam de você',
	subtitle: 'Especialistas certificados, afiliados a hospitais credenciados, verificados para cada caso que gerenciamos.',
	yearsExpLabel: 'anos de experiência',
	reviewsLabel: 'avaliações',
	contactLabel: 'Contatar',
	verifiedLabel: 'Especialista verificado',
	doctors: [
		{
			specialty: 'Cirurgião cardíaco',
			qualification: 'MBBS, MS, MCh — Cirurgia cardiotorácica',
			languages: ['Inglês', 'Hindi'],
		},
		{
			specialty: 'Cirurgião ortopédico',
			qualification: 'MBBS, MS — Ortopedia e substituição articular',
			languages: ['Inglês', 'Hindi'],
		},
		{
			specialty: 'Oncologista',
			qualification: 'MBBS, MD — Oncologia médica',
			languages: ['Inglês', 'Hindi', 'Malayalam'],
		},
		{
			specialty: 'Cirurgião estético e plástico',
			qualification: 'MD — Cirurgia plástica, reconstrutiva e estética',
			languages: ['Inglês', 'Hindi'],
		},
		{
			specialty: 'Neurologista',
			qualification: 'MBBS, DM — Neurologia',
			languages: ['Inglês', 'Hindi', 'Tâmil'],
		},
		{
			specialty: 'Especialista em fertilidade',
			qualification: 'MD — Endocrinologia reprodutiva',
			languages: ['Inglês', 'Espanhol'],
		},
	],
};

export const ptPartnerHospitalsHome = {
	badge: 'Nossa rede',
	title: 'Nossos hospitais',
	highlight: 'parceiros',
	subtitle: 'Trabalhamos apenas com hospitais credenciados que atendem aos padrões internacionais de segurança, higiene e resultados clínicos.',
};

export const ptSupportServices = {
	badge: 'Apoio ao paciente',
	titleLead: 'Apoio que acompanha você,',
	titleHighlight: 'onde quer que esteja',
	subtitle: 'Do visto à recuperação em casa, nossos coordenadores acompanham você em cada etapa.',
	services: [
		{
			icon: 'passport' as const,
			title: 'Assistência para visto médico',
			description: 'Nossos especialistas preparam as cartas-convite e os documentos para que seu visto médico seja aprovado sem atrasos.',
			theme: 'blue' as const,
		},
		{
			icon: 'video' as const,
			title: 'Teleconsulta por vídeo',
			description: 'Converse cara a cara online com seu especialista para confirmar o diagnóstico e o plano de tratamento antes de viajar.',
			theme: 'teal' as const,
		},
		{
			icon: 'translate' as const,
			title: 'Serviços de interpretação',
			description: 'Um intérprete médico certificado está presente em cada consulta e procedimento, no idioma com o qual você se sinta mais confortável.',
			theme: 'green' as const,
		},
		{
			icon: 'opinion' as const,
			title: 'Segunda opinião médica',
			description: 'Obtenha uma avaliação independente do seu diagnóstico e opções de tratamento de um especialista certificado no exterior.',
			theme: 'blue' as const,
		},
		{
			icon: 'care' as const,
			title: 'Coordenação de cuidados pós-tratamento',
			description: 'Seu coordenador agenda os retornos e compartilha os relatórios com seu médico após seu retorno para casa.',
			theme: 'teal' as const,
		},
	],
};

export const ptTravelProcess = {
	badge: 'Guia passo a passo',
	titleLead: 'A jornada do paciente',
	titleHighlight: 'internacional',
	subtitle: 'Da sua primeira dúvida até seu retorno para casa — estamos com você em cada etapa',
	steps: [
		{
			icon: 'document' as const,
			title: 'Envie os dados médicos do paciente',
			description: 'Compartilhe seus relatórios e sua dúvida — receba uma opinião relevante em 24 horas.',
		},
		{
			icon: 'stethoscope' as const,
			title: 'Receba uma opinião médica e uma estimativa de custo',
			description: 'Escolha livremente entre nossos melhores hospitais e médicos afiliados.',
		},
		{
			icon: 'idCard' as const,
			title: 'Receba o convite para o visto',
			description: 'Cuidamos de toda a burocracia do visto médico em seu nome.',
		},
		{
			icon: 'plane' as const,
			title: 'Planeje sua viagem',
			description: 'Hotel, apartamento ou pousada organizados perto do hospital.',
		},
		{
			icon: 'car' as const,
			title: 'Recepção no aeroporto',
			description: 'Recepção no aeroporto, transporte e cartão SIM gratuitos.',
		},
		{
			icon: 'building' as const,
			title: 'Siga seu tratamento',
			description: 'Um intérprete dedicado e um gestor de caso acompanham você durante todo o processo.',
		},
		{
			icon: 'home' as const,
			title: 'Retorno para casa',
			description: 'Apoio de acompanhamento pós-tratamento após seu retorno para casa.',
		},
	],
};
