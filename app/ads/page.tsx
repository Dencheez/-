import React from "react";
import Link from "next/link";
import { BookOpen, ChevronLeft, ChevronRight, ArrowRight, Plus } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { auth } from "@clerk/nextjs/server";
import { getAdsAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function AdsPage(props: {
    searchParams: Promise<{ page?: string }>
}) {
    const { sessionClaims } = await auth();
    const isAdmin = (sessionClaims?.metadata as any)?.role === "admin";
    const searchParams = await props.searchParams;

    const itemsPerPage = 10;
    const currentPage = Number(searchParams.page) || 1;

    const { data: posts, count: totalCount } = await getAdsAction(currentPage, itemsPerPage);
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const safePosts = posts || [];

    return (
        <AppShell>
            <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 w-full flex flex-col min-h-screen">

                {/* Хедер */}
                <div className="mb-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <h1 className="text-3xl md:text-5xl py-4 font-black uppercase flex items-center gap-3 tracking-tighter text-slate-900">
                            <BookOpen className="h-8 w-8 text-[#00B5C4] shrink-0" />
                            Объявления
                        </h1>

                        {/* Кнопка создания для админа */}
                        {isAdmin && (
                            <Link
                                href="/ads/create"
                                className="flex items-center justify-center gap-2 bg-[#00B5C4] text-white px-8 py-3 rounded-2xl md:rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#009ba8] transition-all w-full md:w-fit"
                            >
                                <Plus className="h-4 w-4" /> Добавить пост
                            </Link>
                        )}
                    </div>
                </div>

                {/* Список из таблицы posts */}
                <div className="flex flex-col border-t border-slate-100">
                    {safePosts.length === 0 ? (
                        <div className="py-20 text-center text-slate-400 font-medium">
                            Записей пока нет
                        </div>
                    ) : (
                        safePosts.map((post: any) => (
                            <Link
                                key={post.id}
                                href={`/ads/${post.id}`}
                                className="group flex items-center justify-between py-4 border-b border-slate-50 hover:bg-slate-50 transition-all px-2 md:px-4"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8 overflow-hidden">
                                    <span className="text-[11px] font-black text-slate-300 tabular-nums shrink-0 group-hover:text-[#00B5C4] transition-colors">
                                        {post.created_at ? new Date(post.created_at).toLocaleDateString('ru-RU') : '--.--.----'}
                                    </span>
                                    <span className="text-base font-bold text-slate-700 group-hover:text-[#00B5C4] transition-colors truncate">
                                        {post.title}
                                    </span>
                                </div>
                                <ArrowRight className="h-4 w-4 text-slate-200 group-hover:text-[#00B5C4] group-hover:translate-x-1 transition-all shrink-0" />
                            </Link>
                        ))
                    )}
                </div>

                {/* Пагинация */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-6 mt-12 mb-10">
                        <Link
                            href={`/ads?page=${Math.max(currentPage - 1, 1)}`}
                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#00B5C4] transition-all ${currentPage === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                        >
                            <ChevronLeft className="h-4 w-4" /> Назад
                        </Link>

                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                            {currentPage} / {totalPages}
                        </span>

                        <Link
                            href={`/ads?page=${Math.min(currentPage + 1, totalPages)}`}
                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#00B5C4] transition-all ${currentPage === totalPages ? 'opacity-0 pointer-events-none' : ''}`}
                        >
                            Вперед <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>
                )}
            </main>
        </AppShell>
    );
}