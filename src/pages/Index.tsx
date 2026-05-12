import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ClientLogos } from "@/components/ClientLogos"
import { PortfolioShowcase } from "@/components/PortfolioShowcase"
import { StatsSection } from "@/components/StatsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { ApproachSection } from "@/components/ApproachSection"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PortfolioShowcase />
      <ClientLogos />
      <StatsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ApproachSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
