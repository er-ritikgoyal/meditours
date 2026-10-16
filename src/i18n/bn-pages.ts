/**
 * Bengali translations for page-level chrome on About, Contact, Destinations,
 * and Treatments (list + detail). Deep per-item content lives in
 * bn-treatments.ts / bn-destinations.ts; this file covers headings, labels,
 * form copy, and other component props for those pages.
 */

export const bnAbout = {
	pageHeader: {
		badge: 'প্রথম দিন থেকে',
		title: 'আমরা কারা,',
		highlight: 'এবং কেন এটি গুরুত্বপূর্ণ',
		subtitle:
			'আমরা রোগী সমন্বয়কারী, মেডিকেল পর্যালোচক এবং লজিস্টিক বিশেষজ্ঞদের একটি দল যারা বিশ্বাস করি বিশ্বমানের চিকিৎসা আপনি কোথায় থাকেন তার উপর নির্ভর করা উচিত নয়।',
	},
	story: {
		badge: 'আমাদের গল্প',
		titleLead: 'বিশ্বমানের চিকিৎসাকে',
		titleHighlight: 'সবার জন্য সহজলভ্য করতে গড়ে তোলা',
		paragraphs: [
			'Alis Pro Med Tour প্রতিষ্ঠিত হয়েছিল বিশ্বমানের চিকিৎসা এবং এর খরচের মধ্যকার ব্যবধান দূর করতে। আমরা বিশ্বাস করি আপনি কোথায় জন্মগ্রহণ করেছেন তা নির্ধারণ করা উচিত নয় যে আপনি প্রয়োজনীয় অস্ত্রোপচারের খরচ বহন করতে পারবেন কিনা। আমাদের প্রতিষ্ঠার পর থেকে, আমরা হাজার হাজার রোগীকে — প্রথম মেডিকেল মতামত থেকে সম্পূর্ণ সুস্থতা পর্যন্ত — ভারতের সবচেয়ে স্বীকৃত হাসপাতালগুলোর মাধ্যমে পরিচালিত করেছি, মান নিয়ে কোনো আপস না করেই পরিবারগুলোর জীবন-পরিবর্তনকারী পরিমাণ অর্থ সাশ্রয় করেছি।',
			'রোগী সমন্বয়কারীদের একটি ছোট দল হিসেবে যা শুরু হয়েছিল তা আজ ৪০টিরও বেশি দেশ জুড়ে বিস্তৃত একটি সম্পূর্ণ কনসিয়ার্জ নেটওয়ার্কে পরিণত হয়েছে, যেখানে রয়েছে ইন-হাউস মেডিকেল রিভিউ বোর্ড, নিবেদিত ভিসা বিশেষজ্ঞ এবং ২৪/৭ বহুভাষিক সহায়তা — কারণ বিদেশে স্বাস্থ্যসেবার পথ চলা কখনোই একা মনে হওয়া উচিত নয়।',
		],
		statsLabels: ['অংশীদার হাসপাতাল', 'সেবিত দেশ', 'রোগী সহায়তা', 'সেবিত রোগী'],
		valuesTitle: 'আমাদের মূল্যবোধ',
		values: [
			{
				title: 'সহানুভূতি প্রথমে',
				description: 'প্রতিটি সিদ্ধান্ত শুরু হয় আমাদের সামনের রোগীর জন্য যা সবচেয়ে ভালো তা দিয়ে — যা দ্রুততম বা সবচেয়ে লাভজনক তা দিয়ে নয়।',
			},
			{
				title: 'সম্পূর্ণ স্বচ্ছতা',
				description: 'আগাম মূল্য, সৎ সময়সীমা এবং কোনো লুকানো ফি নেই। আমরা যা বলি তাই আপনি পরিশোধ করেন।',
			},
			{
				title: 'ক্লিনিক্যাল উৎকর্ষতা',
				description: 'আমরা কেবল JCI ও NABH স্বীকৃত হাসপাতাল এবং যাচাইকৃত ট্র্যাক রেকর্ড সম্পন্ন বিশেষজ্ঞদের সাথে কাজ করি।',
			},
			{
				title: 'সবসময় দায়বদ্ধ',
				description: 'আপনার প্রথম বার্তা থেকে আপনার চূড়ান্ত ফলো-আপ কল পর্যন্ত, একজন সমন্বয়কারী শুরু থেকে শেষ পর্যন্ত আপনার কেসের দায়িত্ব নেন।',
			},
		],
	},
	journey: {
		badge: 'আমাদের যাত্রা',
		titleLead: 'রোগীর বিশ্বাস গড়ার',
		titleHighlight: '৫+ বছর',
		subtitle: 'একটি ছোট সমন্বয়কারী দল থেকে ৪০টিরও বেশি দেশের রোগী নেটওয়ার্ক পর্যন্ত।',
		milestones: [
			{ title: 'মুম্বাইয়ে প্রতিষ্ঠা', description: 'দিল্লি ও মুম্বাই জুড়ে কয়েকটি অংশীদার হাসপাতাল নিয়ে Alis Pro Med Tour চালু হয়।' },
			{
				title: 'স্বীকৃতি নেটওয়ার্ক সম্প্রসারণ',
				description: 'ভারতের শীর্ষ মেডিকেল কেন্দ্রগুলোতে ১০০+ JCI ও NABH স্বীকৃত হাসপাতালে সম্প্রসারিত।',
			},
			{
				title: 'বৈশ্বিক সম্প্রসারণ',
				description: 'নিবেদিত ভিসা ও ভ্রমণ সহায়তাসহ ২০টিরও বেশি দেশের রোগীদের সেবা শুরু।',
			},
			{
				title: '৫,০০০ রোগীর মাইলফলক',
				description: 'বৈশ্বিক ভ্রমণ বিঘ্ন সত্ত্বেও ৫,০০০ সফলভাবে চিকিৎসিত আন্তর্জাতিক রোগী অতিক্রম।',
			},
			{
				title: '২৪/৭ কনসিয়ার্জ চালু',
				description: 'চব্বিশ ঘণ্টা বহুভাষিক রোগী সহায়তা এবং নিবেদিত কেস সমন্বয়কারী চালু।',
			},
			{
				title: '৪০+ দেশ, ১০,০০০+ রোগী',
				description: 'সারাদেশে ১০০+ স্বীকৃত অংশীদার হাসপাতাল জুড়ে ৪০টিরও বেশি দেশের রোগীদের সহায়তা।',
			},
		],
	},
	testimonials: {
		badge: 'রোগীর গল্প',
		title: 'আমাদের',
		highlight: 'রোগীরা যা বলেন',
		subtitle: 'যারা তাদের চিকিৎসার জন্য আমাদের বিশ্বাস করেছেন এমন প্রকৃত রোগীদের প্রকৃত ফলাফল।',
		items: [
			{
				quote:
					'আমার প্রথম বার্তা থেকে সুস্থ হয়ে বাড়ি ফেরার দিন পর্যন্ত, প্রতিটি ধাপ যত্নের সাথে পরিচালিত হয়েছিল। দিল্লির হৃদরোগ টিম আমাকে দ্বিতীয় জীবন দিয়েছে, এবং আমি বাড়িতে যা খরচ হতো তার সামান্য অংশই পরিশোধ করেছি।',
				name: 'James Whitfield',
				countryCode: 'gb',
				country: 'যুক্তরাজ্য',
				treatment: 'হৃদ বাইপাস সার্জারি',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'বিদেশে অস্ত্রোপচারের জন্য ভ্রমণ নিয়ে আমি নার্ভাস ছিলাম, কিন্তু আমার সমন্বয়কারী প্রয়োজনে রাত ২টায়ও প্রতিটি প্রশ্নের উত্তর দিয়েছেন। ইস্তাম্বুলের হাসপাতালটি ক্লিনিকের চেয়ে পাঁচ-তারকা হোটেলের মতো মনে হয়েছিল।',
				name: 'Amara Okafor',
				countryCode: 'ng',
				country: 'নাইজেরিয়া',
				treatment: 'কসমেটিক সার্জারি',
				rating: 5,
				theme: 'teal' as const,
			},
			{
				quote:
					'আমরা মান নিয়ে আপস না করেই আমার মেয়ের মেরুদণ্ডের অস্ত্রোপচারে $৪০,০০০-এরও বেশি সাশ্রয় করেছি। ব্যাংককের সার্জন যুক্তরাষ্ট্রে প্রশিক্ষিত এবং তার যত্নের প্রতিটি বিবরণে তা প্রতিফলিত হয়েছিল।',
				name: 'Michael Chen',
				countryCode: 'ca',
				country: 'কানাডা',
				treatment: 'শিশু অর্থোপেডিকস',
				rating: 5,
				theme: 'green' as const,
			},
			{
				quote:
					'ভিসা সহায়তা, বিমানবন্দর পিকআপ, দোভাষী, হাসপাতালের কাছে হোটেল — তারা সবকিছু ভেবে রেখেছিল যাতে আমি সম্পূর্ণভাবে সুস্থ হয়ে ওঠার দিকে মনোযোগ দিতে পারি। আমি একা এই ভ্রমণ সামলাতে পারতাম না।',
				name: 'Sofia Marchetti',
				countryCode: 'it',
				country: 'ইতালি',
				treatment: 'বন্ধ্যাত্ব চিকিৎসা',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'মেডিকেল বোর্ড আমাকে এমন একজন বিশেষজ্ঞের সাথে মিলিয়ে দিয়েছে যিনি আসলে নিয়মিত আমার সঠিক অবস্থার চিকিৎসা করেন, শুধু সাধারণভাবে নয়। সেই দক্ষতা আমার সুস্থতায় সমস্ত পার্থক্য তৈরি করেছে।',
				name: 'David Okoye',
				countryCode: 'us',
				country: 'যুক্তরাষ্ট্র',
				treatment: 'অনকোলজি',
				rating: 4,
				theme: 'teal' as const,
			},
			{
				quote:
					'আমি বাড়ি ফেরার পরেও মাসের পর মাস ফলো-আপ কল চলতে থাকে। কখনো মনে হয়নি সম্পর্কটি বিমানবন্দরে শেষ হয়ে গেছে — তারা সত্যিকার অর্থে আমার সুস্থতার অগ্রগতি নিয়ে চিন্তিত ছিল।',
				name: 'Hana Yamamoto',
				countryCode: 'jp',
				country: 'জাপান',
				treatment: 'জয়েন্ট প্রতিস্থাপন',
				rating: 5,
				theme: 'green' as const,
			},
		],
	},
	faq: {
		badge: 'প্রশ্ন আছে?',
		title: 'আমাদের সম্পর্কে —',
		highlight: 'উত্তর দেওয়া হলো',
		subtitle: 'বিদেশে চিকিৎসা বিবেচনা করা রোগীদের কাছ থেকে আমরা সবচেয়ে বেশি যে প্রশ্নগুলো শুনি।',
	},
};

