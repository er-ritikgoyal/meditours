/**
 * Localised hospital names, city labels and detail-page labels.
 *
 * - ru / bn / ar: every hospital name is written out per slug (transliterated
 *   brands + translated generic words).
 * - fr / es / pt / ro / vi: brand names stay as officially written; only the
 *   generic word "Hospital(s)" is translated and moved to the front, as those
 *   languages normally do ("Hôpital Fortis").
 */
import type { HospitalData } from '../data/hospitals';

export type HospitalLocale = 'fr' | 'es' | 'pt' | 'ro' | 'ru' | 'bn' | 'vi' | 'ar';

// slug -> [ru, bn, ar]
const names: Record<string, [string, string, string]> = {
	'moolchand-hospital': ['Больница Мулчанд', 'মূলচাঁদ হাসপাতাল', 'مستشفى مولتشاند'],
	'fortis-c-doc-hospital': ['Больница Фортис C-DOC', 'ফোর্টিস সি-ডক হাসপাতাল', 'مستشفى فورتيس C-DOC'],
	'fortis-escorts-heart-institute': ['Институт сердца Фортис Эскортс', 'ফোর্টিস এসকর্টস হার্ট ইনস্টিটিউট', 'معهد فورتيس إسكورتس للقلب'],
	'fortis-flt-lt-rajan-dhall-hospital': [
		'Больница Фортис имени флайт-лейтенанта Раджана Дхалла',
		'ফোর্টিস ফ্লাইট লেফটেন্যান্ট রাজন ধল হাসপাতাল',
		'مستشفى فورتيس الملازم أول راجان دهال',
	],
	'blk-max-super-speciality-hospital': ['Больница высшей специализации BLK-Max', 'বিএলকে-ম্যাক্স সুপার স্পেশালিটি হাসপাতাল', 'مستشفى BLK-Max التخصصي الفائق'],
	'artemis-hospital': ['Больница Артемис', 'আর্টেমিস হাসপাতাল', 'مستشفى أرتميس'],
	'max-super-speciality-hospital-saket': [
		'Больница высшей специализации Макс, Сакет',
		'ম্যাক্স সুপার স্পেশালিটি হাসপাতাল, সাকেত',
		'مستشفى ماكس التخصصي الفائق، ساكيت',
	],
	'indraprastha-apollo-hospitals': ['Больницы Индрапрастха Аполло', 'ইন্দ্রপ্রস্থ অ্যাপোলো হাসপাতালস', 'مستشفيات إندرابراسثا أبولو'],
	'apollo-spectra-hospitals': ['Больницы Аполло Спектра', 'অ্যাপোলো স্পেক্ট্রা হাসপাতালস', 'مستشفيات أبولو سبيكترا'],
	'batra-hospital-medical-research-centre': [
		'Больница и медицинский исследовательский центр Батра',
		'বাত্রা হাসপাতাল ও মেডিক্যাল রিসার্চ সেন্টার',
		'مستشفى ومركز باترا للأبحاث الطبية',
	],
	'aakash-healthcare-super-speciality-hospital': [
		'Больница высшей специализации Акаш Хелскеа',
		'আকাশ হেলথকেয়ার সুপার স্পেশালিটি হাসপাতাল',
		'مستشفى أكاش هيلثكير التخصصي الفائق',
	],
	'manipal-hospital-dwarka': ['Больница Манипал, Дварка', 'মণিপাল হাসপাতাল, দ্বারকা', 'مستشفى مانيبال، دواركا'],
	'sir-ganga-ram-hospital': ['Больница сэра Ганга Рама', 'স্যার গঙ্গারাম হাসপাতাল', 'مستشفى السير غانغا رام'],
	'amrita-hospital': ['Больница Амрита', 'অমৃতা হাসপাতাল', 'مستشفى أمريتا'],
	'metro-heart-institute-with-multispeciality': [
		'Институт сердца Метро (многопрофильный)',
		'মেট্রো হার্ট ইনস্টিটিউট (মাল্টিস্পেশালিটি)',
		'معهد ميترو للقلب متعدد التخصصات',
	],
	'the-sight-avenue': ['Сайт Авеню', 'দ্য সাইট অ্যাভিনিউ', 'ذا سايت أفينيو'],
	'shroff-eye-centre': ['Глазной центр Шрофф', 'শ্রফ আই সেন্টার', 'مركز شروف للعيون'],
	'eye7-hospitals': ['Больницы Eye7', 'আই৭ হাসপাতালস', 'مستشفيات Eye7'],
	'sharp-sight-eye-hospitals': ['Глазные больницы Шарп Сайт', 'শার্প সাইট আই হাসপাতালস', 'مستشفيات شارب سايت للعيون'],
	'venu-eye-institute-research-centre': [
		'Глазной институт и исследовательский центр Вену',
		'বেণু আই ইনস্টিটিউট ও রিসার্চ সেন্টার',
		'معهد ومركز فينو لأبحاث العيون',
	],
	'guru-nanak-eye-centre': ['Глазной центр Гуру Нанак', 'গুরু নানক আই সেন্টার', 'مركز غورو ناناك للعيون'],
	'shining-smile-dentistry': ['Стоматология Шайнинг Смайлс', 'শাইনিং স্মাইলস ডেন্টিস্ট্রি', 'شاينينغ سمايلز لطب الأسنان'],
	'spruce-dental-chain-of-clinics': ['Сеть клиник Спрюс Дентал', 'স্প্রুস ডেন্টাল ক্লিনিক চেইন', 'سلسلة عيادات سبروس دينتال'],
	'asg-eye-hospital': ['Глазная больница ASG', 'এএসজি আই হাসপাতাল', 'مستشفى ASG للعيون'],
	'eye-q-super-speciality-eye-hospitals': [
		'Глазные больницы высшей специализации Eye-Q',
		'আই-কিউ সুপার স্পেশালিটি আই হাসপাতালস',
		'مستشفيات Eye-Q التخصصية الفائقة للعيون',
	],
	'medanta-the-medicity': ['Меданта — Медисити', 'মেদান্তা – দ্য মেডিসিটি', 'ميدانتا – ذا ميديسيتي'],
	'fortis-memorial-research-institute-fmri': [
		'Исследовательский институт Фортис Мемориал (FMRI)',
		'ফোর্টিস মেমোরিয়াল রিসার্চ ইনস্টিটিউট (FMRI)',
		'معهد فورتيس التذكاري للأبحاث (FMRI)',
	],
	'sanar-international-hospitals': ['Международные больницы Санар', 'সানার ইন্টারন্যাশনাল হাসপাতালস', 'مستشفيات سانار الدولية'],
	'jaypee-hospital': ['Больница Джейпи', 'জেপি হাসপাতাল', 'مستشفى جايبي'],
	'marengo-asia-hospitals': ['Больницы Маренго Эйжа', 'মারেঙ্গো এশিয়া হাসপাতালস', 'مستشفيات مارينغو آسيا'],
	'marengo-asia-hospitals-gurugram': ['Больницы Маренго Эйжа', 'মারেঙ্গো এশিয়া হাসপাতালস', 'مستشفيات مارينغو آسيا'],
	'fortis-hospital': ['Больница Фортис', 'ফোর্টিস হাসপাতাল', 'مستشفى فورتيس'],
	'fortis-hospital-shalimar-bagh': ['Больница Фортис, Шалимар-Баг', 'ফোর্টিস হাসপাতাল, শালিমার বাগ', 'مستشفى فورتيس، شاليمار باغ'],
	'fortis-hospital-faridabad': ['Больница Фортис, Фаридабад', 'ফোর্টিস হাসপাতাল, ফরিদাবাদ', 'مستشفى فورتيس، فريد آباد'],
	'max-hospital': ['Больница Макс', 'ম্যাক্স হাসপাতাল', 'مستشفى ماكس'],
	'max-super-speciality-hospital-vaishali': [
		'Больница высшей специализации Макс, Вайшали',
		'ম্যাক্স সুপার স্পেশালিটি হাসপাতাল, বৈশালী',
		'مستشفى ماكس التخصصي الفائق، فايشالي',
	],
	'max-super-speciality-hospital-noida': [
		'Больница высшей специализации Макс, Ноида',
		'ম্যাক্স সুপার স্পেশালিটি হাসপাতাল, নয়ডা',
		'مستشفى ماكس التخصصي الفائق، نويدا',
	],
	'max-super-speciality-hospital-dwarka': [
		'Больница высшей специализации Макс, Дварка',
		'ম্যাক্স সুপার স্পেশালিটি হাসপাতাল, দ্বারকা',
		'مستشفى ماكس التخصصي الفائق، دواركا',
	],
	'max-super-speciality-hospital-shalimar-bagh': [
		'Больница высшей специализации Макс, Шалимар-Баг',
		'ম্যাক্স সুপার স্পেশালিটি হাসপাতাল, শালিমার বাগ',
		'مستشفى ماكس التخصصي الفائق، شاليمار باغ',
	],
	'max-smart-super-speciality-hospital': [
		'Смарт-больница высшей специализации Макс',
		'ম্যাক্স স্মার্ট সুপার স্পেশালিটি হাসপাতাল',
		'مستشفى ماكس سمارت التخصصي الفائق',
	],
	'psri-hospital': ['Больница PSRI', 'পিএসআরআই হাসপাতাল', 'مستشفى PSRI'],
	'venkateshwar-hospital': ['Больница Венкатешвар', 'ভেঙ্কটেশ্বর হাসপাতাল', 'مستشفى فينكاتيشوار'],
	'primus-super-speciality-hospital': [
		'Больница высшей специализации Примус',
		'প্রাইমাস সুপার স্পেশালিটি হাসপাতাল',
		'مستشفى بريموس التخصصي الفائق',
	],
	'ck-birla-hospital': ['Больница CK Birla', 'সিকে বিড়লা হাসপাতাল', 'مستشفى سي كيه بيرلا'],
	'narayana-hospital': ['Больница Нараяна', 'নারায়ণা হাসপাতাল', 'مستشفى نارايانا'],
	'asian-institute-of-medical-sciences': [
		'Азиатский институт медицинских наук',
		'এশিয়ান ইনস্টিটিউট অফ মেডিক্যাল সায়েন্সেস',
		'المعهد الآسيوي للعلوم الطبية',
	],
	'yatharth-super-speciality-hospital': [
		'Больница высшей специализации Ятхарт',
		'যথার্থ সুপার স্পেশালিটি হাসপাতাল',
		'مستشفى ياثارث التخصصي الفائق',
	],
	'yashoda-super-speciality-hospitals': [
		'Больницы высшей специализации Яшода',
		'যশোদা সুপার স্পেশালিটি হাসপাতালস',
		'مستشفيات ياشودا التخصصية الفائقة',
	],
	'saroj-super-speciality-hospital': [
		'Больница высшей специализации Сарож',
		'সরোজ সুপার স্পেশালিটি হাসপাতাল',
		'مستشفى ساروج التخصصي الفائق',
	],
	'aakash-hospital': ['Больница Акаш', 'আকাশ হাসপাতাল', 'مستشفى أكاش'],
	'sci-international-hospital': ['Международная больница SCI', 'এসসিআই ইন্টারন্যাশনাল হাসপাতাল', 'مستشفى SCI الدولي'],
	'the-signature-advanced-super-speciality-hospital': [
		'Передовая больница высшей специализации «Сигнечер»',
		'দ্য সিগনেচার অ্যাডভান্সড সুপার স্পেশালিটি হাসপাতাল',
		'مستشفى ذا سيغنتشر المتقدم التخصصي الفائق',
	],
	'sci-ivf-hospital': ['Больница ЭКО SCI', 'এসসিআই আইভিএফ হাসপাতাল', 'مستشفى SCI للتلقيح الصناعي'],
	'nova-ivf-fertility': ['Нова ЭКО Фертилити', 'নোভা আইভিএফ ফার্টিলিটি', 'نوفا لعلاج العقم والتلقيح الصناعي'],
	'fortis-ridge-ivf-centre': ['Центр ЭКО Фортис Ридж', 'ফোর্টিস রিজ আইভিএফ সেন্টার', 'مركز فورتيس ريدج للتلقيح الصناعي'],
	'delhi-ivf-fertility-research-centre': [
		'Делийский исследовательский центр ЭКО и репродукции',
		'দিল্লি আইভিএফ ও ফার্টিলিটি রিসার্চ সেন্টার',
		'مركز دلهي لأبحاث التلقيح الصناعي والخصوبة',
	],
	'indira-ivf': ['Индира ЭКО', 'ইন্দিরা আইভিএফ', 'إنديرا للتلقيح الصناعي'],
	'cloudnine-ivf-centre-kailash-colony': [
		'Центр ЭКО Клаудкнайн, Кайлаш-Колони',
		'ক্লাউডনাইন আইভিএফ সেন্টার, কৈলাশ কলোনি',
		'مركز كلاودناين للتلقيح الصناعي، كايلاش كولوني',
	],
	'international-fertility-centre': ['Международный центр репродукции', 'ইন্টারন্যাশনাল ফার্টিলিটি সেন্টার', 'المركز الدولي للخصوبة'],
	'laimaa-fertility-ivf-surrogacy-clinic': [
		'Лаймаа Фертилити (клиника ЭКО и суррогатного материнства)',
		'লাইমা ফার্টিলিটি (আইভিএফ ও সারোগেসি ক্লিনিক)',
		'ليما للخصوبة (عيادة التلقيح الصناعي والأمومة البديلة)',
	],
	'gaudium-ivf': ['Гаудиум ЭКО', 'গদিয়াম আইভিএফ', 'غاوديوم للتلقيح الصناعي'],
	'pristyn-care-ferticity-super-speciality-ivf-hospital': [
		'Больница высшей специализации и ЭКО Пристин Кеа Фертисити',
		'প্রিস্টিন কেয়ার ফার্টিসিটি সুপার স্পেশালিটি ও আইভিএফ হাসপাতাল',
		'مستشفى بريستين كير فيرتيسيتي التخصصي الفائق والتلقيح الصناعي',
	],
	'nova-ivf-fertility-centre-rajouri-garden': [
		'Центр Нова ЭКО Фертилити, Раджури-Гарден',
		'নোভা আইভিএফ ফার্টিলিটি সেন্টার, রাজৌরি গার্ডেন',
		'مركز نوفا لعلاج العقم والتلقيح الصناعي، راجوري غاردن',
	],
	'elixir-fertility-centre': ['Центр репродукции Эликсир', 'এলিক্সির ফার্টিলিটি সেন্টার', 'مركز إليكسير للخصوبة'],
	'femmenest-fertility-ivf-centre': [
		'Центр репродукции и ЭКО Феммнест',
		'ফেমেনেস্ট ফার্টিলিটি ও আইভিএফ সেন্টার',
		'مركز فيمنست للخصوبة والتلقيح الصناعي',
	],
	'india-ivf-clinic': ['Клиника ЭКО «Индия»', 'ইন্ডিয়া আইভিএফ ক্লিনিক', 'عيادة إنديا للتلقيح الصناعي'],
	'she-delhi-ivf-fertility-centre': [
		'Ши Дели — центр ЭКО и репродукции',
		'শি দিল্লি – আইভিএফ ও ফার্টিলিটি সেন্টার',
		'شي دلهي – مركز التلقيح الصناعي والخصوبة',
	],
	'spruce-dental': ['Спрюс Дентал', 'স্প্রুস ডেন্টাল', 'سبروس دينتال'],
	'zemya-ivf-fertility-clinics': [
		'Клиники ЭКО и репродукции Земья',
		'জেমিয়া আইভিএফ ও ফার্টিলিটি ক্লিনিকস',
		'عيادات زيميا للتلقيح الصناعي والخصوبة',
	],
	'kokilaben-dhirubhai-ambani-hospital': [
		'Больница Кокилабен Дхирубхай Амбани',
		'কোকিলাবেন ধীরুভাই আম্বানি হাসপাতাল',
		'مستشفى كوكيلابين ديروبهاي أمباني',
	],
	'p-d-hinduja-hospital': ['Больница П. Д. Хиндуджа', 'পি. ডি. হিন্দুজা হাসপাতাল', 'مستشفى بي. دي. هندوجا'],
	'fortis-hospital-mulund': ['Больница Фортис, Мулунд', 'ফোর্টিস হাসপাতাল, মুলুন্ড', 'مستشفى فورتيس، مولوند'],
	'jaslok-hospital': ['Больница Джаслок', 'জাসলোক হাসপাতাল', 'مستشفى جاسلوك'],
	'nanavati-max-super-speciality-hospital': [
		'Больница высшей специализации Нанавати Макс',
		'নানাবতী ম্যাক্স সুপার স্পেশালিটি হাসপাতাল',
		'مستشفى ناناواتي ماكس التخصصي الفائق',
	],
	'apollo-hospitals-greams-road': ['Больницы Аполло, Грамс-Роуд', 'অ্যাপোলো হাসপাতালস, গ্রিমস রোড', 'مستشفيات أبولو، غريمز رود'],
	'miot-international': ['МИОТ Интернэшнл', 'এমআইওটি ইন্টারন্যাশনাল', 'ميوت الدولي'],
	'gleneagles-global-health-city': ['Глениглс Глобал Хелс Сити', 'গ্লেনিগলস গ্লোবাল হেলথ সিটি', 'غلينيغلز غلوبال هيلث سيتي'],
	'fortis-malar-hospital': ['Больница Фортис Малар', 'ফোর্টিস মালার হাসপাতাল', 'مستشفى فورتيس مالار'],
	'kauvery-hospital': ['Больница Каувери', 'কাভেরি হাসপাতাল', 'مستشفى كافيري'],
	'manipal-hospital-old-airport-road': [
		'Больница Манипал, Олд-Эйрпорт-Роуд',
		'মণিপাল হাসপাতাল, ওল্ড এয়ারপোর্ট রোড',
		'مستشفى مانيبال، أولد إيربورت رود',
	],
	'sakra-world-hospital': ['Всемирная больница Сакра', 'সাক্রা ওয়ার্ল্ড হাসপাতাল', 'مستشفى ساكرا العالمي'],
	'narayana-institute-of-cardiac-sciences': [
		'Институт кардиологических наук Нараяна',
		'নারায়ণা ইনস্টিটিউট অফ কার্ডিয়াক সায়েন্সেস',
		'معهد نارايانا لعلوم القلب',
	],
	'fortis-hospital-bannerghatta-road': [
		'Больница Фортис, Баннергхатта-Роуд',
		'ফোর্টিস হাসপাতাল, বান্নেরঘাট্টা রোড',
		'مستشفى فورتيس، بانيرغاتا رود',
	],
	'aster-cmi-hospital': ['Больница Астер CMI', 'অ্যাস্টার সিএমআই হাসপাতাল', 'مستشفى أستر CMI'],
	'apollo-hospitals-jubilee-hills': [
		'Больницы Аполло, Джубили-Хиллс',
		'অ্যাপোলো হাসপাতালস, জুবিলি হিলস',
		'مستشفيات أبولو، جوبيلي هيلز',
	],
	'continental-hospitals': ['Больницы Континенталь', 'কন্টিনেন্টাল হাসপাতালস', 'مستشفيات كونتيننتال'],
	'yashoda-hospitals-somajiguda': ['Больницы Яшода, Сомаджигуда', 'যশোদা হাসপাতালস, সোমাজিগুড়া', 'مستشفيات ياشودا، سوماجيغودا'],
	'global-hospitals-hyderabad': ['Больницы Глобал, Хайдарабад', 'গ্লোবাল হাসপাতালস, হায়দ্রাবাদ', 'مستشفيات غلوبال، حيدر آباد'],
	'kims-hospitals-secunderabad': ['Больницы KIMS, Секундарабад', 'কিমস হাসপাতালস, সেকেন্দ্রাবাদ', 'مستشفيات KIMS، سكندر آباد'],
	'amrita-institute-of-medical-sciences-kochi': [
		'Институт медицинских наук Амрита, Кочи',
		'অমৃতা ইনস্টিটিউট অফ মেডিক্যাল সায়েন্সেস, কোচি',
		'معهد أمريتا للعلوم الطبية، كوتشي',
	],
	'aster-medcity': ['Астер Медсити', 'অ্যাস্টার মেডসিটি', 'أستر ميدسيتي'],
	'lakeshore-hospital': ['Больница Лейкшор', 'লেকশোর হাসপাতাল', 'مستشفى ليكشور'],
	'kims-health-kochi': ['KIMS Health, Кочи', 'কিমস হেলথ, কোচি', 'KIMS Health، كوتشي'],
	'apollo-multispeciality-hospitals-kolkata': [
		'Многопрофильные больницы Аполло, Калькутта',
		'অ্যাপোলো মাল্টিস্পেশালিটি হাসপাতালস, কলকাতা',
		'مستشفيات أبولو متعددة التخصصات، كولكاتا',
	],
	'amri-hospitals-dhakuria': ['Больницы AMRI, Дхакурия', 'এএমআরআই হাসপাতালস, ঢাকুরিয়া', 'مستشفيات AMRI، داكوريا'],
	'fortis-hospital-anandapur': ['Больница Фортис, Анандапур', 'ফোর্টিস হাসপাতাল, আনন্দপুর', 'مستشفى فورتيس، أناندابور'],
	'medica-superspecialty-hospital': [
		'Больница высшей специализации Медика',
		'মেডিকা সুপারস্পেশালিটি হাসপাতাল',
		'مستشفى ميديكا التخصصي الفائق',
	],
	'zydus-hospitals': ['Больницы Зидус', 'জাইডাস হাসপাতালস', 'مستشفيات زايدس'],
	'cims-hospital': ['Больница CIMS', 'সিমস হাসপাতাল', 'مستشفى CIMS'],
	'sterling-hospital': ['Больница Стерлинг', 'স্টার্লিং হাসপাতাল', 'مستشفى ستيرلينغ'],
	'shalby-hospitals': ['Больницы Шалби', 'শালবি হাসপাতালস', 'مستشفيات شالبي'],
	'dr-agarwal-s-eye-hospital': [
		'Глазная больница доктора Агарвала',
		'ডাঃ আগরওয়ালস আই হাসপাতাল',
		'مستشفى الدكتور أغاروال للعيون',
	],
};

