import React from "react";
import Link from "next/link";
import { Newspaper, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { getPostsAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function NewsPage(props: {
    searchParams: Promise<{ page?: string }>
}) {
    const searchParams = await props.searchParams;
    const itemsPerPage = 30; // 30 новостей на страницу
    const currentPage = Number(searchParams.page) || 1;

    // Важно: в экшене должен быть фильтр .eq('category', 'news')
    const { data: posts, count: totalCount } = await getPostsAction('news', currentPage, itemsPerPage);
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return (
        <AppShell>
            <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 w-full flex flex-col min-h-screen">
                {/* Хедер */}
                <div className="mb-8">
                    <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary flex items-center gap-1 mb-4 transition-colors">
                        <ChevronLeft className="h-3 w-3" /> На главную
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
                        <Newspaper className="h-8 w-8 text-primary shrink-0" />
                        Новости компании
                    </h1>
                </div>

                {/* Список из 30 ссылок */}
                <div className="flex flex-col border-t border-slate-100">
                    {posts.length === 0 ? (
                        <div className="py-20 text-center text-slate-400 italic font-medium">
                            Новостей пока нет
                        </div>
                    ) : (
                        posts.map((post: any) => (
                            <Link
                                key={post.id}
                                href={`/news/${post.id}`}
                                className="group flex items-center justify-between py-4 border-b border-slate-50 hover:bg-slate-50 transition-all px-2 md:px-4"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8 overflow-hidden">
                                    {/* Дата в строгом стиле */}
                                    <span className="text-[11px] font-black text-slate-300 tabular-nums shrink-0 group-hover:text-primary transition-colors">
                                        {post.created_at ? new Date(post.created_at).toLocaleDateString('ru-RU') : '--.--.----'}
                                    </span>
                                    {/* Заголовок-ссылка */}
                                    <span className="text-base font-bold text-slate-700 group-hover:text-primary transition-colors truncate">
                                        {post.title}
                                    </span>
                                </div>
                                <ArrowRight className="h-4 w-4 text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                            </Link>
                        ))
                    )}
                </div>

                {/* Компактная пагинация */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-6 mt-12 mb-10">
                        <Link
                            href={`/news?page=${Math.max(currentPage - 1, 1)}`}
                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all ${currentPage === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                        >
                            <ChevronLeft className="h-4 w-4" /> Назад
                        </Link>

                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                            {currentPage} / {totalPages}
                        </span>

                        <Link
                            href={`/news?page=${Math.min(currentPage + 1, totalPages)}`}
                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all ${currentPage === totalPages ? 'opacity-0 pointer-events-none' : ''}`}
                        >
                            Вперед <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>
                )}
            </main>
        </AppShell>
    );
}