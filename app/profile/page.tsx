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
  Plus,
  Trash2,
  MessageSquare,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { getVacancies, getPosts, getProcurement, getQna } from "@/app/lib/api"
import { addVacancy, deleteVacancy, addPost, deletePost, addProcurement, deleteProcurement, deleteQna, replyQna } from "@/app/admin/actions"
import { toast } from "sonner"
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
            className={`flex flex-1 items-center justify-center gap-1 md:gap-1.5 rounded-lg py-2 md:py-2.5 text-[10px] md:text-xs font-semibold ${activeTab === tab.key ? "bg-card text-primary shadow-sm" : "text-muted-foreground"
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
            <Link href="/appointment" className="flex items-center justify-between rounded-xl md:rounded-2xl bg-primary p-3 md:p-4 text-primary-foreground shadow-lg shadow-primary/20">
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
            <Link href="/profile/settings" className="flex items-center justify-between rounded-xl md:rounded-2xl border border-border bg-card p-3 md:p-4 hover:bg-secondary">
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
  
  const [allAppointments, setAllAppointments] = useState<any[]>([])
  const [vacancies, setVacancies] = useState<any[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [procurement, setProcurement] = useState<any[]>([])
  const [qna, setQna] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const [isVacancyOpen, setIsVacancyOpen] = useState(false)
  const [isPostOpen, setIsPostOpen] = useState(false)
  const [isProcOpen, setIsProcOpen] = useState(false)

  const searchQuery = searchParams.get("search")?.toLowerCase() || ""

  useEffect(() => {
    async function loadAdminData() {
      setLoading(true)
      const [
          apptsRes,
          vacanciesData,
          postsData,
          procurementData,
          qnaData
      ] = await Promise.all([
        supabase.from("appointments").select("*").order("created_at", { ascending: false }),
        getVacancies(),
        getPosts(),
        getProcurement(),
        getQna()
      ])
      
      setAllAppointments(apptsRes.data || [])
      setVacancies(vacanciesData)
      setPosts(postsData)
      setProcurement(procurementData)
      setQna(qnaData)
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

  return (
    <div className="p-3 md:p-6 max-w-3xl mx-auto space-y-4">
      <div className="rounded-xl md:rounded-2xl border border-border bg-card p-4 md:p-5 shadow-sm">
        <h1 className="text-sm md:text-base font-bold text-foreground">Панель управления</h1>
        <p className="text-[9px] md:text-[10px] text-primary font-medium uppercase tracking-wider">Режим администратора</p>
      </div>

      <div className="flex rounded-xl bg-secondary p-1">
        <button
          onClick={() => setActiveTab("appointments")}
          className={`flex-1 py-2 text-[10px] md:text-xs font-semibold rounded-lg ${activeTab === "appointments" ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}
        >
          Все записи
        </button>
        <button
          onClick={() => setActiveTab("content")}
          className={`flex-1 py-2 text-[10px] md:text-xs font-semibold rounded-lg ${activeTab === "content" ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}
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
                      <p className="text-[11px] text-foreground leading-snug">
                        {appt.reason || "Не указана"}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "content" && (
            <Tabs defaultValue="posts" className="w-full mt-4">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto rounded-xl md:rounded-3xl p-1 bg-slate-100/50 mb-6">
                    <TabsTrigger value="posts" className="rounded-lg md:rounded-2xl py-2 md:py-3 px-2 md:px-4 text-[10px] md:text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-[#00B5C4] data-[state=active]:shadow-sm">Публикации</TabsTrigger>
                    <TabsTrigger value="vacancies" className="rounded-lg md:rounded-2xl py-2 md:py-3 px-2 md:px-4 text-[10px] md:text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-[#00B5C4] data-[state=active]:shadow-sm">Вакансии</TabsTrigger>
                    <TabsTrigger value="qna" className="rounded-lg md:rounded-2xl py-2 md:py-3 px-2 md:px-4 text-[10px] md:text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-[#00B5C4] data-[state=active]:shadow-sm">Вопросы</TabsTrigger>
                    <TabsTrigger value="procurement" className="rounded-lg md:rounded-2xl py-2 md:py-3 px-2 md:px-4 text-[10px] md:text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-[#00B5C4] data-[state=active]:shadow-sm">Госзакупки</TabsTrigger>
                    <TabsTrigger value="media" className="rounded-lg md:rounded-2xl py-2 md:py-3 px-2 md:px-4 text-[10px] md:text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-[#00B5C4] data-[state=active]:shadow-sm">Медиа</TabsTrigger>
                </TabsList>

                {/* --- ПУБЛИКАЦИИ --- */}
                <TabsContent value="posts">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm md:text-xl font-black text-slate-800 uppercase">Управление публикациями</h2>
                        <Dialog open={isPostOpen} onOpenChange={setIsPostOpen}>
                            <DialogTrigger asChild>
                                <button className="flex items-center gap-1 md:gap-2 bg-[#00B5C4] text-white px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#009da8] transition-colors shadow-sm">
                                    <Plus className="w-3 h-3 md:w-4 md:h-4" /> Добавить
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Новая публикация</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
                                    const category = (form.elements.namedItem('category') as HTMLSelectElement).value;
                                    const content = (form.elements.namedItem('content') as HTMLTextAreaElement).value;
                                    try {
                                        await addPost({ title, category, content });
                                        const newData = await getPosts();
                                        setPosts(newData);
                                        setIsPostOpen(false);
                                        toast.success("Публикация добавлена");
                                    } catch (err) { toast.error("Ошибка при добавлении") }
                                }} className="flex flex-col gap-4 mt-4">
                                    <select name="category" required defaultValue="" className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50 appearance-none bg-white">
                                        <option value="" disabled>Выберите категорию...</option>
                                        <option value="news">Новости</option>
                                        <option value="announcement">Объявления</option>
                                        <option value="zozh">ЗОЖ</option>
                                        <option value="info">Полезная информация</option>
                                    </select>
                                    <input name="title" required placeholder="Заголовок" className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                    <textarea name="content" required placeholder="Текст публикации (поддерживает текстовые таблицы с |)" className="w-full text-sm rounded-xl border border-slate-200 p-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                    <button type="submit" className="bg-[#00B5C4] text-white px-5 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#009da8] transition-colors">
                                        Сохранить
                                    </button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="grid gap-4">
                        {posts.length === 0 && <p className="text-slate-500 font-medium text-xs">Нет публикаций.</p>}
                        {posts.map((p) => (
                            <div key={p.id} className="bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-sm flex flex-col md:flex-row justify-between gap-4 md:gap-6 md:items-center">
                                <div className="flex-1 min-w-0">
                                    <span className="inline-block px-2 md:px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-2 md:mb-3">
                                        {p.category}
                                    </span>
                                    <h3 className="text-sm md:text-lg font-black text-slate-800 uppercase tracking-tight truncate">{p.title}</h3>
                                    <span className="text-[10px] md:text-xs font-bold text-slate-400 mt-1 md:mt-2 block uppercase tracking-widest">{new Date(p.created_at).toLocaleDateString('ru-RU')}</span>
                                </div>
                                <button 
                                    onClick={async () => {
                                        if (confirm('Удалить публикацию?')) {
                                            try {
                                                await deletePost(p.id, p.category);
                                                setPosts(prev => prev.filter(item => item.id !== p.id));
                                                toast.success("Публикация удалена");
                                            } catch (e) { toast.error("Ошибка при удалении") }
                                        }
                                    }}
                                    className="shrink-0 self-end md:self-auto flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* --- ВАКАНСИИ --- */}
                <TabsContent value="vacancies">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm md:text-xl font-black text-slate-800 uppercase">Управление вакансиями</h2>
                        <Dialog open={isVacancyOpen} onOpenChange={setIsVacancyOpen}>
                            <DialogTrigger asChild>
                                <button className="flex items-center gap-1 md:gap-2 bg-[#00B5C4] text-white px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#009da8] transition-colors shadow-sm">
                                    <Plus className="w-3 h-3 md:w-4 md:h-4" /> Добавить
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Новая вакансия</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
                                    const salary = (form.elements.namedItem('salary') as HTMLInputElement).value;
                                    const experience = (form.elements.namedItem('experience') as HTMLInputElement).value;
                                    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
                                    try {
                                        await addVacancy({ title, salary, experience, description });
                                        const newData = await getVacancies();
                                        setVacancies(newData);
                                        setIsVacancyOpen(false);
                                        toast.success("Вакансия добавлена");
                                    } catch (err) { toast.error("Ошибка при добавлении") }
                                }} className="flex flex-col gap-4 mt-4">
                                    <input name="title" required placeholder="Заголовок" className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                    <input name="salary" placeholder="Зарплата (например, от 100 000 тнг)" className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                    <input name="experience" placeholder="Опыт (например, 1-3 года)" className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                    <textarea name="description" required placeholder="Описание вакансии..." className="w-full text-sm rounded-xl border border-slate-200 p-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                    <button type="submit" className="bg-[#00B5C4] text-white px-5 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#009da8] transition-colors">
                                        Сохранить
                                    </button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="grid gap-4">
                        {vacancies.length === 0 && <p className="text-slate-500 font-medium text-xs">Нет вакансий.</p>}
                        {vacancies.map((v) => (
                            <div key={v.id} className="bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-sm flex flex-col md:flex-row justify-between gap-4 md:gap-6 md:items-center">
                                <div>
                                    <h3 className="text-sm md:text-lg font-black text-slate-800 uppercase tracking-tight">{v.title}</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {v.salary && <span className="inline-block px-2 md:px-3 py-1 bg-green-50 text-green-600 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">{v.salary}</span>}
                                        {v.experience && <span className="inline-block px-2 md:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">{v.experience}</span>}
                                    </div>
                                    <p className="text-xs md:text-sm text-slate-500 mt-2 line-clamp-2">{v.description || v.content}</p>
                                    <span className="text-[10px] md:text-xs font-bold text-slate-400 mt-3 md:mt-4 block uppercase tracking-widest">{new Date(v.created_at).toLocaleDateString('ru-RU')}</span>
                                </div>
                                <button 
                                    onClick={async () => {
                                        if (confirm('Удалить вакансию?')) {
                                            try {
                                                await deleteVacancy(v.id);
                                                setVacancies(prev => prev.filter(item => item.id !== v.id));
                                                toast.success("Вакансия удалена");
                                            } catch (e) { toast.error("Ошибка при удалении") }
                                        }
                                    }}
                                    className="shrink-0 self-end md:self-auto flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* --- ВОПРОС-ОТВЕТ (QNA) --- */}
                <TabsContent value="qna">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm md:text-xl font-black text-slate-800 uppercase">Вопросы и ответы</h2>
                    </div>
                    <div className="grid gap-4">
                        {qna.length === 0 && <p className="text-slate-500 font-medium text-xs">Нет вопросов.</p>}
                        {qna.map((q) => (
                            <div key={q.id} className="bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-sm flex flex-col gap-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-xs md:text-md font-bold text-slate-800">
                                            <MessageSquare className="w-3 h-3 md:w-4 md:h-4 inline-block mr-2 text-[#00B5C4]" />
                                            {q.question}
                                        </h3>
                                        <p className="text-[10px] md:text-xs font-bold text-slate-400 mt-2">Автор: {q.author_name || 'Аноним'} | {new Date(q.created_at).toLocaleDateString('ru-RU')}</p>
                                        <span className={`inline-block mt-2 md:mt-3 px-2 md:px-3 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest ${q.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                            {q.status === 'published' ? 'Опубликован' : 'Ожидает ответа'}
                                        </span>
                                    </div>
                                    <button 
                                        onClick={async () => {
                                            if (confirm('Удалить вопрос?')) {
                                                try {
                                                    await deleteQna(q.id);
                                                    setQna(prev => prev.filter(item => item.id !== q.id));
                                                    toast.success("Вопрос удален");
                                                } catch (e) { toast.error("Ошибка при удалении") }
                                            }
                                        }}
                                        className="shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="bg-slate-50 rounded-xl md:rounded-2xl p-3 md:p-4 mt-2 border border-slate-100">
                                    {q.answer ? (
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 mb-1 md:mb-2 uppercase tracking-widest text-[8px] md:text-[10px]">Ваш ответ:</p>
                                            <p className="text-xs md:text-sm text-slate-700">{q.answer}</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={async (e) => {
                                            e.preventDefault();
                                            const form = e.target as HTMLFormElement;
                                            const reply = (form.elements.namedItem('reply') as HTMLTextAreaElement).value;
                                            try {
                                                await replyQna(q.id, reply);
                                                setQna(prev => prev.map(item => item.id === q.id ? { ...item, answer: reply, status: 'published' } : item));
                                                toast.success("Ответ отправлен и опубликован");
                                            } catch (err) { toast.error("Ошибка при отправке") }
                                        }} className="flex flex-col gap-2 md:gap-3">
                                            <textarea name="reply" required placeholder="Напишите ответ..." className="w-full text-[10px] md:text-sm rounded-lg md:rounded-xl border border-slate-200 p-2 md:p-3 min-h-[60px] md:min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                            <button type="submit" className="self-end bg-slate-900 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold uppercase text-[8px] md:text-[10px] tracking-widest hover:bg-[#00B5C4] transition-colors">
                                                Ответить и опубликовать
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* --- ГОСЗАКУПКИ --- */}
                <TabsContent value="procurement">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm md:text-xl font-black text-slate-800 uppercase">Управление госзакупками</h2>
                        <Dialog open={isProcOpen} onOpenChange={setIsProcOpen}>
                            <DialogTrigger asChild>
                                <button className="flex items-center gap-1 md:gap-2 bg-[#00B5C4] text-white px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#009da8] transition-colors shadow-sm">
                                    <Plus className="w-3 h-3 md:w-4 md:h-4" /> Добавить
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Новая запись госзакупок</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
                                    const section = (form.elements.namedItem('section') as HTMLSelectElement).value;
                                    const content = (form.elements.namedItem('content') as HTMLTextAreaElement).value;
                                    try {
                                        await addProcurement({ title, section, content });
                                        const newData = await getProcurement();
                                        setProcurement(newData);
                                        setIsProcOpen(false);
                                        toast.success("Запись добавлена");
                                    } catch (err) { toast.error("Ошибка при добавлении") }
                                }} className="flex flex-col gap-4 mt-4">
                                    <select name="section" required defaultValue="" className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50 appearance-none bg-white">
                                        <option value="" disabled>Выберите раздел...</option>
                                        <option value="plan">План госзакупок</option>
                                        <option value="protocol">Протокол</option>
                                        <option value="announcement">Объявление</option>
                                    </select>
                                    <input name="title" required placeholder="Заголовок" className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                    <textarea name="content" required placeholder="Содержимое..." className="w-full text-sm rounded-xl border border-slate-200 p-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#00B5C4]/50" />
                                    <button type="submit" className="bg-[#00B5C4] text-white px-5 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#009da8] transition-colors">
                                        Сохранить
                                    </button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="grid gap-4">
                        {procurement.length === 0 && <p className="text-slate-500 font-medium text-xs">Нет записей о госзакупках.</p>}
                        {procurement.map((p) => (
                            <div key={p.id} className="bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-sm flex flex-col md:flex-row justify-between gap-4 md:gap-6 md:items-center">
                                <div className="flex-1 min-w-0">
                                    <span className="inline-block px-2 md:px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-2 md:mb-3">
                                        {p.section}
                                    </span>
                                    <h3 className="text-sm md:text-lg font-black text-slate-800 uppercase tracking-tight truncate">{p.title}</h3>
                                    <span className="text-[10px] md:text-xs font-bold text-slate-400 mt-1 md:mt-2 block uppercase tracking-widest">{new Date(p.created_at).toLocaleDateString('ru-RU')}</span>
                                </div>
                                <button 
                                    onClick={async () => {
                                        if (confirm('Удалить запись о госзакупке?')) {
                                            try {
                                                await deleteProcurement(p.id);
                                                setProcurement(prev => prev.filter(item => item.id !== p.id));
                                                toast.success("Запись удалена");
                                            } catch (e) { toast.error("Ошибка при удалении") }
                                        }
                                    }}
                                    className="shrink-0 self-end md:self-auto flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                
                {/* --- МЕДИА --- */}
                <TabsContent value="media">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm md:text-xl font-black text-slate-800 uppercase">Управление медиа</h2>
                        <button className="flex items-center gap-1 md:gap-2 bg-[#00B5C4] text-white px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#009da8] transition-colors shadow-sm opacity-50 cursor-not-allowed">
                            <Plus className="w-3 h-3 md:w-4 md:h-4" /> Добавить
                        </button>
                    </div>
                    <div className="p-8 text-center border-2 border-dashed rounded-2xl text-muted-foreground text-xs md:text-sm">
                        Раздел в разработке...
                    </div>
                </TabsContent>

            </Tabs>
          )}
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
              <button className="bg-primary text-white px-8 py-2.5 rounded-xl font-bold">
                Войти
              </button>
            </SignInButton>
          </div>
        )}
      </Suspense>
    </AppShell>
  )
}