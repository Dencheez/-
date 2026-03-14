"use client"

import { useState, useEffect } from "react"
import { AppShell } from "@/components/app-shell"
import { Megaphone, ChevronDown, ChevronUp, Download, Plus, Trash2, Loader2, ChevronLeft, ChevronRight, Calendar, FileText } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { getProcurement } from "@/app/admin/actions"
import { deleteProcurement, addProcurement } from "@/app/admin/actions"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { supabase } from "@/lib/supabase"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
    const role = (user?.publicMetadata as any)?.role;
    const isAdmin = role === "admin" || role === "doctor";

    const [dbItems, setDbItems] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const itemsPerPage = 6

    const loadData = async (page: number = 1) => {
        setLoading(true)
        try {
            const result = (await getProcurement(page, itemsPerPage)) as any;
            if (result && result.data) {
                setDbItems(result.data);
                setTotalCount(result.count || 0);
            }
        } catch (err) {
            console.error(err)
            toast.error("Ошибка загрузки")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData(currentPage)
    }, [currentPage])

    const allAnnouncements = [...dbItems].sort((a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const file = formData.get("file") as File
        let publicUrl = ""

        try {
            if (file && file.size > 0) {
                const fileExt = file.name.split('.').pop()
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('procurement')
                    .upload(fileName, file)

                if (uploadError) throw uploadError
                const { data } = supabase.storage.from('procurement').getPublicUrl(fileName)
                publicUrl = data.publicUrl
            }

            await addProcurement({
                title: formData.get("title") as string,
                type: formData.get("section") as string,
                content: formData.get("content") as string,
                file_url: publicUrl,
            })

            toast.success("Опубликовано")
            setIsModalOpen(false)
            loadData()
        } catch (error) {
            console.error("Ошибка:", error)
            toast.error("Ошибка при сохранении")
        }
    }

    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 max-w-6xl mx-auto font-sans">

                {/* Header: Адаптирован под мобилки */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                    <div className="space-y-1">
                        <h1 className="text-3xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter">Объявления</h1>
                        <p className="text-[10px] font-black text-[#00B5C4] uppercase tracking-[0.2em]">Архив и текущие закупки</p>
                    </div>

                    {isAdmin && (
                        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                            <DialogTrigger asChild>
                                <button className="bg-[#00B5C4] text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center w-full sm:w-auto">
                                    <Plus className="w-5 h-5 mr-2" /> Добавить
                                </button>
                            </DialogTrigger>
                            <DialogContent className="rounded-[2.5rem] p-8 bg-white border-none shadow-2xl max-w-lg">
                                <DialogHeader><DialogTitle className="font-black uppercase text-2xl tracking-tighter text-slate-800">Новое объявление</DialogTitle></DialogHeader>
                                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                                    <input name="section" required placeholder="Тип (напр. Закупки)" className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4] border-none" />
                                    <input name="title" required placeholder="Заголовок" className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4] border-none" />
                                    <textarea name="content" required rows={5} placeholder="Текст объявления..." className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#00B5C4] border-none resize-none" />
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Прикрепить документ</label>
                                        <input
                                            type="file"
                                            name="file"
                                            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-black file:bg-slate-100 file:text-slate-600 hover:file:bg-slate-200"
                                        />
                                    </div>
                                    <button type="submit" className="w-full bg-[#00B5C4] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-all mt-2">Опубликовать</button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>

                {loading ? (
                    <div className="flex justify-center p-20"><Loader2 className="animate-spin text-[#00B5C4] w-10 h-10" /></div>
                ) : (
                    <>
                        {/* МОБИЛЬНАЯ ВЕРСИЯ: АККОРДЕОНЫ */}
                        <div className="block md:hidden space-y-3">
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {allAnnouncements.map((item) => (
                                    <AccordionItem key={item.id} value={item.id} className="bg-white border border-slate-100 rounded-[2rem] px-6 overflow-hidden shadow-sm">
                                        <AccordionTrigger className="hover:no-underline py-6">
                                            <div className="flex flex-col items-start text-left gap-2">
                                                <span className="text-[9px] font-black text-[#00B5C4] uppercase bg-[#00B5C4]/5 px-2 py-1 rounded-md">{item.type}</span>
                                                <span className="text-base font-black text-slate-800 uppercase tracking-tighter leading-tight">{item.title}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-8 text-slate-600 font-medium text-sm">
                                            <div className="mb-6 whitespace-pre-wrap leading-relaxed">{item.content}</div>

                                            {item.file_url && (
                                                <a href={item.file_url} target="_blank" className="flex items-center p-4 bg-slate-50 rounded-2xl text-[#00B5C4] font-black text-[10px] uppercase mb-6 hover:bg-slate-100 transition-colors">
                                                    <FileText className="w-4 h-4 mr-3" /> Скачать документ
                                                </a>
                                            )}

                                            <div className="flex items-center justify-between border-t border-slate-50 pt-5">
                                                <div className="flex items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                                    <Calendar className="w-3 h-3 mr-2" /> {new Date(item.created_at).toLocaleDateString()}
                                                </div>
                                                {isAdmin && (
                                                    <button onClick={() => confirm("Удалить?") && deleteProcurement(item.id).then(() => loadData(currentPage))} className="p-3 text-red-400 bg-red-50 rounded-2xl">
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* ПК ВЕРСИЯ: КАРТОЧКИ */}
                        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                            {allAnnouncements.map((item) => (
                                <div key={item.id} className="bg-white border border-slate-100 rounded-[3rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all group flex flex-col justify-between relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="bg-[#00B5C4]/10 p-4 rounded-2xl text-[#00B5C4]">
                                                <Megaphone className="w-6 h-6" />
                                            </div>
                                            {isAdmin && (
                                                <button onClick={() => confirm("Удалить?") && deleteProcurement(item.id).then(() => loadData(currentPage))} className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00B5C4] bg-[#00B5C4]/5 px-3 py-1.5 rounded-xl">
                                                {item.type}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-black text-slate-800 uppercase tracking-tighter mb-4 leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8 line-clamp-4 italic">
                                            {item.content}
                                        </p>
                                    </div>

                                    <div className="relative z-10 border-t border-slate-50 pt-6">
                                        {item.file_url ? (
                                            <a href={item.file_url} target="_blank" className="flex items-center text-[10px] font-black uppercase text-[#00B5C4] hover:underline mb-4">
                                                <FileText className="w-4 h-4 mr-2" /> Документ прикреплен
                                            </a>
                                        ) : (
                                            <div className="h-4 mb-4" />
                                        )}
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                                            <Calendar className="w-3 h-3 mr-2" /> Опубликовано: {new Date(item.created_at).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-slate-50 rounded-full z-0 group-hover:bg-[#00B5C4]/5 transition-colors"></div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Пагинация: Стилизована под общий дизайн */}
                {totalCount > itemsPerPage && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-[#00B5C4] disabled:opacity-30 transition-all shadow-sm"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: Math.ceil(totalCount / itemsPerPage) }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-12 h-12 rounded-2xl font-black text-xs transition-all shadow-sm ${currentPage === i + 1
                                        ? "bg-[#00B5C4] text-white scale-110 shadow-[#00B5C4]/20"
                                        : "bg-white border border-slate-100 text-slate-400 hover:bg-slate-50"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(totalCount / itemsPerPage)))}
                            disabled={currentPage === Math.ceil(totalCount / itemsPerPage)}
                            className="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-[#00B5C4] disabled:opacity-30 transition-all shadow-sm"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </AppShell>
    )
}
