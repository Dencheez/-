'use client'
import { useState } from 'react'
import { supabase } from '@/app/lib/supabase'
import { Calendar, User, Phone, CheckCircle2 } from 'lucide-react'

export default function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    
    const { error } = await supabase.from('appointments').insert([{
      patient_name: formData.get('name'),
      phone: formData.get('phone'),
      service_type: formData.get('service'),
      status: 'pending'
    }])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-[2rem] shadow-xl text-center border border-green-100 animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">Запись принята!</h3>
        <p className="text-slate-500">Мы перезвоним вам в течение 15 минут.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-[#0052B4] font-medium">Сделать еще одну запись</button>
      </div>
    )
  }

  return (
    <div className="bg-white p-1 rounded-[2rem] shadow-2xl bg-gradient-to-b from-white to-blue-50/30">
      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
        <div className="text-center mb-2">
          <h2 className="text-[#0052B4] text-2xl font-black italic uppercase tracking-tight">Запись на прием</h2>
          <p className="text-slate-400 text-sm">Центр Психического Здоровья</p>
        </div>

        {/* Поле Имя */}
        <div className="relative">
          <User className="absolute left-4 top-4 h-5 w-5 text-blue-400" />
          <input 
            name="name" 
            placeholder="Ваше имя" 
            className="w-full pl-12 pr-4 py-4 bg-white border border-blue-100 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 transition-all shadow-sm"
            required 
          />
        </div>

        {/* Поле Телефон */}
        <div className="relative">
          <Phone className="absolute left-4 top-4 h-5 w-5 text-blue-400" />
          <input 
            name="phone" 
            type="tel"
            placeholder="Номер телефона" 
            className="w-full pl-12 pr-4 py-4 bg-white border border-blue-100 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 transition-all shadow-sm"
            required 
          />
        </div>

        {/* Выбор услуги */}
        <div className="relative">
          <Calendar className="absolute left-4 top-4 h-5 w-5 text-blue-400" />
          <select 
            name="service" 
            className="w-full pl-12 pr-4 py-4 bg-white border border-blue-100 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 shadow-sm appearance-none cursor-pointer"
          >
            <option>Консультация психолога</option>
            <option>Амбулаторная помощь</option>
            <option>Экстренная помощь</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full mt-2 py-4 bg-gradient-to-r from-[#0052B4] to-[#1E88E5] text-white font-bold rounded-2xl hover:opacity-90 transition-all shadow-lg active:scale-[0.97] disabled:opacity-50"
        >
          {status === 'loading' ? 'Отправка...' : 'ПОДТВЕРДИТЬ ЗАПИСЬ'}
        </button>
        
        {status === 'error' && <p className="text-red-500 text-center text-xs">Ошибка. Попробуйте снова.</p>}
      </form>
    </div>
  )
}