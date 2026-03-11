"use client"

import Link from "next/link"
import { Clock, MapPin, ArrowRight, SearchX } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const news = [
  {
    id: 451, // ID согласно общей базе (16 страница)
    title: "25-летие Независимости РК и 40-летие ГНЦМСК",
    description: "В Алматы прошло торжественное мероприятие, посвященное юбилею Независимости Республики и 40-летию со дня основания наркологического диспансера.",
    date: "16.12.2016",
  },
  {
    id: 452,
    title: "Акция «Мы против наркомании» в ОШ №14",
    description: "В общеобразовательной школе №14 проведен открытый классный час, направленный на профилактику наркомании среди учащихся старших классов.",
    date: "14.12.2016",
  },
  {
    id: 453,
    title: "Семинар по профилактике ПАВ в ОШ №42",
    description: "Проведен масштабный семинар под лозунгом «Профилактика употребления ПАВ. СПИД/ВИЧ среди молодежи» для учеников и педагогов.",
    date: "12.12.2016",
  },
]

interface NewsSectionProps {
  searchQuery?: string;
}

export function NewsSection({ searchQuery = "" }: NewsSectionProps) {
  const { t } = useLanguage()

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
        <Link
          href="/news"
          className="flex items-center gap-1 text-sm font-medium text-primary"
        >
          {t("read_more")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`}>
              <article
                className="rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <h3 className="text-sm font-bold text-foreground leading-tight">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{item.date}</span>
                </div>
              </article>
            </Link>
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
          <p className="mt-2 text-[11px] text-muted-foreground">Пн-Пт: 8:00 - 20:00</p>
          <p className="text-[11px] text-muted-foreground">Сб: 9:00 - 15:00</p>
          <p className="text-[11px] text-muted-foreground font-medium text-destructive/70">Вс: выходной</p>
        </div>

        <Link
          href="https://2gis.kz/almaty/geo/9429940000795430"
          target="_blank"
          className="rounded-2xl border border-border bg-card p-4 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="text-xs font-bold text-foreground">{t("contacts")}</p>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
            г. Алматы, <br />
            ул. А. Кекилбайулы, 117
          </p>
        </Link>
      </div>
    </section>
  )
}