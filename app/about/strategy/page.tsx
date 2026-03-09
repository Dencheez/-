"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, ChevronDown, ChevronUp, Printer, Mail, Eye, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function StrategicPlanPage() {
    const [openSection, setOpenSection] = useState<number | null>(1);

    const toggle = (id: number) => setOpenSection(openSection === id ? null : id);

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-6 py-12 w-full">

                {/* ВЕРХНЯЯ ПАНЕЛЬ С КНОПКАМИ */}
                <div className="flex justify-between items-center border-b pb-4 mb-8">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 text-xs font-bold transition-colors">
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>
                    <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600"><Printer className="h-3.5 w-3.5" /> Печать</span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                        <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Просмотров: 6609</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold uppercase text-slate-800 mb-8 tracking-tight">
                    Стратегический план
                </h1>

                {/* ЗАГЛУШКА ДЛЯ КАРТИНКИ (ПОТОМ ЗАМЕНИШЬ НА <Image />) */}
                <div className="w-full aspect-[21/9] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 mb-12 rounded-sm group hover:border-blue-200 transition-colors">
                    <img
                        src="/images/strateg_plan.jpg"
                        alt="Стратегический план"
                        className="w-full h-auto object-contain shadow-sm border border-slate-100"
                    />                </div>

                {/* АККОРДЕОН С ТВОИМ ТЕКСТОМ */}
                <div className="divide-y divide-slate-200 border-t border-b border-slate-200">

                    {/* РАЗДЕЛ 1 */}
                    <div className="py-2">
                        <button
                            onClick={() => toggle(1)}
                            className="w-full flex items-center justify-between py-6 text-left group"
                        >
                            <span className={`font-bold uppercase tracking-tight text-lg transition-colors ${openSection === 1 ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                                Раздел 1. Миссия Центра
                            </span>
                            {openSection === 1 ? <ChevronUp className="h-5 w-5 text-blue-700" /> : <ChevronDown className="h-5 w-5 text-slate-300" />}
                        </button>
                        {openSection === 1 && (
                            <div className="pb-8 space-y-6 text-sm leading-relaxed text-slate-600 animate-in fade-in slide-in-from-top-1 duration-200">
                                <p><b>Миссия ГКП на ПХВ "ЦПЗ":</b> Обеспечение психиатрической, наркологической помощи с высоким качеством и общей доступностью.</p>
                                <p><b>Видение:</b> стать современным медицинским предприятием, соответствующим спросу населения, высококвалифицированную помощь, с применением современных методов оказания медицинской помощи, коррекции психических и поведенческих расстройств, психотерапии и реабилитации.</p>
                                <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-sm">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Ориентированность на пациента</li>
                                        <li>Приоритет — удовлетворение потребностей</li>
                                        <li>Транспарентность</li>
                                    </ul>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Конкурентоспособность</li>
                                        <li>Преемственность знаний</li>
                                        <li>Академичность</li>
                                    </ul>
                                </div>
                                <p><b>Наша цель:</b> Оказание качественной специализированной и высокотехнологичной медицинской помощи на уровне мировых стандартов.</p>
                            </div>
                        )}
                    </div>

                    {/* РАЗДЕЛ 2 */}
                    <div className="py-2">
                        <button onClick={() => toggle(2)} className="w-full flex items-center justify-between py-6 text-left group">
                            <span className={`font-bold uppercase tracking-tight text-lg transition-colors ${openSection === 2 ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                                Раздел 2. Анализ текущей ситуации и Коечный фонд
                            </span>
                            {openSection === 2 ? <ChevronUp className="h-5 w-5 text-blue-700" /> : <ChevronDown className="h-5 w-5 text-slate-300" />}
                        </button>
                        {openSection === 2 && (
                            <div className="pb-8 space-y-6 text-sm leading-relaxed text-slate-600 animate-in fade-in duration-200">
                                <p>ГКП на ПХВ «Центр психического здоровья» является единственным в Алматы предприятием, оказывающим полный цикл психиатрической помощи.</p>
                                <p className="font-bold border-l-4 border-blue-600 pl-4 py-1 text-slate-800 uppercase text-xs tracking-wider">
                                    Структура ЦПЗ: Стационары на 632 коек
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 text-xs">
                                    <div className="space-y-1">
                                        <p className="font-bold text-slate-800">Психиатрическая служба:</p>
                                        <p>3 мужских отделения (60 коек), 2 женских (60 коек), детское (35 коек), психосоматика (25 коек), геронтология (25 коек).</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-bold text-slate-800">Наркологическая служба (МСК):</p>
                                        <p>10 отделений, включая реанимацию на 6 коек и блоки принудительного лечения.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* РАЗДЕЛ 3 */}
                    <div className="py-2">
                        <button onClick={() => toggle(3)} className="w-full flex items-center justify-between py-6 text-left group">
                            <span className={`font-bold uppercase tracking-tight text-lg transition-colors ${openSection === 3 ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                                Кадровый потенциал (917 сотрудников)
                            </span>
                            {openSection === 3 ? <ChevronUp className="h-5 w-5 text-blue-700" /> : <ChevronDown className="h-5 w-5 text-slate-300" />}
                        </button>
                        {openSection === 3 && (
                            <div className="pb-8 grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-200">
                                <div className="p-4 border border-slate-100 text-center">
                                    <p className="text-xl font-bold text-blue-700">170</p>
                                    <p className="text-[10px] uppercase text-slate-400 font-bold">Врачей</p>
                                </div>
                                <div className="p-4 border border-slate-100 text-center">
                                    <p className="text-xl font-bold text-blue-700">319</p>
                                    <p className="text-[10px] uppercase text-slate-400 font-bold">Средний медперсонал</p>
                                </div>
                                <div className="p-4 border border-slate-100 text-center">
                                    <p className="text-xl font-bold text-blue-700">63</p>
                                    <p className="text-[10px] uppercase text-slate-400 font-bold">Высшая категория</p>
                                </div>
                                <div className="p-4 border border-slate-100 text-center">
                                    <p className="text-xl font-bold text-blue-700">4</p>
                                    <p className="text-[10px] uppercase text-slate-400 font-bold">Кандидата наук</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* РАЗДЕЛ 4 */}
                    <div className="py-2">
                        <button onClick={() => toggle(4)} className="w-full flex items-center justify-between py-6 text-left group">
                            <span className={`font-bold uppercase tracking-tight text-lg transition-colors ${openSection === 4 ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                                Телефон доверия и Суицидология
                            </span>
                            {openSection === 4 ? <ChevronUp className="h-5 w-5 text-blue-700" /> : <ChevronDown className="h-5 w-5 text-slate-300" />}
                        </button>
                        {openSection === 4 && (
                            <div className="pb-8 space-y-4 text-sm text-slate-600 animate-in fade-in duration-200">
                                <p>Круглосуточный телефон доверия. За 6 месяцев 2019 года — <b>2051 звонок</b>.</p>
                                <p>Обучено более <b>226 ВОП</b> и <b>98 школьных психологов</b> по программе превенции суицидов среди несовершеннолетних.</p>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}