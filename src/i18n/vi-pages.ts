/**
 * Vietnamese translations for page-level chrome on About, Contact, Destinations,
 * and Treatments (list + detail). Deep per-item content lives in
 * vi-treatments.ts / vi-destinations.ts; this file covers headings, labels,
 * form copy, and other component props for those pages.
 */

export const viAbout = {
	pageHeader: {
		badge: 'Từ ngày đầu tiên',
		title: 'Chúng tôi là ai,',
		highlight: 'và vì sao điều đó quan trọng',
		subtitle:
			'Chúng tôi là đội ngũ điều phối viên bệnh nhân, chuyên gia đánh giá y tế và chuyên gia hậu cần, tin rằng chăm sóc y tế đẳng cấp thế giới không nên phụ thuộc vào nơi bạn sinh sống.',
	},
	story: {
		badge: 'Câu chuyện của chúng tôi',
		titleLead: 'Được xây dựng để mang chăm sóc y tế đẳng cấp thế giới đến',
		titleHighlight: 'với mọi người',
		paragraphs: [
			'Alis Pro Med Tour được thành lập để thu hẹp khoảng cách giữa chăm sóc y tế đẳng cấp thế giới và chi phí của nó. Chúng tôi tin rằng nơi bạn sinh ra không nên quyết định việc bạn có đủ khả năng chi trả cho ca phẫu thuật mình cần hay không. Kể từ khi thành lập, chúng tôi đã đồng hành cùng hàng nghìn bệnh nhân — từ ý kiến y tế đầu tiên đến khi hồi phục hoàn toàn — thông qua các bệnh viện được công nhận cao nhất tại Ấn Độ, giúp các gia đình tiết kiệm những khoản tiền có thể thay đổi cuộc sống, mà không bao giờ đánh đổi chất lượng.',
			'Những gì bắt đầu như một đội ngũ điều phối viên bệnh nhân nhỏ đã phát triển thành một mạng lưới dịch vụ hỗ trợ toàn diện trải rộng khắp hơn 40 quốc gia, với các hội đồng y khoa nội bộ, chuyên gia thị thực tận tâm và hỗ trợ đa ngôn ngữ 24/7 — bởi vì việc tìm hiểu hệ thống y tế của một quốc gia xa lạ không bao giờ nên là một hành trình đơn độc.',
		],
		statsLabels: ['Bệnh viện đối tác', 'Quốc gia được hỗ trợ', 'Hỗ trợ bệnh nhân', 'Bệnh nhân đã hỗ trợ'],
		valuesTitle: 'Giá trị cốt lõi',
		values: [
			{
				title: 'Lòng trắc ẩn là trên hết',
				description: 'Mọi quyết định đều bắt đầu từ điều tốt nhất cho bệnh nhân trước mặt chúng tôi — không phải điều nhanh nhất hay có lợi nhất.',
			},
			{
				title: 'Minh bạch tuyệt đối',
				description: 'Giá cả rõ ràng, thời gian trung thực và không có phí ẩn. Những gì chúng tôi báo giá là những gì bạn trả.',
			},
			{
				title: 'Xuất sắc về lâm sàng',
				description: 'Chúng tôi chỉ hợp tác với các bệnh viện được JCI và NABH công nhận cùng các chuyên gia có thành tích đã được kiểm chứng.',
			},
			{
				title: 'Luôn có trách nhiệm',
				description: 'Từ tin nhắn đầu tiên đến cuộc gọi theo dõi cuối cùng, một điều phối viên duy nhất quản lý trường hợp của bạn từ đầu đến cuối.',
			},
		],
	},
	journey: {
		badge: 'Hành trình của chúng tôi',
		titleLead: 'Hơn 5 năm xây dựng',
		titleHighlight: 'niềm tin của bệnh nhân',
		subtitle: 'Từ một đội ngũ điều phối viên nhỏ đến mạng lưới bệnh nhân tại hơn 40 quốc gia.',
		milestones: [
			{ title: 'Thành lập tại Mumbai', description: 'Alis Pro Med Tour ra mắt với một số ít bệnh viện đối tác tại Delhi và Mumbai.' },
			{
				title: 'Mạng lưới công nhận mở rộng',
				description: 'Mở rộng lên hơn 100 bệnh viện được JCI và NABH công nhận tại các trung tâm y tế hàng đầu Ấn Độ.',
			},
			{
				title: 'Mở rộng toàn cầu',
				description: 'Bắt đầu hỗ trợ bệnh nhân từ hơn 20 quốc gia, với hỗ trợ tận tâm về thị thực và du lịch.',
			},
			{
				title: 'Cột mốc 5.000 bệnh nhân',
				description: 'Vượt qua 5.000 bệnh nhân quốc tế được điều trị thành công, bất chấp những gián đoạn du lịch toàn cầu.',
			},
			{
				title: 'Ra mắt dịch vụ hỗ trợ toàn diện 24/7',
				description: 'Giới thiệu hỗ trợ bệnh nhân đa ngôn ngữ liên tục và điều phối viên hồ sơ tận tâm.',
			},
			{
				title: 'Hơn 40 quốc gia, hơn 10.000 bệnh nhân',
				description: 'Chúng tôi hỗ trợ bệnh nhân từ hơn 40 quốc gia thông qua hơn 100 bệnh viện đối tác được công nhận trên toàn quốc.',
			},
		],
	},
	testimonials: {
		badge: 'Câu chuyện bệnh nhân',
		title: 'Bệnh nhân của chúng tôi',
		highlight: 'nói gì',
		subtitle: 'Kết quả thực tế từ những bệnh nhân thực tế đã tin tưởng giao phó việc chăm sóc cho chúng tôi.',
		items: [
			{
				quote:
					'Từ tin nhắn đầu tiên cho đến ngày tôi trở về nhà hồi phục, mỗi bước đều được chăm sóc cẩn thận. Đội ngũ tim mạch tại Delhi đã cho tôi một cuộc sống mới, và tôi chỉ phải trả một phần nhỏ so với chi phí ở quê nhà.',
				name: 'James Whitfield',
				countryCode: 'gb',
				country: 'Vương quốc Anh',
				treatment: 'Phẫu thuật bắc cầu tim',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'Tôi đã rất lo lắng khi phải ra nước ngoài phẫu thuật, nhưng điều phối viên của tôi trả lời mọi câu hỏi ngay cả lúc 2 giờ sáng nếu cần. Bệnh viện ở Istanbul giống một khách sạn năm sao hơn là một phòng khám.',
				name: 'Amara Okafor',
				countryCode: 'ng',
				country: 'Nigeria',
				treatment: 'Phẫu thuật thẩm mỹ',
				rating: 5,
				theme: 'teal' as const,
			},
			{
				quote:
					'Tôi đã tiết kiệm hơn 40.000 đô la cho ca phẫu thuật cột sống của con gái mình mà không phải đánh đổi chất lượng. Bác sĩ phẫu thuật tại Bangkok được đào tạo tại Hoa Kỳ, và điều đó thể hiện rõ trong từng chi tiết chăm sóc con tôi.',
				name: 'Michael Chen',
				countryCode: 'ca',
				country: 'Canada',
				treatment: 'Chỉnh hình nhi khoa',
				rating: 5,
				theme: 'green' as const,
			},
			{
				quote:
					'Hỗ trợ thị thực, đón tại sân bay, phiên dịch viên, khách sạn gần bệnh viện — họ đã nghĩ đến mọi thứ để tôi có thể tập trung hoàn toàn vào việc hồi phục. Tôi sẽ không thể tự mình quản lý chuyến đi này.',
				name: 'Sofia Marchetti',
				countryCode: 'it',
				country: 'Ý',
				treatment: 'Điều trị hiếm muộn',
				rating: 5,
				theme: 'blue' as const,
			},
			{
				quote:
					'Hội đồng y khoa đã kết nối tôi với một chuyên gia thường xuyên điều trị chính xác tình trạng của tôi, chứ không chỉ chung chung. Sự chuyên môn đó đã tạo nên sự khác biệt lớn trong quá trình hồi phục của tôi.',
				name: 'David Okoye',
				countryCode: 'us',
				country: 'Hoa Kỳ',
				treatment: 'Ung bướu',
				rating: 4,
				theme: 'teal' as const,
			},
			{
				quote:
					'Các cuộc gọi theo dõi vẫn tiếp tục trong nhiều tháng sau khi tôi trở về nhà. Tôi chưa bao giờ cảm thấy mối quan hệ kết thúc tại sân bay — họ thực sự quan tâm đến quá trình hồi phục của tôi.',
				name: 'Hana Yamamoto',
				countryCode: 'jp',
				country: 'Nhật Bản',
				treatment: 'Thay khớp',
				rating: 5,
				theme: 'green' as const,
			},
		],
	},
	faq: {
		badge: 'Bạn có thắc mắc?',
		title: 'Về chúng tôi —',
		highlight: 'giải đáp',
		subtitle: 'Những câu hỏi chúng tôi thường nghe nhất từ bệnh nhân đang cân nhắc điều trị ở nước ngoài.',
	},
};

