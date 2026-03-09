"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, CheckCircle2, Info, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

export default function OsmsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                {/* Навигация */}
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                {/* Заголовок */}
                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                        ОСМС: Социальное медстрахование
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="space-y-10 mb-20">

                    {/* Инфо-блок */}
                    <section className="bg-blue-50 p-6 border-l-4 border-blue-600">
                        <div className="flex gap-4">
                            <Info className="h-6 w-6 text-blue-600 flex-shrink-0" />
                            <div className="text-[15px] text-slate-700 leading-relaxed">
                                <p className="font-bold text-slate-900 uppercase mb-2">Что дает статус «Застрахован»?</p>
                                <p>
                                    Система обязательного социального медицинского страхования (ОСМС) предоставляет расширенный доступ к медицинским услугам,
                                    включая дорогостоящие обследования (МРТ, КТ), плановые операции и консультации узких специалистов.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Место под инфографику ОСМС */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="aspect-[4/3] bg-slate-50 border-2 border-dashed border-slate-200 rounded flex flex-col items-center justify-center">
                            <ImageIcon className="h-10 w-10 text-slate-200 mb-2" />
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Инфографика: Как стать застрахованным</p>
                        </div>
                        <div className="aspect-[4/3] bg-slate-50 border-2 border-dashed border-slate-200 rounded flex flex-col items-center justify-center">
                            <ImageIcon className="h-10 w-10 text-slate-200 mb-2" />
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Инфографика: Пакет услуг ОСМС</p>
                        </div>
                    </div>

                    {/* Как проверить статус */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-bold text-slate-900 uppercase">Как проверить свой статус?</h2>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { title: "eGov.kz", desc: "Портал электронного правительства" },
                                { title: "Qoldau 24/7", desc: "Мобильное приложение" },
                                { title: "SaqtandyruBot", desc: "Telegram-бот фонда" }
                            ].map((item, i) => (
                                <div key={i} className="p-4 border border-slate-100 bg-white shadow-sm rounded">
                                    <p className="font-bold text-blue-600 text-sm mb-1">{item.title}</p>
                                    <p className="text-[12px] text-slate-500 uppercase font-bold tracking-tighter">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Перечень услуг */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900 uppercase">В пакет ОСМС входит:</h2>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                            {[
                                "Специализированная медицинская помощь",
                                "Высокотехнологичные медицинские услуги",
                                "Медицинская реабилитация",
                                "Стоматологические услуги (для отд. категорий)",
                                "Лекарственное обеспечение",
                                "Профилактические осмотры"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-50">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span className="text-[14px] text-slate-700">{text}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}