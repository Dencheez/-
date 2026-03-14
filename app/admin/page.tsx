import React, { useState, useEffect, useMemo, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
    Users, Newspaper, Megaphone, ShoppingBag,
    Briefcase, HeartPulse, Info, Calendar,
    Phone, Check, RotateCcw, Loader2, PlusCircle
} from "lucide-react"
import { supabase } from "@/lib/supabase" // Проверь путь к supabase
import { AppShell } from "@/components/app-shell"

function AdminDashboard() {
    const searchParams = useSearchParams()
    const [appointments, setAppointments] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const searchQuery = searchParams.get("search")?.toLowerCase() || ""

    useEffect(() => {
        async function fetchAppointments() {
            setLoading(true)
            try {
                const { data, error } = await supabase
                    .from("appointments")
                    .select("*")
                    .order("created_at", { ascending: false })

                if (!error && data) {
                    setAppointments(Array.isArray(data) ? data : [])
                }
            } catch (e) {
                console.error("Ошибка загрузки заявок:", e)
            } finally {
                setLoading(false)
            }
        }
        fetchAppointments()
    }, [])

    const toggleStatus = async (id: number, currentStatus: string) => {
        const newStatus = currentStatus === 'completed' ? 'upcoming' : 'completed'

        // Оптимистичное обновление
        setAppointments(prev => prev.map(appt =>
            appt.id === id ? { ...appt, status: newStatus } : appt
        ))

        const { error } = await supabase
            .from("appointments")
            .update({ status: newStatus })
            .eq("id", id)

        if (error) {
            // Откат при ошибке
            setAppointments(prev => prev.map(appt =>
                appt.id === id ? { ...appt, status: currentStatus } : appt
            ))
        }
    }

    const filteredAppointments = useMemo(() => {
        if (!Array.isArray(appointments)) return []
        if (!searchQuery) return appointments
        return appointments.filter((appt) =>
            appt?.patient_name?.toLowerCase().includes(searchQuery) ||
            appt?.phone?.includes(searchQuery)
        )
    }, [appointments, searchQuery])

    if (loading) return (
        <div className="flex h-[60vh] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#00B5C4]" />
        </div>
    )

    return (
        <div className="p-4 max-w-6xl mx-auto space-y-10">
            {/* ШАПКА ПАНЕЛИ */}
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="text-3xl font-black text-slate-800 flex items-center gap-3 uppercase tracking-tighter">
                    <Users className="h-8 w-8 text-[#00B5C4]" />
                    Панель управления
                </h1>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                    Admin Mode
                </div>
            </div>

            {/* УПРАВЛЕНИЕ КОНТЕНТОМ */}
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
                <div className="mb-8 flex justify-between items-end">
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800">Контент</h2>
                        <p className="text-slate-500 text-sm">Выберите раздел для добавления записей</p>
                    </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
                    <div className="mb-8">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800">Разделы</h2>
                        <p className="text-slate-500 text-sm">Управление контентом сайта</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <AdminLink href="/admin/news" icon={<Newspaper />} label="Новости" />
                        <AdminLink href="/admin/announcements" icon={<Megaphone />} label="Объявления" />
                        <AdminLink href="/admin/goszakup" icon={<ShoppingBag />} label="Закупки" />
                        <AdminLink href="/admin/vacancies" icon={<Briefcase />} label="Вакансии" />
                        <AdminLink href="/admin/zozh" icon={<HeartPulse />} label="ЗОЖ" />
                        <AdminLink href="/admin/info" icon={<Info />} label="Инфо-блок" />
                    </div>
                </div>
            </div>

            {/* ЗАПИСИ ПАЦИЕНТОВ */}
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
                <div className="mb-8">
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800">Заявки на прием</h2>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">
                        Всего: {filteredAppointments.length}
                    </p>
                </div>

                <div className="space-y-3">
                    {filteredAppointments.length === 0 ? (
                        <div className="text-center py-10 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                            Заявок не найдено
                        </div>
                    ) : (
                        filteredAppointments.map((appt) => (
                            <div key={appt.id} className="flex flex-col md:flex-row items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 gap-4 hover:border-[#00B5C4]/30 transition-colors">
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${appt.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-[#00B5C4]/10 text-[#00B5C4]'
                                        }`}>
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase text-sm text-slate-800 tracking-tight">
                                            {appt.patient_name}
                                        </h4>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-400 text-[10px] mt-0.5">
                                            <span className="flex items-center gap-1 font-black uppercase tracking-widest leading-none">
                                                <Phone className="w-3 h-3 text-[#00B5C4]" /> {appt.phone}
                                            </span>
                                            <span className="hidden sm:block text-slate-200">|</span>
                                            <span className="font-bold">
                                                {new Date(appt.created_at).toLocaleDateString('ru-RU')}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    <button
                                        onClick={() => toggleStatus(appt.id, appt.status)}
                                        className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-black uppercase tracking-[0.1em] text-[10px] transition-all flex items-center justify-center gap-2 ${appt.status === 'completed'
                                            ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                                            : 'bg-white border border-slate-200 text-slate-400 hover:border-[#00B5C4] hover:text-[#00B5C4]'
                                            }`}
                                    >
                                        {appt.status === 'completed' ? (
                                            <>
                                                <Check className="w-3 h-3" />
                                                <span>Обработано</span>
                                            </>
                                        ) : (
                                            <>
                                                <RotateCcw className="w-3 h-3" />
                                                <span>В обработку</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

function AdminLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <Link href={href} className="group relative overflow-hidden p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-slate-900 transition-all duration-500">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm text-slate-400 group-hover:text-white group-hover:bg-[#00B5C4] transition-all duration-500`}>
                {icon}
            </div>
            <div className="relative z-10">
                <h3 className="font-black uppercase tracking-[0.2em] text-[9px] text-slate-400 group-hover:text-[#00B5C4] mb-1 transition-colors">Перейти в раздел</h3>
                <div className="text-xl font-black uppercase tracking-tighter text-slate-800 group-hover:text-white flex items-center gap-2 transition-colors">
                    {label}
                    <PlusCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
            </div>
        </Link>
    )
}

export default function AdminPage() {
    return (
        <AppShell>
            <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#00B5C4] w-10 h-10" /></div>}>
                <AdminDashboard />
            </Suspense>
        </AppShell>
    )
}