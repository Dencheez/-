"use client"
import { Suspense, useState } from 'react'
import { AppShell } from "@/components/app-shell"
import { DoctorSelect } from "@/components/appointment/doctor-select"
import { DateTimeSelect } from "@/components/appointment/datetime-select"
import { ConfirmationStep } from "@/components/appointment/confirmation-step"
import { SuccessScreen } from "@/components/appointment/success-screen"
import { useAppointments } from "@/components/appointment-context"
import type { Doctor } from "@/lib/appointment-data"
import { supabase } from "@/app/lib/supabase"
import { useUser } from "@clerk/nextjs"

type Step = "doctor" | "datetime" | "confirm" | "success"

// 1. Основная логика вынесена в отдельный внутренний компонент
function AppointmentForm() {
  const [step, setStep] = useState<Step>("doctor")
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

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

  const handleConfirm = async (patientName: string, phone: string) => {
    if (!selectedDoctor || !user) {
      console.error("Ошибка: Врач не выбран или пользователь не авторизован")
      return
    }

    const { error } = await supabase.from("appointments").insert({
      user_id: user.id,
      patient_name: patientName,
      phone: phone,
      service_type: selectedDoctor.specialty,
      date: selectedDate,
      time: selectedTime,
      status: "upcoming",
      reason: `Запись к врачу: ${selectedDoctor.name}`
    })

    if (error) {
      console.error("Ошибка сохранения в Supabase:", error.message)
      alert("Не удалось сохранить запись в базу данных.")
      return
    }

    addAppointment({
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      date: selectedDate,
      time: selectedTime,
      status: "upcoming",
      patientName,
      phone: phone,
    } as any)

    setStep("success")
  }

  const resetFlow = () => {
    setStep("doctor")
    setSelectedDoctor(null)
    setSelectedDate("")
    setSelectedTime("")
  }

  return (
    <div className="p-4">
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
  )
}

// 2. Главный экспорт страницы, обернутый в Suspense
export default function AppointmentPage() {
  return (
    <AppShell>
      <Suspense fallback={<div className="p-10 text-center">Загрузка формы...</div>}>
        <AppointmentForm />
      </Suspense>
    </AppShell>
  )
}