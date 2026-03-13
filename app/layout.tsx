import { ClerkProvider } from '@clerk/nextjs'
import { LanguageProvider } from '@/hooks/use-language'
import { AppointmentProvider } from '@/components/appointment-context'
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import { BottomNav } from "@/components/bottom-nav"
import MainLayoutWrapper from "@/components/MainLayoutWrapper"
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="ru">
        <body className="antialiased flex flex-col min-h-screen">
          <LanguageProvider>
            <AppointmentProvider>

              <Header />

              <MainLayoutWrapper>
                {children}
              </MainLayoutWrapper>

              <FooterCarousel />

              <BottomNav />

            </AppointmentProvider>
          </LanguageProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}