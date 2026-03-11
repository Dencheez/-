"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Download, ChevronLeft, Archive, BookText, Calendar, FileDigit } from "lucide-react"

const issues = [
    { year: "2012", title: "Том 18 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2012", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
    { year: "2011", title: "Том 17 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2011", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
    {
        year: "2010",
        title: "Том 16 выпуск № 1-4 Вопросы ментальной медицины и экологии, Специальный выпуск посвященный Республиканской научно- практической конференции.",
        date: "2010",
        href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip"
    },
    {
        year: "2009",
        title: "Том 15 выпуск № 1-4 Вопросы ментальной медицины и экологии, Специальный выпуск посвященный третьему съезду психиатров и др.специалистов в РК",
        date: "2009",
        href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip"
    },
    { year: "2008", title: "Том 14 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2008", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
    { year: "2007", title: "Том 13 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2007", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
    { year: "2006", title: "Том 12 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2006", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
    { year: "2005", title: "Том 11 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2005", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
    {
        year: "2004",
        title: "Том 10 выпуск № 1-4 Вопросы ментальной медицины и экологии, Специальный выпуск Посвященный второму съезду психиатров и др. специалистов в РК",
        date: "2004",
        href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip"
    },
    { year: "2003", title: "Том 9 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2003", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
    { year: "2002", title: "Том 8 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2002", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
    { year: "2001", title: "Том 7 выпуск № 1-4 Вопросы ментальной медицины и экологии", date: "2001", href: "http://www.rnpc.kz/images/narkaz/nk_2002.zip" },
]

export default function MentalJournalPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] min-h-screen">
                <div className="bg-teal-600 py-16 px-6 md:px-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <Link href="/journals" className="inline-flex items-center gap-2 text-white/40 uppercase text-[10px] font-black mb-8">
                            <ChevronLeft className="w-3 h-3" /> Ко всем журналам
                        </Link>
                        <div className="flex items-center gap-3 mb-4">
                            <Archive className="w-5 h-5 text-teal-200" />
                            <span className="text-teal-100 font-black uppercase tracking-widest text-[10px]">Архив выпусков</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Вопросы ментальной медицины и экологии</h1>
                    </div>
                </div>
                {/* Content */}
                <div className="max-w-5xl w-full mx-auto px-4 md:px-6 py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {issues.map((i, idx) => (
                            <div key={idx} className="bg-white p-5 md:p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all hover:shadow-md">
                                <div className="flex items-center gap-4 md:gap-5">
                                    <div className="bg-blue-50 p-3 md:p-4 rounded-2xl text-blue-600 shrink-0">
                                        <FileDigit className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-slate-800 uppercase leading-snug">{i.title}</h3>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <Calendar className="w-3 h-3 text-slate-300" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{i.year} год</span>
                                        </div>
                                    </div>
                                </div>
                                <a href={i.href} download className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 text-slate-400 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-teal-600 hover:text-white transition-all">
                                        <Download className="w-4 h-4" />
                                        <span>ZIP</span>
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </AppShell>
    )
}
