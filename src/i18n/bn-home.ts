/**
 * Bengali translations for the remaining homepage-only sections:
 * OurDoctors, OurPartnerHospitals (homepage heading), SupportServices, TravelProcess.
 */

export const bnDoctors = {
	badge: 'আমাদের মেডিকেল টিম',
	title: 'ডাক্তার যারা',
	highlight: 'আপনার যত্ন নেন',
	subtitle: 'প্রত্যয়িত বিশেষজ্ঞগণ, স্বীকৃত হাসপাতালের সাথে যুক্ত, আমরা যে প্রতিটি কেস পরিচালনা করি তার জন্য যাচাইকৃত।',
	yearsExpLabel: 'বছরের অভিজ্ঞতা',
	reviewsLabel: 'রিভিউ',
	contactLabel: 'যোগাযোগ করুন',
	verifiedLabel: 'যাচাইকৃত বিশেষজ্ঞ',
	doctors: [
		{
			specialty: 'হৃদ শল্যচিকিৎসক',
			qualification: 'MBBS, MS, MCh — কার্ডিওথোরাসিক সার্জারি',
			languages: ['ইংরেজি', 'হিন্দি'],
		},
		{
			specialty: 'অর্থোপেডিক সার্জন',
			qualification: 'MBBS, MS — অর্থোপেডিকস ও জয়েন্ট প্রতিস্থাপন',
			languages: ['ইংরেজি', 'হিন্দি'],
		},
		{
			specialty: 'অনকোলজিস্ট',
			qualification: 'MBBS, MD — মেডিকেল অনকোলজি',
			languages: ['ইংরেজি', 'হিন্দি', 'মালায়ালাম'],
		},
		{
			specialty: 'কসমেটিক ও প্লাস্টিক সার্জন',
			qualification: 'MD — প্লাস্টিক, রিকনস্ট্রাক্টিভ ও কসমেটিক সার্জারি',
			languages: ['ইংরেজি', 'হিন্দি'],
		},
		{
			specialty: 'নিউরোলজিস্ট',
			qualification: 'MBBS, DM — নিউরোলজি',
			languages: ['ইংরেজি', 'হিন্দি', 'তামিল'],
		},
		{
			specialty: 'বন্ধ্যাত্ব বিশেষজ্ঞ',
			qualification: 'MD — রিপ্রোডাক্টিভ এন্ডোক্রিনোলজি',
			languages: ['ইংরেজি', 'স্প্যানিশ'],
		},
	],
};

export const bnPartnerHospitalsHome = {
	badge: 'আমাদের নেটওয়ার্ক',
	title: 'আমাদের অংশীদার',
	highlight: 'হাসপাতাল',
	subtitle: 'আমরা কেবল সেই স্বীকৃত হাসপাতালগুলোর সাথে কাজ করি যা নিরাপত্তা, স্বাস্থ্যবিধি এবং ক্লিনিক্যাল ফলাফলের আন্তর্জাতিক মান পূরণ করে।',
};

