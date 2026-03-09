"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft, Printer, Mail, Eye, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function TenderAds() {
    const title = "Объявления госзакупок";

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-5xl mx-auto px-6 py-12 w-full">
                {/* Панель навигации */}
                <div className="flex justify-between items-center border-b pb-4 mb-8">
                    <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-[#1e40af] text-xs font-bold transition-colors">
                        <ArrowLeft className="h-4 w-4" /> НАЗАД
                    </Link>
                    <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af]"><Printer className="h-3.5 w-3.5" /> Печать</span>
                        <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#1e40af]"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                        <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Просмотров: 128</span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold uppercase text-slate-800 mb-12 tracking-tight">
                    {title}
                </h1>

                <div className="flex flex-col gap-10">

                    {/* Скан 1 */}
                    <div className="w-full aspect-[1/1.4] md:aspect-[21/29] bg-slate-50 border-2 border-dashed border-slate-200 rounded-sm flex flex-col items-center justify-center text-slate-300 group hover:border-blue-200 transition-colors">
                        <img src="/images/GZ/gos-zakup.jpg" alt="Объявление 1" className="w-full h-auto border" />
                    </div>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}