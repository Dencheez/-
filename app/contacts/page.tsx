import { AppShell } from "@/components/app-shell"
import { MapPin, Phone, Clock, Mail, Globe, ChevronRight, ShieldAlert } from "lucide-react"

const branches = [
  {
    name: "Наркологическая служба",
    address: "г. Алматы, ул. Макатаева, 10", // Уточненный адрес по скрину
    phone: "+7 727 382-34-62",
    hours: "24/7 без выходных",
  },
  {
    name: "Психиатрическая служба",
    address: "г. Алматы, ул. Макатаева, 10",
    phone: "8 727 376-56-60",
    hours: "24/7 без выходных",
  },
]

// Специализированные линии со старого сайта
const supportLines = [
  { label: "Республиканский Call-центр", value: "3580", color: "text-blue-600" },
  { label: "Единый контакт-центр", value: "14-14", color: "text-blue-600" },
  { label: "Телефон доверия (городской)", value: "13-03", color: "text-red-600" },
  { label: "Телефон доверия (сотовый)", value: "8 708 983 28 63", color: "text-red-600" },
  { label: "Детская поликлиника", value: "8 747 496 64 20", color: "text-green-600" },
]

export default function ContactsPage() {
  return (
    <AppShell>
      <div className="p-4 pb-20">
        <h1 className="text-xl font-bold text-foreground">Контакты и адреса</h1>

        {/* Основные контакты */}
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Единый Call-центр</h2>
            <a href="tel:3000103" className="mt-3 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-primary">3000-103</p>
                <p className="text-xs text-muted-foreground">Бесплатно с городских и мобильных</p>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a href="mailto:cpz.sekr@gmail.com" className="rounded-2xl border border-border bg-card p-4 shadow-sm flex flex-col gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-[11px] font-bold truncate">cpz.sekr@gmail.com</p>
            </a>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm flex flex-col gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <p className="text-xs text-muted-foreground">Сайт</p>
              <a href="https://cpzalmaty.kz" className="text-[11px] font-bold">cpzalmaty.kz</a>
            </div>
          </div>
        </div>

        {/* Специализированные службы */}
        <h2 className="mt-8 text-sm font-bold text-foreground flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-primary" />
          Службы поддержки
        </h2>
        <div className="mt-3 rounded-2xl border border-border bg-card overflow-hidden divide-y divide-border shadow-sm">
          {supportLines.map((line) => (
            <a key={line.value} href={`tel:${line.value.replace(/\s/g, "")}`} className="flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
              <span className="text-xs font-medium text-gray-600">{line.label}</span>
              <span className={`text-sm font-bold ${line.color}`}>{line.value}</span>
            </a>
          ))}
        </div>

        {/* Филиалы */}
        <h2 className="mt-8 text-sm font-bold text-foreground">Наши подразделения</h2>
        <div className="mt-3 space-y-3">
          {branches.map((branch) => (
            <div key={branch.name} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">{branch.name}</h3>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-xs text-muted-foreground">{branch.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${branch.phone}`} className="text-xs font-bold text-primary">{branch.phone}</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-xs text-muted-foreground">{branch.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  )
}