import type { HospitalData } from '../data/hospitals';
import { localizeCity, localizeHospitalName } from './hospitalNames';

/**
 * Field-level Russian translations for hospital cards (OurPartnerHospitals).
 * Hospital and city names are proper nouns and stay as-is; accreditation,
 * specialties, bed counts, and country are translated via lookup.
 */

const countryMap: Record<string, string> = {
	India: 'Индия',
};

const accreditationMap: Record<string, string> = {
	'Super Specialty Hospital': 'Больница высшей специализации',
	'Multi Specialty Hospital': 'Многопрофильная больница',
	'JCI Accredited': 'Аккредитация JCI',
	'Comprehensive & Multi Specialty Dental Clinic': 'Многопрофильная стоматологическая клиника',
	'Comprehensive & Super Specialty Eye Hospital': 'Многопрофильная офтальмологическая больница высшей специализации',
	'Fertility & IVF Center': 'Центр репродукции и ЭКО',
	'Multi Specialty Eye Hospital': 'Многопрофильная офтальмологическая больница',
	'Super Specialty Eye Hospital': 'Офтальмологическая больница высшей специализации',
};

const specialtyMap: Record<string, string> = {
	Cardiology: 'Кардиология',
	Oncology: 'Онкология',
	Orthopedics: 'Ортопедия',
	Orthopaedics: 'Ортопедия',
	Neurology: 'Неврология',
	'Cosmetic Surgery': 'Пластическая хирургия',
	Fertility: 'Лечение бесплодия',
	'Reproductive Health': 'Репродуктивное здоровье',
	Gynecology: 'Гинекология',
	Gynaecology: 'Гинекология',
	Obstetrics: 'Акушерство',
	'Obstetrics and Gynaecology': 'Акушерство и гинекология',
	Pulmonology: 'Пульмонология',
	Pediatrics: 'Педиатрия',
	'General Medicine': 'Терапия',
	Gastroenterology: 'Гастроэнтерология',
	Urology: 'Урология',
	Nephrology: 'Нефрология',
	'General Surgery': 'Общая хирургия',
	'Organ Transplant': 'Трансплантация органов',
	'Liver Transplant': 'Трансплантация печени',
	'Kidney Transplant': 'Трансплантация почки',
	Hematology: 'Гематология',
	'Robotic Surgery': 'Роботизированная хирургия',
	'Cardiac Surgery': 'Кардиохирургия',
	'Cardiac Sciences': 'Кардиология',
	Neurosciences: 'Неврология',
	'Eye Care': 'Офтальмология',
	"Women's Health": 'Женское здоровье',
	'Ayurveda & Wellness': 'Аюрведа и оздоровление',
	Cataract: 'Катаракта',
	'Comprehensive Ophthalmology': 'Комплексная офтальмология',
	Cornea: 'Роговица',
	'Cornea Transplant': 'Пересадка роговицы',
	'Cosmetic Dentistry': 'Эстетическая стоматология',
	'Diabetic Retinopathy': 'Диабетическая ретинопатия',
	'Emergency Care': 'Неотложная помощь',
	'Fertility Treatment': 'Лечение бесплодия',
	'General Dentistry': 'Общая стоматология',
	Glaucoma: 'Глаукома',
	ICL: 'ICL (имплантируемая линза)',
	IVF: 'ЭКО',
	'Implants Dentistry': 'Имплантология',
	'Internal Medicine': 'Терапия',
	LASIK: 'ЛАСИК',
	'LASIK/Refractive Surgery': 'ЛАСИК / рефракционная хирургия',
	'LASIK/SMILE': 'ЛАСИК / SMILE',
	Orthodontics: 'Ортодонтия',
	'Orthopaedics & Joint Replacement': 'Ортопедия и эндопротезирование суставов',
	'Refractive Surgery': 'Рефракционная хирургия',
	Retina: 'Сетчатка',
	'Super-Speciality & Complex Eye Care': 'Высшая специализация и сложные случаи в офтальмологии',
	Surrogacy: 'Суррогатное материнство',
};

const bedsPhrases: Record<string, string> = {
	'Fertility Clinic': 'Клиника репродукции',
	'Multiple Locations': 'Несколько филиалов',
	'Multiple NCR Locations': 'Несколько филиалов в NCR',
	'Single Center': 'Один центр',
};

