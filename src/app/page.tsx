"use client";

import { useState } from "react";

// Tab types for state management
type Tab = "diplomatic" | "charter" | "legislative" | "news";

// Cabinet interface for data mapping
interface CabinetMember {
  roleEn: string;
  roleAr: string;
  nameEn: string;
  nameAr: string;
  countryEn: string;
  countryAr: string;
  avatarSeed: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("diplomatic");
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({
    "preamble-art1": true,
    "art2-art6": false,
    "art3-art4": false,
    "art7-art8": false,
    "art9": false,
    "art11-art12": false,
  });

  const [notification, setNotification] = useState<string | null>(null);

  // Toggle helper for Accordion
  const toggleArticle = (key: string) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3500);
  };

  // May 2026 Cabinet data
  const cabinet: CabinetMember[] = [
    {
      roleEn: "Chair",
      roleAr: "الرئيس",
      nameEn: "Showib Ahmmed",
      nameAr: "شعيب أحمد",
      countryEn: "President of Imruland",
      countryAr: "امرولاند",
      avatarSeed: "SA",
    },
    {
      roleEn: "Vice-Chair",
      roleAr: "نائب الرئيس",
      nameEn: "Al Mu'tazz billah",
      nameAr: "المعتز بالله",
      countryEn: "President of Rovia",
      countryAr: "أرض الروف",
      avatarSeed: "AM",
    },
    {
      roleEn: "Chief Justice",
      roleAr: "رئيس القضاة",
      nameEn: "Amir Abbas Arya'i",
      nameAr: "امير عباس آریائی",
      countryEn: "Supreme Leader of Arsalania",
      countryAr: "ارسلانیہ",
      avatarSeed: "AA",
    },
    {
      roleEn: "First Additional Justice",
      roleAr: "القاضي الإضافي الأول",
      nameEn: "Yusuf I",
      nameAr: "یوسف اول",
      countryEn: "Sultan of the Kasimid Sultanate",
      countryAr: "سلطنت القاسمیه",
      avatarSeed: "YI",
    },
    {
      roleEn: "Second Additional Justice",
      roleAr: "القاضي الإضافي الثاني",
      nameEn: "Ali Al Masry",
      nameAr: "علي المصري",
      countryEn: "President of El Amal",
      countryAr: "الأمل",
      avatarSeed: "AM2",
    },
    {
      roleEn: "Recruitment Secretary",
      roleAr: "سكرتير التوظيف",
      nameEn: "Omar S.",
      nameAr: "عمر",
      countryEn: "Sultan of Al Maqas",
      countryAr: "المقاص",
      avatarSeed: "OS",
    },
    {
      roleEn: "Press Secretary",
      roleAr: "السكرتير الصحفي",
      nameEn: "His Excellency Chief Ambassador Jestand Gaming",
      nameAr: "معالي السفير الأول جيستاند غيمينغ",
      countryEn: "Representative of Moeezland",
      countryAr: "معز لینڈ",
      avatarSeed: "JG",
    },
    {
      roleEn: "Cultural & Islamic Cooperation Secretary",
      roleAr: "سكرتير التعاون الثقافي والإسلامي",
      nameEn: "Ahmed Al Qadari",
      nameAr: "أحمد القدري",
      countryEn: "President of Zarocoria",
      countryAr: "زاروكوريا",
      avatarSeed: "AQ",
    },
  ];

  return (
    <div className="min-h-screen bg-parchment-dark flex flex-col font-sans relative text-slate-100 selection:bg-islamic-gold/40 selection:text-islamic-green-tint">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 bg-islamic-green text-slate-white border border-islamic-gold px-6 py-4 rounded shadow-2xl flex items-center gap-3 animate-bounce z-50">
          <svg className="w-6 h-6 text-islamic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-serif text-sm font-semibold text-slate-100">{notification}</span>
        </div>
      )}

      {/* Decorative Gold Border Line at top */}
      <div className="h-2 gold-shimmer w-full"></div>

      {/* TOP INSTITUTIONAL BAR */}
      <div className="bg-[#051410] text-[#FAF9F5] py-2 px-4 text-xs font-serif border-b border-emerald-950/60 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="text-islamic-gold tracking-widest font-semibold uppercase">OIM OFFICIAL ARCHIVES</span>
          <span className="h-3 w-px bg-white/10"></span>
          <span className="text-slate-300">Cabinet Term: May – November 2026</span>
        </div>
        <div className="flex gap-3 text-[10px] items-center opacity-85">
          <span>ENGLISH</span>
          <span className="text-islamic-gold">|</span>
          <span className="font-arabic font-semibold text-slate-200">العربية</span>
          <span className="text-islamic-gold">|</span>
          <span className="font-arabic font-semibold text-slate-200">اردو</span>
        </div>
      </div>

      {/* INSTITUTIONAL HEADER & SEAL */}
      <header className="py-8 px-6 bg-[#061814] border-b border-emerald-950/60 shadow-md relative overflow-hidden">
        {/* Subtle geometric pattern in background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF9F5_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Logo / Seal */}
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-full bg-islamic-green border-4 border-islamic-gold shadow-md">
              {/* Islamic Star Mandala SVG inside seal */}
              <svg className="w-20 h-20 text-islamic-gold" viewBox="0 0 100 100" fill="currentColor">
                <defs>
                  <path id="star" d="M50 0 L55 35 L90 35 L60 55 L70 90 L50 70 L30 90 L40 55 L10 35 L45 35 Z" />
                </defs>
                <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="2" />
                <circle cx="50" cy="50" r="43" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3,3" />
                {/* Crescent and Star in center */}
                <path d="M47 33 A15 15 0 1 0 65 52 A12 12 0 1 1 47 33 Z" fill="#D4AF37" />
                <polygon points="61,34 64,39 69,39 65,42 67,47 62,44 57,47 59,42 55,39 60,39" fill="#D4AF37" />
                {/* Outer star shape decoration */}
                <path d="M50 8 L53 25 L70 15 L58 30 L78 30 L62 40 L80 50 L62 60 L78 70 L58 70 L70 85 L53 75 L50 92 L47 75 L30 85 L42 70 L22 70 L38 60 L20 50 L38 40 L22 30 L42 30 L30 15 L47 25 Z" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="font-serif text-3xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Organization of Islamic Micronations
              </h1>
              <p className="font-arabic text-2xl font-bold text-islamic-gold mt-1 leading-normal tracking-wide">
                منظمة الدول الإسلامية المجهرية
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2 text-[10px] font-semibold text-slate-450 uppercase tracking-widest">
                <span>FOUNDED: 12 March 2024</span>
                <span className="hidden md:inline text-islamic-gold">•</span>
                <span>Treaty Status: Active</span>
              </div>
            </div>
          </div>

          {/* Diplomatic Motto Panel */}
          <div className="border-l-4 border-islamic-gold pl-4 py-2 hidden lg:block max-w-sm">
            <p className="italic text-slate-350 text-sm font-serif leading-relaxed">
              &ldquo;Fostering brotherhood, coordination, and administrative solidarity among sovereign Islamic micronational entities globally.&rdquo;
            </p>
          </div>
        </div>
      </header>

      {/* DIPLOMATIC TAB NAVIGATION BAR */}
      <nav className="bg-[#051410] border-b border-islamic-gold shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap">
          <button
            onClick={() => setActiveTab("diplomatic")}
            className={`flex-1 min-w-[150px] text-center py-4 px-6 font-serif text-sm font-bold uppercase tracking-wider transition-all duration-300 border-r border-[#081e19] ${
              activeTab === "diplomatic"
                ? "bg-[#081e19] text-islamic-gold border-b-2 border-b-islamic-gold shadow-inner"
                : "text-slate-300 hover:bg-islamic-green-hover hover:text-white"
            }`}
          >
            <div className="flex flex-col items-center gap-0.5">
              <span>Diplomatic Portal</span>
              <span className="font-arabic text-xs font-normal lowercase opacity-80">البوابة الدبلوماسية</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("charter")}
            className={`flex-1 min-w-[150px] text-center py-4 px-6 font-serif text-sm font-bold uppercase tracking-wider transition-all duration-300 border-r border-[#081e19] ${
              activeTab === "charter"
                ? "bg-[#081e19] text-islamic-gold border-b-2 border-b-islamic-gold shadow-inner"
                : "text-slate-300 hover:bg-islamic-green-hover hover:text-white"
            }`}
          >
            <div className="flex flex-col items-center gap-0.5">
              <span>Constitutional Charter</span>
              <span className="font-arabic text-xs font-normal lowercase opacity-80">الميثاق الدستوري</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("legislative")}
            className={`flex-1 min-w-[150px] text-center py-4 px-6 font-serif text-sm font-bold uppercase tracking-wider transition-all duration-300 border-r border-[#081e19] ${
              activeTab === "legislative"
                ? "bg-[#081e19] text-islamic-gold border-b-2 border-b-islamic-gold shadow-inner"
                : "text-slate-300 hover:bg-islamic-green-hover hover:text-white"
            }`}
          >
            <div className="flex flex-col items-center gap-0.5">
              <span>Legislative Registry</span>
              <span className="font-arabic text-xs font-normal lowercase opacity-80">السجل التشريعي</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("news")}
            className={`flex-1 min-w-[150px] text-center py-4 px-6 font-serif text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "news"
                ? "bg-[#081e19] text-islamic-gold border-b-2 border-b-islamic-gold shadow-inner"
                : "text-slate-300 hover:bg-islamic-green-hover hover:text-white"
            }`}
          >
            <div className="flex flex-col items-center gap-0.5">
              <span className="flex items-center gap-1.5">
                <span>Press & News</span>
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              </span>
              <span className="font-arabic text-xs font-normal lowercase opacity-80">أخبار وبيانات</span>
            </div>
          </button>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 animate-fadeIn">
        
        {/* TAB 1: DIPLOMATIC PORTAL */}
        {activeTab === "diplomatic" && (
          <div className="space-y-8">
            {/* HERO SECTION */}
            <section className="relative rounded bg-[#061d18] text-parchment p-8 shadow-xl overflow-hidden border border-islamic-gold/40">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none transform translate-x-12 -translate-y-12">
                {/* Large geometric watermark inside Hero */}
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                </svg>
              </div>
              <div className="relative z-10 max-w-3xl">
                <span className="bg-islamic-gold text-slate-white text-[10px] font-bold font-serif uppercase tracking-widest px-3 py-1 rounded">
                  Official Dashboard Home
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mt-4 leading-tight text-slate-100">
                  Welcome to the Organization of Islamic Micronations Official Portal
                </h2>
                <h3 className="font-arabic text-2xl font-semibold text-islamic-gold mt-2">
                  منظمة الدول الإسلامية المجهرية
                </h3>
                <p className="mt-4 text-slate-300 font-serif leading-relaxed text-base md:text-lg">
                  Established on <strong className="text-islamic-gold">12 March 2024</strong>, the Organization of Islamic Micronations is founded upon the core principles of cooperation, diplomatic unity, and Islamic solidarity. We serve as a neutral coordinating body for sovereign micronations of Islamic heritage, providing robust mechanisms for governance, dispute resolution, and peaceful treaties.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-[10px] font-semibold uppercase tracking-wider">
                  <span className="bg-white/5 px-4 py-2 rounded border border-white/10">
                    Est: 12 March 2024
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded border border-white/10">
                    Cabinet Status: Active (May 2026 Term)
                  </span>
                </div>
              </div>
            </section>

            {/* DIPLOMATIC METRICS & SUMMIT TRACKER */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="md:col-span-2 parchment-container p-6 rounded flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-islamic-gold/30">
                    <span className="p-2 rounded bg-islamic-green-tint text-parchment">
                      <svg className="w-6 h-6 text-islamic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <h3 className="font-serif text-xl font-bold text-islamic-gold">
                      Summit & Chair Tracker
                    </h3>
                  </div>
                  
                  <div className="mt-4 space-y-3 font-serif">
                    <p className="text-sm leading-relaxed text-slate-300">
                      Pursuant to the **Bi-annual Summit Clause** in the OIM Charter, the official summits are held during each fixed 6-month term, hosted and organized by the home state of the current Chair.
                    </p>
                    <div className="p-4 bg-[#0a2720] border border-islamic-gold/20 rounded shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-3">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 font-semibold block">CURRENT HOST STATE</span>
                        <span className="font-bold text-slate-100 text-base">Republic of Imruland</span>
                        <span className="font-arabic text-xs font-semibold block text-islamic-gold">امرولاند</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 font-semibold block">CHAIR DELEGATE</span>
                        <span className="font-bold text-slate-100 text-base">President Showib Ahmmed</span>
                        <span className="font-arabic text-xs font-semibold block text-islamic-gold">شعيب أحمد</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 font-semibold block">SUMMIT TERM</span>
                        <span className="font-bold text-slate-200">May 2026 – Oct 2026</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 font-semibold block">SUMMIT VENUE STATUS</span>
                        <span className="font-semibold text-emerald-400 flex items-center gap-1">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Under Administration
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-emerald-950/60">
                  <button 
                    onClick={() => showToast("Summit briefing document is being finalized by the Press Secretary.")} 
                    className="text-xs font-bold text-islamic-gold hover:text-islamic-gold-light flex items-center gap-1 transition-colors"
                  >
                    <span>Read Summit Preparations Protocol</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>

              {/* STATS & LINKS STACK */}
              <div className="flex flex-col gap-6">
                
                {/* DIPLOMATIC SEAL METRICS CARD */}
                <div className="parchment-container p-6 rounded border-l-4 border-l-islamic-gold">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-islamic-gold uppercase tracking-wider">
                      General Assembly Stats
                    </h4>
                    <div className="mt-4 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-[#051411]">
                        <span className="text-sm font-serif text-slate-300">Full Member Nations</span>
                        <span className="font-bold text-islamic-gold text-lg">8</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-[#051411]">
                        <span className="text-sm font-serif text-slate-300">Observer Micronations</span>
                        <span className="font-bold text-islamic-gold text-lg">4</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-[#051411]">
                        <span className="text-sm font-serif text-slate-300">Total Cabinet Seats</span>
                        <span className="font-bold text-islamic-gold text-lg">8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-serif text-slate-300">Active Charters</span>
                        <span className="font-bold text-emerald-400 text-sm flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          May 2026 Rev.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-[10px] text-slate-550 block text-center font-mono uppercase tracking-wider">
                      SECURE HASH: MAY-2026-OIM
                    </span>
                  </div>
                </div>

                {/* EXTERNAL LINKS CARD */}
                <div className="parchment-container p-6 rounded border-l-4 border-l-islamic-gold">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-islamic-gold uppercase tracking-wider">
                      External Diplomatic Links
                    </h4>
                    <div className="mt-4 space-y-3 font-serif text-xs">
                      <a 
                        href="https://discord.gg/zErwwArmGm" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between p-2.5 rounded bg-[#061814] hover:bg-[#0a2720] border border-emerald-950/40 text-slate-200 hover:text-islamic-gold transition-all"
                      >
                        <span className="font-bold">OIM Discord Server</span>
                        <span className="text-[9px] bg-indigo-950/45 text-indigo-400 px-2 py-0.5 rounded border border-indigo-900/30">Connect</span>
                      </a>
                      <a 
                        href="https://micronations.wiki/wiki/Organization_of_Islamic_Micronations" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between p-2.5 rounded bg-[#061814] hover:bg-[#0a2720] border border-emerald-950/40 text-slate-200 hover:text-islamic-gold transition-all"
                      >
                        <span className="font-bold">OIM MicroWiki Page</span>
                        <span className="text-[9px] bg-sky-950/45 text-sky-400 px-2 py-0.5 rounded border border-sky-900/30">Wiki</span>
                      </a>
                      <a 
                        href="https://sites.google.com/view/organisation-of-islamic-micro/home" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between p-2.5 rounded bg-[#061814] hover:bg-[#0a2720] border border-emerald-950/40 text-slate-200 hover:text-islamic-gold transition-all"
                      >
                        <span className="font-bold">Google Site (Legacy)</span>
                        <span className="text-[9px] bg-emerald-950/45 text-emerald-400 px-2 py-0.5 rounded border border-emerald-900/30">Official</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* ADMINISTRATION BOARD (May 2026 Current Cabinet) */}
            <section className="space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <h3 className="font-serif text-2xl font-bold text-slate-100">
                  The OIM Administration Board
                </h3>
                <p className="font-arabic text-xl text-islamic-gold mt-1 font-bold">
                  المجلس الإداري - مايو ٢٠٢٦
                </p>
                <p className="text-sm text-slate-400 mt-2 font-serif">
                  The elected representatives governing the General Assembly, Secretariat, and Judicial Council for the May 2026 administration period.
                </p>
              </div>

              {/* Grid of Cabinet Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cabinet.map((member, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#0a2720] rounded border border-emerald-950/60 shadow-sm hover:shadow-lg hover:border-islamic-gold transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* Header accent of card */}
                    <div className="h-1.5 bg-islamic-green group-hover:bg-islamic-gold transition-colors"></div>
                    
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      
                      {/* Badge / Avatar representation */}
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-islamic-green-tint border border-islamic-gold/10 flex items-center justify-center text-islamic-gold font-bold text-sm">
                          {member.avatarSeed}
                        </div>
                        <span className="text-[9px] bg-[#051410] text-slate-300 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                          Cabinet Seat
                        </span>
                      </div>

                      {/* Role */}
                      <div>
                        <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider">
                          {member.roleEn}
                        </h4>
                        <p className="font-arabic text-sm text-slate-200 font-bold mt-0.5">
                          {member.roleAr}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-[#081e19] my-1"></div>

                      {/* Delegate Name */}
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 block font-semibold">Delegate</span>
                        <h5 className="font-serif text-sm font-bold text-slate-100 leading-snug">
                          {member.nameEn}
                        </h5>
                        <p className="font-arabic text-sm text-slate-350 font-bold mt-0.5">
                          {member.nameAr}
                        </p>
                      </div>

                      {/* Nation Info */}
                      <div className="bg-[#061814] p-2.5 rounded border border-emerald-950/40">
                        <span className="text-[9px] text-slate-450 block uppercase font-semibold">Sovereign State</span>
                        <span className="font-serif text-xs font-bold text-slate-200 block leading-tight">
                          {member.countryEn}
                        </span>
                        <span className="font-arabic text-xs font-semibold text-islamic-gold block mt-0.5">
                          {member.countryAr}
                        </span>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: OIM CHARTER ARCHIVE */}
        {activeTab === "charter" && (
          <div className="parchment-container p-6 md:p-8 rounded max-w-4xl mx-auto shadow-xl">
            
            {/* Charter Header */}
            <div className="text-center pb-6 border-b border-islamic-gold/30 mb-6">
              <span className="text-xs font-bold text-islamic-gold uppercase tracking-widest block mb-2">
                SUPREME INSTITUTIONAL DOCUMENT
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-slate-100">
                Constitutional Charter of the OIM
              </h2>
              <p className="font-arabic text-2xl font-bold text-islamic-gold mt-1">
                الميثاق الدستوري لمنظمة الدول الإسلامية المجهرية
              </p>
              <p className="text-xs text-slate-450 font-mono mt-3">
                Revision: May 2026 Admin Update // Official Codified Archive
              </p>
            </div>

            <p className="text-sm font-serif italic text-slate-300 text-center mb-6 leading-relaxed max-w-xl mx-auto">
              &ldquo;We, the sovereign member states of the Organization of Islamic Micronations, invoking the divine guidance of Allah, pledge to build a unified legal framework for diplomatic coordination.&rdquo;
            </p>

            {/* ACCORDION ACCORDING TO SPECS */}
            <div className="space-y-4">
              
              {/* Accordion 1: Preamble & Article I */}
              <div className="border border-emerald-950/60 rounded overflow-hidden shadow-sm bg-[#08221c]">
                <button
                  onClick={() => toggleArticle("preamble-art1")}
                  className="w-full flex justify-between items-center p-4 bg-[#061e19] hover:bg-[#0a2d25] transition-colors text-left"
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-islamic-gold">Preamble & Article I</span>
                    <span className="text-xs text-slate-400 font-serif">Purposes & Founding Objectives</span>
                  </div>
                  <span className="text-islamic-gold font-bold text-xl">
                    {expandedArticles["preamble-art1"] ? "−" : "+"}
                  </span>
                </button>
                {expandedArticles["preamble-art1"] && (
                  <div className="p-4 md:p-6 border-t border-emerald-950/60 font-serif text-sm leading-relaxed text-slate-300 space-y-4 bg-[#08221c]">
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">PREAMBLE</h4>
                      <p>
                        In the Name of Allah, the Most Gracious, the Most Merciful. We, the representatives of the sovereign Islamic micronations, committed to fostering cooperation, mutual security, and Islamic brotherhood, hereby establish this codified constitutional framework to guide our joint diplomatic endeavors.
                      </p>
                    </div>
                    <div className="pt-2">
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE I: PURPOSES</h4>
                      <ul className="list-decimal pl-5 space-y-2 text-slate-200">
                        <li>To promote Islamic solidarity and coordination among member states.</li>
                        <li>To support the diplomatic recognition and peaceful coexistence of Islamic micronations globally.</li>
                        <li>To coordinate administrative and educational resource-sharing.</li>
                        <li>To settle all intra-organizational disputes exclusively through peaceful, judicial resolution.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Article II & VI */}
              <div className="border border-emerald-950/60 rounded overflow-hidden shadow-sm bg-[#08221c]">
                <button
                  onClick={() => toggleArticle("art2-art6")}
                  className="w-full flex justify-between items-center p-4 bg-[#061e19] hover:bg-[#0a2d25] transition-colors text-left"
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-islamic-gold">Article II & VI</span>
                    <span className="text-xs text-slate-400 font-serif">General Assembly Structure & Sessions</span>
                  </div>
                  <span className="text-islamic-gold font-bold text-xl">
                    {expandedArticles["art2-art6"] ? "−" : "+"}
                  </span>
                </button>
                {expandedArticles["art2-art6"] && (
                  <div className="p-4 md:p-6 border-t border-emerald-950/60 font-serif text-sm leading-relaxed text-slate-300 space-y-4 bg-[#08221c]">
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE II: THE GENERAL ASSEMBLY</h4>
                      <p>
                        The General Assembly is the supreme legislative and representative organ of the OIM. It comprises delegates from all member states. The Assembly holds sole authority to ratify treaties, elect the Cabinet, vote on budgets, and approve membership requests.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE VI: SESSIONS</h4>
                      <p>
                        The General Assembly shall meet in regular bi-annual sessions. Extraordinary sessions may be convened at the request of the Chair or a two-thirds majority of member states. The sessions are presided over by the Chair of the OIM.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 3: Article III & IV */}
              <div className="border border-emerald-950/60 rounded overflow-hidden shadow-sm bg-[#08221c]">
                <button
                  onClick={() => toggleArticle("art3-art4")}
                  className="w-full flex justify-between items-center p-4 bg-[#061e19] hover:bg-[#0a2d25] transition-colors text-left"
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-islamic-gold">Article III & IV</span>
                    <span className="text-xs text-slate-400 font-serif">Membership Rules & Delegate Allocations</span>
                  </div>
                  <span className="text-islamic-gold font-bold text-xl">
                    {expandedArticles["art3-art4"] ? "−" : "+"}
                  </span>
                </button>
                {expandedArticles["art3-art4"] && (
                  <div className="p-4 md:p-6 border-t border-emerald-950/60 font-serif text-sm leading-relaxed text-slate-300 space-y-4 bg-[#08221c]">
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE III: MEMBERSHIP TYPES</h4>
                      <p>
                        Membership is open to any sovereign Islamic micronational entity that formally signs the charter and pledges allegiance to its values. Membership is categorized as follows:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Full Members:</strong> Full sovereign entities with voting rights.</li>
                        <li><strong>Observer States:</strong> Organizations or entities with participatory rights but no vote.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE IV: DELEGATE RULE</h4>
                      <p className="bg-islamic-green-tint border border-islamic-gold/10 p-3 rounded text-slate-200">
                        <strong>Rule:</strong> Full Member states are entitled to appoint exactly <strong className="text-islamic-gold">three (3) official delegates</strong> to the General Assembly. Observer States are limited to exactly <strong className="text-islamic-gold">one (1) observer delegate</strong> who may participate in discussions but has no voting authority.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 4: Article VII & VIII */}
              <div className="border border-emerald-950/60 rounded overflow-hidden shadow-sm bg-[#08221c]">
                <button
                  onClick={() => toggleArticle("art7-art8")}
                  className="w-full flex justify-between items-center p-4 bg-[#061e19] hover:bg-[#0a2d25] transition-colors text-left"
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-islamic-gold">Article VII & VIII</span>
                    <span className="text-xs text-slate-400 font-serif">Executive & Judicial Branches</span>
                  </div>
                  <span className="text-islamic-gold font-bold text-xl">
                    {expandedArticles["art7-art8"] ? "−" : "+"}
                  </span>
                </button>
                {expandedArticles["art7-art8"] && (
                  <div className="p-4 md:p-6 border-t border-emerald-950/60 font-serif text-sm leading-relaxed text-slate-300 space-y-4 bg-[#08221c]">
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE VII: EXECUTIVE CABINET</h4>
                      <p>
                        The Executive Branch (Cabinet) is headed by the Chair, assisted by the Vice-Chair and specialized Secretaries (Recruitment, Press, and Cooperation). The Cabinet coordinates all administrative functions, announces agendas, and manages public diplomatic relations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE VIII: JUDICIAL COUNCIL</h4>
                      <p>
                        The Judicial Council is the supreme judicial authority of the OIM, comprising the Chief Justice, First Additional Justice, and Second Additional Justice. The Judicial Council is responsible for interpreting the Charter, resolving disputes, and executing disciplinary measures.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 5: Article IX */}
              <div className="border border-emerald-950/60 rounded overflow-hidden shadow-sm bg-[#08221c]">
                <button
                  onClick={() => toggleArticle("art9")}
                  className="w-full flex justify-between items-center p-4 bg-[#061e19] hover:bg-[#0a2d25] transition-colors text-left"
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-islamic-gold">Article IX</span>
                    <span className="text-xs text-slate-400 font-serif">Elections, Cabinet Terms & Voting Windows</span>
                  </div>
                  <span className="text-islamic-gold font-bold text-xl">
                    {expandedArticles["art9"] ? "−" : "+"}
                  </span>
                </button>
                {expandedArticles["art9"] && (
                  <div className="p-4 md:p-6 border-t border-emerald-950/60 font-serif text-sm leading-relaxed text-slate-300 space-y-4 bg-[#08221c]">
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE IX: ELECTION SCHEDULING</h4>
                      <p>
                        Cabinet elections are held democratically every six (6) months. To ensure representation across diverse international timezones:
                      </p>
                      <div className="p-3 bg-emerald-950/30 border border-islamic-gold/20 rounded mt-2">
                        <strong>The 72-Hour Rule:</strong> Once an election commences, the secure voting channel must remain active and accepting ballots for exactly <strong className="text-islamic-gold">seventy-two (72) hours</strong>. Votes cast after 72 hours are void.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 6: Article XI & XII */}
              <div className="border border-emerald-950/60 rounded overflow-hidden shadow-sm bg-[#08221c]">
                <button
                  onClick={() => toggleArticle("art11-art12")}
                  className="w-full flex justify-between items-center p-4 bg-[#061e19] hover:bg-[#0a2d25] transition-colors text-left"
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-islamic-gold">Article XI & XII</span>
                    <span className="text-xs text-slate-400 font-serif">Disputes & Disciplinary Warnings</span>
                  </div>
                  <span className="text-islamic-gold font-bold text-xl">
                    {expandedArticles["art11-art12"] ? "−" : "+"}
                  </span>
                </button>
                {expandedArticles["art11-art12"] && (
                  <div className="p-4 md:p-6 border-t border-emerald-950/60 font-serif text-sm leading-relaxed text-slate-300 space-y-4 bg-[#08221c]">
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE XI: DISPUTE PANEL</h4>
                      <p>
                        Disputes between member states must be immediately referred to the Judicial Council. The Chief Justice shall nominate a <strong>three-member neutral panel</strong> consisting of delegates uninvolved in the dispute. The panel has 14 days to resolve the grievance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-serif text-xs font-bold text-islamic-gold uppercase tracking-wider mb-2">ARTICLE XII: DISCIPLINARY ACTIONS</h4>
                      <div className="bg-red-950/20 p-3 border border-red-900/30 rounded text-slate-300">
                        <strong>Three-Warning System:</strong> Any nation violating the Charter is subject to warnings:
                        <br />
                        1. <strong>First Warning:</strong> Formal private Censure by the Judicial Council.
                        <br />
                        2. <strong>Second Warning:</strong> Immediate suspension of voting rights and veto.
                        <br />
                        3. <strong>Third Warning:</strong> Permanent Expulsion, requiring simple majority ratification by the General Assembly.
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Print / Export Actions */}
            <div className="mt-8 pt-4 border-t border-islamic-gold/30 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-mono">CODE: OIM-CHARTER-V2.26</span>
              <button 
                onClick={() => showToast("Charter PDF version downloading...")}
                className="text-xs font-serif font-bold text-islamic-gold hover:text-islamic-gold-light border border-islamic-gold hover:border-islamic-gold-light px-4 py-2 rounded transition-all"
              >
                Download Official Codified Copy
              </button>
            </div>

          </div>
        )}

        {/* TAB 3: LEGISLATIVE REGISTRY */}
        {activeTab === "legislative" && (
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Parchment Document Frame */}
            <div className="parchment-container p-6 md:p-12 rounded shadow-2xl relative border-2 border-double border-islamic-gold">
              
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 text-islamic-gold opacity-40 font-serif text-xl select-none">✦</div>
              <div className="absolute top-2 right-2 text-islamic-gold opacity-40 font-serif text-xl select-none">✦</div>
              <div className="absolute bottom-2 left-2 text-islamic-gold opacity-40 font-serif text-xl select-none">✦</div>
              <div className="absolute bottom-2 right-2 text-islamic-gold opacity-40 font-serif text-xl select-none">✦</div>

              {/* Document Header */}
              <div className="text-center pb-8 border-b border-islamic-gold/30">
                <span className="text-xs font-bold text-islamic-gold tracking-widest uppercase block mb-1">
                  OFFICIAL TREATY REGISTRY
                </span>
                <h2 className="font-serif text-3xl font-extrabold text-slate-100 leading-snug">
                  Proposal no. OIM-01/2026: OIM Peace Treaty 2026
                </h2>
                <div className="flex justify-center items-center gap-3 mt-3">
                  <span className="text-xs font-mono bg-[#051410] border border-emerald-950/40 px-2 py-0.5 rounded text-slate-300">
                    ADOPTED: May 12, 2026
                  </span>
                  <span className="bg-emerald-950 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-900/30">
                    IN EFFECT
                  </span>
                </div>
              </div>

              {/* Core Tenets (Parchment Container style) */}
              <div className="my-8 font-serif text-sm md:text-base leading-relaxed text-slate-250 space-y-6">
                <p className="italic text-center text-slate-350">
                  &ldquo;In the name of the Almighty, the member states of the Organization of Islamic Micronations, desiring to ensure everlasting peace, mutual respect, and collaborative harmony, have resolved to ratify this treaty.&rdquo;
                </p>
                
                <div className="space-y-4 pt-4 text-slate-300">
                  <div className="flex gap-4 items-start">
                    <span className="font-bold text-islamic-gold text-lg">I.</span>
                    <p>
                      <strong>Mutual Recognition & Non-Aggression:</strong> All signatory nations formally recognize each other's sovereignty, territorial integrity, and diplomatic existence, pledging to resolve grievances exclusively via peaceful negotiation.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="font-bold text-islamic-gold text-lg">II.</span>
                    <p>
                      <strong>Fraternal Solidarity:</strong> Signatories commit to supporting one another during external diplomatic challenges, defending the honor of member states, and promoting collective security.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="font-bold text-islamic-gold text-lg">III.</span>
                    <p>
                      <strong>Mutual Aid & Trade Facilitation:</strong> Signatories agree to lower barriers for cultural and educational exchange, encourage bilateral trade agreements, and share technical and administrative expertise.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="font-bold text-islamic-gold text-lg">IV.</span>
                    <p>
                      <strong>Dispute Resolution Mechanism:</strong> In case of friction, signatories agree to refer matters immediately to the OIM Judicial Council and abide fully by its rulings without escalation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signatures & Ratification Status */}
              <div className="mt-12 pt-6 border-t border-islamic-gold/30">
                <div className="text-center mb-6">
                  <span className="text-xs uppercase text-gray-400 font-bold block mb-1">RATIFICATION STATUS</span>
                  <span className="font-serif text-lg font-bold text-emerald-400 flex items-center justify-center gap-1.5">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Adopted & In Effect
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">
                  <div className="p-3 bg-emerald-950/40 border border-emerald-900/30 rounded">
                    <span className="text-[9px] text-slate-500 font-mono">SIGNATURE I</span>
                    <div className="font-serif italic text-sm text-islamic-gold font-bold my-1">S. Ahmmed</div>
                    <span className="text-[9px] bg-[#051410] px-2 py-0.5 rounded text-slate-300 block truncate">Imruland</span>
                  </div>
                  <div className="p-3 bg-emerald-950/40 border border-emerald-900/30 rounded">
                    <span className="text-[9px] text-slate-500 font-mono">SIGNATURE II</span>
                    <div className="font-serif italic text-sm text-islamic-gold font-bold my-1">Al Mu'tazz</div>
                    <span className="text-[9px] bg-[#051410] px-2 py-0.5 rounded text-slate-300 block truncate">Rovia</span>
                  </div>
                  <div className="p-3 bg-emerald-950/40 border border-emerald-900/30 rounded">
                    <span className="text-[9px] text-slate-500 font-mono">SIGNATURE III</span>
                    <div className="font-serif italic text-sm text-islamic-gold font-bold my-1">A. Abbas</div>
                    <span className="text-[9px] bg-[#051410] px-2 py-0.5 rounded text-slate-300 block truncate">Arsalania</span>
                  </div>
                  <div className="p-3 bg-emerald-950/40 border border-emerald-900/30 rounded">
                    <span className="text-[9px] text-slate-500 font-mono">SIGNATURE IV</span>
                    <div className="font-serif italic text-sm text-islamic-gold font-bold my-1">Yusuf I</div>
                    <span className="text-[9px] bg-[#051410] px-2 py-0.5 rounded text-slate-300 block truncate">Kasimid Sultanate</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-3">
                  <div className="p-3 bg-emerald-950/40 border border-emerald-900/30 rounded">
                    <span className="text-[9px] text-slate-500 font-mono">SIGNATURE V</span>
                    <div className="font-serif italic text-sm text-islamic-gold font-bold my-1">Ali Al Masry</div>
                    <span className="text-[9px] bg-[#051410] px-2 py-0.5 rounded text-slate-300 block truncate">El Amal</span>
                  </div>
                  <div className="p-3 bg-emerald-950/40 border border-emerald-900/30 rounded">
                    <span className="text-[9px] text-slate-500 font-mono">SIGNATURE VI</span>
                    <div className="font-serif italic text-sm text-islamic-gold font-bold my-1">Omar S.</div>
                    <span className="text-[9px] bg-[#051410] px-2 py-0.5 rounded text-slate-300 block truncate">Al Maqas</span>
                  </div>
                  <div className="p-3 bg-emerald-950/40 border border-emerald-900/30 rounded">
                    <span className="text-[9px] text-slate-500 font-mono">SIGNATURE VII</span>
                    <div className="font-serif italic text-sm text-islamic-gold font-bold my-1">Jestand G.</div>
                    <span className="text-[9px] bg-[#051410] px-2 py-0.5 rounded text-slate-300 block truncate">Moeezland</span>
                  </div>
                  <div className="p-3 bg-emerald-950/40 border border-emerald-900/30 rounded">
                    <span className="text-[9px] text-slate-500 font-mono">SIGNATURE VIII</span>
                    <div className="font-serif italic text-sm text-islamic-gold font-bold my-1">A. Al Qadari</div>
                    <span className="text-[9px] bg-[#051410] px-2 py-0.5 rounded text-slate-300 block truncate">Zarocoria</span>
                  </div>
                </div>

                <div className="text-center mt-6 text-xs text-slate-450 italic">
                  Attested by the OIM Secretariat Archive Registry
                </div>

              </div>

            </div>
          </div>
        )}

        {/* TAB 4: NEWS & PRESS RELEASES */}
        {activeTab === "news" && (
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Pinned Announcement Block */}
            <div className="bg-[#08221c] rounded border border-emerald-950/60 shadow-lg overflow-hidden">
              
              {/* Press Release Ribbon */}
              <div className="bg-amber-700 text-[#FAF9F5] text-xs font-bold uppercase tracking-widest px-4 py-2 flex items-center justify-between border-b border-islamic-gold/20">
                <span>OFFICIAL PRESS RELEASE</span>
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">PINNED ANNOUNCEMENT</span>
              </div>

              {/* Press Release Content Container */}
              <div className="p-6 md:p-8 font-serif leading-relaxed text-slate-300 space-y-6">
                
                {/* Header Metadata */}
                <div className="border-b border-[#051410] pb-4">
                  <h2 className="text-2xl font-extrabold text-slate-100 leading-snug">
                    Official Schedule for the 5th OIM Chair Election 2026
                  </h2>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-2 font-sans font-medium">
                    <span>DATE: 2 June 2026</span>
                    <span>•</span>
                    <span>SOURCE: OIM Election Administration</span>
                    <span>•</span>
                    <span>RELEASE NO: OIM-EL-2026-05</span>
                  </div>
                </div>

                {/* Body Text */}
                <div className="text-sm md:text-base space-y-4">
                  <p>
                    In accordance with Article IX(c) of the Charter of the Organization of Islamic Micronations (OIM), as the Chief Election Administrator of the OIM, I hereby announce the schedule for the 5th OIM Chair Election 2026 as follows:
                  </p>
                  
                  {/* Schedule Details block */}
                  <div className="bg-[#061e19] border border-emerald-950/60 rounded p-4 font-sans text-sm space-y-2 text-slate-350 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-emerald-950/40 pb-2">
                      <strong className="text-islamic-gold">Candidacy Announcement Deadline:</strong>
                      <span>7 June 2026 at 23:59:59 UTC</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-emerald-950/40 pb-2">
                      <strong className="text-islamic-gold">Scrutiny of Candidacies:</strong>
                      <span>8 June 2026</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-emerald-950/40 pb-2">
                      <strong className="text-islamic-gold">Campaigning Period:</strong>
                      <span>From immediately after the announcement of accepted candidacies until the conclusion of the election.</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-emerald-950/40 pb-2">
                      <strong className="text-islamic-gold">Election Period:</strong>
                      <span>17 June 2026 &ndash; 19 June 2026</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <strong className="text-islamic-gold">Power Transfer:</strong>
                      <span>1 July 2026 at 12:30 UTC</span>
                    </div>
                  </div>

                  <p>
                    All interested delegates of full member states are requested to announce their candidacy in the designated{" "}
                    <button
                      onClick={() => showToast("Simulated link: Redirecting to #candidacy-announcement Telegram/Discord security channel...")}
                      className="inline-block px-2.5 py-0.5 bg-islamic-green text-[#FAF9F5] text-xs font-sans font-bold rounded-full border border-islamic-gold hover:bg-islamic-gold hover:text-slate-white transition-all"
                    >
                      #candidacy-announcement
                    </button>{" "}
                    channel and conduct their campaigns in the{" "}
                    <button
                      onClick={() => showToast("Simulated link: Redirecting to #campaign campaign debate forum...")}
                      className="inline-block px-2.5 py-0.5 bg-islamic-green text-[#FAF9F5] text-xs font-sans font-bold rounded-full border border-islamic-gold hover:bg-islamic-gold hover:text-slate-white transition-all"
                    >
                      #campaign
                    </button>{" "}
                    channel. All members are encouraged to actively participate in this democratic process.
                  </p>

                  <p>
                    Should you have any questions regarding the election, please feel free to contact the Election Administration. May this election further strengthen the unity, cooperation, and Islamic values of our organization.
                  </p>
                </div>

                {/* Sign-off footer */}
                <div className="border-t border-[#051410] pt-4 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-200 block">Election Commissioner Office</span>
                    <span className="text-slate-500 block font-mono">SECURE TRANSCRIPT STAMP</span>
                  </div>
                  <button
                    onClick={() => showToast("Verification complete: Registry transcript OIM-PR-05 holds 8 matching digital signatures.")}
                    className="bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-900/30 text-slate-300 px-3 py-1.5 rounded transition-all font-sans font-semibold"
                  >
                    Verify Digital Hash
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-[#051410] text-[#FAF9F5] py-12 px-6 mt-12 border-t border-islamic-gold/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <span className="font-serif text-lg font-bold text-islamic-gold block mb-3">
              OIM Secretariat Archive
            </span>
            <p className="text-xs text-slate-400 leading-relaxed font-serif">
              The Organization of Islamic Micronations is a cooperative diplomatic organization composed of sovereign micronational entities. We strive to foster unity, resolve disputes, and host bi-annual summits.
            </p>
          </div>

          <div>
            <span className="font-serif text-sm font-bold text-islamic-gold uppercase tracking-wider block mb-3">
              Resource Quick-Links
            </span>
            <ul className="text-xs space-y-2 font-serif text-slate-400">
              <li>
                <button onClick={() => setActiveTab("charter")} className="hover:text-islamic-gold transition-colors text-left">
                  Codified Charter V2 (May 2026)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("legislative")} className="hover:text-islamic-gold transition-colors text-left">
                  OIM Peace Treaty 2026 Ratification
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("diplomatic")} className="hover:text-islamic-gold transition-colors text-left">
                  May 2026 Cabinet Directory
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("news")} className="hover:text-islamic-gold transition-colors text-left">
                  Election Administration Commission
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-serif text-sm font-bold text-islamic-gold uppercase tracking-wider block mb-3">
              Diplomatic Channels
            </span>
            <ul className="text-xs space-y-2 font-serif text-slate-400">
              <li>
                <a 
                  href="https://discord.gg/zErwwArmGm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-islamic-gold transition-colors flex items-center gap-1.5"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a 
                  href="https://micronations.wiki/wiki/Organization_of_Islamic_Micronations" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-islamic-gold transition-colors flex items-center gap-1.5"
                >
                  OIM MicroWiki Page
                </a>
              </li>
              <li>
                <a 
                  href="https://sites.google.com/view/organisation-of-islamic-micro/home" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-islamic-gold transition-colors flex items-center gap-1.5"
                >
                  Google Site (Legacy)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-serif text-sm font-bold text-islamic-gold uppercase tracking-wider block mb-3">
              Official Verification
            </span>
            <p className="text-[11px] text-slate-500 font-mono leading-relaxed">
              Domain Reference: OIM-PORTAL.SECURE
              <br />
              Signature Status: Validated & Codified
              <br />
              Verification Authority: OIM Supreme Court
            </p>
            <div className="mt-4 flex gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-mono text-emerald-400">All Diplomatic Channels Online</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 font-serif">
          <span>&copy; 2024 &ndash; 2026 Organization of Islamic Micronations (OIM). All rights reserved.</span>
          <div className="flex gap-4 mt-4 md:mt-0 font-sans">
            <span>Standard: ISO-OIM-2026</span>
            <span>Security Classification: Diplomatic Archive</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
