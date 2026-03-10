"use client"
import { AppShell } from "@/components/app-shell"
import {
    ChevronRight, History, Users, MapPin, ShieldCheck,
    Target, FileText, FileSearch, Megaphone,
    FileCheck, FileSpreadsheet
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
    { title: "Аналитический обзор", href: "/about/analytical-review", icon: FileSearch },
    { title: "Объявления госзакупок", href: "/about/tenders/ads", icon: Megaphone },
    { title: "Протоколы вскрытия", href: "/about/tenders/opening-protocols", icon: FileCheck },
    { title: "Протоколы итогов", href: "/about/tenders/results-protocols", icon: FileSpreadsheet },
]

export default function AboutPage() {
    return (
        <AppShell>
            <main className="max-w-5xl mx-auto w-full">
                {/* ЗАГОЛОВОК */}
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-800 mb-10 border-b-4 border-blue-600 pb-6 inline-block">
                    О Центре
                </h1>

                {/* СЕТКА ССЫЛОК */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group flex items-center justify-between p-5 bg-white hover:bg-blue-600 transition-all duration-300 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-white/20 transition-colors">
                                    <link.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                                </div>
                                <span className="font-black uppercase text-[11px] tracking-wider text-slate-700 group-hover:text-white transition-colors">
                                    {link.title}
                                </span>
                            </div>
                            <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                {/* ИСТОРИЧЕСКАЯ СПРАВКА */}
                <section className="mt-20 p-8 md:p-12 bg-white rounded-[40px] border border-slate-100 shadow-inner relative overflow-hidden">
                    <History className="absolute -right-10 -bottom-10 h-64 w-64 text-slate-50 -rotate-12 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-1.5 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-black uppercase text-slate-800 tracking-tight">История Центра</h2>
                        </div>

                        <div className="text-[16px] leading-relaxed text-slate-600 space-y-6 max-w-3xl">
                            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                                Первые психиатрические больницы были открыты в городе Уральске в 1896 году. В городе Верном (Алматы) 14 декабря 1896 года за счет земских средств было развернуто 10 кроватей для лечения душевно больных.
                            </p>
                            <p className="font-medium italic border-l-4 border-slate-100 pl-6">
                                Психиатрическая служба города Алматы была организована в 1939 году. Первыми участковыми психиатрами в городе были врачи Шаталова З.В., Смирнова...
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </AppShell>
    )
}