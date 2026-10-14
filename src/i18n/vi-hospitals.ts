import type { HospitalData } from '../data/hospitals';
import { localizeCity, localizeHospitalName } from './hospitalNames';

/**
 * Field-level Vietnamese translations for hospital cards (OurPartnerHospitals).
 * Hospital and city names are proper nouns and stay as-is; accreditation,
 * specialties, bed counts, and country are translated via lookup.
 */

const countryMap: Record<string, string> = {
	India: 'Ấn Độ',
};

const accreditationMap: Record<string, string> = {
	'Super Specialty Hospital': 'Bệnh viện chuyên khoa sâu',
	'Multi Specialty Hospital': 'Bệnh viện đa khoa',
	'JCI Accredited': 'Được JCI công nhận',
	'Comprehensive & Multi Specialty Dental Clinic': 'Phòng khám nha khoa tổng hợp và đa chuyên khoa',
	'Comprehensive & Super Specialty Eye Hospital': 'Bệnh viện mắt tổng hợp và chuyên khoa sâu',
	'Fertility & IVF Center': 'Trung tâm hiếm muộn và IVF',
	'Multi Specialty Eye Hospital': 'Bệnh viện mắt đa chuyên khoa',
	'Super Specialty Eye Hospital': 'Bệnh viện mắt chuyên khoa sâu',
};

const specialtyMap: Record<string, string> = {
	Cardiology: 'Tim mạch',
	Oncology: 'Ung bướu',
	Orthopedics: 'Chỉnh hình',
	Orthopaedics: 'Chỉnh hình',
	Neurology: 'Thần kinh học',
	'Cosmetic Surgery': 'Phẫu thuật thẩm mỹ',
	Fertility: 'Hiếm muộn',
	'Reproductive Health': 'Sức khỏe sinh sản',
	Gynecology: 'Phụ khoa',
	Gynaecology: 'Phụ khoa',
	Obstetrics: 'Sản khoa',
	'Obstetrics and Gynaecology': 'Sản phụ khoa',
	Pulmonology: 'Hô hấp',
	Pediatrics: 'Nhi khoa',
	'General Medicine': 'Nội tổng quát',
	Gastroenterology: 'Tiêu hóa',
	Urology: 'Tiết niệu',
	Nephrology: 'Thận học',
	'General Surgery': 'Ngoại tổng quát',
	'Organ Transplant': 'Ghép tạng',
	'Liver Transplant': 'Ghép gan',
	'Kidney Transplant': 'Ghép thận',
	Hematology: 'Huyết học',
	'Robotic Surgery': 'Phẫu thuật robot',
	'Cardiac Surgery': 'Phẫu thuật tim',
	'Cardiac Sciences': 'Khoa học tim mạch',
	Neurosciences: 'Thần kinh học',
	'Eye Care': 'Nhãn khoa',
	"Women's Health": 'Sức khỏe phụ nữ',
	'Ayurveda & Wellness': 'Ayurveda và chăm sóc sức khỏe',
	Cataract: 'Đục thủy tinh thể',
	'Comprehensive Ophthalmology': 'Nhãn khoa tổng quát',
	Cornea: 'Giác mạc',
	'Cornea Transplant': 'Ghép giác mạc',
	'Cosmetic Dentistry': 'Nha khoa thẩm mỹ',
	'Diabetic Retinopathy': 'Bệnh võng mạc đái tháo đường',
	'Emergency Care': 'Cấp cứu',
	'Fertility Treatment': 'Điều trị hiếm muộn',
	'General Dentistry': 'Nha khoa tổng quát',
	Glaucoma: 'Glôcôm (Cườm nước)',
	ICL: 'ICL (thấu kính nội nhãn)',
	IVF: 'Thụ tinh trong ống nghiệm (IVF)',
	'Implants Dentistry': 'Cấy ghép implant nha khoa',
	'Internal Medicine': 'Nội khoa',
	LASIK: 'LASIK',
	'LASIK/Refractive Surgery': 'LASIK / phẫu thuật khúc xạ',
	'LASIK/SMILE': 'LASIK / SMILE',
	Orthodontics: 'Chỉnh nha',
	'Orthopaedics & Joint Replacement': 'Chỉnh hình và thay khớp',
	'Refractive Surgery': 'Phẫu thuật khúc xạ',
	Retina: 'Võng mạc',
	'Super-Speciality & Complex Eye Care': 'Chuyên khoa sâu và chăm sóc mắt phức tạp',
	Surrogacy: 'Mang thai hộ',
};

