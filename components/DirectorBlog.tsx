import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function DirectorBlog() {
    return (
        <Link href="/director-blog" className="block w-full group">
            <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm active:scale-[0.98] transition-all">
                {/* Круглое фото директора */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-[#1e40af]/10">
                    <img
                        src="/images/director.jpg"
                        alt="Директор"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/100x100/1e40af/white?text=Д";
                        }}
                    />
                </div>

                {/* Текст ссылки */}
                <div className="flex-grow">
                    <p className="text-[9px] font-black uppercase text-[#1e40af] tracking-widest leading-none mb-1">
                        Личный блог
                    </p>
                    <p className="text-sm font-bold text-slate-800 leading-none">
                        Блог руководителя Центра
                    </p>
                </div>

                {/* Иконка перехода */}
                <div className="text-slate-300 group-hover:text-[#1e40af] transition-colors">
                    <ChevronRight size={20} />
                </div>
            </div>
        </Link>
    )
}