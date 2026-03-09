"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, File as FileIcon, Download } from "lucide-react"
import Link from "next/link"

export default function CharterPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-6 py-12 w-full">

                {/* ВЕРХНЯЯ ПАНЕЛЬ */}
                <div className="flex justify-between items-center border-b pb-4 mb-12">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 text-xs font-bold transition-colors">
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>
                    <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600"><Printer className="h-3.5 w-3.5" /> Печать</span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                        <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Просмотров: 2845</span>
                    </div>
                </div>

                {/* ОСНОВНОЙ БЛОК */}
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold uppercase text-slate-800 mb-12 tracking-tight text-center">
                        Устав предприятия
                    </h1>

                    <div className="w-full max-w-2xl border border-slate-100 rounded-sm p-12 bg-slate-50/50 flex flex-col items-center text-center space-y-6">
                        <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center rounded-xl shadow-lg shadow-blue-100">
                            <FileIcon size={40} />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Устав ГКП на ПХВ «ЦПЗ»</h2>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Основной учредительный документ</p>
                        </div>

                        <div className="w-full h-px bg-slate-200 my-4"></div>

                        <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                            Устав государственного коммунального предприятия на праве хозяйственного ведения «Центр психического здоровья» Управления общественного здоровья города Алматы.
                        </p>

                        <a
                            href="/files/ustav_cpz.pdf"
                            download
                            className="mt-6 flex items-center gap-3 bg-slate-900 hover:bg-blue-700 text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-sm shadow-md active:scale-95"
                        >
                            <Download size={18} />
                            Скачать документ
                        </a>
                    </div>

                    <div className="mt-12 text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">
                        pdf • 2.4 MB • последнее обновление: 2023
                    </div>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}