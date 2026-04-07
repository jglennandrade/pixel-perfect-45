import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ThankYou = () => {
  const { t } = useLanguage();
  return (
  <div className="bg-dark min-h-screen">
    <Header />
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-[680px] mx-auto w-full text-center py-20">
        {/* Checkmark */}
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease }} className="w-20 h-20 rounded-full bg-cta/10 border-2 border-cta flex items-center justify-center mx-auto mb-8">
          <span className="text-cta text-4xl">✓</span>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, ease }} className="editorial-divider mx-auto mb-6" />

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2, ease }} className="font-dm text-xs text-gold tracking-[4px] uppercase mb-6">
          {t("thanks.eyebrow")}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }} className="font-bebas text-warm-white text-5xl md:text-[80px] leading-[0.9] tracking-wider mb-8">
          {t("thanks.headline")}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }} className="font-dm text-xl text-body-text max-w-xl mx-auto leading-relaxed mb-14">
          {t("thanks.subtitle")}
        </motion.p>

        {/* What to prepare */}
        <ScrollReveal>
          <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("thanks.beforeCall")}</p>
          <h2 className="font-bebas text-warm-white text-3xl md:text-5xl tracking-wider leading-tight mb-10">{t("thanks.threeThings")}</h2>
        </ScrollReveal>

        <div className="space-y-5 text-left max-w-lg mx-auto mb-14">
          {[
            { num: "01", title: t("thanks.item1.title"), sub: t("thanks.item1.sub") },
            { num: "02", title: t("thanks.item2.title"), sub: t("thanks.item2.sub") },
            { num: "03", title: t("thanks.item3.title"), sub: t("thanks.item3.sub") },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1}>
              <div className="bg-card border border-card-border p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cta" />
                <div className="flex gap-5 pl-4">
                  <span className="font-bebas text-3xl text-cta/40 tracking-wider">{item.num}</span>
                  <div>
                    <p className="font-dm text-base text-warm-white font-bold mb-1">{item.title}</p>
                    <p className="font-dm text-sm text-muted-text">{item.sub}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="font-dm text-sm text-muted-text mb-10">{t("thanks.dontWorry")}</p>
        </ScrollReveal>

        {/* Pull quote */}
        <ScrollReveal delay={0.35}>
          <div className="relative pl-8 border-l-2 border-cta text-left mb-14">
            <p className="font-serif italic text-warm-white text-xl leading-relaxed">
              {t("thanks.darwinQuote")}
            </p>
            <p className="font-dm text-xs text-gold mt-4 tracking-wider">— DARWIN F. JOHNSON</p>
          </div>
        </ScrollReveal>

        {/* Direct line */}
        <ScrollReveal delay={0.4}>
          <p className="font-dm text-base text-body-text mb-4">{t("thanks.reschedule")}</p>
          <a href="tel:4045212667" className="font-bebas text-cta text-6xl tracking-wider hover:text-cta-hover transition-colors">404-521-2667</a>
          <p className="font-dm text-sm text-muted-text mt-3">{t("thanks.pickUp")}</p>
        </ScrollReveal>
      </div>
    </section>
    <Footer />
  </div>
  );
};

export default ThankYou;
