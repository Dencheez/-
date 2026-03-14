"use server"

import { auth } from "@clerk/nextjs/server"
import { supabase } from "@/app/lib/supabase"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation" // Добавили импорт

async function checkAdmin() {
    const { sessionClaims } = await auth()
    const role = (sessionClaims?.metadata as { role?: string })?.role
    if (role !== "admin" && role !== "doctor") {
        throw new Error("Unauthorized: ты не админ")
    }
}

// Универсальная функция для получения любых постов (новости, статьи и т.д.)
export async function getPostsAction(category: string = 'news', page: number = 1, pageSize: number = 30) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data, error, count } = await supabase
        .from('posts')
        .select('*', { count: 'exact' })
        .eq('category', category)
        .order('created_at', { ascending: false })
        .range(from, to);

    if (error) {
        console.error("Supabase error:", error);
        return { data: [], count: 0 };
    }

    return { data: data || [], count: count || 0 };
}
//новости
export async function createPostAction(formData: FormData) {
    await checkAdmin(); // Проверка прав перед записью

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const category = formData.get('category') as string;
    const image_url = formData.get('image_url') as string;

    const { error } = await supabase
        .from('posts')
        .insert([{ title, content, category, image_url }]);

    if (error) {
        console.error("Ошибка вставки:", error.message);
        return { success: false, error: error.message };
    }

    revalidatePath('/news');
    revalidatePath('/admin');
    // Добавляем ревалидацию для всех страниц, где может быть этот контент
    revalidatePath(`/${category}`);

    return { success: true };
}

// Экшен для получения (то что мы делали для списка)
export async function getNewsAction(page: number = 1, pageSize: number = 30) {
    return getPostsAction('news', page, pageSize);
}

// --- Vacancies ---
export async function addVacancy(data: { title: string; salary?: string; experience?: string; description: string }) {
    await checkAdmin()
    const { error } = await supabase.from('vacancies').insert([data])
    if (error) throw error
    revalidatePath('/admin')
    revalidatePath('/vacancies')
    redirect('/vacancies') // Редирект после добавления
}

export async function deleteVacancy(id: string) {
    await checkAdmin()
    const { error } = await supabase.from('vacancies').delete().eq('id', id)
    if (error) throw error
    revalidatePath('/admin')
    revalidatePath('/vacancies')
    redirect('/vacancies') // Редирект после удаления
}

// --- Posts ---
export async function addPost(data: { category: string; title: string; content: string }) {
    await checkAdmin()
    const { error } = await supabase.from('posts').insert([data])
    if (error) throw error
    revalidatePath('/admin')
    revalidatePath(`/${data.category}`)
    redirect(`/${data.category}`) // Редирект после добавления
}

export async function deletePost(id: string, category: string) {
    await checkAdmin()
    const { error } = await supabase.from('posts').delete().eq('id', id)
    if (error) throw error
    revalidatePath('/admin')
    revalidatePath(`/${category}`)
    redirect(`/${category}`) // Редирект после удаления
}

export async function getProcurement(page: number = 1, pageSize: number = 6) {
    const from = (page - 1) * pageSize
    const to = from + pageSize - 1

    const { data, error, count } = await supabase
        .from('procurement')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to)

    if (error) throw error

    // МЫ ВОЗВРАЩАЕМ ОБЪЕКТ
    return {
        data: (data as any[]) || [],
        count: count || 0
    }
}

// --- Procurement ---
export async function addProcurement(data: { title: string, type: string, content: string, file_url?: string }) {
    const { error } = await supabase
        .from('procurement')
        .insert([
            {
                title: data.title,
                type: data.type, // записываем в колонку type вместо section
                content: data.content,
                file_url: data.file_url
            }
        ])

    if (error) throw error

    revalidatePath('/admin')
    revalidatePath('/goszakup')
    revalidatePath('/goszakup/ads')
}
export async function deleteProcurement(id: string | number) {
    const { error } = await supabase
        .from('procurement')
        .delete()
        .eq('id', id)

    if (error) throw error
    revalidatePath('/goszakup/ads')
}



// --- QnA ---
export async function replyQna(id: string, answer: string) {
    await checkAdmin()
    const { error } = await supabase.from('qna').update({ answer, status: 'published' }).eq('id', id)
    if (error) throw error
    revalidatePath('/admin')
    revalidatePath('/qna')
}

export async function deleteQna(id: string) {
    await checkAdmin()
    const { error } = await supabase.from('qna').delete().eq('id', id)
    if (error) throw error
    revalidatePath('/admin')
    revalidatePath('/qna')
    redirect('/qna')
}