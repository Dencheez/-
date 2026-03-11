"use client"

import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { BookOpen, Eye, ChevronRight } from "lucide-react"

const articles = [
    { title: "Информация для врачей", views: 2970, href: "/info/doctors" },
    { title: "Полезная информация", views: 775, href: "/info/useful" },
    { title: "Так ли безопасно курение кальяна?", views: 1855, href: "/info/hookah" },
    { title: "7 советов по прекращению курения", views: 2061, href: "/info/quit-smoking" },
    { title: "Правда о кокаине", views: 6087, href: "/info/cocaine" },
    { title: "Правда об экстази", views: 5149, href: "/info/ecstasy" },
    { title: "Правда об алкоголе", views: 4675, href: "/info/alcohol" },
    { title: "Правда об ЛДС", views: 4374, href: "/info/lds" },
    { title: "Правда о токсикамании", views: 5123, href: "/info/toxicomania" },
    { title: "Правда о героине", views: 5135, href: "/info/heroin" },
    { title: "Правда о марихуане", views: 5094, href: "/info/marijuana" },
    { title: "Правда о марихуане (2)", views: 4929, href: "/info/marijuana-2" },
    { title: "Воздействие наркотиков на разум", views: 4735, href: "/info/drugs-mind" },
    { title: "Насвай.", views: 5460, href: "/info/nasvay" },
    { title: "ПИВНОЙ АЛКОГОЛИЗМ", views: 4175, href: "/info/beer-alcoholism" },
    { title: "Кальян", views: 4111, href: "/info/hookah-2" },
]

export default function InfoPage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8">
                <div className="mb-6 border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-3 mb-3 text-[#00B5C4]">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Библиотека материалов</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
                        Полезная информация
                    </h1>
                </div>

                <div className="flex flex-col gap-3">
                    {articles.map((article, idx) => (
                        <Link
                            key={idx}
                            href={article.href}
                            className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-4 md:p-5 flex items-start md:items-center gap-4 md:gap-5 hover:shadow-md hover:border-[#00B5C4]/30 transition-all"
                        >
                            <div className="w-10 h-10 bg-[#00B5C4]/10 rounded-xl flex items-center justify-center text-[#00B5C4] shrink-0 group-hover:bg-[#00B5C4] group-hover:text-white transition-all">
                                <BookOpen className="w-5 h-5" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="text-[13px] md:text-sm font-black text-slate-800 uppercase tracking-tight group-hover:text-[#00B5C4] transition-colors leading-snug">
                                    {article.title}
                                </h3>
                                <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                                    <Eye className="w-3 h-3" />
                                    <span className="text-[10px] font-bold">Просмотров: {article.views.toLocaleString("ru-RU")}</span>
                                </div>
                            </div>

                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#00B5C4] group-hover:translate-x-1 transition-all shrink-0 self-center" />
                        </Link>
                    ))}
                </div>
            </div>
        </AppShell>
    )
}