const aboutMap: Record<string, string> = {
	'spruce-dental-chain-of-clinics':
		"Spruce Dental Chain of Clinics в Гургаоне — практика дентальной имплантологии и ортодонтии, специализирующаяся на малоинвазивной установке имплантов и полном восстановлении зубов за один визит для иностранных пациентов.",
	'spruce-dental':
		"Spruce Dental в Джасола-Вихаре предлагает комплексную стоматологическую помощь и лечение корневых каналов (RCT) пациентам из западного Дели.",
	'moolchand-hospital':
		'Moolchand Hospital — одна из старейших больниц высшей специализации на юге Дели: кампус на 1000 коек в районе Ладжпат Нагар охватывает кардиологию, онкологию и ортопедию, а также круглосуточную неотложную и травматологическую помощь.',
	'fortis-c-doc-hospital':
		'Fortis C-DOC Hospital — центр, специализирующийся на диабете и связанной с ним кардиологической и неврологической помощи в Дели, входящий в сеть Fortis; занимается долгосрочным лечением метаболических заболеваний наряду с кардиологией и неврологией.',
	'fortis-escorts-heart-institute':
		'Fortis Escorts Heart Institute в районе Окхла — один из самых известных кардиологических центров Индии: кампус на 310 коек, специализирующийся на передовой кардиохирургии, интервенционной кардиологии, онкологии и гематологии.',
	'fortis-flt-lt-rajan-dhall-hospital':
		'Fortis Flt. Lt. Rajan Dhall Hospital в районе Васант Кундж — многопрофильная больница сети Fortis на 162 койки, известная своими программами пластической хирургии и кардиологии для индийских и иностранных пациентов.',
	'blk-max-super-speciality-hospital':
		'BLK-Max Super Speciality Hospital — многопрофильная больница третичного уровня на 650 коек в центре Дели, особенно известная в области неврологии и ортопедии, с передовой диагностикой и большим отделением интенсивной терапии.',
	'artemis-hospital':
		'Artemis Hospital в Гургаоне — многопрофильная больница на 750 коек, особенно известная лечением бесплодия и вопросами репродуктивного здоровья, наряду с широким спектром хирургических и терапевтических направлений.',
	'max-super-speciality-hospital-saket':
		'Max Super Speciality Hospital в районе Сакет — больница третичного уровня на 539 коек, известная своей программой гинекологии и акушерства, входящая в сеть больниц высшей специализации Max в Дели NCR.',
	'indraprastha-apollo-hospitals':
		'Indraprastha Apollo Hospitals в Дели — флагманское учреждение группы Apollo с отдельной программой лечения бесплодия и репродуктивного здоровья, опирающееся на более широкую многопрофильную и диагностическую инфраструктуру группы.',
	'apollo-spectra-hospitals':
		'Apollo Spectra Hospitals в Дели — хирургическая больница с высокой пропускной способностью, охватывающая пульмонологию, педиатрию, терапию и гастроэнтерологию, рассчитанная на быстрые амбулаторные операции и короткое пребывание в стационаре.',
	'batra-hospital-medical-research-centre':
		'Batra Hospital & Medical Research Centre в районе Тугхлакабад — учебная больница на 490 коек, оказывающая помощь в пульмонологии, педиатрии, терапии и гастроэнтерологии, с активной программой последипломных исследований.',
	'aakash-healthcare-super-speciality-hospital':
		'Aakash Healthcare Super Speciality Hospital в районе Дварка — центр на 230 коек, специализирующийся на урологии, нефрологии и онкологии, с отдельными возможностями роботизированной и малоинвазивной хирургии.',
	'manipal-hospital-dwarka':
		'Manipal Hospital, Dwarka — учреждение высшей специализации на 240 коек группы Manipal, предлагающее кардиологию, неврологию и акушерство-гинекологию пациентам из западного Дели и Гургаона.',
	'sir-ganga-ram-hospital':
		'Sir Ganga Ram Hospital — одна из старейших и крупнейших частных больниц Дели: учреждение на 900 коек в районе Раджиндер Нагар, охватывающее ортопедию, общую хирургию, терапию и кардиологию.',
	'amrita-hospital':
		'Amrita Hospital в Фаридабаде — одна из крупнейших частных больниц Индии: кампус на 2600 коек, предлагающий акушерство-гинекологию, гастроэнтерологию и урологию наряду с десятками других направлений.',
	'metro-heart-institute-with-multispeciality':
		'Metro Heart Institute with Multispeciality в Фаридабаде — больница на 200 коек, специализирующаяся на кардиологии, с растущим спектром многопрофильных услуг для региона Фаридабад.',

	'the-sight-avenue':
		'The Sight Avenue работает в районе Greater Kailash (Дели) и в секторе 38 Гургаона, предлагая комплексную офтальмологическую помощь: сетчатка, роговица, катаракта, ЛАСИК/SMILE, ICL и глаукома в рамках одной команды.',
	'shroff-eye-centre':
		'Shroff Eye Centre работает на трёх площадках — в Kailash Colony, Connaught Place и Гургаоне, — обладая солидной репутацией в пересадке роговицы, лечении сетчатки, катаракты, глаукомы и ЛАСИК.',
	'eye7-hospitals':
		'Eye7 Hospitals работает в районах Ладжпат Нагар и Джанакпури в Дели, предлагая помощь при заболеваниях сетчатки, катаракты, ЛАСИК, роговицы и глаукомы в рамках отдельной многопрофильной офтальмологической больницы.',
	'sharp-sight-eye-hospitals':
		'Sharp Sight Eye Hospitals управляет сетью клиник в районе Прит Вихар и других частях Дели-NCR, специализируясь на сетчатке, катаракте, глаукоме, ЛАСИК и диабетической ретинопатии.',
	'venu-eye-institute-research-centre':
		'Venu Eye Institute & Research Centre в районе Шейх Сарай (южный Дели) — офтальмологическая больница высшей специализации, известная сложными случаями, лечением сетчатки, роговицы и глаукомы, с активной исследовательской программой.',
	'guru-nanak-eye-centre':
		'Guru Nanak Eye Centre в центре Дели — многопрофильная офтальмологическая больница высшей специализации, предлагающая офтальмологию, лечение сетчатки, роговицы, глаукомы и круглосуточную неотложную офтальмологическую помощь.',
	'shining-smile-dentistry':
		'Shining Smile Dentistry в районе Сакет (Нью-Дели) — стоматологическая клиника полного цикла, предлагающая общую и эстетическую стоматологию, ортодонтию, имплантацию и неотложную стоматологическую помощь.',
	'dr-agarwal-s-eye-hospital':
		"Dr Agarwal's Eye Hospital работает на нескольких площадках в Дели-NCR, входя в одну из крупнейших офтальмологических сетей Индии, предлагая катаракту, сетчатку, роговицу, глаукому и ЛАСИК/рефракционную хирургию.",
	'asg-eye-hospital':
		'ASG Eye Hospital управляет центрами в Нойде и других районах NCR, предлагая катаракту, сетчатку, роговицу, глаукому и рефракционную хирургию в рамках общенациональной офтальмологической сети.',
	'eye-q-super-speciality-eye-hospitals':
		'Eye-Q Super-Speciality Eye Hospitals работает в Гургаоне и по всему NCR, предлагая катаракту, сетчатку, глаукому и ЛАСИК/рефракционную хирургию в сети специализированных офтальмологических центров.',

	'medanta-the-medicity':
		'Medanta – The Medicity в Гургаоне — одно из крупнейших многопрофильных учреждений высшей специализации Индии с аккредитацией JCI: кампус на 1250 коек, организованный вокруг кардиологии, онкологии и трансплантации органов, с командой специалистов международного уровня подготовки.',
	'fortis-memorial-research-institute-fmri':
		'Fortis Memorial Research Institute (FMRI) в Гургаоне — больница четвертичной помощи на 1000 коек с аккредитацией JCI, известная передовыми программами онкологии, кардиологии и роботизированной хирургии.',
	'sanar-international-hospitals':
		'Sanar International Hospitals в Гургаоне — многопрофильная больница на 200 коек, предлагающая помощь в ортопедии, кардиологии и неврологии, рассчитанная на индийских и иностранных пациентов.',
	'jaypee-hospital':
		'Jaypee Hospital в Нойде — больница высшей специализации на 1200 коек с сильными программами кардиологии, онкологии и неврологии, обслуживающая регион Большой Нойды и NCR.',
	'marengo-asia-hospitals':
		'Marengo Asia Hospitals, Фаридабад — многопрофильная больница на 300 коек, предлагающая помощь в кардиологии, ортопедии и гастроэнтерологии, входящая в более широкую сеть Marengo Asia по всей Индии.',
	'marengo-asia-hospitals-gurugram':
		'Marengo Asia Hospitals, Гургаон — флагман сети из восьми больниц, охватывающей кардиологию, неврологию и ортопедию с эндопротезированием суставов, с программами трансплантации печени и онкологии под руководством старших консультантов.',
	'fortis-hospital':
		'Fortis Hospital, Нойда — многопрофильная больница на 200 коек сети Fortis, предлагающая помощь в кардиологии, ортопедии и онкологии пациентам из Нойды и NCR.',
	'fortis-hospital-shalimar-bagh':
		'Fortis Hospital, Shalimar Bagh — многопрофильная больница на 262 койки на севере Дели, охватывающая кардиологию, неврологию и ортопедию в составе группы Fortis Healthcare.',
	'fortis-hospital-faridabad':
		'Fortis Hospital, Фаридабад — многопрофильная больница на 200 коек, предлагающая услуги кардиологии, ортопедии и онкологии пациентам из Фаридабада и южной части NCR.',
	'max-hospital':
		'Max Hospital, Гургаон — многопрофильное учреждение на 200 коек группы Max Healthcare, предлагающее помощь в кардиологии, ортопедии и онкологии в центре Гургаона.',
	'max-super-speciality-hospital-vaishali':
		'Max Super Speciality Hospital, Vaishali — больница на 400 коек в Газиабаде, охватывающая кардиологию, неврологию и ортопедию в составе сети Max Healthcare.',
	'max-super-speciality-hospital-noida':
		'Max Super Speciality Hospital, Нойда — больница третичного уровня на 400 коек, предлагающая помощь в кардиологии, онкологии и ортопедии пациентам из Нойды и восточной части NCR.',
	'max-super-speciality-hospital-dwarka':
		'Max Super Speciality Hospital, Dwarka — больница на 300 коек в западном Дели, предлагающая помощь в кардиологии, неврологии и ортопедии в составе группы Max Healthcare.',
	'max-super-speciality-hospital-shalimar-bagh':
		'Max Super Speciality Hospital, Shalimar Bagh — учреждение на 400 коек на севере Дели, предлагающее кардиологию, онкологию и ортопедию в составе сети Max Healthcare.',
	'max-smart-super-speciality-hospital':
		'Max Smart Super Speciality Hospital в районе Сакет — больница третичного уровня на 300 коек, известная программами кардиологии, онкологии и роботизированной хирургии на юге Дели.',
	'psri-hospital':
		'PSRI Hospital в районе Шейх Сарай — больница на 425 коек, организованная вокруг гастроэнтерологии, нефрологии и пульмонологии, с солидной репутацией в лечении заболеваний печени и пищеварительной системы.',
	'venkateshwar-hospital':
		'Venkateshwar Hospital в районе Дварка — многопрофильная больница на 150 коек, предлагающая услуги кардиологии, ортопедии и онкологии пациентам из западного Дели.',
	'primus-super-speciality-hospital':
		'Primus Super Speciality Hospital в районе Чанакьяпури — больница на 200 коек в центре Дели, предлагающая помощь в ортопедии, кардиологии и гастроэнтерологии рядом с дипломатическим кварталом.',
	'ck-birla-hospital':
		'CK Birla Hospital в районе Пенджаби Багх — многопрофильная больница на 162 койки, особенно известная в области женского здоровья, наряду с ортопедией и кардиологией.',
	'narayana-hospital':
		'Narayana Hospital, Гургаон — многопрофильное учреждение на 190 коек группы Narayana Health, предлагающее помощь в кардиологии, онкологии и ортопедии.',
	'asian-institute-of-medical-sciences':
		'Asian Institute of Medical Sciences в Фаридабаде — многопрофильная больница на 400 коек, предлагающая услуги кардиологии, неврологии и ортопедии региону Фаридабад.',
	'yatharth-super-speciality-hospital':
		'Yatharth Super Speciality Hospital работает в Нойде и Большой Нойде, предлагая помощь в кардиологии, ортопедии и неврологии на нескольких площадках восточной части NCR.',
	'yashoda-super-speciality-hospitals':
		'Yashoda Super Speciality Hospitals в Газиабаде — больница на 250 коек, предлагающая помощь в кардиологии, гастроэнтерологии и ортопедии пациентам из Газиабада и NCR.',
	'saroj-super-speciality-hospital':
		'Saroj Super Speciality Hospital в районе Рохини — больница на 250 коек на северо-западе Дели, предлагающая услуги кардиологии, ортопедии и неврологии.',
	'aakash-hospital':
		'Aakash Hospital в районе Малвия Нагар — многопрофильная больница на 100 коек, предлагающая терапию, ортопедию и гинекологию пациентам южного Дели.',
	'sci-international-hospital':
		'SCI International Hospital в районе Greater Kailash — небольшая больница на 50 коек, специализирующаяся на лечении бесплодия, гинекологии и общей хирургии на юге Дели.',
	'the-signature-advanced-super-speciality-hospital':
		'The Signature Advanced Super Speciality Hospital в Гургаоне — учреждение на 100 коек, предлагающее помощь в ортопедии, кардиологии и неврологии пациентам Гургаона.',

	'sci-ivf-hospital':
		'SCI IVF Hospital в районе Greater Kailash-1 — специализированная клиника репродукции, предлагающая ЭКО и лечение бесплодия силами команды специалистов по репродуктивной медицине.',
	'nova-ivf-fertility':
		'Nova IVF Fertility работает на нескольких площадках NCR, входя в одну из крупнейших сетей репродуктивной медицины Индии, предлагая ЭКО и лечение бесплодия по стандартизированным протоколам во всех центрах.',
	'fortis-ridge-ivf-centre':
		'Fortis Ridge IVF Centre обслуживает пациентов Дели NCR, предлагая ЭКО и лечение бесплодия при поддержке группы Fortis Healthcare.',
	'delhi-ivf-fertility-research-centre':
		'Delhi IVF & Fertility Research Centre в районе Манди Хаус — давно работающая клиника репродукции, сочетающая лечение методом ЭКО с активной программой клинических исследований.',
	'indira-ivf':
		'Indira IVF работает на нескольких площадках Дели/NCR, входя в одну из крупнейших сетей репродуктивной медицины Индии, предлагая стандартизированные протоколы ЭКО и лечения бесплодия.',
	'cloudnine-ivf-centre-kailash-colony':
		'Cloudnine IVF Centre, Kailash Colony входит в группу материнства и репродукции Cloudnine, предлагая ЭКО и лечение бесплодия наряду с более широкими услугами женского здоровья.',
	'international-fertility-centre':
		'International Fertility Centre в районе Green Park Extension — специализированная клиника ЭКО и лечения бесплодия, обслуживающая индийских и иностранных пациентов с юга Дели.',
	'laimaa-fertility-ivf-surrogacy-clinic':
		'Laimaa Fertility (IVF & Surrogacy Clinic) в районе Greater Kailash предлагает программы ЭКО, лечения бесплодия и суррогатного материнства для пациентов, проходящих процедуры вспомогательной репродукции.',
	'gaudium-ivf':
		'Gaudium IVF в районе South Extension-II — специализированная клиника репродукции, предлагающая ЭКО и лечение бесплодия силами команды специалистов по репродуктивной медицине.',
	'pristyn-care-ferticity-super-speciality-ivf-hospital':
		'Pristyn Care Ferticity Super Speciality & IVF Hospital в районе Малвия Нагар сочетает программу репродукции и ЭКО с более широкой хирургической сетью Pristyn Care.',
	'nova-ivf-fertility-centre-rajouri-garden':
		'Nova IVF Fertility Centre, Rajouri Garden — филиал сети Nova IVF в западном Дели, предлагающий ЭКО и лечение бесплодия по стандартизированным протоколам сети.',
	'elixir-fertility-centre':
		'Elixir Fertility Centre в районе Гуджранвала Таун — специализированная клиника ЭКО и лечения бесплодия, обслуживающая пациентов северного Дели.',
	'femmenest-fertility-ivf-centre':
		'Femmenest Fertility & IVF Centre в районе Ананд Вихар предлагает ЭКО и лечение бесплодия пациентам восточного Дели.',
	'india-ivf-clinic':
		'India IVF Clinic в районе Васант Вихар — специализированная клиника репродукции, предлагающая ЭКО и лечение бесплодия на юго-западе Дели.',
	'she-delhi-ivf-fertility-centre':
		'She Delhi – IVF & Fertility Centre в районе Greater Kailash-II предлагает ЭКО и лечение бесплодия силами специализированной команды репродуктивной медицины на юге Дели.',
	'zemya-ivf-fertility-clinics':
		'Zemya IVF & Fertility Clinics в районе Green Park Extension предлагает ЭКО и лечение бесплодия пациентам южного Дели.',

	'kokilaben-dhirubhai-ambani-hospital':
		'Kokilaben Dhirubhai Ambani Hospital — флагманская больница на 750 коек с аккредитацией JCI в Мумбаи, известная передовыми программами кардиологии, онкологии и неврологии и развитой службой для иностранных пациентов.',
	'p-d-hinduja-hospital':
		'P. D. Hinduja Hospital — учреждение на 350 коек с аккредитацией JCI в Мумбаи, обладающее давней репутацией в кардиологии, гастроэнтерологии и ортопедии.',
	'fortis-hospital-mulund':
		'Fortis Hospital, Mulund — больница на 345 коек в Мумбаи, известная трансплантацией органов, онкологией и кардиологией, в составе сети Fortis Healthcare.',
	'jaslok-hospital':
		'Jaslok Hospital — учреждение на 400 коек в Мумбаи с сильной экспертизой в неврологии, ортопедии и общей хирургии, одна из самых авторитетных частных больниц города.',
	'nanavati-max-super-speciality-hospital':
		'Nanavati Max Super Speciality Hospital — больница на 350 коек в Мумбаи, предлагающая помощь в кардиологии, онкологии и ортопедии в составе группы Max Healthcare.',

	'apollo-hospitals-greams-road':
		'Apollo Hospitals, Greams Road — флагманское учреждение группы Apollo Hospitals с аккредитацией JCI: институт на 550 коек в Ченнаи, известный кардиологией, онкологией и трансплантацией органов.',
	'miot-international':
		'MIOT International — больница на 1000 коек с аккредитацией JCI в Ченнаи, особенно известная в ортопедии, кардиологии и неврологии, с крупной программой для иностранных пациентов.',
	'gleneagles-global-health-city':
		'Gleneagles Global Health City в Ченнаи — многопрофильная больница на 450 коек, известная трансплантацией печени, трансплантацией почки и онкологией.',
	'fortis-malar-hospital':
		'Fortis Malar Hospital в Ченнаи — многопрофильная больница на 150 коек, предлагающая помощь в кардиологии, ортопедии и лечении бесплодия.',
	'kauvery-hospital':
		'Kauvery Hospital в Ченнаи — больница высшей специализации на 500 коек, предлагающая помощь в кардиологии, нефрологии и гастроэнтерологии в составе растущей сети на юге Индии.',

	'manipal-hospital-old-airport-road':
		'Manipal Hospital, Old Airport Road — флагманское учреждение Бангалора на 650 коек с аккредитацией JCI, известное помощью в ортопедии, кардиологии и онкологии.',
	'sakra-world-hospital':
		'Sakra World Hospital — больница на 300 коек с аккредитацией JCI в Бангалоре, построенная по стандартам японского сотрудничества, известная ортопедией, неврологией и роботизированной хирургией.',
	'narayana-institute-of-cardiac-sciences':
		'Narayana Institute of Cardiac Sciences в Бангалоре — специализированная кардиологическая больница на 500 коек группы Narayana Health, сфокусированная на кардиологии и кардиохирургии в большом объёме.',
	'fortis-hospital-bannerghatta-road':
		'Fortis Hospital, Bannerghatta Road — больница на 400 коек в Бангалоре, известная пластической хирургией, ортопедией и кардиологией, в составе сети Fortis Healthcare.',
	'aster-cmi-hospital':
		'Aster CMI Hospital в Бангалоре — больница высшей специализации на 500 коек, предлагающая неврологию, онкологию и трансплантацию органов в составе группы Aster DM Healthcare.',

	'apollo-hospitals-jubilee-hills':
		'Apollo Hospitals, Jubilee Hills — флагманское учреждение сети Apollo в Хайдарабаде с аккредитацией JCI: больница на 500 коек, известная трансплантацией органов, онкологией и кардиологией.',
	'continental-hospitals':
		'Continental Hospitals в Хайдарабаде — больница на 460 коек с аккредитацией JCI, обладающая сильными программами неврологии, ортопедии и трансплантации органов.',
	'yashoda-hospitals-somajiguda':
		'Yashoda Hospitals, Somajiguda — больница на 700 коек в Хайдарабаде, предлагающая помощь в кардиологии, нефрологии и гастроэнтерологии в составе группы Yashoda.',
	'global-hospitals-hyderabad':
		'Global Hospitals, Hyderabad — больница на 500 коек, известная трансплантацией печени и трансплантацией почки, один из самых активных центров трансплантации на юге Индии.',
	'kims-hospitals-secunderabad':
		'KIMS Hospitals, Secunderabad — больница на 1000 коек, предлагающая помощь в кардиологии, ортопедии и онкологии, одна из крупнейших частных больниц Хайдарабада.',

	'amrita-institute-of-medical-sciences-kochi':
		'Amrita Institute of Medical Sciences, Kochi — университетская больница высшей специализации на 1300 коек, известная трансплантацией органов, онкологией и кардиологией.',
	'aster-medcity':
		'Aster Medcity в Кочи — больница на 670 коек с аккредитацией JCI, предлагающая кардиологию, лечение бесплодия и ортопедию как флагманское учреждение группы Aster DM Healthcare в Керале.',
	'lakeshore-hospital':
		'Lakeshore Hospital в Кочи — многопрофильная больница на 400 коек, известная гастроэнтерологией, нефрологией и кардиологией.',
	'kims-health-kochi':
		'KIMS Health, Kochi — больница на 500 коек, предлагающая программы лечения бесплодия, женского здоровья и аюрведы наряду с более широкой многопрофильной помощью.',

	'apollo-multispeciality-hospitals-kolkata':
		'Apollo Multispeciality Hospitals, Kolkata — больница на 570 коек с аккредитацией JCI, известная онкологией, кардиологией и офтальмологией, в составе группы Apollo Hospitals.',
	'amri-hospitals-dhakuria':
		'AMRI Hospitals, Dhakuria — больница на 200 коек в Калькутте, предлагающая помощь в кардиологии, ортопедии и неврологии в составе сети AMRI.',
	'fortis-hospital-anandapur':
		'Fortis Hospital, Anandapur в Калькутте — многопрофильная больница на 300 коек, предлагающая помощь в онкологии, кардиологии и ортопедии в составе группы Fortis Healthcare.',
	'medica-superspecialty-hospital':
		'Medica Superspecialty Hospital в Калькутте — больница на 400 коек, известная офтальмологией, онкологией и нефрологией.',

	'zydus-hospitals':
		'Zydus Hospitals в Ахмедабаде — больница высшей специализации на 450 коек, известная трансплантацией печени, трансплантацией почки и кардиологией.',
	'cims-hospital':
		'CIMS Hospital в Ахмедабаде — больница на 250 коек с аккредитацией JCI, специализирующаяся на кардиологии, кардиохирургии и неврологии.',
	'sterling-hospital':
		'Sterling Hospital в Ахмедабаде — многопрофильная больница на 200 коек, предлагающая трансплантацию почки, ортопедию и онкологию.',
	'shalby-hospitals':
		'Shalby Hospitals в Ахмедабаде — больница высшей специализации на 300 коек, известная ортопедией, кардиологией и онкологией, в составе группы Shalby, признанной на национальном уровне в области эндопротезирования суставов.',
};

function translateBeds(beds: string): string {
	if (bedsPhrases[beds]) return bedsPhrases[beds];
	return beds.replace(/\bBeds\b/, 'коек').replace(/\bBed\b/, 'койка').replace(/\bLocations\b/, 'филиалов').replace(/\bLocation\b/, 'филиал');
}

export const translateHospital = (hospital: HospitalData): HospitalData => {
	const name = localizeHospitalName(hospital, 'ru');
	const about = (aboutMap[hospital.slug] ?? hospital.about).split(hospital.name).join(name);
	return {
		...hospital,
		name,
		city: localizeCity(hospital.city, 'ru'),
		about,
		country: countryMap[hospital.country] ?? hospital.country,
		accreditation: accreditationMap[hospital.accreditation] ?? hospital.accreditation,
		specialties: hospital.specialties.map((specialty) => specialtyMap[specialty] ?? specialty),
		beds: translateBeds(hospital.beds),
	};
};

export const translateHospitals = (list: HospitalData[]): HospitalData[] => list.map(translateHospital);
