"use client"
import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import { LayoutList, Download, FileSpreadsheet, ExternalLink } from "lucide-react"

const plans = [
    { year: "2024", title: "План государственных закупок товаров, работ и услуг на 2024 год" },
    { year: "2023", title: "План государственных закупок на 2023 год (уточненный)" },
    { year: "2022", title: "План закупок 2022 года" },
    { year: "2021", title: "Годовой план государственных закупок на 2021 год" },
]

export default function GoszakupPlanPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <div className="mb-10 border-b border-slate-100 pb-6 text-left">
                        <h1 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-tighter">
                            План государственных закупок
                        </h1>
                    </div>

                    <div className="flex flex-col gap-4">
                        {plans.map((plan) => (
                            <div key={plan.year} className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 flex items-center gap-6">
                                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 transition-all">
                                    <FileSpreadsheet className="w-7 h-7" />
                                </div>

                                <div className="flex-1">
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 block">{plan.year} Год</span>
                                    <h3 className="text-sm font-black text-slate-700 uppercase tracking-tight group-hover:text-slate-900">{plan.title}</h3>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-400 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00B5C4] hover:text-white transition-all">
                                        <Download className="w-4 h-4" />
                                        <span>XLSX</span>
                                    </button>
                                    <Link href="https://www.goszakup.gov.kz/" target="_blank" className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 hover:text-[#00B5C4] transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}
