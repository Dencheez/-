import { ClerkProvider } from '@clerk/nextjs'
import { LanguageProvider } from '@/hooks/use-language'
// Проверь этот путь! Он должен вести к твоему провайдеру записей
import { AppointmentProvider } from '@/components/appointment-context'
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="ru">
        <body className="antialiased flex flex-col min-h-screen">
          <LanguageProvider>
            {/* Оборачиваем в провайдер записей, чтобы useAppointments заработал */}
            <AppointmentProvider>

              <Header />

              <MainLayoutWrapper>
                {children}
              </MainLayoutWrapper>

              <FooterCarousel />

            </AppointmentProvider>
          </LanguageProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}