/**
 * Vietnamese translations for the deep treatment content in src/data/treatments.ts.
 *
 * Keyed by slug. Only translatable fields are included — numeric fields
 * (prices, durations, counts) live in the English source and are reused as-is.
 * AI-generated; recommend a native Vietnamese speaker with medical background
 * reviews this before it's relied on for clinical decisions.
 */

export interface FaqItemVi {
	question: string;
	answer: string;
}

export interface CostRowVi {
	country: string;
	waitTime: string;
	successRate: string;
}

export interface TreatmentDataVi {
	name: string;
	shortDescription: string;
	overview: string;
	procedures: string[];
	benefits: string[];
	flagshipProcedure: string;
	costComparison: CostRowVi[];
	inclusions: string[];
	exclusions: string[];
	faqs: FaqItemVi[];
}

export const viTreatments: Record<string, TreatmentDataVi> = {
	'cardiac-care': {
		name: 'Tim mạch',
		shortDescription: 'Bắc cầu, sửa van tim và nong mạch được thực hiện bởi các bác sĩ phẫu thuật đào tạo tại các trung tâm tim mạch hàng đầu.',
		overview:
			'Các chương trình tim mạch tại Ấn Độ quy tụ các bác sĩ phẫu thuật được đào tạo quốc tế cùng với một trong những khối lượng phẫu thuật lớn nhất thế giới, mang đến cho bệnh nhân cơ hội tiếp cận các thủ thuật tiên tiến như bắc cầu không dùng máy tim phổi và sửa van xâm lấn tối thiểu — với chi phí chỉ bằng một phần nhỏ so với phương Tây, không cần chờ đợi.',
		procedures: ['Phẫu thuật bắc cầu tim', 'Thay van tim', 'Nong mạch vành'],
		benefits: [
			'Bác sĩ phẫu thuật được đào tạo và chứng nhận tại Mỹ, Anh và châu Âu',
			'Một trong những khối lượng phẫu thuật tim lớn nhất thế giới, đồng nghĩa với kinh nghiệm thực tế sâu rộng',
			'Khoa ICU tim mạch chuyên biệt và đơn vị hồi phục trung gian',
			'Không cần chờ đợi — hầu hết các ca can thiệp được lên lịch trong vòng vài ngày sau ý kiến đầu tiên',
		],
		flagshipProcedure: 'Phẫu thuật bắc cầu động mạch vành (CABG)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '95–97%' },
			{ country: 'Vương quốc Anh', waitTime: '3–12 tháng (NHS)', successRate: '95–97%' },
			{ country: 'Đức', waitTime: '4–10 tuần', successRate: '94–96%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '93–95%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '96%+' },
		],
		inclusions: [
			'Đánh giá tim mạch trước phẫu thuật, điện tâm đồ, siêu âm tim và phân tích chụp mạch',
			'Chi phí bác sĩ phẫu thuật cho thủ thuật bắc cầu hoặc van tim',
			'Chi phí phòng mổ và gây mê',
			'Thời gian nằm ICU tim mạch (3 ngày) và phòng hồi phục riêng (6 ngày)',
			'Chăm sóc y tế, theo dõi và vật lý trị liệu trong thời gian nằm viện',
			'Thuốc tim mạch tiêu chuẩn và vật tư trong thời gian lưu trú',
			'Chi phí xét nghiệm và chẩn đoán hình ảnh liên quan đến thủ thuật',
			'Tóm tắt xuất viện và kế hoạch chăm sóc sau phẫu thuật bằng văn bản',
		],
		exclusions: [
			'Thời gian nằm viện trước khi nhập viện để ổn định bệnh nhân trước khi phê duyệt can thiệp',
			'Thời gian nằm viện hoặc ICU vượt quá thời hạn của gói dịch vụ',
			'Các can thiệp nâng cao như bắc cầu lần thứ hai hoặc sửa van ngoài phạm vi ban đầu',
			'Các thiết bị cấy ghép như máy tạo nhịp tim, nếu không được đề cập trước',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Điều trị các tình trạng có sẵn không liên quan được phát hiện khi đánh giá',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật bắc cầu tim tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói phẫu thuật bắc cầu động mạch vành (CABG) tại Ấn Độ bắt đầu từ 8.000 USD, thấp hơn khoảng 90% so với mức 120.000+ USD thường được tính tại Mỹ. Gói dịch vụ bao gồm đánh giá trước phẫu thuật, bản thân ca can thiệp, thời gian nằm ICU và phòng bệnh, chăm sóc y tế và thuốc tiêu chuẩn.',
			},
			{
				question: 'Tỷ lệ thành công của phẫu thuật tim tại Ấn Độ là bao nhiêu?',
				answer:
					'Các trung tâm tim mạch hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công từ 96% trở lên đối với phẫu thuật bắc cầu và van tim, tương đương với các chương trình tốt nhất tại Mỹ và châu Âu, được hỗ trợ bởi khoa ICU tim mạch chuyên biệt và khối lượng phẫu thuật hàng năm cao.',
			},
			{
				question: 'Tôi cần ở lại Ấn Độ bao lâu để phẫu thuật tim?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 9 ngày (3 ngày ICU, 6 ngày phòng hồi phục) và nên ở lại Ấn Độ tổng cộng khoảng 3 tuần để đội ngũ tim mạch có thể theo dõi quá trình hồi phục trước khi về nước.',
			},
			{
				question: 'Tôi có cần kiểm tra sức khỏe toàn diện trước khi ca phẫu thuật được xác nhận không?',
				answer:
					'Có. Báo cáo của bạn (điện tâm đồ, siêu âm tim, chụp mạch nếu có) sẽ được hội đồng tim mạch của chúng tôi xem xét trước khi hoàn tất kế hoạch điều trị và báo giá, và một buổi tư vấn từ xa với bác sĩ phẫu thuật sẽ được sắp xếp nếu cần.',
			},
			{
				question: 'Có phẫu thuật bắc cầu xâm lấn tối thiểu hoặc không dùng máy tim phổi không?',
				answer:
					'Có, nhiều bệnh viện đối tác của chúng tôi cung cấp bắc cầu không dùng máy tim phổi (tim vẫn đập) và sửa van xâm lấn tối thiểu, giúp giảm thời gian nằm ICU và thời gian hồi phục tùy theo trường hợp của bạn.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo tim mạch gần đây của bạn qua biểu mẫu liên hệ hoặc WhatsApp, và điều phối viên sẽ sắp xếp đánh giá chuyên môn miễn phí cùng báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	orthopedics: {
		name: 'Chỉnh hình',
		shortDescription: 'Thay khớp và y học thể thao với các chương trình hồi phục nhanh.',
		overview:
			'Từ thay khớp gối bằng robot đến hàn cột sống phức tạp, các trung tâm chỉnh hình tại Ấn Độ kết hợp công nghệ cấy ghép hiện đại với các chương trình vật lý trị liệu bài bản, giúp bệnh nhân đứng dậy nhanh hơn.',
		procedures: ['Thay khớp gối', 'Thay khớp háng', 'Hàn cột sống'],
		benefits: [
			'Thay khớp bằng robot và hỗ trợ máy tính có sẵn tại các trung tâm hàng đầu',
			'Vật lý trị liệu bài bản tại bệnh viện ngay từ ngày đầu',
			'Vật liệu cấy ghép chất lượng cao, nhập khẩu quốc tế',
			'Thời gian nằm viện điển hình 3–5 ngày cho thay khớp',
		],
		flagshipProcedure: 'Thay toàn bộ khớp gối',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–6 tuần', successRate: '96–98%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '96–98%' },
			{ country: 'Đức', waitTime: '3–6 tuần', successRate: '95–97%' },
			{ country: 'Thái Lan', waitTime: '2–3 tuần', successRate: '94–96%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '97%+' },
		],
		inclusions: [
			'Đánh giá chỉnh hình trước phẫu thuật, bao gồm chụp X-quang và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật và gây mê cho ca thay khớp',
			'Chi phí phòng mổ và vật liệu cấy ghép (chất lượng tiêu chuẩn, nếu không chọn loại cao cấp hơn)',
			'1 ngày ICU/hồi phục cộng 4 ngày phòng riêng',
			'Các buổi vật lý trị liệu bài bản tại bệnh viện',
			'Xét nghiệm, chẩn đoán hình ảnh và thuốc sau phẫu thuật tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm chương trình bài tập tại nhà và kế hoạch hồi phục',
		],
		exclusions: [
			'Vật liệu cấy ghép cao cấp hoặc theo yêu cầu riêng ngoài loại tiêu chuẩn',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Phẫu thuật hai bên (cả hai đầu gối), nếu không được báo giá riêng',
			'Các buổi vật lý trị liệu ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Phẫu thuật chỉnh sửa do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Thay khớp gối tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói thay toàn bộ khớp gối tại Ấn Độ bắt đầu từ 5.500 USD, thấp hơn khoảng 85% so với mức giá thông thường tại Mỹ, bao gồm chi phí bác sĩ phẫu thuật, vật liệu cấy ghép, thời gian nằm viện và vật lý trị liệu tại bệnh viện.',
			},
			{
				question: 'Có thay khớp gối bằng robot không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp thay khớp bằng robot và hỗ trợ máy tính, giúp cải thiện độ chính xác của vật liệu cấy ghép và giảm thời gian hồi phục cho các bệnh nhân đủ điều kiện.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 5 ngày và nên ở lại Ấn Độ 2–3 tuần để các nhà vật lý trị liệu có thể hướng dẫn quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Những thương hiệu vật liệu cấy ghép nào được sử dụng?',
				answer:
					'Các bệnh viện đối tác của chúng tôi sử dụng tiêu chuẩn là các thương hiệu vật liệu cấy ghép được chứng nhận quốc tế, với tùy chọn cao cấp hơn theo yêu cầu và báo giá riêng.',
			},
			{
				question: 'Có thể thay cả hai đầu gối trong cùng một chuyến đi không?',
				answer:
					'Có, thay khớp gối hai bên đồng thời hoặc theo giai đoạn có thể thực hiện cho các ứng viên phù hợp — bác sĩ phẫu thuật sẽ xác nhận phương án tốt nhất sau khi xem xét phim X-quang và tình trạng sức khỏe tổng quát.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi phim X-quang và tóm tắt triệu chứng của bạn qua biểu mẫu liên hệ, bạn sẽ nhận được đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	oncology: {
		name: 'Ung bướu',
		shortDescription: 'Chăm sóc ung bướu đa chuyên khoa kết hợp phẫu thuật, hóa trị và xạ trị định hướng.',
		overview:
			'Điều trị ung thư tại Ấn Độ được cung cấp bởi các hội đồng ung bướu quy tụ bác sĩ phẫu thuật ung bướu, bác sĩ ung bướu nội khoa và chuyên gia xạ trị để xây dựng kế hoạch điều trị phối hợp — cùng mô hình đa chuyên khoa được sử dụng tại các trung tâm ung bướu hàng đầu phương Tây.',
		procedures: ['Phẫu thuật khối u', 'Hóa trị', 'Xạ trị'],
		benefits: [
			'Hội đồng ung bướu đa chuyên khoa cho từng trường hợp',
			'Tiếp cận xạ trị tiên tiến (IMRT, IGRT, tùy chọn xạ trị proton tại các trung tâm chọn lọc)',
			'Chăm sóc toàn diện, từ chẩn đoán đến theo dõi sau điều trị',
			'Cố vấn ung bướu tận tâm hỗ trợ bệnh nhân và gia đình',
		],
		flagshipProcedure: 'Phẫu thuật cắt bỏ khối u',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Vương quốc Anh', waitTime: '2–6 tháng (NHS)', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: 'Thay đổi theo giai đoạn' },
		],
		inclusions: [
			'Xem xét của hội đồng ung bướu đối với báo cáo sinh thiết, chẩn đoán hình ảnh và giải phẫu bệnh hiện có',
			'Chi phí bác sĩ phẫu thuật, gây mê và đội ngũ ung bướu cho ca can thiệp chính',
			'Chi phí phòng mổ và ICU (2 ngày) cộng 6 ngày phòng riêng',
			'Chăm sóc y tế và thuốc hóa trị/hỗ trợ tiêu chuẩn trong thời gian nằm viện',
			'Chi phí xét nghiệm, chẩn đoán hình ảnh và giải phẫu bệnh liên quan đến thủ thuật chính',
			'Hỗ trợ tận tâm từ cố vấn ung bướu cho bệnh nhân và gia đình',
			'Tóm tắt xuất viện với kế hoạch hóa trị/xạ trị tiếp theo bài bản',
		],
		exclusions: [
			'Các chu kỳ hóa trị hoặc buổi xạ trị bổ sung ngoài gói ban đầu',
			'Các xét nghiệm hồ sơ gen/phân tử, trừ khi được yêu cầu cụ thể',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Liệu pháp nhắm trúng đích hoặc miễn dịch trị liệu, được báo giá riêng do chi phí biến động',
			'Điều trị các tình trạng không liên quan được phát hiện khi đánh giá',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật ung bướu tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói phẫu thuật cắt bỏ khối u tại Ấn Độ bắt đầu từ 6.000 USD, thấp hơn khoảng 90% so với ca can thiệp tương đương tại Mỹ, bao gồm việc xem xét của hội đồng ung bướu, ca can thiệp, thời gian nằm ICU/phòng bệnh và chăm sóc hỗ trợ ban đầu.',
			},
			{
				question: 'Hóa trị và xạ trị được tính giá như thế nào?',
				answer:
					'Các chu kỳ hóa trị và buổi xạ trị (IMRT/IGRT) được báo giá riêng, tùy theo phác đồ cụ thể của bạn, vì các phác đồ khác nhau rất nhiều tùy theo loại và giai đoạn ung thư — hội đồng ung bướu sẽ cung cấp ước tính chi tiết sau khi xem xét báo cáo của bạn.',
			},
			{
				question: 'Trường hợp của tôi sẽ được một đội ngũ chuyên gia xem xét, hay chỉ một bác sĩ?',
				answer:
					'Mỗi trường hợp đều trải qua hội đồng ung bướu đa chuyên khoa — bác sĩ phẫu thuật ung bướu, bác sĩ ung bướu nội khoa và chuyên gia xạ trị — trước khi kế hoạch điều trị được hoàn tất, cùng mô hình được sử dụng tại các trung tâm ung bướu hàng đầu phương Tây.',
			},
			{
				question: 'Tôi sẽ phải ở lại Ấn Độ bao lâu?',
				answer:
					'Bệnh nhân phẫu thuật thường nằm viện 8 ngày, với thời gian lưu trú tổng cộng khuyến nghị khoảng 4 tuần tại Ấn Độ nếu ca can thiệp được tiếp nối bằng hóa trị hoặc xạ trị.',
			},
			{
				question: 'Tôi có thể xin ý kiến thứ hai trước khi quyết định phẫu thuật không?',
				answer:
					'Có. Gửi báo cáo sinh thiết, chẩn đoán hình ảnh và giải phẫu bệnh của bạn để được hội đồng ung bướu xem xét miễn phí và cho ý kiến thứ hai, trước khi bạn quyết định có đi điều trị hay không.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo chẩn đoán của bạn qua biểu mẫu liên hệ hoặc WhatsApp, và điều phối viên ung bướu của chúng tôi sẽ sắp xếp xem xét của hội đồng cùng ước tính minh bạch trong 48 giờ.',
			},
		],
	},

	'cosmetic-surgery': {
		name: 'Phẫu thuật thẩm mỹ và tạo hình',
		shortDescription: 'Các thủ thuật thẩm mỹ và tái tạo được thực hiện bởi các bác sĩ phẫu thuật được chứng nhận quốc tế.',
		overview:
			'Kết hợp các bác sĩ phẫu thuật được chứng nhận với chăm sóc sau phẫu thuật hướng đến hồi phục theo phong cách khách sạn, Ấn Độ đã trở thành điểm đến ưa chuộng cho các thủ thuật thẩm mỹ và tái tạo — với sự riêng tư và kín đáo mà bệnh nhân quốc tế mong đợi.',
		procedures: ['Nâng mũi', 'Hút mỡ', 'Cấy tóc'],
		benefits: [
			'Bác sĩ phẫu thuật tạo hình và tái tạo được chứng nhận',
			'Phòng hồi phục riêng tư, kín đáo, tách biệt với khu bệnh nhân chung của bệnh viện',
			'Kỹ thuật hiện đại, bao gồm cấy tóc FUE và hút mỡ VASER',
			'Tư vấn đầy đủ trước/sau với hình ảnh 3D tại các phòng khám chọn lọc',
		],
		flagshipProcedure: 'Nâng mũi',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Vương quốc Anh', waitTime: '3–6 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Ấn Độ', waitTime: '3–7 ngày', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
		],
		inclusions: [
			'Tư vấn với hình ảnh 3D và lập kế hoạch trước phẫu thuật',
			'Chi phí bác sĩ phẫu thuật cho thủ thuật',
			'Chi phí phòng mổ và gây mê',
			'Một đêm tại phòng hồi phục riêng',
			'Băng gạc sau phẫu thuật, đồ nén y tế và buổi tái khám đầu tiên',
			'Thuốc tiêu chuẩn trong thời gian lưu trú hồi phục',
		],
		exclusions: [
			'Các thủ thuật kết hợp (vd: nâng mũi và độn cằm), nếu không được báo giá cùng nhau',
			'Thời gian hồi phục vượt quá một đêm, hoặc chăm sóc sau phẫu thuật kéo dài theo phong cách khách sạn',
			'Phẫu thuật chỉnh sửa thẩm mỹ sau giai đoạn lành thương ban đầu',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Đồ nén hoặc sản phẩm chăm sóc sẹo ngoài phần được cung cấp khi xuất viện',
		],
		faqs: [
			{
				question: 'Nâng mũi tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Nâng mũi tại Ấn Độ bắt đầu từ 2.000 USD, thấp hơn khoảng 75–85% so với Mỹ hoặc Anh, bao gồm tư vấn, can thiệp, gây mê và một đêm hồi phục riêng.',
			},
			{
				question: 'Các bác sĩ phẫu thuật có được đào tạo quốc tế không?',
				answer:
					'Có, các bác sĩ phẫu thuật thẩm mỹ đối tác của chúng tôi đều được chứng nhận và nhiều người đã được đào tạo thêm hoặc thực tập chuyên sâu tại Mỹ, Anh hoặc châu Âu về phẫu thuật thẩm mỹ và tái tạo.',
			},
			{
				question: 'Mức độ riêng tư và kín đáo được đảm bảo như thế nào?',
				answer:
					'Bệnh nhân hồi phục tại các phòng riêng, tách biệt với khu bệnh nhân chung của bệnh viện, và mọi buổi tư vấn cùng hồ sơ đều được xử lý với tính bảo mật nghiêm ngặt.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các thủ thuật thẩm mỹ cần khoảng 1–2 tuần tại Ấn Độ cho ca can thiệp và tái khám ban đầu, mặc dù điều này thay đổi tùy theo thủ thuật — bác sĩ phẫu thuật sẽ xác nhận lịch trình chính xác trong buổi tư vấn.',
			},
			{
				question: 'Tôi có thể kết hợp nhiều thủ thuật trong một chuyến đi không?',
				answer:
					'Có, nhiều bệnh nhân kết hợp các thủ thuật như nâng mũi với hút mỡ trong một chuyến đi; bác sĩ phẫu thuật sẽ tư vấn những gì có thể thực hiện an toàn cùng nhau, tùy theo tình trạng sức khỏe và nhu cầu hồi phục của bạn.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ mục tiêu và hình ảnh của bạn qua biểu mẫu liên hệ, đội ngũ của chúng tôi sẽ sắp xếp buổi tư vấn riêng với hình ảnh 3D và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	fertility: {
		name: 'Điều trị hiếm muộn',
		shortDescription: 'Thụ tinh trong ống nghiệm và chăm sóc sinh sản với tỷ lệ thành công cao cùng phác đồ cá nhân hóa.',
		overview:
			'Các phòng khám hiếm muộn tại Ấn Độ báo cáo tỷ lệ thành công tương đương với các trung tâm IVF hàng đầu thế giới, với phác đồ nội tiết cá nhân hóa, phòng lab phôi học riêng và không có tình trạng chờ đợi nhiều tháng như thường thấy ở châu Âu và Bắc Mỹ.',
		procedures: ['Thụ tinh trong ống nghiệm (IVF)', 'Bơm tinh trùng vào buồng tử cung (IUI)', 'Đông lạnh trứng'],
		benefits: [
			'Phòng lab phôi học và sàng lọc di truyền riêng',
			'Phác đồ kích thích nội tiết cá nhân hóa',
			'Không có tình trạng chờ đợi nhiều tháng — các chu kỳ thường bắt đầu trong vài tuần',
			'Gói dịch vụ trọn gói bao gồm thuốc, theo dõi và bản thân thủ thuật',
		],
		flagshipProcedure: 'Chu kỳ IVF',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '40–50% mỗi chu kỳ' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '35–45% mỗi chu kỳ' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '35–45% mỗi chu kỳ' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '40–48% mỗi chu kỳ' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '40–50% mỗi chu kỳ' },
		],
		inclusions: [
			'Đánh giá hiếm muộn ban đầu, bao gồm phân tích nội tiết và siêu âm',
			'Các buổi theo dõi kích thích buồng trứng',
			'Thủ thuật lấy trứng và chi phí gây mê',
			'Phôi học, thụ tinh và nuôi cấy phôi riêng',
			'Thủ thuật chuyển một phôi',
			'Thuốc hiếm muộn tiêu chuẩn cho chu kỳ kích thích',
		],
		exclusions: [
			'Trứng hiến, tinh trùng hiến hoặc các thỏa thuận mang thai hộ',
			'Xét nghiệm di truyền tiền làm tổ (PGT), trừ khi được yêu cầu cụ thể',
			'Các lần chuyển phôi bổ sung ngoài lần đầu, hoặc chu kỳ chuyển phôi đông lạnh',
			'Thuốc ngoài phác đồ kích thích tiêu chuẩn',
			'Điều trị vô sinh nam, như ICSI/TESA, nếu không được báo giá riêng',
		],
		faqs: [
			{
				question: 'Điều trị IVF tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Một chu kỳ IVF tại Ấn Độ bắt đầu từ 3.000 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá, theo dõi kích thích, lấy trứng, phôi học và chuyển một phôi.',
			},
			{
				question: 'Tỷ lệ thành công của IVF tại Ấn Độ là bao nhiêu?',
				answer:
					'Các phòng khám hiếm muộn hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công mỗi chu kỳ là 40–50%, tương đương với các phòng khám tốt nhất tại Mỹ và châu Âu, kết quả phụ thuộc vào độ tuổi và các yếu tố sinh sản nền tảng.',
			},
			{
				question: 'Một chu kỳ IVF kéo dài bao lâu?',
				answer:
					'Một chu kỳ đầy đủ, từ kích thích đến chuyển phôi, thường kéo dài 2–3 tuần, vì vậy hầu hết bệnh nhân quốc tế dự kiến ở lại Ấn Độ khoảng 3 tuần để hoàn thành theo dõi, lấy trứng và chuyển phôi.',
			},
			{
				question: 'Bạn có cung cấp chương trình trứng hiến hoặc mang thai hộ không?',
				answer:
					'Những thỏa thuận này liên quan đến các bước pháp lý và y tế bổ sung và được báo giá riêng — hãy liên hệ điều phối viên hiếm muộn của chúng tôi để thảo luận về điều kiện và quy định hiện hành.',
			},
			{
				question: 'Điều trị có thể bắt đầu mà không cần đi ngay không?',
				answer:
					'Có, buổi tư vấn từ xa ban đầu và xem xét báo cáo có thể diễn ra trước khi bạn khởi hành, để phác đồ của bạn được lên kế hoạch trước và chuyến đi được đồng bộ với chu kỳ kích thích.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ tiền sử hiếm muộn và mọi báo cáo xét nghiệm trước đây qua biểu mẫu liên hệ, điều phối viên hiếm muộn sẽ sắp xếp đánh giá chuyên môn và ước tính minh bạch trong 24 giờ.',
			},
		],
	},

	'organ-transplant': {
		name: 'Ghép tạng',
		shortDescription: 'Chương trình ghép gan và ghép thận với đội ngũ chăm sóc sau phẫu thuật tận tâm.',
		overview:
			'Ấn Độ thực hiện một trong những khối lượng ghép gan và ghép thận từ người hiến sống lớn nhất thế giới, được hỗ trợ bởi khoa ICU ghép tạng chuyên biệt và chương trình theo dõi sau phẫu thuật dài hạn cho bệnh nhân quốc tế.',
		procedures: ['Ghép thận', 'Ghép gan', 'Ghép tủy xương'],
		benefits: [
			'Chương trình ghép từ người hiến sống với khối lượng lớn',
			'Khoa ICU ghép tạng chuyên biệt và phòng hồi phục cách ly',
			'Lập kế hoạch ức chế miễn dịch dài hạn và chăm sóc theo dõi',
			'Hỗ trợ pháp lý và đạo đức cho việc đánh giá người hiến trong suốt quá trình',
		],
		flagshipProcedure: 'Ghép gan từ người hiến sống',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: 'Nhiều năm (danh sách chờ)', successRate: '88–92%' },
			{ country: 'Vương quốc Anh', waitTime: '1–3 năm', successRate: '88–91%' },
			{ country: 'Đức', waitTime: '6–18 tháng', successRate: '87–90%' },
			{ country: 'Thái Lan', waitTime: 'Trung bình', successRate: '85–88%' },
			{ country: 'Ấn Độ', waitTime: '2–4 tuần', successRate: '90%+' },
		],
		inclusions: [
			'Đánh giá trước ghép cho người nhận và một người hiến, dưới dạng ngoại trú',
			'Tiền phòng: người nhận — 21 ngày (5 ngày ICU + 16 ngày phòng riêng); người hiến — 8 ngày (2 ngày ICU + 6 ngày phòng riêng)',
			'Chi phí bác sĩ phẫu thuật cho người hiến và người nhận',
			'Chi phí bác sĩ gây mê cho người hiến và người nhận',
			'Chi phí phòng mổ cho người hiến và người nhận',
			'Chi phí dịch vụ gây mê cho người hiến và người nhận',
			'Chi phí dịch vụ xét nghiệm',
			'Chi phí dịch vụ truyền máu',
			'Chi phí dịch vụ chẩn đoán hình ảnh',
			'Chi phí dịch vụ vật lý trị liệu',
			'Chi phí dịch vụ dược, bao gồm thuốc và vật tư y tế',
		],
		exclusions: [
			'Thời gian nằm viện trước phẫu thuật để cải thiện tình trạng bệnh nhân, cũng như thuốc/xét nghiệm sau khi xuất viện',
			'Đánh giá bất kỳ người hiến bổ sung nào khác',
			'Bất kỳ khoảng thời gian nằm viện hoặc ICU nào vượt quá thời hạn của gói dịch vụ',
			'Tất cả xét nghiệm, thuốc và vật tư vượt mức trần chi phí',
			'Các loại thuốc đắt tiền hoặc ít sử dụng, như Zenapax, Simulect, Valcyte, Novoseven, Thymoglobulin, Ambisome, Caspofungin và Anidulafungin',
			'Chi phí cho bất kỳ buổi tư vấn hoặc thủ thuật nào với chuyên gia không liên quan đến ghép tạng',
			'Chi phí chẩn đoán hình ảnh can thiệp, bao gồm dẫn lưu qua da, dẫn lưu mật xuyên gan qua da và chụp mạch',
			'Các thủ thuật tim mạch (siêu âm tim, chụp mạch) và chi phí liên quan đến thận học (lọc máu, CRRT)',
			'Các thủ thuật nội soi như ERCP',
			'Can thiệp lại',
		],
		faqs: [
			{
				question: 'Ghép gan tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Ca ghép gan tại Ấn Độ bắt đầu từ 25.000 USD, thấp hơn khoảng 60–70% so với Mỹ hoặc Anh. Gói dịch vụ bao gồm đánh giá trước ghép cho người nhận và một người hiến, ca can thiệp cho cả hai, thời gian nằm ICU và bệnh viện, chi phí phòng mổ, chăm sóc y tế, xét nghiệm và dịch vụ dược.',
			},
			{
				question: 'Tỷ lệ thành công của ghép gan tại Ấn Độ là bao nhiêu?',
				answer:
					'Các trung tâm ghép gan hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công sau một năm hơn 90%, tương đương với các chương trình hàng đầu tại Mỹ và châu Âu. Tỷ lệ sống sau 5 năm khoảng 75%, tùy thuộc vào bệnh lý nền, tình trạng sức khỏe tổng quát của bệnh nhân và việc tuân thủ theo dõi.',
			},
			{
				question: 'Ai có thể làm người hiến gan để ghép tại Ấn Độ?',
				answer:
					'Đối với ghép gan từ người hiến sống, người hiến phải là người thân ruột thịt gần gũi (cha/mẹ, anh/chị/em, con hoặc vợ/chồng), trong độ tuổi 18–55, khỏe mạnh, có nhóm máu tương thích và chức năng gan bình thường. Việc hiến tặng phải hoàn toàn tự nguyện — bất kỳ giao dịch tài chính nào giữa người hiến và người nhận đều là bất hợp pháp theo luật Ấn Độ. Đánh giá toàn diện về người hiến thường hoàn tất trong 2–3 ngày.',
			},
			{
				question: 'Thời gian nằm viện cho ghép gan tại Ấn Độ là bao lâu?',
				answer:
					'Người nhận nằm viện khoảng 21 ngày — 5 ngày ICU và 16 ngày phòng riêng. Người hiến nằm viện khoảng 8 ngày — 2 ngày ICU và 6 ngày phòng riêng. Sau khi xuất viện, người nhận nên ở lại Ấn Độ ít nhất 1 tháng để được theo dõi cẩn thận, do đó thời gian lưu trú tổng cộng tại Ấn Độ thường khoảng 2 tháng.',
			},
			{
				question: 'Gan có thể tái tạo sau khi hiến từ người hiến sống không?',
				answer:
					'Có. Gan là cơ quan rắn duy nhất trong cơ thể người có thể tái tạo hoàn toàn. Sau khi hiến một phần, phần gan còn lại của người hiến sẽ phát triển đến khoảng 80% kích thước ban đầu trong vài tuần và gần bằng kích thước ban đầu trong vài tháng. Phần gan được ghép cho người nhận cũng sẽ phát triển đến kích thước đầy đủ.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi hồ sơ y tế của người nhận và người hiến tiềm năng qua biểu mẫu liên hệ hoặc WhatsApp, đội ngũ điều phối ghép tạng của chúng tôi sẽ sắp xếp đánh giá chuyên môn miễn phí và buổi tư vấn từ xa với bác sĩ phẫu thuật ghép tạng trước khi bạn khởi hành.',
			},
		],
	},

	'dental-care': {
		name: 'Nha khoa',
		shortDescription: 'Cấy ghép, mặt dán sứ và phục hồi toàn bộ răng miệng, sử dụng công nghệ nha khoa kỹ thuật số mới nhất.',
		overview:
			'Thiết kế nụ cười kỹ thuật số, mão răng CAD/CAM trong ngày và phục hồi toàn diện bằng cấy ghép là tiêu chuẩn tại các trung tâm nha khoa hàng đầu Ấn Độ — mang lại kết quả trong vài ngày, thay vì nhiều tháng như thường thấy khi điều trị theo giai đoạn ở nước ngoài.',
		procedures: ['Cấy ghép răng', 'Mặt dán sứ', 'Phục hồi toàn bộ răng miệng'],
		benefits: [
			'Thiết kế nụ cười kỹ thuật số và mão răng CAD/CAM trong ngày',
			'Phục hồi toàn diện bằng cấy ghép hoàn tất chỉ trong một chuyến đi',
			'Vật liệu cấy ghép đẳng cấp quốc tế được sử dụng cho mọi trường hợp',
			'Kết hợp điều trị với thời gian hồi phục gần phòng khám',
		],
		flagshipProcedure: 'Cấy ghép toàn hàm răng',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: '95–97%' },
			{ country: 'Vương quốc Anh', waitTime: '3–6 tuần', successRate: '95–97%' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: '94–96%' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: '93–95%' },
			{ country: 'Ấn Độ', waitTime: '3–5 ngày', successRate: '95%+' },
		],
		inclusions: [
			'Tư vấn thiết kế nụ cười kỹ thuật số và quét 3D',
			'Chi phí nha sĩ cho việc đặt cấy ghép hoặc phục hồi',
			'Trụ cấy ghép và trụ nối chất lượng tiêu chuẩn',
			'Chế tác mão răng CAD/CAM trong ngày, khi phù hợp',
			'Gây tê tại chỗ và chi phí thủ thuật vô trùng',
			'Một buổi tái khám để kiểm tra quá trình lành thương và độ khít',
		],
		exclusions: [
			'Ghép xương hoặc nâng xoang, nếu không được xác định trong lần quét ban đầu',
			'Nâng cấp cấy ghép cao cấp ngoài trụ tiêu chuẩn',
			'Mão răng, mặt dán sứ hoặc phục hồi bổ sung ngoài kế hoạch điều trị đã thống nhất',
			'Điều trị chỉnh nha hoặc căn chỉnh răng trước khi đặt cấy ghép',
			'Buổi tái khám ngoài buổi đã bao gồm',
		],
		faqs: [
			{
				question: 'Cấy ghép răng tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Một trụ cấy ghép răng đơn tại Ấn Độ bắt đầu từ 800 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm tư vấn, đặt cấy ghép và mão răng CAD/CAM trong ngày, khi phù hợp.',
			},
			{
				question: 'Phục hồi toàn bộ răng miệng có thể hoàn tất trong một chuyến đi không?',
				answer:
					'Có, sử dụng thiết kế nụ cười kỹ thuật số và công nghệ mão răng trong ngày, hầu hết các trường hợp cấy ghép toàn hàm có thể hoàn tất trong một chuyến đi 7–10 ngày, so với nhiều tháng thường cần khi điều trị theo giai đoạn ở nước ngoài.',
			},
			{
				question: 'Những thương hiệu cấy ghép nào được sử dụng?',
				answer:
					'Các trung tâm nha khoa đối tác của chúng tôi sử dụng tiêu chuẩn là các thương hiệu cấy ghép được chứng nhận quốc tế, với nâng cấp lên thương hiệu cao cấp theo yêu cầu.',
			},
			{
				question: 'Thủ thuật có đau không?',
				answer:
					'Việc đặt cấy ghép được thực hiện dưới gây tê tại chỗ và thường được dung nạp tốt, hầu hết bệnh nhân trở lại hoạt động bình thường sau một hoặc hai ngày.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các trường hợp cấy ghép và phục hồi cần khoảng 7–10 ngày tại Ấn Độ để đặt cấy ghép, thực hiện mão răng trong ngày và tái khám trước khi về nước.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ phim X-quang nha khoa gần đây hoặc hình ảnh răng của bạn qua biểu mẫu liên hệ, điều phối viên nha khoa của chúng tôi sẽ sắp xếp xem xét và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	'eye-care': {
		name: 'Nhãn khoa',
		shortDescription: 'Phẫu thuật đục thủy tinh thể và chỉnh thị lực, xuất viện trong ngày ở hầu hết các trường hợp.',
		overview:
			'Các bệnh viện nhãn khoa tại Ấn Độ thực hiện các thủ thuật đục thủy tinh thể và khúc xạ với khối lượng cực lớn, mang đến cho các bác sĩ phẫu thuật kinh nghiệm sâu rộng về kỹ thuật không dùng dao, hỗ trợ laser, xuất viện trong ngày cho hầu hết bệnh nhân.',
		procedures: ['Phẫu thuật đục thủy tinh thể', 'LASIK', 'Điều trị võng mạc'],
		benefits: [
			'Phẫu thuật đục thủy tinh thể không dùng dao, hỗ trợ laser',
			'Xuất viện trong ngày cho hầu hết các thủ thuật',
			'Trung tâm khối lượng lớn với kinh nghiệm phẫu thuật sâu rộng',
			'Có tùy chọn thủy tinh thể nhân tạo cao cấp',
		],
		flagshipProcedure: 'Phẫu thuật đục thủy tinh thể (phaco)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: '98–99%' },
			{ country: 'Vương quốc Anh', waitTime: '8–18 tuần (NHS)', successRate: '98–99%' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: '97–99%' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: '97–98%' },
			{ country: 'Ấn Độ', waitTime: '2–4 ngày', successRate: '98%+' },
		],
		inclusions: [
			'Đánh giá mắt trước phẫu thuật, bao gồm đo sinh trắc và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật cho ca phẫu thuật đục thủy tinh thể không dùng dao, hỗ trợ laser',
			'Thủy tinh thể nhân tạo (IOL) đơn tiêu chuẩn',
			'Chi phí phòng mổ và thủ thuật vô trùng',
			'Xuất viện trong ngày kèm thuốc nhỏ mắt sau phẫu thuật',
			'Một buổi tái khám để xác nhận quá trình lành thương và chỉnh thị lực',
		],
		exclusions: [
			'Nâng cấp IOL cao cấp (thủy tinh thể đa tiêu hoặc trụ) ngoài loại đơn tiêu chuẩn',
			'Điều trị các bệnh lý mắt không liên quan, như tăng nhãn áp hoặc bệnh võng mạc, được phát hiện khi đánh giá',
			'Phẫu thuật mắt còn lại, nếu không được báo giá cùng nhau',
			'Buổi tái khám ngoài buổi đã bao gồm',
			'Kính hoặc kính áp tròng sau thủ thuật',
		],
		faqs: [
			{
				question: 'Phẫu thuật đục thủy tinh thể tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Phẫu thuật đục thủy tinh thể tại Ấn Độ bắt đầu từ 700 USD mỗi mắt, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá trước phẫu thuật, phẫu thuật hỗ trợ laser, một IOL tiêu chuẩn và buổi tái khám.',
			},
			{
				question: 'Ca can thiệp có không đau và nhanh chóng không?',
				answer:
					'Có, phẫu thuật đục thủy tinh thể hiện đại không dùng dao, hỗ trợ laser thường mất 15–20 phút mỗi mắt, dưới gây tê tại chỗ, hầu hết bệnh nhân được xuất viện trong ngày.',
			},
			{
				question: 'Tôi có thể chọn thủy tinh thể cao cấp (đa tiêu hoặc trụ) không?',
				answer:
					'Có, các tùy chọn thủy tinh thể nhân tạo cao cấp có sẵn cho bệnh nhân muốn giảm phụ thuộc vào kính sau thủ thuật — những loại này được báo giá riêng so với thủy tinh thể đơn tiêu chuẩn.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết bệnh nhân đục thủy tinh thể dự kiến khoảng 4–7 ngày tại Ấn Độ cho đánh giá trước phẫu thuật, ca can thiệp và một buổi tái khám trước khi về nước; LASIK có lịch trình ngắn tương tự.',
			},
			{
				question: 'LASIK có thể thực hiện cho cả hai mắt trong một lần đến không?',
				answer:
					'Có, LASIK và các thủ thuật khúc xạ khác thường được thực hiện cho cả hai mắt trong một lần đến, trong ngày, cho các ứng viên phù hợp, sau khi đánh giá trước phẫu thuật chi tiết.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ đơn kính mắt gần đây hoặc báo cáo hiện có của bạn qua biểu mẫu liên hệ, điều phối viên nhãn khoa của chúng tôi sẽ sắp xếp đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	neurology: {
		name: 'Thần kinh học và phẫu thuật thần kinh',
		shortDescription: 'Chuyên gia về não, cột sống và dây thần kinh, điều trị khối u, đột quỵ và các rối loạn thần kinh phức tạp.',
		overview:
			'Các trung tâm phẫu thuật thần kinh tại Ấn Độ kết hợp kỹ thuật vi phẫu và định vị hình ảnh với khoa ICU thần kinh chuyên biệt, mang đến cho bệnh nhân quốc tế cơ hội tiếp cận chăm sóc tiên tiến cho khối u não và đột quỵ, không cần chờ đợi chuyên gia lâu như thường thấy ở các nước khác.',
		procedures: ['Phẫu thuật khối u não', 'Phẫu thuật động kinh', 'Chăm sóc đột quỵ'],
		benefits: [
			'Bác sĩ phẫu thuật thần kinh được đào tạo về kỹ thuật vi phẫu và xâm lấn tối thiểu',
			'MRI trong mổ và định vị thần kinh có sẵn tại các trung tâm hàng đầu',
			'Khoa ICU thần kinh chuyên biệt với theo dõi tình trạng nguy kịch liên tục',
			'Hỗ trợ phục hồi thần kinh bài bản sau can thiệp',
		],
		flagshipProcedure: 'Cắt bỏ khối u não',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '85–90%' },
			{ country: 'Vương quốc Anh', waitTime: '3–9 tháng (NHS)', successRate: '85–90%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '84–89%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '82–87%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '85%+' },
		],
		inclusions: [
			'Đánh giá thần kinh trước phẫu thuật, phân tích MRI/CT và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật thần kinh và gây mê cho thủ thuật chính',
			'Chi phí phòng mổ, bao gồm định vị thần kinh khi phù hợp',
			'Thời gian nằm ICU thần kinh (4 ngày) cộng 8 ngày phòng hồi phục trung gian',
			'Chăm sóc y tế và theo dõi thần kinh tiêu chuẩn trong thời gian nằm viện',
			'Chi phí xét nghiệm và chẩn đoán hình ảnh liên quan đến thủ thuật',
			'Tóm tắt xuất viện với kế hoạch phục hồi thần kinh bài bản',
		],
		exclusions: [
			'Thời gian nằm viện trước khi nhập viện để ổn định bệnh nhân trước khi phê duyệt can thiệp',
			'Thời gian nằm viện hoặc ICU vượt quá thời hạn của gói dịch vụ',
			'Xạ trị hoặc hóa trị cho khối u ác tính, được báo giá riêng',
			'Các buổi phục hồi thần kinh ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật khối u não tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Cắt bỏ khối u não tại Ấn Độ bắt đầu từ 9.000 USD, thấp hơn khoảng 90% so với Mỹ, bao gồm đánh giá trước phẫu thuật, ca can thiệp, thời gian nằm ICU thần kinh và kế hoạch phục hồi bài bản.',
			},
			{
				question: 'Có các kỹ thuật phẫu thuật thần kinh xâm lấn tối thiểu không?',
				answer:
					'Có, nhiều bệnh viện đối tác của chúng tôi cung cấp phương pháp định vị hình ảnh và xâm lấn tối thiểu, bao gồm MRI trong mổ và định vị thần kinh, có thể cải thiện độ chính xác và giảm thời gian hồi phục cho các trường hợp đủ điều kiện.',
			},
			{
				question: 'Thời gian nằm viện cho phẫu thuật thần kinh là bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 12 ngày — 4 ngày ICU thần kinh và 8 ngày phòng hồi phục trung gian — với thời gian lưu trú tổng cộng khuyến nghị tại Ấn Độ khoảng 3–4 tuần để theo dõi.',
			},
			{
				question: 'Có cần xạ trị hoặc hóa trị sau can thiệp không?',
				answer:
					'Đối với khối u ác tính, đội ngũ thần kinh-ung bướu của bạn có thể đề xuất xạ trị hoặc hóa trị sau can thiệp — những phương pháp này được báo giá riêng, tùy theo phác đồ cụ thể của bạn, và được thảo luận như một phần của kế hoạch điều trị.',
			},
			{
				question: 'Tôi có thể xin ý kiến thứ hai trước khi đi không?',
				answer:
					'Có, hãy gửi phim chụp MRI/CT và báo cáo của bạn để được đánh giá chuyên môn miễn phí — hội đồng phẫu thuật thần kinh của chúng tôi sẽ xác nhận liệu can thiệp có được khuyến nghị hay không, trước khi bạn cam kết lên đường.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo thần kinh và hình ảnh chẩn đoán của bạn qua biểu mẫu liên hệ hoặc WhatsApp, điều phối viên sẽ sắp xếp đánh giá chuyên môn và ước tính minh bạch trong 48 giờ.',
			},
		],
	},

	'spine-surgery': {
		name: 'Phẫu thuật cột sống',
		shortDescription: 'Hàn cột sống, thay đĩa đệm và chỉnh vẹo cột sống, với các chương trình phục hồi bài bản.',
		overview:
			'Các trung tâm phẫu thuật cột sống tại Ấn Độ kết hợp bác sĩ phẫu thuật cột sống được đào tạo chuyên sâu với các kỹ thuật xâm lấn tối thiểu và bảo tồn vận động, giúp bệnh nhân bị đau lưng mãn tính, bệnh đĩa đệm và biến dạng cột sống tránh phải chờ đợi lâu như thường thấy ở phương Tây.',
		procedures: ['Hàn cột sống', 'Thay đĩa đệm', 'Chỉnh vẹo cột sống'],
		benefits: [
			'Bác sĩ phẫu thuật cột sống được đào tạo chuyên sâu, sử dụng kỹ thuật xâm lấn tối thiểu',
			'Tùy chọn thay đĩa đệm bảo tồn vận động, tại các trung tâm chọn lọc',
			'Vật lý trị liệu bài bản tại bệnh viện ngay từ ngày đầu',
			'Thời gian nằm viện điển hình 5–7 ngày cho phẫu thuật cột sống lớn',
		],
		flagshipProcedure: 'Hàn cột sống thắt lưng',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '88–92%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '88–92%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '87–91%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '85–89%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '90%+' },
		],
		inclusions: [
			'Đánh giá cột sống trước phẫu thuật, bao gồm phân tích MRI/X-quang',
			'Chi phí bác sĩ phẫu thuật và gây mê cho thủ thuật cột sống',
			'Chi phí phòng mổ và vật liệu cấy ghép/dụng cụ cột sống tiêu chuẩn',
			'Thời gian nằm ICU (1 ngày) cộng 5 ngày phòng riêng',
			'Các buổi vật lý trị liệu bài bản tại bệnh viện',
			'Xét nghiệm, chẩn đoán hình ảnh và thuốc sau phẫu thuật tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm chương trình bài tập tại nhà và kế hoạch phục hồi',
		],
		exclusions: [
			'Vật liệu cấy ghép cột sống cao cấp hoặc theo yêu cầu riêng ngoài dụng cụ tiêu chuẩn',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Hàn nhiều tầng đốt sống, vượt quá các tầng được báo giá trong đánh giá ban đầu',
			'Các buổi vật lý trị liệu ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Phẫu thuật chỉnh sửa do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Hàn cột sống tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói hàn cột sống thắt lưng tại Ấn Độ bắt đầu từ 6.500 USD, thấp hơn khoảng 90% so với mức giá thông thường tại Mỹ, bao gồm chi phí bác sĩ phẫu thuật, vật liệu cấy ghép, thời gian nằm viện và vật lý trị liệu tại bệnh viện.',
			},
			{
				question: 'Có phẫu thuật cột sống xâm lấn tối thiểu không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp các kỹ thuật xâm lấn tối thiểu và bảo tồn vận động, như thay đĩa đệm, có thể giảm mất máu và rút ngắn thời gian hồi phục cho các ứng viên phù hợp.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 6 ngày và nên ở lại Ấn Độ 2–3 tuần để đội ngũ cột sống có thể theo dõi quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Loại vật liệu cấy ghép/dụng cụ nào được sử dụng?',
				answer:
					'Các bệnh viện đối tác của chúng tôi sử dụng tiêu chuẩn là hệ thống vật liệu cấy ghép cột sống được chứng nhận quốc tế, với nâng cấp dụng cụ cao cấp theo yêu cầu và báo giá riêng.',
			},
			{
				question: 'Tôi có cần vật lý trị liệu sau can thiệp không?',
				answer:
					'Có, vật lý trị liệu bài bản tại bệnh viện bắt đầu ngay sau ca can thiệp, và bác sĩ phẫu thuật sẽ cung cấp chương trình bài tập tại nhà để tiếp tục hồi phục sau khi bạn về nước.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi phim MRI hoặc X-quang cột sống của bạn qua biểu mẫu liên hệ, bạn sẽ nhận được đánh giá chuyên môn và ước tính chi phí minh bạch trong 24 giờ.',
			},
		],
	},

	'bariatric-surgery': {
		name: 'Phẫu thuật giảm béo',
		shortDescription: 'Cắt dạ dày hình ống, bắc cầu dạ dày và bóng dạ dày để giảm cân bền vững dưới sự giám sát y tế.',
		overview:
			'Các trung tâm giảm béo tại Ấn Độ kết hợp kinh nghiệm phẫu thuật nội soi với tư vấn dinh dưỡng bài bản trước và sau phẫu thuật, giúp bệnh nhân đạt được mức giảm cân bền vững, với thời gian nằm viện ngắn hơn và hồi phục nhanh hơn so với phẫu thuật mở.',
		procedures: ['Cắt dạ dày hình ống', 'Bắc cầu dạ dày', 'Bóng dạ dày'],
		benefits: [
			'Phẫu thuật giảm béo nội soi (xâm lấn tối thiểu) là tiêu chuẩn',
			'Tư vấn dinh dưỡng và lối sống bài bản, trước và sau phẫu thuật',
			'Thời gian nằm viện điển hình chỉ 2–3 ngày cho cắt dạ dày hình ống',
			'Hỗ trợ theo dõi dài hạn để giám sát tiến trình giảm cân',
		],
		flagshipProcedure: 'Cắt dạ dày hình ống nội soi',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '3–6 tuần', successRate: '90–95%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '90–95%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '89–94%' },
			{ country: 'Thái Lan', waitTime: '1–3 tuần', successRate: '88–93%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '92%+' },
		],
		inclusions: [
			'Đánh giá trước phẫu thuật, bao gồm nội soi và kiểm tra sức khỏe tổng quát',
			'Tư vấn với chuyên gia dinh dưỡng và lập kế hoạch ăn uống trước phẫu thuật',
			'Chi phí bác sĩ phẫu thuật và gây mê cho thủ thuật nội soi',
			'Chi phí phòng mổ và dụng cụ khâu nối/vật tư phẫu thuật tiêu chuẩn',
			'3 ngày nằm viện, bao gồm theo dõi sau phẫu thuật',
			'Tóm tắt xuất viện kèm kế hoạch tiến triển chế độ ăn sau phẫu thuật bài bản',
		],
		exclusions: [
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Phẫu thuật chỉnh sửa cho thủ thuật giảm béo trước đây được thực hiện ở nơi khác',
			'Phẫu thuật tạo hình để loại bỏ da thừa sau khi giảm cân đáng kể',
			'Thực phẩm bổ sung dinh dưỡng dài hạn ngoài bộ ban đầu khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật cắt dạ dày hình ống tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói cắt dạ dày hình ống nội soi tại Ấn Độ bắt đầu từ 4.500 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá trước phẫu thuật, ca can thiệp, thời gian nằm viện và kế hoạch ăn uống sau phẫu thuật.',
			},
			{
				question: 'Tôi có đủ điều kiện phẫu thuật giảm béo không?',
				answer:
					'Điều kiện thường được xác định dựa trên BMI và các bệnh lý liên quan — hãy chia sẻ chiều cao, cân nặng và bất kỳ tình trạng bệnh nào hiện có qua biểu mẫu liên hệ để được đội ngũ giảm béo của chúng tôi đánh giá điều kiện miễn phí.',
			},
			{
				question: 'Tôi có thể giảm được bao nhiêu cân?',
				answer:
					'Hầu hết bệnh nhân giảm 60–70% lượng cân dư sau 12–18 tháng kể từ khi cắt dạ dày hình ống hoặc bắc cầu, mặc dù kết quả thay đổi tùy theo thủ thuật được chọn và mức độ tuân thủ chế độ ăn và lối sống sau phẫu thuật.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 3 ngày và nên ở lại Ấn Độ 10–14 ngày để đội ngũ phẫu thuật có thể xác nhận quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Thủ thuật có được thực hiện bằng nội soi không?',
				answer:
					'Có, cắt dạ dày hình ống, bắc cầu dạ dày và đặt bóng dạ dày đều được thực hiện bằng nội soi như tiêu chuẩn, thường có nghĩa là ít đau hơn và hồi phục nhanh hơn so với phẫu thuật mở.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ chiều cao, cân nặng và tiền sử bệnh của bạn qua biểu mẫu liên hệ, điều phối viên giảm béo của chúng tôi sẽ sắp xếp đánh giá chuyên môn trong 24 giờ.',
			},
		],
	},

	'nephrology-urology': {
		name: 'Thận học và tiết niệu',
		shortDescription: 'Điều trị sỏi thận, phẫu thuật tuyến tiền liệt và chăm sóc lọc máu bởi các đội ngũ tiết niệu chuyên khoa.',
		overview:
			'Các trung tâm tiết niệu và thận học tại Ấn Độ thực hiện các thủ thuật sỏi thận và tuyến tiền liệt với khối lượng lớn, sử dụng kỹ thuật laser và xâm lấn tối thiểu, mang đến cho bệnh nhân quốc tế cơ hội tiếp cận nhanh chóng với chuyên gia, không cần chờ đợi như thường thấy ở các nước khác.',
		procedures: ['Loại bỏ sỏi thận', 'Phẫu thuật tuyến tiền liệt', 'Chăm sóc lọc máu'],
		benefits: [
			'Loại bỏ sỏi thận bằng laser và xâm lấn tối thiểu (PCNL/RIRS)',
			'Phẫu thuật tuyến tiền liệt bằng robot và nội soi có sẵn tại các trung tâm hàng đầu',
			'Đơn vị lọc máu chuyên biệt cho bệnh nhân cần chăm sóc thận liên tục',
			'Xuất viện trong ngày hoặc ngày hôm sau cho nhiều thủ thuật xâm lấn tối thiểu',
		],
		flagshipProcedure: 'Lấy sỏi thận qua da (PCNL)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '3–6 tuần', successRate: '92–96%' },
			{ country: 'Vương quốc Anh', waitTime: '3–9 tháng (NHS)', successRate: '92–96%' },
			{ country: 'Đức', waitTime: '3–6 tuần', successRate: '91–95%' },
			{ country: 'Thái Lan', waitTime: '1–3 tuần', successRate: '90–94%' },
			{ country: 'Ấn Độ', waitTime: '3–7 ngày', successRate: '94%+' },
		],
		inclusions: [
			'Đánh giá trước phẫu thuật, bao gồm siêu âm/CT và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ tiết niệu và gây mê cho thủ thuật',
			'Chi phí phòng mổ và thiết bị laser/nội soi',
			'2 ngày nằm viện, bao gồm theo dõi sau phẫu thuật',
			'Thuốc và vật tư tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm kế hoạch chẩn đoán hình ảnh theo dõi',
		],
		exclusions: [
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Điều trị sỏi hai bên (cả hai thận), nếu không được báo giá cùng nhau',
			'Các buổi lọc máu dài hạn ngoài thời gian lưu trú đánh giá ban đầu',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Loại bỏ sỏi thận tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói PCNL (loại bỏ sỏi thận) tại Ấn Độ bắt đầu từ 3.500 USD, thấp hơn khoảng 85% so với Mỹ, bao gồm đánh giá trước phẫu thuật, thủ thuật, thời gian nằm viện và chẩn đoán hình ảnh theo dõi.',
			},
			{
				question: 'Điều trị sỏi thận có xâm lấn tối thiểu không?',
				answer:
					'Có, hầu hết sỏi được điều trị bằng kỹ thuật laser xâm lấn tối thiểu, như PCNL hoặc RIRS, thường cho phép xuất viện trong 1–2 ngày, tùy theo kích thước và vị trí của sỏi.',
			},
			{
				question: 'Có phẫu thuật tuyến tiền liệt bằng robot không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp phẫu thuật tuyến tiền liệt bằng robot và nội soi, có thể giảm mất máu và rút ngắn thời gian hồi phục so với phẫu thuật mở.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các thủ thuật tiết niệu cần khoảng 7–10 ngày tại Ấn Độ cho đánh giá trước phẫu thuật, thủ thuật và một buổi tái khám trước khi về nước; các trường hợp phức tạp có thể cần thời gian lưu trú dài hơn.',
			},
			{
				question: 'Bạn có hỗ trợ bệnh nhân cần lọc máu liên tục không?',
				answer:
					'Có, các bệnh viện đối tác của chúng tôi có đơn vị lọc máu chuyên biệt và có thể điều phối chăm sóc thận liên tục cho bệnh nhân đi đánh giá hoặc đang chờ ghép thận.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo chẩn đoán hình ảnh (siêu âm/CT) của bạn qua biểu mẫu liên hệ, điều phối viên tiết niệu của chúng tôi sẽ sắp xếp đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},
};

export const getViTreatment = (slug: string) => viTreatments[slug];
