/**
 * Arabic translations for page-level chrome on About, Contact, Destinations,
 * and Treatments (list + detail). Deep per-item content lives in
 * ar-treatments.ts / ar-destinations.ts; this file covers headings, labels,
 * form copy, and other component props for those pages.
 */

export const arAbout = {
	pageHeader: {
		badge: 'منذ اليوم الأول',
		title: 'من نحن،',
		highlight: 'ولماذا يهم ذلك',
		subtitle:
			'نحن فريق من منسّقي المرضى ومراجعي الحالات الطبية وخبراء اللوجستيات، نؤمن بأن الرعاية الطبية العالمية المستوى لا ينبغي أن تعتمد على مكان إقامتك.',
	},
	story: {
		badge: 'قصتنا',
		titleLead: 'أُسِّسنا لنجعل الرعاية الطبية العالمية المستوى في متناول',
		titleHighlight: 'الجميع',
		paragraphs: [
			'تأسست Alis Pro Med Tour لسد الفجوة بين الرعاية الطبية العالمية المستوى وتكلفتها. نؤمن أن مكان ولادتك لا ينبغي أن يحدد قدرتك على تحمل تكاليف الجراحة التي تحتاجها. منذ تأسيسنا، رافقنا آلاف المرضى — من الرأي الطبي الأول حتى التعافي الكامل — عبر أكثر المستشفيات اعتمادًا في الهند، ووفّرنا للعائلات مبالغ قد تُغيّر حياتهم، دون أي تنازل عن الجودة.',
			'ما بدأ كفريق صغير من منسّقي المرضى تطور إلى شبكة شاملة من خدمات الدعم تمتد عبر أكثر من 40 دولة، مع لجان طبية داخلية وخبراء تأشيرات متفانين ودعم متعدد اللغات على مدار الساعة — لأن التعامل مع نظام رعاية صحية في بلد غريب لا ينبغي أن يكون رحلة يخوضها المرء وحده.',
		],
		statsLabels: ['مستشفى شريك', 'دولة مدعومة', 'دعم المرضى', 'مريض تمت مساعدته'],
		valuesTitle: 'قيمنا الأساسية',
		values: [
			{
				title: 'الرحمة أولاً',
				description: 'كل قرار يبدأ بما هو الأفضل للمريض الذي أمامنا — وليس الأسرع أو الأكثر ربحًا.',
			},
			{
				title: 'شفافية تامة',
				description: 'أسعار واضحة، جداول زمنية صادقة، ولا رسوم خفية. ما نعرضه هو ما تدفعه.',
			},
			{
				title: 'تميّز إكلينيكي',
				description: 'نتعاون فقط مع مستشفيات معتمدة من JCI وNABH ومع اختصاصيين ذوي سجل حافل مثبت.',
			},
			{
				title: 'مساءلة دائمة',
				description: 'من أول رسالة إلى آخر مكالمة متابعة، يدير حالتك منسّق واحد من البداية إلى النهاية.',
			},
		],
	},
	journey: {
		badge: 'رحلتنا',
		titleLead: 'أكثر من 5 سنوات من بناء',
		titleHighlight: 'ثقة المرضى',
		subtitle: 'من فريق صغير من المنسّقين إلى شبكة مرضى في أكثر من 40 دولة.',
		milestones: [
			{ title: 'التأسيس في مومباي', description: 'انطلقت Alis Pro Med Tour بعدد قليل من المستشفيات الشريكة في دلهي ومومباي.' },
			{
				title: 'توسّع شبكة الاعتماد',
				description: 'توسّعنا لتشمل أكثر من 100 مستشفى معتمد من JCI وNABH في أبرز المراكز الطبية في الهند.',
			},
			{
				title: 'التوسع العالمي',
				description: 'بدأنا دعم مرضى من أكثر من 20 دولة، مع دعم متفانٍ للتأشيرات والسفر.',
			},
			{
				title: 'إنجاز 5,000 مريض',
				description: 'تجاوزنا علاج 5,000 مريض دولي بنجاح، رغم اضطرابات السفر العالمية.',
			},
			{
				title: 'إطلاق الدعم الشامل على مدار الساعة',
				description: 'قدّمنا دعمًا مستمرًا متعدد اللغات للمرضى ومنسّقي حالات متفانين.',
			},
			{
				title: 'أكثر من 40 دولة، أكثر من 10,000 مريض',
				description: 'ندعم اليوم مرضى من أكثر من 40 دولة عبر أكثر من 100 مستشفى شريك معتمد على مستوى البلاد.',
			},
		],
	},
	testimonials: {
		badge: 'قصص المرضى',
		title: 'ماذا يقول',
		highlight: 'مرضانا',
		subtitle: 'نتائج حقيقية من مرضى حقيقيين وثقوا بنا لرعايتهم.',
		items: [
			{
				quote:
					'من أول رسالة حتى يوم عودتي للتعافي في المنزل، كانت كل خطوة موضع اهتمام. فريق أمراض القلب في دلهي منحني حياة جديدة، ولم أدفع سوى جزء يسير من التكلفة في بلدي.',
				name: 'James Whitfield',
				countryCode: 'gb',
				country: 'المملكة المتحدة',
				treatment: 'جراحة مجازة القلب',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'كنت متوترة بشأن السفر للخارج لإجراء جراحة، لكن منسّقتي كانت تجيب على كل سؤال حتى في الثانية صباحًا إن لزم الأمر. المستشفى في إسطنبول بدا أشبه بفندق خمس نجوم منه بعيادة.',
				name: 'Amara Okafor',
				countryCode: 'ng',
				country: 'نيجيريا',
				treatment: 'جراحة تجميلية',
				rating: 5,
				theme: 'teal' as const,
			},
			{
				quote:
					'وفّرت أكثر من 40,000 دولار في جراحة العمود الفقري لابنتي دون أي تنازل عن الجودة. الجراح في بانكوك تدرّب في الولايات المتحدة، وكان ذلك واضحًا في كل تفصيل من رعاية ابنتي.',
				name: 'Michael Chen',
				countryCode: 'ca',
				country: 'كندا',
				treatment: 'جراحة عظام الأطفال',
				rating: 5,
				theme: 'green' as const,
			},
			{
				quote:
					'مساعدة التأشيرة، الاستقبال في المطار، المترجم، الفندق القريب من المستشفى — فكّروا في كل شيء لأتمكن من التركيز تمامًا على التعافي. ما كنت لأستطيع تنظيم هذه الرحلة بنفسي.',
				name: 'Sofia Marchetti',
				countryCode: 'it',
				country: 'إيطاليا',
				treatment: 'علاج الخصوبة',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'ربطتني اللجنة الطبية باختصاصي يعالج حالتي تحديدًا بانتظام، وليس بشكل عام فحسب. تلك الخبرة أحدثت فرقًا كبيرًا في تعافيّ.',
				name: 'David Okoye',
				countryCode: 'us',
				country: 'الولايات المتحدة',
				treatment: 'الأورام',
				rating: 4,
				theme: 'teal' as const,
			},
			{
				quote:
					'استمرت مكالمات المتابعة لأشهر بعد عودتي إلى المنزل. لم أشعر يومًا أن العلاقة انتهت عند المطار — كانوا مهتمين حقًا بتعافيي.',
				name: 'Hana Yamamoto',
				countryCode: 'jp',
				country: 'اليابان',
				treatment: 'استبدال المفصل',
				rating: 5,
				theme: 'green' as const,
			},
		],
	},
	faq: {
		badge: 'لديك أسئلة؟',
		title: 'حولنا —',
		highlight: 'إجابات',
		subtitle: 'أكثر الأسئلة التي نسمعها من المرضى الذين يفكرون في العلاج بالخارج.',
	},
};

