/**
 * Bengali translations for src/data/destinations.ts.
 * Keyed by slug. Numeric fields (hospitalsCount, avgSavings) are reused from the English source.
 */

export interface DestinationDataBn {
	description: string;
	popularTreatments: string[];
}

export const bnDestinations: Record<string, DestinationDataBn> = {
	'delhi-ncr': {
		description:
			'ভারতের রাজধানী অঞ্চল, যেখানে রয়েছে শীর্ষস্থানীয় মাল্টি-স্পেশালিটি হাসপাতাল, উন্নত হৃদরোগ ও নিউরো চিকিৎসায় অগ্রণী।',
		popularTreatments: ['হৃদ শল্যচিকিৎসা', 'নিউরোলজি', 'অর্থোপেডিকস'],
	},
	mumbai: {
		description: 'ভারতের আর্থিক রাজধানী, যেখানে রয়েছে ক্যান্সার চিকিৎসা ও অঙ্গ প্রতিস্থাপনের জন্য বিখ্যাত আন্তর্জাতিকভাবে স্বীকৃত হাসপাতাল।',
		popularTreatments: ['অনকোলজি', 'অঙ্গ প্রতিস্থাপন', 'হৃদ শল্যচিকিৎসা'],
	},
	chennai: {
		description: 'ভারতের স্বাস্থ্য রাজধানী নামে পরিচিত, প্রতিটি বিশেষত্বে আন্তর্জাতিক রোগীদের চিকিৎসায় দশকের অভিজ্ঞতা সম্পন্ন।',
		popularTreatments: ['হৃদ শল্যচিকিৎসা', 'অর্থোপেডিকস', 'বন্ধ্যাত্ব চিকিৎসা'],
	},
	bangalore: {
		description: 'একটি সমৃদ্ধ প্রযুক্তি-চালিত স্বাস্থ্যসেবা কেন্দ্র, যেখানে শীর্ষ সার্জনরা দেশের সবচেয়ে উন্নত জয়েন্ট-প্রতিস্থাপন কেন্দ্রগুলোর সাথে যুক্ত।',
		popularTreatments: ['অর্থোপেডিকস', 'কসমেটিক সার্জারি', 'হৃদ শল্যচিকিৎসা'],
	},
	hyderabad: {
		description: 'কিডনি ও অঙ্গ প্রতিস্থাপনে বিশেষজ্ঞ অত্যাধুনিক হাসপাতালসহ একটি দ্রুত বর্ধনশীল মেডিকেল কেন্দ্র।',
		popularTreatments: ['অঙ্গ প্রতিস্থাপন', 'নেফ্রোলজি', 'অনকোলজি'],
	},
	kochi: {
		description: 'আয়ুর্বেদের জন্মস্থান, যা ঐতিহ্যবাহী সুস্থতা চিকিৎসাকে শীর্ষস্থানীয় বন্ধ্যাত্ব ও নারী স্বাস্থ্যসেবার সাথে মিলিয়েছে।',
		popularTreatments: ['বন্ধ্যাত্ব চিকিৎসা', 'আয়ুর্বেদ ও সুস্থতা', 'হৃদ শল্যচিকিৎসা'],
	},
	kolkata: {
		description: 'পূর্ব ভারতের শীর্ষস্থানীয় মেডিকেল কেন্দ্র, যেখানে রয়েছে দেশের সবচেয়ে সম্মানিত চক্ষু ও ক্যান্সার ইনস্টিটিউট।',
		popularTreatments: ['চক্ষু চিকিৎসা', 'অনকোলজি', 'অর্থোপেডিকস'],
	},
	ahmedabad: {
		description: 'গুজরাটের মেডিকেল রাজধানী, আধুনিক হাসপাতাল ক্যাম্পাসে সাশ্রয়ী ও উচ্চমানের লিভার ও কিডনি প্রতিস্থাপন সেবা প্রদান করে।',
		popularTreatments: ['লিভার প্রতিস্থাপন', 'কিডনি প্রতিস্থাপন', 'হৃদ শল্যচিকিৎসা'],
	},
};

export const getBnDestination = (slug: string) => bnDestinations[slug];
