"use client"

import React from "react"
import Link from "next/link"
import { ChevronLeft, FileDown, FileText, CalendarDays } from "lucide-react"

export default function ReportGosuslugPage() {
    const reports = [
        { title: "Информация по государственным услугам за 2020 год", year: "2020", size: "1.2 MB", href: "/files/gos-report/2020 (1).docx" },
        { title: "Информация по государственным услугам за 2021 год", year: "2021", size: "1.5 MB", href: "/files/gos-report/2021 (1).docx" },
        { title: "Информация по государственным услугам за 2022 год", year: "2022", size: "1.8 MB", href: "/files/gos-report/2022 (1).docx" },
        { title: "Отчет о работе КГП на ПХВ «Центр психического здоровья» УОЗ г.Алматы за 12 месяцев 2022 года в сравнении с аналогичным периодом 2021 года", year: "2022", size: "3.1 MB", href: "/files/gos-report/Годовой_отчет_2022год_в_сравнении_с_2021г (2).docx" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <main className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">

                {/* Навигация */}
                <Link
                    href="/gosuslugi"
                    className="inline-flex items-center gap-2 text-[10px] md:text-xs text-slate-400 uppercase mb-8 md:mb-12"
                >
                    <ChevronLeft className="w-4 h-4" /> Назад
                </Link>

                <div className="space-y-8 md:space-y-12">

                    {/* Заголовок страницы */}
                    <div className="flex md:flex-row items-start md:items-center gap-4 md:gap-6">
                        <div className="bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl border border-slate-100 shrink-0">
                            <FileText className="w-6 h-6 md:w-10 md:h-10 text-[#00B5C4]" />
                        </div>
                        <h1 className="text-2xl md:text-5xl font-black text-slate-800 uppercase leading-tight tracking-tight max-w-3xl">
                            Отчеты по государственным услугам
                        </h1>
                    </div>

                    {/* Сетка отчетов */}
                    <div className="grid gap-4 md:gap-6">
                        {reports.map((report, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-slate-100 rounded-[24px] md:rounded-[40px] p-5 md:p-8 lg:p-10  hover:border-[#00B5C4]/20 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">

                                    {/* Иконка */}
                                    <div className="hidden sm:flex bg-slate-100 group-hover:bg-[#00B5C4]/10 p-4 md:p-6 rounded-2xl md:rounded-[30px] shrink-0 self-start lg:self-center transition-colors">
                                        <FileDown className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-[#00B5C4] transition-colors" />
                                    </div>

                                    {/* Контент */}
                                    <div className="flex-grow space-y-3 md:space-y-4">
                                        <h3 className="text-base md:text-xl lg:text-2xl font-bold text-slate-800 leading-snug ">
                                            {report.title}
                                        </h3>

                                        <div className="flex flex-wrap items-center gap-x-4 md:gap-x-8 gap-y-2">
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <CalendarDays className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                <span className="text-[11px] md:text-sm font-bold uppercase tracking-wider">{report.year} год</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Кнопка */}
                                    <a
                                        href={report.href}
                                        download
                                        className="inline-flex items-center justify-center gap-3 bg-[#00B5C4] text-white px-6 md:px-10 py-4 md:py-6 rounded-xl group-hover:bg-white group-hover:text-[#00B5C4] transition-colors duration-300 md:rounded-[24px] font-black text-xs md:text-sm uppercase shrink-0 w-full lg:w-auto active:scale-95"
                                    >
                                        <FileDown className="w-4 h-4 md:w-5 md:h-5" />
                                        Скачать
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