export function PsychologyLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" stroke="#1565C0" strokeWidth="2.5" fill="#E3F0FF" />
      <circle cx="40" cy="40" r="34" stroke="#1565C0" strokeWidth="1" fill="#FFFFFF" opacity="0.6" />
      <text x="40" y="52" textAnchor="middle" fontFamily="serif" fontSize="36" fontWeight="bold" fill="#1565C0">
        &#968;
      </text>
      <line x1="40" y1="18" x2="40" y2="26" stroke="#1565C0" strokeWidth="2" />
      <circle cx="40" cy="16" r="2" fill="#1565C0" />
    </svg>
  )
}

export function BrainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.5 2 6 4.5 6 7.5c0 1.5.5 2.5 1.5 3.5S6 14 6 16c0 3 2.5 6 6 6s6-3 6-6c0-2-1-3-1.5-5C17.5 10 18 9 18 7.5 18 4.5 15.5 2 12 2z" />
      <path d="M12 2v20" />
      <path d="M8 8c2 1 4 1 8 0" />
      <path d="M7 14c2-1 7-1 10 0" />
    </svg>
  )
}

export function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 105.1 2H7.5a.3.3 0 01.3.3V4.8a3 3 0 01-3 3H4.5a3 3 0 01-3-3V2.3a.3.3 0 01.3-.3h2.4" />
      <path d="M8 15V7.5a3 3 0 00-3-3H4.5a3 3 0 00-3 3V15a5 5 0 005 5h2a5 5 0 005-5v-3" />
      <circle cx="17" cy="10" r="2" />
      <path d="M17 12v3a4 4 0 01-4 4" />
    </svg>
  )
}
