import type { HospitalData } from '../data/hospitals';
import { localizeCity, localizeHospitalName } from './hospitalNames';

/**
 * Field-level French translations for hospital cards (OurPartnerHospitals)
 * and hospital detail pages. Hospital and city names are proper nouns and
 * stay as-is; accreditation, specialties, bed counts, country and the
 * detail-page "about" paragraph are translated via lookup.
 */

const countryMap: Record<string, string> = {
	India: 'Inde',
};

const specialtyMap: Record<string, string> = {
	'Ayurveda & Wellness': 'Ayurveda et bien-être',
	'Cardiac Sciences': 'Sciences cardiaques',
	'Cardiac Surgery': 'Chirurgie cardiaque',
	Cardiology: 'Cardiologie',
	Cataract: 'Cataracte',
	'Comprehensive Ophthalmology': 'Ophtalmologie générale',
	Cornea: 'Cornée',
	'Cornea Transplant': 'Greffe de cornée',
	'Cosmetic Dentistry': 'Dentisterie esthétique',
	'Cosmetic Surgery': 'Chirurgie esthétique',
	'Diabetic Retinopathy': 'Rétinopathie diabétique',
	'Emergency Care': "Soins d'urgence",
	'Eye Care': 'Soins oculaires',
	Fertility: 'Fertilité',
	'Fertility Treatment': 'Traitement de la fertilité',
	Gastroenterology: 'Gastro-entérologie',
	'General Dentistry': 'Dentisterie générale',
	'General Medicine': 'Médecine générale',
	'General Surgery': 'Chirurgie générale',
	Glaucoma: 'Glaucome',
	Gynaecology: 'Gynécologie',
	Gynecology: 'Gynécologie',
	Hematology: 'Hématologie',
	ICL: 'ICL (lentille implantable)',
	IVF: 'FIV',
	'Implants Dentistry': 'Implantologie dentaire',
	'Internal Medicine': 'Médecine interne',
	'Kidney Transplant': 'Greffe de rein',
	LASIK: 'LASIK',
	'LASIK/Refractive Surgery': 'LASIK / chirurgie réfractive',
	'LASIK/SMILE': 'LASIK / SMILE',
	'Liver Transplant': 'Greffe de foie',
	Nephrology: 'Néphrologie',
	Neurology: 'Neurologie',
	Neurosciences: 'Neurosciences',
	Obstetrics: 'Obstétrique',
	'Obstetrics and Gynaecology': 'Obstétrique et gynécologie',
	Oncology: 'Oncologie',
	'Organ Transplant': "Transplantation d'organes",
	Orthodontics: 'Orthodontie',
	Orthopaedics: 'Orthopédie',
	'Orthopaedics & Joint Replacement': 'Orthopédie et prothèses articulaires',
	Orthopedics: 'Orthopédie',
	Pediatrics: 'Pédiatrie',
	Pulmonology: 'Pneumologie',
	'Refractive Surgery': 'Chirurgie réfractive',
	'Reproductive Health': 'Santé reproductive',
	Retina: 'Rétine',
	'Robotic Surgery': 'Chirurgie robotique',
	'Super-Speciality & Complex Eye Care': 'Surspécialité et soins oculaires complexes',
	Surrogacy: 'Gestation pour autrui',
	Urology: 'Urologie',
	"Women's Health": 'Santé des femmes',
};

const accreditationMap: Record<string, string> = {
	'Comprehensive & Multi Specialty Dental Clinic': 'Clinique dentaire généraliste et multi-spécialités',
	'Comprehensive & Super Specialty Eye Hospital': 'Hôpital ophtalmologique généraliste et surspécialisé',
	'Fertility & IVF Center': 'Centre de fertilité et de FIV',
	'JCI Accredited': 'Accrédité JCI',
	'Multi Specialty Eye Hospital': 'Hôpital ophtalmologique multi-spécialités',
	'Multi Specialty Hospital': 'Hôpital multi-spécialités',
	'Super Specialty Eye Hospital': 'Hôpital ophtalmologique surspécialisé',
	'Super Specialty Hospital': 'Hôpital surspécialisé',
};