export const bnContact = {
	pageHeader: {
		badge: 'আমরা সাহায্য করতে প্রস্তুত',
		title: 'যোগাযোগ করুন',
		highlight: 'আমাদের টিমের সাথে',
		subtitle: 'চিকিৎসা, খরচ বা ভ্রমণ লজিস্টিক সম্পর্কে প্রশ্ন আছে? একজন রোগী সমন্বয়কারী সাধারণত কয়েক ঘণ্টার মধ্যে উত্তর দেন।',
	},
	quickOptions: [
		{ title: 'আমাদের কল করুন', detail: '+91 98217 01155' },
		{ title: 'হোয়াটসঅ্যাপ', detail: 'সমন্বয়কারীর সাথে চ্যাট করুন' },
		{ title: 'আমাদের লিখুন', detail: 'care@alispromeditours.com' },
	],
	form: {
		heading: 'আমাদের একটি বার্তা পাঠান',
		subheading: 'কিছু বিবরণ শেয়ার করুন এবং আমাদের মেডিকেল টিম পরবর্তী পদক্ষেপ নিয়ে যোগাযোগ করবে।',
		fullName: 'পুরো নাম',
		fullNamePlaceholder: 'আপনার পুরো নাম',
		emailAddress: 'ইমেইল ঠিকানা',
		emailPlaceholder: 'you@example.com',
		country: 'দেশ',
		selectCountryPlaceholder: '---দেশ নির্বাচন করুন---',
		treatmentOfInterest: 'আগ্রহের চিকিৎসা',
		selectTreatmentPlaceholder: 'একটি চিকিৎসা নির্বাচন করুন',
		phoneWhatsapp: 'ফোন / হোয়াটসঅ্যাপ',
		phonePlaceholder: '৫৫৫ ১২৩ ৪৫৬৭',
		message: 'বার্তা',
		messagePlaceholder: 'আপনার অবস্থা, সময়সীমা বা যেকোনো প্রশ্ন সম্পর্কে বলুন...',
		medicalReports: 'মেডিকেল রিপোর্ট (ঐচ্ছিক)',
		fileHint: 'PDF অথবা JPG, সর্বোচ্চ ৫MB',
		submit: 'বার্তা পাঠান',
		successMessage: 'যোগাযোগ করার জন্য ধন্যবাদ — একজন রোগী সমন্বয়কারী শীঘ্রই আপনার সাথে যোগাযোগ করবেন।',
	},
	info: {
		heading: 'যোগাযোগের তথ্য',
		officeAddressLabel: 'অফিসের ঠিকানা',
		phoneLabel: 'ফোন',
		emailLabel: 'ইমেইল',
		supportHoursLabel: 'সহায়তার সময়',
		supportHoursValue: '২৪/৭ উপলব্ধ',
		coordinatorLabel: 'নিবেদিত সমন্বয়কারী',
		coordinatorDetail: 'আপনার প্রথম বার্তার ২৪ ঘণ্টার মধ্যে নিযুক্ত করা হয়',
		noteText: 'প্রথমে কথা বলে নিতে চান? আমাদের হোয়াটসঅ্যাপে লিখুন, আমরা এক ঘণ্টার মধ্যে কল ব্যাক করব।',
	},
	treatmentOptions: [
		'হৃদরোগ চিকিৎসা',
		'অর্থোপেডিকস',
		'অনকোলজি',
		'কসমেটিক ও প্লাস্টিক সার্জারি',
		'বন্ধ্যাত্ব চিকিৎসা',
		'অঙ্গ প্রতিস্থাপন',
		'দন্ত চিকিৎসা',
		'চক্ষু চিকিৎসা',
		'ENT (Ear, Nose & Throat)',
		'Neurology & Neurosurgery',
		'Spine Surgery',
		'Bariatric Surgery',
		'Nephrology & Urology',
		'অন্যান্য',
	],
};

