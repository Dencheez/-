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

                <div className="max-w-4xl w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex items-center justify-center">
                    <img
                        src="/images/Jurnal.jpg"
                        alt="Журнал Академия здоровья"
                        className="w-full h-auto rounded-2xl md:rounded-[2.5rem] shadow-2xl shadow-orange-900/10 border border-orange-100"
                    />
                </div>
            </div>
        </AppShell>
    )
}
