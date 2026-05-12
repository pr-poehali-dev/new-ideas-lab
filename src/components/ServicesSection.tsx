import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      title: "Дизайн для конверсий",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "White-label решения",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Масштабируемая разработка",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Поддержка и развитие",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            Наши услуги
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Все, что нужно вашему агентству для выдающихся результатов.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary/30 rounded-3xl p-8 flex flex-col h-[320px] transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="relative flex-grow flex items-center justify-center mb-6">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} showcase`}
                  className="absolute w-44 h-auto rounded-lg shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105"
                />
                <img
                  src={service.overlayImage || "/placeholder.svg"}
                  alt={`${service.title} example`}
                  className="absolute w-44 h-auto rounded-lg shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105"
                />
              </div>

              <h3 className="font-sans text-left text-lg font-medium text-foreground mt-auto">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
