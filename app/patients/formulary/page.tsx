"use client"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, ExternalLink, FileText, Printer, Mail } from "lucide-react"
import Link from "next/link"

export default function FormularyPage() {
    return (
        <AppShell>
            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                        Лекарственный формуляр
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="space-y-8 mb-20">
                    <p className="text-slate-600 leading-relaxed">
                        Ниже представлена ссылка на актуальный перечень лекарственных средств и медицинских изделий для бесплатного и (или) льготного амбулаторного обеспечения отдельных категорий граждан Республики Казахстан.
                    </p>

                    <a
                        href="https://adilet.zan.kz/rus/docs/V2100023885"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-6 border-2 border-slate-100 rounded-xl hover:border-blue-600 hover:bg-blue-50/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-5">
                            <div className="bg-slate-100 p-4 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <FileText className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 uppercase text-sm tracking-tight mb-1">
                                    Приказ МЗ РК № ҚР ДСМ-75
                                </h3>
                                <p className="text-slate-500 text-xs">
                                    Об утверждении Перечня лекарственных средств для бесплатного обеспечения
                                </p>
                            </div>
                        </div>
                        <ExternalLink className="h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                    </a>

                    <div className="p-6 bg-slate-50 rounded-sm border-l-4 border-slate-300">
                        <p className="text-xs text-slate-500 leading-relaxed uppercase font-medium">
                            * Документ открывается на внешнем ресурсе правовой информационной системы «Әділет».
                        </p>
                    </div>
                </div>
            </main>
        </AppShell>
    )
}