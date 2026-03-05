import Link from "next/link"
import { Clock, MapPin, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Новый кабинет психотерапии",
    description: "Открыт современный кабинет для проведения сеансов психотерапии",
    date: "01.03.2026",
  },
  {
    id: 2,
    title: "Бесплатные консультации",
    description: "В рамках программы ОСМС доступны бесплатные консультации психолога",
    date: "25.02.2026",
  },
  {
    id: 3,
    title: "Расширение часов работы",
    description: "Центр теперь работает до 20:00 в будние дни",
    date: "20.02.2026",
  },
]

export function NewsSection() {
  return (
    <section className="mt-6 px-4 pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Новости</h2>
        <Link href="#" className="flex items-center gap-1 text-sm font-medium text-primary">
          Все новости
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {news.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-border bg-card p-4 shadow-sm"
          >
            <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{item.date}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Info Cards */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <p className="text-xs font-bold text-foreground">Режим работы</p>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Пн-Пт: 8:00 - 20:00</p>
          <p className="text-xs text-muted-foreground">Сб: 9:00 - 15:00</p>
          <p className="text-xs text-muted-foreground">Вс: выходной</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="text-xs font-bold text-foreground">Адрес</p>
          </div>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            г. Алматы, ул. Карасай Батыра, 44
          </p>
        </div>
      </div>
    </section>
  )
}
