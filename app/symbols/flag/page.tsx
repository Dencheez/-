"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, Eye, Info } from "lucide-react"
import Link from "next/link"

export default function FlagPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">

                {/* НАВИГАЦИЯ */}
                <div className="flex items-center justify-between mb-6">
                    <Link href="/symbols" className="p-2 -ml-2 text-slate-400 active:text-blue-600 transition-colors flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
                        <ChevronLeft className="h-5 w-5" /> Назад
                    </Link>
                    <div className="flex gap-4 text-slate-300">
                        <Printer size={18} className="active:text-blue-600" />
                        <Mail size={18} className="active:text-blue-600" />
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-tight">
                        Государственный Флаг <br /> Республики Казахстан
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Eye size={12} /> Просмотров: 5476
                    </div>
                </div>

                {/* ИЗОБРАЖЕНИЕ ФЛАГА С ЭФФЕКТОМ ГЛУБИНЫ */}
                <div className="relative mb-10 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl blur opacity-10"></div>
                    <div className="relative bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xl shadow-blue-900/5">
                        <img
                            src="/images/symbols/flag.png"
                            alt="Флаг РК"
                            className="w-full h-auto block"
                        />
                    </div>
                </div>

                {/* КОНТЕНТНАЯ ЧАСТЬ */}
                <div className="space-y-8 text-[15px] leading-relaxed text-slate-700">

                    <section className="relative pl-4 border-l-2 border-blue-600">
                        <p>
                            Флаг – один из главных символов государства, олицетворяющий его суверенитет и идентичность.
                            С древних времен он выполнял функции объединения народа.
                        </p>
                    </section>

                    {/* ПЛАШКА С АВТОРОМ */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 bg-blue-600 p-1 rounded-md text-white">
                                <Info size={14} />
                            </div>
                            <p className="text-sm font-bold text-slate-800 leading-snug">
                                Официально принят в 1992 году. <br />
                                <span className="text-blue-600">Автор: Шакен Ниязбеков.</span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Описание символики</h3>

                        <div className="space-y-6">
                            <p>
                                <span className="font-bold text-slate-900">Небесно-голубой цвет</span> символизирует честность,
                                верность и безупречность. В тюркской культуре это знак чистого неба, мира и единства страны.
                            </p>

                            <p>
                                <span className="font-bold text-slate-900">Солнце</span> — символ богатства и жизни.
                                Его лучи в форме зерна означают достаток и благополучие.
                            </p>

                            <p>
                                <span className="font-bold text-slate-900">Беркут</span> олицетворяет силу государства,
                                его независимость и стремление к высоким целям.
                            </p>

                            <p>
                                <span className="font-bold text-slate-900">Национальный орнамент</span> у древка символизирует
                                глубокую преемственность культурных традиций народа Казахстана.
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 text-center border-t border-slate-100">
                        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">
                            Государственные символы РК
                        </p>
                    </div>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}