"use client"

import { AppShell } from "@/components/app-shell"
import { Calendar, Info } from "lucide-react"

export default function GeneralAdsPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8">
                <div className="mb-10 flex items-center gap-6 border-b border-slate-100 pb-8">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter">Объявления</h1>
                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-1">Официальная информация для пациентов и сотрудников</p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 max-w-4xl">



                </div>
            </div>
        </AppShell>
    )
}

import { ArrowRight } from "lucide-react"
