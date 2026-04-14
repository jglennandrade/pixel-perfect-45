import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import darwinLogo from "@/assets/darwin-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuLinks = [
    { id: "quiz-section", label: t("header.workersComp") },
    { id: "quiz-section", label: t("header.personalInjury") },
  ];

  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  const [scrollUpStart, setScrollUpStart] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      // Near top: always show, reset
      if (y < 100) {
        setHidden(false);
        setScrollUpStart(null);
      }
      // Scrolling down: hide, reset scroll-up tracking
      else if (y > lastY) {
        setHidden(true);
        setScrollUpStart(null);
      }
      // Scrolling up: track how much they've scrolled up
      else if (y < lastY) {
        if (scrollUpStart === null) {
          // Just started scrolling up — mark the starting point
          setScrollUpStart(y);
        } else {
          // Show navbar once they've scrolled up 5% of viewport height
          const threshold = window.innerHeight * 0.15;
          if (scrollUpStart - y >= threshold) {
            setHidden(false);
          }
        }
      }

      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY, scrollUpStart]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] flex items-center justify-between px-5 md:px-10 transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        }`}
      >
        {/* LEFT — Phone icon + number */}
        <a
          href="tel:4045212667"
          className="flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-full bg-cta flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone size={14} className="text-white" />
          </span>
          <span className="hidden sm:block font-dm font-bold text-white text-sm tracking-wide group-hover:text-cta transition-colors">
            404-521-2667
          </span>
        </a>

        {/* CENTER — Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 z-50"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src={darwinLogo}
            alt="Darwin F. Johnson"
            className="h-6 md:h-7 w-auto brightness-100"
          />
        </Link>

        {/* RIGHT — CTA + Language toggle + "menu" text + hamburger */}
        <div className="relative z-50 flex items-center gap-3">
          {/* Free Case Review CTA — appears on scroll */}
          <button
            onClick={() => {
              document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`hidden sm:block font-dm text-[11px] font-bold px-4 py-2 rounded-full bg-cta text-white hover:bg-cta-hover transition-all duration-300 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {t("header.freeCaseReview")}
          </button>

          {/* EN/ES pill toggle */}
          <div className="flex bg-white/[0.12] rounded-full p-[3px] gap-[2px]">
            <button
              onClick={() => setLanguage("en")}
              className={`font-dm text-[11px] font-bold px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === "en"
                  ? "bg-cta text-white"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`font-dm text-[11px] font-bold px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === "es"
                  ? "bg-cta text-white"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              ES
            </button>
          </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-3"
          aria-label="Toggle menu"
        >
          <span className="hidden sm:block font-dm text-sm text-white/70 tracking-wide">
            {menuOpen ? t("header.close") : t("header.menu")}
          </span>
          <div className="w-7 h-7 flex flex-col items-end justify-center gap-[5px]">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="block h-[2px] bg-white origin-center"
              style={{ width: "100%" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, width: "100%" } : { opacity: 1, width: "70%" }}
              className="block h-[2px] bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="block h-[2px] bg-white origin-center"
              style={{ width: "100%" }}
            />
          </div>
        </button>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-bebas text-5xl md:text-7xl tracking-wider text-white hover:text-cta transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}

              {/* CTA in menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: menuLinks.length * 0.1, duration: 0.3 }}
                className="mt-4"
              >
                <button
                  onClick={() => scrollToSection("form-section")}
                  className="cta-btn-primary !text-lg !px-10 !py-5"
                >
                  {t("header.freeCaseReview")}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 mt-4"
              >
                <Phone size={16} className="text-cta" />
                <a href="tel:4045212667" className="font-dm text-white/60 text-sm hover:text-cta transition-colors">
                  404-521-2667
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
