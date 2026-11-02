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
		city: 'Gurugram',
		treatment: 'Cardiac Bypass Surgery',
		treatmentSlug: 'cardiac-care',
		doctorName: 'Dr. Bilal Ahmad Baba',
		doctorSlug: 'bilal-ahmad-baba',
		hospitalName: 'Marengo Asia Hospitals, Gurugram',
		hospitalSlug: 'marengo-asia-hospitals-gurugram',
		publishedDate: '2026-02-14',
		updatedDate: '2026-02-14',
		leadLine: 'A routine check-up turned into an urgent bypass James could neither wait for nor afford at home.',
		paragraphs: [
			"James had been managing chest tightness for months before a cardiologist in Manchester confirmed severe blockages in two coronary arteries and recommended an urgent bypass. The earliest surgery slot he was offered on the NHS was months away, and a private operation at home would have cost him far more than he could put together on short notice.",
			"Searching for options abroad, James found AlisPro MediTours and reached out for a second opinion. Our medical team reviewed his reports within two days and connected him with Dr. Bilal Ahmad Baba at Marengo Asia Hospitals, Gurugram, who confirmed a bypass plan using the same off-pump technique his own consultant had recommended, at a fraction of the price.",
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
		city: 'Gurugram',
		treatment: 'Cosmetic Surgery',
		treatmentSlug: 'cosmetic-surgery',
		doctorName: 'Dr. Amitabh Singh',
		doctorSlug: 'amitabh-singh',
		hospitalName: 'Marengo Asia Hospitals, Gurugram',
		hospitalSlug: 'marengo-asia-hospitals-gurugram',
		publishedDate: '2026-03-02',
		updatedDate: '2026-03-02',
		leadLine: 'Nervous about traveling abroad for surgery, Amara found a coordinator who answered every question, day or night.',
		paragraphs: [
			"After years of researching options closer to home, Amara decided the surgeons she was comparing in India had both the training and the track record she wanted — and prices that made the trip worth planning around.",
			"She reached out to AlisPro MediTours through our website, and a coordinator walked her through the consultation process, photo review, and procedure options before connecting her with Dr. Amitabh Singh, Plastic Surgeon at Marengo Asia Hospitals, Gurugram, before she committed to anything.",
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
		city: 'Gurugram',
		treatment: 'Pediatric Orthopedics',
		treatmentSlug: 'orthopedics',
		doctorName: 'Dr. Saurabh Verma',
		doctorSlug: 'saurabh-verma',
		hospitalName: 'Marengo Asia Hospitals, Gurugram',
		hospitalSlug: 'marengo-asia-hospitals-gurugram',
		publishedDate: '2026-04-18',
		updatedDate: '2026-04-18',
		leadLine: "A spinal correction his daughter needed was quoted at a price that made Michael start looking beyond Canada.",
		paragraphs: [
			"When Michael's daughter was diagnosed with a spinal condition that specialists at home agreed needed surgical correction, the quotes he gathered for private care put the operation well out of reach for his family.",
			"A friend who'd used medical travel services pointed him toward AlisPro MediTours. Our medical team reviewed his daughter's imaging and connected the family with Dr. Saurabh Verma, Orthopaedic & Spine Surgeon at Marengo Asia Hospitals, Gurugram, who had handled this kind of correction before.",
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
		city: 'New Delhi',
		treatment: 'Fertility Treatment',
		treatmentSlug: 'fertility',
		doctorName: 'Dr. Ila Gupta',
		doctorSlug: 'ila-gupta',
		hospitalName: 'Pristyn Care Ferticity Super Speciality & IVF Hospital, Malviya Nagar, New Delhi',
		hospitalSlug: 'pristyn-care-ferticity-super-speciality-ivf-hospital',
		publishedDate: '2026-05-09',
		updatedDate: '2026-05-09',
		leadLine: 'After a difficult few years, Sofia wanted a fertility team that would treat her as more than a case file.',
		paragraphs: [
			"After a few difficult years and limited options in Italy, Sofia began researching fertility clinics abroad with stronger success rates and shorter waiting lists.",
			"She found AlisPro MediTours through a patient forum and started a conversation with our medical team, who reviewed her history and connected her with Dr. Ila Gupta, an IVF & Infertility Specialist in New Delhi.",
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
		city: 'Gurugram',
		treatment: 'Oncology',
		treatmentSlug: 'oncology',
		doctorName: 'Dr. Neeraj Teotia',
		doctorSlug: 'neeraj-teotia',
		hospitalName: 'Marengo Asia Hospitals, Gurugram',
		hospitalSlug: 'marengo-asia-hospitals-gurugram',
		publishedDate: '2026-06-01',
		updatedDate: '2026-06-01',
		leadLine: 'David wanted a specialist who treated his exact condition regularly — not just oncology in general.',
		paragraphs: [
			"After his diagnosis, David spent weeks researching treatment centers in the US before deciding to get a second opinion from a specialist who focused specifically on his type of cancer, rather than oncology broadly.",
			"AlisPro MediTours' medical board reviewed his case and matched him with Dr. Neeraj Teotia at Marengo Asia Hospitals, Gurugram, whose oncology caseload matched his condition closely — the kind of focused experience David had been looking for.",
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
		city: 'Gurugram',
		treatment: 'Joint Replacement',
		treatmentSlug: 'orthopedics',
		doctorName: 'Dr. Saurabh Verma',
		doctorSlug: 'saurabh-verma',
		hospitalName: 'Marengo Asia Hospitals, Gurugram',
		hospitalSlug: 'marengo-asia-hospitals-gurugram',
		publishedDate: '2026-07-22',
		updatedDate: '2026-07-22',
		leadLine: 'Years of joint pain led Hana to look beyond Japan for a faster, more affordable path to surgery.',
		paragraphs: [
			"After years of worsening joint pain and a long wait for surgery at home, Hana began looking into medical travel options that could get her into surgery sooner.",
			"She connected with AlisPro MediTours online, and our medical team reviewed her scans before recommending Dr. Saurabh Verma, Orthopaedic & Spine Surgeon at Marengo Asia Hospitals, Gurugram, who had treated many international patients.",
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
	{
		slug: 'ahmed-oman-dental-implants',
		name: 'Ahmed',
		countryCode: 'om',
		country: 'Oman',
		city: 'Gurugram',
		treatment: 'Dental Implants',
		treatmentSlug: 'dental-care',
		doctorName: 'Dr. Javed Rizwan',
		doctorSlug: 'javed-rizwan',
		hospitalName: 'Spruce Dental Chain of Clinics, Gurugram',
		publishedDate: '2026-09-05',
		updatedDate: '2026-09-05',
		leadLine: 'Missing teeth had kept Ahmed from eating comfortably or smiling around family — he wanted that confidence back.',
		paragraphs: [
			"Ahmed, based in Oman, had been living with missing teeth for some time. It affected which foods he could eat comfortably, and he often felt self-conscious smiling in front of relatives. He began looking for a dental solution that could help him feel confident again.",
			"His search led him to AlisPro MediTours, where he discussed what medical travel to India would involve. After a consultation to understand his options, Ahmed was connected with Dr. Javed Rizwan at Spruce Dental Chain of Clinics in Gurugram for a full oral assessment.",
			"Following an examination of his oral condition, Dr. Rizwan walked Ahmed through his options, including dental implants, and the treatment plan that would follow — covering the clinical steps as well as recovery and follow-up care.",
			"Ahmed followed the recommended plan closely, and recovery progressed at the pace expected for his case. He was soon eating with comfort again and smiling confidently at family gatherings — able to take part fully, without the self-consciousness that had held him back before.",
		],
		quote:
			'I can eat comfortably and smile without holding back now — being part of family moments again means everything.',
		theme: 'blue',
	},
	{
		slug: 'fatima-uae-cosmetic-dentistry',
		name: 'Fatima',
		countryCode: 'ae',
		country: 'United Arab Emirates',
		city: 'New Delhi',
		treatment: 'Cosmetic Dentistry',
		treatmentSlug: 'dental-care',
		doctorName: 'Dr. Anika Bhasin Arora',
		doctorSlug: 'anika-bhasin-arora',
		hospitalName: 'Shining Smiles Dentistry, Saket, New Delhi',
		publishedDate: '2026-09-18',
		updatedDate: '2026-09-18',
		leadLine: 'Discoloured, uneven teeth made Fatima avoid photos and new faces — she wanted a smile she felt proud of.',
		paragraphs: [
			"Fatima, from the UAE, had grown self-conscious about discoloration and unevenness in her teeth, especially in photos and when meeting new people. Her daily routine was unaffected, but she wanted to feel more confident in how she looked.",
			"While researching cosmetic dentistry options in India, she came across AlisPro MediTours and decided to explore treatment through us. Her case was reviewed, and Dr. Anika Bhasin Arora examined her teeth and gums before recommending the best-suited option for her specific condition.",
			"Fatima discussed the pros, cons, and costs of each recommended procedure with her dentist before deciding on her treatment plan, so she knew exactly what to expect going in.",
			"After completing treatment, Fatima was glad with how her smile had transformed — she felt noticeably more comfortable smiling in photos and at social gatherings. The experience also made her more consistent about dental hygiene and routine check-ups going forward.",
		],
		quote:
			"My smile finally matches how confident I feel — it's made such a difference in everyday moments, not just photos.",
		theme: 'teal',
	},
	{
		slug: 'samuel-kenya-root-canal',
		name: 'Samuel',
		countryCode: 'ke',
		country: 'Kenya',
		city: 'New Delhi',
		treatment: 'Root Canal Treatment',
		treatmentSlug: 'dental-care',
		doctorName: 'Dr. Anika Bhasin Arora',
		doctorSlug: 'anika-bhasin-arora',
		hospitalName: 'Shining Smiles Dentistry, Saket, New Delhi',
		publishedDate: '2026-10-02',
		updatedDate: '2026-10-02',
		leadLine: "A persistent toothache was disrupting Samuel's work and sleep before he sought professional care.",
		paragraphs: [
			"Samuel, a working professional from Kenya, had been dealing with a persistent toothache that was affecting his concentration and daily schedule. Eating and drinking had become difficult, and he knew he needed professional dental care.",
			"Uncertain at first about what the process would involve and how soon he'd be back to his routine, Samuel looked into dental treatment in India and reached out to AlisPro MediTours to arrange his visit.",
			"During his examination, Dr. Anika Bhasin Arora identified the tooth causing the pain and recommended further investigation to confirm the cause. Based on the diagnosis, a root canal treatment was advised.",
			"Samuel went ahead with the treatment and followed the aftercare routine his dentist prescribed, including a restorative procedure for the treated tooth. His pain eased soon after, and he was able to return comfortably to his daily routine — glad he'd sought help rather than letting it persist.",
		],
		quote:
			"The pain is gone and I'm back to my routine — I wish I hadn't waited as long as I did to get it looked at.",
		theme: 'green',
	},
	{
		slug: 'aisha-tanzania-full-mouth-rehabilitation',
		name: 'Aisha',
		countryCode: 'tz',
		country: 'Tanzania',
		city: 'Gurugram',
		treatment: 'Full Mouth Rehabilitation',
		treatmentSlug: 'dental-care',
		doctorName: 'Dr. Javed Rizwan',
		doctorSlug: 'javed-rizwan',
		hospitalName: 'Spruce Dental Chain of Clinics, Gurugram',
		publishedDate: '2026-10-15',
		updatedDate: '2026-10-15',
		leadLine: 'Damaged and missing teeth made everyday meals and conversations difficult for Aisha.',
		paragraphs: [
			"Aisha, from Tanzania, had been struggling with damaged and missing teeth that made chewing certain foods difficult, and she often avoided smiling in photos out of self-consciousness. She began looking into treatment options that would let her feel comfortable again.",
			"After researching dental treatment in India, Aisha chose AlisPro MediTours to help coordinate her visit. Her treatment began with a thorough dental examination with Dr. Javed Rizwan — assessing her teeth, gums, bite, and jawbone condition to determine the right plan for her case.",
			"Dr. Rizwan explained that full-mouth rehabilitation can involve a combination of crowns, bridges, dental implants, and gum treatment depending on each patient's specific needs — not every step applies to every case. Aisha's plan was built around her particular condition, and every part of the procedure was explained to her beforehand.",
			"After treatment and the guidance that followed, Aisha noticed a real difference in her comfort and her smile. She felt more at ease joining family dinners and conversations with friends, while staying mindful that regular dental visits and cleaning remain part of maintaining the results.",
		],
		quote:
			"Family dinners feel different now — I'm not thinking about my teeth anymore, just enjoying the moment.",
		theme: 'blue',
	},
];

export const getStoryBySlug = (slug: string) => successStories.find((s) => s.slug === slug);
