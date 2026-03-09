"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, ChevronDown, ChevronUp, Target, Users, Activity, Phone, FileText } from "lucide-react"
import Link from "next/link"

export default function StrategicPlanPage() {
    const [openSection, setOpenSection] = useState<number | null>(1);
    const toggle = (id: number) => setOpenSection(openSection === id ? null : id);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-4 py-6 md:py-12 w-full flex-grow">

                {/* МОБИЛЬНАЯ НАВИГАЦИЯ */}
                <div className="flex items-center justify-between mb-6">
                    <Link href="/about" className="p-2 -ml-2 text-slate-400 active:text-blue-600 transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        Просмотров: 6609
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-4xl font-black uppercase text-slate-800 tracking-tighter leading-tight">
                        Стратегический <br /> план развития
                    </h1>
                    <div className="h-1.5 w-16 bg-blue-600 mt-4"></div>
                </div>

                {/* БАННЕР С ПРАВИЛЬНЫМ ASPECT-RATIO */}
                <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden mb-8 shadow-lg border border-white">
                    <img
                        src="/images/strateg_plan.jpg"
                        alt="Стратегический план"
                        className="w-full h-full object-cover"
                        onError={(e) => e.currentTarget.src = "https://placehold.co/800x450/1e40af/ffffff?text=Strategy+2026"}
                    />
                </div>

                {/* АККОРДЕОНЫ (MOBILE ADAPTIVE) */}
                <div className="space-y-3">

                    {/* РАЗДЕЛ 1: МИССИЯ */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        <button onClick={() => toggle(1)} className="w-full flex items-center justify-between p-5 text-left active:bg-slate-50">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${openSection === 1 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                    <Target size={18} />
                                </div>
                                <span className="font-bold text-sm uppercase tracking-tight">Миссия и Видение</span>
                            </div>
                            {openSection === 1 ? <ChevronUp size={18} /> : <ChevronDown size={18} className="text-slate-300" />}
                        </button>
                        {openSection === 1 && (
                            <div className="px-5 pb-6 animate-in slide-in-from-top-2 duration-200">
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed border-l-2 border-blue-600 pl-4">
                                    Обеспечение психиатрической и наркологической помощи с высоким качеством и общей доступностью для населения г. Алматы.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* РАЗДЕЛ 2: ЦИФРЫ (GRID НА МОБИЛКЕ) */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        <button onClick={() => toggle(2)} className="w-full flex items-center justify-between p-5 text-left active:bg-slate-50">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${openSection === 2 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                    <Activity size={18} />
                                </div>
                                <span className="font-bold text-sm uppercase tracking-tight">Коечный фонд</span>
                            </div>
                            {openSection === 2 ? <ChevronUp size={18} /> : <ChevronDown size={18} className="text-slate-300" />}
                        </button>
                        {openSection === 2 && (
                            <div className="px-5 pb-6 grid grid-cols-2 gap-3 animate-in fade-in duration-200">
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <p className="text-xl font-black text-blue-600">632</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mt-1">Всего коек</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <p className="text-xl font-black text-slate-700">10</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mt-1">Отделений МСК</p>
                                </div>
                                <div className="col-span-2 bg-blue-600 p-4 rounded-lg text-white">
                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Служба</p>
                                    <p className="text-sm font-bold mt-1">Полный цикл психиатрической помощи</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* РАЗДЕЛ 3: КАДРЫ */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        <button onClick={() => toggle(3)} className="w-full flex items-center justify-between p-5 text-left active:bg-slate-50">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${openSection === 3 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                    <Users size={18} />
                                </div>
                                <span className="font-bold text-sm uppercase tracking-tight">Персонал (917)</span>
                            </div>
                            {openSection === 3 ? <ChevronUp size={18} /> : <ChevronDown size={18} className="text-slate-300" />}
                        </button>
                        {openSection === 3 && (
                            <div className="px-5 pb-6 grid grid-cols-2 gap-2 animate-in fade-in duration-200">
                                {[
                                    { v: '170', l: 'Врачей' },
                                    { v: '319', l: 'Медсестер' },
                                    { v: '63', l: 'Высшая кат.' },
                                    { v: '4', l: 'Кандидаты' }
                                ].map((s, i) => (
                                    <div key={i} className="border border-slate-100 p-3 rounded-lg text-center">
                                        <p className="text-lg font-black text-blue-600 leading-none">{s.v}</p>
                                        <p className="text-[8px] font-bold text-slate-400 uppercase mt-1 tracking-tighter">{s.l}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* РАЗДЕЛ 4: ПОМОЩЬ */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        <button onClick={() => toggle(4)} className="w-full flex items-center justify-between p-5 text-left active:bg-slate-50">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${openSection === 4 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                    <Phone size={18} />
                                </div>
                                <span className="font-bold text-sm uppercase tracking-tight">Экстренная помощь</span>
                            </div>
                            {openSection === 4 ? <ChevronUp size={18} /> : <ChevronDown size={18} className="text-slate-300" />}
                        </button>
                        {openSection === 4 && (
                            <div className="px-5 pb-6 space-y-4 animate-in fade-in duration-200">
                                <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-4 border border-blue-100">
                                    <div className="bg-blue-600 text-white p-3 rounded-full animate-pulse">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-blue-900 uppercase tracking-widest leading-none">Телефон доверия</p>
                                        <p className="text-lg font-black text-[#1e40af] mt-1">24 / 7</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-500 italic px-2">
                                    * Более 2000 звонков обработано за текущий период.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* КНОПКА СКАЧАТЬ (ФИКСИРОВАННАЯ ДЛЯ МОБИЛОК - ОПЦИОНАЛЬНО) */}
                <div className="mt-10">
                    <button className="w-full bg-slate-900 text-white p-5 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                        <FileText size={18} />
                        Скачать весь план (PDF)
                    </button>
                </div>

                <div className="mt-12 text-center pb-8">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.3em]">ЦПЗ Алматы • 2026</p>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}