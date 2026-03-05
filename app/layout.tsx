import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ClientLayout from '@/components/client-layout'
import './globals.css'

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Центр Психического Здоровья - Алматы',
  description: 'Центр Психического Здоровья города Алматы. Запись на прием, личный кабинет, услуги центра.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1565C0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
