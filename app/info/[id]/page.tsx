"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { supabase } from "@/lib/supabase"
import { Loader2, Calendar, } from "lucide-react"

export default function ArticlePage() {
    const { id } = useParams()
    const [article, setArticle] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArticle = async () => {
            // Загружаем статью и сразу увеличиваем счетчик просмотров
            const { data } = await supabase
                .from('useful_info')
                .select('*')
                .eq('id', id)
                .single()

            if (data) {
                setArticle(data)
                await supabase.rpc('increment_views', { row_id: id }) // если настроишь функцию в БД
            }
            setLoading(false)
        }
        fetchArticle()
    }, [id])

    if (loading) return <AppShell><div className="flex justify-center p-20"><Loader2 className="animate-spin text-[#00B5C4]" /></div></AppShell>
    if (!article) return <AppShell><div className="p-20 text-center uppercase font-black">Статья не найдена</div></AppShell>

    return (
        <AppShell>
            <div className="max-w-4xl mx-auto p-4 md:p-8">
                {article.image_url && (
                    <img src={article.image_url} alt="" className="w-full h-64 md:h-96 object-cover rounded-3xl mb-8 shadow-xl" />
                )}

                <div className="flex items-center gap-6 mb-6 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(article.created_at).toLocaleDateString()}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-slate-800 uppercase mb-8 leading-tight">
                    {article.title}
                </h1>

                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                    {article.content}
                </div>
            </div>
        </AppShell>
    )
}