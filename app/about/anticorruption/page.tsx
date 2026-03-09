"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function AntiCorruptionPage() {
    const documents = [
        {
            title: 'Закон РК от 18.11.2015 г. "О противодействии коррупции" (с изм. на 01.08.2019)',
            file: "/files/law_anticorruption_2019.pdf"
        },
        {
            title: 'Указ Президента РК от 26.12.2014 г. №986 "Об антикоррупционной стратегии РК на 2015-2025г."',
            file: "/files/strategy_2015_2025.pdf"
        },
        {
            title: 'Памятка "О борьбе с коррупцией"',
            file: "/files/memo_anticorruption.pdf"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-6 py-12 w-full">

                {/* ВЕРХНЯЯ ПАНЕЛЬ */}
                <div className="flex justify-between items-center border-b pb-4 mb-8">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 text-xs font-bold transition-colors">
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>
                    <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600"><Printer className="h-3.5 w-3.5" /> Печать</span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                        <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Просмотров: 3056</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold uppercase text-slate-800 mb-12 tracking-tight">
                    Противодействие коррупции
                </h1>

                {/* СПИСОК ДОКУМЕНТОВ */}
                <div className="space-y-4">
                    {documents.map((doc, index) => (
                        <a
                            key={index}
                            href={doc.file}
                            download
                            className="group flex items-center justify-between p-5 border border-slate-100 rounded-sm hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors rounded-sm">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-800 transition-colors">
                                    {doc.title}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Download className="h-4 w-4" />
                                Скачать
                            </div>
                        </a>
                    ))}
                </div>

                {/* ДОПОЛНИТЕЛЬНЫЙ БЛОК (ЕСЛИ НУЖЕН ТЕКСТ) */}
                <div className="mt-16 p-8 bg-slate-50 border-l-4 border-blue-600">
                    <p className="text-xs text-slate-500 leading-relaxed italic uppercase font-bold tracking-tight">
                        Борьба с коррупцией является приоритетным направлением деятельности ГКП на ПХВ «Центр психического здоровья».
                        Все сотрудники центра строго следуют антикоррупционному законодательству Республики Казахстан.
                    </p>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}