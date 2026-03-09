"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, FileText, Download, ExternalLink, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

export default function AntiCorruptionPage() {
    const documents = [
        {
            title: 'Закон РК от 18.11.2015 г. "О противодействии коррупции" (с изм. на 01.08.2019)',
            file: "https://adilet.zan.kz/rus/docs/Z1500000410",
            type: 'link'
        },
        {
            title: 'Указ Президента РК от 26.12.2014 г. №986 "Об антикоррупционной стратегии РК на 2015-2025г."',
            file: "https://adilet.zan.kz/rus/docs/U1400000986",
            type: 'link'
        },
        {
            title: 'Памятка "О борьбе с коррупцией"',
            file: "/images/docs/памятка_о_коорупции.jpg",
            type: 'image'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 w-full flex-grow">

                {/* ВЕРХНЯЯ ПАНЕЛЬ */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-8 gap-4">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-widest">
                        <ArrowLeft className="h-4 w-4" /> Назад
                    </Link>
                    <div className="flex flex-wrap gap-4 md:gap-6 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span onClick={() => window.print()} className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 transition-colors">
                            <Printer className="h-3.5 w-3.5" /> Печать
                        </span>
                        <a href="mailto:cpz_almaty@med.mail.kz" className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 transition-colors">
                            <Mail className="h-3.5 w-3.5" /> E-mail
                        </a>
                        <span className="flex items-center gap-1.5 text-slate-300">
                            <Eye className="h-3.5 w-3.5" /> 3056
                        </span>
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-10 md:mb-12">
                    <h1 className="text-2xl md:text-4xl font-black uppercase text-slate-800 tracking-tight leading-tight md:max-w-2xl">
                        Противодействие коррупции
                    </h1>
                    <div className="h-1.5 w-24 bg-blue-600 mt-4"></div>
                </div>

                {/* СПИСОК ДОКУМЕНТОВ */}
                <div className="grid gap-3 md:gap-4">
                    {documents.map((doc, index) => (
                        <a
                            key={index}
                            href={doc.file}
                            target={doc.type === 'link' ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 md:p-5 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/40 transition-all shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-start md:items-center gap-4 w-full">
                                <div className="p-3 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-lg shrink-0">
                                    {doc.type === 'image' ? <ImageIcon className="h-5 w-5 md:h-6 md:w-6" /> : <FileText className="h-5 w-5 md:h-6 md:w-6" />}
                                </div>
                                <span className="text-sm md:text-base font-bold text-slate-700 group-hover:text-blue-900 transition-colors leading-snug">
                                    {doc.title}
                                </span>
                            </div>

                            <div className="mt-4 sm:mt-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 sm:opacity-0 group-hover:opacity-100 transition-all self-end sm:self-center bg-blue-50 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full">
                                {doc.type === 'image' ? <ImageIcon className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                                <span>{doc.type === 'image' ? 'Смотреть' : 'Перейти'}</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* ИНФОРМАЦИОННЫЙ БЛОК */}
                <div className="mt-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1.5 bg-blue-600"></div>
                    <div className="bg-slate-50 p-6 md:p-8 rounded-r-2xl border border-slate-100 border-l-0">
                        <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-tight">
                            Борьба с коррупцией является приоритетным направлением деятельности ГКП на ПХВ «Центр психического здоровья».
                            <br className="hidden md:block" />
                            <span className="text-blue-700/70 mt-2 block">
                                Все сотрудники центра строго следуют антикоррупционному законодательству Республики Казахстан.
                            </span>
                        </p>
                    </div>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}