const bedsPhrases: Record<string, string> = {
	'Fertility Clinic': 'Phòng khám hiếm muộn',
	'Multiple Locations': 'Nhiều cơ sở',
	'Multiple NCR Locations': 'Nhiều cơ sở tại NCR',
	'Single Center': 'Một cơ sở',
};

const aboutMap: Record<string, string> = {
	'spruce-dental-chain-of-clinics':
		"Spruce Dental Chain of Clinics tại Gurugram là phòng khám cấy ghép implant và chỉnh nha, tập trung vào kỹ thuật cấy implant xâm lấn tối thiểu và phục hình toàn hàm chỉ trong một lần hẹn dành cho bệnh nhân quốc tế.",
	'spruce-dental':
		"Spruce Dental tại Jasola Vihar cung cấp dịch vụ nha khoa toàn diện và điều trị tủy (RCT) cho bệnh nhân khắp phía tây Delhi.",
	'moolchand-hospital':
		'Bệnh viện Moolchand là một trong những bệnh viện chuyên khoa sâu lâu đời nhất ở phía nam Delhi, với khuôn viên 1.000 giường tại Lajpat Nagar bao gồm tim mạch, ung bướu và chỉnh hình, cùng với cấp cứu và chấn thương 24/7.',
	'fortis-c-doc-hospital':
		'Bệnh viện Fortis C-DOC là trung tâm chuyên về đái tháo đường và chăm sóc tim mạch, thần kinh liên quan tại Delhi, thuộc hệ thống Fortis, tập trung vào quản lý lâu dài các bệnh chuyển hóa cùng với tim mạch và thần kinh.',
	'fortis-escorts-heart-institute':
		'Viện Tim Fortis Escorts tại Okhla là một trong những trung tâm tim mạch được biết đến nhiều nhất Ấn Độ, với khuôn viên 310 giường tập trung vào phẫu thuật tim tiên tiến, tim mạch can thiệp, ung bướu và huyết học.',
	'fortis-flt-lt-rajan-dhall-hospital':
		'Bệnh viện Fortis Flt. Lt. Rajan Dhall tại Vasant Kunj là bệnh viện đa khoa Fortis với 162 giường, nổi tiếng với các chương trình phẫu thuật thẩm mỹ và tim mạch cho bệnh nhân trong nước và quốc tế.',
	'blk-max-super-speciality-hospital':
		'Bệnh viện BLK-Max Super Speciality là bệnh viện tuyến ba với 650 giường ở trung tâm Delhi, đặc biệt nổi tiếng về thần kinh học và chỉnh hình, với trang thiết bị chẩn đoán tiên tiến và năng lực hồi sức cấp cứu lớn.',
	'artemis-hospital':
		'Bệnh viện Artemis tại Gurugram là bệnh viện đa khoa với 750 giường, đặc biệt nổi tiếng về điều trị hiếm muộn và sức khỏe sinh sản, cùng với nhiều chuyên khoa phẫu thuật và nội khoa khác.',
	'max-super-speciality-hospital-saket':
		'Bệnh viện Max Super Speciality, Saket là bệnh viện tuyến ba với 539 giường, nổi tiếng với chương trình phụ sản, thuộc hệ thống bệnh viện chuyên khoa sâu Max tại Delhi NCR.',
	'indraprastha-apollo-hospitals':
		'Bệnh viện Indraprastha Apollo tại Delhi là cơ sở chủ lực của tập đoàn Apollo với chương trình chuyên biệt về hiếm muộn và sức khỏe sinh sản, được hỗ trợ bởi hạ tầng đa khoa và chẩn đoán rộng lớn hơn của tập đoàn.',
	'apollo-spectra-hospitals':
		'Bệnh viện Apollo Spectra tại Delhi là bệnh viện phẫu thuật công suất cao bao gồm hô hấp, nhi khoa, nội tổng quát và tiêu hóa, được thiết kế cho các thủ thuật ngoại trú hoặc lưu viện ngắn ngày nhanh chóng.',
	'batra-hospital-medical-research-centre':
		'Bệnh viện Batra & Trung tâm Nghiên cứu Y khoa tại Tughlakabad là bệnh viện đại học với 490 giường, cung cấp dịch vụ hô hấp, nhi khoa, nội tổng quát và tiêu hóa, với chương trình nghiên cứu sau đại học tích cực.',
	'aakash-healthcare-super-speciality-hospital':
		'Bệnh viện Aakash Healthcare Super Speciality tại Dwarka là trung tâm 230 giường tập trung vào tiết niệu, thận học và ung bướu, với năng lực phẫu thuật robot và ít xâm lấn chuyên biệt.',
	'manipal-hospital-dwarka':
		'Bệnh viện Manipal, Dwarka là cơ sở chuyên khoa sâu 240 giường của tập đoàn Manipal, cung cấp dịch vụ tim mạch, thần kinh và sản phụ khoa cho bệnh nhân ở phía tây Delhi và Gurugram.',
	'sir-ganga-ram-hospital':
		'Bệnh viện Sir Ganga Ram là một trong những bệnh viện tư nhân lâu đời và lớn nhất Delhi, cơ sở 900 giường tại Rajinder Nagar bao gồm chỉnh hình, ngoại tổng quát, nội khoa và tim mạch.',
	'amrita-hospital':
		'Bệnh viện Amrita tại Faridabad là một trong những bệnh viện tư nhân lớn nhất Ấn Độ, khuôn viên 2.600 giường cung cấp sản phụ khoa, tiêu hóa và tiết niệu cùng hàng chục chuyên khoa khác.',
	'metro-heart-institute-with-multispeciality':
		'Viện Metro Heart with Multispeciality tại Faridabad là bệnh viện 200 giường tập trung vào tim mạch, cung cấp chăm sóc tim tiên tiến cùng với phạm vi dịch vụ đa khoa ngày càng mở rộng cho khu vực Faridabad.',

	'the-sight-avenue':
		'The Sight Avenue có mặt tại Greater Kailash (Delhi) và Khu 38 của Gurugram, cung cấp chăm sóc mắt toàn diện bao gồm võng mạc, giác mạc, đục thủy tinh thể, LASIK/SMILE, ICL và glôcôm dưới một đội ngũ duy nhất.',
	'shroff-eye-centre':
		'Shroff Eye Centre vận hành ba cơ sở tại Kailash Colony, Connaught Place và Gurugram, với uy tín vững chắc về ghép giác mạc, võng mạc, đục thủy tinh thể, glôcôm và phẫu thuật LASIK.',
	'eye7-hospitals':
		'Eye7 Hospitals có mặt tại Lajpat Nagar và Janakpuri, Delhi, cung cấp chăm sóc võng mạc, đục thủy tinh thể, LASIK, giác mạc và glôcôm trong một bệnh viện mắt đa chuyên khoa chuyên biệt.',
	'sharp-sight-eye-hospitals':
		'Sharp Sight Eye Hospitals vận hành mạng lưới phòng khám tại Preet Vihar và các địa điểm khác ở Delhi-NCR, tập trung vào võng mạc, đục thủy tinh thể, glôcôm, LASIK và bệnh võng mạc đái tháo đường.',
	'venu-eye-institute-research-centre':
		'Viện Nghiên cứu và Mắt Venu tại Sheikh Sarai (nam Delhi) là bệnh viện mắt chuyên khoa sâu nổi tiếng về chăm sóc mắt phức tạp, võng mạc, giác mạc và glôcôm, với chương trình nghiên cứu tích cực.',
	'guru-nanak-eye-centre':
		'Guru Nanak Eye Centre ở trung tâm Delhi là bệnh viện mắt tổng hợp và chuyên khoa sâu cung cấp nhãn khoa, võng mạc, giác mạc, glôcôm và chăm sóc mắt cấp cứu 24/7.',
	'shining-smile-dentistry':
		'Shining Smile Dentistry tại Saket (New Delhi) là phòng khám nha khoa toàn diện cung cấp nha khoa tổng quát và thẩm mỹ, chỉnh nha, cấy ghép implant và chăm sóc nha khoa cấp cứu dưới một mái nhà.',
	'dr-agarwal-s-eye-hospital':
		"Dr Agarwal's Eye Hospital có mặt tại nhiều địa điểm ở Delhi-NCR, thuộc một trong những chuỗi bệnh viện mắt lớn nhất Ấn Độ, cung cấp đục thủy tinh thể, võng mạc, giác mạc, glôcôm và phẫu thuật LASIK/khúc xạ.",
	'asg-eye-hospital':
		'ASG Eye Hospital vận hành các trung tâm tại Noida và các địa điểm khác ở NCR, cung cấp đục thủy tinh thể, võng mạc, giác mạc, glôcôm và phẫu thuật khúc xạ trong mạng lưới mắt trên toàn quốc.',
	'eye-q-super-speciality-eye-hospitals':
		'Eye-Q Super-Speciality Eye Hospitals có mặt tại Gurugram và toàn bộ NCR, cung cấp đục thủy tinh thể, võng mạc, glôcôm và phẫu thuật LASIK/khúc xạ trong chuỗi trung tâm mắt chuyên biệt.',

	'medanta-the-medicity':
		'Medanta – The Medicity tại Gurugram là một trong những cơ sở đa chuyên khoa sâu lớn nhất Ấn Độ được JCI công nhận, khuôn viên 1.250 giường tập trung vào tim mạch, ung bướu và ghép tạng, với đội ngũ chuyên gia được đào tạo quốc tế.',
	'fortis-memorial-research-institute-fmri':
		'Viện Nghiên cứu Fortis Memorial (FMRI) tại Gurugram là bệnh viện chăm sóc tuyến bốn 1.000 giường được JCI công nhận, nổi tiếng với các chương trình ung bướu, tim mạch và phẫu thuật robot tiên tiến.',
	'sanar-international-hospitals':
		'Sanar International Hospitals tại Gurugram là bệnh viện đa khoa 200 giường cung cấp dịch vụ chỉnh hình, tim mạch và thần kinh, được thiết kế cho bệnh nhân trong nước và quốc tế.',
	'jaypee-hospital':
		'Bệnh viện Jaypee tại Noida là bệnh viện chuyên khoa sâu 1.200 giường với các chương trình tim mạch, ung bướu và thần kinh mạnh mẽ phục vụ khu vực Greater Noida và NCR.',
	'marengo-asia-hospitals':
		'Marengo Asia Hospitals, Faridabad là bệnh viện đa khoa 300 giường cung cấp dịch vụ tim mạch, chỉnh hình và tiêu hóa, thuộc hệ thống Marengo Asia rộng lớn hơn trên khắp Ấn Độ.',
	'marengo-asia-hospitals-gurugram':
		'Marengo Asia Hospitals, Gurugram là cơ sở chủ lực của hệ thống tám bệnh viện bao gồm khoa học tim mạch, thần kinh học và chỉnh hình-thay khớp, với các chương trình ghép gan và ung bướu do các chuyên gia cao cấp dẫn dắt.',
	'fortis-hospital':
		'Bệnh viện Fortis, Noida là bệnh viện đa khoa 200 giường thuộc hệ thống Fortis, cung cấp dịch vụ tim mạch, chỉnh hình và ung bướu cho bệnh nhân tại Noida và NCR.',
	'fortis-hospital-shalimar-bagh':
		'Bệnh viện Fortis, Shalimar Bagh là bệnh viện đa khoa 262 giường ở bắc Delhi bao gồm tim mạch, thần kinh và chỉnh hình thuộc tập đoàn Fortis Healthcare.',
	'fortis-hospital-faridabad':
		'Bệnh viện Fortis, Faridabad là bệnh viện đa khoa 200 giường cung cấp dịch vụ tim mạch, chỉnh hình và ung bướu cho bệnh nhân tại Faridabad và nam NCR.',
	'max-hospital':
		'Bệnh viện Max, Gurugram là cơ sở đa khoa 200 giường của tập đoàn Max Healthcare, cung cấp dịch vụ tim mạch, chỉnh hình và ung bướu ngay trung tâm Gurugram.',
	'max-super-speciality-hospital-vaishali':
		'Bệnh viện Max Super Speciality, Vaishali là bệnh viện 400 giường tại Ghaziabad bao gồm tim mạch, thần kinh và chỉnh hình thuộc hệ thống Max Healthcare.',
	'max-super-speciality-hospital-noida':
		'Bệnh viện Max Super Speciality, Noida là bệnh viện tuyến ba 400 giường cung cấp dịch vụ tim mạch, ung bướu và chỉnh hình cho bệnh nhân tại Noida và đông NCR.',
	'max-super-speciality-hospital-dwarka':
		'Bệnh viện Max Super Speciality, Dwarka là bệnh viện 300 giường ở tây Delhi cung cấp dịch vụ tim mạch, thần kinh và chỉnh hình thuộc tập đoàn Max Healthcare.',
	'max-super-speciality-hospital-shalimar-bagh':
		'Bệnh viện Max Super Speciality, Shalimar Bagh là cơ sở 400 giường ở bắc Delhi cung cấp tim mạch, ung bướu và chỉnh hình thuộc hệ thống Max Healthcare.',
	'max-smart-super-speciality-hospital':
		'Bệnh viện Max Smart Super Speciality tại Saket là bệnh viện tuyến ba 300 giường nổi tiếng với các chương trình khoa học tim mạch, ung bướu và phẫu thuật robot ở nam Delhi.',
	'psri-hospital':
		'Bệnh viện PSRI tại Sheikh Sarai là bệnh viện 425 giường tập trung vào tiêu hóa, thận học và hô hấp, với uy tín vững chắc về bệnh gan và tiêu hóa.',
	'venkateshwar-hospital':
		'Bệnh viện Venkateshwar tại Dwarka là bệnh viện đa khoa 150 giường cung cấp dịch vụ tim mạch, chỉnh hình và ung bướu cho bệnh nhân ở tây Delhi.',
	'primus-super-speciality-hospital':
		'Bệnh viện Primus Super Speciality tại Chanakyapuri là bệnh viện 200 giường ở trung tâm Delhi cung cấp dịch vụ chỉnh hình, tim mạch và tiêu hóa gần khu ngoại giao.',
	'ck-birla-hospital':
		'Bệnh viện CK Birla tại Punjabi Bagh là bệnh viện đa khoa 162 giường đặc biệt nổi tiếng về sức khỏe phụ nữ, cùng với chỉnh hình và tim mạch.',
	'narayana-hospital':
		'Bệnh viện Narayana, Gurugram là cơ sở đa khoa 190 giường của tập đoàn Narayana Health, cung cấp dịch vụ tim mạch, ung bướu và chỉnh hình.',
	'asian-institute-of-medical-sciences':
		'Asian Institute of Medical Sciences tại Faridabad là bệnh viện đa khoa 400 giường cung cấp dịch vụ tim mạch, thần kinh và chỉnh hình cho khu vực Faridabad.',
	'yatharth-super-speciality-hospital':
		'Bệnh viện Yatharth Super Speciality có mặt tại Noida và Greater Noida, cung cấp dịch vụ tim mạch, chỉnh hình và thần kinh tại nhiều địa điểm ở đông NCR.',
	'yashoda-super-speciality-hospitals':
		'Yashoda Super Speciality Hospitals tại Ghaziabad là bệnh viện 250 giường cung cấp dịch vụ tim mạch, tiêu hóa và chỉnh hình cho bệnh nhân tại Ghaziabad và NCR.',
	'saroj-super-speciality-hospital':
		'Bệnh viện Saroj Super Speciality tại Rohini là bệnh viện 250 giường ở tây bắc Delhi cung cấp dịch vụ tim mạch, chỉnh hình và thần kinh.',
	'aakash-hospital':
		'Bệnh viện Aakash tại Malviya Nagar là bệnh viện đa khoa 100 giường cung cấp dịch vụ nội tổng quát, chỉnh hình và phụ khoa cho bệnh nhân ở nam Delhi.',
	'sci-international-hospital':
		'SCI International Hospital tại Greater Kailash là bệnh viện khu vực 50 giường tập trung vào hiếm muộn, phụ khoa và ngoại tổng quát ở nam Delhi.',
	'the-signature-advanced-super-speciality-hospital':
		'The Signature Advanced Super Speciality Hospital tại Gurugram là cơ sở 100 giường cung cấp dịch vụ chỉnh hình, tim mạch và thần kinh cho bệnh nhân tại Gurugram.',

	'sci-ivf-hospital':
		'SCI IVF Hospital tại Greater Kailash-1 là phòng khám hiếm muộn chuyên biệt, cung cấp IVF và điều trị hiếm muộn với đội ngũ chuyên về y học sinh sản.',
	'nova-ivf-fertility':
		'Nova IVF Fertility có mặt tại nhiều địa điểm ở NCR, thuộc một trong những chuỗi hiếm muộn lớn nhất Ấn Độ, cung cấp IVF và điều trị hiếm muộn theo quy trình chuẩn hóa giữa các trung tâm.',
	'fortis-ridge-ivf-centre':
		'Fortis Ridge IVF Centre phục vụ bệnh nhân tại Delhi NCR với IVF và điều trị hiếm muộn, được hỗ trợ bởi tập đoàn Fortis Healthcare.',
	'delhi-ivf-fertility-research-centre':
		'Delhi IVF & Fertility Research Centre tại Mandi House là phòng khám hiếm muộn lâu đời kết hợp điều trị IVF với chương trình nghiên cứu lâm sàng tích cực.',
	'indira-ivf':
		'Indira IVF có mặt tại nhiều địa điểm ở Delhi/NCR, thuộc một trong những mạng lưới hiếm muộn lớn nhất Ấn Độ, cung cấp quy trình IVF và điều trị hiếm muộn chuẩn hóa.',
	'cloudnine-ivf-centre-kailash-colony':
		'Cloudnine IVF Centre, Kailash Colony thuộc tập đoàn thai sản và hiếm muộn Cloudnine, cung cấp IVF và điều trị hiếm muộn cùng với các dịch vụ sức khỏe phụ nữ rộng hơn.',
	'international-fertility-centre':
		'International Fertility Centre tại Green Park Extension là phòng khám chuyên về IVF và điều trị hiếm muộn, phục vụ bệnh nhân trong nước và quốc tế từ nam Delhi.',
	'laimaa-fertility-ivf-surrogacy-clinic':
		'Laimaa Fertility (IVF & Surrogacy Clinic) tại Greater Kailash cung cấp các chương trình IVF, điều trị hiếm muộn và mang thai hộ cho bệnh nhân đang trong quá trình hỗ trợ sinh sản.',
	'gaudium-ivf':
		'Gaudium IVF tại South Extension-II là phòng khám hiếm muộn chuyên biệt, cung cấp IVF và điều trị hiếm muộn với đội ngũ chuyên về y học sinh sản.',
	'pristyn-care-ferticity-super-speciality-ivf-hospital':
		'Pristyn Care Ferticity Super Speciality & IVF Hospital tại Malviya Nagar kết hợp chương trình hiếm muộn và IVF với mạng lưới phẫu thuật rộng lớn hơn của Pristyn Care.',
	'nova-ivf-fertility-centre-rajouri-garden':
		'Nova IVF Fertility Centre, Rajouri Garden là cơ sở ở tây Delhi thuộc mạng lưới Nova IVF, cung cấp IVF và điều trị hiếm muộn theo quy trình chuẩn hóa của tập đoàn.',
	'elixir-fertility-centre':
		'Elixir Fertility Centre tại Gujranwala Town là phòng khám chuyên về IVF và điều trị hiếm muộn phục vụ bệnh nhân ở bắc Delhi.',
	'femmenest-fertility-ivf-centre':
		'Femmenest Fertility & IVF Centre tại Anand Vihar cung cấp IVF và điều trị hiếm muộn cho bệnh nhân ở đông Delhi.',
	'india-ivf-clinic':
		'India IVF Clinic tại Vasant Vihar là phòng khám hiếm muộn chuyên biệt, cung cấp IVF và điều trị hiếm muộn ở tây nam Delhi.',
	'she-delhi-ivf-fertility-centre':
		'She Delhi – IVF & Fertility Centre tại Greater Kailash-II cung cấp IVF và điều trị hiếm muộn với đội ngũ y học sinh sản chuyên biệt ở nam Delhi.',
	'zemya-ivf-fertility-clinics':
		'Zemya IVF & Fertility Clinics tại Green Park Extension cung cấp IVF và điều trị hiếm muộn cho bệnh nhân ở nam Delhi.',

	'kokilaben-dhirubhai-ambani-hospital':
		'Kokilaben Dhirubhai Ambani Hospital là cơ sở chủ lực 750 giường được JCI công nhận tại Mumbai, nổi tiếng với các chương trình tim mạch, ung bướu và thần kinh tiên tiến cùng bộ phận bệnh nhân quốc tế vững mạnh.',
	'p-d-hinduja-hospital':
		'P. D. Hinduja Hospital là cơ sở 350 giường được JCI công nhận tại Mumbai, với uy tín lâu đời về tim mạch, tiêu hóa và chỉnh hình.',
	'fortis-hospital-mulund':
		'Bệnh viện Fortis, Mulund là bệnh viện 345 giường tại Mumbai nổi tiếng về ghép tạng, ung bướu và tim mạch, thuộc hệ thống Fortis Healthcare.',
	'jaslok-hospital':
		'Jaslok Hospital là cơ sở 400 giường tại Mumbai với chuyên môn vững chắc về thần kinh, chỉnh hình và ngoại tổng quát, một trong những bệnh viện tư nhân lâu đời nhất thành phố.',
	'nanavati-max-super-speciality-hospital':
		'Nanavati Max Super Speciality Hospital là bệnh viện 350 giường tại Mumbai cung cấp dịch vụ tim mạch, ung bướu và chỉnh hình thuộc tập đoàn Max Healthcare.',

	'apollo-hospitals-greams-road':
		'Apollo Hospitals, Greams Road là cơ sở chủ lực được JCI công nhận của tập đoàn Apollo Hospitals, cơ sở 550 giường tại Chennai nổi tiếng về tim mạch, ung bướu và ghép tạng.',
	'miot-international':
		'MIOT International là bệnh viện 1.000 giường được JCI công nhận tại Chennai, đặc biệt nổi tiếng về chỉnh hình, tim mạch và thần kinh, với chương trình bệnh nhân quốc tế lớn.',
	'gleneagles-global-health-city':
		'Gleneagles Global Health City tại Chennai là bệnh viện đa khoa 450 giường nổi tiếng về ghép gan, ghép thận và ung bướu.',
	'fortis-malar-hospital':
		'Fortis Malar Hospital tại Chennai là bệnh viện đa khoa 150 giường cung cấp dịch vụ tim mạch, chỉnh hình và điều trị hiếm muộn.',
	'kauvery-hospital':
		'Kauvery Hospital tại Chennai là bệnh viện chuyên khoa sâu 500 giường cung cấp dịch vụ tim mạch, thận học và tiêu hóa trong mạng lưới đang phát triển ở nam Ấn Độ.',

	'manipal-hospital-old-airport-road':
		'Manipal Hospital, Old Airport Road là cơ sở chủ lực 650 giường của Bangalore được JCI công nhận, nổi tiếng về dịch vụ chỉnh hình, tim mạch và ung bướu.',
	'sakra-world-hospital':
		'Sakra World Hospital là bệnh viện 300 giường được JCI công nhận tại Bangalore, xây dựng theo tiêu chuẩn hợp tác Nhật Bản, nổi tiếng về chỉnh hình, thần kinh và phẫu thuật robot.',
	'narayana-institute-of-cardiac-sciences':
		'Narayana Institute of Cardiac Sciences tại Bangalore là bệnh viện tim chuyên biệt 500 giường của tập đoàn Narayana Health, tập trung vào tim mạch và phẫu thuật tim quy mô lớn.',
	'fortis-hospital-bannerghatta-road':
		'Fortis Hospital, Bannerghatta Road là bệnh viện 400 giường tại Bangalore nổi tiếng về phẫu thuật thẩm mỹ, chỉnh hình và tim mạch, thuộc hệ thống Fortis Healthcare.',
	'aster-cmi-hospital':
		'Aster CMI Hospital tại Bangalore là bệnh viện chuyên khoa sâu 500 giường cung cấp thần kinh, ung bướu và ghép tạng thuộc tập đoàn Aster DM Healthcare.',

	'apollo-hospitals-jubilee-hills':
		'Apollo Hospitals, Jubilee Hills là cơ sở chủ lực được JCI công nhận của mạng lưới Apollo tại Hyderabad, bệnh viện 500 giường nổi tiếng về ghép tạng, ung bướu và tim mạch.',
	'continental-hospitals':
		'Continental Hospitals tại Hyderabad là bệnh viện 460 giường được JCI công nhận với các chương trình thần kinh, chỉnh hình và ghép tạng mạnh mẽ.',
	'yashoda-hospitals-somajiguda':
		'Yashoda Hospitals, Somajiguda là bệnh viện 700 giường tại Hyderabad cung cấp dịch vụ tim mạch, thận học và tiêu hóa thuộc tập đoàn Yashoda.',
	'global-hospitals-hyderabad':
		'Global Hospitals, Hyderabad là bệnh viện 500 giường nổi tiếng về ghép gan và ghép thận, một trong những trung tâm ghép tạng hoạt động sôi nổi nhất nam Ấn Độ.',
	'kims-hospitals-secunderabad':
		'KIMS Hospitals, Secunderabad là bệnh viện 1.000 giường cung cấp dịch vụ tim mạch, chỉnh hình và ung bướu, một trong những bệnh viện tư nhân lớn nhất Hyderabad.',

	'amrita-institute-of-medical-sciences-kochi':
		'Amrita Institute of Medical Sciences, Kochi là bệnh viện chuyên khoa sâu học thuật 1.300 giường nổi tiếng về ghép tạng, ung bướu và tim mạch.',
	'aster-medcity':
		'Aster Medcity tại Kochi là bệnh viện 670 giường được JCI công nhận, cung cấp tim mạch, hiếm muộn và chỉnh hình với vai trò cơ sở chủ lực Kerala của tập đoàn Aster DM Healthcare.',
	'lakeshore-hospital':
		'Lakeshore Hospital tại Kochi là bệnh viện đa khoa 400 giường nổi tiếng về tiêu hóa, thận học và tim mạch.',
	'kims-health-kochi':
		'KIMS Health, Kochi là bệnh viện 500 giường cung cấp các chương trình hiếm muộn, sức khỏe phụ nữ và Ayurveda cùng chăm sóc sức khỏe rộng hơn cùng dịch vụ đa khoa.',

	'apollo-multispeciality-hospitals-kolkata':
		'Apollo Multispeciality Hospitals, Kolkata là bệnh viện 570 giường được JCI công nhận nổi tiếng về ung bướu, tim mạch và nhãn khoa, thuộc tập đoàn Apollo Hospitals.',
	'amri-hospitals-dhakuria':
		'AMRI Hospitals, Dhakuria là bệnh viện 200 giường tại Kolkata cung cấp dịch vụ tim mạch, chỉnh hình và thần kinh thuộc mạng lưới AMRI.',
	'fortis-hospital-anandapur':
		'Fortis Hospital, Anandapur tại Kolkata là bệnh viện đa khoa 300 giường cung cấp dịch vụ ung bướu, tim mạch và chỉnh hình thuộc tập đoàn Fortis Healthcare.',
	'medica-superspecialty-hospital':
		'Medica Superspecialty Hospital tại Kolkata là bệnh viện 400 giường nổi tiếng về nhãn khoa, ung bướu và thận học.',

	'zydus-hospitals':
		'Zydus Hospitals tại Ahmedabad là bệnh viện chuyên khoa sâu 450 giường nổi tiếng về ghép gan, ghép thận và tim mạch.',
	'cims-hospital':
		'CIMS Hospital tại Ahmedabad là bệnh viện 250 giường được JCI công nhận chuyên về tim mạch, phẫu thuật tim và thần kinh.',
	'sterling-hospital':
		'Sterling Hospital tại Ahmedabad là bệnh viện đa khoa 200 giường cung cấp ghép thận, chỉnh hình và ung bướu.',
	'shalby-hospitals':
		'Shalby Hospitals tại Ahmedabad là bệnh viện chuyên khoa sâu 300 giường nổi tiếng về chỉnh hình, tim mạch và ung bướu, thuộc tập đoàn Shalby, được công nhận trên toàn quốc về phẫu thuật thay khớp.',
};

function translateBeds(beds: string): string {
	if (bedsPhrases[beds]) return bedsPhrases[beds];
	return beds.replace(/\bBeds\b/, 'giường').replace(/\bBed\b/, 'giường').replace(/\bLocations\b/, 'cơ sở').replace(/\bLocation\b/, 'cơ sở');
}

export const translateHospital = (hospital: HospitalData): HospitalData => {
	const name = localizeHospitalName(hospital, 'vi');
	const about = (aboutMap[hospital.slug] ?? hospital.about).split(hospital.name).join(name);
	return {
		...hospital,
		name,
		city: localizeCity(hospital.city, 'vi'),
		about,
		country: countryMap[hospital.country] ?? hospital.country,
		accreditation: accreditationMap[hospital.accreditation] ?? hospital.accreditation,
		specialties: hospital.specialties.map((specialty) => specialtyMap[specialty] ?? specialty),
		beds: translateBeds(hospital.beds),
	};
};

export const translateHospitals = (list: HospitalData[]): HospitalData[] => list.map(translateHospital);
