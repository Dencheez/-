"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import { Download, Heart, FileText } from "lucide-react"

const brochures = [
    "Памятка для родителей по профилактике суицидального поведения у подростков",
    "Симптомы и признаки употребления наркотических средств",
    "Как уберечь ребенка от наркотиков",
    "Профилактика игровой зависимости",
    "Алкоголь и его влияние на психику",
    "Советы психолога: как справиться со стрессом",
    "Информационный буклет: Психическое здоровье на рабочем месте",
    "Порядок оказания специализированной медицинской помощи"
]

export default function ZOZHPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <div className="mb-10 border-b border-slate-100 pb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
                            Пропаганда ЗОЖ
                        </h1>
                        <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-2xl">
                            Материалы по профилактике зависимостей и укреплению ментального здоровья для населения.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {brochures.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shrink-0 group-hover:bg-rose-100 transition-colors">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[13px] font-bold text-slate-700 leading-snug uppercase tracking-tight">
                                        {item}
                                    </h3>
                                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#00B5C4] hover:text-[#009da8] transition-colors w-fit">
                                        <Download className="w-3 h-3" />
                                        <span>Скачать PDF</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-[#00B5C4]">
                            <Heart className="w-10 h-10" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-xl font-black uppercase tracking-tighter mb-2">Берегите себя и своих близких</h2>
                            <p className="text-white/60 text-sm font-medium">Если вы или ваши близкие нуждаетесь в психологической помощи, звоните в наш Call-центр: 3000-103</p>
                        </div>
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}
