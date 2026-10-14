import type { HospitalData } from '../data/hospitals';
import { localizeCity, localizeHospitalName } from './hospitalNames';

/**
 * Field-level Spanish translations for hospital cards (OurPartnerHospitals).
 * Hospital and city names are proper nouns and stay as-is; accreditation,
 * specialties, bed counts, and country are translated via lookup.
 */

const countryMap: Record<string, string> = {
	India: 'India',
};

const accreditationMap: Record<string, string> = {
	'Super Specialty Hospital': 'Hospital de superespecialidad',
	'Multi Specialty Hospital': 'Hospital multiespecialidad',
	'JCI Accredited': 'Acreditado por la JCI',
	'Comprehensive & Multi Specialty Dental Clinic': 'Clínica dental integral y multiespecialidad',
	'Comprehensive & Super Specialty Eye Hospital': 'Hospital oftalmológico integral y de superespecialidad',
	'Fertility & IVF Center': 'Centro de fertilidad y FIV',
	'Multi Specialty Eye Hospital': 'Hospital oftalmológico multiespecialidad',
	'Super Specialty Eye Hospital': 'Hospital oftalmológico de superespecialidad',
};

const specialtyMap: Record<string, string> = {
	Cardiology: 'Cardiología',
	Oncology: 'Oncología',
	Orthopedics: 'Ortopedia',
	Orthopaedics: 'Ortopedia',
	Neurology: 'Neurología',
	'Cosmetic Surgery': 'Cirugía estética',
	Fertility: 'Fertilidad',
	'Reproductive Health': 'Salud reproductiva',
	Gynecology: 'Ginecología',
	Gynaecology: 'Ginecología',
	Obstetrics: 'Obstetricia',
	'Obstetrics and Gynaecology': 'Obstetricia y ginecología',
	Pulmonology: 'Neumología',
	Pediatrics: 'Pediatría',
	'General Medicine': 'Medicina general',
	Gastroenterology: 'Gastroenterología',
	Urology: 'Urología',
	Nephrology: 'Nefrología',
	'General Surgery': 'Cirugía general',
	'Organ Transplant': 'Trasplante de órganos',
	'Liver Transplant': 'Trasplante de hígado',
	'Kidney Transplant': 'Trasplante de riñón',
	Hematology: 'Hematología',
	'Robotic Surgery': 'Cirugía robótica',
	'Cardiac Surgery': 'Cirugía cardíaca',
	'Cardiac Sciences': 'Ciencias cardíacas',
	Neurosciences: 'Neurociencias',
	'Eye Care': 'Oftalmología',
	"Women's Health": 'Salud de la mujer',
	'Ayurveda & Wellness': 'Ayurveda y bienestar',
	Cataract: 'Cataratas',
	'Comprehensive Ophthalmology': 'Oftalmología integral',
	Cornea: 'Córnea',
	'Cornea Transplant': 'Trasplante de córnea',
	'Cosmetic Dentistry': 'Odontología estética',
	'Diabetic Retinopathy': 'Retinopatía diabética',
	'Emergency Care': 'Atención de urgencias',
	'Fertility Treatment': 'Tratamiento de fertilidad',
	'General Dentistry': 'Odontología general',
	Glaucoma: 'Glaucoma',
	ICL: 'ICL (lente implantable)',
	IVF: 'FIV',
	'Implants Dentistry': 'Implantología dental',
	'Internal Medicine': 'Medicina interna',
	LASIK: 'LASIK',
	'LASIK/Refractive Surgery': 'LASIK / cirugía refractiva',
	'LASIK/SMILE': 'LASIK / SMILE',
	Orthodontics: 'Ortodoncia',
	'Orthopaedics & Joint Replacement': 'Ortopedia y reemplazo articular',
	'Refractive Surgery': 'Cirugía refractiva',
	Retina: 'Retina',
	'Super-Speciality & Complex Eye Care': 'Superespecialidad y cuidado ocular complejo',
	Surrogacy: 'Gestación subrogada',
};

const bedsPhrases: Record<string, string> = {
	'Fertility Clinic': 'Clínica de fertilidad',
	'Multiple Locations': 'Varias sedes',
	'Multiple NCR Locations': 'Varias sedes en el NCR',
	'Single Center': 'Sede única',
};

