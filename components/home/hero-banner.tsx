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
      {/* Контейнер баннера */}
      <div className={`relative w-full h-[300px] md:h-[450px] overflow-hidden group rounded-b-lg ${defaultSlides[current].img.includes('hero-banner--2.jpg')
        }`}>

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
          <div className="absolute bottom-0 md:bottom-0 z-20">
            <div className={`
      px-3 py-3 md:px-10 md:py-8 rounded-t-lg md:rounded-t-lg transition-all
      ${defaultSlides[current].img.includes('hero-banner--2.jpg')
                ? "bg-[#00B5C4]/90"
                : "bg-white/20 backdrop-blur-md border border-white/30 "
              }
    `}>
              <div className="space-y-2">
                <span className="text-[18px] md:text-2xl font-black text-white block">
                  {defaultSlides[current].title}
                </span>
                <h2 className="text-xs md:text-base font-black text-white leading-tight">
                  {defaultSlides[current].subtitle}
                </h2>
              </div>
            </div>
          </div>
        </Link>

        {/* Кнопка "Вперед" */}
        <button
          onClick={(e) => { e.preventDefault(); nextSlide(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-[#00B5C4]/90 z-30 transition-transform active:scale-90"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
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