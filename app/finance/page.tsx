"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import { Download, FileText, BarChart3, Calendar, PieChart } from "lucide-react"

const reports = [
    { year: "2023", title: "Отчет о доходах и расходах за 12 месяцев", file: "otchet_2023.pdf" },
    { year: "2022", title: "Финансовый отчет по итогам 2022 года", file: "2022_otchet.jpg" },
    { year: "2021", title: "Годовой отчет о финансовой деятельности 2021", file: "2021otchet.jpg" },
    { year: "2020", title: "Финансовые показатели за 2020 год", file: "2020otc.jpg" },
    { year: "2019", title: "Отчет о доходах и расходах (2019)", file: "2019_фин_отчет.jpg" },
    { year: "2018", title: "Бухгалтерский баланс 2018", file: "otchetbux2.png" },
]

export default function FinancePage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <div className="mb-10 border-b border-slate-100 pb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
                            Финансовая отчетность
                        </h1>
                        <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-2xl">
                            Прозрачность и отчетность: данные о финансово-хозяйственной деятельности предприятия.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reports.map((report, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col gap-6 group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#00B5C4]/10 rounded-2xl flex items-center justify-center text-[#00B5C4]">
                                            <BarChart3 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black text-[#00B5C4] uppercase tracking-[0.2em]">{report.year} Год</span>
                                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight leading-tight mt-1">{report.title}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mt-auto">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00B5C4] transition-all">
                                        <Download className="w-4 h-4" />
                                        <span>Просмотреть</span>
                                    </button>
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 transition-colors">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-8">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400">
                                <PieChart className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-slate-700 uppercase tracking-tight mb-1">Политика открытости</h4>
                                <p className="text-slate-400 text-[11px] leading-relaxed">Вся отчетность соответствует стандартам ГКП на ПХВ и публикуется ежегодно по завершении аудиторских проверок.</p>
                            </div>
                        </div>
                        <div className="p-8 bg-[#00B5C4] rounded-[2rem] text-white flex flex-col justify-center items-center text-center">
                            <Calendar className="w-10 h-10 mb-3 opacity-30" />
                            <span className="text-[10px] font-black uppercase tracking-widest mb-1">Последнее обновление</span>
                            <p className="text-lg font-black uppercase">Март 2024</p>
                        </div>
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}
