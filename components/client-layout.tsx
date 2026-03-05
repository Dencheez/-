"use client"

import { AppointmentProvider } from "@/components/appointment-context"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppointmentProvider>{children}</AppointmentProvider>
}
