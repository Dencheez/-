"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { ChevronLeft, ExternalLink, FileText } from "lucide-react"

export default function RegistryPage() {
    // Добавляем проверку, чтобы не падало, если хук возвращает undefined
    const lang = useLanguage();
    const t = lang ? lang.t : null;

    return (
        <div className="min-h-screen bg-slate-50">
            <main className="container mx-auto px-4 py-12">

                {/* Кнопка назад - жестко прописал текст на случай ошибки хука */}
                <Link
                    href="/gosuslugi"
                    className="inline-flex items-center gap-2 text-[10px] text-slate-400 uppercase mb-8"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Назад
                </Link>

                <div className="max-w-4xl mx-auto bg-white rounded-[24px] md:rounded-[32px] border border-slate-100 p-6 md:p-12 shadow-sm">
                    <div className="flex items-start md:items-center gap-4 mb-8">
                        <div className="bg-blue-50 p-3 rounded-2xl shrink-0">
                            <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                        </div>
                        <h1 className="text-xl md:text-3xl font-black text-slate-800 uppercase leading-tight">
                            Реестр государственных услуг
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
                            Для ознакомления с актуальным реестром государственных услуг и нормативно-правовыми актами, пожалуйста, перейдите в информационно-правовую систему «Әділет».
                        </p>
                        <a
                            href="https://adilet.zan.kz/rus/docs/V2000019982"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 w-full md:w-auto bg-[#00B5C4] hover:bg-[#009ba7] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-cyan-500/20 group"
                        >
                            <span className="text-sm md:text-base">Открыть в системе Әділет</span>
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <p className="text-[10px] md:text-xs text-slate-400 uppercase font-bold tracking-wider pt-4">
                            Источник: adilet.zan.kz
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}