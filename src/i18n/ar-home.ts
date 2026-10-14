/**
 * Arabic translations for the remaining homepage-only sections:
 * OurDoctors, OurPartnerHospitals (homepage heading), SupportServices, TravelProcess.
 */

export const arDoctors = {
	badge: 'فريقنا الطبي',
	title: 'أطباء دائمًا',
	highlight: 'يهتمون بك',
	subtitle: 'اختصاصيون معتمدون، منتسبون لمستشفيات معتمدة، تم التحقق منهم لكل حالة نتولاها.',
	yearsExpLabel: 'سنوات خبرة',
	reviewsLabel: 'تقييمات',
	contactLabel: 'تواصل',
	verifiedLabel: 'اختصاصي موثّق',
	doctors: [
		{
			specialty: 'جراح قلب',
			qualification: 'بكالوريوس طب وجراحة، ماجستير، دكتوراه — جراحة القلب والصدر',
			languages: ['الإنجليزية', 'الهندية'],
		},
		{
			specialty: 'جراح عظام',
			qualification: 'بكالوريوس طب وجراحة، ماجستير — جراحة العظام واستبدال المفاصل',
			languages: ['الإنجليزية', 'الهندية'],
		},
		{
			specialty: 'اختصاصي أورام',
			qualification: 'بكالوريوس طب وجراحة، دكتوراه في الطب — علم الأورام',
			languages: ['الإنجليزية', 'الهندية', 'المالايالامية'],
		},
		{
			specialty: 'جراح تجميل وترميم',
			qualification: 'دكتوراه في الطب — الجراحة الترميمية والتجميلية',
			languages: ['الإنجليزية', 'الهندية'],
		},
		{
			specialty: 'اختصاصي أعصاب',
			qualification: 'بكالوريوس طب وجراحة، دكتوراه فرعية — طب الأعصاب',
			languages: ['الإنجليزية', 'الهندية', 'التاميلية'],
		},
		{
			specialty: 'اختصاصي خصوبة',
			qualification: 'دكتوراه في الطب — الغدد الصماء التناسلية',
			languages: ['الإنجليزية', 'الإسبانية'],
		},
	],
};

export const arPartnerHospitalsHome = {
	badge: 'شبكتنا',
	title: 'مستشفياتنا',
	highlight: 'الشريكة',
	subtitle: 'نتعاون فقط مع مستشفيات معتمدة تستوفي المعايير الدولية للسلامة والنظافة ونتائج العلاج.',
};

export const arSupportServices = {
	badge: 'دعم المرضى',
	titleLead: 'دعم يرافقك،',
	titleHighlight: 'أينما كنت',
	subtitle: 'من التأشيرة إلى التعافي في المنزل، يرافقك منسّقونا في كل خطوة.',
	services: [
		{
			icon: 'passport' as const,
			title: 'مساعدة التأشيرة الطبية',
			description: 'يُعِدّ اختصاصيونا خطابات الدعوة والمستندات لضمان الموافقة على تأشيرتك الطبية دون تأخير.',
			theme: 'blue' as const,
		},
		{
			icon: 'video' as const,
			title: 'استشارة فيديو عن بُعد',
			description: 'تحدث مباشرة عبر الإنترنت مع اختصاصيك لتأكيد التشخيص وخطة العلاج قبل السفر.',
			theme: 'teal' as const,
		},
		{
			icon: 'translate' as const,
			title: 'خدمات الترجمة الفورية',
			description: 'مترجم طبي معتمد حاضر في كل استشارة وإجراء، باللغة التي تشعر فيها بالراحة أكثر.',
			theme: 'green' as const,
		},
		{
			icon: 'opinion' as const,
			title: 'رأي طبي ثانٍ',
			description: 'احصل على مراجعة مستقلة لتشخيصك وخيارات علاجك من اختصاصي معتمد في الخارج.',
			theme: 'blue' as const,
		},
		{
			icon: 'care' as const,
			title: 'تنسيق الرعاية بعد العلاج',
			description: 'يجدول منسّقك المتابعات ويشارك التقارير مع طبيبك بعد عودتك إلى المنزل.',
			theme: 'teal' as const,
		},
	],
};

export const arTravelProcess = {
	badge: 'دليل خطوة بخطوة',
	titleLead: 'رحلة المريض',
	titleHighlight: 'الدولي',
	subtitle: 'من سؤالك الأول إلى عودتك إلى الوطن — نرافقك في كل خطوة على الطريق',
	steps: [
		{
			icon: 'document' as const,
			title: 'أرسل المعلومات الطبية للمريض',
			description: 'شارك تقاريرك وأسئلتك — احصل على رأي ذي صلة خلال 24 ساعة.',
		},
		{
			icon: 'stethoscope' as const,
			title: 'احصل على الرأي الطبي وتقدير التكلفة',
			description: 'اختر بحرية من بين أفضل المستشفيات والأطباء المنتسبين لدينا.',
		},
		{
			icon: 'idCard' as const,
			title: 'استلم خطاب دعوة التأشيرة',
			description: 'نتولى جميع إجراءات التأشيرة الطبية نيابة عنك.',
		},
		{
			icon: 'plane' as const,
			title: 'خطّط لرحلتك',
			description: 'يتم ترتيب الفنادق أو الشقق أو دور الضيافة بالقرب من المستشفى.',
		},
		{
			icon: 'car' as const,
			title: 'الاستقبال في المطار',
			description: 'استقبال في المطار، توصيل، وشريحة اتصال مجانية.',
		},
		{
			icon: 'building' as const,
			title: 'تابع رحلة علاجك',
			description: 'مترجم متفانٍ ومدير حالة يرافقانك طوال العملية.',
		},
		{
			icon: 'home' as const,
			title: 'العودة إلى الوطن',
			description: 'دعم متابعة بعد العلاج بمجرد عودتك إلى المنزل.',
		},
	],
};
