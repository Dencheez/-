"use client"

import { useState, useEffect, Suspense } from "react"
import {
  Search,
  Menu,
  X,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useLanguage } from "@/hooks/use-language"

function HeaderContent() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "")
  }, [searchParams])

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set("search", value)
    } else {
      params.delete("search")
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <header className="sticky top-0 z-40 bg-card shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
            <Image
              src="/clinic-logo.png"
              alt="AI-агент клиники"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-foreground">{t("title")}</p>
            <p className="text-xs text-muted-foreground">{t("city")}</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">

          {/* Блок телефонов (Desktop) */}
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-primary mt-1" />
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 border-l border-border pl-4">
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-0.5">Психиатрическая служба</span>
                <a href="tel:77273765660" className="text-[13px] font-black text-primary whitespace-nowrap">+7 727 376-56-60</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-0.5">Наркологическая служба</span>
                <a href="tel:77273823462" className="text-[13px] font-black text-primary whitespace-nowrap">+7 727 382-34-62</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-0.5">cpz.sekr@gmail.com</span>
                <a href="mailto:cpz.sekr@gmail.com" className="text-[13px] font-black text-primary">cpz.sekr@gmail.com</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-0.5">Телефон доверия</span>
                <a href="tel:1303" className="text-[13px] font-black text-primary">13-03</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-0.5">Телефон доверия</span>
                <a href="tel:87089832863" className="text-[13px] font-black text-primary whitespace-nowrap">8 708 983 28 63</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-0.5">Поликлиника детская</span>
                <a href="tel:87474966420" className="text-[13px] font-black text-primary whitespace-nowrap">8 747 496 64 20</a>
              </div>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 text-foreground hover:bg-secondary transition-colors"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Search Bar (Дизайн восстановлен) */}
      <div className="flex items-center gap-2 px-4 pb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск по сайту"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-full border border-border bg-secondary py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex rounded-full border border-border bg-secondary overflow-hidden">
          {(["RU", "KZ"] as const).map((lang, index) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-2.5 text-xs font-semibold transition-colors ${language === lang
                ? "text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                } ${index > 0 ? "border-l border-border" : ""}`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Дизайн восстановлен) */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-border bg-card shadow-lg">
          <nav className="flex flex-col p-4">
            {[
              { href: "/", label: "Главная" },
              { href: "/about", label: "О центре" },
              { href: "/patients", label: "Пациентам" },
              { href: "/symbols", label: "Государственные символы" },
              { href: "/contacts", label: "Контакты и адреса" },
              { href: "/npa", label: "НПА" },
              { href: "/profile", label: "Личный кабинет" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export function Header() {
  return (
    <Suspense fallback={<div className="h-20 bg-card" />}>
      <HeaderContent />
    </Suspense>
  )
}