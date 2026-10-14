/**
 * Portuguese translations for src/data/destinations.ts.
 * Keyed by slug. Numeric fields (hospitalsCount, avgSavings) are reused from the English source.
 */

export interface DestinationDataPt {
	description: string;
	popularTreatments: string[];
}

export const ptDestinations: Record<string, DestinationDataPt> = {
	'delhi-ncr': {
		description:
			'A região da capital da Índia, sede dos hospitais multiespecialidade mais importantes, líder em cardiologia e neurologia avançadas.',
		popularTreatments: ['Cirurgia cardíaca', 'Neurologia', 'Ortopedia'],
	},
	mumbai: {
		description:
			'A capital financeira da Índia, com hospitais credenciados internacionalmente, reconhecidos por seus cuidados oncológicos e transplantes de órgãos.',
		popularTreatments: ['Oncologia', 'Transplante de órgãos', 'Cirurgia cardíaca'],
	},
	chennai: {
		description:
			'Conhecida como a capital médica da Índia, com décadas de experiência atendendo pacientes internacionais em todas as especialidades.',
		popularTreatments: ['Cirurgia cardíaca', 'Ortopedia', 'Tratamento de fertilidade'],
	},
	bangalore: {
		description:
			'Um centro médico tecnológico em expansão que combina cirurgiões de primeira linha com alguns dos centros de substituição articular mais avançados do país.',
		popularTreatments: ['Ortopedia', 'Cirurgia estética', 'Cirurgia cardíaca'],
	},
	hyderabad: {
		description: 'Um centro médico de rápido crescimento com hospitais de última geração especializados em transplantes de rim e de órgãos.',
		popularTreatments: ['Transplante de órgãos', 'Nefrologia', 'Oncologia'],
	},
	kochi: {
		description:
			'O berço da Ayurveda, que combina tratamentos tradicionais de bem-estar com cuidados de primeira linha em fertilidade e saúde da mulher.',
		popularTreatments: ['Tratamento de fertilidade', 'Ayurveda e bem-estar', 'Cirurgia cardíaca'],
	},
	kolkata: {
		description: 'O principal centro médico do leste da Índia, sede de alguns dos institutos de oftalmologia e oncologia mais respeitados do país.',
		popularTreatments: ['Oftalmologia', 'Oncologia', 'Ortopedia'],
	},
	ahmedabad: {
		description:
			'A capital médica do estado de Gujarat, oferecendo cuidados acessíveis e de alta qualidade para transplantes de fígado e rim em modernos campi hospitalares.',
		popularTreatments: ['Transplante de fígado', 'Transplante de rim', 'Cirurgia cardíaca'],
	},
};

export const getPtDestination = (slug: string) => ptDestinations[slug];
