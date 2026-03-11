"use client"

import { AppShell } from "@/components/app-shell"
import { Download, Heart, ExternalLink, FileText, Search } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const zozhLinks = [
    { id: 1, title: "Количество выпитого алкоголя не повод для гордости", href: "http://almatyzoj.kz/doc/Alkogol_buklQ.pdf" },
    { id: 2, title: "Впереди экзаменационная сессия, сдача спортивных нормативов, вечеринка и тебе необходимо получить заряд энергии?", href: "http://almatyzoj.kz/doc/2EnergyQ.pdf" },
    { id: 3, title: "Питание школьника", href: "http://almatyzoj.kz/doc/Pitanie_BuklQ.pdf" },
    { id: 4, title: "Вирусные гепатиты", href: "http://almatyzoj.kz/doc/Gepatit_PlakatIIQ.pdf" },
    { id: 5, title: "Вирусные гепатиты (брошюра)", href: "http://almatyzoj.kz/doc/Gepatiti_BukQ.pdf" },
    { id: 6, title: "Что нужно знать о раке предстательной железы", href: "http://almatyzoj.kz/doc/RPGQ.pdf" },
    { id: 7, title: "Никотиновая зависимость", href: "http://almatyzoj.kz/doc/A5_NikotinQ.pdf" },
    { id: 8, title: "Курительные смес «отправляют» в точку НЕвозврата", href: "http://almatyzoj.kz/doc/Kur_smesiQ.pdf" },
    { id: 9, title: "СПИД не выбирает. Выбираем МЫ!", href: "http://almatyzoj.kz/doc/vichQ.pdf" },
    { id: 10, title: "Профилактика ВИЧ- инфекции", href: "http://almatyzoj.kz/doc/listovka_spidQ.pdf" },
    { id: 11, title: "Защита от инфекции, передаваемых половым путем – в твоих руках!", href: "http://almatyzoj.kz/doc/IPP_bukletQ.pdf" },
    { id: 12, title: "4 февраля – Всемирный день Борьбы против рака!", href: "http://almatyzoj.kz/doc/A3_MifQ.pdf" },
    { id: 13, title: "Защитить свою дочь от рака в моих силах!", href: "http://almatyzoj.kz/doc/listovka_Q.pdf" },
    { id: 14, title: "Защити себя", href: "http://almatyzoj.kz/doc/ozindi_korga.pdf" },
    { id: 15, title: "Маршрут беременной женщины", href: "http://almatyzoj.kz/doc/bukl_beremQ.pdf" },
    { id: 16, title: "Паспорт пациента с сахарным диабетом", href: "http://almatyzoj.kz/doc/pasportSD.pdf" },
    { id: 17, title: "Советы дядюшки светофора юному пешеходу!", href: "http://almatyzoj.kz/doc/listovka%20A6_detiQ.pdf" },
    { id: 18, title: "Защити себя от туберкулеза (буклет)", href: "http://almatyzoj.kz/doc/Kashel_buklQ.pdf" },
    { id: 19, title: "Защити себя от туберкулеза (плакат)", href: "http://almatyzoj.kz/doc/plak%20tybQ.jpg" },
    { id: 20, title: "Этикет кашля", href: "http://almatyzoj.kz/doc/Kashel_listQ.pdf" },
    { id: 21, title: "Быть здоровым под силу каждому! (календарь)", href: "http://almatyzoj.kz/doc/Fiz_kalendQ.pdf" },
    { id: 22, title: "Быть здоровым под силу каждому!", href: "http://almatyzoj.kz/doc/Fiz_listQ.pdf" },
    { id: 23, title: "Пройдите обучение в школах здоровья!", href: "http://almatyzoj.kz/doc/Pl_Bud%20zdorovQ.pdf" },
    { id: 24, title: "Как защитить себя и окружающих (плакат)", href: "http://almatyzoj.kz/doc/Grip_A3Qplakat.pdf" },
    { id: 25, title: "Как защитить себя и окружающих (листовка)", href: "http://almatyzoj.kz/doc/Grip_A5Q.pdf" },
    { id: 26, title: "Возможно это - инсульт", href: "http://almatyzoj.kz/doc/insult.pdf" },
    { id: 27, title: "Советы отдыхающим по профилактике Пищевых отравлений!", href: "http://almatyzoj.kz/doc/A3_OkiQ.pdf" },
    { id: 28, title: "Советы по предупреждению острых кишечных инфекций", href: "http://almatyzoj.kz/doc/Oki_BuklQ.pdf" },
    { id: 29, title: "Еще раз об острых заболеваниях и мерах их профилактики у детей", href: "http://almatyzoj.kz/doc/OKI_rus.pdf" },
    { id: 30, title: "Автомобиль, Дорога, Жизнь!", href: "http://almatyzoj.kz/doc/travmatizm.pdf" },
    { id: 31, title: "Ради жизни на земле изучаем ПДД", href: "http://almatyzoj.kz/doc/zhol.pdf" },
    { id: 32, title: "Национальный календарь прививок РК", href: "http://almatyzoj.kz/doc/Kalen%20priv_R.pdf" },
    { id: 33, title: "Острый коронарный синдром", href: "http://almatyzoj.kz/doc/Koronar_sind_listQ.pdf" },
    { id: 34, title: "Обратись в Молодежный центр здоровья", href: "http://almatyzoj.kz/doc/Bukl_MCZ_RusQ.pdf" },
    { id: 35, title: "Скрининг (плакат)", href: "http://almatyzoj.kz/doc/Skrining_PlakatQ.pdf" },
    { id: 36, title: "Адресное приглашение на скрининг", href: "http://almatyzoj.kz/doc/SkriningQ.pdf" },
    { id: 37, title: "Глаукома", href: "http://almatyzoj.kz/doc/Glaukom_listQ.pdf" },
    { id: 38, title: "С активным отпразднуем столетие!", href: "http://almatyzoj.kz/doc/Fest_zdorov_plakatQ.pdf" },
    { id: 39, title: "Азбука здоровья", href: "http://almatyzoj.kz/doc/Asbuka%20zd_Bukl2Q.pdf" },
    { id: 40, title: "Чуть ли не каждый день мы слышим подобные фразы «Наркотики – вред», «Наркотики – зло». Тогда почему их все кто – то употребляет?", href: "http://almatyzoj.kz/doc/Narko_buklQ.pdf" },
    { id: 41, title: "Как тебе поступить, если предлагают наркотик?", href: "http://almatyzoj.kz/doc/NarkoA3Q.pdf" },
    { id: 42, title: "Что необходимо знать о раке печени и как предупредить эту болезнь?", href: "http://almatyzoj.kz/doc/PechcenQ.pdf" },
    { id: 43, title: "Что необходимо знать о раке пищевода и раке желудка", href: "http://almatyzoj.kz/doc/onesh_askazan.pdf" },
    { id: 44, title: "Что нужно знать о раке толстой кишки", href: "http://almatyzoj.kz/doc/rak_rus.pdf" },
]

