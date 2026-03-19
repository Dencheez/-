"use client"
import { ArrowLeft, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function AnalyticalReviewPage() {
    const reports = [
        {
            title: '«О СОСТОЯНИИ СЛУЖБЫ ОХРАНЫ ПСИХИЧЕСКОГО ЗДОРОВЬЯ» 2022 ГОД',
            file: "/files/review_2022.docx",
            size: "42.5 KB"
        },
        {
            title: '«О СОСТОЯНИИ СЛУЖБЫ ОХРАНЫ ПСИХИЧЕСКОГО ЗДОРОВЬЯ Г. АЛМАТЫ ЗА 2019-2020 ГОД»',
            file: "/files/review_2020.doc",
            size: "38.0 KB"
        }
    ];

    return (
        <div className="w-full text-slate-900 font-sans">
            <main className="max-w-5xl mx-auto w-full px-4 py-6 md:py-12">
                {/* ВЕРХНЯЯ ПАНЕЛЬ */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-8 gap-4">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft className="h-4 w-4" /> Назад
                    </Link>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-10">
                    <h1 className="text-2xl md:text-3xl font-black uppercase text-slate-800 tracking-tight leading-tight">
                        Аналитический обзор
                    </h1>
                    <div className="h-1 w-20 bg-[#1e40af] mt-4"></div>
                </div>

                {/* СПИСОК ОТЧЕТОВ */}
                <div className="grid gap-4">
                    {reports.map((report, index) => (
                        <a
                            key={index}
                            href={report.file}
                            download
                            className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 md:p-6 border border-slate-100 rounded-xl shadow-sm"
                        >
                            <div className="flex items-start gap-5">
                                <div className="p-3.5 bg-slate-50 text-slate-400 rounded-lg shrink-0">
                                    <FileText className="h-6 w-6 md:h-7 md:w-7" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs md:text-[13px] font-extrabold uppercase leading-snug text-slate-700 max-w-2xl">
                                        {report.title}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                                        DOC • {report.size}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1e40af] self-end md:self-center">
                                <Download className="h-4 w-4" />
                                <span className="border-b-2 border-[#1e40af]/20">Скачать обзор</span>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    )
}