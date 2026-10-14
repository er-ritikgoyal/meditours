/**
 * Vietnamese translations for the Hotel, Flights, and Tourism Package pages
 * and their supporting components.
 */

export const viHotel = {
	pageHeader: {
		badge: 'Lưu trú và sức khỏe',
		title: 'Chỗ ở thoải mái,',
		highlight: 'gần nơi điều trị',
		subtitle:
			'Khách sạn được kiểm tra trước và chỗ ở phù hợp cho sức khỏe, gần mỗi bệnh viện đối tác — được đặt và quản lý bởi điều phối viên của bạn.',
	},
	stats: [
		{ value: 200, suffix: '+', label: 'Chỗ ở đối tác', decimals: 0 },
		{ value: 4.8, suffix: '', label: 'Đánh giá trung bình', decimals: 1 },
		{ value: 15, suffix: ' phút', label: 'Khoảng cách trung bình đến bệnh viện', decimals: 0 },
	],
	tiers: {
		badge: 'Các tùy chọn lưu trú',
		mostPopularLabel: 'Phổ biến nhất',
		perNightLabel: '/ đêm',
		ctaLabel: 'Hỏi về chỗ ở này',
		items: [
			{
				name: 'Lưu trú thoải mái',
				description: 'Nhà nghỉ và căn hộ dịch vụ với giá cả phải chăng, chỉ cách bệnh viện của bạn vài bước chân.',
				features: ['Phòng có điều hòa với bếp nhỏ', 'Wi-Fi miễn phí', 'Dọn phòng hàng ngày', 'Dịch vụ đưa đón bệnh viện'],
			},
			{
				name: 'Suite cao cấp',
				description: 'Khách sạn 3–4 sao phù hợp cho sức khỏe, đi bộ được từ các bệnh viện đối tác lớn hơn của chúng tôi.',
				features: [
					'Tất cả những gì có trong Lưu trú thoải mái',
					'Hỗ trợ gọi điều dưỡng',
					'Lập kế hoạch bữa ăn theo chế độ',
					'Phòng tiếp cận cho xe lăn',
					'Bao gồm đưa đón sân bay',
				],
			},
			{
				name: 'Villa hồi phục cao cấp',
				description: 'Khách sạn 5 sao và nhà riêng với hỗ trợ y tế tại phòng để đảm bảo riêng tư tuyệt đối.',
				features: [
					'Tất cả những gì có trong Suite cao cấp',
					'Hỗ trợ y tế riêng tại phòng',
					'Đầu bếp riêng và tùy chỉnh bữa ăn',
					'Dịch vụ xe có tài xế',
					'Concierge riêng 24/7',
				],
			},
		],
	},
	amenities: {
		badge: 'Được thiết kế cho sức khỏe',
		titleLead: 'Mỗi chỗ ở',
		titleHighlight: 'sẵn sàng cho bệnh nhân',
		subtitle: 'Tiêu chuẩn ở mọi hạng phòng, để bạn không bao giờ phải hỏi lại hai lần.',
		labels: [
			'Wi-Fi miễn phí',
			'Đưa đón bệnh viện',
			'Hỗ trợ gọi điều dưỡng',
			'Lập kế hoạch bữa ăn theo chế độ',
			'Tiếp cận cho xe lăn',
			'Lễ tân 24/7',
			'Dịch vụ giặt là',
			'Điều hòa không khí',
		],
	},
	featuredStays: {
		badge: 'Chỗ ở đối tác',
		titleLead: 'Chỗ ở nổi bật',
		titleHighlight: 'gần các bệnh viện hàng đầu của chúng tôi',
		subtitle: 'Một số ví dụ về chỗ ở mà điều phối viên của chúng tôi thường đặt nhất.',
		fromLabel: 'từ',
		perNightLabel: '/đêm',
		viewDetailsLabel: 'Xem chi tiết',
		stays: [
			{ name: 'The Wellness Residency', city: 'Delhi NCR', distance: 'Cách Bệnh viện Apollo 0,4 km' },
			{ name: 'Kokilaben Guest Suites', city: 'Mumbai', distance: 'Cách bệnh viện đối tác 0,6 km' },
			{ name: 'Apollo Comfort Inn', city: 'Chennai', distance: 'Cách Apollo Chennai 0,3 km' },
			{ name: 'Narayana Recovery Stays', city: 'Bangalore', distance: 'Cách Narayana Health 0,5 km' },
		],
	},
	ctaHeading: 'Chưa chắc chắn chỗ ở nào phù hợp với bạn?',
	ctaBody: 'Hãy cho điều phối viên biết ngân sách và nhu cầu sức khỏe của bạn — họ sẽ chọn những lựa chọn tốt nhất cho chuyến đi của bạn.',
};

