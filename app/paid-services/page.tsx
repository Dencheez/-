"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Wallet, ChevronLeft, CreditCard, ChevronRight, FileText, Download } from "lucide-react"

export default function PaidServicesPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] min-h-screen">
                <div className="bg-[#00B5C4] py-16 px-6 md:px-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/40 uppercase text-[10px] font-black mb-8">
                            <ChevronLeft className="w-3 h-3" /> Назад
                        </Link>
                        <div className="flex items-center gap-3 mb-4">
                            <Wallet className="w-6 h-6 text-white" />
                            <span className="text-white/60 font-black uppercase tracking-widest text-[10px]">Услуги Центра</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">Платные услуги</h1>
                        <p className="text-white/80 text-sm font-medium max-w-2xl leading-relaxed">
                            Предоставление медицинской помощи на платной основе согласно утвержденному прейскуранту. Качественные услуги специалистов без направления.
                        </p>
                    </div>
                </div>

                <div className="max-w-5xl w-full mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center italic">
                            <div className="bg-teal-50 p-5 rounded-3xl text-teal-600 mb-6">
                                <CreditCard className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-black uppercase text-slate-900 mb-2">Прозрачность</h3>
                            <p className="text-xs text-slate-400 font-medium">Фиксированные цены на все виды обследований.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center italic">
                            <div className="bg-teal-50 p-5 rounded-3xl text-teal-600 mb-6">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-black uppercase text-slate-900 mb-2">Официально</h3>
                            <p className="text-xs text-slate-400 font-medium">Заключение договора и предоставление чеков.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center italic">
                            <div className="bg-teal-50 p-5 rounded-3xl text-teal-600 mb-6">
                                <ChevronRight className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-black uppercase text-slate-900 mb-2">Скорость</h3>
                            <p className="text-xs text-slate-400 font-medium">Запись в день обращения к любому врачу.</p>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-black uppercase tracking-tighter">Прейскурант цен на 2024 год</h2>
                            <p className="text-white/40 text-sm font-medium max-w-lg leading-relaxed">
                                Скачайте полный перечень услуг и цен для ознакомления. Файл содержит стоимость консультаций, лабораторных исследований и пребывания в стационаре.
                            </p>
                        </div>
                        <button className="flex items-center gap-4 px-10 py-5 bg-[#00B5C4] rounded-2xl font-black uppercase text-xs tracking-widest">
                            <Download className="w-5 h-5" />
                            <span>Скачать Прейскурант (PDF)</span>
                        </button>
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
