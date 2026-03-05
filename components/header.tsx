"use client"

import { useState, type FormEvent } from "react"
import {
  Search,
  Menu,
  X,
  Phone,
  Loader2,
  SendHorizonal,
} from "lucide-react"
import Image from "next/image"
import { PsychologyLogo } from "@/components/icons"
import Link from "next/link"

type ChatRole = "user" | "assistant"

type ChatMessage = {
  id: number
  role: ChatRole
  content: string
}

let nextChatId = 1

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: nextChatId++,
      role: "assistant",
      content:
        "Здравствуйте! Я ИИ‑ассистент клиники. Задайте ваш вопрос — помогу с информацией и подскажу, когда лучше позвонить в клинику.",
    },
  ])
  const [input, setInput] = useState("")
  const [isSending, setIsSending] = useState(false)

  async function handleSend(e?: FormEvent) {
    e?.preventDefault()
    const text = input.trim()
    if (!text || isSending) return

    const userMsg: ChatMessage = {
      id: nextChatId++,
      role: "user",
      content: text,
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsSending(true)

    try {
      const bodyMessages = [
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        { role: "user" as ChatRole, content: text },
      ]

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: bodyMessages }),
      })

      if (!res.ok) {
        throw new Error("Request failed")
      }

      const data: { reply?: string } = await res.json()

      const assistantMsg: ChatMessage = {
        id: nextChatId++,
        role: "assistant",
        content:
          data.reply ??
          "Не удалось получить ответ от сервера. Попробуйте ещё раз чуть позже.",
      }
      setMessages((prev) => [...prev, assistantMsg])
    } catch {
      const assistantMsg: ChatMessage = {
        id: nextChatId++,
        role: "assistant",
        content:
          "Произошла ошибка при обращении к серверу. Пожалуйста, попробуйте задать вопрос ещё раз чуть позже.",
      }
      setMessages((prev) => [...prev, assistantMsg])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden sm:inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white shadow-md transition hover:bg-primary/90"
      >
        <Image
          src="/clinic-logo.png"
          alt="Открыть ИИ‑чат клиники"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
        <span className="sr-only">Задать вопрос ИИ</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-semibold">ИИ‑чат клиники</p>
              <p className="text-[11px] text-muted-foreground">
                Не для экстренной помощи. В экстренных случаях звоните по
                телефону клиники.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-muted-foreground hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex max-h-80 flex-1 flex-col gap-2 overflow-y-auto px-3 py-3 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${m.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                    }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-muted px-3 py-2 text-[11px] text-muted-foreground">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Ассистент думает…
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-border px-3 py-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишите ваш вопрос…"
              className="flex-1 rounded-full border border-input bg-background px-3 py-2 text-xs shadow-sm outline-none ring-offset-background placeholder:text-[11px] placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/40"
            />
            <button
              type="submit"
              disabled={!input.trim() || isSending}
              className="inline-flex items-center justify-center gap-1 rounded-full bg-primary px-3 py-2 text-[11px] font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? (
                <>
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Отправка
                </>
              ) : (
                <>
                  <SendHorizonal className="h-3 w-3" />
                  Спросить
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </>
  )
}

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
            className="rounded-lg p-1.5 text-foreground hover:bg-secondary"
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
            className="w-full rounded-xl border border-border bg-secondary py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex rounded-xl border border-border bg-secondary">
          {(["RU", "KZ"] as const).map((lang, index) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-2.5 text-xs font-semibold transition-colors ${language === lang
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
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
