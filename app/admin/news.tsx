"use client"

import React from "react";
import { createPostAction } from "./actions";

export default function AdminNewsPage() {
    async function handleSubmit(formData: FormData) {
        try {
            const res = await createPostAction(formData);
            if (res?.success) alert("Новость добавлена!");
        } catch (e) {
            alert("Ошибка при сохранении");
        }
    }

    return (
        <div className="p-8 max-w-2xl bg-white rounded-[32px] shadow-sm">
            <h1 className="text-2xl font-black uppercase mb-6">Добавить новость</h1>
            <form action={handleSubmit} className="space-y-4">
                <input type="hidden" name="category" value="news" />

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Заголовок</label>
                    <input name="title" required className="p-4 rounded-2xl border border-slate-100 outline-none focus:border-primary transition-all font-bold" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Текст новости</label>
                    <textarea name="content" required rows={6} className="p-4 rounded-2xl border border-slate-100 outline-none focus:border-primary transition-all resize-none" />
                </div>

                <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[12px] tracking-widest hover:bg-[#00B5C4] transition-all">
                    Опубликовать
                </button>
            </form>
        </div>
    );
}