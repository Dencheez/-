"use client"
import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, Printer, Mail, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const AccordionItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="border-b border-slate-100">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 flex justify-between items-center text-left hover:text-blue-600 transition-colors group"
            >
                <span className="text-[14px] font-bold uppercase tracking-tight pr-4">{question}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-300 group-hover:text-blue-600 flex-shrink-0" />}
            </button>
            {isOpen && (
                <div className="pb-6 text-[15px] leading-relaxed text-slate-600 whitespace-pre-wrap animate-in fade-in slide-in-from-top-2 duration-300">
                    {answer}
                </div>
            )}
        </div>
    )
}

export default function FAQPage() {
    return (
        <AppShell>
            <main className="flex-grow max-w-5xl mx-auto px-6 py-4 w-full">
                <Link href="/patients" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-4 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Назад
                </Link>

                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Часто задаваемые вопросы</h1>
                    <div className="flex gap-4 mb-1">
                        <Printer className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                        <Mail className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-900" />
                    </div>
                </div>

                <div className="mb-4">
                    <span className="text-[10px] font-bold text-slate-300 uppercase">Просмотров: 21962</span>
                </div>

                <div className="border-t border-slate-100 mb-12">
                    <AccordionItem
                        question="Как получить справки от психиатра и нарколога?"
                        answer="Справку о состоянии / не состоянии на диспансерном учете можно получить бесплатно через:\nа) некоммерческое акционерное общество «Государственная корпорация «Правительство для граждан» - ЦОНы.\nб) мобильное приложение eGov mobile\nв) веб – портал «электронного правительства» www.egov.kz"
                    />
                    <AccordionItem
                        question="Справки для иностранных граждан (миграция)?"
                        answer="Справки о медицинском освидетельствовании об отсутствии заболеваний (приказ МЗ РК от 30.09.2011г. №664), выдаются гражданам и лицам без гражданства при их личном обращении психиатру (наркологу) с письменного согласия или его законных представителей в отношении несовершеннолетнего. Справки выдаются на платной основе."
                    />
                    <AccordionItem
                        question="Медицинская справка форма № 073/у (водительское удостоверение)?"
                        answer="Врач-психиатр–нарколог должен провести медицинский осмотр и дать заключение после результатов исследования биологических сред на предмет употребления психоактивных веществ (наркотестирование).\nАдреса комиссий:\n— ул. Абиша Кекилбайулы 117-а, (бывшая ул. Каблукова) — психиатрическая служба.\n— ул. Макатаева, 10 — наркологическая служба.\nВремя работы: с 8.00 - 17.00, перерыв с 13.00 – 14.00, ежедневно, кроме субботы, воскресенья. Нужны: удостоверение личности или паспорт."
                    />
                    <AccordionItem
                        question="Медицинская комиссия на оружие (форма 076/у)?"
                        answer="Обязательно нужно предоставить в разрешительную систему заключение установленного образца (форму 076/у). Медкомиссии: ул. Абиша Кекилбайулы 117-а и ул. Макатаева, 10. Время работы: с 8.00 - 17.00."
                    />
                    <AccordionItem
                        question="Платная консультация психиатра?"
                        answer="Психиатрическая помощь в рамках ГОБМП оказывается бесплатно по месту жительства. Платные медицинские услуги по инициативе пациента можно получить в соответствии с утверждённым прейскурантом цен."
                    />
                    <AccordionItem
                        question="Тест на употребление синтетических наркотиков?"
                        answer="Да, по адресу: г. Алматы, улица Макатаева 10. Применяются экспресс-тест полоски, которые определяют почти все наркотические вещества, в том числе 30 видов синтетических наркотиков."
                    />
                    <AccordionItem
                        question="Что такое кодирование и его эффективность?"
                        answer="Кодирование не может применяться как самостоятельное лечение. Для эффективности нужен комплексный подход. Тактика врача зависит от стажа применения веществ и психологического состояния."
                    />
                    <AccordionItem
                        question="Лечение токсикомании, игромании (лудомании) и иногородних?"
                        answer="— Токсикомания: Да, занимаемся.\n— Игромания: Да, лечением занимаются врачи-психиатры и психотерапевты.\n— Жители других областей: Бесплатная помощь в рамках ГОБМП оказывается только прикрепленному населению г. Алматы. Жители области обращаются в г. Талгар, ул. Асан Кайгы 45."
                    />
                    <AccordionItem
                        question="Как заставить лечиться от алкоголизма при отказе?"
                        answer="Необходимо обратиться в РОВД с заявлением об оформлении родственника на принудительное лечение. Участковый инспектор примет меры по оформлению в наркологическое учреждение по месту прописки на бесплатной основе."
                    />
                    <AccordionItem
                        question="Режим работы и экстренные контакты?"
                        answer="Кабинет экспертизы и приемный покой работают КРУГЛОСУТОЧНО.\nТел: 382-36-21 (наркология, ул. Макатаева, 10)\nТел: 229-11-06, 229-12-44 (психиатрия, ул. А. Кекилбайулы, 117а)"
                    />

                    <div className="mt-10 mb-4 px-4 py-2 bg-slate-50 border-l-4 border-blue-600">
                        <h3 className="text-sm font-bold uppercase text-slate-900 tracking-widest">Статистика и Нормативная база</h3>
                    </div>

                    <AccordionItem
                        question="Официальная статистика и возраст зависимых?"
                        answer={`В 2021 году число лиц на учете: 18 693 человека.\nСоотношение мужчин к женщинам — 1:11.\n\nСтатистика динамического наблюдения:\n— Алкоголизм: 91 725 (2021г)\n— Наркомания: 18 693 (2021г)\n— Игровая зависимость: 9 (2021г)\n\nСредний возраст: 40-45 лет (опиоиды), 30-35 лет (синтетика), 20-25 лет (растворители).`}
                    />
                    <AccordionItem
                        question="Законодательство (Лудомания и ГОБМП)?"
                        answer="Лудомания классифицируется в МКБ-10 (шифр F 63.0). Согласно Кодексу РК «О здоровье народа», лечение оказывается в рамках ГОБМП."
                    />
                    <AccordionItem
                        question="Определение степени опьянения (промилле)?"
                        answer="Оценка в промилле носит ориентировочный характер. Основой остаются данные клинического обследования. Концентрация до 0,5‰ обычно трактуется как «признаки опьянения не выявлены» (субклиническая фаза)."
                    />
                </div>

                <div className="mb-20 space-y-8 border-t border-slate-100 pt-10">
                    <h3 className="font-bold text-slate-900 uppercase text-lg tracking-tight">Руководство Центра</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-blue-600 uppercase">Директор</p>
                            <p className="font-bold text-slate-900 uppercase">Рахменшеев Сапар Куттыбаевич</p>
                            <p className="text-slate-500 text-sm">376-55-75, 382-36-44</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-blue-600 uppercase">Зам. директора по мед. части (Психиатрия)</p>
                            <p className="font-bold text-slate-900 uppercase">Жолдыбаева Жанна Сагатовна</p>
                            <p className="text-slate-500 text-sm">376-55-93</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-blue-600 uppercase">Зам. директора по мед. части (Наркология)</p>
                            <p className="font-bold text-slate-900 uppercase">Абдыбаева Гульмира Оспанбаевна</p>
                            <p className="text-slate-500 text-sm">382-35-61</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-blue-600 uppercase">Зам. директора по реабилитации</p>
                            <p className="font-bold text-slate-900 uppercase">Татиева Роза Жексембаевна</p>
                            <p className="text-slate-500 text-sm">382-35-33</p>
                        </div>
                    </div>
                </div>
            </main>
        </AppShell>
    )
}