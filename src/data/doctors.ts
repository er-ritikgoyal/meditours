import type { ImageMetadata } from 'astro';

import imgjaved from '../assets/doctors/Dr_Javed.jpg';
import imgJavedBanner from '../assets/doctors/Dr_Javed_Banner.jpg';
import imgSpruceDental from '../assets/doctors/spruce-dental.jpg';
import imgAnikaBhasinArora from '../assets/doctors/Dr_Anika_Bhasin_Arora.jpg';
import imgShiningSmileBeforeAfter from '../assets/hospitals/before after shining smile.png';
import imgSurajMunjal from '../assets/doctors/Dr_Suraj_Munjal.jpg';
import imgSurajMunjalBanner from '../assets/doctors/Dr_Suraj_Munjal_Banner.png';
import imgAnikaBhasinAroraTopRight from '../assets/doctors/Dr_anika_bhasin_arora_topright.JPG';
import imgSurajMunjalTopRight from '../assets/doctors/Dr_suraj_munjal_topright.JPG';
import imghimanshuchampaneri from '../assets/doctors/Dr_Himanshu_champaneri.JPG';
import imgAmitabhSingh from '../assets/doctors/Dr_amitabh_singh.JPG';
import imgSunilSanghi from '../assets/doctors/Dr_sunil_sanghi.JPG';
import imgBilalAhmadBaba from '../assets/doctors/Dr_bilal_ahmad_baba.JPG';
import imgSaurabhVerma from '../assets/doctors/Dr_saurabh_verma.JPG';
import imgKrishanKumarYadav from '../assets/doctors/Dr_Kishan_kumar_yadav.JPG';
import imgPunitSingla from '../assets/doctors/Dr_puneet_singla.JPG';
import imgNeerajTeotia from '../assets/doctors/Dr_neeraj_teotia.JPG';
import imgMeetKumar from '../assets/doctors/Dr_meet_kumar.JPG';
import imgShibalBhartiya from '../assets/doctors/Dr_shibal_bhartiya.JPG';
import imgRiteshMongha from '../assets/doctors/Dr_ritesh_mongha.JPG';
import imgtoprightmax from '../assets/hospitals/topright_max.png';
import imgGautamBanga from '../assets/doctors/Dr_Gautam_banga.JPG';
import imgIlaGupta from '../assets/doctors/Dr_ila_gupta.JPG';
import imgRahilChaudhary from '../assets/doctors/Dr_Rahil_Chaudhary.JPG';
import imgDVLNarayanaRao from '../assets/doctors/Dr_DVL_Narayana_Rao.webp';
import imgDeepakSaha from '../assets/doctors/Dr_Deepak_Saha.webp';
import imgLokeshRudraMadhav from '../assets/doctors/Dr_lokesh.jpg';
import imgSSudha from '../assets/doctors/Dr_S_Sudha.webp';
import imgGaneshDubey from '../assets/doctors/Dr_Ganesh_Dubey.jpg';
import imgNPavanKumarRao from '../assets/doctors/Dr_N_Pavan_Kumar_Rao.jpg';
// Note: dr_himanshu_champaneri.mp4 is missing from src/assets/doctors — the
// video import + videoUrl field were removed below to unblock the build.
// Re-add the file and restore `videoUrl: videoHimanshuChampaneri` to bring
// the video section back on his profile page.

export interface DoctorEducation {
	degree: string;
	institution: string;
	year?: string;
}  

export interface DoctorExperienceEntry {
	role: string;
	place: string;
	period: string;
}

export interface DoctorAward {
	title: string;
	year?: string;
}

export interface DoctorTestimonial {
	name: string;
	country: string;
	countryCode: string;
	rating: number;
	text: string;
}

export interface DoctorData {
	slug: string;
	name: string;
	/** Short specialty label used on cards, e.g. "Cardiac Surgeon". */
	specialty: string;
	/** Fuller professional title used on the profile hero, e.g. "Senior Consultant — Cardiothoracic Surgery". */
	title: string;
	qualification: string;
	hospital: string;
	city: string;
	experienceYears: number;
	languages: string[];
	rating: number;
	reviews: number;
	theme: 'blue' | 'teal' | 'green';
	/** Optional photo — falls back to initials when omitted. */
	photo?: ImageMetadata;
	/** Optional wide banner shown above the "About Doctor" copy. */
	bannerPhoto?: ImageMetadata;
	/** Optional small photo shown top-right of the hero (e.g. clinic photo) — falls back to an "Add photo" placeholder. */
	topRightPhoto?: ImageMetadata;
	/**
	 * Optional intro video shown in a "Video Introduction" block after the About
	 * copy — a YouTube/Vimeo URL (embedded in a lightbox on click) or a direct
	 * video file path (played natively).
	 */
	videoUrl?: string;
	about: string;
	specializations: string[];
	education: DoctorEducation[];
	experience: DoctorExperienceEntry[];
	awards: DoctorAward[];
	memberships: string[];
	testimonials: DoctorTestimonial[];
}

