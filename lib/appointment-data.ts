export interface Doctor {
  id: string
  name: string
  specialty: string
  experience: string
  rating: number
  avatar: string
  availableDays: string[]
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface Appointment {
  id: string
  doctorId: string
  doctorName: string
  specialty: string
  date: string
  time: string
  status: "upcoming" | "completed" | "cancelled"
  patientName: string
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Иванова Анна Петровна",
    specialty: "Психолог",
    experience: "12 лет опыта",
    rating: 4.9,
    avatar: "АИ",
    availableDays: ["Пн", "Вт", "Ср", "Чт", "Пт"],
  },
  {
    id: "2",
    name: "Сергеев Дмитрий Олегович",
    specialty: "Психотерапевт",
    experience: "8 лет опыта",
    rating: 4.8,
    avatar: "СД",
    availableDays: ["Пн", "Ср", "Пт"],
  },
  {
    id: "3",
    name: "Касымова Айгуль Маратовна",
    specialty: "Психиатр",
    experience: "15 лет опыта",
    rating: 4.9,
    avatar: "КА",
    availableDays: ["Вт", "Чт", "Сб"],
  },
  {
    id: "4",
    name: "Ахметов Бауыржан Нурланович",
    specialty: "Нарколог",
    experience: "10 лет опыта",
    rating: 4.7,
    avatar: "АБ",
    availableDays: ["Пн", "Вт", "Ср", "Чт", "Пт"],
  },
  {
    id: "5",
    name: "Петрова Мария Сергеевна",
    specialty: "Детский психолог",
    experience: "6 лет опыта",
    rating: 4.8,
    avatar: "ПМ",
    availableDays: ["Пн", "Ср", "Пт", "Сб"],
  },
]

export const specialties = [
  "Все специальности",
  "Психолог",
  "Психотерапевт",
  "Психиатр",
  "Нарколог",
  "Детский психолог",
]

export function getTimeSlots(): TimeSlot[] {
  return [
    { time: "09:00", available: true },
    { time: "09:30", available: true },
    { time: "10:00", available: false },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: false },
    { time: "12:00", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: false },
    { time: "14:30", available: true },
    { time: "15:00", available: true },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: false },
    { time: "17:00", available: true },
  ]
}

export function generateDates(): { date: Date; label: string; dayName: string }[] {
  const dates: { date: Date; label: string; dayName: string }[] = []
  const dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
  const monthNames = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]

  for (let i = 1; i <= 14; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    if (d.getDay() === 0) continue // skip Sundays
    dates.push({
      date: d,
      label: `${d.getDate()} ${monthNames[d.getMonth()]}`,
      dayName: dayNames[d.getDay()],
    })
  }
  return dates
}
