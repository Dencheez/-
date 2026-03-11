"use client"
import { ArrowLeft, Printer, Mail, Eye, FileText, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ObservationBoardPage() {
    const members = [
        { name: "Несипкалиев Алмас Жуматович", photo: "/images/board/1.jpg" },
        { name: "Джумабеков Ауесхан Толегенович", photo: "/images/board/2.jpg" },
        { name: "Даутова Алтын Юсуповна", photo: "/images/board/3.jpg" },
        { name: "Файзуллина Камила Мухаметкалиевна", photo: "/images/board/4.jpg" },
        { name: "Буркитбаев Еркебулан Утегенович", photo: "/images/board/5.jpg" },
        { name: "Шуленбаева Акерке Мейрмановна", photo: "/images/board/6.jpg" },
        { name: "Қонысбекқызы Эльмира", photo: "/images/board/7.jpg" },
    ]

    const documents = [
        "План работы НС", "Положение НС", "Порядок созыва НС",
        "Список членов НС", "Положение о секретаре НС"
    ]

    return (
        <div className="w-full text-slate-900 font-sans">
            <main className="max-w-6xl mx-auto space-y-12 md:space-y-16">
                {/* ВЕРХНЯЯ ПАНЕЛЬ */}
                <div className="flex justify-between items-center border-b pb-4">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft className="h-4 w-4" /> Назад
                    </Link>
                    <div className="flex gap-4 items-center">
                        <Printer onClick={() => window.print()} className="h-4 w-4 text-slate-300 cursor-pointer" />
                        <a href="mailto:cpz.sekr@gmail.com"><Mail className="h-4 w-4 text-slate-300 cursor-pointer" /></a>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300 ml-2 uppercase">
                            <Eye className="h-3.5 w-3.5" /> 9905
                        </div>
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tight">
                        Наблюдательный совет
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
                    <h2 className="text-lg md:text-xl font-bold text-blue-800 pt-6 uppercase tracking-wide">
                        Состав наблюдательного совета
                    </h2>
                </div>

                {/* СЕТКА УЧАСТНИКОВ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {members.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative aspect-[3/4] w-full max-w-[280px] bg-slate-100 rounded-lg overflow-hidden shadow-sm">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-200 bg-slate-50">
                                    <span className="text-6xl font-black">?</span>
                                </div>
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-4 text-center px-2">
                                <p className="text-sm md:text-base font-extrabold text-blue-900 leading-snug uppercase tracking-tight">
                                    {member.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* БЛОК ДОКУМЕНТОВ */}
                <div className="pt-12 border-t">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-6 w-1 bg-blue-600"></div>
                        <h3 className="text-base md:text-lg font-black uppercase text-slate-800 tracking-wider">
                            Документация
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {documents.map((doc, i) => (
                            <a
                                key={i}
                                href="#"
                                className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl"
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        <FileText className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700 truncate">{doc}</span>
                                </div>
                                <Download className="h-4 w-4 text-blue-500 shrink-0" />
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}