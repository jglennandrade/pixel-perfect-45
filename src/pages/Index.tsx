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

/* ─── SCROLLING BADGE BAR ─── */
const BadgeBar = () => {
  const badges = [
    { src: badgeWorkersComp, alt: "Workers' Comp Lawyers Badge" },
    { src: badgeGoogle, alt: "Google Reviews Badge" },
    { src: badgeGoogle2, alt: "Google Reviews" },
  ];
  // Duplicate for infinite scroll
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
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-transparent" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture opacity-[0.03]" />
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
          You got hurt. Now you're drowning in medical bills, missed paychecks, and an insurance company that won't return your calls. Sound familiar?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
            SEE WHAT YOU'RE OWED →
          </button>
          <button onClick={scrollToForm} className="cta-btn-outline !py-5 !px-10 !text-base">
            BOOK YOUR FREE CALL →
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-dm text-xs text-warm-white/50 mt-6"
        >
          Free. 30 seconds. No BS. &nbsp; ✓ No Fee Unless We Win
        </motion.p>
      </div>
    </section>
  );
};

/* ─── PROBLEM SECTION — KINGKONG LETTER STYLE ─── */
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
      <div className="mt-10 space-y-6 font-dm text-lg md:text-xl text-body-text leading-relaxed">
        <ScrollReveal delay={0.15}>
          <p>Look, here's the deal.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.18}>
          <p>The moment you got hurt, your employer's insurance company started building a case.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.21}>
          <p className="text-warm-white font-medium">Not for you. Against you.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.24}>
          <p>They have lawyers. Teams of them. Their only job? Pay you as little as humanly possible.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.27}>
          <p>Meanwhile, you're sitting at home wondering how you're going to pay rent.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p>Wondering if your job is even going to be there when you get back.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.33}>
          <p>Wondering if that lowball offer they threw at you is actually all you're worth.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.36}>
          <p className="text-cta font-bold text-xl md:text-2xl pt-4">It's not. And that's where Darwin comes in.</p>
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
            headline: "Your boss told you to 'file a report.' Their insurance said 'we'll handle it.'",
            body: "What they're really saying is: 'we hope you don't call a lawyer.' Construction, warehouse, factory, healthcare, trucking — if you got hurt at work in Georgia, you're probably owed a lot more than what they're telling you.",
            cta: "SEE IF YOU HAVE A CASE →",
            link: "/workers-compensation",
          },
          {
            label: "INJURED IN AN ACCIDENT",
            headline: "That 'quick settlement' they offered? It's probably 10% of what you're owed.",
            body: "Car wreck. Truck accident. Motorcycle crash. The insurance adjuster who called you isn't trying to help — they're trying to close your file as cheaply as possible. Darwin has recovered millions for people who almost walked away with nothing.",
            cta: "GET YOUR FREE CASE REVIEW →",
            link: "/personal-injury",
          },
        ].map((card, i) => (
          <ScrollReveal key={i} delay={i * 0.12} direction={i === 0 ? "left" : "right"}>
            <div className="relative bg-card border border-card-border p-10 md:p-12 h-full group hover:border-cta/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cta group-hover:w-1.5 group-hover:shadow-[0_0_20px_hsl(var(--cta)/0.3)] transition-all duration-500" />
              <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-4">{card.label}</p>
              <h3 className="font-serif italic text-warm-white text-2xl md:text-3xl mb-5 leading-snug">{card.headline}</h3>
              <p className="font-dm text-base text-body-text leading-relaxed mb-8">{card.body}</p>
              <Link to={card.link} className="cta-btn-primary !py-3 !px-6 !text-sm">
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
              Most Law Firms Treat You Like a Case Number. Not Here.
            </h2>
          </ScrollReveal>
          <div className="space-y-5 font-dm text-lg text-body-text leading-relaxed">
            <ScrollReveal delay={0.15}>
              <p>Here's what happens at most law firms:</p>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p>You call. You get an operator. You explain your situation to someone who can't actually help you. Then you wait. And wait. And maybe — maybe — a paralegal calls you back next week.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.21}>
              <p className="text-warm-white font-medium">That doesn't happen here.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p>When you call Darwin's office, you get Darwin. His personal cell phone number. He answers. Every time. No operators, no runaround, no waiting.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.27}>
              <p>20+ years. $250 million recovered. 10,000+ cases. And he still picks up the phone himself.</p>
            </ScrollReveal>
          </div>

          {/* Pull Quote */}
          <ScrollReveal delay={0.3}>
            <div className="relative pl-8 border-l-2 border-cta mt-10">
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
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-cta/5 rounded-sm -z-20 blur-xl" />
          </div>
        </ScrollReveal>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mt-16 md:mt-20">
        {[
          { stat: "PERSONAL ACCESS", desc: "Darwin answers the phone himself. Every single time." },
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

/* ─── TESTIMONIALS — RESULT-HEADLINE STYLE ─── */
const Testimonials = () => {
  const testimonials = [
    { 
      result: "Denied by employer's insurance. Settled for $180K.",
      quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him. He responds to your calls immediately.", 
      name: "Nicole F.", 
      stars: 5 
    },
    { 
      result: "Insurance offered $12K. Darwin got $95K.",
      quote: "He was very straight forward and got me the best offer for my settlement. You'll be in great hands.", 
      name: "Adtresa M.", 
      stars: 5 
    },
    { 
      result: "Fired after reporting injury — then Darwin stepped in.",
      quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this that will fight for your rights!", 
      name: "Jeremy H.", 
      stars: 5 
    },
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
              {/* Result headline */}
              <p className="font-bebas text-cta text-2xl md:text-3xl tracking-wider mb-4">{t.result}</p>
              <div className="text-gold text-xl mb-6 tracking-widest">★★★★★</div>
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
            Find Out What You're Owed.
          </h2>
          <p className="font-dm text-lg text-body-text mb-3">
            Takes 30 seconds. No obligation. No fee unless we win.
          </p>
          <p className="font-dm text-sm text-muted-text mb-10">
            Georgia clients only. Darwin reviews every submission personally.
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
              FIND OUT WHAT YOU'RE OWED →
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
