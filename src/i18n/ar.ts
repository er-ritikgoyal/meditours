/**
 * Arabic (ar) translation strings — site-wide UI text (nav, footer, hero,
 * common form/button labels, floating widget, insurance modal).
 *
 * Mirrors the structure of fr.ts / ru.ts / bn.ts / ro.ts / es.ts / pt.ts / vi.ts exactly so Layout.astro can
 * drive all locales from the same rendering logic.
 *
 * Arabic is the only right-to-left (RTL) locale live today — Layout.astro sets
 * `dir="rtl"` on <html> for this locale, and the sitewide CSS uses logical
 * properties (inset-inline-*, margin-inline-*, text-align: start/end) so
 * layout mirrors automatically. See src/styles/theme.css for the RTL font
 * stack (Cairo/Tajawal).
 *
 * Translation source: AI-generated. Recommend a native Arabic speaker
 * reviews this before it's relied on for medical terminology.
 */

export const ar = {
	nav: {
		home: 'الرئيسية',
		destinations: 'الوجهات',
		treatments: 'العلاجات',
		about: 'من نحن',
		contact: 'اتصل بنا',
		more: 'المزيد',
		hotels: 'الفنادق',
		flights: 'الرحلات الجوية',
		tourismPackage: 'الباقة السياحية',
		cta: 'استشارة مجانية',
		checkInsuranceEligibility: 'تحقق من أهلية التأمين',
		tagline: 'مستشارك الطبي',
	},

	footer: {
		description:
			'نربط المرضى بمستشفيات معتمدة وأطباء اختصاصيين معتمدين في أكثر من 20 دولة — دعم كامل، من الرأي الطبي الأول حتى التعافي.',
		quickLinks: 'روابط سريعة',
		home: 'الرئيسية',
		aboutUs: 'من نحن',
		destinations: 'الوجهات',
		treatments: 'العلاجات',
		ourDoctors: 'أطباؤنا',
		contact: 'اتصل بنا',
		popularTreatments: 'العلاجات الشائعة',
		treatmentNames: {
			cardiacCare: 'أمراض القلب',
			orthopedics: 'جراحة العظام',
			oncology: 'الأورام',
			cosmeticSurgery: 'الجراحة التجميلية',
			fertilityTreatment: 'علاج الخصوبة',
			organTransplant: 'زراعة الأعضاء',
			dentalCare: 'طب الأسنان',
			eyeCare: 'طب العيون',
		},
		getInTouch: 'تواصل معنا',
		officeAddress: '238 Westend Mall, Janakpuri, New Delhi, الهند',
		supportHours: 'متاح على مدار الساعة',
		privacyPolicy: 'سياسة الخصوصية',
		termsOfService: 'شروط الخدمة',
		sitemap: 'خريطة الموقع',
		cookiePolicy: 'سياسة ملفات تعريف الارتباط',
		manageCookies: 'إدارة إعدادات ملفات تعريف الارتباط',
		allRightsReserved: 'جميع الحقوق محفوظة.',
		backToTop: 'العودة للأعلى',
	},

	hero: {
		slides: [
			{
				eyebrow: 'مستشفيات معتمدة من JCI',
				title: 'رعاية طبية عالمية المستوى،',
				highlight: 'دون انتظار أو أسعار مبالغ فيها',
				description:
					'قارن بين مستشفيات معتمدة وأطباء اختصاصيين من أكثر من 20 دولة، ووفّر حتى 70% من تكلفة العلاج الذي تحتاجه.',
				primaryCta: 'استشارة مجانية',
				secondaryCta: 'استكشف الوجهات',
			},
			{
				eyebrow: 'أطباء موثّقون',
				title: 'مستشفيات الأعلى تقييمًا،',
				highlight: 'تناسب تشخيصك بدقة',
				description:
					'تراجع لجنتنا الطبية كل حالة وتربطك بجراحين متخصصين في حالتك الصحية.',
				primaryCta: 'ابحث عن اختصاصي',
				secondaryCta: 'كيف تعمل الخدمة',
			},
			{
				eyebrow: 'دعم شامل',
				title: 'نتولى أمر رحلتك،',
				highlight: 'وأنت تركّز على التعافي',
				description:
					'رحلات الطيران والتأشيرات والمترجمين والمتابعة بعد العلاج — منسّق مخصص يدير كل تفاصيل رحلتك.',
				primaryCta: 'تحدث مع منسّق',
			},
		],
		trust: [
			{ value: '+500', label: 'مستشفى شريك' },
			{ value: '45', label: 'دولة' },
			{ value: '24/7', label: 'دعم المرضى' },
			{ value: '+12,000', label: 'مريض تمت مساعدته' },
		],
		treatmentOptions: [
			'أمراض القلب',
			'جراحة العظام واستبدال المفاصل',
			'الأورام',
			'الجراحة التجميلية والترميمية',
			'علاج الخصوبة',
			'زراعة الأعضاء',
			'أخرى',
		],
		enquiry: {
			title: 'احصل على استشارة مجانية',
			subtitle: 'يرد فريقنا الطبي خلال 24 ساعة',
			treatmentPlaceholder: 'ابحث...',
			namePlaceholder: 'الاسم الكامل',
			emailPlaceholder: 'البريد الإلكتروني',
			countryPlaceholder: '---اختر الدولة---',
			phonePlaceholder: 'رقم واتساب / الهاتف',
			uploadLabel: 'ارفع التقارير الطبية (PDF/JPG، اختياري)',
			submit: 'استشارة مجانية',
			privacyNote: 'معلوماتك سرية',
			successMessage: 'شكرًا لك! سيتواصل معك منسّق المرضى قريبًا.',
		},
	},

	floatingWidget: {
		whatsappLabel: 'واتساب',
		whatsappAriaLabel: 'تحدث معنا عبر واتساب',
		callbackLabel: 'اطلب اتصالًا',
		closeLabel: 'إغلاق',
		modalTitle: 'اطلب اتصالًا',
		modalSubtitle: 'شارك بياناتك وسيتصل بك منسّق المرضى قريبًا.',
		namePlaceholder: 'الاسم الكامل',
		countryPlaceholder: '---اختر الدولة---',
		phonePlaceholder: 'رقم الهاتف / واتساب',
		emailPlaceholder: 'البريد الإلكتروني',
		preferredTimePlaceholder: 'الوقت المفضل للاتصال (اختياري)',
		submitLabel: 'اطلب الاتصال',
		privacyNote: 'معلوماتك سرية',
		successMessage: 'شكرًا لك! سيتصل بك منسّق المرضى قريبًا.',
	},

	insuranceModal: {
		closeLabel: 'إغلاق',
		modalTitle: 'تحقق من أهلية التأمين',
		modalSubtitle:
			'شارك بياناتك ومعلومات التأمين الخاصة بك — سيؤكد منسّقنا التغطية ويتواصل معك.',
		patientNamePlaceholder: 'اسم المريض',
		patientAgePlaceholder: 'عمر المريض',
		genderPlaceholder: 'الجنس',
		genderMale: 'ذكر',
		genderFemale: 'أنثى',
		genderOther: 'آخر',
		countryPlaceholder: '---اختر الدولة---',
		phonePlaceholder: 'رقم الهاتف*',
		emailPlaceholder: 'البريد الإلكتروني',
		hasInsurancePlaceholder: '---لدي تأمين---',
		yes: 'نعم',
		no: 'لا',
		uploadLabel: 'ارفع بطاقة التأمين (اختياري — PDF/JPG/PNG)',
		messagePlaceholder: 'الرسالة',
		submitLabel: 'تحقق من الأهلية',
		successMessage: 'شكرًا لك! سيراجع فريقنا معلومات التأمين الخاصة بك ويتواصل معك قريبًا.',
	},

	common: {
		fullName: 'الاسم الكامل',
		emailAddress: 'البريد الإلكتروني',
		phoneWhatsapp: 'الهاتف / واتساب',
		message: 'الرسالة',
		sendMessage: 'إرسال الرسالة',
		country: 'الدولة',
		selectCountryPlaceholder: '---اختر الدولة---',
		learnMore: 'اعرف المزيد',
		viewProfile: 'عرض الملف الشخصي',
		contactUs: 'اتصل بنا',
		requestCallback: 'اطلب اتصالًا',
		checkEligibility: 'تحقق من الأهلية',
		confidentialNote: 'معلوماتك سرية',
	},
	cookieBanner: {
		title: 'نحن نقدّر خصوصيتك',
		description:
			'نستخدم ملفات تعريف الارتباط لتذكر تفضيل لغتك ولفهم كيفية استخدام الزوار لموقعنا، حتى نتمكن من تحسينه. يمكنك قبول جميع ملفات تعريف الارتباط، أو رفض غير الضرورية منها، أو تخصيص اختيارك.',
		necessaryLabel: 'ضرورية',
		necessaryDescription: 'ضرورية لعمل الموقع، مثل تذكر اللغة التي اخترتها. مفعّلة دائمًا.',
		analyticsLabel: 'التحليلات',
		analyticsDescription: 'تساعدنا على فهم كيفية استخدام الزوار للموقع حتى نتمكن من تحسينه. اختيارية.',
		acceptAllLabel: 'قبول الكل',
		rejectLabel: 'رفض غير الضرورية',
		customizeLabel: 'تخصيص',
		savePreferencesLabel: 'حفظ التفضيلات',
		policyLinkLabel: 'سياسة ملفات تعريف الارتباط',
		closeLabel: 'إغلاق',
	},
} as const;

export type ArDictionary = typeof ar;
