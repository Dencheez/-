"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Stethoscope, ChevronLeft, Download, AlertTriangle, Eye, Image as ImageIcon } from "lucide-react"

const documents = [
    { title: "Большое депрессивное расстройство", href: "/files/doctors/Большое_депрессивное_расстройство.pdf", type: "PDF" },
    { title: "Диагностические шкалы Депрессий", href: "/files/doctors/Диагностические_шкалы_Депрессий.pdf", type: "PDF" },
    { title: "Классификация и критерии БДР по DSM-IV, DSM-V и МКБ-10", href: "/files/doctors/Классификация_и_критерии_БДР_по_DSM-IV_DSM-V_и_МКБ-10_.pdf", type: "PDF" },
    { title: "Методы лечения БРД и ТРД", href: "/files/doctors/Методы_лечения_БРД_и_ТРД.pdf", type: "PDF" },
    { title: "Терапевтически резистентная депрессия", href: "/files/doctors/Терапевтически_резистентная_депрессия_.pdf", type: "PDF" },
]

export default function DoctorsInfoPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 gap-8">

                {/* Header */}
                <div className="border-b border-slate-100 pb-6 relative">
                    <div className="flex items-center gap-3 mb-3 text-[#00B5C4]">
                        <Stethoscope className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Профессиональное сообщество</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-tight leading-tight">
                        Информация для врачей
                    </h1>
                </div>
                {/* Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-7 h-7 text-amber-600" />
                    </div>
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-800 font-bold leading-relaxed">
                            <span className="text-amber-700 uppercase tracking-wide font-black mr-2 text-sm">Дисклеймер:</span>
                            Вся информация, размещенная в данном разделе веб-сайта, предназначена исключительно для специалистов здравоохранения — медицинских и фармацевтических работников.
                        </p>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            Если Вы не являетесь специалистом здравоохранения, в соответствии с положениями действующего законодательства, Вы не имеете права доступа к информации, размещенной в данном разделе веб-сайта, в связи с чем просим Вас <span className="font-bold text-slate-800 border-b border-slate-300">незамедлительно покинуть данный раздел</span> веб-сайта.
                        </p>
                    </div>
                </div>

                {/* Documents List */}
                <section className="mt-4">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-5">
                        Материалы по депрессивным расстройствам
                    </h2>
                    <div className="flex flex-col gap-4">
                        {documents.map((doc, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 group hover:border-[#00B5C4]/30 hover:shadow-md transition-all"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00B5C4]/10 transition-colors">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-[#00B5C4] transition-colors">
                                        {doc.type}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-snug group-hover:text-[#00B5C4] transition-colors">
                                        {doc.title}
                                    </p>
                                </div>
                                <a href={doc.href} download className="shrink-0 w-full sm:w-auto">
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00B5C4] hover:text-white transition-all">
                                        <Download className="w-4 h-4" />
                                        Скачать
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-8 flex justify-center">
                    <Link href="/info" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 border border-slate-200 hover:border-slate-300 bg-white px-6 py-3 rounded-full uppercase text-[10px] font-black tracking-widest transition-all">
                        <ChevronLeft className="w-3.5 h-3.5" /> Вернуться ко всем статьям
                    </Link>
                </div>

            </div>
        </AppShell>
    )
}
