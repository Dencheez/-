"use client"
import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { LayoutList, Download, FileSpreadsheet, ExternalLink } from "lucide-react"

const plans = [
    { year: "2018", title: "План государственных закупок 2018", href: "/files/plans/План_закупок_2018.xlsx" },
    { year: "2019", title: "План государственных закупок 2019", href: "/files/plans/План_закупок_2019.xlsx" },
    { year: "2020", title: "План закупок 2020", href: "/files/plans/План_государственных_закупок_на_2020_год.xlsx" },
]


export default function GoszakupPlanPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8">
                <div className="mb-10 border-b border-slate-100 pb-6 text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight leading-tight">
                        План государственных закупок
                    </h1>
                </div>

                <div className="flex flex-col gap-4">
                    {plans.map((plan) => (
                        <div key={plan.year} className="group bg-white p-5 md:p-6 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 transition-all shrink-0">
                                <FileSpreadsheet className="w-6 h-6 md:w-7 md:h-7" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <span className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 block">{plan.year} Год</span>
                                <h3 className="text-[13px] md:text-sm font-black text-slate-700 uppercase tracking-tight group-hover:text-slate-900 leading-snug">
                                    {plan.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                                <a href={plan.href} className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00B5C4] hover:text-white transition-all">
                                        <Download className="w-4 h-4 font-black" />
                                        <span>XLSX</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                    <Link href="https://www.goszakup.gov.kz/" target="_blank" className="w-auto h-12 rounded-xl flex items-center justify-between bg-black px-6 text-slate-300 hover:bg-[#00B5C4] transition-colors">
                        <h2 className="text-sm font-black text-white text-slate-700 uppercase tracking-tight group-hover:text-slate-900">подробная информация</h2>
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </AppShell>
    )
}