export const arContact = {
	pageHeader: {
		badge: 'نحن هنا للمساعدة',
		title: 'تواصل مع',
		highlight: 'فريقنا',
		subtitle: 'لديك أسئلة حول العلاج أو التكلفة أو لوجستيات السفر؟ عادةً ما يرد منسّقو المرضى خلال ساعات.',
	},
	quickOptions: [
		{ title: 'اتصل بنا', detail: '+91 98217 01155' },
		{ title: 'واتساب', detail: 'تحدث مع منسّق' },
		{ title: 'راسلنا', detail: 'care@alispromeditours.com' },
	],
	form: {
		heading: 'أرسل لنا رسالة',
		subheading: 'شارك بعض التفاصيل وسيتواصل معك فريقنا الطبي بشأن الخطوات التالية.',
		fullName: 'الاسم الكامل',
		fullNamePlaceholder: 'اسمك الكامل',
		emailAddress: 'البريد الإلكتروني',
		emailPlaceholder: 'you@example.com',
		country: 'الدولة',
		selectCountryPlaceholder: '---اختر الدولة---',
		treatmentOfInterest: 'العلاج المطلوب',
		selectTreatmentPlaceholder: 'اختر علاجًا',
		phoneWhatsapp: 'الهاتف / واتساب',
		phonePlaceholder: '555 123 4567',
		message: 'الرسالة',
		messagePlaceholder: 'أخبرنا عن حالتك، الجدول الزمني المفضل، أو أي أسئلة لديك...',
		medicalReports: 'التقارير الطبية (اختياري)',
		fileHint: 'PDF أو JPG، حتى 5 ميغابايت',
		submit: 'إرسال الرسالة',
		successMessage: 'شكرًا لتواصلك — سيتواصل معك منسّق المرضى قريبًا.',
	},
	info: {
		heading: 'معلومات الاتصال',
		officeAddressLabel: 'عنوان المكتب',
		phoneLabel: 'الهاتف',
		emailLabel: 'البريد الإلكتروني',
		supportHoursLabel: 'ساعات الدعم',
		supportHoursValue: 'دعم على مدار الساعة',
		coordinatorLabel: 'منسّق مخصص',
		coordinatorDetail: 'يتم تعيينه خلال 24 ساعة من رسالتك الأولى',
		noteText: 'تفضّل التحدث أولاً؟ راسلنا عبر واتساب وسنعاود الاتصال بك خلال ساعة.',
	},
	treatmentOptions: [
		'أمراض القلب',
		'جراحة العظام',
		'الأورام',
		'الجراحة التجميلية والترميمية',
		'علاج الخصوبة',
		'زراعة الأعضاء',
		'طب الأسنان',
		'طب العيون',
		'ENT (Ear, Nose & Throat)',
		'Neurology & Neurosurgery',
		'Spine Surgery',
		'Bariatric Surgery',
		'Nephrology & Urology',
		'أخرى',
	],
};

