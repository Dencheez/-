"use client"
import Link from "next/link"

export default function AboutCenterPage() {
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                <Link href="/UsefulLinks" className="text-blue-500 hover:underline">Назад</Link>
            </main>
        </div>
    );
}