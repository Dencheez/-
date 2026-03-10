"use client"

import { AppShell } from "@/components/app-shell"
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
import { useEffect, useState, useMemo, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useUser, SignInButton } from "@clerk/nextjs"

type Tab = "appointments" | "info" | "settings"

type SiteContentRow = {
  id: number
  section_name: string
  content: string
}

// --- ПРОФИЛЬ КЛИЕНТА ---
function ClientProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("appointments")
  const [myAppointments, setMyAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useUser()

  const fullName = user?.fullName || `${user?.firstName || "Пациент"} ${user?.lastName || ""}`.trim()

  useEffect(() => {
    async function fetchMyData() {
      if (!user?.id) return
      setLoading(true)
      const { data } = await supabase
        .from("appointments")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      setMyAppointments(data || [])
      setLoading(false)
    }
    fetchMyData()
  }, [user?.id])

  return (
    <div className="p-3 md:p-6 max-w-2xl mx-auto">
      {/* Шапка профиля */}
      <div className="flex items-center gap-3 md:gap-4 rounded-2xl bg-card border border-border p-4 md:p-5 shadow-sm">
        <div className="flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg md:text-xl font-bold text-primary-foreground text-center">
          {fullName ? fullName[0] : "П"}
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-sm md:text-base font-bold text-foreground truncate">{fullName || "Профиль"}</h1>
          <p className="text-[10px] md:text-xs text-muted-foreground truncate">{user?.primaryEmailAddress?.emailAddress}</p>
          <p className="mt-1 text-[10px] md:text-xs text-primary font-medium">ОСМС статус: уточняется</p>
        </div>
      </div>

      {/* Табы */}
      <div className="mt-4 flex rounded-xl bg-secondary p-1">
        {[
          { key: "appointments" as Tab, label: "Записи", icon: CalendarDays },
          { key: "info" as Tab, label: "Данные", icon: FileText },
          { key: "settings" as Tab, label: "Настройки", icon: Settings },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-1 items-center justify-center gap-1 md:gap-1.5 rounded-lg py-2 md:py-2.5 text-[10px] md:text-xs font-semibold transition-all ${activeTab === tab.key ? "bg-card text-primary shadow-sm" : "text-muted-foreground"
              }`}
          >
            <tab.icon className="h-3.5 w-3.5" />
            <span className="hidden xs:inline">{tab.label}</span>
            <span className="xs:hidden">{tab.label.slice(0, 4)}.</span>
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "appointments" && (
          <div className="space-y-3 md:space-y-4">
            <Link href="/appointment" className="flex items-center justify-between rounded-xl md:rounded-2xl bg-primary p-3 md:p-4 text-primary-foreground shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5" />
                <span className="text-xs md:text-sm font-bold">Записаться на приём</span>
              </div>
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </Link>

            {loading ? (
              <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>
            ) : myAppointments.length === 0 ? (
              <div className="p-8 text-center border-2 border-dashed rounded-2xl text-muted-foreground text-[11px] md:text-sm">
                У вас пока нет активных записей
              </div>
            ) : (
              myAppointments.map((appt) => (
                <div key={appt.id} className="rounded-xl md:rounded-2xl border border-border bg-card p-3 md:p-4 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div className="min-w-0 pr-2">
                      <p className="text-xs md:text-sm font-bold truncate">{appt.service_type || "Консультация"}</p>
                      <p className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-tight">{appt.date} в {appt.time}</p>
                    </div>
                    <span className={`text-[8px] md:text-[9px] px-2 py-0.5 md:py-1 rounded-md md:rounded-lg font-black shrink-0 ${appt.status === 'upcoming' ? 'bg-emerald-100 text-emerald-700' : 'bg-secondary text-muted-foreground'
                      }`}>
                      {appt.status === 'upcoming' ? 'АКТИВНА' : 'ЗАВЕРШЕНА'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "info" && (
          <div className="rounded-xl md:rounded-2xl border border-border bg-card p-4 space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-primary shrink-0" />
              <div className="min-w-0">
                <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase font-bold">ФИО</p>
                <p className="text-xs md:text-sm font-medium truncate">{fullName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <div className="min-w-0">
                <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase font-bold">Email</p>
                <p className="text-xs md:text-sm font-medium truncate">{user?.primaryEmailAddress?.emailAddress}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="flex flex-col gap-2">
            <Link href="/profile/settings" className="flex items-center justify-between rounded-xl md:rounded-2xl border border-border bg-card p-3 md:p-4 hover:bg-secondary transition-colors active:scale-[0.99]">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Редактировать профиль</span>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

// --- АДМИН-ПАНЕЛЬ ---
function AdminDashboard() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<"content" | "appointments" | "users">("appointments")
  const [contentRows, setContentRows] = useState<SiteContentRow[]>([])
  const [allAppointments, setAllAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<number | null>(null)

  const searchQuery = searchParams.get("search")?.toLowerCase() || ""

  useEffect(() => {
    async function loadAdminData() {
      setLoading(true)
      const [contentRes, apptsRes] = await Promise.all([
        supabase.from("site_content").select("*").order("section_name"),
        supabase.from("appointments").select("*").order("created_at", { ascending: false })
      ])
      setContentRows(contentRes.data || [])
      setAllAppointments(apptsRes.data || [])
      setLoading(false)
    }
    loadAdminData()
  }, [])

  const filteredAppointments = useMemo(() => {
    if (!searchQuery) return allAppointments
    return allAppointments.filter(appt =>
      appt.patient_name?.toLowerCase().includes(searchQuery) ||
      appt.phone?.includes(searchQuery) ||
      appt.service_type?.toLowerCase().includes(searchQuery)
    )
  }, [allAppointments, searchQuery])

  const handleSaveContent = async (row: SiteContentRow) => {
    setSavingId(row.id)
    await supabase.from("site_content").update({ content: row.content }).eq("id", row.id)
    setSavingId(null)
  }

  return (
    <div className="p-3 md:p-6 max-w-3xl mx-auto space-y-4">
      <div className="rounded-xl md:rounded-2xl border border-border bg-card p-4 md:p-5 shadow-sm">
        <h1 className="text-sm md:text-base font-bold text-foreground">Панель управления</h1>
        <p className="text-[9px] md:text-[10px] text-primary font-medium uppercase tracking-wider">Режим администратора</p>
      </div>

      <div className="flex rounded-xl bg-secondary p-1">
        <button
          onClick={() => setActiveTab("appointments")}
          className={`flex-1 py-2 text-[10px] md:text-xs font-semibold rounded-lg transition-all ${activeTab === "appointments" ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}
        >
          Все записи
        </button>
        <button
          onClick={() => setActiveTab("content")}
          className={`flex-1 py-2 text-[10px] md:text-xs font-semibold rounded-lg transition-all ${activeTab === "content" ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}
        >
          Контент
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>
      ) : (
        <div className="space-y-3">
          {activeTab === "appointments" && (
            <div className="space-y-3">
              {filteredAppointments.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
                  <XCircle className="h-8 w-8 mb-2 opacity-20" />
                  <p className="text-[11px]">Ничего не найдено</p>
                </div>
              ) : (
                filteredAppointments.map((appt) => (
                  <div key={appt.id} className="rounded-xl md:rounded-2xl border border-border bg-card p-3 md:p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div className="min-w-0 pr-2">
                        <p className="text-xs md:text-sm font-bold truncate">{appt.patient_name || "Без имени"}</p>
                        <p className="text-[9px] md:text-[10px] text-primary font-bold uppercase">{appt.service_type}</p>
                      </div>
                      <span className={`text-[8px] md:text-[9px] px-2 py-0.5 rounded-md font-black shrink-0 ${appt.status === 'upcoming' ? 'bg-emerald-100 text-emerald-700' : 'bg-secondary text-muted-foreground'}`}>
                        {appt.status === 'upcoming' ? 'АКТИВНА' : 'ЗАВЕРШЕНА'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3 p-2 md:p-3 bg-secondary/50 rounded-lg border border-border/50">
                      <div className="flex items-center gap-2 text-[10px] font-medium truncate">
                        <CalendarDays className="h-3 w-3 text-primary shrink-0" />
                        <span>{appt.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-medium truncate">
                        <Clock className="h-3 w-3 text-primary shrink-0" />
                        <span>{appt.time}</span>
                      </div>
                      {appt.phone && (
                        <div className="flex items-center gap-2 text-[10px] font-medium col-span-2 mt-1 pt-1 border-t border-border/20 truncate">
                          <Phone className="h-3 w-3 text-primary shrink-0" />
                          <span>{appt.phone}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-2 pt-2 border-t border-border">
                      <p className="text-[8px] text-muted-foreground uppercase font-bold mb-1">Причина обращения:</p>
                      <p className="text-[11px] text-foreground leading-snug italic">
                        {appt.reason || "Не указана"}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "content" && contentRows.map((row) => (
            <div key={row.id} className="p-3 border rounded-xl bg-card space-y-2 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-primary uppercase">{row.section_name}</span>
                <button onClick={() => handleSaveContent(row)} className="p-1.5 bg-primary text-white rounded-lg active:scale-90 transition-transform">
                  {savingId === row.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                </button>
              </div>
              <textarea
                className="w-full text-xs p-2 border rounded-lg bg-background min-h-[80px] focus:ring-1 focus:ring-primary focus:outline-none"
                value={row.content}
                onChange={(e) => setContentRows(prev => prev.map(r => r.id === row.id ? { ...r, content: e.target.value } : r))}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProfilePage() {
  const { user, isLoaded } = useUser()
  const adminEmails = ["admin@example.com", "doctor@example.com", "foxden482@gmail.com"]
  const isAdmin = adminEmails.includes(user?.primaryEmailAddress?.emailAddress || "")

  if (!isLoaded) return null

  return (
    <AppShell>
      <Suspense fallback={<div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary/20" /></div>}>
        {user ? (
          isAdmin ? <AdminDashboard /> : <ClientProfile />
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
            <p className="text-xs md:text-sm text-muted-foreground mb-4">Войдите, чтобы увидеть профиль</p>
            <SignInButton mode="modal">
              <button className="bg-primary text-white px-8 py-2.5 rounded-xl font-bold transition-transform active:scale-95">
                Войти
              </button>
            </SignInButton>
          </div>
        )}
      </Suspense>
    </AppShell>
  )
}