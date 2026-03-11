"use client"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, Phone, User, MapPin, Scale, Clock } from "lucide-react"
import Link from "next/link"

export default function SupportServicePage() {
    return (
        <AppShell>
            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                {/* Иконки удалены */}
                <div className="border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold uppercase tracking-tight text-[#1e40af]">
                        Служба поддержки пациентов
                    </h1>
                </div>

                <div className="space-y-10 mb-20 text-[15px] leading-relaxed">
                    <section className="bg-slate-50 p-6 border-l-4 border-[#1e40af]">
                        <p className="font-bold mb-4 uppercase text-sm">Уважаемые пациенты, представители и родственники!</p>
                        <p className="text-sm text-slate-600">
                            В соответствии с Кодексом «О здоровье народа и системе здравоохранения» (от 07 июля 2020 года), в Центре создана Служба поддержки пациентов и контроля качества (СПП и ВА).
                        </p>
                    </section>

                    <section className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h2 className="font-bold uppercase text-slate-400 text-[10px] tracking-widest border-b pb-2">Руководство</h2>
                            <div className="flex gap-4">
                                <User className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">Худаир Жанна Рафхатовна</p>
                                    <p className="text-xs text-slate-500">Заместитель директора по контролю качества, врач высшей категории</p>
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

                    <section className="pt-8 border-t border-slate-100">
                        <h2 className="text-lg font-bold uppercase mb-6 text-[#1e40af]">Куда вы можете обратиться:</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-4 border border-slate-100 rounded space-y-2">
                                <p className="font-bold text-xs uppercase">Электронная почта</p>
                                <p className="text-blue-600">cpz.sekr@gmail.com</p>
                                <p className="text-blue-600">gncmck@mail.ru</p>
                            </div>
                            <div className="p-4 border border-slate-100 rounded space-y-2">
                                <p className="font-bold text-xs uppercase">Блог директора</p>
                                <p className="text-slate-500">Доступен на главной странице</p>
                                <p className="font-bold text-xs uppercase pt-2 text-[#1e40af]">Facebook: cpzalmaty</p>
                            </div>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-600" />
                                <h3 className="font-bold uppercase text-sm">Телефоны СПП и ВА:</h3>
                            </div>
                            <div className="text-sm space-y-2">
                                <p>Психиатрия: 376-55-84, 376-59-41</p>
                                <p>Наркология: 382-35-34</p>
                                <p>Call-center: 3000-103, 14-14</p>
                                <p>Телефон доверия: 13-03</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-blue-600" />
                                <h3 className="font-bold uppercase text-sm">Прием пациентов:</h3>
                            </div>
                            <div className="text-sm space-y-2">
                                <p>Ежедневно: 09:00 – 17:00 (Пн-Пт)</p>
                                <div className="flex gap-2 text-slate-500">
                                    <MapPin className="h-4 w-4" />
                                    <p>Кабинет №48, ул. А.Кекилбайулы 117а</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center pt-10 border-t border-slate-100">
                        <p className="text-blue-600 font-bold">
                            Мы благодарны Вам за Ваши обращения!
                        </p>
                    </div>
                </div>
            </main>
        </AppShell>
    )
}