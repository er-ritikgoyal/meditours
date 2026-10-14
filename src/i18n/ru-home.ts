/**
 * Russian translations for the remaining homepage-only sections:
 * OurDoctors, OurPartnerHospitals (homepage heading), SupportServices, TravelProcess.
 */

export const ruDoctors = {
	badge: 'Наша медицинская команда',
	title: 'Врачи, которые',
	highlight: 'заботятся о вас',
	subtitle: 'Сертифицированные специалисты из аккредитованных больниц, проверенные для каждого случая, который мы ведём.',
	yearsExpLabel: 'лет опыта',
	reviewsLabel: 'отзывов',
	contactLabel: 'Связаться',
	verifiedLabel: 'Проверенный специалист',
	doctors: [
		{
			specialty: 'Кардиохирург',
			qualification: 'MBBS, MS, MCh — кардиоторакальная хирургия',
			languages: ['Английский', 'Хинди'],
		},
		{
			specialty: 'Хирург-ортопед',
			qualification: 'MBBS, MS — ортопедия и замена суставов',
			languages: ['Английский', 'Хинди'],
		},
		{
			specialty: 'Онколог',
			qualification: 'MBBS, MD — онкология',
			languages: ['Английский', 'Хинди', 'Малаялам'],
		},
		{
			specialty: 'Пластический хирург',
			qualification: 'MD — пластическая, реконструктивная и эстетическая хирургия',
			languages: ['Английский', 'Хинди'],
		},
		{
			specialty: 'Невролог',
			qualification: 'MBBS, DM — неврология',
			languages: ['Английский', 'Хинди', 'Тамильский'],
		},
		{
			specialty: 'Специалист по лечению бесплодия',
			qualification: 'MD — репродуктивная эндокринология',
			languages: ['Английский', 'Испанский'],
		},
	],
};

export const ruPartnerHospitalsHome = {
	badge: 'Наша сеть',
	title: 'Наши больницы-',
	highlight: 'партнёры',
	subtitle: 'Мы работаем только с аккредитованными больницами, отвечающими международным стандартам безопасности, гигиены и клинических результатов.',
};

export const ruSupportServices = {
	badge: 'Поддержка пациентов',
	titleLead: 'Поддержка, которая рядом,',
	titleHighlight: 'где бы вы ни были',
	subtitle: 'От визы до восстановления дома — наши координаторы сопровождают вас на каждом этапе пути.',
	services: [
		{
			icon: 'passport' as const,
			title: 'Помощь с медицинской визой',
			description: 'Наши специалисты готовят приглашения и документы, чтобы ваша медицинская виза была одобрена без задержек.',
			theme: 'blue' as const,
		},
		{
			icon: 'video' as const,
			title: 'Видеоконсультация',
			description: 'Пообщайтесь онлайн со своим специалистом, чтобы подтвердить диагноз и план лечения перед поездкой.',
			theme: 'teal' as const,
		},
		{
			icon: 'translate' as const,
			title: 'Услуги переводчика',
			description: 'Сертифицированный медицинский переводчик присутствует на каждой консультации и процедуре, на удобном вам языке.',
			theme: 'green' as const,
		},
		{
			icon: 'opinion' as const,
			title: 'Второе медицинское мнение',
			description: 'Получите независимую оценку диагноза и вариантов лечения от сертифицированного специалиста за рубежом.',
			theme: 'blue' as const,
		},
		{
			icon: 'care' as const,
			title: 'Координация после лечения',
			description: 'Ваш координатор планирует наблюдение и передаёт отчёты вашему лечащему врачу после возвращения домой.',
			theme: 'teal' as const,
		},
	],
};

export const ruTravelProcess = {
	badge: 'Пошаговое руководство',
	titleLead: 'Путь',
	titleHighlight: 'международного пациента',
	subtitle: 'От первого вопроса до возвращения домой — мы рядом на каждом этапе',
	steps: [
		{
			icon: 'document' as const,
			title: 'Предоставьте медицинские данные пациента',
			description: 'Поделитесь отчётами и вопросом — получите заключение по существу в течение 24 часов.',
		},
		{
			icon: 'stethoscope' as const,
			title: 'Получите медицинское заключение и смету расходов',
			description: 'Свободно выбирайте среди наших лучших партнёрских больниц и врачей.',
		},
		{
			icon: 'idCard' as const,
			title: 'Получите приглашение для визы',
			description: 'Мы берём на себя все формальности медицинской визы от вашего имени.',
		},
		{
			icon: 'plane' as const,
			title: 'Спланируйте поездку',
			description: 'Отель, апартаменты или гостевой дом рядом с больницей — организуем всё.',
		},
		{
			icon: 'car' as const,
			title: 'Встреча в аэропорту',
			description: 'Встреча в аэропорту, трансфер и SIM-карта — бесплатно.',
		},
		{
			icon: 'building' as const,
			title: 'Пройдите лечение',
			description: 'Личный переводчик и менеджер сопровождают вас на всех этапах.',
		},
		{
			icon: 'home' as const,
			title: 'Возвращение домой',
			description: 'Поддержка и наблюдение после лечения по возвращении домой.',
		},
	],
};
