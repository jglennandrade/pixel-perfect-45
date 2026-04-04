import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ThankYou = () => (
  <div className="bg-dark min-h-screen">
    <Header />
    <section className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-[680px] mx-auto w-full text-center">
        {/* Large checkmark */}
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease }} className="text-cta text-8xl mb-6">
          ✓
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2, ease }} className="font-dm text-xs text-cta tracking-[4px] uppercase mb-4">
          YOU'RE ALL SET
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }} className="font-bebas text-warm-white text-5xl md:text-[80px] leading-[0.9] tracking-wider mb-6">
          YOUR CALL WITH DARWIN IS CONFIRMED.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }} className="font-dm text-xl text-body-text max-w-xl mx-auto leading-relaxed mb-12">
          You will receive a confirmation with your call details shortly. Darwin will review your information before the call so you can get straight to what matters.
        </motion.p>

        {/* What to prepare */}
        <ScrollReveal>
          <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">BEFORE YOUR CALL</p>
          <h2 className="font-bebas text-warm-white text-3xl md:text-5xl tracking-wider leading-tight mb-8">Three Things to Have Ready (If You Can).</h2>
        </ScrollReveal>

        <div className="space-y-4 text-left max-w-lg mx-auto mb-12">
          {[
            { num: "01", title: "The date and location of your injury or accident", sub: "Even an approximate date is fine." },
            { num: "02", title: "Any doctor's notes, reports, or medical records you have", sub: "Photos of the injury or accident scene if available." },
            { num: "03", title: "Name of your employer or the other party involved", sub: "This helps Darwin understand your situation before the call." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1}>
              <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-6">
                <div className="flex gap-4">
                  <span className="font-bebas text-3xl text-cta tracking-wider">{item.num}</span>
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
          <p className="font-dm text-sm text-muted-text mb-8">Don't worry if you don't have everything. Darwin will walk you through it on the call. Just show up.</p>
        </ScrollReveal>

        {/* Pull quote */}
        <ScrollReveal delay={0.35}>
          <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-8 text-left mb-12">
            <p className="font-serif italic text-warm-white text-xl leading-relaxed">
              "I will review your situation personally. By the end of our call, you will know exactly where you stand and what your next steps are. No pressure. No obligation. Just answers."
            </p>
            <p className="font-dm text-xs text-muted-text mt-4">— Darwin F. Johnson</p>
          </div>
        </ScrollReveal>

        {/* Direct line */}
        <ScrollReveal delay={0.4}>
          <p className="font-dm text-base text-body-text mb-3">Need to reschedule or have a question before your call?</p>
          <a href="tel:4045212667" className="font-bebas text-cta text-5xl tracking-wider hover:text-cta-hover transition-colors">404-521-2667</a>
          <p className="font-dm text-sm text-muted-text mt-2">Darwin or his team will pick up.</p>
        </ScrollReveal>
      </div>
    </section>
    <Footer />
  </div>
);

export default ThankYou;
