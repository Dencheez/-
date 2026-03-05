"use client"

import { AppShell } from "@/components/app-shell"
import { useAppointments } from "@/components/appointment-context"
import { supabase } from "@/app/lib/supabase"
import {
  User,
  CalendarDays,
  Clock,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  Phone,
  Mail,
  Shield,
  XCircle,
  Edit3,
  Save,
  Loader2,
} from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useUser, Show, SignInButton } from "@clerk/nextjs";

type Tab = "appointments" | "info" | "settings" | "admin"

type SiteContentRow = {
  id: number
  section_name: string
  content: string
}

function ClientProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("appointments")
  const { appointments, cancelAppointment } = useAppointments()

  const upcoming = appointments.filter((a) => a.status === "upcoming")
  const past = appointments.filter((a) => a.status === "completed" || a.status === "cancelled")

  const { user } = useUser()
  const fullName =
    user?.fullName || `${user?.firstName || "Пациент"} ${user?.lastName || ""}`.trim()

  return (
    <div className="p-4">
      {/* Profile Header */}
      <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
          {fullName ? fullName[0] : "П"}
        </div>
        <div className="flex-1">
          <h1 className="text-base font-bold text-foreground">{fullName || "Профиль пациента"}</h1>
          <p className="text-xs text-muted-foreground">
            {user?.primaryEmailAddress?.emailAddress || "email не указан"}
          </p>
          <p className="mt-1 text-xs text-primary font-medium">ОСМС статус: уточняется</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex rounded-xl bg-secondary p-1">
        {[
          { key: "appointments" as Tab, label: "Записи", icon: CalendarDays },
          { key: "info" as Tab, label: "Данные", icon: FileText },
          { key: "settings" as Tab, label: "Настройки", icon: Settings },
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold transition-colors ${activeTab === tab.key ? "bg-card text-primary shadow-sm" : "text-muted-foreground"
                }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Appointments Tab */}
      {activeTab === "appointments" && (
        <div className="mt-4">
          {/* Quick Action */}
          <Link
            href="/appointment"
            className="flex items-center justify-between rounded-2xl bg-primary p-4 text-primary-foreground shadow-lg"
          >
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5" />
              <span className="text-sm font-bold">Записаться на приём</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </Link>

          {/* Upcoming Appointments */}
          {upcoming.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm font-bold text-foreground">Предстоящие записи</h3>
              <div className="mt-3 flex flex-col gap-3">
                {upcoming.map((appt) => (
                  <div key={appt.id} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-bold text-foreground">{appt.doctorName}</p>
                        <p className="text-xs text-primary">{appt.specialty}</p>
                      </div>
                      <span className="rounded-lg bg-[#E6FAF5] px-2.5 py-1 text-[10px] font-semibold text-[#0D9488]">
                        Активна
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-foreground">{appt.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-foreground">{appt.time}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => cancelAppointment(appt.id)}
                      className="mt-3 flex items-center gap-1 text-xs font-medium text-destructive"
                    >
                      <XCircle className="h-3.5 w-3.5" />
                      Отменить запись
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Appointments */}
          {past.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm font-bold text-foreground">История</h3>
              <div className="mt-3 flex flex-col gap-3">
                {past.map((appt) => (
                  <div
                    key={appt.id}
                    className="rounded-2xl border border-border bg-card p-4 shadow-sm opacity-70"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-bold text-foreground">{appt.doctorName}</p>
                        <p className="text-xs text-muted-foreground">{appt.specialty}</p>
                      </div>
                      <span
                        className={`rounded-lg px-2.5 py-1 text-[10px] font-semibold ${appt.status === "completed"
                          ? "bg-secondary text-muted-foreground"
                          : "bg-[#FFE8E8] text-destructive"
                          }`}
                      >
                        {appt.status === "completed" ? "Завершена" : "Отменена"}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{appt.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{appt.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {upcoming.length === 0 && past.length === 0 && (
            <div className="mt-8 flex flex-col items-center text-center">
              <CalendarDays className="h-12 w-12 text-muted-foreground/40" />
              <p className="mt-3 text-sm font-medium text-muted-foreground">У вас пока нет записей</p>
              <Link
                href="/appointment"
                className="mt-4 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground"
              >
                Записаться
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Info Tab */}
      {activeTab === "info" && (
        <div className="mt-4 flex flex-col gap-3">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-bold text-foreground">Личные данные</h3>
            <div className="mt-3 flex flex-col gap-3">
              {[
                { icon: User, label: "ФИО", value: fullName || "Не указано" },
                {
                  icon: Mail,
                  label: "Email",
                  value: user?.primaryEmailAddress?.emailAddress || "Не указан",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-[10px] text-muted-foreground">{item.label}</p>
                      <p className="text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-bold text-foreground">Статус ОСМС</h3>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#0D9488]" />
              <span className="text-sm text-foreground">Информация уточняется</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              После интеграции с ОСМС здесь появится актуальный статус.
            </p>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="mt-4 flex flex-col gap-2">
          {[
            { icon: User, label: "Редактировать профиль" },
            { icon: Shield, label: "Безопасность" },
            { icon: FileText, label: "Документы" },
            { icon: Phone, label: "Уведомления" },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:bg-secondary"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function AdminDashboard() {
  const { user } = useUser()
  const [rows, setRows] = useState<SiteContentRow[]>([])
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<number | null>(null)

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
    await supabase.from("site_content").update({ content: row.content }).eq("id", row.id)
    setSavingId(null)
  }

  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <h1 className="text-base font-bold text-foreground">Панель администратора / врача</h1>
        <p className="mt-1 text-xs text-muted-foreground">
          {user?.fullName} ({user?.primaryEmailAddress?.emailAddress})
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Здесь вы можете быстро менять ключевые тексты на сайте (телефон, название клиники, блоки
          контента).
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-foreground">
            Редактор содержимого сайта (Supabase)
          </h2>
        </div>

        {loading ? (
          <p className="text-xs text-muted-foreground">Загрузка данных…</p>
        ) : (
          <div className="space-y-3">
            {rows.map((row) => (
              <div
                key={row.id}
                className="rounded-xl border border-border bg-background p-3 text-xs space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-foreground">{row.section_name}</span>
                  <button
                    onClick={() => handleSave(row)}
                    disabled={savingId === row.id}
                    className="inline-flex items-center gap-1 rounded-lg bg-primary px-2 py-1 text-[11px] font-medium text-primary-foreground disabled:opacity-60"
                  >
                    {savingId === row.id ? (
                      <>
                        <Loader2 className="h-3 w-3 animate-spin" />
                        Сохранение…
                      </>
                    ) : (
                      <>
                        <Save className="h-3 w-3" />
                        Сохранить
                      </>
                    )}
                  </button>
                </div>
                <textarea
                  className="mt-1 w-full rounded-lg border border-border bg-card p-2 text-xs leading-relaxed focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  rows={3}
                  value={row.content}
                  onChange={(e) =>
                    setRows((prev) =>
                      prev.map((r) => (r.id === row.id ? { ...r, content: e.target.value } : r))
                    )
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const { user } = useUser()

  // ВРЕМЕННЫЙ ДОСТУП:
  const adminEmails = ["admin@example.com", "doctor@example.com"]

  const email = user?.primaryEmailAddress?.emailAddress || ""
  const isAdmin = adminEmails.includes(email)
  const role: "client" | "admin" = isAdmin ? "admin" : "client"

  return (
    <AppShell>
      <Show when="signed-out">
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-4 text-center">
          <p className="text-sm text-foreground">
            Для доступа к личному кабинету войдите или зарегистрируйтесь.
          </p>
          <SignInButton mode="modal">
            <button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground">
              Войти / зарегистрироваться
            </button>
          </SignInButton>
        </div>
      </Show>

      <Show when="signed-in">{role === "client" ? <ClientProfile /> : <AdminDashboard />}</Show>
    </AppShell>
  )
}
