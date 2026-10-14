import type { HospitalData } from '../data/hospitals';
import { localizeCity, localizeHospitalName } from './hospitalNames';

/**
 * Field-level Portuguese translations for hospital cards (OurPartnerHospitals).
 * Hospital and city names are proper nouns and stay as-is; accreditation,
 * specialties, bed counts, and country are translated via lookup.
 */

const countryMap: Record<string, string> = {
	India: 'Índia',
};

const accreditationMap: Record<string, string> = {
	'Super Specialty Hospital': 'Hospital de superespecialidade',
	'Multi Specialty Hospital': 'Hospital multiespecialidade',
	'JCI Accredited': 'Credenciado pela JCI',
	'Comprehensive & Multi Specialty Dental Clinic': 'Clínica odontológica geral e multiespecialidade',
	'Comprehensive & Super Specialty Eye Hospital': 'Hospital oftalmológico geral e de superespecialidade',
	'Fertility & IVF Center': 'Centro de fertilidade e FIV',
	'Multi Specialty Eye Hospital': 'Hospital oftalmológico multiespecialidade',
	'Super Specialty Eye Hospital': 'Hospital oftalmológico de superespecialidade',
};

const specialtyMap: Record<string, string> = {
	Cardiology: 'Cardiologia',
	Oncology: 'Oncologia',
	Orthopedics: 'Ortopedia',
	Orthopaedics: 'Ortopedia',
	Neurology: 'Neurologia',
	'Cosmetic Surgery': 'Cirurgia estética',
	Fertility: 'Fertilidade',
	'Reproductive Health': 'Saúde reprodutiva',
	Gynecology: 'Ginecologia',
	Gynaecology: 'Ginecologia',
	Obstetrics: 'Obstetrícia',
	'Obstetrics and Gynaecology': 'Obstetrícia e ginecologia',
	Pulmonology: 'Pneumologia',
	Pediatrics: 'Pediatria',
	'General Medicine': 'Clínica geral',
	Gastroenterology: 'Gastroenterologia',
	Urology: 'Urologia',
	Nephrology: 'Nefrologia',
	'General Surgery': 'Cirurgia geral',
	'Organ Transplant': 'Transplante de órgãos',
	'Liver Transplant': 'Transplante de fígado',
	'Kidney Transplant': 'Transplante de rim',
	Hematology: 'Hematologia',
	'Robotic Surgery': 'Cirurgia robótica',
	'Cardiac Surgery': 'Cirurgia cardíaca',
	'Cardiac Sciences': 'Ciências cardíacas',
	Neurosciences: 'Neurociências',
	'Eye Care': 'Oftalmologia',
	"Women's Health": 'Saúde da mulher',
	'Ayurveda & Wellness': 'Ayurveda e bem-estar',
	Cataract: 'Catarata',
	'Comprehensive Ophthalmology': 'Oftalmologia geral',
	Cornea: 'Córnea',
	'Cornea Transplant': 'Transplante de córnea',
	'Cosmetic Dentistry': 'Odontologia estética',
	'Diabetic Retinopathy': 'Retinopatia diabética',
	'Emergency Care': 'Atendimento de urgência',
	'Fertility Treatment': 'Tratamento de fertilidade',
	'General Dentistry': 'Odontologia geral',
	Glaucoma: 'Glaucoma',
	ICL: 'ICL (lente implantável)',
	IVF: 'FIV',
	'Implants Dentistry': 'Implantodontia',
	'Internal Medicine': 'Medicina interna',
	LASIK: 'LASIK',
	'LASIK/Refractive Surgery': 'LASIK / cirurgia refrativa',
	'LASIK/SMILE': 'LASIK / SMILE',
	Orthodontics: 'Ortodontia',
	'Orthopaedics & Joint Replacement': 'Ortopedia e substituição articular',
	'Refractive Surgery': 'Cirurgia refrativa',
	Retina: 'Retina',
	'Super-Speciality & Complex Eye Care': 'Superespecialidade e cuidados oculares complexos',
	Surrogacy: 'Gestação de substituição',
};

