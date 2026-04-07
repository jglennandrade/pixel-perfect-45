import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import darwinOffice from "@/assets/darwin-office.webp";
import badgeWorkersComp from "@/assets/badge-workers-comp.png";
import badgeGoogle from "@/assets/badge-google.png";
import badgeGoogle2 from "@/assets/badge-google-2.png";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─── SCROLLING BADGE BAR ─── */
const BadgeBar = () => {
  const { t } = useLanguage();
  const badges = [
    { src: badgeWorkersComp, alt: "Workers' Comp Badge" },
    { src: badgeGoogle, alt: "Google Reviews" },
    { src: badgeGoogle2, alt: "Google Reviews" },
  ];
  const allBadges = [...badges, ...badges, ...badges, ...badges];
  return (
    <section className="bg-dark-alt border-y border-card-border py-5 overflow-hidden">
      <p className="font-dm text-[10px] text-muted-text tracking-[4px] uppercase text-center mb-4">{t("wc.badge.asSeenOn")}</p>
      <div className="relative">
        <div className="flex items-center gap-16 animate-marquee" style={{ width: "max-content" }}>
          {allBadges.map((b, i) => (
            <img key={i} src={b.src} alt={b.alt} className="h-12 md:h-16 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProofBar = () => {
  const { t } = useLanguage();
  const stats = [
    { to: 250, prefix: "$", suffix: "M+", label: t("wc.proof.recovered") },
    { to: 10000, suffix: "+", label: t("wc.proof.cases"), separator: true },
    { to: 20, suffix: "+ Years", label: t("wc.proof.courts") },
    { to: 2004, suffix: "", label: t("wc.proof.serving") },
  ];
  return (
    <section className="bg-cta w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className={`py-6 px-4 text-center ${i < stats.length - 1 ? "md:border-r md:border-primary-foreground/30" : ""} ${i % 2 === 0 && i < 2 ? "border-r border-primary-foreground/30" : ""}`}>
            <div className="font-bebas text-5xl text-primary-foreground tracking-wider">
              <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} separator={s.separator} decimals={0} />
            </div>
            <div className="font-dm text-xs text-primary-foreground/85 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const scrollToForm = () => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={darwinOffice} alt="Darwin F. Johnson in his office" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/85 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent" />
        <div className="absolute inset-0 noise-texture opacity-[0.03]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-32 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease }} className="editorial-divider mb-6" />
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-dm text-xs text-gold tracking-[4px] uppercase mb-6">
          {t("pi.hero.eyebrow")}
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }} className="font-bebas text-warm-white text-6xl md:text-[120px] leading-[0.88] tracking-wider max-w-4xl">
          {t("pi.hero.headline1").split(" ").map((w, i) => (
            <motion.span key={i} variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.6, ease }} className="inline-block" style={{ marginRight: "0.2em" }}>{w}</motion.span>
          ))}
          <br />
          {t("pi.hero.headline2").split(" ").map((w, i) => (
            <motion.span key={`b-${i}`} variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.6, ease }} className="inline-block text-cta" style={{ marginRight: "0.2em" }}>{w}</motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }} className="font-dm text-xl md:text-2xl text-warm-white/80 max-w-xl mt-8 leading-relaxed">
          {t("pi.hero.subtitle")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }} className="mt-10">
          <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">{t("pi.hero.cta")}</button>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-dm text-xs text-warm-white/50 mt-6">
          {t("pi.hero.freeNote")} &nbsp; ✓ {t("pi.hero.georgiaOnly")}
        </motion.p>
      </div>
    </section>
  );
};

const InsuranceAngle = () => {
  const { t } = useLanguage();
  return (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal><div className="editorial-divider mb-6" /><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("pi.insurance.eyebrow")}</p></ScrollReveal>
      <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-8">{t("pi.insurance.headline")}</h2></ScrollReveal>

      <div className="space-y-5 font-dm text-lg md:text-xl text-body-text leading-relaxed">
        <ScrollReveal delay={0.15}><p>{t("pi.insurance.p1")}</p></ScrollReveal>
        <ScrollReveal delay={0.18}><p>{t("pi.insurance.p2")}</p></ScrollReveal>
        <ScrollReveal delay={0.21}><p className="text-warm-white font-medium">{t("pi.insurance.p3")}</p></ScrollReveal>
        <ScrollReveal delay={0.24}><p>{t("pi.insurance.p4")}</p></ScrollReveal>
        <ScrollReveal delay={0.27}><p>{t("pi.insurance.p5")}</p></ScrollReveal>
        <ScrollReveal delay={0.3}><p>{t("pi.insurance.p6")}</p></ScrollReveal>
        <ScrollReveal delay={0.33}><p className="text-cta font-bold text-xl md:text-2xl pt-4">{t("pi.insurance.p7")}</p></ScrollReveal>
      </div>
    </div>
  </section>
  );
};

