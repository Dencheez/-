"use client"

import Image from "next/image"
import Link from "next/link"

const actionCards = [
    { title: "Государственные символы РК", img: "/images/InfoSection/1.jpg", link: "/" },
    { title: "Послание Президента РК", img: "/images/InfoSection/2.jpg", link: "/" },
    { title: "Официальный сайт Президента", img: "/images/InfoSection/3.jpg", link: "/" },
    { title: "Казахстан 2050", img: "/images/InfoSection/4.jpg", link: "/" }, // Индекс 3
    { title: "Национальный проект", img: "/images/InfoSection/5.png", link: "/" },
]

export function InfoFiles() {
    return (
        <div className="mx-auto max-w-6xl px-4 mt-10 mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8 justify-items-center">
                {actionCards.map((card, index) => (
                    <Link
                        key={index}
                        href={card.link}
                        className="group flex flex-col items-center w-full max-w-[150px] md:max-w-[180px]"
                    >
                        {/* Добавили p-1 для 4-й карточки (индекс 3), чтобы картинка сжалась внутрь */}
                        <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md bg-white flex items-center justify-center ${index === 3 ? "p-3" : "p-0"}`}>
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                // ТОЛЬКО ДЛЯ 4-Й КАРТИНКИ: object-contain и p-2 (padding)
                                className={` ${index === 3
                                    ? "object-contain p-2"
                                    : "object-cover"}`}
                            />
                        </div>

                        <h3 className="mt-3 text-[10px] md:text-[11px] font-medium text-gray-500 leading-tight text-center px-1 group-hover:text-blue-600 transition-colors">
                            {card.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}