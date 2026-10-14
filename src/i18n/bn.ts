/**
 * Bengali (bn) translation strings — site-wide UI text (nav, footer, hero,
 * common form/button labels, floating widget, insurance modal).
 *
 * Mirrors the structure of fr.ts / ru.ts exactly so Layout.astro can drive
 * all locales from the same rendering logic.
 *
 * Translation source: AI-generated. Recommend a native Bengali speaker
 * reviews this before it's relied on for medical terminology.
 */

export const bn = {
	nav: {
		home: 'হোম',
		destinations: 'গন্তব্য',
		treatments: 'চিকিৎসা',
		about: 'আমাদের সম্পর্কে',
		contact: 'যোগাযোগ',
		more: 'আরও',
		hotels: 'হোটেল',
		flights: 'ফ্লাইট',
		tourismPackage: 'ট্যুরিজম প্যাকেজ',
		cta: 'বিনামূল্যে পরামর্শ',
		checkInsuranceEligibility: 'বীমা যোগ্যতা যাচাই করুন',
		tagline: 'আপনার মেডিকেল কনসালট্যান্ট',
	},

	footer: {
		description:
			'আমরা রোগীদের ২০টিরও বেশি দেশে স্বীকৃত হাসপাতাল ও প্রত্যয়িত বিশেষজ্ঞদের সাথে সংযুক্ত করি — প্রথম মেডিকেল মতামত থেকে সুস্থতা পর্যন্ত সম্পূর্ণ সহায়তা।',
		quickLinks: 'দ্রুত লিঙ্ক',
		home: 'হোম',
		aboutUs: 'আমাদের সম্পর্কে',
		destinations: 'গন্তব্য',
		treatments: 'চিকিৎসা',
		ourDoctors: 'আমাদের ডাক্তারগণ',
		contact: 'যোগাযোগ',
		popularTreatments: 'জনপ্রিয় চিকিৎসা',
		treatmentNames: {
			cardiacCare: 'হৃদরোগ চিকিৎসা',
			orthopedics: 'অর্থোপেডিকস',
			oncology: 'অনকোলজি',
			cosmeticSurgery: 'কসমেটিক সার্জারি',
			fertilityTreatment: 'বন্ধ্যাত্ব চিকিৎসা',
			organTransplant: 'অঙ্গ প্রতিস্থাপন',
			dentalCare: 'দন্ত চিকিৎসা',
			eyeCare: 'চক্ষু চিকিৎসা',
		},
		getInTouch: 'যোগাযোগ করুন',
		officeAddress: '২৩৮ ওয়েস্টএন্ড মল, জনকপুরী, নয়াদিল্লি, ভারত',
		supportHours: '২৪/৭ উপলব্ধ',
		privacyPolicy: 'গোপনীয়তা নীতি',
		termsOfService: 'ব্যবহারের শর্তাবলী',
		sitemap: 'সাইটম্যাপ',
		cookiePolicy: 'কুকি নীতি',
		manageCookies: 'কুকি পছন্দ পরিচালনা করুন',
		allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
		backToTop: 'উপরে ফিরুন',
	},

	hero: {
		slides: [
			{
				eyebrow: 'JCI স্বীকৃত হাসপাতাল',
				title: 'বিশ্বমানের চিকিৎসা,',
				highlight: 'অপেক্ষা বা উচ্চ মূল্য ছাড়াই',
				description:
					'২০টিরও বেশি দেশে স্বীকৃত হাসপাতাল ও বিশেষজ্ঞদের তুলনা করুন এবং আপনার প্রয়োজনীয় চিকিৎসায় ৭০% পর্যন্ত সাশ্রয় করুন।',
				primaryCta: 'বিনামূল্যে পরামর্শ',
				secondaryCta: 'গন্তব্য দেখুন',
			},
			{
				eyebrow: 'যাচাইকৃত বিশেষজ্ঞ',
				title: 'শীর্ষ-রেটেড হাসপাতাল,',
				highlight: 'আপনার সঠিক রোগ নির্ণয়ের সাথে মিলিয়ে',
				description:
					'আমাদের মেডিকেল বোর্ড প্রতিটি কেস পর্যালোচনা করে এবং আপনাকে আপনার রোগে বিশেষজ্ঞ সার্জনদের সাথে সংযুক্ত করে।',
				primaryCta: 'বিশেষজ্ঞ খুঁজুন',
				secondaryCta: 'এটি কীভাবে কাজ করে',
			},
			{
				eyebrow: 'সম্পূর্ণ সহায়তা',
				title: 'আমরা ভ্রমণের দায়িত্ব নিই,',
				highlight: 'আপনি সুস্থতায় মনোযোগ দিন',
				description:
					'ফ্লাইট, ভিসা, দোভাষী এবং চিকিৎসা-পরবর্তী পর্যবেক্ষণ — একজন নিবেদিত সমন্বয়কারী আপনার ভ্রমণের প্রতিটি খুঁটিনাটি পরিচালনা করেন।',
				primaryCta: 'সমন্বয়কারীর সাথে কথা বলুন',
			},
		],
		trust: [
			{ value: '৫০০+', label: 'অংশীদার হাসপাতাল' },
			{ value: '৪৫', label: 'দেশ' },
			{ value: '২৪/৭', label: 'রোগী সহায়তা' },
			{ value: '১২,০০০+', label: 'সেবিত রোগী' },
		],
		treatmentOptions: [
			'হৃদ শল্যচিকিৎসা',
			'অর্থোপেডিকস ও জয়েন্ট প্রতিস্থাপন',
			'অনকোলজি',
			'কসমেটিক ও প্লাস্টিক সার্জারি',
			'বন্ধ্যাত্ব চিকিৎসা',
			'অঙ্গ প্রতিস্থাপন',
			'অন্যান্য',
		],
		enquiry: {
			title: 'বিনামূল্যে পরামর্শ নিন',
			subtitle: 'আমাদের মেডিকেল টিম ২৪ ঘণ্টার মধ্যে সাড়া দেবে',
			treatmentPlaceholder: 'আমি খুঁজছি...',
			namePlaceholder: 'পুরো নাম',
			emailPlaceholder: 'ইমেইল ঠিকানা',
			countryPlaceholder: '---দেশ নির্বাচন করুন---',
			phonePlaceholder: 'হোয়াটসঅ্যাপ / ফোন নম্বর',
			uploadLabel: 'মেডিকেল রিপোর্ট আপলোড করুন (PDF/JPG, ঐচ্ছিক)',
			submit: 'বিনামূল্যে পরামর্শ',
			privacyNote: 'আপনার তথ্য গোপন রাখা হয়',
			successMessage: 'ধন্যবাদ! একজন রোগী সমন্বয়কারী শীঘ্রই আপনার সাথে যোগাযোগ করবেন।',
		},
	},

	floatingWidget: {
		whatsappLabel: 'হোয়াটসঅ্যাপ',
		whatsappAriaLabel: 'হোয়াটসঅ্যাপে আমাদের সাথে চ্যাট করুন',
		callbackLabel: 'কলব্যাকের জন্য অনুরোধ করুন',
		closeLabel: 'বন্ধ করুন',
		modalTitle: 'কলব্যাকের জন্য অনুরোধ করুন',
		modalSubtitle: 'আপনার তথ্য শেয়ার করুন এবং একজন রোগী সমন্বয়কারী শীঘ্রই আপনাকে কল করবেন।',
		namePlaceholder: 'পুরো নাম',
		countryPlaceholder: '---দেশ নির্বাচন করুন---',
		phonePlaceholder: 'ফোন নম্বর / হোয়াটসঅ্যাপ',
		emailPlaceholder: 'ইমেইল ঠিকানা',
		preferredTimePlaceholder: 'পছন্দের কলের সময় (ঐচ্ছিক)',
		submitLabel: 'কল অনুরোধ করুন',
		privacyNote: 'আপনার তথ্য গোপন রাখা হয়',
		successMessage: 'ধন্যবাদ! একজন রোগী সমন্বয়কারী শীঘ্রই আপনাকে কল করবেন।',
	},

	insuranceModal: {
		closeLabel: 'বন্ধ করুন',
		modalTitle: 'বীমা যোগ্যতা যাচাই করুন',
		modalSubtitle:
			'আপনার তথ্য এবং বীমার বিবরণ শেয়ার করুন — আমাদের সমন্বয়কারী কভারেজ নিশ্চিত করে আপনার সাথে যোগাযোগ করবেন।',
		patientNamePlaceholder: 'রোগীর নাম',
		patientAgePlaceholder: 'রোগীর বয়স',
		genderPlaceholder: 'লিঙ্গ',
		genderMale: 'পুরুষ',
		genderFemale: 'নারী',
		genderOther: 'অন্যান্য',
		countryPlaceholder: '---দেশ নির্বাচন করুন---',
		phonePlaceholder: 'ফোন নম্বর*',
		emailPlaceholder: 'ইমেইল',
		hasInsurancePlaceholder: '---আমার বীমা আছে---',
		yes: 'হ্যাঁ',
		no: 'না',
		uploadLabel: 'আপনার বীমা কার্ড আপলোড করুন (ঐচ্ছিক — PDF/JPG/PNG)',
		messagePlaceholder: 'বার্তা',
		submitLabel: 'যোগ্যতা যাচাই করুন',
		successMessage: 'ধন্যবাদ! আমাদের টিম আপনার বীমার তথ্য পর্যালোচনা করবে এবং শীঘ্রই আপনার সাথে যোগাযোগ করবে।',
	},

	common: {
		fullName: 'পুরো নাম',
		emailAddress: 'ইমেইল ঠিকানা',
		phoneWhatsapp: 'ফোন / হোয়াটসঅ্যাপ',
		message: 'বার্তা',
		sendMessage: 'বার্তা পাঠান',
		country: 'দেশ',
		selectCountryPlaceholder: '---দেশ নির্বাচন করুন---',
		learnMore: 'আরও জানুন',
		viewProfile: 'প্রোফাইল দেখুন',
		contactUs: 'আমাদের সাথে যোগাযোগ করুন',
		requestCallback: 'কলব্যাকের জন্য অনুরোধ করুন',
		checkEligibility: 'যোগ্যতা যাচাই করুন',
		confidentialNote: 'আপনার তথ্য গোপন রাখা হয়',
	},
	cookieBanner: {
		title: 'আমরা আপনার ব্যক্তিগত তথ্যের গোপনীয়তাকে মূল্য দিই',
		description:
			'আমরা আপনার ভাষার পছন্দ মনে রাখতে এবং দর্শনার্থীরা আমাদের সাইট কীভাবে ব্যবহার করেন তা বুঝতে কুকি ব্যবহার করি, যাতে আমরা এটি উন্নত করতে পারি। আপনি সব কুকি গ্রহণ করতে, অপ্রয়োজনীয় কুকি প্রত্যাখ্যান করতে, অথবা আপনার পছন্দ নিজের মতো করে ঠিক করতে পারেন।',
		necessaryLabel: 'প্রয়োজনীয়',
		necessaryDescription: 'সাইট কাজ করার জন্য প্রয়োজনীয়, যেমন আপনার নির্বাচিত ভাষা মনে রাখা। সর্বদা চালু থাকে।',
		analyticsLabel: 'অ্যানালিটিক্স',
		analyticsDescription: 'দর্শনার্থীরা সাইটটি কীভাবে ব্যবহার করেন তা বুঝতে সাহায্য করে, যাতে আমরা এটি উন্নত করতে পারি। ঐচ্ছিক।',
		acceptAllLabel: 'সব গ্রহণ করুন',
		rejectLabel: 'অপ্রয়োজনীয় প্রত্যাখ্যান করুন',
		customizeLabel: 'পছন্দমতো সাজান',
		savePreferencesLabel: 'পছন্দ সংরক্ষণ করুন',
		policyLinkLabel: 'কুকি নীতি',
		closeLabel: 'বন্ধ করুন',
	},
} as const;

export type BnDictionary = typeof bn;
