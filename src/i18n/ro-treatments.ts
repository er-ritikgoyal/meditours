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
	detailedProcedures?: { name: string; description: string }[];
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
		detailedProcedures: [
			{
				name: 'Angioplastie coronariană',
				description:
					'Angioplastia coronariană este o procedură minim invazivă folosită pentru a lărgi o arteră coronariană îngustată sau blocată și a restabili fluxul sanguin către mușchiul cardiac la pacienții cu boală coronariană. Sub anestezie locală, cardiologul introduce un cateter subțire printr-o arteră de la nivelul încheieturii mâinii sau al zonei inghinale până la locul blocajului, ghidat prin imagistică radiologică în timp real, și umflă un balon mic pentru a comprima placa de aterom pe peretele arterei; în majoritatea cazurilor se lasă apoi pe loc un stent metalic pentru a menține vasul deschis și a reduce șansele de reîngustare. Este recomandată de obicei pacienților cu angină, flux sanguin redus la testul de efort sau ca tratament de urgență în timpul unui infarct pentru a redeschide rapid un vas blocat. Procedura se desfășoară într-un laborator de cateterism și durează de obicei sub o oră, majoritatea pacienților fiind monitorizați peste noapte și externați în una-două zile. Centrele cardiace din India efectuează un volum mare de angioplastii folosind imagistică modernă și o gamă largă de stenturi, iar pacienții își reiau de regulă activitatea ușoară în decurs de o săptămână, cu îndrumări din partea cardiologului privind medicația și urmărirea înainte de întoarcerea acasă.',
			},
			{
				name: 'Bypass aorto-coronarian (CABG)',
				description:
					'Bypass-ul aorto-coronarian, cunoscut și ca intervenție CABG, se efectuează atunci când una sau mai multe artere coronare sunt sever îngustate sau blocate, iar angioplastia nu este potrivită, adesea la pacienți cu boală coronariană multivasculară sau complexă. În timpul operației, chirurgul cardiac prelevează un vas sanguin sănătos din altă parte a corpului, de obicei artera mamară internă din torace sau o venă de la nivelul piciorului, și îl grefează pentru a redirecționa fluxul sanguin în jurul segmentului blocat. CABG-ul tradițional se efectuează printr-o incizie la nivelul sternului, pacientul fiind conectat la un aparat cord-plămân, deși în cazuri selectate se folosesc abordări fără pompă sau minim invazive. Scopul este ameliorarea anginei, reducerea riscului de infarct și îmbunătățirea funcției cardiace pe termen lung. Recuperarea implică mai multe zile de spitalizare, inclusiv timp petrecut în terapie intensivă imediat după operație, urmate de o perioadă structurată de restricție a activității și recuperare cardiacă. Programele chirurgicale cardiace din India combină echipe chirurgicale experimentate cu unități de terapie intensivă bine dotate, iar pacienții internaționali planifică de obicei o ședere spitalicească de aproximativ o săptămână, urmată de câteva săptămâni de recuperare locală înainte de zbor, cu verificări ale plăgii și îndrumare de recuperare pe tot parcursul.',
			},
			{
				name: 'Chirurgia de înlocuire a valvei mitrale',
				description:
					'Înlocuirea valvei mitrale se efectuează atunci când valva mitrală, care controlează fluxul sanguin dintre atriul stâng și ventriculul stâng al inimii, devine prea îngustă (stenoză) sau permite scurgeri (regurgitare), neputând fi reparată adecvat. Sub anestezie generală și cu pacientul conectat la un aparat cord-plămân, chirurgul deschide inima, îndepărtează valva deteriorată și coase o valvă de înlocuire — fie mecanică, durabilă dar care necesită medicație anticoagulantă pe tot parcursul vieții, fie biologică, din țesut, care evită anticoagularea pe termen lung dar se poate uza mai repede. Alegerea între tipurile de valvă depinde de vârsta, stilul de viață și starea generală de sănătate a pacientului și este discutată în prealabil cu echipa chirurgicală. Procedura poate fi efectuată prin sternotomie tradițională sau, la pacienți selectați, prin incizii minim invazive mai mici. Pacienții petrec de obicei una-două zile în terapie intensivă, urmate de mai multe zile pe secție înainte de externare. Centrele cardiace din India oferă atât valve mecanice, cât și valve din țesut, alături de îngrijire post-operatorie cardiacă experimentată, iar pacienții internaționali planifică în general o ședere spitalicească de aproximativ o săptămână, cu ecocardiografii de control programate înainte de călătoria de întoarcere pentru a confirma funcționarea bună a valvei.',
			},
			{
				name: 'Înlocuirea valvei aortice',
				description:
					'Înlocuirea valvei aortice tratează o valvă aortică afectată — valva care controlează fluxul sanguin din inimă către artera principală a corpului — care a devenit îngustată (stenoză) sau cu scurgeri (regurgitare), cauzând simptome precum dificultăți de respirație, durere toracică sau leșin. În chirurgia cardiacă deschisă convențională, toracele este deschis, inima este oprită temporar și susținută de un aparat cord-plămân, iar chirurgul îndepărtează valva afectată și coase o înlocuire mecanică sau biologică, dimensionată conform anatomiei pacientului. Valvele mecanice durează mai mult, dar necesită medicație anticoagulantă pe viață, în timp ce valvele din țesut evită acest lucru, dar pot necesita înlocuire după zece-douăzeci de ani, iar echipa chirurgicală ajută pacienții să cântărească aceste compromisuri în funcție de vârstă și sănătate. Operația durează în general câteva ore, pacienții petrecând timp în terapie intensivă după aceea, înainte de a trece pe o secție obișnuită. Este una dintre cele mai consacrate intervenții cardiace efectuate în India, centrele oferind o gamă completă de tipuri de valve și monitorizare perioperatorie experimentată. Pacienții internaționali rămân de obicei în India aproximativ două-trei săptămâni în total, pentru a permite intervenția, recuperarea inițială și o evaluare de control înainte de zbor.',
			},
			{
				name: 'Înlocuirea valvei aortice pe cateter (TAVR)',
				description:
					'Înlocuirea valvei aortice pe cateter, sau TAVR, este o alternativă minim invazivă la chirurgia cardiacă deschisă pentru tratarea stenozei aortice severe, în special la pacienții vârstnici sau considerați cu risc chirurgical ridicat. În loc de deschiderea toracelui, un cardiolog intervenționist introduce un cateter care poartă o valvă pliabilă de înlocuire printr-un vas sanguin, cel mai adesea din zona inghinală, până la inimă, unde este expandată și poziționată în interiorul valvei bolnave existente, împingând-o lateral și preluând imediat funcția acesteia. Procedura se efectuează de obicei sub sedare sau anestezie generală ușoară și este ghidată de imagistică în timp real, fără a fi necesară oprirea inimii sau folosirea aparatului cord-plămân. Deoarece evită o incizie toracică mare, recuperarea este în general mai rapidă decât la înlocuirea chirurgicală a valvei, mulți pacienți mobilizându-se în decurs de o zi și părăsind spitalul în câteva zile. TAVR este oferită din ce în ce mai mult în centrele cardiace avansate din India pentru pacienții care îndeplinesc criteriile anatomice adecvate, în urma unei evaluări imagistice atente de confirmare a eligibilității. Pacienții internaționali planifică de obicei una-două săptămâni în India pentru evaluarea pre-procedurală, procedura propriu-zisă și o scurtă perioadă de recuperare înainte de urmărire și călătoria de întoarcere.',
			},
			{
				name: 'Cateterism cardiac',
				description:
					'Cateterismul cardiac este o procedură diagnostică și, uneori, terapeutică, în care un cateter subțire și flexibil este ghidat printr-un vas sanguin, de obicei de la nivelul încheieturii mâinii sau al zonei inghinale, în camerele și arterele inimii, pentru a evalua direct modul în care aceasta funcționează. Folosind ghidaj radiologic și substanță de contrast, cardiologul poate vizualiza arterele coronare pentru blocaje, poate măsura presiunile din camerele inimii, poate evalua funcția valvelor și, în unele cazuri, poate preleva mostre de țesut. Este folosit în mod obișnuit pentru investigarea durerii toracice, a rezultatelor anormale la testul de efort, a insuficienței cardiace de cauză neclară sau a suspiciunii de boală valvulară sau cardiacă congenitală, și servește adesea ca prim pas înainte de a decide dacă este necesară angioplastia, montarea unui stent sau intervenția chirurgicală. Procedura se efectuează sub anestezie locală cu sedare ușoară, durează de obicei între treizeci de minute și o oră, iar majoritatea pacienților pot merge acasă în aceeași zi sau după o noapte de spitalizare. Laboratoarele de cateterism din India sunt dotate cu sisteme imagistice moderne care permit un diagnostic precis și, acolo unde este cazul, un tratament imediat în aceeași ședință. Pacienții internaționali au în general nevoie doar de o vizită scurtă pentru procedura propriu-zisă, rezultatele și pașii următori fiind discutați direct cu echipa de cardiologie.',
			},
			{
				name: 'Valvotomie pulmonară cu balon',
				description:
					'Valvotomia pulmonară cu balon este o procedură bazată pe cateter, folosită pentru tratarea stenozei valvei pulmonare, o afecțiune în care valva ce controlează fluxul sanguin din ventriculul drept al inimii către plămâni este anormal de îngustată, forțând inima să lucreze mai mult și reducând fluxul sanguin către plămâni. Este deseori diagnosticată la sugari, copii sau adulți tineri, uneori ca parte a unei afecțiuni cardiace congenitale prezente de la naștere. În timpul procedurii, cardiologul ghidează un cateter cu un balon dezumflat la capăt printr-o venă, de obicei din zona inghinală, până la valva îngustată, apoi umflă balonul pentru a o dilata și a elibera obstrucția. Procedura se efectuează sub sedare sau anestezie generală într-un laborator de cateterism, ghidată prin imagistică radiologică și ecocardiografică, și durează de obicei una-două ore. Deoarece evită chirurgia cardiacă deschisă, recuperarea este de obicei rapidă, majoritatea pacienților fiind monitorizați peste noapte și externați în una-două zile. Centrele de cardiologie pediatrică și structurală din India efectuează frecvent valvotomie cu balon atât la copii, cât și la adulți, cu imagistică atentă pre-procedurală pentru confirmarea eligibilității. Familiile care călătoresc pentru această procedură planifică de obicei o ședere scurtă de aproximativ o săptămână, incluzând evaluarea pre-procedurală și ecocardiografia de control.',
			},
			{
				name: 'Implantarea stimulatorului cardiac',
				description:
					'Stimulatorul cardiac este un dispozitiv electronic mic, implantat pentru a ajuta la reglarea unui ritm cardiac anormal de lent sau neregulat, folosit de obicei pentru tratarea bradicardiei, blocului cardiac sau anumitor aritmii în care sistemul electric natural al inimii nu funcționează fiabil. Dispozitivul este format dintr-un generator de impulsuri, implantat chiar sub piele, lângă claviculă, conectat la unul sau mai multe fire subțiri ghidate printr-o venă până în camerele inimii, unde detectează ritmul cardiac și livrează impulsuri electrice mici atunci când este necesar pentru menținerea unui ritm regulat. Implantarea se efectuează de obicei sub anestezie locală cu sedare, durează aproximativ una-două ore și se realizează printr-o incizie mică, nu prin chirurgie deschisă. Majoritatea pacienților rămân internați peste noapte pentru monitorizare și au setările dispozitivului verificate înainte de externare. Centrele de electrofiziologie și cardiologie din India oferă o gamă de stimulatoare cardiace cu o singură cameră, cu două camere și mai avansate, potrivite diferitelor tulburări de ritm. Pacienții internaționali planifică de obicei aproximativ o săptămână în India pentru evaluarea pre-procedurală, implantare și o verificare inițială a dispozitivului, cu îndrumări privind monitorizarea la distanță și urmărirea ulterioară împreună cu medicul din țara de origine.',
			},
			{
				name: 'Chirurgie cardiacă pediatrică',
				description:
					'Chirurgia cardiacă pediatrică acoperă o gamă de intervenții efectuate la sugari și copii pentru corectarea defectelor cardiace congenitale — probleme structurale ale inimii prezente de la naștere, precum orificii între camerele inimii, valve malformate sau conexiuni anormale ale vaselor mari de sânge. Procedura specifică depinde de defect: unele afecțiuni pot fi închise cu un petic în timpul chirurgiei cardiace deschise, folosind un aparat cord-plămân dimensionat pentru un pacient mic, în timp ce altele implică reconstrucția sau redirecționarea vaselor sanguine pentru a stabili o circulație normală. Diagnosticul se bazează de obicei pe ecocardiografie și, uneori, pe imagistică CT sau RMN, pentru a cartografia anatomia exactă înainte de planificarea operației. Deoarece inimile și vasele de sânge ale copiilor sunt mici și încă în dezvoltare, aceste proceduri necesită chirurgi cardiaci pediatrici și anesteziști cu experiență în afecțiuni cardiace congenitale, alături de suport dedicat de terapie intensivă pediatrică ulterior. Timpul de recuperare variază considerabil în funcție de complexitatea defectului și vârsta copilului, de la aproximativ o săptămână la mai multe săptămâni de spitalizare. Programele cardiace pediatrice din India tratează un spectru larg de defecte congenitale, adesea pentru copii din alte țări, cu cazare pentru familie și îngrijire pre- și post-operatorie coordonată în jurul nevoilor pacienților tineri și ale părinților lor.',
			},
			{
				name: 'Inimă artificială / implant LVAD',
				description:
					'Dispozitivul de asistare ventriculară stângă, sau LVAD, este o pompă mecanică implantată pentru a ajuta o inimă sever slăbită să pompeze sângele, folosită la pacienți cu insuficiență cardiacă avansată care nu au răspuns adecvat la medicație. Dispozitivul este conectat chirurgical la ventriculul stâng și la aortă, preluând sângele din camera slăbită și pompându-l în artera principală a corpului în locul mușchiului cardiac bolnav; un cablu iese prin piele către un controler extern și un pachet de baterii purtat de pacient. LVAD-urile pot servi ca punte către transplant cardiac, în așteptarea unui organ donator, sau ca terapie pe termen mai lung pentru cei care nu sunt candidați la transplant. Implantarea necesită chirurgie cardiacă deschisă cu circulație extracorporeală, urmată de o spitalizare prelungită care include monitorizare în terapie intensivă și instruirea pacientului și a îngrijitorilor privind utilizarea dispozitivului. Termenul inimă artificială este uneori folosit informal pentru LVAD-uri, deși inimile artificiale totale, care înlocuiesc complet inima, sunt o tehnologie separată, mai rară. Centrele avansate de insuficiență cardiacă din India oferă implantarea LVAD și îngrijirea specializată de urmărire pe care o necesită, iar pacienții ar trebui să se aștepte la o ședere prelungită de câteva săptămâni pentru intervenție, recuperare și instruire privind dispozitivul înainte de călătorie.',
			},
			{
				name: 'Repararea endovasculară a anevrismului de aortă',
				description:
					'Repararea endovasculară a anevrismului de aortă, sau EVAR, este o procedură minim invazivă folosită pentru tratarea anevrismului de aortă — o porțiune dilatată și slăbită a arterei principale a corpului, care prezintă risc de ruptură dacă este lăsată netratată. În loc de deschiderea abdomenului sau toracelui pentru a înlocui direct segmentul afectat, un chirurg vascular accesează arterele femurale din zona inghinală și introduce o grefă-stent metalică acoperită cu material textil prin vasele de sânge până la locul anevrismului, unde este expandată pentru a căptuși artera din interior și a redirecționa fluxul sanguin departe de peretele slăbit. Procedura se efectuează sub anestezie regională sau generală, ghidată prin imagistică radiologică continuă, și durează de obicei una-trei ore, în funcție de localizarea și complexitatea anevrismului. Deoarece evită o incizie chirurgicală mare, recuperarea este în general mai rapidă decât la repararea deschisă, mulți pacienți mobilizându-se în una-două zile și părăsind spitalul în aproximativ o săptămână. O imagistică CT atentă în prealabil confirmă dacă forma și dimensiunea anevrismului sunt potrivite pentru o grefă-stent. Centrele de chirurgie vasculară din India oferă EVAR cu o gamă de dispozitive de tip grefă-stent, iar pacienții internaționali planifică de obicei aproximativ două săptămâni pentru evaluare, procedură și urmărirea imagistică post-procedurală.',
			},
			{
				name: 'Chirurgie cardiacă deschisă',
				description:
					'Chirurgia cardiacă deschisă este un termen general pentru orice intervenție cardiacă în care toracele este deschis chirurgical, de obicei printr-o incizie la nivelul sternului, pentru a oferi echipei chirurgicale acces direct la inimă și vasele sale mari. Multe astfel de operații se efectuează cu inima oprită temporar, un aparat cord-plămân preluând circulația și respirația, permițând chirurgului să lucreze pe o inimă nemișcată și fără sânge înainte ca aceasta să fie repornită. Motivele frecvente pentru chirurgia cardiacă deschisă includ bypass-ul arterelor coronare blocate, repararea sau înlocuirea valvelor cardiace deteriorate, corectarea defectelor congenitale și repararea anevrismelor care implică inima sau vasele mari. Tehnica și durata depind de afecțiunea de bază, dar majoritatea operațiilor durează câteva ore și sunt urmate de timp petrecut în terapie intensivă, în timp ce pacientul este deconectat treptat de la ventilator și monitorizat pentru sângerare, infecție și modificări de ritm. Urmează de obicei o spitalizare mai lungă, de una-două săptămâni, alături de recuperare cardiacă structurată pentru refacerea forței și rezistenței. Centrele de chirurgie cardiacă din India efectuează un volum mare de intervenții cardiace deschise din aceste categorii, susținute de unități dedicate de terapie intensivă cardiacă, iar pacienții internaționali planifică în general mai multe săptămâni în țară pentru intervenție și recuperarea inițială.',
			},
			{
				name: 'Tratamentul bolii cardiace congenitale',
				description:
					'Boala cardiacă congenitală se referă la anomalii structurale ale inimii sau vaselor mari de sânge prezente de la naștere, variind de la orificii mici între camerele inimii care se pot închide de la sine până la malformații complexe care necesită corecție chirurgicală în etape. Tratamentul este foarte individualizat și începe cu imagistică diagnostică detaliată, de obicei ecocardiografie și, uneori, CT sau RMN cardiac, pentru a cartografia exact defectul înainte ca un cardiolog pediatric sau pentru adulți cu boală congenitală și o echipă chirurgicală să decidă asupra celei mai bune abordări. Unele defecte, precum defectele septale atriale sau ventriculare mici, pot fi închise cu dispozitive bazate pe cateter, fără chirurgie deschisă, în timp ce afecțiunile mai complexe necesită chirurgie cardiacă deschisă, uneori efectuată în etape pe parcursul lunilor sau anilor, pe măsură ce pacientul crește. Mulți pacienți sunt diagnosticați și tratați în copilărie, dar un număr tot mai mare de adulți cu boală cardiacă congenitală au nevoie, de asemenea, de îngrijire continuă sau corectivă, pe măsură ce defectele care erau ușoare în copilărie progresează în timp. Programele de boală cardiacă congenitală din India gestionează întregul spectru al acestor afecțiuni, de la închideri simple cu dispozitive până la reconstrucții complexe în etape, cu echipe dedicate atât pentru pacienți pediatrici, cât și pentru adulți. Deoarece planurile de tratament variază foarte mult în funcție de defect, familiile internaționale încep de obicei cu o evaluare detaliată, la distanță sau în persoană, înainte de a se confirma un calendar de tratament și o durată a șederii.',
			},
		],
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
		detailedProcedures: [
			{
				name: 'Protezare totală de genunchi',
				description:
					'Protezarea totală de genunchi, sau artroplastia totală de genunchi, este o procedură chirurgicală care resurfațează o articulație a genunchiului deteriorată de artroză, poliartrită reumatoidă sau uzură post-traumatică, folosind un implant artificial din aliaj metalic și polietilenă de calitate medicală. Chirurgul ortoped îndepărtează cartilajul uzat și un strat subțire de os de la capătul femurului și partea superioară a tibiei, apoi fixează componente metalice conturate pe aceste suprafețe, cu un distanțor din plastic între ele, care recreează mișcarea articulară fluidă; suprafața rotulei poate fi, de asemenea, resurfațată în funcție de starea acesteia. Este recomandată în general odată ce măsurile conservatoare precum fizioterapia, controlul greutății, medicația și injecțiile nu mai controlează durerea sau nu mai restabilesc mobilitatea. Intervenția se efectuează sub rahianestezie sau anestezie generală și durează aproximativ una-două ore, multe centre folosind acum ghidaj computerizat sau robotic pentru a îmbunătăți alinierea implantului. Spitalele din India tratează un volum mare de cazuri de protezare articulară anual și oferă atât tehnici tradiționale, cât și minim invazive. Recuperarea presupune mers supravegheat în prima zi după operație, o spitalizare de câteva zile și un program structurat de fizioterapie în săptămânile următoare pentru recăpătarea forței și a amplitudinii de mișcare.',
			},
			{
				name: 'Protezare totală de șold',
				description:
					'Protezarea totală de șold, sau artroplastia totală de șold, înlocuiește o articulație a șoldului uzată de artroză, necroză avasculară, poliartrită reumatoidă sau fractură cu un implant artificial de tip bilă-soclu. În timpul intervenției, chirurgul ortoped îndepărtează capul femural deteriorat și remodelează soclul șoldului (acetabulul), apoi fixează o tijă metalică sau ceramică în femur, cu o bilă deasupra care se articulează cu un nou soclu fixat în bazin. Abordarea poate fi posterioară, anterioară sau minim invazivă, aleasă în funcție de anatomia pacientului și preferința chirurgului, iar procedura durează de obicei una-două ore sub rahianestezie sau anestezie generală. Este luată în considerare de obicei atunci când durerea de șold, rigiditatea și mobilitatea redusă persistă în ciuda fizioterapiei, a măsurilor de protecție a greutății și a medicației, iar imagistica confirmă o degenerare articulară semnificativă. Multe centre ortopedice din India efectuează volume mari de protezări de șold anual și oferă opțiuni de fixare cimentată, necimentată și hibridă, alături de tehnici robotice sau navigate computerizat pentru poziționarea precisă a implantului. După operație, pacienții sunt de obicei mobilizați cu un cadru de mers în una-două zile, rămân internați câteva zile și urmează un program de recuperare structurat în săptămânile următoare pentru refacerea forței și a modelului de mers.',
			},
			{
				name: 'Artroscopie de genunchi',
				description:
					'Artroscopia de genunchi este o tehnică chirurgicală minim invazivă folosită pentru diagnosticarea și tratarea problemelor din interiorul articulației genunchiului prin incizii mici, nu printr-o tăietură deschisă mare. Chirurgul introduce o cameră subțire cu fibră optică, numită artroscop, împreună cu instrumente chirurgicale subțiri, prin câteva orificii mici în jurul genunchiului, permițând vizualizarea directă a cartilajului, ligamentelor, meniscului și mucoasei articulare pe un monitor. Este folosită frecvent pentru a tunde sau repara țesutul meniscal rupt, a îndepărta fragmente de cartilaj libere, a netezi suprafețe de cartilaj aspre, a spăla țesutul articular inflamat sau a aborda alte cauze structurale ale durerii persistente de genunchi, umflăturilor, blocajelor sau prinderilor care nu au răspuns la repaus, fizioterapie sau medicație. Procedura se efectuează de obicei sub rahianestezie, anestezie regională sau generală și durează între treizeci de minute și puțin peste o oră, în funcție de constatări și tratamentul necesar. Deoarece inciziile sunt mici, pacienții experimentează de obicei mai puțină durere post-operatorie și o revenire mai rapidă la activitățile zilnice decât în cazul chirurgiei deschise de genunchi. Centrele ortopedice din India efectuează frecvent artroscopia de genunchi în regim de spitalizare de zi sau ședere scurtă, majoritatea pacienților mergând cu sprijin chiar în aceeași zi și începând fizioterapia ghidată la scurt timp după aceea, pentru restabilirea funcției complete a genunchiului.',
			},
			{
				name: 'Reconstrucție artroscopică de ligament încrucișat anterior (LIA)',
				description:
					'Reconstrucția artroscopică de ligament încrucișat anterior repară o ruptură a ligamentului încrucișat anterior, unul dintre principalele ligamente stabilizatoare ale genunchiului, frecvent lezat în timpul sporturilor care implică pivotări bruște, sărituri sau schimbări de direcție. Deoarece un LIA rupt nu se vindecă de obicei de la sine, chirurgii îl reconstruiesc folosind o grefă, prelevată de obicei din tendonul semitendinos propriu al pacientului sau din tendonul rotulian, ori ocazional din țesut de donator, care este trecută prin tuneluri forate în femur și tibie și fixată cu șuruburi sau dispozitive de fixare pentru a recrea poziția și funcția originală a ligamentului. Procedura se efectuează artroscopic, prin mici incizii-portal, folosind o cameră și instrumente specializate, evitând necesitatea unei incizii deschise mari, și durează de obicei una-două ore sub anestezie regională sau generală. Este recomandată în general pacienților cu instabilitate de genunchi, episoade de cedare sau incapacitate de a reveni la sport sau muncă fizică solicitantă după o ruptură de LIA. Unitățile de medicină sportivă și ortopedie din India oferă atât tehnici cu grefă din tendonul semitendinos, cât și din tendonul rotulian, alături de plasare ghidată robotic sau prin navigație a tunelurilor. Recuperarea implică un program de reabilitare structurat, pe parcursul mai multor luni, cu încărcare progresivă, întărire și antrenament de echilibru, înainte de revenirea sigură la activitatea sportivă.',
			},
			{
				name: 'Reconstrucție artroscopică de ligament încrucișat posterior (LIP)',
				description:
					'Reconstrucția artroscopică de ligament încrucișat posterior tratează o ruptură a ligamentului încrucișat posterior, un ligament stabilizator mai puternic și mai rar lezat, situat în spatele LIA, care de obicei se rupe în urma unei lovituri directe în partea anterioară a gambei, cum ar fi o leziune de tip „dashboard” în timpul unui accident rutier, sau a unei căderi puternice pe un genunchi îndoit. Multe leziuni parțiale de LIP sunt gestionate non-chirurgical, cu orteze și fizioterapie, dar rupturile complete care cauzează instabilitate persistentă, sau cele combinate cu alte leziuni ligamentare, necesită de obicei reconstrucție chirurgicală. Chirurgul folosește instrumente artroscopice și o cameră introduse prin mici orificii pentru a îndepărta resturile ligamentului deteriorat și a trece o grefă de tendon, adesea prelevată din semitendinos, tendonul rotulian sau o sursă de donator, prin tuneluri osoase în femur și tibie, fixând-o sub tensiune controlată pentru a restabili stabilitatea genunchiului. Operația durează în general două-trei ore sub anestezie regională sau generală și este tehnic mai dificilă decât reconstrucția LIA, din cauza poziției și vascularizației ligamentului. Centrele ortopedice și de traumatologie sportivă din India au chirurgi experimentați în tehnici de reconstrucție LIP cu fascicul unic și dublu. Recuperarea necesită un program de reabilitare mai lung și atent etapizat comparativ cu chirurgia LIA, cu orteze și protocoale de încărcare graduală pentru protejarea grefei în vindecare.',
			},
			{
				name: 'Chirurgia rupturii de menisc',
				description:
					'Chirurgia rupturii de menisc tratează deteriorarea pernelor de cartilaj în formă de „C” din interiorul genunchiului, care absorb șocurile și stabilizează articulația dintre femur și tibie, leziuni ce apar frecvent din mișcări de torsiune în timpul sportului sau din degenerare treptată la adulții în vârstă. În funcție de localizarea, dimensiunea și tiparul rupturii, chirurgul efectuează una dintre cele două proceduri artroscopice: sutura meniscului, în care marginile rupte sunt cusute pentru a păstra cât mai mult cartilaj posibil, în special la pacienții tineri cu rupturi în zona externă bine vascularizată, sau meniscectomia parțială, în care porțiunea deteriorată și instabilă a meniscului este tunsă, păstrând țesutul sănătos. Ambele proceduri se efectuează prin mici incizii-portal, folosind un artroscop și instrumente fine, durând de obicei între treizeci și șaizeci de minute sub rahianestezie sau anestezie generală. Chirurgia este recomandată în general când durerea, umflarea, prinderea sau blocajul persistă în ciuda repausului și fizioterapiei, sau când un RMN confirmă o ruptură reparabilă sau instabilă. Unitățile de artroscopie din India oferă în mod obișnuit atât tehnici de sutură, cât și de meniscectomie, alegând abordarea care păstrează cel mai bine funcția pe termen lung a genunchiului. Recuperarea după meniscectomie este de obicei mai rapidă, în timp ce sutura necesită o perioadă de reabilitare mai protejată, pentru a permite vindecarea țesutului cusut.',
			},
			{
				name: 'Chirurgia cu grefă de schelă de cartilaj',
				description:
					'Chirurgia cu grefă de schelă de cartilaj este o tehnică de conservare a articulației, folosită pentru tratarea zonelor de cartilaj articular deteriorat sau lipsă — țesutul neted care acoperă capetele oaselor dintr-o articulație — cel mai adesea la nivelul genunchiului, în urma unei leziuni, a stresului repetitiv sau a unei degenerări localizate precoce. Deoarece cartilajul are o capacitate limitată de autovindecare, procedura implică implantarea unei schele biocompatibile, însămânțată uneori cu celule de cartilaj proprii sau celule derivate din măduva osoasă a pacientului, în defect, pentru a oferi un cadru structural care încurajează formarea în timp a unui țesut asemănător cartilajului. Se efectuează de obicei artroscopic sau printr-o mică incizie, zona deteriorată fiind mai întâi pregătită și măsurată înainte ca schela să fie conturată, fixată cu adeziv de fibrină sau suturi și lăsată să se integreze cu țesutul din jur. Candidații sunt de obicei pacienți tineri, activi, cu un defect de cartilaj localizat și o aliniere articulară relativ bine păstrată, nu artroza generalizată, întrucât scopul este întârzierea sau evitarea necesității unei protezări articulare. Centrele ortopedice din India care oferă servicii regenerative și de medicină sportivă oferă diverse tehnici de reparare a cartilajului pe bază de schelă și celule, potrivite dimensiunii și profunzimii defectului. Recuperarea implică o perioadă de încărcare protejată și o reabilitare treptată, atent supravegheată, pentru a permite maturarea noului țesut.',
			},
			{
				name: 'Stabilizare artroscopică a umărului',
				description:
					'Stabilizarea artroscopică a umărului este efectuată pentru corectarea unui umăr care se luxează sau subluxează repetat din cauza ligamentelor și țesutului labral întins, rupt sau desprins, care în mod normal mențin bila articulației umărului ferm în interiorul soclului său. Instabilitatea urmează adesea unei luxații traumatice inițiale, frecvent în timpul sportului sau al unei căderi, după care structurile de susținere ale țesutului moale nu se vindecă suficient de strâns pentru a preveni episoade ulterioare. Folosind un artroscop și instrumente fine introduse prin mici incizii-portal în jurul umărului, chirurgul reatașează sau strânge labrumul și capsula ruptă pe marginea soclului folosind ancore de sutură, restabilind tensiunea necesară pentru a menține articulația centrată în timpul mișcării. Procedura durează în general aproximativ o oră și se efectuează sub bloc nervos regional combinat cu sedare ușoară sau anestezie generală. Este recomandată de obicei pacienților cu instabilitate recurentă, semn de apprehensiune pozitiv la examinare și imagistică ce arată leziuni labrale sau capsulare, în special persoanelor tinere sau active fizic, cu risc ridicat de luxații ulterioare. Unitățile de traumatologie a umărului și sportivă din India efectuează frecvent această tehnică artroscopică. Recuperarea implică o perioadă de imobilizare în eșarfă urmată de un program structurat de fizioterapie pentru recăpătarea mișcării și întărirea musculaturii din jurul articulației.',
			},
			{
				name: 'Repararea artroscopică a coifului rotatorilor',
				description:
					'Repararea artroscopică a coifului rotatorilor tratează o ruptură a coifului rotatorilor, grupul de patru mușchi și tendoane care stabilizează umărul și ridică brațul, care se poate rupe brusc în urma unei căderi sau leziuni, sau treptat din cauza uzurii legate de vârstă și a activității repetitive deasupra capului. Pacienții prezintă de obicei durere de umăr care se agravează noaptea, slăbiciune la ridicarea sau rotirea brațului și dificultăți la activitățile deasupra capului, care nu s-au ameliorat cu repaus, fizioterapie sau injecții. În timpul procedurii, chirurgul introduce un artroscop și instrumente mici prin câteva incizii-portal în jurul umărului, tunde orice țesut inflamat sau destrămat și reatașează marginea tendonului rupt la locul său original pe humerus, folosind ancore de sutură, restabilind tracțiunea tendonului asupra osului. Operația se efectuează de obicei sub bloc regional cu sedare sau anestezie generală și durează aproximativ una-două ore, în funcție de mărimea și complexitatea rupturii. Unitățile ortopedice și de specialitate a umărului din India oferă această tehnică atât pentru rupturi parțiale, cât și pentru cele de grosime totală. După operație, brațul este protejat într-o eșarfă timp de câteva săptămâni cât timp tendonul se vindecă, urmat de un program progresiv de fizioterapie, de la mișcare pasivă la exerciții de întărire activă, pe parcursul mai multor luni.',
			},
			{
				name: 'Repararea artroscopică Bankart',
				description:
					'Repararea artroscopică Bankart abordează specific o leziune Bankart, o ruptură a labrumului — inelul de cartilaj care adâncește soclul umărului — de pe marginea antero-inferioară a articulației, o leziune care apare frecvent în timpul unei luxații traumatice a umărului și este o cauză principală a instabilității recurente. Netratată, o leziune Bankart permite umărului să continue să alunece sau să se luxeze complet la solicitări relativ mici, în special la pacienții tineri și sportivi. Prin mici incizii-portal, chirurgul folosește un artroscop pentru a vizualiza labrumul desprins și îl reatașează pe marginea osoasă a soclului folosind ancore de sutură plasate la intervale de-a lungul rupturii, restabilind efectul de „tampon” labral care ajută la menținerea capului humeral centrat. În cazurile cu pierdere osoasă asociată la nivelul soclului, proceduri suplimentare de grefă osoasă pot fi combinate cu repararea. Intervenția durează de obicei aproximativ o oră sub anestezie regională cu sedare sau anestezie generală. Unitățile de artroscopie a umărului din India efectuează repararea Bankart în mod obișnuit pentru pacienții cu leziune labrală confirmată prin RMN sau artro-CT și un istoric de luxații recurente. Îngrijirea post-operatorie implică mai multe săptămâni de imobilizare în eșarfă urmate de un program de fizioterapie etapizat, pentru restabilirea mișcării, stabilității și forței.',
			},
			{
				name: 'Chirurgie artroscopică (pe gaura cheii) a umărului',
				description:
					'Chirurgia artroscopică a umărului este o abordare minim invazivă folosită pentru diagnosticarea și tratarea unei game largi de afecțiuni ale umărului prin câteva incizii mici, nu printr-o singură tăietură deschisă mare. O cameră subțire numită artroscop este introdusă în articulație pentru a oferi chirurgului o vizualizare mărită și detaliată a tendoanelor, ligamentelor, cartilajului și mucoasei articulare pe un monitor, în timp ce instrumente subțiri introduse prin orificii separate sunt folosite pentru a tunde, repara sau reconstrui țesutul deteriorat. Această tehnică se aplică unei game de afecțiuni, de la rupturi de coif al rotatorilor și instabilitate a umărului până la sindromul de conflict subacromial, eliberarea umărului înghețat și îndepărtarea corpilor liberi sau a excrescențelor osoase, pașii specifici depinzând de ceea ce se constată și tratează. Este oferită în general odată ce simptome precum durerea, slăbiciunea, rigiditatea sau mobilitatea restricționată nu se ameliorează cu repaus, fizioterapie și medicație. Efectuată sub bloc nervos regional, sedare sau anestezie generală, inciziile mai mici produc de obicei mai puțină durere post-operatorie, risc mai scăzut de infecție și o recuperare inițială mai rapidă decât chirurgia tradițională deschisă a umărului. Centrele ortopedice din India cu unități dedicate umărului oferă această tehnică pentru majoritatea afecțiunilor comune ale umărului. Recuperarea necesită în continuare un program de fizioterapie structurat, specific afecțiunii, pentru recăpătarea funcției complete a umărului în săptămânile și lunile următoare.',
			},
			{
				name: 'Chirurgia cancerului osos',
				description:
					'Chirurgia cancerului osos se efectuează pentru îndepărtarea tumorilor maligne care apar în țesutul osos, precum osteosarcomul, sarcomul Ewing sau condrosarcomul, sau care s-au răspândit în os de la un cancer din altă parte a corpului. Planificarea tratamentului începe de obicei cu imagistică, inclusiv radiografii, RMN, CT și scintigrafie osoasă, alături de o biopsie pentru confirmarea tipului și gradului tumorii, după care o echipă multidisciplinară decide asupra celei mai potrivite combinații de chirurgie, chimioterapie și radioterapie. Acolo unde este posibil, chirurgii preferă acum chirurgia de conservare a membrului, îndepărtând tumora împreună cu o margine de țesut sănătos și reconstruind osul și articulația afectate folosind o endoproteză metalică, o grefă osoasă sau o combinație a celor două, păstrând membrul în locul recurgerii la amputație, care este rezervată cazurilor în care tumora implică nervi, vase sau țesut moale extins. Intervenția se efectuează de obicei sub anestezie generală și poate dura câteva ore, în funcție de dimensiunea, localizarea tumorii și complexitatea reconstrucției necesare. Centrele de oncologie ortopedică din India oferă tehnici de conservare a membrului alături de protocoale de chimioterapie administrate înainte și după operație. Recuperarea implică o spitalizare de una-două săptămâni, urmată de un program extins de reabilitare pentru recăpătarea funcției, cu supraveghere continuă pentru monitorizarea recidivei.',
			},
			{
				name: 'Chirurgia de alungire a membrelor',
				description:
					'Chirurgia de alungire a membrelor crește treptat lungimea unui os scurtat, cel mai adesea la nivelul piciorului, pentru a corecta discrepanța de lungime a membrelor cauzată de afecțiuni congenitale, leziuni ale cartilajului de creștere din copilărie, infecții, consolidare vicioasă a unei fracturi sau anumite displazii scheletice. Chirurgul efectuează mai întâi o secționare chirurgicală controlată a osului, numită osteotomie, fără a perturba vascularizația din jur, apoi aplică fie un fixator extern purtat în afara membrului, fie un cui de alungire intern, acționat magnetic, plasat în interiorul osului. În săptămânile următoare, dispozitivul este ajustat zilnic în incremente foarte mici, de obicei un milimetru pe zi, permițând formarea treptată a osului nou în spațiul creat, în timp ce țesuturile moi, nervii și vasele de sânge se alungesc odată cu acesta. Perioada totală de tratament, incluzând faza de alungire și consolidarea osoasă ulterioară, se întinde în general pe mai multe luni și necesită monitorizare atentă cu radiografii periodice, pentru urmărirea vindecării osoase și ajustarea planului dacă este necesar. Centrele de reconstrucție a membrelor din India oferă atât tehnici cu fixator extern, cât și cu cui intern, în funcție de cantitatea de alungire necesară și preferința pacientului. Fizioterapia pe tot parcursul procesului ajută la menținerea mișcării articulare și a forței musculare, iar majoritatea pacienților au nevoie de o ședere prelungită în țara de tratament pentru monitorizare sigură în timpul fazei active de alungire.',
			},
			{
				name: 'Chirurgia piciorului strâmb',
				description:
					'Chirurgia piciorului strâmb tratează talipes equinovarus congenital, o afecțiune de la naștere în care unul sau ambele picioare sunt răsucite spre interior și în jos, din cauza tendoanelor scurtate și a alinierii anormale a oaselor piciorului. Majoritatea cazurilor sunt gestionate acum inițial prin metoda Ponseti, o abordare non-chirurgicală care folosește manipulare blândă repetată și aplicarea de aparate gipsate pe parcursul mai multor săptămâni pentru a corecta treptat poziția piciorului, urmată adesea de o intervenție minoră pentru eliberarea unui tendon ahilean strâns. Chirurgia devine necesară atunci când corecția prin ghipsare este incompletă, deformarea este rezistentă sau reapare, sau la copii mai mari la care piciorul strâmb nu a fost tratat precoce, și poate varia de la o eliberare sau transfer tendinos limitat până la proceduri osoase și articulare mai extinse pentru realinierea structurală a piciorului. Operația specifică depinde de vârsta copilului, severitatea deformării și ce țesuturi contribuie la poziția anormală. Intervenția se efectuează sub anestezie generală, iar piciorul este de obicei imobilizat ulterior în ghips pentru a proteja corecția în timpul vindecării. Centrele de ortopedie pediatrică din India gestionează piciorul strâmb atât prin protocoale bazate pe metoda Ponseti, cât și prin corecție chirurgicală pentru cazurile rezistente sau neglijate. Urmărirea pe termen lung cu orteze și monitorizare este de obicei necesară pe măsură ce copilul crește.',
			},
			{
				name: 'Tratamentul displaziei de șold',
				description:
					'Tratamentul displaziei de șold abordează displazia de dezvoltare a șoldului, o afecțiune în care soclul șoldului este prea superficial pentru a acoperi și stabiliza corect capul femural, variind de la o laxitate ușoară până la luxație completă, cel mai adesea identificată în copilăria timpurie prin screening, dar uneori diagnosticată mai târziu, în copilărie sau la vârsta adultă. La sugarii mici, tratamentul începe de obicei cu un ham de poziționare, precum hamul Pavlik, purtat timp de câteva săptămâni pentru a ghida ușor șoldul într-o poziție stabilă și bine așezată, în timp ce soclul se dezvoltă normal. Când displazia este diagnosticată mai târziu, este mai severă sau nu răspunde la hamuri, pot fi necesare opțiuni chirurgicale, de la reducerea închisă sau deschisă a articulației șoldului până la osteotomia periacetabulară sau pelvină, care remodelează și repoziționează soclul pentru a acoperi mai bine capul femural, uneori combinată cu o osteotomie femurală. Intervenția se efectuează sub anestezie generală și este urmată de obicei de o perioadă de imobilizare în ghips sau orteză pentru protejarea corecției. Unitățile pediatrice și de conservare a șoldului pentru adulți din India oferă atât protocoale cu ham pentru sugari, cât și tehnici de osteotomie reconstructivă pentru copii mai mari și adulți tineri. Urmărirea pe termen lung este importantă, întrucât displazia netratată sau corectată inadecvat poate duce la artroză precoce de șold.',
			},
			{
				name: 'Tratamentul afecțiunilor musculo-scheletice',
				description:
					'Tratamentul afecțiunilor musculo-scheletice acoperă diagnosticul și gestionarea unei game largi de afecțiuni care afectează oasele, articulațiile, mușchii, tendoanele, ligamentele și nervii care alcătuiesc sistemul de mișcare al corpului, inclusiv artrita, durerea cronică de spate și gât, leziunile tendinoase și ligamentare, fracturile, deformările și afecțiunile degenerative ale coloanei vertebrale. Gestionarea începe de obicei cu o evaluare clinică și imagistică, precum radiografii, RMN sau CT, pentru identificarea cauzei de bază a durerii, rigidității, slăbiciunii sau mobilității restricționate, după care un specialist ortoped recomandă o cale de tratament care poate include fizioterapie, medicație, injecții țintite, orteze sau chirurgie, în funcție de severitatea și natura afecțiunii. Când este necesară chirurgia, aceasta poate varia de la proceduri artroscopice minim invazive până la protezare articulară, fixare spinală sau chirurgie reconstructivă corectivă, aleasă în funcție de diagnosticul specific și de starea generală de sănătate și obiectivele funcționale ale pacientului. Centrele ortopedice multi-specialitate din India reunesc echipe de protezare articulară, coloană vertebrală, medicină sportivă și fizioterapie pentru a gestiona probleme musculo-scheletice complexe sau de lungă durată într-un plan coordonat. Deoarece prezentările variază foarte mult, o evaluare inițială a imagisticii și rapoartelor clinice anterioare ajută la stabilirea celei mai potrivite abordări de tratament înainte ca pacientul să călătorească. Termenele de recuperare și reabilitare depind în întregime de afecțiunea specifică tratată și de intervenția aleasă.',
			},
		],
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
		detailedProcedures: [
			{
				name: 'Tratamentul cancerului de sân',
				description:
					'Tratamentul cancerului de sân în India este planificat de o comisie oncologică multidisciplinară dedicată, care analizează mamografia, biopsia și rapoartele privind receptorii hormonali (ER/PR/HER2) înainte de a recomanda un parcurs adaptat stadiului și tipului tumorii. În funcție de diagnostic, îngrijirea poate combina chirurgia conservatoare a sânului (tumorectomie) sau mastectomia cu biopsia ganglionului santinelă, urmate de chimioterapie adjuvantă, terapie țintită (precum trastuzumab pentru boala HER2-pozitivă), hormonoterapie și radioterapie pentru reducerea riscului de recidivă. Opțiuni reconstructive, inclusiv reconstrucția mamară imediată sau amânată, sunt disponibile pentru pacientele care aleg mastectomia. Centrele oncologice de top din India folosesc mamografie digitală, biopsie ghidată prin RMN și analiză intraoperatorie prin secțiuni la gheață, pentru a planifica o chirurgie conservatoare, care cruță țesutul, ori de câte ori stadiul tumorii permite. Pacientele au nevoie de obicei de o spitalizare scurtă pentru intervenție, chimioterapia și radioterapia fiind administrate ambulatoriu în săptămânile următoare — multe paciente planifică o ședere mai lungă în India pentru a finaliza un ciclu inițial de tratament adjuvant, înainte de a se întoarce acasă într-un plan de îngrijire partajat cu oncologul local. Rapoartele de biopsie și imagistica sunt analizate gratuit pentru o a doua opinie, înainte de a decide călătoria.',
			},
			{
				name: 'Tratamentul cancerului oral',
				description:
					'Cancerul oral — care apare la nivelul limbii, mucoasei obrazului, gingiilor, planșeului gurii sau buzelor — se numără printre cele mai frecvent tratate tipuri de cancer în India, unde unitățile de oncologie cap și gât cu volum mare văd o proporție semnificativă de cazuri legate de tutun și nucă de betel. Tratamentul începe cu biopsie și imagistică (CT/RMN, uneori PET-CT) pentru stadializarea tumorii, urmată de rezecție chirurgicală cu margini sigure, adesea combinată cu evidare ganglionară cervicală pentru îndepărtarea ganglionilor limfatici cu risc de diseminare. Chirurgia reconstructivă microvasculară — folosind lambouri de țesut din antebraț, coapsă sau peroneu — restabilește forma și funcția atunci când o porțiune semnificativă a mandibulei sau limbii este îndepărtată. În funcție de rezultatul anatomopatologic, chirurgia este urmată de radioterapie sau chimio-radioterapie adjuvantă, pentru reducerea riscului de recidivă. O echipă multidisciplinară formată din chirurgi cap și gât, oncologi, protezisti dentari și terapeuți pentru vorbire și deglutiție gestionează întregul parcurs de îngrijire, inclusiv reabilitarea vorbirii și alimentației după operație. Cancerele în stadiu incipient, depistate înainte de diseminarea ganglionară, au un prognostic considerabil mai bun, astfel încât pacienții sunt încurajați să trimită rapoartele de biopsie și imagistică pentru opinia comisiei oncologice imediat ce se suspectează un diagnostic.',
			},
			{
				name: 'Tratamentul cancerului de prostată',
				description:
					'Tratamentul cancerului de prostată în India variază de la supraveghere activă pentru tumorile cu risc foarte scăzut, cu creștere lentă, până la prostatectomie radicală asistată robotic, radioterapie și hormonoterapie pentru boala mai avansată. După diagnosticarea prin testarea PSA, RMN și biopsie, un oncolog urolog gradează cancerul folosind scorul Gleason pentru a determina abordarea cea mai potrivită. Prostatectomia robotică (da Vinci) este larg disponibilă în centrele urologice de top din India, oferind o chirurgie care cruță nervii și urmărește păstrarea continenței și funcției sexuale, în timp ce îndepărtează glanda prostatică și, dacă este necesar, ganglionii limfatici din jur. Pentru pacienții care nu sunt candidați chirurgicali sau preferă o cale non-chirurgicală, radioterapia externă, brahiterapia sau IMRT/IGRT pot livra radiații foarte precis țintite, limitând în același timp expunerea organelor învecinate. Terapia de deprivare androgenică (hormonoterapia) este folosită alături de chirurgie sau radioterapie în cazurile cu risc intermediar și ridicat, sau singură în boala avansată. Recuperarea după chirurgia robotică este de obicei mai rapidă decât după chirurgia deschisă, majoritatea pacienților fiind externați în câteva zile și revenind la activitatea normală în câteva săptămâni. Cazul este analizat de o comisie oncologică înainte de finalizarea recomandării.',
			},
			{
				name: 'Tratamentul cancerului endometrial',
				description:
					'Cancerul endometrial (al mucoasei uterine) este unul dintre cele mai tratabile cancere ginecologice atunci când este depistat precoce, iar unitățile de oncologie ginecologică din India oferă stadializare și chirurgie completă pentru femeile diagnosticate în orice stadiu. Evaluarea inițială include ecografie transvaginală, biopsie endometrială și imagistică pentru a aprecia cât de mult s-a răspândit boala. Tratamentul standard este histerectomia totală cu îndepărtarea trompelor uterine și ovarelor (salpingo-ooforectomie), efectuată de obicei laparoscopic sau robotic pentru a reduce pierderea de sânge, cicatricile și timpul de recuperare comparativ cu chirurgia deschisă. În cadrul aceleiași operații se efectuează prelevarea ganglionilor limfatici sau biopsia ganglionului santinelă, pentru a ajuta la determinarea necesității unui tratament ulterior. În funcție de gradul și stadiul tumoral constatat la operație, poate fi recomandată radioterapie adjuvantă (externă sau brahiterapie) sau chimioterapie, pentru reducerea riscului de recidivă. Pentru femeile tinere care doresc să își păstreze fertilitatea, în cazul unei boli foarte incipiente și de grad scăzut, tratamentul hormonal non-chirurgical poate fi o opțiune după o evaluare atentă. Majoritatea pacientelor supuse unei histerectomii minim invazive sunt externate în două-trei zile și revin la activitatea normală în câteva săptămâni.',
			},
			{
				name: 'Tratamentul leucemiei',
				description:
					'Leucemia — cancerul celulelor formatoare de sânge din măduva osoasă — este tratată în India de echipe dedicate de hemato-oncologie, cu acces la diagnostic avansat, inclusiv citometrie în flux, citogenetică și testare moleculară, esențiale pentru clasificarea exactă a subtipului (acută sau cronică, limfocitară sau mieloidă) și alegerea protocolului potrivit. Tratamentul începe de obicei cu chimioterapie de inducție, pentru a aduce boala în remisie, urmată de terapie de consolidare pentru eliminarea celulelor leucemice rămase; unele subtipuri, precum leucemia mieloidă cronică, sunt gestionate cu terapii orale țintite (inhibitori de tirozin-kinază) în locul chimioterapiei intensive. Pentru cazurile cu risc crescut sau recidivate, poate fi recomandat un transplant de măduvă osoasă sau de celule stem, folosind fie un donator înrudit compatibil, fie un donator neînrudit, fie celulele proprii ale pacientului. Îngrijirea se desfășoară în unități hematologice specializate, cu camere de izolare inversă, suport de bancă de sânge și protocoale de control al infecțiilor adaptate pacienților imunocompromiși în timpul tratamentului. Deoarece protocoalele pentru leucemie se desfășoară pe parcursul mai multor luni, mulți pacienți coordonează o fază intensivă inițială în India cu chimioterapie de urmărire monitorizată de medicul din țara de origine, rapoartele fiind schimbate regulat între echipe pentru a menține planul de tratament pe traiectorie.',
			},
			{
				name: 'Tratamentul limfomului Hodgkin',
				description:
					'Limfomul Hodgkin, un cancer al sistemului limfatic marcat de prezența celulelor Reed-Sternberg, are una dintre cele mai ridicate rate de vindecare dintre toate cancerele atunci când este tratat cu un regim chimioterapic standard (frecvent ABVD), iar centrele oncologice din India urmează protocoale recunoscute internațional pentru stadializare și tratament. Diagnosticul este confirmat printr-o biopsie ganglionară și stadializat folosind imagistică PET-CT, pentru a cartografia extinderea bolii deasupra și dedesubtul diafragmei. Majoritatea pacienților sunt tratați cu un ciclu de chimioterapie combinată pe parcursul mai multor luni, răspunsul fiind evaluat prin scanări PET-CT intermediare, care ajută oncologii să decidă dacă să continue, să ajusteze sau să adauge radioterapie pentru boala reziduală. Boala localizată, în stadiu incipient, poate fi tratată cu un ciclu mai scurt de chimioterapie urmat de radioterapie pe zona afectată, în timp ce boala în stadiu avansat necesită de obicei doar un ciclu mai lung de chimioterapie. Pentru cazurile recidivate sau rezistente, chimioterapia de salvare urmată de transplant autolog de celule stem este disponibilă în centrele de top. Ciclurile de chimioterapie sunt administrate ambulatoriu ori de câte ori este posibil, iar comisia oncologică va stabili un calendar complet, ciclu cu ciclu, înainte de călătorie.',
			},
			{
				name: 'Chimioterapie',
				description:
					'Chimioterapia folosește medicamente citotoxice sau țintite pentru a distruge celulele canceroase sau a le opri din diviziune, fiind utilizată fie ca tratament principal pentru cancerele de sânge și limfoame, fie ca terapie adjuvantă/neoadjuvantă alături de chirurgie și radioterapie pentru tumorile solide. Unitățile de oncologie de zi din India sunt dotate cu fotolii de chimioterapie dedicate, personal de nursing oncologic instruit și regimuri preparate în farmacie, dozate în funcție de greutate și suprafață corporală, conforme protocoalelor internaționale de tratament. Înainte de începere, oncologul analizează hemograma, funcția organelor și rapoartele anterioare pentru a alege regimul, durata ciclului și numărul de cicluri potrivite tipului și stadiului cancerului. Majoritatea regimurilor sunt administrate ca perfuzie ambulatorie de câteva ore, repetată la fiecare două-trei săptămâni, cu medicație de susținere (antiemetice, factori de creștere) administrată concomitent pentru gestionarea efectelor secundare. Analizele de sânge regulate între cicluri monitorizează complicații precum scăderea hemogramei, dozele fiind ajustate corespunzător. Pentru pacienții care combină o călătorie în India cu o fază inițială de chimioterapie, echipa oncologică oferă un protocol scris și rapoarte, astfel încât un medic local să poată continua sau monitoriza în siguranță ciclurile ulterioare acasă.',
			},
			{
				name: 'Radioterapie cu intensitate modulată (IMRT)',
				description:
					'Radioterapia cu intensitate modulată (IMRT) este o formă avansată de radioterapie externă care modelează și variază intensitatea a sute de fascicule individuale de radiație, pentru a se potrivi îndeaproape formei tridimensionale a unei tumori, livrând o doză mai mare și mai eficientă către cancer, în timp ce protejează țesutul sănătos și organele din jur. Este folosită pe scară largă în India pentru cancerele de cap și gât, de prostată, de sân, cerebrale și ginecologice, unde structuri apropiate precum măduva spinării, glandele salivare sau vezica urinară trebuie protejate de afectarea radică. Planificarea tratamentului începe cu o scanare CT de simulare, pe care un radioterapeut și un fizician medical o folosesc pentru a cartografia tumora și a proiecta un plan de fascicule cu ajutorul unui software specializat, înainte de începerea tratamentului. IMRT este livrată în ședințe ambulatorii scurte, zilnice, de obicei cinci zile pe săptămână, pe parcursul mai multor săptămâni, fiecare ședință durând 15–20 de minute. Deoarece tehnica reduce radiația către țesutul sănătos, pacienții experimentează în general mai puține efecte secundare decât la tehnicile de radioterapie mai vechi, de exemplu mai puțină xerostomie după tratamentul cap și gât sau toleranță mai bună a vezicii și intestinului după radioterapia pelvină. Verificări imagistice regulate asigură menținerea precisă a țintei pe tot parcursul tratamentului.',
			},
			{
				name: 'Radioterapie ghidată imagistic (IGRT)',
				description:
					'Radioterapia ghidată imagistic (IGRT) combină imagistică avansată — precum CT cu fascicul conic sau verificare radiologică — cu fiecare ședință de radioterapie, pentru a confirma poziția exactă a tumorii chiar înainte de tratament, corectând micile variații zilnice cauzate de respirație, umplerea organelor sau poziționarea pacientului. Acest nivel suplimentar de precizie este deosebit de valoros pentru tumorile care se mișcă sau se deplasează, precum cancerele pulmonare, hepatice, de prostată și pancreatice, permițând radioterapeuților să livreze în siguranță doze mai mari, mai eficiente, reducând în continuare expunerea organelor sănătoase din jur. IGRT este de obicei combinată cu IMRT sau alte tehnici de radioterapie conformațională, nefiind folosită ca terapie de sine stătătoare, iar centrele oncologice din India care o oferă sunt dotate cu sisteme imagistice integrate în acceleratorul liniar, astfel încât verificarea are loc în aceeași ședință cu tratamentul, fără vizite suplimentare. O echipă de radioterapie analizează imagistica la fiecare ședință, sau la intervale stabilite, și ajustează poziția pacientului înainte de livrarea fasciculului. Ca și alte forme de radioterapie externă, ședințele sunt scurte, nedureroase și livrate ambulatoriu, pe parcursul unui curs planificat în funcție de tipul și stadiul specific al cancerului.',
			},
			{
				name: 'Tratament CyberKnife',
				description:
					'CyberKnife este un sistem robotic de radiochirurgie care livrează radiații extrem de focalizate, în doză mare, către tumori mici sau greu accesibile, cu o precizie sub-milimetrică, folosind un accelerator liniar montat pe un braț robotic care urmărește poziția tumorii și se ajustează în timp real în timpul tratamentului — inclusiv tumori care se mișcă odată cu respirația — fără a fi nevoie de un cadru cranian invaziv. Este folosit în mod obișnuit în India pentru tumori cerebrale, tumori spinale, cancer pulmonar în stadiu incipient, tumori hepatice și cazuri în care o tumoră se află aproape de structuri critice precum trunchiul cerebral, nervii optici sau măduva spinării, ceea ce face ca chirurgia sau radioterapia convențională să fie mai riscante. Datorită preciziei sale, CyberKnife poate livra o doză de radiație eficientă în doar una-cinci ședințe (radioterapie/radiochirurgie stereotactică corporală), comparativ cu mai multe săptămâni de tratament zilnic cu radioterapie convențională — un avantaj semnificativ pentru pacienții care călătoresc din străinătate. Planificarea tratamentului folosește imagistică RMN și CT de înaltă rezoluție, fuzionate pentru a cartografia tumora cu precizie, iar fiecare ședință este complet non-invazivă și nedureroasă, durând de obicei 30–90 de minute, fără anestezie. Majoritatea pacienților se întorc acasă în aceeași zi a fiecărei ședințe și își reiau imediat activitățile normale.',
			},
			{
				name: 'Chirurgia ganglionilor limfatici',
				description:
					'Chirurgia ganglionilor limfatici acoperă o gamă de proceduri folosite în îngrijirea oncologică pentru îndepărtarea, prelevarea sau evaluarea ganglionilor limfatici, pentru a determina dacă cancerul s-a răspândit dincolo de tumora inițială — un factor cheie pentru stadializarea corectă și planificarea tratamentului. Cea mai comună abordare este biopsia ganglionului santinelă, în care o substanță colorantă trasoare sau un marker radioactiv identifică primul (primii) ganglion(i) către care o tumoră tinde să se răspândească; dacă aceștia sunt negativi, o îndepărtare mai extinsă a ganglionilor poate fi adesea evitată, reducând riscul de complicații precum limfedemul. Când cancerul este confirmat sau suspectat în mai mulți ganglioni, o evidare ganglionară mai completă — precum evidarea axilară pentru cancerul de sân sau evidarea cervicală pentru cancerul cap și gât — îndepărtează un grup mai larg de ganglioni din regiunea afectată. Aceste proceduri se efectuează de obicei concomitent cu chirurgia tumorii primare, sub anestezie generală, adesea folosind tehnici minim invazive sau robotice pentru reducerea cicatricilor și accelerarea recuperării. Rezultatele anatomopatologice ale ganglionilor îndepărtați ghidează deciziile privind necesitatea chimioterapiei sau radioterapiei ulterioare, iar fizioterapia sau îndrumarea de prevenire a limfedemului fac parte din îngrijirea post-operatorie.',
			},
		],
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
		detailedProcedures: [
			{
				name: 'Rinoplastie (chirurgia nasului)',
				description:
					'Rinoplastia este o procedură chirurgicală care remodelează osul și cartilajul nasului pentru a-i schimba dimensiunea, forma sau proporția, ori pentru a corecta probleme de respirație cauzate de un sept deviat sau de căi nazale înguste. Chirurgul poate lucra prin incizii mici, ascunse în interiorul nărilor (tehnica închisă) sau printr-o mică incizie externă la baza nasului (tehnica deschisă), în funcție de amploarea corecției necesare. Cartilajul poate fi tuns, remodelat sau grefat din altă zonă a nasului ori a urechii pentru a construi structura dorită. Procedura se efectuează de obicei sub anestezie generală sau locală cu sedare și durează una-trei ore. Candidații includ persoane deranjate de forma sau dimensiunea nasului, cele cu dificultăți de respirație sau pacienți care au nevoie de o revizie după o intervenție anterioară. Recuperarea implică umflături și vânătăi timp de una-două săptămâni, cu o atelă purtată primele zile, iar rezultatele finale devin vizibile pe parcursul mai multor luni, pe măsură ce umflătura se retrage. Pacienții internaționali care călătoresc în India pentru rinoplastie planifică de obicei o consultație inițială, procedura propriu-zisă și o vizită de control înainte de îndepărtarea atelei, permițând ca cea mai mare parte a vindecării timpurii să fie monitorizată personal.',
			},
			{
				name: 'Lifting facial',
				description:
					'Lifting-ul facial, sau ritidectomia, este o procedură chirurgicală care tratează pielea lăsată, cutele profunde și pierderea definirii de-a lungul feței inferioare, maxilarului și gâtului, care apar odată cu vârsta. Prin incizii plasate de obicei de-a lungul liniei părului și în jurul urechii, chirurgul ridică și repoziționează mușchiul facial subiacent și țesutul conjunctiv (stratul SMAS), îndepărtează excesul de piele și redrapează pielea rămasă peste noul contur. Este adesea combinat cu un lifting de gât sau lipofilling pentru a aborda modificările asociate. Procedura se efectuează sub anestezie generală sau locală cu sedare și durează în general trei-cinci ore. Candidații potriviți sunt de obicei într-o stare de sănătate rezonabil de bună, cu așteptări realiste privind gradul de îmbunătățire pe care îl poate oferi un lifting, întrucât acesta abordează lăsarea țesutului, nu liniile fine sau afectarea solară. Recuperarea include umflături, vânătăi și tensiune timp de una-două săptămâni, suturile fiind îndepărtate în acest interval, iar majoritatea pacienților revenind la activitatea normală în două-trei săptămâni. Deoarece procedura necesită o perioadă de urmărire personală pentru verificarea vindecării și îndepărtarea suturilor, pacienții care călătoresc în India pentru un lifting facial planifică în general o ședere de aproximativ două săptămâni.',
			},
			{
				name: 'Lifting facial non-chirurgical',
				description:
					'Lifting-ul facial non-chirurgical nu este o procedură unică, ci o combinație de tratamente injectabile și bazate pe energie, folosite pentru a ridica și reîmprospăta fața fără incizii sau anestezie generală. În funcție de preocupările pacientului, un plan de tratament poate combina fileri dermici pentru refacerea volumului la nivelul obrajilor și tâmplelor, injecții cu toxină botulinică pentru atenuarea liniilor dinamice și tehnologii de strângere a pielii precum radiofrecvența sau ultrasunetele (de ex. HIFU) pentru stimularea colagenului și fermitatea pielii lăsate. Ședințele se desfășoară de obicei într-un cadru ambulatoriu, cu cremă anestezică topică, și durează între treizeci de minute și o oră. Timpul de recuperare este minim sau inexistent, în afara unei roșeți sau umflături ușoare temporare, astfel încât pacienții își pot relua de obicei activitatea normală în aceeași zi sau a doua zi. Această abordare este potrivită pacienților cu semne incipiente spre moderate de îmbătrânire, care doresc o ameliorare vizibilă fără intervenție chirurgicală, deși rezultatele sunt mai subtile și temporare decât un lifting chirurgical, durând de obicei de la câteva luni până la doi ani, în funcție de tratamentele folosite. Deoarece ședințele sunt rapide și repetabile, unii pacienți combină un lifting non-chirurgical cu alte proceduri în timpul unei singure vizite în India, tratamentele de întreținere fiind planificate pentru o călătorie ulterioară sau printr-un furnizor local.',
			},
			{
				name: 'Lifting facial cu fire',
				description:
					'Lifting-ul facial cu fire este o procedură minim invazivă care folosește fire chirurgicale fine, resorbabile, adesea din polidioxanonă (PDO), pentru a ridica pielea lăsată și a stimula producția de colagen, fără inciziile unui lifting facial tradițional. Firele, unele dintre ele cu conuri sau cârlige minuscule, sunt introduse sub piele cu ajutorul unui ac subțire sau al unei canule și ancorate pentru a repoziționa ușor țesutul la nivelul obrajilor, maxilarului sau sprâncenelor, înainte ca firele să fie tunse. Procedura se efectuează sub anestezie locală, în regim ambulatoriu, și durează de obicei între treizeci și șaizeci de minute. În săptămânile următoare, organismul formează colagen în jurul firelor care se resorb, adăugând treptat fermitate ușoară efectului inițial de lifting. Este potrivită pacienților cu lăsare incipientă, care nu sunt încă pregătiți pentru chirurgie, iar rezultatele sunt vizibil mai modeste și de scurtă durată, de obicei douăsprezece-optsprezece luni, comparativ cu un lifting chirurgical. Timpul de recuperare este minim, cu umflături, vânătăi sau senzație de tragere timp de câteva zile. Deoarece recuperarea este scurtă, un lifting cu fire poate fi adesea programat alături de alte tratamente în timpul unei singure călătorii în India, deși pacienții ar trebui să discute cu chirurgul momentul potrivit dacă îl combină cu proceduri mai invazive.',
			},
			{
				name: 'Blefaroplastie (chirurgia pleoapelor)',
				description:
					'Blefaroplastia este o procedură chirurgicală care îndepărtează sau repoziționează excesul de piele, mușchi și grăsime din jurul pleoapelor superioare sau inferioare, pentru a aborda căderea pleoapei, umflăturile sau pungile sub ochi. În chirurgia pleoapei superioare, chirurgul face o incizie de-a lungul pliului natural pentru a îndepărta țesutul în exces; în chirurgia pleoapei inferioare, incizia poate fi plasată chiar sub linia genelor sau în interiorul pleoapei (abordare transconjunctivală), pentru a evita o cicatrice vizibilă. Procedura se efectuează de obicei sub anestezie locală cu sedare și durează una-două ore, în funcție de faptul că se tratează una sau ambele pleoape. Candidații includ persoane a căror piele a pleoapei superioare le obstrucționează vederea, cele deranjate de un aspect obosit sau umflat al ochilor și pacienți care doresc un aspect mai vioi. Recuperarea implică umflături și vânătăi timp de una-două săptămâni, suturile fiind îndepărtate în aproximativ o săptămână, iar majoritatea pacienților se simt confortabil în public în zece-paisprezece zile, folosind machiaj sau ochelari de soare. Deoarece țesutul pleoapei se vindecă relativ repede, dar necesită totuși o verificare a suturilor și o evaluare a progresului, pacienții care călătoresc în India pentru blefaroplastie planifică de obicei o ședere de zece zile până la două săptămâni, pentru procedură și urmărirea timpurie.',
			},
			{
				name: 'Chirurgie oculoplastică',
				description:
					'Chirurgia oculoplastică este o ramură specializată a chirurgiei oftalmologice și plastice, care tratează probleme structurale și funcționale ale pleoapelor, canalelor lacrimale, orbitei și țesutului din jur. Acoperă o gamă largă de proceduri, inclusiv repararea pleoapelor căzute (ptoză) care interferează cu vederea, corectarea malpoziției pleoapei precum ectropionul sau entropionul, tratamentul canalelor lacrimale blocate, îndepărtarea tumorilor sau chisturilor pleoapei cu reconstrucție, repararea fracturilor orbitare și reconstrucția cavității orbitare în urma unei leziuni oculare sau a îndepărtării ochiului. Chirurgii instruiți atât în oftalmologie, cât și în tehnici de chirurgie plastică efectuează aceste proceduri, care pot fi realizate sub anestezie locală sau generală, în funcție de complexitate și localizare. Candidații sunt pacienți cu o problemă funcțională care afectează vederea, confortul ocular sau închiderea pleoapei, precum și cei care au nevoie de reconstrucție după traumă, îndepărtarea unei tumori sau o intervenție anterioară. Deoarece multe dintre aceste afecțiuni afectează modul în care ochiul este protejat și cât de bine se poate închide, evaluarea include de obicei un examen oftalmologic detaliat alături de evaluarea chirurgicală. Recuperarea variază foarte mult în funcție de procedură, de la câteva zile pentru reparații minore ale pleoapei până la câteva săptămâni pentru reconstrucția orbitară, iar centrele oculoplastice din India gestionează frecvent cazuri complexe care necesită chirurgie în etape și imagistică de urmărire.',
			},
			{
				name: 'Injecții cu Botox',
				description:
					'Botox este cea mai cunoscută marcă de toxină botulinică tip A, o proteină purificată injectată în doze mici și precise în mușchii faciali, pentru a relaxa temporar contracțiile care cauzează ridurile dinamice, precum liniile de încruntare dintre sprâncene, „labele de gâscă” din jurul ochilor și liniile orizontale de pe frunte. Toxina acționează prin blocarea semnalelor nervoase către mușchiul tratat, astfel încât pielea de deasupra se netezește, în timp ce expresivitatea din jur rămâne în mare parte naturală dacă doza este bine calculată. Tratamentul se efectuează într-un cadru de clinică, cu un ac fin și fără anestezie, în afara unei creme anestezice opționale, durând de obicei zece-douăzeci de minute pentru mai multe puncte de injectare. Efectele încep în trei-șapte zile, ating un vârf la aproximativ două săptămâni și durează în general trei-patru luni înainte ca activitatea musculară să revină treptat, moment în care este necesar un tratament repetat pentru menținerea efectului. Botox este folosit și în scop medical pentru afecțiuni precum transpirația excesivă, migrena cronică și anumite tulburări de spasm muscular. Nu există practic niciun timp de recuperare, în afara unei roșeți ușoare sau a unei mici vânătăi la locul injectării, ceea ce îl face o completare frecventă pentru pacienții deja aflați în India pentru alt tratament cosmetic sau medical.',
			},
			{
				name: 'Otoplastie (chirurgia urechii)',
				description:
					'Otoplastia este o procedură chirurgicală care remodelează cartilajul urechii externe, cel mai adesea pentru a apropia urechile proeminente de cap sau pentru a corecta neregularități de formă sau dimensiune prezente de la naștere sau cauzate de o leziune. Chirurgul face de obicei o incizie în spatele urechii, apoi crestează, pliază sau suturează cartilajul într-o poziție mai naturală, înainte de a închide incizia, astfel încât orice cicatrice rezultată să fie ascunsă în pliul natural. Procedura poate fi efectuată sub anestezie locală cu sedare la adulți sau anestezie generală la copii și durează de obicei una-două ore pentru ambele urechi. Este una dintre puținele proceduri cosmetice efectuate în mod obișnuit la copii, de regulă odată ce cartilajul urechii s-a dezvoltat suficient, adesea pentru a aborda jena resimțită înainte de vârsta școlară. Recuperarea implică un pansament capitonat la nivelul capului primele zile, urmat de o bandă mai ușoară purtată noaptea timp de câteva săptămâni, pentru a proteja noua poziție în timpul vindecării. Umflăturile și disconfortul ușor se ameliorează în una-două săptămâni. Familiile care călătoresc în India pentru otoplastia unui copil planifică în general o ședere scurtă, care acoperă intervenția și prima schimbare de pansament.',
			},
			{
				name: 'Transplant de păr',
				description:
					'Transplantul de păr relochează foliculi de păr dintr-o zonă donatoare, de obicei partea posterioară sau laterală a scalpului, unde creșterea părului este în mod natural rezistentă la subțiere, în zonele cu chelie vizibilă. Cele două tehnici principale sunt transplantul de unități foliculare (FUT), în care o fâșie de scalp este îndepărtată și divizată în grefe individuale, și extracția de unități foliculare (FUE), în care foliculii sunt prelevați unul câte unul cu un instrument tip punch mic, lăsând cicatrici minime. Grefele sunt plasate în mici incizii-receptor, urmând unghiul și densitatea naturală a părului din jur, pentru un rezultat cu aspect natural. Procedura se efectuează sub anestezie locală și, în funcție de numărul de grefe necesare, durează aproximativ patru-opt ore, uneori distribuite pe două ședințe. Candidații potriviți sunt bărbați și femei cu alopecie de tip androgenetic și o rezervă donatoare adecvată, evaluată în prealabil pentru cauza de bază a căderii părului. Firele de păr transplantate cad de obicei în câteva săptămâni, înainte de a crește treptat la loc, cu o creștere nouă vizibilă pe parcursul a șase-douăsprezece luni. Deoarece intervenția în sine implică un timp de recuperare modest, pacienții care călătoresc în India planifică adesea o ședere de aproximativ o săptămână, pentru ca scalpul să se stabilizeze înainte de zbor.',
			},
			{
				name: 'Augmentare mamară',
				description:
					'Augmentarea mamară este o procedură chirurgicală care crește dimensiunea sânilor și le modifică forma, folosind implanturi de silicon sau ser fiziologic, sau, în unele cazuri, grăsime proprie transferată din altă zonă a corpului. Chirurgul plasează implantul printr-o incizie, de obicei în jurul areolei, în pliul natural de sub sân sau în axilă, poziționându-l deasupra sau dedesubtul mușchiului pectoral, în funcție de anatomia pacientei și rezultatul dorit. Procedura se efectuează sub anestezie generală și durează de obicei una-două ore. Candidatele includ femei care simt că dimensiunea sânilor este disproporționată față de corp, cele care doresc să recapete volumul pierdut după sarcină sau modificarea greutății, și paciente care urmează o reconstrucție. Recuperarea implică umflături, tensiune și mobilitate limitată a brațului timp de una-două săptămâni, majoritatea pacientelor revenind la activitatea ușoară în acest interval și la exerciții complete după patru-șase săptămâni. Implanturile nu sunt considerate dispozitive pe viață și pot necesita, în cele din urmă, monitorizare sau înlocuire. Pacientele care călătoresc în India pentru augmentare planifică în general o ședere de zece-paisprezece zile, pentru ca chirurgul să verifice inciziile și vindecarea timpurie înainte de călătorie.',
			},
			{
				name: 'Reducție mamară',
				description:
					'Reducția mamară, sau mamoplastia de reducție, îndepărtează excesul de grăsime, țesut glandular și piele de la nivelul sânului, pentru a reduce dimensiunea și greutatea acestuia și pentru a reposiționa mamelonul și areola mai sus, pe un volum mamar mai mic. Procedura se efectuează de obicei printr-un tipar de incizie în formă de ancoră sau verticală, chirurgul remodelând țesutul rămas pentru a crea un contur proporțional, înainte de a închide inciziile. Se efectuează sub anestezie generală și durează de obicei două-patru ore. Candidatele sunt de regulă paciente care resimt simptome fizice din cauza unor sâni prea mari, precum dureri de gât, spate sau umăr, iritații ale pielii sub pliul mamar sau activitate fizică restricționată, precum și cele care caută o proporție mai bună cu corpul lor. Recuperarea implică umflături, vânătăi și sensibilitate timp de una-două săptămâni, majoritatea pacientelor reluându-și activitățile zilnice normale în două săptămâni și exercițiile fizice după patru-șase săptămâni, odată ce chirurgul le confirmă acest lucru. Senzația în zona mamelonului poate fi temporar, sau mai rar permanent, modificată. Deoarece reducția mamară are adesea un beneficiu funcțional documentat alături de cel estetic, pacientele care călătoresc în India pentru această procedură planifică de obicei o ședere de două săptămâni, pentru îndepărtarea suturilor și verificarea plăgii.',
			},
			{
				name: 'Lifting mamar',
				description:
					'Un lifting mamar, sau mastopexie, ridică și remodelează sânii lăsați din cauza vârstei, sarcinii, alăptării sau modificării greutății, prin îndepărtarea excesului de piele și repoziționarea țesutului mamar rămas și a complexului mamelon-areolă mai sus pe torace. În funcție de gradul de lăsare, chirurgul poate folosi o incizie mai scurtă în jurul areolei sau o incizie mai lungă, în formă de ancoră, care coboară de-a lungul pliului mamar. Spre deosebire de augmentare, un lifting nu adaugă volum, astfel încât pacientele care doresc un profil mamar atât mai plin, cât și mai înalt pot combina mastopexia cu implanturi în aceeași operație. Procedura se efectuează sub anestezie generală și durează de obicei două-trei ore. Candidatele potrivite sunt paciente cu țesut mamar lăsat și o elasticitate adecvată a pielii, cu o greutate relativ stabilă, întrucât o sarcină viitoare sau o modificare semnificativă de greutate poate afecta rezultatele. Recuperarea implică umflături și mobilitate limitată a brațului timp de una-două săptămâni, majoritatea pacientelor revenind la activitate ne-solicitantă în acest interval și la exerciții complete după patru-șase săptămâni. Pacientele care călătoresc în India pentru un lifting mamar planifică în general o ședere de aproximativ două săptămâni, pentru intervenție și vizita de control pentru verificarea inciziilor.',
			},
			{
				name: 'Liposucție',
				description:
					'Liposucția este o procedură chirurgicală de conturare corporală, care îndepărtează depozite localizate de grăsime ce nu au răspuns la dietă și exercițiu, din zone precum abdomenul, flancurile, coapsele, brațele sau bărbia. Prin incizii mici, chirurgul introduce o canulă subțire conectată la un dispozitiv de aspirație și o mișcă prin stratul de grăsime pentru a fragmenta și îndepărta celulele adipoase, tehnici precum liposucția tumescentă, asistată cu ultrasunete sau asistată laser fiind folosite pentru a ușura îndepărtarea grăsimii și a susține retracția pielii. Procedura se efectuează sub anestezie generală sau locală cu sedare, în funcție de zonă și amploarea tratamentului, și durează de obicei una-trei ore. Candidații potriviți sunt persoane aproape de greutatea țintă, cu o elasticitate bună a pielii și așteptări realiste, întrucât liposucția este o procedură de conturare, nu un tratament de slăbit. Recuperarea implică umflături, vânătăi și purtarea unei garnituri compresive timp de câteva săptămâni, majoritatea pacienților revenind la activitate ușoară în decurs de o săptămână, iar conturul final devenind vizibil pe parcursul a trei-șase luni, pe măsură ce umflătura se rezolvă. Pacienții care călătoresc în India pentru liposucție planifică de obicei o ședere de aproximativ zece zile, pentru a permite ajustarea garniturii, o verificare timpurie și monitorizarea vindecării inițiale.',
			},
			{
				name: 'Abdominoplastie (lifting abdominal)',
				description:
					'Abdominoplastia, sau chirurgia de lifting abdominal, îndepărtează excesul de piele și grăsime de la nivelul abdomenului și strânge musculatura abdominală subiacentă, care se poate întinde sau separa (diastază de drepți abdominali) după sarcină sau pierdere semnificativă în greutate. Printr-o incizie orizontală joasă pe abdomen, chirurgul repară stratul muscular cu suturi interne, îndepărtează țesutul în exces și repoziționează ombilicul înainte de a închide incizia, uneori combinând procedura cu liposucție pentru un contur suplimentar. Se efectuează sub anestezie generală și durează de obicei două-patru ore. Candidatele sunt în general la o greutate stabilă și sănătoasă, cu piele abdominală lăsată sau separare musculară care nu s-a ameliorat cu exercițiu, și care nu planifică sarcini viitoare, întrucât o sarcină ulterioară poate anula repararea musculară. Recuperarea implică mai multe săptămâni de activitate restricționată, cu o garnitură compresivă purtată pentru susținerea vindecării, drenurile fiind îndepărtate de obicei în prima săptămână, iar majoritatea pacientelor revenind la activitatea normală, ne-solicitantă, în patru-șase săptămâni. Deoarece recuperarea după repararea musculaturii abdominale durează mai mult decât la multe alte proceduri de conturare corporală, pacientele care călătoresc în India pentru abdominoplastie planifică de obicei o ședere de două-trei săptămâni, pentru îndepărtarea drenurilor și monitorizarea vindecării înainte de zbor.',
			},
			{
				name: 'Lifting brazilian de fese (BBL)',
				description:
					'Lifting-ul brazilian de fese (BBL) folosește grăsimea proprie a pacientei, prelevată prin liposucție din zone precum abdomenul, flancurile sau coapsele, pentru a adăuga volum și formă feselor. Grăsimea prelevată este procesată pentru a separa celulele adipoase viabile, înainte de a fi injectată cu atenție, în cantități mici, în diferite straturi ale fesei, pentru a construi un contur mai rotund și mai plin, în timp ce zonele donatoare beneficiază, de asemenea, de conturarea prin liposucție. Procedura se efectuează sub anestezie generală și durează de obicei două-patru ore, în funcție de cantitatea de grăsime prelevată și grefată. Candidatele sunt paciente cu suficientă grăsime donatoare disponibilă și care doresc o formă mai plină a feselor, fără implant. Deoarece grefele de grăsime au nevoie de o vascularizație stabilă pentru a supraviețui, pacientelor li se cere de obicei să evite șederea directă pe fese o perioadă după operație, folosind perne speciale sau stând culcate pe burtă, iar o parte din grăsimea grefată este resorbită natural pe parcursul lunilor următoare. Recuperarea implică purtarea unor garnituri compresive timp de câteva săptămâni și evitarea exercițiului solicitant timp de aproximativ șase săptămâni. Pacientele care călătoresc în India pentru un BBL planifică în general o ședere de aproximativ două săptămâni, pentru vindecarea timpurie și controlul înainte de călătorie.',
			},
			{
				name: 'Augmentare fesieră',
				description:
					'Augmentarea fesieră crește dimensiunea feselor și îmbunătățește conturul, folosind fie implanturi de silicon, fie grefă de grăsime, alese în funcție de grăsimea donatoare disponibilă, anatomia și rezultatul dorit al pacientei. Când se folosesc implanturi, chirurgul le plasează printr-o mică incizie, de obicei în pliul fesier, poziționându-le în sau sub mușchiul fesier, pentru un rezultat stabil și cu senzație naturală. Când se preferă grefa de grăsime, grăsimea este prelevată prin liposucție din altă zonă și injectată în fese, ceea ce are și beneficiul conturării zonei donatoare. Augmentarea cu implant se efectuează sub anestezie generală și durează în general aproximativ două ore, în timp ce procedurile de grefă de grăsime durează mai mult, în funcție de volumul transferat. Candidatele pentru implanturi sunt de obicei paciente cu grăsime donatoare limitată, în timp ce cele cu grăsime adecvată în alte zone pot prefera grefarea, pentru a evita un implant străin. Recuperarea pentru ambele abordări necesită evitarea presiunii directe pe fese timp de câteva săptămâni, cu perne specializate sau poziții de somn modificate recomandate, alături de o garnitură compresivă și o revenire treptată la exercițiu pe parcursul a patru-șase săptămâni. Pacientele care iau în considerare augmentarea fesieră în India discută de obicei ambele opțiuni, implant și grefă de grăsime, cu chirurgul lor în timpul consultației, pentru a determina varianta cea mai potrivită tipului lor de corp.',
			},
			{
				name: 'Lifting de brațe',
				description:
					'Lifting-ul de brațe, sau brahioplastia, îndepărtează excesul de piele și grăsime de la nivelul brațului superior și strânge țesutul subiacent, pentru a crea un contur mai neted și mai tonifiat, abordând pielea lăsată care poate apărea după o pierdere semnificativă în greutate sau odată cu vârsta. Chirurgul face de obicei o incizie pe partea interioară sau posterioară a brațului superior, extinzându-se de la cot spre axilă, în funcție de cât de multă piele trebuie îndepărtată, și poate combina procedura cu liposucție pentru a rafina în continuare conturul. Se efectuează sub anestezie generală și durează de obicei aproximativ două ore. Candidații sunt pacienți cu piele lăsată la brațul superior, care nu s-a ameliorat cu exercițiu, adesea în urma unei pierderi majore în greutate, aflați la o greutate stabilă și într-o stare generală bună de sănătate. Recuperarea implică purtarea unei garnituri compresive timp de câteva săptămâni, cu umflături și mobilitate limitată a brațului primele una-două săptămâni și o revenire treptată la activitatea normală pe parcursul a patru-șase săptămâni. Deoarece cicatricea rezultată se întinde pe lungimea brațului interior, pacienții primesc îndrumări privind îngrijirea cicatricei în timpul recuperării. Pacienții care călătoresc în India pentru un lifting de brațe planifică de obicei o ședere de aproximativ două săptămâni, pentru îndepărtarea suturilor și monitorizarea plăgii.',
			},
			{
				name: 'Lifting de coapse',
				description:
					'Lifting-ul de coapse, sau coapsoplastia, îndepărtează excesul de piele și grăsime de pe partea interioară sau exterioară a coapsei și strânge țesutul subiacent, pentru a crea un contur mai neted, cel mai adesea pentru pacienții rămași cu piele lăsată după o pierdere semnificativă în greutate. În funcție de zonă și de amploarea corecției necesare, chirurgul poate folosi o incizie în pliul inghinal pentru un lifting al coapsei interioare, sau o incizie extinsă pe partea exterioară a coapsei pentru o îndepărtare mai extinsă a pielii, uneori combinată cu liposucție. Procedura se efectuează sub anestezie generală și durează de obicei două-trei ore. Candidații sunt pacienți la o greutate stabilă, cu piele lăsată la coapsă, care nu a răspuns la exercițiu, și care înțeleg că prețul plătit pentru o piele mai strânsă este o cicatrice vizibilă de-a lungul liniei de incizie. Recuperarea implică purtarea unei garnituri compresive, evitarea activității solicitante și limitarea statului în picioare sau mersului prelungit în primele una-două săptămâni, cu o revenire treptată la activitatea normală pe parcursul a patru-șase săptămâni. Deoarece inciziile pentru liftingul de coapse se află în zone de fricțiune și mișcare, îngrijirea atentă a plăgii în perioada timpurie de vindecare este importantă. Pacienții care călătoresc în India pentru un lifting de coapse planifică de obicei o ședere de aproximativ două săptămâni, pentru ca chirurgul să monitorizeze vindecarea.',
			},
			{
				name: 'Labiaplastie',
				description:
					'Labiaplastia este o procedură chirurgicală care reduce sau remodelează labiile mici (pliurile interioare ale vulvei) și, mai rar, labiile mari, pentru a aborda disconfortul sau jena legate de dimensiunea sau asimetria acestora. Folosind fie o tehnică de tundere, care îndepărtează excesul de țesut de-a lungul marginii, fie o tehnică în pană, care îndepărtează o secțiune în formă de V, păstrând marginea naturală, chirurgul remodelează țesutul și închide incizia cu suturi resorbabile. Procedura se efectuează de obicei sub anestezie locală cu sedare sau anestezie generală și durează aproximativ una-două ore. Candidatele includ paciente care resimt disconfort fizic din cauza labiilor mărite sau neregulate, precum iritații sau durere în timpul exercițiului, precum și cele care doresc o schimbare pentru confortul personal. Recuperarea implică umflături și sensibilitate timp de una-două săptămâni, pacientelor fiindu-le recomandat să evite exercițiul solicitant, îmbrăcămintea strâmtă și activitatea sexuală timp de aproximativ patru-șase săptămâni, cât timp țesutul se vindecă complet. Deoarece procedura este sensibilă, iar recuperarea beneficiază de un mediu liniștit și privat, pacientele care călătoresc în India pentru labiaplastie aranjează adesea o ședere discretă de aproximativ zece zile până la două săptămâni, pentru a permite urmărirea înainte de călătorie.',
			},
			{
				name: 'Chirurgia de îndepărtare a cicatricilor',
				description:
					'Chirurgia de îndepărtare a cicatricilor cuprinde mai multe tehnici chirurgicale folosite pentru a îmbunătăți aspectul cicatricilor lăsate de o leziune, arsuri, acnee sau o intervenție chirurgicală anterioară, întrucât nicio metodă nu poate șterge complet o cicatrice, dar multe o pot face mai plată, mai îngustă sau mai puțin vizibilă. În funcție de tipul cicatricei, opțiunile includ revizia cicatricei, în care vechea cicatrice este îndepărtată chirurgical, iar plaga este închisă cu o tehnică mai precisă, pentru a favoriza o vindecare mai fină; grefarea cutanată sau chirurgia cu lambou pentru zone mai mari de cicatrizare; și tehnicile Z-plastie sau W-plastie, care repoziționează o cicatrice de-a lungul liniilor naturale ale pielii, pentru a o face mai puțin vizibilă. Cazurile mai simple pot fi gestionate cu injecții de corticosteroizi, resurfațare laser sau microneedling, mai degrabă decât chirurgie. Anestezia folosită depinde de dimensiunea, profunzimea și localizarea cicatricei, variind de la anestezie locală pentru o revizie minoră până la anestezie generală pentru grefare. Candidații sunt pacienți cu cicatrici care cauzează restricție funcțională, precum tensiune care limitează mișcarea, sau o îngrijorare vizuală semnificativă. Recuperarea variază de la câteva zile pentru revizii minore până la câteva săptămâni pentru grefe, rezultatele finale devenind vizibile pe parcursul lunilor, pe măsură ce noua cicatrice se maturizează. Pacienții care călătoresc în India pentru revizia cicatricelor au de obicei cicatricea evaluată în timpul consultației, pentru a determina tehnica cea mai potrivită înainte de programarea intervenției.',
			},
		],
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
