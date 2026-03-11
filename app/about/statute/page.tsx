"use client"
import { ArrowLeft, Printer, Mail, Eye, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function CharterPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">
                {/* МОБИЛЬНАЯ ПАНЕЛЬ НАВИГАЦИИ */}
                <div className="flex items-center justify-between border-b pb-4 mb-8">
                    <Link href="/about" className="p-2 -ml-2 text-slate-400">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        <Eye size={14} /> 2840
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8 text-left">
                    <h1 className="text-3xl font-[1000] uppercase text-slate-900 tracking-tighter leading-[0.85]">
                        Устав <br /> <span className="text-blue-600">предприятия</span>
                    </h1>
                    <div className="h-1.5 w-12 bg-blue-600 mt-4 rounded-full"></div>
                </div>

                {/* КАРТОЧКА ДОКУМЕНТА */}
                <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 flex flex-col items-center">
                    {/* Иконка документа */}
                    <div className="w-20 h-20 bg-slate-900 text-white flex items-center justify-center rounded-[24px] mb-6">
                        <FileText size={36} />
                    </div>

                    <div className="text-center space-y-2 mb-6">
                        <h2 className="text-xl font-black text-slate-900 leading-tight uppercase tracking-tight">
                            Устав ГКП на ПХВ «ЦПЗ»
                        </h2>
                        <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.2em]">
                            Утвержден в 2023 году
                        </p>
                    </div>

                    <div className="w-full h-px bg-slate-200/60 mb-6"></div>

                    <p className="text-xs text-slate-500 leading-relaxed text-center mb-8 px-2 font-medium">
                        Официальный устав «Центра психического здоровья» Управления общественного здоровья города Алматы.
                    </p>

                    {/* ГЛАВНАЯ КНОПКА */}
                    <a
                        href="/files/ustav.pdf"
                        download="Устав_ЦПЗ_Алматы.pdf"
                        className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em]"
                    >
                        <Download size={18} />
                        Скачать PDF
                    </a>
                </div>

                {/* ДОПОЛНИТЕЛЬНЫЕ ДЕЙСТВИЯ */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center justify-center gap-2 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest"
                    >
                        <Printer size={14} /> Печать
                    </button>
                    <a
                        href="mailto:cpz_almaty@med.mail.kz"
                        className="flex items-center justify-center gap-2 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest"
                    >
                        <Mail size={14} /> E-mail
                    </a>
                </div>

                {/* ИНФО */}
                <div className="mt-10 text-center pb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[9px] text-slate-400 font-black uppercase tracking-widest">
                        <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                        v.2023 • 2.4 MB • PDF
                    </div>
                </div>
            </main>
        </div>
    )
}