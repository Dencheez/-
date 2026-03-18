"use client"

import React from "react"
import Link from "next/link"
import { ChevronLeft, FileDown, FileText, CalendarDays } from "lucide-react"

export default function ReportGosuslugPage() {
    // Данные отчетов (взяты со скриншота image_5.png)
    const reports = [
        { title: "Информация по государственным услугам за 2020 год", year: "2020", size: "1.2 MB", href: "/files/gos-report/2020 (1).docx" },
        { title: "Информация по государственным услугам за 2021 год", year: "2021", size: "1.5 MB", href: "/files/gos-report/2021 (1).docx" },
        { title: "Информация по государственным услугам за 2022 год", year: "2022", size: "1.8 MB", href: "/files/gos-report/2022 (1).docx" },
        { title: "Отчет о работе КГП на ПХВ «Центр психического здоровья» УОЗ г.Алматы за 12 месяцев 2022 года в сравнении с аналогичным периодом 2021 года", year: "2022", size: "3.1 MB", href: "/files/gos-report/Годовой_отчет_2022год_в_сравнении_с_2021г (2).docx" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* РАСШИРЕННЫЙ КОНТЕЙНЕР ДЛЯ ПК: max-w-7xl вместо max-w-5xl */}
            <main className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">

                {/* Навигация (Назад) */}
                <Link
                    href="/gosuslugi"
                    className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] hover:text-[#00B5C4] transition-colors mb-12 px-2"
                >
                    <ChevronLeft className="w-4 h-4" /> Назад
                </Link>

                <div className="space-y-12">

                    {/* Заголовок страницы */}
                    <div className="flex items-center gap-2 px-2">
                        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 shrink-0">
                            <FileText className="w-8 h-8 md:w-10 md:h-10 text-[#00B5C4]" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-800 uppercase leading-tight tracking-tight">
                            Отчеты по государственным услугам
                        </h1>
                    </div>

                    {/* Сетка длинных горизонтальных коробок для скачивания */}
                    <div className="grid gap-2 md:gap-8">
                        {reports.map((report, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-slate-100 rounded-[24px] md:rounded-[40px] p-6 md:p-10 transition-all duration-300"
                            >
                                {/* Сетка: иконка | текст | мета-данные | кнопка. На ПК flex-row */}
                                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">

                                    {/* Иконка файла (более крупная на ПК) */}
                                    <div className="bg-slate-100 group-hover:bg-[#00B5C4]/10 p-5 rounded-2xl md:rounded-3xl shrink-0 self-start md:self-center transition-colors">
                                        <FileDown className="w-8 h-8 text-slate-400 group-hover:text-[#00B5C4] transition-colors" />
                                    </div>

                                    {/* Основной текст и мета-данные */}
                                    <div className="flex-grow space-y-4">
                                        <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-snug group-hover:text-[#00B5C4] transition-colors">
                                            {report.title}
                                        </h3>

                                        {/* Мета-данные (Год и размер) */}
                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <CalendarDays className="w-4 h-4" />
                                                <span className="text-xs md:text-sm font-medium">{report.year} год</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <FileText className="w-4 h-4" />
                                                <span className="text-xs md:text-sm font-medium">PDF, {report.size}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Кнопка скачивания. На ПК компактная, w-auto */}
                                    <a
                                        href={report.href} // Замени на реальную ссылку на файл
                                        download
                                        className="inline-flex items-center justify-center gap-3 bg-white group-hover:bg-[#00B5C4] border border-slate-200 group-hover:border-[#00B5C4] text-slate-600 group-hover:text-white px-8 py-5 rounded-xl md:rounded-3xl font-bold text-sm md:text-base transition-all shadow-sm group-hover:shadow-cyan-500/20 shrink-0 w-full md:w-auto active:scale-95 whitespace-nowrap"
                                    >
                                        <FileDown className="w-5 h-5" />
                                        <button>Скачать документ</button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}