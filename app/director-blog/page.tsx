import React from "react"
import { AppShell } from "@/components/app-shell"
import { Metadata } from "next"
import { DirectorBlogContent } from "@/components/DirectorBlogContent"

export const metadata: Metadata = {
    title: "Блог директора | Центр психического здоровья Алматы",
    description: "Официальное обращение директора Центра психического здоровья г. Алматы Рахменшееева Сапара Куанышбековича.",
}

export default function DirectorBlogPage() {
    return (
        <AppShell>
            <DirectorBlogContent />
        </AppShell>
    )
}
