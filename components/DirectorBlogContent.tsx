"use client"
import React from "react"

export function DirectorBlogContent() {
    return (
        <div className="max-w-4xl mx-auto py-10 px-6">
            {/* Hero Section */}
            <div className="relative mb-12 rounded-3xl overflow-hidden bg-gradient-to-br from-[#00B5C4] to-[#008A96] text-white shadow-2xl">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Content */}
                    <div className="w-full md:w-2/3 p-8 md:p-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                            Обращение руководителя
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                            Рахменшеев Сапар Куанышбекович
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 font-medium border-l-4 border-white/30 pl-4">
                            Директор КГП на ПХВ «Центр психического здоровья» Управления общественного здравоохранения г. Алматы
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Post Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                <div className="prose prose-lg prose-slate max-w-none">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">
                        Уважаемые посетители нашего сайта!
                    </h2>

                    <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                        <p>
                            Мы рады приветствовать вас на страницах официального сайта!
                        </p>

                        <p>
                            Надеемся с помощью нашего сайта стать ближе к вам, найти с вами взаимопонимание в вопросах оказания медицинских услуг и наладить обратную связь.
                        </p>

                        <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#00B5C4] font-medium">
                            «Любое ваше обращение не останется без внимания, ваши предложения, замечания будут приняты к сведению и помогут нам совершенствовать организацию медицинской помощи.»
                        </p>

                        <p>
                            Информационная открытость — это залог доверия между врачом и пациентом. Мы постоянно работаем над тем, чтобы каждый житель нашего города мог получить квалифицированную помощь и поддержку в нашем центре.
                        </p>

                        <p className="text-xl font-bold text-[#00B5C4] pt-8">
                            Желаю всем крепкого здоровья!
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-1">C уважением,</p>
                            <p className="text-xl font-black text-slate-900">Рахменшеев С.К.</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => window.print()}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors text-sm font-bold"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                                Печать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
