"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdministrationPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-16 w-full space-y-12">
                {/* КНОПКА НАЗАД */}
                <Link href="/about" className="flex items-center gap-2 text-slate-400 hover:text-[#1e40af] mb-8 text-sm font-bold uppercase tracking-wider transition-colors w-fit">
                    <ArrowLeft className="h-4 w-4" /> Назад
                </Link>

                {/* ЗАГОЛОВОК */}
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1e40af] border-b-4 border-[#1e40af] pb-4 w-fit">
                    Протокол вскрытия
                </h1>

                {/* ВЕРТИКАЛЬНАЯ КОЛОНКА С РЕАЛЬНЫМИ ФОТО */}
                <div className="flex flex-col gap-10 pt-8">

                    {/* ПЕРВЫЙ ФАЙЛ */}
                    <div className="w-full shadow-lg border border-slate-100 overflow-hidden">
                        <img
                            src="/images/AdminsFile/1.jpg"
                            alt="Протокол страница 1"
                            className="w-full h-auto object-contain"
                            onError={(e) => e.currentTarget.src = "https://placehold.co/600x800?text=Check+File+Name+1"}
                        />
                    </div>

                    {/* ВТОРОЙ ФАЙЛ */}
                    <div className="w-full shadow-lg border border-slate-100 overflow-hidden">
                        <img
                            src="/images/AdminsFile/2.jpg"
                            alt="Протокол страница 2"
                            className="w-full h-auto object-contain"
                            onError={(e) => e.currentTarget.src = "https://placehold.co/600x800?text=Check+File+Name+2"}
                        />
                    </div>

                    {/*Третий файл */}
                    <div className="w-full shadow-lg border border-slate-100 overflow-hidden">
                        <img
                            src="/images/AdminsFile/3.jpg"
                            alt="Протокол страница 2"
                            className="w-full h-auto object-contain"
                            onError={(e) => e.currentTarget.src = "https://placehold.co/600x800?text=Check+File+Name+2"}
                        />
                    </div>
                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}