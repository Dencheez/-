"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, CalendarPlus, User, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function BottomNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/appointment", label: t("appointment"), icon: CalendarPlus },
    { href: "/contacts", label: t("contacts"), icon: Phone },
    { href: "/profile", label: t("cabinet"), icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card md:hidden" role="navigation" aria-label="Main navigation">
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 py-1 text-xs transition-colors ${isActive
                ? "text-primary font-semibold"
                : "text-muted-foreground"
                }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
