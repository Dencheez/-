"use client"
import { AppShell } from "@/components/app-shell"
import { ChevronLeft, ShieldCheck, Stethoscope, FileText, MessageSquare, HelpCircle, HeartPulse, UserRound, ClipboardList, Headphones } from "lucide-react"
import Link from "next/link"

export default function PatientsPage() {
    const patientNav = [
        { title: "ОСМС", href: "/patients/osms", icon: <ShieldCheck className="h-5 w-5" /> },
        { title: "ГОБМП", href: "/patients/gobmp", icon: <Stethoscope className="h-5 w-5" /> },
        { title: "Часто задаваемые вопросы", href: "/patients/faq", icon: <HelpCircle className="h-5 w-5" /> },
        { title: "Обращения", href: "/patients/appeals", icon: <MessageSquare className="h-5 w-5" /> },
        { title: "График врачей", href: "/patients/schedule", icon: <ClipboardList className="h-5 w-5" /> },
        { title: "Лекарственный формуляр", href: "/patients/formulary", icon: <FileText className="h-5 w-5" /> },
        { title: "Права и обязанности", href: "/patients/rights", icon: <UserRound className="h-5 w-5" /> },
        { title: "Вопрос-ответ", href: "/patients/qna", icon: <HeartPulse className="h-5 w-5" /> },
        { title: "Служба поддержки", href: "/patients/support", icon: <Headphones className="h-5 w-5" /> },
    ]

    return (
        <AppShell>
            <main className="max-w-6xl mx-auto px-6 py-6 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <Link href="/" className="flex items-center gap-2 text-slate-400 uppercase text-[10px] mb-2">
                            <ChevronLeft className="h-3 w-3" /> На главную
                        </Link>
                        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                            Пациентам
                        </h1>
                    </div>

                    {/* Иконки удалены */}
                    <div className="bg-white p-3 px-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="text-center">
                            <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">Просмотров</p>
                            <p className="text-sm font-black text-blue-600">1 199 150</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {patientNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group bg-white border border-slate-100 p-5 rounded-2xl flex items-center gap-4 shadow-sm"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <span className="text-[13px] font-bold text-slate-700 uppercase leading-tight">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden mb-20">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-black text-slate-900 uppercase mb-8 leading-tight">Уважаемые посетители!</h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mb-6">
                            Мы рады приветствовать вас на страницах официального сайта Центра психического здоровья.
                        </p>
                        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <p className="text-2xl text-slate-900">Желаю всем здоровья!</p>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Директор центра</p>
                                <p className="text-xl font-black text-slate-900 uppercase">Рахменшеев С.К.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AppShell>
    )
}