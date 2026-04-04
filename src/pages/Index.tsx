import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import teamPhoto from "@/assets/team-photo.jpg";
import darwinHeadshot from "@/assets/darwin-headshot.jpg";
import badgeWorkersComp from "@/assets/badge-workers-comp.png";
import badgeGoogle from "@/assets/badge-google.png";
import badgeGoogle2 from "@/assets/badge-google-2.png";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─── BADGE BAR ─── */
const BadgeBar = () => (
  <section className="bg-dark-alt border-y border-card-border py-6 overflow-hidden">
    <div className="flex items-center justify-center gap-10 md:gap-16 opacity-60">
      <img src={badgeWorkersComp} alt="Workers' Comp Lawyers Badge" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-500" />
      <img src={badgeGoogle} alt="Google Reviews Badge" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-500" />
      <img src={badgeGoogle2} alt="Google Reviews" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-500" />
      <span className="font-dm text-xs text-muted-text tracking-[3px] uppercase hidden md:block">AS FEATURED IN</span>
    </div>
  </section>
);

/* ─── PROOF BAR ─── */
const ProofBar = () => {
  const stats = [
    { to: 250, prefix: "$", suffix: "M+", label: "Recovered for clients" },
    { to: 10000, suffix: "+", label: "Cases handled", separator: true },
    { to: 20, suffix: "+ Years", label: "In Georgia courts" },
    { to: 2004, suffix: "", label: "Serving Georgia workers", decimals: 0 },
  ];
  return (
    <section className="bg-cta w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`py-6 px-4 text-center ${i < stats.length - 1 ? "md:border-r md:border-primary-foreground/30" : ""} ${i % 2 === 0 && i < 2 ? "border-r border-primary-foreground/30 md:border-r" : ""}`}
          >
            <div className="font-bebas text-5xl text-primary-foreground tracking-wider">
              <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} separator={s.separator} decimals={s.decimals ?? 0} />
            </div>
            <div className="font-dm text-xs text-primary-foreground/85 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─── CINEMATIC HERO ─── */
const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={teamPhoto}
          alt="Darwin F. Johnson and his legal team"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="editorial-divider mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="font-dm text-xs text-gold tracking-[4px] uppercase mb-6"
        >
          ATLANTA'S INJURY ATTORNEYS · EST. 2004
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          }}
          className="font-bebas text-warm-white text-6xl md:text-[130px] leading-[0.88] tracking-wider max-w-4xl"
        >
          {"WE FIGHT.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.6, ease }}
              className="inline-block"
              style={{ marginRight: "0.2em" }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {"YOU RECOVER.".split(" ").map((word, i) => (
            <motion.span
              key={`b-${i}`}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.6, ease }}
              className="inline-block text-cta"
              style={{ marginRight: "0.2em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="font-dm text-xl md:text-2xl text-warm-white/80 max-w-xl mt-8 leading-relaxed"
        >
          Hurt in Georgia? Whether you were injured at work or in an accident, you may be owed more than you think.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
            INJURED ON THE JOB? →
          </button>
          <button onClick={scrollToForm} className="cta-btn-outline !py-5 !px-10 !text-base">
            INJURED IN AN ACCIDENT? →
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-dm text-xs text-warm-white/50 mt-6"
        >
          ✓ Free Consultation &nbsp; ✓ No Fee Unless We Win &nbsp; ✓ Georgia Clients Only
        </motion.p>
      </div>
    </section>
  );
};

/* ─── PROBLEM SECTION ─── */
const ProblemSection = () => (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal>
        <div className="editorial-divider mb-6" />
        <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">THE HARD TRUTH</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95]">
          The Moment You Got Hurt, They Started Working Against You.
        </h2>
      </ScrollReveal>
      <div className="mt-10 space-y-8 font-dm text-lg md:text-xl text-body-text leading-relaxed">
        <ScrollReveal delay={0.15}>
          <p>Your employer's insurance company has a team of lawyers whose only job is to pay you as little as possible. They started building their case the moment your accident was reported.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p>Most injured Georgians don't know they have a claim. Don't know what they're entitled to. And don't know that the lowball offer they received is the insurance company hoping they sign before speaking to an attorney.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <p className="text-warm-white font-medium">Darwin F. Johnson has spent 20+ years doing exactly one thing: fighting back. $250 million recovered. 10,000+ cases. He answers the phone himself.</p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* ─── TWO PATHS ─── */
const TwoPaths = () => (
  <section className="bg-dark-alt py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6 text-center">HOW WERE YOU HURT?</p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            label: "INJURED ON THE JOB",
            headline: "Your employer's insurance is not on your side.",
            body: "Construction site, warehouse, factory, healthcare, trucking — you may be entitled to medical coverage, lost wages, and disability benefits. Darwin has handled cases against Amazon, Walmart, FedEx, Delta, and more.",
            cta: "See Workers' Comp Cases →",
            link: "/workers-compensation",
          },
          {
            label: "INJURED IN AN ACCIDENT",
            headline: "Don't sign anything until you know what you're owed.",
            body: "Car accidents, truck accidents, motorcycle crashes — the insurance company's first offer is almost never their best. Georgia gives you 2 years to file. Darwin has recovered millions for accident victims who almost walked away with nothing.",
            cta: "See Personal Injury Cases →",
            link: "/personal-injury",
          },
        ].map((card, i) => (
          <ScrollReveal key={i} delay={i * 0.12} direction={i === 0 ? "left" : "right"}>
            <div className="relative bg-card border border-card-border p-10 md:p-12 h-full group hover:border-cta/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cta" />
              <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-4">{card.label}</p>
              <h3 className="font-serif italic text-warm-white text-2xl md:text-3xl mb-5 leading-snug">{card.headline}</h3>
              <p className="font-dm text-base text-body-text leading-relaxed mb-8">{card.body}</p>
              <Link to={card.link} className="font-dm text-cta hover:text-cta-hover text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                {card.cta}
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── WHY DARWIN ─── */
const WhyDarwin = () => (
  <section className="relative py-24 md:py-32 px-6 overflow-hidden">
    {/* Subtle bg */}
    <div className="absolute inset-0 bg-dark" />
    
    <div className="relative z-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_400px] gap-12 md:gap-16 items-center">
        {/* Text side */}
        <div>
          <ScrollReveal>
            <div className="editorial-divider mb-6" />
            <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">MEET DARWIN</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-8">
              At Bigger Firms, You're Just a Number.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-dm text-lg text-body-text leading-relaxed mb-6">
              Darwin F. Johnson founded his practice in 2004 with a simple promise: every client gets his personal attention. No operators. No paralegals screening your calls. When you call, you get Darwin.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-dm text-lg text-body-text leading-relaxed mb-8">
              Over 20 years, he's recovered more than $250 million for Georgia workers and accident victims — and he still answers his own phone.
            </p>
          </ScrollReveal>

          {/* Pull Quote */}
          <ScrollReveal delay={0.25}>
            <div className="relative pl-8 border-l-2 border-cta">
              <p className="font-serif italic text-warm-white text-xl md:text-2xl leading-relaxed">
                "When you call my office, you get ME — not an operator, not a paralegal who screens calls. You get Darwin."
              </p>
              <p className="font-dm text-xs text-gold mt-4 tracking-wider">— DARWIN F. JOHNSON, FOUNDER</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Photo side */}
        <ScrollReveal delay={0.2} direction="right">
          <div className="relative">
            <img
              src={darwinHeadshot}
              alt="Darwin F. Johnson, Attorney"
              className="w-full h-auto rounded-sm object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cta/20 rounded-sm -z-10" />
          </div>
        </ScrollReveal>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mt-16 md:mt-20">
        {[
          { stat: "PERSONAL ACCESS", desc: "Darwin answers the phone himself. Every time." },
          { stat: "$250M+", desc: "Recovered for Georgia workers and accident victims." },
          { stat: "$0 UPFRONT", desc: "No fee unless we win your case. Zero risk to you." },
        ].map((b, i) => (
          <ScrollReveal key={i} delay={0.3 + i * 0.1}>
            <div className="text-center md:text-left">
              <div className="font-bebas text-3xl md:text-4xl text-cta tracking-wider">{b.stat}</div>
              <p className="font-dm text-sm md:text-base text-body-text mt-2">{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── TESTIMONIALS ─── */
const Testimonials = () => {
  const testimonials = [
    { quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him. He responds to your calls immediately.", name: "Nicole F.", stars: 5 },
    { quote: "He was very straight forward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M.", stars: 5 },
    { quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this that will fight for your rights!", name: "Jeremy H.", stars: 5 },
  ];

  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="editorial-divider mx-auto mb-6" />
          <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6 text-center">REAL CLIENTS. REAL RESULTS.</p>
        </ScrollReveal>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease }}
              className="text-center"
            >
              <div className="text-cta text-2xl mb-6 tracking-widest">★★★★★</div>
              <p className="font-serif italic text-warm-white text-2xl md:text-3xl leading-relaxed mb-8">"{t.quote}"</p>
              <p className="font-dm font-bold text-sm text-gold tracking-wider">— {t.name.toUpperCase()}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Selector */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`relative px-6 py-2.5 text-xs font-bold font-dm rounded-sm transition-colors duration-200 ${
                active === i ? "text-primary-foreground" : "text-muted-text hover:text-warm-white"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="testimonial-tab"
                  className="absolute inset-0 rounded-sm bg-cta"
                  transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FORM SECTION ─── */
const FormSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", details: "", clientStatus: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/book-a-call");
  };

  const inputClass = "w-full bg-card border border-card-border text-warm-white font-dm text-base p-4 rounded-sm focus:border-cta focus:outline-none transition-colors placeholder:text-muted-text";
  const labelClass = "font-dm text-xs font-bold text-body-text tracking-[1px] uppercase mb-2 block";

  return (
    <section id="form-section" className="bg-dark py-24 md:py-32 px-6">
      <div className="max-w-[640px] mx-auto">
        <ScrollReveal>
          <div className="editorial-divider mb-6" />
          <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">FREE CASE EVALUATION</p>
          <h2 className="font-bebas text-warm-white text-5xl md:text-8xl tracking-wider leading-[0.9] mb-4">
            See What Your Case Is Worth.
          </h2>
          <p className="font-dm text-lg text-body-text mb-10">
            Free, no obligation. No fees unless we win. Georgia clients only.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>First Name</label>
                <input type="text" required className={inputClass} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input type="text" required className={inputClass} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Phone Number</label>
                <input type="tel" required className={inputClass} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Email Address</label>
                <input type="email" required className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Tell us briefly what happened</label>
              <textarea className={`${inputClass} min-h-[120px]`} placeholder="e.g. I was hurt at my warehouse job in Atlanta..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>Are you a new client?</label>
              <select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}>
                <option value="">Select...</option>
                <option value="new">Yes, I am a potential new client</option>
                <option value="existing">No, I am an existing client</option>
                <option value="neither">Neither</option>
              </select>
            </div>
            <button type="submit" className="cta-btn-primary w-full !h-16 !text-base">
              SEE WHAT MY CASE IS WORTH →
            </button>
            <p className="font-dm text-xs text-fine-text text-center">
              By submitting, you agree to receive text messages from The Law Offices of Darwin F. Johnson. Msg & data rates may apply. Text STOP to cancel.
            </p>
            <p className="font-dm text-xs text-muted-text text-center">
              🔒 Secure & Confidential · No Fees Unless We Win · Free Consultation
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ─── INDEX ─── */
const Index = () => {
  return (
    <div className="bg-dark min-h-screen overflow-x-hidden pb-16 md:pb-0">
      <ScrollProgress />
      <Header />
      <Hero />
      <ProofBar />
      <BadgeBar />
      <ProblemSection />
      <TwoPaths />
      <WhyDarwin />
      <Testimonials />
      <FormSection />
      <Footer />
      <FloatingCTA />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
