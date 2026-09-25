export interface Sector {
  number: string
  title: string
  description: string
  image: string
  alt: string
  icon: 'factory' | 'mountain' | 'bolt'
  anchor: string
}

export const sectors: Sector[] = [
  {
    number: '01',
    title: 'Производство',
    description: 'Квалифицированная рабочая сила обходится дешевле, чем в Алматы и Москве. Регион производит и перерабатывает собственное сельскохозяйственное сырьё, а строящаяся железная дорога Китай–Кыргызстан–Узбекистан открывает выход на рынки трёх стран уже в 2027–2028 году.',
    image: '/images/arslanbob.jpg',
    alt: 'Горная долина в районе Арсланбоба, Жалал-Абадская область',
    icon: 'factory',
    anchor: 'production',
  },
  {
    number: '02',
    title: 'Туризм',
    description: 'Арсланбоб — один из крупнейших ореховых лесов в мире, горные курорты и термальные источники. Действующие отели заполнены в сезон почти полностью, а поток туристов растёт из года в год — рынку качественного размещения нужны новые проекты.',
    image: '/images/sary-chelek.jpg',
    alt: 'Озеро Сары-Челек в Жалал-Абадской области',
    icon: 'mountain',
    anchor: 'tourism',
  },
  {
    number: '03',
    title: 'Энергетика и логистика',
    description: 'Большинство гидроэлектростанций Кыргызстана расположено в Жалал-Абадской области, что даёт энергоёмким производствам доступ к дешёвой зелёной энергии. Строящаяся железная дорога Китай–Кыргызстан–Узбекистан превращает регион в транзитный хаб Центральной Азии.',
    image: '/images/toktogul.jpg',
    alt: 'Токтогульское водохранилище среди гор',
    icon: 'bolt',
    anchor: 'energy',
  },
]

export interface Project {
  title: string
  sectorAnchor: 'production' | 'tourism' | 'energy'
  sectorLabel: string
}

export const projects: Project[] = [
  { title: 'Переработка грецкого ореха и сухофруктов на экспорт в РФ и Китай', sectorAnchor: 'production', sectorLabel: 'Производство' },
  { title: 'Производство стройматериалов из местного сырья', sectorAnchor: 'production', sectorLabel: 'Производство' },
  { title: 'Тепличный комплекс с поставками в Россию и Казахстан', sectorAnchor: 'production', sectorLabel: 'Производство' },
  { title: 'Пищевое производство на базе местной сельхозпродукции', sectorAnchor: 'production', sectorLabel: 'Производство' },
  { title: 'Бутик-отель в Арсланбобе', sectorAnchor: 'tourism', sectorLabel: 'Туризм' },
  { title: 'Горный курорт у перевала', sectorAnchor: 'tourism', sectorLabel: 'Туризм' },
  { title: 'СПА-комплекс на термальных источниках', sectorAnchor: 'tourism', sectorLabel: 'Туризм' },
  { title: 'Глэмпинг и экотуризм', sectorAnchor: 'tourism', sectorLabel: 'Туризм' },
  { title: 'Логистический хаб у будущей станции железной дороги', sectorAnchor: 'energy', sectorLabel: 'Энергетика и логистика' },
  { title: 'Складской комплекс класса А для транзитных грузов', sectorAnchor: 'energy', sectorLabel: 'Энергетика и логистика' },
  { title: 'Малая ГЭС на горных реках для промышленных потребителей', sectorAnchor: 'energy', sectorLabel: 'Энергетика и логистика' },
  { title: 'Солнечная генерация для промышленных нужд', sectorAnchor: 'energy', sectorLabel: 'Энергетика и логистика' },
]

export interface Advantage {
  number: string
  title: string
  text: string
  icon: 'bolt' | 'route' | 'land' | 'mountain'
}

export const advantages: Advantage[] = [
  { number: '01', title: 'Энергетика', text: 'Большинство ГЭС Кыргызстана расположено в области — доступ к дешёвой зелёной энергии для энергоёмких производств.', icon: 'bolt' },
  { number: '02', title: 'География и логистика', text: 'Строящаяся железная дорога Китай–Кыргызстан–Узбекистан открывает выход на рынки трёх стран уже в 2027–2028 году.', icon: 'route' },
  { number: '03', title: 'Земля и ресурсы', text: 'Территории для производственных, сельскохозяйственных и инфраструктурных проектов с подключением к коммуникациям.', icon: 'land' },
  { number: '04', title: 'Туристический потенциал', text: 'Арсланбоб, Сары-Челек и горные территории — уникальные объекты мирового уровня при остром дефиците качественного размещения.', icon: 'mountain' },
]

export interface RoadmapStep {
  title: string
  text: string
}

export const supportSteps: RoadmapStep[] = [
  { title: 'Регистрация компании', text: 'Куда обращаться, какие документы нужны и сколько это занимает по времени.' },
  { title: 'Получение земли', text: 'Выбор участка, виды прав на землю и порядок оформления.' },
  { title: 'Разрешения и лицензии', text: 'Полный перечень по каждому сектору и сроки получения.' },
  { title: 'Подключение к коммуникациям', text: 'Электричество, вода и газ — кто подключает и в какие сроки.' },
  { title: 'Налоги', text: 'Какие налоги уплачиваются и какие льготы предусмотрены.' },
  { title: 'Сопровождение', text: 'Персональный куратор от области на связи на всех этапах проекта.' },
]

export interface RegionFigure {
  value: string
  label: string
  icon: 'area' | 'people' | 'city' | 'district'
}

// Официальные показатели области (oblast.unitix.space / справочник территорий).
// Счётчики платформы — свободные участки, объём инвестиций — появятся после запуска.
export const regionFigures: RegionFigure[] = [
  { value: '33,7', label: 'тыс. км² площадь области', icon: 'area' },
  { value: '1,37', label: 'млн жителей', icon: 'people' },
  { value: '4', label: 'города областного значения', icon: 'city' },
  { value: '8', label: 'районов области', icon: 'district' },
]
