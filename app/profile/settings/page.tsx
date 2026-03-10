"use client"

import { AppShell } from "../../../components/app-shell"
import { useUser, useAuth } from "@clerk/nextjs"
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
    const { getToken } = useAuth()
    const router = useRouter()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [isSaving, setIsSaving] = useState(false)
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

    useEffect(() => {
        const fetchProfile = async () => {
            if (!user?.id) return;
            const { data, error } = await supabase
                .from('profile')
                .select('*')
                .eq('id', user.id)
                .maybeSingle();

            if (data) {
                setFirstName(data.first_name || "");
                setLastName(data.last_name || "");
            }
            if (error) console.error("Ошибка:", error.message);
        };

        if (isLoaded && user) fetchProfile();
    }, [user, isLoaded]);

    async function handleUpdate() {
        if (!user || isSaving) return
        setIsSaving(true)
        setStatus("idle")
        try {
            await user.update({ firstName, lastName })
            const { error } = await supabase
                .from('profile')
                .upsert({
                    id: user.id,
                    first_name: firstName,
                    last_name: lastName,
                    email: user.emailAddresses[0].emailAddress
                }, { onConflict: 'id' })

            if (error) throw error
            setStatus("success")
            setTimeout(() => setStatus("idle"), 3000)
        } catch (err) {
            console.error(err)
            setStatus("error")
        } finally {
            setIsSaving(false)
        }
    }

    if (!isLoaded) return null

    return (
        <AppShell>
            {/* На мобилках px-4, на десктопе auto */}
            <div className="p-4 md:py-8 space-y-5 md:space-y-6 max-w-2xl mx-auto">
                <Link
                    href="/profile"
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Вернуться в профиль
                </Link>

                <div className="flex flex-col gap-1">
                    <h1 className="text-xl md:text-2xl font-bold text-foreground">Настройки профиля</h1>
                    <p className="text-xs md:text-sm text-muted-foreground">
                        Управляйте вашими личными данными и доступом
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                    <div className="p-4 md:p-6 space-y-4 md:space-y-5">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border">
                            <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs font-bold text-foreground">Статус аккаунта</p>
                                <p className="text-[9px] md:text-[11px] text-muted-foreground">
                                    Верифицирован через Clerk
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-1">
                                E-mail (логин)
                            </label>
                            <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-3 md:px-4 py-2.5 md:py-3 opacity-70">
                                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                                <span className="text-xs md:text-sm truncate">{user?.primaryEmailAddress?.emailAddress}</span>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-1">
                                Имя
                            </label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full rounded-xl border border-border bg-background px-3 md:px-4 py-2.5 md:py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                placeholder="Ваше имя"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-1">
                                Фамилия
                            </label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full rounded-xl border border-border bg-background px-3 md:px-4 py-2.5 md:py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                placeholder="Ваша фамилия"
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                onClick={handleUpdate}
                                disabled={isSaving}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 md:py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-60 disabled:scale-100"
                            >
                                {isSaving ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        <span>Сохранение...</span>
                                    </>
                                ) : (
                                    <>
                                        <Save className="h-4 w-4" />
                                        <span>Сохранить изменения</span>
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] md:text-xs font-medium text-green-600">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Успешно обновлено
                                </p>
                            )}
                            {status === "error" && (
                                <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] md:text-xs font-medium text-destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    Ошибка при сохранении
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl bg-secondary/30 p-3 md:p-4 border border-border border-dashed">
                    <p className="text-[10px] md:text-[11px] leading-relaxed text-muted-foreground text-center">
                        Синхронизация с базой данных и сервисом Clerk.
                    </p>
                </div>
            </div>
        </AppShell>
    )
}