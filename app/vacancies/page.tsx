"use client"
import { useState, useEffect } from "react";
import { AppShell } from "@/components/app-shell"
import { Briefcase, ChevronDown, Plus, Trash2, Clock } from "lucide-react"
import { getVacancies } from "@/app/lib/api"
import { addVacancy, deleteVacancy } from "@/app/admin/actions"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

export default function VacanciesPage() {
    const [vacancies, setVacancies] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useUser();
    const role = (user?.publicMetadata as any)?.role;
    const isAdmin = role === "admin" || role === "doctor";
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter()

    async function load() {
        try {
            const data = await getVacancies();
            setVacancies(data || []);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => { load(); }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            title: formData.get("title") as string,
            salary: formData.get("salary") as string,
            experience: formData.get("experience") as string,
            description: formData.get("description") as string,
        };

        try {
            // Отправляем ВЕСЬ объект data (со всеми полями)
            await addVacancy(data);

            // Если дошли сюда — всё кайф
            await load();          // Обновит карточки на экране
            setIsModalOpen(false); // Закроет модалку
            form.reset();
            router.refresh();

        } catch (error: any) {
            // Если это ошибка редиректа от Next.js — просто закрываем окно, это не ошибка
            if (error.message === "NEXT_REDIRECT") {
                await load();
                setIsModalOpen(false);
                return;
            }

            console.error("ПОЛНАЯ ОШИБКА:", error);
            alert("Ошибка: " + (error.message || "Неизвестная ошибка"));
        }
    };
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 max-w-6xl mx-auto">
                {/* Шапка страницы */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter">Вакансии</h1>
                        <p className="text-slate-500 text-sm mt-2 font-medium">Актуальные предложения о работе в нашем центре</p>
                    </div>

                    {isAdmin && (
                        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                            <DialogTrigger asChild>
                                <button className="bg-[#00B5C4] text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center shadow-xl shadow-[#00B5C4]/20">
                                    <Plus className="w-5 h-5 mr-2" /> Добавить вакансию
                                </button>
                            </DialogTrigger>
                            <DialogContent className="rounded-[2.5rem] p-8 bg-white border-none shadow-2xl">
                                <DialogHeader><DialogTitle className="font-black uppercase text-2xl tracking-tighter text-slate-800">Новая вакансия</DialogTitle></DialogHeader>
                                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                                    <input name="title" required placeholder="Название должности" className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4] border-none" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input name="salary" placeholder="Зарплата (напр. 250к)" className="bg-slate-50 rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4] border-none" />
                                        <input name="experience" placeholder="Опыт работы" className="bg-slate-50 rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4] border-none" />
                                    </div>

                                    <textarea name="description" required rows={6} placeholder="Подробное описание, требования и контакты" className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4] border-none" />
                                    <button type="submit" className="w-full bg-[#00B5C4] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-colors mt-2">Опубликовать вакансию</button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>

                {isLoading ? (
                    <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00B5C4]"></div></div>
                ) : (
                    <>
                        {/* МОБИЛЬНАЯ ВЕРСИЯ (АККОРДЕОНЫ) */}
                        <div className="block md:hidden space-y-4">
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {vacancies.map((v) => (
                                    <AccordionItem key={v.id} value={v.id} className="bg-white border border-slate-100 rounded-[2rem] px-6 overflow-hidden shadow-sm">
                                        <AccordionTrigger className="hover:no-underline py-6">
                                            <div className="flex flex-col items-start text-left gap-2">
                                                <span className="text-lg font-black text-slate-800 uppercase tracking-tighter leading-tight">{v.title}</span>
                                                <div className="flex gap-2">
                                                    {v.salary && <span className="text-[9px] font-black text-green-600 uppercase bg-green-50 px-2 py-1 rounded-lg">{v.salary}</span>}
                                                    <span className="text-[9px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-lg">{v.experience || 'Без опыта'}</span>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-8 pt-2 text-slate-600">
                                            <div className="prose prose-sm mb-6 font-medium leading-relaxed whitespace-pre-wrap">
                                                {v.description}
                                            </div>
                                            <div className="flex items-center justify-between border-t border-slate-50 pt-5">
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                                    {v.created_at ? new Date(v.created_at).toLocaleDateString('ru-RU') : 'Сегодня'}
                                                </span>
                                                {isAdmin && (
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); if (confirm("Удалить?")) deleteVacancy(v.id).then(load); }}
                                                        className="p-3 text-red-400 bg-red-50 rounded-2xl active:scale-90 transition-all"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* ПК ВЕРСИЯ (СЕТКА КАРТОЧЕК) */}
                        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                            {vacancies.map((v) => (
                                <div key={v.id} className="bg-white border border-slate-100 rounded-[3rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all group relative flex flex-col justify-between overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-14 h-14 bg-[#00B5C4]/10 rounded-2xl flex items-center justify-center text-[#00B5C4]">
                                                <Briefcase className="w-7 h-7" />
                                            </div>
                                            {isAdmin && (
                                                <button
                                                    onClick={async (e) => {
                                                        e.preventDefault();
                                                        if (confirm("Вы точно хотите удалить вакансию?")) {
                                                            try {
                                                                console.log("Удаляем ID:", v.id);
                                                                await deleteVacancy(v.id);
                                                                console.log("Удалено, обновляем список...");
                                                                await load();
                                                            } catch (error) {
                                                                console.error("Ошибка при удалении:", error);
                                                                alert("Не удалось удалить. Проверь консоль.");
                                                            }
                                                        }
                                                    }}
                                                    className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-black text-slate-800 uppercase tracking-tighter mb-4 leading-tight group-hover:text-[#00B5C4] transition-colors">
                                            {v.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-50 px-4 py-2 rounded-xl">
                                                <Clock className="w-3.5 h-3.5 mr-2" /> {v.experience || 'Без опыта'}
                                            </div>
                                            {v.salary && (
                                                <div className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-4 py-2 rounded-xl">
                                                    {v.salary}
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8 line-clamp-5 whitespace-pre-wrap ">
                                            {v.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border-t pt-8 border-slate-50 relative z-10">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                            Опубликовано: {v.created_at ? new Date(v.created_at).toLocaleDateString('ru-RU') : 'Недавно'}
                                        </span>
                                    </div>

                                    {/* Декоративный фон карточки */}
                                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </AppShell>
    )
}