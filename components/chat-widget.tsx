"use client"

import { useState, type FormEvent, useEffect, useRef } from "react"
import {
    X,
    Loader2,
    SendHorizonal,
    Bot,
    Sparkles,
    Info
} from "lucide-react"
import Image from "next/image"

type ChatRole = "user" | "assistant"

type ChatMessage = {
    id: number
    role: ChatRole
    content: string
}

let nextChatId = 1

export function ChatWidget() {
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
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if (isOpen) {
            scrollToBottom()
        }
    }, [messages, isOpen])

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
                className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-md transition hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
                <Image
                    src="/clinic-logo.png"
                    alt="Открыть ИИ‑чат клиники"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                />
                <span className="sr-only">Задать вопрос ИИ</span>
            </button>

            {isOpen && (
                <div className="fixed bottom-20 right-0 left-0 z-50 flex h-[80vh] w-full flex-col rounded-t-2xl border border-border bg-card/95 shadow-2xl backdrop-blur sm:bottom-4 sm:right-4 sm:left-auto sm:h-[600px] sm:max-w-sm sm:rounded-2xl sm:border">
                    {/* Enhanced Agent Header */}
                    <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Bot className="h-6 w-6 text-primary" />
                                </div>
                                <div className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-card bg-green-500" />
                            </div>
                            <div className="leading-tight">
                                <p className="text-sm font-bold">ИИ-Ассистент</p>
                                <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
                                    <Sparkles className="h-2.5 w-2.5 text-yellow-500" />
                                    В сети | Готов помочь
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-2 text-muted-foreground hover:bg-muted transition"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Quick Info / Suggestions Placeholder */}
                    <div className="flex items-start gap-2 border-b border-border/50 bg-primary/5 px-4 py-2 text-[11px] text-primary/80">
                        <Info className="h-3.5 w-3.5 mt-0.5" />
                        <p>Я могу подсказать график работы, врачей или правила записи.</p>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                        {messages.map((m) => (
                            <div
                                key={m.id}
                                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"
                                    } animate-in fade-in slide-in-from-bottom-2 duration-300`}
                            >
                                <div
                                    className={`relative max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === "user"
                                        ? "bg-primary text-primary-foreground rounded-tr-none shadow-md"
                                        : "bg-muted text-foreground rounded-tl-none border border-border/50"
                                        }`}
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}

                        {isSending && (
                            <div className="flex justify-start animate-in fade-in duration-300">
                                <div className="flex items-center gap-2 rounded-2xl bg-muted py-2 px-4 text-xs text-muted-foreground border border-border/50">
                                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                    Ассистент думает…
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form
                        onSubmit={handleSend}
                        className="border-t border-border bg-card p-4"
                    >
                        <div className="relative flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Сообщение ассистенту..."
                                className="flex-1 rounded-full border border-input bg-muted/50 px-4 py-3 text-sm shadow-inner outline-none transition-all placeholder:text-muted-foreground/60 focus:bg-background focus:ring-2 focus:ring-primary/20"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isSending}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/20 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale"
                            >
                                {isSending ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <SendHorizonal className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
