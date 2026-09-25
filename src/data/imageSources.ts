export interface ImageSource {
  image: string
  title: string
  sourceName: string
  sourceUrl: string
  author: string
  license: string
}

export const imageSources: ImageSource[] = [
  {
    image: '/images/sary-chelek.jpg',
    title: 'Озеро Сары-Челек',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sary_Chelek_Lake.jpg',
    author: 'Kondephy',
    license: 'CC BY-SA 4.0',
  },
  {
    image: '/images/arslanbob.jpg',
    title: 'Арсланбоб',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Arslanbob,Djalal-Abad_region,_Kyrgyzstan.jpg',
    author: 'Baydastann',
    license: 'CC BY-SA 4.0',
  },
  {
    image: '/images/toktogul.jpg',
    title: 'Токтогульское водохранилище',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toktogul_Reservoir_2023.jpg',
    author: 'Arthur Dolchenko',
    license: 'CC BY-SA 4.0',
  },
  {
    image: '/images/sary-chelek-road.jpg',
    title: 'Дорога к озеру Сары-Челек',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Дорога_к_озеру_Сары-Челек.jpg',
    author: 'Panpanchik',
    license: 'CC BY-SA 4.0',
  },
]
