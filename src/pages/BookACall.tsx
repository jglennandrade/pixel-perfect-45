import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const BookACall = () => (
  <div className="bg-dark min-h-screen">
    <Header />
    <section className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-[680px] mx-auto w-full">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-dm text-xs text-cta tracking-[4px] uppercase mb-4">
          YOU'RE ONE STEP AWAY
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }} className="font-bebas text-warm-white text-6xl md:text-[100px] leading-[0.9] tracking-wider mb-6">
          {"WE GOT YOUR INFO.".split(" ").map((w, i) => (
            <motion.span key={i} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.55, ease }} className="inline-block" style={{ marginRight: "0.18em" }}>{w}</motion.span>
          ))}
          <br />
          {"NOW LET'S TALK.".split(" ").map((w, i) => (
            <motion.span key={`b-${i}`} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.55, ease }} className="inline-block text-cta" style={{ marginRight: "0.18em" }}>{w}</motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }} className="font-dm text-xl text-body-text max-w-xl leading-relaxed mb-8">
          The next step is picking a time for Darwin to call you personally. It takes 2 minutes. Pick any available slot below.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }} className="space-y-3 mb-10">
          {["Free. No obligation. No pressure.", "Darwin reviews your case personally on the call.", "You'll know where you stand by the end."].map((t, i) => (
            <p key={i} className="font-dm text-base text-body-text">— {t}</p>
          ))}
        </motion.div>

        {/* Calendar placeholder */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }}>
          <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">PICK A TIME THAT WORKS FOR YOU</p>
          <div className="bg-card border border-card-border rounded-sm p-10 text-center mb-10">
            <p className="font-dm text-body-text text-lg mb-2">📅 Calendar Embed</p>
            <p className="font-dm text-muted-text text-sm">This will be replaced with your Calendly or GHL calendar iframe in production.</p>
          </div>
        </motion.div>

        {/* Direct call */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, ease }} className="bg-card border border-card-border border-l-[3px] border-l-cta p-8 text-center">
          <p className="font-serif italic text-warm-white text-xl mb-3">Prefer to Call Right Now?</p>
          <a href="tel:4045212667" className="font-bebas text-cta text-5xl tracking-wider hover:text-cta-hover transition-colors">404-521-2667</a>
          <p className="font-dm text-sm text-muted-text mt-2">Darwin or a member of his team will pick up.</p>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default BookACall;
