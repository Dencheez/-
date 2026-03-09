"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function QnaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900">
            <Header />

            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                {/* Навигация */}
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                {/* Заголовок */}
                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold uppercase tracking-tight text-[#1e40af]">
                        Вопрос-ответ
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="mb-6 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    Вниманию пациентов и их родственников | Просмотров: 160116
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

                        <form className="grid grid-cols-1 gap-6 max-w-2xl">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase text-slate-400">ФИО полностью *</label>
                                <input
                                    type="text"
                                    className="w-full border-b-2 border-slate-100 py-2 focus:border-[#1e40af] focus:outline-none transition-colors"
                                    placeholder="Иванов Иван Иванович"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400">Ваш телефон *</label>
                                    <input
                                        type="tel"
                                        className="w-full border-b-2 border-slate-100 py-2 focus:border-[#1e40af] focus:outline-none transition-colors"
                                        placeholder="+7 (___) ___-__-__"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400">E-mail</label>
                                    <input
                                        type="email"
                                        className="w-full border-b-2 border-slate-100 py-2 focus:border-[#1e40af] focus:outline-none transition-colors"
                                        placeholder="example@mail.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase text-slate-400">Текст обращения *</label>
                                <textarea
                                    rows={4}
                                    className="w-full border-2 border-slate-50 p-4 bg-slate-50 focus:bg-white focus:border-[#1e40af] focus:outline-none transition-all resize-none"
                                    placeholder="Опишите суть вашего вопроса или претензии..."
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                                    * Срок рассмотрения жалоб и получения ответа согласно ст.99 АППК РК — 20 дней.
                                </p>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-[#1e40af] text-white font-bold uppercase text-[12px] tracking-widest py-4 px-8 hover:bg-slate-900 transition-colors w-full md:w-max"
                                >
                                    Отправить заявление <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </section>

                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}