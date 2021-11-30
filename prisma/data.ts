export const catalog = [
  {
    title: 'Лепка',
    urlname: 'sculpting',
    Catalogs: {
      create: [
        {
          title: 'Скульптура: человек',
          urlname: 'humansculpting',
        },
        {
          title: 'Скульптура: животные',
          urlname: 'animalmodeling',
        },
        {
          title: 'Скульптура: предметы',
          urlname: 'objectssculpting',
        },
        {
          title: 'Материалы и инструменты',
          urlname: 'modelingtools',
        },
        {
          title: 'Формовка и литьё',
          urlname: 'casting',
        },
      ],
    },
  },
  {
    title: 'Покраска и оформление',
    urlname: 'painting',
    Catalogs: {
      create: [
        {
          title: 'Техника покраски',
          urlname: 'paintingtechnique',
        },
        {
          title: 'Подставки и диорамы',
          urlname: 'diorama',
        },
        {
          title: 'Материалы и инструменты',
          urlname: 'paintingtools',
        },
      ],
    },
  },
  {
    title: 'История',
    urlname: 'history',
    Catalogs: {
      create: [
        {
          title: 'Древние времена',
          urlname: 'ancient',
        },
        {
          title: 'Средние века',
          urlname: 'middleage',
        },
        {
          title: 'Новое время',
          urlname: 'newtime',
        },
        {
          title: 'Новейшее время',
          urlname: 'moderntimes',
        },
      ],
    },
  },
  {
    title: 'НЕ история',
    urlname: 'nothystory',
    Catalogs: {
      create: [
        {
          title: 'Фэнтези',
          urlname: 'fantasy',
        },
        {
          title: 'Фантастика',
          urlname: 'fantastic',
        },
        {
          title: 'Киберпанк',
          urlname: 'cyberpunk',
        },
      ],
    },
  },
]

export const catalognew = [
  {
    id: '1',
    title: 'Лепка',
    urlname: 'sculpting',
    parent: '0',
  },
  {
    id: '2',
    title: 'Скульптура: человек',
    urlname: 'humansculpting',
    parent: '1',
  },
  {
    id: '3',
    title: 'Скульптура: животные',
    urlname: 'animalmodeling',
    parent: '1',
  },
  {
    id: '4',
    title: 'Скульптура: предметы',
    urlname: 'objectssculpting',
    parent: '1',
  },
  {
    id: '5',
    title: 'Материалы и инструменты',
    urlname: 'modelingtools',
    parent: '1',
  },
  {
    id: '6',
    title: 'Формовка и литьё',
    urlname: 'casting',
    parent: '1',
  },
  {
    id: '7',
    title: 'Покраска и оформление',
    urlname: 'painting',
    parent: '0',
  },
  {
    id: '8',
    title: 'Техника покраски',
    urlname: 'paintingtechnique',
    parent: '7',
  },
  {
    id: '9',
    title: 'Подставки и диорамы',
    urlname: 'diorama',
    parent: '7',
  },
  {
    id: '10',
    title: 'Материалы и инструменты',
    urlname: 'paintingtools',
    parent: '7',
  },
  {
    id: '11',
    title: 'История',
    urlname: 'history',
    parent: '0',
  },
  {
    id: '12',
    title: 'Древние времена',
    urlname: 'ancient',
    parent: '11',
  },
  {
    id: '13',
    title: 'Средние века',
    urlname: 'middleage',
    parent: '11',
  },
  {
    id: '14',
    title: 'Новое время',
    urlname: 'newtime',
    parent: '11',
  },
  {
    id: '15',
    title: 'Новейшее время',
    urlname: 'moderntimes',
    parent: '11',
  },
  {
    id: '16',
    title: 'НЕ история',
    urlname: 'nothystory',
    parent: '0',
  },
  {
    id: '17',
    title: 'Фэнтези',
    urlname: 'fantasy',
    parent: '16',
  },
  {
    id: '18',
    title: 'Фантастика',
    urlname: 'fantastic',
    parent: '16',
  },
  {
    id: '19',
    title: 'Киберпанк',
    urlname: 'cyberpunk',
    parent: '16',
  },
]
