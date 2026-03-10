"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { AppShell } from "../components/app-shell"
import { HeroBanner } from "../components/home/hero-banner"
import { DirectorBlog } from "@/components/DirectorBlog"
import { QuickActions } from "../components/home/quick-actions"
import { ServicesSection } from "../components/home/services-section"
import { NewsSection } from "../components/home/news-section"

function HomeContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        {/* Верхний блок: Баннер и Блог директора в ряд на ПК */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr,350px] gap-6">
          <HeroBanner />
          <div className="hidden xl:block">
            <DirectorBlog />
          </div>
        </div>

        {/* На мобилках блог директора под баннером */}
        <div className="xl:hidden">
          <DirectorBlog />
        </div>



        <QuickActions />
        <ServicesSection searchQuery={searchQuery} />
        <NewsSection searchQuery={searchQuery} />
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