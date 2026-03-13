"use server"

import { auth } from "@clerk/nextjs/server"
import { supabase } from "@/app/lib/supabase"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation" // Добавили импорт

async function checkAdmin() {
    const { sessionClaims } = await auth()
    const role = (sessionClaims?.metadata as { role?: string })?.role
    if (role !== "admin" && role !== "doctor") {
        throw new Error("Unauthorized: requires admin privileges")
    }
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

// --- Procurement ---
export async function addProcurement(data: { section: string; title: string; content: string }) {
    await checkAdmin()
    const { error } = await supabase.from('procurement').insert([data])
    if (error) throw error
    revalidatePath('/admin')
    revalidatePath('/goszakup')
    redirect('/goszakup')
}

export async function deleteProcurement(id: string) {
    await checkAdmin()
    const { error } = await supabase.from('procurement').delete().eq('id', id)
    if (error) throw error
    revalidatePath('/admin')
    revalidatePath('/goszakup')
    redirect('/goszakup')
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