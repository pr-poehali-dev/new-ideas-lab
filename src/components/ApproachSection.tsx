import { motion } from "framer-motion"

export function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Анализ и стратегия",
      description:
        "Мы глубоко погружаемся в цели вашего агентства, целевую аудиторию и конкурентную среду, чтобы разработать стратегию, направленную на конверсии и рост.",
    },
    {
      number: "02",
      title: "Дизайн и прототипы",
      description:
        "Наша команда создает впечатляющий дизайн, ориентированный на пользователя и конверсии. Мы прототипируем ключевые взаимодействия и собираем обратную связь.",
    },
    {
      number: "03",
      title: "Разработка и интеграции",
      description:
        "Мы создаем масштабируемые и производительные сайты на современных технологиях. Любые интеграции — от CRM до аналитики — работают бесшовно.",
    },
    {
      number: "04",
      title: "Тестирование и оптимизация",
      description:
        "Тщательное тестирование на всех устройствах и браузерах гарантирует безупречную работу. Мы оптимизируем каждый элемент для скорости, доступности и конверсий.",
    },
    {
      number: "05",
      title: "Запуск и поддержка",
      description:
        "Мы не просто запускаем и уходим. Наша постоянная поддержка гарантирует, что ваш сайт продолжит развиваться и приносить результаты вместе с ростом агентства.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl mb-6 text-balance"
          >
            Наш подход
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Проверенный процесс, который превращает вашу идею в конверсионный цифровой опыт
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"} md:w-1/2`}
                >
                  <div className="bg-secondary p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                    <h3 className="font-serif text-2xl md:text-3xl mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
