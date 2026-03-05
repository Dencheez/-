import { AppShell } from "@/components/app-shell"
import { MapPin, Phone, Clock, Mail, Globe, ChevronRight } from "lucide-react"

const branches = [
  {
    name: "Главный корпус",
    address: "г. Алматы, ул. Карасай Батыра, 44",
    phone: "3000-103",
    hours: "Пн-Пт: 8:00 - 20:00, Сб: 9:00 - 15:00",
  },
  {
    name: "Филиал 1",
    address: "г. Алматы, мкр. Алмагуль, 28",
    phone: "3000-104",
    hours: "Пн-Пт: 8:00 - 18:00",
  },
  {
    name: "Филиал 2",
    address: "г. Алматы, ул. Жандосова, 112",
    phone: "3000-105",
    hours: "Пн-Пт: 9:00 - 19:00",
  },
]

export default function ContactsPage() {
  return (
    <AppShell>
      <div className="p-4">
        <h1 className="text-lg font-bold text-foreground">Контакты и адреса</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Центр Психического Здоровья г. Алматы
        </p>

        {/* General Contacts */}
        <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h2 className="text-sm font-bold text-foreground">Общие контакты</h2>
          <div className="mt-3 flex flex-col gap-3">
            <a href="tel:3000103" className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Call-центр (24/7)</p>
                <p className="text-sm font-bold text-primary">3000-103</p>
              </div>
            </a>
            <a href="mailto:info@cpz.kz" className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-foreground">info@cpz.kz</p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Сайт</p>
                <p className="text-sm text-foreground">www.cpz.kz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Branches */}
        <h2 className="mt-6 text-sm font-bold text-foreground">Филиалы</h2>
        <div className="mt-3 flex flex-col gap-3">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <h3 className="text-sm font-bold text-foreground">{branch.name}</h3>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-xs text-muted-foreground leading-relaxed">{branch.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  <a href={`tel:${branch.phone.replace(/-/g, "")}`} className="text-xs font-medium text-primary">
                    {branch.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-xs text-muted-foreground leading-relaxed">{branch.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency */}
        <a
          href="tel:103"
          className="mt-6 flex items-center justify-between rounded-2xl bg-destructive p-4 text-primary-foreground shadow-lg"
        >
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5" />
            <div>
              <p className="text-sm font-bold">Экстренная помощь</p>
              <p className="text-xs opacity-90">Звоните 103</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 opacity-80" />
        </a>
      </div>
    </AppShell>
  )
}
