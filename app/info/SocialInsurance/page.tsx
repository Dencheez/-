"use client"

import { AppShell } from "@/components/app-shell"
import { ExternalLink, Download, Shield, ImageIcon } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const images = Array.from({ length: 48 }, (_, i) => {
    const id = i + 1;
    return {
        src: `/images/OSMC/${id}.jpg`,
        alt: `Image ${id}`
    };
});


function SocialImageCard({ src, alt, index }: { src: string; alt: string; index: number }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden cursor-zoom-in active:scale-95 transition-transform">
                    <div className="aspect-[4/3] relative overflow-hidden bg-slate-50">
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-4xl p-1 bg-white border-none shadow-2xl overflow-hidden">
                <DialogTitle className="sr-only">{alt}</DialogTitle>
                <div className="relative w-full aspect-auto">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-inner"
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default function SocialInsurancePage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 gap-10">

                {/* Header */}
                <div className="border-b border-slate-100 pb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight leading-tight">
                        Обязательное социальное медицинское страхование
                    </h1>
                </div>

                {/* Carousel Section */}
                <section className="px-12 relative">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {images.map((img, i) => (
                                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-2">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md aspect-[4/3] bg-slate-50 cursor-zoom-in active:scale-95 transition-transform group">
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[95vw] sm:max-w-4xl p-1 bg-white border-none shadow-2xl overflow-hidden">
                                            <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                                            <div className="relative w-full aspect-auto">
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-inner"
                                                />
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-10 h-10 w-10 border-[#00B5C4] text-[#00B5C4] hover:bg-[#00B5C4] hover:text-white transition-all shadow-lg" />
                        <CarouselNext className="-right-10 h-10 w-10 border-[#00B5C4] text-[#00B5C4] hover:bg-[#00B5C4] hover:text-white transition-all shadow-lg" />
                    </Carousel>
                </section>

                {/* Section 1 — First 24 images */}
                <section>
                    <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-6 border-l-4 border-[#00B5C4] pl-3">
                        Инфографика и правила ОСМС
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
                        {images.slice(0, 24).map((img, i) => (
                            <SocialImageCard key={i} src={img.src} alt={img.alt} index={i + 1} />
                        ))}
                    </div>
                </section>

                {/* External link to fms.kz */}
                <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B5C4]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

                    <div className="w-20 h-20 bg-[#00B5C4] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#00B5C4]/20 ">
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left relative z-10">
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 leading-tight">
                            Фонд социального медицинского страхования
                        </h3>
                        <p className="text-white/50 text-sm font-medium mb-8 max-w-xl">
                            Получите актуальную информацию о статусе страхования, пакетах медицинских услуг и правах пациентов на официальном ресурсе.
                        </p>
                        <a
                            href="https://fms.kz/ru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#00B5C4] text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#009da8] hover:scale-105 transition-all shadow-xl active:scale-95"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Перейти на fms.kz
                        </a>
                    </div>
                </section>

                {/* Section 2 — Remaining images */}
                <section>
                    <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-6 border-l-4 border-slate-200 pl-3">
                        Дополнительные материалы
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
                        {images.slice(24).map((img, i) => (
                            <SocialImageCard key={i} src={img.src} alt={img.alt} index={i + 25} />
                        ))}
                    </div>
                </section>

                {/* Q&A Downloads */}
                <section className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm">
                    <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Download className="w-4 h-4 text-[#00B5C4]" />
                        Документы: Вопросы и ответы
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://cpzalmaty.kz/images/OSMC/95_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2_%D0%BF%D0%BE_%D0%9E%D0%A1%D0%9C%D0%A1_.doc"
                            className="flex-1"
                        >
                            <button className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#00B5C4]/5 hover:border-[#00B5C4]/30 transition-all group">
                                <div className="text-left">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Файл .DOC</span>
                                    <p className="text-[13px] font-bold text-slate-700 uppercase tracking-tight">95 вопросов по ОСМС</p>
                                </div>
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#00B5C4] group-hover:bg-white shadow-sm transition-colors">
                                    <Download className="w-5 h-5" />
                                </div>
                            </button>
                        </a>
                        <a
                            href="https://cpzalmaty.kz/images/OSMC/%D0%9E%D0%A1%D0%9C%D0%A1.pdf"
                            className="flex-1"
                        >
                            <button className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#00B5C4]/5 hover:border-[#00B5C4]/30 transition-all group">
                                <div className="text-left">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Файл .PDF</span>
                                    <p className="text-[13px] font-bold text-slate-700 uppercase tracking-tight">Новые вопросы — ответы</p>
                                </div>
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#00B5C4] group-hover:bg-white shadow-sm transition-colors">
                                    <Download className="w-5 h-5" />
                                </div>
                            </button>
                        </a>
                    </div>
                </section>

            </div>
        </AppShell>
    )
}
