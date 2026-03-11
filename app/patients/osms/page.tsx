"use client"

import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Download, ExternalLink } from "lucide-react"

const images = [
    "/images/OSMS10.jpg",
    "/images/OSMS11.jpg",
    "/images/OSMS12.jpg",
    "/images/OSMS13.jpg",
    "/images/OSMS14.jpg",
    "/images/OSMS9.jpg",
    "/images/OSMS8.jpg",
    "/images/OSMS7.jpg",
    "/images/OSMS6.jpg",
    "/images/OSMS5.jpg",
    "/images/OSMS4.jpg",
    "/images/OSMS3.jpg",
    "/images/OSMS2.jpg",
]

export default function OSMSPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] p-4 md:p-8">
                <h1 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-8">
                    Обязательное социальное медицинское страхование
                </h1>

                <div className="flex flex-col gap-6 mb-12">
                    <Link
                        href="https://fms.kz/ru"
                        target="_blank"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#00B5C4] text-black font-black uppercase text-xs tracking-widest w-fit"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Перейти на сайт fms.kz</span>
                    </Link>

                    <Link
                        href="/images/OSMC/95_вопросов_по_ОСМС_.doc"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black uppercase text-xs tracking-widest w-fit"
                    >
                        <Download className="w-4 h-4" />
                        <span>Скачать 95 вопросов по ОСМС</span>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 max-w-4xl">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`OSMS Infographic ${idx + 1}`}
                            className="w-full h-auto rounded-sm border border-slate-100"
                        />
                    ))}
                </div>
            </div>
        </AppShell>
    )
}