"use client"

import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { LayoutList, Download, FileArchive, ChevronRight, Eye } from "lucide-react"

const downloads = [
    {
        year: "2016",
        title: "Годовой план государственных закупок товаров, работ и услуг 2016",
        href: "/files/gos-zakup/2016.rar",
        ext: "RAR",
    },
    {
        year: "2017",
        title: "Годовой план государственных закупок товаров, работ и услуг 2017",
        href: "/files/gos-zakup/Годовой_план_ГЗ_2017.rar",
        ext: "RAR",
    },
    {
        year: "2017 (изм.)",
        title: "Годовой план государственных закупок товаров, работ и услуг 2017 изм.",
        href: "/files/gos-zakup/Годовой_план_ГЗ_2017_изм.rar",
        ext: "RAR",
    },
]



export default function GoszakupPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 gap-10">

                {/* Header */}
                <div className="border-b border-slate-100 pb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight leading-tight">
                        Годовой план Гос закупок
                    </h1>
                </div>

                {/* Downloadable plans */}
                <section>
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-5">
                        Документы для скачивания
                    </h2>
                    <div className="flex flex-col gap-4">
                        {downloads.map((doc) => (
                            <div
                                key={doc.year}
                                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5"
                            >
                                <div className="w-12 h-12 bg-[#00B5C4]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <FileArchive className="w-6 h-6 text-[#00B5C4]" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                                        {doc.year} · {doc.ext}
                                    </span>
                                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-snug">
                                        {doc.title}
                                    </p>
                                </div>

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
