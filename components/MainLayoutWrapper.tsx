"use client"

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import RightSidebar from './RightSidebar'
import { DirectorBlog } from '@/components/DirectorBlog' // 1. Импортируем блог

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [showMobileSidebar, setShowMobileSidebar] = useState(false)

    const isHome = pathname === '/' || pathname === '/ru' || pathname === '/kk'

    const isFullWidth = pathname.includes('/profile') ||
        pathname.includes('/dashboard') ||
        pathname.includes('/contacts') ||
        pathname.includes('/login')

    return (
        <div className="flex-grow w-full flex bg-white">
            <div className="flex w-full min-h-screen">

                {/* ЛЕВАЯ ПАНЕЛЬ (Sticky) */}
                {!isFullWidth && (
                    <aside className="hidden lg:block w-[300px] border-r border-slate-100 bg-slate-50/50">
                        <div className="sticky top-24 p-4 flex flex-col gap-5">
                            {isHome ? (
                                <>
                                    <div className="bg-white p-2 rounded shadow-sm border border-slate-100">
                                        <img src="/images/left/med_medal.jpg" className="w-full h-auto" alt="Награда" />
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm border border-slate-100">
                                        <img src="/images/left/kz_symbol.jpg" className="w-full h-auto" alt="Символика" />
                                    </div>
                                    <img src="/images/left/sos_med.jpg" className="w-full rounded shadow-sm" alt="SOS" />
                                </>
                            ) : (
                                <RightSidebar />
                            )}
                        </div>
                    </aside>
                )}

                {/* ЦЕНТРАЛЬНЫЙ КОНТЕНТ */}
                <main className={`flex-1 min-w-0 bg-white ${isFullWidth ? 'w-full' : ''}`}>
                    {/* Убрал лишние паддинги md:p-8, чтобы баннер прилипал к краям, если нужно */}
                    <div className={`${isFullWidth ? 'p-4 md:p-8' : ''}`}>
                        {children}
                    </div>
                </main>

                {/* ПРАВАЯ ПАНЕЛЬ (Sticky) - Блог директора теперь ВСЕГДА ТУТ СВЕРХУ */}
                {isHome && !isFullWidth && (
                    <aside className="hidden lg:block w-[350px] border-l border-slate-100 bg-slate-50/50">
                        <div className="sticky top-24 p-4 flex flex-col gap-6">

                            {/* 2. Блог директора встал намертво в начало правой колонки */}
                            <DirectorBlog />

                            <RightSidebar />
                            <div className="flex flex-col gap-4">
                                <img src="/images/right/health_banner.jpg" className="w-full rounded shadow-sm" alt="ЗОЖ" />
                                <img src="/images/right/damumed_logo.png" className="w-full px-4" alt="Damumed" />
                            </div>
                        </div>
                    </aside>
                )}
            </div>

            {/* Мобильная кнопка и сайдбар */}
            {!isFullWidth && (
                <>
                    <div className="fixed lg:hidden bottom-24 right-6 z-50">
                        <button
                            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                            className="bg-[#00B5C4] text-white p-4 rounded-full shadow-2xl"
                        >
                            {showMobileSidebar ? <ChevronRight /> : <ChevronLeft />}
                        </button>
                    </div>
                    <aside className={`
                        fixed top-0 right-0 h-full z-[60] lg:hidden
                        transition-transform duration-300 transform
                        ${showMobileSidebar ? 'translate-x-0' : 'translate-x-full'}
                        bg-white w-[300px] p-6 shadow-2xl overflow-y-auto
                    `}>
                        {/* На мобилке тоже добавим его в начало сайдбара */}
                        <div className="flex flex-col gap-6">
                            <DirectorBlog />
                            <RightSidebar />
                        </div>
                    </aside>
                    {showMobileSidebar && (
                        <div className="fixed inset-0 bg-black/50 z-[55]" onClick={() => setShowMobileSidebar(false)} />
                    )}
                </>
            )}
        </div>
    )
}