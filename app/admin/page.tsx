"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/app/lib/supabase"
import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import {
    Users,
    Loader2,
    Calendar,
    Phone,
    Check,
    RotateCcw,
    Newspaper,
    Megaphone,
    HeartPulse,
    Info,
    Briefcase,
    ShoppingBag
} from "lucide-react"

function AdminDashboard() {
    const searchParams = useSearchParams()
    const [appointments, setAppointments] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const searchQuery = searchParams.get("search")?.toLowerCase() || ""

    // 1. Загружаем только записи (контент теперь по ссылкам)
    useEffect(() => {
        async function fetchAppointments() {
            setLoading(true)
            const { data, error } = await supabase
                .from("appointments")
                .select("*")
                .order("created_at", { ascending: false })

            if (!error) setAppointments(data || [])
            setLoading(false)
        }
        fetchAppointments()
    }, [])

    // 2. Логика переключения статуса записи
    const toggleStatus = async (id: number, currentStatus: string) => {
        const newStatus = currentStatus === 'completed' ? 'upcoming' : 'completed'

        setAppointments(prev => prev.map(appt =>
            appt.id === id ? { ...appt, status: newStatus } : appt
        ))

        const { error } = await supabase
            .from("appointments")
            .update({ status: newStatus })
            .eq("id", id)

        if (error) {
            setAppointments(prev => prev.map(appt =>
                appt.id === id ? { ...appt, status: currentStatus } : appt
            ))
        }
    }

    const filteredAppointments = useMemo(() => {
        if (!searchQuery) return appointments
        return appointments.filter((appt) =>
            appt.patient_name?.toLowerCase().includes(searchQuery) ||
            appt.phone?.includes(searchQuery)
        )
    }, [appointments, searchQuery])

    if (loading) return (
        <div className="flex h-[60vh] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#00B5C4]/30" />
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
                <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-4 py-2 rounded-full">
                    Режим Администратора
                </div>
            </div>

            {/* СЕКЦИЯ 1: УПРАВЛЕНИЕ КОНТЕНТОМ (КНОПКИ) */}
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
                <div className="mb-8">
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800">Публикации</h2>
                    <p className="text-slate-500 text-sm">Управление новостями, статьями и вакансиями</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AdminLink href="/news" icon={<Newspaper />} label="Новости" />
                    <AdminLink href="/announcement" icon={<Megaphone />} label="Объявления" />
                    <AdminLink href="/zozh" icon={<HeartPulse />} label="ЗОЖ" />
                    <AdminLink href="/info" icon={<Info />} label="Инфо-блок" />
                    <AdminLink href="/vacancies" icon={<Briefcase />} label="Вакансии" />
                    <AdminLink href="/goszakup" icon={<ShoppingBag />} label="Закупки" />
                </div>
            </div>

            {/* СЕКЦИЯ 2: ЗАПИСИ ПАЦИЕНТОВ */}
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
                <div className="mb-8">
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800">Записи на прием</h2>
                    <p className="text-slate-500 text-sm font-medium">Всего заявок: {filteredAppointments.length}</p>
                </div>

                <div className="space-y-4">
                    {filteredAppointments.map((appt) => (
                        <div key={appt.id} className="flex flex-col md:flex-row items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${appt.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-[#00B5C4]/10 text-[#00B5C4]'}`}>
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-black uppercase text-slate-800 tracking-tight">{appt.patient_name}</h4>
                                    <div className="flex items-center gap-3 text-slate-500 text-xs mt-1">
                                        <span className="flex items-center gap-1 font-bold uppercase tracking-widest"><Phone className="w-3 h-3" /> {appt.phone}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => toggleStatus(appt.id, appt.status)}
                                className={`w-full md:w-auto px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${appt.status === 'completed'
                                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                                        : 'bg-white border-2 border-slate-200 text-slate-400 hover:border-[#00B5C4] hover:text-[#00B5C4]'
                                    }`}
                            >
                                {appt.status === 'completed' ? <Check className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                                {appt.status === 'completed' ? 'Завершено' : 'В ожидании'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Мини-компонент для кнопок навигации
function AdminLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <Link href={href} className="group p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#00B5C4] hover:border-[#00B5C4] transition-all duration-300">
            <div className="text-slate-400 group-hover:text-white/80 mb-4 transition-colors">
                {icon}
            </div>
            <h3 className="font-black uppercase tracking-widest text-[10px] text-slate-400 group-hover:text-white/70 mb-1">Раздел</h3>
            <div className="text-lg font-black uppercase tracking-tighter text-slate-800 group-hover:text-white">{label}</div>
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