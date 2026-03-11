"use client"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, Eye, Award } from "lucide-react"
import Link from "next/link"

export default function GerbPage() {
    return (
        <AppShell>
            <main className="flex-grow px-4 py-6 w-full max-w-lg mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <Link href="/symbols" className="p-2 -ml-2 text-slate-400 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
                        <ChevronLeft className="h-5 w-5" /> Назад
                    </Link>
                </div>

                <div className="mb-8">
                    <h1 className="text-2xl font-black uppercase text-slate-800 tracking-tighter leading-tight">
                        Государственный Герб <br /> Республики Казахстан
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Eye size={12} /> Просмотров: 7304
                    </div>
                </div>

                <div className="flex justify-center py-10 relative">
                    <img src="/images/symbols/gerb.png" alt="Герб РК" className="h-56 w-56 object-contain relative z-10" />
                </div>

                <div className="space-y-8 text-[15px] text-slate-700 pb-10">
                    <div className="bg-slate-900 text-white p-6 rounded-2xl">
                        <div className="flex items-start gap-3">
                            <Award className="text-yellow-400 shrink-0" size={20} />
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Авторы герба:</p>
                                <p className="text-sm font-bold">Жандарбек Малибеков и Шот-Аман Уалиханов</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h3 className="font-black text-xs uppercase text-slate-900 mb-1">Шанырақ</h3>
                            <p className="text-sm">Символ общего дома и единой Родины.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h3 className="font-black text-xs uppercase text-slate-900 mb-1">Тулпары</h3>
                            <p className="text-sm">Крылатые кони — храбрость и полет мысли.</p>
                        </div>
                    </div>
                </div>
            </main>
        </AppShell>
    )
}