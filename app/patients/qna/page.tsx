"use client"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, Send, Loader2 } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { useUser } from "@clerk/nextjs";

interface Article {
    id: string;
    title: string;
}

export default function QnaPage() {
    const { user } = useUser();
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!text) {
            alert("Введите текст обращения!");
            setLoading(false);
            return;
        }

        const { error } = await supabase
            .from("qna")
            .insert([
                {
                    question: text,
                    author_name: name,
                    status: "pending",
                },
            ]);

        if (error) {
            console.error("Ошибка при отправке:", error.message);
            alert("Ошибка: " + error.message);
        } else {
            setText("");
            alert("Вопрос отправлен!");
        }
        setLoading(false);
    };


    return (
        <AppShell>
            <main className="flex-grow max-w-5xl mx-auto w-full">
                {/* Навигация */}
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-[#1e40af] transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                {/* Заголовок */}
                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold uppercase tracking-tight text-[#1e40af]">
                        Вопрос-ответ
                    </h1>
                </div>

                <div className="mb-6 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    Вниманию пациентов и их родственников
                </div>

                <div className="space-y-12 mb-20">
                    {/* Информационный блок */}
                    <section className="text-[15px] leading-relaxed space-y-6">
                        <p className="font-bold uppercase text-slate-700">
                            Порядок обращения по вопросам качества оказания медицинской помощи
                        </p>

                        <div className="grid gap-4">
                            <div className="p-4 bg-slate-50 border-l-4 border-[#1e40af]">
                                <p><strong>В период стационарного лечения:</strong> запись в «Журнале регистрации обращений и жалоб пациента» на посту дежурного персонала.</p>
                            </div>
                            <div className="p-4 bg-slate-50 border-l-4 border-[#1e40af]">
                                <p><strong>При амбулаторном наблюдении:</strong> обращение в приемную директора Центра к секретарю.</p>
                            </div>
                            <div className="p-4 bg-slate-50 border-l-4 border-[#1e40af]">
                                <p><strong>Электронная почта:</strong> <span className="text-[#1e40af] font-bold">cpz.sekr@gmail.com</span></p>
                            </div>
                        </div>
                    </section>

                    {/* Телефоны */}
                    <section className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="border border-slate-100 p-4 rounded">
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Психиатрия / Наркология</p>
                            <p>+7 727 376-56-60 / +7 727 382-34-62</p>
                        </div>
                        <div className="border border-slate-100 p-4 rounded">
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Телефоны доверия</p>
                            <p className="font-bold text-[#1e40af]">13-03 / 8 708 983 28 63</p>
                        </div>
                    </section>

                    {/* Форма заявления */}
                    <section className="pt-10 border-t border-slate-200">
                        <h2 className="text-xl font-bold uppercase mb-8 tracking-tight">Форма для заявления</h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 max-w-2xl">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase text-slate-400">ФИО полностью *</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full border-b-2 border-slate-100 py-2 focus:border-[#1e40af] focus:outline-none bg-transparent"
                                    placeholder="Иванов Иван Иванович"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400">Ваш телефон</label>
                                    <input
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full border-b-2 border-slate-100 py-2 focus:border-[#1e40af] focus:outline-none bg-transparent"
                                        placeholder="+7 (707) 000-00-00"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400">E-mail</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border-b-2 border-slate-100 py-2 focus:border-[#1e40af] focus:outline-none bg-transparent"
                                        placeholder="example@mail.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase text-slate-400">Текст обращения *</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    className="w-full border-2 border-slate-50 p-4 bg-slate-50 focus:bg-white focus:border-[#1e40af] focus:outline-none resize-none"
                                    placeholder="Опишите суть вашего вопроса или претензии..."
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-[11px] text-slate-400 leading-relaxed">
                                    * Срок рассмотрения жалоб и получения ответа согласно ст.99 АППК РК — 20 дней.
                                </p>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex items-center justify-center gap-2 bg-[#1e40af] text-white font-bold uppercase text-[12px] tracking-widest py-4 px-8 w-full md:w-max hover:bg-[#152e7a] transition-colors disabled:opacity-50"
                                >
                                    {loading ? (
                                        <>Отправка... <Loader2 className="h-4 w-4 animate-spin" /></>
                                    ) : (
                                        <>Отправить заявление <Send className="h-4 w-4" /></>
                                    )}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </AppShell>
    )
}