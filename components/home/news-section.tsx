"use client"

import Link from "next/link"
import { Clock, MapPin, ArrowRight, SearchX } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

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

interface NewsSectionProps {
  searchQuery?: string;
}

// 1. Обязательно добавляем { searchQuery = "" } в аргументы
export function NewsSection({ searchQuery = "" }: NewsSectionProps) {
  const { t } = useLanguage()

  // 2. Фильтруем новости по заголовку или описанию
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="mt-6 px-4 pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">
          {searchQuery ? `${t("news")} (${filteredNews.length})` : t("news")}
        </h2>
        <Link href="#" className="flex items-center gap-1 text-sm font-medium text-primary">
          {t("read_more")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        {filteredNews.length > 0 ? (
          // 3. Используем filteredNews вместо обычного news
          filteredNews.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{item.date}</span>
              </div>
            </article>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-6 bg-muted/20 rounded-2xl border border-dashed border-border">
            <SearchX className="h-8 w-8 text-muted-foreground/30 mb-2" />
            <p className="text-xs text-muted-foreground">Новостей не найдено</p>
          </div>
        )}
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
            <p className="text-xs font-bold text-foreground">{t("contacts")}</p>
          </div>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            г. Алматы, ул. Карасай Батыра, 44
          </p>
        </div>
      </div>
    </section>
  )
}