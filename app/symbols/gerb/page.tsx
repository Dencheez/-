"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail } from "lucide-react"
import Link from "next/link"

export default function GerbPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow max-w-4xl mx-auto px-6 py-12">
                <Link href="/symbols" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-8 hover:text-primary transition-colors">
                    <ChevronLeft className="h-4 w-4" /> Назад
                </Link>

                <div className="flex justify-between items-end border-b border-slate-200 pb-4 mb-4">
                    <h1 className="text-3xl font-bold text-slate-900">Государственный Герб Республики Казахстан</h1>
                    <div className="flex gap-4">
                        <Printer className="h-5 w-5 text-slate-400 cursor-pointer" />
                        <Mail className="h-5 w-5 text-slate-400 cursor-pointer" />
                    </div>
                </div>
                <p className="text-slate-400 text-xs mb-8 uppercase font-medium">Просмотров: 7304</p>

                <div className="space-y-6 text-[15px] leading-relaxed text-slate-800">
                    <div className="flex justify-center py-6">
                        <img src="/images/symbols/gerb.png" alt="Герб РК" className="h-64" />
                    </div>

                    <p>Герб – один из главных символов государства. Термин «gerbe» (наследство) и означает наследственный отличительный знак – сочетание фигур и предметов, которым придается символическое значение.</p>

                    <p>История свидетельствует, что еще кочевники эпохи бронзы... идентифицировали себя с особым символом – тотемом, графическое выражение которого впоследствии получило наименование «тамга». Впервые данный термин начал употребляться в Тюркском каганате.</p>

                    <p><strong>Герб суверенного Казахстана был официально принят в 1992 году. Его авторами являются известные архитекторы Жандарбек Малибеков и Шот-Аман Уалиханов.</strong></p>

                    <p>Государственный герб Республики Казахстан имеет форму круга (колеса) – это символ жизни и вечности. Центральным элементом является изображение шанырака на голубом фоне, от которого во все стороны расходятся уыки. Справа и слева — изображения мифических крылатых коней. В верхней части находится пятиконечная звезда, а в нижней части надпись «Қазақстан».</p>

                    <p>Шанырақ — символ общего дома и единой Родины для всех народов, проживающих в стране. Крылатые мифические кони — тулпары олицетворяют храбрость, верность и силу. Пятиконечная звезда отражает желание казахстанцев созидать страну, открытую для сотрудничества со всеми пятью континентами мира.</p>

                    <p>Основным цветом является цвет золота — символ богатства, справедливости и великодушия, а небесно-голубой символизирует чистое небо, мир и благополучие.</p>
                </div>
            </main>
            <FooterCarousel />
        </div>
    )
}