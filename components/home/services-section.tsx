import Link from "next/link"
import { ChevronRight, Brain, Stethoscope, Heart, Pill, Users, Activity } from "lucide-react"

const services = [
  {
    icon: Brain,
    label: "Приём психолога",
    color: "text-primary",
    bg: "bg-[#E3F0FF]",
  },
  {
    icon: Stethoscope,
    label: "Амбулаторная помощь",
    color: "text-[#0D9488]",
    bg: "bg-[#E6FAF5]",
  },
  {
    icon: Heart,
    label: "Психотерапия",
    color: "text-[#E91E63]",
    bg: "bg-[#FDE8EF]",
  },
  {
    icon: Pill,
    label: "Медикаменты",
    color: "text-[#F57C00]",
    bg: "bg-[#FFF3E0]",
  },
  {
    icon: Users,
    label: "Групповая терапия",
    color: "text-primary",
    bg: "bg-[#E3F0FF]",
  },
  {
    icon: Activity,
    label: "Диагностика",
    color: "text-[#7B1FA2]",
    bg: "bg-[#F3E5F5]",
  },
]

export function ServicesSection() {
  return (
    <section className="mt-6 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Услуги центра</h2>
        <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-primary">
          Все услуги
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Link
              key={service.label}
              href="/appointment"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-sm transition-all hover:shadow-md active:scale-[0.97]"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${service.bg}`}>
                <Icon className={`h-5 w-5 ${service.color}`} />
              </div>
              <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2">{service.label}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
