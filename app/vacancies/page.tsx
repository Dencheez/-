"use client"

import { AppShell } from "@/components/app-shell"
import { Briefcase, MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import { getVacancies } from "@/app/lib/api"
import Link from "next/link"

export default async function VacanciesPage() {
    const vacancies = await getVacancies()

    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 max-w-5xl mx-auto">
                <div className="mb-8 border-b border-slate-100 pb-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
                        Вакансии
                    </h1>
                    <p className="text-slate-500 text-sm mt-2">
                        ГКП на ПХВ "Центру психического здоровья" требуются следующие специалисты:
                    </p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-12">
                    {vacancies.length === 0 ? (
                        <div className="p-8 md:p-12 text-center bg-slate-50/50">
                            <div className="w-16 h-16 bg-[#00B5C4]/10 rounded-2xl flex items-center justify-center text-[#00B5C4] mx-auto mb-6">
                                <Briefcase className="w-8 h-8" />
                            </div>
                            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter mb-4">Список актуальных вакансий временно пуст</h2>
                            <p className="text-slate-400 text-sm font-medium max-w-lg mx-auto leading-relaxed">
                                Мы всегда рады талантливым специалистам. Вы можете отправить свое резюме в отдел кадров для включения в кадрового резерв.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col divide-y divide-slate-100">
                            {vacancies.map((v) => (
                                <Link href={`/vacancies/${v.id}`} key={v.id} className="block group p-6 md:p-8 hover:bg-slate-50 transition-colors">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight group-hover:text-[#00B5C4] transition-colors mb-2">{v.title}</h3>
                                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                                {v.salary && <span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">{v.salary}</span>}
                                                {v.experience && <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">{v.experience}</span>}
                                            </div>
                                            <p className="text-sm text-slate-500 line-clamp-2 md:line-clamp-3 leading-relaxed mb-4">
                                                {v.description || v.content}
                                            </p>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Опубликовано: {new Date(v.created_at).toLocaleDateString('ru-RU')}</span>
                                        </div>
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#00B5C4] group-hover:text-white transition-all transform group-hover:translate-x-1">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

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
        </AppShell>
    )
}
