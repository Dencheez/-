import { AppShell } from "@/components/app-shell"
import Link from "next/link"
import { Brain, Stethoscope, Heart, Pill, Users, Activity, Baby, Shield, ChevronRight } from "lucide-react"

const allServices = [
  {
    icon: Brain,
    title: "Консультация психолога",
    description: "Индивидуальные консультации по вопросам психического здоровья",
    color: "text-primary",
    bg: "bg-[#E3F0FF]",
  },
  {
    icon: Stethoscope,
    title: "Амбулаторная помощь",
    description: "Диагностика и лечение на амбулаторной основе",
    color: "text-[#0D9488]",
    bg: "bg-[#E6FAF5]",
  },
  {
    icon: Heart,
    title: "Психотерапия",
    description: "Когнитивно-поведенческая, гештальт, психоаналитическая терапия",
    color: "text-[#E91E63]",
    bg: "bg-[#FDE8EF]",
  },
  {
    icon: Pill,
    title: "Медикаментозное лечение",
    description: "Назначение и контроль медикаментозной терапии",
    color: "text-[#F57C00]",
    bg: "bg-[#FFF3E0]",
  },
  {
    icon: Users,
    title: "Групповая терапия",
    description: "Терапевтические группы для взрослых и подростков",
    color: "text-primary",
    bg: "bg-[#E3F0FF]",
  },
  {
    icon: Activity,
    title: "Диагностика",
    description: "Психологическая и психиатрическая диагностика",
    color: "text-[#7B1FA2]",
    bg: "bg-[#F3E5F5]",
  },
  {
    icon: Baby,
    title: "Детская психология",
    description: "Консультации и терапия для детей и подростков",
    color: "text-[#0D9488]",
    bg: "bg-[#E6FAF5]",
  },
  {
    icon: Shield,
    title: "Наркологическая помощь",
    description: "Лечение зависимостей и реабилитация",
    color: "text-destructive",
    bg: "bg-[#FFE8E8]",
  },
]

export default function ServicesPage() {
  return (
    <AppShell>
      <div className="p-4">
        <h1 className="text-lg font-bold text-foreground">Все услуги</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Центр Психического Здоровья г. Алматы
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {allServices.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href="/appointment"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.bg}`}>
                  <Icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground">{service.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Link>
            )
          })}
        </div>
      </div>
    </AppShell>
  )
}
