/*
 * WEBGLOW Home Page — All sections
 * Design: Quiet Luxury Minimalism (Linear/Stripe/Vercel inspired)
 * Colors: #FAFAFA bg, #0A0A0A text, no color accents
 * Typography: Bricolage Grotesque (headlines) + DM Sans (body)
 * Animations: Framer Motion viewport-triggered fade-in
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor, Smartphone, Zap, Search, Mail, FileText,
  CheckCircle, ArrowRight, Phone, Clock, ChevronDown
} from "lucide-react";
import FadeIn, { FadeInStagger, FadeInItem } from "@/components/FadeIn";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Image paths from uploaded assets
const HERO_IMG = "/manus-storage/hero_mockup_c31c0d4f.png";
const BA_RESTAURANT = "/manus-storage/before_after_restaurant_979e7be4.png";
const BA_BARBER = "/manus-storage/before_after_barber_d4a77d1d.png";
const BA_FITNESS = "/manus-storage/before_after_fitness_46017f5b.png";

const problems = [
  {
    icon: Monitor,
    title: "Zastaralý design",
    desc: "Web z roku 2010 působí nedůvěryhodně. Zákazníci odcházejí ke konkurenci, která vypadá profesionálně.",
  },
  {
    icon: Zap,
    title: "Pomalé načítání",
    desc: "Každá sekunda zpoždění stojí zákazníky. Pomalý web snižuje konverze a penalizuje vás v Google.",
  },
  {
    icon: Smartphone,
    title: "Nefunguje na mobilu",
    desc: "Přes 60 % návštěvníků přichází z mobilu. Pokud web není responzivní, přicházíte o zákazníky každý den.",
  },
];

const services = [
  { icon: Monitor, title: "Moderní design", desc: "Čistý, profesionální vzhled inspirovaný nejlepšími weby světa." },
  { icon: Smartphone, title: "Mobilní optimalizace", desc: "Perfektní zobrazení na každém zařízení — mobil, tablet, desktop." },
  { icon: Zap, title: "Rychlé načítání", desc: "Optimalizovaný kód a obrázky pro maximální rychlost." },
  { icon: Search, title: "SEO základy", desc: "Správná struktura, meta tagy a technické SEO pro lepší pozice v Google." },
  { icon: Mail, title: "Kontaktní formulář", desc: "Funkční formulář, který vám přinese nové poptávky přímo do e-mailu." },
  { icon: FileText, title: "Správa obsahu", desc: "Jednoduchá administrace, abyste mohli web spravovat sami." },
];

const steps = [
  {
    num: "01",
    title: "Bezplatná konzultace",
    desc: "Zavoláme si nebo napíšeme. Řeknete mi o svém podnikání a co od webu očekáváte. Žádné závazky.",
  },
  {
    num: "02",
    title: "Návrh zdarma",
    desc: "Ukážu vám, jak by mohl váš nový web vypadat — ještě předtím, než za cokoliv zaplatíte.",
  },
  {
    num: "03",
    title: "Schválení a realizace",
    desc: "Pokud se vám návrh líbí, domluvíme se na ceně a termínu. Pak web postavím.",
  },
  {
    num: "04",
    title: "Spuštění a předání",
    desc: "Web spustíme, otestuji na všech zařízeních a předám vám přístupy. Hotovo.",
  },
];

const plans = [
  {
    name: "Základní",
    price: "od 4 900 Kč",
    popular: false,
    features: [
      "Landing page (1 stránka)",
      "Mobilní verze",
      "Základní SEO",
      "Kontaktní formulář",
      "Rychlé načítání",
    ],
  },
  {
    name: "Standardní",
    price: "od 8 900 Kč",
    popular: true,
    features: [
      "Vícestrankový web (3–5 stránek)",
      "Mobilní verze",
      "Kontaktní formulář",
      "Galerie fotek",
      "Základní SEO",
      "Rychlé načítání",
    ],
  },
  {
    name: "Na míru",
    price: "Domluvíme se",
    popular: false,
    features: [
      "Cena podle rozsahu projektu",
      "Vše ze Standardního plánu",
      "Rezervační systém nebo katalog",
      "Pokročilé SEO",
      "Prioritní podpora",
    ],
  },
];

const beforeAfterItems = [
  { src: BA_RESTAURANT, label: "Restaurace" },
  { src: BA_BARBER, label: "Kadeřnictví" },
  { src: BA_FITNESS, label: "Fitness studio" },
];

// Contact form state type
interface FormState {
  name: string;
  email: string;
  // Formspree endpoint for webglow@email.cz
  // Using public Formspree form tied to webglow@email.cz
  web: string;
  message: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgkqd";

export default function Home() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", web: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          web: form.web,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo napište přímo na webglow@email.cz");
      }
    } catch {
      setError("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo napište přímo na webglow@email.cz");
    } finally {
      setSending(false);
    }
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial gradient vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 60%, #FAFAFA 100%)",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-6 h-px bg-[#0A0A0A]" />
                <span
                  className="text-xs uppercase tracking-[0.2em] text-[#666]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Redesign webů pro české firmy
                </span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.08}>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#0A0A0A] mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
              >
                Ukážu vám nový web<br />
                <span className="italic font-normal" style={{ fontWeight: 400 }}>ještě předtím,</span><br />
                než za něj zaplatíte.
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.16}>
              <p
                className="text-lg md:text-xl text-[#555] max-w-xl leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Moderní, rychlý a přehledný web bez agenturní ceny.
              </p>
            </FadeIn>

            {/* Founder quote */}
            <FadeIn delay={0.22}>
              <blockquote className="relative border-l-2 border-[#0A0A0A] pl-5 mb-10 max-w-2xl bg-[#F7F7F7] py-4 pr-4 rounded-r-sm">
                <p
                  className="text-[#333] text-base md:text-lg leading-relaxed italic"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  „Nejsem agentura s 10 lidmi a fakturou za 50 000 Kč. Jsem student, který dělá weby poctivě, rychle a za rozumnou cenu."
                </p>
                <footer className="mt-3 text-sm text-[#888] not-italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  — Tomáš Novotný, zakladatel WEBGLOW
                </footer>
              </blockquote>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.28}>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleNavClick("#kontakt")}
                  className="btn-primary"
                >
                  Nezávazná konzultace
                </button>
                <button
                  onClick={() => handleNavClick("#ukazky")}
                  className="btn-secondary"
                >
                  Ukázat redesign
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Hero image */}
          <FadeIn delay={0.35} className="mt-16 md:mt-20">
            <div className="relative rounded-sm overflow-hidden border border-[#E8E8E8] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.15)]">
              <img
                src={HERO_IMG}
                alt="Ukázka redesignu webu — před a po"
                className="w-full h-auto block"
                loading="eager"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFAFA]/50 to-transparent pointer-events-none" />
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn delay={0.5} className="mt-12 flex justify-center">
            <button
              onClick={() => handleNavClick("#problem")}
              className="flex flex-col items-center gap-2 text-[#AAA] hover:text-[#0A0A0A] transition-colors duration-200 group"
            >
              <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Zjistit více
              </span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="border-t border-b border-[#E8E8E8] bg-white">
        <div className="container">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8E8E8]">
            {[
              { num: "100%", label: "Návrh zdarma předem" },
              { num: "48h", label: "Průměrná doba návrhu" },
              { num: "3×", label: "Levnější než agentura" },
              { num: "24h", label: "Odpověď na poptávku" },
            ].map((stat) => (
              <FadeInItem key={stat.label}>
                <div className="py-8 px-6 text-center">
                  <div
                    className="text-3xl font-black text-[#0A0A0A] mb-1"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs text-[#888] uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROBLEM SECTION
      ═══════════════════════════════════════════ */}
      <section id="problem" className="py-20 md:py-28 border-t border-[#E8E8E8]">
        <div className="container">
          <FadeIn>
            <div className="mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-[#0A0A0A]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Problém
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
              >
                Váš web odrazuje zákazníky
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {problems.map((p) => (
              <FadeInItem key={p.title}>
                <div className="group p-8 border border-[#E8E8E8] rounded-sm hover:border-[#0A0A0A] transition-all duration-300 hover:shadow-lg hover:shadow-black/5 bg-white">
                  <div className="mb-5">
                    <p.icon size={24} className="text-[#0A0A0A]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3 text-[#0A0A0A]"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {p.desc}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BEFORE/AFTER SECTION
      ═══════════════════════════════════════════ */}
      <section id="ukazky" className="py-20 md:py-28 bg-[#F5F5F5] border-t border-[#E8E8E8]">
        <div className="container">
          <FadeIn>
            <div className="mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-[#0A0A0A]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Ukázky
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
              >
                Ukázky redesignů
              </h2>
              <p className="mt-4 text-[#666] text-base max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Ukázky skutečných redesignů — jak může vypadat váš nový web.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {beforeAfterItems.map((item) => (
              <FadeInItem key={item.label}>
                <BeforeAfterSlider imageSrc={item.src} label={item.label} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════ */}
      <section id="sluzby" className="py-20 md:py-28 border-t border-[#E8E8E8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="left">
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="w-6 h-px bg-[#0A0A0A]" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Služby
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
                >
                  Co dostanete
                </h2>
                <p className="text-[#666] text-base leading-relaxed max-w-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Každý web stavím od základu s důrazem na výkon, vzhled a výsledky. Žádné šablony, žádné zkratky.
                </p>
                <button
                  onClick={() => handleNavClick("#kontakt")}
                  className="btn-primary mt-8 inline-flex items-center gap-2"
                >
                  Začít konzultaci
                  <ArrowRight size={16} />
                </button>
              </div>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((s) => (
                <FadeInItem key={s.title}>
                  <div className="p-6 border border-[#E8E8E8] rounded-sm hover:border-[#0A0A0A] transition-all duration-300 hover:shadow-md hover:shadow-black/5 bg-white group">
                    <s.icon size={20} className="text-[#0A0A0A] mb-4" strokeWidth={1.5} />
                    <h3
                      className="text-base font-bold mb-2 text-[#0A0A0A]"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[#777] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {s.desc}
                    </p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS SECTION
      ═══════════════════════════════════════════ */}
      <section id="jak-to-funguje" className="py-20 md:py-28 bg-[#F5F5F5] border-t border-[#E8E8E8]">
        <div className="container">
          <FadeIn>
            <div className="mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-[#0A0A0A]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Proces
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
              >
                Jak to funguje
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="relative">
                  {/* Step number */}
                  <div
                    className="text-7xl font-black text-[#EBEBEB] leading-none mb-4 select-none"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
                  >
                    {step.num}
                  </div>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#E0E0E0] -translate-x-1/2 z-0" />
                  )}
                  <h3
                    className="text-lg font-bold mb-3 text-[#0A0A0A]"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING SECTION
      ═══════════════════════════════════════════ */}
      <section id="cenik" className="py-20 md:py-28 border-t border-[#E8E8E8]">
        <div className="container">
          <FadeIn>
            <div className="mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-[#0A0A0A]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Ceník
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
              >
                Ceník
              </h2>
              <p className="mt-4 text-[#666] text-base max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Transparentní ceny bez skrytých poplatků. Vždy víte, co dostanete.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {plans.map((plan) => (
              <FadeInItem key={plan.name}>
                <div
                  className={`relative p-8 rounded-sm border transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-2xl shadow-black/20 scale-[1.02]"
                      : "bg-white border-[#E8E8E8] hover:border-[#0A0A0A] hover:shadow-lg hover:shadow-black/5"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span
                        className="bg-white text-[#0A0A0A] text-xs font-semibold px-3 py-1 rounded-full border border-[#E8E8E8] whitespace-nowrap"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Nejoblíbenější
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-[#0A0A0A]"}`}
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}
                    >
                      {plan.name}
                    </h3>
                    <div
                      className={`text-3xl font-black tracking-tight ${plan.popular ? "text-white" : "text-[#0A0A0A]"}`}
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
                    >
                      {plan.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-white/70" : "text-[#0A0A0A]"}`}
                          strokeWidth={1.5}
                        />
                        <span
                          className={`text-sm ${plan.popular ? "text-white/80" : "text-[#555]"}`}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleNavClick("#kontakt")}
                    className={`w-full py-3 px-6 rounded-sm text-sm font-medium transition-all duration-200 ${
                      plan.popular
                        ? "bg-white text-[#0A0A0A] hover:bg-white/90"
                        : "border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Nezávazně poptat
                  </button>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-center text-sm text-[#999]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ceny jsou orientační. Přesnou nabídku dostanete po konzultaci zdarma.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION (dark background)
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="container">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-6 h-px bg-white/40" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Začněme
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
              >
                Připraveni na nový web?
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Ukážu vám zdarma, jak by mohl váš nový web vypadat. Bez závazků, bez skrytých poplatků.
              </p>
              <button
                onClick={() => handleNavClick("#kontakt")}
                className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-medium px-8 py-4 rounded-sm hover:bg-white/90 transition-all duration-200 text-base"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Nezávazně poptat redesign
                <ArrowRight size={18} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════ */}
      <section id="kontakt" className="py-20 md:py-28 border-t border-[#E8E8E8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <FadeIn direction="left">
              <div>
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="w-6 h-px bg-[#0A0A0A]" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Kontakt
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
                >
                  Kontakt
                </h2>
                <p className="text-[#666] text-base leading-relaxed mb-10 max-w-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Napište nebo zavolejte. Odpovím do 24 hodin a domluvíme se na bezplatné konzultaci.
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:webglow@email.cz"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 border border-[#E8E8E8] rounded-sm flex items-center justify-center group-hover:border-[#0A0A0A] transition-colors duration-200">
                      <Mail size={18} strokeWidth={1.5} className="text-[#0A0A0A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#999] uppercase tracking-wider mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Email
                      </div>
                      <div className="text-[#0A0A0A] text-sm font-medium group-hover:underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        webglow@email.cz
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+420774215929"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 border border-[#E8E8E8] rounded-sm flex items-center justify-center group-hover:border-[#0A0A0A] transition-colors duration-200">
                      <Phone size={18} strokeWidth={1.5} className="text-[#0A0A0A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#999] uppercase tracking-wider mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Telefon
                      </div>
                      <div className="text-[#0A0A0A] text-sm font-medium group-hover:underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        +420 774 215 929
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-[#E8E8E8] rounded-sm flex items-center justify-center">
                      <Clock size={18} strokeWidth={1.5} className="text-[#0A0A0A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#999] uppercase tracking-wider mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Odezva
                      </div>
                      <div className="text-[#0A0A0A] text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Odpověď do 24 hodin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact form */}
            <FadeIn direction="right">
              {submitted ? (
                <div className="flex flex-col items-start justify-center h-full py-12">
                  <div className="w-12 h-12 border border-[#0A0A0A] rounded-sm flex items-center justify-center mb-6">
                    <CheckCircle size={22} strokeWidth={1.5} className="text-[#0A0A0A]" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3 text-[#0A0A0A]"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}
                  >
                    Zpráva odeslána
                  </h3>
                  <p className="text-[#666] text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Děkuji za zájem! Ozvu se vám do 24 hodin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider text-[#666] mb-2"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Jméno *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E8E8] rounded-sm text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#0A0A0A] transition-colors duration-200 placeholder:text-[#CCC]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        placeholder="Vaše jméno"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider text-[#666] mb-2"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E8E8] rounded-sm text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#0A0A0A] transition-colors duration-200 placeholder:text-[#CCC]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        placeholder="vas@email.cz"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider text-[#666] mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Váš web (nepovinné)
                    </label>
                    <input
                      type="url"
                      value={form.web}
                      onChange={(e) => setForm({ ...form, web: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8E8E8] rounded-sm text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#0A0A0A] transition-colors duration-200 placeholder:text-[#CCC]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      placeholder="https://vas-web.cz"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider text-[#666] mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Zpráva *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8E8E8] rounded-sm text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#0A0A0A] transition-colors duration-200 placeholder:text-[#CCC] resize-none"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      placeholder="Řekněte mi o svém podnikání a co od webu očekáváte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Odesílám..." : "Odeslat zprávu"}
                  </button>

                  {error && (
                    <p className="text-xs text-red-500 text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {error}
                    </p>
                  )}
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
