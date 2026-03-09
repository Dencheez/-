"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, Download, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ObservationBoardPage() {
    // Список членов совета на основе твоих скринов и текста
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
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12 w-full space-y-16">

                {/* ВЕРХНЯЯ ПАНЕЛЬ (как на скрине) */}
                <div className="flex justify-between items-center border-b pb-4">
                    <Link href="/about" className="text-slate-400 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div className="flex gap-4">
                        <Printer className="h-4 w-4 text-blue-400 cursor-pointer" />
                        <Mail className="h-4 w-4 text-blue-400 cursor-pointer" />
                    </div>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-slate-800">Наблюдательный совет</h1>
                    <p className="text-slate-300 text-sm">Просмотров: 9905</p>
                    <h2 className="text-xl font-semibold text-[#1e40af] pt-8">Состав наблюдательного совета</h2>
                </div>

                {/* ЛЕНТА ФОТОГРАФИЙ (МНОГО ФОТОК) */}
                <div className="flex flex-col items-center space-y-20">
                    {members.map((member, index) => (
                        <div key={index} className="w-full max-w-md text-center space-y-6 group">
                            {/* РАМКА ДЛЯ ФОТО */}
                            <div className="relative aspect-[4/5] w-full bg-slate-50 border shadow-sm overflow-hidden transition-shadow group-hover:shadow-xl">
                                {/* Иконка-заглушка, пока не подставишь реальное фото */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-100">
                                    <span className="text-8xl font-black">?</span>
                                </div>
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* ИМЯ ПОД ФОТО (Синее, как на скрине) */}
                            <p className="text-lg font-bold text-blue-700 uppercase tracking-tight">
                                {member.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* БЛОК ДОКУМЕНТОВ */}
                <div className="pt-20 border-t">
                    <h3 className="text-lg font-black uppercase mb-8 text-slate-800 tracking-widest">
                        Документы наблюдательного совета
                    </h3>
                    <div className="grid gap-4">
                        {documents.map((doc, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 transition-all cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                                    <span className="text-sm font-medium text-slate-600">{doc}</span>
                                </div>
                                <span className="text-[10px] font-bold text-blue-500 group-hover:underline">СКАЧАТЬ</span>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            <FooterCarousel />
        </div>
    )
}