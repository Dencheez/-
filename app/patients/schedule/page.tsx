"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { ChevronLeft, Printer, Mail, MapPin, Clock, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

export default function SchedulePage() {
    const districts = [
        { name: "Алмалинский район", address: "ГП №8, ул. Туркебаева, д. 40", room: "125 каб." },
        { name: "Ауэзовский район", address: "ГП №10, мкр. Аксай-4, д. 17", room: "101-104 каб." },
        { name: "Жетысуский район", address: "ГП №11, мкр. Айнабулак-3, ул. Жумабаева, д. 87", room: "" },
        { name: "Медеуский район", address: "ГП №33, ул. Калдаякова, д. 74", room: "2 эт., 211 каб." },
        { name: "Бостандыкский район", address: "ЦПЗ, ул. А. Кекилбайулы, 117А", room: "" },
        { name: "Наурызбайский район", address: "ЦПЗ, ул. А. Кекилбайулы, 117А", room: "" },
        { name: "Турксибский район", address: "ЦПЗ, ул. А. Кекилбайулы, 117А", room: "" },
        { name: "Алатауский район", address: "ЦПЗ, ул. А. Кекилбайулы, 117А", room: "" },
    ]

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
                        График работы врачей
                    </h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="space-y-12 mb-20">

                    {/* Инфо-блок */}
                    <div className="flex items-center gap-3 text-blue-600 bg-blue-50 p-4 rounded-sm border-l-4 border-blue-600">
                        <Clock className="h-5 w-5" />
                        <p className="text-[13px] font-bold uppercase tracking-wide">
                            Диспансерные отделения: Психиатры и Наркологи
                        </p>
                    </div>

                    {/* ТАБЛИЦЫ (КАРТИНКИ) */}
                    <div className="space-y-6">
                        <div className="w-full aspect-[16/9] bg-slate-50 border-2 border-dashed border-slate-200 rounded flex flex-col items-center justify-center group hover:border-blue-300 transition-colors">
                            <ImageIcon className="h-12 w-12 text-slate-200 mb-2 group-hover:text-blue-200" />
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Таблица графика №1 (Картинка)</p>
                        </div>

                        <div className="w-full aspect-[16/9] bg-slate-50 border-2 border-dashed border-slate-200 rounded flex flex-col items-center justify-center group hover:border-blue-300 transition-colors">
                            <ImageIcon className="h-12 w-12 text-slate-200 mb-2 group-hover:text-blue-200" />
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Таблица графика №2 (Картинка)</p>
                        </div>
                    </div>

                    {/* АДРЕСА ПО РАЙОНАМ */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-100 pb-2">
                            Адреса отделений по районам
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {districts.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 border border-slate-50 bg-slate-50/50 rounded-lg">
                                    <div className="bg-white p-2 rounded shadow-sm">
                                        <MapPin className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-[14px] uppercase">{item.name}</p>
                                        <p className="text-slate-600 text-[13px]">{item.address}</p>
                                        {item.room && (
                                            <p className="text-blue-600 text-[11px] font-bold mt-1 uppercase">{item.room}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="p-6 border border-slate-200 text-blue-600 rounded-sm font-bold">
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2">Важно</p>
                        <p className="text-sm leading-relaxed">
                            При посещении диспансерного отделения при себе необходимо иметь оригинал удостоверения личности.
                            Для уточнения времени приема конкретного специалиста рекомендуем обращаться в регистратуру.
                        </p>
                    </div>

                </div>
            </main>

            <FooterCarousel />
        </div>
    )
}