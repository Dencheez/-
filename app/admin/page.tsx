"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/app/lib/supabase"
import { AppShell } from "@/components/app-shell"
import {
    User,
    Calendar,
    Phone,
    FileText,
    Loader2,
    XCircle,
    Users,
    Clock,
    RotateCcw,
    Check
} from "lucide-react"

function AdminDashboard() {
    const searchParams = useSearchParams()
    const [appointments, setAppointments] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const searchQuery = searchParams.get("search")?.toLowerCase() || ""

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

    const toggleStatus = async (id: number, currentStatus: string) => {
        // Логика под твои статусы: upcoming <-> completed
        const newStatus = currentStatus === 'completed' ? 'upcoming' : 'completed';

        setAppointments(prev => prev.map(appt =>
            appt.id === id ? { ...appt, status: newStatus } : appt
        ));

        const { error } = await supabase
            .from("appointments")
            .update({ status: newStatus })
            .eq("id", id);

        if (error) {
            setAppointments(prev => prev.map(appt =>
                appt.id === id ? { ...appt, status: currentStatus } : appt
            ));
        }
    };


    const filteredClients = useMemo(() => {
        if (!searchQuery) return appointments;
        return appointments.filter((client) =>
            client.patient_name?.toLowerCase().includes(searchQuery) ||
            client.doctor_name?.toLowerCase().includes(searchQuery) ||
            client.phone?.includes(searchQuery)
        )
    }, [appointments, searchQuery])

    if (loading) return (
        <div className="flex h-[60vh] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary/30" />
        </div>
    )

    return (
        <div className="p-4 max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between bg-card border border-border p-6 rounded-[2.5rem] shadow-sm">
                <h1 className="text-2xl font-black text-foreground flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Панель управления
                </h1>
                <div className="bg-primary/5 px-6 py-2 rounded-2xl border border-primary/10">
                    <p className="text-xl font-black text-primary">{appointments.length}</p>
                </div>
            </div>

            <div className="grid gap-4">
                {filteredClients.map((client) => {
                    // Теперь проверяем статус 'completed' из твоей базы
                    const isDone = client.status === 'completed';

                    return (
                        <div
                            key={client.id}
                            className={`relative bg-card border border-border rounded-[2.5rem] p-6 transition-all shadow-sm ${isDone ? 'bg-zinc-50 opacity-80' : 'hover:border-primary/40'
                                }`}
                        >
                            {/* КНОПКА: Переключения статуса */}
                            <div className="absolute top-6 right-6 flex flex-col items-end gap-2 z-[100]">
                                <div className={`px-3 py-1 text-[10px] font-black rounded-full border uppercase ${isDone ? 'bg-zinc-200 text-zinc-600' : 'bg-green-100 text-green-700 border-green-200'
                                    }`}>
                                    {isDone ? 'Завершена' : 'Активна'}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => toggleStatus(client.id, client.status)}
                                    className="fixed top-10 right-10 z-[999] bg-red-600 text-white px-10 py-4 rounded-full font-black shadow-2xl hover:scale-105 transition-all"
                                >
                                    ТЕСТОВАЯ КНОПКА
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 pr-[180px]">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <User className="h-7 w-7 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-xl text-foreground truncate">
                                            {client.patient_name || "Без имени"}
                                        </h3>
                                        <p className="text-xs font-bold text-primary uppercase mt-1">
                                            {client.service_type || "Психотерапевт"}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl text-sm border border-border shadow-sm">
                                        <Calendar className="h-4 w-4 text-primary" />
                                        <span className="font-bold">{client.date}</span>
                                        <Clock className="h-4 w-4 text-primary ml-2" />
                                        <span className="font-bold">{client.time || "12:00"}</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl text-sm border border-border shadow-sm">
                                        <Phone className="h-4 w-4 text-primary" />
                                        <span className="font-mono font-black">{client.phone || "+7 (777) 000-00-00"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default function AdminPage() {
    return (
        <AppShell>
            <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary" /></div>}>
                <AdminDashboard />
            </Suspense>
        </AppShell>
    )
}