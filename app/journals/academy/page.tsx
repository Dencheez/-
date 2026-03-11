"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Download, ChevronLeft, Archive, Sparkles, Calendar } from "lucide-react"

export default function AcademyJournalPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] min-h-screen">
                <div className="bg-orange-600 py-16 px-6 md:px-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <Link href="/journals" className="inline-flex items-center gap-2 text-white/40 uppercase text-[10px] font-black mb-8">
                            <ChevronLeft className="w-3 h-3" /> Ко всем журналам
                        </Link>
                        <div className="flex items-center gap-3 mb-4">
                            <Archive className="w-5 h-5 text-orange-200" />
                            <span className="text-orange-100 font-black uppercase tracking-widest text-[10px]">Архив выпусков</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Академия здоровья</h1>
                    </div>
                </div>

                <div className="max-w-5xl w-full mx-auto px-6 py-12">
                    <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm text-center">
                        <div className="bg-orange-50 w-20 h-20 rounded-[2rem] flex items-center justify-center text-orange-600 mx-auto mb-8">
                            <Sparkles className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-4">Скоро в доступе</h2>
                        <p className="text-slate-400 text-sm font-medium max-w-md mx-auto leading-relaxed mb-10">
                            Популярное издание о здоровом образе жизни скоро будет доступно для онлайн-чтения.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                            <Calendar className="w-4 h-4" />
                            <span>Обновление в процессе</span>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
