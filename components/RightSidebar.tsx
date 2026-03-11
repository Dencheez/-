"use client"

import React, { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"

// 1. Конфигурация меню (все данные здесь)
const menuConfig = [
    { name: "call центр 3000-103", href: "tel:3000103", isHeader: true },
    { name: "Психиатрическая служба", href: "/services/psychiatry" },
    { name: "Наркологическая служба", href: "/services/narkology" },
    {
        name: "Государственные закупки",
        subLinks: [
            { name: "Протоколы", href: "/goszakup/protocols" },
            { name: "Объявление", href: "/goszakup/ads" },
            { name: "План госзакупок", href: "/goszakup/plan" },
        ]
    },
    { name: "Новости", href: "/news" },
    { name: "Платные услуги", href: "/paid-services" },
    { name: "Объявление", href: "/ads" },
    { name: "Галерея", href: "/gallery" },
    {
        name: "Полезная информация",
        subLinks: [
            { name: "Информация для врачей", href: "/info/doctors" },
        ]
    },
    { name: "Пропаганда ЗОЖ", href: "/zozh" },
    {
        name: "Журналы",
        subLinks: [
            { name: 'Журнал "Вопросы наркологи Казахстана"', href: "/journals/narcology" },
            { name: 'Журнал "Вопросы ментальной медицины и экологии"', href: "/journals/mental" },
            { name: "Академия здоровья", href: "/journals/academy" },
            { name: "Наши статьи из журналов", href: "/journals/articles" },
        ]
    },
    { name: "Вакансии", href: "/vacancies" },
    {
        name: "Обязательное социальное медицинское страхование",
        subLinks: [
            { name: "ОСМС (Информация)", href: "/patients/osms" },
            { name: "Фонд социального медицинского страхования", href: "/patients/osms" },
        ]
    },
    {
        name: "Финансовый отчет",
        subLinks: [
            { name: "Отчет по НС", href: "/finance" },
            { name: "Отчет о доходах и расходах", href: "/finance" },
        ]
    },
    { name: "Бесплатная помощь", href: "/patients/gobmp" },
]

export default function RightSidebar() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <aside className="w-full flex flex-col shadow-lg rounded-lg overflow-hidden border border-[#00B5C4]/20">
            {menuConfig.map((item, idx) => {
                const hasSubLinks = !!item.subLinks;
                const isOpen = openIndex === idx;

                // Рендерим заголовок или обычную ссылку/кнопку
                return (
                    <div key={idx} className="flex flex-col border-b border-white/20 last:border-0">
                        {hasSubLinks ? (
                            // Кнопка для раскрытия подменю
                            <button
                                onMouseEnter={() => setOpenIndex(idx)}
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className={`flex justify-between items-center p-4 w-full transition-colors text-left group
                  ${isOpen ? 'bg-[#009da8]' : 'bg-[#00B5C4]'} text-white hover:bg-[#009da8]`}
                            >
                                <span className="text-[11px] font-extrabold uppercase tracking-tight leading-tight pr-2">
                                    {item.name}
                                </span>
                                {isOpen ? (
                                    <ChevronDown className="h-4 w-4 flex-shrink-0" />
                                ) : (
                                    <ChevronRight className="h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                )}
                            </button>
                        ) : (
                            // Обычная прямая ссылка
                            <Link
                                href={item.href || "#"}
                                className={`flex justify-between items-center p-4 w-full transition-colors text-white uppercase font-extrabold text-[11px] tracking-tight
                  ${item.isHeader ? 'bg-[#009da8] border-b-2 border-white/10' : 'bg-[#00B5C4] hover:bg-[#009da8]'}`}
                            >
                                {item.name}
                                {!item.isHeader && <ChevronRight className="h-4 w-4 opacity-50" />}
                            </Link>
                        )}

                        {/* Выпадающая часть */}
                        {hasSubLinks && isOpen && (
                            <div
                                className="bg-[#00A7B5] flex flex-col duration-200"
                                onMouseLeave={() => setOpenIndex(null)}
                            >
                                {item.subLinks?.map((sub, sIdx) => (
                                    <Link
                                        key={sIdx}
                                        href={sub.href}
                                        className="p-3.5 pl-8 text-[10px] text-white/95 font-bold hover:bg-white/10 border-b border-white/5 last:border-0 transition-colors"
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </aside>
    )
}