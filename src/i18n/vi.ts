/**
 * Vietnamese (vi) translation strings — site-wide UI text (nav, footer, hero,
 * common form/button labels, floating widget, insurance modal).
 *
 * Mirrors the structure of fr.ts / ru.ts / bn.ts / ro.ts / es.ts / pt.ts exactly so Layout.astro can
 * drive all locales from the same rendering logic.
 *
 * Translation source: AI-generated. Recommend a native Vietnamese speaker
 * reviews this before it's relied on for medical terminology.
 */

export const vi = {
	nav: {
		home: 'Trang chủ',
		destinations: 'Điểm đến',
		treatments: 'Điều trị',
		about: 'Về chúng tôi',
		contact: 'Liên hệ',
		more: 'Thêm',
		hotels: 'Khách sạn',
		flights: 'Chuyến bay',
		tourismPackage: 'Gói du lịch',
		cta: 'Tư vấn miễn phí',
		checkInsuranceEligibility: 'Kiểm tra điều kiện bảo hiểm',
		tagline: 'Cố vấn y tế của bạn',
	},

	footer: {
		description:
			'Chúng tôi kết nối bệnh nhân với các bệnh viện được công nhận và bác sĩ chuyên khoa được chứng nhận tại hơn 20 quốc gia — hỗ trợ toàn diện, từ ý kiến y tế đầu tiên đến khi hồi phục.',
		quickLinks: 'Liên kết nhanh',
		home: 'Trang chủ',
		aboutUs: 'Về chúng tôi',
		destinations: 'Điểm đến',
		treatments: 'Điều trị',
		ourDoctors: 'Đội ngũ bác sĩ',
		contact: 'Liên hệ',
		popularTreatments: 'Điều trị phổ biến',
		treatmentNames: {
			cardiacCare: 'Tim mạch',
			orthopedics: 'Chỉnh hình',
			oncology: 'Ung bướu',
			cosmeticSurgery: 'Phẫu thuật thẩm mỹ',
			fertilityTreatment: 'Điều trị hiếm muộn',
			organTransplant: 'Ghép tạng',
			dentalCare: 'Nha khoa',
			eyeCare: 'Nhãn khoa',
		},
		getInTouch: 'Liên hệ với chúng tôi',
		officeAddress: '238 Westend Mall, Janakpuri, New Delhi, Ấn Độ',
		supportHours: 'Hỗ trợ 24/7',
		privacyPolicy: 'Chính sách bảo mật',
		termsOfService: 'Điều khoản dịch vụ',
		sitemap: 'Sơ đồ trang web',
		cookiePolicy: 'Chính sách Cookie',
		manageCookies: 'Quản lý tùy chọn Cookie',
		allRightsReserved: 'Đã đăng ký bản quyền.',
		backToTop: 'Lên đầu trang',
	},

	hero: {
		slides: [
			{
				eyebrow: 'Bệnh viện được JCI công nhận',
				title: 'Chăm sóc y tế đẳng cấp thế giới,',
				highlight: 'không chờ đợi, không giá cao',
				description:
					'So sánh các bệnh viện được công nhận và bác sĩ chuyên khoa từ hơn 20 quốc gia, tiết kiệm đến 70% chi phí điều trị bạn cần.',
				primaryCta: 'Tư vấn miễn phí',
				secondaryCta: 'Khám phá điểm đến',
			},
			{
				eyebrow: 'Chuyên gia đã được xác minh',
				title: 'Bệnh viện được đánh giá cao nhất,',
				highlight: 'phù hợp chính xác với chẩn đoán của bạn',
				description:
					'Hội đồng y khoa của chúng tôi xem xét từng trường hợp và kết nối bạn với các bác sĩ phẫu thuật chuyên về tình trạng của bạn.',
				primaryCta: 'Tìm chuyên gia',
				secondaryCta: 'Cách thức hoạt động',
			},
			{
				eyebrow: 'Hỗ trợ toàn diện',
				title: 'Chúng tôi lo liệu chuyến đi,',
				highlight: 'bạn chỉ cần tập trung hồi phục',
				description:
					'Chuyến bay, thị thực, phiên dịch viên và theo dõi sau điều trị — một điều phối viên tận tâm quản lý mọi chi tiết trong hành trình của bạn.',
				primaryCta: 'Trao đổi với điều phối viên',
			},
		],
		trust: [
			{ value: '500+', label: 'Bệnh viện đối tác' },
			{ value: '45', label: 'Quốc gia' },
			{ value: '24/7', label: 'Hỗ trợ bệnh nhân' },
			{ value: '12.000+', label: 'Bệnh nhân đã hỗ trợ' },
		],
		treatmentOptions: [
			'Tim mạch',
			'Chỉnh hình và thay khớp',
			'Ung bướu',
			'Phẫu thuật thẩm mỹ và tạo hình',
			'Điều trị hiếm muộn',
			'Ghép tạng',
			'Khác',
		],
		enquiry: {
			title: 'Nhận tư vấn miễn phí',
			subtitle: 'Đội ngũ y tế của chúng tôi phản hồi trong vòng 24 giờ',
			treatmentPlaceholder: 'Tìm kiếm...',
			namePlaceholder: 'Họ và tên',
			emailPlaceholder: 'Địa chỉ email',
			countryPlaceholder: '---Chọn quốc gia---',
			phonePlaceholder: 'Số WhatsApp / điện thoại',
			uploadLabel: 'Tải lên hồ sơ y tế (PDF/JPG, không bắt buộc)',
			submit: 'Tư vấn miễn phí',
			privacyNote: 'Thông tin của bạn được bảo mật',
			successMessage: 'Cảm ơn bạn! Điều phối viên bệnh nhân sẽ liên hệ với bạn sớm.',
		},
	},

	floatingWidget: {
		whatsappLabel: 'WhatsApp',
		whatsappAriaLabel: 'Trò chuyện với chúng tôi qua WhatsApp',
		callbackLabel: 'Yêu cầu gọi lại',
		closeLabel: 'Đóng',
		modalTitle: 'Yêu cầu gọi lại',
		modalSubtitle: 'Chia sẻ thông tin của bạn và điều phối viên bệnh nhân sẽ gọi cho bạn sớm.',
		namePlaceholder: 'Họ và tên',
		countryPlaceholder: '---Chọn quốc gia---',
		phonePlaceholder: 'Số điện thoại / WhatsApp',
		emailPlaceholder: 'Địa chỉ email',
		preferredTimePlaceholder: 'Thời gian gọi mong muốn (không bắt buộc)',
		submitLabel: 'Yêu cầu gọi lại',
		privacyNote: 'Thông tin của bạn được bảo mật',
		successMessage: 'Cảm ơn bạn! Điều phối viên bệnh nhân sẽ gọi cho bạn sớm.',
	},

	insuranceModal: {
		closeLabel: 'Đóng',
		modalTitle: 'Kiểm tra điều kiện bảo hiểm',
		modalSubtitle:
			'Chia sẻ thông tin cá nhân và bảo hiểm của bạn — điều phối viên của chúng tôi sẽ xác nhận phạm vi bảo hiểm và liên hệ với bạn.',
		patientNamePlaceholder: 'Tên bệnh nhân',
		patientAgePlaceholder: 'Tuổi bệnh nhân',
		genderPlaceholder: 'Giới tính',
		genderMale: 'Nam',
		genderFemale: 'Nữ',
		genderOther: 'Khác',
		countryPlaceholder: '---Chọn quốc gia---',
		phonePlaceholder: 'Số điện thoại*',
		emailPlaceholder: 'Email',
		hasInsurancePlaceholder: '---Tôi có bảo hiểm---',
		yes: 'Có',
		no: 'Không',
		uploadLabel: 'Tải lên thẻ bảo hiểm (không bắt buộc — PDF/JPG/PNG)',
		messagePlaceholder: 'Tin nhắn',
		submitLabel: 'Kiểm tra điều kiện',
		successMessage: 'Cảm ơn bạn! Đội ngũ của chúng tôi sẽ xem xét thông tin bảo hiểm của bạn và liên hệ sớm.',
	},

	common: {
		fullName: 'Họ và tên',
		emailAddress: 'Địa chỉ email',
		phoneWhatsapp: 'Điện thoại / WhatsApp',
		message: 'Tin nhắn',
		sendMessage: 'Gửi tin nhắn',
		country: 'Quốc gia',
		selectCountryPlaceholder: '---Chọn quốc gia---',
		learnMore: 'Tìm hiểu thêm',
		viewProfile: 'Xem hồ sơ',
		contactUs: 'Liên hệ chúng tôi',
		requestCallback: 'Yêu cầu gọi lại',
		checkEligibility: 'Kiểm tra điều kiện',
		confidentialNote: 'Thông tin của bạn được bảo mật',
	},
	cookieBanner: {
		title: 'Chúng tôi coi trọng quyền riêng tư của bạn',
		description:
			'Chúng tôi sử dụng cookie để ghi nhớ tùy chọn ngôn ngữ của bạn và hiểu cách khách truy cập sử dụng trang web của chúng tôi, để chúng tôi có thể cải thiện nó. Bạn có thể chấp nhận tất cả cookie, từ chối cookie không cần thiết hoặc tùy chỉnh lựa chọn của mình.',
		necessaryLabel: 'Cần thiết',
		necessaryDescription: 'Cần thiết để trang web hoạt động, chẳng hạn như ghi nhớ ngôn ngữ bạn đã chọn. Luôn được bật.',
		analyticsLabel: 'Phân tích',
		analyticsDescription: 'Giúp chúng tôi hiểu cách khách truy cập sử dụng trang web để có thể cải thiện nó. Không bắt buộc.',
		acceptAllLabel: 'Chấp nhận tất cả',
		rejectLabel: 'Từ chối mục không cần thiết',
		customizeLabel: 'Tùy chỉnh',
		savePreferencesLabel: 'Lưu tùy chọn',
		policyLinkLabel: 'Chính sách Cookie',
		closeLabel: 'Đóng',
	},
} as const;

export type ViDictionary = typeof vi;
