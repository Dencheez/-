"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import RightSidebar from './RightSidebar'
import { DirectorBlog } from '@/components/DirectorBlog'
import { SidebarExtraBlocks } from '@/components/SidebarExtraBlocks'

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [showMobileSidebar, setShowMobileSidebar] = useState(false)

    const isHome = pathname === '/' || pathname === '/ru' || pathname === '/kk'
    const isBlog = pathname.includes('/director-blog')

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
                        <div className="sticky top-24 p-4 flex flex-col items-center gap-6">
                            {isHome || isBlog ? (
                                <>
                                    <img src="/images/med_medal.jpg" className="w-[220px] h-auto" alt="Награда" />

                                    <Link href="https://kaz.inform.kz/tags/" className="w-[220px]">
                                        <img src="/images/kz_symbol.jpg" className="w-full h-auto" alt="Символика" />
                                    </Link>

                                    <img src="/images/doc-img.jpg" className="w-[220px] h-auto" alt="Документ" />

                                    <div className="w-[220px]">
                                        <img src="/images/apple.jpg" className="w-full h-auto" alt="Яблоко" />
                                    </div>

                                    <Link href="/contacts" className="w-[220px]">
                                        <img src="/images/call-center.png" className="w-full h-auto" alt="Калл центр" />
                                    </Link>
                                </>
                            ) : (
                                <RightSidebar />
                            )}
                        </div>
                    </aside>
                )}

                {/* ЦЕНТРАЛЬНЫЙ КОНТЕНТ */}
                <main className={`flex-1 min-w-0 bg-white ${isFullWidth ? 'w-full' : ''}`}>
                    <div className={`${isFullWidth ? 'p-4 md:p-8' : ''}`}>
                        {children}
                    </div>
                </main>

                {/* ПРАВАЯ ПАНЕЛЬ (Sticky) */}
                {(isHome || isBlog) && !isFullWidth && (
                    <aside className="hidden lg:block w-[350px] border-l border-slate-100 bg-slate-50/50">
                        <div className="sticky top-24 p-4 flex flex-col gap-6">
                            {!isBlog && <DirectorBlog />}
                            <RightSidebar />
                            <SidebarExtraBlocks />
                        </div>
                    </aside>
                )}
            </div>

            {/* Мобильная кнопка и сайдбар */}
            {
                !isFullWidth && (
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
                                <DirectorBlog onClose={() => setShowMobileSidebar(false)} />
                                <RightSidebar onClose={() => setShowMobileSidebar(false)} />
                            </div>
                        </aside>
                        {showMobileSidebar && (
                            <div className="fixed inset-0 bg-black/50 z-[55]" onClick={() => setShowMobileSidebar(false)} />
                        )}
                    </>
                )
            }
        </div >
    )
}