"use client"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, Eye, Music, Quote } from "lucide-react"
import Link from "next/link"

export default function GimnPage() {
    return (
        <AppShell>
            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">

                {/* НАВИГАЦИЯ */}
                <div className="flex items-center justify-between mb-6">
                    <Link href="/symbols" className="p-2 -ml-2 text-slate-400 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
                        <ChevronLeft className="h-5 w-5" /> Назад
                    </Link>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-tight">
                        Государственный Гимн <br /> Республики Казахстан
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Eye size={12} /> Просмотров: 5407
                    </div>
                </div>

                {/* ИСТОРИЧЕСКАЯ СПРАВКА */}
                <div className="space-y-6 text-[14px] leading-relaxed text-slate-600 mb-10">
                    <p className="relative pl-6">
                        <Quote className="absolute left-0 top-0 text-blue-100 h-5 w-5 -scale-x-100" />
                        Гимн — торжественная песня, выступающая в качестве звуковой символики страны.
                    </p>
                </div>

                {/* КАРТОЧКА АВТОРОВ */}
                <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-xl shadow-blue-100 mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/20 p-2 rounded-full">
                            <Music size={20} className="text-white" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Создатели гимна</span>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-[9px] uppercase font-bold text-blue-200 tracking-widest mb-1">Авторы слов</p>
                            <p className="text-sm font-bold">Жумекен Нажимеденов, <br /> Нурсултан Назарбаев</p>
                        </div>
                        <div className="h-px bg-white/10 w-full"></div>
                        <div>
                            <p className="text-[9px] uppercase font-bold text-blue-200 tracking-widest mb-1">Автор музыки</p>
                            <p className="text-sm font-bold">Шамши Калдаяков</p>
                        </div>
                    </div>
                </div>

                {/* ПОЛНЫЙ ТЕКСТ ГИМНА */}
                <div className="space-y-10 text-center bg-slate-50/50 py-10 rounded-[40px] border border-slate-50">

                    {/* 1 КУПЛЕТ */}
                    <div className="space-y-1 text-lg font-medium text-slate-800 leading-snug">
                        <p>Алтын күн аспаны,</p>
                        <p>Алтын дән даласы,</p>
                        <p>Ерліктің дастаны,</p>
                        <p>Еліме қарашы!</p>
                    </div>

                    <div className="space-y-1 text-lg font-medium text-slate-800 leading-snug">
                        <p>Ежелден ер деген,</p>
                        <p>Даңқымыз шықты ғой.</p>
                        <p>Намысын бермеген,</p>
                        <p>Қазағым мықты ғой!</p>
                    </div>

                    {/* ПРИПЕВ */}
                    <div className="relative py-6 px-4">
                        <div className="absolute inset-0 bg-blue-50 rounded-2xl -rotate-1"></div>
                        <div className="relative space-y-1 text-lg font-black text-blue-700 leading-tight">
                            <p className="text-[10px] uppercase tracking-[0.3em] mb-3 text-blue-400">Қайырмасы:</p>
                            <p>Менің елім, менің елім,</p>
                            <p>Гүлің болып егілемін,</p>
                            <p>Жырың болып төгілемін, елім!</p>
                            <p>Туған жерім менің — Қазақстаным!</p>
                        </div>
                    </div>

                    {/* 2 КУПЛЕТ */}
                    <div className="space-y-1 text-lg font-medium text-slate-800 leading-snug">
                        <p>Ұрпаққа жол ашқан,</p>
                        <p>Кең байтақ жерім бар.</p>
                        <p>Бірлігі жарасқан,</p>
                        <p>Тәуелсіз елім бар.</p>
                    </div>

                    <div className="space-y-1 text-lg font-medium text-slate-800 leading-snug">
                        <p>Қарсы алған уақытты,</p>
                        <p>Мәңгілік досындай.</p>
                        <p>Біздің ел бақытты,</p>
                        <p>Біздің ел осындай!</p>
                    </div>

                    {/* ПРИПЕВ ПОВТОР */}
                    <div className="relative py-6 px-4">
                        <div className="absolute inset-0 bg-blue-50 rounded-2xl rotate-1"></div>
                        <div className="relative space-y-1 text-lg font-black text-blue-700 leading-tight">
                            <p>Менің елім, менің елім,</p>
                            <p>Гүлің болып егілемін,</p>
                            <p>Жырың болып төгілемін, елім!</p>
                            <p>Туған жерім менің — Қазақстаным!</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center pb-20">
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.4em]">Мемлекеттік Гимн</p>
                </div>

            </main>
        </AppShell>
    )
}