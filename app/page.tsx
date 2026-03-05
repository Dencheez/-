import { AppShell } from "../components/app-shell"
import { HeroBanner } from "../components/home/hero-banner"
import { CallBanner } from "../components/home/call-banner"
import { QuickActions } from "../components/home/quick-actions"
import { ServicesSection } from "../components/home/services-section"
import { NewsSection } from "../components/home/news-section"
import AppointmentForm from "../components/appointment-form"

export default function HomePage() {
  return (
    <AppShell>
      {/* Мобильная версия — прежний порядок блоков */}
      <div className="space-y-4 md:hidden">
        <HeroBanner />
        <CallBanner />
        <AppointmentForm />
        <QuickActions />
        <ServicesSection />
        <NewsSection />
      </div>

      {/* Десктопная версия — двухколоночный layout */}
      <div className="hidden gap-6 px-4 pb-4 md:grid md:grid-cols-[1.6fr,1.4fr] lg:grid-cols-[1.7fr,1.3fr]">
        <div className="flex flex-col gap-4">
          <HeroBanner />
          <QuickActions />
          <ServicesSection />
        </div>
        <div className="flex flex-col gap-4">
          <CallBanner />
          <AppointmentForm />
          <NewsSection />
        </div>
      </div>
    </AppShell>
  )
}
