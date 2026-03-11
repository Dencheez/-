"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Stethoscope, ChevronLeft, BookOpen, GraduationCap, Download, Scale } from "lucide-react"

export default function DoctorsInfoPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] min-h-screen">
                <div className="bg-white border-b border-slate-100 py-16 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black mb-8 hover:text-slate-900 transition-colors">
                            <ChevronLeft className="w-3 h-3" /> Назад
                        </Link>
                        <div className="flex items-center gap-3 mb-4 text-[#00B5C4]">
                            <Stethoscope className="w-6 h-6" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Профессиональное сообщество</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none italic mb-6">
                            Информация<br />для врачей
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-start gap-6 group hover:bg-white transition-all shadow-sm">
                                <div className="bg-white p-4 rounded-2xl group-hover:bg-teal-50 transition-colors">
                                    <Scale className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 uppercase italic">Нормативные акты</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">Действующие протоколы диагностики и лечения, утвержденные МЗ РК для психиатрической службы.</p>
                                <button className="flex items-center gap-2 text-[#00B5C4] font-black uppercase text-[10px] tracking-widest hover:translate-x-1 transition-transform">
                                    <Download className="w-4 h-4" />
                                    <span>Открыть базу документов</span>
                                </button>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-start gap-6 group hover:bg-white transition-all shadow-sm">
                                <div className="bg-white p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
                                    <GraduationCap className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 uppercase italic">Повышение квалификации</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">График семинаров, конференций и возможности обучения для медицинского персонала.</p>
                                <button className="flex items-center gap-2 text-[#00B5C4] font-black uppercase text-[10px] tracking-widest hover:translate-x-1 transition-transform">
                                    <BookOpen className="w-4 h-4" />
                                    <span>Просмотр графика</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
