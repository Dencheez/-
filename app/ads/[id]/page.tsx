import { notFound } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { NewsContent } from "@/components/news-content"
import { getAdByIdAction } from "@/app/admin/actions"

export default async function AdItemPage({ params }: { params: any }) {
    const { id } = await params
    const contentData = await getAdByIdAction(id);

    if (!contentData) {
        notFound();
    }

    const title = contentData.title;
    const date = new Date(contentData.created_at).toLocaleDateString("ru-RU");
    const imageUrls = contentData.image_url
        ? contentData.image_url.split(',').map((url: string) => url.trim())
        : [];

    return (
        <AppShell>
            <div className="flex flex-col w-full px-4 md:px-6 py-4 md:py-8">
                <Link
                    href="/ads"
                    className="flex w-fit items-center text-xs font-bold uppercase text-slate-500 mb-8"
                >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <ChevronLeft className="w-4 h-4" />
                    </div>
                    Назад к объявлениям
                </Link>

                <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#00B5C4] mb-4 block">Объявления</span>

                    <h1 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tight leading-tight mb-6">
                        {title}
                    </h1>

                    {imageUrls.length > 0 && (
                        imageUrls.length === 1 ? (
                            <div className="mb-8 rounded-2xl overflow-hidden">
                                <img
                                    src={imageUrls[0]}
                                    alt={title}
                                    className="w-full max-h-[75vh] object-contain"
                                />
                            </div>
                        ) : (
                            <div className={`grid gap-3 mb-8 ${imageUrls.length === 2
                                ? 'grid-cols-1 sm:grid-cols-2'
                                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                                }`}>
                                {imageUrls.map((url: string, index: number) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50"
                                    >
                                        <img
                                            src={url}
                                            alt={`${title} - фото ${index + 1}`}
                                            className="w-full h-56 md:h-72 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )
                    )}

                    <div className="prose max-w-none text-slate-600 text-lg">
                        <NewsContent html={contentData.content} />
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
