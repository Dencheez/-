"use client"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, Eye, Info } from "lucide-react"
import Link from "next/link"

export default function FlagPage() {
    return (
        <AppShell>
            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">
                {/* НАВИГАЦИЯ */}
                <div className="flex items-center justify-between mb-6">
                    <Link href="/symbols" className="p-2 -ml-2 text-slate-400 active:text-blue-600 transition-colors flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
                        <ChevronLeft className="h-5 w-5" /> Назад
                    </Link>
                </div>

                {/* ЗАГОЛОВОК */}
                <div className="mb-8">
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-tight">
                        Государственный Флаг <br /> Республики Казахстан
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Eye size={12} /> Просмотров: 5476
                    </div>
                </div>

                {/* ИЗОБРАЖЕНИЕ */}
                <div className="relative mb-10 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl blur opacity-10"></div>
                    <div className="relative bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xl shadow-blue-900/5">
                        <img
                            src="/images/symbols/flag.png"
                            alt="Флаг РК"
                            className="w-full h-auto block"
                        />
                    </div>
                </div>

                <div className="space-y-8 text-[15px] leading-relaxed text-slate-700">
                    <section className="relative pl-4 border-l-2 border-blue-600">
                        <p>Флаг – один из главных символов государства, олицетворяющий его суверенитет и идентичность.</p>
                    </section>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex items-start gap-3 text-sm font-bold text-slate-800">
                            <Info size={18} className="text-blue-600 shrink-0" />
                            <p>Официально принят в 1992 году. <br /> <span className="text-blue-600 font-black">Автор: Шакен Ниязбеков.</span></p>
                        </div>
                    </div>

                    <div className="space-y-4 pb-10">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Описание символики</h3>
                        <p><span className="font-bold text-slate-900">Небесно-голубой цвет</span> — честность, верность и безупречность.</p>
                        <p><span className="font-bold text-slate-900">Солнце</span> — символ богатства и жизни. Лучи в форме зерна означают достаток.</p>
                        <p><span className="font-bold text-slate-900">Беркут</span> — сила государства, независимость и стремление к высотам.</p>
                        <p><span className="font-bold text-slate-900">Орнамент</span> — культурные традиции народа.</p>
                    </div>
                </div>
            </main>
        </AppShell>
    )
}