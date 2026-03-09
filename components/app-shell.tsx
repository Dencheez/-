"use client"

import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { FooterCarousel } from "@/components/footercarousel" // Не забудь импорт!

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    // Внешний контейнер на весь экран
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Контент с ограничением ширины */}
      <div className="mx-auto w-full max-w-md bg-background md:max-w-5xl lg:max-w-6xl flex-1 flex flex-col">
        <Header />
        <main className="flex-1 pb-20 md:pb-10">
          {children}
        </main>
        <BottomNav />
      </div>

      {/* Футер ВНЕ ограничения ширины, чтобы баннеры летели по всему экрану */}
      <FooterCarousel />
    </div>
  )
}