const bedsPhrases: Record<string, string> = {
	'Fertility Clinic': 'Clinique de fertilité',
	'Multiple Locations': 'Plusieurs sites',
	'Multiple NCR Locations': 'Plusieurs sites dans le NCR',
	'Single Center': 'Site unique',
};

const aboutMap: Record<string, string> = {
	'spruce-dental-chain-of-clinics':
		"Spruce Dental Chain of Clinics à Gurugram est un cabinet d’implantologie et d’orthodontie centré sur la pose d’implants minimalement invasive et la restauration complète de la bouche en une seule visite pour les patients internationaux.",
	'spruce-dental':
		"Spruce Dental à Jasola Vihar propose des soins dentaires complets et des traitements de canal (RCT) aux patients de tout l’ouest de Delhi.",
	'moolchand-hospital':
		"L'hôpital Moolchand est l'un des hôpitaux surspécialisés les plus anciens du sud de Delhi, avec un campus de 1 000 lits à Lajpat Nagar couvrant la cardiologie, l'oncologie et l'orthopédie, ainsi que des urgences et une prise en charge des traumatismes 24 h/24.",
	'fortis-c-doc-hospital':
		"Fortis C-DOC Hospital est un centre spécialisé dans le diabète et les soins cardiaques et neurologiques associés à Delhi, au sein du réseau Fortis, axé sur la gestion à long terme des maladies métaboliques ainsi que la cardiologie et la neurologie.",
	'fortis-escorts-heart-institute':
		"Fortis Escorts Heart Institute, à Okhla, est l'un des centres cardiaques les plus reconnus d'Inde, avec un campus de 310 lits organisé autour de la chirurgie cardiaque avancée, de la cardiologie interventionnelle, de l'oncologie et de l'hématologie.",
	'fortis-flt-lt-rajan-dhall-hospital':
		"Fortis Flt. Lt. Rajan Dhall Hospital, à Vasant Kunj, est un établissement multi-spécialités Fortis de 162 lits connu pour ses programmes de chirurgie esthétique et de cardiologie, au service des patients indiens et internationaux.",
	'blk-max-super-speciality-hospital':
		"BLK-Max Super Speciality Hospital est un hôpital tertiaire de 650 lits au centre de Delhi, particulièrement reconnu en neurologie et en orthopédie, avec un plateau technique avancé et une importante capacité de soins critiques.",
	'artemis-hospital':
		"Artemis Hospital, à Gurugram, est un hôpital multi-spécialités de 750 lits particulièrement reconnu pour le traitement de la fertilité et la santé reproductive, en plus d'un large éventail de spécialités chirurgicales et médicales.",
	'max-super-speciality-hospital-saket':
		"Max Super Speciality Hospital, Saket, est un hôpital tertiaire de 539 lits reconnu pour son programme de gynécologie et d'obstétrique, au sein du réseau Max d'hôpitaux surspécialisés de Delhi NCR.",
	'indraprastha-apollo-hospitals':
		"Indraprastha Apollo Hospitals, à Delhi, est un établissement phare du groupe Apollo doté d'un programme dédié de fertilité et de santé reproductive, soutenu par l'infrastructure multi-spécialités et diagnostique plus large du groupe.",
	'apollo-spectra-hospitals':
		"Apollo Spectra Hospitals, à Delhi, est un hôpital chirurgical à haut débit couvrant la pneumologie, la pédiatrie, la médecine générale et la gastro-entérologie, conçu pour des interventions rapides en ambulatoire ou en court séjour.",
	'batra-hospital-medical-research-centre':
		"Batra Hospital & Medical Research Centre, à Tughlakabad, est un hôpital universitaire de 490 lits proposant des soins en pneumologie, pédiatrie, médecine générale et gastro-entérologie, avec un programme de recherche de troisième cycle actif.",
	'aakash-healthcare-super-speciality-hospital':
		"Aakash Healthcare Super Speciality Hospital, à Dwarka, est un centre de 230 lits axé sur l'urologie, la néphrologie et l'oncologie, doté de capacités chirurgicales robotiques et mini-invasives dédiées.",
	'manipal-hospital-dwarka':
		"Manipal Hospital, Dwarka, est un établissement surspécialisé de 240 lits du groupe Manipal offrant des services de cardiologie, de neurologie et d'obstétrique-gynécologie aux patients de l'ouest de Delhi et de Gurugram.",
	'sir-ganga-ram-hospital':
		"Sir Ganga Ram Hospital est l'un des plus anciens et plus grands hôpitaux privés de Delhi, un établissement de 900 lits à Rajinder Nagar couvrant l'orthopédie, la chirurgie générale, la médecine interne et la cardiologie.",
	'amrita-hospital':
		"Amrita Hospital, à Faridabad, est l'un des plus grands hôpitaux privés d'Inde, un campus de 2 600 lits proposant l'obstétrique-gynécologie, la gastro-entérologie et l'urologie, ainsi que des dizaines d'autres spécialités.",
	'metro-heart-institute-with-multispeciality':
		"Metro Heart Institute with Multispeciality, à Faridabad, est un hôpital de 200 lits axé sur la cardiologie, offrant des soins cardiaques avancés ainsi qu'une gamme croissante de services multi-spécialités pour la région de Faridabad.",

	'the-sight-avenue':
		"The Sight Avenue est présent à Greater Kailash (Delhi) et au secteur 38 de Gurugram, proposant des soins ophtalmologiques complets couvrant la rétine, la cornée, la cataracte, le LASIK/SMILE, l'ICL et le glaucome au sein d'une même équipe.",
	'shroff-eye-centre':
		"Shroff Eye Centre exploite trois sites entre Kailash Colony, Connaught Place et Gurugram, avec une solide réputation en greffe de cornée, rétine, cataracte, glaucome et chirurgie LASIK.",
	'eye7-hospitals':
		"Eye7 Hospitals est présent à Lajpat Nagar et Janakpuri, à Delhi, proposant des soins de la rétine, de la cataracte, du LASIK, de la cornée et du glaucome au sein d'un hôpital ophtalmologique multi-spécialités dédié.",
	'sharp-sight-eye-hospitals':
		"Sharp Sight Eye Hospitals exploite un réseau de cliniques à Preet Vihar et dans d'autres sites du Delhi NCR, axé sur la rétine, la cataracte, le glaucome, le LASIK et la rétinopathie diabétique.",
	'venu-eye-institute-research-centre':
		"Venu Eye Institute & Research Centre, à Sheikh Sarai (sud de Delhi), est un hôpital ophtalmologique surspécialisé reconnu pour les soins oculaires complexes, la rétine, la cornée et le glaucome, avec un programme de recherche actif.",
	'guru-nanak-eye-centre':
		"Guru Nanak Eye Centre, au centre de Delhi, est un hôpital ophtalmologique généraliste et surspécialisé proposant ophtalmologie, rétine, cornée, glaucome et soins oculaires d'urgence 24 h/24.",
	'shining-smile-dentistry':
		"Shining Smile Dentistry, à Saket (New Delhi), est une clinique dentaire complète proposant dentisterie générale et esthétique, orthodontie, implants et soins dentaires d'urgence sous un même toit.",
	'dr-agarwal-s-eye-hospital':
		"Dr Agarwal's Eye Hospital est présent sur plusieurs sites du Delhi NCR, au sein de l'une des plus grandes chaînes ophtalmologiques d'Inde, proposant cataracte, rétine, cornée, glaucome et chirurgie LASIK/réfractive.",
	'asg-eye-hospital':
		"ASG Eye Hospital exploite des centres à Noida et dans d'autres sites du NCR, proposant cataracte, rétine, cornée, glaucome et chirurgie réfractive au sein d'un réseau ophtalmologique panindien.",
	'eye-q-super-speciality-eye-hospitals':
		"Eye-Q Super-Speciality Eye Hospitals est présent à Gurugram et dans l'ensemble du NCR, proposant cataracte, rétine, glaucome et chirurgie LASIK/réfractive au sein d'une chaîne de centres ophtalmologiques dédiés.",

	'medanta-the-medicity':
		"Medanta – The Medicity, à Gurugram, est l'une des plus grandes institutions multi-surspécialisées d'Inde accréditées JCI, un campus de 1 250 lits organisé autour de la cardiologie, de l'oncologie et de la transplantation d'organes, avec une équipe de spécialistes formés à l'international.",
	'fortis-memorial-research-institute-fmri':
		"Fortis Memorial Research Institute (FMRI), à Gurugram, est un hôpital de soins quaternaires de 1 000 lits accrédité JCI, reconnu pour ses programmes avancés d'oncologie, de cardiologie et de chirurgie robotique.",
	'sanar-international-hospitals':
		"Sanar International Hospitals, à Gurugram, est un hôpital multi-spécialités de 200 lits proposant des soins en orthopédie, cardiologie et neurologie, conçu pour les patients indiens et internationaux.",
	'jaypee-hospital':
		"Jaypee Hospital, à Noida, est un hôpital surspécialisé de 1 200 lits avec de solides programmes de cardiologie, d'oncologie et de neurologie au service de la région du Grand Noida et du NCR.",
	'marengo-asia-hospitals':
		"Marengo Asia Hospitals, Faridabad, est un hôpital multi-spécialités de 300 lits proposant des soins en cardiologie, orthopédie et gastro-entérologie, au sein du réseau plus large Marengo Asia à travers l'Inde.",
	'marengo-asia-hospitals-gurugram':
		"Marengo Asia Hospitals, Gurugram, est le fleuron d'un réseau de huit hôpitaux couvrant les sciences cardiaques, les neurosciences et l'orthopédie-prothèses articulaires, avec des programmes de transplantation hépatique et d'oncologie dirigés par des consultants seniors.",
	'fortis-hospital':
		"Fortis Hospital, Noida, est un hôpital multi-spécialités de 200 lits du réseau Fortis proposant des soins en cardiologie, orthopédie et oncologie aux patients de Noida et du NCR.",
	'fortis-hospital-shalimar-bagh':
		"Fortis Hospital, Shalimar Bagh, est un hôpital multi-spécialités de 262 lits au nord de Delhi couvrant la cardiologie, la neurologie et l'orthopédie au sein du groupe Fortis Healthcare.",
	'fortis-hospital-faridabad':
		"Fortis Hospital, Faridabad, est un hôpital multi-spécialités de 200 lits proposant des services de cardiologie, orthopédie et oncologie aux patients de Faridabad et du sud du NCR.",
	'max-hospital':
		"Max Hospital, Gurugram, est un établissement multi-spécialités de 200 lits du groupe Max Healthcare proposant des soins en cardiologie, orthopédie et oncologie au cœur de Gurugram.",
	'max-super-speciality-hospital-vaishali':
		"Max Super Speciality Hospital, Vaishali, est un hôpital de 400 lits à Ghaziabad couvrant la cardiologie, la neurologie et l'orthopédie au sein du réseau Max Healthcare.",
	'max-super-speciality-hospital-noida':
		"Max Super Speciality Hospital, Noida, est un hôpital tertiaire de 400 lits proposant des soins en cardiologie, oncologie et orthopédie aux patients de Noida et de l'est du NCR.",
	'max-super-speciality-hospital-dwarka':
		"Max Super Speciality Hospital, Dwarka, est un hôpital de 300 lits à l'ouest de Delhi proposant des soins en cardiologie, neurologie et orthopédie au sein du groupe Max Healthcare.",
	'max-super-speciality-hospital-shalimar-bagh':
		"Max Super Speciality Hospital, Shalimar Bagh, est un établissement de 400 lits au nord de Delhi proposant cardiologie, oncologie et orthopédie au sein du réseau Max Healthcare.",
	'max-smart-super-speciality-hospital':
		"Max Smart Super Speciality Hospital, à Saket, est un hôpital tertiaire de 300 lits reconnu pour ses programmes de sciences cardiaques, d'oncologie et de chirurgie robotique dans le sud de Delhi.",
	'psri-hospital':
		"PSRI Hospital, à Sheikh Sarai, est un hôpital de 425 lits organisé autour de la gastro-entérologie, de la néphrologie et de la pneumologie, avec une solide réputation en pathologies hépatiques et digestives.",
	'venkateshwar-hospital':
		"Venkateshwar Hospital, à Dwarka, est un hôpital multi-spécialités de 150 lits proposant des services de cardiologie, d'orthopédie et d'oncologie aux patients de l'ouest de Delhi.",
	'primus-super-speciality-hospital':
		"Primus Super Speciality Hospital, à Chanakyapuri, est un hôpital de 200 lits au centre de Delhi proposant des soins en orthopédie, cardiologie et gastro-entérologie à proximité du quartier diplomatique.",
	'ck-birla-hospital':
		"CK Birla Hospital, à Punjabi Bagh, est un hôpital multi-spécialités de 162 lits particulièrement reconnu pour la santé des femmes, ainsi que pour l'orthopédie et la cardiologie.",
	'narayana-hospital':
		"Narayana Hospital, Gurugram, est un établissement multi-spécialités de 190 lits du groupe Narayana Health proposant des soins en cardiologie, oncologie et orthopédie.",
	'asian-institute-of-medical-sciences':
		"Asian Institute of Medical Sciences, à Faridabad, est un hôpital multi-spécialités de 400 lits proposant des services de cardiologie, neurologie et orthopédie à la région de Faridabad.",
	'yatharth-super-speciality-hospital':
		"Yatharth Super Speciality Hospital est présent à Noida et à Greater Noida, proposant des soins en cardiologie, orthopédie et neurologie sur plusieurs sites de l'est du NCR.",
	'yashoda-super-speciality-hospitals':
		"Yashoda Super Speciality Hospitals, à Ghaziabad, est un hôpital de 250 lits proposant des soins en cardiologie, gastro-entérologie et orthopédie aux patients de Ghaziabad et du NCR.",
	'saroj-super-speciality-hospital':
		"Saroj Super Speciality Hospital, à Rohini, est un hôpital de 250 lits au nord-ouest de Delhi proposant des services de cardiologie, orthopédie et neurologie.",
	'aakash-hospital':
		"Aakash Hospital, à Malviya Nagar, est un hôpital multi-spécialités de 100 lits proposant des soins de médecine générale, d'orthopédie et de gynécologie aux patients du sud de Delhi.",
	'sci-international-hospital':
		"SCI International Hospital, à Greater Kailash, est un hôpital de proximité de 50 lits axé sur la fertilité, la gynécologie et la chirurgie générale dans le sud de Delhi.",
	'the-signature-advanced-super-speciality-hospital':
		"The Signature Advanced Super Speciality Hospital, à Gurugram, est un établissement de 100 lits proposant des soins en orthopédie, cardiologie et neurologie aux patients de Gurugram.",

	'sci-ivf-hospital':
		"SCI IVF Hospital, à Greater Kailash-1, est une clinique de fertilité dédiée proposant la FIV et le traitement de la fertilité au sein d'une équipe spécialisée en médecine reproductive.",
	'nova-ivf-fertility':
		"Nova IVF Fertility est présent sur plusieurs sites du NCR, au sein de l'une des plus grandes chaînes de fertilité d'Inde, proposant FIV et traitement de la fertilité selon des protocoles standardisés entre centres.",
	'fortis-ridge-ivf-centre':
		"Fortis Ridge IVF Centre dessert les patients du Delhi NCR avec des soins de FIV et de traitement de la fertilité, soutenus par le groupe Fortis Healthcare.",
	'delhi-ivf-fertility-research-centre':
		"Delhi IVF & Fertility Research Centre, à Mandi House, est une clinique de fertilité de longue date combinant traitement par FIV et programme actif de recherche clinique.",
	'indira-ivf':
		"Indira IVF est présent sur plusieurs sites de Delhi/NCR, au sein de l'un des plus grands réseaux de fertilité d'Inde, proposant des protocoles standardisés de FIV et de traitement de la fertilité.",
	'cloudnine-ivf-centre-kailash-colony':
		"Cloudnine IVF Centre, Kailash Colony, fait partie du groupe de maternité et de fertilité Cloudnine, proposant FIV et traitement de la fertilité aux côtés de services plus larges de santé des femmes.",
	'international-fertility-centre':
		"International Fertility Centre, à Green Park Extension, est une clinique dédiée à la FIV et au traitement de la fertilité, au service de patients indiens et internationaux depuis le sud de Delhi.",
	'laimaa-fertility-ivf-surrogacy-clinic':
		"Laimaa Fertility (IVF & Surrogacy Clinic), à Greater Kailash, propose des programmes de FIV, de traitement de la fertilité et de gestation pour autrui pour les patients en parcours de procréation assistée.",
	'gaudium-ivf':
		"Gaudium IVF, à South Extension-II, est une clinique de fertilité dédiée proposant FIV et traitement de la fertilité au sein d'une équipe spécialisée en médecine reproductive.",
	'pristyn-care-ferticity-super-speciality-ivf-hospital':
		"Pristyn Care Ferticity Super Speciality & IVF Hospital, à Malviya Nagar, combine un programme de fertilité et de FIV avec le réseau chirurgical plus large de Pristyn Care.",
	'nova-ivf-fertility-centre-rajouri-garden':
		"Nova IVF Fertility Centre, Rajouri Garden, est une antenne ouest-delhite du réseau Nova IVF, proposant FIV et traitement de la fertilité selon des protocoles de groupe standardisés.",
	'elixir-fertility-centre':
		"Elixir Fertility Centre, à Gujranwala Town, est une clinique dédiée à la FIV et au traitement de la fertilité au service des patients du nord de Delhi.",
	'femmenest-fertility-ivf-centre':
		"Femmenest Fertility & IVF Centre, à Anand Vihar, propose FIV et traitement de la fertilité aux patients de l'est de Delhi.",
	'india-ivf-clinic':
		"India IVF Clinic, à Vasant Vihar, est une clinique de fertilité dédiée proposant FIV et traitement de la fertilité dans le sud-ouest de Delhi.",
	'she-delhi-ivf-fertility-centre':
		"She Delhi – IVF & Fertility Centre, à Greater Kailash-II, propose FIV et traitement de la fertilité au sein d'une équipe dédiée de médecine reproductive dans le sud de Delhi.",
	'zemya-ivf-fertility-clinics':
		"Zemya IVF & Fertility Clinics, à Green Park Extension, propose FIV et traitement de la fertilité aux patients du sud de Delhi.",

	'kokilaben-dhirubhai-ambani-hospital':
		"Kokilaben Dhirubhai Ambani Hospital est un établissement phare de 750 lits accrédité JCI à Mumbai, reconnu pour ses programmes avancés de cardiologie, d'oncologie et de neurologie et un solide service dédié aux patients internationaux.",
	'p-d-hinduja-hospital':
		"P. D. Hinduja Hospital est une institution de 350 lits accréditée JCI à Mumbai, avec une réputation de longue date en cardiologie, gastro-entérologie et orthopédie.",
	'fortis-hospital-mulund':
		"Fortis Hospital, Mulund, est un hôpital de 345 lits à Mumbai reconnu pour la transplantation d'organes, l'oncologie et la cardiologie, au sein du réseau Fortis Healthcare.",
	'jaslok-hospital':
		"Jaslok Hospital est une institution de 400 lits à Mumbai dotée d'une solide expertise en neurologie, orthopédie et chirurgie générale, parmi les hôpitaux privés les plus établis de la ville.",
	'nanavati-max-super-speciality-hospital':
		"Nanavati Max Super Speciality Hospital est un hôpital de 350 lits à Mumbai proposant des soins en cardiologie, oncologie et orthopédie au sein du groupe Max Healthcare.",

	'apollo-hospitals-greams-road':
		"Apollo Hospitals, Greams Road, est le fleuron accrédité JCI du groupe Apollo Hospitals, une institution de 550 lits à Chennai réputée pour la cardiologie, l'oncologie et la transplantation d'organes.",
	'miot-international':
		"MIOT International est un hôpital de 1 000 lits accrédité JCI à Chennai, particulièrement reconnu en orthopédie, cardiologie et neurologie, avec un important programme dédié aux patients internationaux.",
	'gleneagles-global-health-city':
		"Gleneagles Global Health City, à Chennai, est un hôpital multi-spécialités de 450 lits reconnu pour la transplantation hépatique, la transplantation rénale et l'oncologie.",
	'fortis-malar-hospital':
		"Fortis Malar Hospital, à Chennai, est un hôpital multi-spécialités de 150 lits proposant des soins en cardiologie, orthopédie et traitement de la fertilité.",
	'kauvery-hospital':
		"Kauvery Hospital, à Chennai, est un hôpital surspécialisé de 500 lits proposant des soins en cardiologie, néphrologie et gastro-entérologie au sein d'un réseau croissant en Inde du Sud.",

	'manipal-hospital-old-airport-road':
		"Manipal Hospital, Old Airport Road, est le fleuron de 650 lits de Bangalore accrédité JCI, reconnu pour ses soins en orthopédie, cardiologie et oncologie.",
	'sakra-world-hospital':
		"Sakra World Hospital est un hôpital de 300 lits accrédité JCI à Bangalore, construit selon des normes issues d'une collaboration japonaise, reconnu pour l'orthopédie, la neurologie et la chirurgie robotique.",
	'narayana-institute-of-cardiac-sciences':
		"Narayana Institute of Cardiac Sciences, à Bangalore, est un hôpital cardiaque dédié de 500 lits du groupe Narayana Health, axé sur la cardiologie et la chirurgie cardiaque à grande échelle.",
	'fortis-hospital-bannerghatta-road':
		"Fortis Hospital, Bannerghatta Road, est un hôpital de 400 lits à Bangalore reconnu pour la chirurgie esthétique, l'orthopédie et la cardiologie, au sein du réseau Fortis Healthcare.",
	'aster-cmi-hospital':
		"Aster CMI Hospital, à Bangalore, est un hôpital surspécialisé de 500 lits proposant neurologie, oncologie et transplantation d'organes au sein du groupe Aster DM Healthcare.",

	'apollo-hospitals-jubilee-hills':
		"Apollo Hospitals, Jubilee Hills, est le fleuron accrédité JCI du réseau Apollo à Hyderabad, un hôpital de 500 lits reconnu pour la transplantation d'organes, l'oncologie et la cardiologie.",
	'continental-hospitals':
		"Continental Hospitals, à Hyderabad, est un hôpital de 460 lits accrédité JCI doté de solides programmes de neurologie, d'orthopédie et de transplantation d'organes.",
	'yashoda-hospitals-somajiguda':
		"Yashoda Hospitals, Somajiguda, est un hôpital de 700 lits à Hyderabad proposant des soins en cardiologie, néphrologie et gastro-entérologie, au sein du groupe Yashoda.",
	'global-hospitals-hyderabad':
		"Global Hospitals, Hyderabad, est un hôpital de 500 lits reconnu pour la transplantation hépatique et la transplantation rénale, parmi les centres de transplantation les plus actifs du sud de l'Inde.",
	'kims-hospitals-secunderabad':
		"KIMS Hospitals, Secunderabad, est un hôpital de 1 000 lits proposant des soins en cardiologie, orthopédie et oncologie, l'un des plus grands hôpitaux privés d'Hyderabad.",

	'amrita-institute-of-medical-sciences-kochi':
		"Amrita Institute of Medical Sciences, Kochi, est un hôpital universitaire surspécialisé de 1 300 lits reconnu pour la transplantation d'organes, l'oncologie et la cardiologie.",
	'aster-medcity':
		"Aster Medcity, à Kochi, est un hôpital de 670 lits accrédité JCI proposant cardiologie, fertilité et orthopédie en tant qu'établissement phare du Kerala pour le groupe Aster DM Healthcare.",
	'lakeshore-hospital':
		"Lakeshore Hospital, à Kochi, est un hôpital multi-spécialités de 400 lits reconnu pour la gastro-entérologie, la néphrologie et la cardiologie.",
	'kims-health-kochi':
		"KIMS Health, Kochi, est un hôpital de 500 lits proposant des programmes de fertilité, de santé des femmes et d'ayurveda et bien-être, aux côtés de soins multi-spécialités plus larges.",

	'apollo-multispeciality-hospitals-kolkata':
		"Apollo Multispeciality Hospitals, Kolkata, est un hôpital de 570 lits accrédité JCI reconnu pour l'oncologie, la cardiologie et les soins oculaires, au sein du groupe Apollo Hospitals.",
	'amri-hospitals-dhakuria':
		"AMRI Hospitals, Dhakuria, est un hôpital de 200 lits à Kolkata proposant des soins en cardiologie, orthopédie et neurologie au sein du réseau AMRI.",
	'fortis-hospital-anandapur':
		"Fortis Hospital, Anandapur, à Kolkata, est un hôpital multi-spécialités de 300 lits proposant des soins en oncologie, cardiologie et orthopédie au sein du groupe Fortis Healthcare.",
	'medica-superspecialty-hospital':
		"Medica Superspecialty Hospital, à Kolkata, est un hôpital de 400 lits reconnu pour les soins oculaires, l'oncologie et la néphrologie.",

	'zydus-hospitals':
		"Zydus Hospitals, à Ahmedabad, est un hôpital surspécialisé de 450 lits reconnu pour la transplantation hépatique, la transplantation rénale et la cardiologie.",
	'cims-hospital':
		"CIMS Hospital, à Ahmedabad, est un hôpital de 250 lits accrédité JCI spécialisé en cardiologie, chirurgie cardiaque et neurologie.",
	'sterling-hospital':
		"Sterling Hospital, à Ahmedabad, est un hôpital multi-spécialités de 200 lits proposant transplantation rénale, orthopédie et oncologie.",
	'shalby-hospitals':
		"Shalby Hospitals, à Ahmedabad, est un hôpital surspécialisé de 300 lits reconnu pour l'orthopédie, la cardiologie et l'oncologie, au sein du groupe Shalby, réputé au niveau national pour la chirurgie de remplacement articulaire.",
};

const unitsMap = { Beds: 'Lits', Bed: 'Lit', Locations: 'Sites', Location: 'Site' };

function translateBeds(beds: string): string {
	if (bedsPhrases[beds]) return bedsPhrases[beds];
	return beds
		.replace(/\bBeds\b/, unitsMap.Beds)
		.replace(/\bBed\b/, unitsMap.Bed)
		.replace(/\bLocations\b/, unitsMap.Locations)
		.replace(/\bLocation\b/, unitsMap.Location);
}

export const translateHospital = (hospital: HospitalData): HospitalData => {
	const name = localizeHospitalName(hospital, 'fr');
	const about = (aboutMap[hospital.slug] ?? hospital.about).split(hospital.name).join(name);
	return {
		...hospital,
		name,
		city: localizeCity(hospital.city, 'fr'),
		about,
		country: countryMap[hospital.country] ?? hospital.country,
		accreditation: accreditationMap[hospital.accreditation] ?? hospital.accreditation,
		specialties: hospital.specialties.map((specialty) => specialtyMap[specialty] ?? specialty),
		beds: translateBeds(hospital.beds),
	};
};

export const translateHospitals = (list: HospitalData[]): HospitalData[] => list.map(translateHospital);
