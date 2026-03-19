"use client"


export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <main className="flex-grow w-full max-w-[1440px] mx-auto">
        {children}
      </main>

      <footer className="w-full bg-[#00b2bd] mt-auto">
      </footer>
    </div>
  )
}