const localeIndex: Partial<Record<HospitalLocale, 0 | 1 | 2>> = { ru: 0, bn: 1, ar: 2 };

// "Hospital" / "Hospitals" moved to the front for the Latin-script locales.
const hospitalWords: Partial<Record<HospitalLocale, [string, string]>> = {
	fr: ['Hôpital', 'Hôpitaux'],
	es: ['Hospital', 'Hospitales'],
	pt: ['Hospital', 'Hospitais'],
	ro: ['Spitalul', 'Spitalele'],
	vi: ['Bệnh viện', 'Bệnh viện'],
};

function frontHospital(name: string, words: [string, string]): string {
	const comma = name.indexOf(',');
	const head = comma === -1 ? name : name.slice(0, comma);
	const tail = comma === -1 ? '' : name.slice(comma);
	const match = head.match(/^(.*?)\s*\bHospital(s?)\b\s*(.*)$/);
	if (!match) return name;
	const core = [match[1], match[3]].filter(Boolean).join(' ').trim();
	const word = match[2] ? words[1] : words[0];
	return `${core ? `${word} ${core}` : word}${tail}`;
}

export function localizeHospitalName(hospital: Pick<HospitalData, 'name' | 'slug'>, locale: HospitalLocale): string {
	const index = localeIndex[locale];
	if (index !== undefined) return names[hospital.slug]?.[index] ?? hospital.name;
	const words = hospitalWords[locale];
	return words ? frontHospital(hospital.name, words) : hospital.name;
}

