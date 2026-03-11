import { AppShell } from "@/components/app-shell"
import { MapPin, Phone, Clock, Mail, Globe, ChevronRight, ShieldAlert, User, Briefcase } from "lucide-react"

// Группируем данные из той огромной таблицы
const registryPhones = [
  { label: "Регистратура (Психиатрия)", value: "+7 (727) 376-55-86" },
  { label: "Детская регистратура", value: "+7 (747) 496-64-20" },
  { label: "Регистратура (Наркология)", value: "+7 (727) 382-34-19" },
]

const specializedDepts = [
  { label: "Платное отд. (Психиатрия)", value: "+7 (727) 376-54-40" },
  { label: "Платное отд. (Наркология)", value: "+7 (727) 382-36-81" },
  { label: "Приемный покой (24/7)", value: "+7 (727) 229-11-06" },
]

export default function ContactsPage() {
  return (
    <AppShell>
      <div className="p-4 pb-24">
        <h1 className="text-xl font-bold text-foreground">Контакты</h1>

        {/* Блок руководства */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Руководство</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase">Директор</p>
              <p className="text-sm font-bold">Рахменшеев Сапар Куттыбаевич</p>
              <a href="tel:77273765575" className="text-xs text-primary font-medium">8 (727) 376-55-75</a>
            </div>
            <div className="h-[1px] bg-border" />
            <div>
              <p className="text-[10px] text-muted-foreground uppercase">Приемная директора</p>
              <a href="tel:77273765595" className="text-sm font-bold text-primary">8 (727) 376-55-95</a>
            </div>
          </div>
        </div>

        {/* Регистратуры */}
        <h2 className="mt-8 text-sm font-bold text-foreground">Регистратуры</h2>
        <div className="mt-3 grid grid-cols-1 gap-2">
          {registryPhones.map((item) => (
            <div key={item.label} className="flex justify-between items-center p-4 rounded-xl border border-border bg-white">
              <span className="text-xs font-medium text-gray-600">{item.label}</span>
              <a href={`tel:${item.value}`} className="text-xs font-bold text-primary">{item.value}</a>
            </div>
          ))}
        </div>

        {/* Специализированные отделения */}
        <h2 className="mt-8 text-sm font-bold text-foreground">Отделения</h2>
        <div className="mt-3 space-y-2">
          {specializedDepts.map((item) => (
            <div key={item.label} className="flex justify-between items-center p-4 rounded-xl border border-border bg-white">
              <span className="text-xs font-medium text-gray-600">{item.label}</span>
              <a href={`tel:${item.value}`} className="text-xs font-bold text-primary">{item.value}</a>
            </div>
          ))}
        </div>

        {/* Экстренная помощь (яркая карточка) */}
        <div className="mt-8 rounded-2xl bg-red-50 border border-red-100 p-5">
          <div className="flex items-center gap-3 text-red-600 mb-2">
            <ShieldAlert className="h-5 w-5" />
            <h3 className="font-bold text-sm uppercase">Круглосуточная помощь</h3>
          </div>
          <p className="text-xs text-red-700 mb-4">Специализированная неотложная скорая помощь</p>
          <div className="space-y-2">
            <a href="tel:77273765596" className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-xs font-bold text-gray-700">+7 (727) 376-55-96</span>
              <ChevronRight className="h-4 w-4 text-red-400" />
            </a>
            <a href="tel:77273765594" className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-xs font-bold text-gray-700">+7 (727) 376-55-94</span>
              <ChevronRight className="h-4 w-4 text-red-400" />
            </a>
          </div>
        </div>
      </div>
    </AppShell>
  )
}