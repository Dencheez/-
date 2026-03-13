"use client"

import { useState, useEffect } from "react"
import { AppShell } from "@/components/app-shell"
import { Megaphone, Calendar, ChevronDown, ChevronUp, Download, Plus, Trash2, Loader2 } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { getProcurement } from "@/app/lib/api"
import { deleteProcurement, addProcurement } from "@/app/admin/actions"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { supabase } from "@/lib/supabase"


const staticAnnouncements = [
    {
        id: "st-2",
        created_at: "2018-04-23",
        title: "Объявление на участие способом запроса ценовых предложений",
        section: "Запрос ценовых предложений",
        content: `ГКП на ПХВ «Городской наркологический центр...`,
    },
]

function AnnouncementCard({ item, isAdmin, onRefresh }: { item: any, isAdmin: boolean, onRefresh: () => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    // Проверяем, статичное ли это объявление (их нельзя удалить из базы)
    const isStatic = String(item.id).startsWith('st-')

    const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation()
        if (isStatic) {
            toast.error("Статичные данные нельзя удалить через админку")
            return
        }
        if (!confirm("Удалить это объявление из базы?")) return
        setIsDeleting(true)
        try {
            await deleteProcurement(item.id)
            toast.success("Удалено")
            onRefresh()
        } catch {
            toast.error("Ошибка удаления")
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md ${isDeleting ? 'opacity-50' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center text-left">
                <div className="w-12 h-12 bg-[#00B5C4]/10 rounded-xl flex items-center justify-center text-[#00B5C4] shrink-0">
                    <Megaphone className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-black text-[#00B5C4] uppercase tracking-widest">{item.section || "Объявление"}</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            {item.created_at ? new Date(item.created_at).toLocaleDateString("ru-RU") : ""}
                        </span>
                    </div>
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight leading-snug">{item.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                    {isAdmin && !isStatic && (
                        <div onClick={handleDelete} className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
                            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        </div>
                    )}
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                </div>
            </button>

            {isOpen && (
                <div className="px-8 pb-8 border-t border-slate-50 pt-6">
                    <div className="text-[13px] text-slate-600 whitespace-pre-wrap font-medium leading-relaxed">
                        {item.content}
                    </div>

                    {/* --- КНОПКА СКАЧИВАНИЯ --- */}
                    {item.file_url && (
                        <div className="mt-6">
                            <a
                                href={item.file_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} // Чтобы не закрывался аккордеон
                                className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#00B5C4] transition-all shadow-lg"
                            >
                                <Download className="w-4 h-4" />
                                Скачать прикрепленный файл
                            </a>
                        </div>
                    )}
                    {/* ------------------------- */}
                </div>
            )}
        </div>
    )
}

export default function AdsPage() {
    const { user } = useUser()
    const isAdmin = (user?.publicMetadata as any)?.role === "admin"
    const [dbItems, setDbItems] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const loadData = async () => {
        setLoading(true)
        const data = await getProcurement()
        setDbItems(data || [])
        setLoading(false)
    }

    useEffect(() => { loadData() }, [])

    // Объединяем старые объявления и новые из базы, сортируем по дате
    const allAnnouncements = [...dbItems, ...staticAnnouncements].sort((a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        // Достаем файл из инпута (убедись, что у инпута name="file")
        const file = formData.get("file") as File
        let publicUrl = ""

        try {
            // 1. ЗАГРУЗКА ФАЙЛА (если он выбран)
            if (file && file.size > 0) {
                // Создаем уникальное имя файла, чтобы не перезаписать старые
                const fileExt = file.name.split('.').pop()
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('procurement') // ТУТ ДОЛЖНО БЫТЬ ИМЯ ТВОЕГО БАКЕТА
                    .upload(fileName, file)

                if (uploadError) throw uploadError

                // Получаем прямую ссылку на файл
                const { data } = supabase.storage
                    .from('procurement')
                    .getPublicUrl(fileName)

                publicUrl = data.publicUrl
            }

            // 2. ОТПРАВКА В БАЗУ
            await addProcurement({
                title: formData.get("title") as string,
                type: formData.get("section") as string,
                content: formData.get("content") as string,
                file_url: publicUrl,
            })

            toast.success(file && file.size > 0 ? "Опубликовано с файлом" : "Опубликовано (без файла)")
            setIsModalOpen(false)
            loadData()
        } catch (error) {
            console.error("Ошибка:", error)
            toast.error("Ошибка при сохранении")
        }
    }

    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 max-w-5xl mx-auto">
                <div className="mb-10 flex justify-between items-end border-b border-slate-100 pb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Объявления</h1>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Архив и текущие закупки</p>
                    </div>

                    {isAdmin && (
                        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                            <DialogTrigger asChild>
                                <button className="bg-[#00B5C4] text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-[#00B5C4]/20 shrink-0">
                                    <Plus className="w-4 h-4 inline-block mr-2" />
                                    Добавить
                                </button>
                            </DialogTrigger>
                            <DialogContent className="rounded-[2.5rem] p-8 border-none">
                                <DialogHeader><DialogTitle className="font-black uppercase tracking-tighter text-2xl">Новое объявление</DialogTitle></DialogHeader>
                                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                    <input name="section" required placeholder="Тип объявления" className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4]" />
                                    <input name="title" required placeholder="Заголовок" className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4]" />
                                    <textarea name="content" required rows={5} placeholder="Текст объявления" className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4] resize-none" />
                                    <input type="file" name="file" className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4]" />
                                    <button type="submit" className="w-full bg-[#00B5C4] text-white py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-lg shadow-[#00B5C4]/20">Добавить объявление</button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>

                {loading ? (
                    <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#00B5C4]" /></div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {allAnnouncements.map(item => (
                            <AnnouncementCard key={item.id} item={item} isAdmin={isAdmin} onRefresh={loadData} />
                        ))}
                    </div>
                )}
            </div>
        </AppShell>
    )
}