"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, FileDown } from "lucide-react"
import Link from "next/link"

export default function EthicsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 w-full flex-grow">

                {/* ВЕРХНЯЯ ПАНЕЛЬ (АДАПТИРОВАННАЯ) */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-8 gap-4">
                    <Link
                        href="/about"
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-600 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-widest"
                    >
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>

                    <div className="flex flex-wrap gap-4 md:gap-6 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest w-full sm:w-auto">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600">
                            <Printer className="h-3.5 w-3.5" /> Печать
                        </span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600">
                            <Mail className="h-3.5 w-3.5" /> E-mail
                        </span>
                        <span className="flex items-center gap-1.5 ml-auto sm:ml-0 opacity-60 md:opacity-100">
                            <Eye className="h-3.5 w-3.5" /> 4024
                        </span>
                    </div>
                </div>

                {/* КОНТЕНТ ПО ЦЕНТРУ */}
                <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-2">
                    <h1 className="text-2xl md:text-4xl font-black uppercase text-slate-800 mb-2 tracking-tight leading-tight">
                        Этический кодекс
                    </h1>
                    <p className="text-xs md:text-sm text-slate-500 mb-8 md:mb-10 font-medium max-w-xs md:max-w-none">
                        ГКП на ПХВ «Центр психического здоровья»
                    </p>

                    {/* КАРТОЧКА СКАЧИВАНИЯ (АДАПТИВНАЯ) */}
                    <a
                        href="/files/Этический_кодекс__ГКП_на_ПХВ_ЦПЗ.doc"
                        download
                        className="group flex flex-row items-center gap-4 p-4 md:p-6 border-2 border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-all w-full max-w-[340px] md:max-w-md"
                    >
                        <div className="p-3 md:p-4 bg-blue-600 text-white rounded-lg shadow-blue-200 shadow-lg group-hover:scale-110 transition-transform shrink-0">
                            <FileDown className="h-6 w-6 md:h-8 md:w-8" />
                        </div>
                        <div className="text-left overflow-hidden">
                            <p className="text-[10px] md:text-xs font-black uppercase tracking-wider text-slate-800">Скачать документ</p>
                            <p className="text-[9px] md:text-[11px] text-slate-400 font-medium tracking-tight truncate w-full">
                                Этический_кодекс_ЦПЗ.doc
                            </p>
                        </div>
                    </a>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}