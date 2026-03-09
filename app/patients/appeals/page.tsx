"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, Quote, X } from "lucide-react"
import Link from "next/link"

export default function GratitudePage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const neuImages = [
        "/images/Благодарность/1.jpg",
        "/images/Благодарность/2.jpg",
        "/images/Благодарность/3.jpg",
        "/images/Благодарность/4.jpg",
        "/images/Благодарность/5.jpg"
    ]
    const batyrImages = [
        "/images/Благодарность/6.jpg",
        "/images/Благодарность/7.jpg"
    ]
    const rimmaImages = [
        "/images/Благодарность/8.jpg",
        "/images/Благодарность/9.jpg",
        "/images/Благодарность/10.jpg",
        "/images/Благодарность/11.jpg",
        "/images/Благодарность/12.jpg",
        "/images/Благодарность/13.jpg",
        "/images/Благодарность/14.jpg"
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Благодарности</h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="space-y-12 mb-20">
                    {/* 1. Неупокоева */}
                    <section className="relative p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
                        <Quote className="absolute top-4 right-4 h-12 w-12 text-slate-100" />
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
                            {neuImages.map((src, i) => (
                                <div key={i} onClick={() => setSelectedImage(src)} className="relative aspect-[3/4] overflow-hidden rounded shadow-sm border border-slate-200 bg-white cursor-zoom-in">
                                    <img src={src} alt="Благодарность" className="object-cover w-full h-full hover:scale-105 transition-transform" />
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 text-slate-700 leading-relaxed italic">
                            <p className="font-bold text-slate-900 not-italic uppercase text-sm mb-4">Благодарность!!!</p>
                            <p>Мы жители города Алматы проживаем по адресу - улица Тлендиева...</p>
                            <div className="pt-4 border-t border-slate-200 not-italic">
                                <p className="font-bold text-slate-900">Неупокоева Наталия Василевна и др.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Batyr Seventy */}
                    <section className="p-8 border border-slate-100 rounded-xl shadow-sm bg-white">
                        <p className="font-black text-slate-900 uppercase tracking-tighter text-lg mb-1">Batyr Seventy</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-6">07.08.2018</p>
                        <p className="text-slate-700 leading-relaxed mb-6">Недавно брал справку - обслужили очень быстро...</p>
                        <div className="grid grid-cols-2 gap-4 max-w-2xl">
                            {batyrImages.map((src, i) => (
                                <div key={i} onClick={() => setSelectedImage(src)} className="aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 cursor-zoom-in">
                                    <img src={src} alt="Batyr Seventy" className="object-cover w-full h-full hover:scale-105 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. Римма */}
                    <section className="p-8 border-l-4 border-blue-600 bg-white shadow-sm border border-slate-100 rounded-r-xl">
                        <p className="font-black text-slate-900 uppercase tracking-tighter text-lg mb-1">Римма</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-6">20 июля в 17:14</p>
                        <p className="text-slate-700 leading-relaxed mb-8">Добрый день! Сегодня муж сдавал анализы на шоферские права...</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                            {rimmaImages.map((src, i) => (
                                <div key={i} onClick={() => setSelectedImage(src)} className="aspect-[3/4] bg-white border border-slate-200 rounded overflow-hidden shadow-sm cursor-zoom-in">
                                    <img src={src} alt="Римма" className="object-cover w-full h-full hover:scale-105 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <FooterCarousel />

            {/* Модальное окно (Lightbox) */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform">
                        <X className="h-8 w-8" />
                    </button>
                    <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Увеличенное изображение"
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}