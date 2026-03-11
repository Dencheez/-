"use client"
import React from "react"
import Link from "next/link"

const stats = [
    { label: "Сегодня", value: "142" },
    { label: "Вчера", value: "121" },
    { label: "За неделю", value: "263" },
    { label: "За месяц", value: "1209" },
    { label: "За все время", value: "3424260" },
]

export function SidebarExtraBlocks() {
    return (
        <div className="flex flex-col gap-6 w-full">
            {/* Damumed Block */}
            <Link
                href="https://alm.dmed.kz/Authentication/Authentication/SignIn?ReturnUrl=%2FAuthentication%2FHome"
                target="_blank"
                className="group block w-full bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
                <div className="p-4 flex flex-col items-center gap-3">
                    <img
                        src="/images/logo-green.png"
                        alt="Damumed"
                        className="h-12 w-auto object-contain transition-transform"
                        onError={(e) => {
                            e.currentTarget.src = "https://alm.dmed.kz/Authentication/Authentication/GetLogo";
                        }}
                    />
                    <p className="text-[10px] font-bold text-center text-slate-500 uppercase leading-tight px-2">
                        Комплексная медицинская информационная система
                    </p>
                </div>
            </Link>

            {/* Procurement Block */}
            <Link
                href="https://www.goszakup.gov.kz/"
                target="_blank"
                className="group block w-full bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden transition-shadow"
            >
                <div className="p-4 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 transition-colors">
                        <img
                            src="/images/logo_header_min.png"
                            alt="Госзакупки"
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                                e.currentTarget.src = "https://www.goszakup.gov.kz/favicon.ico";
                            }}
                        />
                    </div>
                    <p className="text-[10px] font-bold text-center text-slate-600 uppercase leading-tight px-2">
                        Государственные закупки Республики Казахстан
                    </p>
                </div>
            </Link>

            {/* Statistics Block */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 border-b pb-2">
                    Статистика посещений
                </h3>
                <div className="space-y-3">
                    {stats.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="text-slate-500 font-medium">{item.label}</span>
                            <span className="text-slate-900 font-bold tabular-nums">{item.value}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-center">
                    <span className="text-[9px] text-slate-300 font-bold uppercase tracking-tighter">Центр психического здоровья © 2026</span>
                </div>
            </div>
        </div>
    )
}
