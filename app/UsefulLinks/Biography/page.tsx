"use client"

import React from "react"
import Link from "next/link"
import { ChevronLeft, GraduationCap, Briefcase, Award, Languages } from "lucide-react"

export default function BiographyPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* ШИРОКИЙ КОНТЕЙНЕР ДЛЯ ПК (max-w-7xl) */}
            <main className="container mx-auto px-2 py-4 md:py-16 max-w-7xl">

                {/* Навигация */}
                <Link
                    href="/UsefulLinks"
                    className="inline-flex items-center gap-2 text-[10px] md:text-xs text-slate-400 uppercase mb-12"
                >
                    <ChevronLeft className="w-4 h-4" /> Назад
                </Link>

                <div className="space-y-12">

                    {/* Заголовок и основная информация */}
                    <div className="bg-white rounded-[32px] md:rounded-[48px] border border-slate-100 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="text-center md:text-left space-y-4">
                                <h1 className="text-3xl md:text-5xl font-black text-slate-800 uppercase leading-tight tracking-tight">
                                    Рахменшеев <br className="hidden md:block" /> Сапар Куттыбаевич
                                </h1>
                                <p className="text-[#00B5C4] font-bold text-sm md:text-xl uppercase tracking-widest">
                                    Директор ГКП на ПХВ "Центр психического здоровья"
                                </p>
                                <div className="text-slate-400 text-xs md:text-sm font-medium">
                                    Родился в 1974 году, по национальности казах.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* ЛЕВАЯ КОЛОНКА: ОБРАЗОВАНИЕ И НАВЫКИ */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Блок Образование */}
                            <div className="bg-white rounded-[32px] border border-slate-100 p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <GraduationCap className="w-6 h-6 text-[#00B5C4]" />
                                    <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">Образование</h3>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black text-[#00B5C4] uppercase">1997</div>
                                        <p className="text-sm text-slate-600 font-medium">МКТУ имени Кожа-Ахмета Яссауи, "Лечебное дело".</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black text-[#00B5C4] uppercase">2008</div>
                                        <p className="text-sm text-slate-600 font-medium">Московская государственная академия, Менеджмент в здравоохранении.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black text-[#00B5C4] uppercase">2012-2014</div>
                                        <p className="text-sm text-slate-600 font-medium">Магистратура МВА, "Общественное здравоохранение", доктор PhD.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Блок Дополнительно */}
                            <div className="bg-[#00B5C4] rounded-[32px] p-8 text-white">
                                <div className="flex items-center gap-3 mb-6">
                                    <Languages className="w-6 h-6 text-white" />
                                    <h3 className="font-black uppercase text-xs tracking-widest text-white/90">Языки</h3>
                                </div>
                                <p className="text-lg font-bold">Казахский, Русский, Английский</p>

                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Award className="w-6 h-6 text-white" />
                                        <h3 className="font-black uppercase text-xs tracking-widest text-white/90">Статус</h3>
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed">
                                        Отличник здравоохранения. Большой опыт в организациях и Управлениях здравоохранения.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ПРАВАЯ КОЛОНКА: ОПЫТ РАБОТЫ (TIMELINE) */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-[32px] md:rounded-[40px] border border-slate-100 p-8 md:p-12">
                                <div className="flex items-center gap-3 mb-10">
                                    <Briefcase className="w-6 h-6 text-[#00B5C4]" />
                                    <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">Профессиональный опыт</h3>
                                </div>

                                <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                                    {[
                                        { date: "1997 - 2006", text: "Врач-нарколог ГНЦМСК города Алматы." },
                                        { date: "2006 - 2008", text: "Заместитель главного врача по лечебной работе ГНЦМСК города Алматы." },
                                        { date: "2008 - 2011", text: "Заместитель начальника Управления здравоохранения Кызылординской области." },
                                        { date: "2011 - 2012", text: "Директор Департамента Комитета оплаты медицинских услуг МЗ РК по Алматинской области." },
                                        { date: "2012 - 2014", text: "Директор Департамента Комитета оплаты медицинских услуг МЗ РК по городу Алматы." },
                                        { date: "2014 - 2015", text: "Руководитель управления здравоохранения по Кызылординской области." },
                                        { date: "2016 - 2017", text: "Заместитель директора ТОО \"Институт развития здравоохранения\"." },
                                        { date: "2017 (Август)", text: "Главный врач ГКП на ПХВ Городской поликлиники №1 города Алматы." },
                                        { date: "2018 (Январь)", text: "Директор ГКП на ПХВ \"Центр психического здоровья\" Управления здравоохранения города Алматы.", highlight: true },
                                    ].map((item, idx) => (
                                        <div key={idx} className="relative pl-10 group">
                                            <div className={`absolute left-0 top-1 w-[24px] h-[24px] rounded-full border-4 border-white transition-colors ${item.highlight ? 'bg-[#00B5C4]' : 'bg-slate-200 group-hover:bg-[#00B5C4]'}`}></div>
                                            <div className="space-y-1">
                                                <span className={`text-[10px] font-black uppercase tracking-wider ${item.highlight ? 'text-[#00B5C4]' : 'text-slate-400'}`}>
                                                    {item.date}
                                                </span>
                                                <p className={`text-sm md:text-base leading-relaxed ${item.highlight ? 'font-bold text-slate-800' : 'text-slate-600 font-medium'}`}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}