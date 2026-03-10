"use client"
import { MapPin, Phone, Mail, Clock, ChevronRight, Instagram, Facebook, Send } from "lucide-react"
import Link from "next/link"

export default function ContactsPage() {
    const contacts = [
        { title: "Психиатрическая служба", phone: "+7 (727) 376-56-60", link: "tel:77273765660" },
        { title: "Наркологическая служба", phone: "+7 (727) 382-34-62", link: "tel:77273823462" },
        { title: "Телефон доверия", phone: "13-03", link: "tel:1303" },
        { title: "Телефон доверия (моб.)", phone: "8 708 983 28 63", link: "tel:87089832863" },
        { title: "Поликлиника детская", phone: "8 747 496 64 20", link: "tel:87474966420" },
        { title: "Приемная / Канцелярия", phone: "cpz.sekr@gmail.com", link: "mailto:cpz.sekr@gmail.com" }
    ]

    return (
        <div className="w-full bg-white">
            <main className="max-w-6xl mx-auto w-full">
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8 md:mb-12">
                    Контакты
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Левая колонка */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link
                            href="https://2gis.kz/almaty/geo/9429940000795430"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-5 md:p-8 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-[0.97]"
                        >
                            <div className="mr-4 md:mr-6 bg-white/20 p-3 md:p-4 rounded-full shrink-0">
                                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-white" />
                            </div>
                            <div className="flex-grow">
                                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Центр психического здоровья</p>
                                <p className="text-lg md:text-2xl font-bold leading-tight">ул. А. Кекилбайулы, 117</p>
                                <p className="text-xs md:text-sm font-medium opacity-90 mt-1 italic underline underline-offset-4 decoration-white/30">Открыть маршрут в 2ГИС</p>
                            </div>
                            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 opacity-40 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {contacts.map((contact, idx) => (
                                <a
                                    key={idx}
                                    href={contact.link}
                                    className="p-4 md:p-6 border border-slate-100 bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all flex flex-col group"
                                >
                                    <span className="text-[9px] md:text-[10px] font-black uppercase text-slate-400 mb-1 group-hover:text-blue-500 transition-colors">
                                        {contact.title}
                                    </span>
                                    <span className="text-base md:text-xl font-bold text-slate-900 leading-none">
                                        {contact.phone}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Правая колонка */}
                    <div className="space-y-6">
                        <div className="p-6 md:p-8 border-2 border-slate-900 rounded-3xl bg-white">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="h-5 w-5 text-blue-600" />
                                <h3 className="font-black uppercase text-sm tracking-tight">Режим работы</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm md:text-base font-bold">
                                    <span className="text-slate-400 uppercase text-xs">Пн — Пт</span>
                                    <span className="text-slate-900 tracking-tight text-right">08:00 – 17:00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm md:text-base font-bold text-red-500">
                                    <span className="uppercase text-xs">Сб — Вс</span>
                                    <span className="text-right">Выходной</span>
                                </div>
                                <div className="pt-4 border-t border-slate-100 mt-4">
                                    <p className="text-[10px] md:text-[11px] text-slate-400 leading-snug italic font-medium">
                                        * Приемный покой и стационар работают круглосуточно 24/7.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 bg-slate-900 text-white rounded-3xl shadow-2xl shadow-slate-200">
                            <h3 className="font-black uppercase text-xs mb-6 tracking-widest text-slate-400">Мы в соцсетях</h3>
                            <div className="flex gap-4">
                                <Link href="#" className="flex-1 flex flex-col items-center gap-2 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"><Instagram className="h-6 w-6" /></Link>
                                <Link href="#" className="flex-1 flex flex-col items-center gap-2 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"><Facebook className="h-6 w-6" /></Link>
                                <Link href="#" className="flex-1 flex flex-col items-center gap-2 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"><Send className="h-6 w-6" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}