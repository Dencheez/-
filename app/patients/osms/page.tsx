"use client"
import { useEffect } from "react"

export default function OsmsPage() {
    useEffect(() => {
        // Мгновенный переход на внешний сайт в том же окне
        window.location.replace("https://msqory.kz/ru/")
    }, [])

    return (
        <div className="flex min-h-screen bg-white items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Переход на msqory.kz...
                </p>
            </div>
        </div>
    )
}