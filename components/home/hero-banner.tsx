"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { InfoFiles } from "../info-files"

const defaultSlides = [
  {
    img: "/images/hero-banners/hero-banner--1.jpg",
    link: "/",
    title: "Профессиональная помощь рядом",
    subtitle: "Центр психического здоровья оказывает государственную услугу с вниманием, опытом и ответственностью."
  },
  {
    img: "/images/hero-banners/hero-banner--2.jpg",
    link: "/",
    title: "Забота, которой доверяют",
    subtitle: "Государственная услуга центра психического здоровья. Квалифицированная помощь, консультация и сопровождение."
  },
  {
    img: "/images/hero-banners/hero-banner--3.jpg",
    link: "/",
    title: "Рядом, когда нужна опора",
    subtitle: "Государственная помощь центра психического здоровья. Поддержка специалистов для детей, взрослых и семей."
  },
  {
    img: "/images/hero-banners/hero-banner--4.jpg",
    link: "/",
    title: "Когда важна помощь, мы рядом",
    subtitle: "Центр психического здоровья оказывает государственную услугу с уважением, вниманием и профессионализмом."
  },
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
      <div className="relative w-full h-[300px] md:h-[450px] bg-[#f8fafd] overflow-hidden group">

        <Link href={defaultSlides[current].link} className="relative block h-full w-full">
          <Image
            src={defaultSlides[current].img}
            alt={defaultSlides[current].title}
            fill
            priority
            className={`${defaultSlides[current].img.includes('hero-banner--2.jpg')
                ? "object-contain p-4 md:p-8"
                : "object-cover"
              }`}
          />

          {/* Верхняя плашка текста */}
          <div className="absolute top-4 left-4 z-20 pr-4">
            <div className="bg-[#00B5C4] px-4 py-1.5 rounded-full shadow-sm inline-block">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-white whitespace-nowrap">
                {defaultSlides[current].title}
              </span>
            </div>
          </div>

          {/* Нижняя плашка текста (Адаптированная) */}
          <div className="absolute bottom-0 left-0 z-20 w-full">
            <div className="bg-[#00B5C4]/90 backdrop-blur-sm px-4 py-4 md:px-8 md:py-6 min-h-[70px] md:min-h-[100px] flex items-center">
              <div className="max-w-[85%] md:max-w-[70%]">
                <span className="text-xs md:text-lg font-black tracking-tight md:tracking-wider text-white leading-tight block">
                  {defaultSlides[current].subtitle}
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Индикаторы */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 bottom-[85px] md:bottom-4 flex gap-1 z-30">
          {defaultSlides.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all ${current === idx ? "w-6 bg-white" : "w-1.5 bg-white/50"}`} />
          ))}
        </div>

        {/* Кнопка "Вперед" */}
        <button
          onClick={(e) => { e.preventDefault(); nextSlide(); }}
          className="absolute bottom-[80px] right-4 h-10 w-10 md:bottom-4 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-white shadow-md z-30 hover:bg-slate-50 transition-colors"
        >
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