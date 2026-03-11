"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import Link from "next/link"
import { BookOpen, FileDigit, ChevronRight, Newspaper, ArrowUpRight } from "lucide-react"

const journals = [
    {
        id: "narcology",
        title: 'Журнал "Вопросы наркологии Казахстана"',
        href: "/journals/narcology",
        description: "Научно-практический журнал, посвященный актуальным проблемам клинической и социальной наркологии."
    },
    {
        id: "mental",
        title: 'Журнал "Вопросы ментальной медицины и экологии"',
        href: "/journals/mental",
        description: "Междисциплинарный журнал о психическом здоровье, психологии и влиянии окружающей среды."
    },
    {
        id: "academy",
        title: "Академия здоровья",
        href: "/journals/academy",
        description: "Популярное издание о здоровом образе жизни, профилактике заболеваний и активном долголетии."
    },
]

export default function JournalsPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <div className="mb-12 border-b border-slate-100 pb-8">
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">Журналы</h1>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xl">
                            Наш центр издает профильную медицинскую литературу для специалистов и широкого круга читателей.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {journals.map((journal) => (
                            <Link
                                key={journal.id}
                                href={journal.href}
                                className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B5C4]/5 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform duration-700" />

                                <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-300 transition-all shrink-0">
                                    <BookOpen className="w-10 h-10" />
                                </div>

                                <div className="flex-1 text-center md:text-left relative z-10">
                                    <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight mb-3">{journal.title}</h3>
                                    <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-lg mb-6">{journal.description}</p>

                                    <div className="flex items-center justify-center md:justify-start gap-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#00B5C4] transition-colors">Смотреть архив</span>
                                        <ArrowUpRight className="w-4 h-4 text-[#00B5C4] transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link
                            href="/journals/articles"
                            className="bg-slate-900 rounded-[2.5rem] p-10 text-white hover:bg-[#00B5C4] transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-6 mb-6">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <Newspaper className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tighter">Наши статьи</h3>
                            </div>
                            <p className="text-white/60 text-sm font-medium leading-relaxed mb-6 group-hover:text-white/80">Ознакомьтесь с актуальными публикациями наших специалистов в различных изданиях.</p>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                                <span>Подробнее</span>
                                <ChevronRight className="w-3 h-3" />
                            </div>
                        </Link>

                        <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-4">
                                <FileDigit className="w-6 h-6 text-[#00B5C4]" />
                                <h4 className="text-sm font-black text-slate-700 uppercase tracking-tight">Электронная библиотека</h4>
                            </div>
                            <p className="text-slate-400 text-xs font-medium leading-relaxed">Все выпуски журналов доступны в электронном формате (PDF). Мы постоянно пополняем наш архив новыми и редкими изданиями.</p>
                        </div>
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}
