"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const actionCards = [
    {
        title: "Государственные символы РК",
        img: "/images/InfoSection/1.jpg",
        link: "https://www.akorda.kz/ru/state_symbols/about_state_symbols"
    },
    {
        title: "Послание Президента РК",
        img: "/images/InfoSection/2.jpg",
        link: "https://www.akorda.kz/ru/addresses"
    },
    {
        title: "Официальный сайт Президента",
        img: "/images/InfoSection/3.jpg",
        link: "https://akorda.kz/"
    },
    {
        title: "Казахстан 2050",
        img: "/images/InfoSection/4.jpg",
        link: "https://strategy2050.kz/" // Нашел для тебя официальный сайт стратегии
    },
    {
        title: "Национальный проект",
        img: "/images/InfoSection/5.png",
        link: "https://adilet.zan.kz/rus/docs/P2100000725"
    },
]

export function InfoFiles() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const offset = clientWidth / 1.2 // Скроллим почти на весь видимый экран
            scrollRef.current.scrollLeft = direction === "left"
                ? scrollLeft - offset
                : scrollLeft + offset
        }
    }

    return (
        <div className="mx-4 relative group/container">
            {/* Левая стрелка: только для мобилок */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-[-40px] top-[20%] z-20 bg-white/90 p-1 rounded-full shadow-md border border-gray-100 md:hidden"
                aria-label="Назад"
            >
                <ChevronLeft className="h-5 w-5 text-gray-500" />
            </button>

            {/* Правая стрелка: только для мобилок */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-[-40px] top-[20%] z-20 bg-white/90 p-1 rounded-full shadow-md border border-gray-100 md:hidden"
                aria-label="Вперед"
            >
                <ChevronRight className="h-5 w-5 text-gray-500" />
            </button>

            {/* Контейнер карусели */}
            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
            >
                {actionCards.map((card, index) => {
                    const isFourth = index === 3;

                    return (
                        <Link
                            key={index}
                            href={card.link}
                            className="group flex flex-col space-y-2 shrink-0 snap-start w-[calc((100%-14px)/3)] md:w-full"
                        >
                            {/* Контейнер с твоим фиксом для 4-й картинки */}
                            <div className={`relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white flex items-center justify-center ${isFourth ? "p-3" : "p-0"}`}>
                                <Image
                                    src={card.img}
                                    alt={card.title || "banner"}
                                    fill
                                    className={`${isFourth ? "object-contain p-2" : "object-cover"}`}
                                />
                            </div>

                            <h3 className="text-[10px] md:text-[11px] font-medium text-gray-600 leading-tight text-center px-1 uppercase">
                                {card.title}
                            </h3>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}