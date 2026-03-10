"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. ХЕДЕР */}

      {/* 2. КОНТЕНТ: Растягивается и выталкивает футер вниз */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 py-8">
        {children}
      </main>

      {/* 3. ФУТЕР: Никаких max-w и отступов, строго внизу и на всю ширину */}
      <footer className="w-full bg-[#00b2bd] mt-auto">
      </footer>
    </div>
  )
}