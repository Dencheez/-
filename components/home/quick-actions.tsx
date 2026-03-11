"use client"

import Link from "next/link"
import { CalendarCheck, MapPin, Zap } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function QuickActions() {
  const { t } = useLanguage()

  const quickActions = [
    {
      href: "/appointment",
      icon: CalendarCheck,
      label: t("book"),
      sublabel: t("on_appointment"),
      color: "text-primary",
      bg: "bg-[#E3F0FF]",
    },
    {
      href: "/contacts",
      icon: MapPin,
      label: t("contacts"),
      sublabel: t("and_addresses"),
      color: "text-primary",
      bg: "bg-[#E3F0FF]",
    },
    {
      href: "tel:103",
      icon: Zap,
      label: t("emergency"),
      sublabel: t("help"),
      color: "text-destructive",
      bg: "bg-[#FFE8E8]",
    },
  ]

  return (
    <div className=" md:mx-4 mt-[-25px] grid grid-cols-3 gap-2 md:gap-3">
      {quickActions.map((action) => {
        const Icon = action.icon
        return (
          <Link
            key={action.href}
            href={action.href}
            className="flex flex-col items-center gap-1 md:gap-2 rounded-xl md:rounded-2xl border border-border bg-card p-2 md:p-4 text-center shadow-sm"
          >
            {/* Иконка: h-9 на мобилке, h-12 на десктопе */}
            <div className={`flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl ${action.bg}`}>
              <Icon className={`h-5 w-5 md:h-6 md:w-6 ${action.color}`} />
            </div>
            <div>
              {/* Текст: 10px на мобилке, sm (14px) на десктопе */}
              <p className="text-[10px] md:text-sm font-bold text-foreground leading-tight">
                {action.label}
              </p>
              {/* Подтекст: 8px на мобилке, xs (12px) на десктопе */}
              <p className="text-[8px] md:text-xs text-muted-foreground leading-tight">
                {action.sublabel}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}