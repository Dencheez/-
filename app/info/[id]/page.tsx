"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { supabase } from "@/lib/supabase"
import { Loader2, ArrowLeft } from "lucide-react"

interface Article {
    id: string;
    title: string;
    content: string;
    image_url?: string;
    views: number;
    created_at: string;
}

export default function ArticlePage() {
    const { id } = useParams()
    const router = useRouter()
    const [article, setArticle] = useState<Article | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArticle = async () => {
            const { data } = await supabase
                .from('useful_info')
                .select('*')
                .eq('id', id)
                .single()

            if (data) {
                setArticle(data)
                // Увеличиваем просмотры (опционально)
                await supabase.from('useful_info')
                    .update({ views: (data.views || 0) + 1 })
                    .eq('id', id)
            }
            setLoading(false)
        }
        fetchArticle()
    }, [id])

    if (loading) return (
        <AppShell>
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-[#00B5C4]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Загружаем материал...</span>
            </div>
        </AppShell>
    )

    if (!article) return (
        <AppShell>
            <div className="p-20 text-center font-black uppercase text-slate-400">Материал не найден</div>
        </AppShell>
    )

    return (
        <AppShell>
            <div className="flex flex-col w-full min-h-screen bg-white">
                {/* Кнопка назад */}
                <div className="p-4 md:p-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-slate-400 hover:text-[#00B5C4] transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Назад в библиотеку</span>
                    </button>
                </div>

                <article className="max-w-5xl mx-auto w-full px-4 md:px-8 pb-20">
                    {/* Обложка на всю ширину */}


                    {/* Заголовок */}
                    <h1 className="text-3xl md:text-6xl font-black text-slate-800 uppercase leading-[0.9] mb-12">
                        {article.title}
                    </h1>

                    {article.image_url && (
                        <div className="w-full h-full rounded-[8px] overflow-hidden shadow-2xl shadow-[#00B5C4]/10 mb-12">
                            <img
                                src={article.image_url}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Контент */}
                    <div className="prose prose-slate max-w-none">
                        <div className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed whitespace-pre-wrap border-l-4 border-[#00B5C4]/20 pl-6 md:pl-10">
                            {article.content}
                        </div>
                    </div>
                </article>
            </div>
        </AppShell>
    )
}