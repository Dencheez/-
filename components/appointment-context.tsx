"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Appointment } from "@/lib/appointment-data"

interface AppointmentContextType {
  appointments: Appointment[]
  addAppointment: (appt: Omit<Appointment, "id">) => void
  cancelAppointment: (id: string) => void
}

const AppointmentContext = createContext<AppointmentContextType | null>(null)

export function useAppointments() {
  const ctx = useContext(AppointmentContext)
  if (!ctx) throw new Error("useAppointments must be used within AppointmentProvider")
  return ctx
}

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "demo-1",
      doctorId: "1",
      doctorName: "Иванова Анна Петровна",
      specialty: "Психолог",
      date: "10 мар",
      time: "10:00",
      status: "upcoming",
      patientName: "Нурлан Ахметов",
    },
    {
      id: "demo-2",
      doctorId: "3",
      doctorName: "Касымова Айгуль Маратовна",
      specialty: "Психиатр",
      date: "28 фев",
      time: "14:00",
      status: "completed",
      patientName: "Нурлан Ахметов",
    },
  ])

  const addAppointment = useCallback((appt: Omit<Appointment, "id">) => {
    setAppointments((prev) => [
      ...prev,
      { ...appt, id: `appt-${Date.now()}` },
    ])
  }, [])

  const cancelAppointment = useCallback((id: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "cancelled" as const } : a))
    )
  }, [])

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, cancelAppointment }}>
      {children}
    </AppointmentContext.Provider>
  )
}
