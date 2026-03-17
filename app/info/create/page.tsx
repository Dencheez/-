"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { supabase } from "@/lib/supabase"
import { ImagePlus, Save, Loader2 } from "lucide-react"

export default function CreateInfoPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState<File | null>(null)

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        let imageUrl = ""

        // 1. Загрузка картинки, если она выбрана
        if (image) {
            const fileExt = image.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `articles/${fileName}`

            const { error: uploadError } = await supabase.storage
                .from('info-images')
                .upload(filePath, image)

            if (!uploadError) {
                const { data } = supabase.storage.from('info-images').getPublicUrl(filePath)
                imageUrl = data.publicUrl
            }
        }

        // 2. Сохранение в таблицу useful_info
        const { error } = await supabase.from('useful_info').insert({
            title: title,
            content: content,
            image_url: imageUrl,
        });

        if (!error) {
            router.push('/info')
            router.refresh()
        }
        setLoading(false)
    }

    return (
        <AppShell>
            <form onSubmit={handleCreate} className="p-4 md:p-8 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-6 uppercase">Новая статья</h1>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Заголовок статьи"
                        className="w-full p-4 rounded-2xl border border-slate-200 outline-none focus:border-[#00B5C4]"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50 transition-all">
                        {image ? (
                            <span className="text-sm text-slate-500 font-bold">{image.name}</span>
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-slate-400">
                                <ImagePlus className="w-8 h-8" />
                                <span className="text-xs font-bold uppercase">Загрузить обложку</span>
                            </div>
                        )}
                        <input type="file" className="hidden" onChange={(e) => setImage(e.target.files?.[0] || null)} />
                    </label>

                    <textarea
                        placeholder="Текст статьи..."
                        className="w-full h-64 p-4 rounded-2xl border border-slate-200 outline-none focus:border-[#00B5C4] resize-none"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    <button
                        disabled={loading}
                        className="w-full bg-[#00B5C4] text-white p-4 rounded-2xl font-bold uppercase flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                        Опубликовать
                    </button>
                </div>
            </form>
        </AppShell>
    )
}