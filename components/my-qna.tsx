"use client";

import React, { useState, useEffect } from "react";
import {
    MessageSquare,
    MessageCircle,
    Clock,
    CheckCircle2
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useUser } from "@clerk/nextjs";

export default function MyQnaContent() {
    const { user } = useUser();
    const [userQuestions, setUserQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) return;

        const fetchUserQuestions = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('qna')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && data) {
                setUserQuestions(data);
            }
            setLoading(false);
        };

        fetchUserQuestions();
    }, [user]);
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm md:text-xl font-black text-slate-800 uppercase">История обращений</h2>
                <span className="text-[10px] font-bold bg-slate-100 px-3 py-1 rounded-[18px] text-slate-500">
                    Всего: {userQuestions.length}
                </span>
            </div>

            <div className="grid gap-6">
                {loading ? (
                    <p className="text-center py-10 text-slate-400 text-xs animate-pulse">Загрузка данных...</p>
                ) : userQuestions.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50/50 rounded-[2rem] border-2 border-dashed border-slate-100">
                        <MessageCircle className="w-8 h-8 text-slate-200 mx-auto mb-3" />
                        <p className="text-slate-400 font-medium text-xs">У вас пока нет активных обращений.</p>
                    </div>
                ) : (
                    userQuestions.map((q) => (
                        <div key={q.id} className="bg-white border-slate-100 rounded-[2rem] p-5 md:p-6 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    {q.status === 'published' ? (
                                        <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full text-[8px] font-black uppercase">
                                            <CheckCircle2 className="w-3 h-3" /> Ответ получен
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 bg-yellow-50 text-yellow-600 px-2 py-1 rounded-full text-[8px] font-black uppercase">
                                            <Clock className="w-3 h-3" /> На рассмотрении
                                        </div>
                                    )}
                                </div>
                                <span className="text-[10px] text-slate-300 font-bold">
                                    {new Date(q.created_at).toLocaleDateString('ru-RU')}
                                </span>
                            </div>

                            <div className="mb-5 text-left">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Ваш вопрос:</p>
                                <p className="text-sm md:text-base font-bold text-slate-800 leading-snug">{q.question}</p>
                            </div>

                            {q.answer ? (
                                <div className="bg-[#00B5C4]/5 border border-[#00B5C4]/10 rounded-2xl p-4 md:p-5 text-left">
                                    <p className="text-[9px] font-black text-[#00B5C4] uppercase mb-2">Ответ специалиста:</p>
                                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                                        «{q.answer}»
                                    </p>
                                </div>
                            ) : (
                                <p className="text-[10px] text-slate-400 bg-slate-50 p-3 rounded-xl text-center">
                                    Ваше обращение обрабатывается специалистами.
                                </p>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}