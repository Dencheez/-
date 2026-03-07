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
  ChevronRight,
  Mail,
  Shield,
  Phone,
  XCircle,
  Save,
  Loader2,
} from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useUser, Show, SignInButton } from "@clerk/nextjs"

type Tab = "appointments" | "info" | "settings"

type SiteContentRow = {
  id: number
  section_name: string
  content: string
}

function ClientProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("appointments")
  const { appointments, cancelAppointment } = useAppointments()
  const { user } = useUser()

  const upcoming = appointments.filter((a) => a.status === "upcoming")
  const fullName = user?.fullName || `${user?.firstName || "Пациент"} ${user?.lastName || ""}`.trim()

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground text-center">
          {fullName ? fullName[0] : "П"}
        </div>
        <div className="flex-1">
          <h1 className="text-base font-bold text-foreground">{fullName || "Профиль"}</h1>
          <p className="text-xs text-muted-foreground">{user?.primaryEmailAddress?.emailAddress}</p>
          <p className="mt-1 text-xs text-primary font-medium">ОСМС статус: уточняется</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-4 flex rounded-xl bg-secondary p-1">
        {[
          { key: "appointments" as Tab, label: "Записи", icon: CalendarDays },
          { key: "info" as Tab, label: "Данные", icon: FileText },
          { key: "settings" as Tab, label: "Настройки", icon: Settings },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold transition-all ${
              activeTab === tab.key ? "bg-card text-primary shadow-sm" : "text-muted-foreground"
            }`}
          >
            <tab.icon className="h-3.5 w-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="mt-4">
        {activeTab === "appointments" && (
          <div className="space-y-4">
            <Link href="/appointment" className="flex items-center justify-between rounded-2xl bg-primary p-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5" />
                <span className="text-sm font-bold">Записаться на приём</span>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
            {upcoming.map((appt) => (
              <div key={appt.id} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold">{appt.doctorName}</p>
                    <p className="text-xs text-primary">{appt.specialty}</p>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md font-bold">Активна</span>
                </div>
                <button onClick={() => cancelAppointment(appt.id)} className="mt-3 text-xs text-destructive flex items-center gap-1">
                  <XCircle className="h-3.5 w-3.5" /> Отменить запись
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "info" && (
          <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-primary" />
              <div>
                <p className="text-[10px] text-muted-foreground">ФИО</p>
                <p className="text-sm">{fullName}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="flex flex-col gap-2">
            <Link href="/profile/settings" className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 hover:bg-secondary transition-colors">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Редактировать профиль</span>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

function AdminDashboard() {
  const [rows, setRows] = useState<SiteContentRow[]>([])
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<number | null>(null)

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("site_content").select("*").order("section_name")
      setRows((data as SiteContentRow[]) || [])
      setLoading(false)
    }
    load()
  }, [])

  const handleSave = async (row: SiteContentRow) => {
    setSavingId(row.id)
    await supabase.from("site_content").update({ content: row.content }).eq("id", row.id)
    setSavingId(null)
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="font-bold text-lg px-2">Панель администратора</h1>
      {loading ? (
        <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>
      ) : (
        rows.map((row) => (
          <div key={row.id} className="p-3 border rounded-xl bg-card space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-primary uppercase">{row.section_name}</span>
              <button 
                onClick={() => handleSave(row)} 
                className="p-1.5 bg-primary text-white rounded-lg"
              >
                {savingId === row.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
              </button>
            </div>
            <textarea 
              className="w-full text-xs p-2 border rounded-lg bg-background" 
              value={row.content} 
              onChange={(e) => setRows(prev => prev.map(r => r.id === row.id ? {...r, content: e.target.value} : r))}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default function ProfilePage() {
  const { user } = useUser()
  const adminEmails = ["admin@example.com", "doctor@example.com", "foxden482@gmail.com"]
  const isAdmin = adminEmails.includes(user?.primaryEmailAddress?.emailAddress || "")

  return (
    <AppShell>
      <Show when="signed-in">
        {isAdmin ? <AdminDashboard /> : <ClientProfile />}
      </Show>
      <Show when="signed-out">
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">Войдите, чтобы увидеть профиль</p>
          <SignInButton mode="modal">
            <button className="bg-primary text-white px-8 py-2.5 rounded-xl font-bold">Войти</button>
          </SignInButton>
        </div>
      </Show>
    </AppShell>
  )
}