export const viContact = {
	pageHeader: {
		badge: 'Chúng tôi luôn sẵn sàng hỗ trợ',
		title: 'Liên hệ với',
		highlight: 'đội ngũ của chúng tôi',
		subtitle: 'Bạn có thắc mắc về điều trị, chi phí hay hậu cần di chuyển? Điều phối viên bệnh nhân thường phản hồi trong vài giờ.',
	},
	quickOptions: [
		{ title: 'Gọi cho chúng tôi', detail: '+91 98217 01155' },
		{ title: 'WhatsApp', detail: 'Trò chuyện với điều phối viên' },
		{ title: 'Nhắn tin cho chúng tôi', detail: 'care@alispromeditours.com' },
	],
	form: {
		heading: 'Gửi tin nhắn cho chúng tôi',
		subheading: 'Chia sẻ một số thông tin và đội ngũ y tế của chúng tôi sẽ liên hệ với các bước tiếp theo.',
		fullName: 'Họ và tên',
		fullNamePlaceholder: 'Họ và tên của bạn',
		emailAddress: 'Địa chỉ email',
		emailPlaceholder: 'you@example.com',
		country: 'Quốc gia',
		selectCountryPlaceholder: '---Chọn quốc gia---',
		treatmentOfInterest: 'Điều trị quan tâm',
		selectTreatmentPlaceholder: 'Chọn một điều trị',
		phoneWhatsapp: 'Điện thoại / WhatsApp',
		phonePlaceholder: '555 123 4567',
		message: 'Tin nhắn',
		messagePlaceholder: 'Cho chúng tôi biết về tình trạng của bạn, thời gian mong muốn hoặc bất kỳ câu hỏi nào bạn có...',
		medicalReports: 'Hồ sơ y tế (không bắt buộc)',
		fileHint: 'PDF hoặc JPG, tối đa 5MB',
		submit: 'Gửi tin nhắn',
		successMessage: 'Cảm ơn bạn đã liên hệ — điều phối viên bệnh nhân sẽ liên hệ với bạn sớm.',
	},
	info: {
		heading: 'Thông tin liên hệ',
		officeAddressLabel: 'Địa chỉ văn phòng',
		phoneLabel: 'Điện thoại',
		emailLabel: 'Email',
		supportHoursLabel: 'Giờ hỗ trợ',
		supportHoursValue: 'Hỗ trợ 24/7',
		coordinatorLabel: 'Điều phối viên tận tâm',
		coordinatorDetail: 'Được phân công trong vòng 24 giờ sau tin nhắn đầu tiên của bạn',
		noteText: 'Muốn trao đổi trước? Nhắn tin cho chúng tôi qua WhatsApp và chúng tôi sẽ gọi lại trong vòng một giờ.',
	},
	treatmentOptions: [
		'Tim mạch',
		'Chỉnh hình',
		'Ung bướu',
		'Phẫu thuật thẩm mỹ và tạo hình',
		'Điều trị hiếm muộn',
		'Ghép tạng',
		'Nha khoa',
		'Nhãn khoa',
		'ENT (Ear, Nose & Throat)',
		'Neurology & Neurosurgery',
		'Spine Surgery',
		'Bariatric Surgery',
		'Nephrology & Urology',
		'Khác',
	],
};

