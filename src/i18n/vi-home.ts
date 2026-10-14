/**
 * Vietnamese translations for the remaining homepage-only sections:
 * OurDoctors, OurPartnerHospitals (homepage heading), SupportServices, TravelProcess.
 */

export const viDoctors = {
	badge: 'Đội ngũ y tế của chúng tôi',
	title: 'Bác sĩ luôn',
	highlight: 'chăm sóc bạn',
	subtitle: 'Chuyên gia được chứng nhận, liên kết với các bệnh viện được công nhận, được xác minh cho từng trường hợp chúng tôi phụ trách.',
	yearsExpLabel: 'năm kinh nghiệm',
	reviewsLabel: 'đánh giá',
	contactLabel: 'Liên hệ',
	verifiedLabel: 'Chuyên gia đã xác minh',
	doctors: [
		{
			specialty: 'Bác sĩ phẫu thuật tim',
			qualification: 'MBBS, MS, MCh — Phẫu thuật tim lồng ngực',
			languages: ['Tiếng Anh', 'Tiếng Hindi'],
		},
		{
			specialty: 'Bác sĩ phẫu thuật chỉnh hình',
			qualification: 'MBBS, MS — Chỉnh hình và thay khớp',
			languages: ['Tiếng Anh', 'Tiếng Hindi'],
		},
		{
			specialty: 'Bác sĩ ung bướu',
			qualification: 'MBBS, MD — Ung bướu học',
			languages: ['Tiếng Anh', 'Tiếng Hindi', 'Tiếng Malayalam'],
		},
		{
			specialty: 'Bác sĩ phẫu thuật thẩm mỹ và tạo hình',
			qualification: 'MD — Phẫu thuật tạo hình, tái tạo và thẩm mỹ',
			languages: ['Tiếng Anh', 'Tiếng Hindi'],
		},
		{
			specialty: 'Bác sĩ thần kinh',
			qualification: 'MBBS, DM — Thần kinh học',
			languages: ['Tiếng Anh', 'Tiếng Hindi', 'Tiếng Tamil'],
		},
		{
			specialty: 'Chuyên gia hiếm muộn',
			qualification: 'MD — Nội tiết sinh sản',
			languages: ['Tiếng Anh', 'Tiếng Tây Ban Nha'],
		},
	],
};

export const viPartnerHospitalsHome = {
	badge: 'Mạng lưới của chúng tôi',
	title: 'Bệnh viện',
	highlight: 'đối tác của chúng tôi',
	subtitle: 'Chúng tôi chỉ hợp tác với các bệnh viện được công nhận, đáp ứng tiêu chuẩn quốc tế về an toàn, vệ sinh và kết quả điều trị.',
};

export const viSupportServices = {
	badge: 'Hỗ trợ bệnh nhân',
	titleLead: 'Sự hỗ trợ luôn đồng hành cùng bạn,',
	titleHighlight: 'dù bạn ở đâu',
	subtitle: 'Từ thị thực đến khi hồi phục tại nhà, điều phối viên của chúng tôi đồng hành cùng bạn trong từng bước.',
	services: [
		{
			icon: 'passport' as const,
			title: 'Hỗ trợ thị thực y tế',
			description: 'Các chuyên gia của chúng tôi chuẩn bị thư mời và hồ sơ để thị thực y tế của bạn được phê duyệt không chậm trễ.',
			theme: 'blue' as const,
		},
		{
			icon: 'video' as const,
			title: 'Tư vấn từ xa qua video',
			description: 'Trò chuyện trực tiếp trực tuyến với chuyên gia của bạn để xác nhận chẩn đoán và kế hoạch điều trị trước khi lên đường.',
			theme: 'teal' as const,
		},
		{
			icon: 'translate' as const,
			title: 'Dịch vụ phiên dịch',
			description: 'Một phiên dịch viên y tế được chứng nhận có mặt trong mọi buổi tư vấn và thủ thuật, bằng ngôn ngữ bạn cảm thấy thoải mái nhất.',
			theme: 'green' as const,
		},
		{
			icon: 'opinion' as const,
			title: 'Ý kiến y tế thứ hai',
			description: 'Nhận đánh giá độc lập về chẩn đoán và các lựa chọn điều trị từ chuyên gia được chứng nhận ở nước ngoài.',
			theme: 'blue' as const,
		},
		{
			icon: 'care' as const,
			title: 'Điều phối chăm sóc sau điều trị',
			description: 'Điều phối viên của bạn lên lịch tái khám và chia sẻ báo cáo với bác sĩ của bạn sau khi bạn trở về nhà.',
			theme: 'teal' as const,
		},
	],
};

export const viTravelProcess = {
	badge: 'Hướng dẫn từng bước',
	titleLead: 'Hành trình của bệnh nhân',
	titleHighlight: 'quốc tế',
	subtitle: 'Từ câu hỏi đầu tiên của bạn đến khi trở về nhà — chúng tôi luôn đồng hành cùng bạn ở mỗi bước',
	steps: [
		{
			icon: 'document' as const,
			title: 'Gửi thông tin y tế của bệnh nhân',
			description: 'Chia sẻ báo cáo và câu hỏi của bạn — nhận ý kiến liên quan trong vòng 24 giờ.',
		},
		{
			icon: 'stethoscope' as const,
			title: 'Nhận ý kiến y tế và ước tính chi phí',
			description: 'Tự do lựa chọn trong số các bệnh viện và bác sĩ liên kết hàng đầu của chúng tôi.',
		},
		{
			icon: 'idCard' as const,
			title: 'Nhận thư mời thị thực',
			description: 'Chúng tôi xử lý mọi thủ tục thị thực y tế thay mặt bạn.',
		},
		{
			icon: 'plane' as const,
			title: 'Lên kế hoạch cho chuyến đi',
			description: 'Khách sạn, căn hộ hoặc nhà nghỉ được sắp xếp gần bệnh viện.',
		},
		{
			icon: 'car' as const,
			title: 'Đón tại sân bay',
			description: 'Đón tại sân bay, đưa đón và thẻ SIM miễn phí.',
		},
		{
			icon: 'building' as const,
			title: 'Theo dõi quá trình điều trị',
			description: 'Một phiên dịch viên tận tâm và quản lý hồ sơ đồng hành cùng bạn trong suốt quá trình.',
		},
		{
			icon: 'home' as const,
			title: 'Trở về nhà',
			description: 'Hỗ trợ theo dõi sau điều trị sau khi bạn trở về nhà.',
		},
	],
};
