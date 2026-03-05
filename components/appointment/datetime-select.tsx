"use client"

import { useState, useMemo } from "react"
import { ArrowLeft, Clock } from "lucide-react"
import { generateDates, getTimeSlots, type Doctor } from "@/lib/appointment-data"

interface DateTimeSelectProps {
  doctor: Doctor
  onBack: () => void
  onSelect: (date: string, time: string) => void
}

export function DateTimeSelect({ doctor, onBack, onSelect }: DateTimeSelectProps) {
  const dates = useMemo(() => generateDates(), [])
  const timeSlots = useMemo(() => getTimeSlots(), [])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-primary font-medium"
      >
        <ArrowLeft className="h-4 w-4" />
        Назад
      </button>

      <h2 className="mt-3 text-lg font-bold text-foreground">Дата и время</h2>
      <p className="mt-1 text-sm text-muted-foreground">Шаг 2 из 3</p>

      {/* Selected Doctor */}
      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-secondary p-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
          {doctor.avatar}
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{doctor.name}</p>
          <p className="text-xs text-primary">{doctor.specialty}</p>
        </div>
      </div>

      {/* Date Selection */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-foreground">Выберите дату</h3>
        <div className="mt-2 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {dates.map((d) => (
            <button
              key={d.label}
              onClick={() => {
                setSelectedDate(d.label)
                setSelectedTime(null)
              }}
              className={`flex shrink-0 flex-col items-center rounded-xl px-4 py-2.5 text-xs transition-colors ${
                selectedDate === d.label
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground"
              }`}
            >
              <span className="font-medium">{d.dayName}</span>
              <span className="mt-0.5 font-bold">{d.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="mt-4">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <Clock className="h-4 w-4" />
            Выберите время
          </h3>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                disabled={!slot.available}
                onClick={() => setSelectedTime(slot.time)}
                className={`rounded-xl py-2.5 text-xs font-medium transition-colors ${
                  !slot.available
                    ? "bg-muted text-muted-foreground/40 cursor-not-allowed line-through"
                    : selectedTime === slot.time
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {selectedDate && selectedTime && (
        <button
          onClick={() => onSelect(selectedDate, selectedTime)}
          className="mt-6 w-full rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
        >
          Продолжить
        </button>
      )}
    </div>
  )
}
