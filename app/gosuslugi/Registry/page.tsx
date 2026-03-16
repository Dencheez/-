"use client"

import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

export default function RegistryPage() {
    const { t } = useLanguage()
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Link href="/gosuslugi" className="text-blue-500 hover:underline">Назад</Link>
            </main>
            <FooterCarousel />
        </div>
    )
}