"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { DoctorSelect } from "@/components/appointment/doctor-select"
import { DateTimeSelect } from "@/components/appointment/datetime-select"
import { ConfirmationStep } from "@/components/appointment/confirmation-step"
import { SuccessScreen } from "@/components/appointment/success-screen"
import { useAppointments } from "@/components/appointment-context"
import type { Doctor } from "@/lib/appointment-data"

type Step = "doctor" | "datetime" | "confirm" | "success"

export default function AppointmentPage() {
  const [step, setStep] = useState<Step>("doctor")
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
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

  const handleConfirm = (patientName: string) => {
    if (!selectedDoctor) return
    addAppointment({
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      date: selectedDate,
      time: selectedTime,
      status: "upcoming",
      patientName,
    })
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
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= ["doctor", "datetime", "confirm"].indexOf(step)
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
