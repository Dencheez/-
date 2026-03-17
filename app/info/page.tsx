"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { BookOpen, ChevronRight, Plus, Trash2, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

// 1. Описываем структуру статьи для TypeScript
interface Article {
    id: string;
    title: string;
    content: string;
    image_url?: string;
    views: number;
    created_at: string;
}

export default function InfoPage() {
    // 2. Указываем тип <Article[]> для массива
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)

    useEffect(() => {
        const fetchInfo = async () => {
            const { data, error } = await supabase
                .from('useful_info')
                .select('*')
                .order('created_at', { ascending: false })

            if (data) setArticles(data)
            setLoading(false)
        }
        fetchInfo()
    }, [])

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        if (!confirm("Удалить эту статью навсегда?")) return

        const { error } = await supabase
            .from('useful_info')
            .delete()
            .eq('id', id)

        if (!error) {
            setArticles(prev => prev.filter(a => a.id !== id))
        }
    }

    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8">
                {/* Хедер блока — один-в-один как в других разделах */}
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-[#00B5C4]">
                            <div className="w-8 h-8 bg-[#00B5C4]/10 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Медиа-центр</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-800 uppercase">
                            Полезная информация
                        </h1>
                    </div>

                    {isAdmin && (
                        <Link
                            href="/info/create"
                            className="flex items-center justify-center gap-3 bg-[#00B5C4] text-white px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-[#00B5C4]/20 group active:scale-95"
                        >
                            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                            <span>Добавить материал</span>
                        </Link>
                    )}
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2 className="w-10 h-10 animate-spin text-[#00B5C4]" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Загрузка библиотеки...</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-3">
                        {articles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/info/${article.id}`}
                                className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-4 md:p-5 flex items-center gap-4 md:gap-5 hover:shadow-md hover:border-[#00B5C4]/30 transition-all"
                            >
                                <div className="w-10 h-10 bg-[#00B5C4]/10 rounded-xl flex items-center justify-center text-[#00B5C4] shrink-0 group-hover:bg-[#00B5C4] group-hover:text-white transition-all">
                                    <BookOpen className="w-5 h-5" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-[13px] md:text-sm font-black text-slate-800 uppercase tracking-tight group-hover:text-[#00B5C4] transition-colors leading-snug">
                                        {article.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-2">
                                    {isAdmin && (
                                        <button
                                            onClick={(e) => handleDelete(article.id, e)}
                                            className="p-2 text-slate-300 hover:text-red-500 transition-colors z-10"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    )}
                                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#00B5C4] group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </AppShell>
    )
}