export default function ZOZHPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredLinks = zozhLinks.filter(link =>
        link.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-10 border-b border-slate-100 pb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-3xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter">
                            Пропаганда ЗОЖ
                        </h1>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-3xl">
                        Полезные материалы, памятки и брошюры по ведению здорового образа жизни, профилактике заболеваний и укреплению здоровья.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative mb-8 max-w-md w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Поиск по названию..."
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-[#00B5C4]/20 focus:border-[#00B5C4] transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {/* Links Grid */}
                <div className=" md:grid-cols-2 gap-4">
                    {filteredLinks.length > 0 ? (
                        filteredLinks.map((link) => (
                            <div key={link.id} className="group bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm hover:border-[#00B5C4]/30 transition-all duration-300 flex justify-between mb-4 overflow-hidden relative">
                                {/* Decor */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-50 rounded-full group-hover:scale-[3] group-hover:bg-[#00B5C4]/5 transition-all duration-500" />

                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-[#00B5C4] group-hover:text-white transition-colors duration-300 shrink-0">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">№ {link.id}</span>
                                        <h3 className="text-[13px] font-bold text-slate-800 leading-snug uppercase tracking-tight group-hover:text-[#00B5C4] transition-colors duration-300">
                                            {link.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 relative z-10">

                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-[#00B5C4] hover:bg-[#00B5C4]/10 transition-all border border-transparent hover:border-[#00B5C4]/20"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 flex flex-col items-center justify-center text-slate-400 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                            <Search className="w-12 h-12 mb-4 opacity-20" />
                            <p className="font-bold uppercase tracking-widest text-xs">Ничего не найдено</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-4 text-[#00B5C4] font-black uppercase text-[10px] tracking-widest hover:underline"
                            >
                                Сбросить поиск
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    )
}
