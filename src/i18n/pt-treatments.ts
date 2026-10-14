/**
 * Portuguese translations for the deep treatment content in src/data/treatments.ts.
 *
 * Keyed by slug. Only translatable fields are included — numeric fields
 * (prices, durations, counts) live in the English source and are reused as-is.
 * AI-generated; recommend a native Portuguese speaker with medical background
 * reviews this before it's relied on for clinical decisions.
 */

export interface FaqItemPt {
	question: string;
	answer: string;
}

export interface CostRowPt {
	country: string;
	waitTime: string;
	successRate: string;
}

export interface TreatmentDataPt {
	name: string;
	shortDescription: string;
	overview: string;
	procedures: string[];
	benefits: string[];
	flagshipProcedure: string;
	costComparison: CostRowPt[];
	inclusions: string[];
	exclusions: string[];
	faqs: FaqItemPt[];
}

export const ptTreatments: Record<string, TreatmentDataPt> = {
	'cardiac-care': {
		name: 'Cardiologia',
		shortDescription: 'Bypass, reparo de válvulas e angioplastia realizados por cirurgiões formados nos principais centros cardíacos.',
		overview:
			'Os programas cardíacos da Índia reúnem cirurgiões formados internacionalmente com alguns dos maiores volumes cirúrgicos do mundo, dando aos pacientes acesso a procedimentos avançados como o bypass sem bomba e o reparo minimamente invasivo de válvulas — a uma fração do preço ocidental, sem listas de espera.',
		procedures: ['Bypass cardíaco', 'Substituição de válvula', 'Angioplastia'],
		benefits: [
			'Cirurgiões formados e certificados nos EUA, Reino Unido e Europa',
			'Um dos maiores volumes de cirurgia cardíaca do mundo, o que significa uma profunda experiência prática',
			'UTI cardíaca dedicada e unidade de recuperação intermediária',
			'Sem listas de espera — a maioria das intervenções é agendada em poucos dias após a primeira opinião',
		],
		flagshipProcedure: 'Cirurgia de bypass coronário (CRM)',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: '95–97%' },
			{ country: 'Reino Unido', waitTime: '3–12 meses (NHS)', successRate: '95–97%' },
			{ country: 'Alemanha', waitTime: '4–10 semanas', successRate: '94–96%' },
			{ country: 'Tailândia', waitTime: '2–4 semanas', successRate: '93–95%' },
			{ country: 'Índia', waitTime: '1–2 semanas', successRate: '96%+' },
		],
		inclusions: [
			'Avaliação cardíaca pré-operatória, ECG, ecocardiograma e análise de angiografia',
			'Honorários do cirurgião para o procedimento de bypass ou válvula',
			'Taxas de sala cirúrgica e anestesia',
			'Estadia em UTI cardíaca (3 dias) e quarto individual de recuperação (6 dias)',
			'Cuidados médicos, monitoramento e fisioterapia durante a hospitalização',
			'Medicamentos cardíacos padrão e suprimentos durante a estadia',
			'Taxas de laboratório e radiologia relacionadas ao procedimento',
			'Resumo de alta e plano escrito de cuidados pós-operatórios',
		],
		exclusions: [
			'Estadia pré-internação para estabilizar o paciente antes da aprovação da intervenção',
			'Estadia hospitalar ou em UTI além da duração do pacote',
			'Intervenções avançadas, como um segundo bypass ou reparo de válvula fora do escopo inicial',
			'Dispositivos implantáveis, como marca-passos, se não mencionados previamente',
			'Medicamentos para levar para casa além do kit padrão de alta',
			'Tratamento de condições preexistentes não relacionadas, descobertas na avaliação',
			'Nova intervenção por complicações não relacionadas ao procedimento inicial',
		],
		faqs: [
			{
				question: 'Quanto custa a cirurgia de bypass na Índia?',
				answer:
					'Um pacote de bypass coronário (CRM) na Índia começa em 8.000 USD, cerca de 90% menos do que os 120.000+ USD normalmente cobrados nos EUA. O pacote cobre a avaliação pré-operatória, a intervenção em si, a estadia em UTI e quarto, os cuidados médicos e os medicamentos padrão.',
			},
			{
				question: 'Qual é a taxa de sucesso da cirurgia cardíaca na Índia?',
				answer:
					'Os principais centros cardíacos da Índia relatam taxas de sucesso de 96% ou mais em cirurgias de bypass e valvulares, comparáveis aos melhores programas dos EUA e da Europa, respaldadas por UTIs cardíacas dedicadas e altos volumes cirúrgicos anuais.',
			},
			{
				question: 'Por quanto tempo devo ficar na Índia para uma cirurgia cardíaca?',
				answer:
					'A maioria dos pacientes permanece hospitalizada por cerca de 9 dias (3 na UTI, 6 no quarto de recuperação) e recomenda-se permanecer na Índia por um total de cerca de 3 semanas, para que a equipe cardíaca possa monitorar a recuperação antes da viagem de volta.',
			},
			{
				question: 'Preciso de um check-up médico completo antes que a cirurgia seja confirmada?',
				answer:
					'Sim. Seus relatórios (ECG, ecocardiograma, angiografia se disponível) são revisados por nosso comitê cardíaco antes de finalizar o plano de tratamento e o orçamento, e uma teleconsulta com o cirurgião é organizada, se necessário.',
			},
			{
				question: 'O bypass minimamente invasivo ou sem bomba está disponível?',
				answer:
					'Sim, muitos de nossos hospitais parceiros oferecem bypass sem bomba (coração batendo) e reparo minimamente invasivo de válvulas, o que pode reduzir a estadia na UTI e o tempo de recuperação, dependendo do seu caso.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe seus relatórios cardíacos recentes pelo nosso formulário de contato ou WhatsApp, e um coordenador organizará uma avaliação especializada gratuita e um orçamento transparente em 24 horas.',
			},
		],
	},

	orthopedics: {
		name: 'Ortopedia',
		shortDescription: 'Substituição articular e medicina esportiva com programas de recuperação acelerada.',
		overview:
			'Da substituição robótica de joelho à fusão espinhal complexa, os centros ortopédicos da Índia combinam tecnologia moderna de implantes com programas estruturados de fisioterapia projetados para ajudar os pacientes a ficarem de pé novamente mais rápido.',
		procedures: ['Substituição de joelho', 'Substituição de quadril', 'Fusão espinhal'],
		benefits: [
			'Substituição articular robótica e assistida por computador disponível em centros de ponta',
			'Fisioterapia estruturada no hospital desde o primeiro dia',
			'Implantes de alta qualidade, de origem internacional',
			'Estadia hospitalar típica de 3–5 dias para a substituição articular',
		],
		flagshipProcedure: 'Substituição total de joelho',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–6 semanas', successRate: '96–98%' },
			{ country: 'Reino Unido', waitTime: '6–12 meses (NHS)', successRate: '96–98%' },
			{ country: 'Alemanha', waitTime: '3–6 semanas', successRate: '95–97%' },
			{ country: 'Tailândia', waitTime: '2–3 semanas', successRate: '94–96%' },
			{ country: 'Índia', waitTime: '1–2 semanas', successRate: '97%+' },
		],
		inclusions: [
			'Avaliação ortopédica pré-operatória, incluindo radiografias e verificação de aptidão',
			'Honorários do cirurgião e anestesista para a substituição articular',
			'Taxas de sala cirúrgica e implante (qualidade padrão, caso um nível superior não seja escolhido)',
			'1 dia em UTI/recuperação mais 4 dias em quarto individual',
			'Sessões estruturadas de fisioterapia no hospital',
			'Laboratório, radiologia e medicamentos pós-operatórios padrão durante a estadia',
			'Resumo de alta com programa de exercícios em casa e plano de recuperação',
		],
		exclusions: [
			'Implantes premium ou personalizados além do implante padrão',
			'Estadia hospitalar além da duração do pacote',
			'Cirurgia bilateral (ambos os joelhos), se não orçada separadamente',
			'Sessões de fisioterapia ambulatorial após a alta',
			'Tratamento de condições não relacionadas identificadas no check-up pré-operatório',
			'Cirurgia de revisão por complicações não relacionadas ao procedimento inicial',
		],
		faqs: [
			{
				question: 'Quanto custa a substituição de joelho na Índia?',
				answer:
					'Um pacote de substituição total de joelho na Índia começa em 5.500 USD, cerca de 85% menos do que os preços habituais nos EUA, e inclui os honorários do cirurgião, o implante, a estadia hospitalar e a fisioterapia no hospital.',
			},
			{
				question: 'A substituição robótica de joelho está disponível?',
				answer:
					'Sim, vários de nossos hospitais parceiros oferecem substituição articular robótica e assistida por computador, o que pode melhorar o alinhamento do implante e reduzir o tempo de recuperação para pacientes elegíveis.',
			},
			{
				question: 'Qual é a duração da estadia hospitalar e da recuperação?',
				answer:
					'A maioria dos pacientes permanece hospitalizada por cerca de 5 dias e recomenda-se permanecer na Índia por 2–3 semanas, para que os fisioterapeutas possam orientar a recuperação inicial antes de voltar para casa.',
			},
			{
				question: 'Quais marcas de implantes são utilizadas?',
				answer:
					'Nossos hospitais parceiros utilizam como padrão marcas de implantes certificadas internacionalmente, com opções de implantes premium disponíveis mediante solicitação e orçamento separado.',
			},
			{
				question: 'É possível substituir os dois joelhos na mesma viagem?',
				answer:
					'Sim, a substituição bilateral simultânea ou em etapas do joelho é possível para candidatos adequados — seu cirurgião confirmará a melhor abordagem após revisar as radiografias e o estado geral de saúde.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Envie suas radiografias e um resumo dos seus sintomas pelo nosso formulário de contato e você receberá uma avaliação especializada e um orçamento transparente em 24 horas.',
			},
		],
	},

	oncology: {
		name: 'Oncologia',
		shortDescription: 'Cuidados oncológicos multidisciplinares que combinam cirurgia, quimioterapia e radioterapia direcionada.',
		overview:
			'O tratamento do câncer na Índia é oferecido por comitês oncológicos que reúnem cirurgiões oncológicos, oncologistas clínicos e especialistas em radioterapia para elaborar um plano de tratamento coordenado — o mesmo modelo multidisciplinar utilizado nos principais centros oncológicos ocidentais.',
		procedures: ['Cirurgia de tumor', 'Quimioterapia', 'Radioterapia'],
		benefits: [
			'Comitês oncológicos multidisciplinares para cada caso',
			'Acesso a radioterapia avançada (IMRT, IGRT, opções de terapia de prótons em centros selecionados)',
			'Cuidados integrais, do diagnóstico ao acompanhamento pós-tratamento',
			'Conselheiros oncológicos dedicados que apoiam pacientes e famílias',
		],
		flagshipProcedure: 'Cirurgia de ressecção tumoral',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: 'Varia conforme o estágio' },
			{ country: 'Reino Unido', waitTime: '2–6 meses (NHS)', successRate: 'Varia conforme o estágio' },
			{ country: 'Alemanha', waitTime: '4–8 semanas', successRate: 'Varia conforme o estágio' },
			{ country: 'Tailândia', waitTime: '2–4 semanas', successRate: 'Varia conforme o estágio' },
			{ country: 'Índia', waitTime: '1–2 semanas', successRate: 'Varia conforme o estágio' },
		],
		inclusions: [
			'Revisão pelo comitê oncológico dos relatórios existentes de biópsia, imagem e patologia',
			'Honorários do cirurgião, anestesista e equipe oncológica para a intervenção principal',
			'Taxas de sala cirúrgica e UTI (2 dias) mais 6 dias em quarto individual',
			'Cuidados médicos e medicamentos padrão de quimioterapia/suporte durante a hospitalização',
			'Taxas de laboratório, radiologia e patologia relacionadas ao procedimento principal',
			'Apoio dedicado de um conselheiro oncológico para o paciente e a família',
			'Resumo de alta com plano estruturado de quimioterapia/radioterapia posterior',
		],
		exclusions: [
			'Ciclos adicionais de quimioterapia ou sessões de radioterapia além do pacote inicial',
			'Testes de perfil genômico/molecular, a menos que solicitados especificamente',
			'Estadia hospitalar além da duração do pacote',
			'Terapia direcionada ou imunoterapia, orçadas separadamente devido aos custos variáveis',
			'Tratamento de condições não relacionadas identificadas na avaliação',
			'Nova intervenção por complicações não relacionadas ao procedimento inicial',
		],
		faqs: [
			{
				question: 'Quanto custa a cirurgia oncológica na Índia?',
				answer:
					'Um pacote de ressecção tumoral na Índia começa em 6.000 USD, cerca de 90% menos do que uma intervenção comparável nos EUA, cobrindo a revisão do comitê oncológico, a intervenção, a estadia em UTI/quarto e os cuidados de suporte iniciais.',
			},
			{
				question: 'Como a quimioterapia e a radioterapia são orçadas?',
				answer:
					'Os ciclos de quimioterapia e as sessões de radioterapia (IMRT/IGRT) são orçados separadamente, de acordo com seu protocolo específico, pois os regimes variam amplamente conforme o tipo e o estágio do câncer — o comitê oncológico fornecerá uma estimativa detalhada após revisar os relatórios.',
			},
			{
				question: 'Uma equipe de especialistas revisará meu caso, ou apenas um médico?',
				answer:
					'Cada caso passa por um comitê oncológico multidisciplinar — cirurgião oncológico, oncologista clínico e radioterapeuta — antes que o plano de tratamento seja finalizado, o mesmo modelo utilizado nos principais centros oncológicos ocidentais.',
			},
			{
				question: 'Por quanto tempo precisarei ficar na Índia?',
				answer:
					'Pacientes operados normalmente permanecem hospitalizados por 8 dias, com uma estadia total recomendada de cerca de 4 semanas na Índia, se a intervenção for seguida de quimioterapia ou radioterapia.',
			},
			{
				question: 'Posso obter uma segunda opinião antes de me comprometer com a cirurgia?',
				answer:
					'Sim. Envie seus relatórios de biópsia, imagem e patologia para uma revisão gratuita do comitê oncológico e uma segunda opinião, antes de decidir se deve viajar para o tratamento.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe seus relatórios diagnósticos pelo nosso formulário de contato ou WhatsApp, e nosso coordenador oncológico organizará uma revisão do comitê e uma estimativa transparente em 48 horas.',
			},
		],
	},

	'cosmetic-surgery': {
		name: 'Cirurgia estética e plástica',
		shortDescription: 'Procedimentos estéticos e reconstrutivos realizados por cirurgiões certificados internacionalmente.',
		overview:
			'Combinando cirurgiões certificados com cuidados pós-operatórios voltados para a recuperação, estilo hotel, a Índia se tornou um destino preferido para procedimentos estéticos e reconstrutivos — com a privacidade e discrição que os pacientes internacionais esperam.',
		procedures: ['Rinoplastia', 'Lipoaspiração', 'Transplante capilar'],
		benefits: [
			'Cirurgiões plásticos e reconstrutivos certificados',
			'Suítes privadas e discretas de recuperação, separadas das enfermarias gerais do hospital',
			'Técnicas modernas, incluindo transplante capilar FUE e lipoaspiração VASER',
			'Consulta completa antes/depois com imagens 3D em clínicas selecionadas',
		],
		flagshipProcedure: 'Rinoplastia',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '2–4 semanas', successRate: 'Alta satisfação do paciente' },
			{ country: 'Reino Unido', waitTime: '3–6 semanas', successRate: 'Alta satisfação do paciente' },
			{ country: 'Alemanha', waitTime: '2–4 semanas', successRate: 'Alta satisfação do paciente' },
			{ country: 'Tailândia', waitTime: '1–2 semanas', successRate: 'Alta satisfação do paciente' },
			{ country: 'Índia', waitTime: '3–7 dias', successRate: 'Alta satisfação do paciente' },
		],
		inclusions: [
			'Consulta com imagens 3D e planejamento pré-operatório',
			'Honorários do cirurgião para o procedimento',
			'Taxas de sala cirúrgica e anestesia',
			'Uma noite em uma suíte privada de recuperação',
			'Curativos pós-operatórios, roupas de compressão e primeira consulta de acompanhamento',
			'Medicamentos padrão durante a estadia de recuperação',
		],
		exclusions: [
			'Procedimentos combinados (ex.: rinoplastia e aumento de queixo), se não orçados juntos',
			'Estadia de recuperação além de uma noite, ou cuidados pós-operatórios prolongados estilo hotel',
			'Cirurgia de revisão para retoques estéticos após o período inicial de cicatrização',
			'Medicamentos para levar para casa além do kit padrão de alta',
			'Roupas ou produtos para cuidados com cicatrizes além dos fornecidos na alta',
		],
		faqs: [
			{
				question: 'Quanto custa a rinoplastia na Índia?',
				answer:
					'A rinoplastia na Índia começa em 2.000 USD, cerca de 75–85% menos do que nos EUA ou Reino Unido, e inclui a consulta, a intervenção, a anestesia e uma noite de recuperação privada.',
			},
			{
				question: 'Os cirurgiões são formados internacionalmente?',
				answer:
					'Sim, nossos cirurgiões estéticos parceiros são certificados e muitos realizaram formação adicional ou estágios especializados nos EUA, Reino Unido ou Europa em cirurgia estética e reconstrutiva.',
			},
			{
				question: 'Quanta privacidade e discrição são oferecidas?',
				answer:
					'Os pacientes se recuperam em suítes privadas, separadas das enfermarias gerais do hospital, e todas as consultas e registros são tratados com estrita confidencialidade.',
			},
			{
				question: 'Quanto tempo devo planejar ficar na Índia?',
				answer:
					'A maioria dos procedimentos estéticos requer cerca de 1–2 semanas na Índia para a intervenção e o acompanhamento inicial, embora isso varie conforme o procedimento — seu cirurgião confirmará o cronograma exato durante a consulta.',
			},
			{
				question: 'Posso combinar vários procedimentos em uma única viagem?',
				answer:
					'Sim, muitos pacientes combinam procedimentos como rinoplastia com lipoaspiração em uma única viagem; seu cirurgião aconselhará o que pode ser feito com segurança em conjunto, de acordo com seu estado de saúde e necessidades de recuperação.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe seus objetivos e fotos pelo nosso formulário de contato, e nossa equipe organizará uma consulta privada com imagens 3D e um orçamento transparente em 24 horas.',
			},
		],
	},

	fertility: {
		name: 'Tratamento de fertilidade',
		shortDescription: 'FIV e cuidados reprodutivos com altas taxas de sucesso e protocolos personalizados.',
		overview:
			'As clínicas de fertilidade da Índia relatam taxas de sucesso comparáveis aos principais centros de FIV do mundo, com protocolos hormonais personalizados, laboratórios de embriologia próprios e sem as listas de espera de vários meses comuns na Europa e na América do Norte.',
		procedures: ['FIV', 'IIU', 'Congelamento de óvulos'],
		benefits: [
			'Laboratórios próprios de embriologia e triagem genética',
			'Protocolos personalizados de estimulação hormonal',
			'Sem listas de espera de vários meses — os ciclos geralmente começam em poucas semanas',
			'Pacotes agrupados que cobrem medicamentos, monitoramento e o procedimento em si',
		],
		flagshipProcedure: 'Ciclo de FIV',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: '40–50% por ciclo' },
			{ country: 'Reino Unido', waitTime: '6–12 meses (NHS)', successRate: '35–45% por ciclo' },
			{ country: 'Alemanha', waitTime: '4–8 semanas', successRate: '35–45% por ciclo' },
			{ country: 'Tailândia', waitTime: '2–4 semanas', successRate: '40–48% por ciclo' },
			{ country: 'Índia', waitTime: '1–2 semanas', successRate: '40–50% por ciclo' },
		],
		inclusions: [
			'Avaliação inicial de fertilidade, incluindo análise hormonal e ultrassonográfica',
			'Consultas de monitoramento da estimulação ovariana',
			'Procedimento de coleta de óvulos e taxas de anestesia',
			'Embriologia, fertilização e cultivo embrionário próprios',
			'Procedimento de transferência de um único embrião',
			'Medicamentos padrão de fertilidade para o ciclo de estimulação',
		],
		exclusions: [
			'Óvulos doados, sêmen doado ou acordos de barriga de aluguel',
			'Teste genético pré-implantacional (PGT), a menos que solicitado especificamente',
			'Tentativas adicionais de transferência embrionária além da primeira, ou ciclos de transferência de embriões congelados',
			'Medicamentos além do protocolo padrão de estimulação',
			'Tratamento da infertilidade masculina, como ICSI/TESA, se não orçado separadamente',
		],
		faqs: [
			{
				question: 'Quanto custa o tratamento de FIV na Índia?',
				answer:
					'Um ciclo de FIV na Índia começa em 3.000 USD, cerca de 80% menos do que nos EUA, e cobre a avaliação, o monitoramento da estimulação, a coleta de óvulos, a embriologia e a transferência de um único embrião.',
			},
			{
				question: 'Qual é a taxa de sucesso da FIV na Índia?',
				answer:
					'As principais clínicas de fertilidade da Índia relatam taxas de sucesso por ciclo de 40–50%, comparáveis às melhores clínicas dos EUA e da Europa, com resultados que dependem da idade e dos fatores de fertilidade subjacentes.',
			},
			{
				question: 'Quanto tempo dura um ciclo de FIV?',
				answer:
					'Um ciclo completo, da estimulação à transferência, geralmente dura 2–3 semanas, então a maioria dos pacientes internacionais planeja ficar na Índia por cerca de 3 semanas para concluir o monitoramento, a coleta e a transferência.',
			},
			{
				question: 'Vocês oferecem programas de óvulos doados ou barriga de aluguel?',
				answer:
					'Esses acordos envolvem etapas legais e médicas adicionais e são orçados separadamente — entre em contato com nosso coordenador de fertilidade para discutir a elegibilidade e as regulamentações atuais.',
			},
			{
				question: 'O tratamento pode começar sem viajar primeiro?',
				answer:
					'Sim, uma teleconsulta inicial e uma revisão de relatórios podem ocorrer antes de viajar, para que seu protocolo seja planejado com antecedência e a viagem seja sincronizada com o ciclo de estimulação.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe seu histórico de fertilidade e quaisquer relatórios de testes anteriores pelo nosso formulário de contato, e um coordenador de fertilidade organizará uma avaliação especializada e uma estimativa transparente em 24 horas.',
			},
		],
	},

	'organ-transplant': {
		name: 'Transplante de órgãos',
		shortDescription: 'Programas de transplante de fígado e rim com equipes dedicadas de cuidados pós-operatórios.',
		overview:
			'A Índia realiza um dos maiores volumes do mundo de transplantes de fígado e rim de doador vivo, respaldados por UTIs de transplante dedicadas e programas de monitoramento pós-operatório de longo prazo para pacientes internacionais.',
		procedures: ['Transplante de rim', 'Transplante de fígado', 'Transplante de medula óssea'],
		benefits: [
			'Programas de transplante de doador vivo de alto volume',
			'UTIs de transplante dedicadas e enfermarias de recuperação isoladas',
			'Planejamento de imunossupressão de longo prazo e cuidados de acompanhamento',
			'Apoio legal e ético para a avaliação do doador em todas as etapas',
		],
		flagshipProcedure: 'Transplante de fígado de doador vivo',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: 'Anos (lista de espera)', successRate: '88–92%' },
			{ country: 'Reino Unido', waitTime: '1–3 anos', successRate: '88–91%' },
			{ country: 'Alemanha', waitTime: '6–18 meses', successRate: '87–90%' },
			{ country: 'Tailândia', waitTime: 'Moderado', successRate: '85–88%' },
			{ country: 'Índia', waitTime: '2–4 semanas', successRate: '90%+' },
		],
		inclusions: [
			'Avaliação pré-transplante do receptor e de um doador, em regime ambulatorial',
			'Aluguel de quarto: receptor — 21 dias (5 dias UTI + 16 dias quarto individual); doador — 8 dias (2 dias UTI + 6 dias quarto individual)',
			'Honorários do cirurgião para doador e receptor',
			'Honorários do anestesista para doador e receptor',
			'Taxas de sala cirúrgica para doador e receptor',
			'Taxas de serviços de anestesia para doador e receptor',
			'Taxas de serviços de laboratório',
			'Taxas de serviços de transfusão',
			'Taxas de serviços de radiologia',
			'Taxas de serviços de fisioterapia',
			'Taxas de serviços de farmácia, incluindo medicamentos e suprimentos médicos',
		],
		exclusions: [
			'Estadia hospitalar antes da operação para melhorar o estado do paciente, bem como medicamentos/investigações após a alta hospitalar',
			'Avaliação de qualquer doador adicional',
			'Qualquer período de estadia hospitalar ou em UTI além da duração do pacote',
			'Todas as investigações, medicamentos e suprimentos além das tarifas limite',
			'Medicamentos caros ou de uso pouco frequente, como Zenapax, Simulect, Valcyte, Novoseven, Thymoglobulin, Ambisome, Caspofungin e Anidulafungin',
			'Taxas para qualquer consulta ou procedimento com um especialista não relacionado ao transplante',
			'Taxas de radiologia intervencionista, incluindo drenagem percutânea, drenagem biliar transhepática percutânea e angiografia',
			'Procedimentos cardiológicos (ecocardiograma, angiografia) e taxas relacionadas à nefrologia (diálise, CRRT)',
			'Procedimentos endoscópicos como CPRE',
			'Nova intervenção',
		],
		faqs: [
			{
				question: 'Quanto custa o transplante de fígado na Índia?',
				answer:
					'A intervenção de transplante de fígado na Índia começa em 25.000 USD, cerca de 60–70% menos do que nos EUA ou Reino Unido. O pacote cobre a avaliação pré-transplante do receptor e de um doador, a intervenção para ambos, a estadia em UTI e hospital, as taxas de sala cirúrgica, os cuidados médicos, o laboratório e os serviços de farmácia.',
			},
			{
				question: 'Qual é a taxa de sucesso do transplante de fígado na Índia?',
				answer:
					'Os melhores centros de transplante de fígado da Índia relatam uma taxa de sucesso em um ano de mais de 90%, comparável aos principais programas dos EUA e da Europa. A taxa de sobrevivência em cinco anos é de cerca de 75%, dependendo da doença subjacente, do estado geral de saúde do paciente e da adesão ao acompanhamento.',
			},
			{
				question: 'Quem pode ser doador de fígado para transplante na Índia?',
				answer:
					'Para um transplante de fígado de doador vivo, o doador deve ser um parente sanguíneo próximo (pai/mãe, irmão/irmã, filho ou cônjuge), com idade entre 18–55 anos, saudável, com tipo sanguíneo compatível e função hepática normal. A doação deve ser totalmente voluntária — qualquer transação financeira entre doador e receptor é ilegal segundo a lei indiana. A avaliação completa do doador geralmente é concluída em 2–3 dias.',
			},
			{
				question: 'Qual é a duração da estadia hospitalar para o transplante de fígado na Índia?',
				answer:
					'O receptor permanece cerca de 21 dias — 5 dias em UTI e 16 dias em quarto individual. O doador permanece cerca de 8 dias — 2 dias em UTI e 6 dias em quarto individual. Após a alta, recomenda-se que o receptor permaneça na Índia por pelo menos 1 mês para monitoramento cuidadoso, o que faz com que a estadia total na Índia seja normalmente de cerca de 2 meses.',
			},
			{
				question: 'O fígado pode se regenerar após a doação de um doador vivo?',
				answer:
					'Sim. O fígado é o único órgão sólido do corpo humano que pode se regenerar completamente. Após a doação de uma parte, o fígado restante do doador cresce para cerca de 80% do seu tamanho original em poucas semanas e quase até o tamanho original em poucos meses. A parte transplantada no receptor também cresce até seu tamanho completo.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Envie os relatórios médicos do receptor e do possível doador pelo nosso formulário de contato ou WhatsApp, e nossa equipe de coordenação de transplantes organizará uma avaliação especializada gratuita e uma teleconsulta com o cirurgião de transplantes antes da viagem.',
			},
		],
	},

	'dental-care': {
		name: 'Odontologia',
		shortDescription: 'Implantes, facetas e restauração bucal completa, utilizando a odontologia digital mais recente.',
		overview:
			'O design digital do sorriso, coroas CAD/CAM no mesmo dia e a reabilitação completa com implantes são padrão nos principais centros odontológicos da Índia — oferecendo resultados em dias, não nos meses habituais para o tratamento em etapas no exterior.',
		procedures: ['Implantes dentários', 'Facetas', 'Restauração bucal completa'],
		benefits: [
			'Design digital do sorriso e coroas CAD/CAM no mesmo dia',
			'Reabilitação completa com implantes concluída em uma única viagem',
			'Marcas de implantes de nível internacional utilizadas em todos os casos',
			'Combine o tratamento com uma estadia de recuperação perto da clínica',
		],
		flagshipProcedure: 'Implantes dentários de boca inteira',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '2–4 semanas', successRate: '95–97%' },
			{ country: 'Reino Unido', waitTime: '3–6 semanas', successRate: '95–97%' },
			{ country: 'Alemanha', waitTime: '2–4 semanas', successRate: '94–96%' },
			{ country: 'Tailândia', waitTime: '1–2 semanas', successRate: '93–95%' },
			{ country: 'Índia', waitTime: '3–5 dias', successRate: '95%+' },
		],
		inclusions: [
			'Consulta de design digital do sorriso e escaneamento 3D',
			'Honorários do dentista pela colocação do implante ou restauração',
			'Fixação do implante e pilar de qualidade padrão',
			'Fabricação da coroa CAD/CAM no mesmo dia, quando aplicável',
			'Anestesia local e taxas pelo procedimento estéril',
			'Uma consulta de acompanhamento para verificar a cicatrização e o ajuste',
		],
		exclusions: [
			'Enxerto ósseo ou elevação de seio, se não identificados no escaneamento inicial',
			'Melhorias de implantes premium além da fixação padrão',
			'Coroas, facetas ou restaurações adicionais além do plano de tratamento acordado',
			'Tratamento ortodôntico ou alinhamento dentário antes da colocação do implante',
			'Consultas de acompanhamento além da incluída',
		],
		faqs: [
			{
				question: 'Quanto custa um implante dentário na Índia?',
				answer:
					'Um único implante dentário na Índia começa em 800 USD, cerca de 80% menos do que nos EUA, e inclui a consulta, a colocação do implante e uma coroa CAD/CAM no mesmo dia, quando aplicável.',
			},
			{
				question: 'A restauração bucal completa pode ser concluída em uma única viagem?',
				answer:
					'Sim, usando o design digital do sorriso e a tecnologia de coroas no mesmo dia, a maioria dos casos de implantes de boca inteira pode ser concluída em uma única viagem de 7–10 dias, em comparação com os meses geralmente necessários para o tratamento em etapas no exterior.',
			},
			{
				question: 'Quais marcas de implantes são utilizadas?',
				answer:
					'Nossos centros odontológicos parceiros utilizam como padrão marcas de implantes certificadas internacionalmente, com melhorias para marcas premium disponíveis mediante solicitação.',
			},
			{
				question: 'O procedimento é doloroso?',
				answer:
					'A colocação do implante é feita sob anestesia local e geralmente é bem tolerada, com a maioria dos pacientes retomando a atividade normal em um ou dois dias.',
			},
			{
				question: 'Quanto tempo devo planejar ficar na Índia?',
				answer:
					'A maioria dos casos de implantes e restauração requer cerca de 7–10 dias na Índia para a colocação, qualquer trabalho de coroa no mesmo dia e uma consulta de acompanhamento antes de voltar para casa.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe uma radiografia dentária recente ou fotos dos seus dentes pelo nosso formulário de contato, e nosso coordenador odontológico organizará uma revisão e um orçamento transparente em 24 horas.',
			},
		],
	},

	'eye-care': {
		name: 'Oftalmologia',
		shortDescription: 'Cirurgia de catarata e correção da visão, com alta no mesmo dia na maioria dos casos.',
		overview:
			'Os hospitais oftalmológicos da Índia realizam procedimentos de catarata e refrativos em volumes extremamente altos, dando aos cirurgiões profunda experiência em técnicas sem lâmina, assistidas por laser, com alta no mesmo dia para a maioria dos pacientes.',
		procedures: ['Cirurgia de catarata', 'LASIK', 'Tratamento de retina'],
		benefits: [
			'Cirurgia de catarata sem lâmina, assistida por laser',
			'Alta no mesmo dia para a maioria dos procedimentos',
			'Centros de alto volume com profunda experiência cirúrgica',
			'Opções de lentes intraoculares premium disponíveis',
		],
		flagshipProcedure: 'Cirurgia de catarata (facoemulsificação)',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '2–4 semanas', successRate: '98–99%' },
			{ country: 'Reino Unido', waitTime: '8–18 semanas (NHS)', successRate: '98–99%' },
			{ country: 'Alemanha', waitTime: '2–4 semanas', successRate: '97–99%' },
			{ country: 'Tailândia', waitTime: '1–2 semanas', successRate: '97–98%' },
			{ country: 'Índia', waitTime: '2–4 dias', successRate: '98%+' },
		],
		inclusions: [
			'Avaliação ocular pré-operatória, incluindo biometria e verificação de aptidão',
			'Honorários do cirurgião para a cirurgia de catarata sem lâmina, assistida por laser',
			'Lente intraocular (LIO) monofocal padrão',
			'Taxas de sala cirúrgica e procedimento estéril',
			'Alta no mesmo dia com colírios pós-operatórios',
			'Uma consulta de acompanhamento para confirmar a cicatrização e a correção da visão',
		],
		exclusions: [
			'Melhorias de LIO premium (lentes multifocais ou tóricas) além da lente monofocal padrão',
			'Tratamento de condições oculares não relacionadas, como glaucoma ou doenças da retina, descobertas na avaliação',
			'Cirurgia do segundo olho, se não orçada em conjunto',
			'Consultas de acompanhamento além da incluída',
			'Óculos ou lentes de contato após o procedimento',
		],
		faqs: [
			{
				question: 'Quanto custa a cirurgia de catarata na Índia?',
				answer:
					'A cirurgia de catarata na Índia começa em 700 USD por olho, cerca de 80% menos do que nos EUA, e inclui a avaliação pré-operatória, a cirurgia assistida por laser, uma LIO padrão e uma consulta de acompanhamento.',
			},
			{
				question: 'A intervenção é indolor e rápida?',
				answer:
					'Sim, a cirurgia moderna de catarata sem lâmina, assistida por laser, geralmente dura 15–20 minutos por olho, sob anestesia local, com a maioria dos pacientes recebendo alta no mesmo dia.',
			},
			{
				question: 'Posso escolher uma lente premium (multifocal ou tórica)?',
				answer:
					'Sim, opções de lentes intraoculares premium estão disponíveis para pacientes que desejam reduzir a dependência de óculos após a intervenção — são orçadas separadamente da lente monofocal padrão.',
			},
			{
				question: 'Quanto tempo devo planejar ficar na Índia?',
				answer:
					'A maioria dos pacientes de catarata planeja cerca de 4–7 dias na Índia para a avaliação pré-operatória, a intervenção e uma consulta de acompanhamento antes de voltar para casa; o LASIK segue um cronograma igualmente curto.',
			},
			{
				question: 'O LASIK está disponível para ambos os olhos em uma única visita?',
				answer:
					'Sim, o LASIK e outros procedimentos refrativos geralmente são realizados em ambos os olhos em uma única visita, no mesmo dia, para candidatos adequados, após uma avaliação pré-operatória detalhada.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe sua receita ocular recente ou relatórios existentes pelo nosso formulário de contato, e nosso coordenador de oftalmologia organizará uma avaliação especializada e um orçamento transparente em 24 horas.',
			},
		],
	},

	neurology: {
		name: 'Neurologia e neurocirurgia',
		shortDescription: 'Especialistas em cérebro, coluna vertebral e nervos, que tratam tumores, acidentes vasculares cerebrais e distúrbios neurológicos complexos.',
		overview:
			'Os centros de neurocirurgia da Índia combinam técnicas microcirúrgicas e guiadas por imagem com UTIs neurológicas dedicadas, dando aos pacientes internacionais acesso a cuidados avançados para tumores cerebrais e acidentes vasculares cerebrais, sem as longas listas de espera de especialistas comuns em outros países.',
		procedures: ['Cirurgia de tumor cerebral', 'Cirurgia de epilepsia', 'Cuidados com acidente vascular cerebral'],
		benefits: [
			'Neurocirurgiões formados em técnicas microcirúrgicas e minimamente invasivas',
			'RM intraoperatória e neuronavegação disponíveis em centros de ponta',
			'UTI neurológica dedicada com monitoramento crítico permanente',
			'Apoio estruturado de neurorreabilitação após a intervenção',
		],
		flagshipProcedure: 'Ressecção de tumor cerebral',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: '85–90%' },
			{ country: 'Reino Unido', waitTime: '3–9 meses (NHS)', successRate: '85–90%' },
			{ country: 'Alemanha', waitTime: '4–8 semanas', successRate: '84–89%' },
			{ country: 'Tailândia', waitTime: '2–4 semanas', successRate: '82–87%' },
			{ country: 'Índia', waitTime: '1–2 semanas', successRate: '85%+' },
		],
		inclusions: [
			'Avaliação neurológica pré-operatória, análise de RM/TC e verificação de aptidão',
			'Honorários do neurocirurgião e anestesista para o procedimento principal',
			'Taxas de sala cirúrgica, incluindo neuronavegação, quando aplicável',
			'Estadia em UTI neurológica (4 dias) mais 8 dias em quarto de recuperação intermediária',
			'Cuidados médicos e monitoramento neurológico padrão durante a hospitalização',
			'Taxas de laboratório e radiologia relacionadas ao procedimento',
			'Resumo de alta com plano estruturado de neurorreabilitação',
		],
		exclusions: [
			'Estadia pré-internação para estabilizar o paciente antes da aprovação da intervenção',
			'Estadia hospitalar ou em UTI além da duração do pacote',
			'Radioterapia ou quimioterapia para tumores malignos, orçadas separadamente',
			'Sessões de neurorreabilitação ambulatorial após a alta',
			'Tratamento de condições não relacionadas identificadas no check-up pré-operatório',
			'Nova intervenção por complicações não relacionadas ao procedimento inicial',
		],
		faqs: [
			{
				question: 'Quanto custa a cirurgia de um tumor cerebral na Índia?',
				answer:
					'A ressecção de um tumor cerebral na Índia começa em 9.000 USD, cerca de 90% menos do que nos EUA, e inclui a avaliação pré-operatória, a intervenção, a estadia em UTI neurológica e um plano estruturado de recuperação.',
			},
			{
				question: 'Técnicas de neurocirurgia minimamente invasiva estão disponíveis?',
				answer:
					'Sim, muitos de nossos hospitais parceiros oferecem abordagens guiadas por imagem e minimamente invasivas, incluindo RM intraoperatória e neuronavegação, que podem melhorar a precisão e reduzir a recuperação para os casos elegíveis.',
			},
			{
				question: 'Qual é a duração da estadia hospitalar para a neurocirurgia?',
				answer:
					'A maioria dos pacientes permanece hospitalizada por cerca de 12 dias — 4 dias em UTI neurológica e 8 dias em quarto de recuperação intermediária — com uma estadia total recomendada na Índia de cerca de 3–4 semanas para acompanhamento.',
			},
			{
				question: 'Será necessária radioterapia ou quimioterapia após a intervenção?',
				answer:
					'Para tumores malignos, sua equipe de neuro-oncologia pode recomendar radioterapia ou quimioterapia após a intervenção — essas são orçadas separadamente, de acordo com seu protocolo específico, e discutidas como parte do plano de tratamento.',
			},
			{
				question: 'Posso obter uma segunda opinião antes de viajar?',
				answer:
					'Sim, envie seus exames de RM/TC e relatórios para uma avaliação especializada gratuita — nosso comitê de neurocirurgia confirmará se a intervenção é recomendada, antes de você se comprometer a viajar.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe seus relatórios neurológicos e exames de imagem pelo nosso formulário de contato ou WhatsApp, e um coordenador organizará uma avaliação especializada e uma estimativa transparente em 48 horas.',
			},
		],
	},

	'spine-surgery': {
		name: 'Cirurgia de coluna',
		shortDescription: 'Fusão espinhal, substituição de disco e correção de escoliose, com programas estruturados de recuperação.',
		overview:
			'Os centros de cirurgia de coluna da Índia combinam cirurgiões de coluna formados por fellowship com técnicas minimamente invasivas e de preservação da mobilidade, ajudando pacientes com dor crônica nas costas, doença discal e deformidades da coluna a evitar as longas listas de espera comuns no Ocidente.',
		procedures: ['Fusão espinhal', 'Substituição de disco', 'Correção de escoliose'],
		benefits: [
			'Cirurgiões de coluna formados por fellowship, utilizando técnicas minimamente invasivas',
			'Opções de substituição de disco com preservação da mobilidade, em centros selecionados',
			'Fisioterapia estruturada no hospital desde o primeiro dia',
			'Estadia hospitalar típica de 5–7 dias para cirurgia maior de coluna',
		],
		flagshipProcedure: 'Fusão espinhal lombar',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '4–8 semanas', successRate: '88–92%' },
			{ country: 'Reino Unido', waitTime: '6–12 meses (NHS)', successRate: '88–92%' },
			{ country: 'Alemanha', waitTime: '4–8 semanas', successRate: '87–91%' },
			{ country: 'Tailândia', waitTime: '2–4 semanas', successRate: '85–89%' },
			{ country: 'Índia', waitTime: '1–2 semanas', successRate: '90%+' },
		],
		inclusions: [
			'Avaliação pré-operatória de coluna, incluindo análise de RM/radiografia',
			'Honorários do cirurgião e anestesista para o procedimento de coluna',
			'Taxas de sala cirúrgica e implante/hardware espinhal padrão',
			'Estadia em UTI (1 dia) mais 5 dias em quarto individual',
			'Sessões estruturadas de fisioterapia no hospital',
			'Laboratório, radiologia e medicamentos pós-operatórios padrão durante a estadia',
			'Resumo de alta com programa de exercícios em casa e plano de recuperação',
		],
		exclusions: [
			'Implantes espinhais premium ou personalizados além do hardware padrão',
			'Estadia hospitalar além da duração do pacote',
			'Fusão em múltiplos níveis, além dos níveis orçados na avaliação inicial',
			'Sessões de fisioterapia ambulatorial após a alta',
			'Tratamento de condições não relacionadas identificadas no check-up pré-operatório',
			'Cirurgia de revisão por complicações não relacionadas ao procedimento inicial',
		],
		faqs: [
			{
				question: 'Quanto custa a fusão espinhal na Índia?',
				answer:
					'Um pacote de fusão espinhal lombar na Índia começa em 6.500 USD, cerca de 90% menos do que os preços habituais nos EUA, e inclui os honorários do cirurgião, o implante, a estadia hospitalar e a fisioterapia no hospital.',
			},
			{
				question: 'A cirurgia minimamente invasiva de coluna está disponível?',
				answer:
					'Sim, vários de nossos hospitais parceiros oferecem técnicas minimamente invasivas e de preservação da mobilidade, como a substituição de disco, que podem reduzir a perda de sangue e encurtar a recuperação para candidatos adequados.',
			},
			{
				question: 'Qual é a duração da estadia hospitalar e da recuperação?',
				answer:
					'A maioria dos pacientes permanece hospitalizada por cerca de 6 dias e recomenda-se permanecer na Índia por 2–3 semanas, para que a equipe de coluna possa monitorar a recuperação inicial antes de voltar para casa.',
			},
			{
				question: 'Qual implante/hardware é utilizado?',
				answer:
					'Nossos hospitais parceiros utilizam como padrão sistemas de implantes espinhais certificados internacionalmente, com melhorias de hardware premium disponíveis mediante solicitação e orçamento separado.',
			},
			{
				question: 'Vou precisar de fisioterapia após a intervenção?',
				answer:
					'Sim, a fisioterapia estruturada no hospital começa pouco depois da intervenção, e seu cirurgião fornecerá um programa de exercícios em casa para continuar a recuperação após voltar para casa.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Envie a RM ou as radiografias da sua coluna pelo nosso formulário de contato e você receberá uma avaliação especializada e uma estimativa transparente de custos em 24 horas.',
			},
		],
	},

	'bariatric-surgery': {
		name: 'Cirurgia bariátrica',
		shortDescription: 'Sleeve gástrico, bypass e balão gástrico para uma perda de peso duradoura e supervisionada medicamente.',
		overview:
			'Os centros bariátricos da Índia combinam experiência cirúrgica laparoscópica com orientação dietética estruturada pré e pós-operatória, ajudando os pacientes a alcançar uma perda de peso duradoura, com estadias hospitalares mais curtas e recuperação mais rápida do que a cirurgia aberta.',
		procedures: ['Sleeve gástrico', 'Bypass gástrico', 'Balão gástrico'],
		benefits: [
			'Cirurgia bariátrica laparoscópica (minimamente invasiva) como padrão',
			'Orientação dietética e de estilo de vida estruturada, pré e pós-operatória',
			'Estadia hospitalar típica de apenas 2–3 dias para gastrectomia sleeve',
			'Apoio de acompanhamento de longo prazo para monitorar o progresso da perda de peso',
		],
		flagshipProcedure: 'Gastrectomia sleeve laparoscópica',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '3–6 semanas', successRate: '90–95%' },
			{ country: 'Reino Unido', waitTime: '6–12 meses (NHS)', successRate: '90–95%' },
			{ country: 'Alemanha', waitTime: '4–8 semanas', successRate: '89–94%' },
			{ country: 'Tailândia', waitTime: '1–3 semanas', successRate: '88–93%' },
			{ country: 'Índia', waitTime: '1–2 semanas', successRate: '92%+' },
		],
		inclusions: [
			'Avaliação pré-operatória, incluindo endoscopia e verificação de aptidão',
			'Consulta com o nutricionista e planejamento da dieta pré-operatória',
			'Honorários do cirurgião e anestesista para o procedimento laparoscópico',
			'Taxas de sala cirúrgica e grampeadores/insumos cirúrgicos padrão',
			'3 dias de estadia hospitalar, incluindo monitoramento pós-operatório',
			'Resumo de alta com plano estruturado de progressão dietética pós-operatória',
		],
		exclusions: [
			'Estadia hospitalar além da duração do pacote',
			'Cirurgia de revisão de um procedimento bariátrico anterior realizado em outro lugar',
			'Cirurgia plástica para remover o excesso de pele após uma perda de peso significativa',
			'Suplementos nutricionais de longo prazo além do kit inicial de alta',
			'Tratamento de condições não relacionadas identificadas no check-up pré-operatório',
			'Nova intervenção por complicações não relacionadas ao procedimento inicial',
		],
		faqs: [
			{
				question: 'Quanto custa a cirurgia de sleeve gástrico na Índia?',
				answer:
					'Um pacote de gastrectomia sleeve laparoscópica na Índia começa em 4.500 USD, cerca de 80% menos do que nos EUA, e inclui a avaliação pré-operatória, a intervenção, a estadia hospitalar e o plano dietético pós-operatório.',
			},
			{
				question: 'Sou elegível para a cirurgia bariátrica?',
				answer:
					'A elegibilidade geralmente é determinada pelo IMC e condições associadas — compartilhe sua altura, peso e quaisquer condições existentes pelo nosso formulário de contato para uma avaliação gratuita de elegibilidade pela nossa equipe bariátrica.',
			},
			{
				question: 'Quanto peso posso esperar perder?',
				answer:
					'A maioria dos pacientes perde 60–70% do excesso de peso em 12–18 meses após a gastrectomia sleeve ou o bypass, embora os resultados variem conforme o procedimento escolhido e a adesão à dieta e ao estilo de vida pós-operatório.',
			},
			{
				question: 'Qual é a duração da estadia hospitalar e da recuperação?',
				answer:
					'A maioria dos pacientes permanece hospitalizada por cerca de 3 dias e recomenda-se permanecer na Índia por 10–14 dias, para que a equipe cirúrgica possa confirmar a recuperação inicial antes de voltar para casa.',
			},
			{
				question: 'O procedimento é realizado por laparoscopia?',
				answer:
					'Sim, a gastrectomia sleeve, o bypass gástrico e a colocação do balão são todos realizados por laparoscopia como padrão, o que geralmente significa menos dor e recuperação mais rápida do que a cirurgia aberta.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe sua altura, peso e histórico médico pelo nosso formulário de contato, e nosso coordenador bariátrico organizará uma avaliação especializada em 24 horas.',
			},
		],
	},

	'nephrology-urology': {
		name: 'Nefrologia e urologia',
		shortDescription: 'Tratamento de cálculos renais, cirurgia de próstata e cuidados de diálise por equipes urológicas especializadas.',
		overview:
			'Os centros de urologia e nefrologia da Índia realizam procedimentos de cálculos renais e próstata em grandes volumes, utilizando técnicas a laser e minimamente invasivas, dando aos pacientes internacionais acesso rápido a especialistas, sem as listas de espera comuns em outros países.',
		procedures: ['Remoção de cálculos renais', 'Cirurgia de próstata', 'Cuidados de diálise'],
		benefits: [
			'Remoção de cálculos renais a laser e minimamente invasiva (NLPC/RIRS)',
			'Cirurgia de próstata robótica e laparoscópica disponível em centros de ponta',
			'Unidades de diálise dedicadas para pacientes que necessitam de cuidados renais contínuos',
			'Alta no mesmo dia ou no dia seguinte para muitos procedimentos minimamente invasivos',
		],
		flagshipProcedure: 'Nefrolitotomia percutânea (NLPC)',
		costComparison: [
			{ country: 'Estados Unidos', waitTime: '3–6 semanas', successRate: '92–96%' },
			{ country: 'Reino Unido', waitTime: '3–9 meses (NHS)', successRate: '92–96%' },
			{ country: 'Alemanha', waitTime: '3–6 semanas', successRate: '91–95%' },
			{ country: 'Tailândia', waitTime: '1–3 semanas', successRate: '90–94%' },
			{ country: 'Índia', waitTime: '3–7 dias', successRate: '94%+' },
		],
		inclusions: [
			'Avaliação pré-operatória, incluindo ultrassom/TC e verificação de aptidão',
			'Honorários do urologista e anestesista para o procedimento',
			'Taxas de sala cirúrgica e equipamento a laser/endoscópico',
			'2 dias de estadia hospitalar, incluindo monitoramento pós-operatório',
			'Medicamentos e insumos padrão durante a estadia',
			'Resumo de alta com plano de imagem de acompanhamento',
		],
		exclusions: [
			'Estadia hospitalar além da duração do pacote',
			'Tratamento de cálculos bilaterais (ambos os rins), se não orçado em conjunto',
			'Sessões de diálise de longo prazo além da estadia inicial de avaliação',
			'Medicamentos para levar para casa além do kit padrão de alta',
			'Tratamento de condições não relacionadas identificadas no check-up pré-operatório',
			'Nova intervenção por complicações não relacionadas ao procedimento inicial',
		],
		faqs: [
			{
				question: 'Quanto custa a remoção de cálculos renais na Índia?',
				answer:
					'Um pacote NLPC (remoção de cálculos renais) na Índia começa em 3.500 USD, cerca de 85% menos do que nos EUA, e inclui a avaliação pré-operatória, o procedimento, a estadia hospitalar e os exames de imagem de acompanhamento.',
			},
			{
				question: 'O tratamento de cálculos renais é minimamente invasivo?',
				answer:
					'Sim, a maioria dos cálculos é tratada com técnicas a laser minimamente invasivas, como NLPC ou RIRS, que geralmente permitem a alta em 1–2 dias, dependendo do tamanho e da localização do cálculo.',
			},
			{
				question: 'A cirurgia robótica de próstata está disponível?',
				answer:
					'Sim, vários de nossos hospitais parceiros oferecem cirurgia de próstata robótica e laparoscópica, que pode reduzir a perda de sangue e encurtar a recuperação em comparação com a cirurgia aberta.',
			},
			{
				question: 'Quanto tempo devo planejar ficar na Índia?',
				answer:
					'A maioria dos procedimentos urológicos requer cerca de 7–10 dias na Índia para a avaliação pré-operatória, o procedimento e uma consulta de acompanhamento antes de voltar para casa; casos complexos podem exigir uma estadia mais longa.',
			},
			{
				question: 'Vocês apoiam pacientes que precisam de diálise contínua?',
				answer:
					'Sim, nossos hospitais parceiros têm unidades de diálise dedicadas e podem coordenar cuidados renais contínuos para pacientes que viajam para avaliação ou que aguardam um transplante de rim.',
			},
			{
				question: 'Como eu começo?',
				answer:
					'Compartilhe seus relatórios de imagem (ultrassom/TC) pelo nosso formulário de contato, e nosso coordenador de urologia organizará uma avaliação especializada e um orçamento transparente em 24 horas.',
			},
		],
	},
};

export const getPtTreatment = (slug: string) => ptTreatments[slug];
