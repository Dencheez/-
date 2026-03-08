"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type Slide = {
  img: string
  link: string
}

const defaultSlides: Slide[] = [
  { img: "/images/hero-banners/hero-banner--1.jpg", link: "/" },
  { img: "/images/hero-banners/hero-banner--2.jpg", link: "/" }, // Допустим, эта слишком огромная
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
    <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl h-[250px] md:h-[500px] shadow-lg bg-[#f0f7ff]">
      <Link href={defaultSlides[current].link} className="relative block h-full w-full">
        <Image
          src={defaultSlides[current].img}
          alt={`Banner ${current + 1}`}
          fill
          priority
          className={` ${defaultSlides[current].img.includes('hero-banner--2.jpg')
              ? "object-contain p-6 md:p-12"
              : "object-cover"
            }`}
        />
      </Link>

      {/* Кнопка "Вперед" */}
      <button
        onClick={(e) => {
          e.preventDefault();
          nextSlide();
        }}
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-lg backdrop-blur-sm transition-transform active:scale-95 z-10"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}