import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Prism полностью трансформировал наше веб-присутствие. Конверсионный дизайн увеличил количество заявок на 85% всего за три месяца. Их внимание к деталям и понимание потребностей агентств не имеет аналогов.",
    name: "Анна Соколова",
    role: "CTO, TechFlow Solutions",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Работа с Prism стала переломным моментом для наших white-label услуг. Они стабильно поставляют высококачественную работу, которой мы гордимся перед клиентами. Партнерство позволило нам масштабироваться быстрее, чем мы могли представить.",
    name: "Максим Волков",
    role: "Руководитель продукта, Quantum Dynamics",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Команда Prism не просто создает сайты — они создают машины роста. Их стратегический подход к оптимизации конверсий помог нам достичь ROI 3x на инвестиции в веб. Горячо рекомендую любому агентству, стремящемуся к масштабированию.",
    name: "Елена Петрова",
    role: "VP Engineering, Alpine Ventures",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Что говорят партнеры</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Не верьте нам на слово — послушайте агентства, которым мы помогли вырасти.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}
