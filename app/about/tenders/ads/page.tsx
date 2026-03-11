"use client"
import { ArrowLeft, Printer, Mail, Eye, Maximize2 } from "lucide-react"
import Link from "next/link"

export default function TenderAds() {
    const title = "Объявления госзакупок";
    const imagePath = "/images/GZ/gos-zakup.jpg";

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">
                {/* МОБИЛЬНАЯ ПАНЕЛЬ */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                    <Link href="/about" className="p-2 -ml-2 text-slate-400">
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
                            onClick={() => window.open(imagePath, '_blank')}
                            className="flex items-center gap-1 text-[10px] font-black text-[#1e40af] uppercase"
                        >
                            <Maximize2 size={12} /> Весь экран
                        </button>
                    </div>

                    {/* САМ СКАН */}
                    <div className="relative bg-white rounded-xl border border-slate-200 overflow-hidden group">
                        <img
                            src={imagePath}
                            alt="Объявление по госзакупкам"
                            className="w-full h-auto block"
                            onError={(e) => {
                                e.currentTarget.src = "https://placehold.co/600x800/white/1e40af?text=Scan+Not+Found";
                            }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/10 to-transparent h-12 pointer-events-none" />
                    </div>
                </div>

                {/* КЛИКАБЕЛЬНЫЕ КНОПКИ ДЕЙСТВИЙ */}
                <div className="flex justify-center gap-10 mt-10">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-slate-500"
                    >
                        <Printer size={14} />
                        <span className="border-b border-slate-200">Печать</span>
                    </button>

                    <a
                        href={`mailto:?subject=${encodeURIComponent(title)}&body=Объявление доступно по ссылке: ${typeof window !== 'undefined' ? window.location.href : ''}`}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-slate-500"
                    >
                        <Mail size={14} />
                        <span className="border-b border-slate-200">E-mail</span>
                    </a>
                </div>

                <div className="mt-12 text-center pb-8">
                    <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full">
                        <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.3em]">
                            Отдел государственных закупок
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}