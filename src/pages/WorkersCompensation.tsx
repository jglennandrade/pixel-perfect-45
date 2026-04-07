import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import { useLanguage } from "@/contexts/LanguageContext";
import darwinHeadshot from "@/assets/darwin-headshot.jpg";
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
        <img src={darwinHeadshot} alt="Darwin F. Johnson" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/85 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent" />
        <div className="absolute inset-0 noise-texture opacity-[0.03]" />
        {/* Large watermark "30" */}
        <div className="absolute bottom-10 right-10 font-bebas text-[300px] md:text-[400px] text-warm-white/[0.03] leading-none tracking-wider pointer-events-none select-none">30</div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-32 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease }} className="editorial-divider mb-6" />
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-dm text-xs text-gold tracking-[4px] uppercase mb-6">
          {t("wc.hero.eyebrow")}
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }} className="font-bebas text-warm-white text-6xl md:text-[120px] leading-[0.88] tracking-wider max-w-4xl">
          {t("wc.hero.headline1").split(" ").map((w, i) => (
            <motion.span key={i} variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.6, ease }} className="inline-block" style={{ marginRight: "0.2em" }}>{w}</motion.span>
          ))}
          <br />
          {t("wc.hero.headline2").split(" ").map((w, i) => (
            <motion.span key={`b-${i}`} variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.6, ease }} className="inline-block text-cta" style={{ marginRight: "0.2em" }}>{w}</motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }} className="font-dm text-xl md:text-2xl text-warm-white/80 max-w-xl mt-8 leading-relaxed">
          {t("wc.hero.subtitle")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }} className="mt-10">
          <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">{t("wc.hero.cta")}</button>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-dm text-xs text-warm-white/50 mt-6">
          {t("wc.hero.freeNote")} &nbsp; ✓ {t("wc.hero.experience")}
        </motion.p>
      </div>
    </section>
  );
};

