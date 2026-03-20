'use client'
import { useState } from 'react'
import { AppShell } from "@/components/app-shell"
import { createGalleryEntryAction } from "@/app/admin/actions"
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function GalleryUploadPage() {
    const [photos, setPhotos] = useState<File[]>([])
    const [videos, setVideos] = useState<File[]>([])
    const [caption, setCaption] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const uploadFilesToMedia = async (files: File[], folder: string) => {
        const urls: string[] = []
        for (const file of files) {
            const fileExt = file.name.split('.').pop();
            const fileName = `${folder}/${Math.random()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage
                .from('media')
                .upload(fileName, file);
                
            if (uploadError) throw uploadError;

            const { data } = supabase.storage.from('media').getPublicUrl(fileName);
            urls.push(data.publicUrl);
        }
        return urls;
    }

    const handleSave = async () => {
        if (photos.length === 0 && videos.length === 0) {
            alert("Выберите файлы для загрузки");
            return;
        }

        setIsLoading(true);
        try {
            const uploadedPhotos = await uploadFilesToMedia(photos, 'photos');
            const uploadedVideos = await uploadFilesToMedia(videos, 'videos');

            const res = await createGalleryEntryAction(uploadedPhotos, uploadedVideos, caption);
            if (!res?.success) throw new Error(res?.error);

            router.push('/gallery');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Ошибка при сохранении файлов: " + (error as any).message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <AppShell>
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                <Link
                    href="/gallery"
                    className="flex w-fit items-center text-xs font-bold uppercase text-slate-500 mb-8 hover:text-[#00B5C4] transition-colors"
                >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <ChevronLeft className="w-4 h-4" />
                    </div>
                    Назад к галерее
                </Link>

                <h1 className="text-4xl font-black uppercase tracking-tighter mb-10 text-slate-800">
                    Загрузка медиафайлов
                </h1>

                <div className="flex flex-col gap-6 mb-10">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-black text-slate-400 uppercase tracking-widest">
                            Фотографии
                        </label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) => setPhotos(Array.from(e.target.files || []))}
                            className="w-full text-slate-600 outline-none bg-slate-50 p-4 rounded-2xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:uppercase file:tracking-widest file:font-black file:bg-[#00B5C4]/10 file:text-[#00B5C4] hover:file:bg-[#00B5C4]/20"
                        />
                        {photos.length > 0 && <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Выбрано фото: {photos.length}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-black text-slate-400 uppercase tracking-widest">
                            Видео
                        </label>
                        <input
                            type="file"
                            multiple
                            accept="video/*"
                            onChange={(e) => setVideos(Array.from(e.target.files || []))}
                            className="w-full text-slate-600 outline-none bg-slate-50 p-4 rounded-2xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:uppercase file:tracking-widest file:font-black file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                        />
                        {videos.length > 0 && <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Выбрано видео: {videos.length}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-black text-slate-400 uppercase tracking-widest">
                            Описание (строго необязательно)
                        </label>
                        <textarea
                            placeholder="Короткий комментарий..."
                            className="w-full text-base text-slate-600 outline-none resize-none h-32 bg-slate-50 p-4 rounded-2xl"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className={`bg-[#00B5C4] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? "Загружаем в хранилище..." : "Загрузить файлы"}
                </button>
            </div>
        </AppShell>
    )
}
