"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, Scale, ShieldCheck, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function RightsPage() {
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
                    <h1 className="text-2xl font-bold uppercase tracking-tight">
                        Права и обязанности пациентов
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="mb-10 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    Просмотров: 2413 | Кодекс РК от 7 июля 2020 года № 360-VI ЗРК
                </div>

                <div className="space-y-16 mb-24 text-slate-700">

                    {/* СТАТЬЯ 134. ПРАВА */}
                    <section>
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-blue-100">
                            <ShieldCheck className="h-6 w-6 text-blue-600" />
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Статья 134. Права пациентов</h2>
                        </div>
                        <div className="grid gap-4 text-[14px] leading-relaxed">
                            {[
                                "Достойное обращение в процессе профилактики, диагностики, лечения, уважительное отношение к своим культурным и личностным ценностям;",
                                "Медицинская помощь в очередности, определяемой исключительно на основе медицинских критериев, без влияния каких-либо дискриминационных факторов;",
                                "Выбор, замену врача или медицинской организации (кроме экстренных случаев);",
                                "Оповещение о том, что в медицинской организации ведутся аудио- и (или) видеонаблюдение и запись;",
                                "Облегчение страданий в той мере, в какой это позволяет существующий уровень медицинских технологий;",
                                "Получение полной информации о диагнозе, прогнозе, плане лечения, рисках и преимуществах альтернативных методов;",
                                "Получение информации о своих правах, стоимости платных услуг и назначаемых лекарствах;",
                                "Отказ от участия в учебном процессе и от присутствия третьих лиц при процедурах;",
                                "Защита прав государственными органами и общественными объединениями."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-slate-50/50 rounded-sm">
                                    <span className="font-bold text-blue-600">{i + 1}.</span>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* СТАТЬЯ 135. ОБЯЗАННОСТИ */}
                    <section>
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-red-100">
                            <AlertCircle className="h-6 w-6 text-red-600" />
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Статья 135. Обязанности пациентов</h2>
                        </div>
                        <div className="grid gap-4 text-[14px] leading-relaxed">
                            {[
                                "Принимать меры к сохранению и укреплению своего здоровья;",
                                "Проявлять в общении с медицинскими работниками уважение и такт;",
                                "Сообщать врачу всю информацию, необходимую для постановки диагноза;",
                                "Неукоснительно выполнять назначения после дачи согласия на медицинское вмешательство;",
                                "Соблюдать правила внутреннего распорядка и бережно относиться к имуществу организации;",
                                "Своевременно информировать об изменении состояния здоровья и заболеваниях, опасных для окружающих;",
                                "Не совершать действий, нарушающих права других пациентов."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-sm shadow-sm">
                                    <span className="font-bold text-red-600">{i + 1}.</span>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* СТАТЬЯ 163. ПСИХИЧЕСКОЕ ЗДОРОВЬЕ - ТЕПЕРЬ СВЕТЛАЯ */}
                    <section className="bg-white p-8 border-2 border-slate-100 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                            <Scale className="h-8 w-8 text-blue-600" />
                            <div>
                                <h2 className="text-xl font-black uppercase tracking-tighter">Статья 163</h2>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Права лиц с психическими расстройствами</p>
                            </div>
                        </div>
                        <div className="space-y-6 text-[14px] leading-relaxed">
                            <p className="font-medium text-slate-900">
                                Лица с психическими и поведенческими расстройствами обладают всеми правами и свободами граждан, предусмотренными Конституцией РК.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4 p-4 bg-slate-50 rounded">
                                    <p className="text-[10px] font-bold text-blue-600 uppercase">Основные права:</p>
                                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                                        <li>Помощь по месту жительства и нахождения</li>
                                        <li>Отказ от участия в исследованиях и съемках</li>
                                        <li>Приглашение специалиста в комиссию</li>
                                        <li>Ежедневная прогулка</li>
                                        <li>Пользование телефоном и переписка</li>
                                    </ul>
                                </div>
                                <div className="space-y-4 p-4 bg-slate-50 rounded">
                                    <p className="text-[10px] font-bold text-blue-600 uppercase">При интенсивном наблюдении:</p>
                                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                                        <li>Дополнительное питание</li>
                                        <li>Услуги сверх пакета ГОБМП</li>
                                        <li>Приобретение собственной одежды</li>
                                        <li>Пользование контрольным счетом</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}