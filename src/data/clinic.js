const clinic = {
  name: "Илай",
  subtitle: "Ветеринарная клиника",
  description:
    "Забота о здоровье ваших питомцев. Ветеринарная помощь, диагностика, профилактика и круглосуточный стационар.",

  phones: {
    main: "+7 (920) 806-72-67",
    mainLink: "+79208067267",
    hospital: "+7 (910) 265-55-08",
    hospitalLink: "+79102655508",
  },

  address: {
    city: "Орловская область",
    street: "Престижная улица, 37А",
    settlement: "посёлок Зареченский",
    full: "Престижная ул., 37А, посёлок Зареченский, Орловская область",
    mapUrl:
      "https://yandex.ru/maps/10772/oryol-oblast/house/prestizhnaya_ulitsa_37a/Z08YdgVlSkUHQFtofXV0c3phZw==/",
  },

  schedule: {
    hospital: "Круглосуточно",
    clinic: "Уточняйте по телефону",
  },

  rating: {
    value: "5,0",
    count: "642",
    source: "Яндекс Карты",
  },

  price: {
    name: "Первичный приём",
    value: 900,
    currency: "₽",
  },

  services: [
    {
      id: 1,
      number: "01",
      title: "Первичный приём",
      description:
        "Первичная консультация и осмотр питомца ветеринарным специалистом.",
      icon: "stethoscope",
    },
    {
      id: 2,
      number: "02",
      title: "Лабораторная диагностика",
      description:
        "Лабораторные исследования для оценки состояния здоровья животного.",
      icon: "microscope",
    },
    {
      id: 3,
      number: "03",
      title: "Вакцинация",
      description: "Профилактическая вакцинация домашних животных.",
      icon: "syringe",
    },
    {
      id: 4,
      number: "04",
      title: "Стационар",
      description: "Круглосуточное пребывание животных в стационаре.",
      icon: "hospital",
    },
    {
      id: 5,
      number: "05",
      title: "Кастрация и стерилизация",
      description: "Хирургические услуги для домашних животных.",
      icon: "heart-pulse",
    },
    {
      id: 6,
      number: "06",
      title: "Чипирование",
      description: "Установка электронного идентификатора животного.",
      icon: "scan",
    },
    {
      id: 7,
      number: "07",
      title: "Обработка от паразитов",
      description: "Профилактическая обработка домашних питомцев.",
      icon: "shield-check",
    },
    {
      id: 8,
      number: "08",
      title: "Ветеринарная аптека",
      description: "Ветеринарные препараты и товары для ухода за животными.",
      icon: "pill",
    },
  ],

  advantages: [
    {
      number: "01",
      title: "Круглосуточный стационар",
      description:
        "Возможность размещения питомца в стационаре в любое время суток.",
    },
    {
      number: "02",
      title: "Разные направления помощи",
      description: "От профилактических процедур до лабораторной диагностики.",
    },
    {
      number: "03",
      title: "Удобная связь",
      description: "Отдельные контактные телефоны клиники и стационара.",
    },
  ],

  gallery: [
    {
      src: "/ilay-vet-clinika/images/clinic-entrance.jpg",
      alt: "Вход в ветеринарную клинику Илай",
      title: "Наша клиника",
    },
    {
      src: "/ilay-vet-clinika/images/patient-dog.jpg",
      alt: "Собака — пациент ветеринарной клиники",
      title: "Наши пациенты",
    },
    {
      src: "/ilay-vet-clinika/images/patient-cat.jpg",
      alt: "Кошка в переноске",
      title: "Забота о каждом",
    },
    {
      src: "/ilay-vet-clinika/images/clinic-building.jpg",
      alt: "Здание ветеринарной клиники",
      title: "Мы находимся здесь",
    },
    {
      src: "/ilay-vet-clinika/images/cat1.jpg",
      alt: "Кот — пациент ветеринарной клиники Илай",
      title: "Внимательный осмотр",
    },
    {
      src: "/ilay-vet-clinika/images/cat2.jpg",
      alt: "Кошка на приёме в клинике Илай",
      title: "Спокойная атмосфера",
    },
    {
      src: "/ilay-vet-clinika/images/dog1.jpg",
      alt: "Собака на приёме в клинике Илай",
      title: "Четвероногие друзья",
    },
    {
      src: "/ilay-vet-clinika/images/clinik.jpg",
      alt: "Здание ветеринарной клиники Илай и подъезд к нему",
      title: "Здание и парковка",
    },
  ],
};

export default clinic;