// ---- Cities (ru / bn / ar only; other locales keep the English label) ----

// Longest entries first so multi-word phrases win over their parts.
const cityTokens: Record<'ru' | 'bn' | 'ar', Array<[string, string]>> = {
	ru: [
		['Plot no 122 Basement Jasola Vihar Pocket 2', 'Участок 122, цокольный этаж, Джасола-Вихар, блок 2'],
		['Maharaja Ranjeet Singh Marg', 'Махараджа Ранджит Сингх Марг'],
		['Multiple Delhi-NCR locations', 'Несколько филиалов в Дели и НЦР'],
		['Preet Vihar and other Delhi-NCR locations', 'Прит-Вихар и другие филиалы в Дели и НЦР'],
		['Noida and other NCR locations', 'Ноида и другие филиалы в НЦР'],
		['Multiple Delhi/NCR locations', 'Несколько филиалов в Дели и НЦР'],
		['Multiple NCR locations', 'Несколько филиалов в НЦР'],
		['Gurugram and NCR', 'Гургаон и НЦР'],
		['Green Park Extension', 'Грин-Парк-Экстеншен'],
		['South Extension-II', 'Саут-Экстеншен II'],
		['Greater Kailash-1', 'Грейтер-Кайлаш-1'],
		['Greater Kailash-II', 'Грейтер-Кайлаш II'],
		['Greater Kailash', 'Грейтер-Кайлаш'],
		['Kailash Colony', 'Кайлаш-Колони'],
		['Connaught Place', 'Коннот-Плейс'],
		['Rajinder Nagar', 'Раджиндер-Нагар'],
		['Lajpat Nagar', 'Ладжпат-Нагар'],
		['Malviya Nagar', 'Малвия-Нагар'],
		['Gujranwala Town', 'Гуджранвала-Таун'],
		['Rajouri Garden', 'Раджури-Гарден'],
		['Shalimar Bagh', 'Шалимар-Баг'],
		['Punjabi Bagh', 'Панджаби-Баг'],
		['Chanakyapuri', 'Чанакьяпури'],
		['Sheikh Sarai', 'Шейх-Сарай'],
		['Preet Vihar', 'Прит-Вихар'],
		['Vasant Kunj', 'Васант-Кундж'],
		['Vasant Vihar', 'Васант-Вихар'],
		['Anand Vihar', 'Ананд-Вихар'],
		['Mandi House', 'Мандо-Хаус'],
		['Greater Noida', 'Большая Ноида'],
		['New Delhi', 'Нью-Дели'],
		['Tughlakabad', 'Туглакабад'],
		['Ghaziabad', 'Газиабад'],
		['Faridabad', 'Фаридабад'],
		['Ahmedabad', 'Ахмедабад'],
		['Hyderabad', 'Хайдарабад'],
		['Janakpuri', 'Джанакпури'],
		['Gurugram', 'Гургаон'],
		['Bangalore', 'Бангалор'],
		['Vaishali', 'Вайшали'],
		['Mumbai', 'Мумбаи'],
		['Chennai', 'Ченнаи'],
		['Kolkata', 'Калькутта'],
		['Rohini', 'Рохини'],
		['Dwarka', 'Дварка'],
		['Okhla', 'Окхла'],
		['Saket', 'Сакет'],
		['Noida', 'Ноида'],
		['Kochi', 'Кочи'],
		['Delhi', 'Дели'],
		['Central', 'Центральный'],
		['South', 'Южный'],
		['Sector', 'сектор'],
		['NCR', 'НЦР'],
	],
	bn: [
		['Plot no 122 Basement Jasola Vihar Pocket 2', 'প্লট ১২২, বেসমেন্ট, জাসোলা বিহার, পকেট ২'],
		['Maharaja Ranjeet Singh Marg', 'মহারাজা রঞ্জিত সিং মার্গ'],
		['Multiple Delhi-NCR locations', 'দিল্লি-এনসিআর-এর একাধিক শাখা'],
		['Preet Vihar and other Delhi-NCR locations', 'প্রীত বিহার ও দিল্লি-এনসিআর-এর অন্যান্য শাখা'],
		['Noida and other NCR locations', 'নয়ডা ও এনসিআর-এর অন্যান্য শাখা'],
		['Multiple Delhi/NCR locations', 'দিল্লি/এনসিআর-এর একাধিক শাখা'],
		['Multiple NCR locations', 'এনসিআর-এর একাধিক শাখা'],
		['Gurugram and NCR', 'গুরুগ্রাম ও এনসিআর'],
		['Green Park Extension', 'গ্রিন পার্ক এক্সটেনশন'],
		['South Extension-II', 'সাউথ এক্সটেনশন-২'],
		['Greater Kailash-1', 'গ্রেটার কৈলাশ-১'],
		['Greater Kailash-II', 'গ্রেটার কৈলাশ-২'],
		['Greater Kailash', 'গ্রেটার কৈলাশ'],
		['Kailash Colony', 'কৈলাশ কলোনি'],
		['Connaught Place', 'কনট প্লেস'],
		['Rajinder Nagar', 'রাজিন্দার নগর'],
		['Lajpat Nagar', 'লাজপত নগর'],
		['Malviya Nagar', 'মালব্য নগর'],
		['Gujranwala Town', 'গুজরানওয়ালা টাউন'],
		['Rajouri Garden', 'রাজৌরি গার্ডেন'],
		['Shalimar Bagh', 'শালিমার বাগ'],
		['Punjabi Bagh', 'পাঞ্জাবি বাগ'],
		['Chanakyapuri', 'চাণক্যপুরী'],
		['Sheikh Sarai', 'শেখ সরাই'],
		['Preet Vihar', 'প্রীত বিহার'],
		['Vasant Kunj', 'বসন্ত কুঞ্জ'],
		['Vasant Vihar', 'বসন্ত বিহার'],
		['Anand Vihar', 'আনন্দ বিহার'],
		['Mandi House', 'মান্ডি হাউস'],
		['Greater Noida', 'গ্রেটার নয়ডা'],
		['New Delhi', 'নয়াদিল্লি'],
		['Tughlakabad', 'তুঘলকাবাদ'],
		['Ghaziabad', 'গাজিয়াবাদ'],
		['Faridabad', 'ফরিদাবাদ'],
		['Ahmedabad', 'আহমেদাবাদ'],
		['Hyderabad', 'হায়দ্রাবাদ'],
		['Janakpuri', 'জনকপুরী'],
		['Gurugram', 'গুরুগ্রাম'],
		['Bangalore', 'বেঙ্গালুরু'],
		['Vaishali', 'বৈশালী'],
		['Mumbai', 'মুম্বই'],
		['Chennai', 'চেন্নাই'],
		['Kolkata', 'কলকাতা'],
		['Rohini', 'রোহিণী'],
		['Dwarka', 'দ্বারকা'],
		['Okhla', 'ওখলা'],
		['Saket', 'সাকেত'],
		['Noida', 'নয়ডা'],
		['Kochi', 'কোচি'],
		['Delhi', 'দিল্লি'],
		['Central', 'মধ্য'],
		['South', 'দক্ষিণ'],
		['Sector', 'সেক্টর'],
		['NCR', 'এনসিআর'],
	],
	ar: [
		['Plot no 122 Basement Jasola Vihar Pocket 2', 'قطعة 122، الطابق السفلي، جاسولا فيهار، الجيب 2'],
		['Maharaja Ranjeet Singh Marg', 'ماهاراجا رانجيت سينغ مارغ'],
		['Multiple Delhi-NCR locations', 'عدة فروع في دلهي والمنطقة الوطنية'],
		['Preet Vihar and other Delhi-NCR locations', 'بريت فيهار وفروع أخرى في دلهي والمنطقة الوطنية'],
		['Noida and other NCR locations', 'نويدا وفروع أخرى في المنطقة الوطنية'],
		['Multiple Delhi/NCR locations', 'عدة فروع في دلهي والمنطقة الوطنية'],
		['Multiple NCR locations', 'عدة فروع في المنطقة الوطنية'],
		['Gurugram and NCR', 'غوروغرام والمنطقة الوطنية'],
		['Green Park Extension', 'غرين بارك إكستنشن'],
		['South Extension-II', 'ساوث إكستنشن 2'],
		['Greater Kailash-1', 'غريتر كايلاش 1'],
		['Greater Kailash-II', 'غريتر كايلاش 2'],
		['Greater Kailash', 'غريتر كايلاش'],
		['Kailash Colony', 'كايلاش كولوني'],
		['Connaught Place', 'كونوت بليس'],
		['Rajinder Nagar', 'راجيندر ناغار'],
		['Lajpat Nagar', 'لاجبات ناغار'],
		['Malviya Nagar', 'مالفيا ناغار'],
		['Gujranwala Town', 'غوجرانوالا تاون'],
		['Rajouri Garden', 'راجوري غاردن'],
		['Shalimar Bagh', 'شاليمار باغ'],
		['Punjabi Bagh', 'بنجابي باغ'],
		['Chanakyapuri', 'تشاناكيابوري'],
		['Sheikh Sarai', 'شيخ سراي'],
		['Preet Vihar', 'بريت فيهار'],
		['Vasant Kunj', 'فاسانت كونج'],
		['Vasant Vihar', 'فاسانت فيهار'],
		['Anand Vihar', 'أناند فيهار'],
		['Mandi House', 'ماندي هاوس'],
		['Greater Noida', 'غريتر نويدا'],
		['New Delhi', 'نيودلهي'],
		['Tughlakabad', 'توغلق آباد'],
		['Ghaziabad', 'غازي آباد'],
		['Faridabad', 'فريد آباد'],
		['Ahmedabad', 'أحمد آباد'],
		['Hyderabad', 'حيدر آباد'],
		['Janakpuri', 'جاناكبوري'],
		['Gurugram', 'غوروغرام'],
		['Bangalore', 'بنغالورو'],
		['Vaishali', 'فايشالي'],
		['Mumbai', 'مومباي'],
		['Chennai', 'تشيناي'],
		['Kolkata', 'كولكاتا'],
		['Rohini', 'روهيني'],
		['Dwarka', 'دواركا'],
		['Okhla', 'أوكلا'],
		['Saket', 'ساكيت'],
		['Noida', 'نويدا'],
		['Kochi', 'كوتشي'],
		['Delhi', 'دلهي'],
		['Central', 'وسط'],
		['South', 'جنوب'],
		['Sector', 'القطاع'],
		['NCR', 'المنطقة الوطنية'],
	],
};

