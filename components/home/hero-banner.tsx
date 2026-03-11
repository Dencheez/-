"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { InfoFiles } from "../info-files"

const defaultSlides = [
  { img: "/images/hero-banners/hero-banner--1.jpg", link: "/", title: "ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ" },
  { img: "/images/hero-banners/hero-banner--2.jpg", link: "/", title: "ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ" },
  { img: "/images/hero-banners/hero-banner--3.jpg", link: "/", title: "ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ" },
  { img: "/images/hero-banners/hero-banner--4.jpg", link: "/", title: "ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ" },
  { img: "/images/hero-banners/hero-banner--5.jpg", link: "/", title: "ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ" },
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
    <div className="flex flex-col w-full bg-white">
      <div className="relative w-full h-[250px] md:h-[450px] bg-[#f8fafd] overflow-hidden group">

        <Link href={defaultSlides[current].link} className="relative block h-full w-full">
          <Image
            src={defaultSlides[current].img}
            alt={defaultSlides[current].title}
            fill
            priority
            className={`${
              // Только для 2-й картинки используем contain, для остальных — cover
              defaultSlides[current].img.includes('hero-banner--2.jpg')
                ? "object-contain p-4 md:p-8"
                : "object-cover"
              }`}
          />

          {/* Плашка текста */}
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-blue-100">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-blue-600">
                {defaultSlides[current].title}
              </span>
            </div>
          </div>
        </Link>

        {/* Индикаторы */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-1 z-30">
          {defaultSlides.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full ${current === idx ? "w-6 bg-blue-600" : "w-1.5 bg-blue-200"}`} />
          ))}
        </div>

        {/* Кнопка "Вперед" */}
        <button onClick={(e) => { e.preventDefault(); nextSlide(); }} className="absolute bottom-4 right-4 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-white shadow-md z-30 hover:bg-slate-50">
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-slate-700" />
        </button>
      </div>

      {/* Сетка под баннером */}
      <div className="w-full py-6 bg-white border-b border-slate-100">
        <div className="px-4 md:px-8 max-w-[1440px] mx-auto">
          <InfoFiles />
        </div>
      </div>
    </div>
  )
}