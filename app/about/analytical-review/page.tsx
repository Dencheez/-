"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function AnalyticalReviewPage() {
    const reports = [
        {
            title: '«О СОСТОЯНИИ СЛУЖБЫ ОХРАНЫ ПСИХИЧЕСКОГО ЗДОРОВЬЯ» 2022 ГОД',
            file: "/files/review_2022.pdf",
            size: "2.4 MB"
        },
        {
            title: '«О СОСТОЯНИИ СЛУЖБЫ ОХРАНЫ ПСИХИЧЕСКОГО ЗДОРОВЬЯ Г. АЛМАТЫ ЗА 2019-2020 ГОД»',
            file: "/files/review_2019_2020.pdf",
            size: "1.8 MB"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 w-full flex-grow">

                {/* ВЕРХНЯЯ ПАНЕЛЬ */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-8 gap-4">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-[#1e40af] text-[10px] md:text-xs font-bold transition-colors uppercase tracking-widest">
                        <ArrowLeft className="h-4 w-4" /> Назад
                    </Link>
                    <div className="flex flex-wrap gap-4 md:gap-6 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af] transition-colors"><Printer className="h-3.5 w-3.5" /> Печать</span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af] transition-colors"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                        <span className="flex items-center gap-1.5 text-slate-300"><Eye className="h-3.5 w-3.5" /> 2243</span>
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-10">
                    <h1 className="text-2xl md:text-3xl font-black uppercase text-slate-800 tracking-tight leading-tight">
                        Аналитический обзор
                    </h1>
                    <div className="h-1 w-20 bg-[#1e40af] mt-4"></div>
                </div>

                {/* СПИСОК ОТЧЕТОВ */}
                <div className="grid gap-4">
                    {reports.map((report, index) => (
                        <a
                            key={index}
                            href={report.file}
                            download
                            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-5 md:p-6 border border-slate-100 rounded-xl hover:border-[#1e40af] hover:bg-blue-50/40 transition-all shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-start gap-5">
                                <div className="p-3.5 bg-slate-50 text-slate-400 group-hover:bg-[#1e40af] group-hover:text-white transition-all rounded-lg shrink-0">
                                    <FileText className="h-6 w-6 md:h-7 md:w-7" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs md:text-[13px] font-extrabold uppercase leading-snug text-slate-700 group-hover:text-[#1e40af] transition-colors max-w-2xl">
                                        {report.title}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">PDF • {report.size}</span>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1e40af] md:opacity-0 group-hover:opacity-100 transition-all self-end md:self-center">
                                <Download className="h-4 w-4" />
                                <span className="border-b-2 border-[#1e40af]/20">Скачать обзор</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* ФУТЕР КОНТЕНТА */}
                <div className="mt-20 border-t border-slate-100 pt-8 flex justify-between items-center">
                    <p className="text-[9px] md:text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">
                        Обновлено: Март 2026
                    </p>
                    <div className="h-px flex-grow mx-8 bg-slate-50 hidden md:block"></div>
                    <p className="text-[9px] md:text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">
                        ЦПЗ Алматы
                    </p>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}