import { Button } from "@/components/ui/3d-button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Старт",
      price: "250 000 ₽",
      period: "за проект",
      description: "Идеально для агентств, которые хотят попробовать конверсионный дизайн.",
      features: [
        "Дизайн одной страницы",
        "Адаптивная верстка",
        "2 раунда правок",
        "Срок — 1 неделя",
        "Базовая SEO-оптимизация",
      ],
    },
    {
      name: "Профи",
      price: "750 000 ₽",
      period: "за проект",
      description: "Для агентств, готовых масштабироваться с комплексными веб-решениями.",
      features: [
        "Многостраничный сайт (до 10 страниц)",
        "Собственная дизайн-система",
        "Неограниченные правки",
        "Срок — 2 недели",
        "Продвинутый SEO и аналитика",
        "Интеграция CMS",
        "30 дней поддержки после запуска",
      ],
      featured: true,
    },
    {
      name: "Бизнес",
      price: "По запросу",
      period: "свяжитесь с нами",
      description: "Для агентств с потребностью в white-label решениях и постоянном партнерстве.",
      features: [
        "Неограниченные страницы",
        "White-label решения",
        "Персональный менеджер",
        "Приоритетная поддержка",
        "Кастомные интеграции",
        "Постоянное обслуживание",
        "Мониторинг производительности",
        "Ежемесячные стратегические созвоны",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Прозрачные цены
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Выберите план под задачи вашего агентства. Все планы включают наш подход к конверсиям.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${
                plan.featured ? "bg-background border-primary shadow-lg scale-105" : "bg-background border-border"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Популярный</div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
              <Button stretch className="mb-6 rounded-full">
                Начать
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
