import { useState } from "react";
import Icon from "@/components/ui/icon";
import { slides } from "./presentation/slideTypes";
import { renderSlide } from "./presentation/SlideRenderer";

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