const Qualify = () => {
  const { t } = useLanguage();
  return (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal><div className="editorial-divider mb-6" /><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("wc.qualify.eyebrow")}</p></ScrollReveal>
      <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-8">{t("wc.qualify.headline")}</h2></ScrollReveal>

      <div className="space-y-5 font-dm text-lg md:text-xl text-body-text leading-relaxed mb-10">
        <ScrollReveal delay={0.15}><p>{t("wc.qualify.p1")}</p></ScrollReveal>
        <ScrollReveal delay={0.18}><p>{t("wc.qualify.p2")}</p></ScrollReveal>
        <ScrollReveal delay={0.21}><p>{t("wc.qualify.p3")}</p></ScrollReveal>
        <ScrollReveal delay={0.24}><p>{t("wc.qualify.p4")}</p></ScrollReveal>
      </div>

      <ScrollReveal delay={0.27}>
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className="bg-card border border-card-border p-6">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">{t("wc.qualify.onTheJob")}</p>
            {[t("wc.qualify.onTheJob.1"), t("wc.qualify.onTheJob.2"), t("wc.qualify.onTheJob.3")].map(item => (
              <p key={item} className="font-dm text-base text-body-text mb-3">✓ {item}</p>
            ))}
          </div>
          <div className="bg-card border border-card-border p-6">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">{t("wc.qualify.employment")}</p>
            {[t("wc.qualify.employment.1"), t("wc.qualify.employment.2"), t("wc.qualify.employment.3")].map(item => (
              <p key={item} className="font-dm text-base text-body-text mb-3">✓ {item}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className="relative pl-8 border-l-2 border-cta">
          <p className="font-dm text-lg text-warm-white leading-relaxed font-medium">{t("wc.qualify.closing")}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

const Benefits = () => {
  const { t } = useLanguage();
  const items = [
    { stat: t("wc.benefits.medical.title"), desc: t("wc.benefits.medical.desc") },
    { stat: t("wc.benefits.wages.title"), desc: t("wc.benefits.wages.desc") },
    { stat: t("wc.benefits.disability.title"), desc: t("wc.benefits.disability.desc") },
    { stat: t("wc.benefits.death.title"), desc: t("wc.benefits.death.desc") },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("wc.benefits.eyebrow")}</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">{t("wc.benefits.headline")}</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">{t("wc.benefits.subtitle")}</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.08}>
              <div className="bg-card border border-card-border p-8 h-full relative overflow-hidden group hover:border-cta/30 transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-cta" />
                <div className="font-bebas text-[28px] text-cta tracking-wider mb-3 pl-4">{item.stat}</div>
                <p className="font-dm text-base text-body-text leading-relaxed pl-4">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const { t } = useLanguage();
  const industries = [t("wc.ind.construction"), t("wc.ind.warehouse"), t("wc.ind.healthcare"), t("wc.ind.trucking"), t("wc.ind.poultry"), t("wc.ind.industrial"), t("wc.ind.airport"), t("wc.ind.grocery"), t("wc.ind.law"), t("wc.ind.power")];
  const employers = ["Amazon Warehouse", "Walmart", "FedEx", "UPS", "Delta Airlines", "Home Depot", "Coca-Cola", "Kia Motors", "Mohawk Industries", "Pilgrim's Pride"];
  return (
    <section className="bg-dark py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("wc.industries.eyebrow")}</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">{t("wc.industries.headline")}</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">{t("wc.industries.subtitle")}</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-12">
          <ScrollReveal delay={0.2} direction="left">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">{t("wc.industries.title")}</p>
            {industries.map(ind => <p key={ind} className="font-dm text-base text-body-text mb-2.5 py-1.5 border-b border-card-border last:border-0">{ind}</p>)}
          </ScrollReveal>
          <ScrollReveal delay={0.25} direction="right">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">{t("wc.industries.employers")}</p>
            {employers.map(emp => <p key={emp} className="font-dm text-base text-body-text mb-2.5 py-1.5 border-b border-card-border last:border-0">{emp}</p>)}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Mistakes = () => {
  const { t } = useLanguage();
  const mistakes = [
    { num: "01", title: t("wc.mistakes.1.title"), desc: t("wc.mistakes.1.desc") },
    { num: "02", title: t("wc.mistakes.2.title"), desc: t("wc.mistakes.2.desc") },
    { num: "03", title: t("wc.mistakes.3.title"), desc: t("wc.mistakes.3.desc") },
    { num: "04", title: t("wc.mistakes.4.title"), desc: t("wc.mistakes.4.desc") },
    { num: "05", title: t("wc.mistakes.5.title"), desc: t("wc.mistakes.5.desc") },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("wc.mistakes.eyebrow")}</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">{t("wc.mistakes.headline")}</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-10">{t("wc.mistakes.subtitle")}</p></ScrollReveal>
        <div className="space-y-5">
          {mistakes.map((m, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.08}>
              <div className="bg-card border border-card-border p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cta" />
                <div className="flex gap-5 pl-4">
                  <span className="font-bebas text-4xl text-cta/30 tracking-wider">{m.num}</span>
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
          { result: "Fired after reporting injury. Won full benefits + back pay.", quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this.", name: "Jeremy H." },
          { result: "First-time claim. Darwin handled everything.", quote: "Never had to deal with a worker's compensation claim before. Darwin got results in my brother-in-law's time of need.", name: "James J." },
          { result: "Best attorney in Georgia. Period.", quote: "Attorney Darwin Johnson is the best. I would tell anybody to give him the chance to work on your case.", name: "Janice C." },
        ].map((testimonial, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="bg-card border border-card-border p-8 md:p-10 h-full">
              <p className="font-bebas text-cta text-lg tracking-wider mb-3">{testimonial.result}</p>
              <div className="text-gold text-lg mb-4 tracking-widest">★★★★★</div>
              <p className="font-serif italic text-warm-white text-lg leading-relaxed mb-5">"{testimonial.quote}"</p>
              <p className="font-dm font-bold text-xs text-gold tracking-wider">— {testimonial.name.toUpperCase()}</p>
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
          <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">{t("wc.form.eyebrow")}</p>
          <h2 className="font-bebas text-warm-white text-5xl md:text-8xl tracking-wider leading-[0.9] mb-4">{t("wc.form.headline")}</h2>
          <p className="font-dm text-lg text-body-text mb-3">{t("wc.form.subtitle")}</p>
          <p className="font-dm text-sm text-muted-text mb-10">{t("wc.form.personalReview")}</p>
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
            <div><label className={labelClass}>{t("wc.form.details")}</label><textarea className={`${inputClass} min-h-[120px]`} placeholder={t("wc.form.detailsPlaceholder")} value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} /></div>
            <div><label className={labelClass}>{t("wc.form.newClient")}</label><select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}><option value="">{t("wc.form.select")}</option><option value="new">{t("wc.form.newClientYes")}</option><option value="existing">{t("wc.form.existingClient")}</option><option value="neither">{t("wc.form.neither")}</option></select></div>
            <button type="submit" className="cta-btn-primary w-full !h-16 !text-base">{t("wc.form.submit")}</button>
            <p className="font-dm text-xs text-fine-text text-center">{t("wc.form.consent")}</p>
            <p className="font-dm text-xs text-muted-text text-center">🔒 {t("wc.form.trust")}</p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

const WorkersCompensation = () => (
  <div className="bg-dark min-h-screen overflow-x-hidden pb-16 md:pb-0">
    <ScrollProgress />
    <Header />
    <Hero />
    <ProofBar />
    <BadgeBar />
    <Qualify />
    <Benefits />
    <Industries />
    <Mistakes />
    <Testimonials />
    <FormSection />
    <Footer />
    <FloatingCTA />
    <MobileStickyBar />
  </div>
);

export default WorkersCompensation;
