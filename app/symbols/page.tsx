"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Music, ArrowRight, Scale } from "lucide-react"
import Link from "next/link"

export default function SymbolsMenuPage() {
    const symbols = [
        {
            title: "Государственный Флаг",
            href: "/symbols/flag",
            img: "/images/symbols/flag.png",
            desc: "Небесно-голубое полотнище с золотым солнцем"
        },
        {
            title: "Государственный Герб",
            href: "/symbols/gerb",
            img: "/images/symbols/gerb.png",
            desc: "Образ шанырака и мифических тулпаров"
        },
        {
            title: "Государственный Гимн",
            href: "/symbols/gimn",
            icon: <Music className="h-8 w-8 text-blue-600" />,
            desc: "Торжественная песня «Менің Қазақстаным»"
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />

            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">

                {/* НАВИГАЦИЯ */}
                <Link href="/" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black tracking-widest mb-6 active:text-blue-600 transition-colors">
                    <ChevronLeft className="h-4 w-4" /> На главную
                </Link>

                {/* ШАПКА РАЗДЕЛА */}
                <div className="mb-8 px-1">
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-tight mb-3">
                        Государственные <br /> символы РК
                    </h1>
                    <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                        <Scale className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                        <p className="text-[10px] font-bold text-slate-500 leading-tight uppercase tracking-tight">
                            Конституционный закон РК <br /> от 4 июня 2007 года N 258
                        </p>
                    </div>
                </div>

                {/* КАРТОЧКИ СИМВОЛОВ */}
                <div className="grid grid-cols-1 gap-4 mb-12">
                    {symbols.map((symbol) => (
                        <Link
                            key={symbol.href}
                            href={symbol.href}
                            className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-5 shadow-sm active:scale-[0.98] active:border-blue-600 transition-all group"
                        >
                            <div className="w-20 h-20 flex-shrink-0 bg-slate-50 rounded-xl flex items-center justify-center overflow-hidden p-2">
                                {symbol.img ? (
                                    <img src={symbol.img} alt={symbol.title} className="max-h-full w-auto object-contain drop-shadow-sm" />
                                ) : (
                                    <div className="bg-blue-50 p-4 rounded-full">{symbol.icon}</div>
                                )}
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1 group-hover:text-blue-600">
                                    {symbol.title}
                                </h2>
                                <p className="text-[11px] text-slate-400 leading-tight">
                                    {symbol.desc}
                                </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-200 group-hover:text-blue-600 shrink-0" />
                        </Link>
                    ))}
                </div>

                {/* ТЕКСТ ЗАКОНА (АККОРДЕОННЫЙ СТИЛЬ / СТРУКТУРИРОВАНО) */}
                <div className="space-y-10">

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                            <h3 className="font-black text-[11px] uppercase tracking-widest text-slate-400">
                                Глава 1. Общие положения
                            </h3>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4 text-[14px] leading-relaxed text-slate-700">
                            <p className="font-black text-slate-900 text-xs uppercase tracking-tight">Статья 1</p>
                            <p>Государственными символами Республики Казахстан являются: <strong>Флаг, Герб и Гимн.</strong></p>
                            <p className="text-slate-500 text-sm">Все символы имеют четко установленные законодательством пропорции, цвета и правила использования.</p>
                        </div>
                    </section>

                    {/* ЦИТАТА ОБ ОБЯЗАННОСТЯХ */}
                    <section className="relative py-10 px-6 overflow-hidden bg-blue-600 rounded-[2.5rem] shadow-xl shadow-blue-200">
                        {/* Декоративный символ на фоне */}
                        <Scale className="absolute -right-4 -bottom-4 h-32 w-32 text-white/10 -rotate-12" />

                        <div className="relative z-10">
                            <p className="text-blue-200 font-black uppercase text-[10px] mb-4 tracking-[0.2em]">Статья 13</p>
                            <p className="text-white text-lg font-bold leading-tight italic">
                                «Граждане Республики Казахстан обязаны уважать государственные символы Республики.»
                            </p>
                        </div>
                    </section>

                    <div className="text-center py-6">
                        <p className="text-[9px] text-slate-300 font-black uppercase tracking-[0.4em]">
                            Законодательство РК • 2026
                        </p>
                    </div>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}