'use client' // Это обязательно!

import { parseContentToHtml } from "@/components/content-parser"

interface NewsContentProps {
    html: string
}

export function NewsContent({ html }: NewsContentProps) {
    return (
        <div className="prose max-w-none text-slate-600">
            {parseContentToHtml(html)}
        </div>
    )
}