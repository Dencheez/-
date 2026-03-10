"use client"
import { ArrowLeft, Printer, Mail, Eye, FileDown, ShieldCheck, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function EthicsPage() {
    return (
        <div className="w-full text-slate-900 font-sans">
            <main className="max-w-5xl mx-auto w-full">
                {/* ВЕРХНЯЯ ПАНЕЛЬ */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-4 mb-8 gap-4">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-widest">
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>

                    <div className="flex flex-wrap gap-4 md:gap-6 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest w-full sm:w-auto">
                        <button onClick={() => window.print()} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                            <Printer className="h-3.5 w-3.5" /> Печать
                        </button>
                        <a href="mailto:cpz_almaty@med.mail.kz" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                            <Mail className="h-3.5 w-3.5" /> E-mail
                        </a>
                        <span className="flex items-center gap-1.5 ml-auto sm:ml-0 opacity-60">
                            <Eye className="h-3.5 w-3.5" /> 4024
                        </span>
                    </div>
                </div>

                {/* КОНТЕНТ */}
                <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-2">
                    <div className="mb-8 p-6 bg-blue-50 rounded-[40px] relative">
                        <ShieldCheck className="h-12 w-12 text-blue-600" />
                        <div className="absolute -top-1 -right-1 h-4 w-4 bg-blue-400 rounded-full animate-ping"></div>
                    </div>

                    <h1 className="text-3xl md:text-6xl font-[1000] uppercase text-slate-900 mb-4 tracking-tighter leading-[0.9]">
                        Этический <br /> <span className="text-blue-600">кодекс</span>
                    </h1>

                    <p className="text-[10px] md:text-xs text-slate-400 mb-12 font-black uppercase tracking-[0.3em] max-w-sm leading-relaxed">
                        ГКП на ПХВ «Центр психического здоровья» <br /> Управления здравоохранения г. Алматы
                    </p>

                    <div className="w-full max-w-[420px] relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[32px] blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                        <a
                            href="/files/ethics.doc"
                            download="Этический_кодекс_ЦПЗ.doc"
                            className="relative flex flex-row items-center gap-5 p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[32px] hover:border-blue-100 transition-all active:scale-[0.96] shadow-xl shadow-slate-100/50"
                        >
                            <div className="p-4 bg-slate-900 text-white rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                                <FileDown className="h-6 w-6 md:h-8 md:w-8" />
                            </div>
                            <div className="text-left overflow-hidden">
                                <p className="text-[11px] md:text-xs font-black uppercase tracking-widest text-slate-900 mb-1 italic">Нажмите для загрузки</p>
                                <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-tight opacity-70 truncate">Microsoft Word • 45.5 KB</p>
                            </div>
                            <ChevronRight className="ml-auto h-5 w-5 text-slate-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </a>
                    </div>

                    <div className="mt-16 flex items-start gap-4 max-w-md text-left bg-slate-50 p-6 rounded-3xl border border-slate-100">
                        <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <p className="text-[11px] md:text-xs font-medium text-slate-500 leading-relaxed">
                            Настоящий кодекс определяет моральную ответственность медицинских работников перед обществом, пациентами и коллегами.
                        </p>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-50 text-center">
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">Служба внутреннего аудита • 2026</p>
                </div>
            </main>
        </div>
    )
}