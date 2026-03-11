"use client"

import { AppShell } from "@/components/app-shell"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const departments = [
    "1 общепсихиатрическое мужское отделение",
    "2 общепсихиатрическое женское отделение",
    "3 общепсихиатрическое мужское отделение",
    "4 общепсихиатрическое женское отделение",
    "5 детское психиатрическое отделение",
    "6 общепсихиатрическое мужское отделение",
    "7 отделение психосоматических расстройств",
    "Административно-хозяйственный отдел",
    "Платное отделение",
    "Приемный покой",
    "Скорая помощь"
]

export default function PsychiatryPage() {
    return (
        <AppShell>
            <MainLayoutWrapper>
                <div className="flex flex-col w-full p-4 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100">
                        Отделения Психиатрической службы
                    </h1>

                    <div className="flex flex-col gap-2">
                        {departments.map((dept, idx) => (
                            <div
                                key={idx}
                                className="w-full bg-[#00B5C4] hover:bg-[#009da8] p-4 md:p-5 flex justify-between items-center cursor-pointer shadow-sm"
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
