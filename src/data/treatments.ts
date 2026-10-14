export interface StayBreakdown {
	icuDays: number;
	roomDays: number;
	totalDays: number;
}

export interface CostComparisonRow {
	country: string;
	cost: string;
	waitTime: string;
	successRate: string;
	highlight?: boolean;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface TreatmentData {
	slug: string;
	name: string;
	icon:
		| 'heart'
		| 'activity'
		| 'shieldPlus'
		| 'gem'
		| 'droplet'
		| 'dropletFill'
		| 'capsule'
		| 'eye'
		| 'brain'
		| 'spine'
		| 'stomach'
		| 'kidney'
		| 'earNoseThroat';
	/** Omit for treatments without a real photo yet — the card/detail page falls back to a themed icon tile. */
	imageKey?:
		| 'cardiacCare'
		| 'orthopedics'
		| 'oncology'
		| 'cosmeticSurgery'
		| 'fertility'
		| 'organTransplant'
		| 'dentalCare'
		| 'eyeCare'
		| 'neurology'
		| 'spineSurgery'
		| 'bariatric'
		| 'urology';
	theme: 'blue' | 'teal' | 'green';
	shortDescription: string;
	overview: string;
	startingPrice: number;
	avgSavings: number;
	hospitalsCount: number;
	procedures: string[];
	/** Full catalog of specific procedures under this specialty, shown on the treatment detail page. Falls back to `procedures` when omitted. */
	allProcedures?: string[];
	/** Richer procedure cards (parent image + long-form description) shown instead of `allProcedures` when present. Populated per category as write-ups are completed. */
	detailedProcedures?: { name: string; description: string }[];
	benefits: string[];
	/** The flagship procedure this cost/package breakdown is built around, e.g. "Liver Transplant". */
	flagshipProcedure: string;
	packagePrice: number;
	totalTripDays: number;
	stayDuration: {
		patient: StayBreakdown;
		donor?: StayBreakdown;
	};
	costComparison: CostComparisonRow[];
	inclusions: string[];
	exclusions: string[];
	faqs: FaqItem[];
}

export const treatments: TreatmentData[] = [
	{
		slug: 'cardiac-care',
		name: 'Cardiac Care',
		icon: 'heart',
		imageKey: 'cardiacCare',
		theme: 'blue',
		shortDescription:
			'Bypass surgery, valve repair, and angioplasty from surgeons trained at leading cardiac centers.',
		overview:
			"India's cardiac programs combine internationally trained surgeons with some of the highest surgical volumes in the world, giving patients access to advanced procedures like off-pump bypass and minimally invasive valve repair at a fraction of Western pricing — without waitlists.",
		startingPrice: 8000,
		avgSavings: 93,
		hospitalsCount: 150,
		procedures: ['Bypass Surgery', 'Valve Replacement', 'Angioplasty'],
		allProcedures: [
			'Coronary Angioplasty',
			'Coronary Artery Bypass Graft (CABG)',
			'Mitral Valve Replacement Surgery',
			'Aortic Valve Replacement',
			'Transcatheter Aortic Valve Replacement (TAVR)',
			'Cardiac Catheterization',
			'Balloon Pulmonary Valvotomy',
			'Cardiac Pacemaker Installation',
			'Pediatric Heart Surgery',
			'Artificial Heart / LVAD Implant',
			'Endovascular Aortic Aneurysm Repair',
			'Open Heart Surgery',
			'Congenital Heart Disease Treatment',
		],
		detailedProcedures: [
			{
				name: 'Coronary Angioplasty',
				description:
					"Coronary angioplasty is a minimally invasive procedure used to widen a narrowed or blocked coronary artery and restore blood flow to the heart muscle in patients with coronary artery disease. Under local anesthesia, a cardiologist threads a thin catheter through an artery in the wrist or groin up to the site of blockage, guided by live X-ray imaging, and inflates a small balloon to compress the plaque against the artery wall; in most cases a metal mesh stent is then left in place to keep the vessel open and reduce the chance of re-narrowing. It is typically recommended for patients with angina, reduced blood flow on a stress test, or as an emergency treatment during a heart attack to quickly reopen a blocked vessel. The procedure is done in a catheterization laboratory and usually takes under an hour, with most patients observed overnight and discharged within a day or two. India's cardiac centers perform high volumes of angioplasty using modern imaging and a wide range of stent options, and patients typically resume light activity within a week, with a cardiologist advising on medication and follow-up before returning home.",
			},
			{
				name: 'Coronary Artery Bypass Graft (CABG)',
				description:
					"Coronary artery bypass graft, commonly known as CABG or bypass surgery, is performed when one or more coronary arteries are severely narrowed or blocked and angioplasty is not suitable, often in patients with multi-vessel or complex coronary artery disease. During the operation, a cardiac surgeon takes a healthy blood vessel from elsewhere in the body, usually the internal mammary artery from the chest or a vein from the leg, and grafts it to reroute blood flow around the blocked segment. Traditional CABG is performed through an incision in the breastbone with the patient on a heart-lung bypass machine, though off-pump and minimally invasive approaches are used in selected cases. The goal is to relieve angina, reduce the risk of heart attack, and improve long-term heart function. Recovery involves several days in hospital, including time in intensive care immediately after surgery, followed by a structured period of activity restriction and cardiac rehabilitation. India's cardiac surgery programs combine experienced surgical teams with well-equipped intensive care units, and international patients typically plan for a hospital stay of about a week followed by a few weeks of local recovery before flying home, with wound checks and rehabilitation guidance provided throughout.",
			},
			{
				name: 'Mitral Valve Replacement Surgery',
				description:
					"Mitral valve replacement is performed when the mitral valve, which controls blood flow between the heart's left atrium and left ventricle, becomes too narrow (stenosis) or leaky (regurgitation) to function properly and cannot be adequately repaired. Under general anesthesia and with the patient on a heart-lung bypass machine, the surgeon opens the heart, removes the damaged valve, and sews in a replacement — either a mechanical valve, which is durable but requires lifelong blood-thinning medication, or a biological tissue valve, which avoids long-term anticoagulation but may wear out sooner. The choice between valve types depends on the patient's age, lifestyle, and overall health, and is discussed with the surgical team beforehand. The procedure can be done through a traditional sternotomy or, in select patients, through smaller minimally invasive incisions. Patients typically spend a day or two in intensive care followed by several more days on the ward before discharge. India's cardiac centers offer both mechanical and tissue valve options along with experienced post-operative cardiac care, and international patients generally plan for a hospital stay of about a week, with follow-up echocardiograms arranged before travel home to confirm the valve is functioning well.",
			},
			{
				name: 'Aortic Valve Replacement',
				description:
					"Aortic valve replacement treats a diseased aortic valve — the valve controlling blood flow from the heart into the body's main artery — that has become narrowed (stenosis) or leaky (regurgitation), causing symptoms such as breathlessness, chest pain, or fainting. In conventional open-heart surgery, the chest is opened, the heart is temporarily stopped and supported by a heart-lung bypass machine, and the surgeon removes the diseased valve and sews in a mechanical or biological replacement sized to the patient's anatomy. Mechanical valves last longer but require lifelong anticoagulant medication, while tissue valves avoid this but may need replacement after ten to twenty years, and the surgical team helps patients weigh these trade-offs based on age and health. The operation generally takes a few hours, with patients spending time in intensive care afterward before moving to a regular ward. It is one of the most established cardiac surgeries performed in India, with centers offering a full range of valve types and experienced perioperative monitoring. International patients typically stay in India for around two to three weeks in total to allow for surgery, initial recovery, and a follow-up assessment before flying home.",
			},
			{
				name: 'Transcatheter Aortic Valve Replacement (TAVR)',
				description:
					"Transcatheter aortic valve replacement, or TAVR, is a minimally invasive alternative to open-heart surgery for treating severe aortic valve stenosis, particularly in patients who are elderly or considered higher-risk for conventional surgery. Instead of opening the chest, an interventional cardiologist threads a catheter carrying a collapsible replacement valve through a blood vessel, most often in the groin, up to the heart, where it is expanded and positioned inside the patient's existing diseased valve, pushing it aside and immediately taking over its function. The procedure is usually performed under sedation or light general anesthesia and guided by live imaging, without the need to stop the heart or use a heart-lung bypass machine. Because it avoids a large chest incision, recovery is generally faster than with surgical valve replacement, with many patients mobilizing within a day and leaving hospital within a few days. TAVR is increasingly offered in India's advanced cardiac centers for patients who meet appropriate anatomical criteria, following careful imaging assessment to confirm suitability. International patients typically plan for one to two weeks in India to allow for pre-procedure evaluation, the procedure itself, and a short recovery period before follow-up and travel home.",
			},
			{
				name: 'Cardiac Catheterization',
				description:
					"Cardiac catheterization is a diagnostic and sometimes therapeutic procedure in which a thin, flexible catheter is guided through a blood vessel, usually in the wrist or groin, into the chambers and arteries of the heart to directly assess how it is functioning. Using X-ray guidance and contrast dye, the cardiologist can visualize the coronary arteries for blockages, measure pressures within the heart chambers, assess valve function, and take tissue samples in some cases. It is commonly used to investigate chest pain, abnormal stress test results, heart failure of unclear cause, or suspected valve or congenital heart disease, and often serves as the first step before deciding whether angioplasty, stenting, or surgery is needed. The procedure is performed under local anesthesia with light sedation, usually takes thirty minutes to an hour, and most patients can go home the same day or after an overnight stay. India's catheterization laboratories are equipped with modern imaging systems that allow precise diagnosis and, where appropriate, immediate treatment in the same sitting. International patients typically need only a short visit for the procedure itself, with results and next steps discussed directly with the cardiology team.",
			},
			{
				name: 'Balloon Pulmonary Valvotomy',
				description:
					"Balloon pulmonary valvotomy is a catheter-based procedure used to treat pulmonary valve stenosis, a condition in which the valve controlling blood flow from the heart's right ventricle to the lungs is abnormally narrowed, forcing the heart to work harder and reducing blood flow to the lungs. It is often diagnosed in infants, children, or young adults, sometimes as part of a congenital heart condition present from birth. During the procedure, a cardiologist guides a catheter with a deflated balloon at its tip through a vein, usually in the groin, into the narrowed valve, then inflates the balloon to stretch it open and relieve the obstruction. The procedure is performed under sedation or general anesthesia in a catheterization laboratory, guided by X-ray and echocardiographic imaging, and typically takes one to two hours. Because it avoids open-heart surgery, recovery is usually quick, with most patients observed overnight and discharged within a day or two. India's pediatric and structural cardiology centers routinely perform balloon valvotomy for both children and adults, with careful pre-procedure imaging to confirm suitability. Families traveling for this procedure typically plan for a short stay of about a week, including pre-procedure assessment and follow-up echocardiography.",
			},
			{
				name: 'Cardiac Pacemaker Installation',
				description:
					"A cardiac pacemaker is a small electronic device implanted to help regulate an abnormally slow or irregular heartbeat, commonly used to treat conditions such as bradycardia, heart block, or certain arrhythmias where the heart's natural electrical system is not functioning reliably. The device consists of a pulse generator, implanted just under the skin near the collarbone, connected to one or more thin wires that are guided through a vein into the heart chambers, where they sense the heart's rhythm and deliver small electrical impulses when needed to maintain a regular beat. The implantation is usually performed under local anesthesia with sedation, takes around one to two hours, and is done through a small incision rather than open surgery. Most patients stay in hospital overnight for monitoring and have the device's settings checked before discharge. India's electrophysiology and cardiology centers offer a range of single-chamber, dual-chamber, and more advanced pacemaker devices suited to different rhythm disorders. International patients typically plan for about a week in India to allow for pre-procedure evaluation, implantation, and an initial device check, with guidance on remote monitoring and follow-up with their home physician afterward.",
			},
			{
				name: 'Pediatric Heart Surgery',
				description:
					"Pediatric heart surgery covers a range of operations performed on infants and children to correct congenital heart defects — structural problems with the heart present from birth, such as holes between heart chambers, malformed valves, or abnormal connections of the major blood vessels. The specific procedure depends on the defect: some conditions can be closed with a patch during open-heart surgery using a heart-lung bypass machine sized for a small patient, while others involve rebuilding or rerouting blood vessels to establish normal circulation. Diagnosis typically relies on echocardiography, and sometimes CT or MRI imaging, to map the exact anatomy before planning the operation. Because children's hearts and blood vessels are small and still developing, these procedures require pediatric cardiac surgeons and anesthesiologists experienced in congenital heart conditions, along with dedicated pediatric intensive care support afterward. Recovery time varies widely with the complexity of the defect and the child's age, ranging from about a week to several weeks in hospital. India's pediatric cardiac programs treat a broad spectrum of congenital defects, often for children from other countries, with family accommodation and coordinated pre- and post-operative care built around the needs of young patients and their parents.",
			},
			{
				name: 'Artificial Heart / LVAD Implant',
				description:
					"A left ventricular assist device, or LVAD, is a mechanical pump implanted to help a severely weakened heart circulate blood, used in patients with advanced heart failure who have not responded adequately to medication. The device is surgically connected to the left ventricle and the aorta, drawing blood from the weakened chamber and pumping it into the body's main artery in place of the failing heart muscle; a cable exits through the skin to an external controller and battery pack worn by the patient. LVADs may serve as a bridge to heart transplant while a patient awaits a donor organ, or as a longer-term therapy for those who are not transplant candidates. Implantation requires open-heart surgery with cardiopulmonary bypass, followed by an extended hospital stay that includes intensive care monitoring and training for the patient and caregivers on operating the device. The term artificial heart is sometimes used loosely for LVADs, though total artificial hearts that fully replace the heart are a separate, rarer technology. India's advanced heart failure centers offer LVAD implantation and the specialized follow-up care it requires, and patients should expect an extended stay of several weeks for surgery, recovery, and device training before travel.",
			},
			{
				name: 'Endovascular Aortic Aneurysm Repair',
				description:
					"Endovascular aortic aneurysm repair, or EVAR, is a minimally invasive procedure used to treat an aortic aneurysm — a bulging, weakened section of the body's main artery that carries a risk of rupture if left untreated. Rather than opening the abdomen or chest to replace the affected segment directly, a vascular surgeon accesses the femoral arteries in the groin and threads a fabric-covered metal stent graft through the blood vessels to the aneurysm site, where it is expanded to line the artery from the inside and redirect blood flow away from the weakened wall. The procedure is performed under regional or general anesthesia, guided by continuous X-ray imaging, and typically takes one to three hours depending on the aneurysm's location and complexity. Because it avoids a large surgical incision, recovery is generally faster than with open repair, with many patients mobilizing within a day or two and leaving hospital within about a week. Careful CT imaging beforehand confirms the aneurysm's shape and size are suitable for a stent graft. India's vascular surgery centers offer EVAR with a range of stent graft devices, and international patients typically plan for about two weeks to allow for evaluation, the procedure, and post-procedure imaging follow-up.",
			},
			{
				name: 'Open Heart Surgery',
				description:
					"Open heart surgery is a broad term for any cardiac operation in which the chest is surgically opened, usually through an incision in the breastbone, to give the surgical team direct access to the heart and its major vessels. Many such operations are performed with the heart temporarily stopped and a heart-lung bypass machine taking over circulation and breathing, allowing the surgeon to work on a still, bloodless heart before it is restarted. Common reasons for open heart surgery include bypassing blocked coronary arteries, repairing or replacing damaged heart valves, correcting congenital defects, and repairing aneurysms involving the heart or major vessels. The technique and duration depend on the underlying condition, but most operations take several hours and are followed by time in intensive care while the patient is weaned off ventilator support and monitored for bleeding, infection, and rhythm changes. A longer hospital stay of one to two weeks typically follows, along with structured cardiac rehabilitation to rebuild strength and stamina. India's cardiac surgery centers perform a high volume of open heart procedures across these categories, supported by dedicated cardiac intensive care units, and international patients generally plan for several weeks in-country to cover surgery and initial recovery.",
			},
			{
				name: 'Congenital Heart Disease Treatment',
				description:
					"Congenital heart disease refers to structural abnormalities of the heart or major blood vessels present from birth, ranging from small holes between heart chambers that may close on their own to complex malformations requiring staged surgical correction. Treatment is highly individualized and begins with detailed diagnostic imaging, typically echocardiography and sometimes cardiac CT or MRI, to map the exact defect before a pediatric or adult congenital cardiologist and surgical team decide on the best approach. Some defects, such as small atrial or ventricular septal defects, can be closed using catheter-based devices without open surgery, while more complex conditions require open-heart surgery, sometimes performed in stages over months or years as the patient grows. Many patients are diagnosed and treated in childhood, but a growing number of adults with congenital heart disease also need ongoing or corrective care as defects that were mild in childhood progress over time. India's congenital heart programs manage the full spectrum of these conditions, from straightforward device closures to complex staged reconstructions, with dedicated teams for both pediatric and adult patients. Because treatment plans vary so much by defect, international families typically begin with a detailed remote or in-person evaluation before a treatment timeline and length of stay are confirmed.",
			},
		],
		benefits: [
			'Surgeons trained and certified in the US, UK, and Europe',
			'Some of the highest cardiac surgery volumes globally, meaning deeper hands-on expertise',
			'Dedicated cardiac ICU and step-down recovery units',
			'No waitlists — most surgeries scheduled within days of your first opinion',
		],
		flagshipProcedure: 'Coronary Artery Bypass Graft (CABG)',
		packagePrice: 8000,
		totalTripDays: 21,
		stayDuration: {
			patient: { icuDays: 3, roomDays: 6, totalDays: 9 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 120,000 – 180,000', waitTime: '4–8 weeks', successRate: '95–97%' },
			{ country: 'UK', cost: 'USD 40,000 – 60,000', waitTime: '3–12 months (NHS)', successRate: '95–97%' },
			{ country: 'Germany', cost: 'USD 35,000 – 50,000', waitTime: '4–10 weeks', successRate: '94–96%' },
			{ country: 'Thailand', cost: 'USD 18,000 – 25,000', waitTime: '2–4 weeks', successRate: '93–95%' },
			{ country: 'India', cost: 'USD 8,000 – 11,000', waitTime: '1–2 weeks', successRate: '96%+', highlight: true },
		],
		inclusions: [
			'Pre-operative cardiac evaluation, ECG, echo, and angiography review',
			"Surgeon's fees for the bypass or valve procedure",
			'Operation theatre and anesthesia charges',
			'Cardiac ICU stay (3 days) plus step-down single room (6 days)',
			'Nursing care, monitoring, and physiotherapy during hospitalization',
			'Standard cardiac medication and consumables during the inpatient stay',
			'Laboratory and radiology charges tied to the procedure',
			'Discharge summary and a written post-operative care plan',
		],
		exclusions: [
			'Pre-admission stay to stabilize a patient before surgery clears for the OT',
			'Hospital or ICU stay beyond the package duration',
			'Advanced interventions such as a second bypass graft or valve repair beyond scope',
			'Implantable devices such as pacemakers unless specified upfront',
			'Take-home medication beyond the standard discharge kit',
			'Treatment for pre-existing, unrelated conditions found during evaluation',
			'Re-operation for complications unrelated to the original procedure',
		],
		faqs: [
			{
				question: 'What is the cost of bypass surgery in India?',
				answer:
					'A coronary bypass (CABG) package in India starts from USD 8,000, roughly 90% less than the USD 120,000+ typically charged in the US. The package covers pre-operative evaluation, the surgery itself, ICU and room stay, nursing, and standard medication.',
			},
			{
				question: 'What is the success rate of cardiac surgery in India?',
				answer:
					"India's leading cardiac centers report bypass and valve surgery success rates of 96% and above, on par with top programs in the US and Europe, backed by dedicated cardiac ICUs and high annual surgical volumes.",
			},
			{
				question: 'How long do I need to stay in India for cardiac surgery?',
				answer:
					'Most patients stay around 9 days in hospital (3 in ICU, 6 in a step-down room) and are advised to remain in India for about 3 weeks in total, so the cardiac team can monitor recovery before travel.',
			},
			{
				question: 'Do I need a full body check-up before the surgery is confirmed?',
				answer:
					'Yes. Your reports (ECG, echocardiogram, angiography if available) are reviewed by our cardiac board before your treatment plan and quote are finalized, and a tele-consultation with the surgeon is arranged if needed.',
			},
			{
				question: 'Is minimally invasive or off-pump bypass available?',
				answer:
					'Yes, many of our partner hospitals offer off-pump (beating heart) bypass and minimally invasive valve repair, which can shorten ICU stay and recovery time depending on your case.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your latest cardiac reports through our contact form or WhatsApp, and a coordinator will arrange a free specialist review and transparent cost estimate within 24 hours.',
			},
		],
	},
	{
		slug: 'orthopedics',
		name: 'Orthopedics',
		icon: 'activity',
		imageKey: 'orthopedics',
		theme: 'teal',
		shortDescription: 'Joint replacement and sports medicine with fast-track rehabilitation programs.',
		overview:
			'From robotic-assisted knee replacement to complex spinal fusion, India\'s orthopedic centers pair modern implant technology with structured physiotherapy programs designed to get patients back on their feet faster.',
		startingPrice: 5500,
		avgSavings: 87,
		hospitalsCount: 95,
		procedures: ['Knee Replacement', 'Hip Replacement', 'Spinal Fusion'],
		allProcedures: [
			'Total Knee Replacement',
			'Total Hip Replacement',
			'Knee Arthroscopy',
			'Arthroscopic ACL Reconstruction',
			'Arthroscopic PCL Reconstruction',
			'Meniscus Tear Surgery',
			'Cartilage Scaffold Surgery',
			'Arthroscopic Shoulder Stabilization',
			'Arthroscopic Rotator Cuff Repair',
			'Arthroscopic Bankart Repair',
			'Keyhole (Arthroscopic) Shoulder Surgery',
			'Bone Cancer Surgery',
			'Limb Lengthening Surgery',
			'Club Foot Surgery',
			'Hip Dysplasia Treatment',
			'Musculoskeletal Disorder Treatment',
		],
		detailedProcedures: [
			{
				name: 'Total Knee Replacement',
				description:
					"Total knee replacement, or total knee arthroplasty, is a surgical procedure that resurfaces a knee joint damaged by osteoarthritis, rheumatoid arthritis, or post-traumatic wear with an artificial implant made of metal alloy and medical-grade polyethylene. The orthopedic surgeon removes the worn cartilage and a thin layer of bone from the end of the femur and top of the tibia, then fits shaped metal components onto these surfaces with a plastic spacer between them that recreates smooth joint movement; the kneecap surface may also be resurfaced depending on its condition. It is generally recommended once conservative measures such as physiotherapy, weight management, medication, and injections no longer control pain or restore mobility. The surgery is performed under spinal or general anesthesia and takes roughly one to two hours, with many centers now using computer-assisted or robotic-arm guidance to improve implant alignment. Indian hospitals treat a high volume of joint replacement cases each year and offer both traditional and minimally invasive techniques. Recovery involves supervised walking within a day of surgery, a hospital stay of several days, and a structured physiotherapy program over the following weeks to regain strength and range of motion.",
			},
			{
				name: 'Total Hip Replacement',
				description:
					"Total hip replacement, or total hip arthroplasty, replaces a hip joint worn down by osteoarthritis, avascular necrosis, rheumatoid arthritis, or fracture with an artificial ball-and-socket implant. During surgery, the orthopedic surgeon removes the damaged femoral head and reshapes the hip socket (acetabulum), then fits a metal or ceramic stem into the thighbone topped with a ball component that articulates against a new socket liner fixed into the pelvis. The approach may be posterior, anterior, or minimally invasive, chosen based on the patient's anatomy and the surgeon's preference, and the procedure typically takes one to two hours under spinal or general anesthesia. It is usually considered once hip pain, stiffness, and reduced mobility persist despite physiotherapy, weight-bearing precautions, and pain medication, and when imaging confirms significant joint degeneration. Many Indian orthopedic centers perform large volumes of hip replacements annually and offer cemented, uncemented, and hybrid fixation options along with robotic or computer-navigated techniques for precise implant positioning. After surgery, patients are usually mobilized with a walker within a day or two, stay in hospital for several days, and follow a structured rehabilitation program over the following weeks to restore strength and walking pattern.",
			},
			{
				name: 'Knee Arthroscopy',
				description:
					"Knee arthroscopy is a minimally invasive surgical technique used to diagnose and treat problems inside the knee joint through small incisions rather than a large open cut. The surgeon inserts a thin fiber-optic camera, called an arthroscope, along with slender surgical instruments through a few small portals around the knee, allowing direct visualization of the cartilage, ligaments, meniscus, and joint lining on a monitor. It is commonly used to trim or repair torn meniscus tissue, remove loose cartilage fragments, smooth roughened cartilage surfaces, wash out inflamed joint tissue, or address other structural causes of persistent knee pain, swelling, catching, or locking that have not responded to rest, physiotherapy, or medication. The procedure is usually done under spinal, regional, or general anesthesia and takes anywhere from thirty minutes to just over an hour depending on the findings and treatment required. Because the incisions are small, patients typically experience less postoperative pain and a faster return to daily activity than with open knee surgery. Indian orthopedic centers routinely perform knee arthroscopy on a day-care or short-stay basis, with most patients walking with support on the same day and beginning guided physiotherapy shortly afterward to restore full knee function.",
			},
			{
				name: 'Arthroscopic ACL Reconstruction',
				description:
					"Arthroscopic ACL reconstruction repairs a torn anterior cruciate ligament, one of the main stabilizing ligaments of the knee that is frequently injured during sports involving sudden pivoting, jumping, or direction changes. Because a torn ACL does not reliably heal on its own, surgeons reconstruct it using a graft, commonly taken from the patient's own hamstring or patellar tendon, or occasionally from donor tissue, which is threaded through tunnels drilled in the femur and tibia and secured with screws or fixation devices to recreate the ligament's original position and function. The procedure is performed arthroscopically through small portal incisions using a camera and specialized instruments, avoiding the need for a large open incision, and typically takes around one to two hours under regional or general anesthesia. It is generally recommended for patients with knee instability, giving-way episodes, or an inability to return to sport or physically demanding work after an ACL tear. Indian sports medicine and orthopedic units offer both hamstring and patellar tendon graft techniques along with robotic or navigation-assisted tunnel placement. Recovery involves a structured, months-long rehabilitation program with progressive weight-bearing, strengthening, and balance training before a safe return to sporting activity.",
			},
			{
				name: 'Arthroscopic PCL Reconstruction',
				description:
					"Arthroscopic PCL reconstruction addresses a torn posterior cruciate ligament, a stronger and less commonly injured stabilizing ligament located behind the ACL that typically tears from a direct blow to the front of the shin, such as in a dashboard injury during a road accident, or from a hard fall onto a bent knee. Many partial PCL injuries are managed non-surgically with bracing and physiotherapy, but complete tears causing persistent instability, or those combined with other ligament injuries, usually require surgical reconstruction. The surgeon uses arthroscopic instruments and a camera inserted through small portals to remove the damaged ligament remnants and pass a tendon graft, often taken from the hamstring, patellar tendon, or a donor source, through bone tunnels in the femur and tibia, fixing it under controlled tension to restore knee stability. The operation generally takes two to three hours under regional or general anesthesia and is technically more demanding than ACL reconstruction due to the ligament's position and blood supply. Indian orthopedic and sports injury centers have experienced surgeons performing single- and double-bundle PCL reconstruction techniques. Recovery requires a longer, carefully staged rehabilitation program compared with ACL surgery, with bracing and gradual loading protocols to protect the healing graft.",
			},
			{
				name: 'Meniscus Tear Surgery',
				description:
					"Meniscus tear surgery treats damage to the C-shaped cartilage cushions inside the knee that absorb shock and stabilize the joint between the thighbone and shinbone, injuries that commonly occur from twisting movements during sport or from gradual degeneration in older adults. Depending on the tear's location, size, and pattern, the surgeon performs one of two arthroscopic procedures: meniscus repair, in which the torn edges are stitched back together to preserve as much cartilage as possible, particularly in younger patients with tears in the well-vascularized outer zone, or partial meniscectomy, in which the damaged, unstable portion of the meniscus is trimmed away while retaining healthy tissue. Both procedures are carried out through small portal incisions using an arthroscope and fine instruments, typically taking thirty to sixty minutes under spinal or general anesthesia. Surgery is generally advised when pain, swelling, catching, or locking persist despite rest and physiotherapy, or when an MRI confirms a repairable or unstable tear. Indian arthroscopy units routinely offer both repair and meniscectomy techniques, selecting the approach that best preserves long-term knee function. Recovery after meniscectomy is usually quicker, while repair requires a more protected rehabilitation period to allow the stitched tissue to heal.",
			},
			{
				name: 'Cartilage Scaffold Surgery',
				description:
					"Cartilage scaffold surgery is a joint-preservation technique used to treat areas of damaged or missing articular cartilage, the smooth tissue covering the ends of bones within a joint, most often in the knee following injury, repetitive stress, or early localized degeneration. Because cartilage has limited capacity to heal itself, the procedure involves implanting a biocompatible scaffold, sometimes seeded with the patient's own cartilage cells or bone marrow-derived cells, into the defect to provide a structural framework that encourages new cartilage-like tissue to form over time. It is typically performed arthroscopically or through a small incision, with the damaged area first prepared and measured before the scaffold is shaped, secured with fibrin glue or sutures, and left to integrate with surrounding tissue. Candidates are usually younger, active patients with a focal cartilage defect and reasonably preserved joint alignment, rather than widespread arthritis, since the goal is to delay or avoid the need for joint replacement. Indian orthopedic centers offering regenerative and sports medicine services provide various scaffold and cell-based cartilage repair techniques suited to the size and depth of the defect. Recovery involves a protected weight-bearing period and gradual, closely supervised rehabilitation to allow the new tissue to mature.",
			},
			{
				name: 'Arthroscopic Shoulder Stabilization',
				description:
					"Arthroscopic shoulder stabilization is performed to correct a shoulder that repeatedly dislocates or subluxates due to stretched, torn, or detached ligaments and labral tissue that normally hold the ball of the shoulder joint securely within its socket. Instability often follows an initial traumatic dislocation, frequently during sport or a fall, after which the joint's soft-tissue restraints fail to heal tightly enough to prevent further episodes. Using an arthroscope and fine instruments inserted through small portal incisions around the shoulder, the surgeon reattaches or tightens the torn labrum and capsule to the rim of the socket using suture anchors, restoring the tension needed to keep the joint centered during movement. The procedure generally takes about one hour and is performed under regional nerve block combined with light sedation or general anesthesia. It is usually recommended for patients with recurrent instability, a positive apprehension sign on examination, and imaging showing labral or capsular injury, particularly younger or physically active individuals at high risk of further dislocation. Indian shoulder and sports injury units routinely perform this arthroscopic technique. Recovery involves a period of sling immobilization followed by a structured physiotherapy program to regain motion and rebuild strength around the joint.",
			},
			{
				name: 'Arthroscopic Rotator Cuff Repair',
				description:
					"Arthroscopic rotator cuff repair treats a torn rotator cuff, the group of four muscles and tendons that stabilize the shoulder and lift the arm, which can tear suddenly from a fall or injury or gradually from age-related wear and repetitive overhead activity. Patients typically present with shoulder pain that worsens at night, weakness lifting or rotating the arm, and difficulty with overhead tasks that has not improved with rest, physiotherapy, or injections. During the procedure, the surgeon inserts an arthroscope and small instruments through a few portal incisions around the shoulder, trims any inflamed or frayed tissue, and reattaches the torn tendon edge to its original footprint on the humerus using suture anchors, restoring the tendon's pull on the bone. The operation is usually performed under regional block with sedation or general anesthesia and takes roughly one to two hours depending on tear size and complexity. Indian orthopedic and shoulder specialty units offer this technique for both partial and full-thickness tears. After surgery, the arm is protected in a sling for several weeks while the tendon heals, followed by a graduated physiotherapy program that progresses from passive motion to active strengthening exercises over a period of months.",
			},
			{
				name: 'Arthroscopic Bankart Repair',
				description:
					"Arthroscopic Bankart repair specifically addresses a Bankart lesion, a tear of the labrum, the ring of cartilage that deepens the shoulder socket, from the front-lower rim of the joint, an injury that commonly occurs during a traumatic shoulder dislocation and is a leading cause of recurrent instability. Left untreated, a Bankart lesion allows the shoulder to keep slipping or fully dislocating with relatively minor stress, particularly in younger and athletic patients. Through small portal incisions, the surgeon uses an arthroscope to visualize the detached labrum and reattaches it to the bony rim of the socket using suture anchors placed at intervals along the tear, restoring the labral bumper effect that helps keep the humeral head centered. In cases with associated bone loss on the socket, additional bone-grafting procedures may be combined with the repair. The surgery typically takes about an hour under regional anesthesia with sedation or general anesthesia. Indian shoulder arthroscopy units perform Bankart repair routinely for patients with confirmed labral injury on MRI or CT arthrogram and a history of recurrent dislocation. Postoperative care involves several weeks of sling immobilization followed by a phased physiotherapy program to restore motion, stability, and strength.",
			},
			{
				name: 'Keyhole (Arthroscopic) Shoulder Surgery',
				description:
					"Keyhole, or arthroscopic, shoulder surgery is a minimally invasive approach used to diagnose and treat a wide range of shoulder conditions through a handful of small incisions instead of one large open cut. A thin camera called an arthroscope is inserted into the joint to give the surgeon a magnified, detailed view of the tendons, ligaments, cartilage, and joint lining on a monitor, while slender instruments passed through separate portals are used to trim, repair, or reconstruct damaged tissue. This technique is applied across conditions ranging from rotator cuff tears and shoulder instability to impingement syndrome, frozen shoulder release, and removal of loose bodies or bone spurs, with the specific steps depending on what is found and treated. It is generally offered once symptoms such as pain, weakness, stiffness, or restricted movement fail to improve with rest, physiotherapy, and medication. Performed under regional nerve block, sedation, or general anesthesia, the smaller incisions typically result in less postoperative pain, lower infection risk, and a quicker initial recovery than traditional open shoulder surgery. Indian orthopedic centers with dedicated shoulder units offer this technique for most common shoulder disorders. Recovery still requires a structured, condition-specific physiotherapy program to regain full shoulder function over the following weeks to months.",
			},
			{
				name: 'Bone Cancer Surgery',
				description:
					"Bone cancer surgery is performed to remove malignant tumors that arise within bone tissue, such as osteosarcoma, Ewing sarcoma, or chondrosarcoma, or that have spread to bone from cancer elsewhere in the body. Treatment planning typically begins with imaging, including X-rays, MRI, CT, and bone scans, along with a biopsy to confirm the tumor type and grade, after which a multidisciplinary team decides on the most appropriate combination of surgery, chemotherapy, and radiation. Where feasible, surgeons now favor limb-salvage surgery, removing the tumor along with a margin of healthy tissue and reconstructing the affected bone and joint using a metal endoprosthesis, bone graft, or a combination of both, preserving the limb rather than resorting to amputation, which is reserved for cases where the tumor involves major nerves, vessels, or extensive soft tissue. Surgery is usually performed under general anesthesia and can take several hours depending on tumor size, location, and the complexity of reconstruction required. Indian orthopedic oncology centers offer limb-salvage techniques alongside chemotherapy protocols delivered before and after surgery. Recovery involves a hospital stay of one to two weeks followed by an extended rehabilitation program to regain function, with ongoing surveillance to monitor for recurrence.",
			},
			{
				name: 'Limb Lengthening Surgery',
				description:
					"Limb lengthening surgery gradually increases the length of a shortened bone, most often in the leg, to correct limb length discrepancy caused by congenital conditions, childhood growth plate injury, infection, fracture malunion, or certain skeletal dysplasias. The surgeon first performs a controlled surgical cut of the bone, called an osteotomy, without disturbing the surrounding blood supply, then applies either an external fixator frame worn outside the limb or an internal, magnetically driven lengthening nail placed inside the bone. Over the following weeks, the device is adjusted daily in tiny increments, typically around one millimeter per day, allowing new bone to form gradually in the gap while soft tissues, nerves, and blood vessels stretch alongside it. The total treatment period, including the lengthening phase and subsequent bone consolidation, generally spans several months and requires close monitoring with periodic X-rays to track bone healing and adjust the plan as needed. Indian limb reconstruction centers offer both external fixator and internal nail techniques depending on the amount of lengthening required and patient preference. Physiotherapy throughout the process helps maintain joint motion and muscle strength, and most patients need an extended stay in the treating country to allow safe monitoring during the active lengthening phase.",
			},
			{
				name: 'Club Foot Surgery',
				description:
					"Club foot surgery treats congenital talipes equinovarus, a birth condition in which one or both feet are turned inward and downward due to shortened tendons and abnormal alignment of the foot bones. Most cases are now managed initially with the Ponseti method, a non-surgical approach using serial gentle manipulation and casting over several weeks to gradually correct the foot's position, often followed by a minor procedure to release a tight Achilles tendon. Surgery becomes necessary when correction through casting is incomplete, when the deformity is resistant or relapses, or in older children whose club foot was not treated early, and can range from a limited tendon release or transfer to more extensive bone and joint procedures to realign the foot structurally. The specific operation depends on the child's age, the severity of the deformity, and which tissues are contributing to the abnormal position. Surgery is performed under general anesthesia, and the foot is typically immobilized in a cast afterward to protect the correction while it heals. Indian pediatric orthopedic centers manage club foot through both Ponseti-based protocols and surgical correction for resistant or neglected cases. Long-term follow-up with bracing and monitoring is usually needed as the child grows.",
			},
			{
				name: 'Hip Dysplasia Treatment',
				description:
					"Hip dysplasia treatment addresses developmental dysplasia of the hip, a condition in which the hip socket is too shallow to properly cover and stabilize the head of the thighbone, ranging from mild looseness to complete dislocation, and most often identified in infancy through screening but sometimes diagnosed later in childhood or adulthood. In young infants, treatment usually begins with a positioning harness, such as a Pavlik harness, worn for several weeks to gently guide the hip into a stable, well-seated position while the socket develops normally. When dysplasia is diagnosed later, is more severe, or does not respond to bracing, surgical options may be needed, ranging from closed or open reduction of the hip joint to a periacetabular or pelvic osteotomy that reshapes and repositions the socket to better cover the femoral head, sometimes combined with a femoral osteotomy. Surgery is performed under general anesthesia and is typically followed by a period of cast or brace immobilization to protect the correction. Indian pediatric and adult hip preservation units offer both bracing protocols for infants and reconstructive osteotomy techniques for older children and young adults. Long-term follow-up is important, as untreated or inadequately corrected dysplasia can lead to early hip arthritis.",
			},
			{
				name: 'Musculoskeletal Disorder Treatment',
				description:
					"Musculoskeletal disorder treatment covers the diagnosis and management of a broad range of conditions affecting the bones, joints, muscles, tendons, ligaments, and nerves that make up the body's movement system, including arthritis, chronic back and neck pain, tendon and ligament injuries, fractures, deformities, and degenerative spine conditions. Management typically begins with a clinical assessment and imaging, such as X-rays, MRI, or CT scans, to identify the underlying cause of pain, stiffness, weakness, or restricted movement, after which an orthopedic specialist recommends a treatment pathway that may include physiotherapy, medication, targeted injections, bracing, or surgery depending on the severity and nature of the condition. When surgery is required, it may range from minimally invasive arthroscopic procedures to joint replacement, spinal fixation, or corrective reconstructive surgery, chosen according to the specific diagnosis and the patient's overall health and functional goals. Indian multi-specialty orthopedic centers bring together joint replacement, spine, sports medicine, and physiotherapy teams to manage complex or long-standing musculoskeletal problems under one coordinated plan. Because presentations vary so widely, an initial review of prior imaging and clinical reports helps determine the most appropriate treatment approach before a patient travels. Recovery and rehabilitation timelines depend entirely on the specific disorder being treated and the intervention chosen.",
			},
		],
		benefits: [
			'Robotic and computer-assisted joint replacement available at leading centers',
			'Structured in-hospital physiotherapy from day one',
			'High-quality, internationally sourced implants',
			'Typical hospital stay of 3–5 days for joint replacement',
		],
		flagshipProcedure: 'Total Knee Replacement',
		packagePrice: 5500,
		totalTripDays: 18,
		stayDuration: {
			patient: { icuDays: 1, roomDays: 4, totalDays: 5 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 35,000 – 50,000', waitTime: '4–6 weeks', successRate: '96–98%' },
			{ country: 'UK', cost: 'USD 15,000 – 22,000', waitTime: '6–12 months (NHS)', successRate: '96–98%' },
			{ country: 'Germany', cost: 'USD 14,000 – 20,000', waitTime: '3–6 weeks', successRate: '95–97%' },
			{ country: 'Thailand', cost: 'USD 10,000 – 14,000', waitTime: '2–3 weeks', successRate: '94–96%' },
			{ country: 'India', cost: 'USD 5,500 – 7,500', waitTime: '1–2 weeks', successRate: '97%+', highlight: true },
		],
		inclusions: [
			'Pre-operative orthopedic evaluation including X-rays and fitness clearance',
			"Surgeon's and anesthetist's fees for the joint replacement",
			'Operation theatre charges and the implant (standard-grade, unless upgraded)',
			'ICU/recovery bay for 1 day plus 4 days in a single room',
			'Structured in-hospital physiotherapy sessions',
			'Laboratory, radiology, and standard post-op medication during the stay',
			'Discharge summary with a home exercise and rehabilitation plan',
		],
		exclusions: [
			'Premium or custom implant upgrades beyond the standard-grade implant',
			'Hospital stay beyond the package duration',
			'Bilateral (both-knee) surgery unless quoted separately',
			'Outpatient physiotherapy sessions after discharge',
			'Treatment for unrelated conditions identified during pre-op screening',
			'Revision surgery for complications unrelated to the original procedure',
		],
		faqs: [
			{
				question: 'What is the cost of knee replacement surgery in India?',
				answer:
					'A total knee replacement package in India starts from USD 5,500, around 85% less than typical US pricing, and includes the surgeon fee, implant, hospital stay, and in-hospital physiotherapy.',
			},
			{
				question: 'Is robotic-assisted knee replacement available?',
				answer:
					'Yes, several of our partner hospitals offer robotic and computer-navigated joint replacement, which can improve implant alignment and shorten recovery time for eligible patients.',
			},
			{
				question: 'How long is the hospital stay and recovery?',
				answer:
					'Most patients stay about 5 days in hospital and are advised to remain in India for roughly 2–3 weeks so physiotherapists can guide early rehabilitation before you fly home.',
			},
			{
				question: 'What implant brands are used?',
				answer:
					'Our partner hospitals use internationally certified implant brands as standard, with premium implant upgrades available on request and quoted separately.',
			},
			{
				question: 'Can both knees be replaced in the same trip?',
				answer:
					'Yes, simultaneous or staged bilateral knee replacement is possible for suitable candidates — your surgeon will confirm the best approach after reviewing your X-rays and overall fitness.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Send your X-rays and a summary of your symptoms through our contact form, and you will receive a specialist review and a transparent cost estimate within 24 hours.',
			},
		],
	},
	{
		slug: 'oncology',
		name: 'Oncology',
		icon: 'shieldPlus',
		imageKey: 'oncology',
		theme: 'green',
		shortDescription: 'Multidisciplinary cancer care combining surgery, chemotherapy, and targeted radiation.',
		overview:
			"Cancer treatment in India is delivered through tumor boards that bring together surgical oncologists, medical oncologists, and radiation specialists to build one coordinated treatment plan — the same multidisciplinary model used at leading Western cancer centers.",
		startingPrice: 6000,
		avgSavings: 85,
		hospitalsCount: 110,
		procedures: ['Tumor Surgery', 'Chemotherapy', 'Radiation Therapy'],
		allProcedures: [
			'Breast Cancer Treatment',
			'Oral Cancer Treatment',
			'Prostate Cancer Treatment',
			'Endometrial Cancer Treatment',
			'Leukemia Treatment',
			'Hodgkin Lymphoma Treatment',
			'Chemotherapy',
			'Intensity-Modulated Radiation Therapy (IMRT)',
			'Image-Guided Radiation Therapy (IGRT)',
			'CyberKnife Treatment',
			'Lymph Node Surgery',
		],
		detailedProcedures: [
			{
				name: 'Breast Cancer Treatment',
				description:
					"Breast cancer treatment in India is planned by a dedicated multidisciplinary tumor board that reviews your mammography, biopsy, and hormone-receptor (ER/PR/HER2) reports before recommending a course tailored to the stage and type of tumor. Depending on the diagnosis, care may combine breast-conserving surgery (lumpectomy) or mastectomy with sentinel lymph node biopsy, followed by adjuvant chemotherapy, targeted therapy (such as trastuzumab for HER2-positive disease), hormone therapy, and radiation to reduce recurrence risk. Reconstructive options, including immediate or delayed breast reconstruction, are available for patients who choose mastectomy. Leading Indian oncology centers use digital mammography, MRI-guided biopsy, and intraoperative frozen-section analysis to plan conservative, tissue-sparing surgery wherever the tumor stage allows. Patients typically need a short hospital stay for surgery, with chemotherapy and radiation delivered on an outpatient basis over the following weeks — many patients plan a longer India stay to complete an initial cycle of adjuvant treatment before returning home under a shared-care plan with their local oncologist. Second opinions on biopsy slides and imaging are reviewed free of charge before you commit to travel.",
			},
			{
				name: 'Oral Cancer Treatment',
				description:
					"Oral cancer — arising in the tongue, cheek lining, gums, floor of the mouth, or lips — is among the most common cancers treated in India, where high-volume head and neck oncology units see a large share of tobacco- and betel-nut-related cases. Treatment begins with a biopsy and imaging (CT/MRI, sometimes PET-CT) to stage the tumor, followed by surgical resection with clear margins, often combined with neck dissection to remove lymph nodes at risk of spread. Reconstructive microvascular surgery — using tissue flaps from the forearm, thigh, or fibula — restores form and function when a significant portion of the jaw or tongue is removed. Depending on the pathology, surgery is followed by adjuvant radiation or chemoradiation to reduce the chance of recurrence. A multidisciplinary team of head and neck surgeons, oncologists, prosthodontists, and speech and swallowing therapists manages the full course of care, including rehabilitation of speech and eating after surgery. Early-stage cancers detected before nodal spread carry a substantially better prognosis, so patients are encouraged to send biopsy and imaging reports for a tumor board opinion as soon as a diagnosis is suspected.",
			},
			{
				name: 'Prostate Cancer Treatment',
				description:
					"Prostate cancer treatment in India ranges from active surveillance for very low-risk, slow-growing tumors to robotic-assisted radical prostatectomy, radiation therapy, and hormone therapy for more advanced disease. After diagnosis via PSA testing, MRI, and biopsy, a urologic oncologist grades the cancer using the Gleason score to determine the most appropriate approach. Robotic (da Vinci) prostatectomy is widely available at India's leading urology centers, offering nerve-sparing surgery that aims to preserve continence and sexual function while removing the prostate gland and, when needed, surrounding lymph nodes. For patients who are not surgical candidates or prefer a non-surgical route, external beam radiation, brachytherapy, or IMRT/IGRT can deliver highly targeted radiation while limiting exposure to nearby organs. Androgen deprivation therapy (hormone therapy) is used alongside surgery or radiation in intermediate- and high-risk cases, or on its own for advanced disease. Recovery after robotic surgery is typically faster than open surgery, with most patients discharged within a few days and returning to normal activity within several weeks. Your case is reviewed by a tumor board before a recommendation is finalized.",
			},
			{
				name: 'Endometrial Cancer Treatment',
				description:
					"Endometrial (uterine lining) cancer is one of the most treatable gynecologic cancers when caught early, and India's gynecologic oncology units offer comprehensive staging and surgery for women diagnosed at any stage. Initial workup includes transvaginal ultrasound, endometrial biopsy, and imaging to assess how far the disease has spread. The standard treatment is a total hysterectomy with removal of the fallopian tubes and ovaries (salpingo-oophorectomy), usually performed laparoscopically or robotically to reduce blood loss, scarring, and recovery time compared with open surgery. Lymph node sampling or a sentinel lymph node biopsy is performed during the same operation to help determine whether further treatment is needed. Depending on the tumor grade and stage found at surgery, adjuvant radiation therapy (external beam or brachytherapy) or chemotherapy may be recommended to lower the risk of recurrence. For younger women wishing to preserve fertility with very early, low-grade disease, hormone-based non-surgical treatment may be an option after careful evaluation. Most patients undergoing minimally invasive hysterectomy are discharged within two to three days and resume normal activity within a few weeks.",
			},
			{
				name: 'Leukemia Treatment',
				description:
					"Leukemia — cancer of the blood-forming cells in the bone marrow — is treated in India by dedicated hemato-oncology teams with access to advanced diagnostics, including flow cytometry, cytogenetics, and molecular testing, which are essential for classifying the exact subtype (acute or chronic, lymphocytic or myeloid) and choosing the right protocol. Treatment typically starts with induction chemotherapy to bring the disease into remission, followed by consolidation therapy to eliminate remaining leukemic cells; some subtypes, such as chronic myeloid leukemia, are managed with targeted oral therapies (tyrosine kinase inhibitors) instead of intensive chemotherapy. For high-risk or relapsed cases, a bone marrow or stem cell transplant may be recommended, using either a matched sibling or unrelated donor, or the patient's own cells. Care is delivered in specialized hematology units with reverse-isolation rooms, blood bank support, and infection-control protocols suited to immunocompromised patients during treatment. Because leukemia protocols run over months, many patients coordinate an initial intensive phase in India with follow-up chemotherapy monitored by their home physician, with regular reports shared between teams to keep the treatment plan on track.",
			},
			{
				name: 'Hodgkin Lymphoma Treatment',
				description:
					"Hodgkin lymphoma, a cancer of the lymphatic system marked by the presence of Reed-Sternberg cells, has one of the highest cure rates among cancers when treated with a standard chemotherapy regimen (commonly ABVD), and India's oncology centers follow internationally recognized protocols for staging and treatment. Diagnosis is confirmed through a lymph node biopsy and staged using PET-CT imaging to map the extent of disease above and below the diaphragm. Most patients are treated with a course of combination chemotherapy over several months, with response assessed by interim PET-CT scans that help oncologists decide whether to continue, adjust, or add radiation therapy for residual disease. Localized, early-stage disease may be treated with a shorter chemotherapy course followed by involved-site radiation, while advanced-stage disease typically needs a longer chemotherapy course alone. For relapsed or resistant cases, salvage chemotherapy followed by autologous stem cell transplant is available at leading centers. Chemotherapy cycles are delivered on an outpatient day-care basis wherever possible, and your tumor board will outline a full cycle-by-cycle schedule before you travel.",
			},
			{
				name: 'Chemotherapy',
				description:
					"Chemotherapy uses cytotoxic or targeted drugs to destroy cancer cells or stop them from dividing, and is used either as the primary treatment for blood cancers and lymphomas or as an adjuvant/neoadjuvant therapy alongside surgery and radiation for solid tumors. India's day-care oncology units are equipped with dedicated chemotherapy chairs, trained oncology nursing staff, and pharmacy-prepared, weight- and body-surface-area-dosed regimens matched to international treatment protocols. Before starting, your oncologist reviews blood counts, organ function, and prior reports to select the regimen, cycle length, and number of cycles appropriate to your cancer type and stage. Most regimens are given as an outpatient infusion lasting a few hours, repeated every two to three weeks, with supportive medication (anti-nausea drugs, growth factors) given alongside to manage side effects. Regular blood tests between cycles monitor for complications such as low blood counts, and doses are adjusted accordingly. For patients combining a trip to India with an initial phase of chemotherapy, your oncology team provides a written protocol and reports so a local physician can safely continue or monitor subsequent cycles at home.",
			},
			{
				name: 'Intensity-Modulated Radiation Therapy (IMRT)',
				description:
					"Intensity-Modulated Radiation Therapy (IMRT) is an advanced form of external beam radiation that shapes and varies the intensity of hundreds of individual radiation beams to closely match the three-dimensional shape of a tumor, delivering a higher, more effective dose to the cancer while sparing surrounding healthy tissue and organs. It is widely used in India for head and neck, prostate, breast, brain, and gynecologic cancers, where nearby structures such as the spinal cord, salivary glands, or bladder need to be protected from radiation damage. Treatment planning begins with a CT simulation scan, which a radiation oncologist and medical physicist use to map the tumor and design a beam plan on specialized software before treatment starts. IMRT is delivered in short daily outpatient sessions, typically five days a week over several weeks, with each session lasting 15–20 minutes. Because the technique reduces radiation to healthy tissue, patients generally experience fewer side effects than with older radiation techniques, such as less dry mouth after head and neck treatment or better bowel and bladder tolerance after pelvic radiation. Regular imaging checks ensure the treatment stays precisely targeted throughout the course.",
			},
			{
				name: 'Image-Guided Radiation Therapy (IGRT)',
				description:
					"Image-Guided Radiation Therapy (IGRT) pairs advanced imaging — such as cone-beam CT or X-ray verification — with each radiation session to confirm the tumor's exact position immediately before treatment, correcting for small day-to-day changes caused by breathing, organ filling, or patient positioning. This extra layer of precision is especially valuable for tumors that move or shift, such as lung, liver, prostate, and pancreatic cancers, allowing radiation oncologists to safely deliver higher, more effective doses while further reducing exposure to surrounding healthy organs. IGRT is typically combined with IMRT or other conformal radiation techniques rather than used as a standalone therapy, and Indian cancer centers offering it are equipped with on-board imaging systems built into the linear accelerator so verification happens in the same session as treatment, without extra visits. A radiation oncology team reviews the imaging at each session, or at set intervals, and adjusts the patient's position before the beam is delivered. As with other forms of external radiation, sessions are short, painless, and delivered on an outpatient basis over a course planned according to your specific cancer type and stage.",
			},
			{
				name: 'CyberKnife Treatment',
				description:
					"CyberKnife is a robotic radiosurgery system that delivers highly focused, high-dose radiation to small or hard-to-reach tumors with sub-millimeter accuracy, using a linear accelerator mounted on a robotic arm that tracks the tumor's position and adjusts in real time during treatment — including tumors that move with breathing — without needing an invasive head frame. It is commonly used in India for brain tumors, spinal tumors, early-stage lung cancer, liver tumors, and cases where a tumor sits close to critical structures such as the brainstem, optic nerves, or spinal cord, making conventional surgery or radiation riskier. Because of its precision, CyberKnife can deliver an effective radiation dose in just one to five sessions (stereotactic body radiotherapy/radiosurgery), compared with several weeks of daily treatment with conventional radiation — a significant advantage for patients traveling from abroad. Treatment planning uses high-resolution MRI and CT imaging fused together to map the tumor precisely, and each session is entirely non-invasive and painless, typically lasting 30–90 minutes with no anesthesia required. Most patients return home the same day as each session and resume normal activities immediately afterward.",
			},
			{
				name: 'Lymph Node Surgery',
				description:
					"Lymph node surgery covers a range of procedures used in cancer care to remove, sample, or evaluate lymph nodes to determine whether cancer has spread beyond the original tumor — a key factor in accurate staging and treatment planning. The most common approach is a sentinel lymph node biopsy, in which a tracer dye or radioactive marker identifies the first node(s) a tumor is likely to spread to; if these are clear, more extensive node removal can often be avoided, reducing the risk of complications such as lymphedema. When cancer is confirmed or suspected in multiple nodes, a more complete lymph node dissection — such as an axillary dissection for breast cancer or a neck dissection for head and neck cancer — removes a wider group of nodes from the affected region. These procedures are usually performed at the same time as the primary tumor surgery under general anesthesia, often using minimally invasive or robotic techniques to reduce scarring and speed recovery. Pathology results from the removed nodes guide decisions about whether chemotherapy or radiation is needed afterward, and physiotherapy or lymphedema-prevention guidance is provided as part of post-operative care.",
			},
		],
		benefits: [
			'Multidisciplinary tumor boards for every case',
			'Access to advanced radiation therapy (IMRT, IGRT, proton options at select centers)',
			'Comprehensive care from diagnosis through post-treatment follow-up',
			'Dedicated oncology counselors supporting patients and families',
		],
		flagshipProcedure: 'Tumor Resection Surgery',
		packagePrice: 6000,
		totalTripDays: 28,
		stayDuration: {
			patient: { icuDays: 2, roomDays: 6, totalDays: 8 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 80,000 – 150,000', waitTime: '4–8 weeks', successRate: 'Varies by stage' },
			{ country: 'UK', cost: 'USD 35,000 – 60,000', waitTime: '2–6 months (NHS)', successRate: 'Varies by stage' },
			{ country: 'Germany', cost: 'USD 30,000 – 50,000', waitTime: '4–8 weeks', successRate: 'Varies by stage' },
			{ country: 'Thailand', cost: 'USD 15,000 – 25,000', waitTime: '2–4 weeks', successRate: 'Varies by stage' },
			{ country: 'India', cost: 'USD 6,000 – 12,000', waitTime: '1–2 weeks', successRate: 'Varies by stage', highlight: true },
		],
		inclusions: [
			'Tumor board review of existing biopsy, imaging, and pathology reports',
			"Surgeon's, anesthetist's, and oncology team fees for the primary surgery",
			'Operation theatre and ICU charges (2 days) plus 6 days in a single room',
			'Nursing care and standard chemotherapy/supportive medication during admission',
			'Laboratory, radiology, and pathology charges tied to the primary procedure',
			'Dedicated oncology counselor support for patient and family',
			'Discharge summary with a structured follow-up chemo/radiation plan',
		],
		exclusions: [
			'Additional chemotherapy cycles or radiation sessions beyond the initial package',
			'Genomic/molecular profiling tests unless specifically requested',
			'Hospital stay beyond the package duration',
			'Targeted therapy or immunotherapy drugs, priced separately due to variable cost',
			'Treatment for unrelated conditions identified during work-up',
			'Re-operation for complications unrelated to the original procedure',
		],
		faqs: [
			{
				question: 'What is the cost of cancer surgery in India?',
				answer:
					'A tumor resection package in India starts from USD 6,000, roughly 90% less than comparable surgery in the US, covering the tumor board review, surgery, ICU/room stay, and initial supportive care.',
			},
			{
				question: 'How are chemotherapy and radiation priced?',
				answer:
					'Chemotherapy cycles and radiation sessions (IMRT/IGRT) are quoted separately based on your specific protocol, since regimens vary widely by cancer type and stage — your tumor board provides an itemized estimate after reviewing your reports.',
			},
			{
				question: 'Will a team of specialists review my case, or just one doctor?',
				answer:
					'Every case goes through a multidisciplinary tumor board — surgical oncologist, medical oncologist, and radiation oncologist — before a treatment plan is finalized, the same model used at leading Western cancer centers.',
			},
			{
				question: 'How long will I need to stay in India?',
				answer:
					'Surgical patients typically stay 8 days in hospital, with a total recommended stay of around 4 weeks in India if chemotherapy or radiation follows surgery.',
			},
			{
				question: 'Can I get a second opinion before committing to surgery?',
				answer:
					'Yes. Send your biopsy, imaging, and pathology reports for a free tumor board review and second opinion before deciding whether to travel for treatment.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your diagnostic reports through our contact form or WhatsApp, and our oncology coordinator will arrange a tumor board review and transparent estimate within 48 hours.',
			},
		],
	},
	{
		slug: 'cosmetic-surgery',
		name: 'Cosmetic & Plastic Surgery',
		icon: 'gem',
		imageKey: 'cosmeticSurgery',
		theme: 'blue',
		shortDescription: 'Aesthetic and reconstructive procedures performed by internationally certified surgeons.',
		overview:
			'Combining board-certified surgeons with recovery-focused, hotel-style aftercare, India has become a preferred destination for aesthetic and reconstructive procedures — with the privacy and discretion international patients expect.',
		startingPrice: 2000,
		avgSavings: 80,
		hospitalsCount: 70,
		procedures: ['Rhinoplasty', 'Liposuction', 'Hair Transplant'],
		allProcedures: [
			'Rhinoplasty (Nose Surgery)',
			'Face Lift',
			'Non-Surgical Facelift',
			'Thread Face Lift',
			'Blepharoplasty (Eyelid Surgery)',
			'Oculoplastic Surgery',
			'Botox Injections',
			'Otoplasty (Ear Surgery)',
			'Hair Transplant Surgery',
			'Breast Enhancement (Augmentation)',
			'Breast Reduction',
			'Breast Lift',
			'Liposuction',
			'Abdominoplasty (Tummy Tuck)',
			'Brazilian Butt Lift',
			'Buttock Augmentation',
			'Arm Lift',
			'Thigh Lift',
			'Labiaplasty',
			'Scar Removal Surgery',
		],
		detailedProcedures: [
			{
				name: 'Rhinoplasty (Nose Surgery)',
				description:
					"Rhinoplasty is a surgical procedure that reshapes the bone and cartilage of the nose to change its size, shape, or proportion, or to correct breathing problems caused by a deviated septum or narrow nasal passages. The surgeon may work through small incisions hidden inside the nostrils (closed technique) or a small external incision at the base of the nose (open technique), depending on how much correction is needed. Cartilage may be trimmed, reshaped, or grafted from elsewhere in the nose or ear to build structure. The procedure is usually done under general or local anesthesia with sedation and takes one to three hours. Candidates include people bothered by the shape or size of their nose, those with breathing difficulty, or patients needing revision after a prior surgery. Recovery involves swelling and bruising for one to two weeks, with a splint worn for the first several days and final results visible over several months as swelling subsides. International patients traveling to India for rhinoplasty typically plan for an initial consultation, the procedure itself, and a follow-up visit before the splint is removed, allowing most of the early healing to be monitored in person.",
			},
			{
				name: 'Face Lift',
				description:
					"A face lift, or rhytidectomy, is a surgical procedure that addresses sagging skin, deep folds, and loss of definition along the lower face, jawline, and neck that develop with age. Through incisions typically placed along the hairline and around the ear, the surgeon lifts and repositions the underlying facial muscle and connective tissue (the SMAS layer), removes excess skin, and redrapes the remaining skin over the new contour. It is often combined with a neck lift or fat grafting to address related changes. The procedure is performed under general anesthesia or local anesthesia with sedation and generally takes three to five hours. Good candidates are typically in reasonably good health with realistic expectations about the degree of improvement a lift can provide, since it addresses sagging rather than fine lines or sun damage. Recovery includes swelling, bruising, and tightness for one to two weeks, with sutures removed within that period and most patients returning to normal activity within two to three weeks. Because the procedure requires a period of in-person follow-up to check on healing and remove sutures, patients traveling to India for a face lift generally plan a stay of around two weeks.",
			},
			{
				name: 'Non-Surgical Facelift',
				description:
					"A non-surgical facelift is not a single procedure but a combination of injectable and energy-based treatments used to lift and refresh the face without incisions or general anesthesia. Depending on the patient's concerns, a treatment plan may combine dermal fillers to restore volume in the cheeks and temples, botulinum toxin injections to soften dynamic lines, and skin-tightening technologies such as radiofrequency or ultrasound (e.g. HIFU) to stimulate collagen and firm loose skin. Sessions are typically performed in an outpatient clinic setting with topical numbing cream, and most treatments take thirty minutes to an hour. There is little to no downtime beyond temporary redness or mild swelling, so patients can usually resume normal activities the same or next day. This approach suits patients with early to moderate signs of aging who want visible improvement without surgery, though results are more subtle and temporary than a surgical lift, typically lasting from several months to a couple of years depending on the treatments used. Because sessions are quick and repeatable, some patients combine a non-surgical facelift with other procedures during a single India visit, with maintenance treatments planned for a later trip or through a local provider.",
			},
			{
				name: 'Thread Face Lift',
				description:
					"A thread face lift is a minimally invasive procedure that uses fine, dissolvable surgical threads, often made of polydioxanone (PDO), to lift sagging skin and stimulate collagen production without the incisions of a traditional face lift. The threads, some of which have tiny cones or barbs, are inserted under the skin using a thin needle or cannula and anchored to gently reposition tissue in the cheeks, jawline, or brow before the ends are trimmed. The procedure is done under local anesthesia in an outpatient setting and usually takes thirty to sixty minutes. Over the following weeks, the body forms collagen around the dissolving threads, which gradually adds mild firming to the initial lifting effect. It suits patients with early sagging who are not yet ready for surgery, and results are noticeably more modest and shorter-lived, typically twelve to eighteen months, than a surgical lift. Downtime is minimal, with some swelling, bruising, or a pulling sensation for a few days. Because recovery is short, a thread lift can often be scheduled alongside other treatments during a single trip to India, though patients should discuss timing with their surgeon if combining it with more invasive procedures.",
			},
			{
				name: 'Blepharoplasty (Eyelid Surgery)',
				description:
					"Blepharoplasty is a surgical procedure that removes or repositions excess skin, muscle, and fat around the upper or lower eyelids to address hooding, puffiness, or under-eye bags. In upper eyelid surgery, the surgeon makes an incision along the natural crease to remove excess tissue; in lower eyelid surgery, the incision may be placed just below the lash line or inside the eyelid (transconjunctival approach) to avoid a visible scar. The procedure is typically done under local anesthesia with sedation and takes one to two hours depending on whether one or both eyelids are treated. Candidates include people whose upper eyelid skin obstructs vision, those bothered by tired-looking or puffy eyes, and patients seeking a more alert appearance. Recovery involves swelling and bruising for one to two weeks, with sutures removed within about a week and most patients comfortable in public within ten to fourteen days using makeup or sunglasses. Because eyelid tissue heals relatively quickly but still needs a suture check and progress review, patients traveling to India for blepharoplasty commonly plan a stay of ten days to two weeks to cover the procedure and early follow-up.",
			},
			{
				name: 'Oculoplastic Surgery',
				description:
					"Oculoplastic surgery is a specialized branch of ophthalmic and plastic surgery that treats structural and functional problems of the eyelids, tear ducts, eye socket, and surrounding tissue. It covers a broad range of procedures, including repair of drooping eyelids (ptosis) that interfere with vision, correction of eyelid malposition such as ectropion or entropion, treatment of blocked tear ducts, removal of eyelid tumors or cysts with reconstruction, orbital fracture repair, and socket reconstruction following eye injury or removal. Surgeons trained in both ophthalmology and plastic surgery techniques perform these procedures, which may be done under local or general anesthesia depending on complexity and location. Candidates are patients with a functional problem affecting vision, eye comfort, or eyelid closure, as well as those needing reconstruction after trauma, tumor removal, or prior surgery. Because many of these conditions affect how the eye is protected and how well it can close, evaluation typically includes a detailed eye exam alongside the surgical assessment. Recovery varies widely by procedure, from a few days for minor eyelid repairs to several weeks for orbital reconstruction, and India-based oculoplastic centers commonly manage complex cases requiring staged surgery and follow-up imaging.",
			},
			{
				name: 'Botox Injections',
				description:
					"Botox is the best-known brand of botulinum toxin type A, a purified protein that is injected in small, precise doses into facial muscles to temporarily relax the contractions that cause dynamic wrinkles, such as frown lines between the brows, crow's feet around the eyes, and horizontal forehead lines. The toxin works by blocking nerve signals to the treated muscle, so the skin above it smooths out while surrounding expression remains largely natural if the dose is well judged. Treatment is done in a clinic setting with a fine needle and no anesthesia beyond optional numbing cream, typically taking ten to twenty minutes for several injection points. Effects begin within three to seven days, peak around two weeks, and generally last three to four months before the muscle activity gradually returns, at which point repeat treatment is needed to maintain the effect. Botox is also used medically for conditions such as excessive sweating, chronic migraine, and certain muscle spasm disorders. There is essentially no downtime beyond mild redness or a small bruise at injection sites, making it a common add-on for patients already visiting India for other cosmetic or medical treatment.",
			},
			{
				name: 'Otoplasty (Ear Surgery)',
				description:
					"Otoplasty is a surgical procedure that reshapes the cartilage of the outer ear, most commonly to set prominent ears closer to the head or to correct irregularities in ear shape or size present from birth or caused by injury. The surgeon typically makes an incision behind the ear, then scores, folds, or sutures the cartilage into a more natural position before closing the incision so any resulting scar is hidden in the natural crease. The procedure can be done under local anesthesia with sedation in adults or general anesthesia in children, and usually takes one to two hours for both ears. It is one of the few cosmetic procedures commonly performed on children, generally once ear cartilage has sufficiently developed, often to address self-consciousness before school years. Recovery involves a padded head dressing for the first few days, followed by a lighter headband worn at night for several weeks to protect the new position while healing. Swelling and mild discomfort settle within one to two weeks. Families traveling to India for a child's otoplasty generally plan a short stay covering surgery and the initial dressing change.",
			},
			{
				name: 'Hair Transplant Surgery',
				description:
					"Hair transplant surgery relocates hair follicles from a donor area, usually the back or sides of the scalp where hair growth is naturally resistant to thinning, to areas of visible balding. The two main techniques are follicular unit transplantation (FUT), where a strip of scalp is removed and divided into individual grafts, and follicular unit extraction (FUE), where follicles are harvested one at a time with a small punch tool, leaving minimal scarring. Grafts are placed into tiny recipient-site incisions following the natural angle and density of surrounding hair for a natural-looking result. The procedure is done under local anesthesia and, depending on the number of grafts required, takes roughly four to eight hours, sometimes spread across two sessions. Suitable candidates are men and women with pattern hair loss and adequate donor supply, assessed beforehand for the underlying cause of shedding. Transplanted hairs typically shed within weeks before regrowing gradually, with visible new growth over six to twelve months. Because the surgery itself involves modest downtime, patients traveling to India often plan a stay of about a week to allow the scalp to settle before flying home.",
			},
			{
				name: 'Breast Enhancement (Augmentation)',
				description:
					"Breast augmentation is a surgical procedure that increases breast size and changes breast shape using silicone or saline implants, or in some cases a patient's own fat transferred from another area of the body. The surgeon places the implant through an incision, commonly around the areola, in the natural fold beneath the breast, or in the armpit, positioning it either above or below the chest muscle depending on the patient's anatomy and desired outcome. The procedure is performed under general anesthesia and typically takes one to two hours. Candidates include women who feel their breast size is disproportionate to their frame, those wanting to restore volume lost after pregnancy or weight change, and patients undergoing reconstruction. Recovery involves swelling, tightness, and restricted arm movement for one to two weeks, with most patients returning to light activity within that time and to full exercise after four to six weeks. Implants are not considered lifetime devices and may eventually need monitoring or replacement. Patients traveling to India for augmentation generally plan a stay of ten to fourteen days to allow the surgeon to check incisions and early healing before travel.",
			},
			{
				name: 'Breast Reduction',
				description:
					"Breast reduction surgery, or reduction mammaplasty, removes excess breast fat, glandular tissue, and skin to reduce breast size and weight, and to reposition the nipple and areola higher on a smaller breast mound. The procedure is typically performed through an anchor-shaped or vertical incision pattern, with the surgeon reshaping the remaining tissue to create a proportionate contour before closing the incisions. It is done under general anesthesia and usually takes two to four hours. Candidates are typically patients experiencing physical symptoms from overly large breasts, such as neck, back, or shoulder pain, skin irritation beneath the breast crease, or restricted physical activity, as well as those seeking better proportion with their frame. Recovery involves swelling, bruising, and soreness for one to two weeks, with most patients resuming normal daily activities within two weeks and exercise after four to six weeks, once cleared by the surgeon. Sensation in the nipple area may be temporarily or, less commonly, permanently altered. Because breast reduction often has a documented functional benefit alongside the aesthetic one, patients traveling to India for the procedure typically arrange a two-week stay to allow for suture removal and a wound check.",
			},
			{
				name: 'Breast Lift',
				description:
					"A breast lift, or mastopexy, raises and reshapes breasts that have sagged due to aging, pregnancy, breastfeeding, or weight change by removing excess skin and repositioning the remaining breast tissue and nipple-areola complex higher on the chest. Depending on the degree of sagging, the surgeon may use a shorter incision around the areola or a longer anchor-shaped incision extending down to and along the breast fold. Unlike augmentation, a lift does not add volume, so patients wanting both a fuller and higher breast profile may combine mastopexy with implants in the same operation. The procedure is done under general anesthesia and typically takes two to three hours. Good candidates are patients with sagging breast tissue and adequate skin elasticity, in reasonably stable weight, since future pregnancy or significant weight change can affect results. Recovery involves swelling and restricted arm movement for one to two weeks, with most patients back to non-strenuous activity within that period and full exercise after four to six weeks. Patients traveling to India for a breast lift generally plan a stay of around two weeks to cover surgery and the follow-up visit for incision checks.",
			},
			{
				name: 'Liposuction',
				description:
					"Liposuction is a surgical body-contouring procedure that removes localized pockets of fat that have not responded to diet and exercise, from areas such as the abdomen, flanks, thighs, arms, or chin. Through small incisions, the surgeon inserts a thin cannula connected to a suction device and moves it through the fat layer to break up and remove fat cells, with techniques such as tumescent, ultrasound-assisted, or laser-assisted liposuction used to ease fat removal and support skin contraction. The procedure is performed under general or local anesthesia with sedation, depending on the area and extent of treatment, and typically takes one to three hours. Good candidates are people close to their target weight with good skin elasticity and realistic expectations, since liposuction is a contouring procedure rather than a weight-loss treatment. Recovery involves swelling, bruising, and wearing a compression garment for several weeks, with most patients returning to light activity within a week and final contour visible over three to six months as swelling resolves. Patients traveling to India for liposuction typically plan a stay of about ten days to allow for garment fitting, an early follow-up, and monitoring of initial healing.",
			},
			{
				name: 'Abdominoplasty (Tummy Tuck)',
				description:
					"Abdominoplasty, or tummy tuck surgery, removes excess skin and fat from the abdomen and tightens the underlying abdominal muscles, which can become stretched or separated (diastasis recti) after pregnancy or significant weight loss. Through a horizontal incision low on the abdomen, the surgeon repairs the muscle layer with internal sutures, removes excess tissue, and repositions the navel before closing the incision, sometimes combining the procedure with liposuction for additional contouring. It is performed under general anesthesia and typically takes two to four hours. Candidates are generally at a stable, healthy weight with loose abdominal skin or muscle separation that has not improved with exercise, and who do not plan future pregnancies, since pregnancy afterward can reverse the muscle repair. Recovery involves several weeks of restricted activity, with a compression garment worn to support healing, drains typically removed within the first week, and most patients returning to normal, non-strenuous activity within four to six weeks. Because recovery from abdominal muscle repair takes longer than many other body-contouring procedures, patients traveling to India for a tummy tuck usually plan a stay of two to three weeks to allow drains to be removed and healing monitored before flying.",
			},
			{
				name: 'Brazilian Butt Lift',
				description:
					"A Brazilian butt lift (BBL) uses a patient's own fat, harvested through liposuction from areas such as the abdomen, flanks, or thighs, to add volume and shape to the buttocks. The harvested fat is processed to separate viable fat cells before being carefully injected in multiple small amounts into different layers of the buttock to build a rounder, fuller contour, while the donor areas benefit from the liposuction contouring as well. The procedure is performed under general anesthesia and typically takes two to four hours depending on how much fat is harvested and grafted. Candidates are patients with sufficient donor fat available for harvesting and who want a fuller buttock shape without an implant. Because fat grafts need a stable blood supply to survive, patients are usually asked to avoid sitting directly on the buttocks for a period after surgery, using special cushions or lying face down instead, and a portion of the grafted fat is naturally reabsorbed over the following months. Recovery involves wearing compression garments for several weeks and avoiding strenuous exercise for about six weeks. Patients traveling to India for a BBL generally plan a stay of around two weeks to allow for early healing and follow-up before travel.",
			},
			{
				name: 'Buttock Augmentation',
				description:
					"Buttock augmentation increases buttock size and improves contour using either silicone implants or fat grafting, chosen based on the patient's available donor fat, anatomy, and desired outcome. When implants are used, the surgeon places them through a small incision, typically within the buttock crease, positioning them within or beneath the gluteal muscle for a stable, natural-feeling result. When fat grafting is preferred, fat is harvested by liposuction from another area and injected into the buttocks, which also has the benefit of contouring the donor site. Implant-based augmentation is performed under general anesthesia and generally takes about two hours, while fat-grafting procedures take longer depending on the volume transferred. Candidates for implants are typically patients with limited donor fat, while those with adequate fat elsewhere may prefer grafting to avoid a foreign implant. Recovery for both approaches requires avoiding direct pressure on the buttocks for several weeks, with specialized cushions or altered sleeping positions recommended, along with a compression garment and a gradual return to exercise over four to six weeks. Patients considering buttock augmentation in India typically discuss both implant and fat-grafting options with their surgeon during consultation to determine the better fit for their body type.",
			},
			{
				name: 'Arm Lift',
				description:
					"An arm lift, or brachioplasty, removes excess skin and fat from the upper arm and tightens the underlying tissue to create a smoother, more toned contour, addressing the loose, hanging skin that can develop after significant weight loss or with aging. The surgeon typically makes an incision along the inner or back of the upper arm, extending from the elbow toward the armpit depending on how much skin needs to be removed, and may combine the procedure with liposuction to refine the contour further. It is performed under general anesthesia and usually takes about two hours. Candidates are patients with loose, sagging upper arm skin that has not improved with exercise, often following major weight loss, who are at a stable weight and in good general health. Recovery involves wearing a compression garment for several weeks, with swelling and restricted arm movement for the first one to two weeks and a gradual return to normal activity over four to six weeks. Because the resulting scar runs the length of the inner arm, patients are counseled on scar care during recovery. Patients traveling to India for an arm lift usually plan a stay of around two weeks to allow for suture removal and wound monitoring.",
			},
			{
				name: 'Thigh Lift',
				description:
					"A thigh lift, or thighplasty, removes excess skin and fat from the inner or outer thigh and tightens the underlying tissue to create a smoother contour, most often for patients left with loose, sagging skin after significant weight loss. Depending on the area and amount of correction needed, the surgeon may use an incision in the groin crease for an inner thigh lift, or an incision extending down the outer thigh for more extensive skin removal, sometimes combined with liposuction. The procedure is performed under general anesthesia and typically takes two to three hours. Candidates are patients at a stable weight with loose thigh skin that has not responded to exercise, and who understand that the trade-off for tighter skin is a visible scar along the incision line. Recovery involves wearing a compression garment, avoiding strenuous activity, and limiting prolonged standing or walking for the first one to two weeks, with a gradual return to normal activity over four to six weeks. Because thigh lift incisions are in areas of friction and movement, careful wound care during the early healing period is important. Patients traveling to India for a thigh lift typically plan a stay of about two weeks to allow the surgeon to monitor healing.",
			},
			{
				name: 'Labiaplasty',
				description:
					"Labiaplasty is a surgical procedure that reduces or reshapes the labia minora (the inner folds of the vulva), and less commonly the labia majora, to address discomfort or self-consciousness related to their size or asymmetry. Using either a trim technique, which removes excess tissue along the edge, or a wedge technique, which removes a v-shaped section while preserving the natural edge, the surgeon reshapes the tissue and closes the incision with dissolvable sutures. The procedure is typically done under local anesthesia with sedation or general anesthesia and takes about one to two hours. Candidates include patients experiencing physical discomfort from enlarged or irregular labia, such as chafing or pain during exercise, as well as those seeking a change for personal comfort. Recovery involves swelling and tenderness for one to two weeks, with patients advised to avoid strenuous exercise, tight clothing, and sexual activity for around four to six weeks while the tissue fully heals. Because the procedure is sensitive and recovery benefits from a quiet, private environment, patients traveling to India for labiaplasty often arrange a discreet stay of around ten days to two weeks to allow for follow-up before travel.",
			},
			{
				name: 'Scar Removal Surgery',
				description:
					"Scar removal surgery encompasses several surgical techniques used to improve the appearance of scars left by injury, burns, acne, or previous surgery, since no method can erase a scar completely but many can make it flatter, narrower, or less noticeable. Depending on the scar type, options include scar revision, where the old scar is surgically removed and the wound closed with a more precise technique to encourage finer healing; skin grafting or flap surgery for larger areas of scarring; and Z-plasty or W-plasty, which reposition a scar along natural skin lines to make it less visually obvious. Simpler cases may be managed with steroid injections, laser resurfacing, or microneedling rather than surgery. The anesthesia used depends on the scar's size, depth, and location, ranging from local anesthesia for a small revision to general anesthesia for grafting. Candidates are patients with scars causing functional restriction, such as tightness limiting movement, or significant visible concern. Recovery varies from days for minor revisions to several weeks for grafts, with final results visible over months as the new scar matures. Patients traveling to India for scar revision typically have their scar assessed during consultation to determine the most suitable technique before scheduling surgery.",
			},
		],
		benefits: [
			'Board-certified plastic and reconstructive surgeons',
			'Private, discreet recovery suites separate from general hospital wards',
			'Modern techniques including FUE hair transplant and VASER liposuction',
			'Complete before/after consultation with 3D imaging at select clinics',
		],
		flagshipProcedure: 'Rhinoplasty',
		packagePrice: 2000,
		totalTripDays: 14,
		stayDuration: {
			patient: { icuDays: 0, roomDays: 1, totalDays: 1 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 8,000 – 15,000', waitTime: '2–4 weeks', successRate: 'High patient satisfaction' },
			{ country: 'UK', cost: 'USD 6,000 – 10,000', waitTime: '3–6 weeks', successRate: 'High patient satisfaction' },
			{ country: 'Germany', cost: 'USD 5,000 – 9,000', waitTime: '2–4 weeks', successRate: 'High patient satisfaction' },
			{ country: 'Thailand', cost: 'USD 3,000 – 5,000', waitTime: '1–2 weeks', successRate: 'High patient satisfaction' },
			{ country: 'India', cost: 'USD 2,000 – 3,500', waitTime: '3–7 days', successRate: 'High patient satisfaction', highlight: true },
		],
		inclusions: [
			'Consultation with 3D imaging and pre-operative planning',
			"Surgeon's fee for the procedure",
			'Operation theatre and anesthesia charges',
			'One night stay in a private recovery suite',
			'Post-operative dressing, compression garments, and first follow-up visit',
			'Standard medication during the recovery stay',
		],
		exclusions: [
			'Combination procedures (e.g. rhinoplasty plus chin augmentation) unless quoted together',
			'Recovery stay beyond one night, or extended hotel-style aftercare',
			'Revision surgery for cosmetic touch-ups after the initial healing period',
			'Take-home medication beyond the standard discharge kit',
			'Garments or scar-care products beyond what is issued at discharge',
		],
		faqs: [
			{
				question: 'What is the cost of rhinoplasty in India?',
				answer:
					'Rhinoplasty in India starts from USD 2,000, around 75–85% less than in the US or UK, and includes the consultation, surgery, anesthesia, and one night of private recovery.',
			},
			{
				question: 'Are the surgeons internationally trained?',
				answer:
					'Yes, our partner cosmetic surgeons are board-certified and many hold additional training or fellowships from the US, UK, or Europe in aesthetic and reconstructive surgery.',
			},
			{
				question: 'How much privacy and discretion is provided?',
				answer:
					'Patients recover in private suites separate from general hospital wards, and all consultations and records are handled with strict confidentiality.',
			},
			{
				question: 'How long should I plan to stay in India?',
				answer:
					'Most aesthetic procedures need about 1–2 weeks in India for surgery and initial follow-up, though this varies by procedure — your surgeon will confirm the exact timeline during consultation.',
			},
			{
				question: 'Can I combine multiple procedures in one trip?',
				answer:
					'Yes, many patients combine procedures such as rhinoplasty with liposuction in a single trip; your surgeon will advise on what can be safely done together based on your health and recovery needs.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your goals and photos through our contact form, and our team will arrange a private consultation with 3D imaging and a transparent quote within 24 hours.',
			},
		],
	},
	{
		slug: 'fertility',
		name: 'Fertility Treatment',
		icon: 'droplet',
		imageKey: 'fertility',
		theme: 'teal',
		shortDescription: 'IVF and reproductive care with high success rates and personalized protocols.',
		overview:
			"India's fertility clinics report success rates on par with leading global IVF centers, with personalized hormonal protocols, in-house embryology labs, and none of the multi-month waitlists common in Europe and North America.",
		startingPrice: 3000,
		avgSavings: 83,
		hospitalsCount: 45,
		procedures: ['IVF', 'IUI', 'Egg Freezing'],
		allProcedures: [
			'In Vitro Fertilization (IVF)',
			'Intracytoplasmic Sperm Injection (ICSI)',
			'Intrauterine Insemination (IUI)',
			'Intracervical Insemination (ICI)',
			'Artificial Insemination',
			'Donor Egg IVF',
			'IVF with TESA',
			'Infertility Treatment in Women',
			'Infertility Treatment in Men',
			'Azoospermia Treatment',
			'PCOS Treatment',
			'Endometriosis Treatment',
			'Blocked Fallopian Tubes Treatment',
			'Laparoscopic Myomectomy',
			'Laparoscopic Hysterectomy',
		],
		detailedProcedures: [
			{
				name: 'In Vitro Fertilization (IVF)',
				description:
					"In vitro fertilization is a fertility treatment in which eggs are retrieved from the ovaries after a course of hormonal stimulation and combined with sperm in a laboratory dish to achieve fertilization outside the body. The resulting embryos are cultured for several days, monitored for development, and one or more are then transferred into the uterus, with any additional viable embryos typically frozen for future use. The process involves an initial cycle of injectable hormone medication to stimulate multiple eggs to mature, monitored through blood tests and ultrasound, followed by a minor egg-retrieval procedure done under sedation, laboratory fertilization, embryo culture, and finally embryo transfer, which does not require anesthesia. IVF is recommended for a wide range of causes of infertility, including blocked or damaged fallopian tubes, ovulation disorders, male-factor infertility, unexplained infertility, or after other treatments such as IUI have not succeeded. A full cycle from the start of stimulation to embryo transfer typically spans about two to three weeks, followed by a pregnancy test roughly two weeks after transfer. Patients traveling to India for IVF usually plan their stay around this stimulation-to-transfer window, with clinics coordinating cycle timing in advance based on the patient's baseline test results.",
			},
			{
				name: 'Intracytoplasmic Sperm Injection (ICSI)',
				description:
					"Intracytoplasmic sperm injection, or ICSI, is a specialized laboratory technique used alongside IVF in which a single sperm is selected and injected directly into the center of a mature egg using a fine glass needle, rather than allowing fertilization to occur naturally in a dish. This bypasses barriers that might otherwise prevent sperm from penetrating the egg on its own. ICSI follows the same ovarian stimulation and egg-retrieval process as conventional IVF, with the difference occurring at the fertilization stage in the laboratory; the resulting embryos are then cultured and transferred using the same protocols. ICSI is primarily recommended for male-factor infertility, including low sperm count, poor sperm motility, abnormal sperm shape, or when sperm has been surgically retrieved rather than ejaculated, as well as in cases of previous fertilization failure with standard IVF. It does not change the ovarian stimulation, retrieval, or transfer timeline, so the overall cycle length is similar to standard IVF, typically around two to three weeks from stimulation to transfer. Because the technique requires no additional patient-side procedure beyond standard IVF, patients traveling to India for ICSI generally follow the same visit structure as an IVF cycle, coordinated around their stimulation and retrieval dates.",
			},
			{
				name: 'Intrauterine Insemination (IUI)',
				description:
					"Intrauterine insemination is a fertility treatment in which specially washed and concentrated sperm is placed directly into the uterus around the time of ovulation, shortening the distance sperm need to travel and increasing the concentration of healthy sperm near the egg. The cycle may be natural or supported with oral or injectable medication to encourage the timed release of one or a small number of eggs, with ovulation tracked through blood tests and ultrasound to identify the optimal day for insemination. The procedure itself is quick and generally painless, involving a thin catheter passed through the cervix, and does not require anesthesia or significant downtime, so patients can typically resume normal activity immediately afterward. IUI is often recommended as a first-line treatment for mild male-factor infertility, unexplained infertility, ovulation irregularities, or for single women or same-sex couples using donor sperm, and is generally tried before moving to IVF. A single cycle usually spans about two weeks from the start of monitoring to insemination, with a pregnancy test roughly two weeks later. Because monitoring and insemination happen within a fairly short window, IUI is one of the more time-efficient fertility treatments to pursue while visiting India.",
			},
			{
				name: 'Intracervical Insemination (ICI)',
				description:
					"Intracervical insemination is a simpler form of artificial insemination in which sperm, either fresh or previously frozen, is placed directly at the entrance of the cervix using a syringe or a specially designed cervical cap, rather than being processed and injected into the uterus as with IUI. Because the sperm is deposited close to but outside the uterus, it does not need to be washed or specially prepared beforehand, which makes the procedure less invasive and generally lower in cost than uterine-based techniques. The procedure can be timed to a natural ovulation cycle tracked through ovulation predictor kits or ultrasound monitoring, and it takes only a few minutes, requiring no anesthesia and minimal recovery time. ICI is commonly chosen by individuals or couples using donor sperm, those with mild fertility concerns, or patients who prefer the least invasive option before considering IUI or IVF, though success rates are generally lower per cycle than intrauterine techniques since fewer sperm reach the uterus. Patients typically undergo several monitored cycles before assessing whether to continue with ICI or move to a more involved treatment. Because the procedure requires little preparation, ICI can often be arranged with a short, flexible visit to a fertility clinic in India.",
			},
			{
				name: 'Artificial Insemination',
				description:
					"Artificial insemination is a general term for fertility procedures in which sperm is placed into a woman's reproductive tract by means other than intercourse, most commonly through intrauterine insemination (IUI), where prepared sperm is injected into the uterus, or intracervical insemination (ICI), where sperm is placed at the cervix. The sperm used may come from a partner or from a screened donor, and the cycle is typically timed to coincide with ovulation, tracked through basal body monitoring, ovulation kits, or clinical ultrasound, with or without ovulation-stimulating medication depending on the patient's history. The procedure itself is brief, performed in a clinic without anesthesia, and involves minimal discomfort and no significant recovery period, allowing patients to resume normal activities immediately. Artificial insemination is generally recommended for mild fertility issues, unexplained infertility, donor sperm use by single patients or same-sex couples, or as a first step before considering more involved treatments such as IVF. Because each cycle relies on precise ovulation timing, patients may need to undergo more than one attempt before conceiving. Its relatively short, low-intervention nature makes artificial insemination a treatment that international patients can often complete within a single short visit to a fertility clinic in India.",
			},
			{
				name: 'Donor Egg IVF',
				description:
					"Donor egg IVF is a form of in vitro fertilization that uses eggs retrieved from a screened donor rather than the intended mother, fertilized with sperm from a partner or donor in the laboratory before the resulting embryo is transferred into the recipient's uterus. The donor undergoes the standard hormonal stimulation and egg-retrieval process, while the recipient's uterine lining is prepared with hormone medication, timed to synchronize with the donor's cycle or with a frozen donor egg or embryo. This approach is recommended for women with diminished ovarian reserve, premature ovarian insufficiency, poor egg quality linked to age or medical history, prior failed IVF cycles attributed to egg quality, or genetic conditions that make using their own eggs inadvisable. Donors are typically screened for medical history, infectious disease, and genetic conditions before being matched or selected from a program. Because the recipient does not require egg retrieval, her portion of the process is comparatively short, mainly involving lining preparation and the embryo transfer itself, which requires no anesthesia. Patients traveling to India for donor egg IVF typically coordinate in advance with the clinic on donor matching and cycle synchronization before planning the timing of their visit around the embryo transfer.",
			},
			{
				name: 'IVF with TESA',
				description:
					"IVF with TESA combines standard in vitro fertilization with testicular sperm aspiration, a minor procedure used to retrieve sperm directly from the testicle when none is present in the ejaculate, a condition known as azoospermia. Under local anesthesia, a fine needle is inserted into the testicle to withdraw a small sample of tissue or fluid containing sperm, which is then examined in the laboratory to identify viable sperm cells for use in fertilization. Because sperm retrieved this way is often limited in number, it is typically combined with ICSI, where a single sperm is injected directly into each mature egg, rather than conventional insemination in a dish. On the female partner's side, the process follows the usual IVF path of ovarian stimulation, monitoring, and egg retrieval, timed to coincide with the TESA procedure so that fresh sperm and eggs are available together, though sperm can also be frozen in advance. This approach is used for men with obstructive or non-obstructive azoospermia where sperm production continues in the testicle despite an absent or blocked path to ejaculation. Patients traveling to India for IVF with TESA typically plan their visit around the combined timeline of ovarian stimulation and the sperm retrieval procedure.",
			},
			{
				name: 'Infertility Treatment in Women',
				description:
					"Infertility treatment in women begins with a diagnostic workup to identify the underlying cause, which may include blood tests for hormone levels, ultrasound to assess the ovaries and uterus, and imaging such as a hysterosalpingogram to check whether the fallopian tubes are open. Depending on the findings, treatment may range from medication to induce or regulate ovulation, to surgical correction of structural issues such as fibroids, polyps, or endometriosis, to assisted reproductive techniques such as IUI or IVF when other approaches are unsuccessful or unsuitable. Common causes addressed include ovulation disorders such as polycystic ovary syndrome, blocked or damaged fallopian tubes, endometriosis, uterine abnormalities, and age-related decline in egg quantity or quality, and treatment is tailored to the specific diagnosis rather than following a single protocol. Many cases involve a stepwise approach, starting with the least invasive suitable option and progressing if needed. Because a thorough workup guides the treatment plan, patients traveling to India for infertility treatment typically send prior test results and reports ahead of their visit so the specialist can outline a likely treatment pathway and expected duration of stay before they travel.",
			},
			{
				name: 'Infertility Treatment in Men',
				description:
					"Infertility treatment in men starts with a semen analysis to assess sperm count, motility, and morphology, along with hormone blood tests and, when indicated, a physical exam or scrotal ultrasound to check for structural issues such as a varicocele. Depending on the cause identified, treatment may include lifestyle and medical management to improve sperm parameters, medication to correct hormonal imbalances, surgical repair of a varicocele or blockage in the reproductive tract, or surgical sperm retrieval techniques such as TESA or TESE for men producing little or no sperm in the ejaculate. When natural conception remains unlikely, retrieved or ejaculated sperm can be used with IUI, IVF, or ICSI depending on sperm quality and quantity. Causes addressed range from low sperm count and poor motility to structural blockages, hormonal disorders, and genetic factors affecting sperm production. Many of these evaluations and minor procedures can be completed relatively quickly compared with the female partner's treatment cycle. Patients traveling to India for male infertility evaluation typically bring prior semen analysis and hormone results so the specialist can advise, before the visit, on what further testing or procedures are likely to be needed.",
			},
			{
				name: 'Azoospermia Treatment',
				description:
					"Azoospermia is the complete absence of sperm in the ejaculate, and its treatment depends on whether the cause is obstructive, meaning sperm is produced normally but blocked from reaching the ejaculate, or non-obstructive, meaning sperm production itself is impaired. Diagnosis involves hormone blood tests, semen analysis, scrotal ultrasound, and sometimes genetic testing to distinguish between the two types and identify the underlying cause, such as a prior vasectomy, congenital absence of the vas deferens, infection, or a hormonal or testicular disorder. Obstructive cases may be treated by surgically reconnecting or bypassing the blockage, such as vasectomy reversal, or by retrieving sperm directly from the testicle or epididymis using minor procedures like TESA, PESA, or micro-TESE. Non-obstructive cases are managed first by correcting any underlying hormonal issue where possible, and if sperm is still not present in the ejaculate, surgical sperm retrieval may still locate small pockets of sperm production within the testicle for use with ICSI. Retrieved sperm, when found, is typically used immediately or frozen for a subsequent IVF/ICSI cycle. Patients traveling to India for azoospermia treatment usually undergo diagnostic testing early in the visit to determine which retrieval approach is appropriate before proceeding.",
			},
			{
				name: 'PCOS Treatment',
				description:
					"Polycystic ovary syndrome (PCOS) is a hormonal disorder that can cause irregular or absent ovulation, elevated androgen levels, and multiple small follicles on the ovaries, and it is one of the more common causes of infertility in women. Diagnosis is based on a combination of symptoms, blood hormone testing, and ultrasound findings rather than any single test. Treatment is tailored to whether the immediate goal is regulating the cycle, managing symptoms such as excess hair growth or acne, or achieving pregnancy. For fertility, first-line treatment often involves lifestyle measures alongside oral medication to induce ovulation, with injectable hormone medication or laparoscopic ovarian drilling considered if oral treatment is not effective. When ovulation induction alone does not lead to pregnancy, treatment may progress to IUI or IVF, particularly if other fertility factors are also present. Because PCOS varies significantly in severity between individuals, the treatment plan is adjusted based on ongoing monitoring of ovulation and hormone response. Patients traveling to India for PCOS-related fertility treatment typically share recent hormone panels and ultrasound reports in advance so the specialist can suggest a likely first step and the length of monitoring their visit may require.",
			},
			{
				name: 'Endometriosis Treatment',
				description:
					"Endometriosis is a condition in which tissue similar to the uterine lining grows outside the uterus, commonly on the ovaries, fallopian tubes, or pelvic lining, where it can cause pain, inflammation, scarring, and fertility problems. Diagnosis is typically supported by ultrasound or MRI, though laparoscopic surgery remains the most definitive way to confirm and stage the extent of disease. Treatment depends on the severity of symptoms and whether fertility is a priority, ranging from pain management and hormonal medication to suppress the abnormal tissue, to laparoscopic surgery to remove or destroy endometrial implants, cysts, and adhesions while preserving healthy ovarian tissue where possible. For patients trying to conceive, surgical treatment can improve the chances of natural conception in mild to moderate disease, while more advanced cases or those with reduced ovarian reserve may be advised to proceed directly to IVF, sometimes alongside surgery. Laparoscopic surgery is performed under general anesthesia through small incisions and typically involves a short hospital stay with a recovery period of one to two weeks. Patients traveling to India for endometriosis treatment often combine diagnostic imaging, laparoscopic surgery if needed, and a follow-up consultation within a single planned visit.",
			},
			{
				name: 'Blocked Fallopian Tubes Treatment',
				description:
					"Blocked fallopian tubes prevent the egg and sperm from meeting or prevent a fertilized egg from traveling to the uterus, and are a common structural cause of infertility, often resulting from prior pelvic infection, endometriosis, surgery, or scar tissue. Diagnosis is typically made through a hysterosalpingogram, an X-ray procedure that traces dye through the uterus and tubes, or through laparoscopy with dye testing, which allows direct visualization and treatment of certain blockages in the same procedure. Treatment depends on the location and extent of the blockage: some tubal blockages near the uterus can be cleared using a minimally invasive procedure that passes a small catheter through the cervix, while blockages elsewhere in the tube, or scar tissue around the tube, may be treated with laparoscopic surgery to remove adhesions or repair the tube. When tubes are too damaged to repair, or repair is unlikely to restore function, IVF is typically recommended since it bypasses the tubes entirely. Laparoscopic procedures are done under general anesthesia with a short hospital stay and one to two weeks of recovery. Patients traveling to India for tubal blockage treatment usually undergo diagnostic imaging early in the visit to guide the choice between tubal surgery and proceeding to IVF.",
			},
			{
				name: 'Laparoscopic Myomectomy',
				description:
					"Laparoscopic myomectomy is a minimally invasive surgical procedure to remove uterine fibroids, benign growths in the muscular wall of the uterus, while preserving the uterus itself, making it a preferred option for women who wish to retain fertility or avoid hysterectomy. Through several small abdominal incisions, the surgeon uses a camera and specialized instruments to locate, remove, and shell out each fibroid, then repairs the uterine muscle layer by layer to maintain the strength of the wall for any future pregnancy. The procedure is performed under general anesthesia and can take one to several hours depending on the number, size, and location of the fibroids. It is generally recommended for women with symptomatic fibroids causing heavy bleeding, pain, pressure symptoms, or fertility problems, when the fibroid location and size make a laparoscopic approach feasible. Recovery from laparoscopic surgery is typically faster than open surgery, with a hospital stay of one to two days and return to normal activity within two to three weeks, though pregnancy is usually advised to be delayed for several months to allow the uterine repair to heal. Patients traveling to India for laparoscopic myomectomy typically plan a stay of around two weeks to cover surgery and early recovery.",
			},
			{
				name: 'Laparoscopic Hysterectomy',
				description:
					"Laparoscopic hysterectomy is a minimally invasive surgical procedure to remove the uterus using a camera and specialized instruments inserted through several small abdominal incisions, rather than the single larger incision used in open surgery. Depending on the patient's condition, the surgeon may perform a total hysterectomy, removing the uterus and cervix, or a subtotal procedure that preserves the cervix, and the ovaries may or may not be removed at the same time depending on the diagnosis and the patient's age. The procedure is performed under general anesthesia and typically takes one to three hours. It is generally recommended for conditions such as large or numerous fibroids, adenomyosis, chronic pelvic pain, abnormal uterine bleeding unresponsive to other treatment, or certain gynecologic conditions where fertility preservation is no longer a goal. Compared with open surgery, the laparoscopic approach generally involves smaller scars, less postoperative pain, a shorter hospital stay of one to two days, and a faster return to normal activity, typically within two to four weeks. Patients traveling to India for laparoscopic hysterectomy typically plan a stay of about two weeks to allow the surgical team to monitor recovery and confirm healing before international travel.",
			},
		],
		benefits: [
			'In-house embryology and genetic screening labs',
			'Personalized hormonal stimulation protocols',
			'No multi-month waitlists — cycles typically begin within weeks',
			'Bundled packages covering medication, monitoring, and the procedure itself',
		],
		flagshipProcedure: 'IVF Cycle',
		packagePrice: 3000,
		totalTripDays: 21,
		stayDuration: {
			patient: { icuDays: 0, roomDays: 0, totalDays: 0 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 15,000 – 25,000', waitTime: '4–8 weeks', successRate: '40–50% per cycle' },
			{ country: 'UK', cost: 'USD 8,000 – 12,000', waitTime: '6–12 months (NHS)', successRate: '35–45% per cycle' },
			{ country: 'Germany', cost: 'USD 7,000 – 10,000', waitTime: '4–8 weeks', successRate: '35–45% per cycle' },
			{ country: 'Thailand', cost: 'USD 5,000 – 8,000', waitTime: '2–4 weeks', successRate: '40–48% per cycle' },
			{ country: 'India', cost: 'USD 3,000 – 4,500', waitTime: '1–2 weeks', successRate: '40–50% per cycle', highlight: true },
		],
		inclusions: [
			'Initial fertility work-up including hormonal and ultrasound assessment',
			'Ovarian stimulation monitoring visits',
			'Egg retrieval procedure and anesthesia charges',
			'In-house embryology, fertilization, and embryo culture',
			'Single embryo transfer procedure',
			'Standard fertility medication for the stimulation cycle',
		],
		exclusions: [
			'Donor eggs, donor sperm, or gestational surrogacy arrangements',
			'Pre-implantation genetic testing (PGT) unless specifically requested',
			'Additional embryo transfer attempts beyond the first, or frozen embryo transfer cycles',
			'Medication beyond the standard stimulation protocol',
			'Fertility treatment for male-factor procedures such as ICSI/TESA unless quoted separately',
		],
		faqs: [
			{
				question: 'What is the cost of IVF treatment in India?',
				answer:
					'An IVF cycle in India starts from USD 3,000, around 80% less than in the US, and covers the work-up, stimulation monitoring, egg retrieval, embryology, and a single embryo transfer.',
			},
			{
				question: 'What is the success rate of IVF in India?',
				answer:
					"India's leading fertility clinics report per-cycle success rates of 40–50%, comparable to top clinics in the US and Europe, with outcomes depending on age and underlying fertility factors.",
			},
			{
				question: 'How long does an IVF cycle take?',
				answer:
					'A full stimulation-to-transfer cycle typically takes 2–3 weeks, so most international patients plan to stay in India for about 3 weeks to complete monitoring, retrieval, and transfer.',
			},
			{
				question: 'Do you offer donor egg or surrogacy programs?',
				answer:
					'These arrangements involve additional legal and medical steps and are quoted separately — reach out to our fertility coordinator to discuss eligibility and current regulations.',
			},
			{
				question: 'Can treatment start without traveling first?',
				answer:
					'Yes, an initial tele-consultation and report review can happen before you travel, so your protocol is planned in advance and your trip is timed around the stimulation cycle.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your fertility history and any prior test reports through our contact form, and a fertility coordinator will arrange a specialist review and transparent estimate within 24 hours.',
			},
		],
	},
	{
		slug: 'organ-transplant',
		name: 'Organ Transplant',
		icon: 'dropletFill',
		imageKey: 'organTransplant',
		theme: 'green',
		shortDescription: 'Liver and kidney transplant programs with dedicated post-operative care teams.',
		overview:
			'India performs some of the highest volumes of living-donor liver and kidney transplants in the world, backed by dedicated transplant ICUs and long-term post-operative monitoring programs for international patients.',
		startingPrice: 15000,
		avgSavings: 94,
		hospitalsCount: 55,
		procedures: ['Kidney Transplant', 'Liver Transplant', 'Bone Marrow Transplant'],
		allProcedures: [
			'Liver Transplant',
			'Pediatric Liver Transplant',
			'Kidney Transplant',
			'Bone Marrow Transplant',
			'Heart Transplant',
			'Heart-Lung Transplant',
			'Lung Transplant',
		],
		detailedProcedures: [
			{
				name: 'Liver Transplant',
				description:
					"A liver transplant replaces a diseased or failing liver with a healthy one, performed in patients with end-stage liver disease, cirrhosis, certain liver cancers within defined size and number limits, or acute liver failure. The replacement liver may come from a deceased donor or, more commonly in India, from a living donor who gives a portion of their own liver, which regenerates to near-full size in both donor and recipient within a few months. During the operation, the diseased liver is removed and the donor liver or liver segment is connected to the recipient's blood vessels and bile duct, a complex procedure that typically takes eight to twelve hours and requires an experienced transplant surgical team. Recipients spend time in intensive care immediately after surgery, followed by one to two weeks in hospital, and begin lifelong immunosuppressive medication to prevent organ rejection. India's transplant centers have extensive experience with living-donor liver transplantation, including thorough donor evaluation to confirm safety for the donor. International patients typically need an accompanying potential living donor and should plan for an extended stay of several weeks to complete donor and recipient evaluation, surgery, and the critical early recovery period before travel home is considered safe.",
			},
			{
				name: 'Pediatric Liver Transplant',
				description:
					"Pediatric liver transplant is performed in infants and children with liver failure caused by conditions such as biliary atresia, inherited metabolic disorders, or acute liver failure, where the liver can no longer support the child's growth and health. Because deceased-donor organs sized for small children are limited, living-donor transplantation is especially important in pediatric cases, with a parent or relative often donating a small segment of their liver that is surgically shaped and connected to match the child's smaller blood vessels and bile duct. The operation requires a pediatric transplant surgical team experienced in the technical precision small anatomy demands, along with pediatric intensive care support afterward to manage fluid balance, immunosuppression, and infection risk. Children generally spend one to two weeks in hospital following surgery, with close monitoring of liver function and gradual introduction of lifelong anti-rejection medication. India's pediatric transplant programs have experience treating young children from abroad, coordinating donor evaluation for accompanying family members alongside the child's own work-up. Families should plan for an extended stay of several weeks to cover donor and recipient evaluation, surgery, and the early recovery period during which the child is closely monitored for complications.",
			},
			{
				name: 'Kidney Transplant',
				description:
					"A kidney transplant is performed for patients with end-stage kidney disease whose kidneys can no longer adequately filter waste from the blood, offering an alternative to long-term dialysis. The donor kidney, which may come from a living relative or approved living donor, or in some cases a deceased donor, is surgically placed in the recipient's lower abdomen and connected to nearby blood vessels and the bladder; the patient's own non-functioning kidneys are usually left in place. The surgery typically takes three to four hours under general anesthesia, and the transplanted kidney often begins producing urine within hours. Recipients require lifelong immunosuppressive medication to prevent rejection and are monitored closely in the early weeks for signs of rejection or infection. Living donors undergo a separate, generally laparoscopic procedure to remove one kidney, with most going on to live healthily with their remaining kidney. India's transplant centers carry out extensive living-donor kidney transplant work, including careful compatibility testing and donor safety evaluation. International patients typically need an accompanying donor where applicable and should plan for a stay of several weeks to allow for evaluation, surgery, and monitoring of early kidney function before returning home.",
			},
			{
				name: 'Bone Marrow Transplant',
				description:
					"A bone marrow transplant, also called a stem cell transplant, replaces a patient's diseased or damaged bone marrow with healthy blood-forming stem cells, used to treat conditions such as leukemia, lymphoma, multiple myeloma, aplastic anemia, and certain inherited blood disorders. In an autologous transplant, the patient's own stem cells are collected, stored, and reinfused after high-dose chemotherapy; in an allogeneic transplant, stem cells come from a matched donor, often a sibling or an unrelated donor identified through tissue-typing. Before the transplant, patients undergo a conditioning regimen of chemotherapy and sometimes radiation to clear diseased marrow and suppress the immune system, after which the stem cells are infused intravenously and travel to the bone marrow to begin producing new blood cells over the following two to four weeks. This period requires isolation in a specialized transplant unit to protect against infection while blood counts recover. Allogeneic transplant recipients also need medication to prevent graft-versus-host disease, where donor immune cells react against the recipient's tissues. India's transplant centers offer both autologous and allogeneic bone marrow transplantation with dedicated isolation facilities, and international patients typically plan for a stay of six to eight weeks to cover conditioning, transplant, and initial recovery.",
			},
			{
				name: 'Heart Transplant',
				description:
					"A heart transplant replaces a severely diseased or failing heart with a healthy donor heart, generally considered for patients with advanced heart failure that has not responded to medication, devices, or other surgical treatment. Because a suitable donor heart must come from a deceased donor and be matched for blood type and body size, candidates are placed on a waiting list and undergo thorough evaluation to confirm they are fit for surgery and long-term immunosuppression. During the operation, performed with the patient on a heart-lung bypass machine, the diseased heart is removed and the donor heart is connected to the major blood vessels, typically taking four to six hours. Recipients spend time in intensive care immediately afterward and remain in hospital for several weeks while doctors monitor for rejection and infection and adjust lifelong anti-rejection medication. Regular biopsies of the new heart are performed in the early months to check for rejection. India's transplant programs manage the full pathway from evaluation to post-transplant care, though international patients should be aware that donor heart availability and waiting times vary depending on local allocation processes. Extended stays of several weeks to months are typically required to cover the waiting period, surgery, and recovery.",
			},
			{
				name: 'Heart-Lung Transplant',
				description:
					"A combined heart-lung transplant replaces both the heart and lungs in a single operation and is reserved for patients with severe, advanced disease affecting both organs together, such as complex congenital heart conditions with associated lung damage, or severe pulmonary hypertension that has caused irreversible heart failure. Because it requires a matched set of donor organs from a single deceased donor, it is a rarer and more complex procedure than single-organ transplant, with longer waiting periods due to limited donor availability. The operation is performed with the patient on a heart-lung bypass machine while the surgical team removes the diseased heart and lungs and connects the donor organs to the recipient's airway and major blood vessels. Recovery involves an extended stay in intensive care, careful management of breathing and lung function, and close monitoring for rejection of either organ, alongside lifelong immunosuppressive medication. Rehabilitation gradually rebuilds lung capacity and physical stamina over several months. India's transplant centers with combined thoracic transplant capability evaluate candidates thoroughly before listing, and international patients should expect a lengthy process encompassing evaluation, waiting time, surgery, and an extended recovery of several months before travel home is considered.",
			},
			{
				name: 'Lung Transplant',
				description:
					"A lung transplant replaces one or both diseased lungs with healthy donor lungs and is considered for patients with end-stage lung disease such as chronic obstructive pulmonary disease, pulmonary fibrosis, cystic fibrosis, or severe pulmonary hypertension, where medical treatment can no longer maintain adequate breathing function. Depending on the condition, either a single lung or both lungs may be transplanted; the procedure is performed under general anesthesia, often with circulatory support such as a heart-lung bypass machine, while the surgical team removes the diseased lung tissue and connects the donor lung's airway and blood vessels to the recipient's. The operation typically takes several hours per lung, and recipients spend time on a ventilator and in intensive care afterward while lung function stabilizes. A structured pulmonary rehabilitation program follows over subsequent months to rebuild breathing capacity and endurance, alongside lifelong immunosuppressive medication and regular monitoring for rejection or infection. India's transplant centers assess candidates carefully for suitability, including disease severity and overall fitness for major surgery. Because donor lung availability affects waiting times, international patients should plan for an extended, somewhat variable stay covering evaluation, the waiting period, surgery, and early rehabilitation before travel home.",
			},
		],
		benefits: [
			'High-volume living-donor transplant programs',
			'Dedicated transplant ICUs and isolation recovery wards',
			'Long-term immunosuppression and follow-up care planning',
			'Legal and ethical donor evaluation support throughout',
		],
		flagshipProcedure: 'Living Donor Liver Transplant',
		packagePrice: 25000,
		totalTripDays: 60,
		stayDuration: {
			patient: { icuDays: 5, roomDays: 16, totalDays: 21 },
			donor: { icuDays: 2, roomDays: 6, totalDays: 8 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 300,000 – 500,000', waitTime: 'Years (waitlist)', successRate: '88–92%' },
			{ country: 'UK', cost: 'USD 150,000 – 250,000', waitTime: '1–3 years', successRate: '88–91%' },
			{ country: 'Germany', cost: 'USD 120,000 – 200,000', waitTime: '6–18 months', successRate: '87–90%' },
			{ country: 'Thailand', cost: 'USD 60,000 – 80,000', waitTime: 'Moderate', successRate: '85–88%' },
			{ country: 'India', cost: 'USD 25,000', waitTime: '2–4 weeks', successRate: '90%+', highlight: true },
		],
		inclusions: [
			'Pre-transplant evaluation of Recipient and one Donor on OPD basis',
			'Room Rent: Recipient — 21 days (5 days ICU + 16 days Single Room); Donor — 8 days (2 days ICU + 6 days Single Room)',
			"Surgeon's Fees for both Donor & Recipient",
			'Anesthetist Fee for both Donor & Recipient',
			'Operation Theatre Charges for both Donor & Recipient',
			'Anesthesia Service Charges for both Donor & Recipient',
			'Laboratory Services Charges',
			'Transfusion Services Charges',
			'Radiology Services Charges',
			'Physiotherapy Services Charges',
			'Pharmacy Services Charges including Drugs & Medical Consumables',
		],
		exclusions: [
			'Hospital stay before the operation to improve the condition of the patient, and drugs/investigations after discharge from hospital',
			'Workup of any additional donor',
			'Any period of hospital or ICU stay beyond the package duration',
			'All investigations, drugs, and consumables beyond ceiling rates',
			'Costly or infrequently used medicines such as Zenapax, Simulect, Valcyte, Novoseven, Thymoglobulin, Ambisome, Caspofungin, and Anidulafungin',
			'Any non-transplant consultant visit charges and procedure charges',
			'Interventional radiology charges including percutaneous drain placement, percutaneous trans-hepatic biliary drainage, and angiography',
			'Cardiology-related procedures (echo, angiography) and nephrology-related charges (dialysis, CRRT)',
			'Endoscopic procedures such as ERCP',
			'Re-operation',
		],
		faqs: [
			{
				question: 'What is the cost of liver transplant in India?',
				answer:
					'Liver transplant surgery in India starts from USD 25,000, around 60–70% less than in the USA or UK. The package covers pre-transplant evaluation for the recipient and one donor, surgery for both, ICU and hospital stay, OT charges, nursing, lab, radiology, and pharmacy services.',
			},
			{
				question: 'What is the success rate of liver transplant in India?',
				answer:
					"India's top liver transplant centres report a one-year success rate of over 90%, comparable to leading programmes in the USA and Europe. The five-year survival rate is approximately 75%, depending on the underlying disease, overall patient health, and follow-up compliance.",
			},
			{
				question: 'Who can be a liver donor for transplant in India?',
				answer:
					'For a living donor liver transplant, the donor must be a close blood relative (parent, sibling, child, or spouse), aged 18–55, healthy, with a compatible blood group and normal liver function. Donation must be entirely voluntary — any financial transaction between donor and recipient is illegal under Indian law. Full donor evaluation is typically completed in 2–3 days.',
			},
			{
				question: 'How long is the hospital stay for liver transplant in India?',
				answer:
					'The recipient stays approximately 21 days — 5 days in the ICU and 16 days in a single room. The donor stays about 8 days — 2 days in ICU and 6 days in a single room. After discharge, the recipient is advised to remain in India for at least 1 month for close monitoring, making the total stay in India typically around 2 months.',
			},
			{
				question: 'Can the liver regenerate after living donor donation?',
				answer:
					"Yes. The liver is the only solid organ in the human body that can fully regenerate. After donating a portion, the donor's remaining liver grows back to roughly 80% of its original size within a few weeks, and to near-original size within months. The transplanted portion in the recipient also grows to full size.",
			},
			{
				question: 'How do I get started?',
				answer:
					'Send the recipient and potential donor medical reports through our contact form or WhatsApp, and our transplant coordination team will arrange a free specialist review and a tele-consultation with the transplant surgeon before you travel.',
			},
		],
	},
	{
		slug: 'dental-care',
		name: 'Dental Care',
		icon: 'capsule',
		imageKey: 'dentalCare',
		theme: 'blue',
		shortDescription: 'Implants, veneers, and full-mouth restoration using the latest digital dentistry.',
		overview:
			'Digital smile design, CAD/CAM same-day crowns, and full-mouth implant rehabilitation are standard at India\'s leading dental centers — delivering results in days rather than the months typical of staged treatment abroad.',
		startingPrice: 800,
		avgSavings: 84,
		hospitalsCount: 80,
		procedures: ['Dental Implants', 'Veneers', 'Full Mouth Restoration'],
		allProcedures: [
			'Full Mouth Dental Implants',
			'All-on-4 Dental Implants',
			'All-on-6 Dental Implants',
			'Immediate (3-Day) Dental Implants',
			'Mini Dental Implants',
			'Zygomatic Implants',
			'Dental Crowns',
			'Dentures & Bridges',
			'Root Canal Treatment',
			'Dental Veneers',
			'Hollywood Smile Design',
			'Invisalign — Clear Aligners',
			'Snap-On Smile',
			'Teeth Whitening',
			'Orthodontics',
			'Periodontics',
			'Sedation Dentistry',
		],
		detailedProcedures: [
			{
				name: 'Full Mouth Dental Implants',
				description:
					"Full mouth dental implants replace an entire arch, or both arches, of missing or severely damaged teeth with a fixed, implant-supported prosthesis. The process begins with a detailed evaluation of jawbone density using 3D CT scanning, followed by the surgical placement of multiple titanium implant posts into the upper and/or lower jaw, which act as artificial tooth roots. Over a period of healing, known as osseointegration, the implants fuse with the surrounding bone to create a stable foundation before a custom-made bridge or full-arch prosthesis is attached. Patients typically consider this option after losing most or all of their natural teeth due to advanced gum disease, decay, trauma, or long-term denture wear that has caused bone loss. Compared with removable dentures, a full mouth implant restoration offers improved chewing function, speech, and facial support, since it does not rely on suction or adhesive. Dental teams in India commonly combine digital smile design and in-house implant and prosthetic labs so that surgical placement, healing, and final restoration can be coordinated within a single treatment journey, often over one to two visits spaced a few months apart.",
			},
			{
				name: 'All-on-4 Dental Implants',
				description:
					"The All-on-4 technique restores a full arch of teeth using just four strategically placed implants, two positioned vertically at the front of the jaw and two angled toward the back to make use of denser bone and avoid structures like the sinus cavity or nerve canal. This angled placement often allows a fixed provisional bridge to be attached to the implants on the same day as surgery, giving patients functional, natural-looking teeth while the implants integrate with the bone over the following months. It is typically recommended for patients who have lost most of their teeth or require a full-arch extraction, particularly those who do not have enough bone volume for a full complement of implants without additional grafting. Once healing is complete, the provisional bridge is replaced with a final, more durable prosthesis. Because the approach uses fewer implants and often avoids bone grafting, it can shorten overall treatment time compared with traditional full mouth implant surgery. Clinics in India frequently offer this procedure with digital planning software to map implant angles precisely, allowing international patients to complete the surgical phase and receive a functional temporary bridge within a single trip.",
			},
			{
				name: 'All-on-6 Dental Implants',
				description:
					"The All-on-6 method restores a complete arch of missing teeth by anchoring a fixed prosthetic bridge to six implants distributed evenly along the jaw, rather than the four used in the All-on-4 approach. The additional implants spread biting forces across more points, which can provide extra stability for patients with higher bite pressure or those who want a broader base of support for a long-term fixed restoration. Candidates are generally patients with sufficient jawbone volume who are missing most or all of their teeth in an arch, whether from advanced periodontal disease, decay, or previous tooth loss. Surgery involves precise placement of the implant posts, guided by 3D imaging, followed by a healing period during which the bone fuses around the implants before the final bridge is fitted; in many cases a temporary fixed bridge is attached soon after surgery. This technique is often chosen over removable dentures because it eliminates the need for adhesives and restores near-normal chewing ability. Indian implant centers typically pair this procedure with in-house dental laboratories, allowing the surgical and prosthetic stages to be planned together and completed over one extended visit.",
			},
			{
				name: 'Immediate (3-Day) Dental Implants',
				description:
					"Immediate, or 3-day, dental implants are a protocol in which implant placement, temporary crown or bridge fitting, and initial follow-up are compressed into a short, structured visit rather than being spread across several separate trips. On the first day, implants are surgically placed into the jawbone, often using guided digital planning to determine ideal positioning; where bone quality allows, a temporary fixed restoration is attached within the same visit or shortly after, so the patient leaves with functional, aesthetic teeth rather than a gap or removable appliance. The following days are typically used for review of healing, bite adjustment, and fine-tuning of the temporary prosthesis before the patient returns home, with the final permanent restoration completed later, either locally or on a subsequent visit, once osseointegration is complete. This approach suits patients who need efficient treatment due to travel constraints and who have adequate bone density to support immediate loading. India-based implant teams often structure this protocol specifically around international patients, coordinating scanning, surgery, and temporary restoration within a compact itinerary while planning follow-up care for when the implants have fully integrated.",
			},
			{
				name: 'Mini Dental Implants',
				description:
					"Mini dental implants are narrower-diameter titanium posts, generally less than three millimeters across, used to anchor replacement teeth or stabilize dentures in patients whose jawbone is too thin or narrow for conventional implants. Because of their smaller size, they can often be placed with a minimally invasive technique that avoids the need for bone grafting, using a small pilot hole rather than a larger surgical flap, which typically shortens both the procedure and recovery time. They are most commonly used to secure a lower or upper denture with a ball-and-socket or bar attachment, converting a loose removable appliance into a more stable one, though they can also support single crowns in cases with limited bone. Patients who need this option include those with significant bone loss who are not candidates for standard implants, or older patients seeking a less invasive way to improve denture stability. Healing time is generally shorter than with standard implants, and in many cases a prosthesis can be attached soon after placement. Dental clinics in India commonly offer mini implants as a lower-cost, faster alternative for patients focused on denture stabilization rather than full-arch fixed reconstruction.",
			},
			{
				name: 'Zygomatic Implants',
				description:
					"Zygomatic implants are unusually long titanium implants, often 30 to 50 millimeters, anchored not in the upper jawbone but in the zygomatic bone, or cheekbone, which is denser and less prone to the resorption that frequently affects the upper jaw after long-term tooth loss. They are used for patients with severe upper jaw bone loss who are not candidates for conventional implants and who would otherwise require extensive bone grafting procedures before any implant could be placed. During surgery, the implant is inserted at an angle that passes through the upper jaw and engages the cheekbone, providing a stable anchor point for a fixed prosthesis, in many cases allowing a full-arch temporary bridge to be attached soon after surgery. This technique can eliminate the months-long grafting and healing process that would otherwise be needed, making it an option for patients seeking a faster path to a fixed restoration despite significant bone deficiency. Because zygomatic implant placement requires specialized surgical training and imaging, it is typically performed by experienced oral and maxillofacial surgeons. Indian centers offering this procedure generally use 3D cone-beam imaging for precise surgical planning given the anatomical complexity involved.",
			},
			{
				name: 'Dental Crowns',
				description:
					"A dental crown is a custom-fabricated cap, typically made from porcelain, zirconia, metal, or a combination of these materials, that fully covers a damaged or weakened tooth to restore its shape, strength, and appearance. Crowns are recommended when a tooth has been significantly weakened by a large filling, cracked, worn down, or treated with root canal therapy, since the procedure often removes enough tooth structure that the remaining tooth needs additional support to withstand normal biting forces. Placement usually involves shaping the tooth to make room for the crown, taking a digital or physical impression, and fitting a temporary crown while the permanent one is fabricated, often in a dental laboratory, before it is cemented into place at a follow-up visit. Same-day crown systems using in-office milling technology can shorten this process considerably by designing and producing the crown chairside. Crowns are also used to cap dental implants and to anchor bridges replacing missing teeth. Dental clinics in India commonly offer a choice of crown materials with varying aesthetics and durability, and many use digital scanning and on-site milling to reduce the number of visits required.",
			},
			{
				name: 'Dentures & Bridges',
				description:
					"Dentures and bridges are two traditional approaches to replacing missing teeth without surgery. A denture is a removable appliance, either partial or complete, made from an acrylic or flexible base with artificial teeth, designed to rest on the gums and, in the upper jaw, part of the palate; it is held in place by suction, clasps, or adhesive and can be taken out for cleaning. A bridge, by contrast, is a fixed restoration that replaces one or more missing teeth by anchoring artificial teeth to the natural teeth or implants on either side of the gap, typically using crowns cemented over the supporting teeth. Patients choose these options based on the number of missing teeth, the condition of remaining teeth, bone health, and budget, since both are generally less invasive and more affordable than implant-based alternatives. Fitting involves impressions or digital scans, laboratory fabrication, and adjustment visits to ensure comfort and a natural bite. Indian dental laboratories often use CAD/CAM technology to fabricate precise, well-fitting dentures and bridges, and many clinics can complete design, fabrication, and fitting within a single extended visit for international patients.",
			},
			{
				name: 'Root Canal Treatment',
				description:
					"Root canal treatment, or endodontic therapy, removes infected or inflamed pulp tissue from inside a tooth to relieve pain and save a tooth that might otherwise need extraction. It is typically needed when deep decay, a cracked tooth, or repeated dental procedures allow bacteria to reach the pulp chamber and root canals, causing infection, swelling, or persistent pain, particularly with hot, cold, or pressure. Under local anesthesia, the dentist creates a small opening in the tooth, removes the damaged pulp, and cleans and shapes the root canals before filling them with a biocompatible material to seal out further infection. Because a treated tooth becomes more brittle without its blood supply, it is usually capped with a crown afterward, especially for back teeth that bear heavy chewing forces. Modern root canal treatment is generally completed over one or two visits using rotary instruments and, in many clinics, operating microscopes for greater precision, and most patients experience significant relief from pre-treatment pain rather than added discomfort. Dental centers in India commonly use digital X-rays and apex locators to map canal anatomy accurately, helping ensure thorough cleaning and a well-sealed result.",
			},
			{
				name: 'Dental Veneers',
				description:
					"Dental veneers are thin shells, usually made of porcelain or composite resin, bonded to the front surface of teeth to improve their appearance by changing their color, shape, size, or alignment. They are commonly used to address discoloration that does not respond to whitening, chips, gaps between teeth, or teeth that are slightly misshapen or uneven, offering a way to improve a smile without the more extensive movement required by orthodontics. For porcelain veneers, a thin layer of enamel is typically removed from the tooth surface to allow the veneer to sit flush, impressions are taken, and custom shells are fabricated in a laboratory before being bonded into place at a second visit; composite veneers can often be sculpted directly onto the tooth in a single session. Because porcelain veneer placement removes some natural enamel, it is generally considered a permanent cosmetic change requiring long-term maintenance. Veneers are durable but not indestructible, and patients are usually advised to avoid biting very hard foods directly with veneered teeth. Indian cosmetic dental clinics often use digital smile design software to preview the result and match veneer shade and shape to the patient's facial features before treatment begins.",
			},
			{
				name: 'Hollywood Smile Design',
				description:
					"Hollywood Smile Design is a comprehensive cosmetic dentistry approach that combines multiple procedures, most often porcelain veneers or crowns, teeth whitening, and sometimes gum contouring, to create a uniformly white, symmetrical smile. Rather than treating a single tooth or issue, the process begins with a full assessment of tooth color, shape, alignment, and gum line, often supported by digital smile design software that lets the patient preview the planned outcome before any tooth is touched. Candidates are typically patients seeking a significant cosmetic transformation for reasons such as uneven teeth, discoloration, gaps, or an uneven gum line, rather than those with a single isolated dental problem. Treatment usually involves minimal tooth preparation, laboratory fabrication of custom veneers or crowns matched to a chosen shade and shape, and staged fitting appointments to achieve a natural yet enhanced result. Because it is a cosmetic rather than medically necessary procedure, planning discussions focus heavily on the patient's expectations and facial proportions. Indian cosmetic dental centers frequently package this treatment for international patients, coordinating digital planning, laboratory work, and fitting appointments so the full transformation can be completed within a single extended visit.",
			},
			{
				name: 'Invisalign — Clear Aligners',
				description:
					"Invisalign uses a series of custom-made, clear, removable plastic aligners to gradually move teeth into a straighter position, offering an alternative to traditional metal braces for correcting crowding, spacing, and certain bite irregularities. Treatment begins with digital scans or impressions of the teeth, which are used to generate a 3D treatment plan showing the projected movement of each tooth through a sequence of aligner stages; a new aligner is worn roughly every one to two weeks, each one shifting the teeth slightly closer to their final position. Because the aligners are transparent and removable for eating and cleaning, they are often chosen by adult patients or those wanting a less visible option than fixed braces. Small tooth-colored attachments may be bonded to certain teeth to help aligners grip and apply more precise force where needed. Treatment length varies with the complexity of the case, ranging from several months for minor corrections to well over a year for more involved misalignment, and periodic check-ins are needed to monitor progress and issue new aligner sets. Orthodontic clinics in India commonly use in-house 3D scanning and treatment-planning software to design and monitor Invisalign cases for both local and visiting patients.",
			},
			{
				name: 'Snap-On Smile',
				description:
					"Snap-On Smile is a removable, non-invasive dental appliance made from a flexible dental resin that fits directly over a patient's existing teeth to instantly improve the appearance of a smile without any drilling, shaping, or anesthesia. It is custom-fabricated from impressions of the patient's mouth to snap securely over the natural teeth, covering discoloration, chips, gaps, or misalignment, and can be removed and reinserted by the patient at will for cleaning or eating. Because no tooth structure is altered, it is often chosen by patients who want a reversible cosmetic solution, a temporary option while considering more permanent treatments such as veneers or implants, or an affordable way to improve their smile's appearance without surgery. It is not a substitute for restorative treatment in cases involving active decay, gum disease, or missing teeth requiring functional replacement, and it is generally not intended for regular chewing of very hard foods. Fitting typically requires two visits: one for impressions and shade selection, and a second for fitting and adjustment once the appliance has been fabricated. Dental clinics in India often offer this as a quick cosmetic option for patients wanting a same-trip smile improvement without committing to permanent tooth alteration.",
			},
			{
				name: 'Teeth Whitening',
				description:
					"Teeth whitening is a cosmetic procedure that lightens the shade of teeth by breaking down staining compounds within the enamel and underlying dentin, typically using a peroxide-based gel. In-office whitening involves a dentist applying a higher-concentration gel to the teeth, sometimes activated with a special light, under controlled conditions that protect the gums, producing a visible change within a single appointment lasting around an hour. Take-home whitening kits use custom-fitted trays and a lower-concentration gel worn for a set period daily over one to two weeks, offering a more gradual result that patients can manage at their own pace. Patients typically seek whitening to address staining from coffee, tea, tobacco, aging, or certain medications, though results vary depending on the original cause and shade of discoloration, and whitening does not change the color of crowns, veneers, or fillings, which can create shade mismatches if not planned for. Mild tooth sensitivity during or after treatment is common and usually temporary. Dental clinics in India often combine in-office whitening with a take-home maintenance kit so international patients can achieve an immediate result before travel and maintain it afterward.",
			},
			{
				name: 'Orthodontics',
				description:
					"Orthodontics is the branch of dentistry focused on diagnosing and correcting misaligned teeth and jaws, using appliances such as traditional metal or ceramic braces, clear aligners, or functional devices to gradually move teeth or guide jaw growth into a more balanced position. Treatment is typically recommended for crowding, gaps, overbite, underbite, crossbite, or jaw misalignment that affects chewing, speech, oral hygiene, or long-term dental health, and can be pursued at almost any age, though early evaluation in childhood can sometimes simplify later treatment. The process usually begins with a clinical exam, X-rays, and digital or physical impressions to plan tooth movement, followed by fitting of braces or aligners and regular adjustment visits, typically every four to eight weeks, over a treatment period that can range from several months to a few years depending on complexity. In some cases involving significant jaw discrepancy, orthodontic treatment is combined with corrective jaw surgery for a more complete result. After active treatment, a retainer is generally required to maintain the new tooth positions. Orthodontic centers in India commonly offer a full range of options from traditional braces to clear aligner systems, with digital planning tools used to map treatment before it begins.",
			},
			{
				name: 'Periodontics',
				description:
					"Periodontics is the dental specialty concerned with the structures that support the teeth, namely the gums, periodontal ligament, and surrounding bone, and focuses on preventing, diagnosing, and treating gum disease ranging from mild gingivitis to advanced periodontitis. Treatment often begins with non-surgical approaches such as deep cleaning procedures, known as scaling and root planing, which remove plaque and tartar from below the gum line to reduce inflammation and infection. When disease has progressed further, causing gum recession, bone loss, or deep pockets around the teeth, surgical options such as flap surgery, bone grafting, or gum grafting may be used to remove infected tissue, regenerate lost bone, or cover exposed roots. Patients typically need periodontal care when they notice bleeding gums, persistent bad breath, gum recession, or loosening teeth, all of which can indicate underlying infection that, left untreated, may lead to tooth loss. Periodontists also play a key role in preparing the gums and bone before dental implant placement. Dental centers in India often integrate periodontal assessment into implant and cosmetic treatment planning, since healthy gum and bone tissue is essential for the long-term success of most restorative procedures.",
			},
			{
				name: 'Sedation Dentistry',
				description:
					"Sedation dentistry uses medication to help patients relax during dental procedures, ranging from mild anxiety-reducing options to deeper levels of sedation, and is generally offered to patients with significant dental anxiety, a strong gag reflex, sensitivity to pain, or those undergoing lengthy or complex procedures such as multiple extractions or full-arch implant surgery. Common options include nitrous oxide, or laughing gas, which is inhaled and wears off quickly, oral sedatives taken before the appointment for a calmer, drowsy state, and intravenous sedation, which is administered by a trained professional and allows for deeper relaxation with the patient still able to breathe independently and respond to instructions. For more extensive surgical procedures, general anesthesia may occasionally be used under the supervision of an anesthesiologist. Throughout sedation, vital signs such as heart rate, blood pressure, and oxygen levels are typically monitored to ensure patient safety. The choice of sedation level depends on the complexity of the procedure, the patient's anxiety level, and their overall health history. Dental clinics in India offering sedation options for complex procedures such as full mouth implants typically have qualified anesthesiology support on-site, allowing international patients to complete lengthy treatment sessions comfortably within a single visit.",
			},
		],
		benefits: [
			'Digital smile design and CAD/CAM same-day crowns',
			'Full-mouth implant rehabilitation completed in a single trip',
			'International-grade implant brands used throughout',
			'Combine treatment with a recovery stay near the clinic',
		],
		flagshipProcedure: 'Full Mouth Dental Implants',
		packagePrice: 800,
		totalTripDays: 10,
		stayDuration: {
			patient: { icuDays: 0, roomDays: 0, totalDays: 0 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 4,000 – 6,000 per implant', waitTime: '2–4 weeks', successRate: '95–97%' },
			{ country: 'UK', cost: 'USD 3,000 – 5,000 per implant', waitTime: '3–6 weeks', successRate: '95–97%' },
			{ country: 'Germany', cost: 'USD 2,500 – 4,000 per implant', waitTime: '2–4 weeks', successRate: '94–96%' },
			{ country: 'Thailand', cost: 'USD 1,200 – 2,000 per implant', waitTime: '1–2 weeks', successRate: '93–95%' },
			{ country: 'India', cost: 'USD 800 – 1,300 per implant', waitTime: '3–5 days', successRate: '95%+', highlight: true },
		],
		inclusions: [
			'Digital smile design consultation and 3D scan',
			"Dentist's fees for implant placement or restoration",
			'Standard-grade implant fixture and abutment',
			'CAD/CAM same-day crown fabrication where applicable',
			'Local anesthesia and sterile procedure charges',
			'One follow-up visit to check healing and fit',
		],
		exclusions: [
			'Bone grafting or sinus lift procedures unless identified during the initial scan',
			'Premium implant brand upgrades beyond the standard-grade fixture',
			'Additional crowns, veneers, or restorations beyond the agreed treatment plan',
			'Orthodontic treatment or teeth alignment prior to implant placement',
			'Follow-up visits beyond the one included check-up',
		],
		faqs: [
			{
				question: 'What is the cost of dental implants in India?',
				answer:
					'A single dental implant in India starts from USD 800, around 80% less than in the US, and includes the consultation, implant placement, and a same-day CAD/CAM crown where applicable.',
			},
			{
				question: 'Can full-mouth restoration be completed in one trip?',
				answer:
					'Yes, using digital smile design and same-day crown technology, most full-mouth implant cases can be completed within a single 7–10 day trip, compared to the months typically needed for staged treatment abroad.',
			},
			{
				question: 'What implant brands are used?',
				answer:
					'Our partner dental centers use internationally certified implant brands as standard, with premium brand upgrades available on request.',
			},
			{
				question: 'Is the procedure painful?',
				answer:
					'Implant placement is done under local anesthesia and is generally well-tolerated, with most patients returning to normal activity within a day or two.',
			},
			{
				question: 'How long should I plan to stay in India?',
				answer:
					'Most implant and restoration cases need about 7–10 days in India to allow for placement, any same-day crown work, and a follow-up check before you travel home.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share a recent dental X-ray or photos of your teeth through our contact form, and our dental coordinator will arrange a review and transparent quote within 24 hours.',
			},
		],
	},
	{
		slug: 'eye-care',
		name: 'Eye Care',
		icon: 'eye',
		imageKey: 'eyeCare',
		theme: 'teal',
		shortDescription: 'Cataract surgery and vision correction with same-day discharge in most cases.',
		overview:
			"India's eye hospitals perform cataract and refractive procedures at extremely high volumes, giving surgeons deep expertise in bladeless, laser-assisted techniques with same-day discharge for most patients.",
		startingPrice: 700,
		avgSavings: 86,
		hospitalsCount: 60,
		procedures: ['Cataract Surgery', 'LASIK', 'Retina Treatment'],
		allProcedures: [
			'Cataract Surgery',
			'LASIK Surgery',
			'Femto LASIK Surgery',
			'SMILE LASIK Eye Surgery',
			'Contoura Laser Eye Surgery',
			'Corneal Cross-Linking',
			'Cornea Transplant',
			'Keratoconus Treatment',
			'Astigmatism Surgery',
			'Glaucoma Treatment',
			'Retinal Detachment Surgery',
			'Diabetic Retinopathy Treatment',
			'Vitreoretinal Surgery',
			'Retinitis Pigmentosa Treatment',
			'Squint Surgery',
			'Corneal Abrasion Treatment',
			'Optic Nerve Disorders',
			'Optic Nerve Atrophy Treatment',
			'Optic Neuritis Treatment',
		],
		detailedProcedures: [
			{
				name: 'Cataract Surgery',
				description:
					"Cataract surgery removes the eye's natural lens once it has become clouded, a condition called a cataract, and replaces it with a clear artificial intraocular lens to restore vision. The most common technique, phacoemulsification, uses a small ultrasonic probe inserted through a tiny incision to break up the clouded lens into fragments, which are then gently suctioned out before the folded artificial lens is inserted and unfolds into place, all typically performed under local or topical anesthesia in under half an hour. Cataracts usually develop gradually with age, though they can also result from injury, certain medications, or underlying conditions such as diabetes, and are generally diagnosed when a patient notices blurred vision, glare or halos around lights, faded colors, or difficulty with night driving. A range of intraocular lens options exist, including standard monofocal lenses and premium multifocal or toric lenses that can also reduce dependence on glasses for presbyopia or astigmatism. Recovery is usually quick, with most patients noticing improved vision within a day or two, though full stabilization can take several weeks. Eye centers in India perform very high volumes of cataract surgery using advanced phacoemulsification and femtosecond laser-assisted techniques.",
			},
			{
				name: 'LASIK Surgery',
				description:
					"LASIK, or laser-assisted in situ keratomileusis, is a refractive surgery that reshapes the cornea to correct nearsightedness, farsightedness, and astigmatism, reducing or eliminating a patient's dependence on glasses or contact lenses. During the procedure, the surgeon creates a thin, hinged flap in the outer layer of the cornea, folds it back, and uses an excimer laser to precisely remove microscopic amounts of underlying corneal tissue to correct the eye's focusing power, before repositioning the flap, which adheres naturally without stitches. The entire procedure typically takes only a few minutes per eye and is performed under numbing eye drops, with most patients noticing improved vision within a day. Candidates are generally adults with stable vision prescriptions and corneas of adequate thickness, since insufficient corneal tissue or certain eye conditions can make LASIK unsuitable, in which case alternative procedures may be recommended after a detailed pre-operative evaluation including corneal mapping. Mild dryness or glare around lights can occur temporarily during healing. Eye hospitals in India commonly use advanced diagnostic mapping and a range of laser platforms to plan LASIK precisely, and the procedure is typically completed within a single-day visit.",
			},
			{
				name: 'Femto LASIK Surgery',
				description:
					"Femto LASIK is a variation of standard LASIK surgery in which the initial corneal flap is created using a femtosecond laser instead of a handheld mechanical blade, or microkeratome, allowing for a more precise, uniform, and customizable flap in terms of thickness, diameter, and shape. After the femtosecond laser creates and lifts the corneal flap, the procedure continues as with traditional LASIK, using an excimer laser to reshape the underlying corneal tissue and correct the patient's specific refractive error, whether nearsightedness, farsightedness, or astigmatism, before the flap is repositioned to heal naturally. Because the laser-created flap tends to be more consistent than a blade-cut one, this bladeless approach is often associated with a somewhat lower risk of certain flap-related complications and may be recommended for patients with corneas that make a mechanical microkeratome less suitable. As with standard LASIK, candidacy depends on stable vision, adequate corneal thickness, and a comprehensive pre-operative eye examination. Recovery is generally quick, with noticeable visual improvement within a day and full stabilization over the following weeks. Many eye care centers in India offer Femto LASIK as their standard bladeless option, using femtosecond laser platforms alongside detailed corneal topography for pre-surgical planning.",
			},
			{
				name: 'SMILE LASIK Eye Surgery',
				description:
					"SMILE, or small incision lenticule extraction, is a newer form of laser vision correction that treats nearsightedness and astigmatism without creating the larger hinged flap used in traditional LASIK. Instead, a femtosecond laser is used entirely within the cornea to carve a thin, lens-shaped piece of tissue, called a lenticule, which is then removed through a very small incision, just a few millimeters wide, reshaping the cornea's curvature to correct the eye's focus. Because the procedure avoids a large surface flap, it preserves more of the cornea's structural integrity and outer nerve layer, which some patients find results in less dryness and a faster return to normal corneal sensation during recovery. The entire treatment is performed with a single laser system rather than two, and is completed in a few minutes per eye under topical anesthesia. Candidates are generally adults with stable, qualifying degrees of myopia or astigmatism, determined through a comprehensive pre-operative assessment including corneal thickness and shape mapping. Visual recovery is typically rapid, with most patients seeing clearly within a day or two. Eye centers in India increasingly offer SMILE alongside LASIK, allowing surgeons to recommend the technique best suited to each patient's corneal profile.",
			},
			{
				name: 'Contoura Laser Eye Surgery',
				description:
					"Contoura Vision, often referred to as topography-guided LASIK, is an advanced form of laser vision correction that uses detailed mapping of the cornea's surface, capturing thousands of unique data points, to guide the excimer laser in correcting not only a patient's glasses prescription but also microscopic surface irregularities specific to their eye. This individualized approach differs from conventional LASIK, which applies a more standardized correction pattern, and is intended to produce a smoother corneal surface that may improve contrast sensitivity and reduce visual disturbances such as glare or halos, particularly at night. The surgical process itself follows a similar sequence to standard LASIK, with a corneal flap created using a blade or femtosecond laser, followed by laser reshaping of the underlying tissue guided by the topographic map, and the flap repositioned to heal naturally. Candidates are generally patients with stable refractive errors, adequate corneal thickness, and, in some cases, irregular astigmatism that might not respond as well to conventional laser correction. As with other forms of LASIK, recovery is typically rapid. Eye hospitals in India offering Contoura Vision use specialized topography systems to build each patient's corneal map, allowing the treatment plan to be tailored before surgery is performed.",
			},
			{
				name: 'Corneal Cross-Linking',
				description:
					"Corneal cross-linking is a procedure designed to strengthen the cornea's internal collagen structure and halt the progression of keratoconus and other conditions that cause the cornea to gradually thin and bulge into an irregular, cone-like shape. During the standard, or Epi-off, technique, the thin outer layer of the cornea is gently removed, riboflavin, or vitamin B2, eye drops are applied to saturate the corneal tissue, and the eye is then exposed to a controlled dose of ultraviolet-A light, which triggers a chemical reaction that creates new molecular bonds between collagen fibers, increasing the cornea's rigidity. A newer variation, Epi-on cross-linking, leaves the outer layer intact, which can shorten recovery time though it may be less effective in certain cases. The procedure is typically recommended once progressive thinning has been confirmed through repeated corneal mapping, most often in younger patients whose keratoconus is still advancing, with the goal of preventing further deterioration rather than reversing existing damage. Recovery from the standard technique generally takes several days to a week. Eye centers in India commonly combine cross-linking with regular topography monitoring to track corneal stability before and after treatment.",
			},
			{
				name: 'Cornea Transplant',
				description:
					"A cornea transplant, or keratoplasty, replaces damaged or diseased corneal tissue with healthy donor tissue to restore vision, relieve pain, or repair the eye's surface when the cornea has become too scarred, thinned, swollen, or irregularly shaped to function properly. Depending on which corneal layers are affected, surgeons may perform a full-thickness transplant, known as penetrating keratoplasty, replacing the entire cornea, or a partial-thickness procedure that replaces only the damaged front layers, known as DALK, or the innermost layer, known as DSEK or DMEK, which generally allows for a faster recovery and lower risk of certain complications. Common reasons for needing a transplant include advanced keratoconus, corneal scarring from infection or injury, corneal swelling from endothelial disease, or failure of a previous transplant. Donor corneal tissue is matched and screened before use, and the procedure is performed under local or general anesthesia depending on the case. Recovery varies considerably by technique, ranging from several weeks for partial-thickness procedures to closer to a year for full stabilization after a full-thickness transplant, with regular monitoring needed to watch for graft rejection. Eye hospitals in India maintain eye banks and donor tissue programs to support timely access to corneal transplantation.",
			},
			{
				name: 'Keratoconus Treatment',
				description:
					"Keratoconus is a progressive eye condition in which the normally round cornea gradually thins and bulges outward into a cone-like shape, distorting vision and causing increasing nearsightedness and irregular astigmatism that is often difficult to correct fully with regular glasses. Treatment approaches depend on how advanced the condition is at diagnosis: in earlier stages, specialty contact lenses, such as rigid gas-permeable or scleral lenses, are often used to compensate for the irregular corneal surface and improve vision, while corneal cross-linking is used to strengthen the cornea and slow or halt further progression once thinning is confirmed to be advancing. In more advanced cases where vision cannot be adequately corrected with lenses, or the cornea has become significantly thinned, procedures such as implantation of corneal ring segments to flatten the cone shape, or, in severe cases, a corneal transplant, may be recommended. Diagnosis and monitoring rely heavily on corneal topography, which maps the surface shape of the eye over time to detect progression. Because keratoconus often develops during the teenage or young adult years, regular monitoring is important. Eye centers in India typically offer the full spectrum of keratoconus management, from specialty lens fitting to cross-linking and transplant surgery, under one roof.",
			},
			{
				name: 'Astigmatism Surgery',
				description:
					"Astigmatism is a common refractive condition in which an irregularly curved cornea, or sometimes lens, causes light to focus at multiple points rather than a single point on the retina, resulting in blurred or distorted vision at both near and far distances. Surgical correction most often involves laser vision correction techniques such as LASIK, SMILE, or topography-guided procedures, which reshape the cornea's surface to create a more uniform curvature that focuses light correctly, using an excimer or femtosecond laser guided by detailed measurements of the eye's specific astigmatic pattern. For patients undergoing cataract surgery, astigmatism can also be addressed at the same time through the use of a toric intraocular lens, which is designed with additional correcting power aligned to the axis of the astigmatism, or through small limbal relaxing incisions made in the cornea. The right approach depends on the degree and type of astigmatism, corneal thickness, and whether the patient also needs correction for nearsightedness or farsightedness or has any coexisting eye conditions such as keratoconus. A comprehensive pre-operative evaluation, including corneal mapping, is used to determine candidacy and plan the correction. Eye centers in India offer this full range of laser and lens-based options for correcting astigmatism.",
			},
			{
				name: 'Glaucoma Treatment',
				description:
					"Glaucoma refers to a group of eye conditions that damage the optic nerve, most often due to elevated pressure inside the eye, gradually affecting peripheral vision and, if untreated, potentially leading to permanent vision loss. Because early glaucoma often causes no noticeable symptoms, it is typically detected through routine eye exams measuring intraocular pressure, examining the optic nerve, and testing the visual field. Treatment generally begins with prescription eye drops that either reduce the amount of fluid the eye produces or improve its drainage, and many patients manage the condition long-term with medication alone. When drops are insufficient or not well tolerated, laser procedures such as selective laser trabeculoplasty can improve the eye's natural drainage, while more advanced or resistant cases may require surgical intervention, including trabeculectomy, drainage implant devices, or newer minimally invasive glaucoma surgery techniques designed to lower eye pressure with less tissue disruption. The specific approach depends on the type and severity of glaucoma, how well pressure responds to less invasive measures, and the patient's overall eye health. Eye centers in India offer this full spectrum of glaucoma management, from medical therapy through laser and surgical options, alongside long-term monitoring of optic nerve health.",
			},
			{
				name: 'Retinal Detachment Surgery',
				description:
					"Retinal detachment occurs when the light-sensitive retina at the back of the eye separates from the underlying tissue that supplies it with oxygen and nutrients, a serious condition that can cause permanent vision loss if not treated promptly. Patients often notice sudden flashes of light, a rapid increase in floaters, or a shadow or curtain moving across their field of vision, and urgent evaluation is generally recommended when these symptoms appear. Surgical repair options depend on the type, location, and severity of the detachment: pneumatic retinopexy involves injecting a gas bubble into the eye to help reposition the retina, scleral buckling involves placing a flexible band around the outside of the eye to relieve the pulling that caused the detachment, and vitrectomy involves removing the gel-like vitreous humor from inside the eye and replacing it with a gas or silicone oil bubble to hold the retina in place while it heals. In many cases, a combination of these techniques is used. Recovery can involve maintaining a specific head position for a period after surgery, particularly when a gas bubble is used. Eye hospitals in India are generally equipped to manage retinal detachment as a time-sensitive surgical emergency.",
			},
			{
				name: 'Diabetic Retinopathy Treatment',
				description:
					"Diabetic retinopathy is damage to the blood vessels of the retina caused by prolonged high blood sugar levels, which can lead to leaking, swelling, or abnormal new blood vessel growth that threatens vision if left unmanaged. Regular dilated eye examinations are important for patients with diabetes since early-stage retinopathy often has no noticeable symptoms, and detecting changes early allows treatment to begin before significant vision loss occurs. Treatment approaches depend on severity and the specific complications present: laser photocoagulation is used to seal leaking blood vessels or shrink abnormal vessel growth, intravitreal injections of anti-VEGF medication are used to reduce swelling in the macula and slow abnormal vessel formation, and in more advanced cases involving bleeding into the vitreous or retinal detachment, a vitrectomy may be required to remove blood and scar tissue and restore the retina's normal position. Alongside eye-specific treatment, careful management of blood sugar, blood pressure, and cholesterol levels remains essential to slowing disease progression. Because diabetic retinopathy can progress silently, ongoing monitoring is typically recommended even after treatment. Eye centers in India commonly offer integrated diabetic eye care, combining retinal imaging, laser treatment, and injection therapy for patients managing this condition.",
			},
			{
				name: 'Vitreoretinal Surgery',
				description:
					"Vitreoretinal surgery refers to a group of procedures performed on the vitreous humor, the gel-like substance filling the eye, and the retina at the back of the eye, used to treat a range of conditions including retinal detachment, macular holes, epiretinal membranes, diabetic eye disease, and vitreous hemorrhage. The core technique, vitrectomy, involves making tiny incisions in the eye through which specialized micro-instruments remove the vitreous gel, allowing the surgeon direct access to repair or treat the retina, whether by peeling scar tissue, sealing a macular hole, addressing bleeding, or repositioning a detached retina; the vitreous cavity is then refilled with a saline solution, gas bubble, or, in more complex cases, silicone oil to help support healing. These procedures are typically performed using small-gauge, minimally invasive instruments that reduce the need for stitches and can shorten recovery time compared with older techniques. Patients requiring vitreoretinal surgery are often referred by a general ophthalmologist after imaging such as optical coherence tomography identifies structural changes at the back of the eye. Recovery time and positioning requirements afterward vary depending on the specific procedure performed. Eye hospitals in India generally have dedicated vitreoretinal units equipped with advanced imaging and micro-incision surgical systems.",
			},
			{
				name: 'Retinitis Pigmentosa Treatment',
				description:
					"Retinitis pigmentosa is a group of inherited genetic disorders that cause the light-sensitive cells of the retina to gradually break down over time, typically leading to progressive night blindness and a narrowing of peripheral vision that can, in advanced cases, affect central vision as well. Because it is a genetic condition, there is currently no cure that reverses existing retinal cell loss, and management instead focuses on slowing progression, supporting remaining vision, and monitoring for treatable complications such as cataracts or swelling of the macula, both of which are more common in patients with this condition and can sometimes be addressed surgically or medically to improve functional vision. Some patients may be candidates for gene-specific therapies where an identifiable genetic mutation is treatable, and genetic testing and counseling are often recommended to clarify the specific type of retinitis pigmentosa involved and inform family planning. Low-vision aids, orientation training, and nutritional guidance, including certain vitamin supplementation under medical supervision, are commonly part of a long-term care plan. Regular retinal imaging and visual field testing help track changes over time. Eye centers in India offering retinitis pigmentosa care typically combine genetic counseling, retinal imaging, and low-vision support services for affected patients.",
			},
			{
				name: 'Squint Surgery',
				description:
					"Squint, or strabismus, is a condition in which the eyes are not properly aligned with each other, with one eye turning inward, outward, upward, or downward relative to the other, which can affect depth perception, cause double vision, or, particularly in children, lead to reduced vision in the misaligned eye if not corrected. Non-surgical treatments such as corrective glasses, prism lenses, or vision therapy exercises are often tried first, particularly in milder cases or those caused by uncorrected refractive error, but surgery is generally recommended when misalignment is significant or does not respond adequately to these measures. Squint surgery involves adjusting the tension or position of one or more of the small muscles that control eye movement, either tightening, loosening, or repositioning them, to bring the eyes into better alignment, and is typically performed under general anesthesia in children and local or general anesthesia in adults. The procedure usually takes under an hour, with most patients returning to normal activities within a few days, though full realignment and comfort may take longer to settle. In some cases more than one surgery is needed to achieve the desired alignment. Eye hospitals in India routinely perform squint surgery in both pediatric and adult patients.",
			},
			{
				name: 'Corneal Abrasion Treatment',
				description:
					"A corneal abrasion is a scratch or superficial injury to the clear, protective outer layer of the cornea, commonly caused by a foreign object such as dust, sand, or a fingernail, contact lens misuse, or minor trauma to the eye, and typically causes pain, redness, light sensitivity, tearing, and a sensation of something being in the eye. Diagnosis usually involves examining the eye with a slit lamp after applying a fluorescein dye, which highlights the damaged area of the corneal surface under blue light, allowing the extent of the injury to be assessed and any embedded foreign material to be identified and removed. Treatment typically focuses on preventing infection and supporting natural healing, which for most minor abrasions occurs within one to three days, using antibiotic eye drops or ointment, lubricating drops to ease discomfort, and sometimes a short course of pain relief; contact lens wear is generally paused until the eye has fully healed. Larger or deeper abrasions, or those that do not heal as expected, may require closer follow-up to rule out infection or complications. Eye clinics in India are well equipped to assess and manage corneal abrasions promptly, which is important for reducing the risk of complications such as infection.",
			},
			{
				name: 'Optic Nerve Disorders',
				description:
					"Optic nerve disorders encompass a range of conditions affecting the nerve that carries visual information from the eye to the brain, including inflammation, compression, reduced blood supply, or degeneration, any of which can cause vision loss, blurred or dimmed vision, reduced color perception, or visual field defects depending on which part of the nerve is affected. Diagnosis typically involves a detailed neuro-ophthalmic examination, assessment of pupil responses, visual field testing, and imaging of the optic nerve using optical coherence tomography, sometimes alongside MRI scanning to check for compression from a tumor or other structural cause, or blood tests to investigate inflammatory or vascular causes. Treatment depends heavily on the underlying cause: inflammatory conditions may be treated with corticosteroids, compressive causes may require surgical intervention to relieve pressure on the nerve, and vascular causes are managed alongside control of underlying risk factors such as blood pressure and cholesterol. Because optic nerve damage can be permanent if the underlying cause is not addressed promptly, timely evaluation is important when new visual symptoms appear. Eye centers in India offering neuro-ophthalmology services typically coordinate closely with neurology to investigate and manage the full range of optic nerve disorders.",
			},
			{
				name: 'Optic Nerve Atrophy Treatment',
				description:
					"Optic nerve atrophy refers to the degeneration or loss of the nerve fibers that transmit visual signals from the retina to the brain, resulting in progressive, and often permanent, vision loss, reduced color perception, and diminished pupil response that varies depending on the extent and cause of the damage. It can result from a wide range of underlying causes, including prolonged elevated eye pressure from glaucoma, reduced blood flow to the optic nerve, compression from a tumor or swelling, inherited genetic conditions, inflammation, or trauma, which makes identifying the underlying cause through detailed examination, imaging, and sometimes blood or genetic testing an essential first step in management. Because damaged optic nerve fibers generally do not regenerate, treatment focuses primarily on halting further damage by addressing the underlying cause, for example lowering eye pressure in glaucoma-related cases or treating an inflammatory or compressive condition, rather than reversing vision already lost. Supportive measures such as low-vision rehabilitation, magnification aids, and orientation training can help patients make the most of remaining vision. Ongoing monitoring with visual field testing and optical coherence tomography helps track stability over time. Eye centers in India typically combine neuro-ophthalmology assessment with supportive low-vision services for patients with optic nerve atrophy.",
			},
			{
				name: 'Optic Neuritis Treatment',
				description:
					"Optic neuritis is inflammation of the optic nerve that typically causes sudden vision loss or blurring in one eye, often accompanied by pain that worsens with eye movement and reduced color perception, and most commonly affects younger adults. It can occur on its own or as an early sign of an underlying demyelinating condition such as multiple sclerosis, which is why diagnosis usually involves a detailed neurological and ophthalmic examination, visual field testing, and an MRI scan of the brain and optic nerves to look for other areas of inflammation or damage that might indicate a broader underlying condition. Blood tests may also be used to rule out other inflammatory or infectious causes. In many cases, vision recovers substantially on its own over several weeks, but treatment with intravenous corticosteroids is often used to speed up visual recovery, particularly in more severe cases, and in patients found to have an underlying demyelinating condition, additional long-term therapy may be recommended to reduce the risk of future episodes. Ongoing follow-up with both neurology and ophthalmology is typically recommended after an episode. Eye centers in India managing optic neuritis usually coordinate closely with neurology departments to investigate and treat any underlying systemic cause.",
			},
		],
		benefits: [
			'Bladeless, laser-assisted cataract surgery',
			'Same-day discharge for most procedures',
			'High-volume centers with deep surgical expertise',
			'Premium intraocular lens options available',
		],
		flagshipProcedure: 'Cataract Surgery (Phacoemulsification)',
		packagePrice: 700,
		totalTripDays: 7,
		stayDuration: {
			patient: { icuDays: 0, roomDays: 0, totalDays: 0 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 3,500 – 5,000 per eye', waitTime: '2–4 weeks', successRate: '98–99%' },
			{ country: 'UK', cost: 'USD 2,500 – 4,000 per eye', waitTime: '8–18 weeks (NHS)', successRate: '98–99%' },
			{ country: 'Germany', cost: 'USD 2,000 – 3,500 per eye', waitTime: '2–4 weeks', successRate: '97–99%' },
			{ country: 'Thailand', cost: 'USD 1,200 – 2,000 per eye', waitTime: '1–2 weeks', successRate: '97–98%' },
			{ country: 'India', cost: 'USD 700 – 1,200 per eye', waitTime: '2–4 days', successRate: '98%+', highlight: true },
		],
		inclusions: [
			'Pre-operative eye evaluation including biometry and fitness check',
			"Surgeon's fee for bladeless, laser-assisted cataract surgery",
			'Standard monofocal intraocular lens (IOL)',
			'Operation theatre and sterile procedure charges',
			'Same-day discharge with post-operative eye drops',
			'One follow-up visit to confirm healing and vision correction',
		],
		exclusions: [
			'Premium IOL upgrades (multifocal or toric lenses) beyond the standard monofocal lens',
			'Treatment for unrelated eye conditions such as glaucoma or retina disease found during evaluation',
			'Second-eye surgery unless quoted together as a package',
			'Follow-up visits beyond the one included check-up',
			'Spectacles or contact lenses after the procedure',
		],
		faqs: [
			{
				question: 'What is the cost of cataract surgery in India?',
				answer:
					'Cataract surgery in India starts from USD 700 per eye, around 80% less than in the US, and includes the pre-op evaluation, laser-assisted surgery, a standard IOL, and one follow-up visit.',
			},
			{
				question: 'Is the surgery painless and quick?',
				answer:
					'Yes, modern bladeless, laser-assisted cataract surgery typically takes 15–20 minutes per eye under local anesthesia, with most patients discharged the same day.',
			},
			{
				question: 'Can I choose a premium lens (multifocal or toric)?',
				answer:
					'Yes, premium intraocular lens options are available for patients who want reduced dependence on glasses after surgery — these are quoted separately from the standard monofocal lens.',
			},
			{
				question: 'How long should I plan to stay in India?',
				answer:
					'Most cataract patients plan for about 4–7 days in India to allow for the pre-op evaluation, surgery, and a follow-up visit before flying home; LASIK follows a similar short timeline.',
			},
			{
				question: 'Is LASIK available for both eyes in one visit?',
				answer:
					'Yes, LASIK and other refractive procedures are typically performed on both eyes in a single same-day visit for suitable candidates, following a detailed pre-operative assessment.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your recent eye prescription or any existing reports through our contact form, and our eye care coordinator will arrange a specialist review and transparent quote within 24 hours.',
			},
		],
	},
	{
		slug: 'ent-care',
		name: 'ENT (Ear, Nose & Throat)',
		icon: 'earNoseThroat',
		theme: 'green',
		shortDescription: 'Cochlear implants, sinus surgery, and hearing restoration using advanced endoscopic techniques.',
		overview:
			"India's ENT centers combine microsurgical expertise in cochlear implantation with advanced endoscopic sinus and airway surgery, giving international patients — including children needing early hearing intervention — access to specialized care without the long waitlists common for cochlear implant programs abroad.",
		startingPrice: 600,
		avgSavings: 82,
		hospitalsCount: 40,
		procedures: ['Cochlear Implants', 'Sinus Surgery', 'Tonsillectomy'],
		allProcedures: [
			'Cochlear Implant Surgery',
			'Hearing Loss Treatment',
			'Tympanoplasty (Eardrum Repair)',
			'Sinus Surgery (FESS)',
			'Nasal Polyp Surgery',
			'Nasal Septum Surgery (Septoplasty)',
			'Adenoid Surgery',
			'Tonsillitis Treatment (Tonsillectomy)',
			'Thyroid Gland Surgery',
			'Endocrine Gland Surgery',
		],
		detailedProcedures: [
			{
				name: 'Cochlear Implant Surgery',
				description:
					"A cochlear implant is an electronic device surgically implanted to provide a sense of sound to people with severe to profound hearing loss who no longer benefit sufficiently from conventional hearing aids. Unlike a hearing aid, which amplifies sound, a cochlear implant bypasses the damaged part of the inner ear and directly stimulates the auditory nerve using electrical signals. The device consists of an external processor worn behind the ear, which captures and digitizes sound, and an internal receiver and electrode array that a surgeon places into the cochlea during a procedure performed under general anesthesia, typically taking two to three hours. Candidates undergo detailed hearing assessments, inner-ear imaging, and counseling beforehand, as outcomes depend on factors such as age at implantation and duration of hearing loss. After a short hospital stay, the external device is fitted and activated several weeks after surgery, followed by auditory rehabilitation and mapping sessions to fine-tune the processor's settings. India's ENT and cochlear implant centers treat both children and adults, with programs experienced in pediatric implantation for congenital hearing loss. International patients should plan for an initial visit for surgery and a return visit some weeks later for activation and programming.",
			},
			{
				name: 'Hearing Loss Treatment',
				description:
					"Hearing loss treatment covers a range of approaches tailored to the type, severity, and cause of a patient's hearing impairment, determined through audiometric testing and a clinical ENT examination. Conductive hearing loss, caused by problems in the outer or middle ear such as fluid, earwax blockage, or a damaged eardrum or ossicles, may be treated medically or with surgery such as eardrum repair or ossicular reconstruction. Sensorineural hearing loss, caused by damage to the inner ear or auditory nerve, is more often managed with hearing aids that amplify sound, or with cochlear implants in cases of severe to profound loss where hearing aids are no longer effective. Evaluation typically includes a hearing test, examination of the ear canal and eardrum, and sometimes imaging to identify the underlying cause. Treatment plans are individualized, and for many patients a combination of approaches, such as addressing a treatable cause alongside amplification, gives the best results. India's ENT and audiology centers offer comprehensive hearing assessment along with the full range of surgical and device-based treatment options in one setting. International patients typically begin with a detailed hearing evaluation, after which the specialist recommends a treatment path and expected length of stay.",
			},
			{
				name: 'Tympanoplasty (Eardrum Repair)',
				description:
					"Tympanoplasty is a surgical procedure to repair a perforated or damaged eardrum, most often caused by chronic ear infections, trauma, or a previous injury, which can lead to hearing loss and recurrent infections if left untreated. The surgeon typically uses a small graft of the patient's own tissue, often taken from beneath the skin near the ear or from cartilage, to patch the hole and restore the eardrum's ability to vibrate and transmit sound. Depending on the extent of damage, the procedure may also involve repairing the tiny middle ear bones if they have been affected by infection or disease. Tympanoplasty is usually performed under local or general anesthesia through the ear canal or a small incision behind the ear, and typically takes one to two hours. Most patients go home the same day or after a short overnight stay, with ear drops prescribed and precautions to keep the ear dry while it heals over the following weeks. India's ENT surgical centers perform tympanoplasty routinely using microscopic or endoscopic ear surgery techniques for precise, minimally invasive repair. International patients typically need about one to two weeks in India to allow for the procedure and an initial post-operative check before travel.",
			},
			{
				name: 'Sinus Surgery (FESS)',
				description:
					"Functional endoscopic sinus surgery, or FESS, is a minimally invasive procedure used to treat chronic sinusitis, nasal polyps, and other sinus conditions that have not responded adequately to medical treatment such as antibiotics, nasal steroids, or saline irrigation. Using a thin endoscope with a camera and light inserted through the nostrils, the surgeon identifies and removes blockages, diseased tissue, or polyps obstructing the sinus openings, widening the natural drainage pathways so the sinuses can ventilate and drain normally, without any external incisions. The procedure is typically performed under general anesthesia and takes one to two hours depending on how many sinuses are involved, often guided by CT imaging taken beforehand to map the patient's individual sinus anatomy. Most patients go home the same day or after an overnight stay, with temporary nasal packing removed within the first week and a period of nasal irrigation to support healing. India's ENT centers perform FESS routinely using high-definition endoscopic equipment and, in some cases, image-guided navigation for complex or revision cases. International patients typically plan for about one to two weeks to allow for the procedure and an early follow-up visit before traveling home.",
			},
			{
				name: 'Nasal Polyp Surgery',
				description:
					"Nasal polyp surgery removes soft, non-cancerous growths that develop in the lining of the nose or sinuses, which can cause nasal blockage, loss of smell, facial pressure, and recurrent sinus infections when large enough to obstruct airflow and drainage. Polyps are often linked to chronic inflammation, allergies, or asthma, and while small polyps may initially be managed with nasal steroid sprays, surgery is recommended when polyps are large or medical treatment has not adequately controlled symptoms. The procedure is usually performed endoscopically, using a thin camera passed through the nostrils to visualize and remove the polyps along with any associated sinus disease, without external cuts. It is typically done under general anesthesia and takes around thirty minutes to an hour, often combined with broader sinus surgery if the polyps involve multiple sinus cavities. Most patients go home the same day or after a short stay, with saline irrigation and follow-up steroid treatment used afterward to reduce the chance of polyps returning, since recurrence is common without ongoing management. India's ENT centers combine endoscopic polyp removal with allergy and sinus disease management, and international patients typically plan for about a week to cover surgery and an initial follow-up review.",
			},
			{
				name: 'Nasal Septum Surgery (Septoplasty)',
				description:
					"Septoplasty is a surgical procedure to correct a deviated nasal septum, the thin wall of cartilage and bone dividing the two nostrils, when it is bent or displaced enough to cause nasal obstruction, breathing difficulty, recurrent sinus infections, or disrupted sleep. A deviated septum may be present from birth or result from an injury to the nose. During the procedure, performed under local or general anesthesia through incisions made inside the nose with no visible external scarring, the surgeon straightens the septum by trimming, repositioning, or removing the cartilage and bone causing obstruction, while preserving enough structural support to maintain the shape of the nose. The operation typically takes thirty minutes to an hour, and most patients go home the same day or after a short overnight stay, sometimes with temporary internal splints to support healing. Improvement in nasal breathing is usually noticeable within a few weeks as post-operative swelling subsides. India's ENT surgeons perform septoplasty routinely, often combining it with sinus surgery or turbinate reduction when needed for a complete breathing correction. International patients typically plan for about one to two weeks to allow for the procedure and a follow-up check before traveling home.",
			},
			{
				name: 'Adenoid Surgery',
				description:
					"Adenoid surgery, or adenoidectomy, is the surgical removal of the adenoids, a patch of lymphoid tissue at the back of the nasal cavity that can become chronically enlarged or infected, most commonly in children. Enlarged adenoids can obstruct the airway behind the nose, leading to persistent nasal blockage, mouth breathing, snoring, recurrent ear infections from blocked middle-ear drainage, and in some cases disrupted sleep. The procedure is performed under general anesthesia through the mouth, without any external incision, using instruments or a microdebrider to remove the adenoid tissue, typically taking fifteen to thirty minutes. It is often performed alongside tonsillectomy when both the tonsils and adenoids are enlarged and causing symptoms together. Most children go home the same day or after a short overnight observation, with a few days of mild throat or ear discomfort and a soft diet recommended during initial healing. Improvement in nasal breathing, snoring, and recurrent ear infections is usually noticeable within a few weeks. India's pediatric ENT surgeons perform adenoidectomy routinely, often coordinating it with tonsillectomy in a single anesthetic when appropriate. International families typically plan for about a week in India to allow for the procedure and a brief follow-up review before travel home.",
			},
			{
				name: 'Tonsillitis Treatment (Tonsillectomy)',
				description:
					"Tonsillectomy is the surgical removal of the tonsils, two oval-shaped pads of lymphoid tissue at the back of the throat, and is generally recommended for patients with recurrent or chronic tonsillitis that has not responded to medical treatment, or for tonsils enlarged enough to cause breathing or swallowing difficulty and disrupted sleep. The procedure is performed under general anesthesia through the mouth, with no external incision, using techniques such as traditional dissection, electrocautery, or coblation to remove the tonsil tissue while controlling bleeding from the tonsil bed. It typically takes thirty minutes to an hour, and most patients, whether children or adults, go home the same day or after an overnight stay for observation. Recovery involves a period of sore throat and discomfort with swallowing lasting one to two weeks, during which a soft diet, hydration, and pain management support healing and reduce the risk of bleeding. India's ENT centers perform tonsillectomy routinely for both recurrent tonsillitis and airway-related indications, using modern techniques aimed at minimizing bleeding and postoperative pain. International patients typically plan for about one to two weeks in India to allow for the procedure and monitoring through the higher-risk early healing period before traveling home.",
			},
			{
				name: 'Thyroid Gland Surgery',
				description:
					"Thyroid surgery, or thyroidectomy, involves the surgical removal of part or all of the thyroid gland, the butterfly-shaped gland in the neck that regulates metabolism through hormone production. It is commonly performed for thyroid nodules suspicious for or confirmed to be cancer, large goiters causing compression of the windpipe or swallowing difficulty, overactive thyroid conditions not adequately controlled by medication or radioactive iodine, or nodules that cannot be clearly diagnosed without removing tissue for examination. Depending on the condition, the surgeon may remove just one lobe or the entire gland, performed under general anesthesia through an incision in the lower neck, typically taking one to three hours, with careful technique used to protect the nearby nerves controlling the voice box and the small parathyroid glands that regulate calcium. Most patients stay in hospital for one to two days for monitoring of calcium levels and voice function before discharge. Patients who have the entire thyroid removed require lifelong thyroid hormone replacement medication. India's endocrine surgery centers perform thyroidectomy routinely, often supported by ultrasound-guided biopsy and pathology services for pre-operative diagnosis. International patients typically plan for about one to two weeks to cover surgery, monitoring, and initial follow-up before travel home.",
			},
			{
				name: 'Endocrine Gland Surgery',
				description:
					"Endocrine gland surgery refers to operations performed on the body's hormone-producing glands, most commonly the thyroid, parathyroid, and adrenal glands, when a gland is overactive, enlarged, or affected by a tumor not adequately managed with medication alone. The approach depends on the gland involved: parathyroid surgery removes one or more overactive parathyroid glands to correct abnormally high calcium levels, adrenal surgery removes part or all of an adrenal gland affected by a hormone-secreting or suspicious tumor, often using minimally invasive laparoscopic techniques, and thyroid surgery removes part or all of the thyroid for nodules, goiters, or cancer. Diagnosis typically relies on blood hormone testing, imaging such as ultrasound or CT, and sometimes nuclear medicine scans to localize the abnormal gland before surgery. Most procedures are performed under general anesthesia and require careful technique to preserve nearby nerves and normal glandular tissue where possible. Hospital stays range from one to a few days depending on the gland and extent of surgery, and some patients require lifelong hormone replacement afterward. India's endocrine surgery centers offer coordinated care between endocrinologists and surgeons for accurate diagnosis and planning. International patients typically plan for one to two weeks to allow for evaluation, surgery, and post-operative hormone level checks.",
			},
		],
		benefits: [
			'ENT surgeons experienced in pediatric and adult cochlear implantation',
			'Access to leading cochlear implant brands (Cochlear, MED-EL, Advanced Bionics)',
			'Dedicated audiology team for device programming and follow-up mapping',
			'Endoscopic, minimally invasive techniques for sinus and nasal procedures',
		],
		flagshipProcedure: 'Cochlear Implant Surgery',
		packagePrice: 9000,
		totalTripDays: 14,
		stayDuration: {
			patient: { icuDays: 0, roomDays: 2, totalDays: 2 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 30,000 – 50,000', waitTime: '4–8 weeks', successRate: '90–95%' },
			{ country: 'UK', cost: 'USD 25,000 – 40,000', waitTime: '6–18 months (NHS)', successRate: '90–95%' },
			{ country: 'Germany', cost: 'USD 22,000 – 35,000', waitTime: '4–8 weeks', successRate: '89–94%' },
			{ country: 'Thailand', cost: 'USD 12,000 – 18,000', waitTime: '2–4 weeks', successRate: '88–92%' },
			{ country: 'India', cost: 'USD 9,000 – 13,000', waitTime: '1–2 weeks', successRate: '90%+', highlight: true },
		],
		inclusions: [
			'Pre-operative audiological assessment and imaging (CT/MRI) review',
			"Surgeon's and anesthetist's fees for the implant surgery",
			'Standard cochlear implant device and internal processor',
			'Operation theatre charges and 2 days of hospital stay',
			'Initial device activation and mapping session with the audiology team',
			'Discharge summary with a structured auditory rehabilitation plan',
		],
		exclusions: [
			'Premium or upgraded external processor models beyond the standard device',
			'Ongoing speech and auditory rehabilitation sessions beyond the initial mapping',
			'Bilateral (both-ear) implantation unless quoted together',
			'Hospital stay beyond the package duration',
			'Treatment for unrelated conditions identified during pre-op screening',
			'Revision surgery for complications unrelated to the original procedure',
		],
		faqs: [
			{
				question: 'What is the cost of a cochlear implant in India?',
				answer:
					'A cochlear implant package in India starts from USD 9,000, around 70–80% less than in the US, and includes the pre-op assessment, surgery, standard device, hospital stay, and initial mapping session.',
			},
			{
				question: 'Is a cochlear implant suitable for children?',
				answer:
					"Yes, cochlear implantation is commonly performed in young children with severe hearing loss, and earlier implantation generally supports better speech and language development — our ENT team will confirm candidacy after reviewing your child's audiology reports.",
			},
			{
				question: 'How long is the hospital stay and recovery?',
				answer:
					'Most patients stay about 2 days in hospital, with device activation typically done 2–4 weeks after surgery once initial healing is complete — many families plan a longer stay in India to complete the first mapping session before flying home.',
			},
			{
				question: 'Can both ears be treated in one trip?',
				answer:
					'Yes, bilateral cochlear implantation or combined sinus and hearing procedures can often be planned in a single trip for suitable candidates — this is quoted separately from a single-ear package.',
			},
			{
				question: 'Is sinus surgery done endoscopically?',
				answer:
					'Yes, functional endoscopic sinus surgery (FESS) is standard at our partner hospitals, which typically means no external incisions and a faster recovery than open surgery.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your audiology reports, imaging, or a description of your symptoms through our contact form, and our ENT coordinator will arrange a specialist review and transparent quote within 24 hours.',
			},
		],
	},
	{
		slug: 'neurology',
		name: 'Neurology & Neurosurgery',
		icon: 'brain',
		imageKey: 'neurology',
		theme: 'blue',
		shortDescription: 'Brain, spine, and nerve specialists treating tumors, stroke, and complex neurological disorders.',
		overview:
			"India's neurosurgery centers combine microsurgical and image-guided techniques with dedicated neuro-ICUs, giving international patients access to advanced brain tumor and stroke care without the long specialist waitlists common abroad.",
		startingPrice: 9000,
		avgSavings: 88,
		hospitalsCount: 65,
		procedures: ['Brain Tumor Surgery', 'Epilepsy Surgery', 'Stroke Care'],
		allProcedures: [
			'Brain Tumor Surgery',
			'Brain Cancer Treatment',
			'Pituitary Tumor Surgery',
			'Endoscopic Brain Surgery',
			'Brain Aneurysm Treatment',
			'Brain Stroke Management',
			'Epilepsy Treatment',
			'Gamma Knife Surgery',
			'CyberKnife Radiation Treatment',
			'Stereotactic Radiosurgery',
			'Deep Brain Stimulation',
			'Cortical Stimulation Surgery',
			"Parkinson's Disease Treatment",
			'Vagus Nerve Stimulation (VNS)',
			'Peripheral Nerve Surgery',
			'Neuritis Treatment',
			'Schizophrenia Treatment',
			'Baclofen Pump Implant',
			'Morphine Pump Implant',
			'High Cervical Stimulation',
		],
		detailedProcedures: [
			{
				name: 'Brain Tumor Surgery',
				description:
					"Brain tumor surgery involves the surgical removal of an abnormal growth of tissue within the skull, which may be benign or malignant, and is performed when a tumor is causing symptoms such as headaches, seizures, vision changes, weakness, or personality changes, or when it threatens to compress critical brain structures. The standard approach is a craniotomy, in which a section of skull is temporarily removed to give the surgeon direct access to the tumor; modern procedures rely on intraoperative neuronavigation, MRI or CT-based mapping, and sometimes awake craniotomy with real-time brain mapping to remove as much tumor as possible while protecting areas responsible for speech, movement, or sensation. Neurophysiological monitoring during the operation helps reduce the risk of new neurological deficits. Depending on the tumor type and location, surgery may be followed by radiation therapy or chemotherapy, and tissue removed during the operation is sent for pathological analysis to guide further treatment. India has a large network of neurosurgical centres offering this level of intraoperative technology, making it a practical option for international patients seeking timely, technically advanced tumor surgery. Recovery typically involves a hospital stay of several days followed by gradual rehabilitation.",
			},
			{
				name: 'Brain Cancer Treatment',
				description:
					"Brain cancer treatment refers to the coordinated management of malignant tumors arising in the brain, either primary tumors originating in brain tissue or secondary tumors that have spread from cancer elsewhere in the body. Treatment planning typically begins with detailed imaging and often a biopsy to confirm the tumor type and grade, after which a multidisciplinary team of neurosurgeons, oncologists, and radiation specialists decides on the most appropriate combination of surgery, radiation therapy, and chemotherapy or targeted drug therapy. Surgery aims to remove as much tumor tissue as safely possible without damaging surrounding healthy brain, while radiation, delivered either conventionally or through focused techniques such as stereotactic radiosurgery, targets remaining or inaccessible cells. Chemotherapy and newer targeted or immunotherapy drugs may be used depending on the tumor's molecular profile. Because brain cancer care requires close coordination between several specialists and repeated imaging, patients travelling to India for treatment benefit from centres that bring these teams together under one roof. Ongoing monitoring with follow-up scans and neurological assessments continues well after initial treatment to track response and detect any recurrence early.",
			},
			{
				name: 'Pituitary Tumor Surgery',
				description:
					"Pituitary tumor surgery removes abnormal growths on the pituitary gland, a small hormone-producing structure located at the base of the brain behind the nose, which can cause problems either by producing excess hormones or by pressing on nearby structures such as the optic nerves, leading to vision loss or hormonal imbalance. The most common technique is the endoscopic transsphenoidal approach, in which the surgeon reaches the tumor through the nasal passages and sphenoid sinus using a thin endoscope with a camera, avoiding any external incision or need to open the skull. This route allows precise visualization of the tumor while sparing the surrounding gland tissue as much as possible. Some larger or more complex tumors may require a combined approach involving both endoscopic and open techniques. After surgery, patients are monitored for hormone levels and may need short-term or long-term hormone replacement therapy depending on how much normal gland tissue remains. Recovery from the endoscopic approach is generally quicker than traditional open surgery, and India's neurosurgical centres are well equipped with the endoscopic and endocrine monitoring facilities this procedure requires.",
			},
			{
				name: 'Endoscopic Brain Surgery',
				description:
					"Endoscopic brain surgery is a minimally invasive neurosurgical technique that uses a thin, rigid or flexible endoscope fitted with a camera and light source to access and treat conditions deep within the brain through small openings rather than a large craniotomy. Common uses include removing certain tumors, treating hydrocephalus by creating a new pathway for cerebrospinal fluid drainage, draining cysts, and accessing the pituitary gland through the nose. The surgeon guides the endoscope through narrow natural corridors or a small bone opening while viewing magnified, high-resolution images on a monitor, allowing precise instrument manipulation with minimal disturbance to surrounding brain tissue. Because the incisions and bone removal involved are much smaller than in conventional open surgery, patients generally experience less postoperative pain, reduced blood loss, and a shorter hospital stay. Not every brain condition is suitable for an endoscopic approach, and the decision depends on the size, location, and nature of the lesion. India's larger neurosurgical centres offer this technology alongside the imaging and neuro-anesthesia support it requires, making it accessible to patients travelling from abroad for advanced, less invasive care.",
			},
			{
				name: 'Brain Aneurysm Treatment',
				description:
					"A brain aneurysm is a weakened, bulging area in the wall of a blood vessel within the brain that carries a risk of rupture and life-threatening bleeding, and treatment aims to seal off the aneurysm from normal blood circulation before this happens or after it has occurred. Two main approaches are used: microsurgical clipping, in which the surgeon opens the skull and places a small metal clip across the base of the aneurysm to stop blood flow into it, and endovascular coiling, a catheter-based technique in which soft platinum coils or a stent-assisted device are threaded through the blood vessels from the groin or wrist up to the aneurysm to pack it and promote clotting. The choice between the two depends on the aneurysm's size, shape, and location, as well as the patient's overall health. Endovascular treatment is less invasive and often allows a faster recovery, while clipping may be preferred for certain complex aneurysms. Both approaches require advanced imaging such as CT or catheter angiography for planning, and India's specialist neurovascular centres provide both surgical and endovascular options along with the intensive monitoring needed afterward.",
			},
			{
				name: 'Brain Stroke Management',
				description:
					"Brain stroke management covers the urgent diagnosis and treatment of a stroke, which occurs either when a blood clot blocks an artery supplying the brain, known as an ischemic stroke, or when a blood vessel in the brain ruptures and bleeds, known as a hemorrhagic stroke. Because brain tissue is highly time-sensitive to loss of blood supply, initial management focuses on rapid imaging, usually CT or MRI, to identify the stroke type and extent, followed by treatment such as clot-dissolving medication or mechanical thrombectomy, a catheter-based procedure to physically remove the clot, for ischemic strokes, or surgical or endovascular intervention to control bleeding and reduce pressure in hemorrhagic strokes. Patients are typically cared for in a dedicated stroke unit or neuro-intensive care setting where blood pressure, oxygen levels, and neurological status are closely monitored. Once the patient is stable, rehabilitation involving physiotherapy, occupational therapy, and speech therapy becomes central to recovering lost function. India's larger hospitals maintain round-the-clock stroke response teams and neuro-critical care units, which matters for both resident and travelling patients who need this care delivered within a narrow treatment window.",
			},
			{
				name: 'Epilepsy Treatment',
				description:
					"Epilepsy treatment addresses a neurological condition characterized by recurrent, unprovoked seizures caused by abnormal electrical activity in the brain, and management begins with identifying seizure type and frequency through clinical history, EEG recordings, and imaging such as MRI to look for an underlying structural cause. Most patients are first treated with one or more anti-seizure medications, adjusted over time to achieve seizure control with minimal side effects. When seizures continue despite adequate trials of medication, patients may be evaluated for surgical options, which can include removing a small area of the brain identified as the seizure focus, or implanting a device such as a vagus nerve stimulator to reduce seizure frequency. Evaluation for surgery typically involves prolonged video-EEG monitoring to pinpoint where seizures originate, along with detailed imaging and neuropsychological assessment. A ketogenic diet is sometimes used as an additional option, particularly in children with drug-resistant epilepsy. India offers comprehensive epilepsy monitoring units with video-EEG telemetry and surgical programs, allowing patients with difficult-to-control seizures to undergo thorough evaluation and treatment planning in one location.",
			},
			{
				name: 'Gamma Knife Surgery',
				description:
					"Gamma Knife surgery is a form of stereotactic radiosurgery that treats brain tumors, vascular abnormalities, and certain functional brain disorders without any incision, using around two hundred precisely focused beams of gamma radiation that converge on the target from multiple angles while sparing surrounding healthy tissue. Before treatment, a lightweight stereotactic frame or mask is fitted to the patient's head to keep it perfectly still and to provide exact coordinates, after which MRI or CT imaging is used to map the target area in detail. The radiation beams are then aimed so that each individual beam carries a low dose through healthy brain tissue, while the point where they all intersect receives a concentrated therapeutic dose. Because it is non-invasive, Gamma Knife treatment is typically completed in a single outpatient session lasting a few hours, with no general anesthesia and a very short recovery time compared with open surgery. It is commonly used for small to medium brain tumors, arteriovenous malformations, and trigeminal neuralgia. India's Gamma Knife centres allow international patients to complete an entire treatment episode, from imaging to therapy, within a short visit.",
			},
			{
				name: 'CyberKnife Radiation Treatment',
				description:
					"CyberKnife is a robotic radiosurgery system used to deliver precisely targeted, high-dose radiation to tumors and other abnormal tissue in the brain and spine without cutting the skin, using a compact linear accelerator mounted on a robotic arm that can aim beams from thousands of different angles. Unlike frame-based systems, CyberKnife tracks the target's position continuously throughout treatment using built-in imaging, automatically correcting for small movements, which means no rigid head frame needs to be screwed into the skull beforehand. This makes it suitable for tumors near sensitive structures such as the brainstem or spinal cord, where a wide margin of healthy tissue cannot be sacrificed. Treatment planning uses fused MRI and CT scans to outline the target precisely, and the radiation is usually delivered over one to five outpatient sessions rather than the many weeks required by conventional radiotherapy. Each session is painless and does not require anesthesia, typically lasting under two hours, after which patients can resume normal activity. This shortened schedule is particularly convenient for patients travelling to India from overseas, since it limits the length of stay needed to complete an entire course of radiation.",
			},
			{
				name: 'Stereotactic Radiosurgery',
				description:
					"Stereotactic radiosurgery is a general term for a group of techniques, including Gamma Knife and CyberKnife systems, that deliver a highly focused dose of radiation to a precisely defined target in the brain or spine using three-dimensional coordinates; despite the name, it does not involve any actual cutting or incision. The technique relies on detailed imaging, typically MRI and CT scans fused together, to map the exact size, shape, and location of the target, whether a tumor, vascular malformation, or an area of abnormal nerve activity, and then aims multiple radiation beams from different directions so they overlap only at the target, minimizing the dose reaching surrounding healthy tissue. Because of this precision, treatment can often be completed in a single session or a small number of sessions rather than the several weeks required by conventional radiotherapy. It is commonly used for small to medium brain tumors, certain vascular abnormalities, and cases where a lesion sits close to structures that make open surgery risky. India's major radiosurgery centres offer these technologies with the imaging and physics support required for accurate planning, allowing overseas patients to complete treatment within a compact visit.",
			},
			{
				name: 'Deep Brain Stimulation',
				description:
					"Deep brain stimulation, or DBS, is a surgical treatment in which thin electrodes are implanted into specific, deep regions of the brain that regulate movement, such as the subthalamic nucleus or globus pallidus, and connected by wires under the skin to a small pulse generator placed near the collarbone, similar in concept to a cardiac pacemaker. The device delivers continuous, adjustable electrical impulses that help regulate abnormal brain activity responsible for symptoms such as tremor, rigidity, and slowness of movement. It is most commonly used for Parkinson's disease when medication alone no longer provides adequate symptom control or causes significant side effects, and is also used for essential tremor and certain forms of dystonia. The procedure is typically performed with the aid of imaging-based targeting and, in some cases, intraoperative testing to confirm accurate electrode placement before the leads are secured. Once implanted, the stimulator's settings can be adjusted externally over subsequent visits to optimize symptom control while minimizing side effects. India's movement disorder centres offer DBS with the neurophysiological monitoring and long-term programming support that patients, including those travelling from abroad, need before and after the implant.",
			},
			{
				name: 'Cortical Stimulation Surgery',
				description:
					"Cortical stimulation surgery involves placing electrodes directly on or just beneath the surface of the brain's outer layer, the cerebral cortex, to deliver controlled electrical impulses that can either modify abnormal activity or help map brain function during other procedures. In chronic pain management, electrodes are positioned over the motor cortex and connected to an implanted pulse generator to help reduce certain treatment-resistant pain conditions by altering how pain signals are processed. In epilepsy care, temporary cortical electrode grids are sometimes placed during a separate procedure to precisely map areas responsible for movement, sensation, or language before planning tumor or seizure-focus removal, reducing the risk of damaging essential brain function. Candidates for cortical stimulation are usually selected after other treatments have failed to provide adequate relief, and the decision involves careful assessment by a specialist team along with imaging to confirm accurate electrode placement. Recovery depends on the specific indication, with permanent implants requiring a period of adjustment and follow-up programming. India's neurosurgical centres performing this procedure combine intraoperative neuromonitoring with experienced surgical teams, supporting both diagnostic mapping and longer-term stimulation therapy for appropriately selected patients.",
			},
			{
				name: "Parkinson's Disease Treatment",
				description:
					"Parkinson's disease treatment focuses on managing the motor and non-motor symptoms of this progressive neurological condition, which results from the gradual loss of dopamine-producing nerve cells in a part of the brain that controls movement. In the earlier stages, treatment usually centers on medication, most commonly levodopa combined with other drugs that help regulate dopamine levels and manage symptoms such as tremor, stiffness, slowness of movement, and balance difficulties. As the disease progresses, medications may become less effective or produce fluctuations in symptom control, at which point some patients are considered for surgical options such as deep brain stimulation, where electrodes implanted in specific brain regions deliver electrical impulses to help smooth out motor symptoms. Alongside medical and surgical treatment, physiotherapy, occupational therapy, and speech therapy play an important role in maintaining mobility, daily function, and communication over time. Because Parkinson's disease affects each person differently, care is typically individualized and reviewed regularly by a neurologist familiar with movement disorders. India's neurology centres provide this combination of medical management, surgical evaluation, and supportive therapy, with the ongoing follow-up such treatment requires handled sensitively for patients and their families.",
			},
			{
				name: 'Vagus Nerve Stimulation (VNS)',
				description:
					"Vagus nerve stimulation, or VNS, is a treatment in which a small device resembling a pacemaker is implanted under the skin of the upper chest and connected by a thin wire to the vagus nerve in the neck, where it delivers mild, regular electrical pulses to help reduce the frequency and severity of seizures. It is generally considered for patients with epilepsy whose seizures have not responded adequately to anti-seizure medications and who are not good candidates for, or have not benefited from, resective brain surgery. VNS therapy has also been approved for certain cases of treatment-resistant depression. The implant procedure itself is relatively brief and is usually performed under general anesthesia, with the device positioned through two small incisions, one at the chest and one at the neck. Once activated, stimulation settings can be adjusted externally by a specialist using a handheld programmer to balance symptom control against side effects such as voice changes or throat discomfort. Because VNS is not a cure but a way to reduce seizure burden over time, ongoing follow-up is required, and India's epilepsy centres provide both the implantation procedure and the longer-term programming this therapy depends on.",
			},
			{
				name: 'Peripheral Nerve Surgery',
				description:
					"Peripheral nerve surgery treats injuries or disorders affecting the nerves that run outside the brain and spinal cord, carrying signals to and from the limbs, face, and trunk, and covers a range of procedures depending on the underlying problem. Common indications include nerve compression syndromes such as carpal tunnel or cubital tunnel syndrome, where surrounding tissue presses on a nerve and surgery involves releasing that pressure; traumatic nerve injuries from accidents or lacerations, which may require direct repair or grafting using a segment of nerve taken from elsewhere in the body; and nerve tumors, which are carefully removed while preserving as much normal nerve function as possible. Surgeons typically rely on magnification through an operating microscope and, for some cases, intraoperative nerve monitoring to guide precise repair or decompression. Recovery and the degree of functional return depend heavily on the type, location, and duration of the nerve injury, since nerves regenerate slowly and sometimes incompletely. Physical and occupational therapy after surgery supports recovery of strength and sensation. India's hand and peripheral nerve surgery units combine microsurgical expertise with structured rehabilitation programs suited to both local and travelling patients.",
			},
			{
				name: 'Neuritis Treatment',
				description:
					"Neuritis refers to inflammation of a nerve or group of nerves, which can cause pain, numbness, tingling, weakness, or loss of function in the area the affected nerve supplies, and treatment depends on identifying and addressing the underlying cause. Common causes include viral infections, autoimmune conditions, diabetes, vitamin deficiencies, prolonged pressure on a nerve, or exposure to certain toxins, and diagnosis typically involves a clinical examination alongside nerve conduction studies or electromyography to assess the extent and pattern of nerve involvement, along with blood tests to look for an underlying metabolic or autoimmune trigger. Treatment often combines medication to reduce inflammation and manage pain, correction of any underlying deficiency or metabolic imbalance, and, in autoimmune cases, therapies aimed at calming the immune response. Physical therapy may be recommended to maintain muscle strength and prevent stiffness while the nerve recovers, since nerve healing can take weeks to months depending on severity. In cases caused by ongoing compression, such as certain forms of facial or optic neuritis, more targeted intervention may be needed. India's neurology departments offer the diagnostic testing and multidisciplinary follow-up needed to manage neuritis from its early stages through recovery.",
			},
			{
				name: 'Schizophrenia Treatment',
				description:
					"Schizophrenia is a chronic psychiatric condition that affects a person's thinking, perception, and behavior, and can involve symptoms such as hallucinations, delusions, disorganized thinking, and difficulty with motivation or emotional expression; treatment is generally long-term and centered on a combination of medication and structured psychosocial support rather than a single procedure. Antipsychotic medications are typically the foundation of treatment, helping to reduce the intensity of hallucinations and delusions, with the specific medication and dose adjusted over time based on response and side effects. Alongside medication, psychotherapy, family education, and psychosocial rehabilitation programs help individuals manage symptoms, build daily living and social skills, and work toward stable functioning at home, in relationships, and where possible in employment or education. Some patients require a period of inpatient stabilization during acute episodes, particularly when symptoms pose a safety concern, followed by transition to outpatient care and community-based support. Because schizophrenia affects each person differently and often requires adjustment of treatment over time, ongoing review by a psychiatrist familiar with the condition is important. India's mental health centres offer structured psychiatric evaluation, medication management, and rehabilitation programs delivered with the sensitivity this condition requires.",
			},
			{
				name: 'Baclofen Pump Implant',
				description:
					"A baclofen pump implant is a surgically placed device that delivers the muscle relaxant baclofen directly into the fluid surrounding the spinal cord, known as the intrathecal space, to treat severe spasticity, a condition of excessive muscle stiffness and involuntary contractions that can result from cerebral palsy, spinal cord injury, multiple sclerosis, or brain injury. Because the medication is delivered directly at the spinal level rather than through the bloodstream, it can achieve effective symptom control at a much lower dose than oral baclofen, which reduces the drowsiness and other systemic side effects that often limit oral treatment. Before permanent implantation, patients typically undergo a trial dose of baclofen delivered through a temporary spinal injection to confirm that this approach will meaningfully improve their spasticity. The permanent pump, a small refillable reservoir with a programmable delivery mechanism, is implanted under the skin of the abdomen and connected to a thin catheter that threads into the intrathecal space around the spinal cord. The pump requires periodic refilling and dose adjustment at follow-up visits. India's rehabilitation and neurosurgery centres offer both the trial assessment and the implantation procedure for appropriately selected patients.",
			},
			{
				name: 'Morphine Pump Implant',
				description:
					"A morphine pump implant, also known as an intrathecal drug delivery system, is a surgically placed device that delivers small, continuous doses of morphine or another opioid pain medication directly into the fluid around the spinal cord, offering an option for patients with severe chronic pain, particularly from advanced cancer, that has not been adequately controlled by oral or other systemic pain medications. Delivering the medication directly at the spinal level allows effective pain relief with a much smaller dose than would be needed orally, which can reduce systemic side effects such as sedation and constipation that often accompany high-dose oral opioid therapy. Before permanent implantation, patients usually undergo a trial period with a temporary catheter or injection to confirm that this method of delivery provides meaningful pain relief. The implanted pump, a small reservoir with a programmable pump mechanism, sits under the skin of the abdomen and connects to a catheter placed in the intrathecal space. It requires periodic refilling through a simple needle procedure and dose adjustments based on the patient's ongoing pain levels. India's pain management and oncology-linked neurosurgery services offer this therapy as part of broader palliative and chronic pain care.",
			},
			{
				name: 'High Cervical Stimulation',
				description:
					"High cervical stimulation refers to the surgical placement of a spinal cord stimulator device at the upper level of the cervical spine, close to the base of the skull, to help manage certain chronic pain conditions affecting the head, neck, and upper limbs that have not responded to more conservative treatment. The procedure involves placing thin electrode leads in the epidural space near the spinal cord at this high cervical level, connected to a small implanted pulse generator that delivers mild electrical impulses to interfere with pain signal transmission before it reaches the brain. It is generally considered for conditions such as occipital neuralgia, certain forms of chronic headache, and complex regional or neuropathic pain syndromes involving the upper body, after other treatments have failed to give adequate relief. Most patients undergo a temporary trial with external leads first, so that both patient and physician can assess how much pain relief the stimulation provides before committing to a permanent implant. If the trial is successful, the permanent system is implanted in a subsequent procedure. India's pain management centres offer both the trial and permanent stimulation stages along with the follow-up programming this therapy requires.",
			},
		],
		benefits: [
			'Neurosurgeons trained in microsurgical and minimally invasive techniques',
			'Intraoperative MRI and neuro-navigation available at leading centers',
			'Dedicated neuro-ICU with round-the-clock critical care monitoring',
			'Structured neuro-rehabilitation support after surgery',
		],
		flagshipProcedure: 'Brain Tumor Resection',
		packagePrice: 9000,
		totalTripDays: 24,
		stayDuration: {
			patient: { icuDays: 4, roomDays: 8, totalDays: 12 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 100,000 – 180,000', waitTime: '4–8 weeks', successRate: '85–90%' },
			{ country: 'UK', cost: 'USD 45,000 – 70,000', waitTime: '3–9 months (NHS)', successRate: '85–90%' },
			{ country: 'Germany', cost: 'USD 40,000 – 60,000', waitTime: '4–8 weeks', successRate: '84–89%' },
			{ country: 'Thailand', cost: 'USD 20,000 – 30,000', waitTime: '2–4 weeks', successRate: '82–87%' },
			{ country: 'India', cost: 'USD 9,000 – 14,000', waitTime: '1–2 weeks', successRate: '85%+', highlight: true },
		],
		inclusions: [
			'Pre-operative neurological evaluation, MRI/CT review, and fitness clearance',
			"Neurosurgeon's and anesthetist's fees for the primary procedure",
			'Operation theatre charges including neuro-navigation where applicable',
			'Neuro-ICU stay (4 days) plus 8 days in a step-down room',
			'Nursing care and standard neuro-monitoring during hospitalization',
			'Laboratory and radiology charges tied to the procedure',
			'Discharge summary with a structured neuro-rehabilitation plan',
		],
		exclusions: [
			'Pre-admission stay to stabilize a patient before surgery clears for the OT',
			'Hospital or ICU stay beyond the package duration',
			'Radiotherapy or chemotherapy for malignant tumors, priced separately',
			'Outpatient neuro-rehabilitation sessions after discharge',
			'Treatment for unrelated conditions identified during pre-op screening',
			'Re-operation for complications unrelated to the original procedure',
		],
		faqs: [
			{
				question: 'What is the cost of brain tumor surgery in India?',
				answer:
					'Brain tumor resection in India starts from USD 9,000, roughly 90% less than in the US, and includes the pre-op work-up, surgery, neuro-ICU stay, and a structured rehabilitation plan.',
			},
			{
				question: 'Are minimally invasive neurosurgery techniques available?',
				answer:
					'Yes, many of our partner hospitals offer image-guided and minimally invasive approaches, including intraoperative MRI and neuro-navigation, which can improve precision and shorten recovery for eligible cases.',
			},
			{
				question: 'How long is the hospital stay for neurosurgery?',
				answer:
					'Most patients stay around 12 days in hospital — 4 days in the neuro-ICU and 8 days in a step-down room — with a total recommended stay in India of about 3–4 weeks for follow-up monitoring.',
			},
			{
				question: 'Will radiotherapy or chemotherapy be needed after surgery?',
				answer:
					'For malignant tumors, your neuro-oncology team may recommend radiotherapy or chemotherapy after surgery — these are priced separately based on your specific protocol and are discussed as part of your treatment plan.',
			},
			{
				question: 'Can I get a second opinion before traveling?',
				answer:
					'Yes, send your MRI/CT scans and reports for a free specialist review — our neurosurgery board will confirm whether surgery is recommended before you commit to travel.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your neurological reports and imaging through our contact form or WhatsApp, and a coordinator will arrange a specialist review and transparent estimate within 48 hours.',
			},
		],
	},
	{
		slug: 'spine-surgery',
		name: 'Spine Surgery',
		icon: 'spine',
		imageKey: 'spineSurgery',
		theme: 'teal',
		shortDescription: 'Spinal fusion, disc replacement, and scoliosis correction with structured rehabilitation programs.',
		overview:
			"India's spine centers pair fellowship-trained spine surgeons with minimally invasive and motion-preserving techniques, helping patients with chronic back pain, disc disease, and spinal deformity avoid long waitlists common in the West.",
		startingPrice: 6500,
		avgSavings: 85,
		hospitalsCount: 50,
		procedures: ['Spinal Fusion', 'Disc Replacement', 'Scoliosis Correction'],
		allProcedures: [
			'Lumbar Spinal Fusion Surgery',
			'Anterior Lumbar Interbody Fusion (ALIF)',
			'Cervical Disc Replacement',
			'Lumbar Discectomy',
			'Lumbar Microdiscectomy',
			'Herniated Disc Treatment',
			'Bulging Disc Treatment',
			'Cervical Laminectomy',
			'Cervical Laminoplasty',
			'Lumbar Laminectomy',
			'Foraminotomy',
			'Endoscopic Spinal Decompression',
			'Lumbar Vertebroplasty',
			'Kyphoplasty',
			'Corpectomy',
			'Scoliosis Treatment',
			'Kyphosis (Hunchback) Correction',
			'Spinal Tumor Surgery',
			'Spinal Cord Injury Treatment',
		],
		detailedProcedures: [
			{
				name: 'Lumbar Spinal Fusion Surgery',
				description:
					"Lumbar spinal fusion surgery permanently joins two or more vertebrae in the lower back into a single, solid piece of bone, eliminating movement between them to relieve pain caused by instability, abnormal motion, or nerve compression. It is typically considered for conditions such as spondylolisthesis, where one vertebra slips forward over another, degenerative disc disease causing chronic instability, or after removal of a disc or bone for decompression when the resulting segment needs additional support. During surgery, the surgeon prepares the vertebrae, places a bone graft, either taken from the patient or from a donor source, or a bone-graft substitute, between them, and secures the segment with screws, rods, or cages to hold everything stable while new bone gradually grows across the gap over several months. The approach used, whether from the back, side, or front of the spine, depends on the specific condition being treated. Recovery involves a hospital stay of several days followed by a period of restricted activity and gradual return to normal movement, with physical therapy supporting long-term strength and stability. India's spine centres perform lumbar fusion using modern instrumentation and image guidance, supporting patients through both surgery and structured postoperative rehabilitation.",
			},
			{
				name: 'Anterior Lumbar Interbody Fusion (ALIF)',
				description:
					"Anterior lumbar interbody fusion, or ALIF, is a spinal fusion technique in which the surgeon reaches the lumbar spine through an incision in the lower abdomen rather than through the back, allowing direct access to the front of the affected disc space. After removing the damaged disc, the surgeon places a structural spacer, or cage, packed with bone graft material into the empty disc space to restore disc height, relieve pressure on nearby nerves, and provide a scaffold for the vertebrae above and below to gradually fuse into one solid segment. This approach is often used for degenerative disc disease, spondylolisthesis, or as part of correcting spinal deformity, and it allows for a larger implant and greater correction of disc height and alignment than some posterior approaches, without disturbing the back muscles and nerves. The procedure is sometimes combined with posterior screws and rods placed through a separate incision for additional stability. Because the abdominal approach involves working near major blood vessels, it requires careful surgical planning and is generally performed by teams experienced in anterior spine access. India's spine surgery units routinely perform ALIF with the vascular support and imaging needed for this specific approach.",
			},
			{
				name: 'Cervical Disc Replacement',
				description:
					"Cervical disc replacement is a surgical alternative to spinal fusion for treating a damaged or degenerated disc in the neck that is causing nerve compression, pain, numbness, or weakness in the arms. Rather than removing the disc and fusing the adjacent vertebrae together, the surgeon removes the damaged disc through an incision at the front of the neck and inserts an artificial disc device designed to preserve natural movement at that spinal level. The artificial disc typically consists of two metal endplates with a mobile core between them that allows the segment to continue bending and rotating in a manner similar to a healthy disc. Preserving motion at the treated level is thought to reduce the extra stress placed on neighboring discs that can occur after fusion, potentially lowering the chance of needing further surgery at an adjacent level over time. Candidates are carefully selected based on the condition of the disc, the alignment of the spine, and the absence of significant arthritis at that level. Recovery is generally faster than with fusion, and India's spine centres offer both disc replacement and fusion, allowing the surgical team to recommend whichever option best suits the individual patient's anatomy.",
			},
			{
				name: 'Lumbar Discectomy',
				description:
					"Lumbar discectomy is a surgical procedure to remove the portion of a herniated or ruptured disc in the lower back that has pushed out of its normal space and is pressing on a nearby spinal nerve root, typically causing pain, numbness, or weakness radiating down the leg, a pattern often referred to as sciatica. The surgeon accesses the spine through an incision in the lower back, carefully moves aside the muscles and, if necessary, a small portion of bone or ligament, to reach the affected disc, and removes only the herniated fragment causing the compression while leaving the healthy remainder of the disc in place. This relieves pressure on the nerve root and typically brings rapid improvement in leg pain, although numbness or weakness may take longer to resolve. Lumbar discectomy is usually recommended after a period of conservative treatment, such as physical therapy, medication, or injections, has failed to adequately relieve symptoms, or sooner if there are signs of significant nerve compromise. Most patients are mobilized within a day of surgery and can return to light activity within a few weeks. India's spine units perform lumbar discectomy with the imaging and neuromonitoring support this precise procedure requires.",
			},
			{
				name: 'Lumbar Microdiscectomy',
				description:
					"Lumbar microdiscectomy is a minimally invasive version of standard lumbar discectomy, performed to remove herniated disc material compressing a spinal nerve root in the lower back, using a small incision and an operating microscope or magnifying loupes to give the surgeon a clear, magnified view of the surgical field through a much smaller opening than traditional open surgery requires. Working through this limited access point, the surgeon gently retracts the muscles and nerve tissue to expose the herniated fragment and removes it, relieving pressure on the nerve while minimizing disruption to the surrounding muscle, ligament, and bone. Because the approach is less disruptive to the surrounding tissue, patients generally experience less postoperative pain, reduced blood loss, and a shorter hospital stay compared with open discectomy, often going home within a day or two. It is typically recommended for patients with a clearly identified disc herniation on MRI whose leg pain, numbness, or weakness has not improved with a reasonable course of conservative treatment. Physical therapy following surgery supports a return to normal activity over the following weeks. India's spine centres commonly offer microdiscectomy as a standard minimally invasive option for appropriately selected disc herniation cases.",
			},
			{
				name: 'Herniated Disc Treatment',
				description:
					"A herniated disc occurs when the soft, gel-like center of a spinal disc pushes through a tear in its tougher outer layer, potentially pressing on nearby nerves and causing pain, numbness, tingling, or weakness that may radiate into the arms or legs depending on where in the spine it occurs. Treatment typically begins with conservative measures, including rest from aggravating activity, physical therapy to strengthen supporting muscles and improve posture, anti-inflammatory or pain medication, and sometimes targeted epidural steroid injections to reduce inflammation around the affected nerve. Most herniated discs improve with this kind of non-surgical management over a period of weeks to a few months, as the body gradually reabsorbs the herniated material and inflammation settles. Surgery, most often a discectomy or microdiscectomy to remove the offending fragment of disc, is generally reserved for cases where symptoms persist despite adequate conservative treatment, where pain is severe and disabling, or where there are signs of significant nerve compression such as progressive weakness. Diagnosis relies on clinical examination together with MRI imaging to confirm the location and severity of the herniation. India's spine specialists offer this full range of conservative and surgical options under one evaluation.",
			},
			{
				name: 'Bulging Disc Treatment',
				description:
					"A bulging disc occurs when a spinal disc's outer layer weakens and extends beyond its normal boundary without the inner material actually rupturing through it, which distinguishes it from a true herniated disc, although a bulging disc can still press on nearby nerves or the spinal canal and cause pain, stiffness, or radiating symptoms depending on its size and location. Many bulging discs are found incidentally on imaging and cause no symptoms at all, in which case no treatment is needed beyond general spine health measures. When a bulging disc is symptomatic, treatment is almost always conservative in the first instance, focusing on physical therapy to improve core and back strength, posture correction, anti-inflammatory medication, and activity modification to avoid positions that aggravate the disc. Epidural steroid injections may be used to reduce inflammation and pain around an affected nerve if symptoms are persistent. Surgery is rarely required for a bulging disc alone and is generally considered only if the bulge progresses to a true herniation causing significant nerve compression that does not respond to conservative care. India's spine and pain management specialists typically manage bulging discs with a structured, non-surgical program before considering any further intervention.",
			},
			{
				name: 'Cervical Laminectomy',
				description:
					"Cervical laminectomy is a surgical procedure performed to relieve pressure on the spinal cord or nerve roots in the neck by removing the lamina, the bony arch that forms the back of the vertebra, along with any thickened ligament or bone spurs contributing to the narrowing. It is most commonly performed for cervical spinal stenosis, a condition in which the spinal canal narrows over time due to degenerative changes, or cervical myelopathy, in which spinal cord compression causes symptoms such as difficulty with fine hand movements, an unsteady gait, or weakness. By removing the back portion of the affected vertebrae, the surgeon creates more space for the spinal cord and reduces the compression responsible for these symptoms. Because removing the lamina at multiple levels can sometimes affect spinal stability, laminectomy is occasionally combined with fusion using screws and rods to maintain proper alignment, particularly when several levels are involved or the spine shows signs of instability. Recovery involves a hospital stay of a few days followed by gradual return to activity, with physical therapy supporting strength and mobility. India's spine surgery centres perform cervical laminectomy with the neuromonitoring support needed to protect the spinal cord during decompression.",
			},
			{
				name: 'Cervical Laminoplasty',
				description:
					"Cervical laminoplasty is a motion-preserving alternative to laminectomy for relieving spinal cord compression in the neck, typically performed for multilevel cervical spinal stenosis or myelopathy, in which the spinal canal has narrowed enough to compress the spinal cord and cause symptoms such as hand clumsiness, gait imbalance, or limb weakness. Rather than removing the lamina entirely, the surgeon cuts a hinge on one side of the bony arch and opens it like a door on the other side, propping it in this expanded position with small plates or spacers to permanently enlarge the spinal canal while keeping most of the natural bony architecture intact. This approach avoids the need for fusion at multiple levels, which helps preserve more of the neck's natural range of motion compared with laminectomy combined with fusion. Laminoplasty is generally suited to patients whose neck alignment is otherwise stable, since it works best when the spine is not already prone to abnormal curvature. Recovery involves gradual mobilization and physical therapy to regain neck strength and movement. India's spine centres offer laminoplasty as part of their range of cervical decompression options, guided by imaging that helps determine which technique best suits an individual patient's anatomy.",
			},
			{
				name: 'Lumbar Laminectomy',
				description:
					"Lumbar laminectomy is a decompression surgery performed to relieve pressure on the spinal nerves in the lower back caused by spinal stenosis, a narrowing of the spinal canal that commonly develops with age as ligaments thicken, discs bulge, and bone spurs form. During the procedure, the surgeon removes the lamina, the bony arch covering the back of the affected vertebrae, along with any thickened ligament tissue contributing to the narrowing, creating more space for the compressed nerves. This typically relieves the leg pain, numbness, heaviness, and reduced walking tolerance that are characteristic of lumbar spinal stenosis, symptoms that often worsen with standing or walking and ease with sitting or bending forward. The procedure can usually be performed through a single incision, and in cases involving multiple levels or evidence of spinal instability, it may be combined with fusion to maintain proper alignment. Most patients are mobilized within a day of surgery, with physical therapy supporting a gradual return to walking and daily activity over the following weeks. India's spine surgery programs offer lumbar laminectomy using modern minimally invasive techniques where appropriate, aimed at reducing tissue disruption and speeding recovery.",
			},
			{
				name: 'Foraminotomy',
				description:
					"Foraminotomy is a surgical procedure that enlarges the neural foramen, the small bony opening on each side of the spine through which a nerve root exits the spinal canal, to relieve pressure on a nerve that has become compressed by bone spurs, a bulging or herniated disc, or general degenerative narrowing. The surgeon removes a small amount of bone and any obstructing soft tissue at the affected level, widening the passage enough to free the trapped nerve, which typically relieves the pain, numbness, or weakness radiating into the arm or leg depending on whether the procedure is performed in the neck or lower back. Because foraminotomy targets a specific, localized area of compression, it can often be performed through a smaller incision than a broader decompression procedure, and in many cases does not require any spinal fusion, since it preserves most of the surrounding bone and joint structure. It is generally considered for patients whose symptoms clearly match a single compressed nerve level on imaging and who have not improved with an adequate trial of conservative treatment. India's spine centres perform foraminotomy using microsurgical or endoscopic techniques to minimize disruption to surrounding tissue during recovery.",
			},
			{
				name: 'Endoscopic Spinal Decompression',
				description:
					"Endoscopic spinal decompression is a minimally invasive technique used to relieve pressure on spinal nerves caused by a herniated disc, bone spurs, or spinal stenosis, performed through a very small incision using a thin endoscope fitted with a camera and light source that transmits a magnified view of the affected area to a monitor. Working through a tube inserted at the target level, the surgeon uses specialized narrow instruments to remove the disc fragment, bone, or ligament tissue responsible for the compression while causing minimal disruption to the surrounding muscle and healthy spinal structures. Because the access point is so small, this approach is typically associated with less postoperative pain, reduced blood loss, and a faster return to daily activity compared with traditional open decompression surgery, and it can often be performed under local or regional anesthesia with sedation rather than general anesthesia. Suitable candidates are identified through careful review of MRI imaging to confirm that the compression is at a level and location accessible to the endoscopic approach. India's spine centres have increasingly adopted endoscopic decompression as an option for well-selected patients seeking a less invasive alternative to conventional surgery, with structured rehabilitation to follow.",
			},
			{
				name: 'Lumbar Vertebroplasty',
				description:
					"Lumbar vertebroplasty is a minimally invasive procedure used to stabilize and relieve pain from a compression fracture in the lower spine, most commonly caused by osteoporosis, but sometimes by trauma or a tumor weakening the bone. Under imaging guidance, usually fluoroscopy or CT, the physician inserts a thin needle through the skin and directly into the fractured vertebral body, then injects a specialized bone cement that flows into the fracture and hardens within minutes, stabilizing the bone from within and reducing the abnormal movement at the fracture site that causes pain. The procedure is typically performed with local anesthesia and light sedation rather than general anesthesia, and most patients notice significant pain relief within a day or two as the stabilized bone stops flexing painfully with movement. It does not restore any lost vertebral height, which distinguishes it from the related procedure kyphoplasty. Vertebroplasty is generally considered for patients whose fracture-related back pain has not responded adequately to conservative measures such as bracing, pain medication, and activity modification. India's spine and pain management centres offer vertebroplasty as an outpatient or short-stay procedure, particularly useful for older patients seeking a less invasive option than open surgery.",
			},
			{
				name: 'Kyphoplasty',
				description:
					"Kyphoplasty is a minimally invasive procedure closely related to vertebroplasty, used to treat painful vertebral compression fractures, most often caused by osteoporosis, by both stabilizing the fractured bone and attempting to restore some of the height it has lost. Working through a small skin incision under imaging guidance, the physician inserts a narrow tube into the fractured vertebral body and threads in a small balloon, which is then carefully inflated to create a cavity within the bone and, where possible, lift the collapsed vertebra back toward its original height. The balloon is then deflated and removed, and the resulting cavity is filled with bone cement, which hardens to support the vertebra in its improved position. This added step of height restoration may also help reduce the abnormal spinal curvature that can develop after multiple compression fractures. The procedure is typically done under local anesthesia with sedation and usually takes less than an hour per vertebral level treated, with most patients experiencing meaningful pain relief within a short time afterward. India's spine centres offer kyphoplasty as a same-day or short-stay procedure for patients whose fracture pain has not improved with conservative management.",
			},
			{
				name: 'Corpectomy',
				description:
					"Corpectomy is a spinal surgery in which all or part of a vertebral body, the main load-bearing block of bone in the spine, is surgically removed along with the adjacent discs, typically to relieve severe spinal cord compression caused by a large disc herniation, bone spur formation, a fracture, a tumor, or an infection affecting multiple levels that cannot be adequately addressed by removing disc material alone. After the affected vertebral body is removed, the resulting gap is reconstructed using a bone graft, a metal cage, or a combination of both, which is then secured with plates, screws, or rods to restore stability and support the spine while the graft gradually fuses with the adjacent healthy vertebrae. Corpectomy can be performed in the neck or lower back depending on where the underlying problem is located, and is generally reserved for more extensive cases than a standard discectomy or laminectomy can adequately treat. Because it involves reconstructing a significant portion of the spinal column, recovery is more gradual and involves close monitoring of the healing graft and instrumentation. India's spine surgery centres perform corpectomy with the reconstructive implants and neuromonitoring support this more extensive procedure requires.",
			},
			{
				name: 'Scoliosis Treatment',
				description:
					"Scoliosis treatment addresses an abnormal sideways curvature of the spine, which can develop during childhood growth, arise from an underlying neuromuscular condition, or appear later in life due to age-related degeneration of the spine, and the appropriate approach depends heavily on the patient's age, the severity and pattern of the curve, and whether it is likely to progress. Mild curves are often simply monitored with periodic X-rays to track any change over time, while moderate curves in growing children or adolescents are commonly managed with a custom-fitted brace worn for much of the day to help prevent further progression during remaining growth. When a curve is severe, continues to worsen despite bracing, or is causing pain, breathing difficulty, or postural problems, surgical correction may be recommended, typically involving spinal instrumentation with rods, screws, and hooks to straighten and stabilize the spine, combined with fusion to maintain the correction permanently. Surgical planning relies on detailed spinal imaging to map the curve and plan implant placement. India's spine deformity centres provide the full spectrum of scoliosis care, from bracing and monitoring through complex corrective surgery, with the physiotherapy support recovery from surgery requires.",
			},
			{
				name: 'Kyphosis (Hunchback) Correction',
				description:
					"Kyphosis is an excessive forward curvature of the upper spine that produces a rounded or hunched appearance of the back, which can result from poor posture, degenerative changes with age, vertebral compression fractures, certain developmental conditions affecting the growing spine, or, less commonly, congenital abnormalities present from birth. Mild cases, particularly those related to posture, are often managed with targeted physical therapy to strengthen the back extensor muscles and improve posture, along with activity modification, and bracing may be used in adolescents whose spine is still growing to help slow progression of a structural curve. When kyphosis is severe, progressive, or causing significant pain, nerve symptoms, or difficulty with balance and breathing, surgical correction may be recommended, generally involving spinal instrumentation with rods and screws to gradually realign the curved segment, sometimes combined with an osteotomy, a controlled cut through the bone, to allow greater correction, followed by fusion to hold the new alignment permanently. Surgical planning uses detailed imaging of the entire spine to determine the safest correction achievable. India's spine deformity centres manage kyphosis across this full range, from conservative bracing programs to complex corrective surgery for structural curves.",
			},
			{
				name: 'Spinal Tumor Surgery',
				description:
					"Spinal tumor surgery removes abnormal growths that develop within or around the spinal column, which may originate in the spine itself, arise from the spinal cord or its surrounding membranes, or represent cancer that has spread to the spine from elsewhere in the body, and surgery is generally considered when a tumor is causing pain, spinal instability, or compression of the spinal cord or nerve roots leading to weakness or sensory changes. The surgical approach depends on the tumor's exact location, whether it sits within the bone of the vertebra, in the space surrounding the spinal cord, or within the cord itself, and ranges from removing the tumor along with a portion of affected bone, sometimes followed by reconstruction with instrumentation to maintain spinal stability, to more delicate microsurgical removal when the tumor is close to or within the spinal cord. Advanced imaging, including MRI, guides surgical planning, and intraoperative neuromonitoring helps protect neurological function during removal of tumors near the cord. Depending on the tumor type, surgery may be followed by radiation therapy. India's spine oncology teams bring together neurosurgery, orthopedic spine surgery, and oncology expertise needed to plan and carry out this technically demanding surgery.",
			},
			{
				name: 'Spinal Cord Injury Treatment',
				description:
					"Spinal cord injury treatment covers the urgent and longer-term care of damage to the spinal cord, most often caused by trauma such as a fall, accident, or sports injury, though it can also result from disease processes that compress or damage the cord over time. Immediate management focuses on stabilizing the spine to prevent further injury, often with a rigid collar or bracing, along with careful imaging to assess the extent of damage and identify any fracture or instability. Surgery is frequently required to decompress the spinal cord by removing bone fragments, disc material, or blood clots pressing on it, and to stabilize the spine with instrumentation such as rods and screws where the injury has made it unstable. Timing of surgery and overall management is guided by the severity and level of injury, along with the patient's broader medical condition. Following the acute phase, structured rehabilitation involving physiotherapy, occupational therapy, and management of associated issues such as bladder and bowel function becomes central to maximizing recovery and independence. India's spine trauma centres combine emergency stabilization and surgery with dedicated rehabilitation programs, supporting recovery through both the acute and long-term phases of care.",
			},
		],
		benefits: [
			'Fellowship-trained spine surgeons using minimally invasive techniques',
			'Motion-preserving disc replacement options at select centers',
			'Structured in-hospital physiotherapy from day one',
			'Typical hospital stay of 5–7 days for major spine surgery',
		],
		flagshipProcedure: 'Lumbar Spinal Fusion',
		packagePrice: 6500,
		totalTripDays: 20,
		stayDuration: {
			patient: { icuDays: 1, roomDays: 5, totalDays: 6 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 80,000 – 130,000', waitTime: '4–8 weeks', successRate: '88–92%' },
			{ country: 'UK', cost: 'USD 35,000 – 55,000', waitTime: '6–12 months (NHS)', successRate: '88–92%' },
			{ country: 'Germany', cost: 'USD 30,000 – 45,000', waitTime: '4–8 weeks', successRate: '87–91%' },
			{ country: 'Thailand', cost: 'USD 15,000 – 22,000', waitTime: '2–4 weeks', successRate: '85–89%' },
			{ country: 'India', cost: 'USD 6,500 – 10,000', waitTime: '1–2 weeks', successRate: '90%+', highlight: true },
		],
		inclusions: [
			'Pre-operative spine evaluation including MRI/X-ray review',
			"Surgeon's and anesthetist's fees for the spine procedure",
			'Operation theatre charges and standard spinal implant/hardware',
			'ICU stay (1 day) plus 5 days in a single room',
			'Structured in-hospital physiotherapy sessions',
			'Laboratory, radiology, and standard post-op medication during the stay',
			'Discharge summary with a home exercise and rehabilitation plan',
		],
		exclusions: [
			'Premium or custom spinal implant upgrades beyond the standard hardware',
			'Hospital stay beyond the package duration',
			'Multi-level fusion beyond the levels quoted in the initial assessment',
			'Outpatient physiotherapy sessions after discharge',
			'Treatment for unrelated conditions identified during pre-op screening',
			'Revision surgery for complications unrelated to the original procedure',
		],
		faqs: [
			{
				question: 'What is the cost of spinal fusion surgery in India?',
				answer:
					'A lumbar spinal fusion package in India starts from USD 6,500, around 90% less than typical US pricing, and includes the surgeon fee, implant, hospital stay, and in-hospital physiotherapy.',
			},
			{
				question: 'Is minimally invasive spine surgery available?',
				answer:
					'Yes, several of our partner hospitals offer minimally invasive and motion-preserving techniques such as disc replacement, which can reduce blood loss and shorten recovery for suitable candidates.',
			},
			{
				question: 'How long is the hospital stay and recovery?',
				answer:
					'Most patients stay about 6 days in hospital and are advised to remain in India for roughly 2–3 weeks so the spine team can monitor early recovery before you fly home.',
			},
			{
				question: 'What implant/hardware is used?',
				answer:
					'Our partner hospitals use internationally certified spinal implant systems as standard, with premium hardware upgrades available on request and quoted separately.',
			},
			{
				question: 'Will I need physiotherapy after surgery?',
				answer:
					'Yes, structured in-hospital physiotherapy begins soon after surgery, and your surgeon will provide a home exercise plan to continue rehabilitation after you return home.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Send your spine MRI or X-rays through our contact form, and you will receive a specialist review and a transparent cost estimate within 24 hours.',
			},
		],
	},
	{
		slug: 'bariatric-surgery',
		name: 'Bariatric Surgery',
		icon: 'stomach',
		imageKey: 'bariatric',
		theme: 'green',
		shortDescription: 'Gastric sleeve, bypass, and balloon procedures for sustainable, medically supervised weight loss.',
		overview:
			"India's bariatric centers combine laparoscopic surgical expertise with structured pre- and post-operative dietary counseling, helping patients achieve lasting weight loss with shorter hospital stays and faster recovery than open surgery.",
		startingPrice: 4500,
		avgSavings: 82,
		hospitalsCount: 40,
		procedures: ['Gastric Sleeve', 'Gastric Bypass', 'Gastric Balloon'],
		allProcedures: [
			'Laparoscopic Sleeve Gastrectomy',
			'Gastric Bypass',
			'Adjustable Gastric Band',
			'Allurion Gastric Balloon (Non-Surgical)',
			'Biliopancreatic Diversion',
		],
		detailedProcedures: [
			{
				name: 'Laparoscopic Sleeve Gastrectomy',
				description:
					"Laparoscopic sleeve gastrectomy is a weight-loss surgery that reduces the size of the stomach by roughly seventy-five to eighty percent, converting it from its normal pouch shape into a narrow, banana-shaped tube. Working through several small keyhole incisions in the abdomen using a camera and long, slender instruments, the surgeon staples along the length of the stomach and removes the larger curved portion, leaving behind a smaller stomach that restricts food intake and reduces levels of ghrelin, a hormone that stimulates hunger. Because no part of the intestine is rerouted, nutrient absorption remains largely normal, though lifelong vitamin and mineral supplementation is generally still recommended. It is typically offered to patients with a body mass index in the obese range, particularly those with obesity-related conditions such as type 2 diabetes, high blood pressure, or sleep apnea, who have not achieved lasting weight loss through diet and lifestyle measures alone. The operation is performed under general anesthesia and usually takes about one to two hours. Indian bariatric centers perform high volumes of sleeve gastrectomy using standardized laparoscopic protocols. Recovery involves a short hospital stay, a staged return to solid food over several weeks, and long-term dietary counseling and follow-up to support sustained weight loss.",
			},
			{
				name: 'Gastric Bypass',
				description:
					"Gastric bypass, most commonly performed as a Roux-en-Y procedure, is a weight-loss surgery that both reduces stomach capacity and alters how food moves through the digestive tract. Working laparoscopically through small abdominal incisions, the surgeon creates a small pouch from the upper part of the stomach and divides the small intestine, connecting a lower segment directly to this new pouch so that food bypasses most of the stomach and the first portion of the small intestine. This combination restricts the amount of food that can be eaten at one time and reduces the absorption of calories and certain nutrients, while also producing hormonal changes that help control appetite and can improve blood sugar regulation. It is generally recommended for patients with a higher body mass index, significant obesity-related health conditions such as type 2 diabetes or acid reflux, or those who have not achieved adequate results with a sleeve gastrectomy. The surgery is performed under general anesthesia and typically takes around two to three hours. Indian bariatric surgery units offer gastric bypass with established laparoscopic and, in some centers, robotic-assisted techniques. Because nutrient absorption is altered, patients require lifelong vitamin and mineral supplementation along with regular follow-up monitoring after returning home.",
			},
			{
				name: 'Adjustable Gastric Band',
				description:
					"Adjustable gastric band surgery, sometimes known by the brand name lap-band, is a restrictive weight-loss procedure in which a silicone band is placed laparoscopically around the upper part of the stomach to create a small pouch above it, limiting the amount of food that can be eaten before a feeling of fullness sets in. The band is connected by thin tubing to a port placed just beneath the skin of the abdomen, allowing the surgeon to adjust its tightness after surgery by injecting or withdrawing saline, fine-tuning the level of restriction over time based on the patient's weight-loss progress and comfort. Unlike sleeve gastrectomy or gastric bypass, no stomach or intestinal tissue is cut, stapled, or rerouted, making the procedure reversible and generally quicker to perform, usually under an hour under general anesthesia. It is typically considered for patients seeking a less invasive, adjustable option, though weight loss tends to be more gradual and dependent on regular follow-up adjustments than with other bariatric procedures. Indian bariatric centers offer gastric banding alongside newer techniques, allowing surgeons to advise on suitability based on individual goals. Long-term success requires consistent dietary habits and periodic band adjustment visits, along with monitoring for band-related complications such as slippage or erosion.",
			},
			{
				name: 'Allurion Gastric Balloon (Non-Surgical)',
				description:
					"The Allurion gastric balloon is a non-surgical, swallowable weight-loss device consisting of a thin capsule attached to a fine tube, which the patient swallows under physician supervision without the need for endoscopy or anesthesia. Once the capsule reaches the stomach, its position is confirmed by X-ray, and the balloon inside is filled with fluid through the attached tube, which is then gently withdrawn, leaving the balloon to float freely in the stomach where it occupies space and promotes an earlier sense of fullness with smaller meals. The balloon is designed to remain in place for a set period, typically around four months, after which its valve degrades naturally and it empties and passes out of the body on its own, without requiring a removal procedure. It is generally suited to patients with a lower degree of excess weight who prefer a temporary, non-invasive option or who are not candidates for surgery, and it is usually combined with a structured nutrition and lifestyle coaching program to support results. Indian weight-management clinics offering this device typically provide the placement procedure along with dietary guidance over the balloon's duration. Because no anesthesia or incision is involved, patients can generally resume normal activity within a day of placement.",
			},
			{
				name: 'Biliopancreatic Diversion',
				description:
					"Biliopancreatic diversion, often performed with a duodenal switch, is one of the more complex and powerful bariatric procedures, combining a sleeve gastrectomy with a significant rerouting of the small intestine to substantially limit calorie and nutrient absorption. The surgeon first creates a sleeve-shaped stomach similar to a standard sleeve gastrectomy, then divides the small intestine so that food travels through only a short common channel where it mixes with bile and pancreatic digestive juices, meaning most of the small intestine's absorptive length is bypassed for calories and fat in particular. This produces greater and more durable weight loss than sleeve gastrectomy or gastric bypass alone and can markedly improve type 2 diabetes, but it also carries a higher risk of nutrient and vitamin deficiencies, requiring strict lifelong supplementation and monitoring. It is generally reserved for patients with very high body mass index or severe obesity-related metabolic disease who have not responded adequately to other approaches. Performed laparoscopically under general anesthesia, the operation typically takes three to four hours given its technical complexity. Indian bariatric centers offering this procedure usually reserve it for carefully selected patients after thorough metabolic and nutritional evaluation, with close long-term follow-up to manage its more demanding nutritional requirements.",
			},
		],
		benefits: [
			'Laparoscopic (minimally invasive) bariatric surgery as standard',
			'Structured pre-op and post-op dietary and lifestyle counseling',
			'Typical hospital stay of just 2–3 days for sleeve gastrectomy',
			'Long-term follow-up support to track weight loss progress',
		],
		flagshipProcedure: 'Laparoscopic Sleeve Gastrectomy',
		packagePrice: 4500,
		totalTripDays: 14,
		stayDuration: {
			patient: { icuDays: 0, roomDays: 3, totalDays: 3 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 20,000 – 30,000', waitTime: '3–6 weeks', successRate: '90–95%' },
			{ country: 'UK', cost: 'USD 12,000 – 18,000', waitTime: '6–12 months (NHS)', successRate: '90–95%' },
			{ country: 'Germany', cost: 'USD 10,000 – 15,000', waitTime: '4–8 weeks', successRate: '89–94%' },
			{ country: 'Thailand', cost: 'USD 7,000 – 10,000', waitTime: '1–3 weeks', successRate: '88–93%' },
			{ country: 'India', cost: 'USD 4,500 – 6,500', waitTime: '1–2 weeks', successRate: '92%+', highlight: true },
		],
		inclusions: [
			'Pre-operative evaluation including endoscopy and fitness clearance',
			'Dietician consultation and pre-op diet planning',
			"Surgeon's and anesthetist's fees for the laparoscopic procedure",
			'Operation theatre charges and standard surgical staplers/consumables',
			'3 days of hospital stay including post-op monitoring',
			'Discharge summary with a structured post-op diet progression plan',
		],
		exclusions: [
			'Hospital stay beyond the package duration',
			'Revision surgery for a prior bariatric procedure done elsewhere',
			'Plastic surgery for excess skin removal after major weight loss',
			'Long-term nutritional supplements beyond the initial discharge kit',
			'Treatment for unrelated conditions identified during pre-op screening',
			'Re-operation for complications unrelated to the original procedure',
		],
		faqs: [
			{
				question: 'What is the cost of gastric sleeve surgery in India?',
				answer:
					'A laparoscopic sleeve gastrectomy package in India starts from USD 4,500, around 80% less than in the US, and includes the pre-op work-up, surgery, hospital stay, and post-op diet plan.',
			},
			{
				question: 'Am I eligible for bariatric surgery?',
				answer:
					'Eligibility is generally based on BMI and related health conditions — share your height, weight, and any existing conditions through our contact form for a free eligibility review by our bariatric team.',
			},
			{
				question: 'How much weight can I expect to lose?',
				answer:
					'Most patients lose 60–70% of excess weight within 12–18 months after sleeve gastrectomy or bypass, though results vary based on the procedure chosen and adherence to the post-op diet and lifestyle plan.',
			},
			{
				question: 'How long is the hospital stay and recovery?',
				answer:
					'Most patients stay about 3 days in hospital and are advised to remain in India for roughly 10–14 days so the surgical team can confirm early recovery before you fly home.',
			},
			{
				question: 'Is the procedure done laparoscopically?',
				answer:
					'Yes, sleeve gastrectomy, gastric bypass, and balloon placement are all performed laparoscopically as standard, which typically means less pain and faster recovery than open surgery.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your height, weight, and medical history through our contact form, and our bariatric coordinator will arrange a specialist eligibility review within 24 hours.',
			},
		],
	},
	{
		slug: 'nephrology-urology',
		name: 'Nephrology & Urology',
		icon: 'kidney',
		imageKey: 'urology',
		theme: 'blue',
		shortDescription: 'Kidney stone treatment, prostate surgery, and dialysis care from specialized urology teams.',
		overview:
			"India's urology and nephrology centers perform kidney stone and prostate procedures at high volumes using laser and minimally invasive techniques, giving international patients fast access to specialists without the waitlists common abroad.",
		startingPrice: 3500,
		avgSavings: 84,
		hospitalsCount: 55,
		procedures: ['Kidney Stone Removal', 'Prostate Surgery', 'Dialysis Care'],
		allProcedures: [
			'Kidney Stone Removal (PCNL / RIRS)',
			'Prostate Surgery',
			'Dialysis Care',
			'Urinary Incontinence Treatment',
			'Erectile Dysfunction Treatment',
			"Peyronie's Disease Treatment",
			'Penile Implant Surgery (Malleable & Inflatable)',
			'Malleable Penile Implant (Shah Technique)',
			'Chronic Pelvic & Perineal Pain Management',
		],
		detailedProcedures: [
			{
				name: 'Kidney Stone Removal (PCNL / RIRS)',
				description:
					"Kidney stone removal addresses stones that form when minerals and salts in urine crystallize within the kidney, causing pain, blood in urine, infection, or blockage of urine flow when conservative measures such as hydration and medication fail to clear them. Percutaneous nephrolithotomy, or PCNL, is used for larger or more complex stones and involves creating a small tunnel through the skin of the back directly into the kidney under X-ray or ultrasound guidance, through which a scope and instruments break up and remove the stone in fragments. Retrograde intrarenal surgery, or RIRS, is a scarless alternative for small to medium stones in which a flexible scope is passed through the urinary tract via the bladder and ureter up into the kidney, where a laser fragments the stone into pieces small enough to pass or be extracted. Both procedures are performed under spinal or general anesthesia, with PCNL generally taking one to two hours and RIRS somewhat less. Indian urology centers perform very high volumes of both techniques, often supported by advanced laser lithotripsy systems. Recovery from RIRS is typically quicker with a shorter hospital stay, while PCNL patients usually need a few additional days to recover, with a stent often left temporarily to support healing.",
			},
			{
				name: 'Prostate Surgery',
				description:
					"Prostate surgery covers a range of procedures used to treat either benign prostatic hyperplasia, a common non-cancerous enlargement of the prostate that obstructs urine flow, or prostate cancer confined to the gland. For benign enlargement, the most common approach is transurethral resection of the prostate, or TURP, in which a scope passed through the urethra removes excess prostate tissue to relieve blockage, with newer laser-based techniques such as holmium laser enucleation offering similar relief with less bleeding. For prostate cancer, radical prostatectomy removes the entire prostate gland along with surrounding tissue and is increasingly performed using laparoscopic or robotic-assisted techniques, allowing precise dissection through small incisions with better preservation of surrounding nerves controlling continence and sexual function where oncologically appropriate. The choice of procedure depends on the underlying condition, prostate size, cancer stage if present, and the patient's overall health, and is guided by prior imaging, PSA levels, and biopsy findings. Surgery is performed under spinal or general anesthesia and duration varies with technique and complexity. Indian urology centers offer both conventional and robotic-assisted prostate surgery. Recovery includes a period with a urinary catheter in place, with continence and function gradually improving over the following weeks to months.",
			},
			{
				name: 'Dialysis Care',
				description:
					"Dialysis care provides ongoing treatment for patients whose kidneys can no longer adequately filter waste products, excess fluid, and toxins from the blood, most often due to chronic kidney disease that has progressed to kidney failure. Hemodialysis, the more common form, circulates the patient's blood through an external machine fitted with a filtering membrane that removes waste and excess fluid before returning cleaned blood to the body, typically performed several times a week in sessions lasting a few hours through a surgically created vascular access point in the arm. Peritoneal dialysis, an alternative approach, uses the lining of the patient's own abdominal cavity as a natural filter, with a specially formulated fluid introduced and later drained through a permanently placed catheter, a process that can often be managed at home. The choice between the two depends on the patient's kidney function, overall health, lifestyle, and personal preference, guided by a nephrologist's assessment. Indian nephrology centers offer both modalities along with vascular access surgery and ongoing monitoring of kidney function, anemia, and mineral balance. For patients with progressive kidney failure, dialysis is often a bridge toward eventual kidney transplantation, alongside pre-transplant evaluation and long-term management planning.",
			},
			{
				name: 'Urinary Incontinence Treatment',
				description:
					"Urinary incontinence treatment addresses the involuntary leakage of urine, a common condition with several underlying causes including weakened pelvic floor muscles, an overactive bladder, prostate surgery in men, or nerve-related bladder dysfunction, and it is evaluated through a combination of symptom history, bladder diary review, and tests such as urodynamic studies to identify the specific type and cause. Initial management typically includes pelvic floor physiotherapy, bladder training, and medication to calm an overactive bladder, which resolve or significantly improve symptoms for many patients without the need for surgery. When conservative treatment is insufficient, surgical options include a mid-urethral sling procedure, in which a supportive strip of synthetic mesh or the patient's own tissue is placed under the urethra to prevent leakage during activities like coughing or exercise, or, for more complex cases, placement of an artificial urinary sphincter that the patient controls to open and close the urethra. These procedures are typically performed through small incisions under spinal or general anesthesia and generally take under an hour. Indian urogynecology and urology centers offer the full range of conservative and surgical incontinence treatments. Recovery is usually quick after sling surgery, with most patients returning to normal activity within a few weeks.",
			},
			{
				name: 'Erectile Dysfunction Treatment',
				description:
					"Erectile dysfunction treatment addresses the persistent inability to achieve or maintain an erection sufficient for satisfactory sexual activity, a condition that can stem from vascular disease, diabetes, nerve damage, hormonal imbalance, psychological factors, or as a side effect of certain medications or pelvic surgery. Evaluation typically includes a detailed medical history, hormone and blood sugar testing, and sometimes specialized vascular studies to identify the underlying cause before recommending treatment. First-line management usually involves oral phosphodiesterase-5 inhibitor medications, which improve blood flow to achieve an erection in response to sexual stimulation, along with management of contributing conditions such as diabetes or high blood pressure. When medication is ineffective, contraindicated, or insufficient, further options include vacuum erection devices, injectable or intraurethral medications delivered directly into the penis, and, for men who do not respond to less invasive measures, surgically implanted penile prostheses that provide a reliable, on-demand mechanical solution. Indian urology and andrology centers offer this full stepwise pathway, from hormonal and vascular evaluation through to prosthesis surgery for appropriate candidates. Treatment choice depends on the underlying cause, previous response to therapy, and patient preference, with surgical options generally reserved for cases where non-surgical treatments have not achieved an adequate result.",
			},
			{
				name: "Peyronie's Disease Treatment",
				description:
					"Peyronie's disease treatment addresses an acquired condition in which fibrous scar tissue, called plaque, forms within the layer surrounding the erectile tissue of the penis, causing curvature, indentation, or narrowing during erection that can be associated with pain, particularly in the earlier, active phase of the condition. Diagnosis is based on clinical examination, patient-reported curvature, and sometimes ultrasound imaging to assess plaque location and size, as well as blood flow. In the early, active phase, when curvature is still changing and pain is present, treatment may involve oral medications, injectable agents such as collagenase directly into the plaque, or traction and vacuum therapy aimed at limiting progression. Once the condition has stabilized, usually after twelve months or more, and curvature significantly affects sexual function, surgical correction may be recommended, ranging from plication procedures that shorten the longer, unaffected side of the penis to plaque incision or excision with grafting for more severe curvature, chosen based on the degree and complexity of the deformity. These procedures are performed under general or spinal anesthesia. Indian andrology and urology centers with specific experience in penile reconstructive surgery offer the full range of these treatment options, with the surgical approach tailored to each patient's specific anatomy and functional goals.",
			},
			{
				name: 'Penile Implant Surgery (Malleable & Inflatable)',
				description:
					"Penile implant surgery places a prosthetic device inside the penis to restore the ability to achieve a rigid erection in men with erectile dysfunction that has not responded to medication, injections, or other less invasive treatments. Two main types of implant are used: a malleable, or semi-rigid, implant consists of a pair of bendable rods placed within the erectile chambers that leave the penis in a permanently firm but positionable state, which can be bent upward for sexual activity and downward for concealment at other times, while an inflatable implant uses fluid-filled cylinders connected to a pump placed in the scrotum and a fluid reservoir, allowing the patient to inflate the device to produce an erection and deflate it afterward, more closely mimicking natural function. The surgeon places the chosen device through a small incision, typically at the base of the penis or in the lower abdomen for the reservoir, under general or spinal anesthesia, with the procedure usually taking about one to two hours. The choice between implant types depends on manual dexterity, prior surgeries, anatomy, and patient preference. Indian urology centers with dedicated andrology units offer both implant types. Recovery involves several weeks of restricted activity before the device is activated for use.",
			},
			{
				name: 'Malleable Penile Implant (Shah Technique)',
				description:
					"The malleable penile implant, placed using the Shah technique, is a specific surgical approach to inserting a semi-rigid penile prosthesis, developed to simplify the procedure and reduce operative time and complication rates compared with older insertion methods. As with other malleable implants, a pair of bendable rods are placed within the erectile chambers of the penis to provide a firm but positionable structure sufficient for sexual activity, without the pump or reservoir components used in inflatable devices. The Shah technique typically uses a single small incision and a streamlined dissection and sizing method to position the rods accurately while minimizing tissue trauma, which can shorten operating time and support a more straightforward recovery. It is generally offered to men with erectile dysfunction unresponsive to non-surgical treatment who prefer the mechanical simplicity and lower long-term mechanical failure risk of a malleable device over an inflatable one. The surgery is performed under general or spinal anesthesia and usually takes under an hour in experienced hands. Indian andrology centers with specific expertise in this technique offer it as an efficient option for appropriate candidates. As with other implants, a period of restricted activity follows surgery before the device is used for sexual activity.",
			},
			{
				name: 'Chronic Pelvic & Perineal Pain Management',
				description:
					"Chronic pelvic and perineal pain management addresses persistent pain in the lower abdomen, pelvic floor, genital area, or perineum lasting three months or longer, a condition with varied causes that may include nerve entrapment or irritation, pelvic floor muscle dysfunction, prior surgery or trauma, infection, or, in some cases, no clearly identifiable structural cause despite thorough evaluation. Assessment typically involves a detailed history, physical and neurological examination, and targeted imaging or nerve studies to rule out identifiable structural or nerve-related causes before a treatment plan is developed. Management is usually multidisciplinary and stepwise, beginning with pelvic floor physiotherapy, medication aimed at nerve-related pain, and lifestyle and posture modification, progressing to targeted interventions such as trigger point or nerve block injections when pain persists. For cases linked to a specific entrapped or irritated nerve, such as the pudendal nerve, surgical decompression may be considered when conservative and interventional treatments have not provided adequate relief. Indian pain management and urology centers with pelvic pain expertise coordinate physiotherapy, pain medicine, and surgical input as needed for individual cases. Because causes and responses vary considerably between patients, treatment is tailored closely to findings on examination and response to earlier interventions, with realistic expectations set from the outset.",
			},
		],
		benefits: [
			'Laser and minimally invasive kidney stone removal (PCNL/RIRS)',
			'Robotic and laparoscopic prostate surgery available at leading centers',
			'Dedicated dialysis units for patients requiring ongoing renal care',
			'Same-day or next-day discharge for many minimally invasive procedures',
		],
		flagshipProcedure: 'Percutaneous Nephrolithotomy (PCNL)',
		packagePrice: 3500,
		totalTripDays: 10,
		stayDuration: {
			patient: { icuDays: 0, roomDays: 2, totalDays: 2 },
		},
		costComparison: [
			{ country: 'USA', cost: 'USD 20,000 – 35,000', waitTime: '3–6 weeks', successRate: '92–96%' },
			{ country: 'UK', cost: 'USD 10,000 – 16,000', waitTime: '3–9 months (NHS)', successRate: '92–96%' },
			{ country: 'Germany', cost: 'USD 9,000 – 14,000', waitTime: '3–6 weeks', successRate: '91–95%' },
			{ country: 'Thailand', cost: 'USD 5,000 – 8,000', waitTime: '1–3 weeks', successRate: '90–94%' },
			{ country: 'India', cost: 'USD 3,500 – 5,500', waitTime: '3–7 days', successRate: '94%+', highlight: true },
		],
		inclusions: [
			'Pre-operative evaluation including ultrasound/CT and fitness clearance',
			"Urologist's and anesthetist's fees for the procedure",
			'Operation theatre and laser/endoscopic equipment charges',
			'2 days of hospital stay including post-op monitoring',
			'Standard medication and consumables during the inpatient stay',
			'Discharge summary with a follow-up imaging plan',
		],
		exclusions: [
			'Hospital stay beyond the package duration',
			'Treatment of bilateral (both-kidney) stones unless quoted together',
			'Long-term dialysis sessions beyond an initial evaluation stay',
			'Take-home medication beyond the standard discharge kit',
			'Treatment for unrelated conditions identified during pre-op screening',
			'Re-operation for complications unrelated to the original procedure',
		],
		faqs: [
			{
				question: 'What is the cost of kidney stone removal in India?',
				answer:
					'A PCNL (kidney stone removal) package in India starts from USD 3,500, around 85% less than in the US, and includes the pre-op evaluation, procedure, hospital stay, and follow-up imaging.',
			},
			{
				question: 'Is kidney stone treatment minimally invasive?',
				answer:
					'Yes, most stones are treated using laser-based minimally invasive techniques such as PCNL or RIRS, which typically allow discharge within 1–2 days depending on stone size and location.',
			},
			{
				question: 'Is robotic prostate surgery available?',
				answer:
					'Yes, several of our partner hospitals offer robotic-assisted and laparoscopic prostate surgery, which can reduce blood loss and shorten recovery compared to open surgery.',
			},
			{
				question: 'How long should I plan to stay in India?',
				answer:
					'Most urology procedures need about 7–10 days in India for the pre-op work-up, procedure, and a follow-up check before flying home; complex cases may need a longer stay.',
			},
			{
				question: 'Do you support patients who need ongoing dialysis?',
				answer:
					'Yes, our partner hospitals have dedicated dialysis units and can coordinate ongoing renal care for patients traveling for evaluation or awaiting a kidney transplant.',
			},
			{
				question: 'How do I get started?',
				answer:
					'Share your imaging reports (ultrasound/CT) through our contact form, and our urology coordinator will arrange a specialist review and transparent quote within 24 hours.',
			},
		],
	},
];

export const getTreatmentBySlug = (slug: string) => treatments.find((t) => t.slug === slug);
