"use client"
import { useEffect } from "react"

export default function OsmsPage() {
    useEffect(() => {
        // Небольшая задержка, чтобы пользователь успел понять, что происходит
        const timer = setTimeout(() => {
            window.location.replace("https://msqory.kz/ru/")
        }, 800)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex min-h-screen bg-slate-50 items-center justify-center p-6">
            <div className="max-w-xs w-full text-center space-y-6">
                {/* Анимированный индикатор */}
                <div className="relative flex justify-center">
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent"></div>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Переход к ОСМС</h2>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                        Вы перенаправляетесь на официальный <br /> портал msqory.kz
                    </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                    <p className="text-[9px] text-slate-300 font-medium italic uppercase">
                        Фонд социального медицинского страхования
                    </p>
                </div>
            </div>
        </div>
    )
}