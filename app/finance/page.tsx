import { AppShell } from "@/components/app-shell"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Calendar, FileText, PieChart, BarChart3, } from "lucide-react"

const groupedReports = [
    {
        year: "2024",
        items: [
            { title: "Отчет о доходах и расходах за 2024 год", file: "2024.jpg" }
        ]
    },
    {
        year: "2023",
        items: [
            { title: "Отчет о доходах и расходах за 2023 год", file: "2023.jpg" }
        ]
    },
    {
        year: "2022",
        items: [
            { title: "Отчет о доходах и расходах за 2022 год", file: "2022.jpg" }
        ]
    },
    {
        year: "2021",
        items: [
            { title: "Отчет о доходах и расходах за 2021 год", file: "2021.jpg" }
        ]
    },
    {
        year: "2020",
        items: [
            { title: "Отчет о доходах и расходах за 2020 год", file: "2020.jpg" }
        ]
    },
    {
        year: "2019",
        items: [
            { title: "Финансовый отчет (общий) 2019", file: "2019.jpg" },
            { title: "Отчет о доходах и расходах (2019-фин)", file: "2019-фин.jpg" },
            { title: "Отчет за 2 квартал 2019", file: "2019-2.jpg" },
            { title: "Отчет за 3 квартал 2019", file: "2019-3.jpg" },
            { title: "Отчет за 4 квартал 2019", file: "2019-4.jpg" },
        ]
    },
    {
        year: "2018",
        items: [
            { title: "Общий финансовый отчет 2018", file: "2018.jpg" },
            { title: "Отчет (Вариант 2) 2018", file: "2018-2.jpg" },
            { title: "Отчет (Вариант 3) 2018", file: "2018-3.jpg" },
        ]
    },
    {
        year: "2017",
        items: [
            { title: "Отчет о деятельности 2017", file: "2017.jpg" },
            { title: "Приложение к отчету 2017 (001)", file: "2017-001.jpg" },
            { title: "Отчет (Вариант 1) 2017", file: "2017-1.jpg" },
        ]
    },
    {
        year: "2016",
        items: [
            { title: "Годовой отчет 2016 (Year)", file: "2016-year.jpg" },
            { title: "Финансовый баланс 2016", file: "2016.jpg" },
            { title: "Отчет от 2016-02-03", file: "2016-02-03.jpg" },
            { title: "Отчет от 2016-05-10", file: "2016-05-10.png" },
            { title: "Отчет от 2016-08-07", file: "2016-08-07.jpg" },
            { title: "Отчет от 2016-12-04", file: "2016-12-04.jpg" },
        ]
    },
    {
        year: "2015",
        items: [
            { title: "Баланс предприятия 2015", file: "2015.jpg" },
            { title: "Пояснительная записка 2015", file: "2015-poisky.jpg" },
        ]
    }
]

export default function FinancePage() {
    return (
        <AppShell>
            <div className="flex flex-col w-full p-4 sm:p-6 md:p-8 max-w-5xl mx-auto gap-8 sm:gap-10">
                {/* Header */}
                <div className="border-b border-slate-100 pb-6 sm:pb-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-tight leading-tight">
                        Отчеты о доходах и расходах
                    </h1>
                    <div className="h-1 sm:h-1.5 w-16 sm:w-20 bg-[#00B5C4] mt-3 sm:mt-4 mb-4 sm:mb-6" />
                </div>

                <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                    {groupedReports.map((group) => (
                        <AccordionItem
                            key={group.year}
                            value={group.year}
                            className="border border-slate-100 rounded-2xl sm:rounded-3xl bg-white shadow-sm overflow-hidden px-1 sm:px-2"
                        >
                            <AccordionTrigger className="hover:no-underline px-4 sm:px-6 py-4 sm:py-5 group">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-50 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#00B5C4] group-hover:bg-[#00B5C4]/5 transition-all">
                                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-base sm:text-lg font-black text-slate-700 uppercase tracking-tight">
                                        {group.year} Год
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                                <div className="flex flex-col border-t border-slate-50 mt-1 sm:mt-2">
                                    {group.items.map((report, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-5 gap-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors px-1"
                                        >
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-400 shrink-0">
                                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <div className="pr-2">
                                                    <h3 className="text-[12px] sm:text-[13px] font-bold text-slate-700 uppercase leading-snug">
                                                        {report.title}
                                                    </h3>
                                                    <span className="text-[8px] sm:text-[9px] font-black text-[#00B5C4] uppercase tracking-widest mt-1 block opacity-70">
                                                        Финансовый документ
                                                    </span>
                                                </div>
                                            </div>

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-[9px] sm:text-[10px] tracking-widest hover:bg-[#00B5C4] transition-all active:scale-95 shadow-lg shadow-black/5 shrink-0">
                                                        <BarChart3 className="w-4 h-4" />
                                                        <span>Просмотреть</span>
                                                    </button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-[95vw] sm:max-w-4xl p-1 bg-white border-none shadow-2xl overflow-hidden rounded-2xl">
                                                    <DialogTitle className="sr-only">{report.title}</DialogTitle>
                                                    <div className="relative w-full overflow-auto bg-slate-50 rounded-lg">
                                                        <img
                                                            src={`/images/Расходы/${report.file}`}
                                                            alt={report.title}
                                                            className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] object-contain mx-auto"
                                                        />
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Footer Info Cards */}
                <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-slate-50 border border-slate-100 text-black flex flex-col md:flex-row items-center gap-6 sm:gap-8 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-slate-200/50 blur-[80px] sm:blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#00B5C4] rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center shrink-0">
                            <PieChart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="relative z-10 text-center md:text-left">
                            <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight mb-2">Политика финансовой открытости</h4>
                            <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed max-w-md uppercase tracking-wide font-bold">
                                Данные о доходах и расходах публикуются для обеспечения прозрачности деятельности ГКП на ПХВ.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 sm:p-8 bg-[#00B5C4] rounded-2xl sm:rounded-[2.5rem] text-white flex flex-col justify-center items-center text-center shadow-xl shadow-[#00B5C4]/20">
                        <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-1">Актуальность данных</span>
                        <p className="text-lg sm:text-xl font-black uppercase">2015 — 2024</p>
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
