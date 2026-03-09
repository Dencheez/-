"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Maximize2, FileImage } from "lucide-react"
import Link from "next/link"

export default function AdministrationPage() {
    const images = [
        { src: "/images/AdminsFile/1.jpg", alt: "Протокол вскрытия — Страница 1" },
        { src: "/images/AdminsFile/2.jpg", alt: "Протокол вскрытия — Страница 2" },
        { src: "/images/AdminsFile/3.jpg", alt: "Протокол вскрытия — Страница 3" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />

            <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full flex-grow">

                {/* НАВИГАЦИЯ */}
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <Link
                        href="/about"
                        className="flex items-center gap-2 text-slate-400 hover:text-[#1e40af] text-[10px] md:text-xs font-black uppercase tracking-widest transition-all group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Назад
                    </Link>
                    <div className="flex items-center gap-2 text-slate-300">
                        <FileImage className="h-4 w-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Документ: JPG</span>
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="relative mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#1e40af] leading-none">
                        Протокол <br className="md:hidden" /> вскрытия
                    </h1>
                    <div className="h-2 w-24 bg-[#1e40af] mt-6"></div>
                </div>

                {/* СПИСОК СТРАНИЦ (СКАНОВ) */}
                <div className="flex flex-col gap-12 md:gap-20">
                    {images.map((img, index) => (
                        <div key={index} className="space-y-4">
                            <div className="flex items-center justify-between px-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                                    Страница {index + 1}
                                </span>
                                <button
                                    onClick={() => window.open(img.src, '_blank')}
                                    className="flex items-center gap-1.5 text-[9px] font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-widest"
                                >
                                    <Maximize2 className="h-3 w-3" /> Увеличить
                                </button>
                            </div>

                            <div className="relative group bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200 rounded-sm overflow-hidden transition-all hover:shadow-2xl">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-auto object-contain block"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://placehold.co/800x1100/f8fafc/64748b?text=Page+${index + 1}+Not+Found`;
                                    }}
                                />
                                {/* Overlay при наведении (только для десктопа) */}
                                <div className="absolute inset-0 bg-[#1e40af]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ФУТЕР СТРАНИЦЫ */}
                <div className="mt-20 py-10 border-t border-slate-200 text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">
                        Конец документа
                    </p>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}