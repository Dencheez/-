"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { AppShell } from "../components/app-shell"
import { HeroBanner } from "../components/home/hero-banner"
import { QuickActions } from "../components/home/quick-actions"
import { ServicesSection } from "../components/home/services-section"
import { NewsSection } from "../components/home/news-section"

function HomeContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""

  return (
    <AppShell>
      <div className="flex flex-col gap-6 md:gap-10">
        {/* Баннер со встроенной инфо-сеткой */}
        <HeroBanner />

        {/* Контентная часть */}
        <div className="flex flex-col gap-8 p-4 md:p-8">
          <QuickActions />
          <ServicesSection searchQuery={searchQuery} />
          <NewsSection searchQuery={searchQuery} />
        </div>
      </div>
    </AppShell>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Загрузка...</div>}>
      <HomeContent />
    </Suspense>
  )
}