"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail } from "lucide-react"
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

                {/* Контейнер для видео */}
                <div className="w-full">
                    {/* Aspect-video делает блок адаптивным (16:9) */}
                    <div className="relative aspect-video w-full bg-slate-100 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/8MCrnYfGSUE?si=R3JpuCR6_phFY64M"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Подпись внизу */}
                <div className="mt-12 pt-6 border-t border-slate-100">
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                        Гарантированный объем бесплатной медицинской помощи
                    </p>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-2xl">
                        В данном видеоматериале подробно разъясняются изменения в системе ГОБМП и права граждан на получение бесплатной медицинской помощи в рамках новой модели.
                    </p>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}