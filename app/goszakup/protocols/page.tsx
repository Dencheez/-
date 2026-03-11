"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import { Download, FileText, ChevronRight } from "lucide-react"

const protocols = [
    { id: "1", title: "Протокол итогов №1 от 15.01.2024", type: "Закупка медикаментов", status: "Завершено" },
    { id: "2", title: "Протокол вскрытия №4 от 22.02.2024", type: "Хозяйственные товары", status: "В работе" },
    { id: "3", title: "Протокол итогов №5 от 01.03.2024", type: "Медицинское оборудование", status: "Завершено" },
    { id: "4", title: "Протокол №12: Услуги охраны 2024", type: "Услуги", status: "Архив" },
]

export default function GoszakupProtocolsPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <div className="mb-10 border-b border-slate-100 pb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
                            Государственные закупки: Протоколы
                        </h1>
                    </div>

                    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Наименование протокола</th>
                                        <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest hidden md:table-cell">Тип закупки</th>
                                        <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Действие</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {protocols.map((p) => (
                                        <tr key={p.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors">
                                            <td className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                                                        <FileText className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-tight">{p.title}</h3>
                                                        <span className="text-[9px] text-[#00B5C4] font-black uppercase tracking-widest">{p.status}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6 hidden md:table-cell">
                                                <span className="text-xs font-medium text-slate-400">{p.type}</span>
                                            </td>
                                            <td className="p-6">
                                                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-[#00B5C4] transition-all">
                                                    <Download className="w-3.5 h-3.5" />
                                                    <span>PDF</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}
