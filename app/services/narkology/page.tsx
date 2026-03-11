"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const departments = [
    "Отделение №1 мужское",
    "Отделение №2 женское",
    "Отделение №3 - мужское",
    "Отделение №4 - мужское",
    "Отделение №5",
    "Отделение №6 - временной адаптации и детоксикации",
    "Отделение №7 - мужское",
    "Отделение №8 - мужское",
    "Отделение №9 - реанимации и интенсивной терапии",
    "Отделение №10 мужское",
    "Поликлиническое отделение",
    "Отделение приемного покоя",
    "Отделение оказания платных медицинских услуг"
]

export default function NarcologyPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100">
                        Отделения Наркологической службы
                    </h1>

                    <div className="flex flex-col gap-2">
                        {departments.map((dept, idx) => (
                            <div
                                key={idx}
                                className="w-full bg-[#00B5C4] hover:bg-[#009da8] transition-colors p-4 md:p-5 flex justify-between items-center cursor-pointer shadow-sm"
                            >
                                <span className="text-black font-medium text-sm md:text-base">
                                    {dept}
                                </span>
                                <ChevronRight className="w-5 h-5 text-black/50" />
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayoutWrapper>
        </AppShell>
    )
}
