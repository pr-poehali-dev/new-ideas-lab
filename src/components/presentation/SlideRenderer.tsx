import { Slide } from "./slideTypes";
import {
  SlideTitle,
  SlideGoals,
  SlideQuestions,
  SlideTeams,
  SlideBreak,
  SlideCriteria,
  SlideGame,
  SlideReflection,
  SlideHomework,
  SlideFinal,
} from "./SlideLayouts";

export function renderSlide(slide: Slide) {
  switch (slide.type) {
    case "title":      return <SlideTitle slide={slide} />;
    case "goals":      return <SlideGoals slide={slide} />;
    case "questions":  return <SlideQuestions slide={slide} />;
    case "teams":      return <SlideTeams slide={slide} />;
    case "break":      return <SlideBreak slide={slide} />;
    case "criteria":   return <SlideCriteria slide={slide} />;
    case "game":       return <SlideGame slide={slide} />;
    case "reflection": return <SlideReflection slide={slide} />;
    case "homework":   return <SlideHomework slide={slide} />;
    case "final":      return <SlideFinal slide={slide} />;
    default:           return null;
  }
}
