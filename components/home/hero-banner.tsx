"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { InfoFiles } from "../info-files" // Импортируем твои плитки

type Slide = {
  img: string
  link: string
}

const defaultSlides: Slide[] = [
  { img: "/images/hero-banners/hero-banner--1.jpg", link: "/" },
  { img: "/images/hero-banners/hero-banner--2.jpg", link: "/" },
  { img: "/images/hero-banners/hero-banner--3.jpg", link: "/" },
  { img: "/images/hero-banners/hero-banner--4.jpg", link: "/" },
  { img: "/images/hero-banners/hero-banner--5.jpg", link: "/" },
]

export function HeroBanner() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % defaultSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="flex flex-col gap-6">
      {/* САМ БАННЕР */}
      <div className="relative mx-4 mt-4 overflow-hidden rounded-3xl h-[250px] md:h-[450px] shadow-2xl bg-gradient-to-br from-[#f8fbff] to-[#e1efff] group">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
        </div>

        <Link href={defaultSlides[current].link} className="relative block h-full w-full z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-[1]" />
          <Image
            src={defaultSlides[current].img}
            alt={`Banner ${current + 1}`}
            fill
            priority
            className={`transition-opacity duration-700 ${defaultSlides[current].img.includes('hero-banner--2.jpg')
              ? "object-contain p-6 md:p-12 scale-[1.02]"
              : "object-cover"
              }`}
          />
        </Link>

        {/* Индикаторы */}
        <div className="absolute left-6 bottom-6 flex gap-2 z-10">
          {defaultSlides.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${current === idx ? "w-8 bg-blue-600" : "w-2 bg-blue-200"}`}
            />
          ))}
        </div>

        {/* Кнопка "Вперед" */}
        <button
          onClick={(e) => { e.preventDefault(); nextSlide(); }}
          className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 hover:bg-blue-600 text-slate-800 hover:text-white shadow-xl backdrop-blur-md transition-all active:scale-90 z-20 group/btn"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover/btn:translate-x-0.5" />
        </button>

        <div className="absolute top-6 left-6 z-10 hidden md:block">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-blue-100 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">
            Центр Психического Здоровья
          </span>
        </div>
      </div>

      {/* ТВОИ ПЛИТКИ (InfoFiles) — теперь они привязаны к баннеру */}
      <div className="mx-4">
        <InfoFiles />
      </div>
    </div>
  )
}