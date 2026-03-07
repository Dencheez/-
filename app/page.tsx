"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { AppShell } from "../components/app-shell"
import { HeroBanner } from "../components/home/hero-banner"
import { CallBanner } from "../components/home/call-banner"
import { QuickActions } from "../components/home/quick-actions"
import { ServicesSection } from "../components/home/services-section"
import { NewsSection } from "../components/home/news-section"
import { Loader2 } from "lucide-react"

// 1. Внутренний компонент для работы с параметрами поиска
function HomeContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""

  return (
    <AppShell>
      {/* Мобильная версия */}
      <div className="space-y-4 md:hidden">
        <HeroBanner />
        <CallBanner />
        <QuickActions />
        {/* Передаем searchQuery, чтобы поиск внутри секций заработал */}
        <ServicesSection searchQuery={searchQuery} />
        <NewsSection searchQuery={searchQuery} />
      </div>

      {/* Десктопная версия */}
      <div className="hidden gap-6 px-4 pb-4 md:grid md:grid-cols-[1.6fr,1.4fr] lg:grid-cols-[1.7fr,1.3fr]">
        <div className="flex flex-col gap-4">
          <HeroBanner />
          <QuickActions />
          <ServicesSection searchQuery={searchQuery} />
        </div>
        <div className="flex flex-col gap-4">
          <CallBanner />
          <NewsSection searchQuery={searchQuery} />
        </div>
      </div>
    </AppShell>
  )
}

// 2. Основной компонент с оберткой Suspense для предотвращения Build Error
export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-background">
          <Loader2 className="h-10 w-10 animate-spin text-primary/20" />
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  )
}