export const arDestinationsPage = {
	grid: {
		badge: 'مراكز طبية في جميع أنحاء الهند',
		title: 'اكتشف',
		highlight: 'أبرز المراكز الطبية في الهند',
		subtitle: 'تضم كل مدينة أدناه مستشفيات معتمدة من JCI أو NABH، تم التحقق منها من قبل لجنتنا الطبية.',
		exploreLabel: 'استكشف الوجهة',
	},
	detail: {
		verifiedBadge: 'شبكة شركاء موثّقة',
		hospitalsInLabel: 'مستشفيات في',
		hospitalsInSubtitleTemplate: (city: string) =>
			`مستشفيات معتمدة في ${city}، تم التحقق منها من قبل لجنتنا الطبية من حيث السلامة والنظافة ونتائج العلاج.`,
		soonTitleTemplate: (city: string) => `ملفات المستشفيات في ${city} قادمة قريبًا`,
		soonBodyTemplate: (city: string) =>
			`نعمل على إضافة مستشفيات شريكة موصى بها في ${city}. في هذه الأثناء، شارك حالتك مع أحد منسّقينا وسنربطك مباشرة بمستشفى معتمد.`,
		talkToCoordinator: 'تحدث مع منسّق',
		otherHubsTitle: 'مراكز طبية أخرى',
	},
};

