"use client"

import { CheckCircle2, CalendarDays, Clock, User } from "lucide-react"
import Link from "next/link"

interface SuccessScreenProps {
  doctorName: string
  specialty: string
  date: string
  time: string
  onNewAppointment: () => void
}

export function SuccessScreen({
  doctorName,
  specialty,
  date,
  time,
  onNewAppointment,
}: SuccessScreenProps) {
  return (
    <div className="flex flex-col items-center px-2 py-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E6FAF5]">
        <CheckCircle2 className="h-10 w-10 text-[#0D9488]" />
      </div>

      <h2 className="mt-4 text-xl font-bold text-foreground">Запись оформлена!</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Вы успешно записались на приём
      </p>

      {/* Appointment Card */}
      <div className="mt-6 w-full rounded-2xl border border-border bg-card p-5 text-left shadow-sm">
        <p className="text-sm font-bold text-foreground">{doctorName}</p>
        <p className="text-xs text-primary">{specialty}</p>
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">Нурлан Ахметов</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col gap-3">
        <Link
          href="/profile"
          className="w-full rounded-2xl bg-primary py-3.5 text-center text-sm font-bold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
        >
          Мои записи
        </Link>
        <button
          onClick={onNewAppointment}
          className="w-full rounded-2xl border border-primary py-3.5 text-sm font-bold text-primary transition-transform active:scale-[0.98]"
        >
          Записаться ещё
        </button>
      </div>
    </div>
  )
}
