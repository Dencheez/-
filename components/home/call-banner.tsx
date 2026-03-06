'use client'
import { useEffect, useState } from "react"
import { Phone, ChevronRight } from "lucide-react"
import { supabase } from "@/app/lib/supabase"
import { useLanguage } from "@/hooks/use-language"

export function CallBanner() {
  const [phone, setPhone] = useState("3000-103") // Начальное значение
  const { t } = useLanguage()

  useEffect(() => {
    async function fetchPhone() {
      const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .eq('section_name', 'main_phone')
        .single()

      if (data && !error) {
        setPhone(data.content)
      }
    }
    fetchPhone()
  }, [])

  return (
    <a
      href={`tel:${phone.replace(/-/g, '')}`}
      className="mx-4 mt-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-primary to-[#1E88E5] px-5 py-4 text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
    >
      <div className="flex items-center gap-3">
        <Phone className="h-6 w-6" />
        <div>
          <p className="text-lg font-bold">{t("call_center")} {phone}</p>
          <p className="text-xs opacity-90">Круглосуточная поддержка</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 opacity-80" />
    </a>
  )
}