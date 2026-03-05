"use client"

import { useState, type FormEvent } from "react"
import {
  Search,
  Menu,
  X,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ChatWidget } from "./chat-widget"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [language, setLanguage] = useState<"RU" | "KZ">("RU")

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
            <p className="text-sm font-bold text-foreground">Центр психического здоровья</p>
            <p className="text-xs text-muted-foreground">Алматы</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <a href="tel:3000103" className="flex items-center gap-1 text-right">
            <Phone className="h-4 w-4 text-primary" />
            <div className="leading-tight">
              <p className="text-[10px] text-muted-foreground">Call-центр:</p>
              <p className="text-sm font-bold text-primary">3000-103</p>
            </div>
          </a>
          <ChatWidget />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 text-foreground hover:bg-secondary transition-colors"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 px-4 pb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск по сайту"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-border bg-card shadow-lg">
          <nav className="flex flex-col p-4">
            {[
              { href: "/", label: "Главная" },
              { href: "/appointment", label: "Записаться на приём" },
              { href: "/profile", label: "Личный кабинет" },
              { href: "/contacts", label: "Контакты и адреса" },
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
