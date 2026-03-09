"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Facebook, Twitter, } from "lucide-react"

export function FooterCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3500, stopOnInteraction: false })
  ])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const banners = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.png", "7.jpg", "8.jpg", "9.jpg", "10.png",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"
  ]

  return (
    <footer className="w-full border-t border-border bg-white mt-auto overflow-hidden font-sans">
      {/* Карусель: Высота компактная, но фото внутри крупные */}
      <div className="group relative w-full border-b border-border bg-white">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-0">
            {banners.map((fileName, index) => (
              <div
                key={index}
                // Оставили компактную высоту 90-110px
                className="relative h-[90px] md:h-[110px] min-w-0 flex-[0_0_33.33%] md:flex-[0_0_20%] border-r border-slate-100 flex items-center justify-center bg-white"
              >
                <img
                  src={`/images/footer/${fileName}`}
                  alt={`Partner ${index}`}
                  // Убрали паддинги (p-0) и поставили object-cover, чтобы фото были крупными
                  className="h-full w-full object-cover p-0"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Кнопки навигации */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-white/90 p-1 rounded-full shadow-sm border border-slate-100"
        >
          <ChevronLeft className="h-4 w-4 text-primary" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-white/90 p-1 rounded-full shadow-sm border border-slate-100"
        >
          <ChevronRight className="h-4 w-4 text-primary" />
        </button>
      </div>

      {/* Нижняя часть футера: Бирюзовый фон как на референсе */}
      <div className="bg-[#00B5C4] text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            {/* Блок Call-center */}
            <div className="text-center md:text-left">
              <p className="text-[10px] font-medium uppercase opacity-90 tracking-tight">Call center</p>
              <div className="flex items-center gap-2">

                <a href="tel:3000103" className="text-lg font-bold">3000-103</a>
              </div>
            </div>

            {/* Соцсети */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-[10px] font-medium opacity-90">Мы в соц. сетях</p>
              <div className="flex gap-4">
                <Twitter className="h-4 w-4 cursor-pointer hover:opacity-70 transition-opacity" />
                <Facebook className="h-4 w-4 cursor-pointer hover:opacity-70 transition-opacity" />
                <span className="text-xs font-bold cursor-pointer hover:opacity-70">VK</span>
              </div>
            </div>
          </div>

          {/* Копирайт и Технологии */}
          <div className="text-center md:text-right space-y-0.5">
            <p className="text-[10px] opacity-90">© 2026 ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ</p>
          </div>

        </div>
      </div>
    </footer>
  )
}