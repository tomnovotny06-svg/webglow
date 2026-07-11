/*
 * WEBGLOW Footer — Dark background, white inverted logo
 * Quiet Luxury Minimalism
 */

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "Ukázky", href: "#ukazky" },
  { label: "Jak to funguje", href: "#jak-to-funguje" },
  { label: "Ceník", href: "#cenik" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            {/* White logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 mb-4 group"
              aria-label="WEBGLOW – domů"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <path
                  d="M4 8 L13 32 L20 16 L27 32 L36 8"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span
                className="text-white tracking-[0.15em] text-sm uppercase"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, letterSpacing: "0.15em" }}
              >
                WEBGLOW
              </span>
            </a>
            <p className="text-[#888] text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Modernější web pro moderní firmy.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/webglow.cz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#555] hover:text-white transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/webglow.cz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#555] hover:text-white transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest text-[#555] mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Navigace
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#AAA] text-sm hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest text-[#555] mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:webglow@email.cz"
                  className="text-[#AAA] text-sm hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  webglow@email.cz
                </a>
              </li>
              <li>
                <a
                  href="tel:+420774215929"
                  className="text-[#AAA] text-sm hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  +420 774 215 929
                </a>
              </li>
              <li>
                <span className="text-[#666] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Odpověď do 24 hodin
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} WEBGLOW. Všechna práva vyhrazena.
          </p>
          <p className="text-[#555] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Tomáš Novotný
          </p>
        </div>
      </div>
    </footer>
  );
}
