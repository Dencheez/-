"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const actionCards = [
    { title: "Государственные символы РК", img: "/images/InfoSection/1.jpg", link: "/" },
    { title: "Послание Президента РК", img: "/images/InfoSection/2.jpg", link: "/" },
    { title: "Официальный сайт Президента", img: "/images/InfoSection/3.jpg", link: "/" },
    { title: "Казахстан 2050", img: "/images/InfoSection/4.jpg", link: "/" },
    { title: "Национальный проект", img: "/images/InfoSection/5.png", link: "/" },
]

export function InfoFiles() {
    const scrollRef = useRef<HTMLDivElement>(null)

    // Простой мгновенный скролл без "плавности", которая отвлекает
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const offset = clientWidth / 1.5
            scrollRef.current.scrollLeft = direction === "left"
                ? scrollLeft - offset
                : scrollLeft + offset
        }
    }

    return (
        <div className="mx-auto max-w-6xl px-4 mt-8 relative">
            {/* Статичные кнопки управления для мобилки */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-1 top-[35%] z-10 bg-white p-1.5 rounded-full shadow-sm border border-gray-200 md:hidden"
                aria-label="Назад"
            >
                <ChevronLeft className="h-5 w-5 text-gray-400" />
            </button>

            <button
                onClick={() => scroll("right")}
                className="absolute right-1 top-[35%] z-10 bg-white p-1.5 rounded-full shadow-sm border border-gray-200 md:hidden"
                aria-label="Вперед"
            >
                <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>

            {/* Контейнер: snap-x для фиксации позиции, без лишних транзиций */}
            <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x md:grid md:grid-cols-5 md:gap-6 md:overflow-visible"
            >
                {actionCards.map((card, index) => (
                    <Link
                        key={index}
                        href={card.link}
                        className="flex flex-col items-center shrink-0 snap-start w-[calc(33.33%-8px)] md:w-full"
                    >
                        {/* Убрали hover:scale и лишние тени */}
                        <div className={`relative w-full aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white flex items-center justify-center ${index === 3 ? "p-3" : "p-0"}`}>
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                // Наш рабочий фикс для 4-й картинки остается
                                className={`${index === 3 ? "object-contain p-2" : "object-cover"}`}
                            />
                        </div>

                        <h3 className="mt-2 text-[9px] md:text-[11px] font-medium text-gray-500 leading-tight text-center px-1 uppercase">
                            {card.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}