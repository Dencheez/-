"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Music, ArrowRight, Scale, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SymbolsMenuPage() {
    const symbols = [
        {
            title: "Государственный Флаг",
            href: "/symbols/flag",
            img: "/images/symbols/flag.png",
            desc: "Небесно-голубое полотнище с золотым солнцем и парящим орлом в центре."
        },
        {
            title: "Государственный Герб",
            href: "/symbols/gerb",
            img: "/images/symbols/gerb.png",
            desc: "Образ шанырака, мифических тулпаров и пятиконечной звезды в золотом цвете."
        },
        {
            title: "Государственный Гимн",
            href: "/symbols/gimn",
            icon: <Music className="h-10 w-10 text-blue-600" />,
            desc: "Торжественная песня «Менің Қазақстаным», принятая в 2006 году."
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />

            {/* Основной контейнер: max-w-6xl дает простор на ПК, px-4 защищает края на мобильном */}
            <main className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">

                {/* НАВИГАЦИЯ */}
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black tracking-widest mb-8 hover:text-blue-600 transition-colors">
                    <ChevronLeft className="h-4 w-4" /> На главную
                </Link>

                {/* ШАПКА РАЗДЕЛА: На ПК в две колонки через justify-between */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl md:text-5xl font-black uppercase text-slate-800 tracking-tighter leading-tight mb-4">
                            Государственные <br className="hidden md:block" /> символы РК
                        </h1>
                        <p className="text-slate-500 text-sm md:text-base max-w-lg">
                            Олицетворение суверенитета и единства нации, отражающее богатую историю и светлое будущее народа Казахстана.
                        </p>
                    </div>

                    <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm md:max-w-xs">
                        <Scale className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div className="text-[11px] font-bold text-slate-500 leading-tight uppercase tracking-tight">
                            Конституционный закон РК <br /> от 4 июня 2007 года N 258
                        </div>
                    </div>
                </div>

                {/* КАРТОЧКИ СИМВОЛОВ: На ПК — 3 колонки, на мобильном — 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {symbols.map((symbol) => (
                        <Link
                            key={symbol.href}
                            href={symbol.href}
                            className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden"
                        >
                            {/* Декоративный фон при ховере */}
                            <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 bg-slate-50 rounded-2xl flex items-center justify-center p-4 group-hover:bg-white transition-colors">
                                    {symbol.img ? (
                                        <img src={symbol.img} alt={symbol.title} className="max-h-full w-auto object-contain drop-shadow-md" />
                                    ) : (
                                        <div className="bg-blue-50 p-6 rounded-full group-hover:scale-110 transition-transform">{symbol.icon}</div>
                                    )}
                                </div>

                                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider mb-3 group-hover:text-blue-600">
                                    {symbol.title}
                                </h2>
                                <p className="text-sm text-slate-400 leading-relaxed px-4">
                                    {symbol.desc}
                                </p>

                                <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Подробнее <ExternalLink size={12} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ТЕКСТ ЗАКОНА: На ПК разносим по сетке 2 колонки */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-slate-200 pt-16 mb-20">

                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-1.5 bg-blue-600 rounded-full"></div>
                            <h3 className="font-black text-xs md:text-sm uppercase tracking-[0.2em] text-slate-400">
                                Глава 1. Общие положения
                            </h3>
                        </div>

                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6 text-base leading-relaxed text-slate-700">
                            <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                                Статья 1
                            </div>
                            <p className="text-lg font-medium text-slate-900 leading-snug">
                                Государственными символами Республики Казахстан являются: <strong>Государственный Флаг, Государственный Герб и Государственный Гимн.</strong>
                            </p>
                            <p className="text-slate-500 border-t border-slate-50 pt-6">
                                Все символы имеют четко установленные законодательством пропорции, цвета и правила официального использования во всех государственных институтах.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <section className="relative py-12 md:py-20 px-8 md:px-12 overflow-hidden bg-blue-600 rounded-[3rem] shadow-2xl shadow-blue-200 text-white">
                            <Scale className="absolute -right-8 -bottom-8 h-64 w-64 text-white/5 -rotate-12" />

                            <div className="relative z-10">
                                <div className="inline-block px-3 py-1 bg-blue-500 text-blue-100 text-[10px] font-black uppercase tracking-widest rounded-lg mb-6">
                                    Статья 13
                                </div>
                                <QuoteIcon className="h-12 w-12 text-blue-400/50 mb-6" />
                                <p className="text-2xl md:text-3xl font-black leading-tight italic tracking-tight">
                                    «Граждане Республики Казахстан обязаны уважать государственные символы Республики.»
                                </p>
                                <div className="mt-10 h-1 w-20 bg-blue-400"></div>
                            </div>
                        </section>
                    </div>

                </div>

                <div className="text-center pb-12">
                    <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.5em]">
                        Официальный портал • 2026
                    </p>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}

// Вспомогательный компонент иконки кавычки
function QuoteIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 7.55228 2.01697 7V5C2.01697 4.44772 2.46468 4 3.01697 4H7.01697C8.67383 4 10.017 5.34315 10.017 7V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z" />
        </svg>
    )
}