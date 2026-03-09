"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, Download, ChevronUp, Maximize2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function TenderResults() {
    const title = "Протокол итогов";
    const pages = Array.from({ length: 11 }, (_, i) => i + 1);
    const [showTopBtn, setShowTopBtn] = useState(false);

    // Следим за скроллом для кнопки "Вверх"
    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 1000);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />

            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">

                {/* ПАНЕЛЬ НАВИГАЦИИ */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                    <Link href="/about" className="p-2 -ml-2 text-slate-400 active:text-[#1e40af]">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <div className="flex items-center gap-1 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        <Eye className="h-4 w-4" /> 128
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <p className="text-[10px] font-black text-[#1e40af] uppercase tracking-[0.2em] mb-2 px-1">
                        Результаты тендера
                    </p>
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-tight">
                        {title}
                    </h1>
                    <div className="h-1 w-10 bg-[#1e40af] mt-4"></div>
                </div>

                {/* СПИСОК СКАНОВ (11 СТРАНИЦ) */}
                <div className="space-y-6">
                    {pages.map((num) => (
                        <div key={num} className="group">
                            <div className="flex justify-between items-center mb-2 px-1">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    Страница {num} из 11
                                </span>
                                <button
                                    onClick={() => window.open(`/images/GZ/itog-${num}.jpg`, '_blank')}
                                    className="p-1 text-[#1e40af] active:scale-90 transition-transform"
                                >
                                    <Maximize2 size={16} />
                                </button>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                                <img
                                    src={`/images/GZ/itog-${num}.jpg`}
                                    alt={`Страница ${num}`}
                                    className="w-full h-auto block"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/600x800/white/cbd5e1?text=Загрузка...";
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ФИНАЛЬНЫЕ ДЕЙСТВИЯ */}
                <div className="mt-12 space-y-3">
                    <button className="w-full bg-slate-900 text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] active:bg-[#1e40af] shadow-xl">
                        <Download size={18} /> Скачать весь протокол
                    </button>
                    <div className="flex justify-center gap-8 py-4 opacity-40">
                        <button className="flex items-center gap-1.5 text-[9px] font-bold uppercase"><Printer size={12} /> Печать</button>
                        <button className="flex items-center gap-1.5 text-[9px] font-bold uppercase"><Mail size={12} /> E-mail</button>
                    </div>
                </div>
            </main>

            {/* КНОПКА "ВВЕРХ" ДЛЯ ДЛИННОГО СКРОЛЛА */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-6 p-4 bg-white border border-slate-200 rounded-full shadow-2xl transition-all duration-300 z-50 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <ChevronUp className="h-6 w-6 text-[#1e40af]" />
            </button>

            <FooterCarousel />
        </div>
    )
}