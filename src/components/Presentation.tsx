import { useState } from "react";
import Icon from "@/components/ui/icon";

type SlideItem = {
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

type Slide = {
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

const slides: Slide[] = [
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

function SlideHeader({ slide }: { slide: Slide }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
        <Icon name={slide.icon} size={20} className="text-white" />
      </div>
      <div>
        <p className="text-white/50 text-xs uppercase tracking-widest">{slide.label}</p>
        <h2 className="text-white font-bold text-2xl leading-tight">{slide.title}</h2>
        {slide.subtitle && <p className="text-white/70 text-sm">{slide.subtitle}</p>}
      </div>
    </div>
  );
}

function SlideTitle({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-6 px-8">
      <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-2">
        <Icon name={slide.icon} size={48} className="text-white" />
      </div>
      <div className="text-white/70 text-lg font-medium uppercase tracking-widest">{slide.label}</div>
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{slide.title}</h1>
      <p className="text-white/80 text-xl md:text-2xl">{slide.subtitle}</p>
      <p className="text-white/50 text-base mt-4">{slide.footer}</p>
    </div>
  );
}

function SlideGoals({ slide }: { slide: Slide }) {
  const items = (slide.items ?? []) as SlideItem[];
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        {items.map((item, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-6 flex flex-col gap-3">
            <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
              <Icon name={item.icon ?? "Circle"} size={24} className="text-white" />
            </div>
            <h3 className="text-white font-bold text-xl">{item.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideQuestions({ slide }: { slide: Slide }) {
  const items = (slide.items ?? []) as string[];
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="flex flex-col gap-4 flex-1 justify-center">
        {items.map((q, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center shrink-0 font-bold text-white text-lg">
              {i + 1}
            </div>
            <p className="text-white text-lg leading-relaxed">{q}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideTeams({ slide }: { slide: Slide }) {
  const items = (slide.items ?? []) as SlideItem[];
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {items.map((item, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}>
                <Icon name={item.icon ?? "Circle"} size={20} className="text-white" />
              </div>
              <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">{item.team}</span>
            </div>
            <h3 className="text-white font-bold text-lg">{item.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideBreak({ slide }: { slide: Slide }) {
  const items = (slide.items ?? []) as SlideItem[];
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="flex flex-col gap-3 flex-1 justify-center">
        {items.map((item, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/25 flex items-center justify-center shrink-0">
              <Icon name={item.icon ?? "Circle"} size={24} className="text-white" />
            </div>
            <p className="text-white text-lg">{item.text}</p>
          </div>
        ))}
        {slide.note && (
          <div className="mt-2 bg-white/20 rounded-2xl p-4 text-center">
            <p className="text-white font-semibold text-base">{slide.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SlideCriteria({ slide }: { slide: Slide }) {
  const items = (slide.items ?? []) as SlideItem[];
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="flex flex-col gap-5 flex-1 justify-center">
        {items.map((item, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-6 flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center shrink-0 text-white text-2xl font-bold">
              {item.num}
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">{item.title}</h3>
              <p className="text-white/75 text-base">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideGame({ slide }: { slide: Slide }) {
  const [revealed, setRevealed] = useState<number[]>([]);
  const items = (slide.items ?? []) as SlideItem[];

  const toggle = (i: number) => {
    setRevealed((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  };

  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="flex flex-col gap-5 flex-1 justify-center">
        {items.map((item, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-5">
            <div className="flex flex-wrap gap-3 mb-3">
              {(item.words ?? []).map((word, j) => (
                <span key={j} className="bg-white/25 text-white font-semibold px-5 py-2 rounded-xl text-lg">
                  {word}
                </span>
              ))}
            </div>
            <button
              onClick={() => toggle(i)}
              className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon name={revealed.includes(i) ? "EyeOff" : "Eye"} size={16} />
              {revealed.includes(i) ? "Скрыть ответ" : "Показать ответ"}
            </button>
            {revealed.includes(i) && (
              <div className="mt-2 bg-white/20 rounded-xl px-4 py-2 text-white font-semibold">
                Лишнее: <span className="text-yellow-300">{item.answer}</span>{" "}
                <span className="text-white/70 font-normal">({item.hint})</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideReflection({ slide }: { slide: Slide }) {
  const items = (slide.items ?? []) as SlideItem[];
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        {items.map((item, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
            <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white text-3xl font-bold`}>
              {item.sign}
            </div>
            <h3 className="text-white font-bold text-xl">{item.title}</h3>
            <p className="text-white/80 text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideHomework({ slide }: { slide: Slide }) {
  const items = (slide.items ?? []) as SlideItem[];
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        {items.map((item, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-6 flex flex-col gap-3">
            <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
              <Icon name={item.icon ?? "Circle"} size={24} className="text-white" />
            </div>
            <h3 className="text-white font-bold text-lg">{item.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideFinal({ slide }: { slide: Slide }) {
  const items = (slide.items ?? []) as string[];
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-6">
      <SlideHeader slide={slide} />
      <div className="flex flex-col gap-4 flex-1 justify-center">
        {items.map((item, i) => (
          <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-5 flex items-center gap-4">
            <Icon name="CheckCircle" size={24} className="text-green-300 shrink-0" />
            <p className="text-white text-lg">{item}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-white/70 text-xl pb-2">{slide.footer}</p>
    </div>
  );
}

function renderSlide(slide: Slide) {
  switch (slide.type) {
    case "title": return <SlideTitle slide={slide} />;
    case "goals": return <SlideGoals slide={slide} />;
    case "questions": return <SlideQuestions slide={slide} />;
    case "teams": return <SlideTeams slide={slide} />;
    case "break": return <SlideBreak slide={slide} />;
    case "criteria": return <SlideCriteria slide={slide} />;
    case "game": return <SlideGame slide={slide} />;
    case "reflection": return <SlideReflection slide={slide} />;
    case "homework": return <SlideHomework slide={slide} />;
    case "final": return <SlideFinal slide={slide} />;
    default: return null;
  }
}

export default function Presentation() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <div
        className={`w-full max-w-4xl rounded-3xl bg-gradient-to-br ${slide.bg} shadow-2xl`}
        style={{ minHeight: 520 }}
      >
        <div className="h-full flex flex-col" style={{ minHeight: 520 }}>
          {renderSlide(slide)}
        </div>
      </div>

      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center transition-all"
        >
          <Icon name="ChevronLeft" size={24} className="text-white" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current ? "w-6 h-3 bg-white" : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center transition-all"
        >
          <Icon name="ChevronRight" size={24} className="text-white" />
        </button>
      </div>

      <p className="text-white/40 text-sm mt-3">
        {current + 1} / {slides.length}
      </p>
    </div>
  );
}
