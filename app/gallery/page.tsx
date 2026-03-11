"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Image as ImageIcon, ChevronLeft, Maximize2, Camera } from "lucide-react"

const images = [
    { id: 1, title: "Главный корпус", category: "Экстерьер" },
    { id: 2, title: "Приемное отделение", category: "Интерьер" },
    { id: 3, title: "Отделение реабилитации", category: "Палаты" },
    { id: 4, title: "Конференц-зал", category: "Залы" },
    { id: 5, title: "Территория центра", category: "Парк" },
    { id: 6, title: "Медицинское оборудование", category: "Оснащение" },
]

export default function GalleryPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] min-h-screen">
                <div className="bg-slate-900 py-16 px-6 md:px-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B5C4]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/40 uppercase text-[10px] font-black mb-8">
                            <ChevronLeft className="w-3 h-3" /> Назад
                        </Link>
                        <div className="flex items-center gap-3 mb-6">
                            <Camera className="w-6 h-6 text-[#00B5C4]" />
                            <span className="text-white/60 font-black uppercase tracking-widest text-[10px]">Медиатека</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                            Галерея<br />Центра
                        </h1>
                        <p className="text-white/50 text-sm font-medium max-w-xl leading-relaxed uppercase">
                            Визуальный обзор наших отделений, территории и технического оснащения для комфортного пребывания пациентов.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl w-full mx-auto px-6 py-12 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img) => (
                            <div key={img.id} className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-sm border border-slate-100">
                                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
                                    <ImageIcon className="w-12 h-12" />
                                </div>

                                <div className="absolute inset-0 bg-slate-900/80 flex flex-col justify-end p-8">
                                    <span className="text-[10px] font-black text-[#00B5C4] uppercase tracking-widest mb-1">{img.category}</span>
                                    <h3 className="text-white text-lg font-black uppercase tracking-tight">{img.title}</h3>
                                </div>

                                <button className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                    <Maximize2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
