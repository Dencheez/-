"use client";

import Link from "next/link";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function NotFound() {
    const { t } = useLanguage() as any; // Добавляем 'as any' здесь, чтобы убрать ошибки типизации

    // Теперь TypeScript не будет ругаться на эти строки
    const title = t?.notFoundTitle || "Страница не найдена";
    const description = t?.notFoundDesc || "Похоже, эта страница ушла в отпуск или никогда не существовала.";
    const homeBtn = t?.backToHome || "На главную";
    const backBtn = t?.goBack || "Вернуться назад";

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-8">

                {/* Анимированный блок с цифрами */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-[#00B5C4]/20 blur-3xl rounded-full scale-150 animate-pulse" />
                    <div className="relative bg-white w-28 h-28 md:w-36 md:h-36 mx-auto rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <span className="text-5xl md:text-6xl font-black text-[#00B5C4] tracking-tighter">404</span>
                    </div>
                </div>

                {/* Текстовый блок */}
                <div className="space-y-3 px-4">
                    <h1 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-tight">
                        {title}
                    </h1>
                    <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Кнопки */}
                <div className="flex flex-col gap-3 pt-4 px-2">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-3 bg-[#00B5C4] hover:bg-[#009ba7] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
                    >
                        <Home className="w-5 h-5" />
                        <span>{homeBtn}</span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{backBtn}</span>
                    </button>
                </div>

                {/* Подпись */}
                <div className="pt-12 flex items-center justify-center gap-2 text-slate-300">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                        Центр психического здоровья Алматы
                    </span>
                </div>
            </div>
        </div>
    );
}