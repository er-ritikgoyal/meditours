/**
 * Small site-wide strings that components pick up from the page URL (same pattern as
 * ConsentCheckbox.astro), so they work on every locale without threading props through
 * each page copy: the medical disclaimer, accessible names for form fields that only
 * show an icon, and the cookie banner's Advertising choice.
 *
 * Translation source: AI-generated. A native speaker should review before wide use,
 * especially the medical disclaimer.
 */

export const SITE_LOCALES = ['en', 'fr', 'ru', 'bn', 'ro', 'es', 'pt', 'vi', 'ar'] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];

export interface SiteUi {
	/** Short, non-diagnostic notice shown in the footer and next to every enquiry form. */
	medicalDisclaimer: string;
	/** Footer link to the full English medical disclaimer page. */
	medicalDisclaimerLink: string;
	/** Alt text for the home page hero photo. */
	heroImageAlt: string;
	form: {
		treatment: string;
		country: string;
		countryCode: string;
	};
	cookies: {
		shortDescription: string;
		advertisingLabel: string;
		advertisingDescription: string;
	};
}

const UI: Record<SiteLocale, SiteUi> = {
	en: {
		medicalDisclaimer:
			'Information on this site is general and is not medical advice. Treatment decisions are made by the treating doctors after reviewing your reports.',
		medicalDisclaimerLink: 'Medical Disclaimer',
		heroImageAlt: 'Hospital building in India',
		form: { treatment: 'Treatment', country: 'Country', countryCode: 'Country code' },
		cookies: {
			shortDescription:
				'We use necessary cookies to run this site. With your permission we also use analytics and advertising cookies.',
			advertisingLabel: 'Advertising',
			advertisingDescription: 'Lets Google Ads measure which ads bring enquiries and show you relevant ads. Optional.',
		},
	},
	fr: {
		medicalDisclaimer:
			'Les informations de ce site sont générales et ne constituent pas un avis médical. Les décisions de traitement sont prises par les médecins traitants après examen de vos rapports.',
		medicalDisclaimerLink: 'Avertissement médical',
		heroImageAlt: 'Bâtiment hospitalier en Inde',
		form: { treatment: 'Traitement', country: 'Pays', countryCode: 'Indicatif du pays' },
		cookies: {
			shortDescription:
				'Nous utilisons des cookies nécessaires au fonctionnement du site. Avec votre accord, nous utilisons aussi des cookies d’analyse et de publicité.',
			advertisingLabel: 'Publicité',
			advertisingDescription:
				'Permet à Google Ads de mesurer quelles annonces génèrent des demandes et de vous montrer des annonces pertinentes. Facultatif.',
		},
	},
	ru: {
		medicalDisclaimer:
			'Информация на этом сайте носит общий характер и не является медицинской консультацией. Решения о лечении принимают лечащие врачи после изучения ваших медицинских документов.',
		medicalDisclaimerLink: 'Медицинская оговорка',
		heroImageAlt: 'Здание больницы в Индии',
		form: { treatment: 'Лечение', country: 'Страна', countryCode: 'Код страны' },
		cookies: {
			shortDescription:
				'Мы используем необходимые файлы cookie для работы сайта. С вашего согласия мы также используем аналитические и рекламные cookie.',
			advertisingLabel: 'Реклама',
			advertisingDescription:
				'Позволяет Google Ads оценивать, какая реклама приводит к обращениям, и показывать вам релевантную рекламу. Необязательно.',
		},
	},
	bn: {
		medicalDisclaimer:
			'এই সাইটের তথ্য সাধারণ প্রকৃতির এবং এটি চিকিৎসা পরামর্শ নয়। আপনার রিপোর্ট পর্যালোচনার পর চিকিৎসার সিদ্ধান্ত নেন সংশ্লিষ্ট চিকিৎসকরা।',
		medicalDisclaimerLink: 'চিকিৎসা সংক্রান্ত দাবিত্যাগ',
		heroImageAlt: 'ভারতের একটি হাসপাতাল ভবন',
		form: { treatment: 'চিকিৎসা', country: 'দেশ', countryCode: 'দেশের কোড' },
		cookies: {
			shortDescription:
				'সাইট চালাতে আমরা প্রয়োজনীয় কুকি ব্যবহার করি। আপনার অনুমতি নিয়ে আমরা অ্যানালিটিক্স ও বিজ্ঞাপন কুকিও ব্যবহার করি।',
			advertisingLabel: 'বিজ্ঞাপন',
			advertisingDescription:
				'Google Ads-কে মাপতে দেয় কোন বিজ্ঞাপন থেকে অনুসন্ধান আসে এবং আপনাকে প্রাসঙ্গিক বিজ্ঞাপন দেখাতে দেয়। ঐচ্ছিক।',
		},
	},
	ro: {
		medicalDisclaimer:
			'Informațiile de pe acest site sunt generale și nu reprezintă sfaturi medicale. Deciziile privind tratamentul sunt luate de medicii curanți după analizarea rapoartelor dumneavoastră.',
		medicalDisclaimerLink: 'Avertisment medical',
		heroImageAlt: 'Clădire de spital din India',
		form: { treatment: 'Tratament', country: 'Țara', countryCode: 'Prefixul țării' },
		cookies: {
			shortDescription:
				'Folosim cookie-uri necesare pentru funcționarea site-ului. Cu acordul dumneavoastră, folosim și cookie-uri de analiză și publicitate.',
			advertisingLabel: 'Publicitate',
			advertisingDescription:
				'Permite Google Ads să măsoare ce reclame aduc solicitări și să vă afișeze reclame relevante. Opțional.',
		},
	},
	es: {
		medicalDisclaimer:
			'La información de este sitio es general y no constituye consejo médico. Las decisiones sobre el tratamiento las toman los médicos tratantes tras revisar sus informes.',
		medicalDisclaimerLink: 'Aviso médico',
		heroImageAlt: 'Edificio hospitalario en la India',
		form: { treatment: 'Tratamiento', country: 'País', countryCode: 'Código de país' },
		cookies: {
			shortDescription:
				'Usamos cookies necesarias para que el sitio funcione. Con su permiso, también usamos cookies de análisis y publicidad.',
			advertisingLabel: 'Publicidad',
			advertisingDescription:
				'Permite que Google Ads mida qué anuncios generan consultas y le muestre anuncios relevantes. Opcional.',
		},
	},
	pt: {
		medicalDisclaimer:
			'As informações deste site são gerais e não constituem aconselhamento médico. As decisões de tratamento são tomadas pelos médicos responsáveis após analisarem os seus relatórios.',
		medicalDisclaimerLink: 'Aviso médico',
		heroImageAlt: 'Edifício hospitalar na Índia',
		form: { treatment: 'Tratamento', country: 'País', countryCode: 'Código do país' },
		cookies: {
			shortDescription:
				'Usamos cookies necessários para o funcionamento do site. Com a sua permissão, também usamos cookies de análise e publicidade.',
			advertisingLabel: 'Publicidade',
			advertisingDescription:
				'Permite que o Google Ads meça quais anúncios geram pedidos e lhe mostre anúncios relevantes. Opcional.',
		},
	},
	vi: {
		medicalDisclaimer:
			'Thông tin trên trang web này mang tính chung và không phải là lời khuyên y tế. Quyết định điều trị do các bác sĩ điều trị đưa ra sau khi xem xét hồ sơ của bạn.',
		medicalDisclaimerLink: 'Tuyên bố miễn trừ y tế',
		heroImageAlt: 'Tòa nhà bệnh viện tại Ấn Độ',
		form: { treatment: 'Phương pháp điều trị', country: 'Quốc gia', countryCode: 'Mã quốc gia' },
		cookies: {
			shortDescription:
				'Chúng tôi dùng cookie cần thiết để vận hành trang web. Khi bạn cho phép, chúng tôi cũng dùng cookie phân tích và quảng cáo.',
			advertisingLabel: 'Quảng cáo',
			advertisingDescription:
				'Cho phép Google Ads đo lường quảng cáo nào mang lại yêu cầu tư vấn và hiển thị quảng cáo phù hợp với bạn. Không bắt buộc.',
		},
	},
	ar: {
		medicalDisclaimer:
			'المعلومات الواردة في هذا الموقع عامة وليست استشارة طبية. يتخذ الأطباء المعالجون قرارات العلاج بعد مراجعة تقاريرك.',
		medicalDisclaimerLink: 'إخلاء المسؤولية الطبية',
		heroImageAlt: 'مبنى مستشفى في الهند',
		form: { treatment: 'العلاج', country: 'الدولة', countryCode: 'رمز الدولة' },
		cookies: {
			shortDescription:
				'نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الموقع. وبإذنك نستخدم أيضًا ملفات تعريف الارتباط للتحليلات والإعلانات.',
			advertisingLabel: 'الإعلانات',
			advertisingDescription: 'يسمح لإعلانات Google بقياس الإعلانات التي تجلب الاستفسارات وعرض إعلانات ملائمة لك. اختياري.',
		},
	},
};

/** Locale from a page path: "/fr/contact" -> "fr", "/contact" -> "en". */
export function localeFromPath(pathname: string): SiteLocale {
	const first = pathname.split('/')[1] ?? '';
	return (SITE_LOCALES as readonly string[]).includes(first) ? (first as SiteLocale) : 'en';
}

export function siteUi(pathOrLocale: string): SiteUi {
	const locale = pathOrLocale.startsWith('/') ? localeFromPath(pathOrLocale) : pathOrLocale;
	return UI[locale as SiteLocale] ?? UI.en;
}

/** Accessible name from a placeholder such as "---Select Country---" or "Phone Number*". */
export function nameFromPlaceholder(placeholder: string): string {
	return placeholder
		.replace(/^[-–—\s]+|[-–—\s]+$/g, '')
		.replace(/\s*\*+$/, '')
		.replace(/(\.{3}|…)$/, '')
		.trim();
}
