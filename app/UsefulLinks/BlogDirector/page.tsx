"use client"

import React from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BlogDirectorPage() {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-2 py-8 md:py-16 max-w-7xl">

                {/* Навигация */}
                <Link
                    href="/UsefulLinks"
                    className="inline-flex items-center gap-2 text-[10px] md:text-xs text-slate-400 uppercase mb-12"
                >
                    <ChevronLeft className="w-4 h-4" /> Назад
                </Link>

                <div className="bg-white rounded-[32px] md:rounded-[48px] border border-slate-100 overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center">

                        <div className="w-full lg:w-2/5 relative min-h-[auto] md:min-h-[500px] flex items-center justify-center overflow-hidden">
                            <img
                                src="/images/007.png"
                                alt="Директор Центра"
                                className="w-full h-full object-cover rounded-t-[18px]"
                            />
                            {/* Оверлей с должностью */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                                <p className="text-white font-black uppercase tracking-widest text-xs md:text-sm">
                                    Рахменшеев Сапар
                                </p>
                            </div>
                        </div>

                        {/* ПРАВАЯ ЧАСТЬ: ТЕКСТ ОБРАЩЕНИЯ */}
                        <div className="w-full lg:w-3/5 p-8 md:p-16 space-y-8">

                            <h1 className="text-2xl md:text-4xl font-black text-slate-800 uppercase leading-tight tracking-tight">
                                Уважаемые посетители сайта!
                            </h1>

                            <div className="space-y-6 text-slate-600 text-sm md:text-lg leading-relaxed font-medium">
                                <p>
                                    Я рад приветствовать Вас на официальном интернет-ресурсе "Центра психического здоровья" города Алматы!
                                </p>
                                <p>
                                    Цели и задачи в Послании Главы государства Нурсултана Абишевича Назарбаева и в Государственной программе развития здравоохранения Республики Казахстан, являются основной политикой Центра психического здоровья.
                                </p>
                                <p className="font-bold text-slate-800 border-l-4 border-[#00B5C4] pl-6 py-2">
                                    Долгом каждого сотрудника Центра является охрана психического здоровья всех алматинцев!
                                </p>
                                <p>
                                    На нашем сайте Вы найдете любую интересующую Вас информацию. Здесь Вы можете задать любой вопрос, на который получите ответ в кратчайшие сроки.
                                </p>
                                <p>
                                    Также Вы можете сделать предложение по улучшению качества оказываемой специализированной помощи или поблагодарить сотрудника Центра.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}