'use client'
import { useState } from 'react'
import { AppShell } from "@/components/app-shell"
import { createAdAction } from "@/app/admin/actions"
import { useRouter } from 'next/navigation'

export default function CreateAdPage() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSave = async () => {
        if (!title || !content) {
            alert("Заголовок и текст обязательны!");
            return;
        }

        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('image_url', imageUrl);

            await createAdAction(formData);

            router.push('/ads');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Ошибка при сохранении");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <AppShell>
            <div className="max-w-4xl mx-auto px-6 py-20">
                {/* Заголовок */}
                <textarea
                    placeholder="Заголовок объявления..."
                    className="w-full text-4xl md:text-6xl font-black uppercase tracking-tighter outline-none resize-none mb-10 placeholder:text-slate-100 bg-transparent overflow-hidden"
                    rows={1}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                />
                <input
                    type="text"
                    placeholder="Вставьте ссылку на картинки через запятую"
                    className="w-full mb-8 text-sm text-slate-400 outline-none bg-transparent border-b border-transparent focus:border-slate-100 transition-all"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />

                {/* Основной контент */}
                <textarea
                    placeholder="Начните писать текст объявления..."
                    className="w-full text-lg text-slate-600 outline-none resize-none min-h-[500px] placeholder:text-slate-100 bg-transparent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                {/* Кнопка публикации */}
                <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className={`static bottom-10 right-10 bg-[#00B5C4] text-white px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? "Публикуем..." : "Опубликовать объявление"}
                </button>
            </div>
        </AppShell>
    )
}
