"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye } from "lucide-react"
import Link from "next/link"

export default function OpeningProtocol() {
    const title = "Протокол вскрытия";

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12 w-full flex-grow">
                {/* ПАНЕЛЬ НАВИГАЦИИ */}
                <div className="flex justify-between items-center border-b pb-4 mb-8">
                    <Link
                        href="/about"
                        className="flex items-center gap-2 text-slate-400 hover:text-[#1e40af] text-xs font-bold transition-colors uppercase tracking-widest"
                    >
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>
                    <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af]">
                            <Printer className="h-3.5 w-3.5" /> Печать
                        </span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af]">
                            <Mail className="h-3.5 w-3.5" /> E-mail
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Eye className="h-3.5 w-3.5" /> Просмотров: 245
                        </span>
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <h1 className="text-3xl md:text-4xl font-black uppercase text-slate-800 mb-12 tracking-tight">
                    {title}
                </h1>

                {/* СПИСОК СКАНОВ — БЕЗ ОГРАНИЧЕНИЙ ПО ВЫСОТЕ */}
                <div className="flex flex-col gap-8 w-full">

                    {/* СТРАНИЦА 1 */}
                    <img
                        src="/images/AdminsFile/1.jpg"
                        alt="Протокол страница 1"
                        className="w-full h-auto block shadow-md border border-slate-100 rounded-sm"
                        loading="lazy"
                    />

                    {/* СТРАНИЦА 2 */}
                    <img
                        src="/images/AdminsFile/2.jpg"
                        alt="Протокол страница 2"
                        className="w-full h-auto block shadow-md border border-slate-100 rounded-sm"
                        loading="lazy"
                    />

                    {/* СТРАНИЦА 3 (ДЛИННАЯ) — РАСТЯНЕТСЯ ПОД СВОЙ РАЗМЕР */}
                    <img
                        src="/images/AdminsFile/3.jpg"
                        alt="Протокол страница 3 - Длинная"
                        className="w-full h-auto block shadow-md border border-slate-100 rounded-sm"
                        loading="lazy"
                    />

                </div>

                {/* ТЕХНИЧЕСКАЯ ПОМЕТКА ВНИЗУ */}
                <div className="mt-16 pt-8 border-t border-slate-50">
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">
                        Документ обновлен: 2024
                    </p>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}