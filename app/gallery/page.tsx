import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { ChevronLeft, Camera, Plus } from "lucide-react"
import { getGalleryAction } from "@/app/admin/actions"
import { GalleryCarousel } from "@/components/GalleryCarousel"
import { auth } from "@clerk/nextjs/server"

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
    const { sessionClaims } = await auth();
    const isAdmin = (sessionClaims?.metadata as any)?.role === "admin";
    const entries = await getGalleryAction();

    // The "Flat" Rule
    // @ts-ignore
    const allPhotos = entries.flatMap((e: any) => e.image_url || []);
    // @ts-ignore
    const allVideos = entries.flatMap((e: any) => e.video_doc || []);

    return (
        <AppShell>
            <div className="flex flex-col w-full bg-[#f8fafd] min-h-screen">
                <div className="bg-slate-900 py-16 px-6 md:px-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B5C4]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-2 text-white/40 uppercase text-[10px] font-black mb-8">
                                <ChevronLeft className="w-3 h-3" /> Назад
                            </Link>
                            <div className="flex items-center gap-3 mb-6">
                                <Camera className="w-6 h-6 text-[#00B5C4]" />
                                <span className="text-white/60 font-black uppercase tracking-widest text-[10px]">Медиатека</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                                Галерея<br />Центра
                            </h1>
                            <p className="text-white/50 text-sm font-medium max-w-xl leading-relaxed uppercase">
                                Визуальный обзор наших отделений, территории и технического оснащения для комфортного пребывания пациентов.
                            </p>
                        </div>
                        {isAdmin && (
                            <Link 
                                href="/gallery/upload"
                                className="flex items-center justify-center gap-2 bg-[#00B5C4] text-white px-8 py-3 rounded-2xl md:rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#009ba8] transition-all w-full md:w-fit"
                            >
                                <Plus className="h-4 w-4" /> Загрузить медиа
                            </Link>
                        )}
                    </div>
                </div>

                <div className="max-w-6xl w-full mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
                    {allPhotos.length > 0 && (
                        <div>
                            <h2 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter mb-8">
                                Фотографии <span className="text-[#00B5C4]">{allPhotos.length}</span>
                            </h2>
                            <GalleryCarousel items={allPhotos} type="photo" />
                        </div>
                    )}

                    {allVideos.length > 0 && (
                        <div>
                            <h2 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter mb-8">
                                Видео ролики <span className="text-[#00B5C4]">{allVideos.length}</span>
                            </h2>
                            <GalleryCarousel items={allVideos} type="video" />
                        </div>
                    )}

                    {allPhotos.length === 0 && allVideos.length === 0 && (
                        <div className="text-center py-20 text-slate-400 font-medium my-auto">
                            Галерея пока пуста
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    )
}
