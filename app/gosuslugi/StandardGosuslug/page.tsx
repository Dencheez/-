"use client"
import Link from "next/link"

export default function StandardGosuslugPage() {
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                <Link href="/gosuslugi" className="text-blue-500 hover:underline">Назад</Link>
            </main>
        </div>
    );
}