export const arTreatmentsPage = {
	grid: {
		badge: 'تخصصاتنا',
		title: 'العلاجات التي',
		highlight: 'نتخصص فيها',
		subtitle: 'اختصاصيون معتمدون في كل تخصص رئيسي، في مستشفيات معتمدة حول العالم.',
		searchPlaceholder: 'ابحث عن علاج — مثل أمراض القلب، الأسنان، التجميل...',
		searchAriaLabel: 'البحث عن علاج',
		clearAriaLabel: 'مسح البحث',
		showingCountTemplate: 'عرض {visible} من {total} علاج',
		noResultsTitle: 'لم يتم العثور على علاجات',
		noResultsBody: 'جرّب كلمة بحث مختلفة أو استكشف جميع تخصصاتنا أعلاه.',
		fromPrefix: 'ابتداءً من',
		learnMore: 'اعرف المزيد',
	},
	costComparison: {
		title: 'مقارنة تكاليف العلاج حول العالم',
		subtitle: 'احصل على رعاية طبية عالمية المستوى في الهند، ووفّر حتى 80% من تكلفة العلاج دون أي تنازل عن الجودة.',
		note: 'جميع الأسعار متوسطات تقديرية بالدولار الأمريكي وقد تختلف حسب المستشفى والاختصاصي ومدى تعقيد الحالة.',
		scrollHint: 'اسحب لعرض جميع الدول الخمس، بما فيها الهند',
		mostAffordable: 'الأكثر توفيرًا',
		saveTemplate: (pct: number) => `وفّر ${pct}%`,
		countries: { usa: 'الولايات المتحدة', uk: 'المملكة المتحدة', germany: 'ألمانيا', uae: 'الإمارات العربية المتحدة', india: 'الهند' },
		treatmentNames: {
			'Heart Bypass Surgery': 'جراحة مجازة القلب',
			'Knee Replacement': 'استبدال مفصل الركبة',
			'Hip Replacement': 'استبدال مفصل الورك',
			'IVF Treatment': 'علاج أطفال الأنابيب',
			'Dental Implant': 'زراعة الأسنان',
			'Spinal Fusion': 'دمج الفقرات',
			'Liver Transplant': 'زراعة الكبد',
			'Kidney Transplant': 'زراعة الكلى',
			'Cataract Surgery': 'جراحة الساد (الماء الأبيض)',
		} as Record<string, string>,
		stats: [
			{ title: 'وفّر حتى 80%', description: 'مقارنة بالدول الغربية' },
			{ title: 'مستشفيات عالمية المستوى', description: 'معتمدة من JCI وNABH' },
			{ title: 'اختصاصيون ذوو خبرة', description: 'أطباء معترف بهم عالميًا' },
		],
	},
	detail: {
		savingsBadgeTemplate: (pct: number) => `وفّر حتى ${pct}%`,
		overviewHeading: 'نظرة عامة',
		proceduresHeading: 'الإجراءات التي نقدمها',
		whyChooseTemplate: (name: string) => `لماذا تختار الهند لعلاج ${name}`,
		startingPriceLabel: 'السعر الابتدائي',
		avgSavingsLabel: 'متوسط التوفير',
		partnerHospitalsLabel: 'المستشفيات الشريكة',
		packageHeading: 'تكلفة الباقة ومدة الإقامة بالمستشفى',
		sampleBadgeTemplate: (procedure: string) => `باقة نموذجية: ${procedure}`,
		packageIntroTemplate: (priceHtml: string, daysHtml: string) =>
			`تبدأ الباقات من ${priceHtml} — تتوقع إقامة حوالي ${daysHtml} في الهند، من الوصول حتى الخروج والمتابعة.`,
		patientStayLabel: 'مدة إقامة المريض',
		donorStayLabel: 'مدة إقامة المتبرع',
		outpatientText: 'إجراء عيادات خارجية / في نفس اليوم',
		daysTotalTemplate: (total: number, icu: number, room: number) =>
			`إجمالي ${total} يومًا — ${icu} يومًا في العناية المركزة + ${room} يومًا في الغرفة`,
		tableHeaders: { country: 'الدولة', cost: 'التكلفة التقديرية', waitTime: 'وقت الانتظار', successRate: 'معدل النجاح' },
		inclusionsHeading: 'ما تشمله الباقة',
		exclusionsHeading: 'ما لا تشمله الباقة',
		packageNoteTemplate: (procedure: string) =>
			`كل حالة مختلفة — الأرقام أعلاه هي نقطة انطلاق مرجعية لعلاج ${procedure}. شارك تقاريرك الطبية للحصول على عرض سعر مفصل وشخصي.`,
		ctaHeadingTemplate: (name: string) => `مستعد للبدء في ${name}؟`,
		ctaBody: 'شارك تقاريرك الطبية واحصل على خطة علاج شخصية خلال 24 ساعة.',
		getFreeQuote: 'احصل على استشارة مجانية',
		browseAll: 'تصفح جميع العلاجات',
		otherTreatmentsHeading: 'علاجات أخرى',
	},
	faq: {
		badge: 'الأسئلة الشائعة',
		highlight: 'الأسئلة الشائعة',
		subtitleTemplate: (procedure: string) => `أسئلة شائعة حول ${procedure} والعلاج في الهند.`,
	},
};

