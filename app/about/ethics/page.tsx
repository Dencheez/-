"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, FileDown } from "lucide-react"
import Link from "next/link"

export default function EthicsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-6 py-12 w-full">

                {/* ВЕРХНЯЯ ПАНЕЛЬ (как на скриншоте) */}
                <div className="flex justify-between items-center border-b pb-4 mb-8">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 text-xs font-bold transition-colors">
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>
                    <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600"><Printer className="h-3.5 w-3.5" /> Печать</span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                        <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Просмотров: 4024</span>
                    </div>
                </div>

                {/* ЗАГОЛОВОК И ССЫЛКА */}
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                    <h1 className="text-4xl font-bold uppercase text-slate-800 mb-2 tracking-tight">
                        Этический кодекс
                    </h1>
                    <p className="text-slate-500 mb-10 font-medium">ГКП на ПХВ «Центр психического здоровья»</p>

                    <a
                        href="/files/Этический_кодекс__ГКП_на_ПХВ_ЦПЗ.doc"
                        download
                        className="group flex items-center gap-4 p-6 border-2 border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                    >
                        <div className="p-4 bg-blue-600 text-white rounded-lg shadow-blue-200 shadow-lg group-hover:scale-110 transition-transform">
                            <FileDown className="h-8 w-8" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-black uppercase tracking-wider text-slate-800">Скачать документ</p>
                            <p className="text-xs text-slate-400 font-medium tracking-tight">Этический_кодекс__ГКП_на_ПХВ_ЦПЗ.doc</p>
                        </div>
                    </a>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}