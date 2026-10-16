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
	detailedProcedures?: { name: string; description: string }[];
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
		detailedProcedures: [
			{
				name: 'Angioplastia Coronária',
				description:
					'A angioplastia coronária é um procedimento minimamente invasivo usado para desobstruir uma artéria coronária estreitada ou bloqueada e restaurar o fluxo sanguíneo para o músculo cardíaco em pacientes com doença arterial coronariana. Sob anestesia local, o cardiologista introduz um cateter fino por uma artéria do punho ou da virilha até o local da obstrução, guiado por imagens de raio-X em tempo real, e infla um pequeno balão para comprimir a placa contra a parede da artéria; na maioria dos casos, um stent de malha metálica é deixado no local para manter o vaso aberto e reduzir o risco de novo estreitamento. É geralmente indicada para pacientes com angina, fluxo sanguíneo reduzido em teste de esforço, ou como tratamento de emergência durante um infarto para reabrir rapidamente um vaso bloqueado. O procedimento é realizado em um laboratório de hemodinâmica e costuma levar menos de uma hora, com a maioria dos pacientes observados durante a noite e recebendo alta em um ou dois dias. Os centros cardíacos da Índia realizam um grande volume de angioplastias com imagens modernas e uma ampla variedade de stents, e os pacientes costumam retomar atividades leves em uma semana, com o cardiologista orientando sobre medicação e acompanhamento antes do retorno para casa.',
			},
			{
				name: 'Cirurgia de Bypass Coronário (CRM)',
				description:
					'A cirurgia de bypass coronário, conhecida como CRM (cirurgia de revascularização do miocárdio), é realizada quando uma ou mais artérias coronárias estão gravemente estreitadas ou bloqueadas e a angioplastia não é adequada, geralmente em pacientes com doença arterial coronariana multiarterial ou complexa. Durante a operação, o cirurgião cardíaco retira um vaso sanguíneo saudável de outra parte do corpo, geralmente a artéria mamária interna do tórax ou uma veia da perna, e o enxerta para redirecionar o fluxo sanguíneo ao redor do segmento bloqueado. A CRM tradicional é realizada por meio de uma incisão no esterno com o paciente em circulação extracorpórea, embora abordagens sem bomba e minimamente invasivas sejam usadas em casos selecionados. O objetivo é aliviar a angina, reduzir o risco de infarto e melhorar a função cardíaca a longo prazo. A recuperação envolve vários dias de internação, incluindo tempo em UTI logo após a cirurgia, seguido de um período estruturado de restrição de atividades e reabilitação cardíaca. Os programas de cirurgia cardíaca da Índia combinam equipes cirúrgicas experientes com UTIs bem equipadas, e os pacientes internacionais costumam planejar cerca de uma semana de internação seguida de algumas semanas de recuperação local antes de voar para casa, com avaliações da ferida e orientação de reabilitação ao longo do processo.',
			},
			{
				name: 'Cirurgia de Substituição da Válvula Mitral',
				description:
					'A substituição da válvula mitral é realizada quando a válvula que controla o fluxo sanguíneo entre o átrio esquerdo e o ventrículo esquerdo do coração se torna muito estreita (estenose) ou com vazamento (regurgitação) para funcionar adequadamente e não pode ser reparada de forma satisfatória. Sob anestesia geral e com o paciente em circulação extracorpórea, o cirurgião abre o coração, remove a válvula danificada e implanta uma substituta — mecânica, que é durável mas exige medicação anticoagulante por toda a vida, ou biológica (tecido), que evita a anticoagulação de longo prazo mas pode se desgastar mais cedo. A escolha entre os tipos de válvula depende da idade, do estilo de vida e da saúde geral do paciente, sendo discutida previamente com a equipe cirúrgica. O procedimento pode ser feito por esternotomia tradicional ou, em pacientes selecionados, por incisões menores e minimamente invasivas. Os pacientes costumam passar um ou dois dias em UTI, seguidos de mais alguns dias na enfermaria antes da alta. Os centros cardíacos da Índia oferecem tanto válvulas mecânicas quanto biológicas, além de cuidados pós-operatórios experientes, e os pacientes internacionais geralmente planejam cerca de uma semana de internação, com ecocardiogramas de acompanhamento organizados antes da viagem de volta para confirmar o bom funcionamento da válvula.',
			},
			{
				name: 'Substituição da Válvula Aórtica',
				description:
					'A substituição da válvula aórtica trata uma válvula aórtica doente — a válvula que controla o fluxo sanguíneo do coração para a artéria principal do corpo — que ficou estreitada (estenose) ou com vazamento (regurgitação), causando sintomas como falta de ar, dor no peito ou desmaios. Na cirurgia convencional de coração aberto, o tórax é aberto, o coração é temporariamente parado e sustentado por uma máquina de circulação extracorpórea, e o cirurgião remove a válvula doente e implanta uma substituta mecânica ou biológica adequada à anatomia do paciente. As válvulas mecânicas duram mais, mas exigem anticoagulante por toda a vida, enquanto as válvulas de tecido evitam isso mas podem precisar de substituição após dez a vinte anos, e a equipe cirúrgica ajuda o paciente a avaliar essas opções com base na idade e na saúde. A operação geralmente leva poucas horas, com os pacientes passando um tempo em UTI antes de serem transferidos para uma enfermaria comum. É uma das cirurgias cardíacas mais consolidadas realizadas na Índia, com centros que oferecem toda a gama de tipos de válvula e monitoramento perioperatório experiente. Os pacientes internacionais costumam permanecer na Índia por cerca de duas a três semanas no total, para permitir a cirurgia, a recuperação inicial e uma avaliação de acompanhamento antes de voar para casa.',
			},
			{
				name: 'Substituição Valvular Aórtica Transcateter (TAVI)',
				description:
					'A substituição valvular aórtica transcateter, ou TAVI, é uma alternativa minimamente invasiva à cirurgia de coração aberto para tratar a estenose aórtica grave, principalmente em pacientes idosos ou considerados de maior risco para a cirurgia convencional. Em vez de abrir o tórax, o cardiologista intervencionista introduz um cateter com uma válvula substituta colapsável por um vaso sanguíneo, geralmente na virilha, até o coração, onde ela é expandida e posicionada dentro da válvula doente existente, empurrando-a para o lado e assumindo imediatamente sua função. O procedimento costuma ser realizado sob sedação ou anestesia geral leve, guiado por imagens em tempo real, sem necessidade de parar o coração ou usar circulação extracorpórea. Por evitar uma grande incisão no tórax, a recuperação é geralmente mais rápida do que com a substituição cirúrgica, com muitos pacientes se mobilizando em um dia e recebendo alta hospitalar em poucos dias. A TAVI é cada vez mais oferecida nos centros cardíacos avançados da Índia para pacientes que atendem aos critérios anatômicos adequados, após uma avaliação cuidadosa por imagem para confirmar a adequação. Os pacientes internacionais costumam planejar de uma a duas semanas na Índia para a avaliação prévia, o procedimento em si e um curto período de recuperação antes do acompanhamento e da viagem de volta.',
			},
			{
				name: 'Cateterismo Cardíaco',
				description:
					'O cateterismo cardíaco é um procedimento diagnóstico, e por vezes terapêutico, no qual um cateter fino e flexível é introduzido por um vaso sanguíneo, geralmente no punho ou na virilha, até as câmaras e artérias do coração para avaliar diretamente seu funcionamento. Usando orientação por raio-X e contraste, o cardiologista pode visualizar as artérias coronárias em busca de obstruções, medir pressões dentro das câmaras cardíacas, avaliar a função valvular e, em alguns casos, coletar amostras de tecido. É comumente usado para investigar dor no peito, resultados anormais de testes de esforço, insuficiência cardíaca de causa indefinida ou suspeita de doença valvular ou cardíaca congênita, e muitas vezes serve como primeiro passo antes de decidir se angioplastia, colocação de stent ou cirurgia são necessárias. O procedimento é realizado sob anestesia local com sedação leve, costuma levar de trinta minutos a uma hora, e a maioria dos pacientes pode voltar para casa no mesmo dia ou após uma noite de internação. Os laboratórios de hemodinâmica da Índia contam com sistemas de imagem modernos que permitem diagnóstico preciso e, quando apropriado, tratamento imediato na mesma sessão. Os pacientes internacionais costumam precisar apenas de uma visita curta para o procedimento em si, com resultados e próximos passos discutidos diretamente com a equipe de cardiologia.',
			},
			{
				name: 'Valvotomia Pulmonar por Balão',
				description:
					'A valvotomia pulmonar por balão é um procedimento por cateter usado para tratar a estenose da válvula pulmonar, uma condição em que a válvula que controla o fluxo sanguíneo do ventrículo direito do coração para os pulmões está anormalmente estreitada, forçando o coração a trabalhar mais e reduzindo o fluxo sanguíneo para os pulmões. É frequentemente diagnosticada em bebês, crianças ou adultos jovens, às vezes como parte de uma condição cardíaca congênita presente desde o nascimento. Durante o procedimento, o cardiologista guia um cateter com um balão desinflado na ponta por uma veia, geralmente na virilha, até a válvula estreitada, e então infla o balão para alargá-la e aliviar a obstrução. O procedimento é realizado sob sedação ou anestesia geral em um laboratório de hemodinâmica, guiado por imagens de raio-X e ecocardiografia, e costuma levar de uma a duas horas. Por evitar a cirurgia de coração aberto, a recuperação costuma ser rápida, com a maioria dos pacientes observados durante a noite e recebendo alta em um ou dois dias. Os centros de cardiologia pediátrica e estrutural da Índia realizam rotineiramente a valvotomia por balão tanto em crianças quanto em adultos, com imagens cuidadosas antes do procedimento para confirmar a adequação. As famílias que viajam para este procedimento costumam planejar uma estadia curta de cerca de uma semana, incluindo avaliação prévia e ecocardiografia de acompanhamento.',
			},
			{
				name: 'Implantação de Marca-passo Cardíaco',
				description:
					'O marca-passo cardíaco é um pequeno dispositivo eletrônico implantado para ajudar a regular um batimento cardíaco anormalmente lento ou irregular, usado comumente para tratar condições como bradicardia, bloqueio cardíaco ou certas arritmias em que o sistema elétrico natural do coração não funciona de forma confiável. O dispositivo consiste em um gerador de pulsos, implantado logo abaixo da pele perto da clavícula, conectado a um ou mais fios finos que são guiados por uma veia até as câmaras do coração, onde detectam o ritmo cardíaco e emitem pequenos impulsos elétricos quando necessário para manter um batimento regular. A implantação costuma ser feita sob anestesia local com sedação, leva cerca de uma a duas horas, e é realizada por meio de uma pequena incisão em vez de cirurgia aberta. A maioria dos pacientes permanece internada durante a noite para monitoramento e tem as configurações do dispositivo verificadas antes da alta. Os centros de eletrofisiologia e cardiologia da Índia oferecem uma variedade de dispositivos de marca-passo de câmara única, dupla câmara e modelos mais avançados, adequados a diferentes distúrbios de ritmo. Os pacientes internacionais costumam planejar cerca de uma semana na Índia para permitir a avaliação prévia, a implantação e uma verificação inicial do dispositivo, com orientação sobre monitoramento remoto e acompanhamento com o médico de origem posteriormente.',
			},
			{
				name: 'Cirurgia Cardíaca Pediátrica',
				description:
					'A cirurgia cardíaca pediátrica abrange uma série de operações realizadas em bebês e crianças para corrigir defeitos cardíacos congênitos — problemas estruturais do coração presentes desde o nascimento, como orifícios entre as câmaras cardíacas, válvulas malformadas ou conexões anormais dos grandes vasos sanguíneos. O procedimento específico depende do defeito: algumas condições podem ser fechadas com um retalho durante cirurgia de coração aberto, usando uma máquina de circulação extracorpórea dimensionada para um paciente pequeno, enquanto outras envolvem reconstruir ou redirecionar vasos sanguíneos para estabelecer uma circulação normal. O diagnóstico geralmente se baseia em ecocardiografia, e às vezes em imagens de TC ou ressonância magnética, para mapear a anatomia exata antes de planejar a operação. Como os corações e vasos sanguíneos das crianças são pequenos e ainda em desenvolvimento, esses procedimentos exigem cirurgiões cardíacos pediátricos e anestesistas experientes em condições cardíacas congênitas, além de suporte dedicado de terapia intensiva pediátrica posteriormente. O tempo de recuperação varia amplamente conforme a complexidade do defeito e a idade da criança, de cerca de uma semana a várias semanas de internação. Os programas de cardiologia pediátrica da Índia tratam um amplo espectro de defeitos congênitos, muitas vezes para crianças de outros países, com acomodação familiar e cuidados pré e pós-operatórios coordenados em torno das necessidades dos pacientes jovens e de seus pais.',
			},
			{
				name: 'Implante de Coração Artificial / DAVE (LVAD)',
				description:
					'O dispositivo de assistência ventricular esquerda, ou DAVE (LVAD, na sigla em inglês), é uma bomba mecânica implantada para ajudar um coração gravemente enfraquecido a circular o sangue, usada em pacientes com insuficiência cardíaca avançada que não responderam adequadamente à medicação. O dispositivo é conectado cirurgicamente ao ventrículo esquerdo e à aorta, retirando sangue da câmara enfraquecida e bombeando-o para a artéria principal do corpo no lugar do músculo cardíaco insuficiente; um cabo sai através da pele até um controlador externo e uma bateria usados pelo paciente. O DAVE pode servir como ponte para um transplante cardíaco enquanto o paciente aguarda um órgão doador, ou como terapia de longo prazo para quem não é candidato a transplante. A implantação exige cirurgia de coração aberto com circulação extracorpórea, seguida de uma internação prolongada que inclui monitoramento em UTI e treinamento do paciente e dos cuidadores para operar o dispositivo. O termo coração artificial às vezes é usado de forma genérica para o DAVE, embora corações artificiais totais, que substituem completamente o coração, sejam uma tecnologia separada e mais rara. Os centros avançados de insuficiência cardíaca da Índia oferecem implantação de DAVE e os cuidados especializados de acompanhamento que ela exige, e os pacientes devem esperar uma estadia prolongada de várias semanas para a cirurgia, a recuperação e o treinamento com o dispositivo antes de viajar.',
			},
			{
				name: 'Reparo Endovascular de Aneurisma da Aorta',
				description:
					'O reparo endovascular de aneurisma da aorta, ou EVAR, é um procedimento minimamente invasivo usado para tratar um aneurisma de aorta — uma seção dilatada e enfraquecida da artéria principal do corpo que apresenta risco de ruptura se não tratada. Em vez de abrir o abdômen ou o tórax para substituir diretamente o segmento afetado, o cirurgião vascular acessa as artérias femorais na virilha e introduz uma endoprótese de metal revestida de tecido pelos vasos sanguíneos até o local do aneurisma, onde ela é expandida para revestir a artéria por dentro e redirecionar o fluxo sanguíneo para longe da parede enfraquecida. O procedimento é realizado sob anestesia regional ou geral, guiado por imagens contínuas de raio-X, e costuma levar de uma a três horas, dependendo da localização e complexidade do aneurisma. Por evitar uma grande incisão cirúrgica, a recuperação é geralmente mais rápida do que no reparo aberto, com muitos pacientes se mobilizando em um ou dois dias e recebendo alta em cerca de uma semana. Imagens cuidadosas de TC previamente confirmam que o formato e o tamanho do aneurisma são adequados para uma endoprótese. Os centros de cirurgia vascular da Índia oferecem o EVAR com uma variedade de dispositivos de endoprótese, e os pacientes internacionais costumam planejar cerca de duas semanas para permitir a avaliação, o procedimento e o acompanhamento por imagem após o procedimento.',
			},
			{
				name: 'Cirurgia de Coração Aberto',
				description:
					'Cirurgia de coração aberto é um termo amplo para qualquer operação cardíaca em que o tórax é aberto cirurgicamente, geralmente por uma incisão no esterno, para dar à equipe cirúrgica acesso direto ao coração e aos seus principais vasos. Muitas dessas operações são realizadas com o coração temporariamente parado e uma máquina de circulação extracorpórea assumindo a circulação e a respiração, permitindo que o cirurgião trabalhe em um coração imóvel e sem sangue antes de reiniciá-lo. Motivos comuns para a cirurgia de coração aberto incluem contornar artérias coronárias bloqueadas, reparar ou substituir válvulas cardíacas danificadas, corrigir defeitos congênitos e reparar aneurismas que envolvem o coração ou os grandes vasos. A técnica e a duração dependem da condição subjacente, mas a maioria das operações leva várias horas e é seguida de tempo em UTI enquanto o paciente é desmamado do suporte ventilatório e monitorado quanto a sangramento, infecção e alterações de ritmo. Uma internação mais longa, de uma a duas semanas, costuma seguir-se, junto com reabilitação cardíaca estruturada para recuperar força e resistência. Os centros de cirurgia cardíaca da Índia realizam um grande volume de procedimentos de coração aberto nessas categorias, apoiados por UTIs cardíacas dedicadas, e os pacientes internacionais geralmente planejam várias semanas no país para cobrir a cirurgia e a recuperação inicial.',
			},
			{
				name: 'Tratamento de Cardiopatia Congênita',
				description:
					'A cardiopatia congênita refere-se a anomalias estruturais do coração ou dos grandes vasos sanguíneos presentes desde o nascimento, variando de pequenos orifícios entre as câmaras cardíacas que podem se fechar sozinhos até malformações complexas que exigem correção cirúrgica em etapas. O tratamento é altamente individualizado e começa com imagens diagnósticas detalhadas, geralmente ecocardiografia e, às vezes, TC ou ressonância magnética cardíaca, para mapear o defeito exato antes que um cardiologista congênito pediátrico ou adulto e a equipe cirúrgica decidam a melhor abordagem. Alguns defeitos, como pequenas comunicações interatriais ou interventriculares, podem ser fechados com dispositivos por cateter sem cirurgia aberta, enquanto condições mais complexas exigem cirurgia de coração aberto, às vezes realizada em etapas ao longo de meses ou anos, conforme o paciente cresce. Muitos pacientes são diagnosticados e tratados ainda na infância, mas um número crescente de adultos com cardiopatia congênita também precisa de cuidados contínuos ou corretivos, à medida que defeitos leves na infância progridem com o tempo. Os programas de cardiopatia congênita da Índia tratam todo o espectro dessas condições, desde fechamentos simples por dispositivo até reconstruções complexas em etapas, com equipes dedicadas tanto para pacientes pediátricos quanto adultos. Como os planos de tratamento variam muito conforme o defeito, as famílias internacionais costumam começar com uma avaliação detalhada remota ou presencial antes de confirmar um cronograma de tratamento e a duração da estadia.',
			},
		],
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
		detailedProcedures: [
			{
				name: 'Substituição Total do Joelho',
				description:
					'A substituição total do joelho, ou artroplastia total do joelho, é um procedimento cirúrgico que resurfaça uma articulação do joelho danificada por osteoartrite, artrite reumatoide ou desgaste pós-traumático, usando um implante artificial feito de liga metálica e polietileno de grau médico. O cirurgião ortopédico remove a cartilagem desgastada e uma fina camada de osso da extremidade do fêmur e do topo da tíbia, e então encaixa componentes metálicos moldados sobre essas superfícies com um espaçador plástico entre eles que recria o movimento suave da articulação; a superfície da patela também pode ser resurfaçada dependendo de sua condição. Geralmente é recomendada quando medidas conservadoras, como fisioterapia, controle de peso, medicação e injeções, não controlam mais a dor ou restauram a mobilidade. A cirurgia é realizada sob anestesia raquidiana ou geral e leva cerca de uma a duas horas, com muitos centros utilizando atualmente orientação assistida por computador ou braço robótico para melhorar o alinhamento do implante. Os hospitais indianos tratam um grande volume de casos de substituição articular todos os anos e oferecem técnicas tradicionais e minimamente invasivas. A recuperação envolve caminhada supervisionada em até um dia após a cirurgia, internação de vários dias e um programa estruturado de fisioterapia nas semanas seguintes para recuperar força e amplitude de movimento.',
			},
			{
				name: 'Substituição Total do Quadril',
				description:
					'A substituição total do quadril, ou artroplastia total do quadril, substitui uma articulação do quadril desgastada por osteoartrite, necrose avascular, artrite reumatoide ou fratura por um implante artificial do tipo bola e soquete. Durante a cirurgia, o cirurgião ortopédico remove a cabeça femoral danificada e remodela o soquete do quadril (acetábulo), e então encaixa uma haste metálica ou cerâmica no fêmur, coberta por um componente esférico que se articula contra um novo revestimento fixado na pelve. A abordagem pode ser posterior, anterior ou minimamente invasiva, escolhida com base na anatomia do paciente e na preferência do cirurgião, e o procedimento geralmente leva de uma a duas horas sob anestesia raquidiana ou geral. Costuma ser considerada quando a dor, a rigidez e a mobilidade reduzida do quadril persistem apesar da fisioterapia, das precauções de sustentação de peso e da medicação para dor, e quando exames de imagem confirmam degeneração articular significativa. Muitos centros ortopédicos indianos realizam grandes volumes de substituições de quadril anualmente e oferecem opções de fixação cimentada, não cimentada e híbrida, além de técnicas robóticas ou navegadas por computador para posicionamento preciso do implante. Após a cirurgia, os pacientes costumam se mobilizar com um andador em um ou dois dias, permanecem internados por vários dias e seguem um programa estruturado de reabilitação nas semanas seguintes para restaurar a força e o padrão de marcha.',
			},
			{
				name: 'Artroscopia do Joelho',
				description:
					'A artroscopia do joelho é uma técnica cirúrgica minimamente invasiva usada para diagnosticar e tratar problemas dentro da articulação do joelho por meio de pequenas incisões, em vez de um grande corte aberto. O cirurgião insere uma fina câmera de fibra óptica, chamada artroscópio, junto com instrumentos cirúrgicos delicados por algumas pequenas portas ao redor do joelho, permitindo a visualização direta da cartilagem, dos ligamentos, do menisco e do revestimento articular em um monitor. É comumente usada para aparar ou reparar tecido meniscal rompido, remover fragmentos soltos de cartilagem, suavizar superfícies cartilaginosas ásperas, lavar tecido articular inflamado ou tratar outras causas estruturais de dor persistente, inchaço, travamento ou bloqueio do joelho que não responderam a repouso, fisioterapia ou medicação. O procedimento costuma ser feito sob anestesia raquidiana, regional ou geral e leva de trinta minutos a pouco mais de uma hora, dependendo dos achados e do tratamento necessário. Por causa das pequenas incisões, os pacientes geralmente sentem menos dor pós-operatória e retornam mais rápido às atividades diárias em comparação com a cirurgia aberta do joelho. Os centros ortopédicos indianos realizam rotineiramente artroscopia do joelho em regime ambulatorial ou de curta permanência, com a maioria dos pacientes caminhando com apoio no mesmo dia e iniciando fisioterapia orientada pouco depois para restaurar a função completa do joelho.',
			},
			{
				name: 'Reconstrução Artroscópica do LCA',
				description:
					'A reconstrução artroscópica do LCA repara o ligamento cruzado anterior rompido, um dos principais ligamentos estabilizadores do joelho, frequentemente lesionado durante esportes que envolvem giros súbitos, saltos ou mudanças de direção. Como o LCA rompido não cicatriza de forma confiável por conta própria, os cirurgiões o reconstroem usando um enxerto, geralmente retirado dos tendões isquiotibiais ou patelar do próprio paciente, ou ocasionalmente de tecido doador, que é passado por túneis perfurados no fêmur e na tíbia e fixado com parafusos ou dispositivos de fixação para recriar a posição e a função originais do ligamento. O procedimento é realizado por via artroscópica, através de pequenas incisões de porta, usando câmera e instrumentos especializados, evitando a necessidade de uma grande incisão aberta, e geralmente leva de uma a duas horas sob anestesia regional ou geral. Costuma ser recomendado para pacientes com instabilidade no joelho, episódios de "falseio" ou incapacidade de retomar o esporte ou um trabalho fisicamente exigente após a lesão do LCA. As unidades indianas de medicina esportiva e ortopedia oferecem técnicas de enxerto tanto isquiotibial quanto patelar, além de posicionamento de túnel assistido por robô ou navegação. A recuperação envolve um programa de reabilitação estruturado e de vários meses, com sustentação de peso progressiva, fortalecimento e treino de equilíbrio antes do retorno seguro à atividade esportiva.',
			},
			{
				name: 'Reconstrução Artroscópica do LCP',
				description:
					'A reconstrução artroscópica do LCP trata o ligamento cruzado posterior rompido, um ligamento estabilizador mais forte e menos comumente lesionado, localizado atrás do LCA, que normalmente se rompe por um golpe direto na frente da canela — como em uma lesão contra o painel do carro durante um acidente de trânsito — ou por uma queda forte sobre o joelho dobrado. Muitas lesões parciais do LCP são tratadas sem cirurgia, com órtese e fisioterapia, mas rupturas completas que causam instabilidade persistente, ou combinadas com outras lesões ligamentares, geralmente exigem reconstrução cirúrgica. O cirurgião usa instrumentos artroscópicos e uma câmera inseridos por pequenas portas para remover os remanescentes do ligamento danificado e passar um enxerto de tendão, muitas vezes retirado dos isquiotibiais, do tendão patelar ou de uma fonte doadora, por túneis ósseos no fêmur e na tíbia, fixando-o sob tensão controlada para restaurar a estabilidade do joelho. A operação geralmente leva de duas a três horas sob anestesia regional ou geral e é tecnicamente mais exigente do que a reconstrução do LCA devido à posição e ao suprimento sanguíneo do ligamento. Os centros ortopédicos e de lesões esportivas da Índia têm cirurgiões experientes em técnicas de reconstrução do LCP de feixe único e duplo. A recuperação exige um programa de reabilitação mais longo e cuidadosamente escalonado em comparação com a cirurgia do LCA, com órteses e protocolos de carga gradual para proteger o enxerto em cicatrização.',
			},
			{
				name: 'Cirurgia de Lesão do Menisco',
				description:
					'A cirurgia de lesão do menisco trata danos às almofadas de cartilagem em forma de "C" dentro do joelho que absorvem impacto e estabilizam a articulação entre o fêmur e a tíbia, lesões que ocorrem comumente por movimentos de torção durante o esporte ou por degeneração gradual em adultos mais velhos. Dependendo da localização, do tamanho e do padrão da ruptura, o cirurgião realiza um de dois procedimentos artroscópicos: o reparo do menisco, no qual as bordas rompidas são costuradas para preservar o máximo possível de cartilagem, especialmente em pacientes mais jovens com rupturas na zona externa bem vascularizada, ou a meniscectomia parcial, na qual a porção danificada e instável do menisco é aparada, mantendo o tecido saudável. Ambos os procedimentos são realizados por pequenas incisões de porta usando um artroscópio e instrumentos finos, geralmente levando de trinta a sessenta minutos sob anestesia raquidiana ou geral. A cirurgia costuma ser indicada quando dor, inchaço, travamento ou bloqueio persistem apesar do repouso e da fisioterapia, ou quando uma ressonância magnética confirma uma ruptura reparável ou instável. As unidades de artroscopia indianas oferecem rotineiramente tanto o reparo quanto a meniscectomia, selecionando a abordagem que melhor preserva a função do joelho a longo prazo. A recuperação após a meniscectomia costuma ser mais rápida, enquanto o reparo exige um período de reabilitação mais protegido para permitir a cicatrização do tecido costurado.',
			},
			{
				name: 'Cirurgia de Arcabouço de Cartilagem (Scaffold)',
				description:
					'A cirurgia de arcabouço de cartilagem é uma técnica de preservação articular usada para tratar áreas de cartilagem articular danificada ou ausente — o tecido liso que recobre as extremidades dos ossos dentro de uma articulação — mais frequentemente no joelho, após lesão, estresse repetitivo ou degeneração localizada precoce. Como a cartilagem tem capacidade limitada de autocicatrização, o procedimento envolve implantar um arcabouço biocompatível, às vezes semeado com as próprias células de cartilagem do paciente ou células derivadas da medula óssea, no defeito, para fornecer uma estrutura que incentive a formação de novo tecido semelhante à cartilagem ao longo do tempo. Costuma ser realizado por artroscopia ou por uma pequena incisão, com a área danificada primeiro preparada e medida antes que o arcabouço seja moldado, fixado com cola de fibrina ou suturas, e deixado para se integrar ao tecido ao redor. Os candidatos costumam ser pacientes mais jovens e ativos com um defeito focal de cartilagem e alinhamento articular razoavelmente preservado, em vez de artrite generalizada, já que o objetivo é adiar ou evitar a necessidade de substituição articular. Os centros ortopédicos indianos que oferecem serviços de medicina regenerativa e esportiva disponibilizam várias técnicas de reparo de cartilagem baseadas em arcabouço e células, adequadas ao tamanho e à profundidade do defeito. A recuperação envolve um período protegido de sustentação de peso e reabilitação gradual e rigorosamente supervisionada para permitir a maturação do novo tecido.',
			},
			{
				name: 'Estabilização Artroscópica do Ombro',
				description:
					'A estabilização artroscópica do ombro é realizada para corrigir um ombro que se desloca ou subluxa repetidamente devido a ligamentos e tecido labral esticados, rompidos ou destacados, que normalmente mantêm a cabeça da articulação do ombro firmemente encaixada em seu soquete. A instabilidade costuma seguir-se a uma luxação traumática inicial, frequentemente durante esporte ou uma queda, após a qual as estruturas de tecido mole da articulação não cicatrizam com firmeza suficiente para evitar novos episódios. Usando um artroscópio e instrumentos finos inseridos por pequenas incisões de porta ao redor do ombro, o cirurgião reconecta ou tensiona o lábio e a cápsula rompidos à borda do soquete usando âncoras de sutura, restaurando a tensão necessária para manter a articulação centralizada durante o movimento. O procedimento geralmente leva cerca de uma hora e é realizado sob bloqueio nervoso regional combinado com sedação leve ou anestesia geral. Costuma ser recomendado para pacientes com instabilidade recorrente, sinal de apreensão positivo no exame e imagens mostrando lesão labral ou capsular, especialmente indivíduos mais jovens ou fisicamente ativos com alto risco de nova luxação. As unidades indianas de ombro e lesões esportivas realizam rotineiramente essa técnica artroscópica. A recuperação envolve um período de imobilização com tipoia seguido de um programa estruturado de fisioterapia para recuperar o movimento e reconstruir a força ao redor da articulação.',
			},
			{
				name: 'Reparo Artroscópico do Manguito Rotador',
				description:
					'O reparo artroscópico do manguito rotador trata um manguito rotador rompido — o grupo de quatro músculos e tendões que estabilizam o ombro e erguem o braço — que pode se romper subitamente por uma queda ou lesão, ou gradualmente por desgaste relacionado à idade e atividade repetitiva acima da cabeça. Os pacientes costumam apresentar dor no ombro que piora à noite, fraqueza ao levantar ou girar o braço, e dificuldade em tarefas acima da cabeça que não melhoraram com repouso, fisioterapia ou injeções. Durante o procedimento, o cirurgião insere um artroscópio e pequenos instrumentos por algumas incisões de porta ao redor do ombro, apara qualquer tecido inflamado ou desfiado, e reconecta a borda do tendão rompido ao seu ponto de inserção original no úmero usando âncoras de sutura, restaurando a tração do tendão sobre o osso. A operação costuma ser realizada sob bloqueio regional com sedação ou anestesia geral e leva cerca de uma a duas horas, dependendo do tamanho e da complexidade da ruptura. As unidades ortopédicas e de especialidade em ombro da Índia oferecem essa técnica tanto para rupturas parciais quanto de espessura total. Após a cirurgia, o braço é protegido com uma tipoia por várias semanas enquanto o tendão cicatriza, seguido de um programa gradual de fisioterapia que progride de movimento passivo a exercícios de fortalecimento ativo ao longo de meses.',
			},
			{
				name: 'Reparo Artroscópico de Bankart',
				description:
					'O reparo artroscópico de Bankart trata especificamente uma lesão de Bankart — uma ruptura do lábio, o anel de cartilagem que aprofunda o soquete do ombro — na borda ântero-inferior da articulação, uma lesão que ocorre comumente durante uma luxação traumática do ombro e é uma das principais causas de instabilidade recorrente. Se não tratada, a lesão de Bankart permite que o ombro continue escorregando ou se luxando completamente com esforço relativamente pequeno, especialmente em pacientes jovens e atletas. Por meio de pequenas incisões de porta, o cirurgião usa um artroscópio para visualizar o lábio destacado e o reconecta à borda óssea do soquete usando âncoras de sutura posicionadas em intervalos ao longo da ruptura, restaurando o efeito de "para-choque" labral que ajuda a manter a cabeça umeral centralizada. Em casos com perda óssea associada no soquete, procedimentos adicionais de enxerto ósseo podem ser combinados com o reparo. A cirurgia geralmente leva cerca de uma hora sob anestesia regional com sedação ou anestesia geral. As unidades indianas de artroscopia de ombro realizam o reparo de Bankart rotineiramente para pacientes com lesão labral confirmada por ressonância magnética ou artrotomografia e histórico de luxação recorrente. Os cuidados pós-operatórios envolvem várias semanas de imobilização com tipoia, seguidas de um programa de fisioterapia em fases para restaurar movimento, estabilidade e força.',
			},
			{
				name: 'Cirurgia de Ombro por Vídeo (Artroscópica)',
				description:
					'A cirurgia de ombro por vídeo, ou artroscópica, é uma abordagem minimamente invasiva usada para diagnosticar e tratar uma ampla variedade de condições do ombro por meio de algumas pequenas incisões, em vez de um grande corte aberto. Uma câmera fina chamada artroscópio é inserida na articulação para dar ao cirurgião uma visão ampliada e detalhada dos tendões, ligamentos, cartilagem e revestimento articular em um monitor, enquanto instrumentos delicados passados por portas separadas são usados para aparar, reparar ou reconstruir o tecido danificado. Essa técnica é aplicada a condições que vão desde rupturas do manguito rotador e instabilidade do ombro até síndrome do impacto, liberação do ombro congelado e remoção de corpos soltos ou esporões ósseos, com as etapas específicas dependendo do que é encontrado e tratado. Geralmente é oferecida quando sintomas como dor, fraqueza, rigidez ou movimento restrito não melhoram com repouso, fisioterapia e medicação. Realizada sob bloqueio nervoso regional, sedação ou anestesia geral, as incisões menores costumam resultar em menos dor pós-operatória, menor risco de infecção e uma recuperação inicial mais rápida do que a cirurgia tradicional aberta do ombro. Os centros ortopédicos indianos com unidades dedicadas ao ombro oferecem essa técnica para a maioria dos distúrbios comuns do ombro. A recuperação ainda exige um programa de fisioterapia estruturado e específico para a condição, para recuperar a função completa do ombro nas semanas e meses seguintes.',
			},
			{
				name: 'Cirurgia de Câncer Ósseo',
				description:
					'A cirurgia de câncer ósseo é realizada para remover tumores malignos que surgem dentro do tecido ósseo, como osteossarcoma, sarcoma de Ewing ou condrossarcoma, ou que se espalharam para o osso a partir de câncer em outra parte do corpo. O planejamento do tratamento geralmente começa com exames de imagem, incluindo raio-X, ressonância magnética, TC e cintilografia óssea, além de uma biópsia para confirmar o tipo e o grau do tumor, após o que uma equipe multidisciplinar decide a combinação mais adequada de cirurgia, quimioterapia e radioterapia. Quando viável, os cirurgiões hoje preferem a cirurgia de preservação do membro, removendo o tumor junto com uma margem de tecido saudável e reconstruindo o osso e a articulação afetados usando uma endoprótese metálica, enxerto ósseo ou uma combinação de ambos, preservando o membro em vez de recorrer à amputação, reservada para casos em que o tumor envolve nervos, vasos ou tecido mole extensos. A cirurgia costuma ser realizada sob anestesia geral e pode levar várias horas, dependendo do tamanho, da localização e da complexidade da reconstrução necessária. Os centros de oncologia ortopédica da Índia oferecem técnicas de preservação do membro junto com protocolos de quimioterapia administrados antes e depois da cirurgia. A recuperação envolve internação de uma a duas semanas, seguida de um programa de reabilitação prolongado para recuperar a função, com acompanhamento contínuo para monitorar recidivas.',
			},
			{
				name: 'Cirurgia de Alongamento de Membros',
				description:
					'A cirurgia de alongamento de membros aumenta gradualmente o comprimento de um osso encurtado, geralmente na perna, para corrigir a discrepância de comprimento de membros causada por condições congênitas, lesão da placa de crescimento na infância, infecção, consolidação viciosa de fratura ou certas displasias esqueléticas. O cirurgião primeiro realiza um corte cirúrgico controlado do osso, chamado osteotomia, sem perturbar o suprimento sanguíneo ao redor, e então aplica um fixador externo usado fora do membro ou um prego de alongamento interno, acionado magneticamente, colocado dentro do osso. Nas semanas seguintes, o dispositivo é ajustado diariamente em pequenos incrementos, geralmente cerca de um milímetro por dia, permitindo que novo osso se forme gradualmente no espaço, enquanto os tecidos moles, nervos e vasos sanguíneos se alongam junto com ele. O período total de tratamento, incluindo a fase de alongamento e a consolidação óssea subsequente, geralmente abrange vários meses e exige monitoramento próximo com radiografias periódicas para acompanhar a cicatrização óssea e ajustar o plano conforme necessário. Os centros indianos de reconstrução de membros oferecem técnicas tanto de fixador externo quanto de prego interno, dependendo da quantidade de alongamento necessária e da preferência do paciente. A fisioterapia ao longo do processo ajuda a manter o movimento articular e a força muscular, e a maioria dos pacientes precisa de uma estadia prolongada no país de tratamento para permitir o monitoramento seguro durante a fase ativa de alongamento.',
			},
			{
				name: 'Cirurgia de Pé Torto Congênito',
				description:
					'A cirurgia de pé torto congênito trata o pé torto congênito (talipes equinovaro), uma condição de nascimento em que um ou ambos os pés são virados para dentro e para baixo devido a tendões encurtados e alinhamento anormal dos ossos do pé. A maioria dos casos hoje é inicialmente tratada com o método de Ponseti, uma abordagem não cirúrgica que usa manipulação suave seriada e gessos ao longo de várias semanas para corrigir gradualmente a posição do pé, muitas vezes seguida de um procedimento menor para liberar um tendão de Aquiles tenso. A cirurgia se torna necessária quando a correção pelo gesso é incompleta, quando a deformidade é resistente ou recidiva, ou em crianças mais velhas cujo pé torto não foi tratado precocemente, e pode variar de uma liberação ou transferência tendínea limitada a procedimentos ósseos e articulares mais extensos para realinhar estruturalmente o pé. A operação específica depende da idade da criança, da gravidade da deformidade e de quais tecidos estão contribuindo para a posição anormal. A cirurgia é realizada sob anestesia geral, e o pé geralmente é imobilizado em gesso depois para proteger a correção enquanto cicatriza. Os centros de ortopedia pediátrica da Índia tratam o pé torto tanto com protocolos baseados no método de Ponseti quanto com correção cirúrgica para casos resistentes ou negligenciados. Acompanhamento de longo prazo com órteses e monitoramento geralmente é necessário conforme a criança cresce.',
			},
			{
				name: 'Tratamento de Displasia do Quadril',
				description:
					'O tratamento da displasia do quadril aborda a displasia do desenvolvimento do quadril, uma condição em que o soquete do quadril é raso demais para cobrir e estabilizar adequadamente a cabeça do fêmur, variando de frouxidão leve à luxação completa, e mais frequentemente identificada na infância por meio de triagem, mas às vezes diagnosticada mais tarde na infância ou na idade adulta. Em bebês pequenos, o tratamento geralmente começa com um suspensório de posicionamento, como o suspensório de Pavlik, usado por várias semanas para guiar suavemente o quadril a uma posição estável e bem encaixada, enquanto o soquete se desenvolve normalmente. Quando a displasia é diagnosticada mais tarde, é mais grave ou não responde ao suspensório, podem ser necessárias opções cirúrgicas, que vão desde a redução fechada ou aberta da articulação do quadril até uma osteotomia periacetabular ou pélvica que remodela e reposiciona o soquete para cobrir melhor a cabeça femoral, às vezes combinada com uma osteotomia femoral. A cirurgia é realizada sob anestesia geral e costuma ser seguida de um período de imobilização com gesso ou órtese para proteger a correção. As unidades indianas de preservação do quadril pediátrico e adulto oferecem tanto protocolos de suspensório para bebês quanto técnicas de osteotomia reconstrutiva para crianças mais velhas e adultos jovens. O acompanhamento de longo prazo é importante, pois a displasia não tratada ou corrigida de forma inadequada pode levar à artrite precoce do quadril.',
			},
			{
				name: 'Tratamento de Distúrbios Musculoesqueléticos',
				description:
					'O tratamento de distúrbios musculoesqueléticos abrange o diagnóstico e o manejo de uma ampla gama de condições que afetam ossos, articulações, músculos, tendões, ligamentos e nervos que compõem o sistema de movimento do corpo, incluindo artrite, dor crônica nas costas e no pescoço, lesões de tendões e ligamentos, fraturas, deformidades e condições degenerativas da coluna. O manejo geralmente começa com uma avaliação clínica e exames de imagem, como raio-X, ressonância magnética ou TC, para identificar a causa subjacente da dor, rigidez, fraqueza ou movimento restrito, após o que um especialista ortopédico recomenda um caminho de tratamento que pode incluir fisioterapia, medicação, injeções direcionadas, órteses ou cirurgia, dependendo da gravidade e da natureza da condição. Quando a cirurgia é necessária, pode variar de procedimentos artroscópicos minimamente invasivos a substituição articular, fixação espinhal ou cirurgia reconstrutiva corretiva, escolhidos de acordo com o diagnóstico específico e os objetivos gerais de saúde e função do paciente. Os centros ortopédicos multiespecialidades da Índia reúnem equipes de substituição articular, coluna, medicina esportiva e fisioterapia para tratar problemas musculoesqueléticos complexos ou de longa data sob um plano coordenado único. Como as apresentações variam muito, uma revisão inicial de exames de imagem e relatórios clínicos anteriores ajuda a determinar a abordagem de tratamento mais adequada antes que o paciente viaje. Os prazos de recuperação e reabilitação dependem inteiramente do distúrbio específico tratado e da intervenção escolhida.',
			},
		],
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
		detailedProcedures: [
			{
				name: 'Tratamento do Câncer de Mama',
				description:
					'O tratamento do câncer de mama na Índia é planejado por uma junta multidisciplinar dedicada, que analisa sua mamografia, biópsia e relatórios de receptores hormonais (ER/PR/HER2) antes de recomendar um curso adaptado ao estágio e ao tipo de tumor. Dependendo do diagnóstico, o tratamento pode combinar cirurgia conservadora da mama (tumorectomia) ou mastectomia com biópsia do linfonodo sentinela, seguida de quimioterapia adjuvante, terapia-alvo (como trastuzumabe para doença HER2-positiva), terapia hormonal e radioterapia para reduzir o risco de recidiva. Opções de reconstrução, incluindo reconstrução mamária imediata ou tardia, estão disponíveis para pacientes que optam pela mastectomia. Os principais centros de oncologia da Índia usam mamografia digital, biópsia guiada por ressonância magnética e análise intraoperatória por congelação para planejar cirurgias conservadoras e poupadoras de tecido sempre que o estágio do tumor permitir. Os pacientes geralmente precisam de uma curta internação para a cirurgia, com quimioterapia e radioterapia administradas em regime ambulatorial nas semanas seguintes — muitos pacientes planejam uma estadia mais longa na Índia para concluir um ciclo inicial de tratamento adjuvante antes de voltar para casa, sob um plano de cuidado compartilhado com seu oncologista local. Segundas opiniões sobre lâminas de biópsia e exames de imagem são avaliadas gratuitamente antes de você se comprometer com a viagem.',
			},
			{
				name: 'Tratamento do Câncer de Boca',
				description:
					'O câncer de boca — que surge na língua, na mucosa da bochecha, nas gengivas, no assoalho da boca ou nos lábios — está entre os cânceres mais comumente tratados na Índia, onde unidades de oncologia de cabeça e pescoço de alto volume atendem uma grande parcela de casos relacionados ao tabaco e ao bétel. O tratamento começa com biópsia e exames de imagem (TC/RM, às vezes PET-TC) para estadiar o tumor, seguidos de ressecção cirúrgica com margens livres, muitas vezes combinada com esvaziamento cervical para remover linfonodos em risco de disseminação. A cirurgia reconstrutiva microvascular — usando retalhos de tecido do antebraço, da coxa ou da fíbula — restaura forma e função quando uma parte significativa da mandíbula ou da língua é removida. Dependendo da patologia, a cirurgia é seguida de radioterapia adjuvante ou quimiorradioterapia para reduzir a chance de recidiva. Uma equipe multidisciplinar de cirurgiões de cabeça e pescoço, oncologistas, protesistas e fonoaudiólogos especializados em fala e deglutição conduz todo o percurso de cuidado, incluindo a reabilitação da fala e da alimentação após a cirurgia. Cânceres em estágio inicial, detectados antes da disseminação nodal, têm um prognóstico substancialmente melhor, por isso os pacientes são incentivados a enviar relatórios de biópsia e exames de imagem para uma opinião da junta de tumores assim que um diagnóstico for suspeitado.',
			},
			{
				name: 'Tratamento do Câncer de Próstata',
				description:
					'O tratamento do câncer de próstata na Índia varia desde a vigilância ativa para tumores de crescimento lento e risco muito baixo até a prostatectomia radical assistida por robô, a radioterapia e a terapia hormonal para doença mais avançada. Após o diagnóstico por PSA, ressonância magnética e biópsia, um urologista oncológico classifica o câncer usando o escore de Gleason para determinar a abordagem mais adequada. A prostatectomia robótica (da Vinci) está amplamente disponível nos principais centros de urologia da Índia, oferecendo cirurgia com preservação nervosa que visa manter a continência e a função sexual enquanto remove a glândula prostática e, quando necessário, os linfonodos ao redor. Para pacientes que não são candidatos à cirurgia ou preferem uma via não cirúrgica, a radioterapia de feixe externo, a braquiterapia ou a IMRT/IGRT podem administrar radiação altamente direcionada enquanto limitam a exposição dos órgãos vizinhos. A terapia de privação androgênica (terapia hormonal) é usada junto com cirurgia ou radioterapia em casos de risco intermediário e alto, ou isoladamente em doença avançada. A recuperação após a cirurgia robótica costuma ser mais rápida do que a cirurgia aberta, com a maioria dos pacientes recebendo alta em poucos dias e retornando às atividades normais em algumas semanas. Seu caso é avaliado por uma junta de tumores antes que uma recomendação seja finalizada.',
			},
			{
				name: 'Tratamento do Câncer de Endométrio',
				description:
					'O câncer do endométrio (revestimento do útero) é um dos cânceres ginecológicos mais tratáveis quando detectado precocemente, e as unidades de oncologia ginecológica da Índia oferecem estadiamento e cirurgia completos para mulheres diagnosticadas em qualquer estágio. A avaliação inicial inclui ultrassonografia transvaginal, biópsia endometrial e exames de imagem para avaliar até onde a doença se espalhou. O tratamento padrão é a histerectomia total com remoção das trompas de Falópio e dos ovários (salpingo-ooforectomia), geralmente realizada por via laparoscópica ou robótica para reduzir a perda de sangue, as cicatrizes e o tempo de recuperação em comparação com a cirurgia aberta. A amostragem de linfonodos ou uma biópsia do linfonodo sentinela é realizada durante a mesma operação para ajudar a determinar se é necessário tratamento adicional. Dependendo do grau e do estágio do tumor encontrado na cirurgia, pode ser recomendada radioterapia adjuvante (feixe externo ou braquiterapia) ou quimioterapia para reduzir o risco de recidiva. Para mulheres mais jovens que desejam preservar a fertilidade com doença muito inicial e de baixo grau, o tratamento hormonal não cirúrgico pode ser uma opção após avaliação cuidadosa. A maioria das pacientes submetidas a histerectomia minimamente invasiva recebe alta em dois a três dias e retoma as atividades normais em algumas semanas.',
			},
			{
				name: 'Tratamento de Leucemia',
				description:
					'A leucemia — câncer das células formadoras de sangue na medula óssea — é tratada na Índia por equipes dedicadas de hemato-oncologia com acesso a diagnósticos avançados, incluindo citometria de fluxo, citogenética e testes moleculares, essenciais para classificar o subtipo exato (aguda ou crônica, linfocítica ou mieloide) e escolher o protocolo correto. O tratamento geralmente começa com quimioterapia de indução para levar a doença à remissão, seguida de terapia de consolidação para eliminar as células leucêmicas remanescentes; alguns subtipos, como a leucemia mieloide crônica, são tratados com terapias orais direcionadas (inibidores de tirosina-quinase) em vez de quimioterapia intensiva. Para casos de alto risco ou recidivados, pode ser recomendado um transplante de medula óssea ou de células-tronco, usando um doador irmão compatível, um doador não aparentado ou as próprias células do paciente. O cuidado é prestado em unidades hematológicas especializadas, com quartos de isolamento reverso, suporte de banco de sangue e protocolos de controle de infecção adequados a pacientes imunocomprometidos durante o tratamento. Como os protocolos de leucemia se estendem por meses, muitos pacientes coordenam uma fase inicial intensiva na Índia com quimioterapia de acompanhamento monitorada por seu médico de origem, com relatórios regulares compartilhados entre as equipes para manter o plano de tratamento em curso.',
			},
			{
				name: 'Tratamento do Linfoma de Hodgkin',
				description:
					'O linfoma de Hodgkin, um câncer do sistema linfático marcado pela presença de células de Reed-Sternberg, tem uma das maiores taxas de cura entre os cânceres quando tratado com um regime quimioterápico padrão (comumente ABVD), e os centros de oncologia da Índia seguem protocolos internacionalmente reconhecidos para estadiamento e tratamento. O diagnóstico é confirmado por biópsia de linfonodo e estadiado por imagem PET-TC para mapear a extensão da doença acima e abaixo do diafragma. A maioria dos pacientes é tratada com um ciclo de quimioterapia combinada ao longo de vários meses, com a resposta avaliada por PET-TCs intermediárias que ajudam os oncologistas a decidir se devem continuar, ajustar ou acrescentar radioterapia para doença residual. A doença localizada em estágio inicial pode ser tratada com um ciclo mais curto de quimioterapia seguido de radioterapia na região envolvida, enquanto a doença em estágio avançado costuma precisar apenas de um ciclo mais longo de quimioterapia. Para casos recidivados ou resistentes, quimioterapia de resgate seguida de transplante autólogo de células-tronco está disponível nos principais centros. Os ciclos de quimioterapia são administrados em regime ambulatorial sempre que possível, e sua junta de tumores detalhará um cronograma completo ciclo a ciclo antes da viagem.',
			},
			{
				name: 'Quimioterapia',
				description:
					'A quimioterapia usa medicamentos citotóxicos ou direcionados para destruir células cancerígenas ou impedir sua divisão, sendo usada como tratamento primário para cânceres do sangue e linfomas, ou como terapia adjuvante/neoadjuvante junto com cirurgia e radioterapia para tumores sólidos. As unidades de oncologia ambulatorial da Índia contam com poltronas dedicadas para quimioterapia, equipe de enfermagem oncológica treinada e regimes preparados em farmácia, dosados por peso e área de superfície corporal, de acordo com protocolos de tratamento internacionais. Antes de iniciar, seu oncologista revisa contagens sanguíneas, função orgânica e relatórios anteriores para selecionar o regime, a duração do ciclo e o número de ciclos adequados ao seu tipo e estágio de câncer. A maioria dos regimes é administrada como infusão ambulatorial de poucas horas, repetida a cada duas a três semanas, com medicação de suporte (antieméticos, fatores de crescimento) administrada em conjunto para controlar os efeitos colaterais. Exames de sangue regulares entre os ciclos monitoram complicações como baixas contagens sanguíneas, e as doses são ajustadas conforme necessário. Para pacientes que combinam uma viagem à Índia com uma fase inicial de quimioterapia, sua equipe de oncologia fornece um protocolo escrito e relatórios para que um médico local possa continuar ou monitorar com segurança os ciclos subsequentes em casa.',
			},
			{
				name: 'Radioterapia de Intensidade Modulada (IMRT)',
				description:
					'A radioterapia de intensidade modulada (IMRT) é uma forma avançada de radioterapia de feixe externo que molda e varia a intensidade de centenas de feixes individuais de radiação para corresponder de perto à forma tridimensional de um tumor, entregando uma dose mais alta e eficaz ao câncer enquanto poupa o tecido saudável e os órgãos ao redor. É amplamente usada na Índia para cânceres de cabeça e pescoço, próstata, mama, cérebro e ginecológicos, onde estruturas próximas, como a medula espinhal, as glândulas salivares ou a bexiga, precisam ser protegidas dos danos da radiação. O planejamento do tratamento começa com uma tomografia de simulação, que um radio-oncologista e um físico médico usam para mapear o tumor e desenhar um plano de feixes em software especializado antes de iniciar o tratamento. A IMRT é administrada em sessões ambulatoriais diárias e curtas, geralmente cinco dias por semana ao longo de várias semanas, com cada sessão durando 15 a 20 minutos. Como a técnica reduz a radiação ao tecido saudável, os pacientes geralmente apresentam menos efeitos colaterais do que com técnicas de radioterapia mais antigas, como menos boca seca após tratamento de cabeça e pescoço ou melhor tolerância intestinal e vesical após radioterapia pélvica. Verificações regulares de imagem garantem que o tratamento permaneça precisamente direcionado durante todo o curso.',
			},
			{
				name: 'Radioterapia Guiada por Imagem (IGRT)',
				description:
					'A radioterapia guiada por imagem (IGRT) combina exames avançados de imagem — como tomografia de feixe cônico ou verificação por raio-X — com cada sessão de radioterapia, para confirmar a posição exata do tumor imediatamente antes do tratamento, corrigindo pequenas variações diárias causadas pela respiração, pelo enchimento de órgãos ou pelo posicionamento do paciente. Essa camada extra de precisão é especialmente valiosa para tumores que se movem ou deslocam, como cânceres de pulmão, fígado, próstata e pâncreas, permitindo que os radio-oncologistas administrem com segurança doses mais altas e eficazes, reduzindo ainda mais a exposição dos órgãos saudáveis ao redor. A IGRT costuma ser combinada com a IMRT ou outras técnicas de radioterapia conformacional, em vez de usada isoladamente, e os centros de câncer indianos que a oferecem contam com sistemas de imagem integrados ao acelerador linear, de modo que a verificação ocorre na mesma sessão do tratamento, sem visitas extras. Uma equipe de radio-oncologia analisa as imagens a cada sessão, ou em intervalos definidos, e ajusta a posição do paciente antes da aplicação do feixe. Como em outras formas de radioterapia externa, as sessões são curtas, indolores e realizadas em regime ambulatorial, ao longo de um curso planejado de acordo com o tipo e o estágio específicos do seu câncer.',
			},
			{
				name: 'Tratamento com CyberKnife',
				description:
					'O CyberKnife é um sistema robótico de radiocirurgia que administra radiação altamente focada e de alta dose a tumores pequenos ou de difícil acesso, com precisão submilimétrica, usando um acelerador linear montado em um braço robótico que rastreia a posição do tumor e se ajusta em tempo real durante o tratamento — inclusive em tumores que se movem com a respiração — sem a necessidade de uma armação craniana invasiva. É comumente usado na Índia para tumores cerebrais, tumores da coluna, câncer de pulmão em estágio inicial, tumores hepáticos e casos em que um tumor está próximo de estruturas críticas, como o tronco encefálico, os nervos ópticos ou a medula espinhal, tornando a cirurgia ou a radioterapia convencional mais arriscadas. Por sua precisão, o CyberKnife pode administrar uma dose eficaz de radiação em apenas uma a cinco sessões (radioterapia/radiocirurgia estereotáxica corporal), em comparação com várias semanas de tratamento diário com radioterapia convencional — uma vantagem significativa para pacientes que viajam do exterior. O planejamento do tratamento usa imagens de ressonância magnética e TC de alta resolução fundidas para mapear o tumor com precisão, e cada sessão é totalmente não invasiva e indolor, durando geralmente de 30 a 90 minutos, sem necessidade de anestesia. A maioria dos pacientes volta para casa no mesmo dia de cada sessão e retoma as atividades normais imediatamente depois.',
			},
			{
				name: 'Cirurgia de Linfonodos',
				description:
					'A cirurgia de linfonodos abrange uma série de procedimentos usados no tratamento do câncer para remover, amostrar ou avaliar linfonodos a fim de determinar se o câncer se espalhou além do tumor original — um fator-chave para o estadiamento preciso e o planejamento do tratamento. A abordagem mais comum é a biópsia do linfonodo sentinela, na qual um corante traçador ou marcador radioativo identifica o primeiro ou os primeiros linfonodos para os quais um tumor provavelmente se espalharia; se estes estiverem livres, muitas vezes é possível evitar a remoção mais extensa de linfonodos, reduzindo o risco de complicações como o linfedema. Quando o câncer é confirmado ou suspeito em múltiplos linfonodos, uma dissecção mais completa de linfonodos — como a dissecção axilar para câncer de mama ou o esvaziamento cervical para câncer de cabeça e pescoço — remove um grupo mais amplo de linfonodos da região afetada. Esses procedimentos geralmente são realizados ao mesmo tempo que a cirurgia do tumor primário, sob anestesia geral, muitas vezes usando técnicas minimamente invasivas ou robóticas para reduzir cicatrizes e acelerar a recuperação. Os resultados da patologia dos linfonodos removidos orientam as decisões sobre a necessidade de quimioterapia ou radioterapia posteriormente, e orientação de fisioterapia ou prevenção de linfedema é fornecida como parte do cuidado pós-operatório.',
			},
		],
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
		detailedProcedures: [
			{
				name: 'Rinoplastia (Cirurgia do Nariz)',
				description:
					'A rinoplastia é um procedimento cirúrgico que remodela o osso e a cartilagem do nariz para alterar seu tamanho, forma ou proporção, ou para corrigir problemas respiratórios causados por um septo desviado ou vias nasais estreitas. O cirurgião pode trabalhar por pequenas incisões escondidas dentro das narinas (técnica fechada) ou por uma pequena incisão externa na base do nariz (técnica aberta), dependendo do quanto de correção é necessário. A cartilagem pode ser aparada, remodelada ou enxertada de outra parte do nariz ou da orelha para construir estrutura. O procedimento costuma ser feito sob anestesia geral ou local com sedação e leva de uma a três horas. Os candidatos incluem pessoas incomodadas com a forma ou o tamanho do nariz, aquelas com dificuldade respiratória, ou pacientes que precisam de revisão após uma cirurgia anterior. A recuperação envolve inchaço e hematomas por uma a duas semanas, com uma tala usada nos primeiros dias e os resultados finais visíveis ao longo de vários meses, conforme o inchaço diminui. Os pacientes internacionais que viajam à Índia para rinoplastia costumam planejar uma consulta inicial, o procedimento em si e uma visita de acompanhamento antes da remoção da tala, permitindo que a maior parte da cicatrização inicial seja monitorada pessoalmente.',
			},
			{
				name: 'Lifting Facial (Ritidoplastia)',
				description:
					'O lifting facial, ou ritidoplastia, é um procedimento cirúrgico que trata a flacidez da pele, os sulcos profundos e a perda de definição na parte inferior do rosto, na linha da mandíbula e no pescoço, que se desenvolvem com a idade. Por meio de incisões geralmente colocadas ao longo da linha do cabelo e ao redor da orelha, o cirurgião levanta e reposiciona o músculo facial subjacente e o tecido conjuntivo (a camada SMAS), remove o excesso de pele e redistribui a pele restante sobre o novo contorno. Frequentemente é combinado com um lifting de pescoço ou enxerto de gordura para tratar alterações relacionadas. O procedimento é realizado sob anestesia geral ou local com sedação e geralmente leva de três a cinco horas. Bons candidatos costumam estar em boa saúde geral, com expectativas realistas sobre o grau de melhora que um lifting pode proporcionar, já que ele trata a flacidez e não as linhas finas ou os danos solares. A recuperação inclui inchaço, hematomas e sensação de tensão por uma a duas semanas, com os pontos removidos nesse período e a maioria dos pacientes retomando as atividades normais em duas a três semanas. Como o procedimento exige um período de acompanhamento presencial para verificar a cicatrização e remover os pontos, os pacientes que viajam à Índia para um lifting facial geralmente planejam uma estadia de cerca de duas semanas.',
			},
			{
				name: 'Lifting Facial Não Cirúrgico',
				description:
					'O lifting facial não cirúrgico não é um único procedimento, mas uma combinação de tratamentos injetáveis e baseados em energia usados para levantar e renovar o rosto sem incisões ou anestesia geral. Dependendo das preocupações do paciente, um plano de tratamento pode combinar preenchedores dérmicos para restaurar o volume nas bochechas e têmporas, injeções de toxina botulínica para suavizar linhas dinâmicas, e tecnologias de firmeza da pele, como radiofrequência ou ultrassom (por exemplo, HIFU), para estimular o colágeno e firmar a pele flácida. As sessões costumam ser realizadas em consultório ambulatorial com creme anestésico tópico, e a maioria dos tratamentos leva de trinta minutos a uma hora. Há pouco ou nenhum tempo de inatividade além de vermelhidão temporária ou inchaço leve, então os pacientes geralmente retomam as atividades normais no mesmo dia ou no dia seguinte. Essa abordagem é adequada para pacientes com sinais leves a moderados de envelhecimento que desejam uma melhora visível sem cirurgia, embora os resultados sejam mais sutis e temporários do que um lifting cirúrgico, geralmente durando de alguns meses a dois anos, dependendo dos tratamentos usados. Como as sessões são rápidas e repetíveis, alguns pacientes combinam um lifting facial não cirúrgico com outros procedimentos durante uma única visita à Índia, com tratamentos de manutenção planejados para uma viagem posterior ou por meio de um profissional local.',
			},
			{
				name: 'Lifting Facial com Fios (Thread Lift)',
				description:
					'O lifting facial com fios é um procedimento minimamente invasivo que usa fios cirúrgicos finos e dissolvíveis, muitas vezes feitos de polidioxanona (PDO), para levantar a pele flácida e estimular a produção de colágeno sem as incisões de um lifting facial tradicional. Os fios, alguns dos quais têm pequenos cones ou farpas, são inseridos sob a pele usando uma agulha fina ou cânula e ancorados para reposicionar suavemente o tecido nas bochechas, na mandíbula ou nas sobrancelhas antes de as pontas serem aparadas. O procedimento é feito sob anestesia local em ambiente ambulatorial e geralmente leva de trinta a sessenta minutos. Nas semanas seguintes, o corpo forma colágeno ao redor dos fios em dissolução, o que gradualmente acrescenta firmeza suave ao efeito inicial de levantamento. É adequado para pacientes com flacidez inicial que ainda não estão prontos para a cirurgia, e os resultados são perceptivelmente mais modestos e de menor duração, geralmente de doze a dezoito meses, do que um lifting cirúrgico. O tempo de inatividade é mínimo, com algum inchaço, hematomas ou sensação de puxão por alguns dias. Como a recuperação é curta, um lifting com fios muitas vezes pode ser agendado junto com outros tratamentos durante uma única viagem à Índia, embora os pacientes devam discutir o momento ideal com o cirurgião se o combinarem com procedimentos mais invasivos.',
			},
			{
				name: 'Blefaroplastia (Cirurgia das Pálpebras)',
				description:
					'A blefaroplastia é um procedimento cirúrgico que remove ou reposiciona o excesso de pele, músculo e gordura ao redor das pálpebras superiores ou inferiores, tratando a queda, o inchaço ou as bolsas sob os olhos. Na cirurgia da pálpebra superior, o cirurgião faz uma incisão ao longo da prega natural para remover o excesso de tecido; na cirurgia da pálpebra inferior, a incisão pode ser feita logo abaixo da linha dos cílios ou dentro da pálpebra (abordagem transconjuntival) para evitar uma cicatriz visível. O procedimento costuma ser feito sob anestesia local com sedação e leva de uma a duas horas, dependendo se uma ou ambas as pálpebras são tratadas. Os candidatos incluem pessoas cuja pele da pálpebra superior obstrui a visão, aquelas incomodadas com olhos de aparência cansada ou inchada, e pacientes que buscam uma aparência mais alerta. A recuperação envolve inchaço e hematomas por uma a duas semanas, com os pontos removidos em cerca de uma semana e a maioria dos pacientes confortável em público entre dez e catorze dias, usando maquiagem ou óculos escuros. Como o tecido da pálpebra cicatriza relativamente rápido, mas ainda precisa de uma verificação dos pontos e avaliação do progresso, os pacientes que viajam à Índia para blefaroplastia costumam planejar uma estadia de dez dias a duas semanas para cobrir o procedimento e o acompanhamento inicial.',
			},
			{
				name: 'Cirurgia Oculoplástica',
				description:
					'A cirurgia oculoplástica é um ramo especializado da oftalmologia e da cirurgia plástica que trata problemas estruturais e funcionais das pálpebras, dos canais lacrimais, da órbita ocular e dos tecidos ao redor. Abrange uma ampla gama de procedimentos, incluindo a correção de pálpebras caídas (ptose) que interferem na visão, a correção do mau posicionamento da pálpebra, como ectrópio ou entrópio, o tratamento de canais lacrimais obstruídos, a remoção de tumores ou cistos palpebrais com reconstrução, o reparo de fraturas orbitárias e a reconstrução da órbita após lesão ocular ou remoção do olho. Cirurgiões treinados tanto em oftalmologia quanto em técnicas de cirurgia plástica realizam esses procedimentos, que podem ser feitos sob anestesia local ou geral, dependendo da complexidade e da localização. Os candidatos são pacientes com um problema funcional que afeta a visão, o conforto ocular ou o fechamento da pálpebra, além daqueles que precisam de reconstrução após trauma, remoção de tumor ou cirurgia anterior. Como muitas dessas condições afetam a proteção do olho e sua capacidade de fechamento, a avaliação geralmente inclui um exame oftalmológico detalhado junto com a avaliação cirúrgica. A recuperação varia amplamente conforme o procedimento, de alguns dias para reparos palpebrais simples a várias semanas para reconstrução orbitária, e os centros oculoplásticos da Índia costumam tratar casos complexos que exigem cirurgia em etapas e acompanhamento por imagem.',
			},
			{
				name: 'Aplicação de Botox',
				description:
					'O Botox é a marca mais conhecida da toxina botulínica tipo A, uma proteína purificada injetada em doses pequenas e precisas nos músculos faciais para relaxar temporariamente as contrações que causam rugas dinâmicas, como as linhas de expressão entre as sobrancelhas, os "pés de galinha" ao redor dos olhos e as linhas horizontais da testa. A toxina age bloqueando os sinais nervosos para o músculo tratado, de modo que a pele acima dele se suaviza enquanto a expressão ao redor permanece em grande parte natural, se a dose for bem calculada. O tratamento é feito em consultório com uma agulha fina e sem anestesia além de creme anestésico opcional, levando geralmente de dez a vinte minutos para vários pontos de injeção. Os efeitos começam em três a sete dias, atingem o pico em cerca de duas semanas e geralmente duram de três a quatro meses antes que a atividade muscular retorne gradualmente, momento em que um novo tratamento é necessário para manter o efeito. O Botox também é usado para fins médicos, como sudorese excessiva, enxaqueca crônica e certos distúrbios de espasmo muscular. Não há praticamente nenhum tempo de inatividade além de vermelhidão leve ou um pequeno hematoma nos pontos de injeção, tornando-o um complemento comum para pacientes que já visitam a Índia para outros tratamentos estéticos ou médicos.',
			},
			{
				name: 'Otoplastia (Cirurgia das Orelhas)',
				description:
					'A otoplastia é um procedimento cirúrgico que remodela a cartilagem da orelha externa, mais comumente para aproximar orelhas de abano da cabeça ou corrigir irregularidades na forma ou no tamanho da orelha presentes desde o nascimento ou causadas por lesão. O cirurgião geralmente faz uma incisão atrás da orelha, e então marca, dobra ou sutura a cartilagem em uma posição mais natural antes de fechar a incisão, de modo que qualquer cicatriz resultante fique escondida na prega natural. O procedimento pode ser feito sob anestesia local com sedação em adultos ou anestesia geral em crianças, e geralmente leva de uma a duas horas para ambas as orelhas. É um dos poucos procedimentos estéticos comumente realizados em crianças, geralmente depois que a cartilagem da orelha se desenvolveu o suficiente, muitas vezes para tratar o constrangimento antes da idade escolar. A recuperação envolve um curativo acolchoado na cabeça nos primeiros dias, seguido de uma faixa mais leve usada à noite por várias semanas para proteger a nova posição durante a cicatrização. O inchaço e o desconforto leve diminuem em uma a duas semanas. As famílias que viajam à Índia para a otoplastia de uma criança geralmente planejam uma estadia curta, cobrindo a cirurgia e a primeira troca de curativo.',
			},
			{
				name: 'Transplante Capilar',
				description:
					'O transplante capilar realoca folículos pilosos de uma área doadora, geralmente a parte de trás ou as laterais do couro cabeludo, onde o crescimento do cabelo é naturalmente resistente ao afinamento, para áreas de calvície visível. As duas principais técnicas são a transplantação de unidades foliculares (FUT), em que uma tira do couro cabeludo é removida e dividida em enxertos individuais, e a extração de unidades foliculares (FUE), em que os folículos são retirados um a um com uma pequena ferramenta de punção, deixando cicatrizes mínimas. Os enxertos são colocados em pequenas incisões na área receptora, seguindo o ângulo e a densidade naturais do cabelo ao redor, para um resultado de aparência natural. O procedimento é feito sob anestesia local e, dependendo do número de enxertos necessários, leva aproximadamente de quatro a oito horas, às vezes dividido em duas sessões. Candidatos adequados são homens e mulheres com queda de cabelo padrão e fornecimento doador adequado, avaliados previamente quanto à causa subjacente da queda. Os cabelos transplantados geralmente caem dentro de semanas antes de voltar a crescer gradualmente, com crescimento novo visível ao longo de seis a doze meses. Como a cirurgia em si envolve um tempo de inatividade modesto, os pacientes que viajam à Índia costumam planejar uma estadia de cerca de uma semana para permitir que o couro cabeludo se estabilize antes de voar para casa.',
			},
			{
				name: 'Aumento de Mama (Mamoplastia de Aumento)',
				description:
					'A mamoplastia de aumento é um procedimento cirúrgico que aumenta o tamanho da mama e altera sua forma usando implantes de silicone ou solução salina, ou, em alguns casos, gordura transferida de outra área do corpo da própria paciente. O cirurgião posiciona o implante por meio de uma incisão, comumente ao redor da aréola, na prega natural abaixo da mama, ou na axila, posicionando-o acima ou abaixo do músculo peitoral, dependendo da anatomia da paciente e do resultado desejado. O procedimento é realizado sob anestesia geral e geralmente leva de uma a duas horas. As candidatas incluem mulheres que sentem que o tamanho da mama é desproporcional ao corpo, aquelas que desejam restaurar o volume perdido após a gravidez ou mudança de peso, e pacientes em reconstrução. A recuperação envolve inchaço, tensão e movimento restrito do braço por uma a duas semanas, com a maioria das pacientes retomando atividades leves nesse período e exercícios completos após quatro a seis semanas. Os implantes não são considerados dispositivos vitalícios e podem eventualmente precisar de monitoramento ou substituição. As pacientes que viajam à Índia para o aumento de mama geralmente planejam uma estadia de dez a catorze dias para permitir que o cirurgião verifique as incisões e a cicatrização inicial antes da viagem.',
			},
			{
				name: 'Redução de Mama',
				description:
					'A cirurgia de redução de mama, ou mamoplastia redutora, remove o excesso de gordura, tecido glandular e pele da mama para reduzir seu tamanho e peso, e reposicionar o mamilo e a aréola mais acima em um contorno mamário menor. O procedimento costuma ser realizado por meio de um padrão de incisão em âncora ou vertical, com o cirurgião remodelando o tecido restante para criar um contorno proporcional antes de fechar as incisões. É feito sob anestesia geral e geralmente leva de duas a quatro horas. As candidatas costumam ser pacientes com sintomas físicos decorrentes de mamas excessivamente grandes, como dor no pescoço, nas costas ou nos ombros, irritação na pele sob a prega mamária ou atividade física restrita, além daquelas que buscam melhor proporção com o corpo. A recuperação envolve inchaço, hematomas e sensibilidade por uma a duas semanas, com a maioria das pacientes retomando as atividades diárias normais em duas semanas e exercícios após quatro a seis semanas, uma vez liberadas pelo cirurgião. A sensibilidade na área do mamilo pode ser temporária ou, menos comumente, permanentemente alterada. Como a redução de mama costuma ter um benefício funcional documentado além do estético, as pacientes que viajam à Índia para o procedimento geralmente organizam uma estadia de duas semanas para permitir a remoção dos pontos e a verificação da ferida.',
			},
			{
				name: 'Lifting de Mama (Mastopexia)',
				description:
					'O lifting de mama, ou mastopexia, eleva e remodela mamas que caíram devido ao envelhecimento, à gravidez, à amamentação ou a mudanças de peso, removendo o excesso de pele e reposicionando o tecido mamário restante e o complexo aréolo-mamilar mais acima no tórax. Dependendo do grau de flacidez, o cirurgião pode usar uma incisão mais curta ao redor da aréola ou uma incisão mais longa em formato de âncora, estendendo-se até a prega mamária e ao longo dela. Diferentemente do aumento de mama, o lifting não adiciona volume, então as pacientes que desejam um perfil mamário mais cheio e mais alto podem combinar a mastopexia com implantes na mesma operação. O procedimento é feito sob anestesia geral e geralmente leva de duas a três horas. Boas candidatas são pacientes com tecido mamário flácido e elasticidade adequada da pele, com peso razoavelmente estável, já que uma futura gravidez ou mudança significativa de peso pode afetar os resultados. A recuperação envolve inchaço e movimento restrito do braço por uma a duas semanas, com a maioria das pacientes retomando atividades não extenuantes nesse período e exercícios completos após quatro a seis semanas. As pacientes que viajam à Índia para um lifting de mama geralmente planejam uma estadia de cerca de duas semanas para cobrir a cirurgia e a visita de acompanhamento para verificação das incisões.',
			},
			{
				name: 'Lipoaspiração',
				description:
					'A lipoaspiração é um procedimento cirúrgico de modelagem corporal que remove acúmulos localizados de gordura que não responderam à dieta e ao exercício, em áreas como abdômen, flancos, coxas, braços ou queixo. Por meio de pequenas incisões, o cirurgião insere uma cânula fina conectada a um dispositivo de sucção e a move pela camada de gordura para romper e remover as células adiposas, com técnicas como a lipoaspiração tumescente, assistida por ultrassom ou assistida por laser usadas para facilitar a remoção de gordura e apoiar a retração da pele. O procedimento é realizado sob anestesia geral ou local com sedação, dependendo da área e da extensão do tratamento, e geralmente leva de uma a três horas. Bons candidatos são pessoas próximas do peso desejado, com boa elasticidade da pele e expectativas realistas, já que a lipoaspiração é um procedimento de modelagem do contorno, e não um tratamento de perda de peso. A recuperação envolve inchaço, hematomas e o uso de uma malha compressiva por várias semanas, com a maioria dos pacientes retomando atividades leves em uma semana e o contorno final visível ao longo de três a seis meses, conforme o inchaço diminui. Os pacientes que viajam à Índia para lipoaspiração geralmente planejam uma estadia de cerca de dez dias para permitir o ajuste da malha, um acompanhamento inicial e o monitoramento da cicatrização.',
			},
			{
				name: 'Abdominoplastia',
				description:
					'A abdominoplastia remove o excesso de pele e gordura do abdômen e tensiona os músculos abdominais subjacentes, que podem ficar esticados ou separados (diástase dos retos) após a gravidez ou perda significativa de peso. Por meio de uma incisão horizontal baixa no abdômen, o cirurgião repara a camada muscular com suturas internas, remove o tecido excedente e reposiciona o umbigo antes de fechar a incisão, às vezes combinando o procedimento com lipoaspiração para modelagem adicional. É realizada sob anestesia geral e geralmente leva de duas a quatro horas. As candidatas geralmente têm peso estável e saudável, com pele abdominal flácida ou separação muscular que não melhorou com exercício, e não planejam futuras gestações, já que uma gravidez posterior pode reverter o reparo muscular. A recuperação envolve várias semanas de atividade restrita, com uma malha compressiva usada para apoiar a cicatrização, drenos geralmente removidos na primeira semana, e a maioria das pacientes retomando atividades normais e não extenuantes em quatro a seis semanas. Como a recuperação do reparo muscular abdominal leva mais tempo do que muitos outros procedimentos de modelagem corporal, as pacientes que viajam à Índia para uma abdominoplastia geralmente planejam uma estadia de duas a três semanas para permitir a remoção dos drenos e o monitoramento da cicatrização antes de voar.',
			},
			{
				name: 'Lifting Brasileiro de Glúteos (BBL)',
				description:
					'O lifting brasileiro de glúteos (BBL) usa a própria gordura da paciente, retirada por lipoaspiração de áreas como abdômen, flancos ou coxas, para adicionar volume e forma aos glúteos. A gordura retirada é processada para separar as células adiposas viáveis antes de ser cuidadosamente injetada em pequenas quantidades em diferentes camadas dos glúteos, para construir um contorno mais arredondado e cheio, enquanto as áreas doadoras também se beneficiam da modelagem da lipoaspiração. O procedimento é realizado sob anestesia geral e geralmente leva de duas a quatro horas, dependendo da quantidade de gordura retirada e enxertada. As candidatas são pacientes com gordura doadora suficiente disponível para retirada e que desejam uma forma de glúteos mais cheia sem implante. Como os enxertos de gordura precisam de um suprimento sanguíneo estável para sobreviver, as pacientes geralmente são orientadas a evitar sentar-se diretamente sobre os glúteos por um período após a cirurgia, usando almofadas especiais ou deitando-se de bruços, e uma parte da gordura enxertada é naturalmente reabsorvida nos meses seguintes. A recuperação envolve o uso de malhas compressivas por várias semanas e evitar exercícios extenuantes por cerca de seis semanas. As pacientes que viajam à Índia para um BBL geralmente planejam uma estadia de cerca de duas semanas para permitir a cicatrização inicial e o acompanhamento antes da viagem.',
			},
			{
				name: 'Aumento de Glúteos',
				description:
					'O aumento de glúteos aumenta o tamanho dos glúteos e melhora seu contorno usando implantes de silicone ou enxerto de gordura, escolhidos com base na gordura doadora disponível da paciente, na anatomia e no resultado desejado. Quando implantes são usados, o cirurgião os posiciona por meio de uma pequena incisão, geralmente dentro da prega glútea, colocando-os dentro ou abaixo do músculo glúteo para um resultado estável e de sensação natural. Quando o enxerto de gordura é preferido, a gordura é retirada por lipoaspiração de outra área e injetada nos glúteos, o que também tem o benefício de modelar a área doadora. O aumento com implantes é realizado sob anestesia geral e geralmente leva cerca de duas horas, enquanto os procedimentos de enxerto de gordura levam mais tempo, dependendo do volume transferido. As candidatas a implantes costumam ser pacientes com gordura doadora limitada, enquanto aquelas com gordura adequada em outras áreas podem preferir o enxerto para evitar um implante estranho ao corpo. A recuperação em ambas as abordagens exige evitar pressão direta sobre os glúteos por várias semanas, com almofadas especializadas ou posições de sono alteradas recomendadas, além de uma malha compressiva e retorno gradual ao exercício em quatro a seis semanas. As pacientes que consideram o aumento de glúteos na Índia geralmente discutem tanto as opções de implante quanto de enxerto de gordura com o cirurgião durante a consulta, para determinar a melhor opção para seu tipo de corpo.',
			},
			{
				name: 'Lifting de Braços (Braquioplastia)',
				description:
					'O lifting de braços, ou braquioplastia, remove o excesso de pele e gordura da parte superior do braço e tensiona o tecido subjacente para criar um contorno mais suave e firme, tratando a pele solta e pendente que pode se desenvolver após perda significativa de peso ou com o envelhecimento. O cirurgião geralmente faz uma incisão na parte interna ou posterior do braço superior, estendendo-se do cotovelo em direção à axila, dependendo de quanta pele precisa ser removida, e pode combinar o procedimento com lipoaspiração para refinar ainda mais o contorno. É realizado sob anestesia geral e geralmente leva cerca de duas horas. Os candidatos são pacientes com pele solta e flácida na parte superior do braço que não melhorou com exercício, muitas vezes após grande perda de peso, que estão com peso estável e em boa saúde geral. A recuperação envolve o uso de uma malha compressiva por várias semanas, com inchaço e movimento restrito do braço nas primeiras uma a duas semanas e um retorno gradual às atividades normais em quatro a seis semanas. Como a cicatriz resultante se estende por todo o comprimento da parte interna do braço, os pacientes recebem orientações sobre cuidados com a cicatriz durante a recuperação. Os pacientes que viajam à Índia para um lifting de braços geralmente planejam uma estadia de cerca de duas semanas para permitir a remoção dos pontos e o monitoramento da ferida.',
			},
			{
				name: 'Lifting de Coxas',
				description:
					'O lifting de coxas remove o excesso de pele e gordura da parte interna ou externa da coxa e tensiona o tecido subjacente para criar um contorno mais suave, mais frequentemente para pacientes que ficaram com pele solta e flácida após perda significativa de peso. Dependendo da área e da quantidade de correção necessária, o cirurgião pode usar uma incisão na prega da virilha para um lifting da coxa interna, ou uma incisão que se estende pela coxa externa para uma remoção de pele mais extensa, às vezes combinada com lipoaspiração. O procedimento é realizado sob anestesia geral e geralmente leva de duas a três horas. Os candidatos são pacientes com peso estável e pele flácida na coxa que não respondeu ao exercício, e que entendem que a contrapartida de uma pele mais firme é uma cicatriz visível ao longo da linha de incisão. A recuperação envolve o uso de uma malha compressiva, evitar atividade extenuante e limitar ficar em pé ou caminhar por longos períodos nas primeiras uma a duas semanas, com retorno gradual às atividades normais em quatro a seis semanas. Como as incisões do lifting de coxas ficam em áreas de atrito e movimento, cuidados cuidadosos com a ferida durante o período inicial de cicatrização são importantes. Os pacientes que viajam à Índia para um lifting de coxas geralmente planejam uma estadia de cerca de duas semanas para permitir que o cirurgião monitore a cicatrização.',
			},
			{
				name: 'Ninfoplastia (Labioplastia)',
				description:
					'A ninfoplastia, ou labioplastia, é um procedimento cirúrgico que reduz ou remodela os pequenos lábios (os folhetos internos da vulva), e menos comumente os grandes lábios, para tratar desconforto ou constrangimento relacionados ao tamanho ou à assimetria. Usando a técnica de corte, que remove o excesso de tecido ao longo da borda, ou a técnica em cunha, que remove uma seção em formato de "V" preservando a borda natural, o cirurgião remodela o tecido e fecha a incisão com suturas absorvíveis. O procedimento costuma ser feito sob anestesia local com sedação ou anestesia geral e leva cerca de uma a duas horas. As candidatas incluem pacientes que sentem desconforto físico devido a lábios aumentados ou irregulares, como atrito ou dor durante o exercício, além daquelas que buscam uma mudança por conforto pessoal. A recuperação envolve inchaço e sensibilidade por uma a duas semanas, com as pacientes orientadas a evitar exercícios extenuantes, roupas apertadas e atividade sexual por cerca de quatro a seis semanas, enquanto o tecido cicatriza completamente. Como o procedimento é sensível e a recuperação se beneficia de um ambiente tranquilo e privado, as pacientes que viajam à Índia para a labioplastia costumam organizar uma estadia discreta de cerca de dez dias a duas semanas, para permitir o acompanhamento antes da viagem.',
			},
			{
				name: 'Cirurgia de Remoção de Cicatrizes',
				description:
					'A cirurgia de remoção de cicatrizes engloba várias técnicas cirúrgicas usadas para melhorar a aparência de cicatrizes deixadas por lesão, queimaduras, acne ou cirurgia anterior, já que nenhum método pode apagar completamente uma cicatriz, mas muitos podem torná-la mais plana, mais estreita ou menos perceptível. Dependendo do tipo de cicatriz, as opções incluem a revisão da cicatriz, em que a cicatriz antiga é removida cirurgicamente e a ferida fechada com uma técnica mais precisa para incentivar uma cicatrização mais fina; enxerto de pele ou cirurgia de retalho para áreas maiores de cicatrização; e Z-plastia ou W-plastia, que reposicionam uma cicatriz ao longo das linhas naturais da pele para torná-la menos visível. Casos mais simples podem ser tratados com injeções de esteroides, resurfacing a laser ou microagulhamento, em vez de cirurgia. A anestesia usada depende do tamanho, da profundidade e da localização da cicatriz, variando de anestesia local para uma pequena revisão a anestesia geral para enxertos. Os candidatos são pacientes com cicatrizes que causam restrição funcional, como tensão que limita o movimento, ou preocupação visível significativa. A recuperação varia de dias para pequenas revisões a várias semanas para enxertos, com os resultados finais visíveis ao longo de meses, conforme a nova cicatriz amadurece. Os pacientes que viajam à Índia para revisão de cicatriz geralmente têm sua cicatriz avaliada durante a consulta para determinar a técnica mais adequada antes de agendar a cirurgia.',
			},
		],
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
		detailedProcedures: [
			{
				name: 'Fertilização In Vitro (FIV)',
				description:
					'A fertilização in vitro é um tratamento de fertilidade no qual os óvulos são coletados dos ovários após um ciclo de estimulação hormonal e combinados com espermatozoides em uma placa de laboratório para alcançar a fertilização fora do corpo. Os embriões resultantes são cultivados por vários dias, monitorados quanto ao desenvolvimento, e um ou mais são então transferidos para o útero, com quaisquer embriões viáveis adicionais geralmente congelados para uso futuro. O processo envolve um ciclo inicial de medicação hormonal injetável para estimular a maturação de múltiplos óvulos, monitorado por exames de sangue e ultrassom, seguido de um procedimento menor de coleta de óvulos feito sob sedação, fertilização em laboratório, cultivo de embriões e, por fim, a transferência embrionária, que não exige anestesia. A FIV é recomendada para uma ampla gama de causas de infertilidade, incluindo trompas de Falópio bloqueadas ou danificadas, distúrbios de ovulação, infertilidade por fator masculino, infertilidade sem causa aparente, ou após outros tratamentos, como a IIU, não terem tido sucesso. Um ciclo completo, desde o início da estimulação até a transferência embrionária, geralmente dura de duas a três semanas, seguido de um teste de gravidez cerca de duas semanas após a transferência. Os pacientes que viajam à Índia para a FIV costumam planejar sua estadia em torno dessa janela de estimulação até a transferência, com as clínicas coordenando o momento do ciclo antecipadamente, com base nos resultados dos exames iniciais do paciente.',
			},
			{
				name: 'Injeção Intracitoplasmática de Espermatozoide (ICSI)',
				description:
					'A injeção intracitoplasmática de espermatozoide, ou ICSI, é uma técnica laboratorial especializada usada junto com a FIV, na qual um único espermatozoide é selecionado e injetado diretamente no centro de um óvulo maduro usando uma agulha fina de vidro, em vez de permitir que a fertilização ocorra naturalmente em uma placa. Isso contorna barreiras que poderiam, de outra forma, impedir que o espermatozoide penetrasse o óvulo por conta própria. A ICSI segue o mesmo processo de estimulação ovariana e coleta de óvulos da FIV convencional, com a diferença ocorrendo na etapa de fertilização no laboratório; os embriões resultantes são então cultivados e transferidos usando os mesmos protocolos. A ICSI é recomendada principalmente para infertilidade por fator masculino, incluindo baixa contagem de espermatozoides, motilidade espermática deficiente, forma anormal dos espermatozoides, ou quando os espermatozoides foram coletados cirurgicamente em vez de ejaculados, além de casos de falha de fertilização anterior com FIV padrão. Não altera o cronograma de estimulação ovariana, coleta ou transferência, de modo que a duração geral do ciclo é semelhante à da FIV padrão, geralmente cerca de duas a três semanas da estimulação à transferência. Como a técnica não exige nenhum procedimento adicional do lado do paciente além da FIV padrão, os pacientes que viajam à Índia para a ICSI geralmente seguem a mesma estrutura de visita de um ciclo de FIV, coordenada em torno das datas de estimulação e coleta.',
			},
			{
				name: 'Inseminação Intrauterina (IIU)',
				description:
					'A inseminação intrauterina é um tratamento de fertilidade no qual espermatozoides especialmente lavados e concentrados são colocados diretamente no útero por volta do momento da ovulação, encurtando a distância que os espermatozoides precisam percorrer e aumentando a concentração de espermatozoides saudáveis próximos ao óvulo. O ciclo pode ser natural ou apoiado com medicação oral ou injetável para favorecer a liberação programada de um ou de um pequeno número de óvulos, com a ovulação acompanhada por exames de sangue e ultrassom para identificar o dia ideal para a inseminação. O procedimento em si é rápido e geralmente indolor, envolvendo um cateter fino passado pelo colo do útero, e não exige anestesia ou tempo significativo de recuperação, de modo que os pacientes geralmente retomam as atividades normais imediatamente depois. A IIU é frequentemente recomendada como tratamento de primeira linha para infertilidade leve por fator masculino, infertilidade sem causa aparente, irregularidades na ovulação, ou para mulheres solteiras ou casais do mesmo sexo que usam sêmen de doador, sendo geralmente tentada antes de avançar para a FIV. Um único ciclo geralmente dura cerca de duas semanas, desde o início do monitoramento até a inseminação, com um teste de gravidez cerca de duas semanas depois. Como o monitoramento e a inseminação acontecem dentro de uma janela relativamente curta, a IIU é um dos tratamentos de fertilidade mais eficientes em termos de tempo para realizar durante uma visita à Índia.',
			},
			{
				name: 'Inseminação Intracervical (ICI)',
				description:
					'A inseminação intracervical é uma forma mais simples de inseminação artificial, na qual os espermatozoides, frescos ou previamente congelados, são colocados diretamente na entrada do colo do útero usando uma seringa ou uma touca cervical especialmente projetada, em vez de serem processados e injetados no útero como na IIU. Como os espermatozoides são depositados perto, mas fora do útero, não precisam ser lavados ou especialmente preparados previamente, o que torna o procedimento menos invasivo e geralmente de menor custo do que as técnicas baseadas no útero. O procedimento pode ser programado para um ciclo de ovulação natural, acompanhado por kits preditores de ovulação ou monitoramento por ultrassom, e leva apenas alguns minutos, sem necessidade de anestesia e com tempo mínimo de recuperação. A ICI é comumente escolhida por indivíduos ou casais que usam sêmen de doador, por aqueles com preocupações leves de fertilidade, ou por pacientes que preferem a opção menos invasiva antes de considerar a IIU ou a FIV, embora as taxas de sucesso por ciclo geralmente sejam menores do que as das técnicas intrauterinas, já que menos espermatozoides alcançam o útero. Os pacientes geralmente passam por vários ciclos monitorados antes de avaliar se devem continuar com a ICI ou avançar para um tratamento mais complexo. Como o procedimento exige pouca preparação, a ICI muitas vezes pode ser organizada com uma visita curta e flexível a uma clínica de fertilidade na Índia.',
			},
			{
				name: 'Inseminação Artificial',
				description:
					'A inseminação artificial é um termo geral para procedimentos de fertilidade nos quais os espermatozoides são colocados no trato reprodutivo de uma mulher por meios diferentes da relação sexual, mais comumente por inseminação intrauterina (IIU), em que espermatozoides preparados são injetados no útero, ou por inseminação intracervical (ICI), em que os espermatozoides são colocados no colo do útero. Os espermatozoides usados podem vir de um parceiro ou de um doador triado, e o ciclo geralmente é programado para coincidir com a ovulação, acompanhada por monitoramento de temperatura basal, kits de ovulação ou ultrassom clínico, com ou sem medicação estimulante da ovulação, dependendo do histórico do paciente. O procedimento em si é breve, realizado em consultório sem anestesia, e envolve desconforto mínimo e nenhum período significativo de recuperação, permitindo que os pacientes retomem as atividades normais imediatamente. A inseminação artificial geralmente é recomendada para problemas leves de fertilidade, infertilidade sem causa aparente, uso de sêmen de doador por pacientes solteiras ou casais do mesmo sexo, ou como primeiro passo antes de considerar tratamentos mais complexos, como a FIV. Como cada ciclo depende do momento preciso da ovulação, os pacientes podem precisar de mais de uma tentativa antes de engravidar. Sua natureza relativamente curta e de baixa intervenção faz da inseminação artificial um tratamento que pacientes internacionais muitas vezes podem concluir em uma única visita curta a uma clínica de fertilidade na Índia.',
			},
			{
				name: 'FIV com Óvulo Doado',
				description:
					'A FIV com óvulo doado é uma forma de fertilização in vitro que usa óvulos coletados de uma doadora triada, em vez da mãe pretendida, fertilizados com sêmen de um parceiro ou doador em laboratório, antes de o embrião resultante ser transferido para o útero da receptora. A doadora passa pelo processo padrão de estimulação hormonal e coleta de óvulos, enquanto o revestimento uterino da receptora é preparado com medicação hormonal, programada para sincronizar com o ciclo da doadora ou com um óvulo ou embrião doado congelado. Essa abordagem é recomendada para mulheres com reserva ovariana diminuída, insuficiência ovariana prematura, qualidade de óvulos reduzida ligada à idade ou histórico médico, ciclos anteriores de FIV malsucedidos atribuídos à qualidade dos óvulos, ou condições genéticas que tornam desaconselhável usar os próprios óvulos. As doadoras geralmente são triadas quanto ao histórico médico, doenças infecciosas e condições genéticas antes de serem pareadas ou selecionadas em um programa. Como a receptora não precisa de coleta de óvulos, sua parte do processo é comparativamente curta, envolvendo principalmente a preparação do revestimento uterino e a própria transferência embrionária, que não exige anestesia. Os pacientes que viajam à Índia para FIV com óvulo doado geralmente coordenam antecipadamente com a clínica o pareamento da doadora e a sincronização do ciclo antes de planejar o momento da visita em torno da transferência embrionária.',
			},
			{
				name: 'FIV com TESA',
				description:
					'A FIV com TESA combina a fertilização in vitro padrão com a aspiração testicular de espermatozoides, um procedimento menor usado para coletar espermatozoides diretamente do testículo quando nenhum está presente no ejaculado, condição conhecida como azoospermia. Sob anestesia local, uma agulha fina é inserida no testículo para retirar uma pequena amostra de tecido ou fluido contendo espermatozoides, que é então examinada no laboratório para identificar células espermáticas viáveis para uso na fertilização. Como os espermatozoides coletados dessa forma costumam ser limitados em número, geralmente são combinados com a ICSI, na qual um único espermatozoide é injetado diretamente em cada óvulo maduro, em vez da inseminação convencional em placa. Do lado da parceira, o processo segue o caminho habitual da FIV, com estimulação ovariana, monitoramento e coleta de óvulos, programados para coincidir com o procedimento de TESA, de modo que espermatozoides e óvulos frescos estejam disponíveis juntos, embora os espermatozoides também possam ser congelados antecipadamente. Essa abordagem é usada para homens com azoospermia obstrutiva ou não obstrutiva, em que a produção de espermatozoides continua no testículo apesar de um caminho ausente ou bloqueado até a ejaculação. Os pacientes que viajam à Índia para FIV com TESA geralmente planejam sua visita em torno do cronograma combinado de estimulação ovariana e do procedimento de coleta de espermatozoides.',
			},
			{
				name: 'Tratamento de Infertilidade em Mulheres',
				description:
					'O tratamento de infertilidade em mulheres começa com uma investigação diagnóstica para identificar a causa subjacente, que pode incluir exames de sangue para níveis hormonais, ultrassom para avaliar os ovários e o útero, e exames de imagem, como a histerossalpingografia, para verificar se as trompas de Falópio estão abertas. Dependendo dos achados, o tratamento pode variar desde medicação para induzir ou regular a ovulação, até a correção cirúrgica de problemas estruturais, como miomas, pólipos ou endometriose, até técnicas de reprodução assistida, como IIU ou FIV, quando outras abordagens não têm sucesso ou não são adequadas. As causas comuns tratadas incluem distúrbios de ovulação, como a síndrome dos ovários policísticos, trompas de Falópio bloqueadas ou danificadas, endometriose, anormalidades uterinas e declínio relacionado à idade na quantidade ou qualidade dos óvulos, e o tratamento é adaptado ao diagnóstico específico, em vez de seguir um único protocolo. Muitos casos envolvem uma abordagem gradual, começando pela opção adequada menos invasiva e progredindo conforme necessário. Como uma investigação completa orienta o plano de tratamento, os pacientes que viajam à Índia para tratamento de infertilidade geralmente enviam resultados de exames e relatórios anteriores antes da visita, para que o especialista possa esboçar um caminho de tratamento provável e a duração esperada da estadia antes de viajarem.',
			},
			{
				name: 'Tratamento de Infertilidade em Homens',
				description:
					'O tratamento de infertilidade em homens começa com uma análise seminal para avaliar a contagem, a motilidade e a morfologia dos espermatozoides, junto com exames de sangue hormonais e, quando indicado, um exame físico ou ultrassom escrotal para verificar problemas estruturais, como uma varicocele. Dependendo da causa identificada, o tratamento pode incluir mudanças de estilo de vida e manejo médico para melhorar os parâmetros espermáticos, medicação para corrigir desequilíbrios hormonais, reparo cirúrgico de uma varicocele ou bloqueio no trato reprodutivo, ou técnicas cirúrgicas de coleta de espermatozoides, como TESA ou TESE, para homens que produzem pouco ou nenhum espermatozoide no ejaculado. Quando a concepção natural permanece improvável, os espermatozoides coletados ou ejaculados podem ser usados com IIU, FIV ou ICSI, dependendo da qualidade e quantidade dos espermatozoides. As causas tratadas vão desde baixa contagem e motilidade deficiente até bloqueios estruturais, distúrbios hormonais e fatores genéticos que afetam a produção de espermatozoides. Muitas dessas avaliações e procedimentos menores podem ser concluídos relativamente rápido, em comparação com o ciclo de tratamento da parceira. Os pacientes que viajam à Índia para avaliação de infertilidade masculina geralmente trazem análises seminais e resultados hormonais anteriores, para que o especialista possa aconselhar, antes da visita, quais exames ou procedimentos adicionais provavelmente serão necessários.',
			},
			{
				name: 'Tratamento de Azoospermia',
				description:
					'A azoospermia é a ausência completa de espermatozoides no ejaculado, e seu tratamento depende de a causa ser obstrutiva, ou seja, os espermatozoides são produzidos normalmente, mas bloqueados de alcançar o ejaculado, ou não obstrutiva, ou seja, a própria produção de espermatozoides está prejudicada. O diagnóstico envolve exames de sangue hormonais, análise seminal, ultrassom escrotal e, às vezes, testes genéticos para distinguir entre os dois tipos e identificar a causa subjacente, como uma vasectomia anterior, ausência congênita do canal deferente, infecção ou um distúrbio hormonal ou testicular. Os casos obstrutivos podem ser tratados reconectando cirurgicamente ou contornando o bloqueio, como na reversão de vasectomia, ou coletando espermatozoides diretamente do testículo ou epidídimo usando procedimentos menores, como TESA, PESA ou micro-TESE. Os casos não obstrutivos são tratados primeiro corrigindo qualquer problema hormonal subjacente, quando possível, e, se os espermatozoides ainda não estiverem presentes no ejaculado, a coleta cirúrgica de espermatozoides ainda pode localizar pequenos focos de produção espermática dentro do testículo para uso com ICSI. Os espermatozoides coletados, quando encontrados, geralmente são usados imediatamente ou congelados para um ciclo subsequente de FIV/ICSI. Os pacientes que viajam à Índia para tratamento de azoospermia geralmente passam por exames diagnósticos no início da visita, para determinar qual abordagem de coleta é adequada antes de prosseguir.',
			},
			{
				name: 'Tratamento da Síndrome dos Ovários Policísticos (SOP)',
				description:
					'A síndrome dos ovários policísticos (SOP) é um distúrbio hormonal que pode causar ovulação irregular ou ausente, níveis elevados de andrógenos e múltiplos pequenos folículos nos ovários, sendo uma das causas mais comuns de infertilidade em mulheres. O diagnóstico se baseia em uma combinação de sintomas, exames hormonais no sangue e achados de ultrassom, em vez de um único teste. O tratamento é adaptado conforme o objetivo imediato seja regular o ciclo, controlar sintomas como crescimento excessivo de pelos ou acne, ou alcançar a gravidez. Para fertilidade, o tratamento de primeira linha geralmente envolve medidas de estilo de vida junto com medicação oral para induzir a ovulação, com medicação hormonal injetável ou perfuração ovariana laparoscópica consideradas se o tratamento oral não for eficaz. Quando a indução da ovulação sozinha não leva à gravidez, o tratamento pode avançar para IIU ou FIV, especialmente se outros fatores de fertilidade também estiverem presentes. Como a SOP varia significativamente em gravidade entre as pacientes, o plano de tratamento é ajustado com base no monitoramento contínuo da ovulação e da resposta hormonal. As pacientes que viajam à Índia para tratamento de fertilidade relacionado à SOP geralmente compartilham painéis hormonais recentes e relatórios de ultrassom antecipadamente, para que o especialista possa sugerir um provável primeiro passo e a duração do monitoramento que sua visita pode exigir.',
			},
			{
				name: 'Tratamento de Endometriose',
				description:
					'A endometriose é uma condição em que um tecido semelhante ao revestimento uterino cresce fora do útero, comumente nos ovários, nas trompas de Falópio ou no revestimento pélvico, onde pode causar dor, inflamação, cicatrizes e problemas de fertilidade. O diagnóstico geralmente é apoiado por ultrassom ou ressonância magnética, embora a cirurgia laparoscópica continue sendo a forma mais definitiva de confirmar e estadiar a extensão da doença. O tratamento depende da gravidade dos sintomas e se a fertilidade é uma prioridade, variando desde o manejo da dor e medicação hormonal para suprimir o tecido anormal, até a cirurgia laparoscópica para remover ou destruir implantes endometriais, cistos e aderências, preservando o tecido ovariano saudável sempre que possível. Para pacientes que tentam engravidar, o tratamento cirúrgico pode melhorar as chances de concepção natural em doença leve a moderada, enquanto casos mais avançados ou com reserva ovariana reduzida podem ser aconselhados a seguir diretamente para a FIV, às vezes junto com a cirurgia. A cirurgia laparoscópica é realizada sob anestesia geral por meio de pequenas incisões e geralmente envolve uma curta internação, com um período de recuperação de uma a duas semanas. As pacientes que viajam à Índia para tratamento de endometriose frequentemente combinam exames de imagem diagnósticos, cirurgia laparoscópica se necessário, e uma consulta de acompanhamento em uma única visita planejada.',
			},
			{
				name: 'Tratamento de Trompas de Falópio Bloqueadas',
				description:
					'As trompas de Falópio bloqueadas impedem que o óvulo e o espermatozoide se encontrem, ou impedem que um óvulo fertilizado viaje até o útero, sendo uma causa estrutural comum de infertilidade, muitas vezes resultante de infecção pélvica anterior, endometriose, cirurgia ou tecido cicatricial. O diagnóstico geralmente é feito por histerossalpingografia, um procedimento de raio-X que rastreia um contraste pelo útero e pelas trompas, ou por laparoscopia com teste de contraste, que permite a visualização direta e o tratamento de certos bloqueios no mesmo procedimento. O tratamento depende da localização e da extensão do bloqueio: alguns bloqueios tubários próximos ao útero podem ser liberados usando um procedimento minimamente invasivo que passa um pequeno cateter pelo colo do útero, enquanto bloqueios em outras partes da trompa, ou tecido cicatricial ao redor dela, podem ser tratados com cirurgia laparoscópica para remover aderências ou reparar a trompa. Quando as trompas estão danificadas demais para reparo, ou o reparo tem pouca chance de restaurar a função, a FIV geralmente é recomendada, já que ela contorna completamente as trompas. Os procedimentos laparoscópicos são realizados sob anestesia geral, com uma curta internação e de uma a duas semanas de recuperação. As pacientes que viajam à Índia para tratamento de bloqueio tubário geralmente passam por exames de imagem diagnósticos no início da visita, para orientar a escolha entre cirurgia tubária e avançar para a FIV.',
			},
			{
				name: 'Miomectomia Laparoscópica',
				description:
					'A miomectomia laparoscópica é um procedimento cirúrgico minimamente invasivo para remover miomas uterinos, crescimentos benignos na parede muscular do útero, preservando o próprio útero, o que a torna uma opção preferida para mulheres que desejam manter a fertilidade ou evitar a histerectomia. Por meio de várias pequenas incisões abdominais, o cirurgião usa uma câmera e instrumentos especializados para localizar, remover e extrair cada mioma, e então repara a camada muscular uterina para manter a força da parede para uma futura gravidez. O procedimento é realizado sob anestesia geral e pode levar de uma a várias horas, dependendo do número, tamanho e localização dos miomas. Geralmente é recomendado para mulheres com miomas sintomáticos que causam sangramento intenso, dor, sintomas de pressão ou problemas de fertilidade, quando a localização e o tamanho do mioma tornam viável uma abordagem laparoscópica. A recuperação da cirurgia laparoscópica geralmente é mais rápida do que a cirurgia aberta, com internação de um a dois dias e retorno às atividades normais em duas a três semanas, embora a gravidez geralmente seja desaconselhada por vários meses, para permitir que o reparo uterino cicatrize. As pacientes que viajam à Índia para miomectomia laparoscópica geralmente planejam uma estadia de cerca de duas semanas para cobrir a cirurgia e a recuperação inicial.',
			},
			{
				name: 'Histerectomia Laparoscópica',
				description:
					'A histerectomia laparoscópica é um procedimento cirúrgico minimamente invasivo para remover o útero, usando uma câmera e instrumentos especializados inseridos por várias pequenas incisões abdominais, em vez da incisão única maior usada na cirurgia aberta. Dependendo da condição da paciente, o cirurgião pode realizar uma histerectomia total, removendo o útero e o colo do útero, ou um procedimento subtotal, que preserva o colo do útero, e os ovários podem ou não ser removidos ao mesmo tempo, dependendo do diagnóstico e da idade da paciente. O procedimento é realizado sob anestesia geral e geralmente leva de uma a três horas. Geralmente é recomendado para condições como miomas grandes ou numerosos, adenomiose, dor pélvica crônica, sangramento uterino anormal que não respondeu a outros tratamentos, ou certas condições ginecológicas em que a preservação da fertilidade não é mais um objetivo. Em comparação com a cirurgia aberta, a abordagem laparoscópica geralmente envolve cicatrizes menores, menos dor pós-operatória, uma internação mais curta de um a dois dias, e um retorno mais rápido às atividades normais, geralmente dentro de duas a quatro semanas. As pacientes que viajam à Índia para histerectomia laparoscópica geralmente planejam uma estadia de cerca de duas semanas, para permitir que a equipe cirúrgica monitore a recuperação e confirme a cicatrização antes da viagem internacional.',
			},
		],
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
		detailedProcedures: [
			{
				name: 'Transplante de Fígado',
				description:
					'O transplante de fígado substitui um fígado doente ou em falência por um saudável, realizado em pacientes com doença hepática em estágio terminal, cirrose, certos cânceres de fígado dentro de limites definidos de tamanho e número, ou falência hepática aguda. O fígado de substituição pode vir de um doador falecido ou, mais comumente na Índia, de um doador vivo que doa uma parte do próprio fígado, que se regenera a quase o tamanho total tanto no doador quanto no receptor em poucos meses. Durante a operação, o fígado doente é removido e o fígado ou segmento hepático do doador é conectado aos vasos sanguíneos e ao ducto biliar do receptor, um procedimento complexo que geralmente leva de oito a doze horas e exige uma equipe cirúrgica de transplante experiente. Os receptores passam um tempo em UTI logo após a cirurgia, seguido de uma a duas semanas de internação, e começam a medicação imunossupressora vitalícia para prevenir a rejeição do órgão. Os centros de transplante da Índia têm ampla experiência em transplante hepático de doador vivo, incluindo avaliação minuciosa do doador para confirmar sua segurança. Os pacientes internacionais geralmente precisam de um potencial doador vivo que os acompanhe e devem planejar uma estadia prolongada de várias semanas para concluir a avaliação do doador e do receptor, a cirurgia e o período crítico de recuperação inicial, antes que a viagem de volta seja considerada segura.',
			},
			{
				name: 'Transplante de Fígado Pediátrico',
				description:
					'O transplante de fígado pediátrico é realizado em bebês e crianças com falência hepática causada por condições como atresia biliar, distúrbios metabólicos hereditários ou falência hepática aguda, em que o fígado não consegue mais sustentar o crescimento e a saúde da criança. Como os órgãos de doadores falecidos dimensionados para crianças pequenas são limitados, o transplante de doador vivo é especialmente importante em casos pediátricos, com um dos pais ou parente frequentemente doando um pequeno segmento do fígado, que é moldado cirurgicamente e conectado para corresponder aos vasos sanguíneos e ao ducto biliar menores da criança. A operação exige uma equipe cirúrgica de transplante pediátrico experiente na precisão técnica exigida pela anatomia pequena, além de suporte de terapia intensiva pediátrica depois, para gerenciar o equilíbrio de fluidos, a imunossupressão e o risco de infecção. As crianças geralmente passam de uma a duas semanas internadas após a cirurgia, com monitoramento rigoroso da função hepática e introdução gradual da medicação antirrejeição vitalícia. Os programas de transplante pediátrico da Índia têm experiência no tratamento de crianças pequenas vindas do exterior, coordenando a avaliação do doador para familiares acompanhantes junto com a investigação da própria criança. As famílias devem planejar uma estadia prolongada de várias semanas para cobrir a avaliação do doador e do receptor, a cirurgia e o período inicial de recuperação, durante o qual a criança é monitorada de perto quanto a complicações.',
			},
			{
				name: 'Transplante de Rim',
				description:
					'O transplante de rim é realizado em pacientes com doença renal em estágio terminal, cujos rins não conseguem mais filtrar adequadamente os resíduos do sangue, oferecendo uma alternativa à diálise de longo prazo. O rim doador, que pode vir de um parente vivo ou doador vivo aprovado, ou em alguns casos de um doador falecido, é colocado cirurgicamente na parte inferior do abdômen do receptor e conectado a vasos sanguíneos próximos e à bexiga; os próprios rins não funcionais do paciente geralmente são deixados no lugar. A cirurgia geralmente leva de três a quatro horas sob anestesia geral, e o rim transplantado muitas vezes começa a produzir urina em poucas horas. Os receptores precisam de medicação imunossupressora vitalícia para prevenir a rejeição e são monitorados de perto nas primeiras semanas quanto a sinais de rejeição ou infecção. Os doadores vivos passam por um procedimento separado, geralmente laparoscópico, para remover um rim, e a maioria segue vivendo com saúde com o rim remanescente. Os centros de transplante da Índia realizam amplo trabalho de transplante renal de doador vivo, incluindo testes cuidadosos de compatibilidade e avaliação de segurança do doador. Os pacientes internacionais geralmente precisam de um doador acompanhante, quando aplicável, e devem planejar uma estadia de várias semanas para permitir a avaliação, a cirurgia e o monitoramento da função renal inicial antes de voltar para casa.',
			},
			{
				name: 'Transplante de Medula Óssea',
				description:
					'O transplante de medula óssea, também chamado de transplante de células-tronco, substitui a medula óssea doente ou danificada de um paciente por células-tronco formadoras de sangue saudáveis, usado para tratar condições como leucemia, linfoma, mieloma múltiplo, anemia aplástica e certos distúrbios sanguíneos hereditários. Em um transplante autólogo, as próprias células-tronco do paciente são coletadas, armazenadas e reinfundidas após quimioterapia em altas doses; em um transplante alogênico, as células-tronco vêm de um doador compatível, muitas vezes um irmão ou um doador não aparentado identificado por tipagem de tecido. Antes do transplante, os pacientes passam por um regime de condicionamento com quimioterapia e, às vezes, radioterapia, para eliminar a medula doente e suprimir o sistema imunológico, após o que as células-tronco são infundidas por via intravenosa e migram para a medula óssea para começar a produzir novas células sanguíneas ao longo das duas a quatro semanas seguintes. Esse período exige isolamento em uma unidade especializada de transplante, para proteger contra infecções enquanto as contagens sanguíneas se recuperam. Os receptores de transplante alogênico também precisam de medicação para prevenir a doença do enxerto contra o hospedeiro, em que as células imunes do doador reagem contra os tecidos do receptor. Os centros de transplante da Índia oferecem transplante de medula óssea tanto autólogo quanto alogênico, com instalações de isolamento dedicadas, e os pacientes internacionais geralmente planejam uma estadia de seis a oito semanas para cobrir o condicionamento, o transplante e a recuperação inicial.',
			},
			{
				name: 'Transplante de Coração',
				description:
					'O transplante de coração substitui um coração gravemente doente ou em falência por um coração doador saudável, geralmente considerado para pacientes com insuficiência cardíaca avançada que não respondeu a medicação, dispositivos ou outros tratamentos cirúrgicos. Como um coração doador adequado deve vir de um doador falecido e ser compatível em tipo sanguíneo e tamanho corporal, os candidatos são colocados em uma lista de espera e passam por uma avaliação completa para confirmar que estão aptos para a cirurgia e para a imunossupressão de longo prazo. Durante a operação, realizada com o paciente em circulação extracorpórea, o coração doente é removido e o coração doador é conectado aos grandes vasos sanguíneos, geralmente levando de quatro a seis horas. Os receptores passam um tempo em UTI logo depois e permanecem internados por várias semanas, enquanto os médicos monitoram sinais de rejeição e infecção e ajustam a medicação antirrejeição vitalícia. Biópsias regulares do novo coração são realizadas nos primeiros meses para verificar a rejeição. Os programas de transplante da Índia gerenciam todo o percurso, da avaliação aos cuidados pós-transplante, embora os pacientes internacionais devam estar cientes de que a disponibilidade de corações doadores e os tempos de espera variam conforme os processos locais de alocação. Estadias prolongadas, de várias semanas a meses, geralmente são necessárias para cobrir o período de espera, a cirurgia e a recuperação.',
			},
			{
				name: 'Transplante de Coração e Pulmão',
				description:
					'O transplante combinado de coração e pulmão substitui ambos os órgãos em uma única operação e é reservado para pacientes com doença grave e avançada que afeta os dois órgãos juntos, como condições cardíacas congênitas complexas com dano pulmonar associado, ou hipertensão pulmonar grave que causou insuficiência cardíaca irreversível. Como exige um conjunto compatível de órgãos doadores de um único doador falecido, é um procedimento mais raro e complexo do que o transplante de órgão único, com períodos de espera mais longos devido à disponibilidade limitada de doadores. A operação é realizada com o paciente em circulação extracorpórea, enquanto a equipe cirúrgica remove o coração e os pulmões doentes e conecta os órgãos doadores às vias aéreas e aos grandes vasos sanguíneos do receptor. A recuperação envolve uma estadia prolongada em UTI, manejo cuidadoso da respiração e da função pulmonar, e monitoramento rigoroso para rejeição de qualquer um dos órgãos, junto com medicação imunossupressora vitalícia. A reabilitação reconstrói gradualmente a capacidade pulmonar e a resistência física ao longo de vários meses. Os centros de transplante da Índia com capacidade de transplante torácico combinado avaliam os candidatos minuciosamente antes de incluí-los na lista, e os pacientes internacionais devem esperar um processo longo, que abrange avaliação, tempo de espera, cirurgia e uma recuperação prolongada de vários meses antes que a viagem de volta seja considerada.',
			},
			{
				name: 'Transplante de Pulmão',
				description:
					'O transplante de pulmão substitui um ou ambos os pulmões doentes por pulmões doadores saudáveis e é considerado para pacientes com doença pulmonar em estágio terminal, como doença pulmonar obstrutiva crônica, fibrose pulmonar, fibrose cística ou hipertensão pulmonar grave, em que o tratamento médico não consegue mais manter uma função respiratória adequada. Dependendo da condição, um único pulmão ou ambos podem ser transplantados; o procedimento é realizado sob anestesia geral, muitas vezes com suporte circulatório, como circulação extracorpórea, enquanto a equipe cirúrgica remove o tecido pulmonar doente e conecta as vias aéreas e os vasos sanguíneos do pulmão doador aos do receptor. A operação geralmente leva várias horas por pulmão, e os receptores passam um tempo em ventilação mecânica e em UTI depois, enquanto a função pulmonar se estabiliza. Um programa estruturado de reabilitação pulmonar se segue ao longo dos meses seguintes, para reconstruir a capacidade respiratória e a resistência, junto com medicação imunossupressora vitalícia e monitoramento regular para rejeição ou infecção. Os centros de transplante da Índia avaliam os candidatos cuidadosamente quanto à adequação, incluindo a gravidade da doença e a aptidão geral para cirurgia de grande porte. Como a disponibilidade de pulmões doadores afeta os tempos de espera, os pacientes internacionais devem planejar uma estadia prolongada e um tanto variável, cobrindo avaliação, o período de espera, a cirurgia e a reabilitação inicial antes da viagem de volta.',
			},
		],
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
