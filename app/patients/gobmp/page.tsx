"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function GobmpPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                {/* Навигация */}
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                {/* Заголовок */}
                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                        Новая модель ГОБМП
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                {/* Место под видео */}
                <div className="w-full">
                    <div className="aspect-video w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center group hover:border-blue-400 transition-colors">
                        <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                            <PlayCircle className="h-12 w-12 text-slate-200 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <p className="text-[11px] text-slate-400 uppercase font-black tracking-[0.2em]">
                            Место для видеоматериала
                        </p>
                        <p className="text-[10px] text-slate-300 mt-2 italic">
                            (вставьте iframe или video тег здесь)
                        </p>
                    </div>
                </div>

                {/* Подпись внизу для баланса */}
                <div className="mt-8 pt-6 border-t border-slate-50">
                    <p className="text-[10px] text-slate-300 uppercase font-bold">
                        Гарантированный объем бесплатной медицинской помощи
                    </p>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}