// City strings in ru/bn/ar are looked up as whole strings first (they contain
// "and", "/", "," — reassembled here with the locale's own joiners).
const joiners: Record<'ru' | 'bn' | 'ar', { and: string }> = {
	ru: { and: 'и' },
	bn: { and: 'ও' },
	ar: { and: 'و' },
};

export function localizeCity(city: string, locale: HospitalLocale): string {
	if (locale !== 'ru' && locale !== 'bn' && locale !== 'ar') return city;
	let out = city;
	// Swap tokens for placeholders first so later, shorter tokens can't re-match inside translated text.
	const parts: string[] = [];
	for (const [en, tr] of cityTokens[locale]) {
		if (!out.includes(en)) continue;
		out = out.split(en).join(`\u0000${parts.length}\u0000`);
		parts.push(tr);
	}
	out = out.replace(/&/g, joiners[locale].and);
	out = out.replace(/\u0000(\d+)\u0000/g, (_, i) => parts[Number(i)]);
	return locale === 'ar' ? out.replace(/,/g, '،') : out;
}

// ---- Detail-page labels ----

export const detailLabels: Record<'en' | HospitalLocale, { address: string; established: string; certifications: string }> = {
	en: { address: 'Address', established: 'Established', certifications: 'Certifications' },
	fr: { address: 'Adresse', established: 'Fondé en', certifications: 'Certifications' },
	es: { address: 'Dirección', established: 'Fundado en', certifications: 'Certificaciones' },
	pt: { address: 'Endereço', established: 'Fundado em', certifications: 'Certificações' },
	ro: { address: 'Adresă', established: 'Înființat în', certifications: 'Certificări' },
	ru: { address: 'Адрес', established: 'Основана', certifications: 'Сертификаты' },
	bn: { address: 'ঠিকানা', established: 'প্রতিষ্ঠা', certifications: 'সার্টিফিকেশন' },
	vi: { address: 'Địa chỉ', established: 'Thành lập', certifications: 'Chứng nhận' },
	ar: { address: 'العنوان', established: 'تأسس عام', certifications: 'الاعتمادات' },
};
