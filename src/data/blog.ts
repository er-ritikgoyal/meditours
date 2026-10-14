import type { ImageMetadata } from 'astro';
import imgCardiac from '../assets/treatments/cardiac-care.jpg';
import imgOrtho from '../assets/treatments/orthopedics2.jpg';
import imgFertility from '../assets/treatments/fertility2.png';
import imgEye from '../assets/treatments/eye-care2.jpg';

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	date: string; // ISO yyyy-mm-dd
	readMinutes: number;
	image: ImageMetadata;
	/** Body paragraphs; a string starting with "## " renders as a subheading. */
	body: string[];
}

// Sample posts — replace with real articles.
export const blogPosts: BlogPost[] = [
	{
		slug: 'how-to-plan-medical-treatment-in-india',
		title: 'How to Plan Medical Treatment in India: A Step-by-Step Guide',
		excerpt: 'From sharing your reports to booking your flight, here is what the journey looks like for an international patient.',
		category: 'Planning',
		date: '2026-09-01',
		readMinutes: 5,
		image: imgCardiac,
		body: [
			'Travelling abroad for treatment is easier when you know the sequence. Most patients follow the same path from first enquiry to recovery.',
			'## 1. Share your medical reports',
			'Send recent reports, scans and a short history. A coordinator forwards them to suitable specialists for an opinion.',
			'## 2. Compare opinions and costs',
			'You receive a treatment plan with an estimated cost and stay duration, so you can decide before committing to travel.',
			'## 3. Arrange travel and stay',
			'Once you confirm, visa support, flights, accommodation and airport pickup can all be coordinated for you.',
			'## 4. Treatment and follow-up',
			'After treatment, your team arranges follow-up consultations so recovery continues smoothly after you return home.',
		],
	},
	{
		slug: 'questions-to-ask-your-surgeon-before-joint-replacement',
		title: 'Questions to Ask Your Surgeon Before Joint Replacement',
		excerpt: 'A short checklist to help you compare surgeons, implants and rehabilitation plans with confidence.',
		category: 'Orthopedics',
		date: '2026-08-18',
		readMinutes: 4,
		image: imgOrtho,
		body: [
			'Joint replacement is a major decision. Preparing questions in advance helps you get clear answers.',
			'## About the surgeon',
			'Ask how many similar procedures the surgeon performs each year and what outcomes they typically see.',
			'## About the implant and technique',
			'Ask which implant will be used, whether robotic assistance is available, and what the expected lifespan is.',
			'## About recovery',
			'Ask how long you will stay, when you can fly home, and what physiotherapy you will need.',
		],
	},
	{
		slug: 'understanding-ivf-success-rates',
		title: 'Understanding IVF Success Rates Before You Choose a Clinic',
		excerpt: 'Success rates can be reported in different ways. Here is how to read them fairly.',
		category: 'Fertility',
		date: '2026-08-05',
		readMinutes: 4,
		image: imgFertility,
		body: [
			'Clinics often quote a single success figure, but the number depends on what is being measured.',
			'## Per cycle versus per transfer',
			'A rate per embryo transfer is usually higher than a rate per started cycle. Ask which one is being quoted.',
			'## Age matters',
			'Success rates fall with maternal age, so compare figures for your own age group rather than the clinic average.',
			'## Live birth, not just pregnancy',
			'The most meaningful figure is live births, not positive pregnancy tests.',
		],
	},
	{
		slug: 'what-to-expect-from-cataract-and-lasik-surgery',
		title: 'What to Expect from Cataract and LASIK Surgery',
		excerpt: 'Both are quick, day-care procedures. This guide explains the difference and the recovery.',
		category: 'Eye Care',
		date: '2026-07-22',
		readMinutes: 5,
		image: imgEye,
		body: [
			'Cataract surgery replaces a clouded lens, while LASIK reshapes the cornea to reduce dependence on glasses.',
			'## Before the procedure',
			'A detailed eye assessment confirms whether you are a suitable candidate for either procedure.',
			'## Recovery',
			'Most patients resume light activity within a day or two, with follow-up checks in the first weeks.',
		],
	},
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const formatBlogDate = (iso: string, locale = 'en-GB') =>
	new Date(iso + 'T00:00:00Z').toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
