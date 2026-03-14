import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { LayoutList, ChevronLeft, Download, FileArchive, ChevronRight, Eye } from "lucide-react"
import { getProcurement } from "@/app/admin/actions"

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function GoszakupPage({
    searchParams,
}: {
    searchParams: any;
}) {
    const params = await searchParams;
    const itemsPerPage = 6;
    const currentPage = Number(params?.page) || 1;


    const result = await getProcurement(currentPage, itemsPerPage) as any;

    const procurementItems = result.data || [];
    const totalCount = result.count || 0;
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 md:p-8 gap-10">
                {/* Header */}
                <div className="border-b border-slate-100 pb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight leading-tight">
                        Государственные закупки
                    </h1>
                </div>

                {/* Downloadable plans */}
                <section className="flex-1">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-5">
                        Документы для скачивания
                    </h2>

                    {procurementItems.length === 0 ? (
                        <div className="text-center py-12">
                            <h2 className="text-xl font-medium text-slate-500">Документов пока нет</h2>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {procurementItems.map((doc: any) => {
                                const docType = doc.type === 'plan' ? 'План' : doc.type === 'protocol' ? 'Протокол' : 'Объявление'
                                // Проверяем наличие либо прямой ссылки в контенте, либо загруженного файла
                                const isLink = doc.content?.startsWith('http') || doc.content?.startsWith('/') || doc.file_url

                                return (
                                    <div
                                        key={doc.id}
                                        className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all hover:shadow-md"
                                    >
                                        <div className="w-12 h-12 bg-[#00B5C4]/10 rounded-xl flex items-center justify-center shrink-0">
                                            <FileArchive className="w-6 h-6 text-[#00B5C4]" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                                                {new Date(doc.created_at).getFullYear()} · {docType}
                                            </span>
                                            <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-snug">
                                                {doc.title}
                                            </p>
                                        </div>

                                        {isLink ? (
                                            <a href={doc.file_url || doc.content} target="_blank" rel="noopener noreferrer" className="shrink-0 w-full sm:w-auto">
                                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00B5C4] transition-all">
                                                    <Download className="w-4 h-4" />
                                                    Скачать
                                                </button>
                                            </a>
                                        ) : (
                                            <Link href={`/goszakup/ads`} className="shrink-0 w-full sm:w-auto">
                                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#00B5C4] text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all">
                                                    <Eye className="w-4 h-4" />
                                                    Подробнее
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )}

                    {/* ПАГИНАЦИЯ */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12 pb-10">
                            <Link
                                href={`/goszakup?page=${Math.max(currentPage - 1, 1)}`}
                                className={`w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center transition-all hover:bg-slate-50 ${currentPage === 1 ? 'opacity-30 pointer-events-none' : ''}`}
                            >
                                <ChevronLeft className="w-4 h-4 text-slate-600" />
                            </Link>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <Link
                                    key={p}
                                    href={`/goszakup?page=${p}`}
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-[10px] transition-all ${currentPage === p
                                        ? 'bg-[#00B5C4] text-white shadow-lg shadow-[#00B5C4]/20'
                                        : 'bg-white border border-slate-100 text-slate-400 hover:bg-slate-50'
                                        }`}
                                >
                                    {p}
                                </Link>
                            ))}

                            <Link
                                href={`/goszakup?page=${Math.min(currentPage + 1, totalPages)}`}
                                className={`w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center transition-all hover:bg-slate-50 ${currentPage === totalPages ? 'opacity-30 pointer-events-none' : ''}`}
                            >
                                <ChevronRight className="w-4 h-4 text-slate-600" />
                            </Link>
                        </div>
                    )}
                </section>
            </div>
        </AppShell>
    )
}