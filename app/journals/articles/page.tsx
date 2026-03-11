"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Download, ChevronLeft, FileText, Search, Filter } from "lucide-react"

const articles = [
    { title: "Современные методы реабилитации в наркологии", author: "Иванов И.И.", date: "2023" },
    { title: "Психологическая поддержка в кризисных ситуациях", author: "Петров П.П.", date: "2023" },
    { title: "Влияние экологии на ментальное здоровье", author: "Сидоров С.С.", date: "2022" },
]

export default function JournalArticlesPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] min-h-screen">
                <div className="bg-slate-900 py-16 px-6 md:px-12 text-white relative overflow-hidden">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <Link href="/journals" className="inline-flex items-center gap-2 text-white/40 uppercase text-[10px] font-black mb-8">
                            <ChevronLeft className="w-3 h-3" /> Назад
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">Наши статьи</h1>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Поиск по названию или автору..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm font-medium focus:bg-white/10 border-white/20 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl w-full mx-auto px-6 py-12">
                    <div className="space-y-4">
                        {articles.map((art, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-center gap-6">
                                    <div className="bg-slate-50 p-4 rounded-2xl text-slate-300">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight mb-1">{art.title}</h3>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{art.author} • {art.date}</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest">
                                    <Download className="w-4 h-4" />
                                    <span>Читать PDF</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