export const bnDestinationsPage = {
	grid: {
		badge: 'ভারত জুড়ে মেডিকেল কেন্দ্র',
		title: 'সেরা',
		highlight: 'ভারতীয় মেডিকেল কেন্দ্র আবিষ্কার করুন',
		subtitle: 'নিচের প্রতিটি শহরে রয়েছে JCI বা NABH স্বীকৃত হাসপাতাল, আমাদের মেডিকেল বোর্ড দ্বারা যাচাইকৃত।',
		exploreLabel: 'গন্তব্য অন্বেষণ করুন',
	},
	detail: {
		verifiedBadge: 'যাচাইকৃত অংশীদার নেটওয়ার্ক',
		hospitalsInLabel: 'হাসপাতাল',
		hospitalsInSubtitleTemplate: (city: string) =>
			`${city}-এ স্বীকৃত হাসপাতাল, নিরাপত্তা, স্বাস্থ্যবিধি এবং ক্লিনিক্যাল ফলাফলের জন্য আমাদের মেডিকেল বোর্ড দ্বারা যাচাইকৃত।`,
		soonTitleTemplate: (city: string) => `${city}-এর জন্য হাসপাতাল প্রোফাইল শীঘ্রই আসছে`,
		soonBodyTemplate: (city: string) =>
			`আমরা ${city}-এর জন্য নামযুক্ত অংশীদার হাসপাতাল যুক্ত করছি। ততক্ষণে, একজন সমন্বয়কারীর সাথে আপনার কেস শেয়ার করুন এবং আমরা সরাসরি আপনাকে একটি স্বীকৃত হাসপাতালের সাথে মিলিয়ে দেব।`,
		talkToCoordinator: 'সমন্বয়কারীর সাথে কথা বলুন',
		otherHubsTitle: 'অন্যান্য মেডিকেল কেন্দ্র',
	},
};

