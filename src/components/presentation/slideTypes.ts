export type SlideItem = {
  icon?: string;
  color?: string;
  title?: string;
  text?: string;
  team?: string;
  num?: string;
  sign?: string;
  words?: string[];
  answer?: string;
  hint?: string;
};

export type Slide = {
  id: number;
  type: string;
  icon: string;
  label: string;
  title: string;
  subtitle?: string;
  footer?: string;
  bg: string;
  accent: string;
  items?: string[] | SlideItem[];
  note?: string;
};

export const slides: Slide[] = [
  {
    id: 1,
    type: "title",
    icon: "BookOpen",
    label: "Урок русского языка",
    title: "Творим с категорией состояния",
    subtitle: "7 класс · Русский язык",
    footer: "Дата проведения: ___________",
    bg: "from-indigo-600 to-purple-700",
    accent: "bg-white/20",
  },
  {
    id: 2,
    type: "goals",
    icon: "Target",
    label: "Слайд 2",
    title: "Цели урока",
    bg: "from-blue-600 to-cyan-600",
    accent: "bg-white/20",
    items: [
      {
        icon: "GraduationCap",
        color: "bg-yellow-400",
        title: "Образовательная",
        text: "Повторить и закрепить знания о словах категории состояния, их семантике, морфологических признаках и синтаксической роли.",
      },
      {
        icon: "Lightbulb",
        color: "bg-green-400",
        title: "Развивающая",
        text: "Развить творческое мышление, навыки анализа и групповой работы.",
      },
      {
        icon: "Heart",
        color: "bg-pink-400",
        title: "Воспитательная",
        text: "Привить любовь и уважение к богатству и выразительности русского языка.",
      },
    ] as SlideItem[],
  },
  {
    id: 3,
    type: "questions",
    icon: "MessageCircle",
    label: "Слайд 3",
    title: "Актуализация знаний",
    subtitle: "Вопросы для обсуждения",
    bg: "from-teal-600 to-emerald-600",
    accent: "bg-white/20",
    items: [
      "Какие слова передают состояние человека и природы?",
      "Что такое категория состояния? Приведи примеры.",
      "Как слова категории состояния влияют на восприятие текста?",
      "Можно ли использовать слова категории состояния для творческих целей и как?",
    ] as string[],
  },
  {
    id: 4,
    type: "teams",
    icon: "Users",
    label: "Слайд 4",
    title: "Задания для команд",
    bg: "from-orange-500 to-amber-500",
    accent: "bg-white/20",
    items: [
      {
        team: "Команда 1",
        icon: "Image",
        color: "bg-pink-500",
        title: "Лингвистический комикс",
        text: "Создать комикс (4–6 кадров), где герои выражают своё состояние через слова категории состояния.",
      },
      {
        team: "Команда 2",
        icon: "Cloud",
        color: "bg-blue-500",
        title: "Погодная газета",
        text: "Оформить газету с прогнозом погоды, народными приметами и советами, используя слова категории состояния.",
      },
      {
        team: "Команда 3",
        icon: "TreePine",
        color: "bg-green-500",
        title: "Дерево состояний",
        text: "Нарисовать дерево, где ветви — смысловые группы слов, а листья — конкретные примеры.",
      },
      {
        team: "Команда 4",
        icon: "BookA",
        color: "bg-purple-500",
        title: "Азбука состояний",
        text: "Составить алфавитное пособие: каждая буква — слово категории состояния с примером употребления.",
      },
    ] as SlideItem[],
  },
  {
    id: 5,
    type: "break",
    icon: "Zap",
    label: "Слайд 5",
    title: "Физкультминутка",
    bg: "from-lime-500 to-green-500",
    accent: "bg-white/20",
    items: [
      { icon: "ArrowUp", text: "Встаньте и потянитесь — «высоко»" },
      { icon: "ArrowDown", text: "Опуститесь вниз — «низко»" },
      { icon: "Wind", text: "Помашите руками — «свежо»" },
      { icon: "Sun", text: "Улыбнитесь — «радостно»" },
      { icon: "Moon", text: "Закройте глаза — «спокойно»" },
    ] as SlideItem[],
    note: "Называйте слова категории состояния вместе с движениями!",
  },
  {
    id: 6,
    type: "criteria",
    icon: "Star",
    label: "Слайд 6",
    title: "Презентация работ команд",
    subtitle: "Критерии оценки",
    bg: "from-violet-600 to-purple-600",
    accent: "bg-white/20",
    items: [
      {
        num: "1",
        title: "Количество и разнообразие",
        text: "Слов категории состояния в работе",
      },
      {
        num: "2",
        title: "Смысловые группы",
        text: "Использование разных семантических групп",
      },
      {
        num: "3",
        title: "Креативность",
        text: "Оригинальность и творческое исполнение",
      },
    ] as SlideItem[],
  },
  {
    id: 7,
    type: "game",
    icon: "Puzzle",
    label: "Слайд 7",
    title: "Игра «Третий лишний»",
    subtitle: "Найди лишнее слово и объясни свой выбор",
    bg: "from-rose-600 to-pink-600",
    accent: "bg-white/20",
    items: [
      { words: ["Холодно", "Морозно", "Зимний"], answer: "Зимний", hint: "прилагательное" },
      { words: ["Грустно", "Печально", "Унылый"], answer: "Унылый", hint: "прилагательное" },
      { words: ["Можно", "Нужно", "Делать"], answer: "Делать", hint: "глагол" },
    ] as SlideItem[],
  },
  {
    id: 8,
    type: "reflection",
    icon: "Brain",
    label: "Слайд 8",
    title: "Рефлексия",
    subtitle: "Метод «Плюс — Минус — Интересно»",
    bg: "from-sky-600 to-blue-700",
    accent: "bg-white/20",
    items: [
      { icon: "Plus", color: "bg-green-400", sign: "+", title: "Плюс", text: "Что понравилось на уроке?" },
      { icon: "Minus", color: "bg-red-400", sign: "−", title: "Минус", text: "Что было сложно?" },
      { icon: "HelpCircle", color: "bg-yellow-400", sign: "?", title: "Интересно", text: "Что вызвало интерес?" },
    ] as SlideItem[],
  },
  {
    id: 9,
    type: "homework",
    icon: "PenLine",
    label: "Слайд 9",
    title: "Домашнее задание",
    subtitle: "Выберите одно из трёх заданий",
    bg: "from-amber-600 to-orange-600",
    accent: "bg-white/20",
    items: [
      {
        icon: "FileText",
        color: "bg-blue-400",
        title: "Мини-сочинение",
        text: "5–7 предложений на тему «Один день из жизни» с использованием слов категории состояния.",
      },
      {
        icon: "BookMarked",
        color: "bg-green-400",
        title: "Цитаты из литературы",
        text: "Собрать 3 цитаты из литературных произведений с примерами слов категории состояния.",
      },
      {
        icon: "Image",
        color: "bg-pink-400",
        title: "Комикс",
        text: "Создать комикс (3–4 кадра) с диалогом героев, выражающих состояние через слова категории состояния.",
      },
    ] as SlideItem[],
  },
  {
    id: 10,
    type: "final",
    icon: "Award",
    label: "Слайд 10",
    title: "Итоги урока",
    footer: "Спасибо за активную работу на уроке!",
    bg: "from-indigo-700 to-purple-800",
    accent: "bg-white/20",
    items: [
      "Слова категории состояния обозначают состояние человека, природы или окружающей среды",
      "Являются сказуемым в безличных предложениях",
      "Не изменяются по числам, родам или падежам",
      "Придают тексту выразительность и эмоциональность",
    ] as string[],
  },
];
