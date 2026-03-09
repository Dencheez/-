"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, FileText, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function CharterPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">

                {/* МОБИЛЬНАЯ ПАНЕЛЬ НАВИГАЦИИ */}
                <div className="flex items-center justify-between border-b pb-4 mb-8">
                    <Link href="/about" className="p-2 -ml-2 text-slate-400 active:text-blue-600 transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <div className="flex gap-4 text-slate-400">
                        <Share2 className="h-5 w-5 active:text-blue-600" />
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter">
                            <Eye className="h-4 w-4" /> 2845
                        </div>
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-none">
                        Устав <br /> предприятия
                    </h1>
                    <div className="h-1 w-12 bg-blue-600 mt-3"></div>
                </div>

                {/* КАРТОЧКА ДОКУМЕНТА */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center">

                    {/* Иконка документа */}
                    <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-lg shadow-blue-100 mb-6">
                        <FileText size={32} />
                    </div>

                    <div className="text-center space-y-2 mb-6">
                        <h2 className="text-lg font-bold text-slate-800 leading-snug">
                            Устав ГКП на ПХВ «ЦПЗ»
                        </h2>
                        <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest">
                            Основной документ
                        </p>
                    </div>

                    <div className="w-full h-px bg-slate-200 mb-6"></div>

                    <p className="text-xs text-slate-500 leading-relaxed text-center mb-8 px-2">
                        Официальный устав «Центра психического здоровья» Управления общественного здоровья г. Алматы.
                    </p>

                    {/* ГЛАВНАЯ КНОПКА (МАССИВНАЯ ДЛЯ ПАЛЬЦА) */}
                    <a
                        href="/files/ustav_cpz.pdf"
                        download
                        className="w-full flex items-center justify-center gap-3 bg-slate-900 active:bg-blue-700 text-white py-5 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all shadow-md active:scale-[0.97]"
                    >
                        <Download size={18} />
                        Скачать PDF
                    </a>
                </div>

                {/* ДОПОЛНИТЕЛЬНЫЕ ДЕЙСТВИЯ (ТАПАБЕЛЬНЫЕ) */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-4 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-500 uppercase active:bg-slate-50">
                        <Printer size={14} /> Печать
                    </button>
                    <button className="flex items-center justify-center gap-2 py-4 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-500 uppercase active:bg-slate-50">
                        <Mail size={14} /> E-mail
                    </button>
                </div>

                {/* ИНФО */}
                <div className="mt-10 text-center">
                    <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                        v.2023 • 2.4 MB • PDF
                    </div>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}