export const doctors: DoctorData[] = [

	
	{
		slug: 'javed-rizwan',
		name: 'Dr. Javed Rizwan',
		specialty: 'Implantologist & Orthodontist',
		title: 'Director & Head — Dental Implantology & Orthodontics',
		qualification: 'BDS, MDS — Orthodontics & Dentofacial Orthopedics; MS — Strategic Implantology (Munich)',
		hospital: 'Spruce Dental Chain of Clinics, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 20,
		languages: ['English', 'Hindi'],
		photo: imgjaved ,
		bannerPhoto: imgJavedBanner,
		topRightPhoto: imgSpruceDental,
		rating: 4.9,
		reviews: 198,
		theme: 'teal',
		about: [
			'Dr. Javed Rizwan is a dental implantologist and orthodontist with over 20 years of clinical practice, having placed more than 15,000 conventional and immediate dental implants and completed over 500 full-mouth rehabilitation cases using immediate strategic implant techniques. He trained in strategic implantology in Munich, Germany, and leads Spruce Dental Chain of Clinics in Gurugram, where he focuses on minimally invasive implant placement and same-visit full-mouth restoration for international patients.',
			'Dr. Javed Rizwan is one of the eminent dental implantologists and is among the top orthodontists in Delhi NCR. He has been the director & head at Spruce Dental chain of clinics in Delhi for the last 20+ years. Dr. Rizwan has done 500+ full-mouth dental implants using Immediate strategic implants. He completed his BDS from the prestigious CCS University Meerut U.P India. After that, he completed an MDS (Orthodontics and Dentofacial Orthopedics) from the same university. Then, he pursued a PGCE from Dr R Ahmad Dental College Kolkata, West Bengal, India.',
			'With his rich professionalism and experience of more than a decade, Dr. Javed Rizwan has cured many patients till 2023. He has done 15000 plus dental implants including conventional and Immediate Implants. He is an expert in treating complex and challenging dental implant procedures like no bone complex atrophic cases, immediate dental implants, etc. Dr. Javed Rizwan is privileged to pursue an MS in strategic implantology from Munich, Germany.',
			'Dr. Javed Rizwan has efficiency in immediate strategic implant and no bone complex atrophic cases. He has also mastered procedures like full mouth dental implant, implant without suture, bone graft, or using flap. Dr. Javed Rizwan, an orthodontist and dental implantologist in Delhi, is well-versed in placing implants for people of any age group and of their ethnicity.',
			'He is interested in dental implantology and diverse strategic implant designs using minimally invasive techniques. Dr. Javed Rizwan is a member of the International Implant Foundation Germany. He has a membership in the Member of ortho and Orthopedic Society of India. He is associated with many renowned institutions and is a member of the Dental Council of India.',
		].join('\n\n'),
		specializations: [
			'Conventional & immediate dental implants',
			'Strategic implant designs',
			'Full-mouth implant rehabilitation',
			'Minimally invasive implant surgery',
			'Orthodontics & dentofacial orthopedics',
		],
		education: [
			{ degree: 'BDS', institution: 'CCS University, Meerut, Uttar Pradesh' },
			{ degree: 'MDS — Orthodontics & Dentofacial Orthopedics', institution: 'CCS University, Meerut, Uttar Pradesh' },
			{ degree: 'PGCE', institution: 'Dr. R. Ahmad Dental College, Kolkata' },
			{ degree: 'MS — Strategic Implantology', institution: 'Munich, Germany' },
		],
		experience: [{ role: 'Director & Head', place: 'Spruce Dental Chain of Clinics (Smile Garden Clinic), Gurugram', period: '20+ years in practice' }],
		awards: [
			{ title: '15,000+ conventional & immediate dental implants placed' },
			{ title: '500+ full-mouth cases completed using immediate strategic implant technique' },
		],
		memberships: ['International Implant Foundation, Germany', 'Ortho and Orthopedic Society of India', 'Dental Council of India'],
		// Placeholder testimonials — swap in real patient reviews when available.
		testimonials: [
			
			{
				name: 'Amina Yusuf',
				country: 'Saudi Arabia',
				countryCode: 'sa',
				rating: 4.5,
				text: 'Excellent experience from consultation to recovery. Dr. Rizwan explained the strategic implant plan clearly before we started, and there were no surprises along the way.',
			},
		],
	},
	{
		slug: 'anika-bhasin-arora',
		name: 'Dr. Anika Bhasin Arora',
		specialty: 'Root Canal Specialist & Aesthetic Dentist',
		title: 'Owner & Lead Dentist — Endodontics & Aesthetic Dentistry',
		qualification: 'BDS, MDS — Conservative Dentistry & Endodontics; Diploma in Facial Aesthetics',
		hospital: 'Shining Smiles Dentistry, Saket, New Delhi',
		city: 'New Delhi, India',
		experienceYears: 10,
		languages: ['English', 'Hindi'],
		rating: 4.8,
		reviews: 176,
		theme: 'green',
		photo: imgAnikaBhasinArora,
		bannerPhoto: imgShiningSmileBeforeAfter,
		topRightPhoto: imgAnikaBhasinAroraTopRight,
		about:
			'Dr. Anika Bhasin Arora specializes in root canal treatment and aesthetic dentistry, combining endodontic precision with a focus on natural-looking results. She previously led the Delhi branch of Cosmodent India before founding Shining Smiles Dentistry, where she treats everything from complex microscopic root canals to full smile-design cases, and has additional training in facial aesthetics for patients combining dental and aesthetic treatment in a single trip.',
		specializations: [
			'Root canal treatment & microscopic endodontics',
			'Aesthetic dentistry & smile design',
			'Dental implants',
			'Gum surgery',
			'Facial aesthetics (Botox, fillers, PRP)',
		],
		education: [
			{ degree: 'BDS', institution: 'Institute of Dental Sciences, Bareilly, Uttar Pradesh', year: '2011' },
			{ degree: 'MDS — Conservative Dentistry & Endodontics', institution: 'Babu Banarasi Das College of Dental Sciences, Lucknow', year: '2016' },
			{ degree: 'Diploma in Facial Aesthetics', institution: 'Under Dr. Rajat Bhandari', year: '2018' },
		],
		experience: [
			{ role: 'Owner & Lead Dentist', place: 'Shining Smiles Dentistry, New Delhi', period: '2021 — Present' },
			{ role: 'Head, Delhi Branch', place: 'Cosmodent India', period: '2016 — 2021' },
		],
		awards: [],
		memberships: [
			'Dental Council of India',
			'Indian Endodontic Society',
			'FDI World Dental Federation',
			'Indian Dental Association',
		],
		testimonials: [],
	},
	{
		slug: 'suraj-munjal',
		name: 'Dr. Suraj Munjal',
		specialty: 'Ophthalmologist & Cataract Surgeon',
		title: 'Founder, Chairman & Managing Director — The Sight Avenue Eye Hospital',
		qualification: 'MBBS, MS — Ophthalmology; Phacoemulsification Fellowship',
		hospital: 'The Sight Avenue Eye Hospital, Greater Kailash-1, New Delhi',
		city: 'New Delhi, India',
		experienceYears: 21,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 224,
		theme: 'blue',
		photo: imgSurajMunjal,
		bannerPhoto: imgSurajMunjalBanner,
		topRightPhoto: imgSurajMunjalTopRight,
		about:
			'Dr. Suraj Munjal is an ophthalmologist with over 21 years in medicine, including 15+ years focused specifically on cataract and refractive eye surgery. He trained in phacoemulsification at Aditya Jyot Eye Hospital and completed a clinical fellowship in cornea and refractive surgery at the University Hospital of Tübingen, Germany, before founding The Sight Avenue Eye Hospital in New Delhi, where he now leads a high-volume practice spanning cataract, LASIK, cornea, and squint surgery.',
		specializations: [
			'Cataract surgery (phacoemulsification)',
			'Refractive surgery (LASIK, Femto LASIK, SMILE)',
			'Cornea transplants',
			'Retinal surgery',
			'Squint surgery',
		],
		education: [
			{ degree: 'MBBS', institution: 'Pt. B.D. Sharma PGIMS, Rohtak' },
			{ degree: 'MS — Ophthalmology', institution: 'University College of Medical Sciences, New Delhi' },
			{ degree: 'Phacoemulsification Fellowship', institution: 'Aditya Jyot Eye Hospital, Mumbai' },
			{ degree: 'Clinical Fellowship — Cornea & Refractive Surgery', institution: 'University Hospital of Tübingen (UKT), Germany' },
		],
		experience: [
			{ role: 'Founder, Chairman & Managing Director', place: 'The Sight Avenue Eye Hospital, New Delhi', period: 'Current' },
			{ role: 'Senior Resident, Ophthalmology', place: 'Guru Teg Bahadur Hospital & RML Hospital, New Delhi', period: 'Early career' },
		],
		awards: [
			{ title: '~25,000 cataract surgeries performed' },
			{ title: '~10,000 LASIK & refractive surgeries performed' },
			{ title: '~1,000 corneal transplants performed' },
			{ title: '~1,000 squint surgeries performed' },
		],
		memberships: [
			'European Society of Cataract & Refractive Surgeons (ESCRS)',
			'Delhi Ophthalmological Society (DOS)',
			'Squint Society of India (SSI)',
		],
		testimonials: [],
	},
	{
		slug: 'himanshu-champaneri',
		name: 'Dr. Himanshu Champaneri',
		photo: imghimanshuchampaneri,
		specialty: 'Neurosurgeon',
		topRightPhoto: imgtoprightmax,
		title: 'Associate Director & Unit Head — Neurosurgery',
		qualification: 'MBBS, MS (Gold Medalist), DNB — Neurosurgery; Fellowship in Minimal Access Surgery',
		hospital: 'Max Hospital, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 19,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 187,
		theme: 'teal',
		about:
			'Dr. Himanshu Champaneri is Associate Director & Unit Head of Neurosurgery at Max Hospital, Gurugram, with a practice spanning complex brain tumour surgery, movement disorders, and minimally invasive spine and skull-base procedures. He trained in general surgery at Sardar Patel University, graduating as a gold medalist, completed a fellowship in Minimal Access Surgery at Pramukhswami Medical College, and earned his DNB in Neurosurgery from the National Board of Examinations. Before joining Max Hospital, he held senior neurosurgery leadership roles at Marengo Asia Hospitals and Medanta — The Medicity, both in Gurugram, building particular expertise in deep brain stimulation, endoscopic spine surgery, and functional and epilepsy surgery.',
		specializations: [
			'Deep Brain Stimulation (DBS)',
			'Movement disorders surgery',
			'Endoportal brain tumour surgery',
			'Functional & epilepsy surgery',
			'Pain & spasticity management',
			'Minimally invasive spine & brain surgery',
			'Skull base & nerve reconstruction',
			'Endoscopic spine surgery',
		],
		education: [
			{ degree: 'MBBS', institution: 'Sardar Patel University, Gujarat', year: '2007' },
			{ degree: 'MS — General Surgery (Gold Medalist)', institution: 'Sardar Patel University, Gujarat', year: '2011' },
			{ degree: 'Fellowship — Minimal Access Surgery', institution: 'Pramukhswami Medical College, Karamsad, Anand, Gujarat', year: '2012' },
			{ degree: 'DNB — Neurosurgery', institution: 'National Board of Examinations', year: '2018' },
		],
		experience: [
			{ role: 'Associate Director & Unit Head, Neurosurgery', place: 'Max Hospital, Gurugram', period: 'May 2026 — Present' },
			{ role: 'Clinical Director & Head, Neurosurgery', place: 'Marengo Asia Hospitals, Gurugram', period: '2022 — 2025' },
			{ role: 'Consultant, Neurosurgery', place: 'Medanta — The Medicity, Gurugram', period: '2019 — 2022' },
			{ role: 'Senior Resident, Neurosurgery', place: 'Medanta — The Medicity, Gurugram', period: '2016 — 2019' },
		],
		awards: [],
		memberships: [
			'Neurological Society of India (NSI)',
			'Association of Surgeons of India (ASI)',
			'Association of Minimal Access Surgeons of India (AMASI)',
			'Indian Medical Association (IMA)',
		],
		testimonials: [],
	},
	{
		slug: 'amitabh-singh',
		name: 'Dr. Amitabh Singh',
		specialty: 'Plastic Surgeon',
		title: 'Clinical Director & Head — Plastic Surgery',
		qualification: 'MBBS, MS, DNB (General Surgery), MCh — Plastic Surgery',
		hospital: 'Marengo Asia Hospitals, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 20,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 203,
		theme: 'blue',
		photo: imgAmitabhSingh,
		about:
			'Dr. Amitabh Singh is Clinical Director & Head of Plastic Surgery at Marengo Asia Hospitals, Gurugram, with over 20 years of experience across aesthetic, reconstructive, hand and microsurgical procedures. After his MCh in Plastic Surgery he completed fellowships in microvascular and brachial plexus surgery in Taiwan and Bangkok, and in aesthetic and post-bariatric plastic surgery in Iowa, USA, with further training at Ganga Hospital, Coimbatore and Emory University, Atlanta. He previously served as Senior Consultant in Plastic Surgery at Fortis Hospitals in the NCR, has contributed chapters to leading plastic surgery and burn care textbooks, and reviews for the Aesthetic Surgery Journal.',
		specializations: [
			'Aesthetic & reconstructive surgery',
			'Body contouring surgery',
			'Post-cancer reconstructive surgery',
			'Hand surgery & microsurgery',
			'Diabetic foot surgery',
			'Burn reconstruction & scar revision',
			'Hair transplant',
		],
		education: [
			{ degree: 'MBBS, MS, DNB (General Surgery), MCh (Plastic Surgery)', institution: 'Medical training in India' },
			{ degree: 'Fellowship — Microvascular & Brachial Plexus Surgery', institution: 'Chang Gung Memorial Hospital, Taiwan & Siriraj Hospital, Mahidol University, Bangkok' },
			{ degree: 'Fellowship — Aesthetic & Post-Bariatric Plastic Surgery', institution: 'Iowa City Plastic Surgery, Iowa, USA' },
		],
		experience: [
			{ role: 'Clinical Director & Head, Plastic Surgery', place: 'Marengo Asia Hospitals, Gurugram', period: 'Current' },
			{ role: 'Senior Consultant, Plastic Surgery', place: 'Fortis Hospitals, NCR', period: '2008 onwards' },
		],
		awards: [
			{ title: 'Contributing author, Textbook of Plastic Surgery and Principles and Practice of Burn Care' },
			{ title: 'Author of a widely cited chapter on Belt Lipectomy' },
			{ title: 'Reviewer, Aesthetic Surgery Journal' },
		],
		memberships: [],
		testimonials: [],
	},
	{
		slug: 'sunil-sanghi',
		name: 'Dr. Sunil Sanghi',
		specialty: 'Dermatologist',
		title: 'Clinical Director & Head — Dermatology',
		qualification: 'MBBS, MD (Gold Medalist) — Dermatology, AFMC Pune',
		hospital: 'Marengo Asia Hospitals, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 30,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 241,
		theme: 'green',
		photo: imgSunilSanghi,
		about:
			'Dr. Sunil Sanghi is Clinical Director & Head of Dermatology at Marengo Asia Hospitals, Gurugram, with over 30 years of experience. A gold medalist in MD Dermatology from the Armed Forces Medical College, Pune, he went on to serve as Professor of Dermatology & Venereology at AFMC and as a senior consultant at leading hospitals. He has advanced training in paediatric dermatology, psoriasis and hair disorders, and treats a wide range of skin, hair and cosmetic conditions. He has published 18+ papers in indexed journals, delivered 60+ guest lectures nationally and internationally, and served on the editorial board of the Indian Journal of Dermatology, Venereology & Leprology.',
		specializations: [
			'Paediatric dermatology',
			'Vitiligo & alopecia management',
			'Atopic dermatitis',
			'Hair disorders & PRP therapy',
			'Psoriasis management with biologic therapies',
			'Cosmetic dermatology',
		],
		education: [
			{ degree: 'MBBS', institution: 'Armed Forces Medical College (AFMC), Pune' },
			{ degree: 'MD — Dermatology (Gold Medalist)', institution: 'Armed Forces Medical College (AFMC), Pune' },
			{ degree: 'Advanced training — Paediatric Dermatology, Psoriasis & Hair Disorders', institution: 'Post-MD training' },
		],
		experience: [
			{ role: 'Clinical Director & Head, Dermatology', place: 'Marengo Asia Hospitals, Gurugram', period: 'Current' },
			{ role: 'Professor of Dermatology & Venereology', place: 'Armed Forces Medical College (AFMC), Pune', period: 'Earlier career' },
			{ role: 'Senior Consultant, Dermatology', place: 'Leading hospitals', period: 'Earlier career' },
		],
		awards: [
			{ title: 'Gold Medalist, MD Dermatology, AFMC' },
			{ title: '18+ research papers published in indexed journals' },
			{ title: '60+ guest lectures at national and international conferences' },
			{ title: 'Editorial Board member, Indian Journal of Dermatology, Venereology & Leprology' },
			{ title: 'Recognised Senior Mentor & Teacher for dermatology students' },
		],
		memberships: [],
		testimonials: [],
	},
	{
		slug: 'bilal-ahmad-baba',
		name: 'Dr. Bilal Ahmad Baba',
		specialty: 'Interventional Cardiologist',
		title: 'Senior Consultant — Interventional Cardiology',
		qualification: 'MBBS, DNB — General Medicine, DNB — Cardiology',
		hospital: 'Marengo Asia Hospitals, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 15,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 192,
		theme: 'teal',
		photo: imgBilalAhmadBaba,
		about:
			'Dr. Bilal Ahmad Baba is a Senior Consultant in Interventional Cardiology at Marengo Asia Hospitals, Gurugram, with over 15 years of experience and more than 5,000 coronary and advanced interventional procedures to his name. His practice covers complex coronary angioplasty guided by advanced imaging (IVUS, OCT), rhythm device implantation including leadless pacemakers, structural heart interventions such as TAVI and TMVR, congenital defect closures and peripheral vascular work. Before joining Marengo he held cardiology roles at Shalby Sanar International Hospital, BLK-Max Super Speciality Hospital and Shri Narayan Hospital, and he has published in indexed cardiology journals.',
		specializations: [
			'Complex coronary angioplasty',
			'High-risk cardiac interventions',
			'Advanced vascular imaging (IVUS, OCT)',
			'Cardiac rhythm devices (pacemakers, AICD, CRT-D, His bundle pacing, Micra leadless)',
			'Structural heart interventions (TAVI/TMVR)',
			'Congenital heart defect closure (ASD, VSD, PDA)',
			'Peripheral vascular interventions',
			'Heart failure management',
		],
		education: [
			{ degree: 'MBBS, DNB — General Medicine, DNB — Cardiology', institution: 'Medical training in India' },
		],
		experience: [
			{ role: 'Senior Consultant, Interventional Cardiology', place: 'Marengo Asia Hospitals, Gurugram', period: 'Current' },
			{ role: 'Senior Consultant', place: 'Shalby Sanar International Hospital', period: 'Earlier career' },
			{ role: 'Associate Consultant, Cardiology', place: 'BLK-Max Super Speciality Hospital, New Delhi', period: 'Earlier career' },
			{ role: 'Consultant, Interventional Cardiology', place: 'Shri Narayan Hospital', period: 'Earlier career' },
		],
		awards: [
			{ title: '5,000+ coronary and advanced interventional procedures performed' },
			{ title: 'Multiple publications in indexed cardiology journals' },
		],
		memberships: [],
		testimonials: [],
	},
	{
		slug: 'saurabh-verma',
		name: 'Dr. Saurabh Verma',
		specialty: 'Orthopaedic & Spine Surgeon',
		title: 'Associate Director — Orthopaedics & Spine Surgery',
		qualification: 'MBBS, MS (Orthopaedics), DNB, FNB (Spine Surgery); Fellowship, NUH Singapore',
		hospital: 'Marengo Asia Hospitals, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 10,
		languages: ['English', 'Hindi'],
		rating: 4.8,
		reviews: 168,
		theme: 'blue',
		photo: imgSaurabhVerma,
		about:
			'Dr. Saurabh Verma is Associate Director of Orthopaedics & Spine Surgery at Marengo Asia Hospitals, Gurugram, with over a decade of clinical experience focused on minimally invasive spine surgery. He trained at Maulana Azad Medical College, Delhi, completed an FNB in Spine Surgery and a long-term spine fellowship at the Indian Spinal Injuries Centre, and a further spine fellowship at the National University Hospital, Singapore. Before joining Marengo in 2024 he headed spine care at Manipal Hospital, Dwarka, and spine surgery at Aakash Healthcare, Dwarka, treating trauma, degenerative disorders and cervical and lumbar spine conditions.',
		specializations: [
			'Minimally invasive spine surgery',
			'Spine trauma management',
			'Degenerative spine disorders',
			'Cervical & lumbar spine procedures',
			'Kyphoplasty & vertebroplasty',
		],
		education: [
			{ degree: 'MBBS', institution: 'Maulana Azad Medical College, University of Delhi' },
			{ degree: 'Diploma in Anaesthesia', institution: 'Maulana Azad Medical College, University of Delhi' },
			{ degree: 'MS — Orthopaedics', institution: 'Maulana Azad Medical College, University of Delhi' },
			{ degree: 'DNB — Orthopaedic Surgery', institution: 'National Board of Examinations, New Delhi' },
			{ degree: 'FNB — Spine Surgery', institution: 'Indian Spinal Injuries Centre, New Delhi' },
			{ degree: 'Fellowship — Spine Surgery', institution: 'National University Hospital (NUH), Singapore' },
		],
		experience: [
			{ role: 'Associate Director, Orthopaedics & Spine Surgery', place: 'Marengo Asia Hospitals, Gurugram', period: 'April 2024 — Present' },
			{ role: 'Head of Department, Spine Care', place: 'Manipal Hospital, Dwarka', period: '2019 — 2024' },
			{ role: 'Head & Consultant, Spine Surgery', place: 'Aakash Healthcare, Dwarka', period: '2017 — 2019' },
			{ role: 'Consultant, Orthopaedics & Spine Surgery', place: 'Park Hospital, Gurugram', period: '2017' },
			{ role: 'Clinical Long-Term Spine Fellow', place: 'Indian Spinal Injuries Centre, New Delhi', period: '2015 — 2017' },
		],
		awards: [],
		memberships: [
			'Association of Spine Surgeons of India (Life Member)',
			'Asia Pacific Orthopaedic Association',
			'Indian Orthopaedic Association',
			'Delhi Orthopaedic Association',
			'International Spinal Cord Society (ISCoS)',
			'Indian Society for Knee Surgery and Arthroscopy',
		],
		testimonials: [],
	},
	{
		slug: 'krishan-kumar-yadav',
		name: 'Dr. (Air Cmde) Krishan Kumar Yadav',
		specialty: 'Neurosurgeon',
		title: 'Clinical Director, Professor & HOD — Neurosurgery & Neurospine Surgery',
		qualification: 'MBBS, MS (General Surgery), MCh — Neurosurgery, AFMC Pune',
		hospital: 'Marengo Asia Hospitals, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 35,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 256,
		theme: 'teal',
		photo: imgKrishanKumarYadav,
		about:
			'Dr. (Air Cmde) Krishan Kumar Yadav is Clinical Director, Professor & Head of Neurosurgery & Neurospine Surgery at Marengo Asia Hospitals, Gurugram, with over 35 years in neurosurgery. He trained entirely at the Armed Forces Medical College, Pune, from MBBS through MCh in Neurosurgery, and has managed more than 80,000 cases and performed over 5,000 complex procedures. His work spans brain and spine surgery, minimally invasive spine procedures, neurotrauma, neuro-oncology, cerebrovascular and paediatric neurosurgery, skull base tumours and endoscopic pituitary surgery. He has authored 24+ peer-reviewed publications and contributed to neurosurgery textbooks.',
		specializations: [
			'Brain & spine surgery',
			'Minimally invasive spine procedures',
			'Neurotrauma & neuro-oncology',
			'Cerebrovascular & paediatric neurosurgery',
			'Functional neurosurgery',
			'Skull base tumours & endoscopic pituitary surgery',
			'Spine instrumentation & spinal deformity correction',
			'Stroke management',
		],
		education: [
			{ degree: 'MBBS', institution: 'Armed Forces Medical College (AFMC), Pune', year: '1990' },
			{ degree: 'MS — General Surgery', institution: 'Armed Forces Medical College (AFMC), Pune', year: '1999' },
			{ degree: 'MCh — Neurosurgery', institution: 'Armed Forces Medical College (AFMC), Pune', year: '2006' },
		],
		experience: [
			{ role: 'Clinical Director, Professor & HOD — Neurosurgery & Neurospine Surgery', place: 'Marengo Asia Hospitals, Gurugram', period: 'Current' },
		],
		awards: [
			{ title: 'Chief of Air Staff Commendation', year: '2010' },
			{ title: 'Fellowship, Association of Surgeons of India', year: '2018' },
			{ title: '80,000+ cases managed; 5,000+ complex procedures performed' },
			{ title: '24+ peer-reviewed publications; contributor to neurosurgery textbooks' },
		],
		memberships: [
			'Neurological Society of India',
			'Neuro Spinal Surgeons Association',
			'Skull Base Society of India',
			'American Association of Neurological Surgeons',
			'AO Spine',
			'Association of Surgeons of India',
		],
		testimonials: [],
	},
	{
		slug: 'punit-singla',
		name: 'Dr. Punit Singla',
		specialty: 'Liver Transplant Surgeon',
		title: 'Program Clinical Director — Institute of Liver Transplant & HPB Surgery',
		qualification: 'MBBS, MS, DNB (Surgical Gastroenterology); Fellowship in Liver Transplant',
		hospital: 'Marengo Asia Hospitals, Faridabad',
		city: 'Faridabad, India',
		experienceYears: 15,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 219,
		theme: 'green',
		photo: imgPunitSingla,
		about:
			'Dr. Punit Singla is Program Clinical Director of the Institute of Liver Transplant & HPB Surgery, practising at Marengo Asia Hospitals in Faridabad and Gurugram and at Marengo CIMS Hospital in Ahmedabad. He has performed more than 2,000 liver transplants, including paediatric cases, ABO-incompatible transplants and simultaneous liver-kidney transplants, and established the first independent living donor liver transplant programme in Punjab. He trained in surgical gastroenterology at Sir Ganga Ram Hospital, Delhi, and completed his liver transplant fellowship at Medanta — The Medicity, Gurugram.',
		specializations: [
			'Living donor liver transplant',
			'Minimally invasive liver donor surgery',
			'Paediatric liver transplant',
			'Liver cancer',
			'Hepatopancreatobiliary (HPB) surgery',
		],
		education: [
			{ degree: 'MBBS', institution: 'Dayanand Medical College, Ludhiana, Punjab' },
			{ degree: 'MS', institution: 'SPMC, Bikaner, Rajasthan' },
			{ degree: 'DNB — Surgical Gastroenterology', institution: 'Sir Ganga Ram Hospital, Delhi' },
			{ degree: 'Fellowship — Liver Transplant', institution: 'Medanta — The Medicity, Gurugram' },
		],
		experience: [
			{ role: 'Program Clinical Director, Institute of Liver Transplant & HPB Surgery', place: 'Marengo Asia Hospitals (Faridabad, Gurugram) & Marengo CIMS Hospital, Ahmedabad', period: 'Current' },
		],
		awards: [
			{ title: '2,000+ liver transplants performed, incl. paediatric, ABO-incompatible and liver-kidney' },
			{ title: 'Established the first independent living donor liver transplant programme in Punjab' },
		],
		memberships: [
			'Indian Association of Surgical Gastroenterology (IASG)',
			'Association of Surgeons of India (ASI)',
			'Liver Transplantation Society of India (LTSI)',
			'International Liver Transplant Society (ILTS)',
			'Association of Minimal Access Surgeons of India (AMASI)',
		],
		testimonials: [],
	},
	{
		slug: 'neeraj-teotia',
		name: 'Dr. Neeraj Teotia',
		specialty: 'Paediatric Haemato-Oncologist',
		title: 'Consultant — Paediatric Hemato-Oncology & Bone Marrow Transplant',
		qualification: 'MBBS, MD (Paediatrics), FNB (Paediatric Hemato-Oncology); Fellowship, Bristol UK',
		hospital: 'Marengo Asia Hospitals, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 5,
		languages: ['English', 'Hindi'],
		rating: 4.8,
		reviews: 143,
		theme: 'blue',
		photo: imgNeerajTeotia,
		about:
			'Dr. Neeraj Teotia is a Consultant in Paediatric Hemato-Oncology and Bone Marrow Transplant at Marengo Asia Hospitals, practising in Gurugram and Faridabad. He has successfully performed more than 200 bone marrow transplants and treats childhood leukaemia, lymphoma, solid tumours such as neuroblastoma, rhabdomyosarcoma and osteosarcoma, and aplastic anaemia and bone marrow failure syndromes. He completed his FNB at Rajiv Gandhi Cancer Institute, Delhi, and a fellowship in paediatric bone marrow transplant and cellular therapy at the Royal Bristol Hospital for Children in the UK, and has 10+ publications in national and international journals.',
		specializations: [
			'Paediatric bone marrow transplant',
			'Paediatric tumours (neuroblastoma, RMS, osteosarcoma)',
			'Leukaemia & lymphoma',
			'Aplastic anaemia & bone marrow failure syndromes',
			'Paediatric hemato-oncology',
		],
		education: [
			{ degree: 'MBBS', institution: 'JN Medical College, Belgaum' },
			{ degree: 'MD — Paediatrics', institution: 'LLRM Medical College, Meerut' },
			{ degree: 'FNB — Paediatric Hematology-Oncology', institution: 'Rajiv Gandhi Cancer Institute & Research Centre (RGCIRC), Delhi' },
			{ degree: 'Fellowship — Paediatric Bone Marrow Transplant & Cellular Therapy', institution: 'Royal Bristol Hospital for Children, UHBW, Bristol, UK' },
		],
		experience: [
			{ role: 'Consultant, Paediatric Hemato-Oncology & BMT', place: 'Marengo Asia Hospitals, Gurugram & Faridabad', period: 'Current' },
			{ role: 'Fellow, Paediatric BMT & Cellular Therapy', place: 'Royal Bristol Hospital for Children, UHBW', period: 'Earlier career' },
			{ role: 'Clinical training', place: 'Indraprastha Apollo Hospital, Delhi', period: 'Earlier career' },
			{ role: 'Clinical training', place: 'Rajiv Gandhi Cancer Institute and Research Centre, Delhi', period: 'Earlier career' },
			{ role: 'Clinical training', place: 'University College of Medical Sciences (UCMS), Delhi', period: 'Earlier career' },
		],
		awards: [
			{ title: '200+ bone marrow transplants successfully performed' },
			{ title: '10+ publications in national and international journals' },
			{ title: 'Conference panelist and moderator' },
		],
		memberships: [
			'European Society for Blood and Marrow Transplantation (EBMT)',
			'Indian Society for Hematology & Blood Transfusion (ISHBT)',
			'Indian Academy of Pediatrics (IAP)',
		],
		testimonials: [],
	},
	{
		slug: 'ritesh-mongha',
		name: 'Dr. Ritesh Mongha',
		specialty: 'Urologist & Renal Transplant Surgeon',
		title: 'Clinical Director & Head — Urology, Uro-Oncology & Renal Transplant',
		qualification: 'MBBS, MS, DNB (General Surgery), MCh — Urology',
		hospital: 'Marengo Asia Hospitals, Faridabad',
		city: 'Faridabad, India',
		experienceYears: 18,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 207,
		photo: imgRiteshMongha,
		theme: 'teal',
		about:
			'Dr. Ritesh Mongha is Clinical Director & Head of Urology, Uro-Oncology & Renal Transplant at Marengo Asia Hospitals, Faridabad, with 18 years of experience. He completed his MCh in Urology at IPGMER, Kolkata, and his practice spans kidney transplantation, robotic-assisted and laparoscopic urology, endourology, laser kidney stone and prostate treatment, uro-oncology, reconstructive urology and male infertility surgery. His surgical record includes 700+ renal transplants, 20,000+ endourological procedures and 1,000+ laser prostate surgeries.',
		specializations: [
			'Kidney transplantation',
			'Robotic-assisted urology',
			'Laparoscopic surgery',
			'Endourology',
			'Uro-oncology',
			'Laser kidney stone treatment',
			'Reconstructive urology',
			'Male infertility surgery',
		],
		education: [
			{ degree: 'MBBS', institution: 'Nalanda Medical College, Patna' },
			{ degree: 'MS — General Surgery', institution: 'Institute of Medical Sciences (IMS), Varanasi' },
			{ degree: 'DNB — General Surgery', institution: 'National Academy of Medical Sciences, New Delhi' },
			{ degree: 'MCh — Urology', institution: 'IPGMER, Kolkata' },
		],
		experience: [
			{ role: 'Clinical Director & Head, Urology, Uro-Oncology & Renal Transplant', place: 'Marengo Asia Hospitals, Faridabad', period: 'Current' },
		],
		awards: [
			{ title: '700+ renal transplants and 700+ laparoscopic donor nephrectomies' },
			{ title: '20,000+ endourological procedures' },
			{ title: '500+ uro-oncological surgeries' },
			{ title: '1,000+ laser prostate surgeries and 1,000+ RIRS procedures' },
		],
		memberships: [],
		testimonials: [],
	},
	{
		slug: 'meet-kumar',
		name: 'Dr. Meet Kumar',
		specialty: 'Haematologist & BMT Specialist',
		title: 'Clinical Director & HOD — Hematology Oncology & BMT',
		qualification: 'MBBS, MD, DM (Clinical Hematology); BMT Fellowship, Tata Medical Centre',
		hospital: 'Marengo Asia Hospitals, Faridabad',
		city: 'Faridabad, India',
		experienceYears: 14,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 198,
		theme: 'green',
		photo: imgMeetKumar,
		about:
			'Dr. Meet Kumar is Clinical Director and HOD of Hematology Oncology & BMT at Marengo Asia Hospitals, practising in Faridabad and Gurugram. A DM in Clinical Hematology with a bone marrow transplant fellowship at Tata Medical Centre, Kolkata, and observer training in CAR-T cell therapy at King’s College London, he has performed more than 700 bone marrow transplants, including autologous, allogeneic, matched unrelated and haplo-identical. He treats anaemia, thrombocytopenia, leukaemia, lymphoma, myeloma and aplastic anaemia, has 20+ research publications, and previously worked at Sir Ganga Ram Hospital, SGPGI Lucknow, BLK Hospital and Fortis Memorial Research Institute.',
		specializations: [
			'Bone marrow transplant',
			'Leukaemia, lymphoma & myeloma',
			'Aplastic anaemia',
			'Anaemia & thrombocytopenia',
		],
		education: [
			{ degree: 'MBBS, MD', institution: 'Medical training in India' },
			{ degree: 'DM — Clinical Hematology', institution: 'India' },
			{ degree: 'Fellowship — Bone Marrow Transplant', institution: 'Tata Medical Centre, Kolkata' },
			{ degree: 'Observer — CAR-T Cell Therapy', institution: 'King’s College, London' },
		],
		experience: [
			{ role: 'Clinical Director & HOD, Hematology Oncology & BMT', place: 'Marengo Asia Hospitals, Faridabad & Gurugram', period: 'Current' },
			{ role: 'Clinical role', place: 'Fortis Memorial Research Institute, Gurugram', period: 'Earlier career' },
			{ role: 'Clinical role', place: 'BLK Hospital, Delhi', period: 'Earlier career' },
			{ role: 'Clinical role', place: 'Sir Ganga Ram Hospital, Delhi', period: 'Earlier career' },
			{ role: 'Clinical role', place: 'SGPGI, Lucknow', period: 'Earlier career' },
		],
		awards: [
			{ title: 'Global Award for Emerging Hematologist' },
			{ title: 'Hisar Gaurav Award' },
			{ title: '700+ bone marrow transplants performed' },
			{ title: '20+ research publications in national and international journals' },
		],
		memberships: [
			'Indian Society of Hematology & Blood Transfusion (ISHBT)',
			'American Society of Hematology',
			'Bengal Society of Hematology',
			'Delhi Society of Hematology',
		],
		testimonials: [],
	},
	{
		slug: 'shibal-bhartiya',
		name: 'Dr. Shibal Bhartiya',
		specialty: 'Ophthalmologist & Glaucoma Specialist',
		title: 'Clinical Director — Ophthalmology; Program Director — Community Outreach & Wellness, MAIINS',
		qualification: 'MBBS, MS (Ophthalmology); Fellowships in Cornea & Glaucoma, AIIMS and Geneva',
		hospital: 'Marengo Asia Hospitals, Gurugram',
		city: 'Gurugram, India',
		experienceYears: 23,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 231,
		theme: 'blue',
		photo: imgShibalBhartiya,
		about:
			'Dr. Shibal Bhartiya is Clinical Director of Ophthalmology at Marengo Asia Hospitals, Gurugram, and Program Director for Community Outreach & Wellness and the Marengo Asia International Institute of Neuro and Spine (MAIINS), with over 23 years of experience. Trained at Maulana Azad Medical College and the Dr R P Centre for Ophthalmic Sciences, AIIMS, with a glaucoma research fellowship at the University of Geneva, he specialises in glaucoma, neuro-ophthalmology, ocular surface disease, LASIK, macular degeneration and diabetic retinopathy. He is a research collaborator at Mayo Clinic, Editor-in-Chief of Clinical and Experimental Vision and Eye Research, and the author of 200+ peer-reviewed papers and 10 textbooks.',
		specializations: [
			'Glaucoma',
			'Neuro-ophthalmology',
			'Ocular surface diseases, including dry eye',
			'LASIK',
			'Age-related macular degeneration (AMD)',
			'Diabetic retinopathy',
		],
		education: [
			{ degree: 'MBBS', institution: 'Maulana Azad Medical College, New Delhi' },
			{ degree: 'MS — Ophthalmology', institution: 'Maulana Azad Medical College, New Delhi' },
			{ degree: 'Clinical Research Associateship — Cornea & Glaucoma', institution: 'Dr R P Centre for Ophthalmic Sciences, AIIMS, New Delhi' },
			{ degree: 'Clinical Research Fellowship — Glaucoma', institution: 'University of Geneva, Switzerland' },
			{ degree: 'Doctorat en Médecine (currently enrolled)', institution: 'University of Geneva, Switzerland' },
		],
		experience: [
			{ role: 'Clinical Director, Ophthalmology; Program Director, Community Outreach & Wellness and MAIINS', place: 'Marengo Asia Hospitals, Gurugram', period: 'Current' },
			{ role: 'Research Collaborator', place: 'Mayo Clinic, Jacksonville, Florida, USA', period: 'Ongoing' },
		],
		awards: [
			{ title: 'Editor-in-Chief, Clinical and Experimental Vision and Eye Research' },
			{ title: 'Executive Editor, Journal of Current Glaucoma Practice' },
			{ title: 'Associate Advisory Board member, International Society of Glaucoma Surgery' },
			{ title: 'Author of 200+ peer-reviewed papers and 10 textbooks' },
			{ title: 'Founder, Vision Unlimited (social impact organisation)' },
		],
		memberships: [],
		testimonials: [],
	},
	{
		slug: 'gautam-banga',
		name: 'Dr. Gautam Banga',
		photo: imgGautamBanga,
		specialty: 'Urologist & Andrologist',
		title: 'Consultant — Urology and Andrology',
		qualification: 'MBBS, MS — General Surgery, MCh — Urology',
		hospital: 'SCI International Hospital, Greater Kailash, New Delhi',
		city: 'New Delhi, India',
		experienceYears: 20,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 176,
		theme: 'teal',
		about:
			'Dr. Gautam Banga is a consultant urologist and andrologist with over 20 years of specialised experience and more than 3,000 complex urological surgeries to his name. He trained in general surgery at MGM Medical College, Indore, and completed his MCh in Urology at Sawai Mansingh Medical College, before building a practice focused on reconstructive urology, andrology and men’s sexual health at SCI International Hospital, New Delhi. He is regarded as one of North India’s highest-volume surgeons for advanced men’s health treatments, including FDA-approved penile prosthesis implantation and microsurgical infertility procedures.',
		specializations: [
			'Reconstructive urology',
			'Andrology & men’s sexual health',
			'Penile prosthesis & implant surgery',
			'Male infertility & micro-TESE',
			'Advanced endourology (laser procedures)',
			'Urethroplasty and hypospadias repair',
			'RIRS and PCNL for kidney stone removal',
			'HoLEP/TURP laser surgery',
		],
		education: [
			{ degree: 'MBBS', institution: 'B.J. Medical College, University of Pune', year: '2001' },
			{ degree: 'MS — General Surgery', institution: 'MGM Medical College and MY Hospital, Indore', year: '2005' },
			{ degree: 'MCh — Urology', institution: 'Sawai Mansingh Medical College', year: '2010' },
		],
		experience: [
			{ role: 'Consultant, Urology & Andrology', place: 'SCI International Hospital, New Delhi', period: '2012 — Present' },
			{ role: 'Consultant', place: 'QRG Central Hospital', period: '2011 — 2012' },
			{ role: 'Associate Consultant', place: 'Kulkarni Endosurgery Centre', period: '2010 — 2011' },
			{ role: 'MCh Resident, Urology', place: 'SMS Medical College', period: '2007 — 2010' },
			{ role: 'Senior Resident', place: 'Fortis Hospital', period: '2005 — 2007' },
		],
		awards: [
			{ title: 'USI-BAUS Travel Fellowship, BAUS Annual Conference, Manchester, UK', year: '2010' },
			{ title: 'Performed 3,000+ complex urological surgeries' },
			{ title: 'Recognised as one of North India’s highest-volume surgeons for advanced men’s health treatments' },
		],
		memberships: [],
		testimonials: [],
	},
	{
		slug: 'ila-gupta',
		name: 'Dr. Ila Gupta',
		photo: imgIlaGupta,
		specialty: 'IVF & Infertility Specialist',
		title: 'Co-Founder & Director — Pristyn Care Ferticity IVF & Fertility Clinics',
		qualification: 'MBBS, MS — Obstetrics & Gynaecology; Diploma in Reproductive Medicine & ART (Kiel, Germany)',
		hospital: 'Pristyn Care Ferticity Super Speciality & IVF Hospital, Malviya Nagar, New Delhi',
		city: 'New Delhi, India',
		experienceYears: 29,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 231,
		theme: 'green',
		about:
			'Dr. Ila Gupta is a Co-Founder & Director of Pristyn Care Ferticity IVF & Fertility Clinics, with over 29 years of experience in infertility treatment and Assisted Reproductive Technologies. She trained in advanced endoscopy in Kerala and Clermont, France, and completed a diploma in Reproductive Medicine & ART in Kiel, Germany, before building a practice covering IVF, ICSI, IMSI, IUI, embryo freezing and genetic screening, alongside hysteroscopic and laparoscopic surgery for both male and female infertility. Her clinic reports a success rate of up to 78% for full-term, genetically sound pregnancies, and she has served on a five-member expert committee evaluating India’s Assisted Reproductive Technology (Regulation) Act, 2020.',
		specializations: [
			'IVF treatment',
			'Infertility management (male & female)',
			'Assisted Reproductive Technologies (ART)',
			'Endoscopic procedures (hysteroscopy, laparoscopy)',
			'Platelet-rich plasma (PRP) therapy',
			'Genetic screening (PGS/PGD)',
			'ICSI, IMSI, IUI & embryo freezing',
		],
		education: [
			{ degree: 'MBBS', institution: 'Gajra Raja Medical College, Gwalior' },
			{ degree: 'MS — Obstetrics & Gynaecology', institution: 'Rani Durgawati Medical College, Jabalpur' },
			{ degree: 'Senior Residency', institution: "St. Stephen's Hospital, Delhi" },
			{ degree: 'Advanced Endoscopy Training', institution: 'Kerala, India' },
			{ degree: 'Diploma in Endoscopy', institution: 'Clermont, France' },
			{ degree: 'Diploma in Reproductive Medicine & ART', institution: 'Kiel, Germany' },
		],
		experience: [
			{ role: 'Co-Founder & Director', place: 'Pristyn Care Ferticity IVF & Fertility Clinics, New Delhi', period: 'Current' },
		],
		awards: [
			{ title: 'Dr. APJ Abdul Kalam Health Award', year: '2023' },
			{ title: 'Up to 78% success rate for full-term, genetically sound pregnancies' },
			{ title: 'Member, five-member expert committee evaluating the ART (Regulation) Act, 2020' },
			{ title: 'Jury member, National Fertility Health Awards by The Economic Times', year: '2025' },
		],
		memberships: [
			'Indian Fertility Society (IFS)',
			'Indian Society of Assisted Reproduction (ISAR)',
			'PCOS Society of India',
			'Fertility Preservation Society of India',
			'Federation of Obstetric & Gynaecological Societies of India (FOGSI)',
			'Delhi Gynaecology Forum',
			'Delhi Endoscopy Society',
		],
		testimonials: [],
	},
	{
		slug: 'rahil-chaudhary',
		name: 'Dr. Rahil Chaudhary',
		photo: imgRahilChaudhary,
		specialty: 'Cataract & Refractive Surgeon',
		title: 'Managing Director — Eye7 Eye Hospitals',
		qualification: 'MBBS, MS — Ophthalmology',
		hospital: 'Eye7 Hospitals, Lajpat Nagar & Janakpuri, Delhi',
		city: 'New Delhi, India',
		experienceYears: 15,
		languages: ['English', 'Hindi'],
		rating: 4.9,
		reviews: 342,
		theme: 'blue',
		about:
			'Dr. Rahil Chaudhary is Managing Director of Eye7 Eye Hospitals, a cataract and refractive surgeon specialising in LASIK, ICL, Contoura Vision laser vision correction and keratoconus treatment across Eye7’s network of centres in Delhi-NCR. He trained in refractive surgery in Germany and Japan and holds a Guinness World Record for performing 250 Contoura Vision LASIK procedures in a single day, alongside entries in the Limca Book of Records and India Book of Records for the highest corrected spectacle power using ICL and the fastest recorded LASIK surgery. He has held the record for the highest number of ICL procedures performed in India for ten consecutive years, and is a frequent speaker at international conferences including ESCRS, ASCRS and the World ICL Meet. Beyond the operating room, he founded the 7 Sight Foundation for charitable eye care and filed a Supreme Court public interest litigation on the regulation of live-streamed surgeries that led to new National Medical Commission guidelines.',
		specializations: [
			'LASIK & Contoura Vision laser vision correction',
			'ICL (implantable collamer lens) surgery',
			'Modern cataract surgery',
			'Keratoconus treatment',
			'Retina & vitreo-retinal care',
			'Glaucoma management',
			'Pediatric ophthalmology',
		],
		education: [
			{ degree: 'MBBS', institution: 'Himalayan Institute of Medical Sciences, Dehradun' },
			{ degree: 'Internship', institution: 'Dr. Ram Manohar Lohia Hospital & PGIMER, New Delhi' },
			{ degree: 'MS — Ophthalmology', institution: 'Swami Vivekananda Subharti Medical College, Meerut' },
			{ degree: 'Specialised training — Refractive Surgery', institution: 'Germany & Japan' },
		],
		experience: [{ role: 'Managing Director', place: 'Eye7 Eye Hospitals, New Delhi', period: 'Current' }],
		awards: [
			{ title: 'Guinness World Record — 250 Contoura Vision LASIK procedures in a single day' },
			{ title: 'Limca Book of Records — highest spectacle power (-32.5D) corrected using ICL' },
			{ title: 'India Book of Records — fastest LASIK surgery (1 minute 21 seconds)' },
			{ title: 'Highest ICL procedures performed in India, 10 consecutive years' },
			{ title: 'International Hero in Ophthalmology Award, AIOS (5 consecutive years)' },
			{ title: 'Best Surgical Technique Prize & John Henahan Prize, ESCRS' },
			{ title: 'Swadesh Samman Award, Ministry of Health' },
		],
		memberships: [],
		testimonials: [],
	},
	{
		slug: 'deepak-saha',
		name: 'Dr. Deepak Saha',
		specialty: 'Interventional Cardiologist',
		title: 'Senior Consultant & Director — Cath Lab, TX Hospitals',
		qualification: 'MBBS, MD — General Medicine; DNB — Cardiology; MNAMS; FESC; FSCAI',
		hospital: 'TX Hospitals, Banjara Hills, Hyderabad',
		city: 'Hyderabad, India',
		experienceYears: 28,
		languages: ['English', 'Hindi'],
		rating: 4.8,
		reviews: 186,
		theme: 'blue',
		photo: imgDeepakSaha,
		videoUrl: 'https://youtu.be/8ujbWJbVqXo',
		about: [
			'Dr. Deepak Saha is an interventional cardiologist with more than 28 years of clinical experience, currently serving as Senior Consultant and Director of the Cath Lab at TX Hospitals, Banjara Hills, and as Senior Consultant at Subash Heart Clinic, Ameerpet, both in Hyderabad. His practice spans the full range of coronary and structural heart interventions, from routine angioplasty to complex valve and device procedures.',
			'He completed his MBBS at MKCG Medical College, Berhampur, Odisha, followed by an MD in General Medicine from SCB Medical College, Cuttack, and a DNB in Cardiology from Batra Hospital & Medical Research Centre, New Delhi. He went on to earn fellowships from the European Society of Cardiology (FESC) and the Society for Cardiovascular Angiography and Interventions (FSCAI), alongside membership of the National Academy of Medical Sciences (MNAMS).',
			"Earlier in his career, Dr. Saha held senior consultant positions at Medicover Hospitals, Virinchi Hospital, and Kamineni Hospital in Hyderabad, and served as Assistant Professor of Cardiology at Nizam's Institute of Medical Sciences (NIMS). He has been recognised with the Vaidya Ratna Award from the Mother Foundation and a Best Doctors Award from Suman Art Theatres, and has served as Executive Editor of the Indian Heart Journal.",
		].join('\n\n'),
		specializations: [
			'Coronary & peripheral angioplasty',
			'Carotid & renal angioplasty',
			'Cardiac catheterization',
			'Balloon mitral valvuloplasty',
			'Device closure (ASD/VSD)',
			'Pacemaker & ICD implantation',
			'Electrophysiology studies',
		],
		education: [
			{ degree: 'MBBS', institution: 'MKCG Medical College, Berhampur, Odisha', year: '1998' },
			{ degree: 'MD — General Medicine', institution: 'SCB Medical College, Cuttack', year: '2003' },
			{ degree: 'DNB — Cardiology', institution: 'Batra Hospital & Medical Research Centre, New Delhi', year: '2009' },
			{ degree: 'MNAMS', institution: 'National Academy of Medical Sciences' },
			{ degree: 'FESC — Fellow, European Society of Cardiology', institution: 'European Society of Cardiology', year: '2017' },
			{ degree: 'FSCAI — Fellow, Society for Cardiovascular Angiography and Interventions', institution: 'SCAI', year: '2020' },
		],
		experience: [
			{ role: 'Senior Consultant & Director, Cath Lab', place: 'TX Hospitals, Banjara Hills, Hyderabad', period: 'Current' },
			{ role: 'Senior Consultant', place: 'Subash Heart Clinic, Ameerpet, Hyderabad', period: 'Current' },
			{ role: 'Senior Consultant', place: 'Medicover Hospitals, Hyderabad', period: 'Previous' },
			{ role: 'Senior Consultant', place: 'Virinchi Hospital, Banjara Hills, Hyderabad', period: 'Previous' },
			{ role: 'Senior Consultant', place: 'Kamineni Hospital, Hyderabad', period: 'Previous' },
			{ role: 'Assistant Professor, Cardiology', place: "Nizam's Institute of Medical Sciences (NIMS), Hyderabad", period: 'Previous' },
			{ role: 'Junior Consultant', place: 'Batra Hospital, New Delhi', period: 'Early career' },
		],
		awards: [
			{ title: 'Vaidya Ratna Award, Mother Foundation', year: '2014' },
			{ title: 'Best Doctors Award, Suman Art Theatres', year: '2018' },
			{ title: 'Executive Editor, Indian Heart Journal', year: '2012' },
		],
		memberships: [
			'Cardiological Society of India',
			'National Academy of Medical Sciences',
			'European Society of Cardiology',
			'Society for Cardiovascular Angiography and Interventions',
		],
		testimonials: [],
	},
	{
		slug: 'dvl-narayana-rao',
		name: 'Dr. D.V.L. Narayana Rao',
		specialty: 'Surgical Gastroenterologist',
		title: 'Senior Consultant — Surgical Gastroenterology, Robotic & Laparoscopic GI Cancer Surgery',
		qualification:
			'MBBS; MS — General Surgery (Madras Medical College); MCh — Surgical Gastroenterology (AIIMS, New Delhi); DNB; Fellowship — Surgical Gastroenterology (NIMS, Hyderabad)',
		hospital: 'TX Hospitals, Banjara Hills, Hyderabad',
		city: 'Hyderabad, India',
		experienceYears: 33,
		languages: ['English', 'Hindi'],
		rating: 4.8,
		reviews: 162,
		theme: 'green',
		photo: imgDVLNarayanaRao,
		videoUrl: 'https://youtu.be/kItrqf__SE8',
		about: [
			'Dr. D.V.L. Narayana Rao is a surgical gastroenterologist and general surgeon with over 33 years of experience, specializing in gastrointestinal, hepatobiliary and pancreatic surgery, including minimally invasive and laparoscopic procedures, bariatric surgery, and colorectal surgery. He currently practices as Senior Consultant at TX Hospitals, Banjara Hills, Hyderabad.',
			"He completed his MBBS at Sri Venkateswara Medical College, Tirupati, an MS in General Surgery from Madras Medical College, Chennai, and an MCh in Surgical Gastroenterology from the All India Institute of Medical Sciences (AIIMS), New Delhi, followed by a fellowship in Surgical Gastroenterology at Nizam's Institute of Medical Sciences (NIMS), Hyderabad. From 1996 to 2021, he was faculty in the Departments of Surgery and Surgical Gastroenterology at Osmania Medical College and Kurnool Medical College.",
			"Earlier in his career, he was a Senior Consultant across the Care Group of Hospitals, Virinchi Hospital, Fernandez Hospitals, and Vasavi Hospital, and a Consultant General Surgeon at Kamineni Hospital. His surgical contributions include designing a colo-caval shunt technique for portal hypertension, developing modifications to the Whipple procedure, and pioneering pancreatic disconnection as a treatment for chronic pancreatitis with a non-dilated duct — he has performed over 350 shunt surgeries for non-cirrhotic portal hypertension and more than 200 Frey's procedures for chronic pancreatitis.",
		].join('\n\n'),
		specializations: [
			'Bariatric surgery',
			'Minimally invasive & laparoscopic surgery',
			'Hepatobiliary & pancreatic surgery',
			'Colorectal surgery',
			'Proctology',
			'General surgery',
		],
		education: [
			{ degree: 'MBBS', institution: 'Sri Venkateswara Medical College, Tirupati', year: '1985' },
			{ degree: 'MS — General Surgery', institution: 'Madras Medical College, Chennai', year: '1995' },
			{ degree: 'MCh — Surgical Gastroenterology', institution: 'All India Institute of Medical Sciences (AIIMS), New Delhi', year: '2003' },
			{ degree: 'Fellowship — Surgical Gastroenterology', institution: "Nizam's Institute of Medical Sciences (NIMS), Hyderabad" },
		],
		experience: [
			{ role: 'Senior Consultant, Surgical Gastroenterology', place: 'TX Hospitals, Banjara Hills, Hyderabad', period: 'Current' },
			{ role: 'Faculty, Surgery & Surgical Gastroenterology', place: 'Osmania Medical College & Kurnool Medical College', period: '1996 — 2021' },
			{ role: 'Senior Consultant', place: 'Care Group of Hospitals', period: 'Previous' },
			{ role: 'Senior Consultant', place: 'Virinchi Hospital, Hyderabad', period: 'Previous' },
			{ role: 'Senior Consultant', place: 'Fernandez Hospitals', period: 'Previous' },
			{ role: 'Senior Consultant', place: 'Vasavi Hospital', period: 'Previous' },
			{ role: 'Consultant General Surgeon', place: 'Kamineni Hospital, Hyderabad', period: 'Previous' },
			{ role: 'Consultant Surgical Gastroenterologist', place: 'Bristlecone Hospitals, Barkatpura', period: 'Previous' },
			{ role: 'Consultant Surgical Gastroenterologist', place: 'Andhra Mahila Sabha Durgabai Deshmukh Hospital, Vidyanagar', period: 'Previous' },
		],
		awards: [
			{ title: 'Designed a colo-caval shunt technique for portal hypertension, using the middle colic vein to decompress the portal system' },
			{ title: "Developed modifications to Whipple's procedure" },
			{ title: 'Pioneered "pancreatic disconnection" as a treatment for chronic pancreatitis with a non-dilated duct' },
			{ title: 'Performed 350+ shunt surgeries for non-cirrhotic portal hypertension in pediatric and adult patients' },
			{ title: "Completed 200+ Frey's procedures for chronic pancreatitis" },
		],
		memberships: [
			'Indian Association of Surgical Gastroenterology (IASG)',
			'Association of Minimal Access Surgeons of India (AMASI)',
			'Indian Medical Association (IMA)',
			'Indian Association of Gastrointestinal Endo Surgeons',
		],
		testimonials: [],
	},
	{
		slug: 'lokesh-rudra-madhav',
		name: 'Dr. Lokesh Rudra Madhav',
		specialty: 'Orthodontist',
		title: 'Orthodontist & Consultant Orthodontist — Fixed Appliances, Aligners & Dentofacial Orthopedics',
		qualification: 'BDS; MDS — Orthodontics & Dentofacial Orthopedics',
		hospital: 'Green Park Dental, Delhi',
		city: 'New Delhi, India',
		experienceYears: 2,
		languages: ['English', 'Hindi', 'Kannada'],
		rating: 4.7,
		reviews: 42,
		theme: 'teal',
		photo: imgLokeshRudraMadhav,
		videoUrl: 'https://youtu.be/M-B7v6sWjTA',
		about: [
			'Dr. Lokesh Rudra Madhav is an orthodontist specializing in fixed and removable appliance therapy, clear aligner systems, and interdisciplinary orthodontic treatment. He is currently a full-time Orthodontist at Green Park Dental, Delhi, and a Consultant Orthodontist across multiple private clinics, providing comprehensive care to pediatric, adolescent, and adult patients — from clinical examination and cephalometric analysis through to individualized treatment planning.',
			'He completed his Bachelor of Dental Surgery (BDS) at the College of Dental Sciences, Bapuji Educational Group, Davangere, Karnataka, in 2020, followed by two years in independent general dental practice. He then completed a Master of Dental Surgery (MDS) in Orthodontics and Dentofacial Orthopedics at I.T.S Dental College, Ghaziabad, in 2025, where as a postgraduate resident he managed over 200 orthodontic cases, including conventional MBT and self-ligating fixed appliances, clear aligner therapy, and complex cases such as surgical orthodontics, cleft palate, impacted canines, and Class III malocclusions.',
			'He has an active academic and research interest in 3D imaging for precise mini-screw and temporary anchorage device (TAD) placement, and conducted interdisciplinary seminars and journal clubs for undergraduate and postgraduate students during his residency.',
		].join('\n\n'),
		specializations: [
			'Fixed orthodontic appliances (MBT & Damon self-ligating)',
			'Clear aligner therapy',
			'Interceptive orthodontics (habit-breaking appliances, space maintainers)',
			'Surgical orthodontics & complex malocclusions',
			'Mini-implants / TAD placement',
			'Cephalometric & CBCT analysis',
			'Functional appliance therapy',
		],
		education: [
			{ degree: 'BDS', institution: 'College of Dental Sciences, Bapuji Educational Group, Davangere, Karnataka', year: '2020' },
			{ degree: 'MDS — Orthodontics & Dentofacial Orthopedics', institution: 'I.T.S Dental College, Ghaziabad, Uttar Pradesh', year: '2025' },
		],
		experience: [
			{ role: 'Full-Time Orthodontist', place: 'Green Park Dental, Delhi', period: 'October 2025 — Present' },
			{ role: 'Consultant Orthodontist', place: 'Multiple private clinics, Delhi NCR', period: 'October 2025 — Present' },
			{ role: 'Resident Orthodontist (Postgraduate)', place: 'I.T.S Dental College, Ghaziabad, UP', period: 'November 2022 — October 2025' },
			{ role: 'General Dentist', place: 'Private clinical practice', period: 'October 2020 — October 2022' },
		],
		awards: [
			{ title: 'Dissertation — "Evaluation of Soft Tissue Profile Thickness in Class I Patients with Different Growth Patterns"' },
			{ title: 'Thesis — "Root Proximity and Angulation of Orthodontic Mini-Screws in the Anterior Maxilla: A CBCT Evaluation"' },
		],
		memberships: [
			'Dental Council of India — License No. 12559/A',
			'Indian Orthodontic Society (IOS) — Member ID SLM14596',
			'Indian Dental Association (IDA)',
		],
		testimonials: [],
	},
	{
		slug: 's-sudha',
		name: 'Dr. S. Sudha',
		specialty: 'Obstetrician, Gynaecologist & Infertility Specialist',
		title: 'Senior Consultant — Obstetrics, Gynaecology & Laparoscopic Surgery',
		qualification: 'MBBS; DGO; MD — Obstetrics & Gynaecology; FMAS (Fellowship in Minimal Access Surgery)',
		hospital: 'TX Hospitals, Banjara Hills, Hyderabad',
		city: 'Hyderabad, India',
		experienceYears: 26,
		languages: ['English', 'Hindi'],
		rating: 4.8,
		reviews: 174,
		theme: 'blue',
		photo: imgSSudha,
		videoUrl: 'https://youtu.be/U6reni9JsMY?si=oVIa-GLwwgPfdAXs',
		about: [
			"Dr. S. Sudha is a Senior Consultant Obstetrician, Gynaecologist, and Infertility Specialist with over 26 years of experience in women's healthcare, currently practicing at TX Hospitals, Banjara Hills, Hyderabad. She specializes in laparoscopic and hysteroscopic surgery and advanced infertility treatment, and is known for a patient-centric approach to managing high-risk pregnancies, PCOS, endometriosis, and gynecological surgery.",
			'She completed her MBBS, a Diploma in Gynaecology & Obstetrics (DGO), and an MD in Obstetrics & Gynaecology, all at Osmania Medical College, Hyderabad, between 1992 and 2002, and holds a Fellowship in Minimal Access Surgery (FMAS).',
			'Earlier in her career, she held consultant positions at Excell Multi Speciality Hospital (Narayanguda), Virinchi Hospital, Kamineni Hospital, Suman Chandra Hospital (Narayanaguda), Kirloskar Hospital (Basheerbagh), and Bristlecone Hospitals (Barkatpura), across Hyderabad. She was recognised with the Dr. APJ Abdul Kalam Healthcare Excellence Award in 2021.',
		].join('\n\n'),
		specializations: [
			'Laparoscopic & hysteroscopic surgery',
			'Infertility management',
			'High-risk pregnancy care',
			'PCOS treatment',
			'Endometriosis management',
			'Total laparoscopic hysterectomy',
			'Tubal recanalization surgery',
		],
		education: [
			{ degree: 'MBBS', institution: 'Osmania Medical College, Hyderabad', year: '1992' },
			{ degree: 'DGO', institution: 'Osmania Medical College, Hyderabad', year: '1997' },
			{ degree: 'MD — Obstetrics & Gynaecology', institution: 'Osmania Medical College, Hyderabad', year: '2002' },
		],
		experience: [
			{ role: 'Senior Consultant, Obstetrics & Gynaecology', place: 'TX Hospitals, Banjara Hills, Hyderabad', period: 'Current' },
			{ role: 'Consultant', place: 'Excell Multi Speciality Hospital, Narayanguda', period: 'Previous' },
			{ role: 'Consultant', place: 'Virinchi Hospital, Hyderabad', period: 'Previous' },
			{ role: 'Consultant', place: 'Kamineni Hospital, Hyderabad', period: '2007 — 2010' },
			{ role: 'Consultant', place: 'Suman Chandra Hospital, Narayanaguda', period: '2004 — 2007' },
			{ role: 'Visiting Consultant', place: 'Kirloskar Hospital, Basheerbagh', period: '2010 — 2016' },
			{ role: 'Consultant', place: 'Bristlecone Hospitals, Barkatpura', period: '2010 — 2016' },
		],
		awards: [{ title: 'Dr. APJ Abdul Kalam Healthcare Excellence Award', year: '2021' }],
		memberships: [
			'Indian Medical Association (IMA)',
			'Federation of Obstetric and Gynaecological Societies of India (FOGSI)',
			'Society of Endoscopic & Laparoscopic Surgeons of India (SELSI)',
		],
		testimonials: [],
	},
	{
		slug: 'ganesh-dubey',
		name: 'Dr. Ganesh Dubey',
		specialty: 'General Dentist & Clinical Director',
		title: 'Founder & Clinical Director — Mithila Multi Speciality Dental Clinic',
		qualification: 'BDS',
		hospital: 'Mithila Multi Speciality Dental Clinic, Vaishali Sector 1, Ghaziabad',
		city: 'Ghaziabad, India',
		experienceYears: 2,
		languages: ['English', 'Hindi'],
		rating: 4.7,
		reviews: 58,
		theme: 'teal',
		photo: imgGaneshDubey,
		videoUrl: 'https://youtu.be/TP5VZ-46Xgs',
		about: [
			"Dr. Ganesh Dubey is the founder and Clinical Director of Mithila Multi Speciality Dental Clinic in Vaishali, Ghaziabad, a full-service dental facility built around a team of 13 MDS-qualified specialists covering 9 dental disciplines. His mission is to make every patient's dental experience the finest it can be, combining clinical excellence with genuine comfort, empathy, and trust — personally overseeing complex treatment plans to keep every case clear and well coordinated for the patient.",
			'With hands-on experience working alongside international medical programmes, Dr. Dubey brings a global perspective to patient care, and has built Mithila into a clinic with an established track record of treating international patients, particularly from African nations and Pacific Island countries. The clinic offers English-language consultations, upfront treatment plans with cost estimates, and dedicated travel and stay coordination for patients arriving from abroad.',
			"Beyond the clinic, Dr. Dubey personally leads Mithila's community outreach work, including free dental camps and oral health screening drives in partnership with Max Healthcare and MMG District Hospital, Ghaziabad — reflecting the clinic's commitment to accessible, compassionate dental care beyond its own walls.",
		].join('\n\n'),
		specializations: [
			'Clinical leadership & treatment planning oversight',
			'Dental implants',
			'Smile design & full mouth rehabilitation',
			'International patient coordination',
			'General & cosmetic dentistry',
		],
		education: [],
		experience: [
			{ role: 'Founder & Clinical Director', place: 'Mithila Multi Speciality Dental Clinic, Vaishali, Ghaziabad', period: 'Current' },
		],
		awards: [
			{ title: 'Built a 13-specialist, 9-discipline MDS clinical team at Mithila Multi Speciality Dental Clinic' },
			{ title: 'Leads free dental camps and oral health screening drives in partnership with Max Healthcare and MMG District Hospital, Ghaziabad' },
		],
		memberships: ['Dental Council of India (DCI) — Registered', 'UP State Dental Council — Registered'],
		testimonials: [
			{
				name: 'International Patient',
				country: 'Papua New Guinea',
				countryCode: 'pg',
				rating: 5,
				text: 'I came to India specifically for dental treatment and Mithila Clinic exceeded every expectation. The doctors were professional, the treatment was painless and the results are life-changing. I can smile confidently again after years of dental problems.',
			},
		],
	},
	{
		slug: 'n-pavan-kumar-rao',
		name: 'Dr. N. Pavan Kumar Rao',
		specialty: 'Nephrologist & Renal Transplant Physician',
		title: 'Senior Consultant — Nephrology & Kidney Transplant',
		qualification: 'MBBS; MD; DM — Nephrology',
		hospital: 'TX Hospitals, Banjara Hills, Hyderabad',
		city: 'Hyderabad, India',
		experienceYears: 21,
		languages: ['English', 'Hindi'],
		rating: 4.8,
		reviews: 148,
		theme: 'green',
		photo: imgNPavanKumarRao,
		about: [
			'Dr. N. Pavan Kumar Rao is a Senior Consultant Nephrologist with over 21 years of experience in managing kidney-related disorders, currently practicing at TX Hospitals, Banjara Hills, Hyderabad. His practice covers the full range of nephrology care, including chronic kidney disease management, dialysis, and kidney transplant and post-transplant care, and he is regarded as one of the leading kidney transplant specialists in the region.',
			'He completed his MBBS and MD at Dr. NTR University of Health Sciences, Andhra Pradesh, followed by a DM in Nephrology, with distinction, from the same university in 2014, and has continued to build his expertise through international training and conferences.',
			'Earlier in his career, he was a Consultant Nephrologist at The Deccan Hospital, Somajiguda. He has presented research papers and case studies at international nephrology conferences and contributed to medical journals on advancements in nephrology and transplantation techniques.',
		].join('\n\n'),
		specializations: [
			'Kidney transplant & post-transplant care',
			'Chronic kidney disease (CKD) management',
			'Dialysis & hemodialysis',
			'Hemodialysis access maintenance',
			'Kidney stone treatment',
			'Hypertension with kidney disease',
			'Renal nutrition programs',
		],
		education: [
			{ degree: 'MBBS', institution: 'Dr. NTR University of Health Sciences, Andhra Pradesh', year: '2003' },
			{ degree: 'DM — Nephrology', institution: 'Dr. NTR University of Health Sciences, Andhra Pradesh', year: '2014' },
		],
		experience: [
			{ role: 'Senior Consultant Nephrologist', place: 'TX Hospitals, Banjara Hills, Hyderabad', period: 'Current' },
			{ role: 'Consultant Nephrologist', place: 'The Deccan Hospital, Somajiguda', period: 'Previous' },
		],
		awards: [
			{ title: 'Recognized as one of the leading kidney transplant specialists in Telangana' },
			{ title: 'Presented research papers and case studies at international nephrology conferences' },
		],
		memberships: [
			'Indian Society of Nephrology (ISN)',
			'International Society of Nephrology',
			'Association of Transplant Physicians of India',
		],
		testimonials: [],
	},
];

export const getDoctorBySlug = (slug: string) => doctors.find((d) => d.slug === slug);
