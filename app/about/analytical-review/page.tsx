"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function AnalyticalReviewPage() {
    const reports = [
        {
            title: '«О СОСТОЯНИИ СЛУЖБЫ ОХРАНЫ ПСИХИЧЕСКОГО ЗДОРОВЬЯ» 2022 ГОД',
            file: "/files/review_2022.pdf"
        },
        {
            title: '«О СОСТОЯНИИ СЛУЖБЫ ОХРАНЫ ПСИХИЧЕСКОГО ЗДОРОВЬЯ Г.АЛМАТЫ ЗА 2019-2020 ГОД»',
            file: "/files/review_2019_2020.pdf"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-6 py-12 w-full">

                {/* ВЕРХНЯЯ ПАНЕЛЬ */}
                <div className="flex justify-between items-center border-b pb-4 mb-8">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-[#1e40af] text-xs font-bold transition-colors">
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>
                    <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af]"><Printer className="h-3.5 w-3.5" /> Печать</span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af]"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                        <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Просмотров: 2243</span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold uppercase text-slate-800 mb-10 tracking-tight">
                    Аналитический обзор
                </h1>

                {/* СПИСОК ДОКУМЕНТОВ (ССЫЛКИ НА СКАЧИВАНИЕ) */}
                <div className="space-y-4">
                    {reports.map((report, index) => (
                        <a
                            key={index}
                            href={report.file}
                            download
                            className="group flex items-center justify-between p-6 border border-slate-100 rounded-sm hover:border-[#1e40af] hover:bg-blue-50/30 transition-all"
                        >
                            <div className="flex items-center gap-5">
                                <div className="p-3 bg-slate-50 text-slate-400 group-hover:bg-[#1e40af] group-hover:text-white transition-colors rounded-sm">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <span className="text-[13px] font-bold uppercase leading-tight text-slate-700 group-hover:text-[#1e40af] transition-colors max-w-2xl">
                                    {report.title}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity">
                                <Download className="h-4 w-4" />
                                Скачать
                            </div>
                        </a>
                    ))}
                </div>

                {/* ПУСТОЙ БЛОК ДЛЯ ВИЗУАЛЬНОГО ОБЪЕМА */}
                <div className="mt-20 border-t border-slate-50 pt-10">
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">Данные обновлены: 2024</p>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}