/*
 * WEBGLOW Navbar — Quiet Luxury Minimalism
 * Sticky with backdrop-blur on scroll
 * Black logo on white background
 * Hamburger menu on mobile
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "Ukázky", href: "#ukazky" },
  { label: "Jak to funguje", href: "#jak-to-funguje" },
  { label: "Ceník", href: "#cenik" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#E8E8E8] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 group"
              aria-label="WEBGLOW – domů"
            >
              {/* Geometric W monogram */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                {/* Two overlapping V shapes forming W */}
                <path
                  d="M4 8 L13 32 L20 16 L27 32 L36 8"
                  stroke="#0A0A0A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span
                className="font-display font-800 text-[#0A0A0A] tracking-[0.15em] text-sm uppercase"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, letterSpacing: "0.15em" }}
              >
                WEBGLOW
              </span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#0A0A0A] text-sm font-medium hover:opacity-60 transition-opacity duration-200 font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#kontakt")}
                className="hidden md:inline-flex btn-primary text-sm"
              >
                Nezávazná konzultace
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-[#0A0A0A] hover:opacity-60 transition-opacity"
                aria-label="Otevřít menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E8E8] shadow-lg"
          >
            <div className="container py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left py-3 text-[#0A0A0A] text-base font-medium border-b border-[#F0F0F0] hover:opacity-60 transition-opacity font-body"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <button
                onClick={() => handleNavClick("#kontakt")}
                className="btn-primary w-full mt-5 justify-center"
              >
                Nezávazná konzultace
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
