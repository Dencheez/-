"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, Eye, Award } from "lucide-react"
import Link from "next/link"

export default function GerbPage() {
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
                        Государственный Герб <br /> Республики Казахстан
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Eye size={12} /> Просмотров: 7304
                    </div>
                </div>

                {/* ЦЕНТРАЛЬНЫЙ СИМВОЛ */}
                <div className="flex justify-center py-10 relative">
                    {/* Декоративное сияние сзади */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(234,179,8,0.1)_0%,_transparent_70%)]"></div>
                    <img
                        src="/images/symbols/gerb.png"
                        alt="Герб РК"
                        className="h-56 w-56 object-contain relative z-10 drop-shadow-2xl"
                    />
                </div>

                {/* ТЕКСТОВЫЙ БЛОК */}
                <div className="space-y-8 text-[15px] leading-relaxed text-slate-700">

                    <p className="italic text-slate-500 border-l-2 border-yellow-500 pl-4 py-1">
                        Герб – это наследственный отличительный знак, сочетание фигур и предметов, которым придается символическое значение.
                    </p>

                    {/* АВТОРЫ */}
                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                        <div className="flex items-start gap-3">
                            <Award className="text-yellow-400 shrink-0" size={20} />
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Авторы герба:</p>
                                <p className="text-sm font-bold">Жандарбек Малибеков и <br /> Шот-Аман Уалиханов</p>
                                <p className="text-[9px] text-slate-400 mt-2 uppercase">Принят официально в 1992 году</p>
                            </div>
                        </div>
                    </div>

                    {/* СЕМАНТИКА (РАЗБОР ЭЛЕМЕНТОВ) */}
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h3 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-2">Шанырақ</h3>
                            <p className="text-sm">Символ общего дома и единой Родины для всех народов, проживающих в стране.</p>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h3 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-2">Тулпары</h3>
                            <p className="text-sm">Крылатые мифические кони олицетворяют храбрость, верность, силу и полет мысли.</p>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h3 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-2">Пятиконечная звезда</h3>
                            <p className="text-sm">Отражает открытость Казахстана для сотрудничества со всеми пятью континентами мира.</p>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h3 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-2">Цвет золота</h3>
                            <p className="text-sm">Символ богатства, справедливости и великодушия на фоне небесно-голубого мира.</p>
                        </div>
                    </div>

                    {/* ИСТОРИЧЕСКАЯ СПРАВКА */}
                    <div className="py-6 border-t border-slate-100">
                        <p className="text-sm text-slate-500">
                            История свидетельствует, что еще кочевники эпохи бронзы использовали графические символы — <span className="font-bold text-slate-700">тамги</span>, которые стали прообразом современного герба.
                        </p>
                    </div>

                    <div className="pt-4 text-center pb-8">
                        <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.4em]">
                            Государственные символы РК
                        </p>
                    </div>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}