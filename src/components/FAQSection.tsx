import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Каковы типичные сроки проекта?",
      answer:
        "Большинство проектов занимают от 2 до 4 недель от старта до запуска, в зависимости от объема. Мы предоставляем детальные сроки на этапе анализа и держим вас в курсе на протяжении всего процесса.",
    },
    {
      question: "Вы предлагаете white-label услуги?",
      answer:
        "Да! Наш план «Бизнес» включает white-label решения, где мы работаем за кулисами как продолжение вашего агентства. Ваши клиенты видят только ваш бренд.",
    },
    {
      question: "Что если мне нужны правки после запуска?",
      answer:
        "Все наши планы включают пост-запусковую поддержку. План «Профи» включает 30 дней поддержки, а клиенты «Бизнес» получают постоянное обслуживание и обновления.",
    },
    {
      question: "Можете ли вы работать с нашим текущим стеком?",
      answer:
        "Безусловно. Мы имеем опыт работы со всеми основными платформами и фреймворками. На этапе анализа мы оценим вашу текущую инфраструктуру и предложим лучший подход к интеграции.",
    },
    {
      question: "Как вы обеспечиваете высокую конверсию?",
      answer:
        "Мы используем принципы дизайна на основе данных, A/B-тестирование и проверенные техники оптимизации конверсии. Каждое решение подкреплено исследованиями и лучшими практиками из тысяч успешных проектов.",
    },
    {
      question: "Что включает постоянная поддержка?",
      answer:
        "Постоянная поддержка включает исправление ошибок, обновления безопасности, мониторинг производительности, обновление контента и ежемесячные стратегические созвоны для обеспечения максимальной эффективности сайта.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Частые вопросы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Все, что нужно знать о работе с Prism.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
