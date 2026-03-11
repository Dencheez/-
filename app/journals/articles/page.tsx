"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { ChevronLeft, } from "lucide-react"



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
                    </div>
                </div>

                <div className="max-w-5xl w-full mx-auto px-4 md:px-6 py-8 md:py-12">
                    <div className="flex flex-col items-center gap-8 md:gap-12">
                        <img
                            src="/images/статья-Академия-здоровья_1.jpg"
                            alt="Статья 1"
                            className="w-full h-auto rounded-2xl md:rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-slate-100"
                        />
                        <img
                            src="/images/статья-Академия-здоровья_2.jpg"
                            alt="Статья 2"
                            className="w-full h-auto rounded-2xl md:rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-slate-100"
                        />
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
