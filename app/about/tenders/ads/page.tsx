"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, Maximize2, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function TenderAds() {
    const title = "Объявления госзакупок";

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />

            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">

                {/* МОБИЛЬНАЯ ПАНЕЛЬ */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                    <Link href="/about" className="p-2 -ml-2 text-slate-400 active:text-[#1e40af] transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        <Eye className="h-4 w-4" /> 128
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-[1.1]">
                        Объявления <br /> госзакупок
                    </h1>
                    <div className="h-1.5 w-12 bg-[#1e40af] mt-4"></div>
                </div>

                {/* КОНТЕЙНЕР ДЛЯ СКАНА */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between px-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Документ JPG</span>
                        <button
                            onClick={() => window.open("/images/GZ/gos-zakup.jpg", '_blank')}
                            className="flex items-center gap-1 text-[10px] font-black text-[#1e40af] uppercase"
                        >
                            <Maximize2 size={12} /> Весь экран
                        </button>
                    </div>

                    {/* САМ СКАН */}
                    <div className="relative bg-white rounded-xl shadow-xl shadow-blue-900/5 border border-slate-200 overflow-hidden group active:scale-[0.99] transition-transform">
                        <img
                            src="/images/GZ/gos-zakup.jpg"
                            alt="Объявление 1"
                            className="w-full h-auto block"
                            onError={(e) => {
                                e.currentTarget.src = "https://placehold.co/600x800/white/1e40af?text=Scan+Not+Found";
                            }}
                        />
                        {/* Информационный оверлей (виден только если картинка длинная) */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12 pointer-events-none" />
                    </div>

                    {/* КНОПКИ ДЕЙСТВИЯ ПОД СКАНОВ */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                        <a
                            href="/images/GZ/gos-zakup.jpg"
                            download
                            className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest active:bg-slate-800 transition-colors"
                        >
                            <Download size={14} /> Скачать
                        </a>
                        <button
                            className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest active:bg-slate-50 transition-colors"
                        >
                            <ExternalLink size={14} /> Источник
                        </button>
                    </div>
                </div>

                {/* ВТОРОСТЕПЕННЫЕ КНОПКИ */}
                <div className="flex justify-center gap-8 mt-10 opacity-40">
                    <button className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest"><Printer size={12} /> Печать</button>
                    <button className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest"><Mail size={12} /> E-mail</button>
                </div>

                <div className="mt-12 text-center pb-6">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.4em]">Отдел государственных закупок</p>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}