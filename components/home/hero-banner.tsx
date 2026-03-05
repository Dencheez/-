"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronRight, Loader2 } from "lucide-react"
import { supabase } from "@/app/lib/supabase"

type Slide = {
  title: string
  description: string
}

const defaultSlides: Slide[] = [
  {
    title: "ФСМС/ОСМС",
    description: "Обязательное мед. страхование (ОСМС)",
  },
  {
    title: "Психологическая помощь",
    description: "Консультации опытных специалистов",
  },
  {
    title: "Онлайн запись",
    description: "Удобная запись на приём через личный кабинет",
  },
]

export function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [slides, setSlides] = useState<Slide[]>(defaultSlides)
  const [loading, setLoading] = useState(true)

  const nextSlide = useCallback(() => {
    if (slides.length === 0) return
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    async function fetchSlides() {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('section_name, content')
          .like('section_name', 'hero_%')

        if (data && data.length > 0 && !error) {
          const newSlides: Slide[] = []
          const map = new Map<string, string>()
          data.forEach(item => map.set(item.section_name, item.content))

          for (let i = 1; i <= 5; i++) {
            const title = map.get(`hero_title_${i}`)
            const desc = map.get(`hero_desc_${i}`)
            if (title && desc) {
              newSlides.push({ title, description: desc })
            }
          }

          if (newSlides.length > 0) {
            setSlides(newSlides)
          }
        }
      } catch (err) {
        console.error("Error fetching hero slides:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchSlides()
  }, [])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide, slides.length])

  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#E3F0FF] to-[#B3D9FF]">
      <div className="flex items-center">
        <div className="flex-1 p-5">
          <h2 className="text-xl font-bold text-foreground">{slides[current].title}</h2>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            {slides[current].description}
          </p>
          <div className="mt-4 flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current
                  ? "w-6 bg-primary"
                  : "w-2 bg-primary/30"
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="relative h-40 w-40 shrink-0">
          <Image
            src="/images/banner-health.jpg"
            alt="Медицинский центр"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
