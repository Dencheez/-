"use client"

import React, { createContext, useContext, useState, useCallback, useEffect } from "react"

export type Language = "RU" | "KZ"

const translations = {
    RU: {
        "title": "Центр психического здоровья",
        "city": "Алматы",
        "call_center": "Call-центр:",
        "search_placeholder": "Поиск по сайту",
        "home": "Главная",
        "appointment": "Записаться на приём",
        "profile": "Личный кабинет",
        "contacts_addresses": "Контакты и адреса",
        "all_services": "Все услуги",
        "services_title": "Услуги центра",
        "psychologist": "Приём психолога",
        "outpatient": "Амбулаторная помощь",
        "psychotherapy": "Психотерапия",
        "medications": "Медикаменты",
        "group_therapy": "Групповая терапия",
        "diagnostics": "Диагностика",
        "news": "Новости",
        "read_more": "Читать далее",
        "book": "Записаться",
        "contacts": "Контакты",
        "emergency": "Экстренная помощь",
        "cabinet": "Кабинет",
        "call_103": "Звоните 103",
        "on_appointment": "на приём",
        "and_addresses": "и адреса",
        "help": "помощь",
        "chat_welcome": "Здравствуйте! Я ИИ‑ассистент клиники. Задайте ваш вопрос — помогу с информацией и подскажу, когда лучше позвонить в клинику.",
        "chat_error_server": "Произошла ошибка при обращении к серверу. Пожалуйста, попробуйте задать вопрос ещё раз чуть позже.",
        "chat_error_response": "Не удалось получить ответ от сервера. Попробуйте ещё раз чуть позже.",
        "chat_placeholder": "Сообщение ассистенту...",
        "chat_title": "ИИ-Ассистент",
        "chat_status": "В сети | Готов помочь",
        "chat_hint": "Я могу подсказать график работы, врачей или правила записи.",
        "chat_thinking": "Ассистент думает…",
        "chat_btn_sr": "Задать вопрос ИИ",
        "chat_btn_alt": "Открыть ИИ‑чат клиники"
    },
    KZ: {
        "title": "Психикалық денсаулық орталығы",
        "city": "Алматы",
        "call_center": "Call-орталық:",
        "search_placeholder": "Сайт бойынша іздеу",
        "home": "Басты бет",
        "appointment": "Қабылдауға жазылу",
        "profile": "Жеке кабинет",
        "contacts_addresses": "Байланыс және мекенжайлар",
        "all_services": "Барлық қызметтер",
        "services_title": "Орталық қызметтері",
        "psychologist": "Психолог қабылдауы",
        "outpatient": "Амбулаторлық көмек",
        "psychotherapy": "Психотерапия",
        "medications": "Дәрі-дәрмектер",
        "group_therapy": "Топтық терапия",
        "diagnostics": "Диагностика",
        "news": "Жаңалықтар",
        "read_more": "Толығырақ оқу",
        "book": "Жазылу",
        "contacts": "Байланыс",
        "emergency": "Шұғыл көмек",
        "cabinet": "Кабинет",
        "call_103": "103 нөміріне хабарласыңыз",
        "on_appointment": "қабылдауға",
        "and_addresses": "және мекенжайлар",
        "help": "көмек",
        "chat_welcome": "Сәлеметсіз бе! Мен клиниканың ИИ-ассистентімін. Сұрағыңызды қойыңыз - мен ақпарат беруге және клиникаға қашан хабарласқан дұрыс екенін айтуға көмектесемін.",
        "chat_error_server": "Серверге хабарласу кезінде қате орын алды. Сұрағыңызды сәл кейінірек қайталап көріңіз.",
        "chat_error_response": "Серверден жауап алу мүмкін болмады. Сәл кейінірек қайталап көріңіз.",
        "chat_placeholder": "Ассистентке хабарлама...",
        "chat_title": "ИИ-Ассистент",
        "chat_status": "Желіде | Көмектесуге дайын",
        "chat_hint": "Мен жұмыс кестесін, дәрігерлерді немесе жазылу ережелерін айта аламын.",
        "chat_thinking": "Ассистент ойлануда...",
        "chat_btn_sr": "ИИ-ге сұрақ қою",
        "chat_btn_alt": "Клиниканың ИИ-чатын ашу"
    }
} as const

type TranslationKey = keyof typeof translations.RU

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("RU")

    useEffect(() => {
        const saved = localStorage.getItem("app-language") as Language
        if (saved && (saved === "RU" || saved === "KZ")) {
            setLanguageState(saved)
        }
    }, [])

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("app-language", lang)
        document.documentElement.lang = lang === "RU" ? "ru" : "kk"
    }, [])

    const t = useCallback((key: TranslationKey): string => {
        return translations[language][key] || key
    }, [language])

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