export const viDestinationsPage = {
	grid: {
		badge: 'Trung tâm y tế trên khắp Ấn Độ',
		title: 'Khám phá các',
		highlight: 'trung tâm y tế hàng đầu Ấn Độ',
		subtitle: 'Mỗi thành phố dưới đây có các bệnh viện được JCI hoặc NABH công nhận, được hội đồng y khoa của chúng tôi xác minh.',
		exploreLabel: 'Khám phá điểm đến',
	},
	detail: {
		verifiedBadge: 'Mạng lưới đối tác đã xác minh',
		hospitalsInLabel: 'Bệnh viện tại',
		hospitalsInSubtitleTemplate: (city: string) =>
			`Các bệnh viện được công nhận tại ${city}, được hội đồng y khoa của chúng tôi xác minh về an toàn, vệ sinh và kết quả điều trị.`,
		soonTitleTemplate: (city: string) => `Hồ sơ bệnh viện tại ${city} sẽ sớm được cập nhật`,
		soonBodyTemplate: (city: string) =>
			`Chúng tôi đang bổ sung các bệnh viện đối tác được đề xuất tại ${city}. Trong lúc chờ đợi, hãy chia sẻ trường hợp của bạn với điều phối viên và chúng tôi sẽ kết nối bạn trực tiếp với một bệnh viện được công nhận.`,
		talkToCoordinator: 'Trao đổi với điều phối viên',
		otherHubsTitle: 'Các trung tâm y tế khác',
	},
};

