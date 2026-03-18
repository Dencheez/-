"use client"
import { ChevronLeft, ArrowRight, Info, UserCircle, MessageSquareText, Pill, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { AppShell } from "@/components/app-shell"

const linksData = [
    {
        href: "/UsefulLinks/AboutCenter",
        title: "О Центре",
        icon: Info
    },
    {
        href: "/UsefulLinks/Biography",
        title: "Биография директора",
        icon: UserCircle
    },
    {
        href: "/UsefulLinks/BlogDirector",
        title: "Блог директора",
        icon: MessageSquareText
    },
    {
        href: "https://adilet.zan.kz/rus/docs/V1700015724",
        title: "Бесплатные лекарства",
        icon: Pill
    },
    {
        href: "https://adilet.zan.kz/rus/docs/P090002136_",
        title: "Гарантированные объемы",
        icon: ShieldCheck
    },
]

export default function UsefulLinksPage() {
    return (
        <AppShell>
            <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 w-full flex flex-col min-h-screen">

                {/* Хедер */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
                        Полезные ссылки
                    </h1>
                </div>

                {/* Список (стиль один-в-один как в новостях) */}
                <div className="flex flex-col border-t border-slate-100">
                    {linksData.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className="group flex items-center justify-between py-6 border-b border-slate-50 hover:bg-slate-50/50 transition-all px-2 md:px-4"
                            >
                                <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
                                    {/* Иконка */}
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                                        <Icon className="h-5 w-5 text-slate-400 group-hover:text-primary" />
                                    </div>

                                    <span className="text-lg md:text-xl font-bold text-slate-700 group-hover:text-primary transition-colors truncate">
                                        {link.title}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                        Перейти
                                    </span>
                                    <ArrowRight className="h-5 w-5 text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </main>
        </AppShell>
    )
}