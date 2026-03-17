"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { supabase } from "@/lib/supabase"
import { ImagePlus, Save, Loader2, X } from "lucide-react"

export default function CreateInfoPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)

    // Обработка выбора файла и создание превью
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImage(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        let imageUrl = ""

        if (image) {
            const fileExt = image.name.split('.').pop()
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
            const filePath = `articles/${fileName}`

            const { error: uploadError } = await supabase.storage
                .from('info-images')
                .upload(filePath, image)

            if (!uploadError) {
                const { data } = supabase.storage.from('info-images').getPublicUrl(filePath)
                imageUrl = data.publicUrl
            }
        }

        const { error } = await supabase.from('useful_info').insert({
            title: title,
            content: content,
            image_url: imageUrl,
        })

        if (!error) {
            router.push('/info')
            router.refresh()
        }
        setLoading(false)
    }

    return (
        <AppShell>
            <form onSubmit={handleCreate} className="p-4 md:p-8 max-w-4xl mx-auto">
                <div className="flex flex-col gap-6">
                    {/* Заголовок */}
                    <input
                        type="text"
                        placeholder="Введите заголовок статьи..."
                        className="w-full text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter outline-none placeholder:text-slate-200 border-b-2 border-transparent focus:border-[#00B5C4] transition-all bg-transparent py-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    {/* Поле для картинки - теперь под заголовком и на всю ширину */}
                    <div className="relative w-full group">
                        <label className={`flex flex-col items-center justify-center w-full ${preview ? 'h-auto' : 'h-64'} border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer overflow-hidden hover:bg-slate-50 hover:border-[#00B5C4]/50 transition-all`}>
                            {preview ? (
                                <img src={preview} alt="Preview" className="w-full h-full object-cover max-h-[400px]" />
                            ) : (
                                <div className="flex flex-col items-center gap-3 text-slate-400">
                                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-[#00B5C4] group-hover:text-white transition-all">
                                        <ImagePlus className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Загрузить обложку статьи</span>
                                </div>
                            )}
                            <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                        </label>

                        {preview && (
                            <button
                                type="button"
                                onClick={() => { setImage(null); setPreview(null); }}
                                className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-xl text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {/* Текст статьи */}
                    <textarea
                        placeholder="Начните писать здесь..."
                        className="w-full min-h-[400px] p-6 rounded-3xl border border-slate-100 shadow-sm outline-none focus:border-[#00B5C4]/30 resize-none text-slate-600 font-medium"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    {/* Кнопка публикации */}
                    <button
                        disabled={loading}
                        className="w-full bg-[#00B5C4] text-white p-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-[#00B5C4]/20 disabled:opacity-50 active:scale-95"
                    >
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Save className="w-6 h-6" />}
                        {loading ? "Публикация..." : "Опубликовать материал"}
                    </button>
                </div>
            </form>
        </AppShell>
    )
}