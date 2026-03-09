"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import {
    Target, TrendingUp, ShieldCheck,
    PhoneCall, Users, Factory, Stethoscope,
    ArrowLeft, CheckCircle2, ListChecks,
    Building2
} from "lucide-react"
import Link from "next/link"

export default function MissionDetailedPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            {/* ГЛАВНЫЙ БАННЕР */}
            <section className="bg-[#1e40af] text-white py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <Link href="/about" className="flex items-center gap-2 text-blue-200 hover:text-white mb-6 md:mb-8 text-xs md:sm transition-colors w-fit">
                        <ArrowLeft className="h-4 w-4" /> ВЕРНУТЬСЯ В РАЗДЕЛ "О ЦЕНТРЕ"
                    </Link>
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 bg-white/10 w-fit px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
                            Аналитический отчет за 2021-2022 гг.
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight md:leading-none">
                            Миссия, Цели и <span className="text-blue-300 md:block lg:inline">Стратегия ЦПЗ</span>
                        </h1>
                        <p className="max-w-2xl text-base md:text-lg text-blue-100 font-light mt-2 md:mt-4">
                            ГКП на ПХВ «Центр психического здоровья» (ЦПЗ) города Алматы — ведущее государственное предприятие в области ментального здоровья.
                        </p>
                    </div>
                </div>
                <Target className="absolute right-[-100px] top-[-100px] h-64 w-64 md:h-96 md:w-96 text-white/5 rotate-12 hidden md:block" />
            </section>

            <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-16 md:space-y-24">

                {/* 1. МИССИЯ */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    <div className="lg:col-span-2 space-y-6 md:space-y-8">
                        <div className="bg-slate-50 border-l-[6px] md:border-l-8 border-[#1e40af] p-6 md:p-10">
                            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#1e40af] mb-4 md:mb-6">Наша Миссия</h2>
                            <p className="text-lg md:text-2xl text-slate-800 leading-tight font-medium italic">
                                «Обеспечение доступности и высокого качества специализированной психиатрической и наркологической помощи через интеграцию в ПМСП и масштабную социальную реабилитацию».
                            </p>
                        </div>
                        <div className="prose prose-slate text-xs md:text-sm leading-relaxed text-slate-600">
                            <h3 className="text-slate-900 font-bold uppercase italic border-b pb-2">Историческая справка службы:</h3>
                            <p>Психиатрическая служба города Алматы была организована в <strong>1939 году</strong>.</p>
                            <p>В настоящее время Центр располагает базой более <strong>3 гектаров</strong> и коечной мощностью <strong>632 койки</strong>.</p>
                        </div>
                    </div>
                    <div className="bg-[#1e40af] text-white p-6 md:p-8 rounded-sm shadow-xl flex flex-col justify-center">
                        <h3 className="text-[10px] md:text-sm font-bold uppercase mb-4 md:mb-6 tracking-widest text-blue-300">Ключевые приоритеты</h3>
                        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
                            {["Интеграция ПЦПЗ в поликлиники", "Цифровизация (МИС) данных", "Снижение стигматизации"].map((text, i) => (
                                <li key={i} className="flex gap-3">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-blue-400 shrink-0" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 2. АНАЛИЗ ЗАБОЛЕВАЕМОСТИ */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-4">
                        <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-[#1e40af]" />
                        <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter">Анализ заболеваемости</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Психиатрия */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <h3 className="font-bold text-sm md:text-lg uppercase text-[#1e40af]">Психиатрия</h3>
                                <span className="text-[9px] font-bold text-red-500 uppercase">Рост на 26%</span>
                            </div>
                            <div className="overflow-x-auto border border-slate-200">
                                <table className="w-full text-[11px] md:text-[13px] min-w-[300px]">
                                    <thead className="bg-slate-50 border-b">
                                        <tr><th className="p-3 text-left">Показатель</th><th className="p-3 text-center">2021</th><th className="p-3 text-center bg-blue-50">2022</th></tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr><td className="p-3">Взято на дин. наблюдение</td><td className="p-3 text-center">851</td><td className="p-3 text-center font-bold">1118</td></tr>
                                        <tr className="bg-slate-50/30 font-bold"><td className="p-3">Впервые диагноз</td><td className="p-3 text-center">689</td><td className="p-3 text-center text-blue-700">934</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Наркология */}
                        <div className="bg-slate-900 text-white p-5 md:p-8 rounded-sm space-y-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-[9px] uppercase text-blue-400 font-bold tracking-widest">Всего на учете</p>
                                    <p className="text-3xl md:text-5xl font-black italic">4 579 <span className="text-xs font-normal opacity-40">чел.</span></p>
                                </div>
                                <ShieldCheck className="h-8 w-8 md:h-12 md:w-12 text-blue-600 opacity-50" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4">
                                <div>
                                    <p className="text-[9px] uppercase text-slate-500">Алкоголизм</p>
                                    <p className="text-base md:text-xl font-bold">3 440</p>
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase text-slate-500">Наркомания</p>
                                    <p className="text-base md:text-xl font-bold">1 139</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. КОЕЧНЫЙ ФОНД */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-4">
                        <Building2 className="h-6 w-6 md:h-8 md:w-8 text-[#1e40af]" />
                        <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter">Структура (632 койки)</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 shadow-lg overflow-hidden rounded-sm">
                        <div className="bg-white p-6 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xs md:text-sm font-black uppercase text-[#1e40af]">Психиатрия</h3>
                                <span className="text-[10px] bg-blue-100 px-2 py-1 text-blue-700 font-bold">360 коек</span>
                            </div>
                            <div className="space-y-3 text-[12px] md:text-[13px]">
                                <div className="flex justify-between border-b pb-2"><span>Мужские отделения (1,3)</span><strong>120</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Женское (2)</span><strong>60</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Детское (5)</span><strong>35</strong></div>
                                <div className="flex justify-between pt-2 text-[#1e40af] font-bold text-[10px] md:text-[11px]"><span>ДНЕВНОЙ СТАЦИОНАР</span><span>100</span></div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-6 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xs md:text-sm font-black uppercase text-[#1e40af]">Наркология</h3>
                                <span className="text-[10px] bg-blue-200 px-2 py-1 text-blue-800 font-bold">272 койки</span>
                            </div>
                            <div className="space-y-3 text-[12px] md:text-[13px]">
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Отделения МСК (1,2)</span><strong>87</strong></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Реабилитация</span><strong>40</strong></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Принудительное (3)</span><strong>30</strong></div>
                                <div className="flex justify-between pt-2 text-[#1e40af] font-bold text-[10px] md:text-[11px]"><span>ИТ (РЕАНИМАЦИЯ)</span><span>6</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. КАДРЫ И ДИАГНОСТИКА */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <div className="space-y-6">
                        <h3 className="font-black text-sm uppercase text-[#1e40af] flex items-center gap-2 border-b pb-2"><Users className="h-4 w-4" /> Кадры</h3>
                        <div className="space-y-3 text-xs md:text-sm">
                            <div className="flex justify-between"><span>Всего сотрудников:</span><strong>917</strong></div>
                            <div className="flex justify-between bg-blue-50 p-2"><span>Врачи:</span><strong>170</strong></div>
                            <div className="flex justify-between bg-blue-50 p-2"><span>Средний персонал:</span><strong>319</strong></div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-black text-sm uppercase text-[#1e40af] flex items-center gap-2 border-b pb-2"><Stethoscope className="h-4 w-4" /> Диагностика</h3>
                        <div className="space-y-2 text-[11px] md:text-xs">
                            <div className="p-3 border rounded-sm"><strong>КТ:</strong> 1 332 исследования</div>
                            <div className="p-3 border rounded-sm bg-slate-50"><strong>Рентген:</strong> 6 429 снимков</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-black text-sm uppercase text-[#1e40af] flex items-center gap-2 border-b pb-2"><ListChecks className="h-4 w-4" /> Экспертиза</h3>
                        <div className="space-y-2 text-[11px] md:text-xs">
                            <div className="flex justify-between border-b pb-1"><span>Всего экспертиз:</span><strong>62 322</strong></div>
                            <div className="flex justify-between border-b pb-1 text-red-600 font-bold"><span>Опьянение (нарко):</span><strong>+42.6%</strong></div>
                        </div>
                    </div>
                </section>

                {/* 5. ЗАДАЧИ - ФИНАЛЬНЫЙ БЛОК */}
                <section className="bg-slate-900 text-white p-6 md:p-12 rounded-sm relative overflow-hidden">
                    <h2 className="text-2xl md:text-4xl font-black uppercase mb-8 md:mb-12 relative z-10">Задачи на 2023</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10">
                        {[
                            "Увеличение количества ПЦПЗ в поликлиниках.",
                            "Сейсмоусиление главного корпуса (ПСД).",
                            "Усиление контроля качества через Службу СППиВА.",
                            "Развитие трудовой реабилитации (цеха)."
                        ].map((task, i) => (
                            <div key={i} className="flex gap-4 md:gap-6 items-start border-l border-slate-700 pl-4 md:pl-6">
                                <span className="text-blue-500 font-black text-xl md:text-2xl italic">0{i + 1}</span>
                                <p className="text-xs md:text-sm text-slate-300 leading-snug">{task}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <FooterCarousel />
        </div>
    )
}