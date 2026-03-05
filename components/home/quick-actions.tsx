import Link from "next/link"
import { CalendarCheck, MapPin, Zap } from "lucide-react"

const quickActions = [
  {
    href: "/appointment",
    icon: CalendarCheck,
    label: "Записаться",
    sublabel: "на приём",
    color: "text-primary",
    bg: "bg-[#E3F0FF]",
  },
  {
    href: "/contacts",
    icon: MapPin,
    label: "Контакты",
    sublabel: "и адреса",
    color: "text-primary",
    bg: "bg-[#E3F0FF]",
  },
  {
    href: "tel:103",
    icon: Zap,
    label: "Экстренная",
    sublabel: "помощь",
    color: "text-destructive",
    bg: "bg-[#FFE8E8]",
  },
]

export function QuickActions() {
  return (
    <div className="mx-4 mt-4 grid grid-cols-3 gap-3">
      {quickActions.map((action) => {
        const Icon = action.icon
        return (
          <Link
            key={action.href}
            href={action.href}
            className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:shadow-md active:scale-[0.97]"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.bg}`}>
              <Icon className={`h-6 w-6 ${action.color}`} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{action.label}</p>
              <p className="text-xs text-muted-foreground">{action.sublabel}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
