"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, Download, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function OpeningProtocol() {
    const title = "Протокол вскрытия";
    const pages = [
        { id: 1, src: "/images/AdminsFile/1.jpg", alt: "Страница 1" },
        { id: 2, src: "/images/AdminsFile/2.jpg", alt: "Страница 2" },
        { id: 3, src: "/images/AdminsFile/3.jpg", alt: "Страница 3 - Длинная" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />

            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">

                {/* МОБИЛЬНАЯ НАВИГАЦИЯ */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                    <Link href="/about" className="p-2 -ml-2 text-slate-400 active:text-[#1e40af] transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                            <Eye className="h-4 w-4" /> 245
                        </div>
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-[10px] font-black text-[#1e40af] uppercase tracking-[0.2em] mb-2">
                        <div className="w-6 h-px bg-[#1e40af]"></div>
                        Документация
                    </div>
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-tight">
                        {title}
                    </h1>
                </div>

                {/* СПИСОК СКАНОВ */}
                <div className="flex flex-col gap-6">
                    {pages.map((page) => (
                        <div key={page.id} className="space-y-3">
                            {/* Метка страницы */}
                            <div className="flex justify-between items-end px-1">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    Страница {page.id}
                                </span>
                                {page.id === 3 && (
                                    <span className="text-[9px] font-bold text-amber-500 uppercase border border-amber-200 px-2 py-0.5 rounded-full bg-amber-50">
                                        Длинный скан
                                    </span>
                                )}
                            </div>

                            {/* Изображение с тапом для просмотра */}
                            <div
                                className="relative bg-white rounded-xl shadow-lg shadow-slate-200 border border-slate-200 overflow-hidden active:scale-[0.99] transition-transform"
                                onClick={() => window.open(page.src, '_blank')}
                            >
                                <img
                                    src={page.src}
                                    alt={page.alt}
                                    className="w-full h-auto block"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md">
                                    <ChevronRight className="h-4 w-4 text-slate-400" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ПАНЕЛЬ ДЕЙСТВИЙ */}
                <div className="mt-10 grid grid-cols-1 gap-3">
                    <button className="w-full bg-slate-900 text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] active:bg-[#1e40af] transition-colors shadow-xl shadow-slate-200">
                        <Download size={18} /> Скачать все (PDF)
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 py-4 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-500 uppercase active:bg-white">
                            <Printer size={14} /> Печать
                        </button>
                        <button className="flex items-center justify-center gap-2 py-4 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-500 uppercase active:bg-white">
                            <Mail size={14} /> E-mail
                        </button>
                    </div>
                </div>

                {/* ФУТЕР КОНТЕНТА */}
                <div className="mt-12 text-center pb-8">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.3em]">
                        Обновлено: Март 2026 • ЦПЗ
                    </p>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}