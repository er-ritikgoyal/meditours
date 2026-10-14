/**
 * Romanian translations for the deep treatment content in src/data/treatments.ts.
 *
 * Keyed by slug. Only translatable fields are included — numeric fields
 * (prices, durations, counts) live in the English source and are reused as-is.
 * AI-generated; recommend a native Romanian speaker with medical background
 * reviews this before it's relied on for clinical decisions.
 */

export interface FaqItemRo {
	question: string;
	answer: string;
}

export interface CostRowRo {
	country: string;
	waitTime: string;
	successRate: string;
}

export interface TreatmentDataRo {
	name: string;
	shortDescription: string;
	overview: string;
	procedures: string[];
	benefits: string[];
	flagshipProcedure: string;
	costComparison: CostRowRo[];
	inclusions: string[];
	exclusions: string[];
	faqs: FaqItemRo[];
}

export const roTreatments: Record<string, TreatmentDataRo> = {
	'cardiac-care': {
		name: 'Îngrijire cardiacă',
		shortDescription: 'Bypass, repararea valvelor și angioplastie efectuate de chirurgi instruiți în cele mai importante centre cardiace.',
		overview:
			'Programele cardiace din India reunesc chirurgi instruiți la nivel internațional cu unele dintre cele mai mari volume chirurgicale din lume, oferind pacienților acces la proceduri avansate precum bypass-ul fără pompă și repararea minim invazivă a valvelor — la o fracțiune din prețul occidental, fără liste de așteptare.',
		procedures: ['Bypass cardiac', 'Înlocuire de valvă', 'Angioplastie'],
		benefits: [
			'Chirurgi instruiți și certificați în SUA, Regatul Unit și Europa',
			'Unele dintre cele mai mari volume de chirurgie cardiacă la nivel mondial, ceea ce înseamnă o expertiză practică profundă',
			'ATI cardiacă dedicată și unitate de recuperare intermediară',
			'Fără liste de așteptare — majoritatea intervențiilor sunt programate în câteva zile de la prima opinie',
		],
		flagshipProcedure: 'Bypass aorto-coronarian (CABG)',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '4–8 săptămâni', successRate: '95–97%' },
			{ country: 'Regatul Unit', waitTime: '3–12 luni (NHS)', successRate: '95–97%' },
			{ country: 'Germania', waitTime: '4–10 săptămâni', successRate: '94–96%' },
			{ country: 'Thailanda', waitTime: '2–4 săptămâni', successRate: '93–95%' },
			{ country: 'India', waitTime: '1–2 săptămâni', successRate: '96%+' },
		],
		inclusions: [
			'Evaluare cardiacă preoperatorie, ECG, ecografie și analiza angiografiei',
			'Onorariul chirurgului pentru procedura de bypass sau valvă',
			'Taxe pentru sala de operație și anestezie',
			'Șederea în ATI cardiacă (3 zile) și cameră individuală de recuperare (6 zile)',
			'Îngrijire medicală, monitorizare și fizioterapie pe durata spitalizării',
			'Medicamente cardiace standard și consumabile pe durata șederii',
			'Taxe de laborator și radiologie legate de procedură',
			'Rezumat de externare și plan scris de îngrijire postoperatorie',
		],
		exclusions: [
			'Șederea de pre-internare pentru stabilizarea pacientului înainte de aprobarea intervenției',
			'Șederea în spital sau ATI peste durata pachetului',
			'Intervenții avansate precum un al doilea bypass sau repararea valvei în afara sferei inițiale',
			'Dispozitive implantabile precum stimulatoarele cardiace, dacă nu sunt menționate în prealabil',
			'Medicamente de luat acasă peste kitul standard de externare',
			'Tratamentul afecțiunilor preexistente, fără legătură, descoperite la evaluare',
			'Reintervenția pentru complicații fără legătură cu procedura inițială',
		],
		faqs: [
			{
				question: 'Cât costă operația de bypass în India?',
				answer:
					'Un pachet de bypass coronarian (CABG) în India începe de la 8.000 USD, cu aproximativ 90% mai puțin decât cei 120.000+ USD taxați de obicei în SUA. Pachetul acoperă evaluarea preoperatorie, intervenția în sine, șederea în ATI și cameră, îngrijirea medicală și medicamentele standard.',
			},
			{
				question: 'Care este rata de succes a chirurgiei cardiace în India?',
				answer:
					'Cele mai importante centre cardiace din India raportează rate de succes de 96% și peste pentru bypass și chirurgia valvulară, comparabile cu cele mai bune programe din SUA și Europa, susținute de ATI cardiace dedicate și volume chirurgicale anuale ridicate.',
			},
			{
				question: 'Cât timp trebuie să stau în India pentru o operație cardiacă?',
				answer:
					'Majoritatea pacienților rămân în spital aproximativ 9 zile (3 la ATI, 6 în cameră de recuperare) și se recomandă să rămână în India în total aproximativ 3 săptămâni, astfel încât echipa cardiacă să poată monitoriza recuperarea înainte de călătorie.',
			},
			{
				question: 'Am nevoie de un control medical complet înainte ca operația să fie confirmată?',
				answer:
					'Da. Rapoartele dumneavoastră (ECG, ecocardiogramă, angiografie dacă este disponibilă) sunt analizate de comisia noastră cardiacă înainte de finalizarea planului de tratament și a ofertei, iar la nevoie se organizează o teleconsultație cu chirurgul.',
			},
			{
				question: 'Este disponibil bypass-ul minim invaziv sau fără pompă?',
				answer:
					'Da, multe dintre spitalele noastre partenere oferă bypass fără pompă (inimă bătândă) și reparare minim invazivă a valvelor, ceea ce poate reduce șederea în ATI și timpul de recuperare, în funcție de cazul dumneavoastră.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți rapoartele dumneavoastră cardiace recente prin formularul nostru de contact sau WhatsApp, iar un coordonator va organiza o evaluare gratuită de specialitate și o ofertă transparentă în 24 de ore.',
			},
		],
	},

	orthopedics: {
		name: 'Ortopedie',
		shortDescription: 'Înlocuire articulară și medicină sportivă cu programe de recuperare accelerată.',
		overview:
			'De la înlocuirea robotizată a genunchiului până la fuziunea spinală complexă, centrele ortopedice din India combină tehnologia modernă a implanturilor cu programe structurate de fizioterapie concepute pentru a-i ajuta pe pacienți să se ridice pe picioare mai repede.',
		procedures: ['Înlocuire de genunchi', 'Înlocuire de șold', 'Fuziune spinală'],
		benefits: [
			'Înlocuire articulară robotizată și asistată de calculator disponibilă în centrele de top',
			'Fizioterapie structurată în spital din prima zi',
			'Implanturi de înaltă calitate, aprovizionate internațional',
			'Ședere tipică în spital de 3–5 zile pentru înlocuirea articulară',
		],
		flagshipProcedure: 'Înlocuire totală de genunchi',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '4–6 săptămâni', successRate: '96–98%' },
			{ country: 'Regatul Unit', waitTime: '6–12 luni (NHS)', successRate: '96–98%' },
			{ country: 'Germania', waitTime: '3–6 săptămâni', successRate: '95–97%' },
			{ country: 'Thailanda', waitTime: '2–3 săptămâni', successRate: '94–96%' },
			{ country: 'India', waitTime: '1–2 săptămâni', successRate: '97%+' },
		],
		inclusions: [
			'Evaluare ortopedică preoperatorie, inclusiv radiografii și verificarea aptitudinii',
			'Onorariile chirurgului și anestezistului pentru înlocuirea articulației',
			'Taxe pentru sala de operație și implant (calitate standard, dacă nu este ales un nivel superior)',
			'1 zi ATI/recuperare plus 4 zile în cameră individuală',
			'Sesiuni structurate de fizioterapie în spital',
			'Laborator, radiologie și medicamente standard postoperatorii pe durata șederii',
			'Rezumat de externare cu program de exerciții la domiciliu și plan de recuperare',
		],
		exclusions: [
			'Implanturi premium sau personalizate peste implantul standard',
			'Șederea în spital peste durata pachetului',
			'Chirurgie bilaterală (ambii genunchi), dacă nu este ofertată separat',
			'Sesiuni de fizioterapie ambulatorie după externare',
			'Tratamentul afecțiunilor fără legătură identificate la controlul preoperator',
			'Chirurgie de revizie pentru complicații fără legătură cu procedura inițială',
		],
		faqs: [
			{
				question: 'Cât costă înlocuirea genunchiului în India?',
				answer:
					'Un pachet de înlocuire totală de genunchi în India începe de la 5.500 USD, cu aproximativ 85% mai puțin decât prețurile obișnuite din SUA, și include onorariul chirurgului, implantul, șederea în spital și fizioterapia în spital.',
			},
			{
				question: 'Este disponibilă înlocuirea robotizată a genunchiului?',
				answer:
					'Da, mai multe dintre spitalele noastre partenere oferă înlocuire articulară robotizată și asistată de calculator, ceea ce poate îmbunătăți alinierea implantului și poate reduce timpul de recuperare pentru pacienții eligibili.',
			},
			{
				question: 'Care este durata șederii în spital și a recuperării?',
				answer:
					'Majoritatea pacienților rămân în spital aproximativ 5 zile și se recomandă să rămână în India 2–3 săptămâni, astfel încât fizioterapeuții să poată ghida recuperarea timpurie înainte de întoarcerea acasă.',
			},
			{
				question: 'Ce mărci de implanturi sunt utilizate?',
				answer:
					'Spitalele noastre partenere folosesc ca standard mărci de implanturi certificate internațional, cu opțiuni de implanturi premium disponibile la cerere și cu ofertă separată.',
			},
			{
				question: 'Se pot înlocui ambii genunchi în aceeași călătorie?',
				answer:
					'Da, înlocuirea bilaterală simultană sau etapizată a genunchilor este posibilă pentru candidații potriviți — chirurgul dumneavoastră va confirma cea mai bună abordare după analizarea radiografiilor și a stării generale de sănătate.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Trimiteți radiografiile dumneavoastră și un rezumat al simptomelor prin formularul nostru de contact și veți primi o evaluare de specialitate și o ofertă transparentă în 24 de ore.',
			},
		],
	},

	oncology: {
		name: 'Oncologie',
		shortDescription: 'Îngrijire oncologică multidisciplinară care combină chirurgia, chimioterapia și radioterapia țintită.',
		overview:
			'Tratamentul cancerului în India este oferit de comisii oncologice care reunesc chirurgi oncologi, oncologi medicali și specialiști în radioterapie pentru a construi un plan de tratament coordonat — același model multidisciplinar utilizat în cele mai importante centre oncologice occidentale.',
		procedures: ['Chirurgie tumorală', 'Chimioterapie', 'Radioterapie'],
		benefits: [
			'Comisii oncologice multidisciplinare pentru fiecare caz',
			'Acces la radioterapie avansată (IMRT, IGRT, opțiuni de terapie cu protoni în centre selectate)',
			'Îngrijire completă, de la diagnostic până la urmărirea post-tratament',
			'Consilieri oncologici dedicați care sprijină pacienții și familiile',
		],
		flagshipProcedure: 'Chirurgie de rezecție tumorală',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '4–8 săptămâni', successRate: 'Variază în funcție de stadiu' },
			{ country: 'Regatul Unit', waitTime: '2–6 luni (NHS)', successRate: 'Variază în funcție de stadiu' },
			{ country: 'Germania', waitTime: '4–8 săptămâni', successRate: 'Variază în funcție de stadiu' },
			{ country: 'Thailanda', waitTime: '2–4 săptămâni', successRate: 'Variază în funcție de stadiu' },
			{ country: 'India', waitTime: '1–2 săptămâni', successRate: 'Variază în funcție de stadiu' },
		],
		inclusions: [
			'Analiza de către comisia oncologică a rapoartelor existente de biopsie, imagistică și patologie',
			'Onorariile chirurgului, anestezistului și echipei oncologice pentru intervenția principală',
			'Taxe pentru sala de operație și ATI (2 zile) plus 6 zile în cameră individuală',
			'Îngrijire medicală și medicamente standard de chimioterapie/susținere pe durata spitalizării',
			'Taxe de laborator, radiologie și patologie legate de procedura principală',
			'Sprijin dedicat din partea unui consilier oncologic pentru pacient și familie',
			'Rezumat de externare cu plan structurat de chimioterapie/radioterapie ulterioară',
		],
		exclusions: [
			'Cicluri suplimentare de chimioterapie sau sesiuni de radioterapie peste pachetul inițial',
			'Teste de profilare genomică/moleculară, dacă nu sunt solicitate în mod specific',
			'Șederea în spital peste durata pachetului',
			'Terapie țintită sau imunoterapie, evaluate separat din cauza costurilor variabile',
			'Tratamentul afecțiunilor fără legătură identificate la evaluare',
			'Reintervenția pentru complicații fără legătură cu procedura inițială',
		],
		faqs: [
			{
				question: 'Cât costă chirurgia oncologică în India?',
				answer:
					'Un pachet de rezecție tumorală în India începe de la 6.000 USD, cu aproximativ 90% mai puțin decât o intervenție comparabilă în SUA, acoperind analiza comisiei oncologice, intervenția, șederea în ATI/cameră și îngrijirea de susținere inițială.',
			},
			{
				question: 'Cum sunt tarifate chimioterapia și radioterapia?',
				answer:
					'Ciclurile de chimioterapie și sesiunile de radioterapie (IMRT/IGRT) sunt evaluate separat, în funcție de protocolul dumneavoastră specific, deoarece regimurile variază foarte mult în funcție de tipul și stadiul cancerului — comisia oncologică vă oferă o estimare detaliată după analizarea rapoartelor.',
			},
			{
				question: 'O echipă de specialiști îmi va analiza cazul, sau doar un medic?',
				answer:
					'Fiecare caz trece printr-o comisie oncologică multidisciplinară — chirurg oncolog, oncolog medical și radioterapeut — înainte ca planul de tratament să fie finalizat, același model utilizat în cele mai importante centre oncologice occidentale.',
			},
			{
				question: 'Cât timp va trebui să stau în India?',
				answer:
					'Pacienții operați rămân de obicei în spital 8 zile, cu o ședere totală recomandată de aproximativ 4 săptămâni în India, dacă intervenția este urmată de chimioterapie sau radioterapie.',
			},
			{
				question: 'Pot obține o a doua opinie înainte de a mă angaja la operație?',
				answer:
					'Da. Trimiteți rapoartele de biopsie, imagistică și patologie pentru o analiză gratuită de către comisia oncologică și o a doua opinie, înainte de a decide dacă să călătoriți pentru tratament.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți rapoartele dumneavoastră diagnostice prin formularul nostru de contact sau WhatsApp, iar coordonatorul nostru oncologic va organiza o analiză a comisiei și o estimare transparentă în 48 de ore.',
			},
		],
	},

	'cosmetic-surgery': {
		name: 'Chirurgie estetică și plastică',
		shortDescription: 'Proceduri estetice și reconstructive efectuate de chirurgi certificați internațional.',
		overview:
			'Combinând chirurgi certificați cu îngrijire postoperatorie orientată spre recuperare, de tip hotel, India a devenit o destinație preferată pentru procedurile estetice și reconstructive — cu confidențialitatea și discreția pe care le așteaptă pacienții internaționali.',
		procedures: ['Rinoplastie', 'Liposucție', 'Transplant de păr'],
		benefits: [
			'Chirurgi plasticieni și reconstructivi certificați',
			'Suite private, discrete, pentru recuperare, separate de saloanele generale ale spitalului',
			'Tehnici moderne, inclusiv transplant de păr FUE și liposucție VASER',
			'Consultație completă înainte/după cu imagistică 3D în clinici selectate',
		],
		flagshipProcedure: 'Rinoplastie',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '2–4 săptămâni', successRate: 'Satisfacție ridicată a pacienților' },
			{ country: 'Regatul Unit', waitTime: '3–6 săptămâni', successRate: 'Satisfacție ridicată a pacienților' },
			{ country: 'Germania', waitTime: '2–4 săptămâni', successRate: 'Satisfacție ridicată a pacienților' },
			{ country: 'Thailanda', waitTime: '1–2 săptămâni', successRate: 'Satisfacție ridicată a pacienților' },
			{ country: 'India', waitTime: '3–7 zile', successRate: 'Satisfacție ridicată a pacienților' },
		],
		inclusions: [
			'Consultație cu imagistică 3D și planificare preoperatorie',
			'Onorariul chirurgului pentru procedură',
			'Taxe pentru sala de operație și anestezie',
			'O noapte într-o suită privată de recuperare',
			'Pansamente postoperatorii, îmbrăcăminte compresivă și prima vizită de urmărire',
			'Medicamente standard pe durata șederii de recuperare',
		],
		exclusions: [
			'Proceduri combinate (de ex. rinoplastie și augmentare a bărbiei), dacă nu sunt ofertate împreună',
			'Șederea de recuperare peste o noapte, sau îngrijire postoperatorie prelungită de tip hotel',
			'Chirurgie de revizie pentru retușuri estetice după perioada inițială de vindecare',
			'Medicamente de luat acasă peste kitul standard de externare',
			'Îmbrăcăminte sau produse pentru îngrijirea cicatricilor peste cele oferite la externare',
		],
		faqs: [
			{
				question: 'Cât costă rinoplastia în India?',
				answer:
					'Rinoplastia în India începe de la 2.000 USD, cu aproximativ 75–85% mai puțin decât în SUA sau Regatul Unit, și include consultația, intervenția, anestezia și o noapte de recuperare privată.',
			},
			{
				question: 'Chirurgii sunt instruiți la nivel internațional?',
				answer:
					'Da, chirurgii noștri esteticieni parteneri sunt certificați și mulți dintre ei au urmat pregătire suplimentară sau stagii de specializare în SUA, Regatul Unit sau Europa în chirurgie estetică și reconstructivă.',
			},
			{
				question: 'Cât de multă confidențialitate și discreție se oferă?',
				answer:
					'Pacienții se recuperează în suite private, separate de saloanele generale ale spitalului, iar toate consultațiile și înregistrările sunt gestionate cu strictă confidențialitate.',
			},
			{
				question: 'Cât timp ar trebui să planific să stau în India?',
				answer:
					'Majoritatea procedurilor estetice necesită aproximativ 1–2 săptămâni în India pentru intervenție și urmărirea inițială, deși acest lucru variază în funcție de procedură — chirurgul dumneavoastră va confirma calendarul exact în timpul consultației.',
			},
			{
				question: 'Pot combina mai multe proceduri într-o singură călătorie?',
				answer:
					'Da, mulți pacienți combină proceduri precum rinoplastia cu liposucția într-o singură călătorie; chirurgul dumneavoastră vă va sfătui ce se poate face în siguranță împreună, în funcție de starea dumneavoastră de sănătate și nevoile de recuperare.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți obiectivele și fotografiile dumneavoastră prin formularul nostru de contact, iar echipa noastră va organiza o consultație privată cu imagistică 3D și o ofertă transparentă în 24 de ore.',
			},
		],
	},

	fertility: {
		name: 'Tratament de fertilitate',
		shortDescription: 'FIV și îngrijire reproductivă cu rate de succes ridicate și protocoale personalizate.',
		overview:
			'Clinicile de fertilitate din India raportează rate de succes comparabile cu cele mai importante centre FIV la nivel mondial, cu protocoale hormonale personalizate, laboratoare proprii de embriologie și fără listele de așteptare de mai multe luni, obișnuite în Europa și America de Nord.',
		procedures: ['FIV', 'IUI', 'Congelarea ovocitelor'],
		benefits: [
			'Laboratoare proprii de embriologie și screening genetic',
			'Protocoale personalizate de stimulare hormonală',
			'Fără liste de așteptare de mai multe luni — ciclurile încep de obicei în câteva săptămâni',
			'Pachete grupate care acoperă medicamentele, monitorizarea și procedura în sine',
		],
		flagshipProcedure: 'Ciclu FIV',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '4–8 săptămâni', successRate: '40–50% pe ciclu' },
			{ country: 'Regatul Unit', waitTime: '6–12 luni (NHS)', successRate: '35–45% pe ciclu' },
			{ country: 'Germania', waitTime: '4–8 săptămâni', successRate: '35–45% pe ciclu' },
			{ country: 'Thailanda', waitTime: '2–4 săptămâni', successRate: '40–48% pe ciclu' },
			{ country: 'India', waitTime: '1–2 săptămâni', successRate: '40–50% pe ciclu' },
		],
		inclusions: [
			'Evaluare inițială de fertilitate, inclusiv analiză hormonală și ecografică',
			'Vizite de monitorizare a stimulării ovariene',
			'Procedura de recoltare a ovocitelor și taxe de anestezie',
			'Embriologie proprie, fertilizare și cultură embrionară',
			'Procedura de transfer al unui singur embrion',
			'Medicamente standard de fertilitate pentru ciclul de stimulare',
		],
		exclusions: [
			'Ovocite donatoare, spermă donatoare sau aranjamente de maternitate surogat',
			'Testarea genetică preimplantatorie (PGT), dacă nu este solicitată în mod specific',
			'Încercări suplimentare de transfer embrionar peste prima, sau cicluri de transfer de embrioni congelați',
			'Medicamente peste protocolul standard de stimulare',
			'Tratamentul infertilității masculine, precum ICSI/TESA, dacă nu este ofertat separat',
		],
		faqs: [
			{
				question: 'Cât costă tratamentul FIV în India?',
				answer:
					'Un ciclu FIV în India începe de la 3.000 USD, cu aproximativ 80% mai puțin decât în SUA, și acoperă evaluarea, monitorizarea stimulării, recoltarea ovocitelor, embriologia și transferul unui singur embrion.',
			},
			{
				question: 'Care este rata de succes a FIV în India?',
				answer:
					'Cele mai importante clinici de fertilitate din India raportează rate de succes pe ciclu de 40–50%, comparabile cu cele mai bune clinici din SUA și Europa, rezultatele depinzând de vârstă și de factorii de fertilitate de bază.',
			},
			{
				question: 'Cât durează un ciclu FIV?',
				answer:
					'Un ciclu complet, de la stimulare la transfer, durează de obicei 2–3 săptămâni, astfel încât majoritatea pacienților internaționali planifică să stea în India aproximativ 3 săptămâni pentru a finaliza monitorizarea, recoltarea și transferul.',
			},
			{
				question: 'Oferiți programe de ovocite donatoare sau maternitate surogat?',
				answer:
					'Aceste aranjamente implică pași juridici și medicali suplimentari și sunt evaluate separat — contactați coordonatorul nostru de fertilitate pentru a discuta eligibilitatea și reglementările actuale.',
			},
			{
				question: 'Poate începe tratamentul fără a călători mai întâi?',
				answer:
					'Da, o teleconsultație inițială și o analiză a rapoartelor pot avea loc înainte de călătorie, astfel încât protocolul dumneavoastră să fie planificat din timp, iar călătoria să fie sincronizată cu ciclul de stimulare.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți istoricul dumneavoastră de fertilitate și orice rapoarte de testare anterioare prin formularul nostru de contact, iar un coordonator de fertilitate va organiza o evaluare de specialitate și o estimare transparentă în 24 de ore.',
			},
		],
	},

	'organ-transplant': {
		name: 'Transplant de organe',
		shortDescription: 'Programe de transplant de ficat și rinichi cu echipe dedicate de îngrijire postoperatorie.',
		overview:
			'India efectuează unele dintre cele mai mari volume la nivel mondial de transplanturi de ficat și rinichi de la donatori vii, susținute de ATI de transplant dedicate și programe de monitorizare postoperatorie pe termen lung pentru pacienții internaționali.',
		procedures: ['Transplant de rinichi', 'Transplant de ficat', 'Transplant de măduvă osoasă'],
		benefits: [
			'Programe de transplant de la donatori vii, cu volum ridicat',
			'ATI de transplant dedicate și saloane de recuperare izolate',
			'Planificarea imunosupresiei pe termen lung și a îngrijirii de urmărire',
			'Sprijin juridic și etic pentru evaluarea donatorului pe tot parcursul',
		],
		flagshipProcedure: 'Transplant de ficat de la donator viu',
		costComparison: [
			{ country: 'Statele Unite', waitTime: 'Ani (listă de așteptare)', successRate: '88–92%' },
			{ country: 'Regatul Unit', waitTime: '1–3 ani', successRate: '88–91%' },
			{ country: 'Germania', waitTime: '6–18 luni', successRate: '87–90%' },
			{ country: 'Thailanda', waitTime: 'Moderat', successRate: '85–88%' },
			{ country: 'India', waitTime: '2–4 săptămâni', successRate: '90%+' },
		],
		inclusions: [
			'Evaluare pre-transplant a primitorului și a unui donator, în regim ambulatoriu',
			'Chirie cameră: primitor — 21 de zile (5 zile ATI + 16 zile cameră individuală); donator — 8 zile (2 zile ATI + 6 zile cameră individuală)',
			'Onorariul chirurgului pentru donator și primitor',
			'Onorariul anestezistului pentru donator și primitor',
			'Taxe pentru sala de operație pentru donator și primitor',
			'Taxe pentru serviciile de anestezie pentru donator și primitor',
			'Taxe pentru serviciile de laborator',
			'Taxe pentru serviciile de transfuzie',
			'Taxe pentru serviciile de radiologie',
			'Taxe pentru serviciile de fizioterapie',
			'Taxe pentru serviciile de farmacie, inclusiv medicamente și consumabile medicale',
		],
		exclusions: [
			'Șederea în spital înainte de operație pentru îmbunătățirea stării pacientului, precum și medicamente/investigații după externarea din spital',
			'Evaluarea oricărui donator suplimentar',
			'Orice perioadă de ședere în spital sau ATI peste durata pachetului',
			'Toate investigațiile, medicamentele și consumabilele peste tarifele plafon',
			'Medicamente costisitoare sau rar utilizate, precum Zenapax, Simulect, Valcyte, Novoseven, Thymoglobulin, Ambisome, Caspofungin și Anidulafungin',
			'Taxe pentru orice consult sau procedură cu un specialist fără legătură cu transplantul',
			'Taxe de radiologie intervențională, inclusiv drenaj percutanat, drenaj biliar transhepatic percutanat și angiografie',
			'Proceduri cardiologice (ecografie, angiografie) și taxe legate de nefrologie (dializă, CRRT)',
			'Proceduri endoscopice precum ERCP',
			'Reintervenția',
		],
		faqs: [
			{
				question: 'Cât costă transplantul de ficat în India?',
				answer:
					'Intervenția de transplant de ficat în India începe de la 25.000 USD, cu aproximativ 60–70% mai puțin decât în SUA sau Regatul Unit. Pachetul acoperă evaluarea pre-transplant a primitorului și a unui donator, intervenția pentru ambii, șederea în ATI și spital, taxele de sală de operație, îngrijirea medicală, laboratorul și serviciile de farmacie.',
			},
			{
				question: 'Care este rata de succes a transplantului de ficat în India?',
				answer:
					'Cele mai bune centre de transplant de ficat din India raportează o rată de succes la un an de peste 90%, comparabilă cu cele mai importante programe din SUA și Europa. Rata de supraviețuire la cinci ani este de aproximativ 75%, în funcție de boala de bază, starea generală de sănătate a pacientului și respectarea urmăririi.',
			},
			{
				question: 'Cine poate fi donator de ficat pentru transplant în India?',
				answer:
					'Pentru un transplant de ficat de la donator viu, donatorul trebuie să fie o rudă de sânge apropiată (părinte, frate/soră, copil sau soț/soție), cu vârsta între 18–55 de ani, sănătos, cu grup sanguin compatibil și funcție hepatică normală. Donarea trebuie să fie complet voluntară — orice tranzacție financiară între donator și primitor este ilegală conform legii indiene. Evaluarea completă a donatorului se finalizează de obicei în 2–3 zile.',
			},
			{
				question: 'Care este durata șederii în spital pentru transplantul de ficat în India?',
				answer:
					'Primitorul rămâne aproximativ 21 de zile — 5 zile la ATI și 16 zile în cameră individuală. Donatorul rămâne aproximativ 8 zile — 2 zile la ATI și 6 zile în cameră individuală. După externare, se recomandă ca primitorul să rămână în India cel puțin 1 lună pentru monitorizare atentă, ceea ce face ca șederea totală în India să fie de obicei de aproximativ 2 luni.',
			},
			{
				question: 'Poate ficatul să se regenereze după donarea de la un donator viu?',
				answer:
					'Da. Ficatul este singurul organ solid din corpul uman care se poate regenera complet. După donarea unei părți, ficatul rămas al donatorului crește la aproximativ 80% din dimensiunea inițială în câteva săptămâni și aproape de dimensiunea inițială în câteva luni. Partea transplantată la primitor crește, de asemenea, la dimensiunea completă.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Trimiteți rapoartele medicale ale primitorului și ale potențialului donator prin formularul nostru de contact sau WhatsApp, iar echipa noastră de coordonare a transplantului va organiza o evaluare gratuită de specialitate și o teleconsultație cu chirurgul de transplant înainte de călătorie.',
			},
		],
	},

	'dental-care': {
		name: 'Îngrijire dentară',
		shortDescription: 'Implanturi, fațete și restaurare completă a cavității bucale, folosind cea mai recentă stomatologie digitală.',
		overview:
			'Designul digital al zâmbetului, coroanele CAD/CAM în aceeași zi și reabilitarea completă cu implanturi sunt standard în cele mai importante centre stomatologice din India — oferind rezultate în câteva zile, nu în lunile obișnuite pentru tratamentul etapizat în străinătate.',
		procedures: ['Implanturi dentare', 'Fațete', 'Restaurare completă a cavității bucale'],
		benefits: [
			'Design digital al zâmbetului și coroane CAD/CAM în aceeași zi',
			'Reabilitare completă cu implanturi finalizată într-o singură călătorie',
			'Mărci de implanturi de nivel internațional utilizate în toate cazurile',
			'Combinați tratamentul cu o ședere de recuperare aproape de clinică',
		],
		flagshipProcedure: 'Implanturi dentare pentru toată gura',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '2–4 săptămâni', successRate: '95–97%' },
			{ country: 'Regatul Unit', waitTime: '3–6 săptămâni', successRate: '95–97%' },
			{ country: 'Germania', waitTime: '2–4 săptămâni', successRate: '94–96%' },
			{ country: 'Thailanda', waitTime: '1–2 săptămâni', successRate: '93–95%' },
			{ country: 'India', waitTime: '3–5 zile', successRate: '95%+' },
		],
		inclusions: [
			'Consultație de design digital al zâmbetului și scanare 3D',
			'Onorariul stomatologului pentru amplasarea implantului sau restaurare',
			'Fixtura de implant și bontul de calitate standard',
			'Fabricarea coroanei CAD/CAM în aceeași zi, unde este aplicabil',
			'Anestezie locală și taxe pentru procedura sterilă',
			'O vizită de urmărire pentru verificarea vindecării și potrivirii',
		],
		exclusions: [
			'Grefa osoasă sau ridicarea sinusului, dacă nu sunt identificate la scanarea inițială',
			'Upgrade-uri de implanturi premium peste fixtura standard',
			'Coroane, fațete sau restaurări suplimentare peste planul de tratament convenit',
			'Tratament ortodontic sau alinierea dinților înainte de amplasarea implantului',
			'Vizite de urmărire peste cea inclusă',
		],
		faqs: [
			{
				question: 'Cât costă un implant dentar în India?',
				answer:
					'Un singur implant dentar în India începe de la 800 USD, cu aproximativ 80% mai puțin decât în SUA, și include consultația, amplasarea implantului și o coroană CAD/CAM în aceeași zi, unde este aplicabil.',
			},
			{
				question: 'Poate fi finalizată restaurarea completă a gurii într-o singură călătorie?',
				answer:
					'Da, folosind designul digital al zâmbetului și tehnologia coroanelor în aceeași zi, majoritatea cazurilor de implanturi pentru toată gura pot fi finalizate într-o singură călătorie de 7–10 zile, comparativ cu lunile necesare de obicei pentru tratamentul etapizat în străinătate.',
			},
			{
				question: 'Ce mărci de implanturi sunt utilizate?',
				answer:
					'Centrele noastre stomatologice partenere folosesc ca standard mărci de implanturi certificate internațional, cu upgrade-uri la mărci premium disponibile la cerere.',
			},
			{
				question: 'Este procedura dureroasă?',
				answer:
					'Amplasarea implantului se face sub anestezie locală și este de obicei bine tolerată, majoritatea pacienților revenind la activitatea normală în una-două zile.',
			},
			{
				question: 'Cât timp ar trebui să planific să stau în India?',
				answer:
					'Majoritatea cazurilor de implanturi și restaurare necesită aproximativ 7–10 zile în India pentru amplasare, orice lucrare la coroana din aceeași zi și un control de urmărire înainte de întoarcerea acasă.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți o radiografie dentară recentă sau fotografii ale dinților dumneavoastră prin formularul nostru de contact, iar coordonatorul nostru stomatologic va organiza o analiză și o ofertă transparentă în 24 de ore.',
			},
		],
	},

	'eye-care': {
		name: 'Îngrijire oftalmologică',
		shortDescription: 'Chirurgie de cataractă și corecție a vederii, cu externare în aceeași zi în majoritatea cazurilor.',
		overview:
			'Spitalele oftalmologice din India efectuează proceduri de cataractă și refractive la volume extrem de mari, oferind chirurgilor o expertiză profundă în tehnicile fără lamă, asistate de laser, cu externare în aceeași zi pentru majoritatea pacienților.',
		procedures: ['Chirurgie de cataractă', 'LASIK', 'Tratament de retină'],
		benefits: [
			'Chirurgie de cataractă fără lamă, asistată de laser',
			'Externare în aceeași zi pentru majoritatea procedurilor',
			'Centre cu volum ridicat, cu expertiză chirurgicală profundă',
			'Opțiuni de lentile intraoculare premium disponibile',
		],
		flagshipProcedure: 'Chirurgie de cataractă (facoemulsificare)',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '2–4 săptămâni', successRate: '98–99%' },
			{ country: 'Regatul Unit', waitTime: '8–18 săptămâni (NHS)', successRate: '98–99%' },
			{ country: 'Germania', waitTime: '2–4 săptămâni', successRate: '97–99%' },
			{ country: 'Thailanda', waitTime: '1–2 săptămâni', successRate: '97–98%' },
			{ country: 'India', waitTime: '2–4 zile', successRate: '98%+' },
		],
		inclusions: [
			'Evaluare oculară preoperatorie, inclusiv biometrie și verificarea aptitudinii',
			'Onorariul chirurgului pentru chirurgia de cataractă fără lamă, asistată de laser',
			'Lentilă intraoculară (IOL) monofocală standard',
			'Taxe pentru sala de operație și procedura sterilă',
			'Externare în aceeași zi cu picături oculare postoperatorii',
			'O vizită de urmărire pentru confirmarea vindecării și corecției vederii',
		],
		exclusions: [
			'Upgrade-uri de IOL premium (lentile multifocale sau torice) peste lentila monofocală standard',
			'Tratamentul afecțiunilor oculare fără legătură, precum glaucomul sau bolile de retină, descoperite la evaluare',
			'Chirurgia celui de-al doilea ochi, dacă nu este ofertată împreună',
			'Vizite de urmărire peste cea inclusă',
			'Ochelari sau lentile de contact după procedură',
		],
		faqs: [
			{
				question: 'Cât costă chirurgia de cataractă în India?',
				answer:
					'Chirurgia de cataractă în India începe de la 700 USD pe ochi, cu aproximativ 80% mai puțin decât în SUA, și include evaluarea preoperatorie, chirurgia asistată de laser, o IOL standard și o vizită de urmărire.',
			},
			{
				question: 'Este intervenția fără durere și rapidă?',
				answer:
					'Da, chirurgia modernă de cataractă fără lamă, asistată de laser, durează de obicei 15–20 de minute pe ochi, sub anestezie locală, majoritatea pacienților fiind externați în aceeași zi.',
			},
			{
				question: 'Pot alege o lentilă premium (multifocală sau torică)?',
				answer:
					'Da, opțiuni de lentile intraoculare premium sunt disponibile pentru pacienții care doresc să reducă dependența de ochelari după intervenție — acestea sunt evaluate separat de lentila monofocală standard.',
			},
			{
				question: 'Cât timp ar trebui să planific să stau în India?',
				answer:
					'Majoritatea pacienților cu cataractă planifică aproximativ 4–7 zile în India pentru evaluarea preoperatorie, intervenție și o vizită de urmărire înainte de întoarcerea acasă; LASIK urmează un calendar la fel de scurt.',
			},
			{
				question: 'Este LASIK disponibil pentru ambii ochi într-o singură vizită?',
				answer:
					'Da, LASIK și alte proceduri refractive sunt de obicei efectuate pe ambii ochi într-o singură vizită, în aceeași zi, pentru candidații potriviți, după o evaluare preoperatorie detaliată.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți rețeta dumneavoastră oculară recentă sau rapoartele existente prin formularul nostru de contact, iar coordonatorul nostru de îngrijire oftalmologică va organiza o evaluare de specialitate și o ofertă transparentă în 24 de ore.',
			},
		],
	},

	neurology: {
		name: 'Neurologie și neurochirurgie',
		shortDescription: 'Specialiști în creier, coloană vertebrală și nervi, care tratează tumori, accidente vasculare cerebrale și tulburări neurologice complexe.',
		overview:
			'Centrele de neurochirurgie din India combină tehnicile microchirurgicale și ghidate imagistic cu ATI neurologice dedicate, oferind pacienților internaționali acces la îngrijire avansată pentru tumori cerebrale și accidente vasculare cerebrale, fără listele lungi de așteptare pentru specialiști, obișnuite în alte țări.',
		procedures: ['Chirurgie de tumoră cerebrală', 'Chirurgia epilepsiei', 'Îngrijirea accidentului vascular cerebral'],
		benefits: [
			'Neurochirurgi instruiți în tehnici microchirurgicale și minim invazive',
			'RMN intraoperator și neuronavigație disponibile în centrele de top',
			'ATI neurologică dedicată, cu monitorizare critică non-stop',
			'Sprijin structurat de neuro-recuperare după intervenție',
		],
		flagshipProcedure: 'Rezecția tumorii cerebrale',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '4–8 săptămâni', successRate: '85–90%' },
			{ country: 'Regatul Unit', waitTime: '3–9 luni (NHS)', successRate: '85–90%' },
			{ country: 'Germania', waitTime: '4–8 săptămâni', successRate: '84–89%' },
			{ country: 'Thailanda', waitTime: '2–4 săptămâni', successRate: '82–87%' },
			{ country: 'India', waitTime: '1–2 săptămâni', successRate: '85%+' },
		],
		inclusions: [
			'Evaluare neurologică preoperatorie, analiza RMN/CT și verificarea aptitudinii',
			'Onorariile neurochirurgului și anestezistului pentru procedura principală',
			'Taxe pentru sala de operație, inclusiv neuronavigație, unde este aplicabil',
			'Șederea în ATI neurologică (4 zile) plus 8 zile în cameră de recuperare intermediară',
			'Îngrijire medicală și monitorizare neurologică standard pe durata spitalizării',
			'Taxe de laborator și radiologie legate de procedură',
			'Rezumat de externare cu plan structurat de neuro-recuperare',
		],
		exclusions: [
			'Șederea de pre-internare pentru stabilizarea pacientului înainte de aprobarea intervenției',
			'Șederea în spital sau ATI peste durata pachetului',
			'Radioterapie sau chimioterapie pentru tumorile maligne, evaluate separat',
			'Sesiuni de neuro-recuperare ambulatorie după externare',
			'Tratamentul afecțiunilor fără legătură identificate la controlul preoperator',
			'Reintervenția pentru complicații fără legătură cu procedura inițială',
		],
		faqs: [
			{
				question: 'Cât costă chirurgia unei tumori cerebrale în India?',
				answer:
					'Rezecția unei tumori cerebrale în India începe de la 9.000 USD, cu aproximativ 90% mai puțin decât în SUA, și include evaluarea preoperatorie, intervenția, șederea în ATI neurologică și un plan structurat de recuperare.',
			},
			{
				question: 'Sunt disponibile tehnici de neurochirurgie minim invazivă?',
				answer:
					'Da, multe dintre spitalele noastre partenere oferă abordări ghidate imagistic și minim invazive, inclusiv RMN intraoperator și neuronavigație, care pot îmbunătăți precizia și pot reduce recuperarea pentru cazurile eligibile.',
			},
			{
				question: 'Care este durata șederii în spital pentru neurochirurgie?',
				answer:
					'Majoritatea pacienților rămân în spital aproximativ 12 zile — 4 zile la ATI neurologică și 8 zile în cameră de recuperare intermediară — cu o ședere totală recomandată în India de aproximativ 3–4 săptămâni pentru urmărire.',
			},
			{
				question: 'Va fi necesară radioterapie sau chimioterapie după intervenție?',
				answer:
					'Pentru tumorile maligne, echipa dumneavoastră de neuro-oncologie poate recomanda radioterapie sau chimioterapie după intervenție — acestea sunt evaluate separat, în funcție de protocolul dumneavoastră specific, și sunt discutate ca parte a planului de tratament.',
			},
			{
				question: 'Pot obține o a doua opinie înainte de a călători?',
				answer:
					'Da, trimiteți scanările RMN/CT și rapoartele pentru o evaluare gratuită de specialitate — comisia noastră de neurochirurgie va confirma dacă se recomandă intervenția, înainte de a vă angaja să călătoriți.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți rapoartele dumneavoastră neurologice și imagistica prin formularul nostru de contact sau WhatsApp, iar un coordonator va organiza o evaluare de specialitate și o estimare transparentă în 48 de ore.',
			},
		],
	},

	'spine-surgery': {
		name: 'Chirurgia coloanei vertebrale',
		shortDescription: 'Fuziune spinală, înlocuire de disc și corecția scoliozei, cu programe structurate de recuperare.',
		overview:
			'Centrele de chirurgie a coloanei din India asociază chirurgi ai coloanei instruiți prin fellowship cu tehnici minim invazive și de conservare a mobilității, ajutând pacienții cu dureri cronice de spate, boală discală și deformări ale coloanei să evite listele lungi de așteptare obișnuite în Occident.',
		procedures: ['Fuziune spinală', 'Înlocuire de disc', 'Corecția scoliozei'],
		benefits: [
			'Chirurgi ai coloanei instruiți prin fellowship, folosind tehnici minim invazive',
			'Opțiuni de înlocuire de disc cu conservarea mobilității, în centre selectate',
			'Fizioterapie structurată în spital din prima zi',
			'Ședere tipică în spital de 5–7 zile pentru chirurgia majoră a coloanei',
		],
		flagshipProcedure: 'Fuziune spinală lombară',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '4–8 săptămâni', successRate: '88–92%' },
			{ country: 'Regatul Unit', waitTime: '6–12 luni (NHS)', successRate: '88–92%' },
			{ country: 'Germania', waitTime: '4–8 săptămâni', successRate: '87–91%' },
			{ country: 'Thailanda', waitTime: '2–4 săptămâni', successRate: '85–89%' },
			{ country: 'India', waitTime: '1–2 săptămâni', successRate: '90%+' },
		],
		inclusions: [
			'Evaluare preoperatorie a coloanei, inclusiv analiza RMN/radiografie',
			'Onorariile chirurgului și anestezistului pentru procedura coloanei',
			'Taxe pentru sala de operație și implant/hardware spinal standard',
			'Șederea în ATI (1 zi) plus 5 zile în cameră individuală',
			'Sesiuni structurate de fizioterapie în spital',
			'Laborator, radiologie și medicamente standard postoperatorii pe durata șederii',
			'Rezumat de externare cu program de exerciții la domiciliu și plan de recuperare',
		],
		exclusions: [
			'Implanturi spinale premium sau personalizate peste hardware-ul standard',
			'Șederea în spital peste durata pachetului',
			'Fuziune pe mai multe niveluri, peste nivelurile ofertate în evaluarea inițială',
			'Sesiuni de fizioterapie ambulatorie după externare',
			'Tratamentul afecțiunilor fără legătură identificate la controlul preoperator',
			'Chirurgie de revizie pentru complicații fără legătură cu procedura inițială',
		],
		faqs: [
			{
				question: 'Cât costă fuziunea spinală în India?',
				answer:
					'Un pachet de fuziune spinală lombară în India începe de la 6.500 USD, cu aproximativ 90% mai puțin decât prețurile obișnuite din SUA, și include onorariul chirurgului, implantul, șederea în spital și fizioterapia în spital.',
			},
			{
				question: 'Este disponibilă chirurgia minim invazivă a coloanei?',
				answer:
					'Da, mai multe dintre spitalele noastre partenere oferă tehnici minim invazive și de conservare a mobilității, precum înlocuirea de disc, care pot reduce pierderea de sânge și pot scurta recuperarea pentru candidații potriviți.',
			},
			{
				question: 'Care este durata șederii în spital și a recuperării?',
				answer:
					'Majoritatea pacienților rămân în spital aproximativ 6 zile și se recomandă să rămână în India 2–3 săptămâni, astfel încât echipa coloanei să poată monitoriza recuperarea timpurie înainte de întoarcerea acasă.',
			},
			{
				question: 'Ce implant/hardware este utilizat?',
				answer:
					'Spitalele noastre partenere folosesc ca standard sisteme de implanturi spinale certificate internațional, cu upgrade-uri de hardware premium disponibile la cerere și cu ofertă separată.',
			},
			{
				question: 'Voi avea nevoie de fizioterapie după intervenție?',
				answer:
					'Da, fizioterapia structurată în spital începe la scurt timp după intervenție, iar chirurgul dumneavoastră va oferi un program de exerciții la domiciliu pentru a continua recuperarea după întoarcerea acasă.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Trimiteți RMN-ul sau radiografiile coloanei dumneavoastră prin formularul nostru de contact și veți primi o evaluare de specialitate și o estimare transparentă a costurilor în 24 de ore.',
			},
		],
	},

	'bariatric-surgery': {
		name: 'Chirurgie bariatrică',
		shortDescription: 'Sleeve gastric, bypass și balon gastric pentru o pierdere în greutate durabilă, supravegheată medical.',
		overview:
			'Centrele bariatrice din India combină expertiza chirurgicală laparoscopică cu consiliere dietetică structurată pre- și postoperatorie, ajutând pacienții să obțină o pierdere în greutate durabilă, cu șederi mai scurte în spital și recuperare mai rapidă decât în cazul chirurgiei deschise.',
		procedures: ['Sleeve gastric', 'Bypass gastric', 'Balon gastric'],
		benefits: [
			'Chirurgie bariatrică laparoscopică (minim invazivă) ca standard',
			'Consiliere structurată dietetică și de stil de viață, pre- și postoperator',
			'Ședere tipică în spital de doar 2–3 zile pentru sleeve gastrectomie',
			'Sprijin de urmărire pe termen lung pentru monitorizarea progresului pierderii în greutate',
		],
		flagshipProcedure: 'Sleeve gastrectomie laparoscopică',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '3–6 săptămâni', successRate: '90–95%' },
			{ country: 'Regatul Unit', waitTime: '6–12 luni (NHS)', successRate: '90–95%' },
			{ country: 'Germania', waitTime: '4–8 săptămâni', successRate: '89–94%' },
			{ country: 'Thailanda', waitTime: '1–3 săptămâni', successRate: '88–93%' },
			{ country: 'India', waitTime: '1–2 săptămâni', successRate: '92%+' },
		],
		inclusions: [
			'Evaluare preoperatorie, inclusiv endoscopie și verificarea aptitudinii',
			'Consultație cu dieteticianul și planificarea dietei preoperatorii',
			'Onorariile chirurgului și anestezistului pentru procedura laparoscopică',
			'Taxe pentru sala de operație și capsatoare/consumabile chirurgicale standard',
			'3 zile de ședere în spital, inclusiv monitorizarea postoperatorie',
			'Rezumat de externare cu plan structurat de progresie dietetică postoperatorie',
		],
		exclusions: [
			'Șederea în spital peste durata pachetului',
			'Chirurgie de revizie pentru o procedură bariatrică anterioară efectuată în altă parte',
			'Chirurgie plastică pentru îndepărtarea pielii în exces după o pierdere semnificativă în greutate',
			'Suplimente nutriționale pe termen lung peste kitul inițial de externare',
			'Tratamentul afecțiunilor fără legătură identificate la controlul preoperator',
			'Reintervenția pentru complicații fără legătură cu procedura inițială',
		],
		faqs: [
			{
				question: 'Cât costă chirurgia sleeve gastric în India?',
				answer:
					'Un pachet de sleeve gastrectomie laparoscopică în India începe de la 4.500 USD, cu aproximativ 80% mai puțin decât în SUA, și include evaluarea preoperatorie, intervenția, șederea în spital și planul dietetic postoperator.',
			},
			{
				question: 'Sunt eligibil pentru chirurgia bariatrică?',
				answer:
					'Eligibilitatea este de obicei determinată de IMC și afecțiunile asociate — distribuiți înălțimea, greutatea și orice afecțiuni existente prin formularul nostru de contact pentru o evaluare gratuită de eligibilitate efectuată de echipa noastră bariatrică.',
			},
			{
				question: 'Câtă greutate pot spera să pierd?',
				answer:
					'Majoritatea pacienților pierd 60–70% din greutatea în exces în 12–18 luni după sleeve gastrectomie sau bypass, deși rezultatele variază în funcție de procedura aleasă și de respectarea dietei și stilului de viață postoperator.',
			},
			{
				question: 'Care este durata șederii în spital și a recuperării?',
				answer:
					'Majoritatea pacienților rămân în spital aproximativ 3 zile și se recomandă să rămână în India 10–14 zile, astfel încât echipa chirurgicală să poată confirma recuperarea timpurie înainte de întoarcerea acasă.',
			},
			{
				question: 'Este procedura efectuată laparoscopic?',
				answer:
					'Da, sleeve gastrectomia, bypass-ul gastric și plasarea balonului sunt toate efectuate laparoscopic ca standard, ceea ce înseamnă de obicei mai puțină durere și recuperare mai rapidă decât în cazul chirurgiei deschise.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți înălțimea, greutatea și istoricul medical prin formularul nostru de contact, iar coordonatorul nostru bariatric va organiza o evaluare de specialitate în 24 de ore.',
			},
		],
	},

	'nephrology-urology': {
		name: 'Nefrologie și urologie',
		shortDescription: 'Tratamentul calculilor renali, chirurgie de prostată și îngrijire de dializă din partea echipelor urologice specializate.',
		overview:
			'Centrele de urologie și nefrologie din India efectuează proceduri pentru calculi renali și prostată la volume mari, folosind tehnici laser și minim invazive, oferind pacienților internaționali acces rapid la specialiști, fără listele de așteptare obișnuite în alte țări.',
		procedures: ['Îndepărtarea calculilor renali', 'Chirurgie de prostată', 'Îngrijire de dializă'],
		benefits: [
			'Îndepărtarea calculilor renali cu laser și minim invazivă (PCNL/RIRS)',
			'Chirurgie de prostată robotizată și laparoscopică disponibilă în centrele de top',
			'Unități de dializă dedicate pentru pacienții care necesită îngrijire renală continuă',
			'Externare în aceeași zi sau a doua zi pentru multe proceduri minim invazive',
		],
		flagshipProcedure: 'Nefrolitotomie percutanată (PCNL)',
		costComparison: [
			{ country: 'Statele Unite', waitTime: '3–6 săptămâni', successRate: '92–96%' },
			{ country: 'Regatul Unit', waitTime: '3–9 luni (NHS)', successRate: '92–96%' },
			{ country: 'Germania', waitTime: '3–6 săptămâni', successRate: '91–95%' },
			{ country: 'Thailanda', waitTime: '1–3 săptămâni', successRate: '90–94%' },
			{ country: 'India', waitTime: '3–7 zile', successRate: '94%+' },
		],
		inclusions: [
			'Evaluare preoperatorie, inclusiv ecografie/CT și verificarea aptitudinii',
			'Onorariile urologului și anestezistului pentru procedură',
			'Taxe pentru sala de operație și echipamentul laser/endoscopic',
			'2 zile de ședere în spital, inclusiv monitorizarea postoperatorie',
			'Medicamente și consumabile standard pe durata șederii',
			'Rezumat de externare cu plan de imagistică de urmărire',
		],
		exclusions: [
			'Șederea în spital peste durata pachetului',
			'Tratamentul calculilor bilaterali (ambii rinichi), dacă nu este ofertat împreună',
			'Sesiuni de dializă pe termen lung peste șederea inițială de evaluare',
			'Medicamente de luat acasă peste kitul standard de externare',
			'Tratamentul afecțiunilor fără legătură identificate la controlul preoperator',
			'Reintervenția pentru complicații fără legătură cu procedura inițială',
		],
		faqs: [
			{
				question: 'Cât costă îndepărtarea calculilor renali în India?',
				answer:
					'Un pachet PCNL (îndepărtarea calculilor renali) în India începe de la 3.500 USD, cu aproximativ 85% mai puțin decât în SUA, și include evaluarea preoperatorie, procedura, șederea în spital și imagistica de urmărire.',
			},
			{
				question: 'Tratamentul calculilor renali este minim invaziv?',
				answer:
					'Da, majoritatea calculilor sunt tratați cu tehnici laser minim invazive, precum PCNL sau RIRS, care permit de obicei externarea în 1–2 zile, în funcție de dimensiunea și localizarea calculului.',
			},
			{
				question: 'Este disponibilă chirurgia robotizată de prostată?',
				answer:
					'Da, mai multe dintre spitalele noastre partenere oferă chirurgie de prostată robotizată și laparoscopică, care poate reduce pierderea de sânge și poate scurta recuperarea comparativ cu chirurgia deschisă.',
			},
			{
				question: 'Cât timp ar trebui să planific să stau în India?',
				answer:
					'Majoritatea procedurilor urologice necesită aproximativ 7–10 zile în India pentru evaluarea preoperatorie, procedură și un control de urmărire înainte de întoarcerea acasă; cazurile complexe pot necesita o ședere mai lungă.',
			},
			{
				question: 'Sprijiniți pacienții care au nevoie de dializă continuă?',
				answer:
					'Da, spitalele noastre partenere au unități de dializă dedicate și pot coordona îngrijirea renală continuă pentru pacienții care călătoresc pentru evaluare sau care așteaptă un transplant de rinichi.',
			},
			{
				question: 'Cum încep?',
				answer:
					'Distribuiți rapoartele dumneavoastră imagistice (ecografie/CT) prin formularul nostru de contact, iar coordonatorul nostru de urologie va organiza o evaluare de specialitate și o ofertă transparentă în 24 de ore.',
			},
		],
	},
};

export const getRoTreatment = (slug: string) => roTreatments[slug];