export const viTreatmentsPage = {
	grid: {
		badge: 'Chuyên khoa của chúng tôi',
		title: 'Các điều trị mà',
		highlight: 'chúng tôi chuyên sâu',
		subtitle: 'Chuyên gia được chứng nhận trong mọi chuyên khoa chính, tại các bệnh viện được công nhận trên toàn thế giới.',
		searchPlaceholder: 'Tìm kiếm điều trị — vd: tim mạch, nha khoa, thẩm mỹ...',
		searchAriaLabel: 'Tìm kiếm điều trị',
		clearAriaLabel: 'Xóa tìm kiếm',
		showingCountTemplate: 'Đang hiển thị {visible} trên {total} điều trị',
		noResultsTitle: 'Không tìm thấy điều trị nào',
		noResultsBody: 'Hãy thử một từ khóa khác hoặc khám phá tất cả các chuyên khoa của chúng tôi ở trên.',
		fromPrefix: 'Từ',
		learnMore: 'Tìm hiểu thêm',
	},
	costComparison: {
		title: 'So sánh chi phí điều trị trên toàn thế giới',
		subtitle: 'Nhận chăm sóc y tế đẳng cấp thế giới tại Ấn Độ, tiết kiệm đến 80% chi phí điều trị mà không đánh đổi chất lượng.',
		note: 'Tất cả giá đều là mức trung bình ước tính theo USD và có thể thay đổi tùy theo bệnh viện, chuyên gia và mức độ phức tạp của trường hợp.',
		scrollHint: 'Vuốt sang trái để so sánh cả 5 quốc gia, bao gồm Ấn Độ',
		mostAffordable: 'Tiết kiệm nhất',
		saveTemplate: (pct: number) => `Tiết kiệm ${pct}%`,
		countries: { usa: 'Hoa Kỳ', uk: 'Vương quốc Anh', germany: 'Đức', uae: 'Các Tiểu vương quốc Ả Rập Thống nhất', india: 'Ấn Độ' },
		treatmentNames: {
			'Heart Bypass Surgery': 'Phẫu thuật bắc cầu tim',
			'Knee Replacement': 'Thay khớp gối',
			'Hip Replacement': 'Thay khớp háng',
			'IVF Treatment': 'Điều trị thụ tinh trong ống nghiệm',
			'Dental Implant': 'Cấy ghép răng',
			'Spinal Fusion': 'Hàn cột sống',
			'Liver Transplant': 'Ghép gan',
			'Kidney Transplant': 'Ghép thận',
			'Cataract Surgery': 'Phẫu thuật đục thủy tinh thể',
		} as Record<string, string>,
		stats: [
			{ title: 'Tiết kiệm đến 80%', description: 'So với các nước phương Tây' },
			{ title: 'Bệnh viện đẳng cấp thế giới', description: 'Được JCI và NABH công nhận' },
			{ title: 'Chuyên gia giàu kinh nghiệm', description: 'Bác sĩ được công nhận trên toàn thế giới' },
		],
	},
	detail: {
		savingsBadgeTemplate: (pct: number) => `Tiết kiệm đến ${pct}%`,
		overviewHeading: 'Tổng quan',
		proceduresHeading: 'Các thủ thuật chúng tôi cung cấp',
		whyChooseTemplate: (name: string) => `Vì sao nên chọn Ấn Độ cho ${name}`,
		startingPriceLabel: 'Giá khởi điểm',
		avgSavingsLabel: 'Tiết kiệm trung bình',
		partnerHospitalsLabel: 'Bệnh viện đối tác',
		packageHeading: 'Chi phí gói dịch vụ và thời gian lưu trú tại bệnh viện',
		sampleBadgeTemplate: (procedure: string) => `Gói dịch vụ mẫu: ${procedure}`,
		packageIntroTemplate: (priceHtml: string, daysHtml: string) =>
			`Gói dịch vụ bắt đầu từ ${priceHtml} — dự kiến khoảng ${daysHtml} tại Ấn Độ, từ khi đến cho đến khi xuất viện và tái khám.`,
		patientStayLabel: 'Thời gian lưu trú của bệnh nhân',
		donorStayLabel: 'Thời gian lưu trú của người hiến',
		outpatientText: 'Thủ thuật ngoại trú / trong ngày',
		daysTotalTemplate: (total: number, icu: number, room: number) =>
			`Tổng cộng ${total} ngày — ${icu} ngày tại ICU + ${room} ngày tại phòng bệnh`,
		tableHeaders: { country: 'Quốc gia', cost: 'Chi phí ước tính', waitTime: 'Thời gian chờ', successRate: 'Tỷ lệ thành công' },
		inclusionsHeading: 'Những gì gói dịch vụ bao gồm',
		exclusionsHeading: 'Những gì gói dịch vụ không bao gồm',
		packageNoteTemplate: (procedure: string) =>
			`Mỗi trường hợp đều khác nhau — các con số trên chỉ là điểm khởi đầu tham khảo cho ${procedure}. Hãy chia sẻ hồ sơ y tế của bạn để nhận báo giá chi tiết và cá nhân hóa.`,
		ctaHeadingTemplate: (name: string) => `Sẵn sàng bắt đầu với ${name}?`,
		ctaBody: 'Chia sẻ hồ sơ y tế của bạn và nhận kế hoạch điều trị cá nhân hóa trong 24 giờ.',
		getFreeQuote: 'Nhận tư vấn miễn phí',
		browseAll: 'Xem tất cả điều trị',
		otherTreatmentsHeading: 'Các điều trị khác',
	},
	faq: {
		badge: 'Câu hỏi thường gặp',
		highlight: 'Câu hỏi thường gặp',
		subtitleTemplate: (procedure: string) => `Câu hỏi thường gặp về ${procedure} và điều trị tại Ấn Độ.`,
	},
};