export const bnSupportServices = {
	badge: 'রোগী সহায়তা',
	titleLead: 'এমন সহায়তা যা আপনার সাথে থাকে,',
	titleHighlight: 'আপনি যেখানেই থাকুন না কেন',
	subtitle: 'ভিসা থেকে বাড়ি ফেরার পরের সুস্থতা পর্যন্ত, আমাদের সমন্বয়কারীরা প্রতিটি ধাপে আপনার সাথে আছেন।',
	services: [
		{
			icon: 'passport' as const,
			title: 'মেডিকেল ভিসা সহায়তা',
			description: 'আমাদের বিশেষজ্ঞরা আমন্ত্রণপত্র ও নথি প্রস্তুত করেন, যাতে আপনার মেডিকেল ভিসা বিলম্ব ছাড়াই অনুমোদিত হয়।',
			theme: 'blue' as const,
		},
		{
			icon: 'video' as const,
			title: 'ভিডিও টেলি-কনসালটেশন',
			description: 'ভ্রমণের আগে আপনার রোগ নির্ণয় ও চিকিৎসা পরিকল্পনা নিশ্চিত করতে আপনার বিশেষজ্ঞের সাথে অনলাইনে সরাসরি কথা বলুন।',
			theme: 'teal' as const,
		},
		{
			icon: 'translate' as const,
			title: 'ভাষা অনুবাদ পরিষেবা',
			description: 'প্রতিটি পরামর্শ ও পদ্ধতিতে একজন প্রত্যয়িত মেডিকেল দোভাষী উপস্থিত থাকেন, আপনার সবচেয়ে স্বাচ্ছন্দ্যের ভাষায়।',
			theme: 'green' as const,
		},
		{
			icon: 'opinion' as const,
			title: 'দ্বিতীয় মেডিকেল মতামত',
			description: 'বিদেশে একজন প্রত্যয়িত বিশেষজ্ঞের কাছ থেকে আপনার রোগ নির্ণয় ও চিকিৎসার বিকল্পগুলোর স্বাধীন পর্যালোচনা পান।',
			theme: 'blue' as const,
		},
		{
			icon: 'care' as const,
			title: 'চিকিৎসা-পরবর্তী পরিচর্যা সমন্বয়',
			description: 'আপনার সমন্বয়কারী ফলো-আপের পরিকল্পনা করেন এবং বাড়ি ফেরার পর আপনার স্থানীয় ডাক্তারের সাথে রিপোর্ট শেয়ার করেন।',
			theme: 'teal' as const,
		},
	],
};

export const bnTravelProcess = {
	badge: 'ধাপে ধাপে নির্দেশিকা',
	titleLead: 'আন্তর্জাতিক রোগীর',
	titleHighlight: 'যাত্রাপথ',
	subtitle: 'আপনার প্রথম প্রশ্ন থেকে বাড়ি ফেরা পর্যন্ত — আমরা প্রতিটি ধাপে আপনার সাথে আছি',
	steps: [
		{
			icon: 'document' as const,
			title: 'রোগীর মেডিকেল বিবরণ দিন',
			description: 'আপনার রিপোর্ট ও প্রশ্ন শেয়ার করুন — ২৪ ঘণ্টার মধ্যে প্রাসঙ্গিক মতামত পান।',
		},
		{
			icon: 'stethoscope' as const,
			title: 'মেডিকেল মতামত ও খরচের প্রাক্কলন পান',
			description: 'আমাদের শীর্ষ অংশীদার হাসপাতাল ও ডাক্তারদের মধ্যে থেকে স্বাধীনভাবে বেছে নিন।',
		},
		{
			icon: 'idCard' as const,
			title: 'আপনার ভিসা আমন্ত্রণ পান',
			description: 'আমরা আপনার পক্ষে সমস্ত মেডিকেল ভিসা আনুষ্ঠানিকতা পরিচালনা করি।',
		},
		{
			icon: 'plane' as const,
			title: 'আপনার ভ্রমণ পরিকল্পনা করুন',
			description: 'হাসপাতালের কাছে হোটেল, অ্যাপার্টমেন্ট বা গেস্ট হাউজ ব্যবস্থা করা হয়।',
		},
		{
			icon: 'car' as const,
			title: 'বিমানবন্দরে আমাদের স্বাগত',
			description: 'বিমানবন্দর পিকআপ, ট্রান্সফার এবং সিম কার্ড বিনামূল্যে।',
		},
		{
			icon: 'building' as const,
			title: 'আপনার চিকিৎসা গ্রহণ করুন',
			description: 'একজন নিবেদিত দোভাষী ও কেস ম্যানেজার পুরো সময় আপনার সাথে থাকেন।',
		},
		{
			icon: 'home' as const,
			title: 'বাড়ি ফিরে যান',
			description: 'বাড়ি ফেরার পর চিকিৎসা-পরবর্তী ফলো-আপ সহায়তা।',
		},
	],
};
