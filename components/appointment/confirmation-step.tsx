"use client"

import { useState } from "react" // Добавили useState
import { ArrowLeft, CalendarDays, Clock, User, CheckCircle2 } from "lucide-react"
import { type Doctor } from "@/lib/appointment-data"

interface ConfirmationStepProps {
  doctor: Doctor
  date: string
  time: string
  onBack: () => void
  onConfirm: (patientName: string, phone: string) => void
}

export function ConfirmationStep({
  doctor,
  date,
  time,
  onBack,
  onConfirm,
}: ConfirmationStepProps) {
  // 1. Создаем переменные для хранения того, что ты вводишь
  const [patientName, setPatientName] = useState("Нурлан Ахметов")
  const [phone, setPhone] = useState("+7 (777) 123-45-67")

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-primary font-medium"
      >
        <ArrowLeft className="h-4 w-4" />
        Назад
      </button>

      <h2 className="mt-3 text-lg font-bold text-foreground">Подтверждение</h2>
      <p className="mt-1 text-sm text-muted-foreground">Шаг 3 из 3</p>

      {/* Appointment Summary Card */}
      <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {doctor.avatar}
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">{doctor.name}</p>
            <p className="text-xs text-primary">{doctor.specialty}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">{date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">{time}</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-primary" />
            {/* 2. Теперь здесь будет отображаться то, что ты вводишь */}
            <span className="text-sm text-foreground">{patientName}</span>
          </div>
        </div>
      </div>

      {/* Patient Info Form */}
      <div className="mt-4 flex flex-col gap-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground" htmlFor="patient-name">ФИО пациента</label>
          <input
            id="patient-name"
            type="text"
            value={patientName} // 3. Привязываем значение к стейту
            onChange={(e) => setPatientName(e.target.value)} // Обновляем при вводе
            className="mt-1 w-full rounded-xl border border-border bg-card py-2.5 px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground" htmlFor="patient-phone">Телефон</label>
          <input
            id="patient-phone"
            type="tel"
            value={phone} // 4. Привязываем телефон
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-card py-2.5 px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground" htmlFor="complaint">Жалобы (необязательно)</label>
          <textarea
            id="complaint"
            rows={3}
            placeholder="Опишите ваши жалобы..."
            className="mt-1 w-full rounded-xl border border-border bg-card py-2.5 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          />
        </div>
      </div>

      <button
        // 5. САМОЕ ВАЖНОЕ: передаем реальные переменные в функцию
        onClick={() => onConfirm(patientName, phone)}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
      >
        <CheckCircle2 className="h-4 w-4" />
        Подтвердить запись
      </button>
    </div>
  )
}