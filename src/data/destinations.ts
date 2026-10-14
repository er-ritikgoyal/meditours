export interface Destination {
	slug: string;
	state: string;
	city: string;
	description: string;
	hospitalsCount: number;
	avgSavings: number;
	popularTreatments: string[];
	theme?: 'blue' | 'teal' | 'green';
}

export const destinations: Destination[] = [
	{
		slug: 'delhi-ncr',
		state: 'Delhi',
		city: 'Delhi NCR',
		description:
			"India's capital region, home to top-tier multi-specialty hospitals leading in advanced cardiac and neuro care.",
		hospitalsCount: 150,
		avgSavings: 78,
		popularTreatments: ['Cardiac Surgery', 'Neurology', 'Orthopedics'],
		theme: 'blue',
	},
	{
		slug: 'mumbai',
		state: 'Maharashtra',
		city: 'Mumbai',
		description:
			"India's financial capital, with internationally accredited hospitals renowned for cancer care and organ transplants.",
		hospitalsCount: 130,
		avgSavings: 76,
		popularTreatments: ['Oncology', 'Organ Transplant', 'Cardiac Surgery'],
		theme: 'teal',
	},
	{
		slug: 'chennai',
		state: 'Tamil Nadu',
		city: 'Chennai',
		description:
			"Known as India's health capital, with decades of experience treating international patients across every specialty.",
		hospitalsCount: 110,
		avgSavings: 65,
		popularTreatments: ['Cardiac Surgery', 'Orthopedics', 'Fertility Treatment'],
		theme: 'green',
	},
	{
		slug: 'bangalore',
		state: 'Karnataka',
		city: 'Bangalore',
		description:
			"A thriving tech-driven healthcare hub, pairing top surgeons with some of the country's most advanced joint-replacement centers.",
		hospitalsCount: 95,
		avgSavings: 64,
		popularTreatments: ['Orthopedics', 'Cosmetic Surgery', 'Cardiac Surgery'],
		theme: 'blue',
	},
	{
		slug: 'hyderabad',
		state: 'Telangana',
		city: 'Hyderabad',
		description:
			'A fast-growing medical hub with state-of-the-art hospitals specializing in kidney and organ transplants.',
		hospitalsCount: 85,
		avgSavings: 68,
		popularTreatments: ['Organ Transplant', 'Nephrology', 'Oncology'],
		theme: 'teal',
	},
	{
		slug: 'kochi',
		state: 'Kerala',
		city: 'Kochi',
		description:
			"The birthplace of Ayurveda, blending traditional wellness treatments with leading fertility and women's health care.",
		hospitalsCount: 45,
		avgSavings: 65,
		popularTreatments: ['Fertility Treatment', 'Ayurveda & Wellness', 'Cardiac Surgery'],
		theme: 'green',
	},
	{
		slug: 'kolkata',
		state: 'West Bengal',
		city: 'Kolkata',
		description:
			"Eastern India's leading medical hub, home to some of the country's most respected eye-care and cancer institutes.",
		hospitalsCount: 60,
		avgSavings: 71,
		popularTreatments: ['Eye Care', 'Oncology', 'Orthopedics'],
		theme: 'blue',
	},
	{
		slug: 'ahmedabad',
		state: 'Gujarat',
		city: 'Ahmedabad',
		description:
			"Gujarat's medical capital, offering affordable, high-quality liver and kidney transplant care at modern hospital campuses.",
		hospitalsCount: 55,
		avgSavings: 70,
		popularTreatments: ['Liver Transplant', 'Kidney Transplant', 'Cardiac Surgery'],
		theme: 'teal',
	},
];

export const getDestinationBySlug = (slug: string) => destinations.find((d) => d.slug === slug);