export const viDoctorsPage = {
	listing: {
		pageHeaderBadge: 'Đội ngũ y tế của chúng tôi',
		pageHeaderTitle: 'Những bác sĩ',
		pageHeaderHighlight: 'chăm sóc bạn',
		pageHeaderSubtitle:
			'Mỗi chuyên gia trong mạng lưới của chúng tôi đều được cấp chứng chỉ hành nghề, làm việc tại bệnh viện đạt chuẩn JCI hoặc NABH, và được hội đồng y khoa của chúng tôi thẩm định trước khi được phân công một ca bệnh.',
		gridBadge: 'Đội ngũ y tế của chúng tôi',
		gridTitle: 'Gặp gỡ',
		gridHighlight: 'các chuyên gia của chúng tôi',
		gridSubtitle: 'Các chuyên gia được cấp chứng chỉ, làm việc tại các bệnh viện đạt chuẩn, được thẩm định cho mọi ca bệnh chúng tôi tiếp nhận.',
	},
	card: {
		yearsExpLabel: 'Năm kinh nghiệm',
		reviewsLabel: 'Đánh giá',
		contactLabel: 'Xem hồ sơ',
		verifiedLabel: 'Chuyên gia đã xác minh',
	},
	detail: {
		home: 'Trang chủ',
		ourDoctors: 'Đội ngũ bác sĩ',
		photoLabel: 'Ảnh',
		verifiedSpecialist: 'Chuyên gia đã xác minh',
		reviewsSuffix: 'đánh giá',
		yearsExperienceSuffix: 'năm kinh nghiệm',
		bookAppointment: 'Đặt lịch hẹn',
		videoConsultation: 'Tư vấn qua video',
		tabs: {
			about: 'Giới thiệu bác sĩ',
			specializations: 'Chuyên môn',
			qualifications: 'Bằng cấp',
			experience: 'Kinh nghiệm',
			awards: 'Giải thưởng',
			memberships: 'Thành viên hiệp hội',
		},
		aboutPrefix: 'Giới thiệu về',
		patientReviews: 'Đánh giá của bệnh nhân',
		otherSpecialists: 'Các chuyên gia khác',
		bookConsultation: 'Đặt lịch tư vấn',
		sendCaseTemplate: (name: string) => `Gửi hồ sơ của bạn đến đội ngũ điều phối của ${name}`,
		whatsappMessageTemplate: (name: string) => `Xin chào, tôi muốn đặt lịch tư vấn video với ${name}.`,
	},
};
