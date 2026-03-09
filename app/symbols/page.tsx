"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Music } from "lucide-react"
import Link from "next/link"

export default function SymbolsMenuPage() {
    const symbols = [
        {
            title: "Государственный Флаг",
            href: "/symbols/flag",
            img: "/images/symbols/flag.png",
        },
        {
            title: "Государственный Герб",
            href: "/symbols/gerb",
            img: "/images/symbols/gerb.png",
        },
        {
            title: "Государственный Гимн",
            href: "/symbols/gimn",
            icon: <Music className="h-10 w-10 text-slate-400" />,
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                <Link href="/" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> На главную
                </Link>

                <div className="border-b-2 border-slate-900 pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 uppercase">
                        Государственные символы Республики Казахстан
                    </h1>
                    <p className="text-[12px] font-bold text-slate-500 mt-1">
                        Конституционный закон Республики Казахстан от 4 июня 2007 года N 258
                    </p>
                </div>

                {/* Карточки */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {symbols.map((symbol) => (
                        <Link
                            key={symbol.href}
                            href={symbol.href}
                            className="bg-white border border-slate-200 p-6 flex flex-col items-center text-center hover:border-blue-600 transition-colors group"
                        >
                            <div className="h-24 flex items-center justify-center mb-4">
                                {symbol.img ? (
                                    <img src={symbol.img} alt={symbol.title} className="max-h-full w-auto object-contain" />
                                ) : (
                                    <div className="p-3 bg-slate-50 rounded-full">{symbol.icon}</div>
                                )}
                            </div>
                            <h2 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider group-hover:text-blue-700">
                                {symbol.title}
                            </h2>
                        </Link>
                    ))}
                </div>

                {/* ТЕКСТ ЗАКОНА */}
                <div className="space-y-8 text-[14px] leading-relaxed text-slate-800 text-justify border-t border-slate-100 pt-10">

                    <section className="space-y-4">
                        {/* Граница слева другого цвета (синий/золотой) */}
                        <h3 className="font-bold uppercase text-slate-900 border-l-4 border-blue-600 pl-4">
                            Глава 1. Государственные символы Республики Казахстан
                        </h3>

                        <div className="space-y-4">
                            <p><strong>Статья 1. Государственные символы Республики Казахстан</strong></p>
                            <p>Государственными символами Республики Казахстан являются: Государственный Флаг, Государственный Герб, Государственный Гимн.</p>
                            <p>Государственный Флаг Республики Казахстан представляет собой прямоугольное полотнище голубого цвета с изображением в центре солнца с лучами, под которым - парящий орел. У древка - национальный орнамент в виде вертикальной полосы. Изображение солнца, его лучей, орла и национального орнамента - цвета золота. Соотношение ширины Флага к его длине - 1:2.</p>
                            <p>Государственный Герб Республики Казахстан имеет форму круга и представляет собой изображение шанырака (верхняя сводчатая часть юрты) на голубом фоне, от которого во все стороны в виде солнечных лучей расходятся уыки (опоры). Справа и слева от шанырака расположены изображения мифических крылатых коней. В верхней части расположена объемная пятиконечная звезда, а в нижней части - надпись "Қазақстан". Изображение звезды, шанырака, уыков, мифических крылатых коней, а также надписи "Қазақстан" - цвета золота.</p>
                            <p>Государственный Гимн Республики Казахстан представляет собой музыкально-поэтическое произведение, исполняемое в случаях, предусмотренных настоящим Конституционным законом.</p>
                        </div>
                    </section>

                    <section className="space-y-4 pt-4">
                        <h3 className="font-bold uppercase text-slate-900 border-l-4 border-blue-600 pl-4">
                            Глава 2. Государственный Флаг Республики Казахстан
                        </h3>
                        <p><strong>Статья 4. Порядок использования Государственного Флага Республики Казахстан</strong></p>
                        <div className="pl-6 space-y-3 text-slate-600">
                            <p>1. Государственный Флаг Республики Казахстан в обязательном порядке поднимается (устанавливается, размещается):</p>
                            <p>1) на зданиях Резиденции Президента Республики Казахстан, Парламента, Сената и Мажилиса, Правительства, министерств, центральных исполнительных органов...</p>
                            <p>2) в кабинетах Президента Республики Казахстан, председателей палат Парламента, Премьер-Министра, Государственного секретаря...</p>
                        </div>
                    </section>

                    {/* Статья 13 — просто другой цвет текста */}
                    <section className="pt-10 pb-20">
                        <div className="border-t border-slate-100 pt-8">
                            <p className="text-blue-700 font-bold uppercase text-xs mb-2 tracking-widest">Статья 13</p>
                            <p className="text-slate-500 italic text-lg leading-relaxed">
                                Граждане Республики Казахстан, а также лица, находящиеся на территории Республики, обязаны уважать государственные символы Республики Казахстан.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}