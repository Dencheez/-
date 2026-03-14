import React from "react";
import { ChevronLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

    if (!post) notFound();

    return (
        <AppShell>
            <main className="max-w-[800px] mx-auto px-6 py-12">
                <Link href="/news" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary flex items-center gap-1 mb-8 transition-all">
                    <ChevronLeft className="h-3 w-3" /> Назад к списку
                </Link>

                <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <Calendar className="h-3 w-3" />
                    <span className="text-[11px] font-bold">
                        {new Date(post.created_at).toLocaleDateString('ru-RU')}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                    {post.title}
                </h1>

                {post.image_url && (
                    <div className="mb-10 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                        <img src={post.image_url} alt="" className="w-full h-auto object-cover" />
                    </div>
                )}

                <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
                        {post.content}
                    </p>
                </div>
            </main>
        </AppShell>
    );
}