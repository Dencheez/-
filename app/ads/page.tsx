"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import { Bell, MapPin, Clock, Calendar, Info, Megaphone } from "lucide-react"

export default function GeneralAdsPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <div className="mb-10 flex items-center gap-6 border-b border-slate-100 pb-8">
                        <div className="w-20 h-20 bg-amber-50 rounded-[2rem] flex items-center justify-center text-amber-500 shadow-inner">
                            <Megaphone className="w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter">Объявления</h1>
                            <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-1">Официальная информация для пациентов и сотрудников</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full translate-x-1/2 -translate-y-1/2" />

                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
                                <span className="text-[10px] font-extrabold text-[#00B5C4] uppercase tracking-widest">Актуальное</span>
                            </div>

                            <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight leading-tight mb-8 group-hover:text-amber-600 transition-colors">
                                График работы центра в праздничные дни
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Дата публикации</span>
                                        <p className="text-[13px] font-bold text-slate-600">20 Марта 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300">
                                        <Info className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Категория</span>
                                        <p className="text-[13px] font-bold text-slate-600">Для всех посетителей</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-500 text-sm leading-relaxed mb-10 border-t border-slate-50 pt-8">
                                Уважаемые посетители! Уведомляем вас об изменениях в режиме работы отделений в связи с предстоящими праздниками. Приемный покой и скорая помощь продолжают работать в круглосуточном режиме без выходных.
                            </p>

                            <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00B5C4] transition-all">
                                <span>Читать полный текст</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-center justify-center text-center">
                            <p className="text-slate-400 text-xs font-medium">Архив объявлений находится в процессе переноса в новую систему.</p>
                        </div>
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}

import { ArrowRight } from "lucide-react"
