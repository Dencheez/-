"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Download, ChevronLeft, Archive, FileDigit, Calendar } from "lucide-react"

const issues = [
    { year: "2012", title: "Выпуск №1-4 2012", date: "2012" },
    { year: "2011", title: "Выпуск №1-4 2011", date: "2011" },
    { year: "2010", title: "Выпуск №1-4 2010", date: "2010" },
    { year: "2009", title: "Выпуск №1-4 2009", date: "2009" },
    { year: "2008", title: "Выпуск №1-4 2008", date: "2008" },
    { year: "2007", title: "Выпуск №1-4 2007", date: "2007" },
    { year: "2006", title: "Выпуск №1-4 2006", date: "2006" },
    { year: "2005", title: "Выпуск №1-4 2005", date: "2005" },
]

export default function NarcologyJournalPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] min-h-screen">
                {/* Header */}
                <div className="bg-blue-600 py-16 px-6 md:px-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <Link href="/journals" className="inline-flex items-center gap-2 text-white/40 uppercase text-[10px] font-black mb-8">
                            <ChevronLeft className="w-3 h-3" /> Ко всем журналам
                        </Link>
                        <div className="flex items-center gap-3 mb-4">
                            <Archive className="w-5 h-5 text-blue-200" />
                            <span className="text-blue-100 font-black uppercase tracking-widest text-[10px]">Архив выпусков</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Вопросы наркологии Казахстана</h1>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-5xl w-full mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {issues.map((i, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                                        <FileDigit className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-slate-800 uppercase leading-tight">{i.title}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Calendar className="w-3 h-3 text-slate-300" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{i.year} год</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-2xl text-slate-400 font-black uppercase text-[10px] tracking-widest">
                                    <Download className="w-4 h-4" />
                                    <span>ZIP</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
