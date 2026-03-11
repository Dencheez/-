"use client"

import { AppShell } from "@/components/app-shell"
import { HeartHandshake, Download, FileText, Eye } from "lucide-react"

const documents = [
    {
        name: "Объявление о закупе изделий мед.назначения #5",
        file: "Объявление о закупе изделий мед.назначения #5.docx",
        href: "/files/free-help/Объявление_о_закупе_изделий_мед.назначения_5.docx",
        ext: "DOCX",
    },
    {
        name: "Постановление РК от 15.12.2009 №2136",
        file: "Постановление РК от 15.12.2009 №2136.doc",
        href: "/files/free-help/Постановление_РК_от_15.12.2009_№2136.doc",
        ext: "DOC",
    },
]

export default function FreeHelpPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 gap-8">

                {/* Header */}
                <div className="border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-3 mb-3 text-[#00B5C4]">
                        <HeartHandshake className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Медицинская помощь</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight leading-tight">
                        Гарантированный объём медицинской помощи
                    </h1>
                    <div className="flex items-center gap-1.5 mt-2 text-slate-400">
                        <Eye className="w-3.5 h-3.5" />
                        <p className="text-xs uppercase tracking-widest font-bold">Просмотров: 14 598</p>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-[#00B5C4]/5 border border-[#00B5C4]/20 rounded-2xl p-6">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                        Всю информацию вы можете узнать, скачав один из файлов ниже.
                    </p>
                </div>

                {/* Documents */}
                <section>
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-5">
                        Документы для скачивания
                    </h2>
                    <div className="flex flex-col gap-4">
                        {documents.map((doc, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                                    <FileText className="w-6 h-6 text-slate-500" />
                                </div>

                                {/* Name */}
                                <div className="flex-1 min-w-0">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                                        {doc.ext}
                                    </span>
                                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-snug">
                                        {doc.name}
                                    </p>
                                </div>

                                {/* Download button */}
                                <a href={doc.href} download className="shrink-0 w-full sm:w-auto">
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00B5C4] transition-all">
                                        <Download className="w-4 h-4" />
                                        Скачать
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </AppShell>
    )
}
