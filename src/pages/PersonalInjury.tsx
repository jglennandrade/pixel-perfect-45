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
import darwinOffice from "@/assets/darwin-office.webp";
import badgeWorkersComp from "@/assets/badge-workers-comp.png";
import badgeGoogle from "@/assets/badge-google.png";
import badgeGoogle2 from "@/assets/badge-google-2.png";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─── SCROLLING BADGE BAR ─── */
const BadgeBar = () => {
  const badges = [
    { src: badgeWorkersComp, alt: "Workers' Comp Badge" },
    { src: badgeGoogle, alt: "Google Reviews" },
    { src: badgeGoogle2, alt: "Google Reviews" },
  ];
  const allBadges = [...badges, ...badges, ...badges, ...badges];
  return (
    <section className="bg-dark-alt border-y border-card-border py-5 overflow-hidden">
      <p className="font-dm text-[10px] text-muted-text tracking-[4px] uppercase text-center mb-4">AS SEEN ON</p>
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
  const stats = [
    { to: 250, prefix: "$", suffix: "M+", label: "Recovered for clients" },
    { to: 10000, suffix: "+", label: "Cases handled", separator: true },
    { to: 20, suffix: "+ Years", label: "In Georgia courts" },
    { to: 2004, suffix: "", label: "Serving Georgia workers" },
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
          GEORGIA PERSONAL INJURY ATTORNEY
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }} className="font-bebas text-warm-white text-6xl md:text-[120px] leading-[0.88] tracking-wider max-w-4xl">
          {"HURT IN AN ACCIDENT?".split(" ").map((w, i) => (
            <motion.span key={i} variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.6, ease }} className="inline-block" style={{ marginRight: "0.2em" }}>{w}</motion.span>
          ))}
          <br />
          {"DON'T SIGN ANYTHING.".split(" ").map((w, i) => (
            <motion.span key={`b-${i}`} variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.6, ease }} className="inline-block text-cta" style={{ marginRight: "0.2em" }}>{w}</motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }} className="font-dm text-xl md:text-2xl text-warm-white/80 max-w-xl mt-8 leading-relaxed">
          The insurance adjuster who called you? They're not on your side. That "quick settlement" they offered? It's probably 10% of what you're actually owed.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }} className="mt-10">
          <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">FIND OUT WHAT YOUR CASE IS WORTH →</button>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-dm text-xs text-warm-white/50 mt-6">
          Free. No obligation. No fee unless we win. &nbsp; ✓ Georgia Clients Only
        </motion.p>
      </div>
    </section>
  );
};

const InsuranceAngle = () => (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal><div className="editorial-divider mb-6" /><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">THE HARD TRUTH</p></ScrollReveal>
      <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-8">The Insurance Company Is Not Your Friend. They Never Were.</h2></ScrollReveal>
      
      <div className="space-y-5 font-dm text-lg md:text-xl text-body-text leading-relaxed">
        <ScrollReveal delay={0.15}><p>Let's be real for a second.</p></ScrollReveal>
        <ScrollReveal delay={0.18}><p>That insurance adjuster who called you 48 hours after your accident? The one who sounded so concerned?</p></ScrollReveal>
        <ScrollReveal delay={0.21}><p className="text-warm-white font-medium">Their job is to pay you as little as possible. Full stop.</p></ScrollReveal>
        <ScrollReveal delay={0.24}><p>They're trained to call fast. Offer a number that sounds reasonable. Get you to sign before you've even had an MRI.</p></ScrollReveal>
        <ScrollReveal delay={0.27}><p>Because once you sign that release? It's over. Even if your injuries turn out to be 10x worse than you thought.</p></ScrollReveal>
        <ScrollReveal delay={0.3}><p>Georgia gives you 2 years to file. But the sooner Darwin gets involved, the stronger your case.</p></ScrollReveal>
        <ScrollReveal delay={0.33}><p className="text-cta font-bold text-xl md:text-2xl pt-4">A free call with Darwin costs you nothing. Signing too early could cost you everything.</p></ScrollReveal>
      </div>
    </div>
  </section>
);

