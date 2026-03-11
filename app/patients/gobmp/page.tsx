"use client"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, Printer, Mail } from "lucide-react"
import Link from "next/link"

export default function GobmpPage() {
    const handleEmailClick = () => {
        window.location.href = `mailto:?subject=${encodeURIComponent("Информация о ГОБМП")}`;
    };

    return (
        <AppShell>
            <main className="max-w-5xl mx-auto px-6 py-8 w-full">
                {/* Навигация */}
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-6 font-black">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                {/* Заголовок */}
                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-10">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
                        Новая модель ГОБМП
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer onClick={() => window.print()} className="h-5 w-5 text-slate-200 cursor-pointer" />
                        <Mail onClick={handleEmailClick} className="h-5 w-5 text-slate-200 cursor-pointer" />
                    </div>
                </div>

                {/* Видео-контейнер */}
                <div className="w-full group">
                    <div className="relative aspect-video w-full bg-slate-900 rounded-2xl overflow-hidden border-4 border-white ring-1 ring-slate-100">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/8MCrnYfGSUE?si=R3JpuCR6_phFY64M"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Информация */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-1">
                        <p className="text-[10px] text-primary uppercase font-black tracking-[0.2em]">
                            Статус программы
                        </p>
                        <p className="mt-2 text-2xl font-black text-slate-900 leading-none uppercase">
                            Действующая <br /> модель 2024
                        </p>
                    </div>
                    <div className="md:col-span-2 border-l-2 border-slate-50 pl-10">
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            В данном видеоматериале подробно разъясняются изменения в системе ГОБМП
                            и права граждан на получение бесплатной медицинской помощи в рамках новой модели.
                        </p>
                        <p className="mt-6 text-[10px] text-slate-300 uppercase font-black tracking-widest leading-loose">
                            Гарантированный объем бесплатной <br /> медицинской помощи Республики Казахстан
                        </p>
                    </div>
                </div>
            </main>
        </AppShell>
    )
}