export const bnTreatmentsPage = {
	grid: {
		badge: 'আমাদের বিশেষত্ব',
		title: 'আমরা যে চিকিৎসায়',
		highlight: 'বিশেষজ্ঞ',
		subtitle: 'বিশ্বজুড়ে স্বীকৃত হাসপাতালে প্রতিটি প্রধান বিশেষত্বে প্রত্যয়িত বিশেষজ্ঞ।',
		searchPlaceholder: 'চিকিৎসা খুঁজুন — যেমন হৃদরোগ, দন্ত, কসমেটিক সার্জারি...',
		searchAriaLabel: 'চিকিৎসা খুঁজুন',
		clearAriaLabel: 'অনুসন্ধান পরিষ্কার করুন',
		showingCountTemplate: '{total}-এর মধ্যে {visible}টি চিকিৎসা দেখানো হচ্ছে',
		noResultsTitle: 'কোনো চিকিৎসা পাওয়া যায়নি',
		noResultsBody: 'একটি ভিন্ন অনুসন্ধান শব্দ চেষ্টা করুন, অথবা উপরে আমাদের সমস্ত বিশেষত্ব ব্রাউজ করুন।',
		fromPrefix: 'থেকে',
		learnMore: 'আরও জানুন',
	},
	costComparison: {
		title: 'বিশ্বব্যাপী চিকিৎসার খরচ তুলনা করুন',
		subtitle: 'মান নিয়ে আপস না করেই খরচে ৮০% পর্যন্ত সাশ্রয় করে ভারতে বিশ্বমানের স্বাস্থ্যসেবা পান।',
		note: 'সমস্ত মূল্য USD-এ আনুমানিক গড় এবং হাসপাতাল, বিশেষজ্ঞ ও কেসের জটিলতার উপর নির্ভর করে পরিবর্তিত হতে পারে।',
		scrollHint: 'ভারত সহ সবগুলো ৫টি দেশ তুলনা করতে বামে সোয়াইপ করুন',
		mostAffordable: 'সবচেয়ে সাশ্রয়ী',
		saveTemplate: (pct: number) => `${pct}% সাশ্রয়`,
		countries: { usa: 'যুক্তরাষ্ট্র', uk: 'যুক্তরাজ্য', germany: 'জার্মানি', uae: 'সংযুক্ত আরব আমিরাত', india: 'ভারত' },
		treatmentNames: {
			'Heart Bypass Surgery': 'হৃদ বাইপাস সার্জারি',
			'Knee Replacement': 'হাঁটু প্রতিস্থাপন',
			'Hip Replacement': 'হিপ প্রতিস্থাপন',
			'IVF Treatment': 'IVF চিকিৎসা',
			'Dental Implant': 'দন্ত ইমপ্লান্ট',
			'Spinal Fusion': 'স্পাইনাল ফিউশন',
			'Liver Transplant': 'লিভার প্রতিস্থাপন',
			'Kidney Transplant': 'কিডনি প্রতিস্থাপন',
			'Cataract Surgery': 'ছানি অস্ত্রোপচার',
		} as Record<string, string>,
		stats: [
			{ title: '৮০% পর্যন্ত সাশ্রয়', description: 'পশ্চিমা দেশগুলোর তুলনায়' },
			{ title: 'বিশ্বমানের হাসপাতাল', description: 'JCI ও NABH স্বীকৃত' },
			{ title: 'অভিজ্ঞ বিশেষজ্ঞ', description: 'বিশ্বব্যাপী স্বীকৃত ডাক্তার' },
		],
	},
	detail: {
		savingsBadgeTemplate: (pct: number) => `${pct}% পর্যন্ত সাশ্রয়`,
		overviewHeading: 'সংক্ষিপ্ত বিবরণ',
		proceduresHeading: 'আমরা যে পদ্ধতিগুলো অফার করি',
		whyChooseTemplate: (name: string) => `${name}-এর জন্য কেন ভারত বেছে নেবেন`,
		startingPriceLabel: 'শুরুর মূল্য',
		avgSavingsLabel: 'গড় সাশ্রয়',
		partnerHospitalsLabel: 'অংশীদার হাসপাতাল',
		packageHeading: 'প্যাকেজ খরচ ও হাসপাতালে থাকার সময়',
		sampleBadgeTemplate: (procedure: string) => `নমুনা প্যাকেজ: ${procedure}`,
		packageIntroTemplate: (priceHtml: string, daysHtml: string) =>
			`প্যাকেজ শুরু হয় ${priceHtml} থেকে — আগমন থেকে ছাড়পত্র ও ফলো-আপ পর্যন্ত ভারতে প্রায় ${daysHtml} পরিকল্পনা করুন।`,
		patientStayLabel: 'রোগীর অবস্থান',
		donorStayLabel: 'দাতার অবস্থান',
		outpatientText: 'বহির্বিভাগ / একই দিনের পদ্ধতি',
		daysTotalTemplate: (total: number, icu: number, room: number) =>
			`মোট ${total} দিন — ${icu} দিন আইসিইউ + ${room} দিন কক্ষ`,
		tableHeaders: { country: 'দেশ', cost: 'আনুমানিক খরচ', waitTime: 'অপেক্ষার সময়', successRate: 'সফলতার হার' },
		inclusionsHeading: 'প্যাকেজে যা অন্তর্ভুক্ত',
		exclusionsHeading: 'প্যাকেজে যা অন্তর্ভুক্ত নয়',
		packageNoteTemplate: (procedure: string) =>
			`প্রতিটি কেস ভিন্ন — উপরের পরিসংখ্যানগুলো ${procedure}-এর জন্য নির্দেশক শুরুর পয়েন্ট। ব্যক্তিগতকৃত, বিস্তারিত মূল্যের জন্য আপনার মেডিকেল রিপোর্ট শেয়ার করুন।`,
		ctaHeadingTemplate: (name: string) => `${name} দিয়ে শুরু করতে প্রস্তুত?`,
		ctaBody: 'আপনার মেডিকেল রিপোর্ট শেয়ার করুন এবং ২৪ ঘণ্টার মধ্যে একটি ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা পান।',
		getFreeQuote: 'বিনামূল্যে পরামর্শ নিন',
		browseAll: 'সমস্ত চিকিৎসা ব্রাউজ করুন',
		otherTreatmentsHeading: 'অন্যান্য চিকিৎসা',
	},
	faq: {
		badge: 'প্রশ্নোত্তর',
		highlight: 'প্রশ্নোত্তর',
		subtitleTemplate: (procedure: string) => `${procedure} এবং ভারতে চিকিৎসা সম্পর্কে সাধারণ প্রশ্ন।`,
	},
};