/* ─── UBER STORY PULL QUOTE ─── */
const UberStory = () => (
  <section className="bg-dark-alt py-16 md:py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="relative pl-8 md:pl-12 border-l-2 border-gold">
          <p className="font-serif italic text-warm-white text-2xl md:text-4xl leading-relaxed">
            "I was hit by an Uber and almost walked away with nothing. Darwin stepped in and everything changed."
          </p>
          <p className="font-dm text-xs text-gold mt-6 tracking-wider">— FORMER CLIENT, ATLANTA GA</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const CaseTypes = () => {
  const cases = [
    { title: "CAR ACCIDENTS", desc: "Atlanta's I-285 is one of the most dangerous highways in the country. We've handled hundreds of cases from it. Rear-ends, T-bones, hit-and-runs — Darwin fights for full compensation." },
    { title: "TRUCK ACCIDENTS", desc: "18-wheelers. Delivery trucks. Commercial vehicles. These cases involve federal regulations and multiple liable parties. Darwin knows how to untangle them." },
    { title: "MOTORCYCLE ACCIDENTS", desc: "Motorcyclists are often blamed unfairly by juries and insurance companies. Darwin builds cases that cut through the bias and get you what you're owed." },
    { title: "BRAIN & SPINAL INJURIES", desc: "Catastrophic injuries require aggressive, experienced representation. Darwin has recovered millions for traumatic brain and spinal cord injury victims." },
    { title: "WRONGFUL DEATH", desc: "If you lost a family member due to someone else's negligence, Darwin handles these claims with care, compassion, and aggression." },
    { title: "PREMISES LIABILITY", desc: "Slip and falls, negligent security, unsafe properties — if someone else's negligence caused your injury on their property, they may owe you." },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">CASES WE HANDLE</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">If Someone Else's Negligence Hurt You in Georgia, We Handle It.</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">Every case type below has one thing in common: someone was careless, and you paid the price.</p></ScrollReveal>
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

const Damages = () => (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">Two Types of Damages. Most People Only Know About One.</h2></ScrollReveal>
      <ScrollReveal delay={0.1}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">The insurance company will only tell you about the medical bills. But Georgia law says you're owed a lot more than that:</p></ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        <ScrollReveal delay={0.15} direction="left">
          <div className="bg-card border border-cta/30 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-cta" />
            <p className="font-bebas text-2xl text-cta tracking-wider mb-5">ECONOMIC DAMAGES</p>
            <p className="font-dm text-sm text-muted-text mb-4">The tangible costs — things with receipts.</p>
            {["Medical expenses (past + future — could be $100K+)", "Lost wages during recovery", "Lost earning capacity if you can't return to work", "Property damage (vehicle, equipment)"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-3">✓ {t}</p>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="right">
          <div className="bg-card border border-gold/30 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <p className="font-bebas text-2xl text-gold tracking-wider mb-5">NON-ECONOMIC DAMAGES</p>
            <p className="font-dm text-sm text-muted-text mb-4">The human costs — often worth more than the bills.</p>
            {["Pain and suffering (this can be substantial)", "Emotional distress and trauma", "Loss of enjoyment of life", "Loss of consortium (impact on relationships)"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-3">✓ {t}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.3}>
        <div className="mt-10 relative pl-8 border-l-2 border-cta">
          <p className="font-dm text-lg text-cta font-bold">Georgia has a 2-year statute of limitations. Miss that window and you lose your right to file — permanently.</p>
          <p className="font-dm text-base text-body-text mt-3">Don't wait. Call Darwin today — it's free.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const PITopMistakes = () => {
  const mistakes = [
    { num: "01", title: "NOT SEEING A DOCTOR IMMEDIATELY", desc: "Every day you wait, the insurance company's argument gets stronger. 'If you were really hurt, why didn't you go to the doctor?' Don't give them that ammo." },
    { num: "02", title: "GIVING A RECORDED STATEMENT", desc: "That 'routine call' from the adjuster? It's a trap. They ask questions designed to minimize your claim. Never give a recorded statement without Darwin present." },
    { num: "03", title: "ACCEPTING THE FIRST OFFER", desc: "The first offer exists to close your case before you know what it's worth. Darwin has seen clients receive 5-10x more than what the insurance company initially offered." },
    { num: "04", title: "POSTING ON SOCIAL MEDIA", desc: "That photo of you smiling at your kid's birthday party? The insurance company's investigator just screenshotted it and is using it to argue you're 'not that injured.'" },
    { num: "05", title: "WAITING TOO LONG TO CALL", desc: "Evidence fades. Witnesses disappear. Surveillance footage gets deleted. The sooner Darwin gets involved, the stronger your case. There's no reason to wait." },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">PROTECT YOUR CLAIM</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">5 Mistakes That Will Kill Your Accident Claim.</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-10">The insurance company is betting you'll make at least one of these. Here's how to avoid them:</p></ScrollReveal>
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

const Testimonials = () => (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal><div className="editorial-divider mx-auto mb-6" /><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6 text-center">REAL CLIENTS. REAL RESULTS.</p></ScrollReveal>
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

const FormSection = () => {
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
          <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">FREE CASE EVALUATION</p>
          <h2 className="font-bebas text-warm-white text-5xl md:text-8xl tracking-wider leading-[0.9] mb-4">Find Out What Your Accident Case Is Worth.</h2>
          <p className="font-dm text-lg text-body-text mb-3">Takes 30 seconds. No obligation. No fee unless we win.</p>
          <p className="font-dm text-sm text-muted-text mb-10">Darwin reviews every submission personally. Georgia clients only.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className={labelClass}>First Name</label><input type="text" required className={inputClass} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} /></div>
              <div><label className={labelClass}>Last Name</label><input type="text" required className={inputClass} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className={labelClass}>Phone Number</label><input type="tel" required className={inputClass} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
              <div><label className={labelClass}>Email Address</label><input type="email" required className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            </div>
            <div><label className={labelClass}>Tell us briefly what happened</label><textarea className={`${inputClass} min-h-[120px]`} placeholder="e.g. I was rear-ended on I-285 in Atlanta..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} /></div>
            <div><label className={labelClass}>Are you a new client?</label><select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}><option value="">Select...</option><option value="new">Yes, I am a potential new client</option><option value="existing">No, I am an existing client</option><option value="neither">Neither</option></select></div>
            <button type="submit" className="cta-btn-primary w-full !h-16 !text-base">FIND OUT WHAT MY ACCIDENT CASE IS WORTH →</button>
            <p className="font-dm text-xs text-fine-text text-center">By submitting, you agree to receive text messages from The Law Offices of Darwin F. Johnson.</p>
            <p className="font-dm text-xs text-muted-text text-center">🔒 Secure & Confidential · No Fees Unless We Win · Free Consultation</p>
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
