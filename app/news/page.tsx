import React from "react";
import Link from "next/link";
import { Newspaper, ChevronLeft, ExternalLink } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { getPosts } from "@/app/lib/api";

export default async function NewsPage() {
    // 1. Получаем реальные данные из базы
    const posts = await getPosts('news');

    return (
        <AppShell>
            <main className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 w-full">
                {/* Заголовок и хлебные крошки */}
                <div className="mb-6">
                    <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary flex items-center gap-1 mb-2">
                        <ChevronLeft className="h-3 w-3" /> На главную
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
                        <Newspaper className="h-8 w-8 text-primary shrink-0" />
                        Новости
                    </h1>
                </div>

                {/* Контент */}
                <div className="border-t border-slate-100 pt-6">
                    {!posts || posts.length === 0 ? (
                        <div className="text-center py-20">
                            <h2 className="text-xl font-medium text-slate-400">Мероприятий и новостей пока нет</h2>
                            <p className="text-sm text-slate-300 mt-2">Добавьте первую новость через панель управления</p>
                        </div>
                    ) : (
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-x-8 space-y-6">
                            {posts.map((post: any) => (
                                <div key={post.id} className="break-inside-avoid">
                                    <Link
                                        href={`/news/${post.id}`}
                                        className="group flex flex-col items-start py-5 px-5 rounded-2xl hover:bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md h-full bg-white"
                                    >
                                        <div className="flex justify-between w-full items-start mb-3">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md">
                                                {post.created_at ? new Date(post.created_at).toLocaleDateString('ru-RU') : 'Недавнее'}
                                            </span>
                                            <ExternalLink className="h-4 w-4 text-slate-300 group-hover:text-primary transition-colors" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary leading-tight mb-3">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                                            {post.content}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </AppShell>
    );
}