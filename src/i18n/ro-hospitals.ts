import type { HospitalData } from '../data/hospitals';
import { localizeCity, localizeHospitalName } from './hospitalNames';

/**
 * Field-level Romanian translations for hospital cards (OurPartnerHospitals).
 * Hospital and city names are proper nouns and stay as-is; accreditation,
 * specialties, bed counts, and country are translated via lookup.
 */

const countryMap: Record<string, string> = {
	India: 'India',
};

const accreditationMap: Record<string, string> = {
	'Super Specialty Hospital': 'Spital de super-specialitate',
	'Multi Specialty Hospital': 'Spital multi-specialitate',
	'JCI Accredited': 'Acreditat JCI',
	'Comprehensive & Multi Specialty Dental Clinic': 'Clinică stomatologică generală și multi-specialitate',
	'Comprehensive & Super Specialty Eye Hospital': 'Spital oftalmologic general și de super-specialitate',
	'Fertility & IVF Center': 'Centru de fertilitate și FIV',
	'Multi Specialty Eye Hospital': 'Spital oftalmologic multi-specialitate',
	'Super Specialty Eye Hospital': 'Spital oftalmologic de super-specialitate',
};

const specialtyMap: Record<string, string> = {
	Cardiology: 'Cardiologie',
	Oncology: 'Oncologie',
	Orthopedics: 'Ortopedie',
	Orthopaedics: 'Ortopedie',
	Neurology: 'Neurologie',
	'Cosmetic Surgery': 'Chirurgie estetică',
	Fertility: 'Fertilitate',
	'Reproductive Health': 'Sănătate reproductivă',
	Gynecology: 'Ginecologie',
	Gynaecology: 'Ginecologie',
	Obstetrics: 'Obstetrică',
	'Obstetrics and Gynaecology': 'Obstetrică și ginecologie',
	Pulmonology: 'Pneumologie',
	Pediatrics: 'Pediatrie',
	'General Medicine': 'Medicină generală',
	Gastroenterology: 'Gastroenterologie',
	Urology: 'Urologie',
	Nephrology: 'Nefrologie',
	'General Surgery': 'Chirurgie generală',
	'Organ Transplant': 'Transplant de organe',
	'Liver Transplant': 'Transplant de ficat',
	'Kidney Transplant': 'Transplant de rinichi',
	Hematology: 'Hematologie',
	'Robotic Surgery': 'Chirurgie robotizată',
	'Cardiac Surgery': 'Chirurgie cardiacă',
	'Cardiac Sciences': 'Științe cardiace',
	Neurosciences: 'Neuroștiințe',
	'Eye Care': 'Îngrijire oftalmologică',
	"Women's Health": 'Sănătatea femeii',
	'Ayurveda & Wellness': 'Ayurveda și wellness',
	Cataract: 'Cataractă',
	'Comprehensive Ophthalmology': 'Oftalmologie generală',
	Cornea: 'Cornee',
	'Cornea Transplant': 'Transplant de cornee',
	'Cosmetic Dentistry': 'Stomatologie estetică',
	'Diabetic Retinopathy': 'Retinopatie diabetică',
	'Emergency Care': 'Îngrijire de urgență',
	'Fertility Treatment': 'Tratament de fertilitate',
	'General Dentistry': 'Stomatologie generală',
	Glaucoma: 'Glaucom',
	ICL: 'ICL (lentilă implantabilă)',
	IVF: 'FIV',
	'Implants Dentistry': 'Implantologie dentară',
	'Internal Medicine': 'Medicină internă',
	LASIK: 'LASIK',
	'LASIK/Refractive Surgery': 'LASIK / chirurgie refractivă',
	'LASIK/SMILE': 'LASIK / SMILE',
	Orthodontics: 'Ortodonție',
	'Orthopaedics & Joint Replacement': 'Ortopedie și protezare articulară',
	'Refractive Surgery': 'Chirurgie refractivă',
	Retina: 'Retină',
	'Super-Speciality & Complex Eye Care': 'Super-specialitate și îngrijire oftalmologică complexă',
	Surrogacy: 'Maternitate surogat',
};

