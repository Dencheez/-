// app/news/[id]/page.tsx
import { notFound } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { getPostById } from "@/app/lib/api" // Проверь, что эта функция читает таблицу 'news'
import { Calendar, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { NewsContent } from "@/components/news-content"

export default async function NewsItemPage({ params }: { params: any }) {
    const { id } = await params
    const contentData = await getPostById(id, 'news');

    if (!contentData) {
        notFound();
    }

    const title = contentData.title;
    const date = new Date(contentData.created_at).toLocaleDateString("ru-RU");
    const rawContent = contentData.content;
    const imageUrl = contentData.image_url;

    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 max-w-5xl mx-auto">
                <Link
                    href="/news"
                    className="flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#00B5C4] hover:text-[#009da8] transition-colors mb-8"
                >
                    <div className="w-8 h-8 rounded-full bg-[#00B5C4]/10 flex items-center justify-center">
                        <ChevronLeft className="w-4 h-4" />
                    </div>
                    Назад к новостям
                </Link>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-10 relative overflow-hidden">
                    <div className="relative">
                        <div className="flex items-center gap-2 mb-6 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs font-black uppercase tracking-widest">{date}</span>
                            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full mx-2" />
                            <span className="text-xs font-black uppercase tracking-widest text-[#00B5C4]">Новости</span>
                        </div>

                        <h1 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tight leading-tight mb-8">
                            {title}
                        </h1>

                        {imageUrl && (
                            <div className="mb-8 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                                <img
                                    src={imageUrl}
                                    alt={title}
                                    className="w-full h-auto max-h-[600px] object-cover"
                                />
                            </div>
                        )}

                        <div className="prose max-w-none text-slate-600">
                            <NewsContent html={contentData.content} />
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    )
}