export const bnDoctorsPage = {
	listing: {
		pageHeaderBadge: 'আমাদের চিকিৎসা দল',
		pageHeaderTitle: 'যে ডাক্তাররা',
		pageHeaderHighlight: 'আপনার যত্ন নেন',
		pageHeaderSubtitle:
			'আমাদের নেটওয়ার্কের প্রতিটি বিশেষজ্ঞ বোর্ড-সার্টিফাইড, JCI বা NABH-স্বীকৃত হাসপাতালে যুক্ত, এবং কোনো কেসের সাথে যুক্ত করার আগে আমাদের মেডিকেল বোর্ড দ্বারা যাচাইকৃত।',
		gridBadge: 'আমাদের চিকিৎসা দল',
		gridTitle: 'আমাদের',
		gridHighlight: 'বিশেষজ্ঞদের সাথে পরিচিত হন',
		gridSubtitle: 'স্বীকৃত হাসপাতালে যুক্ত বোর্ড-সার্টিফাইড বিশেষজ্ঞরা, আমরা যে প্রতিটি কেস গ্রহণ করি তার জন্য যাচাইকৃত।',
	},
	card: {
		yearsExpLabel: 'বছরের অভিজ্ঞতা',
		reviewsLabel: 'রিভিউ',
		contactLabel: 'প্রোফাইল দেখুন',
		verifiedLabel: 'যাচাইকৃত বিশেষজ্ঞ',
	},
	detail: {
		home: 'হোম',
		ourDoctors: 'আমাদের ডাক্তারগণ',
		photoLabel: 'ছবি',
		verifiedSpecialist: 'যাচাইকৃত বিশেষজ্ঞ',
		reviewsSuffix: 'রিভিউ',
		yearsExperienceSuffix: 'বছরের অভিজ্ঞতা',
		bookAppointment: 'অ্যাপয়েন্টমেন্ট বুক করুন',
		videoConsultation: 'ভিডিও পরামর্শ',
		tabs: {
			about: 'ডাক্তার সম্পর্কে',
			specializations: 'বিশেষত্ব',
			qualifications: 'যোগ্যতা',
			experience: 'অভিজ্ঞতা',
			awards: 'পুরস্কার',
			memberships: 'সদস্যপদ',
		},
		aboutPrefix: 'সম্পর্কে',
		patientReviews: 'রোগীর রিভিউ',
		otherSpecialists: 'অন্যান্য বিশেষজ্ঞ',
		bookConsultation: 'পরামর্শ বুক করুন',
		sendCaseTemplate: (name: string) => `${name}-এর সমন্বয় দলের কাছে আপনার কেস পাঠান`,
		whatsappMessageTemplate: (name: string) => `নমস্কার, আমি ${name}-এর সাথে একটি ভিডিও পরামর্শ বুক করতে চাই।`,
	},
};