export const viFlights = {
	pageHeader: {
		badge: 'Bay với sự an tâm',
		title: 'Chuyến bay không phiền phức,',
		highlight: 'thẳng đến nơi điều trị của bạn',
		subtitle: 'Từ đặt vé đến hộ tống y tế, phòng du lịch của chúng tôi điều phối mọi bước trong hành trình của bạn đến Ấn Độ.',
	},
	stats: [
		{ value: 15, suffix: '+', label: 'Hãng hàng không đối tác', decimals: 0 },
		{ value: 10000, suffix: '+', label: 'Bệnh nhân đã vận chuyển', decimals: 0 },
		{ value: 24, suffix: '/7', label: 'Hỗ trợ phòng du lịch', decimals: 0 },
	],
	services: {
		badge: 'Hỗ trợ chuyến đi',
		titleLead: 'Dịch vụ chuyến bay được thiết kế',
		titleHighlight: 'xoay quanh việc điều trị của bạn',
		subtitle: 'Từ lần đặt vé đầu tiên đến khi hạ cánh về nhà, điều phối viên của bạn quản lý mọi chi tiết của chuyến đi.',
		ctaLabel: 'Hỏi ngay',
		items: [
			{
				name: 'Hỗ trợ đặt vé máy bay',
				description: 'Phòng du lịch của chúng tôi tìm và đặt vé tốt nhất giữa các hãng hàng không đối tác, đồng bộ với lịch trình điều trị của bạn.',
				features: ['So sánh giá vé giữa các hãng hàng không', 'Lập lịch liên kết với điều trị', 'Đặt vé theo nhóm cho gia đình'],
			},
			{
				name: 'Hộ tống y tế và chuyến bay cáng',
				description: 'Đối với bệnh nhân cần giám sát y tế trong khi bay, chúng tôi sắp xếp các chuyến bay có hộ tống hoặc bố trí cáng.',
				features: ['Điều dưỡng hoặc nhân viên y tế trên chuyến bay', 'Ghế ngồi bố trí cho cáng', 'Điều phối oxy và thiết bị'],
			},
			{
				name: 'Vé cho người đồng hành',
				description: 'Giá vé giảm cho người đồng hành và lịch trình đồng bộ, để một thành viên gia đình có thể đi cùng bạn.',
				features: ['Giá vé giảm cho người đồng hành', 'Ghế ngồi và điểm dừng đồng bộ', 'Quản lý lịch trình chung'],
			},
			{
				name: 'Thị thực và giấy tờ du lịch',
				description: 'Hỗ trợ toàn diện cho thị thực y tế, thư mời từ bệnh viện và xác minh giấy tờ du lịch.',
				features: ['Thư mời thị thực y tế', 'Danh sách kiểm tra và xem xét giấy tờ', 'Hỗ trợ đặt lịch hẹn tại đại sứ quán'],
			},
		],
	},
	perks: {
		badge: 'Chuyến đi không phiền phức',
		titleLead: 'Mỗi chuyến bay',
		titleHighlight: 'được hỗ trợ toàn diện',
		subtitle: 'Tiêu chuẩn cho mọi lần đặt vé, để việc di chuyển bớt đi một nỗi lo.',
		labels: [
			'Hỗ trợ xe lăn',
			'Lên máy bay ưu tiên',
			'Hỗ trợ oxy và thiết bị',
			'Hỗ trợ hành lý',
			'Đưa đón sân bay-bệnh viện',
			'Đổi lịch linh hoạt',
			'Phòng du lịch 24/7',
			'Hỗ trợ đa ngôn ngữ',
		],
	},
	routes: {
		badge: 'Tuyến đường phổ biến',
		titleLead: 'Tuyến đường bệnh nhân',
		titleHighlight: 'thường được đặt',
		subtitle: 'Một số ví dụ về các tuyến đường quốc tế mà phòng du lịch của chúng tôi thường đặt nhất.',
		fromLabel: 'từ',
		ctaLabel: 'Kiểm tra tình trạng chỗ',
		items: [
			{ originCity: 'Nigeria', destinationCity: 'Delhi NCR' },
			{ originCity: 'Libya', destinationCity: 'Mumbai' },
			{ originCity: 'Dubai', destinationCity: 'Chennai' },
			{ originCity: 'Sudan', destinationCity: 'Bangalore' },
		],
	},
	ctaHeading: 'Chưa chắc chắn về kế hoạch di chuyển của bạn?',
	ctaBody: 'Hãy cho điều phối viên biết ngày đi và nhu cầu y tế của bạn — họ sẽ quản lý việc đặt vé từ đầu đến cuối.',
};

