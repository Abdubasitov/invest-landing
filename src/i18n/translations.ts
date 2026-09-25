export type Locale = 'ru' | 'ky' | 'en'

export const locales: { code: Locale; label: string }[] = [
  { code: 'ky', label: 'KG' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

export interface SectorText {
  title: string
  description: string
}

export interface AdvantageText {
  title: string
  text: string
}

export interface ProjectText {
  title: string
}

export interface StepText {
  title: string
  text: string
}

export interface FigureText {
  value: string
  label: string
}

export interface RouteStop {
  city: string
  note: string
}

export interface ImageText {
  title: string
}

export interface Dict {
  meta: { title: string; description: string }
  nav: { production: string; tourism: string; energy: string; roadmap: string; contact: string; cta: string }
  hero: { eyebrow: string; title: string; lead: string }
  sectorsCommon: { eyebrow: string; title: string; lead: string; directionLabel: string; projectsLink: string; mapEyebrow: string; mapTitle: string; mapText: string }
  sectors: [SectorText, SectorText, SectorText]
  stats: { figures: [FigureText, FigureText, FigureText, FigureText]; note: string }
  statement: { eyebrow: string; text: string }
  advantages: { eyebrow: string; title: string; items: [AdvantageText, AdvantageText, AdvantageText, AdvantageText] }
  opportunities: { eyebrow: string; title: string; lead: string; linkText: string; items: ProjectText[] }
  railway: { eyebrow: string; title: string; countries: [string, string, string]; copyTitle: string; copyText: string; stops: [RouteStop, RouteStop, RouteStop]; hint: string }
  gallery: { eyebrow: string; title: string; lead: string; note: string; sourceLabel: string; images: [ImageText, ImageText, ImageText, ImageText] }
  roadmap: { eyebrow: string; title: string; lead: string; steps: [StepText, StepText, StepText, StepText, StepText, StepText] }
  finalCta: { eyebrow: string; title: string; text: string; primary: string; secondary: string }
  footer: { tagline: string; directionsTitle: string; projectsLink: string; contactsTitle: string; contactsText: string; languagesTitle: string; copyright: string; toTop: string }
  ai: {
    launcher: string
    title: string
    subtitle: string
    close: string
    intro: string
    questions: [string, string, string, string]
    answer: string
    back: string
    cta: string
  }
}

const ru: Dict = {
  meta: {
    title: 'Жалалабад Инвест — цифровой инвестиционный центр области',
    description: 'Жалалабад Инвест — цифровой инвестиционный центр Жалал-Абадской области: готовые проекты в производстве, туризме, энергетике и логистике, дорожная карта инвестора и ИИ-консультант.',
  },
  nav: { production: 'Производство', tourism: 'Туризм', energy: 'Энергетика и логистика', roadmap: 'Дорожная карта', contact: 'Контакт', cta: 'Связаться' },
  hero: {
    eyebrow: 'Цифровой инвестиционный центр области',
    title: 'Жалалабад — регион, где инвестиции работают эффективнее',
    lead: 'Дешёвая энергия. Доступная земля. Выход на рынки трёх стран.',
  },
  sectorsCommon: {
    eyebrow: 'Направления',
    title: 'Ключевые отрасли для инвестиций',
    lead: 'Три направления, в которых природный и инфраструктурный потенциал региона открывает возможности для бизнеса.',
    directionLabel: 'Направление',
    projectsLink: 'Проекты направления',
    mapEyebrow: 'Скоро на платформе',
    mapTitle: 'Интерактивная карта участков',
    mapText: 'Карта с земельными участками, коммуникациями, инфраструктурой и зонами приоритетного развития появится на следующем этапе платформы.',
  },
  sectors: [
    { title: 'Производство', description: 'Квалифицированная рабочая сила обходится дешевле, чем в Алматы и Москве. Регион производит и перерабатывает собственное сельскохозяйственное сырьё, а строящаяся железная дорога Китай–Кыргызстан–Узбекистан открывает выход на рынки трёх стран уже в 2027–2028 году.' },
    { title: 'Туризм', description: 'Арсланбоб — один из крупнейших ореховых лесов в мире, горные курорты и термальные источники. Действующие отели заполнены в сезон почти полностью, а поток туристов растёт из года в год — рынку качественного размещения нужны новые проекты.' },
    { title: 'Энергетика и логистика', description: 'Большинство гидроэлектростанций Кыргызстана расположено в Жалал-Абадской области, что даёт энергоёмким производствам доступ к дешёвой зелёной энергии. Строящаяся железная дорога Китай–Кыргызстан–Узбекистан превращает регион в транзитный хаб Центральной Азии.' },
  ],
  stats: {
    figures: [
      { value: '33,7', label: 'тыс. км² площадь области' },
      { value: '1,37', label: 'млн жителей' },
      { value: '4', label: 'города областного значения' },
      { value: '8', label: 'районов области' },
    ],
    note: 'Счётчики свободных участков, объёма инвестиций и сроков оформления земли подключатся после запуска платформы.',
  },
  statement: { eyebrow: 'Почему это важно', text: 'Инвестор, который приходит в область, должен получать ответ сразу — а не тратить месяцы на выяснение базовых вопросов в разных кабинетах.' },
  advantages: {
    eyebrow: 'Почему Жалал-Абад',
    title: 'Стратегические преимущества',
    items: [
      { title: 'Энергетика', text: 'Большинство ГЭС Кыргызстана расположено в области — доступ к дешёвой зелёной энергии для энергоёмких производств.' },
      { title: 'География и логистика', text: 'Строящаяся железная дорога Китай–Кыргызстан–Узбекистан открывает выход на рынки трёх стран уже в 2027–2028 году.' },
      { title: 'Земля и ресурсы', text: 'Территории для производственных, сельскохозяйственных и инфраструктурных проектов с подключением к коммуникациям.' },
      { title: 'Туристический потенциал', text: 'Арсланбоб, Сары-Челек и горные территории — уникальные объекты мирового уровня при остром дефиците качественного размещения.' },
    ],
  },
  opportunities: {
    eyebrow: 'Проекты, которые ищут инвестора',
    title: 'Готовые направления для запуска',
    lead: 'Конкретные проекты по каждому сектору. Объём инвестиций, сроки окупаемости и земельные участки уточняются индивидуально по запросу.',
    linkText: 'Получить полный пакет документов по проекту',
    items: [
      { title: 'Переработка грецкого ореха и сухофруктов на экспорт в РФ и Китай' },
      { title: 'Производство стройматериалов из местного сырья' },
      { title: 'Тепличный комплекс с поставками в Россию и Казахстан' },
      { title: 'Пищевое производство на базе местной сельхозпродукции' },
      { title: 'Бутик-отель в Арсланбобе' },
      { title: 'Горный курорт у перевала' },
      { title: 'СПА-комплекс на термальных источниках' },
      { title: 'Глэмпинг и экотуризм' },
      { title: 'Логистический хаб у будущей станции железной дороги' },
      { title: 'Складской комплекс класса А для транзитных грузов' },
      { title: 'Малая ГЭС на горных реках для промышленных потребителей' },
      { title: 'Солнечная генерация для промышленных нужд' },
    ],
  },
  railway: {
    eyebrow: 'Международная логистика',
    title: 'Новый транспортный коридор Центральной Азии',
    countries: ['Китай', 'Кыргызстан', 'Узбекистан'],
    copyTitle: 'Три страны.\nЕдиный маршрут.',
    copyText: 'Развитие железной дороги Китай–Кыргызстан–Узбекистан повышает логистическую значимость региона и создаёт новые предпосылки для размещения производств и распределительных центров.',
    stops: [
      { city: 'Кашгар', note: 'Начальная станция маршрута, крупный транспортный узел Западного Китая.' },
      { city: 'Жалал-Абад', note: 'Регион, через который пройдёт дорога — новые возможности для производства и логистики.' },
      { city: 'Андижан', note: 'Конечный участок маршрута с выходом на транспортную сеть Узбекистана.' },
    ],
    hint: 'Наведите на страну, чтобы узнать подробнее',
  },
  gallery: {
    eyebrow: 'Жалал-Абадская область',
    title: 'Регион природной силы',
    lead: 'От ореховых лесов Арсланбоба до озёр Сары-Челека и гидроэнергетических объектов Нарына.',
    note: 'Все фотографии опубликованы на Wikimedia Commons. Авторство и лицензии указаны под каждым изображением.',
    sourceLabel: 'Источник фотографии',
    images: [
      { title: 'Озеро Сары-Челек' },
      { title: 'Арсланбоб' },
      { title: 'Токтогульское водохранилище' },
      { title: 'Дорога к озеру Сары-Челек' },
    ],
  },
  roadmap: {
    eyebrow: 'Дорожная карта инвестора',
    title: 'Шесть шагов от идеи до запуска',
    lead: 'Простое пошаговое руководство без юридического языка — понятно с первого прочтения.',
    steps: [
      { title: 'Регистрация компании', text: 'Куда обращаться, какие документы нужны и сколько это занимает по времени.' },
      { title: 'Получение земли', text: 'Выбор участка, виды прав на землю и порядок оформления.' },
      { title: 'Разрешения и лицензии', text: 'Полный перечень по каждому сектору и сроки получения.' },
      { title: 'Подключение к коммуникациям', text: 'Электричество, вода и газ — кто подключает и в какие сроки.' },
      { title: 'Налоги', text: 'Какие налоги уплачиваются и какие льготы предусмотрены.' },
      { title: 'Сопровождение', text: 'Персональный куратор от области на связи на всех этапах проекта.' },
    ],
  },
  finalCta: {
    eyebrow: 'Персональный куратор',
    title: 'Жалал-Абадская область открыта для сотрудничества',
    text: 'У каждого инвестора — личный куратор от области, который сопровождает проект на всех этапах. Контакт куратора будет добавлен после запуска платформы.',
    primary: 'Связаться',
    secondary: 'Смотреть проекты',
  },
  footer: {
    tagline: 'Цифровой инвестиционный центр Жалал-Абадской области.',
    directionsTitle: 'Направления',
    projectsLink: 'Проекты',
    contactsTitle: 'Контакты',
    contactsText: 'Контактные данные\nбудут добавлены',
    languagesTitle: 'Языки',
    copyright: '© 2026 Жалалабад Инвест',
    toTop: 'Наверх ↑',
  },
  ai: {
    launcher: 'Задать вопрос консультанту',
    title: 'ИИ-консультант',
    subtitle: 'Предпросмотр функции платформы',
    close: 'Закрыть',
    intro: 'Так будет работать консультант на платформе. Выберите пример вопроса:',
    questions: [
      'Как получить землю под завод в Ноокенском районе?',
      'Какие налоги платит производственное предприятие первые три года?',
      'Есть ли участки рядом с железной дорогой от 5 гектаров?',
      'Хочу открыть отель в Арсланбобе — с чего начать?',
    ],
    answer: 'ИИ-консультант подключится после запуска платформы. Сейчас на этот вопрос ответит куратор инвестора напрямую.',
    back: '← Другой пример',
    cta: 'Связаться с куратором',
  },
}

const en: Dict = {
  meta: {
    title: 'Jalal-Abad Invest — the region\u2019s digital investment hub',
    description: 'Jalal-Abad Invest — a digital investment hub for the Jalal-Abad region: ready-made projects in manufacturing, tourism, energy and logistics, an investor roadmap and an AI consultant.',
  },
  nav: { production: 'Manufacturing', tourism: 'Tourism', energy: 'Energy & Logistics', roadmap: 'Roadmap', contact: 'Contact', cta: 'Get in touch' },
  hero: {
    eyebrow: 'The region\u2019s digital investment hub',
    title: 'Jalal-Abad — a region where investment works harder',
    lead: 'Low-cost energy. Affordable land. Access to three national markets.',
  },
  sectorsCommon: {
    eyebrow: 'Sectors',
    title: 'Key industries for investment',
    lead: 'Three sectors where the region\u2019s natural and infrastructure potential opens up opportunities for business.',
    directionLabel: 'Sector',
    projectsLink: 'Projects in this sector',
    mapEyebrow: 'Coming to the platform',
    mapTitle: 'Interactive site map',
    mapText: 'A map of land plots, utilities, infrastructure and priority development zones will launch in the platform\u2019s next phase.',
  },
  sectors: [
    { title: 'Manufacturing', description: 'Skilled labour costs less here than in Almaty or Moscow. The region grows and processes its own agricultural raw materials, and the China–Kyrgyzstan–Uzbekistan railway under construction will open access to three national markets as early as 2027–2028.' },
    { title: 'Tourism', description: 'Arslanbob is one of the largest walnut forests in the world, alongside mountain resorts and thermal springs. Existing hotels run close to full occupancy in season, and visitor numbers keep growing — the market needs new quality accommodation projects.' },
    { title: 'Energy & Logistics', description: 'Most of Kyrgyzstan\u2019s hydropower plants sit in the Jalal-Abad region, giving energy-intensive industries access to cheap green power. The China–Kyrgyzstan–Uzbekistan railway under construction is turning the region into a Central Asian transit hub.' },
  ],
  stats: {
    figures: [
      { value: '33.7', label: 'thousand km\u00b2 of area' },
      { value: '1.37', label: 'million residents' },
      { value: '4', label: 'cities of regional significance' },
      { value: '8', label: 'districts in the region' },
    ],
    note: 'Live counters for available plots, investment volume and land registration timelines will go live after the platform launches.',
  },
  statement: { eyebrow: 'Why this matters', text: 'An investor coming into the region should get an answer right away — not spend months chasing basic questions across different offices.' },
  advantages: {
    eyebrow: 'Why Jalal-Abad',
    title: 'Strategic advantages',
    items: [
      { title: 'Energy', text: 'Most of Kyrgyzstan\u2019s hydropower plants are located in the region — cheap green energy for energy-intensive industries.' },
      { title: 'Geography & logistics', text: 'The China–Kyrgyzstan–Uzbekistan railway under construction opens access to three national markets as early as 2027–2028.' },
      { title: 'Land & resources', text: 'Land for manufacturing, agricultural and infrastructure projects with utility connections.' },
      { title: 'Tourism potential', text: 'Arslanbob, Sary-Chelek and the mountain areas are world-class assets facing an acute shortage of quality accommodation.' },
    ],
  },
  opportunities: {
    eyebrow: 'Projects looking for an investor',
    title: 'Ready-to-launch opportunities',
    lead: 'Concrete projects across every sector. Investment size, payback period and land plots are confirmed individually on request.',
    linkText: 'Get the full project document package',
    items: [
      { title: 'Walnut and dried-fruit processing for export to Russia and China' },
      { title: 'Building-materials production from local raw materials' },
      { title: 'Greenhouse complex supplying Russia and Kazakhstan' },
      { title: 'Food production based on local agricultural output' },
      { title: 'Boutique hotel in Arslanbob' },
      { title: 'Mountain resort near the pass' },
      { title: 'Spa complex at the thermal springs' },
      { title: 'Glamping and eco-tourism' },
      { title: 'Logistics hub near the future railway station' },
      { title: 'Class-A warehouse complex for transit cargo' },
      { title: 'Small hydropower plants on mountain rivers for industrial users' },
      { title: 'Solar generation for industrial needs' },
    ],
  },
  railway: {
    eyebrow: 'International logistics',
    title: 'A new transport corridor for Central Asia',
    countries: ['China', 'Kyrgyzstan', 'Uzbekistan'],
    copyTitle: 'Three countries.\nOne route.',
    copyText: 'Development of the China–Kyrgyzstan–Uzbekistan railway raises the region\u2019s logistics importance and creates new conditions for locating manufacturing and distribution centres.',
    stops: [
      { city: 'Kashgar', note: 'The route\u2019s starting station, a major transport hub in western China.' },
      { city: 'Jalal-Abad', note: 'The region the line runs through — new opportunities for manufacturing and logistics.' },
      { city: 'Andijan', note: 'The route\u2019s final leg, connecting into Uzbekistan\u2019s transport network.' },
    ],
    hint: 'Hover a country to learn more',
  },
  gallery: {
    eyebrow: 'Jalal-Abad region',
    title: 'A region of natural strength',
    lead: 'From the walnut forests of Arslanbob to the lakes of Sary-Chelek and the hydropower sites of the Naryn.',
    note: 'All photographs are published on Wikimedia Commons. Authorship and licences are listed under each image.',
    sourceLabel: 'Photo source',
    images: [
      { title: 'Lake Sary-Chelek' },
      { title: 'Arslanbob' },
      { title: 'Toktogul Reservoir' },
      { title: 'Road to Lake Sary-Chelek' },
    ],
  },
  roadmap: {
    eyebrow: 'Investor roadmap',
    title: 'Six steps from idea to launch',
    lead: 'A simple step-by-step guide without legal jargon — clear on first read.',
    steps: [
      { title: 'Company registration', text: 'Where to apply, what documents you need and how long it takes.' },
      { title: 'Obtaining land', text: 'Choosing a plot, types of land rights and the registration process.' },
      { title: 'Permits and licences', text: 'A full list for each sector along with processing timelines.' },
      { title: 'Utility connections', text: 'Electricity, water and gas — who connects them and within what timeframe.' },
      { title: 'Taxes', text: 'Which taxes apply and what incentives are available.' },
      { title: 'Support', text: 'A personal regional curator stays in touch throughout every stage of the project.' },
    ],
  },
  finalCta: {
    eyebrow: 'Personal curator',
    title: 'The Jalal-Abad region is open for cooperation',
    text: 'Every investor gets a personal curator from the region who supports the project at every stage. Curator contact details will be added after the platform launches.',
    primary: 'Get in touch',
    secondary: 'View projects',
  },
  footer: {
    tagline: 'A digital investment hub for the Jalal-Abad region.',
    directionsTitle: 'Sectors',
    projectsLink: 'Projects',
    contactsTitle: 'Contacts',
    contactsText: 'Contact details\nwill be added',
    languagesTitle: 'Languages',
    copyright: '\u00a9 2026 Jalal-Abad Invest',
    toTop: 'Back to top \u2191',
  },
  ai: {
    launcher: 'Ask the consultant',
    title: 'AI consultant',
    subtitle: 'Preview of a platform feature',
    close: 'Close',
    intro: 'This is how the consultant will work on the platform. Pick a sample question:',
    questions: [
      'How do I get land for a plant in the Nooken district?',
      'What taxes does a manufacturing business pay in its first three years?',
      'Are there plots of 5+ hectares near the railway?',
      'I want to open a hotel in Arslanbob — where do I start?',
    ],
    answer: 'The AI consultant goes live after the platform launches. For now, an investor curator will answer this question directly.',
    back: '\u2190 Another example',
    cta: 'Contact a curator',
  },
}

const ky: Dict = {
  meta: {
    title: 'Жалалабад Инвест — облустун санарип инвестиция борбору',
    description: 'Жалалабад Инвест — Жалал-Абад облусунун санарип инвестиция борбору: өндүрүш, туризм, энергетика жана логистика тармактарындагы даяр долбоорлор, инвестордун жол картасы жана АИ-консультант.',
  },
  nav: { production: 'Өндүрүш', tourism: 'Туризм', energy: 'Энергетика жана логистика', roadmap: 'Жол картасы', contact: 'Байланыш', cta: 'Байланышуу' },
  hero: {
    eyebrow: 'Облустун санарип инвестиция борбору',
    title: 'Жалалабад — инвестиция натыйжалуу иштеген аймак',
    lead: 'Арзан энергия. Жеткиликтүү жер. Үч мамлекеттин рыногуна чыгуу.',
  },
  sectorsCommon: {
    eyebrow: 'Багыттар',
    title: 'Инвестиция үчүн негизги тармактар',
    lead: 'Аймактын табигый жана инфраструктуралык потенциалы бизнес үчүн мүмкүнчүлүк ачкан үч багыт.',
    directionLabel: 'Багыт',
    projectsLink: 'Багыттын долбоорлору',
    mapEyebrow: 'Платформада жакында',
    mapTitle: 'Интерактивдүү жер тилкелери картасы',
    mapText: 'Жер тилкелери, коммуникациялар, инфраструктура жана артыкчылыктуу өнүктүрүү зоналары бар карта платформанын кийинки этабында пайда болот.',
  },
  sectors: [
    { title: 'Өндүрүш', description: 'Квалификациялуу жумушчу күчү Алматы менен Москвага салыштырмалуу арзаныраак турат. Аймак өзүнүн айыл чарба чийки затын өндүрүп, кайра иштетет, ал эми курулуп жаткан Кытай–Кыргызстан–Өзбекстан темир жолу 2027–2028-жылдары эле үч өлкөнүн рыногуна чыгууга мүмкүндүк берет.' },
    { title: 'Туризм', description: 'Арстанбап — дүйнөдөгү эң чоң жаңгак токойлорунун бири, тоо курорттору жана термалдык булактар. Иштеп жаткан мейманканалар сезонунда дээрлик толук толот, ал эми туристтердин агымы жыл сайын өсүп жатат — сапаттуу жайгаштыруу рыногуна жаңы долбоорлор керек.' },
    { title: 'Энергетика жана логистика', description: 'Кыргызстандын ГЭСтеринин көпчүлүгү Жалал-Абад облусунда жайгашкан, бул энергияны көп талап кылган өндүрүштөргө арзан жашыл энергияга жетүү мүмкүнчүлүгүн берет. Курулуп жаткан Кытай–Кыргызстан–Өзбекстан темир жолу аймакты Борбор Азиянын транзиттик хабына айландырат.' },
  ],
  stats: {
    figures: [
      { value: '33,7', label: 'миӊ км² облустун аянты' },
      { value: '1,37', label: 'млн тургун' },
      { value: '4', label: 'облустук мааниге ээ шаар' },
      { value: '8', label: 'облустун району' },
    ],
    note: 'Бош жер тилкелери, инвестиция көлөмү жана жерди тариздөө мөөнөттөрүнүн эсептегичтери платформа иштей баштагандан кийин кошулат.',
  },
  statement: { eyebrow: 'Бул эмнеге маанилүү', text: 'Облуска келген инвестор жообун дароо алышы керек — ар түрдүү кабинеттерде негизги суроолорду айларды короо менен эмес.' },
  advantages: {
    eyebrow: 'Эмне үчүн Жалал-Абад',
    title: 'Стратегиялык артыкчылыктар',
    items: [
      { title: 'Энергетика', text: 'Кыргызстандын ГЭСтеринин көпчүлүгү облуста жайгашкан — энергияны көп талап кылган өндүрүштөр үчүн арзан жашыл энергияга жетүү.' },
      { title: 'География жана логистика', text: 'Курулуп жаткан Кытай–Кыргызстан–Өзбекстан темир жолу 2027–2028-жылдары эле үч өлкөнүн рыногуна чыгууга мүмкүндүк берет.' },
      { title: 'Жер жана ресурстар', text: 'Коммуникацияларга туташтырылган өндүрүштүк, айыл чарба жана инфраструктуралык долбоорлор үчүн аймактар.' },
      { title: 'Туристтик потенциал', text: 'Арстанбап, Сары-Челек жана тоолуу аймактар — сапаттуу жайгаштыруунун жетишсиздигине карабастан дүйнөлүк деӊгээлдеги уникалдуу объекттер.' },
    ],
  },
  opportunities: {
    eyebrow: 'Инвестор издеген долбоорлор',
    title: 'Ишке киргизүүгө даяр багыттар',
    lead: 'Ар бир сектор боюнча конкреттүү долбоорлор. Инвестиция көлөмү, өзүн-өзү актоо мөөнөтү жана жер тилкелери сурам боюнча жеке аныкталат.',
    linkText: 'Долбоор боюнча толук документтер топтомун алуу',
    items: [
      { title: 'РФ жана Кытайга экспорттоо үчүн жаңгак жана кургатылган мөмө-жемиштерди кайра иштетүү' },
      { title: 'Жергиликтүү чийки заттан курулуш материалдарын өндүрүү' },
      { title: 'Орусия жана Казакстанга жеткирүү менен жылуукана комплекси' },
      { title: 'Жергиликтүү айыл чарба өнүмдөрүнүн негизинде тамак-аш өндүрүшү' },
      { title: 'Арстанбапта бутик-мейманкана' },
      { title: 'Ашуунун жанындагы тоо курорту' },
      { title: 'Термалдык булактарда СПА-комплекс' },
      { title: 'Глэмпинг жана экотуризм' },
      { title: 'Келечектеги темир жол станциясынын жанындагы логистика хабы' },
      { title: 'Транзиттик жүктөр үчүн А класстагы кампа комплекси' },
      { title: 'Өнөр жай керектөөчүлөрү үчүн тоо суусундагы кичи ГЭС' },
      { title: 'Өнөр жай муктаждыгы үчүн күн энергиясы' },
    ],
  },
  railway: {
    eyebrow: 'Эл аралык логистика',
    title: 'Борбор Азиянын жаңы транспорт коридору',
    countries: ['Кытай', 'Кыргызстан', 'Өзбекстан'],
    copyTitle: 'Үч өлкө.\nБир маршрут.',
    copyText: 'Кытай–Кыргызстан–Өзбекстан темир жолунун өнүгүшү аймактын логистикалык маанисин жогорулатып, өндүрүштөрдү жана бөлүштүрүү борборлорун жайгаштыруу үчүн жаңы шарттарды түзөт.',
    stops: [
      { city: 'Кашгар', note: 'Маршруттун баштапкы станциясы, Батыш Кытайдын ири транспорт түйүнү.' },
      { city: 'Жалал-Абад', note: 'Жол өтө турган аймак — өндүрүш жана логистика үчүн жаңы мүмкүнчүлүктөр.' },
      { city: 'Андижан', note: 'Маршруттун акыркы бөлүгү, Өзбекстандын транспорт тармагына чыгуу менен.' },
    ],
    hint: 'Кеңири маалымат үчүн өлкөнүн үстүнө курсорду алып барыңыз',
  },
  gallery: {
    eyebrow: 'Жалал-Абад облусу',
    title: 'Табигый күчкө бай аймак',
    lead: 'Арстанбаптын жаңгак токойлорунан Сары-Челек көлдөрүнө жана Нарындын гидроэнергетикалык объекттерине чейин.',
    note: 'Бардык сүрөттөр Wikimedia Commons платформасында жарыяланган. Автордук укук жана лицензиялар ар бир сүрөттүн алдында көрсөтүлгөн.',
    sourceLabel: 'Сүрөттүн булагы',
    images: [
      { title: 'Сары-Челек көлү' },
      { title: 'Арстанбап' },
      { title: 'Токтогул суу сактагычы' },
      { title: 'Сары-Челек көлүнө баруучу жол' },
    ],
  },
  roadmap: {
    eyebrow: 'Инвестордун жол картасы',
    title: 'Идеядан ишке киргизүүгө чейин алты кадам',
    lead: 'Юридикалык тил колдонулбаган жөнөкөй кадам сайын көрсөтмө — биринчи окуудан эле түшүнүктүү.',
    steps: [
      { title: 'Компанияны каттоо', text: 'Кайда кайрылуу керек, кандай документтер талап кылынат жана канча убакыт алат.' },
      { title: 'Жер алуу', text: 'Тилке тандоо, жерге укуктун түрлөрү жана тариздөө тартиби.' },
      { title: 'Уруксаттар жана лицензиялар', text: 'Ар бир сектор боюнча толук тизме жана алуу мөөнөттөрү.' },
      { title: 'Коммуникацияларга туташуу', text: 'Электр, суу жана газ — ким туташтырат жана кандай мөөнөттө.' },
      { title: 'Салыктар', text: 'Кандай салыктар төлөнөт жана кандай жеӊилдиктер каралган.' },
      { title: 'Коштоо', text: 'Облустан дайындалган жеке куратор долбоордун бардык этаптарында байланышта болот.' },
    ],
  },
  finalCta: {
    eyebrow: 'Жеке куратор',
    title: 'Жалал-Абад облусу кызматташууга ачык',
    text: 'Ар бир инвестордун долбоорду бардык этаптарда коштогон облустук жеке кураторy болот. Куратордун байланышы платформа иштей баштагандан кийин кошулат.',
    primary: 'Байланышуу',
    secondary: 'Долбоорлорду көрүү',
  },
  footer: {
    tagline: 'Жалал-Абад облусунун санарип инвестиция борбору.',
    directionsTitle: 'Багыттар',
    projectsLink: 'Долбоорлор',
    contactsTitle: 'Байланыштар',
    contactsText: 'Байланыш маалыматтары\nкошулат',
    languagesTitle: 'Тилдер',
    copyright: '© 2026 Жалалабад Инвест',
    toTop: 'Жогору ↑',
  },
  ai: {
    launcher: 'Консультантка суроо берүү',
    title: 'АИ-консультант',
    subtitle: 'Платформа функциясынын алдын ала көрүнүшү',
    close: 'Жабуу',
    intro: 'Платформада консультант ушундай иштейт. Мисал суроону тандаңыз:',
    questions: [
      'Ноокен районунда заводго жер кантип алса болот?',
      'Өндүрүш ишканасы биринчи үч жылда кандай салыктарды төлөйт?',
      'Темир жолдун жанында 5 гектардан жер тилкелери барбы?',
      'Арстанбапта мейманкана ачкым келет — эмнеден баштоо керек?',
    ],
    answer: 'АИ-консультант платформа иштей баштагандан кийин кошулат. Азырынча бул суроого инвестор кураторy түз жооп берет.',
    back: '← Башка мисал',
    cta: 'Куратор менен байланышуу',
  },
}

export const dict: Record<Locale, Dict> = { ru, ky, en }
