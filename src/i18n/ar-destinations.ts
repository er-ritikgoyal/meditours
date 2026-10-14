/**
 * Arabic translations for src/data/destinations.ts.
 * Keyed by slug. Numeric fields (hospitalsCount, avgSavings) are reused from the English source.
 */

export interface DestinationDataAr {
	description: string;
	popularTreatments: string[];
}

export const arDestinations: Record<string, DestinationDataAr> = {
	'delhi-ncr': {
		description:
			'منطقة العاصمة الهندية، موطن لمستشفيات متعددة التخصصات رائدة، ورائدة في أمراض القلب والأعصاب المتقدمة.',
		popularTreatments: ['جراحة القلب', 'طب الأعصاب', 'جراحة العظام'],
	},
	mumbai: {
		description:
			'العاصمة المالية للهند، تضم مستشفيات معتمدة دوليًا، مشهورة برعاية الأورام وزراعة الأعضاء.',
		popularTreatments: ['الأورام', 'زراعة الأعضاء', 'جراحة القلب'],
	},
	chennai: {
		description:
			'تُلقَّب بالعاصمة الطبية للهند، وتتمتع بعقود من الخبرة في علاج المرضى الدوليين في جميع التخصصات.',
		popularTreatments: ['جراحة القلب', 'جراحة العظام', 'علاج الخصوبة'],
	},
	bangalore: {
		description:
			'مركز طبي تقني مزدهر، يجمع بين جراحين بارزين وبعض أكثر مراكز استبدال المفاصل تطورًا في البلاد.',
		popularTreatments: ['جراحة العظام', 'الجراحة التجميلية', 'جراحة القلب'],
	},
	hyderabad: {
		description: 'مركز رعاية صحية سريع النمو يضم مستشفيات حديثة متخصصة في زراعة الكلى وزراعة الأعضاء.',
		popularTreatments: ['زراعة الأعضاء', 'طب الكلى', 'الأورام'],
	},
	kochi: {
		description:
			'مهد الأيورفيدا، يجمع بين العلاجات الصحية التقليدية والخدمات الرائدة في علاج الخصوبة وصحة المرأة.',
		popularTreatments: ['علاج الخصوبة', 'الأيورفيدا والعافية', 'جراحة القلب'],
	},
	kolkata: {
		description: 'المركز الطبي الرائد في شرق الهند، يضم بعض أكثر معاهد طب العيون والأورام احترامًا في البلاد.',
		popularTreatments: ['طب العيون', 'الأورام', 'جراحة العظام'],
	},
	ahmedabad: {
		description:
			'العاصمة الطبية لولاية غوجارات، تقدم رعاية عالية الجودة بأسعار معقولة لزراعة الكبد والكلى في مجمعات مستشفيات حديثة.',
		popularTreatments: ['زراعة الكبد', 'زراعة الكلى', 'جراحة القلب'],
	},
};

export const getArDestination = (slug: string) => arDestinations[slug];