export const viTourism = {
	pageHeader: {
		badge: 'Gói du lịch',
		title: 'Hồi phục thật tốt,',
		highlight: 'chiêm ngưỡng những điều tuyệt đẹp',
		subtitle:
			'Các gói du lịch theo nhịp độ hồi phục, cho phép bạn khám phá Ấn Độ trong khi chữa lành — được lên kế hoạch xoay quanh việc điều trị của bạn, không phải trái ngược với nó.',
	},
	stats: [
		{ value: 12, suffix: '+', label: 'Gói được thiết kế riêng', decimals: 0 },
		{ value: 4.9, suffix: '', label: 'Đánh giá của khách', decimals: 1 },
		{ value: 100, suffix: '%', label: 'Theo nhịp độ hồi phục', decimals: 0 },
	],
	packages: {
		badge: 'Gói được thiết kế riêng',
		titleLead: 'Tour theo nhịp độ hồi phục',
		titleHighlight: 'trên khắp Ấn Độ',
		subtitle: 'Mỗi hành trình được lên lịch xoay quanh việc điều trị và hồi phục của bạn — không bao giờ ngược lại.',
		ctaLabel: 'Hỏi ngay',
		perPersonLabel: '/ người',
		fromLabel: 'từ',
		items: [
			{
				name: 'Hồi phục tại Tam giác Vàng',
				route: 'Delhi · Agra · Jaipur',
				duration: '5 ngày',
				description: 'Một chuyến đi nhẹ nhàng, theo nhịp độ hồi phục, qua hành trình di sản mang tính biểu tượng nhất của Ấn Độ, được lên lịch xoay quanh những ngày nghỉ ngơi của bạn.',
				highlights: ['Taj Mahal lúc bình minh', 'Pháo đài Amber bằng xe riêng', 'Điểm dừng tiếp cận cho xe lăn'],
			},
			{
				name: 'Nghỉ dưỡng trên kênh rạch Kerala',
				route: 'Kochi · Alleppey',
				duration: '4 ngày',
				description: 'Trôi trên những kênh rạch yên bình trong một chiếc thuyền nhà riêng — một kỳ nghỉ dưỡng ít vận động, mang lại sự an yên sâu sắc.',
				highlights: ['Lưu trú riêng trên thuyền nhà', 'Buổi nghỉ dưỡng Ayurvedic', 'Suite nghỉ dưỡng ven mặt nước'],
			},
			{
				name: 'Nơi trú ẩn hồi phục tại bãi biển Goa',
				route: 'Bắc và Nam Goa',
				duration: '6 ngày',
				description: 'Chỗ ở nghỉ dưỡng hướng biển, đi dạo bãi biển nhẹ nhàng, ngắm hoàng hôn và các hoạt động ít tác động được bác sĩ chấp thuận.',
				highlights: ['Suite nghỉ dưỡng hướng biển', 'Tiếp cận vật lý trị liệu tại bãi biển', 'Nhịp độ hàng ngày linh hoạt'],
			},
			{
				name: 'Di sản Mysore và Bangalore',
				route: 'Bangalore · Mysore',
				duration: '3 ngày',
				description: 'Một chuyến đi di sản ngắn gọn, thoải mái cho bệnh nhân đang hồi phục gần bệnh viện đối tác của chúng tôi tại Bangalore.',
				highlights: ['Tour riêng Cung điện Mysore', 'Thăm vườn bách thảo', 'Hành trình với các điểm dừng ngắn'],
			},
		],
	},
	inclusions: {
		badge: 'Những gì được bao gồm',
		titleLead: 'Mỗi gói',
		titleHighlight: 'được tổ chức trọn vẹn',
		subtitle: 'Tiêu chuẩn cho mọi hành trình, để bạn có thể tập trung vào hồi phục, không phải hậu cần.',
		labels: [
			'Xe riêng có điều hòa',
			'Hướng dẫn viên nói tiếng Anh',
			'Điểm dừng tiếp cận cho xe lăn',
			'Hành trình theo nhịp độ hồi phục',
			'Đón và đưa về khách sạn',
			'Trải nghiệm ẩm thực địa phương',
			'Điểm dừng chụp ảnh',
			'Concierge 24/7',
		],
	},
	attractions: {
		badge: 'Điểm tham quan gần đó',
		titleLead: 'Địa điểm du lịch để thêm vào',
		titleHighlight: 'hành trình của bạn',
		subtitle: 'Các điểm tham quan ít vận động, được chọn lọc cẩn thận, gần các bệnh viện đối tác của chúng tôi.',
		ctaLabel: 'Thêm vào hành trình',
		items: [
			{
				name: 'Taj Mahal',
				city: 'Agra · gần Delhi NCR',
				description: 'Một chuyến thăm ngắn gọn, thân thiện với xe lăn đến một trong những công trình mang tính biểu tượng nhất thế giới.',
			},
			{
				name: 'Marine Drive',
				city: 'Mumbai',
				description: 'Một con đường dạo phẳng, nhẹ nhàng để ngắm hoàng hôn — một điểm dạo chơi ít vận động được yêu thích cho bệnh nhân đang hồi phục.',
			},
			{
				name: 'Kênh rạch Alleppey',
				city: 'gần Kochi',
				description: 'Một chuyến du ngoạn thuyền nhà riêng yên bình qua những kênh rạch tĩnh lặng của Kerala.',
			},
			{
				name: 'Cung điện Mysore',
				city: 'gần Bangalore',
				description: 'Một tour hoành tráng qua một cung điện di sản, với lối đi tiếp cận và đưa đón bằng xe golf.',
			},
		],
	},
	ctaHeading: 'Chưa chắc chắn tour nào phù hợp với quá trình hồi phục của bạn?',
	ctaBody: 'Hãy cho điều phối viên biết lịch trình điều trị của bạn — họ sẽ đề xuất một hành trình với nhịp độ phù hợp.',
};

export const viCommon = {
	talkToCoordinator: 'Trao đổi với điều phối viên',
};
