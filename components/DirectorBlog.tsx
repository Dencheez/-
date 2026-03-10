"use client"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function DirectorBlog() {
    return (
        <Link href="/director-blog" className="block w-full group overflow-hidden rounded-lg shadow-lg border border-[#00B5C4]/20 active:scale-[0.98] transition-all">
            <div className="flex flex-col">
                {/* Фото директора */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                        src="/images/директор.jpg"
                        alt="Директор"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/400x300/e2e8f0/475569?text=Директор";
                        }}
                    />
                    {/* Градиентный оверлей для текста если нужно, но в дизайне он снизу */}
                </div>

                {/* Информационный блок в стиле меню */}
                <div className="bg-[#00B5C4] p-4 text-white">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-1">
                                Блог директора
                            </p>
                            <h3 className="text-sm font-extrabold uppercase leading-tight">
                                Рахменшеев Сапар
                            </h3>
                        </div>
                        <div className="flex-shrink-0 ml-2 bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                            <ChevronRight size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}