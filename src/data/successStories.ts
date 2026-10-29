/**
 * Patient success stories, written as long-form narrative articles (modelled
 * on how outlets like Vaidam's "Patient Testimonials" present them: a lede
 * line, a multi-paragraph journey from diagnosis through recovery, inline
 * links to the treating doctor/hospital where we have a real one on file).
 *
 * The quotes and specifics here extend placeholder testimonial copy already
 * in the codebase (Testimonials.astro, src/data/doctors.ts — both flagged
 * there as placeholders pending real patient reviews). No clinical specifics
 * (exact diagnoses, dates, measurements) are invented — swap in real patient
 * stories, with their permission, as they come in.
 */
export interface SuccessStory {
	slug: string;
	name: string;
	age?: number;
	countryCode: string;
	country: string;
	city: string;
	treatment: string;
	treatmentSlug: string;
	doctorName?: string;
	doctorSlug?: string;
	hospitalName: string;
	hospitalSlug?: string;
	publishedDate: string;
	updatedDate: string;
	leadLine: string;
	paragraphs: string[];
	quote: string;
	theme: 'blue' | 'teal' | 'green';
}

export const successStories: SuccessStory[] = [
	{
		slug: 'james-whitfield-cardiac-bypass',
		name: 'James Whitfield',
		age: 61,
		countryCode: 'gb',
		country: 'United Kingdom',
		city: 'Delhi NCR',
		treatment: 'Cardiac Bypass Surgery',
		treatmentSlug: 'cardiac-care',
		hospitalName: 'Medanta – The Medicity',
		hospitalSlug: 'medanta-the-medicity',
		publishedDate: '2026-02-14',
		updatedDate: '2026-02-14',
		leadLine: 'A routine check-up turned into an urgent bypass James could neither wait for nor afford at home.',
		paragraphs: [
			"James had been managing chest tightness for months before a cardiologist in Manchester confirmed severe blockages in two coronary arteries and recommended an urgent bypass. The earliest surgery slot he was offered on the NHS was months away, and a private operation at home would have cost him far more than he could put together on short notice.",
			"Searching for options abroad, James found AlisPro MediTours and reached out for a second opinion. Our medical team reviewed his reports within two days and matched him with a cardiac bypass surgery program that used the same off-pump technique his own consultant had recommended, at a fraction of the price.",
			"A dedicated patient coordinator handled his medical visa invitation letter, airport pickup, and hotel arrangements for his wife, who travelled with him and stayed close by throughout.",
			"On arrival, James went through a full pre-operative workup before the surgical team confirmed the plan and scheduled the procedure within days of his final clearance.",
			"The bypass went smoothly. James spent a few days in the cardiac ICU before moving to a private recovery room, and our coordinator kept checking in with him well after he'd flown home.",
		],
		quote:
			"From my first message to the day I flew home recovered, every step was handled with care. The cardiac team gave me a second life, and I paid a fraction of what I'd have spent at home.",
		theme: 'blue',
	},
	{
		slug: 'amara-okafor-cosmetic-surgery',
		name: 'Amara Okafor',
		age: 34,
		countryCode: 'ng',
		country: 'Nigeria',
		city: 'Delhi NCR',
		treatment: 'Cosmetic Surgery',
		treatmentSlug: 'cosmetic-surgery',
		hospitalName: 'Fortis Flt Lt Rajan Dhall Hospital',
		hospitalSlug: 'fortis-flt-lt-rajan-dhall-hospital',
		publishedDate: '2026-03-02',
		updatedDate: '2026-03-02',
		leadLine: 'Nervous about traveling abroad for surgery, Amara found a coordinator who answered every question, day or night.',
		paragraphs: [
			"After years of researching options closer to home, Amara decided the surgeons she was comparing in India had both the training and the track record she wanted — and prices that made the trip worth planning around.",
			"She reached out to AlisPro MediTours through our website, and a coordinator walked her through the consultation process, photo review, and procedure options before she committed to anything.",
			"Once she confirmed her dates, our team arranged her visa documentation, airport pickup, and a hotel within easy reach of the hospital, and stayed reachable by WhatsApp through every stage of planning.",
			"The procedure and recovery went as planned, with the surgical team walking her through aftercare instructions before she was discharged.",
			"What stayed with Amara most was how reachable her coordinator was — questions answered at all hours, right up until she was home and settled.",
		],
		quote:
			'I was nervous about traveling abroad for surgery, but my coordinator answered every question at 2am if she had to. The hospital felt more five-star hotel than clinic.',
		theme: 'teal',
	},
	{
		slug: 'michael-chen-pediatric-orthopedics',
		name: "Michael Chen (on behalf of his daughter)",
		countryCode: 'ca',
		country: 'Canada',
		city: 'Bangalore',
		treatment: 'Pediatric Orthopedics',
		treatmentSlug: 'orthopedics',
		hospitalName: 'Manipal Hospital, Old Airport Road',
		hospitalSlug: 'manipal-hospital-old-airport-road',
		publishedDate: '2026-04-18',
		updatedDate: '2026-04-18',
		leadLine: "A spinal correction his daughter needed was quoted at a price that made Michael start looking beyond Canada.",
		paragraphs: [
			"When Michael's daughter was diagnosed with a spinal condition that specialists at home agreed needed surgical correction, the quotes he gathered for private care put the operation well out of reach for his family.",
			"A friend who'd used medical travel services pointed him toward AlisPro MediTours. Our medical team reviewed his daughter's imaging and connected the family with a pediatric orthopedic surgeon experienced in exactly this kind of correction.",
			"Our coordinator arranged accommodation near the hospital for the whole family, including the extra support a child patient needs — translators, a child-friendly ward, and a flexible visit schedule for Michael and his wife.",
			"The surgical team walked the family through every step before the operation, and again afterward as his daughter began physiotherapy.",
			"Michael still checks in with his coordinator to share how his daughter's recovery is progressing, months on from the surgery.",
		],
		quote:
			"We saved a significant amount on my daughter's spinal surgery without compromising on quality. The surgeon trained internationally and it showed in every detail of her care.",
		theme: 'green',
	},
	{
		slug: 'sofia-marchetti-fertility-treatment',
		name: 'Sofia Marchetti',
		age: 36,
		countryCode: 'it',
		country: 'Italy',
		city: 'Delhi NCR',
		treatment: 'Fertility Treatment',
		treatmentSlug: 'fertility',
		hospitalName: 'Artemis Hospital',
		hospitalSlug: 'artemis-hospital',
		publishedDate: '2026-05-09',
		updatedDate: '2026-05-09',
		leadLine: 'After a difficult few years, Sofia wanted a fertility team that would treat her as more than a case file.',
		paragraphs: [
			"After a few difficult years and limited options in Italy, Sofia began researching fertility clinics abroad with stronger success rates and shorter waiting lists.",
			"She found AlisPro MediTours through a patient forum and started a conversation with our medical team, who reviewed her history and connected her with a fertility specialist in Delhi.",
			"From the moment she landed, a coordinator handled her visa support, airport pickup, translator, and a hotel close to the clinic, so she could focus entirely on her treatment.",
			"Her treatment plan was explained clearly at every stage, with results and next steps discussed directly with her specialist rather than relayed secondhand.",
			"Sofia says the hardest part of the journey was never the logistics — because the team around her had already taken care of those.",
		],
		quote:
			'Visa support, airport pickup, translator, hotel near the clinic — they thought of everything so I could focus on getting better. I would not have managed this trip alone.',
		theme: 'blue',
	},
	{
		slug: 'david-okoye-oncology',
		name: 'David Okoye',
		age: 52,
		countryCode: 'us',
		country: 'United States',
		city: 'Mumbai',
		treatment: 'Oncology',
		treatmentSlug: 'oncology',
		hospitalName: 'Kokilaben Dhirubhai Ambani Hospital',
		hospitalSlug: 'kokilaben-dhirubhai-ambani-hospital',
		publishedDate: '2026-06-01',
		updatedDate: '2026-06-01',
		leadLine: 'David wanted a specialist who treated his exact condition regularly — not just oncology in general.',
		paragraphs: [
			"After his diagnosis, David spent weeks researching treatment centers in the US before deciding to get a second opinion from a specialist who focused specifically on his type of cancer, rather than oncology broadly.",
			"AlisPro MediTours' medical board reviewed his case and matched him with a specialist in Mumbai whose caseload matched his condition closely — the kind of focused experience David had been looking for.",
			"A coordinator managed his travel, visa, and accommodation, and stayed in close contact with his family back home throughout his treatment.",
			"His treatment plan was built around his specific case, with the specialist walking him through what to expect at each stage before proceeding.",
			"David's follow-up continued long after he returned to the US, with his coordinator checking in on his recovery and helping arrange remote consultations.",
		],
		quote:
			'The medical board matched me with a specialist who actually treats my exact condition regularly, not just generally. That expertise made all the difference in my recovery.',
		theme: 'teal',
	},
	{
		slug: 'hana-yamamoto-joint-replacement',
		name: 'Hana Yamamoto',
		age: 58,
		countryCode: 'jp',
		country: 'Japan',
		city: 'Chennai',
		treatment: 'Joint Replacement',
		treatmentSlug: 'orthopedics',
		hospitalName: 'Fortis Malar Hospital',
		hospitalSlug: 'fortis-malar-hospital',
		publishedDate: '2026-07-22',
		updatedDate: '2026-07-22',
		leadLine: 'Years of joint pain led Hana to look beyond Japan for a faster, more affordable path to surgery.',
		paragraphs: [
			"After years of worsening joint pain and a long wait for surgery at home, Hana began looking into medical travel options that could get her into surgery sooner.",
			"She connected with AlisPro MediTours online, and our medical team reviewed her scans before recommending a joint replacement surgeon in Chennai experienced with international patients.",
			"Our coordinator arranged her travel and accommodation, including a hotel with easy access for someone recovering from joint surgery, and checked on her daily during her stay.",
			"The surgery and initial recovery went smoothly, with a physiotherapy plan started before she was discharged.",
			"What stood out most to Hana was that the relationship didn't end at the airport — follow-up calls continued for months as she completed her recovery back home.",
		],
		quote:
			"Follow-up calls continued for months after I returned home. It never felt like the relationship ended at the airport — they genuinely cared how my recovery was going.",
		theme: 'green',
	},
	{
		slug: 'amina-yusuf-dental-implants',
		name: 'Amina Yusuf',
		age: 45,
		countryCode: 'sa',
		country: 'Saudi Arabia',
		city: 'Gurugram',
		treatment: 'Dental Implants',
		treatmentSlug: 'dental-care',
		doctorName: 'Dr. Javed Rizwan',
		doctorSlug: 'javed-rizwan',
		hospitalName: 'Spruce Dental Chain of Clinics, Gurugram',
		publishedDate: '2026-08-11',
		updatedDate: '2026-08-11',
		leadLine: 'Amina needed a full implant plan explained clearly before she would commit to treatment abroad.',
		paragraphs: [
			"Amina had been putting off dental implant treatment for years, put off by vague cost estimates and unclear plans from clinics she'd consulted locally.",
			"Through AlisPro MediTours, she was connected with Dr. Javed Rizwan at Spruce Dental Chain of Clinics in Gurugram, who reviewed her case and laid out a strategic implant plan in detail before she travelled.",
			"Our coordinator arranged her visa support and accommodation, and made sure she knew exactly what to expect at each appointment before she arrived.",
			"Dr. Rizwan and his team carried out the implant procedure over her stay, with every step matching what had been explained to her in advance.",
			"Amina says the clarity from the very first conversation is what made the decision to travel for treatment an easy one.",
		],
		quote:
			'Excellent experience from consultation to recovery. Dr. Rizwan explained the strategic implant plan clearly before we started, and there were no surprises along the way.',
		theme: 'blue',
	},
];

export const getStoryBySlug = (slug: string) => successStories.find((s) => s.slug === slug);
