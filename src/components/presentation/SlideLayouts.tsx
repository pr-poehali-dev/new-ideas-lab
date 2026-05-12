import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Slide, SlideItem } from "./slideTypes";

export function SlideHeader({ slide }: { slide: Slide }) {
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

export function SlideTitle({ slide }: { slide: Slide }) {
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

export function SlideGoals({ slide }: { slide: Slide }) {
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

export function SlideQuestions({ slide }: { slide: Slide }) {
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

export function SlideTeams({ slide }: { slide: Slide }) {
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

export function SlideBreak({ slide }: { slide: Slide }) {
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

export function SlideCriteria({ slide }: { slide: Slide }) {
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

export function SlideGame({ slide }: { slide: Slide }) {
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

export function SlideReflection({ slide }: { slide: Slide }) {
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

export function SlideHomework({ slide }: { slide: Slide }) {
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

export function SlideFinal({ slide }: { slide: Slide }) {
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
