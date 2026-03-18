"use client"
import React from "react"
import { Quote } from "lucide-react"

export function DirectorBlogContent() {
    return (
        <>
            {/* РАСШИРЕННЫЙ КОНТЕЙНЕР ДЛЯ ПК (max-w-7xl) */}
            <div className="max-w-7xl mx-auto py-10 px-4 md:px-8">

                {/* Hero Section: Полная адаптация */}
                <div className="relative mb-12 rounded-[32px] md:rounded-[48px] overflow-hidden bg-gradient-to-br from-[#00B5C4] to-[#008A96] text-white shadow-2xl">
                    <div className="flex flex-col md:flex-row items-stretch">

                        {/* ПРАВАЯ КОЛОНКА: ТЕКСТ И ИМЯ */}
                        <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center space-y-8 relative z-10">
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                    Обращение руководителя
                                </span>
                                <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
                                    Рахменшеев Сапар Куанышбекович
                                </h1>
                                <p className="text-base md:text-lg text-white/90 font-medium border-l-4 border-white/30 pl-5 py-1">
                                    Директор КГП на ПХВ «Центр психического здоровья» Управления общественного здравоохранения г. Алматы
                                </p>
                            </div>

                            {/* Иконка цитаты как декоративный элемент */}
                            <Quote className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 text-white/10 rotate-12" />
                        </div>
                    </div>
                </div>

                {/* Blog Post Content (Текст без изменений) */}
                <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-sm border border-slate-100">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 border-b pb-6">
                            Уважаемые посетители нашего сайта!
                        </h2>

                        <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-lg font-medium">
                            <p>
                                Мы рады приветствовать вас на страницах официального сайта!
                            </p>

                            <p>
                                Надеемся с помощью нашего сайта стать ближе к вам, найти с вами взаимопонимание в вопросах оказания медицинских услуг и наладить обратную связь.
                            </p>

                            <p className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#00B5C4] font-bold text-slate-800 my-10">
                                «Любое ваше обращение не останется без внимания, ваши предложения, замечания будут приняты к сведению и помогут нам совершенствовать организацию медицинской помощи.»
                            </p>

                            <p>
                                Информационная открытость — это залог доверия между врачом и пациентом. Мы постоянно работаем над тем, чтобы каждый житель нашего города мог получить квалифицированную помощь и поддержку в нашем центре.
                            </p>

                            <p className="text-xl md:text-2xl font-black text-[#00B5C4] pt-10">
                                Желаю всем крепкого здоровья!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}