export const arDoctorsPage = {
	listing: {
		pageHeaderBadge: 'فريقنا الطبي',
		pageHeaderTitle: 'أطباء',
		pageHeaderHighlight: 'يهتمون بك',
		pageHeaderSubtitle:
			'كل أخصائي في شبكتنا معتمد مهنيًا، ويعمل في مستشفى حاصل على اعتماد JCI أو NABH، ويخضع لتقييم مجلسنا الطبي قبل تكليفه بأي حالة.',
		gridBadge: 'فريقنا الطبي',
		gridTitle: 'تعرّف على',
		gridHighlight: 'أخصائيينا',
		gridSubtitle: 'أخصائيون معتمدون في مستشفيات معتمدة، تم التحقق منهم لكل حالة نتولاها.',
	},
	card: {
		yearsExpLabel: 'سنوات الخبرة',
		reviewsLabel: 'التقييمات',
		contactLabel: 'عرض الملف الشخصي',
		verifiedLabel: 'أخصائي موثّق',
	},
	detail: {
		home: 'الرئيسية',
		ourDoctors: 'أطباؤنا',
		photoLabel: 'صورة',
		verifiedSpecialist: 'أخصائي موثّق',
		reviewsSuffix: 'تقييم',
		yearsExperienceSuffix: 'سنوات خبرة',
		bookAppointment: 'احجز موعدًا',
		videoConsultation: 'استشارة عبر الفيديو',
		tabs: {
			about: 'عن الطبيب',
			specializations: 'التخصصات',
			qualifications: 'المؤهلات',
			experience: 'الخبرة',
			awards: 'الجوائز',
			memberships: 'العضويات',
		},
		aboutPrefix: 'عن',
		patientReviews: 'آراء المرضى',
		otherSpecialists: 'أخصائيون آخرون',
		bookConsultation: 'احجز استشارة',
		sendCaseTemplate: (name: string) => `أرسل حالتك إلى فريق التنسيق الخاص بـ ${name}`,
		whatsappMessageTemplate: (name: string) => `مرحبًا، أرغب في حجز استشارة عبر الفيديو مع ${name}.`,
	},
};
