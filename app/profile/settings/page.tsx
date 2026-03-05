"use client"

import { AppShell } from "@/components/app-shell"
import { useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { supabase } from "@/app/lib/supabase"
import {
    User,
    Save,
    Loader2,
    ChevronLeft,
    Mail,
    ShieldCheck,
    CheckCircle2,
    AlertCircle
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
    const { user, isLoaded } = useUser()
    const router = useRouter()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [isSaving, setIsSaving] = useState(false)
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName || "")
            setLastName(user.lastName || "")
        }
    }, [user])

    async function handleUpdate() {
        if (!user || isSaving) return

        setIsSaving(true)
        setStatus("idle")

        try {
            // 1. Update Clerk
            await user.update({
                firstName,
                lastName,
            })

            // 2. Update Supabase (sync)
            const { error } = await supabase
                .from("profiles")
                .upsert({
                    id: user.id,
                    first_name: firstName,
                    last_name: lastName,
                    email: user.primaryEmailAddress?.emailAddress || "",
                })

            if (error) throw error

            setStatus("success")
            setTimeout(() => setStatus("idle"), 3000)
        } catch (err) {
            console.error("Error updating profile:", err)
            setStatus("error")
        } finally {
            setIsSaving(false)
        }
    }

    if (!isLoaded) return null

    return (
        <AppShell>
            <div className="p-4 space-y-6 max-w-2xl mx-auto">
                {/* Navigation */}
                <Link
                    href="/profile"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Вернуться в профиль
                </Link>

                {/* Header */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-foreground">Настройки профиля</h1>
                    <p className="text-sm text-muted-foreground">
                        Управляйте вашими личными данными и доступом
                    </p>
                </div>

                {/* Main Settings Card */}
                <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                    <div className="p-5 space-y-5">
                        {/* Account Status Info */}
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-foreground">Статус аккаунта</p>
                                <p className="text-[11px] text-muted-foreground">
                                    Ваш профиль верифицирован через Clerk
                                </p>
                            </div>
                        </div>

                        {/* Email (Read Only) */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-1">
                                E-mail (логин)
                            </label>
                            <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-4 py-3 opacity-60">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{user?.primaryEmailAddress?.emailAddress}</span>
                            </div>
                        </div>

                        {/* First Name */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-1">
                                Имя
                            </label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                placeholder="Ваше имя"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-1">
                                Фамилия
                            </label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                placeholder="Ваша фамилия"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                onClick={handleUpdate}
                                disabled={isSaving}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:shadow-none"
                            >
                                {isSaving ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Сохранение изменений…
                                    </>
                                ) : (
                                    <>
                                        <Save className="h-4 w-4" />
                                        Сохранить изменения
                                    </>
                                )}
                            </button>

                            {/* Feedback messages */}
                            {status === "success" && (
                                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-green-600 animate-in fade-in slide-in-from-top-1">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Данные успешно обновлены
                                </p>
                            )}
                            {status === "error" && (
                                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-destructive animate-in shake">
                                    <AlertCircle className="h-4 w-4" />
                                    Ошибка при сохранении. Попробуйте позже.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Security Info */}
                <div className="rounded-2xl bg-secondary/30 p-4 border border-border border-dashed">
                    <p className="text-[11px] leading-relaxed text-muted-foreground text-center">
                        Все изменения мгновенно синхронизируются с нашей базой данных и сервисом авторизации Clerk.
                        Для смены пароля или настройки двухфакторной аутентификации используйте стандартную форму Clerk.
                    </p>
                </div>
            </div>
        </AppShell>
    )
}
