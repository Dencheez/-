"use client"

import { AppShell } from "@/components/app-shell"
import { supabase } from "@/app/lib/supabase"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import {
    Save,
    Loader2,
    LayoutDashboard,
    FileText,
    Settings,
    ChevronRight,
    Plus,
    Link
} from "lucide-react"

type SiteContentRow = {
    id: number
    section_name: string
    content: string
}

export default function AdminDashboard() {
    const { user, isLoaded } = useUser()

    const [rows, setRows] = useState<SiteContentRow[]>([])
    const [loading, setLoading] = useState(true)
    const [savingId, setSavingId] = useState<number | null>(null)

    const isAdmin = user?.publicMetadata?.role === "admin";

    if (!isLoaded) return null;

    if (!isAdmin) {
        return (
            <AppShell>
                <div className="flex items-center justify-center h-[60vh]">
                    <p className="text-destructive font-bold text-xl">
                        Доступ запрещен. У вас нет прав администратора.
                    </p>
                </div>
            </AppShell>
        );
    }

    useEffect(() => {
        async function load() {
            setLoading(true)
            const { data } = await supabase
                .from("site_content")
                .select("id, section_name, content")
                .order("section_name", { ascending: true })
            setRows((data as SiteContentRow[]) || [])
            setLoading(false)
        }
        load()
    }, [])

    async function handleSave(row: SiteContentRow) {
        setSavingId(row.id)
        const { error } = await supabase
            .from("site_content")
            .update({ content: row.content })
            .eq("id", row.id)

        if (error) {
            console.error("Error saving content:", error)
            alert("Ошибка при сохранении")
        }
        setSavingId(null)
    }

    if (!isLoaded) return null

    return (
        <AppShell>
            <div className="p-4 space-y-6 max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <LayoutDashboard className="h-6 w-6 text-primary" />
                        Панель управления
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Управление контентом сайта и настройками клиники
                    </p>
                </div>

                {/* Stats / Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Администратор</p>
                        <p className="mt-1 text-sm font-semibold truncate">{user?.fullName}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Роль</p>
                        <p className="mt-1 text-sm font-semibold text-primary">
                            {(user?.publicMetadata?.role as string) || "Персонал"}
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">База данных</p>
                        <p className="mt-1 text-sm font-semibold text-green-600">Подключено</p>
                    </div>
                </div>

                {/* Content Editor */}
                <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                    <div className="border-b border-border bg-muted/30 px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            <h2 className="text-sm font-bold text-foreground">Редактор содержимого сайта</h2>
                        </div>
                    </div>

                    <div className="p-5">
                        {loading ? (
                            <div className="flex items-center justify-center py-12">
                                <Loader2 className="h-8 w-8 animate-spin text-primary/40" />
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {rows.length === 0 && (
                                    <p className="text-sm text-center text-muted-foreground py-8">
                                        Данные не найдены в таблице site_content
                                    </p>
                                )}
                                {rows.map((row) => (
                                    <div
                                        key={row.id}
                                        className="group rounded-xl border border-border bg-background p-4 transition-all hover:shadow-md hover:border-primary/20"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-block w-2 h-2 rounded-full bg-primary/40" />
                                                <span className="font-bold text-sm text-foreground">{row.section_name}</span>
                                            </div>
                                            <button
                                                onClick={() => handleSave(row)}
                                                disabled={savingId === row.id}
                                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-60"
                                            >
                                                {savingId === row.id ? (
                                                    <>
                                                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                                        Сохранение…
                                                    </>
                                                ) : (
                                                    <>
                                                        <Save className="h-3.5 w-3.5" />
                                                        Сохранить изменения
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <textarea
                                            className="w-full rounded-xl border border-border bg-card p-3 text-sm leading-relaxed focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all min-h-[100px]"
                                            value={row.content}
                                            onChange={(e) =>
                                                setRows((prev) =>
                                                    prev.map((r) => (r.id === row.id ? { ...r, content: e.target.value } : r))
                                                )
                                            }
                                            placeholder="Введите содержимое..."
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
                    <Link
                        href="/profile"
                        className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 hover:bg-secondary transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Settings className="h-5 w-5 text-primary" />
                            <span className="text-sm font-semibold">Настройки профиля</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                    <button className="flex items-center justify-between rounded-2xl border border-dashed border-border p-4 hover:bg-secondary transition-colors opacity-60">
                        <div className="flex items-center gap-3">
                            <Plus className="h-5 w-5" />
                            <span className="text-sm font-semibold">Добавить секцию (скоро)</span>
                        </div>
                    </button>
                </div>
            </div>
        </AppShell>
    )
}
