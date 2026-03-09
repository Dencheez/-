"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, Phone, User, MapPin, Scale, Clock } from "lucide-react"
import Link from "next/link"

export default function SupportServicePage() {
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
                        Служба поддержки пациентов
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="space-y-10 mb-20 text-[15px] leading-relaxed">

                    {/* Официальное вступление */}
                    <section className="bg-slate-50 p-6 border-l-4 border-[#1e40af]">
                        <p className="font-bold mb-4 uppercase text-sm">Уважаемые пациенты, представители и родственники!</p>
                        <p className="text-sm text-slate-600">
                            В соответствии с Кодексом «О здоровье народа и системе здравоохранения» (от 07 июля 2020 года), в Центре создана Служба поддержки пациентов и контроля качества (СПП и ВА).
                        </p>
                    </section>

                    {/* Состав службы */}
                    <section className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h2 className="font-bold uppercase text-slate-400 text-[10px] tracking-widest border-b pb-2">Руководство</h2>
                            <div className="flex gap-4">
                                <User className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">Худаир Жанна Рафхатовна</p>
                                    <p className="text-xs text-slate-500 italic">Заместитель директора по контролю качества, врач высшей категории</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="font-bold uppercase text-slate-400 text-[10px] tracking-widest border-b pb-2">Врачи-эксперты</h2>
                            <div className="space-y-4 text-sm">
                                <p><strong>Ротманова Е. А.</strong> — эксперт по психиатрической службе</p>
                                <p><strong>Абдикерова А. Р.</strong> — эксперт по наркологической службе</p>
                                <p><strong>Москаленко В. В.</strong> — юрист-консульт</p>
                            </div>
                        </div>
                    </section>

                    {/* Каналы обращения */}
                    <section className="pt-8 border-t border-slate-100">
                        <h2 className="text-lg font-bold uppercase mb-6 text-[#1e40af]">Куда вы можете обратиться:</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-4 border border-slate-100 rounded space-y-2">
                                <p className="font-bold text-xs uppercase">Электронная почта</p>
                                <p className="text-blue-600">cpz.sekr@gmail.com (психиатрия)</p>
                                <p className="text-blue-600">gncmck@mail.ru (наркология)</p>
                            </div>
                            <div className="p-4 border border-slate-100 rounded space-y-2">
                                <p className="font-bold text-xs uppercase">Блог директора</p>
                                <p className="text-slate-500">На сайте cpzalmaty.kz</p>
                                <p className="font-bold text-xs uppercase pt-2 text-[#1e40af]">Facebook: cpzalmaty</p>
                            </div>
                        </div>
                    </section>

                    {/* Телефоны и график */}
                    <section className="grid md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-600" />
                                <h3 className="font-bold uppercase text-sm">Телефоны СПП и ВА:</h3>
                            </div>
                            <div className="text-sm space-y-2">
                                <p>Психиатрия: <strong>376-55-84</strong>, <strong>376-59-41</strong></p>
                                <p>Наркология: <strong>382-35-34</strong> (приемная)</p>
                                <p>Call-center: <strong>3000-103</strong>, <strong>14-14</strong></p>
                                <p>Телефон доверия: <strong className="text-blue-600">13-03</strong></p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-blue-600" />
                                <h3 className="font-bold uppercase text-sm">Прием пациентов:</h3>
                            </div>
                            <div className="text-sm space-y-2">
                                <p>Ежедневно: <strong>09:00 – 17:00</strong> (Пн-Пт)</p>
                                <div className="flex gap-2">
                                    <MapPin className="h-4 w-4 text-slate-400" />
                                    <p>Кабинет №48, ул. А.Кекилбайулы 117а</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Юридическая информация */}
                    <section className="space-y-6 pt-6">
                        <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-2">
                            <Scale className="h-5 w-5" />
                            <h2 className="text-lg font-bold uppercase">Сроки и порядок рассмотрения (АППК РК)</h2>
                        </div>
                        <div className="grid gap-4 text-sm">
                            <p>• <strong>Срок административной процедуры</strong> (обращения): <strong>15 рабочих дней</strong>.</p>
                            <p>• <strong>Срок рассмотрения жалобы</strong> (ст. 99 АППК РК): <strong>20 рабочих дней</strong>.</p>
                            <div className="p-4 border border-amber-100 bg-amber-50 rounded text-amber-900">
                                <p className="font-bold mb-2 uppercase text-[10px]">Требования к письменному обращению (ст. 63 АППК РК):</p>
                                <p className="text-xs leading-relaxed">
                                    Необходимо указать ФИО, ИИН, почтовый адрес, наименование органа, суть обращения, дату и подпись заявителя.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="text-center pt-10 border-t border-slate-100">
                        <p className="text-blue-600 font-bold italic">
                            Мы благодарны Вам за Ваши обращения, которые помогают нам улучшить качество помощи!
                        </p>
                    </div>

                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}