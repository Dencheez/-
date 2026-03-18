"use client"

import React from "react"
import Link from "next/link"
import { ChevronLeft, Landmark, FileDown, TrendingUp, ShieldCheck, PieChart } from "lucide-react"

export default function FinancialReportPage() {
    // Данные со скриншота image_792a41.jpg
    const financialDocs = [
        {
            title: "Форма №404 Депозитарии 2018 год",
            href: "/finance/form404",
            type: "Форма №404",
            icon: <ShieldCheck className="w-8 h-8 text-slate-400 group-hover:text-[#00B5C4]" />
        },
        {
            title: "Отчет по исполнению плана развития 2018г.",
            href: "/finance/report",

            type: "Отчет об исполнении",
            icon: <TrendingUp className="w-8 h-8 text-slate-400 group-hover:text-[#00B5C4]" />
        },
        {
            title: "Финансовый отчет",
            href: "/finance/finance-report",
            type: "Годовой отчет",
            icon: <PieChart className="w-8 h-8 text-slate-400 group-hover:text-[#00B5C4]" />
        },
        {
            title: "План развития",
            href: "/finance/plan",
            type: "Стратегия",
            icon: <Landmark className="w-8 h-8 text-slate-400 group-hover:text-[#00B5C4]" />
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* РАСШИРЕННЫЙ КОНТЕЙНЕР ДЛЯ ПК юзеров (max-w-7xl) */}
            <main className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">

                {/* Навигация */}
                <Link
                    href="/UsefulLinks"
                    className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] hover:text-[#00B5C4] transition-colors mb-12"
                >
                    <ChevronLeft className="w-4 h-4" /> Назад
                </Link>

                <div className="space-y-12">

                    {/* Заголовок страницы */}
                    <div className="flex items-center gap-6">
                        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 shrink-0">
                            <Landmark className="w-8 h-8 md:w-10 md:h-10 text-[#00B5C4]" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-800 uppercase leading-tight tracking-tight">
                            Финансовый отчет
                        </h1>
                    </div>

                    {/* Сетка длинных горизонтальных коробок */}
                    <div className="grid gap-6">
                        {financialDocs.map((doc, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-slate-100 rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-sm hover:shadow-xl hover:border-[#00B5C4]/20 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">

                                    {/* Тематическая иконка */}
                                    <div className="bg-slate-100 group-hover:bg-[#00B5C4]/10 p-5 rounded-2xl md:rounded-3xl shrink-0 self-start md:self-center transition-colors">
                                        {doc.icon}
                                    </div>

                                    {/* Название документа и категория */}
                                    <div className="flex-grow space-y-2">
                                        <div className="text-[10px] font-black text-[#00B5C4] uppercase tracking-widest">
                                            {doc.type}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-snug group-hover:text-[#00B5C4] transition-colors">
                                            {doc.title}
                                        </h3>
                                    </div>

                                    {/* Кнопка скачать */}
                                    <a
                                        href="#"
                                        download
                                        className="inline-flex items-center justify-center gap-3 bg-white group-hover:bg-[#00B5C4] border border-slate-200 group-hover:border-[#00B5C4] text-slate-600 group-hover:text-white px-8 py-5 rounded-xl md:rounded-3xl font-bold text-sm md:text-base transition-all shadow-sm group-hover:shadow-cyan-500/20 shrink-0 w-full md:w-auto active:scale-95 whitespace-nowrap"
                                    >
                                        <FileDown className="w-5 h-5" />
                                        <span>Скачать документ</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Инфо-плашка внизу */}
                    <div className="mt-20 p-10 bg-white rounded-[32px] md:rounded-[48px] border border-slate-100 shadow-inner text-center">
                        <p className="text-xs md:text-base text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            Финансовая отчетность публикуется в соответствии с законодательством РК. Все документы заверены и актуальны на текущий отчетный период.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}