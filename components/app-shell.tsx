"use client"

import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-background md:max-w-5xl lg:max-w-6xl">
      <Header />
      <main className="pb-20 md:pb-10">{children}</main>
      <BottomNav />
    </div>
  )
}