const bedsPhrases: Record<string, string> = {
	'Fertility Clinic': 'Clinică de fertilitate',
	'Multiple Locations': 'Mai multe locații',
	'Multiple NCR Locations': 'Mai multe locații în NCR',
	'Single Center': 'Locație unică',
};

const aboutMap: Record<string, string> = {
	'spruce-dental-chain-of-clinics':
		"Spruce Dental Chain of Clinics din Gurugram este un cabinet de implantologie și ortodonție axat pe plasarea minim invazivă a implanturilor și pe reabilitarea completă a dentiției într-o singură vizită pentru pacienții internaționali.",
	'spruce-dental':
		"Spruce Dental din Jasola Vihar oferă îngrijire dentară completă și tratamente de canal (RCT) pacienților din vestul orașului Delhi.",
	'moolchand-hospital':
		'Moolchand Hospital este unul dintre cele mai vechi spitale de super-specialitate din sudul orașului Delhi, cu un campus de 1.000 de paturi în Lajpat Nagar care acoperă cardiologie, oncologie și ortopedie, alături de urgențe și traumatologie non-stop.',
	'fortis-c-doc-hospital':
		'Fortis C-DOC Hospital este un centru specializat în diabet și în îngrijirea cardiacă și neurologică asociată în Delhi, parte a rețelei Fortis, axat pe gestionarea pe termen lung a bolilor metabolice, alături de cardiologie și neurologie.',
	'fortis-escorts-heart-institute':
		'Fortis Escorts Heart Institute, din Okhla, este unul dintre cele mai recunoscute centre cardiace din India, cu un campus de 310 paturi organizat în jurul chirurgiei cardiace avansate, cardiologiei intervenționale, oncologiei și hematologiei.',
	'fortis-flt-lt-rajan-dhall-hospital':
		'Fortis Flt. Lt. Rajan Dhall Hospital, din Vasant Kunj, este un spital multi-specialitate Fortis cu 162 de paturi, cunoscut pentru programele sale de chirurgie estetică și cardiologie destinate pacienților indieni și internaționali.',
	'blk-max-super-speciality-hospital':
		'BLK-Max Super Speciality Hospital este un spital terțiar cu 650 de paturi în centrul orașului Delhi, recunoscut în special în neurologie și ortopedie, cu echipamente de diagnostic avansate și o capacitate mare de terapie intensivă.',
	'artemis-hospital':
		'Artemis Hospital, din Gurugram, este un spital multi-specialitate cu 750 de paturi, recunoscut în special pentru tratamentul de fertilitate și sănătatea reproductivă, alături de o gamă largă de specialități chirurgicale și medicale.',
	'max-super-speciality-hospital-saket':
		'Max Super Speciality Hospital, Saket, este un spital terțiar cu 539 de paturi, recunoscut pentru programul său de ginecologie și obstetrică, parte a rețelei Max de spitale de super-specialitate din Delhi NCR.',
	'indraprastha-apollo-hospitals':
		'Indraprastha Apollo Hospitals, din Delhi, este o unitate emblematică a grupului Apollo, cu un program dedicat de fertilitate și sănătate reproductivă, susținut de infrastructura mai amplă multi-specialitate și de diagnostic a grupului.',
	'apollo-spectra-hospitals':
		'Apollo Spectra Hospitals, din Delhi, este un spital chirurgical de mare capacitate care acoperă pneumologie, pediatrie, medicină generală și gastroenterologie, conceput pentru proceduri rapide, ambulatorii sau cu spitalizare scurtă.',
	'batra-hospital-medical-research-centre':
		'Batra Hospital & Medical Research Centre, din Tughlakabad, este un spital universitar cu 490 de paturi care oferă îngrijiri în pneumologie, pediatrie, medicină generală și gastroenterologie, cu un program activ de cercetare postuniversitară.',
	'aakash-healthcare-super-speciality-hospital':
		'Aakash Healthcare Super Speciality Hospital, din Dwarka, este un centru cu 230 de paturi axat pe urologie, nefrologie și oncologie, cu capacitate chirurgicală robotizată și minim invazivă dedicată.',
	'manipal-hospital-dwarka':
		'Manipal Hospital, Dwarka, este o unitate de super-specialitate cu 240 de paturi a grupului Manipal, oferind servicii de cardiologie, neurologie și obstetrică-ginecologie pacienților din vestul orașului Delhi și din Gurugram.',
	'sir-ganga-ram-hospital':
		'Sir Ganga Ram Hospital este unul dintre cele mai vechi și mai mari spitale private din Delhi, o unitate cu 900 de paturi în Rajinder Nagar care acoperă ortopedie, chirurgie generală, medicină internă și cardiologie.',
	'amrita-hospital':
		'Amrita Hospital, din Faridabad, este unul dintre cele mai mari spitale private din India, un campus cu 2.600 de paturi care oferă obstetrică-ginecologie, gastroenterologie și urologie, alături de zeci de alte specialități.',
	'metro-heart-institute-with-multispeciality':
		'Metro Heart Institute with Multispeciality, din Faridabad, este un spital cu 200 de paturi axat pe cardiologie, oferind îngrijire cardiacă avansată alături de o gamă tot mai largă de servicii multi-specialitate pentru regiunea Faridabad.',

	'the-sight-avenue':
		'The Sight Avenue are prezență în Greater Kailash (Delhi) și în Sectorul 38 din Gurugram, oferind îngrijire oftalmologică completă care acoperă retină, cornee, cataractă, LASIK/SMILE, ICL și glaucom sub o singură echipă.',
	'shroff-eye-centre':
		'Shroff Eye Centre operează trei locații între Kailash Colony, Connaught Place și Gurugram, cu o reputație solidă în transplant de cornee, retină, cataractă, glaucom și chirurgie LASIK.',
	'eye7-hospitals':
		'Eye7 Hospitals are prezență în Lajpat Nagar și Janakpuri, Delhi, oferind îngrijire pentru retină, cataractă, LASIK, cornee și glaucom într-un spital oftalmologic multi-specialitate dedicat.',
	'sharp-sight-eye-hospitals':
		'Sharp Sight Eye Hospitals operează o rețea de clinici în Preet Vihar și în alte locații din Delhi-NCR, axată pe retină, cataractă, glaucom, LASIK și retinopatie diabetică.',
	'venu-eye-institute-research-centre':
		'Venu Eye Institute & Research Centre, din Sheikh Sarai (sudul orașului Delhi), este un spital oftalmologic de super-specialitate recunoscut pentru îngrijirea oftalmologică complexă, retină, cornee și glaucom, cu un program de cercetare activ.',
	'guru-nanak-eye-centre':
		'Guru Nanak Eye Centre, din centrul orașului Delhi, este un spital oftalmologic general și de super-specialitate care oferă oftalmologie, retină, cornee, glaucom și îngrijire oftalmologică de urgență non-stop.',
	'shining-smile-dentistry':
		'Shining Smile Dentistry, din Saket (New Delhi), este o clinică stomatologică completă care oferă stomatologie generală și estetică, ortodonție, implanturi și îngrijire stomatologică de urgență sub același acoperiș.',
	'dr-agarwal-s-eye-hospital':
		"Dr Agarwal's Eye Hospital are prezență în mai multe locații din Delhi-NCR, parte a uneia dintre cele mai mari rețele oftalmologice din India, oferind cataractă, retină, cornee, glaucom și chirurgie LASIK/refractivă.",
	'asg-eye-hospital':
		'ASG Eye Hospital operează centre în Noida și în alte locații din NCR, oferind cataractă, retină, cornee, glaucom și chirurgie refractivă în cadrul unei rețele oftalmologice la nivel național.',
	'eye-q-super-speciality-eye-hospitals':
		'Eye-Q Super-Speciality Eye Hospitals are prezență în Gurugram și în întregul NCR, oferind cataractă, retină, glaucom și chirurgie LASIK/refractivă în cadrul unui lanț de centre oftalmologice dedicate.',

	'medanta-the-medicity':
		'Medanta – The Medicity, din Gurugram, este una dintre cele mai mari instituții multi-super-specialitate din India, acreditată JCI, un campus cu 1.250 de paturi organizat în jurul cardiologiei, oncologiei și transplantului de organe, cu o echipă de specialiști cu pregătire internațională.',
	'fortis-memorial-research-institute-fmri':
		'Fortis Memorial Research Institute (FMRI), din Gurugram, este un spital de îngrijire cuaternară cu 1.000 de paturi, acreditat JCI, recunoscut pentru programele sale avansate de oncologie, cardiologie și chirurgie robotizată.',
	'sanar-international-hospitals':
		'Sanar International Hospitals, din Gurugram, este un spital multi-specialitate cu 200 de paturi care oferă îngrijire în ortopedie, cardiologie și neurologie, conceput pentru pacienți indieni și internaționali.',
	'jaypee-hospital':
		'Jaypee Hospital, din Noida, este un spital de super-specialitate cu 1.200 de paturi, cu programe solide de cardiologie, oncologie și neurologie, deservind regiunea Greater Noida și NCR.',
	'marengo-asia-hospitals':
		'Marengo Asia Hospitals, Faridabad, este un spital multi-specialitate cu 300 de paturi care oferă îngrijire în cardiologie, ortopedie și gastroenterologie, parte a rețelei mai ample Marengo Asia din întreaga Indie.',
	'marengo-asia-hospitals-gurugram':
		'Marengo Asia Hospitals, Gurugram, este unitatea emblematică a unei rețele de opt spitale care acoperă științe cardiace, neuroștiințe și ortopedie-protezare articulară, cu programe de transplant hepatic și oncologie conduse de consultanți seniori.',
	'fortis-hospital':
		'Fortis Hospital, Noida, este un spital multi-specialitate cu 200 de paturi din rețeaua Fortis, care oferă îngrijire în cardiologie, ortopedie și oncologie pacienților din Noida și NCR.',
	'fortis-hospital-shalimar-bagh':
		'Fortis Hospital, Shalimar Bagh, este un spital multi-specialitate cu 262 de paturi în nordul orașului Delhi, care acoperă cardiologie, neurologie și ortopedie în cadrul grupului Fortis Healthcare.',
	'fortis-hospital-faridabad':
		'Fortis Hospital, Faridabad, este un spital multi-specialitate cu 200 de paturi care oferă servicii de cardiologie, ortopedie și oncologie pacienților din Faridabad și sudul NCR.',
	'max-hospital':
		'Max Hospital, Gurugram, este o unitate multi-specialitate cu 200 de paturi a grupului Max Healthcare, care oferă îngrijire în cardiologie, ortopedie și oncologie în inima orașului Gurugram.',
	'max-super-speciality-hospital-vaishali':
		'Max Super Speciality Hospital, Vaishali, este un spital cu 400 de paturi în Ghaziabad, care acoperă cardiologie, neurologie și ortopedie în cadrul rețelei Max Healthcare.',
	'max-super-speciality-hospital-noida':
		'Max Super Speciality Hospital, Noida, este un spital terțiar cu 400 de paturi care oferă îngrijire în cardiologie, oncologie și ortopedie pacienților din Noida și estul NCR.',
	'max-super-speciality-hospital-dwarka':
		'Max Super Speciality Hospital, Dwarka, este un spital cu 300 de paturi în vestul orașului Delhi, care oferă îngrijire în cardiologie, neurologie și ortopedie în cadrul grupului Max Healthcare.',
	'max-super-speciality-hospital-shalimar-bagh':
		'Max Super Speciality Hospital, Shalimar Bagh, este o unitate cu 400 de paturi în nordul orașului Delhi, care oferă cardiologie, oncologie și ortopedie în cadrul rețelei Max Healthcare.',
	'max-smart-super-speciality-hospital':
		'Max Smart Super Speciality Hospital, din Saket, este un spital terțiar cu 300 de paturi, recunoscut pentru programele sale de științe cardiace, oncologie și chirurgie robotizată în sudul orașului Delhi.',
	'psri-hospital':
		'PSRI Hospital, din Sheikh Sarai, este un spital cu 425 de paturi organizat în jurul gastroenterologiei, nefrologiei și pneumologiei, cu o reputație solidă în afecțiuni hepatice și digestive.',
	'venkateshwar-hospital':
		'Venkateshwar Hospital, din Dwarka, este un spital multi-specialitate cu 150 de paturi care oferă servicii de cardiologie, ortopedie și oncologie pacienților din vestul orașului Delhi.',
	'primus-super-speciality-hospital':
		'Primus Super Speciality Hospital, din Chanakyapuri, este un spital cu 200 de paturi în centrul orașului Delhi, care oferă îngrijire în ortopedie, cardiologie și gastroenterologie, aproape de cartierul diplomatic.',
	'ck-birla-hospital':
		'CK Birla Hospital, din Punjabi Bagh, este un spital multi-specialitate cu 162 de paturi, recunoscut în special pentru sănătatea femeii, alături de ortopedie și cardiologie.',
	'narayana-hospital':
		'Narayana Hospital, Gurugram, este o unitate multi-specialitate cu 190 de paturi a grupului Narayana Health, care oferă îngrijire în cardiologie, oncologie și ortopedie.',
	'asian-institute-of-medical-sciences':
		'Asian Institute of Medical Sciences, din Faridabad, este un spital multi-specialitate cu 400 de paturi care oferă servicii de cardiologie, neurologie și ortopedie regiunii Faridabad.',
	'yatharth-super-speciality-hospital':
		'Yatharth Super Speciality Hospital are prezență în Noida și Greater Noida, oferind îngrijire în cardiologie, ortopedie și neurologie în mai multe locații din estul NCR.',
	'yashoda-super-speciality-hospitals':
		'Yashoda Super Speciality Hospitals, din Ghaziabad, este un spital cu 250 de paturi care oferă îngrijire în cardiologie, gastroenterologie și ortopedie pacienților din Ghaziabad și NCR.',
	'saroj-super-speciality-hospital':
		'Saroj Super Speciality Hospital, din Rohini, este un spital cu 250 de paturi în nord-vestul orașului Delhi, care oferă servicii de cardiologie, ortopedie și neurologie.',
	'aakash-hospital':
		'Aakash Hospital, din Malviya Nagar, este un spital multi-specialitate cu 100 de paturi care oferă îngrijire de medicină generală, ortopedie și ginecologie pacienților din sudul orașului Delhi.',
	'sci-international-hospital':
		'SCI International Hospital, din Greater Kailash, este un spital de proximitate cu 50 de paturi axat pe fertilitate, ginecologie și chirurgie generală în sudul orașului Delhi.',
	'the-signature-advanced-super-speciality-hospital':
		'The Signature Advanced Super Speciality Hospital, din Gurugram, este o unitate cu 100 de paturi care oferă îngrijire în ortopedie, cardiologie și neurologie pacienților din Gurugram.',

	'sci-ivf-hospital':
		'SCI IVF Hospital, din Greater Kailash-1, este o clinică de fertilitate dedicată, care oferă FIV și tratament de fertilitate printr-o echipă specializată în medicină reproductivă.',
	'nova-ivf-fertility':
		'Nova IVF Fertility are prezență în mai multe locații din NCR, parte a unuia dintre cele mai mari lanțuri de fertilitate din India, oferind FIV și tratament de fertilitate conform unor protocoale standardizate între centre.',
	'fortis-ridge-ivf-centre':
		'Fortis Ridge IVF Centre deservește pacienții din Delhi NCR cu FIV și tratament de fertilitate, susținut de grupul Fortis Healthcare.',
	'delhi-ivf-fertility-research-centre':
		'Delhi IVF & Fertility Research Centre, din Mandi House, este o clinică de fertilitate consacrată, care combină tratamentul FIV cu un program activ de cercetare clinică.',
	'indira-ivf':
		'Indira IVF are prezență în mai multe locații din Delhi/NCR, parte a uneia dintre cele mai mari rețele de fertilitate din India, oferind protocoale standardizate de FIV și tratament de fertilitate.',
	'cloudnine-ivf-centre-kailash-colony':
		'Cloudnine IVF Centre, Kailash Colony, face parte din grupul de maternitate și fertilitate Cloudnine, oferind FIV și tratament de fertilitate alături de servicii mai ample de sănătate a femeii.',
	'international-fertility-centre':
		'International Fertility Centre, din Green Park Extension, este o clinică dedicată FIV și tratamentului de fertilitate, deservind pacienți indieni și internaționali din sudul orașului Delhi.',
	'laimaa-fertility-ivf-surrogacy-clinic':
		'Laimaa Fertility (IVF & Surrogacy Clinic), din Greater Kailash, oferă programe de FIV, tratament de fertilitate și maternitate surogat pentru pacienții aflați în procese de reproducere asistată.',
	'gaudium-ivf':
		'Gaudium IVF, din South Extension-II, este o clinică de fertilitate dedicată, care oferă FIV și tratament de fertilitate printr-o echipă specializată în medicină reproductivă.',
	'pristyn-care-ferticity-super-speciality-ivf-hospital':
		'Pristyn Care Ferticity Super Speciality & IVF Hospital, din Malviya Nagar, combină un program de fertilitate și FIV cu rețeaua chirurgicală mai amplă a Pristyn Care.',
	'nova-ivf-fertility-centre-rajouri-garden':
		'Nova IVF Fertility Centre, Rajouri Garden, este o locație din vestul orașului Delhi a rețelei Nova IVF, care oferă FIV și tratament de fertilitate conform protocoalelor standardizate ale grupului.',
	'elixir-fertility-centre':
		'Elixir Fertility Centre, din Gujranwala Town, este o clinică dedicată FIV și tratamentului de fertilitate, deservind pacienți din nordul orașului Delhi.',
	'femmenest-fertility-ivf-centre':
		'Femmenest Fertility & IVF Centre, din Anand Vihar, oferă FIV și tratament de fertilitate pacienților din estul orașului Delhi.',
	'india-ivf-clinic':
		'India IVF Clinic, din Vasant Vihar, este o clinică de fertilitate dedicată, care oferă FIV și tratament de fertilitate în sud-vestul orașului Delhi.',
	'she-delhi-ivf-fertility-centre':
		'She Delhi – IVF & Fertility Centre, din Greater Kailash-II, oferă FIV și tratament de fertilitate printr-o echipă dedicată de medicină reproductivă în sudul orașului Delhi.',
	'zemya-ivf-fertility-clinics':
		'Zemya IVF & Fertility Clinics, din Green Park Extension, oferă FIV și tratament de fertilitate pacienților din sudul orașului Delhi.',

	'kokilaben-dhirubhai-ambani-hospital':
		'Kokilaben Dhirubhai Ambani Hospital este o unitate emblematică cu 750 de paturi, acreditată JCI, din Mumbai, recunoscută pentru programele sale avansate de cardiologie, oncologie și neurologie și un departament solid pentru pacienți internaționali.',
	'p-d-hinduja-hospital':
		'P. D. Hinduja Hospital este o instituție cu 350 de paturi, acreditată JCI, din Mumbai, cu o reputație consacrată în cardiologie, gastroenterologie și ortopedie.',
	'fortis-hospital-mulund':
		'Fortis Hospital, Mulund, este un spital cu 345 de paturi din Mumbai, recunoscut pentru transplantul de organe, oncologie și cardiologie, în cadrul rețelei Fortis Healthcare.',
	'jaslok-hospital':
		'Jaslok Hospital este o instituție cu 400 de paturi din Mumbai, cu expertiză solidă în neurologie, ortopedie și chirurgie generală, printre cele mai consacrate spitale private ale orașului.',
	'nanavati-max-super-speciality-hospital':
		'Nanavati Max Super Speciality Hospital este un spital cu 350 de paturi din Mumbai, care oferă îngrijire în cardiologie, oncologie și ortopedie în cadrul grupului Max Healthcare.',

	'apollo-hospitals-greams-road':
		'Apollo Hospitals, Greams Road, este unitatea emblematică acreditată JCI a grupului Apollo Hospitals, o instituție cu 550 de paturi din Chennai, recunoscută pentru cardiologie, oncologie și transplant de organe.',
	'miot-international':
		'MIOT International este un spital cu 1.000 de paturi, acreditat JCI, din Chennai, recunoscut în special în ortopedie, cardiologie și neurologie, cu un program important pentru pacienți internaționali.',
	'gleneagles-global-health-city':
		'Gleneagles Global Health City, din Chennai, este un spital multi-specialitate cu 450 de paturi, recunoscut pentru transplantul de ficat, transplantul de rinichi și oncologie.',
	'fortis-malar-hospital':
		'Fortis Malar Hospital, din Chennai, este un spital multi-specialitate cu 150 de paturi care oferă îngrijire în cardiologie, ortopedie și tratament de fertilitate.',
	'kauvery-hospital':
		'Kauvery Hospital, din Chennai, este un spital de super-specialitate cu 500 de paturi care oferă îngrijire în cardiologie, nefrologie și gastroenterologie în cadrul unei rețele în creștere din sudul Indiei.',

	'manipal-hospital-old-airport-road':
		'Manipal Hospital, Old Airport Road, este unitatea emblematică cu 650 de paturi din Bangalore, acreditată JCI, recunoscută pentru îngrijirea sa în ortopedie, cardiologie și oncologie.',
	'sakra-world-hospital':
		'Sakra World Hospital este un spital cu 300 de paturi, acreditat JCI, din Bangalore, construit conform standardelor unei colaborări japoneze, recunoscut pentru ortopedie, neurologie și chirurgie robotizată.',
	'narayana-institute-of-cardiac-sciences':
		'Narayana Institute of Cardiac Sciences, din Bangalore, este un spital cardiac dedicat cu 500 de paturi al grupului Narayana Health, axat pe cardiologie și chirurgie cardiacă la scară largă.',
	'fortis-hospital-bannerghatta-road':
		'Fortis Hospital, Bannerghatta Road, este un spital cu 400 de paturi din Bangalore, recunoscut pentru chirurgia estetică, ortopedie și cardiologie, în cadrul rețelei Fortis Healthcare.',
	'aster-cmi-hospital':
		'Aster CMI Hospital, din Bangalore, este un spital de super-specialitate cu 500 de paturi care oferă neurologie, oncologie și transplant de organe în cadrul grupului Aster DM Healthcare.',

	'apollo-hospitals-jubilee-hills':
		'Apollo Hospitals, Jubilee Hills, este unitatea emblematică acreditată JCI a rețelei Apollo din Hyderabad, un spital cu 500 de paturi recunoscut pentru transplantul de organe, oncologie și cardiologie.',
	'continental-hospitals':
		'Continental Hospitals, din Hyderabad, este un spital cu 460 de paturi, acreditat JCI, cu programe solide de neurologie, ortopedie și transplant de organe.',
	'yashoda-hospitals-somajiguda':
		'Yashoda Hospitals, Somajiguda, este un spital cu 700 de paturi din Hyderabad care oferă îngrijire în cardiologie, nefrologie și gastroenterologie, în cadrul grupului Yashoda.',
	'global-hospitals-hyderabad':
		'Global Hospitals, Hyderabad, este un spital cu 500 de paturi recunoscut pentru transplantul de ficat și transplantul de rinichi, printre cele mai active centre de transplant din sudul Indiei.',
	'kims-hospitals-secunderabad':
		'KIMS Hospitals, Secunderabad, este un spital cu 1.000 de paturi care oferă îngrijire în cardiologie, ortopedie și oncologie, unul dintre cele mai mari spitale private din Hyderabad.',

	'amrita-institute-of-medical-sciences-kochi':
		'Amrita Institute of Medical Sciences, Kochi, este un spital universitar de super-specialitate cu 1.300 de paturi, recunoscut pentru transplantul de organe, oncologie și cardiologie.',
	'aster-medcity':
		'Aster Medcity, din Kochi, este un spital cu 670 de paturi, acreditat JCI, care oferă cardiologie, fertilitate și ortopedie ca unitate emblematică din Kerala a grupului Aster DM Healthcare.',
	'lakeshore-hospital':
		'Lakeshore Hospital, din Kochi, este un spital multi-specialitate cu 400 de paturi, recunoscut pentru gastroenterologie, nefrologie și cardiologie.',
	'kims-health-kochi':
		'KIMS Health, Kochi, este un spital cu 500 de paturi care oferă programe de fertilitate, sănătatea femeii și ayurveda și wellness, alături de îngrijire multi-specialitate mai amplă.',

	'apollo-multispeciality-hospitals-kolkata':
		'Apollo Multispeciality Hospitals, Kolkata, este un spital cu 570 de paturi, acreditat JCI, recunoscut pentru oncologie, cardiologie și îngrijire oftalmologică, în cadrul grupului Apollo Hospitals.',
	'amri-hospitals-dhakuria':
		'AMRI Hospitals, Dhakuria, este un spital cu 200 de paturi din Kolkata care oferă îngrijire în cardiologie, ortopedie și neurologie în cadrul rețelei AMRI.',
	'fortis-hospital-anandapur':
		'Fortis Hospital, Anandapur, din Kolkata, este un spital multi-specialitate cu 300 de paturi care oferă îngrijire în oncologie, cardiologie și ortopedie în cadrul grupului Fortis Healthcare.',
	'medica-superspecialty-hospital':
		'Medica Superspecialty Hospital, din Kolkata, este un spital cu 400 de paturi recunoscut pentru îngrijirea oftalmologică, oncologie și nefrologie.',

	'zydus-hospitals':
		'Zydus Hospitals, din Ahmedabad, este un spital de super-specialitate cu 450 de paturi, recunoscut pentru transplantul de ficat, transplantul de rinichi și cardiologie.',
	'cims-hospital':
		'CIMS Hospital, din Ahmedabad, este un spital cu 250 de paturi, acreditat JCI, specializat în cardiologie, chirurgie cardiacă și neurologie.',
	'sterling-hospital':
		'Sterling Hospital, din Ahmedabad, este un spital multi-specialitate cu 200 de paturi care oferă transplant de rinichi, ortopedie și oncologie.',
	'shalby-hospitals':
		'Shalby Hospitals, din Ahmedabad, este un spital de super-specialitate cu 300 de paturi, recunoscut pentru ortopedie, cardiologie și oncologie, în cadrul grupului Shalby, recunoscut la nivel național pentru chirurgia de protezare articulară.',
};

function translateBeds(beds: string): string {
	if (bedsPhrases[beds]) return bedsPhrases[beds];
	return beds.replace(/\bBeds\b/, 'paturi').replace(/\bBed\b/, 'pat').replace(/\bLocations\b/, 'locații').replace(/\bLocation\b/, 'locație');
}

export const translateHospital = (hospital: HospitalData): HospitalData => {
	const name = localizeHospitalName(hospital, 'ro');
	const about = (aboutMap[hospital.slug] ?? hospital.about).split(hospital.name).join(name);
	return {
		...hospital,
		name,
		city: localizeCity(hospital.city, 'ro'),
		about,
		country: countryMap[hospital.country] ?? hospital.country,
		accreditation: accreditationMap[hospital.accreditation] ?? hospital.accreditation,
		specialties: hospital.specialties.map((specialty) => specialtyMap[specialty] ?? specialty),
		beds: translateBeds(hospital.beds),
	};
};

export const translateHospitals = (list: HospitalData[]): HospitalData[] => list.map(translateHospital);