/* ─── UBER STORY PULL QUOTE ─── */
const UberStory = () => {
  const { t } = useLanguage();
  return (
  <section className="bg-dark-alt py-16 md:py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="relative pl-8 md:pl-12 border-l-2 border-gold">
          <p className="font-serif italic text-warm-white text-2xl md:text-4xl leading-relaxed">
            "{t("pi.uber.quote")}"
          </p>
          <p className="font-dm text-xs text-gold mt-6 tracking-wider">— {t("pi.uber.attribution")}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

const CaseTypes = () => {
  const { t } = useLanguage();
  const cases = [
    { title: t("pi.caseTypes.car"), desc: t("pi.caseTypes.car.desc") },
    { title: t("pi.caseTypes.truck"), desc: t("pi.caseTypes.truck.desc") },
    { title: t("pi.caseTypes.motorcycle"), desc: t("pi.caseTypes.motorcycle.desc") },
    { title: t("pi.caseTypes.brain"), desc: t("pi.caseTypes.brain.desc") },
    { title: t("pi.caseTypes.wrongfulDeath"), desc: t("pi.caseTypes.wrongfulDeath.desc") },
    { title: t("pi.caseTypes.premises"), desc: t("pi.caseTypes.premises.desc") },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("pi.caseTypes.eyebrow")}</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">{t("pi.caseTypes.headline")}</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">{t("pi.caseTypes.subtitle")}</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.08}>
              <div className="bg-card border border-card-border p-8 h-full relative overflow-hidden group hover:border-cta/30 transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
                <div className="font-bebas text-xl text-gold tracking-wider mb-3 pl-4">{c.title}</div>
                <p className="font-dm text-base text-body-text leading-relaxed pl-4">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Damages = () => {
  const { t } = useLanguage();
  return (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">{t("pi.damages.headline")}</h2></ScrollReveal>
      <ScrollReveal delay={0.1}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">{t("pi.damages.subtitle")}</p></ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        <ScrollReveal delay={0.15} direction="left">
          <div className="bg-card border border-cta/30 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-cta" />
            <p className="font-bebas text-2xl text-cta tracking-wider mb-5">{t("pi.damages.economic")}</p>
            <p className="font-dm text-sm text-muted-text mb-4">{t("pi.damages.economic.desc")}</p>
            {[t("pi.damages.economic.1"), t("pi.damages.economic.2"), t("pi.damages.economic.3"), t("pi.damages.economic.4")].map(item => (
              <p key={item} className="font-dm text-base text-body-text mb-3">✓ {item}</p>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="right">
          <div className="bg-card border border-gold/30 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <p className="font-bebas text-2xl text-gold tracking-wider mb-5">{t("pi.damages.nonEconomic")}</p>
            <p className="font-dm text-sm text-muted-text mb-4">{t("pi.damages.nonEconomic.desc")}</p>
            {[t("pi.damages.nonEconomic.1"), t("pi.damages.nonEconomic.2"), t("pi.damages.nonEconomic.3"), t("pi.damages.nonEconomic.4")].map(item => (
              <p key={item} className="font-dm text-base text-body-text mb-3">✓ {item}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.3}>
        <div className="mt-10 relative pl-8 border-l-2 border-cta">
          <p className="font-dm text-lg text-cta font-bold">{t("pi.damages.statute")}</p>
          <p className="font-dm text-base text-body-text mt-3">{t("pi.damages.callDarwin")}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

const PITopMistakes = () => {
  const { t } = useLanguage();
  const mistakes = [
    { num: "01", title: t("pi.mistakes.1.title"), desc: t("pi.mistakes.1.desc") },
    { num: "02", title: t("pi.mistakes.2.title"), desc: t("pi.mistakes.2.desc") },
    { num: "03", title: t("pi.mistakes.3.title"), desc: t("pi.mistakes.3.desc") },
    { num: "04", title: t("pi.mistakes.4.title"), desc: t("pi.mistakes.4.desc") },
    { num: "05", title: t("pi.mistakes.5.title"), desc: t("pi.mistakes.5.desc") },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("pi.mistakes.eyebrow")}</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">{t("pi.mistakes.headline")}</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-10">{t("pi.mistakes.subtitle")}</p></ScrollReveal>
        <div className="space-y-5">
          {mistakes.map((m, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <div className="bg-card border border-card-border p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
                <div className="flex gap-5 pl-4">
                  <span className="font-bebas text-4xl text-gold/30 tracking-wider">{m.num}</span>
                  <div>
                    <p className="font-bebas text-xl text-warm-white tracking-wider mb-2">{m.title}</p>
                    <p className="font-dm text-base text-body-text leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  return (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal><div className="editorial-divider mx-auto mb-6" /><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6 text-center">{t("wc.testimonials.eyebrow")}</p></ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { result: "Insurance offered pennies. Darwin got the full amount.", quote: "His compassionate nature and genuine interest in my recovery made me feel valued as a person, not just a client.", name: "Connie C." },
          { result: "Bold. Aggressive. Got the settlement we deserved.", quote: "Darwin is a bold man. Darwin Law Firm is the best! I am very pleased with my settlement.", name: "Former Client" },
          { result: "Straight-forward. No games. Best hands possible.", quote: "He was very straightforward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M." },
        ].map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="bg-card border border-card-border p-8 md:p-10 h-full">
              <p className="font-bebas text-gold text-lg tracking-wider mb-3">{t.result}</p>
              <div className="text-gold text-lg mb-4 tracking-widest">★★★★★</div>
              <p className="font-serif italic text-warm-white text-lg leading-relaxed mb-5">"{t.quote}"</p>
              <p className="font-dm font-bold text-xs text-gold tracking-wider">— {t.name.toUpperCase()}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
  );
};

const FormSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", details: "", clientStatus: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); navigate("/book-a-call"); };
  const inputClass = "w-full bg-card border border-card-border text-warm-white font-dm text-base p-4 rounded-sm focus:border-cta focus:outline-none transition-colors placeholder:text-muted-text";
  const labelClass = "font-dm text-xs font-bold text-body-text tracking-[1px] uppercase mb-2 block";

  return (
    <section id="form-section" className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-[640px] mx-auto">
        <ScrollReveal>
          <div className="editorial-divider mb-6" />
          <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("pi.form.eyebrow")}</p>
          <h2 className="font-bebas text-warm-white text-5xl md:text-8xl tracking-wider leading-[0.9] mb-4">{t("pi.form.headline")}</h2>
          <p className="font-dm text-lg text-body-text mb-3">{t("pi.form.subtitle")}</p>
          <p className="font-dm text-sm text-muted-text mb-10">{t("pi.form.personalReview")}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className={labelClass}>{t("wc.form.firstName")}</label><input type="text" required className={inputClass} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} /></div>
              <div><label className={labelClass}>{t("wc.form.lastName")}</label><input type="text" required className={inputClass} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className={labelClass}>{t("wc.form.phone")}</label><input type="tel" required className={inputClass} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
              <div><label className={labelClass}>{t("wc.form.email")}</label><input type="email" required className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            </div>
            <div><label className={labelClass}>{t("wc.form.details")}</label><textarea className={`${inputClass} min-h-[120px]`} placeholder={t("pi.form.detailsPlaceholder")} value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} /></div>
            <div><label className={labelClass}>{t("wc.form.newClient")}</label><select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}><option value="">{t("wc.form.select")}</option><option value="new">{t("wc.form.newClientYes")}</option><option value="existing">{t("wc.form.existingClient")}</option><option value="neither">{t("wc.form.neither")}</option></select></div>
            <button type="submit" className="cta-btn-primary w-full !h-16 !text-base">{t("pi.form.submit")}</button>
            <p className="font-dm text-xs text-fine-text text-center">{t("wc.form.consent")}</p>
            <p className="font-dm text-xs text-muted-text text-center">{t("wc.form.trust")}</p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

const PersonalInjury = () => (
  <div className="bg-dark min-h-screen overflow-x-hidden pb-16 md:pb-0">
    <ScrollProgress />
    <Header />
    <Hero />
    <ProofBar />
    <BadgeBar />
    <InsuranceAngle />
    <UberStory />
    <CaseTypes />
    <Damages />
    <PITopMistakes />
    <Testimonials />
    <FormSection />
    <Footer />
    <FloatingCTA />
    <MobileStickyBar />
  </div>
);

export default PersonalInjury;
