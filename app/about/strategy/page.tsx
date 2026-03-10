"use client"
import { useState } from "react"
import {
    ArrowLeft, ChevronDown, ChevronUp, Target, Users,
    FileText, BarChart3, GraduationCap
} from "lucide-react"
import Link from "next/link"

export default function StrategicPlanPage() {
    const [openSection, setOpenSection] = useState<number | null>(1);
    const toggle = (id: number) => setOpenSection(openSection === id ? null : id);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <main className="max-w-5xl mx-auto px-4 py-6 md:py-12 w-full flex-grow">
                {/* НАВИГАЦИЯ */}
                <div className="flex items-center justify-between mb-6">
                    <Link href="/about" className="p-2 -ml-2 text-slate-400 active:text-blue-600 transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        Просмотров: 6609 • 2026
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-[1000] uppercase text-slate-900 tracking-tighter leading-[0.9]">
                        Стратегический <br /> <span className="text-blue-600">план развития</span>
                    </h1>
                    <div className="h-2 w-20 bg-blue-600 mt-6 rounded-full"></div>
                </div>

                {/* БАННЕР */}
                <div className="w-full aspect-video md:aspect-[21/9] rounded-[32px] overflow-hidden mb-12 shadow-2xl border-4 border-white">
                    <img
                        src="/images/strateg_plan.jpg"
                        alt="Стратегический план"
                        className="w-full h-full object-cover"
                        onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=2070&auto=format&fit=crop"}
                    />
                </div>

                {/* КОНТЕНТ ПО РАЗДЕЛАМ */}
                <div className="space-y-4">
                    {/* РАЗДЕЛ 1: МИССИЯ */}
                    <div className="bg-white rounded-[28px] border border-slate-200 overflow-hidden shadow-sm transition-all">
                        <button onClick={() => toggle(1)} className="w-full flex items-center justify-between p-6 text-left active:bg-slate-50">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${openSection === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-blue-50 text-blue-600'}`}>
                                    <Target size={24} />
                                </div>
                                <div>
                                    <span className="font-black text-[10px] uppercase tracking-widest text-slate-400 block mb-1">Раздел 1</span>
                                    <span className="font-bold text-lg leading-tight uppercase tracking-tighter">Миссия и Видение</span>
                                </div>
                            </div>
                            {openSection === 1 ? <ChevronUp size={22} className="text-blue-600" /> : <ChevronDown size={22} className="text-slate-300" />}
                        </button>
                        {openSection === 1 && (
                            <div className="px-6 pb-8 animate-in slide-in-from-top-2 duration-300">
                                <div className="space-y-6">
                                    <div className="bg-blue-50 p-6 rounded-[24px] border-l-4 border-blue-600">
                                        <h4 className="font-black uppercase text-[11px] text-blue-600 mb-2 tracking-widest">Миссия ГКП на ПХВ "ЦПЗ"</h4>
                                        <p className="text-slate-700 font-bold text-base md:text-lg leading-snug">
                                            Обеспечение психиатрической, наркологической помощи с высоким качеством и общей доступностью.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                            <h5 className="font-bold text-xs uppercase text-slate-900 mb-3 tracking-widest">Наши ценности:</h5>
                                            <ul className="text-[12px] space-y-3 text-slate-500 font-bold uppercase leading-tight">
                                                <li className="flex gap-2"><span>•</span> Ориентированность на пациента</li>
                                                <li className="flex gap-2"><span>•</span> Транспарентность и преемственность</li>
                                                <li className="flex gap-2"><span>•</span> Академичность и развитие</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-900 p-5 rounded-2xl text-white">
                                            <h5 className="font-bold text-xs uppercase mb-3 tracking-widest text-blue-400">Видение:</h5>
                                            <p className="text-xs leading-relaxed opacity-90 font-medium">
                                                Стать современным медицинским предприятием, соответствующим спросу населения, с применением современных методов коррекции и реабилитации.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* РАЗДЕЛ 2: АНАЛИЗ И СТРУКТУРА */}
                    <div className="bg-white rounded-[28px] border border-slate-200 overflow-hidden shadow-sm transition-all">
                        <button onClick={() => toggle(2)} className="w-full flex items-center justify-between p-6 text-left active:bg-slate-50">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${openSection === 2 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-blue-50 text-blue-600'}`}>
                                    <BarChart3 size={24} />
                                </div>
                                <div>
                                    <span className="font-black text-[10px] uppercase tracking-widest text-slate-400 block mb-1">Раздел 2</span>
                                    <span className="font-bold text-lg leading-tight uppercase tracking-tighter">Анализ и Структура</span>
                                </div>
                            </div>
                            {openSection === 2 ? <ChevronUp size={22} className="text-blue-600" /> : <ChevronDown size={22} className="text-slate-300" />}
                        </button>
                        {openSection === 2 && (
                            <div className="px-6 pb-8 animate-in slide-in-from-top-2">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                    <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                                        <p className="text-2xl font-black text-blue-600">632</p>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Койко-мест</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                                        <p className="text-2xl font-black text-blue-600">3 га</p>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Площадь центра</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                                        <p className="text-2xl font-black text-blue-600">250</p>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Посещений/смену</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                                        <p className="text-2xl font-black text-blue-600">100</p>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Мест дневной ст.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* РАЗДЕЛ 3: КАДРЫ */}
                    <div className="bg-white rounded-[28px] border border-slate-200 overflow-hidden shadow-sm transition-all">
                        <button onClick={() => toggle(3)} className="w-full flex items-center justify-between p-6 text-left active:bg-slate-50">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${openSection === 3 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-blue-50 text-blue-600'}`}>
                                    <Users size={24} />
                                </div>
                                <div>
                                    <span className="font-black text-[10px] uppercase tracking-widest text-slate-400 block mb-1">Раздел 3</span>
                                    <span className="font-bold text-lg leading-tight uppercase tracking-tighter">Кадровый потенциал</span>
                                </div>
                            </div>
                            {openSection === 3 ? <ChevronUp size={22} className="text-blue-600" /> : <ChevronDown size={22} className="text-slate-300" />}
                        </button>
                        {openSection === 3 && (
                            <div className="px-6 pb-8 animate-in slide-in-from-top-2">
                                <p className="text-sm font-bold text-slate-800 mb-6">В ГКП на ПХВ «Центр психического здоровья» работают 917 сотрудников:</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white border-2 border-slate-50 p-6 rounded-[24px] flex flex-col items-center shadow-sm">
                                        <div className="bg-blue-50 text-blue-600 p-3 rounded-full mb-3"><GraduationCap size={24} /></div>
                                        <p className="text-3xl font-[1000] text-slate-900 leading-none">170</p>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Врачей</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}