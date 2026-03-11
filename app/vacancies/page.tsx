"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import { Briefcase, MapPin, Phone, Mail, ChevronRight } from "lucide-react"

export default function VacanciesPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <div className="mb-8 border-b border-slate-100 pb-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
                            Вакансии
                        </h1>
                        <p className="text-slate-500 text-sm mt-2">
                            ГКП на ПХВ "Центру психического здоровья" требуются следующие специалисты:
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-12">
                        <div className="p-8 md:p-12 text-center bg-slate-50/50">
                            <div className="w-16 h-16 bg-[#00B5C4]/10 rounded-2xl flex items-center justify-center text-[#00B5C4] mx-auto mb-6">
                                <Briefcase className="w-8 h-8" />
                            </div>
                            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter mb-4">Список актуальных вакансий временно пуст</h2>
                            <p className="text-slate-400 text-sm font-medium max-w-lg mx-auto leading-relaxed">
                                Мы всегда рады талантливым специалистам. Вы можете отправить свое резюме в отдел кадров для включения в кадрового резерв.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-50">
                            <div className="p-8 flex flex-col items-center text-center border-r border-slate-50">
                                <Phone className="w-5 h-5 text-[#00B5C4] mb-3" />
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Телефон</span>
                                <p className="text-sm font-bold text-slate-700">+7 (727) 376-56-60</p>
                            </div>
                            <div className="p-8 flex flex-col items-center text-center border-r border-slate-50">
                                <Mail className="w-5 h-5 text-[#00B5C4] mb-3" />
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Email</span>
                                <p className="text-sm font-bold text-slate-700">cpz.sekr@gmail.com</p>
                            </div>
                            <div className="p-8 flex flex-col items-center text-center">
                                <MapPin className="w-5 h-5 text-[#00B5C4] mb-3" />
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Адрес</span>
                                <p className="text-sm font-bold text-slate-700">г. Алматы, ул. Каблукова, 117</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}
