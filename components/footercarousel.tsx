"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Facebook, Twitter } from "lucide-react"

export function FooterCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3500, stopOnInteraction: false })
  ])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const partners = [
    { img: "1.jpg", url: "https://www.gov.kz/memleket/entities/enbek" },
    { img: "2.jpg", url: "http://almaty.gov.kz/page.php" },
    { img: "3.jpg", url: "http://strategy2050.kz/ru/page/gosprog1" },
    { img: "4.jpg", url: "https://almatyzdrav.kz/" },
    { img: "5.jpg", url: "https://almatymed.kz/" },
    { img: "6.png", url: "https://almatymed.kz/" },
    { img: "7.jpg", url: "https://amanatpartiasy.kz/?lang=kz" },
    { img: "8.jpg", url: "https://msqory.kz/ru/" },
    { img: "9.jpg", url: null },
    { img: "10.png", url: "https://www.rcrz.kz/index.php/ru/" },
    { img: "11.jpg", url: null },
    { img: "12.jpg", url: null },
    { img: "13.jpg", url: null },
    { img: "14.jpg", url: null },
    { img: "15.jpg", url: null }
  ]

  return (
    <footer className="w-full border-t border-slate-100 bg-white mt-auto overflow-hidden font-sans">

      {/* КАРУСЕЛЬ С ПОСТЕРАМИ */}
      <div className="group relative w-full bg-white">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-0">
            {partners.map((partner, index) => {
              const content = (
                <img
                  src={`/images/footer/${partner.img}`}
                  alt={`Partner ${index + 1}`}
                  className="h-full w-full object-cover object-top p-0 transition-all duration-500 group-hover/item:scale-105"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              );

              const itemClass = "relative h-[180px] md:h-[260px] min-w-0 flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_16.66%] border-r border-slate-50 overflow-hidden bg-white group/item";

              return partner.url ? (
                <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className={itemClass}>
                  {content}
                  <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/5 transition-colors" />
                </a>
              ) : (
                <div key={index} className={itemClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-white/90 p-1 rounded-full shadow-sm border border-slate-100">
          <ChevronLeft className="h-4 w-4 text-[#00B5C4]" />
        </button>
        <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-white/90 p-1 rounded-full shadow-sm border border-slate-100">
          <ChevronRight className="h-4 w-4 text-[#00B5C4]" />
        </button>
      </div>

      {/* НИЖНЯЯ ПАНЕЛЬ: ТЕПЕРЬ НА ВСЮ ШИРИНУ */}
      <div className="bg-[#00B5C4] text-white py-4 px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-medium uppercase opacity-90 tracking-tight">Call center</p>
              <a href="tel:3000103" className="text-lg font-bold">3000-103</a>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-[10px] font-medium opacity-90 uppercase tracking-tight">Мы в соцсетях</p>
              <div className="flex gap-4">
                <Twitter className="h-4 w-4 cursor-pointer hover:opacity-70 transition-opacity" />
                <Facebook className="h-4 w-4 cursor-pointer hover:opacity-70 transition-opacity" />
                <span className="text-xs font-bold cursor-pointer hover:opacity-70 uppercase">VK</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] opacity-90 uppercase font-medium tracking-wider">
              © 2026 ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}