"use client"
import { Header } from "@/components/header"
import { FooterCarousel } from "@/components/footercarousel"
import {
    Target, TrendingUp, Activity, ShieldCheck,
    PhoneCall, Users, Factory, Stethoscope,
    ChevronRight, ArrowLeft, CheckCircle2, ListChecks,
    Building2, Microscope, GraduationCap
} from "lucide-react"
import Link from "next/link"

export default function MissionDetailedPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            {/* ГЛАВНЫЙ БАННЕР */}
            <section className="bg-[#1e40af] text-white py-16 px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <Link href="/about" className="flex items-center gap-2 text-blue-200 hover:text-white mb-8 text-sm transition-colors w-fit">
                        <ArrowLeft className="h-4 w-4" /> ВЕРНУТЬСЯ В РАЗДЕЛ "О ЦЕНТРЕ"
                    </Link>
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 bg-white/10 w-fit px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                            Аналитический отчет за 2021-2022 гг.
                        </div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
                            Миссия, Цели и <span className="text-blue-300">Стратегия ЦПЗ</span>
                        </h1>
                        <p className="max-w-2xl text-lg text-blue-100 font-light mt-4">
                            ГКП на ПХВ «Центр психического здоровья» (ЦПЗ) города Алматы — ведущее государственное предприятие в области ментального здоровья.
                        </p>
                    </div>
                </div>
                <Target className="absolute right-[-50px] top-[-50px] h-96 w-96 text-white/5 rotate-12" />
            </section>

            <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

                {/* 1. МИССИЯ И ИСТОРИЧЕСКИЙ КОНТЕКСТ */}
                <section className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-slate-50 border-l-8 border-[#1e40af] p-10">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#1e40af] mb-6">Наша Миссия</h2>
                            <p className="text-2xl text-slate-800 leading-tight font-medium italic">
                                «Обеспечение доступности и высокого качества специализированной психиатрической и наркологической помощи через интеграцию в ПМСП и масштабную социальную реабилитацию».
                            </p>
                        </div>
                        <div className="prose prose-slate text-sm leading-relaxed text-slate-600">
                            <h3 className="text-slate-900 font-bold uppercase italic border-b pb-2">Историческая справка службы:</h3>
                            <p>Психиатрическая служба города Алматы была организована в <strong>1939 году</strong>. Первыми участковыми психиатрами в городе были врачи: <strong>Шаталова З.В., Смирнова, Гальченко, Ламкин</strong>.</p>
                            <p>В настоящее время Центр располагает базой более <strong>3 гектаров</strong>, зданиями площадью <strong>11 018,4 кв.м.</strong> и коечной мощностью <strong>632 койки</strong>.</p>
                        </div>
                    </div>
                    <div className="bg-[#1e40af] text-white p-8 rounded-sm shadow-xl flex flex-col justify-center">
                        <h3 className="text-sm font-bold uppercase mb-6 tracking-widest text-blue-300">Ключевые приоритеты</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0" />
                                <span>Интеграция ПЦПЗ в городские поликлиники</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0" />
                                <span>Цифровизация (МИС) и открытость данных</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0" />
                                <span>Снижение стигматизации пациентов</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 2. АНАЛИЗ ЗАБОЛЕВАЕМОСТИ (ВСЕ ЦИФРЫ) */}
                <section className="space-y-10">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-4">
                        <TrendingUp className="h-8 w-8 text-[#1e40af]" />
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Анализ заболеваемости (2021-2022)</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Психиатрия */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <h3 className="font-bold text-lg uppercase text-[#1e40af]">Психиатрический профиль</h3>
                                <span className="text-[10px] font-bold text-red-500 uppercase">Рост на 26%</span>
                            </div>
                            <div className="overflow-hidden border border-slate-200">
                                <table className="w-full text-[13px]">
                                    <thead className="bg-slate-50 border-b">
                                        <tr><th className="p-4 text-left">Показатель</th><th className="p-4 text-center">2021</th><th className="p-4 text-center bg-blue-50">2022</th></tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr><td className="p-4">Взято на дин. наблюдение (всего)</td><td className="p-4 text-center">851</td><td className="p-4 text-center font-bold">1118</td></tr>
                                        <tr className="bg-slate-50/30 font-bold"><td className="p-4">Впервые установленный диагноз</td><td className="p-4 text-center">689</td><td className="p-4 text-center text-blue-700">934</td></tr>
                                        <tr><td className="p-4 pl-8 text-slate-500">Дети (впервые)</td><td className="p-4 text-center italic">350</td><td className="p-4 text-center">449</td></tr>
                                        <tr><td className="p-4 pl-8 text-slate-500">Подростки (впервые)</td><td className="p-4 text-center italic">20</td><td className="p-4 text-center text-red-600 font-bold">39</td></tr>
                                        <tr><td className="p-4 pl-8 text-slate-500">Взрослые (впервые)</td><td className="p-4 text-center italic">319</td><td className="p-4 text-center">446</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Наркология */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <h3 className="font-bold text-lg uppercase text-[#1e40af]">Наркологический профиль</h3>
                                <span className="text-[10px] font-bold text-green-600 uppercase">Снижение на 7.5%</span>
                            </div>
                            <div className="bg-slate-900 text-white p-8 rounded-sm space-y-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] uppercase text-blue-400 font-bold tracking-widest">Всего на учете (01.01.2023)</p>
                                        <p className="text-5xl font-black italic">4 579 <span className="text-sm font-normal opacity-40">чел.</span></p>
                                    </div>
                                    <ShieldCheck className="h-12 w-12 text-blue-600 opacity-50" />
                                </div>
                                <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                                    <div>
                                        <p className="text-[10px] uppercase text-slate-500">Алкоголизм</p>
                                        <p className="text-xl font-bold">3 440 (-8.1%)</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase text-slate-500">Наркомания</p>
                                        <p className="text-xl font-bold">1 139 (-5.9%)</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-800/50 rounded text-[11px] text-slate-300">
                                    <p className="font-bold text-blue-400 mb-1">Динамика по районам (Наркомания):</p>
                                    Турксибский (+90.0%), Бостандыкский (+77.7%), Жетысуский (+38.4%), Алатауский (+16.3%).
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. ПОЛНЫЙ КОЕЧНЫЙ ФОНД (ВСЕ ОТДЕЛЕНИЯ) */}
                <section className="space-y-10">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-4">
                        <Building2 className="h-8 w-8 text-[#1e40af]" />
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Структура стационарных отделений (632 койки)</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200 shadow-xl overflow-hidden rounded-sm">
                        {/* Блок Психиатрия */}
                        <div className="bg-white p-8">
                            <h3 className="text-sm font-black uppercase tracking-widest text-[#1e40af] mb-6 flex items-center justify-between">
                                <span>Психиатрический профиль</span>
                                <span className="bg-blue-100 px-2 py-1 rounded text-blue-700">360 коек</span>
                            </h3>
                            <div className="space-y-3 text-[13px]">
                                <div className="flex justify-between border-b pb-2 italic"><span>1-е отделение (Мужское)</span><strong>60</strong></div>
                                <div className="flex justify-between border-b pb-2 italic"><span>2-е отделение (Женское)</span><strong>60</strong></div>
                                <div className="flex justify-between border-b pb-2 italic"><span>3-е отделение (Мужское)</span><strong>60</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>5-е отделение (Детское)</span><strong>35</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>7-е отделение (ПСО - пограничное)</span><strong>25</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Геронтопсихиатрия (пожилые)</span><strong>30</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Психореабилитация (муж)</span><strong>60</strong></div>
                                <div className="flex justify-between pt-2 text-[#1e40af] font-bold uppercase text-[11px]"><span>Дневной стационар (Радостовца)</span><span>100 коек</span></div>
                            </div>
                        </div>
                        {/* Блок Наркология */}
                        <div className="bg-slate-50 p-8">
                            <h3 className="text-sm font-black uppercase tracking-widest text-[#1e40af] mb-6 flex items-center justify-between">
                                <span>Наркологический профиль</span>
                                <span className="bg-blue-200 px-2 py-1 rounded text-blue-800">272 койки</span>
                            </h3>
                            <div className="space-y-3 text-[13px]">
                                <div className="flex justify-between border-b border-slate-200 pb-2 italic"><span>Отделение МСК №1</span><strong>55</strong></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2 italic"><span>Отделение МСК №2 (жен)</span><strong>32</strong></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2 italic"><span>Медико-социальная реабилитация</span><strong>40</strong></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Принудительное лечение №3</span><strong>30</strong></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Отделение МСК №10</span><strong>25</strong></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Инфекционный стационар</span><strong>10</strong></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2 bg-blue-100/50 p-1"><span>Отделение ОВАД</span><strong>30</strong></div>
                                <div className="flex justify-between pt-2 text-[#1e40af] font-bold uppercase text-[11px]"><span>Реанимация (ИТ)</span><span>6 коек</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-900 text-white rounded-sm text-sm">
                        <h4 className="font-bold text-blue-400 uppercase mb-4 text-xs tracking-widest">Показатели эффективности работы койки (Таблица №1):</h4>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div><p className="text-slate-500 text-[10px] uppercase font-bold">Оборот койки</p><p className="text-2xl font-black">8.8 <span className="text-[10px] text-green-400 font-normal">▲ 1.9</span></p></div>
                            <div><p className="text-slate-500 text-[10px] uppercase font-bold">Работа койки (дней)</p><p className="text-2xl font-black">313.1 <span className="text-[10px] text-green-400 font-normal">▲ 29</span></p></div>
                            <div><p className="text-slate-500 text-[10px] uppercase font-bold">Летальность (%)</p><p className="text-2xl font-black">0.15%</p></div>
                            <div><p className="text-slate-500 text-[10px] uppercase font-bold">Пролечено (чел)</p><p className="text-2xl font-black text-blue-400">5 215 <span className="text-[10px] text-green-400 font-normal">▲ 1147</span></p></div>
                        </div>
                    </div>
                </section>

                {/* 4. СУИЦИДОЛОГИЯ И ТЕЛЕФОН ДОВЕРИЯ (ПОДРОБНО) */}
                <section className="space-y-10">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-4">
                        <PhoneCall className="h-8 w-8 text-[#1e40af]" />
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Мероприятия по профилактике суицидов</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                            <div className="p-8 border border-blue-100 bg-blue-50">
                                <p className="text-4xl font-black text-[#1e40af] mb-2">5 599</p>
                                <p className="font-bold uppercase text-[10px] tracking-widest text-slate-500 mb-4">Звонков на Телефон Доверия (376-56-60)</p>
                                <div className="space-y-2 text-[12px] text-slate-600">
                                    <div className="flex justify-between"><span>Суицидальные мысли:</span><span className="font-black text-red-600">240</span></div>
                                    <div className="flex justify-between"><span>Тревога / Депрессия:</span><span className="font-black">448</span></div>
                                    <div className="flex justify-between"><span>Обращений студентов:</span><span className="font-black text-blue-800">25 (22 студ.)</span></div>
                                </div>
                            </div>
                            <div className="p-8 border border-slate-200">
                                <p className="text-4xl font-black text-slate-900 mb-2">17 029</p>
                                <p className="font-bold uppercase text-[10px] tracking-widest text-slate-500 mb-4">Охват образовательных лекций</p>
                                <div className="space-y-2 text-[12px] text-slate-600">
                                    <div className="flex justify-between"><span>Учащиеся школ (198 лекций):</span><span className="font-black">11 789</span></div>
                                    <div className="flex justify-between"><span>ВУЗы / Колледжи (58 лекций):</span><span className="font-black">5 240</span></div>
                                    <div className="flex justify-between"><span>Инспекторы УП (12 семин.):</span><span className="font-black">78</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-8 border space-y-6">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600">Индивидуальная работа:</h4>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5"></div>
                                    <p className="text-xs">Консультации детей "группы риска" психиатром ЦПЗ: <strong>198 чел.</strong></p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5"></div>
                                    <p className="text-xs">Индивидуальная помощь врача суицидолога: <strong>22 подростка</strong>.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5"></div>
                                    <p className="text-xs">Осмотр в Детской деревне "SOS": <strong>106 воспитанников</strong>.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5"></div>
                                    <p className="text-xs">Работа психологов в ОШ №20, №188, №174: <strong>29 собраний (549 чел)</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. МАСТЕРСКИЕ И ТИПОГРАФИЯ (ДЕТАЛИ) */}
                <section className="space-y-10">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-4">
                        <Factory className="h-8 w-8 text-[#1e40af]" />
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Производственные мастерские и Реабилитация</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group relative bg-white border p-8 hover:bg-[#1e40af] transition-all duration-500">
                            <h4 className="text-lg font-bold uppercase mb-4 group-hover:text-white">Швейный цех</h4>
                            <p className="text-xs text-slate-500 group-hover:text-blue-100 leading-relaxed">
                                25 рабочих мест. Оснащен универсальными швейными машинами нового поколения. Выпускаемый ассортимент: спецодежда, махровые изделия, постельное белье.
                            </p>
                            <div className="mt-6 text-[10px] font-black group-hover:text-white uppercase tracking-widest">Проф-реабилитация</div>
                        </div>
                        <div className="group relative bg-white border p-8 hover:bg-[#1e40af] transition-all duration-500">
                            <h4 className="text-lg font-bold uppercase mb-4 group-hover:text-white">Картонажный цех</h4>
                            <p className="text-xs text-slate-500 group-hover:text-blue-100 leading-relaxed">
                                75 рабочих мест. Бумагорезательные машины. Производство банковских конвертов (A4, A5, A6) из крафта с треугольным клапаном.
                            </p>
                            <div className="mt-6 text-[10px] font-black group-hover:text-white uppercase tracking-widest">75 рабочих мест</div>
                        </div>
                        <div className="group relative bg-white border p-8 hover:bg-[#1e40af] transition-all duration-500">
                            <h4 className="text-lg font-bold uppercase mb-4 group-hover:text-white">Типография</h4>
                            <p className="text-xs text-slate-500 group-hover:text-blue-100 leading-relaxed">
                                Оборудование: Hendelberg-46, Ризографы. Печать мед. бланков, карточек и журналов по Приказу №175/2020.
                            </p>
                            <div className="mt-6 text-[10px] font-black group-hover:text-white uppercase tracking-widest">Офсетная печать</div>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-6 border-l-4 border-slate-900 text-[13px] text-slate-600">
                        <strong>Дневной стационар:</strong> Промежуточное звено для пациентов, не нуждающихся в круглосуточном уходе.
                        План охвата: 400 пациентов/год. Обеспечение 3-разовым горячим питанием и трудовой терапией.
                    </div>
                </section>

                {/* 6. КАДРЫ, ДИАГНОСТИКА И ЭКСПЕРТИЗА (ВСЕ ФИО И ЦИФРЫ) */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Кадры */}
                    <div className="space-y-6">
                        <h3 className="font-black uppercase text-[#1e40af] flex items-center gap-2 border-b pb-2"><Users className="h-5 w-5" /> Кадры (917 чел)</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between items-center"><span>Всего врачей:</span><span className="font-bold">170</span></div>
                            <div className="flex justify-between items-center bg-blue-50 p-2"><span>Высшая категория:</span><span className="font-bold text-blue-700">63 (37%)</span></div>
                            <div className="flex justify-between items-center"><span>Средний персонал (СМП):</span><span className="font-bold">319</span></div>
                            <div className="flex justify-between items-center bg-blue-50 p-2"><span>СМП Высшая кат.:</span><span className="font-bold text-blue-700">148 (46%)</span></div>
                            <div className="flex justify-between items-center font-black pt-2 border-t text-[#1e40af]"><span>Кандидаты наук:</span><span>4 чел.</span></div>
                        </div>
                    </div>

                    {/* Диагностика */}
                    <div className="space-y-6">
                        <h3 className="font-black uppercase text-[#1e40af] flex items-center gap-2 border-b pb-2"><Stethoscope className="h-5 w-5" /> Диагностика</h3>
                        <div className="space-y-3 text-xs leading-relaxed">
                            <div className="p-3 border"><strong>КТ исследования:</strong> 1 332 (пациенты ЦПЗ: 258, договор: 738).</div>
                            <div className="p-3 border bg-slate-50"><strong>Рентгенография:</strong> 6 429 снимков (ОГК: 6 043, костно-суставная: 277).</div>
                            <div className="p-3 border"><strong>УЗИ:</strong> 1 883 (Брюшная: 928, Мочеполовая: 818, ЭхоЭГ: 110).</div>
                            <div className="p-3 border bg-slate-50"><strong>Скорая помощь:</strong> 4 бригады (5.5 вызовов/сут на врача).</div>
                        </div>
                    </div>

                    {/* Экспертиза */}
                    <div className="space-y-6">
                        <h3 className="font-black uppercase text-[#1e40af] flex items-center gap-2 border-b pb-2"><ListChecks className="h-5 w-5" /> Экспертиза</h3>
                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between border-b pb-1"><span>Всего экспертиз:</span><strong>62 322</strong></div>
                            <div className="flex justify-between border-b pb-1 text-red-600"><span>Нарко. опьянение:</span><strong>686 (+42.6%)</strong></div>
                            <div className="flex justify-between border-b pb-1"><span>Алкогольное:</span><strong>23 209 (+10.3%)</strong></div>
                            <div className="flex justify-between border-b pb-1"><span>Отказ от экспертизы:</span><strong>354 (+46.8%)</strong></div>
                            <div className="mt-4 p-4 bg-amber-50 text-[10px] text-amber-800 leading-tight italic">
                                С мая 2022 года открыт 2-й кабинет мед. освидетельствования на базе Центра (Кекилбайулы 117а) для снижения нагрузки на Кабанбай Батыра.
                            </div>
                        </div>
                    </div>
                </div>

                {/* 7. СТРАТЕГИЧЕСКИЕ ЗАДАЧИ 2023 */}
                <section className="bg-slate-900 text-white p-12 rounded-sm relative overflow-hidden">
                    <h2 className="text-4xl font-black uppercase mb-12 relative z-10">Задачи на 2023 год</h2>
                    <div className="grid md:grid-cols-2 gap-10 relative z-10">
                        {[
                            "Увеличение количества ПЦПЗ в городских поликлиниках Алматы согласно Дорожной карте.",
                            "Разработка ПСД и проведение сейсмоусиления главного корпуса (Кекилбайулы 117а).",
                            "Усиление контроля качества через Службу СППиВА (отв. Худаир Ж.Р.).",
                            "Развитие профессионально-трудовой реабилитации (швейный, картонажный цеха).",
                            "Обеспечение бесперебойного поступления препаратов для пациентов ДН.",
                            "Модернизация парка машин отделения специализированной скорой помощи."
                        ].map((task, i) => (
                            <div key={i} className="flex gap-6 items-start border-l border-slate-700 pl-6">
                                <span className="text-blue-500 font-black text-2xl italic">0{i + 1}</span>
                                <p className="text-sm text-slate-300 leading-snug">{task}</p>
                            </div>
                        ))}
                    </div>
                    <CheckCircle2 className="absolute bottom-[-40px] right-[-40px] h-64 w-64 text-white/5" />
                </section>

            </main>

            <FooterCarousel />
        </div>
    )
}