const aboutMap: Record<string, string> = {
	'spruce-dental-chain-of-clinics':
		"Spruce Dental Chain of Clinics, en Gurugram, es una clínica de implantología y ortodoncia centrada en la colocación de implantes mínimamente invasiva y en la restauración completa de la boca en una sola visita para pacientes internacionales.",
	'spruce-dental':
		"Spruce Dental, en Jasola Vihar, ofrece atención dental integral y tratamientos de conducto (RCT) a pacientes de todo el oeste de Delhi.",
	'moolchand-hospital':
		'El Hospital Moolchand es uno de los hospitales de superespecialidad más antiguos del sur de Delhi, con un campus de 1.000 camas en Lajpat Nagar que abarca cardiología, oncología y ortopedia, además de urgencias y traumatología las 24 horas.',
	'fortis-c-doc-hospital':
		'Fortis C-DOC Hospital es un centro especializado en diabetes y en la atención cardíaca y neurológica asociada en Delhi, dentro de la red Fortis, centrado en el manejo a largo plazo de enfermedades metabólicas junto con cardiología y neurología.',
	'fortis-escorts-heart-institute':
		'Fortis Escorts Heart Institute, en Okhla, es uno de los centros cardíacos más reconocidos de la India, con un campus de 310 camas organizado en torno a la cirugía cardíaca avanzada, la cardiología intervencionista, la oncología y la hematología.',
	'fortis-flt-lt-rajan-dhall-hospital':
		'Fortis Flt. Lt. Rajan Dhall Hospital, en Vasant Kunj, es un hospital multiespecialidad de Fortis con 162 camas, conocido por sus programas de cirugía estética y cardiología para pacientes indios e internacionales.',
	'blk-max-super-speciality-hospital':
		'BLK-Max Super Speciality Hospital es un hospital terciario de 650 camas en el centro de Delhi, especialmente reconocido en neurología y ortopedia, con un equipamiento diagnóstico avanzado y una gran capacidad de cuidados críticos.',
	'artemis-hospital':
		'Artemis Hospital, en Gurugram, es un hospital multiespecialidad de 750 camas especialmente reconocido por el tratamiento de fertilidad y la salud reproductiva, además de una amplia gama de especialidades quirúrgicas y médicas.',
	'max-super-speciality-hospital-saket':
		'Max Super Speciality Hospital, Saket, es un hospital terciario de 539 camas reconocido por su programa de ginecología y obstetricia, dentro de la red Max de hospitales de superespecialidad de Delhi NCR.',
	'indraprastha-apollo-hospitals':
		'Indraprastha Apollo Hospitals, en Delhi, es un centro insignia del grupo Apollo con un programa dedicado de fertilidad y salud reproductiva, respaldado por la infraestructura multiespecialidad y diagnóstica más amplia del grupo.',
	'apollo-spectra-hospitals':
		'Apollo Spectra Hospitals, en Delhi, es un hospital quirúrgico de alto rendimiento que cubre neumología, pediatría, medicina general y gastroenterología, diseñado para procedimientos rápidos ambulatorios o de corta estancia.',
	'batra-hospital-medical-research-centre':
		'Batra Hospital & Medical Research Centre, en Tughlakabad, es un hospital universitario de 490 camas que ofrece atención en neumología, pediatría, medicina general y gastroenterología, con un programa activo de investigación de posgrado.',
	'aakash-healthcare-super-speciality-hospital':
		'Aakash Healthcare Super Speciality Hospital, en Dwarka, es un centro de 230 camas centrado en urología, nefrología y oncología, con capacidad quirúrgica robótica y mínimamente invasiva dedicada.',
	'manipal-hospital-dwarka':
		'Manipal Hospital, Dwarka, es un centro de superespecialidad de 240 camas del grupo Manipal que ofrece servicios de cardiología, neurología y obstetricia-ginecología a pacientes del oeste de Delhi y Gurugram.',
	'sir-ganga-ram-hospital':
		'Sir Ganga Ram Hospital es uno de los hospitales privados más antiguos y grandes de Delhi, un centro de 900 camas en Rajinder Nagar que abarca ortopedia, cirugía general, medicina interna y cardiología.',
	'amrita-hospital':
		'Amrita Hospital, en Faridabad, es uno de los hospitales privados más grandes de la India, un campus de 2.600 camas que ofrece obstetricia-ginecología, gastroenterología y urología, además de docenas de otras especialidades.',
	'metro-heart-institute-with-multispeciality':
		'Metro Heart Institute with Multispeciality, en Faridabad, es un hospital de 200 camas centrado en cardiología, que ofrece atención cardíaca avanzada junto con una gama creciente de servicios multiespecialidad para la región de Faridabad.',

	'the-sight-avenue':
		'The Sight Avenue tiene presencia en Greater Kailash (Delhi) y en el Sector 38 de Gurugram, ofreciendo atención oftalmológica integral que abarca retina, córnea, cataratas, LASIK/SMILE, ICL y glaucoma bajo un mismo equipo.',
	'shroff-eye-centre':
		'Shroff Eye Centre opera tres sedes entre Kailash Colony, Connaught Place y Gurugram, con una sólida reputación en trasplante de córnea, retina, cataratas, glaucoma y cirugía LASIK.',
	'eye7-hospitals':
		'Eye7 Hospitals tiene presencia en Lajpat Nagar y Janakpuri, Delhi, ofreciendo atención de retina, cataratas, LASIK, córnea y glaucoma dentro de un hospital oftalmológico multiespecialidad dedicado.',
	'sharp-sight-eye-hospitals':
		'Sharp Sight Eye Hospitals opera una red de clínicas en Preet Vihar y otras sedes de Delhi-NCR, centrada en retina, cataratas, glaucoma, LASIK y retinopatía diabética.',
	'venu-eye-institute-research-centre':
		'Venu Eye Institute & Research Centre, en Sheikh Sarai (sur de Delhi), es un hospital oftalmológico de superespecialidad reconocido por la atención ocular compleja, retina, córnea y glaucoma, con un programa de investigación activo.',
	'guru-nanak-eye-centre':
		'Guru Nanak Eye Centre, en el centro de Delhi, es un hospital oftalmológico integral y de superespecialidad que ofrece oftalmología, retina, córnea, glaucoma y atención ocular de urgencia las 24 horas.',
	'shining-smile-dentistry':
		'Shining Smile Dentistry, en Saket (Nueva Delhi), es una clínica dental integral que ofrece odontología general y estética, ortodoncia, implantes y atención dental de urgencia bajo un mismo techo.',
	'dr-agarwal-s-eye-hospital':
		"Dr Agarwal's Eye Hospital tiene presencia en múltiples sedes de Delhi-NCR, dentro de una de las cadenas oftalmológicas más grandes de la India, ofreciendo cataratas, retina, córnea, glaucoma y cirugía LASIK/refractiva.",
	'asg-eye-hospital':
		'ASG Eye Hospital opera centros en Noida y otras sedes del NCR, ofreciendo cataratas, retina, córnea, glaucoma y cirugía refractiva dentro de una red oftalmológica de alcance nacional.',
	'eye-q-super-speciality-eye-hospitals':
		'Eye-Q Super-Speciality Eye Hospitals tiene presencia en Gurugram y en todo el NCR, ofreciendo cataratas, retina, glaucoma y cirugía LASIK/refractiva dentro de una cadena de centros oftalmológicos dedicados.',

	'medanta-the-medicity':
		'Medanta – The Medicity, en Gurugram, es una de las instituciones multi-superespecialidad más grandes de la India acreditada por la JCI, un campus de 1.250 camas organizado en torno a la cardiología, la oncología y el trasplante de órganos, con un equipo de especialistas formados internacionalmente.',
	'fortis-memorial-research-institute-fmri':
		'Fortis Memorial Research Institute (FMRI), en Gurugram, es un hospital de atención cuaternaria de 1.000 camas acreditado por la JCI, reconocido por sus avanzados programas de oncología, cardiología y cirugía robótica.',
	'sanar-international-hospitals':
		'Sanar International Hospitals, en Gurugram, es un hospital multiespecialidad de 200 camas que ofrece atención en ortopedia, cardiología y neurología, diseñado para pacientes indios e internacionales.',
	'jaypee-hospital':
		'Jaypee Hospital, en Noida, es un hospital de superespecialidad de 1.200 camas con sólidos programas de cardiología, oncología y neurología al servicio de la región del Gran Noida y el NCR.',
	'marengo-asia-hospitals':
		'Marengo Asia Hospitals, Faridabad, es un hospital multiespecialidad de 300 camas que ofrece atención en cardiología, ortopedia y gastroenterología, dentro de la red más amplia Marengo Asia en toda la India.',
	'marengo-asia-hospitals-gurugram':
		'Marengo Asia Hospitals, Gurugram, es el buque insignia de una red de ocho hospitales que abarca ciencias cardíacas, neurociencias y ortopedia-reemplazo articular, con programas de trasplante de hígado y oncología dirigidos por consultores sénior.',
	'fortis-hospital':
		'Fortis Hospital, Noida, es un hospital multiespecialidad de 200 camas de la red Fortis que ofrece atención en cardiología, ortopedia y oncología a pacientes de Noida y el NCR.',
	'fortis-hospital-shalimar-bagh':
		'Fortis Hospital, Shalimar Bagh, es un hospital multiespecialidad de 262 camas al norte de Delhi que abarca cardiología, neurología y ortopedia dentro del grupo Fortis Healthcare.',
	'fortis-hospital-faridabad':
		'Fortis Hospital, Faridabad, es un hospital multiespecialidad de 200 camas que ofrece servicios de cardiología, ortopedia y oncología a pacientes de Faridabad y el sur del NCR.',
	'max-hospital':
		'Max Hospital, Gurugram, es un centro multiespecialidad de 200 camas del grupo Max Healthcare que ofrece atención en cardiología, ortopedia y oncología en el corazón de Gurugram.',
	'max-super-speciality-hospital-vaishali':
		'Max Super Speciality Hospital, Vaishali, es un hospital de 400 camas en Ghaziabad que abarca cardiología, neurología y ortopedia dentro de la red Max Healthcare.',
	'max-super-speciality-hospital-noida':
		'Max Super Speciality Hospital, Noida, es un hospital terciario de 400 camas que ofrece atención en cardiología, oncología y ortopedia a pacientes de Noida y el este del NCR.',
	'max-super-speciality-hospital-dwarka':
		'Max Super Speciality Hospital, Dwarka, es un hospital de 300 camas al oeste de Delhi que ofrece atención en cardiología, neurología y ortopedia dentro del grupo Max Healthcare.',
	'max-super-speciality-hospital-shalimar-bagh':
		'Max Super Speciality Hospital, Shalimar Bagh, es un centro de 400 camas al norte de Delhi que ofrece cardiología, oncología y ortopedia dentro de la red Max Healthcare.',
	'max-smart-super-speciality-hospital':
		'Max Smart Super Speciality Hospital, en Saket, es un hospital terciario de 300 camas reconocido por sus programas de ciencias cardíacas, oncología y cirugía robótica en el sur de Delhi.',
	'psri-hospital':
		'PSRI Hospital, en Sheikh Sarai, es un hospital de 425 camas organizado en torno a la gastroenterología, la nefrología y la neumología, con una sólida reputación en enfermedades hepáticas y digestivas.',
	'venkateshwar-hospital':
		'Venkateshwar Hospital, en Dwarka, es un hospital multiespecialidad de 150 camas que ofrece servicios de cardiología, ortopedia y oncología a pacientes del oeste de Delhi.',
	'primus-super-speciality-hospital':
		'Primus Super Speciality Hospital, en Chanakyapuri, es un hospital de 200 camas en el centro de Delhi que ofrece atención en ortopedia, cardiología y gastroenterología cerca del recinto diplomático.',
	'ck-birla-hospital':
		'CK Birla Hospital, en Punjabi Bagh, es un hospital multiespecialidad de 162 camas especialmente reconocido por la salud de la mujer, además de ortopedia y cardiología.',
	'narayana-hospital':
		'Narayana Hospital, Gurugram, es un centro multiespecialidad de 190 camas del grupo Narayana Health que ofrece atención en cardiología, oncología y ortopedia.',
	'asian-institute-of-medical-sciences':
		'Asian Institute of Medical Sciences, en Faridabad, es un hospital multiespecialidad de 400 camas que ofrece servicios de cardiología, neurología y ortopedia a la región de Faridabad.',
	'yatharth-super-speciality-hospital':
		'Yatharth Super Speciality Hospital tiene presencia en Noida y Greater Noida, ofreciendo atención en cardiología, ortopedia y neurología en varias sedes del este del NCR.',
	'yashoda-super-speciality-hospitals':
		'Yashoda Super Speciality Hospitals, en Ghaziabad, es un hospital de 250 camas que ofrece atención en cardiología, gastroenterología y ortopedia a pacientes de Ghaziabad y el NCR.',
	'saroj-super-speciality-hospital':
		'Saroj Super Speciality Hospital, en Rohini, es un hospital de 250 camas al noroeste de Delhi que ofrece servicios de cardiología, ortopedia y neurología.',
	'aakash-hospital':
		'Aakash Hospital, en Malviya Nagar, es un hospital multiespecialidad de 100 camas que ofrece atención de medicina general, ortopedia y ginecología a pacientes del sur de Delhi.',
	'sci-international-hospital':
		'SCI International Hospital, en Greater Kailash, es un hospital de proximidad de 50 camas centrado en fertilidad, ginecología y cirugía general en el sur de Delhi.',
	'the-signature-advanced-super-speciality-hospital':
		'The Signature Advanced Super Speciality Hospital, en Gurugram, es un centro de 100 camas que ofrece atención en ortopedia, cardiología y neurología a pacientes de Gurugram.',

	'sci-ivf-hospital':
		'SCI IVF Hospital, en Greater Kailash-1, es una clínica de fertilidad dedicada que ofrece FIV y tratamiento de fertilidad con un equipo especializado en medicina reproductiva.',
	'nova-ivf-fertility':
		'Nova IVF Fertility tiene presencia en múltiples sedes del NCR, dentro de una de las cadenas de fertilidad más grandes de la India, ofreciendo FIV y tratamiento de fertilidad con protocolos estandarizados entre centros.',
	'fortis-ridge-ivf-centre':
		'Fortis Ridge IVF Centre atiende a pacientes de Delhi NCR con FIV y tratamiento de fertilidad, respaldado por el grupo Fortis Healthcare.',
	'delhi-ivf-fertility-research-centre':
		'Delhi IVF & Fertility Research Centre, en Mandi House, es una clínica de fertilidad de larga trayectoria que combina el tratamiento de FIV con un programa activo de investigación clínica.',
	'indira-ivf':
		'Indira IVF tiene presencia en múltiples sedes de Delhi/NCR, dentro de una de las redes de fertilidad más grandes de la India, ofreciendo protocolos estandarizados de FIV y tratamiento de fertilidad.',
	'cloudnine-ivf-centre-kailash-colony':
		'Cloudnine IVF Centre, Kailash Colony, forma parte del grupo de maternidad y fertilidad Cloudnine, ofreciendo FIV y tratamiento de fertilidad junto con servicios más amplios de salud de la mujer.',
	'international-fertility-centre':
		'International Fertility Centre, en Green Park Extension, es una clínica dedicada a la FIV y al tratamiento de fertilidad, al servicio de pacientes indios e internacionales desde el sur de Delhi.',
	'laimaa-fertility-ivf-surrogacy-clinic':
		'Laimaa Fertility (IVF & Surrogacy Clinic), en Greater Kailash, ofrece programas de FIV, tratamiento de fertilidad y gestación subrogada para pacientes en procesos de reproducción asistida.',
	'gaudium-ivf':
		'Gaudium IVF, en South Extension-II, es una clínica de fertilidad dedicada que ofrece FIV y tratamiento de fertilidad con un equipo especializado en medicina reproductiva.',
	'pristyn-care-ferticity-super-speciality-ivf-hospital':
		'Pristyn Care Ferticity Super Speciality & IVF Hospital, en Malviya Nagar, combina un programa de fertilidad y FIV con la red quirúrgica más amplia de Pristyn Care.',
	'nova-ivf-fertility-centre-rajouri-garden':
		'Nova IVF Fertility Centre, Rajouri Garden, es una sede del oeste de Delhi de la red Nova IVF, que ofrece FIV y tratamiento de fertilidad con protocolos estandarizados del grupo.',
	'elixir-fertility-centre':
		'Elixir Fertility Centre, en Gujranwala Town, es una clínica dedicada a la FIV y al tratamiento de fertilidad al servicio de pacientes del norte de Delhi.',
	'femmenest-fertility-ivf-centre':
		'Femmenest Fertility & IVF Centre, en Anand Vihar, ofrece FIV y tratamiento de fertilidad a pacientes del este de Delhi.',
	'india-ivf-clinic':
		'India IVF Clinic, en Vasant Vihar, es una clínica de fertilidad dedicada que ofrece FIV y tratamiento de fertilidad en el suroeste de Delhi.',
	'she-delhi-ivf-fertility-centre':
		'She Delhi – IVF & Fertility Centre, en Greater Kailash-II, ofrece FIV y tratamiento de fertilidad con un equipo dedicado de medicina reproductiva en el sur de Delhi.',
	'zemya-ivf-fertility-clinics':
		'Zemya IVF & Fertility Clinics, en Green Park Extension, ofrece FIV y tratamiento de fertilidad a pacientes del sur de Delhi.',

	'kokilaben-dhirubhai-ambani-hospital':
		'Kokilaben Dhirubhai Ambani Hospital es un centro insignia de 750 camas acreditado por la JCI en Mumbai, reconocido por sus avanzados programas de cardiología, oncología y neurología y un sólido departamento de pacientes internacionales.',
	'p-d-hinduja-hospital':
		'P. D. Hinduja Hospital es una institución de 350 camas acreditada por la JCI en Mumbai, con una larga trayectoria en cardiología, gastroenterología y ortopedia.',
	'fortis-hospital-mulund':
		'Fortis Hospital, Mulund, es un hospital de 345 camas en Mumbai reconocido por el trasplante de órganos, la oncología y la cardiología, dentro de la red Fortis Healthcare.',
	'jaslok-hospital':
		'Jaslok Hospital es una institución de 400 camas en Mumbai con una sólida experiencia en neurología, ortopedia y cirugía general, entre los hospitales privados más consolidados de la ciudad.',
	'nanavati-max-super-speciality-hospital':
		'Nanavati Max Super Speciality Hospital es un hospital de 350 camas en Mumbai que ofrece atención en cardiología, oncología y ortopedia dentro del grupo Max Healthcare.',

	'apollo-hospitals-greams-road':
		'Apollo Hospitals, Greams Road, es el buque insignia acreditado por la JCI del grupo Apollo Hospitals, una institución de 550 camas en Chennai reconocida por la cardiología, la oncología y el trasplante de órganos.',
	'miot-international':
		'MIOT International es un hospital de 1.000 camas acreditado por la JCI en Chennai, especialmente reconocido en ortopedia, cardiología y neurología, con un importante programa de pacientes internacionales.',
	'gleneagles-global-health-city':
		'Gleneagles Global Health City, en Chennai, es un hospital multiespecialidad de 450 camas reconocido por el trasplante de hígado, el trasplante de riñón y la oncología.',
	'fortis-malar-hospital':
		'Fortis Malar Hospital, en Chennai, es un hospital multiespecialidad de 150 camas que ofrece atención en cardiología, ortopedia y tratamiento de fertilidad.',
	'kauvery-hospital':
		'Kauvery Hospital, en Chennai, es un hospital de superespecialidad de 500 camas que ofrece atención en cardiología, nefrología y gastroenterología dentro de una red en crecimiento en el sur de la India.',

	'manipal-hospital-old-airport-road':
		'Manipal Hospital, Old Airport Road, es el buque insignia de 650 camas de Bangalore acreditado por la JCI, reconocido por su atención en ortopedia, cardiología y oncología.',
	'sakra-world-hospital':
		'Sakra World Hospital es un hospital de 300 camas acreditado por la JCI en Bangalore, construido con estándares de colaboración japonesa, reconocido por la ortopedia, la neurología y la cirugía robótica.',
	'narayana-institute-of-cardiac-sciences':
		'Narayana Institute of Cardiac Sciences, en Bangalore, es un hospital cardíaco dedicado de 500 camas del grupo Narayana Health, centrado en la cardiología y la cirugía cardíaca a gran escala.',
	'fortis-hospital-bannerghatta-road':
		'Fortis Hospital, Bannerghatta Road, es un hospital de 400 camas en Bangalore reconocido por la cirugía estética, la ortopedia y la cardiología, dentro de la red Fortis Healthcare.',
	'aster-cmi-hospital':
		'Aster CMI Hospital, en Bangalore, es un hospital de superespecialidad de 500 camas que ofrece neurología, oncología y trasplante de órganos dentro del grupo Aster DM Healthcare.',

	'apollo-hospitals-jubilee-hills':
		'Apollo Hospitals, Jubilee Hills, es el buque insignia acreditado por la JCI de la red Apollo en Hyderabad, un hospital de 500 camas reconocido por el trasplante de órganos, la oncología y la cardiología.',
	'continental-hospitals':
		'Continental Hospitals, en Hyderabad, es un hospital de 460 camas acreditado por la JCI con sólidos programas de neurología, ortopedia y trasplante de órganos.',
	'yashoda-hospitals-somajiguda':
		'Yashoda Hospitals, Somajiguda, es un hospital de 700 camas en Hyderabad que ofrece atención en cardiología, nefrología y gastroenterología, dentro del grupo Yashoda.',
	'global-hospitals-hyderabad':
		'Global Hospitals, Hyderabad, es un hospital de 500 camas reconocido por el trasplante de hígado y el trasplante de riñón, entre los centros de trasplante más activos del sur de la India.',
	'kims-hospitals-secunderabad':
		'KIMS Hospitals, Secunderabad, es un hospital de 1.000 camas que ofrece atención en cardiología, ortopedia y oncología, uno de los hospitales privados más grandes de Hyderabad.',

	'amrita-institute-of-medical-sciences-kochi':
		'Amrita Institute of Medical Sciences, Kochi, es un hospital universitario de superespecialidad de 1.300 camas reconocido por el trasplante de órganos, la oncología y la cardiología.',
	'aster-medcity':
		'Aster Medcity, en Kochi, es un hospital de 670 camas acreditado por la JCI que ofrece cardiología, fertilidad y ortopedia como centro insignia de Kerala del grupo Aster DM Healthcare.',
	'lakeshore-hospital':
		'Lakeshore Hospital, en Kochi, es un hospital multiespecialidad de 400 camas reconocido por la gastroenterología, la nefrología y la cardiología.',
	'kims-health-kochi':
		'KIMS Health, Kochi, es un hospital de 500 camas que ofrece programas de fertilidad, salud de la mujer y ayurveda y bienestar, junto con una atención multiespecialidad más amplia.',

	'apollo-multispeciality-hospitals-kolkata':
		'Apollo Multispeciality Hospitals, Kolkata, es un hospital de 570 camas acreditado por la JCI reconocido por la oncología, la cardiología y la oftalmología, dentro del grupo Apollo Hospitals.',
	'amri-hospitals-dhakuria':
		'AMRI Hospitals, Dhakuria, es un hospital de 200 camas en Kolkata que ofrece atención en cardiología, ortopedia y neurología dentro de la red AMRI.',
	'fortis-hospital-anandapur':
		'Fortis Hospital, Anandapur, en Kolkata, es un hospital multiespecialidad de 300 camas que ofrece atención en oncología, cardiología y ortopedia dentro del grupo Fortis Healthcare.',
	'medica-superspecialty-hospital':
		'Medica Superspecialty Hospital, en Kolkata, es un hospital de 400 camas reconocido por la oftalmología, la oncología y la nefrología.',

	'zydus-hospitals':
		'Zydus Hospitals, en Ahmedabad, es un hospital de superespecialidad de 450 camas reconocido por el trasplante de hígado, el trasplante de riñón y la cardiología.',
	'cims-hospital':
		'CIMS Hospital, en Ahmedabad, es un hospital de 250 camas acreditado por la JCI especializado en cardiología, cirugía cardíaca y neurología.',
	'sterling-hospital':
		'Sterling Hospital, en Ahmedabad, es un hospital multiespecialidad de 200 camas que ofrece trasplante de riñón, ortopedia y oncología.',
	'shalby-hospitals':
		'Shalby Hospitals, en Ahmedabad, es un hospital de superespecialidad de 300 camas reconocido por la ortopedia, la cardiología y la oncología, dentro del grupo Shalby, reconocido a nivel nacional por la cirugía de reemplazo articular.',
};

function translateBeds(beds: string): string {
	if (bedsPhrases[beds]) return bedsPhrases[beds];
	return beds.replace(/\bBeds\b/, 'camas').replace(/\bBed\b/, 'cama').replace(/\bLocations\b/, 'sedes').replace(/\bLocation\b/, 'sede');
}

export const translateHospital = (hospital: HospitalData): HospitalData => {
	const name = localizeHospitalName(hospital, 'es');
	const about = (aboutMap[hospital.slug] ?? hospital.about).split(hospital.name).join(name);
	return {
		...hospital,
		name,
		city: localizeCity(hospital.city, 'es'),
		about,
		country: countryMap[hospital.country] ?? hospital.country,
		accreditation: accreditationMap[hospital.accreditation] ?? hospital.accreditation,
		specialties: hospital.specialties.map((specialty) => specialtyMap[specialty] ?? specialty),
		beds: translateBeds(hospital.beds),
	};
};

export const translateHospitals = (list: HospitalData[]): HospitalData[] => list.map(translateHospital);
