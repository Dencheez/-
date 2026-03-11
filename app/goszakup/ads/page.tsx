"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import { Megaphone, Calendar, ArrowRight, Download, Eye } from "lucide-react"

const tenders = [
    {
        id: "1",
        title: "Объявление №2024-001: Поставка дизельного топлива",
        date: "12.02.2024",
        deadline: "22.02.2024",
        type: "Конкурс"
    },
    {
        id: "2",
        title: "Объявление №2024-002: Услуги по техническому обслуживанию лифтов",
        date: "15.02.2024",
        deadline: "01.03.2024",
        type: "Запрос ценовых предложений"
    },
    {
        id: "3",
        title: "Объявление №2024-005: Закупка спец. одежды для медицинского персонала",
        date: "01.03.2024",
        deadline: "15.03.2024",
        type: "Конкурс"
    },
]

export default function GoszakupAdsPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <div className="mb-10 border-b border-slate-100 pb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
                            Объявления о государственных закупках
                        </h1>
                    </div>

                    <div className="flex flex-col gap-6">
                        {tenders.map((tender) => (
                            <div key={tender.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 group">
                                <div className="w-16 h-16 bg-[#00B5C4]/10 rounded-2xl flex items-center justify-center text-[#00B5C4] shrink-0 transition-all">
                                    <Megaphone className="w-8 h-8" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-black text-[#00B5C4] uppercase tracking-widest">{tender.type}</span>
                                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">№ {tender.id}</span>
                                    </div>
                                    <h3 className="text-base font-black text-slate-800 uppercase tracking-tight mb-4 group-hover:text-[#00B5C4] transition-colors">{tender.title}</h3>
                                    <div className="flex flex-wrap gap-6">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-[11px] font-bold uppercase tracking-tight">Дата: {tender.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-rose-500">
                                            <ArrowRight className="w-4 h-4" />
                                            <span className="text-[11px] font-bold uppercase tracking-tight">Дедлайн: {tender.deadline}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center gap-3">
                                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00B5C4] transition-all">
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>Смотреть</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 border border-slate-100 text-slate-400 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">
                                        <Download className="w-3.5 h-3.5" />
                                        <span>Документы</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}
