"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import {
    ChevronRight, History, Users, MapPin, ShieldCheck,
    Target, FileText, Landmark, Gavel, ClipboardCheck,
    FileSearch, Megaphone, FileCheck, FileSpreadsheet
} from "lucide-react"
import Link from "next/link"

const aboutLinks = [
    { title: "Миссия, цель и ценности", href: "/about/mission", icon: Target },
    { title: "Администрация", href: "/about/administration", icon: Users },
    { title: "Как нас найти", href: "/about/contacts", icon: MapPin },
    { title: "Наблюдательный совет", href: "/about/board", icon: ShieldCheck },
    { title: "Стратегический план", href: "/about/strategy", icon: FileText },
    { title: "Этический кодекс", href: "/about/ethics", icon: FileText },
    { title: "Противодействие коррупции", href: "/about/anticorruption", icon: ShieldCheck },
    { title: "Устав", href: "/about/statute", icon: FileText },
    // --- ОБНОВЛЕННЫЕ БЛОКИ ПО ТВОЕМУ СПИСКУ ---
    { title: "Аналитический обзор", href: "/about/analytical-review", icon: FileSearch },
    { title: "Объявления госзакупок", href: "/about/tenders/ads", icon: Megaphone },
    { title: "Протоколы вскрытия", href: "/about/tenders/opening-protocols", icon: FileCheck },
    { title: "Протоколы итогов", href: "/about/tenders/results-protocols", icon: FileSpreadsheet },
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900">
            <Header />

            <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full">
                <h1 className="text-3xl font-bold uppercase tracking-tight text-[#1e40af] mb-12 border-b-2 border-slate-900 pb-4">
                    О Центре
                </h1>

                <div className="grid md:grid-cols-2 gap-4">
                    {aboutLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-[#1e40af] transition-all duration-300 rounded-sm border border-slate-100 shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <link.icon className="h-6 w-6 text-[#1e40af] group-hover:text-white transition-colors" />
                                <span className="font-bold uppercase text-[12px] tracking-wider group-hover:text-white transition-colors">
                                    {link.title}
                                </span>
                            </div>
                            <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
                        </Link>
                    ))}
                </div>

                {/* Историческая справка */}
                <section className="mt-20 p-8 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                        <History className="h-6 w-6 text-slate-400" />
                        <h2 className="text-xl font-bold uppercase">История Центра</h2>
                    </div>
                    <div className="text-[15px] leading-relaxed text-slate-600 space-y-4">
                        <p>
                            Первые психиатрические больницы были открыты в городе Уральске в 1896 году. В городе Верном (Алматы) 14 декабря 1896 года за счет земских средств было развернуто 10 кроватей для лечения душевно больных.
                        </p>
                        <p>
                            Психиатрическая служба города Алматы была организована в 1939 году. Первыми участковыми психиатрами в городе были врачи Шаталова З.В., Смирнова...
                        </p>
                    </div>
                </section>
            </main>

            <FooterCarousel />
        </div>
    )
}