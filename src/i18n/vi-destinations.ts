/**
 * Vietnamese translations for src/data/destinations.ts.
 * Keyed by slug. Numeric fields (hospitalsCount, avgSavings) are reused from the English source.
 */

export interface DestinationDataVi {
	description: string;
	popularTreatments: string[];
}

export const viDestinations: Record<string, DestinationDataVi> = {
	'delhi-ncr': {
		description:
			'Vùng thủ đô của Ấn Độ, nơi tập trung các bệnh viện đa khoa hàng đầu, dẫn đầu về tim mạch và thần kinh tiên tiến.',
		popularTreatments: ['Phẫu thuật tim', 'Thần kinh học', 'Chỉnh hình'],
	},
	mumbai: {
		description:
			'Thủ đô tài chính của Ấn Độ, với các bệnh viện được công nhận quốc tế, nổi tiếng về chăm sóc ung bướu và ghép tạng.',
		popularTreatments: ['Ung bướu', 'Ghép tạng', 'Phẫu thuật tim'],
	},
	chennai: {
		description:
			'Được mệnh danh là thủ đô y tế của Ấn Độ, với hàng thập kỷ kinh nghiệm điều trị bệnh nhân quốc tế ở mọi chuyên khoa.',
		popularTreatments: ['Phẫu thuật tim', 'Chỉnh hình', 'Điều trị hiếm muộn'],
	},
	bangalore: {
		description:
			'Một trung tâm y tế công nghệ đang phát triển mạnh, kết hợp các bác sĩ phẫu thuật hàng đầu với một số trung tâm thay khớp tiên tiến nhất cả nước.',
		popularTreatments: ['Chỉnh hình', 'Phẫu thuật thẩm mỹ', 'Phẫu thuật tim'],
	},
	hyderabad: {
		description: 'Một trung tâm y tế đang phát triển nhanh chóng với các bệnh viện hiện đại chuyên về ghép thận và ghép tạng.',
		popularTreatments: ['Ghép tạng', 'Thận học', 'Ung bướu'],
	},
	kochi: {
		description:
			'Cái nôi của Ayurveda, kết hợp các liệu pháp chăm sóc sức khỏe truyền thống với dịch vụ hàng đầu về hiếm muộn và sức khỏe phụ nữ.',
		popularTreatments: ['Điều trị hiếm muộn', 'Ayurveda và chăm sóc sức khỏe', 'Phẫu thuật tim'],
	},
	kolkata: {
		description: 'Trung tâm y tế hàng đầu của miền Đông Ấn Độ, nơi có một số viện nhãn khoa và ung bướu được kính trọng nhất cả nước.',
		popularTreatments: ['Nhãn khoa', 'Ung bướu', 'Chỉnh hình'],
	},
	ahmedabad: {
		description:
			'Thủ đô y tế của bang Gujarat, cung cấp dịch vụ chăm sóc chất lượng cao với chi phí hợp lý cho ghép gan và ghép thận tại các khuôn viên bệnh viện hiện đại.',
		popularTreatments: ['Ghép gan', 'Ghép thận', 'Phẫu thuật tim'],
	},
};

export const getViDestination = (slug: string) => viDestinations[slug];
