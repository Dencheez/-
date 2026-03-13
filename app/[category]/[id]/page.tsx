import { notFound } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { parseContentToHtml } from "@/components/content-parser"
import { getVacancyById, getQnaById, getPostById, getProcurementById } from "@/app/lib/api"
import { Calendar, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { auth } from "@clerk/nextjs/server"
import { Trash2 } from "lucide-react"
import { deletePost } from "@/app/admin/actions"

export default async function CategoryContentPage({
    params
}: {
    params: { category: string; id: string }
}) {
    const { category, id } = params
    let contentData = null
    let title = ""
    let date = ""
    let rawContent = ""
    const { sessionClaims } = await auth()
    const isAdmin = (sessionClaims?.metadata as any)?.role === "admin"
    // 1. Fetch data based on category
    switch (category) {
        case "vacancies":
            contentData = await getVacancyById(id)
            if (contentData) {
                title = contentData.title
                date = new Date(contentData.created_at).toLocaleDateString("ru-RU")
                rawContent = contentData.content || contentData.description || ""
            }
            break
        case "news":
        case "announcement":
        case "zozh":
        case "info":
            contentData = await getPostById(id)
            if (contentData) {
                title = contentData.title
                date = new Date(contentData.created_at).toLocaleDateString("ru-RU")
                rawContent = contentData.content
            }
            break
        case "qna":
            contentData = await getQnaById(id)
            if (contentData) {
                title = contentData.question
                date = new Date(contentData.created_at).toLocaleDateString("ru-RU")
                rawContent = `**Вопрос:**\n${contentData.question}\n\n**Ответ:**\n${contentData.answer || "Ожидает ответа..."}`
            }
            break
        case "goszakup":
            contentData = await getProcurementById(id)
            if (contentData) {
                title = contentData.title
                date = new Date(contentData.created_at).toLocaleDateString("ru-RU")
                rawContent = contentData.content
            }
            break
        default:
            notFound()
    }

    if (!contentData) {
        notFound()
    }

    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 max-w-5xl mx-auto">
                {/* Кнопка "Назад" */}
                <Link
                    href={`/${category === 'announcement' || category === 'zozh' || category === 'info' || category === 'news' ? category : category}`}
                    className="flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#00B5C4] hover:text-[#009da8] transition-colors mb-8"
                >
                    <div className="w-8 h-8 rounded-full bg-[#00B5C4]/10 flex items-center justify-center">
                        <ChevronLeft className="w-4 h-4" />
                    </div>
                    Назад к списку
                </Link>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B5C4]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative">
                        <div className="flex items-center gap-2 mb-6 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs font-black uppercase tracking-widest">{date}</span>
                            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full mx-2" />
                            <span className="text-xs font-black uppercase tracking-widest text-[#00B5C4]">
                                {category === 'vacancies' ? 'Вакансии' :
                                    category === 'news' ? 'Новости' :
                                        category === 'announcement' ? 'Объявления' :
                                            category === 'zozh' ? 'ЗОЖ' :
                                                category === 'info' ? 'Информация' :
                                                    category === 'goszakup' ? 'Госзакупки' : 'Вопрос-ответ'}
                            </span>
                        </div>

                        <h1 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tight leading-tight mb-8">
                            {title}
                        </h1>
                        {isAdmin && (
                            <form action={deletePost.bind(null, id, category)} className="absolute top-6 right-6">
                                <button
                                    type="submit"
                                    className="text-red-500 hover:text-red-700 transition-colors"
                                    title="Удалить запись"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </form>
                        )}
                        <div className="prose max-w-none text-slate-600">
                            {parseContentToHtml(rawContent)}
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
