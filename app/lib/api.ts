import { supabase } from './supabase'

// --- VACANCIES ---
export async function getVacancies() {
  const { data, error } = await supabase.from('vacancies').select('*').order('created_at', { ascending: false })
  if (error) console.error("Error fetching vacancies:", error)
  return data || []
}

export async function getVacancyById(id: string) {
  const { data, error } = await supabase.from('vacancies').select('*').eq('id', id).single()
  if (error) console.error("Error fetching vacancy:", error)
  return data
}

// --- QNA ---
export async function getQna() {
  const { data, error } = await supabase.from('qna').select('*').order('created_at', { ascending: false })
  if (error) console.error("Error fetching QNA:", error)
  return data || []
}

export async function getQnaById(id: string) {
  const { data, error } = await supabase.from('qna').select('*').eq('id', id).single()
  if (error) console.error("Error fetching QNA item:", error)
  return data
}

// --- POSTS ---
export async function getPosts(category?: string) {
  let query = supabase.from('posts').select('*').order('created_at', { ascending: false })
  if (category) {
    query = query.eq('category', category)
  }
  const { data, error } = await query
  if (error) console.error("Error fetching posts:", error)
  return data || []
}

export async function getPostById(id: string) {
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single()
  if (error) console.error("Error fetching post:", error)
  return data
}

// --- PROCUREMENT ---
export async function getProcurement() {
  const { data, error } = await supabase.from('procurement').select('*').order('created_at', { ascending: false })
  if (error) console.error("Error fetching procurement:", error)
  return data || []
}

export async function getProcurementById(id: string) {
  const { data, error } = await supabase.from('procurement').select('*').eq('id', id).single()
  if (error) console.error("Error fetching procurement item:", error)
  return data
}

// --- GALLERY ---
export async function getGallery() {
  const { data, error } = await supabase.from('gallery').select('*').order('created_at', { ascending: false })
  if (error) console.error("Error fetching gallery:", error)
  return data || []
}

// --- JOURNALS ---
export async function getJournals() {
  const { data, error } = await supabase.from('journals').select('*').order('created_at', { ascending: false })
  if (error) console.error("Error fetching journals:", error)
  return data || []
}
