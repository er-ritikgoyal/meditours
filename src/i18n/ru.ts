/**
 * Russian (ru) translation strings — site-wide UI text (nav, footer, hero,
 * common form/button labels, floating widget, insurance modal).
 *
 * Mirrors the structure of fr.ts exactly so Layout.astro can drive both
 * locales from the same rendering logic.
 *
 * Translation source: AI-generated. Recommend a native Russian speaker
 * reviews this before it's relied on for medical terminology.
 */

export const ru = {
	nav: {
		home: 'Главная',
		destinations: 'Направления',
		treatments: 'Лечение',
		about: 'О нас',
		contact: 'Контакты',
		more: 'Ещё',
		hotels: 'Отели',
		flights: 'Авиабилеты',
		tourismPackage: 'Туристический пакет',
		cta: 'Бесплатная консультация',
		checkInsuranceEligibility: 'Проверить страховое покрытие',
		tagline: 'Ваш медицинский консультант',
	},

	footer: {
		description:
			'Мы связываем пациентов с аккредитованными больницами и сертифицированными специалистами более чем в 40 странах — полное сопровождение от первого медицинского заключения до выздоровления.',
		quickLinks: 'Быстрые ссылки',
		home: 'Главная',
		aboutUs: 'О нас',
		destinations: 'Направления',
		treatments: 'Лечение',
		ourDoctors: 'Наши врачи',
		contact: 'Контакты',
		popularTreatments: 'Популярные направления лечения',
		treatmentNames: {
			cardiacCare: 'Кардиология',
			orthopedics: 'Ортопедия',
			oncology: 'Онкология',
			cosmeticSurgery: 'Пластическая хирургия',
			fertilityTreatment: 'Лечение бесплодия',
			organTransplant: 'Трансплантация органов',
			dentalCare: 'Стоматология',
			eyeCare: 'Офтальмология',
		},
		getInTouch: 'Связаться с нами',
		officeAddress: '238 Westend Mall, Джанакпури, Нью-Дели, Индия',
		supportHours: 'Круглосуточно, без выходных',
		privacyPolicy: 'Политика конфиденциальности',
		termsOfService: 'Условия использования',
		sitemap: 'Карта сайта',
		cookiePolicy: 'Политика использования файлов cookie',
		manageCookies: 'Управление настройками cookie',
		allRightsReserved: 'Все права защищены.',
		backToTop: 'Наверх',
	},

	hero: {
		slides: [
			{
				eyebrow: 'Больницы, аккредитованные JCI',
				title: 'Медицина мирового уровня,',
				highlight: 'без очередей и завышенных цен',
				description:
					'Сравнивайте аккредитованные больницы и специалистов более чем в 40 странах и экономьте до 70% на необходимом лечении.',
				primaryCta: 'Бесплатная консультация',
				secondaryCta: 'Изучить направления',
			},
			{
				eyebrow: 'Проверенные специалисты',
				title: 'Больницы с лучшими отзывами,',
				highlight: 'подобранные под ваш точный диагноз',
				description:
					'Наш медицинский совет рассматривает каждый случай и подбирает хирургов, специализирующихся именно на вашем заболевании.',
				primaryCta: 'Найти специалиста',
				secondaryCta: 'Как это работает',
			},
			{
				eyebrow: 'Полное сопровождение',
				title: 'Мы берём на себя поездку,',
				highlight: 'вы сосредотачиваетесь на восстановлении',
				description:
					'Перелёты, визы, переводчики и наблюдение после лечения — выделенный координатор занимается каждой деталью вашей поездки.',
				primaryCta: 'Поговорить с координатором',
			},
		],
		trust: [
			{ value: '100+', label: 'Больниц-партнёров' },
			{ value: '40+', label: 'Стран' },
			{ value: 'Круглосуточно', label: 'Поддержка пациентов' },
			{ value: '10 000+', label: 'Пациентов принято' },
		],
		treatmentOptions: [
			'Кардиохирургия',
			'Ортопедия и замена суставов',
			'Онкология',
			'Пластическая и косметическая хирургия',
			'Лечение бесплодия',
			'Трансплантация органов',
			'Другое',
		],
		enquiry: {
			title: 'Получите бесплатную консультацию',
			subtitle: 'Наша медицинская команда ответит в течение 24 часов',
			treatmentPlaceholder: 'Я ищу...',
			namePlaceholder: 'Полное имя',
			emailPlaceholder: 'Адрес электронной почты',
			countryPlaceholder: '---Выберите страну---',
			phonePlaceholder: 'Номер WhatsApp / телефон',
			uploadLabel: 'Загрузить медицинские документы (PDF/JPG, необязательно)',
			submit: 'Бесплатная консультация',
			privacyNote: 'Ваши данные конфиденциальны',
			successMessage: 'Спасибо! Координатор пациентов свяжется с вами в ближайшее время.',
		},
	},

	floatingWidget: {
		whatsappLabel: 'WhatsApp',
		whatsappAriaLabel: 'Написать нам в WhatsApp',
		callbackLabel: 'Заказать обратный звонок',
		closeLabel: 'Закрыть',
		modalTitle: 'Заказать обратный звонок',
		modalSubtitle: 'Оставьте свои данные, и координатор пациентов скоро вам перезвонит.',
		namePlaceholder: 'Полное имя',
		countryPlaceholder: '---Выберите страну---',
		phonePlaceholder: 'Номер телефона / WhatsApp',
		emailPlaceholder: 'Адрес электронной почты',
		preferredTimePlaceholder: 'Удобное время для звонка (необязательно)',
		submitLabel: 'Заказать звонок',
		privacyNote: 'Ваши данные конфиденциальны',
		successMessage: 'Спасибо! Координатор пациентов скоро вам перезвонит.',
	},

	insuranceModal: {
		closeLabel: 'Закрыть',
		modalTitle: 'Проверить страховое покрытие',
		modalSubtitle:
			'Поделитесь своими данными и информацией о страховке — наш координатор подтвердит покрытие и свяжется с вами.',
		patientNamePlaceholder: 'Имя пациента',
		patientAgePlaceholder: 'Возраст пациента',
		genderPlaceholder: 'Пол',
		genderMale: 'Мужской',
		genderFemale: 'Женский',
		genderOther: 'Другой',
		countryPlaceholder: '---Выберите страну---',
		phonePlaceholder: 'Номер телефона*',
		emailPlaceholder: 'Email',
		hasInsurancePlaceholder: '---У меня есть страховка---',
		yes: 'Да',
		no: 'Нет',
		uploadLabel: 'Загрузить страховую карту (необязательно — PDF/JPG/PNG)',
		messagePlaceholder: 'Сообщение',
		submitLabel: 'Проверить покрытие',
		successMessage: 'Спасибо! Наша команда изучит вашу страховую информацию и свяжется с вами в ближайшее время.',
	},

	common: {
		fullName: 'Полное имя',
		emailAddress: 'Адрес электронной почты',
		phoneWhatsapp: 'Телефон / WhatsApp',
		message: 'Сообщение',
		sendMessage: 'Отправить сообщение',
		country: 'Страна',
		selectCountryPlaceholder: '---Выберите страну---',
		learnMore: 'Узнать больше',
		viewProfile: 'Смотреть профиль',
		contactUs: 'Связаться с нами',
		requestCallback: 'Заказать обратный звонок',
		checkEligibility: 'Проверить покрытие',
		confidentialNote: 'Ваши данные конфиденциальны',
	},
	cookieBanner: {
		title: 'Мы ценим вашу конфиденциальность',
		description:
			'Мы используем файлы cookie, чтобы запоминать выбранный вами язык и понимать, как посетители используют наш сайт, чтобы мы могли его улучшить. Вы можете принять все файлы cookie, отклонить несущественные или настроить свой выбор.',
		necessaryLabel: 'Необходимые',
		necessaryDescription: 'Требуются для работы сайта, например для запоминания выбранного языка. Всегда включены.',
		analyticsLabel: 'Аналитика',
		analyticsDescription: 'Помогает понять, как посетители используют сайт, чтобы мы могли его улучшить. Необязательно.',
		acceptAllLabel: 'Принять все',
		rejectLabel: 'Отклонить несущественные',
		customizeLabel: 'Настроить',
		savePreferencesLabel: 'Сохранить настройки',
		policyLinkLabel: 'Политика использования файлов cookie',
		closeLabel: 'Закрыть',
	},
} as const;

export type RuDictionary = typeof ru;
