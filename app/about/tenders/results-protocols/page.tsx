"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye } from "lucide-react"
import Link from "next/link"

export default function TenderResults() {
    const title = "Протокол итогов";
    // Создаем массив от 1 до 11, чтобы не дублировать код вручную
    const pages = Array.from({ length: 11 }, (_, i) => i + 1);

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12 w-full">
                {/* Панель навигации */}
                <div className="flex justify-between items-center border-b pb-4 mb-8">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-[#1e40af] text-xs font-bold transition-colors">
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>
                    <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af]"><Printer className="h-3.5 w-3.5" /> Печать</span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af]"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                        <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Просмотров: 128</span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold uppercase text-slate-800 mb-12 tracking-tight">
                    {title}
                </h1>

                {/* --- СПИСОК СКАНОВ (БЕЗ ОГРОМНЫХ РАМОК) --- */}
                <div className="flex flex-col gap-4 bg-slate-50 p-4 rounded-sm">
                    {pages.map((num) => (
                        <div key={num} className="w-full bg-white shadow-md border border-slate-200">
                            <img
                                src={`/images/GZ/itog-${num}.jpg`}
                                alt={`Страница ${num}`}
                                className="w-full h-auto block"
                                loading="lazy"
                            />
                            <div className="py-2 px-4 bg-slate-50 border-t border-slate-100 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                                Страница {num}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}