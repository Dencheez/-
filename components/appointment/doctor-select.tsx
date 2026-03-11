"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Star, ChevronRight } from "lucide-react"
import { doctors, specialties, type Doctor } from "@/lib/appointment-data"

interface DoctorSelectProps {
  onSelect: (doctor: Doctor) => void
}

export function DoctorSelect({ onSelect }: DoctorSelectProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Все специальности")

  // 2. Достаем значение поиска из URL
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || "" // <-- Теперь searchQuery определена!

  const filtered = useMemo(() => {
    // 3. Обновляем фильтрацию, чтобы она учитывала и категории, и поиск
    return doctors.filter((d) => {
      const matchesSpecialty = selectedSpecialty === "Все специальности" || d.specialty === selectedSpecialty

      const matchesSearch =
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.specialty.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesSpecialty && matchesSearch
    })
  }, [selectedSpecialty, searchQuery]) // Добавляем searchQuery в зависимости

  return (
    <div>
      <h2 className="text-lg font-bold text-foreground">Выберите врача</h2>
      <p className="mt-1 text-sm text-muted-foreground">Шаг 1 из 3</p>

      {/* Specialty Filter */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {specialties.map((s) => (
          <button
            key={s}
            onClick={() => setSelectedSpecialty(s)}
            className={`shrink-0 rounded-xl px-4 py-2 text-xs font-medium ${selectedSpecialty === s
              ? "bg-primary text-primary-foreground"
              : "bg-card text-foreground border border-border"
              }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Doctor Cards */}
      <div className="mt-4 flex flex-col gap-3">
        {filtered.map((doctor) => (
          <button
            key={doctor.id}
            onClick={() => onSelect(doctor)}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {doctor.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-foreground">{doctor.name}</p>
              <p className="text-xs text-primary">{doctor.specialty}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{doctor.experience}</span>
                <div className="flex items-center gap-0.5">
                  <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="text-xs font-medium text-foreground">{doctor.rating}</span>
                </div>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        ))}

        {/* Теперь эта часть не будет выдавать ошибку! */}
        {filtered.length === 0 && (
          <div className="mt-8 text-center p-6 bg-secondary/50 rounded-2xl border border-dashed border-border">
            <p className="text-sm text-muted-foreground">
              К сожалению, врачей по запросу <span className="font-semibold">"{searchQuery}"</span> не найдено.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}