"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { DoctorSelect } from "@/components/appointment/doctor-select"
import { DateTimeSelect } from "@/components/appointment/datetime-select"
import { ConfirmationStep } from "@/components/appointment/confirmation-step"
import { SuccessScreen } from "@/components/appointment/success-screen"
import { useAppointments } from "@/components/appointment-context"
import type { Doctor } from "@/lib/appointment-data"

// Добавляем импорты для работы с базой и пользователем
import { supabase } from "@/app/lib/supabase"
import { useUser } from "@clerk/nextjs"

type Step = "doctor" | "datetime" | "confirm" | "success"

export default function AppointmentPage() {
  const [step, setStep] = useState<Step>("doctor")
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  // Получаем данные текущего пользователя
  const { user } = useUser()
  const { addAppointment } = useAppointments()

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setStep("datetime")
  }

  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDate(date)
    setSelectedTime(time)
    setStep("confirm")
  }

  // Обновленная функция подтверждения с сохранением в Supabase
  const handleConfirm = async (patientName: string) => {
    if (!selectedDoctor || !user) {
      console.error("Ошибка: Врач не выбран или пользователь не авторизован")
      return
    }

    // 1. Сохраняем в Supabase
    const { error } = await supabase.from("appointments").insert({
      user_id: user.id,           // Привязка к аккаунту
      patient_name: patientName,
      service_type: selectedDoctor.specialty,
      date: selectedDate,
      time: selectedTime,
      status: "upcoming",         // Устанавливаем статус «АКТИВНА»
      reason: `Запись к врачу: ${selectedDoctor.name}`
    })

    if (error) {
      console.error("Ошибка сохранения в Supabase:", error.message)
      alert("Не удалось сохранить запись в базу данных.")
      return
    }

    // 2. Дублируем в локальный контекст (если нужно для работы других компонентов)
    addAppointment({
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      date: selectedDate,
      time: selectedTime,
      status: "upcoming",
      patientName,
    })

    // 3. Переходим к экрану успеха
    setStep("success")
  }

  const resetFlow = () => {
    setStep("doctor")
    setSelectedDoctor(null)
    setSelectedDate("")
    setSelectedTime("")
  }

  return (
    <AppShell>
      <div className="p-4">
        {/* Progress Bar */}
        {step !== "success" && (
          <div className="mb-4 flex gap-1.5">
            {["doctor", "datetime", "confirm"].map((s, i) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${i <= ["doctor", "datetime", "confirm"].indexOf(step)
                  ? "bg-primary"
                  : "bg-border"
                  }`}
              />
            ))}
          </div>
        )}

        {step === "doctor" && <DoctorSelect onSelect={handleDoctorSelect} />}

        {step === "datetime" && selectedDoctor && (
          <DateTimeSelect
            doctor={selectedDoctor}
            onBack={() => setStep("doctor")}
            onSelect={handleDateTimeSelect}
          />
        )}

        {step === "confirm" && selectedDoctor && (
          <ConfirmationStep
            doctor={selectedDoctor}
            date={selectedDate}
            time={selectedTime}
            onBack={() => setStep("datetime")}
            onConfirm={handleConfirm}
          />
        )}

        {step === "success" && selectedDoctor && (
          <SuccessScreen
            doctorName={selectedDoctor.name}
            specialty={selectedDoctor.specialty}
            date={selectedDate}
            time={selectedTime}
            onNewAppointment={resetFlow}
          />
        )}
      </div>
    </AppShell>
  )
}