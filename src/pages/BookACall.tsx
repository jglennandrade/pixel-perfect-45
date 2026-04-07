import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import darwinHeadshot from "@/assets/darwin-headshot.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const BookACall = () => {
  const { t } = useLanguage();
  return (
  <div className="bg-dark min-h-screen">
    <Header />
    <section className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <img src={darwinHeadshot} alt="" className="w-full h-full object-cover object-top opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
      </div>

      <div className="relative z-10 max-w-[680px] mx-auto w-full py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease }} className="editorial-divider mb-6" />
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-dm text-xs text-gold tracking-[4px] uppercase mb-6">
          {t("book.eyebrow")}
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }} className="font-bebas text-warm-white text-6xl md:text-[100px] leading-[0.88] tracking-wider mb-8">
          {t("book.headline1").split(" ").map((w, i) => (
            <motion.span key={i} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.55, ease }} className="inline-block" style={{ marginRight: "0.18em" }}>{w}</motion.span>
          ))}
          <br />
          {t("book.headline2").split(" ").map((w, i) => (
            <motion.span key={`b-${i}`} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.55, ease }} className="inline-block text-cta" style={{ marginRight: "0.18em" }}>{w}</motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }} className="font-dm text-xl md:text-2xl text-warm-white/80 max-w-xl leading-relaxed mb-10">
          {t("book.subtitle")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }} className="space-y-3 mb-12">
          {[t("book.bullet1"), t("book.bullet2"), t("book.bullet3")].map((text, i) => (
            <p key={i} className="font-dm text-lg text-body-text">— {text}</p>
          ))}
        </motion.div>

        {/* Calendar placeholder */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }}>
          <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-4">{t("book.pickTime")}</p>
          <div className="bg-card border border-card-border rounded-sm p-12 text-center mb-12">
            <p className="font-dm text-body-text text-lg mb-2">{t("book.calendar.title")}</p>
            <p className="font-dm text-muted-text text-sm">{t("book.calendar.desc")}</p>
          </div>
        </motion.div>

        {/* Direct call */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, ease }} className="relative pl-8 border-l-2 border-cta text-center">
          <p className="font-serif italic text-warm-white text-xl mb-4">{t("book.preferCall")}</p>
          <a href="tel:4045212667" className="font-bebas text-cta text-6xl tracking-wider hover:text-cta-hover transition-colors">404-521-2667</a>
          <p className="font-dm text-sm text-muted-text mt-3">{t("book.pickUp")}</p>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

};

export default BookACall;
