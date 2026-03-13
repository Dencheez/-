"use client"

import React, { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"

const menuConfig = [
    { name: "call центр 3000-103", href: "tel:3000103", isHeader: true },
    {
        name: "Государственные закупки",
        href: "/goszakup",
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
        href: "/info",
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
        href: "/info/SocialInsurance",
        subLinks: [
            { name: "Фонд социального медицинского страхования", href: "https://msqory.kz/ru/" },
        ]
    },
    {
        name: "Финансовый отчет",
        subLinks: [
            { name: "Отчет по НС", href: "/about/board" },
            { name: "Отчет о доходах и расходах", href: "/finance" },
        ]
    },
    { name: "Бесплатная помощь", href: "/free-help" },
]

export default function RightSidebar({ onClose }: { onClose?: () => void }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleLinkClick = () => {
        if (onClose) onClose();
    };

    return (
        <aside className="w-full flex flex-col shadow-lg rounded-lg overflow-hidden border border-[#00B5C4]/20">
            {menuConfig.map((item, idx) => {
                const hasSubLinks = !!item.subLinks;
                const isOpen = openIndex === idx;

                return (
                    <div key={idx} className="flex flex-col border-b border-white/20 last:border-0">
                        {hasSubLinks ? (
                            // Если у дропдауна есть собственная страница — рендерим две колонки:
                            // ссылку и кнопку-стрелку отдельно
                            <div className={`flex items-stretch w-full ${isOpen ? 'bg-[#009da8]' : 'bg-[#00B5C4]'} hover:bg-[#009da8] transition-colors`}>
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className="flex-1 p-4 text-[11px] font-extrabold uppercase tracking-tight leading-tight text-white pr-1"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <span className="flex-1 p-4 text-[11px] font-extrabold uppercase tracking-tight leading-tight text-white pr-1">
                                        {item.name}
                                    </span>
                                )}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="px-4 flex items-center text-white border-l border-white/20 hover:bg-white/10 transition-colors"
                                    aria-label="Раскрыть подменю"
                                >
                                    {isOpen ? (
                                        <ChevronDown className="h-4 w-4 flex-shrink-0" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                                    )}
                                </button>
                            </div>
                        ) : (
                            // Обычная прямая ссылка
                            <Link
                                href={item.href || "#"}
                                onClick={handleLinkClick}
                                className={`flex justify-between items-center p-4 w-full transition-colors text-white uppercase font-extrabold text-[11px] tracking-tight
                  ${item.isHeader ? 'bg-[#009da8] border-b-2 border-white/10' : 'bg-[#00B5C4] hover:bg-[#009da8]'}`}
                            >
                                {item.name}
                                {!item.isHeader && <ChevronRight className="h-4 w-4 opacity-50" />}
                            </Link>
                        )}

                        {/* Выпадающая часть */}
                        {hasSubLinks && isOpen && (
                            <div className="bg-[#00A7B5] flex flex-col duration-200">
                                {item.subLinks?.map((sub, sIdx) => (
                                    <Link
                                        key={sIdx}
                                        href={sub.href}
                                        onClick={handleLinkClick}
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