const bedsPhrases: Record<string, string> = {
	'Fertility Clinic': 'Clínica de fertilidade',
	'Multiple Locations': 'Várias unidades',
	'Multiple NCR Locations': 'Várias unidades no NCR',
	'Single Center': 'Unidade única',
};

const aboutMap: Record<string, string> = {
	'spruce-dental-chain-of-clinics':
		"A Spruce Dental Chain of Clinics, em Gurugram, é uma clínica de implantologia e ortodontia focada na colocação de implantes minimamente invasiva e na reabilitação completa da boca numa só visita para pacientes internacionais.",
	'spruce-dental':
		"A Spruce Dental, em Jasola Vihar, oferece cuidados dentários completos e tratamento de canal (RCT) a pacientes de todo o oeste de Deli.",
	'moolchand-hospital':
		'O Moolchand Hospital é um dos hospitais de superespecialidade mais antigos do sul de Deli, com um campus de 1.000 leitos em Lajpat Nagar que abrange cardiologia, oncologia e ortopedia, além de urgência e trauma 24 horas.',
	'fortis-c-doc-hospital':
		'O Fortis C-DOC Hospital é um centro especializado em diabetes e nos cuidados cardíacos e neurológicos associados em Deli, dentro da rede Fortis, focado no manejo de longo prazo de doenças metabólicas junto com cardiologia e neurologia.',
	'fortis-escorts-heart-institute':
		'O Fortis Escorts Heart Institute, em Okhla, é um dos centros cardíacos mais reconhecidos da Índia, com um campus de 310 leitos organizado em torno de cirurgia cardíaca avançada, cardiologia intervencionista, oncologia e hematologia.',
	'fortis-flt-lt-rajan-dhall-hospital':
		'O Fortis Flt. Lt. Rajan Dhall Hospital, em Vasant Kunj, é um hospital multiespecialidade da Fortis com 162 leitos, conhecido pelos seus programas de cirurgia estética e cardiologia para pacientes indianos e internacionais.',
	'blk-max-super-speciality-hospital':
		'O BLK-Max Super Speciality Hospital é um hospital terciário de 650 leitos no centro de Deli, especialmente reconhecido em neurologia e ortopedia, com equipamento diagnóstico avançado e uma grande capacidade de cuidados intensivos.',
	'artemis-hospital':
		'O Artemis Hospital, em Gurugram, é um hospital multiespecialidade de 750 leitos especialmente reconhecido pelo tratamento de fertilidade e saúde reprodutiva, além de uma ampla gama de especialidades cirúrgicas e médicas.',
	'max-super-speciality-hospital-saket':
		'O Max Super Speciality Hospital, Saket, é um hospital terciário de 539 leitos reconhecido pelo seu programa de ginecologia e obstetrícia, dentro da rede Max de hospitais de superespecialidade de Deli NCR.',
	'indraprastha-apollo-hospitals':
		'O Indraprastha Apollo Hospitals, em Deli, é uma unidade emblemática do grupo Apollo com um programa dedicado de fertilidade e saúde reprodutiva, apoiado pela infraestrutura multiespecialidade e diagnóstica mais ampla do grupo.',
	'apollo-spectra-hospitals':
		'O Apollo Spectra Hospitals, em Deli, é um hospital cirúrgico de alto rendimento que abrange pneumologia, pediatria, clínica geral e gastroenterologia, concebido para procedimentos rápidos em ambulatório ou de curta internação.',
	'batra-hospital-medical-research-centre':
		'O Batra Hospital & Medical Research Centre, em Tughlakabad, é um hospital universitário de 490 leitos que presta cuidados em pneumologia, pediatria, clínica geral e gastroenterologia, com um programa ativo de investigação de pós-graduação.',
	'aakash-healthcare-super-speciality-hospital':
		'O Aakash Healthcare Super Speciality Hospital, em Dwarka, é um centro de 230 leitos focado em urologia, nefrologia e oncologia, com capacidade cirúrgica robótica e minimamente invasiva dedicada.',
	'manipal-hospital-dwarka':
		'O Manipal Hospital, Dwarka, é uma unidade de superespecialidade de 240 leitos do grupo Manipal que oferece serviços de cardiologia, neurologia e obstetrícia-ginecologia a pacientes do oeste de Deli e Gurugram.',
	'sir-ganga-ram-hospital':
		'O Sir Ganga Ram Hospital é um dos hospitais privados mais antigos e maiores de Deli, uma unidade de 900 leitos em Rajinder Nagar que abrange ortopedia, cirurgia geral, medicina interna e cardiologia.',
	'amrita-hospital':
		'O Amrita Hospital, em Faridabad, é um dos maiores hospitais privados da Índia, um campus de 2.600 leitos que oferece obstetrícia-ginecologia, gastroenterologia e urologia, além de dezenas de outras especialidades.',
	'metro-heart-institute-with-multispeciality':
		'O Metro Heart Institute with Multispeciality, em Faridabad, é um hospital de 200 leitos focado em cardiologia, oferecendo cuidados cardíacos avançados junto com uma gama crescente de serviços multiespecialidade para a região de Faridabad.',

	'the-sight-avenue':
		'O The Sight Avenue está presente em Greater Kailash (Deli) e no Setor 38 de Gurugram, oferecendo cuidados oftalmológicos completos que abrangem retina, córnea, catarata, LASIK/SMILE, ICL e glaucoma sob uma única equipa.',
	'shroff-eye-centre':
		'O Shroff Eye Centre opera três unidades entre Kailash Colony, Connaught Place e Gurugram, com uma sólida reputação em transplante de córnea, retina, catarata, glaucoma e cirurgia LASIK.',
	'eye7-hospitals':
		'O Eye7 Hospitals está presente em Lajpat Nagar e Janakpuri, Deli, oferecendo cuidados de retina, catarata, LASIK, córnea e glaucoma dentro de um hospital oftalmológico multiespecialidade dedicado.',
	'sharp-sight-eye-hospitals':
		'O Sharp Sight Eye Hospitals opera uma rede de clínicas em Preet Vihar e noutras unidades de Deli-NCR, focada em retina, catarata, glaucoma, LASIK e retinopatia diabética.',
	'venu-eye-institute-research-centre':
		'O Venu Eye Institute & Research Centre, em Sheikh Sarai (sul de Deli), é um hospital oftalmológico de superespecialidade reconhecido pelos cuidados oculares complexos, retina, córnea e glaucoma, com um programa de investigação ativo.',
	'guru-nanak-eye-centre':
		'O Guru Nanak Eye Centre, no centro de Deli, é um hospital oftalmológico geral e de superespecialidade que oferece oftalmologia, retina, córnea, glaucoma e cuidados oculares de urgência 24 horas.',
	'shining-smile-dentistry':
		'O Shining Smile Dentistry, em Saket (Nova Deli), é uma clínica odontológica completa que oferece odontologia geral e estética, ortodontia, implantes e cuidados dentários de urgência sob o mesmo teto.',
	'dr-agarwal-s-eye-hospital':
		"O Dr Agarwal's Eye Hospital está presente em várias unidades de Deli-NCR, dentro de uma das maiores cadeias oftalmológicas da Índia, oferecendo catarata, retina, córnea, glaucoma e cirurgia LASIK/refrativa.",
	'asg-eye-hospital':
		'O ASG Eye Hospital opera centros em Noida e noutras unidades do NCR, oferecendo catarata, retina, córnea, glaucoma e cirurgia refrativa dentro de uma rede oftalmológica de âmbito nacional.',
	'eye-q-super-speciality-eye-hospitals':
		'O Eye-Q Super-Speciality Eye Hospitals está presente em Gurugram e em todo o NCR, oferecendo catarata, retina, glaucoma e cirurgia LASIK/refrativa dentro de uma cadeia de centros oftalmológicos dedicados.',

	'medanta-the-medicity':
		'O Medanta – The Medicity, em Gurugram, é uma das maiores instituições multi-superespecialidade da Índia credenciada pela JCI, um campus de 1.250 leitos organizado em torno de cardiologia, oncologia e transplante de órgãos, com uma equipa de especialistas com formação internacional.',
	'fortis-memorial-research-institute-fmri':
		'O Fortis Memorial Research Institute (FMRI), em Gurugram, é um hospital de cuidados quaternários de 1.000 leitos credenciado pela JCI, reconhecido pelos seus avançados programas de oncologia, cardiologia e cirurgia robótica.',
	'sanar-international-hospitals':
		'O Sanar International Hospitals, em Gurugram, é um hospital multiespecialidade de 200 leitos que oferece cuidados em ortopedia, cardiologia e neurologia, concebido para pacientes indianos e internacionais.',
	'jaypee-hospital':
		'O Jaypee Hospital, em Noida, é um hospital de superespecialidade de 1.200 leitos com sólidos programas de cardiologia, oncologia e neurologia ao serviço da região da Grande Noida e do NCR.',
	'marengo-asia-hospitals':
		'O Marengo Asia Hospitals, Faridabad, é um hospital multiespecialidade de 300 leitos que oferece cuidados em cardiologia, ortopedia e gastroenterologia, dentro da rede mais ampla Marengo Asia em toda a Índia.',
	'marengo-asia-hospitals-gurugram':
		'O Marengo Asia Hospitals, Gurugram, é a unidade emblemática de uma rede de oito hospitais que abrange ciências cardíacas, neurociências e ortopedia-substituição articular, com programas de transplante de fígado e oncologia liderados por consultores seniores.',
	'fortis-hospital':
		'O Fortis Hospital, Noida, é um hospital multiespecialidade de 200 leitos da rede Fortis que oferece cuidados em cardiologia, ortopedia e oncologia a pacientes de Noida e do NCR.',
	'fortis-hospital-shalimar-bagh':
		'O Fortis Hospital, Shalimar Bagh, é um hospital multiespecialidade de 262 leitos no norte de Deli que abrange cardiologia, neurologia e ortopedia dentro do grupo Fortis Healthcare.',
	'fortis-hospital-faridabad':
		'O Fortis Hospital, Faridabad, é um hospital multiespecialidade de 200 leitos que oferece serviços de cardiologia, ortopedia e oncologia a pacientes de Faridabad e do sul do NCR.',
	'max-hospital':
		'O Max Hospital, Gurugram, é uma unidade multiespecialidade de 200 leitos do grupo Max Healthcare que oferece cuidados em cardiologia, ortopedia e oncologia no coração de Gurugram.',
	'max-super-speciality-hospital-vaishali':
		'O Max Super Speciality Hospital, Vaishali, é um hospital de 400 leitos em Ghaziabad que abrange cardiologia, neurologia e ortopedia dentro da rede Max Healthcare.',
	'max-super-speciality-hospital-noida':
		'O Max Super Speciality Hospital, Noida, é um hospital terciário de 400 leitos que oferece cuidados em cardiologia, oncologia e ortopedia a pacientes de Noida e do leste do NCR.',
	'max-super-speciality-hospital-dwarka':
		'O Max Super Speciality Hospital, Dwarka, é um hospital de 300 leitos no oeste de Deli que oferece cuidados em cardiologia, neurologia e ortopedia dentro do grupo Max Healthcare.',
	'max-super-speciality-hospital-shalimar-bagh':
		'O Max Super Speciality Hospital, Shalimar Bagh, é uma unidade de 400 leitos no norte de Deli que oferece cardiologia, oncologia e ortopedia dentro da rede Max Healthcare.',
	'max-smart-super-speciality-hospital':
		'O Max Smart Super Speciality Hospital, em Saket, é um hospital terciário de 300 leitos reconhecido pelos seus programas de ciências cardíacas, oncologia e cirurgia robótica no sul de Deli.',
	'psri-hospital':
		'O PSRI Hospital, em Sheikh Sarai, é um hospital de 425 leitos organizado em torno de gastroenterologia, nefrologia e pneumologia, com uma sólida reputação em doenças hepáticas e digestivas.',
	'venkateshwar-hospital':
		'O Venkateshwar Hospital, em Dwarka, é um hospital multiespecialidade de 150 leitos que oferece serviços de cardiologia, ortopedia e oncologia a pacientes do oeste de Deli.',
	'primus-super-speciality-hospital':
		'O Primus Super Speciality Hospital, em Chanakyapuri, é um hospital de 200 leitos no centro de Deli que oferece cuidados em ortopedia, cardiologia e gastroenterologia perto do bairro diplomático.',
	'ck-birla-hospital':
		'O CK Birla Hospital, em Punjabi Bagh, é um hospital multiespecialidade de 162 leitos especialmente reconhecido pela saúde da mulher, além de ortopedia e cardiologia.',
	'narayana-hospital':
		'O Narayana Hospital, Gurugram, é uma unidade multiespecialidade de 190 leitos do grupo Narayana Health que oferece cuidados em cardiologia, oncologia e ortopedia.',
	'asian-institute-of-medical-sciences':
		'O Asian Institute of Medical Sciences, em Faridabad, é um hospital multiespecialidade de 400 leitos que oferece serviços de cardiologia, neurologia e ortopedia à região de Faridabad.',
	'yatharth-super-speciality-hospital':
		'O Yatharth Super Speciality Hospital está presente em Noida e Greater Noida, oferecendo cuidados em cardiologia, ortopedia e neurologia em várias unidades do leste do NCR.',
	'yashoda-super-speciality-hospitals':
		'O Yashoda Super Speciality Hospitals, em Ghaziabad, é um hospital de 250 leitos que oferece cuidados em cardiologia, gastroenterologia e ortopedia a pacientes de Ghaziabad e do NCR.',
	'saroj-super-speciality-hospital':
		'O Saroj Super Speciality Hospital, em Rohini, é um hospital de 250 leitos no noroeste de Deli que oferece serviços de cardiologia, ortopedia e neurologia.',
	'aakash-hospital':
		'O Aakash Hospital, em Malviya Nagar, é um hospital multiespecialidade de 100 leitos que oferece cuidados de clínica geral, ortopedia e ginecologia a pacientes do sul de Deli.',
	'sci-international-hospital':
		'O SCI International Hospital, em Greater Kailash, é um hospital de proximidade de 50 leitos focado em fertilidade, ginecologia e cirurgia geral no sul de Deli.',
	'the-signature-advanced-super-speciality-hospital':
		'O The Signature Advanced Super Speciality Hospital, em Gurugram, é uma unidade de 100 leitos que oferece cuidados em ortopedia, cardiologia e neurologia a pacientes de Gurugram.',

	'sci-ivf-hospital':
		'O SCI IVF Hospital, em Greater Kailash-1, é uma clínica de fertilidade dedicada que oferece FIV e tratamento de fertilidade com uma equipa especializada em medicina reprodutiva.',
	'nova-ivf-fertility':
		'O Nova IVF Fertility está presente em várias unidades do NCR, dentro de uma das maiores cadeias de fertilidade da Índia, oferecendo FIV e tratamento de fertilidade com protocolos padronizados entre unidades.',
	'fortis-ridge-ivf-centre':
		'O Fortis Ridge IVF Centre atende pacientes de Deli NCR com FIV e tratamento de fertilidade, apoiado pelo grupo Fortis Healthcare.',
	'delhi-ivf-fertility-research-centre':
		'O Delhi IVF & Fertility Research Centre, em Mandi House, é uma clínica de fertilidade de longa data que combina o tratamento de FIV com um programa ativo de investigação clínica.',
	'indira-ivf':
		'O Indira IVF está presente em várias unidades de Deli/NCR, dentro de uma das maiores redes de fertilidade da Índia, oferecendo protocolos padronizados de FIV e tratamento de fertilidade.',
	'cloudnine-ivf-centre-kailash-colony':
		'O Cloudnine IVF Centre, Kailash Colony, faz parte do grupo de maternidade e fertilidade Cloudnine, oferecendo FIV e tratamento de fertilidade junto com serviços mais amplos de saúde da mulher.',
	'international-fertility-centre':
		'O International Fertility Centre, em Green Park Extension, é uma clínica dedicada à FIV e ao tratamento de fertilidade, ao serviço de pacientes indianos e internacionais a partir do sul de Deli.',
	'laimaa-fertility-ivf-surrogacy-clinic':
		'O Laimaa Fertility (IVF & Surrogacy Clinic), em Greater Kailash, oferece programas de FIV, tratamento de fertilidade e gestação de substituição para pacientes em processos de reprodução assistida.',
	'gaudium-ivf':
		'O Gaudium IVF, em South Extension-II, é uma clínica de fertilidade dedicada que oferece FIV e tratamento de fertilidade com uma equipa especializada em medicina reprodutiva.',
	'pristyn-care-ferticity-super-speciality-ivf-hospital':
		'O Pristyn Care Ferticity Super Speciality & IVF Hospital, em Malviya Nagar, combina um programa de fertilidade e FIV com a rede cirúrgica mais ampla da Pristyn Care.',
	'nova-ivf-fertility-centre-rajouri-garden':
		'O Nova IVF Fertility Centre, Rajouri Garden, é uma unidade do oeste de Deli da rede Nova IVF, que oferece FIV e tratamento de fertilidade com protocolos padronizados do grupo.',
	'elixir-fertility-centre':
		'O Elixir Fertility Centre, em Gujranwala Town, é uma clínica dedicada à FIV e ao tratamento de fertilidade ao serviço de pacientes do norte de Deli.',
	'femmenest-fertility-ivf-centre':
		'O Femmenest Fertility & IVF Centre, em Anand Vihar, oferece FIV e tratamento de fertilidade a pacientes do leste de Deli.',
	'india-ivf-clinic':
		'O India IVF Clinic, em Vasant Vihar, é uma clínica de fertilidade dedicada que oferece FIV e tratamento de fertilidade no sudoeste de Deli.',
	'she-delhi-ivf-fertility-centre':
		'O She Delhi – IVF & Fertility Centre, em Greater Kailash-II, oferece FIV e tratamento de fertilidade com uma equipa dedicada de medicina reprodutiva no sul de Deli.',
	'zemya-ivf-fertility-clinics':
		'O Zemya IVF & Fertility Clinics, em Green Park Extension, oferece FIV e tratamento de fertilidade a pacientes do sul de Deli.',

	'kokilaben-dhirubhai-ambani-hospital':
		'O Kokilaben Dhirubhai Ambani Hospital é uma unidade emblemática de 750 leitos credenciada pela JCI em Mumbai, reconhecida pelos seus avançados programas de cardiologia, oncologia e neurologia e um sólido departamento de pacientes internacionais.',
	'p-d-hinduja-hospital':
		'O P. D. Hinduja Hospital é uma instituição de 350 leitos credenciada pela JCI em Mumbai, com uma reputação de longa data em cardiologia, gastroenterologia e ortopedia.',
	'fortis-hospital-mulund':
		'O Fortis Hospital, Mulund, é um hospital de 345 leitos em Mumbai reconhecido pelo transplante de órgãos, oncologia e cardiologia, dentro da rede Fortis Healthcare.',
	'jaslok-hospital':
		'O Jaslok Hospital é uma instituição de 400 leitos em Mumbai com sólida experiência em neurologia, ortopedia e cirurgia geral, entre os hospitais privados mais estabelecidos da cidade.',
	'nanavati-max-super-speciality-hospital':
		'O Nanavati Max Super Speciality Hospital é um hospital de 350 leitos em Mumbai que oferece cuidados em cardiologia, oncologia e ortopedia dentro do grupo Max Healthcare.',

	'apollo-hospitals-greams-road':
		'O Apollo Hospitals, Greams Road, é a unidade emblemática credenciada pela JCI do grupo Apollo Hospitals, uma instituição de 550 leitos em Chennai reconhecida pela cardiologia, oncologia e transplante de órgãos.',
	'miot-international':
		'O MIOT International é um hospital de 1.000 leitos credenciado pela JCI em Chennai, especialmente reconhecido em ortopedia, cardiologia e neurologia, com um importante programa de pacientes internacionais.',
	'gleneagles-global-health-city':
		'O Gleneagles Global Health City, em Chennai, é um hospital multiespecialidade de 450 leitos reconhecido pelo transplante de fígado, transplante de rim e oncologia.',
	'fortis-malar-hospital':
		'O Fortis Malar Hospital, em Chennai, é um hospital multiespecialidade de 150 leitos que oferece cuidados em cardiologia, ortopedia e tratamento de fertilidade.',
	'kauvery-hospital':
		'O Kauvery Hospital, em Chennai, é um hospital de superespecialidade de 500 leitos que oferece cuidados em cardiologia, nefrologia e gastroenterologia dentro de uma rede em crescimento no sul da Índia.',

	'manipal-hospital-old-airport-road':
		'O Manipal Hospital, Old Airport Road, é a unidade emblemática de 650 leitos de Bangalore credenciada pela JCI, reconhecida pelos seus cuidados em ortopedia, cardiologia e oncologia.',
	'sakra-world-hospital':
		'O Sakra World Hospital é um hospital de 300 leitos credenciado pela JCI em Bangalore, construído segundo padrões de colaboração japonesa, reconhecido pela ortopedia, neurologia e cirurgia robótica.',
	'narayana-institute-of-cardiac-sciences':
		'O Narayana Institute of Cardiac Sciences, em Bangalore, é um hospital cardíaco dedicado de 500 leitos do grupo Narayana Health, focado na cardiologia e cirurgia cardíaca em grande escala.',
	'fortis-hospital-bannerghatta-road':
		'O Fortis Hospital, Bannerghatta Road, é um hospital de 400 leitos em Bangalore reconhecido pela cirurgia estética, ortopedia e cardiologia, dentro da rede Fortis Healthcare.',
	'aster-cmi-hospital':
		'O Aster CMI Hospital, em Bangalore, é um hospital de superespecialidade de 500 leitos que oferece neurologia, oncologia e transplante de órgãos dentro do grupo Aster DM Healthcare.',

	'apollo-hospitals-jubilee-hills':
		'O Apollo Hospitals, Jubilee Hills, é a unidade emblemática credenciada pela JCI da rede Apollo em Hyderabad, um hospital de 500 leitos reconhecido pelo transplante de órgãos, oncologia e cardiologia.',
	'continental-hospitals':
		'O Continental Hospitals, em Hyderabad, é um hospital de 460 leitos credenciado pela JCI com sólidos programas de neurologia, ortopedia e transplante de órgãos.',
	'yashoda-hospitals-somajiguda':
		'O Yashoda Hospitals, Somajiguda, é um hospital de 700 leitos em Hyderabad que oferece cuidados em cardiologia, nefrologia e gastroenterologia, dentro do grupo Yashoda.',
	'global-hospitals-hyderabad':
		'O Global Hospitals, Hyderabad, é um hospital de 500 leitos reconhecido pelo transplante de fígado e transplante de rim, entre os centros de transplante mais ativos do sul da Índia.',
	'kims-hospitals-secunderabad':
		'O KIMS Hospitals, Secunderabad, é um hospital de 1.000 leitos que oferece cuidados em cardiologia, ortopedia e oncologia, um dos maiores hospitais privados de Hyderabad.',

	'amrita-institute-of-medical-sciences-kochi':
		'O Amrita Institute of Medical Sciences, Kochi, é um hospital universitário de superespecialidade de 1.300 leitos reconhecido pelo transplante de órgãos, oncologia e cardiologia.',
	'aster-medcity':
		'O Aster Medcity, em Kochi, é um hospital de 670 leitos credenciado pela JCI que oferece cardiologia, fertilidade e ortopedia como unidade emblemática de Kerala do grupo Aster DM Healthcare.',
	'lakeshore-hospital':
		'O Lakeshore Hospital, em Kochi, é um hospital multiespecialidade de 400 leitos reconhecido pela gastroenterologia, nefrologia e cardiologia.',
	'kims-health-kochi':
		'O KIMS Health, Kochi, é um hospital de 500 leitos que oferece programas de fertilidade, saúde da mulher e ayurveda e bem-estar, junto com cuidados multiespecialidade mais amplos.',

	'apollo-multispeciality-hospitals-kolkata':
		'O Apollo Multispeciality Hospitals, Kolkata, é um hospital de 570 leitos credenciado pela JCI reconhecido pela oncologia, cardiologia e oftalmologia, dentro do grupo Apollo Hospitals.',
	'amri-hospitals-dhakuria':
		'O AMRI Hospitals, Dhakuria, é um hospital de 200 leitos em Kolkata que oferece cuidados em cardiologia, ortopedia e neurologia dentro da rede AMRI.',
	'fortis-hospital-anandapur':
		'O Fortis Hospital, Anandapur, em Kolkata, é um hospital multiespecialidade de 300 leitos que oferece cuidados em oncologia, cardiologia e ortopedia dentro do grupo Fortis Healthcare.',
	'medica-superspecialty-hospital':
		'O Medica Superspecialty Hospital, em Kolkata, é um hospital de 400 leitos reconhecido pela oftalmologia, oncologia e nefrologia.',

	'zydus-hospitals':
		'O Zydus Hospitals, em Ahmedabad, é um hospital de superespecialidade de 450 leitos reconhecido pelo transplante de fígado, transplante de rim e cardiologia.',
	'cims-hospital':
		'O CIMS Hospital, em Ahmedabad, é um hospital de 250 leitos credenciado pela JCI especializado em cardiologia, cirurgia cardíaca e neurologia.',
	'sterling-hospital':
		'O Sterling Hospital, em Ahmedabad, é um hospital multiespecialidade de 200 leitos que oferece transplante de rim, ortopedia e oncologia.',
	'shalby-hospitals':
		'O Shalby Hospitals, em Ahmedabad, é um hospital de superespecialidade de 300 leitos reconhecido pela ortopedia, cardiologia e oncologia, dentro do grupo Shalby, reconhecido a nível nacional pela cirurgia de substituição articular.',
};

function translateBeds(beds: string): string {
	if (bedsPhrases[beds]) return bedsPhrases[beds];
	return beds.replace(/\bBeds\b/, 'leitos').replace(/\bBed\b/, 'leito').replace(/\bLocations\b/, 'unidades').replace(/\bLocation\b/, 'unidade');
}

export const translateHospital = (hospital: HospitalData): HospitalData => {
	const name = localizeHospitalName(hospital, 'pt');
	const about = (aboutMap[hospital.slug] ?? hospital.about).split(hospital.name).join(name);
	return {
		...hospital,
		name,
		city: localizeCity(hospital.city, 'pt'),
		about,
		country: countryMap[hospital.country] ?? hospital.country,
		accreditation: accreditationMap[hospital.accreditation] ?? hospital.accreditation,
		specialties: hospital.specialties.map((specialty) => specialtyMap[specialty] ?? specialty),
		beds: translateBeds(hospital.beds),
	};
};

export const translateHospitals = (list: HospitalData[]): HospitalData[] => list.map(translateHospital);
