"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, Quote, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

export default function GratitudePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                {/* Навигация */}
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                {/* Заголовок */}
                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                        Благодарности
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="space-y-10 mb-20">

                    {/* 1. Коллективная благодарность */}
                    <section className="relative p-8 bg-slate-50 border-l-4 border-blue-600">
                        <Quote className="absolute top-4 right-4 h-12 w-12 text-slate-100" />

                        <div className="mb-6 w-full aspect-[16/6] bg-slate-200 rounded flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
                            <ImageIcon className="h-8 w-8 text-slate-400 mb-2" />
                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Картинка: Официальное письмо/Благодарность</p>
                        </div>

                        <div className="space-y-4 text-slate-700 leading-relaxed italic">
                            <p className="font-bold text-slate-900 not-italic uppercase text-sm mb-4">Благодарность!!!</p>
                            <p>Мы жители города Алматы проживаем по адресу - улица Тлендиева, дома №141,143,146,147</p>
                            <p>
                                В течении некоторого времени, наша соседка не давала возможности нам нормально жить, пугала наших детей, нарушала общественное спокойствие.
                                Ей требовалась медицинская помощь, но, к сожалению, в силу своего состояния, она этого не замечала. Мы, соседи, неоднократно обращались за помощью
                                в различные инстанции, но разрешить ситуацию никак не могли, пока не обратились в Центр Психического Здоровья улице А. Кекилбайулы 117,
                                где очень оперативно откликнулись на нашу просьбу о помощи, были корректны, вежливы, и очень профессионально объяснили нашей соседке,
                                что ей необходима медицинская помощь.
                            </p>
                            <p>
                                Выражаем Благодарность администрации и врачам ЦПЗ, в лице Худаир Жанны Рафхатовны и врача Сергея Владимировича.
                                Спасибо большое, что отозвались на просьбу о помощи. Спасибо вам за нелегкий труд.
                            </p>
                            <div className="pt-4 border-t border-slate-200 not-italic">
                                <p className="font-bold text-slate-900">Неупокоева Наталия Василевна</p>
                                <p className="font-bold text-slate-900">Нурпеисова Ольга Николевна</p>
                                <p className="font-bold text-slate-900">Чигрена Татьяна</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Отзыв Batyr Seventy */}
                    <section className="p-8 border border-slate-100 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="font-black text-slate-900 uppercase tracking-tighter text-lg">Batyr Seventy</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase">07.08.2018</p>
                            </div>
                        </div>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Недавно брал справку - обслужили очень быстро. В очереди стоял всего минут 5.
                            Только лучше иметь с собой мелочь, так как справка (для работы, например) стоит 180 тг.
                        </p>
                        <div className="w-full aspect-video bg-slate-50 rounded flex flex-col items-center justify-center border-2 border-dashed border-slate-200">
                            <ImageIcon className="h-8 w-8 text-slate-300 mb-2" />
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Скриншот из 2ГИС</p>
                        </div>
                    </section>

                    {/* МЕСТО ПОД КАРТИНКИ ДО РИММЫ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded flex flex-col items-center justify-center">
                            <ImageIcon className="h-6 w-6 text-slate-300 mb-2" />
                            <p className="text-[9px] text-slate-400 uppercase font-bold">Картинка до Риммы #1</p>
                        </div>
                        <div className="aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded flex flex-col items-center justify-center">
                            <ImageIcon className="h-6 w-6 text-slate-300 mb-2" />
                            <p className="text-[9px] text-slate-400 uppercase font-bold">Картинка до Риммы #2</p>
                        </div>
                    </div>

                    {/* 3. Отзыв Римма */}
                    <section className="p-8 border-l-4 border-blue-600 bg-white shadow-sm border border-slate-100">
                        <div className="mb-4">
                            <p className="font-black text-slate-900 uppercase tracking-tighter text-lg">Римма</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">20 июля в 17:14</p>
                        </div>
                        <div className="space-y-4 text-slate-700 leading-relaxed">
                            <p>Добрый день! Сегодня муж сдавал анализы на шоферские права. Врачи у вас очень вежливые.</p>
                            <p>
                                Несмотря, что время было уже обеденное, они приняли анализы и выдали справку.
                                Мы получили удовольствие от профессионального отношения врачей, за что хочу сказать огромное спасибо!
                            </p>
                        </div>
                    </section>

                    {/* МЕСТО ПОД КАРТИНКИ ПОСЛЕ РИММЫ */}
                    <div className="w-full aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded flex flex-col items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-slate-300 mb-2" />
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Дополнительные материалы / Скриншоты после Риммы</p>
                    </div>

                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}