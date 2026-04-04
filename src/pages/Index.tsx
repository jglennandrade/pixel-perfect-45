import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import darwinHeadshot from "@/assets/darwin-headshot.jpg";
import badgeExpertise from "@/assets/badge-expertise-color.png";
import badgeAvvo from "@/assets/badge-avvo.webp";
import badgeGoogleColor from "@/assets/badge-google-color.png";
import badgeStateBar from "@/assets/badge-state-bar.png";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const scrollToForm = () => {
  document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
};

/* ═══════════════════════════════════════════════
   1. HERO + VIDEO — One seamless dark block
   Hero content fades out on scroll, video emerges underneath
   ═══════════════════════════════════════════════ */
const HeroAndVideo = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  /* Hero content fades + drifts up as you scroll */
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);

  /* Hero bg video zooms in slowly as you scroll */
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  /* Scroll indicator */
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: videoScroll } = useScroll({ target: videoRef, offset: ["start end", "start 0.2"] });

  /* Video player emerges — scales up, corners sharpen, lifts into view */
  const videoScale = useTransform(videoScroll, [0, 1], [0.75, 1]);
  const videoBR = useTransform(videoScroll, [0, 1], [32, 12]);
  const videoOpacity = useTransform(videoScroll, [0, 0.4], [0, 1]);
  const videoY = useTransform(videoScroll, [0, 0.8], [100, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
        {/* Video bg with parallax zoom */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/mainstage-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>

        {/* Content — fades out on scroll */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-dm text-xs text-white/60 tracking-[4px] uppercase mb-6"
          >
            ATLANTA'S INJURY ATTORNEYS · EST. 2004
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-bebas text-white text-6xl md:text-[110px] lg:text-[140px] leading-[0.9] tracking-wider"
          >
            WE FIGHT.<br />
            <span className="text-cta">YOU RECOVER.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="font-dm text-lg md:text-xl text-white/70 max-w-2xl mx-auto mt-8 leading-relaxed"
          >
            Injured at work or in an accident? You're probably owed a lot more than what they're telling you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <button onClick={scrollToForm} className="cta-btn-primary cta-pulse !py-5 !px-10 !text-base">
              GET MY FREE CASE REVIEW →
            </button>
            <button onClick={scrollToForm} className="cta-btn-outline-light !py-5 !px-10 !text-base">
              SEE IF I QUALIFY →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-2 mt-8"
          >
            <span className="text-cta text-lg tracking-widest">★★★★★</span>
            <span className="font-dm text-sm text-white/50">
              4.9 stars · 10,000+ Georgia clients served
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator — fades out as you start scrolling */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ opacity: arrowOpacity }}
        >
          <span className="font-dm text-[10px] text-white/40 tracking-[3px] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>

        {/* Angled cut — diagonal transition like KingKong */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 120L1440 0V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── VIDEO PLAYER — emerges seamlessly below hero ── */}
      <section ref={videoRef} className="bg-white pb-12 md:pb-20 -mt-4">
        <motion.div
          style={{ scale: videoScale, borderRadius: videoBR, opacity: videoOpacity, y: videoY }}
          className="relative aspect-video bg-dark overflow-hidden cursor-pointer group mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-xl"
        >
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/mainstage-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cta/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.3)]"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <p className="font-dm text-white/90 text-sm md:text-base">
              See how Darwin fights for injured Georgia workers — in his own words.
            </p>
          </div>
        </motion.div>

        {/* Social proof badges — contained slider matching video width */}
        <div className="mt-12 mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="flex items-center gap-16 animate-marquee" style={{ width: "max-content" }}>
            {[...Array(4)].flatMap(() => [
              { src: badgeExpertise, alt: "Expertise.com Best Workers' Comp" },
              { src: badgeGoogleColor, alt: "Google Reviews 5 Stars" },
              { src: badgeAvvo, alt: "Avvo 5 Star Rating" },
              { src: badgeStateBar, alt: "State Bar of Georgia" },
            ]).map((b, i) => (
              <img key={i} src={b.src} alt={b.alt} className="h-16 md:h-24 w-auto object-contain flex-shrink-0" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/* ═══════════════════════════════════════════════
   3. LETTER — "Dear injured worker" long-form
   ═══════════════════════════════════════════════ */
const LetterSection = () => (
  <section className="bg-off-white py-20 md:py-32 px-6">
    <div className="max-w-[700px] mx-auto">
      <ScrollReveal>
        <p className="font-dm text-sm text-text-muted mb-8">Updated: April 2026 · Atlanta, Georgia</p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-serif italic text-text-dark text-3xl md:text-4xl leading-snug mb-10">
          Dear injured worker,
        </h2>
      </ScrollReveal>

      <StaggerContainer stagger={0.06} delay={0.1} className="space-y-6 font-dm text-lg md:text-xl text-text-body leading-relaxed">
        <StaggerItem><p>You're reading this because something happened.</p></StaggerItem>
        <StaggerItem><p>Maybe you got hurt at work. Maybe it was a car wreck. Or maybe someone else's carelessness changed your life overnight.</p></StaggerItem>
        <StaggerItem><p>And now the insurance company is giving you the runaround. That "claims adjuster" who called you? <span className="text-text-dark font-bold">Their job is to pay you as little as possible.</span></p></StaggerItem>
        <StaggerItem><p>They have lawyers. Teams of them. Their only job? Close your file cheap.</p></StaggerItem>
        <StaggerItem><p>Meanwhile, you're wondering how you're going to pay rent. Wondering if that lowball offer is actually all you're worth.</p></StaggerItem>
        <StaggerItem>
          <p className="text-text-dark font-bold text-xl md:text-2xl pt-4">
            It's not. And that's exactly why I started this firm 20 years ago.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="text-text-muted text-base pt-2">— Darwin F. Johnson, Founder</p>
        </StaggerItem>
      </StaggerContainer>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   4. OUR OFFERINGS — KingKong Agency/Courses style
   ═══════════════════════════════════════════════ */
const Offerings = () => (
  <section className="bg-white py-20 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="font-dm text-xs text-text-muted tracking-[4px] uppercase mb-4 text-center">OUR PRACTICE AREAS</p>
        <h2 className="font-bebas text-text-dark text-4xl md:text-7xl tracking-wider leading-[0.95] text-center mb-4">
          How Were You Hurt?
        </h2>
        <p className="font-dm text-lg text-text-body text-center max-w-2xl mx-auto mb-14">
          Choose your situation below. Both paths lead to a free case review with Darwin personally.
        </p>
      </ScrollReveal>

      <StaggerContainer stagger={0.15} className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: "⚠️",
            label: "INJURED ON THE JOB",
            headline: "Workers' Compensation",
            desc: "Hurt at a construction site, warehouse, factory, or anywhere on the clock? Your employer's insurance doesn't want you to call a lawyer. That should tell you everything.",
            bullets: ["No-fault system — you don't need to prove employer negligence", "Covers medical bills, lost wages, disability benefits", "Darwin has beaten Amazon, Walmart, FedEx, and more"],
            cta: "START MY WORKERS' COMP REVIEW →",
            link: "/workers-compensation",
            stars: "10,000+ workers' comp cases handled",
          },
          {
            icon: "🚗",
            label: "INJURED IN AN ACCIDENT",
            headline: "Personal Injury",
            desc: "Car wreck, truck accident, motorcycle crash, slip and fall? The insurance adjuster who called you isn't your friend. Don't sign anything until you talk to Darwin.",
            bullets: ["Car, truck, motorcycle, and pedestrian accidents", "Brain injuries, spinal cord injuries, wrongful death", "You have 2 years to file — don't wait"],
            cta: "START MY INJURY CASE REVIEW →",
            link: "/personal-injury",
            stars: "$250M+ recovered for accident victims",
          },
        ].map((card, i) => (
          <StaggerItem key={i}>
            <div className="bg-off-white rounded-lg border border-card-border p-8 md:p-10 h-full card-lift relative overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-cta" />

              <div className="text-4xl mb-4">{card.icon}</div>
              <p className="font-dm text-xs text-cta tracking-[3px] uppercase font-bold mb-2">{card.label}</p>
              <h3 className="font-bebas text-text-dark text-3xl md:text-4xl tracking-wider mb-4">{card.headline}</h3>
              <p className="font-dm text-base text-text-body leading-relaxed mb-6">{card.desc}</p>

              {/* Bullet points */}
              <div className="space-y-3 mb-8">
                {card.bullets.map((b, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="text-cta font-bold mt-0.5">✓</span>
                    <p className="font-dm text-sm text-text-body">{b}</p>
                  </div>
                ))}
              </div>

              <button onClick={scrollToForm} className="cta-btn-primary w-full !py-4 !text-sm">
                {card.cta}
              </button>

              <div className="flex items-center gap-2 mt-5">
                <span className="text-cta text-sm">★★★★★</span>
                <span className="font-dm text-xs text-text-muted">{card.stars}</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   5. STATS + EMPLOYER LOGOS
   ═══════════════════════════════════════════════ */
const StatsSection = () => (
  <section className="bg-off-white py-20 md:py-32 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-bebas text-text-dark text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">
          The Numbers Don't Lie.
        </h2>
        <p className="font-dm text-lg text-text-body max-w-2xl mx-auto">
          20+ years. Battle-tested across every industry in Georgia.
        </p>
      </ScrollReveal>

      <StaggerContainer stagger={0.1} delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {[
          { to: 250, prefix: "$", suffix: "M+", label: "Revenue recovered" },
          { to: 10000, suffix: "+", label: "Cases handled", separator: true },
          { to: 20, suffix: "+", label: "Years in Georgia" },
          { to: 15, suffix: "+", label: "Industries served" },
        ].map((s, i) => (
          <StaggerItem key={i}>
            <div className="py-6">
              <div className="font-bebas text-5xl md:text-7xl text-text-dark tracking-wider">
                <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} separator={s.separator} decimals={0} />
              </div>
              <div className="font-dm text-sm text-text-muted tracking-wide mt-2">{s.label}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Employer logos we've fought and won against */}
      <ScrollReveal delay={0.2}>
        <p className="font-dm text-xs text-text-muted tracking-[3px] uppercase mt-16 mb-8">EMPLOYERS WE'VE TAKEN ON — AND WON</p>
      </ScrollReveal>
      <StaggerContainer stagger={0.06} className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {["Amazon", "Walmart", "FedEx", "UPS", "Delta Airlines", "Home Depot", "Coca-Cola", "Kia Motors", "Mohawk Industries", "Pilgrim's Pride"].map((name, i) => (
          <StaggerItem key={i}>
            <span className="font-bebas text-2xl md:text-3xl text-text-dark/20 tracking-wider hover:text-text-dark/60 transition-colors cursor-default">
              {name}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   6. CASE RESULTS — KingKong case study grid
   ═══════════════════════════════════════════════ */
const CaseResults = () => {
  const cases = [
    { amount: "$4,200,000", type: "Catastrophic Workers' Comp", industry: "Construction" },
    { amount: "$2,400,000", type: "Catastrophic Workers' Comp", industry: "Industrial" },
    { amount: "$1,200,000", type: "Catastrophic Workers' Comp", industry: "Warehouse" },
    { amount: "$180,000", type: "Workers' Comp Denial Overturned", industry: "Healthcare" },
    { amount: "$95,000", type: "Personal Injury Settlement", industry: "Auto Accident" },
    { amount: "$850,000", type: "Workers' Comp — Back Injury", industry: "Trucking" },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-dm text-xs text-text-muted tracking-[4px] uppercase mb-4 text-center">CASE RESULTS</p>
          <h2 className="font-bebas text-text-dark text-4xl md:text-7xl tracking-wider leading-[0.95] text-center mb-4">
            Become Our Next Success Story.
          </h2>
          <p className="font-dm text-lg text-text-body text-center max-w-2xl mx-auto mb-14">
            Over $250 million recovered for Georgia workers and accident victims. Here's a snapshot.
          </p>
        </ScrollReveal>

        <StaggerContainer stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <StaggerItem key={i}>
              <div className="bg-off-white rounded-lg border border-card-border p-6 md:p-8 card-lift text-center">
                <p className="font-bebas text-cta text-4xl md:text-5xl tracking-wider">{c.amount}</p>
                <p className="font-dm text-sm text-text-dark font-bold mt-3">{c.type}</p>
                <p className="font-dm text-xs text-text-muted mt-1">{c.industry}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
              GET MY FREE CASE REVIEW →
            </button>
            <p className="font-dm text-xs text-text-muted mt-3">Free. No obligation. Takes 30 seconds.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   7. WHY DARWIN — Photo + text
   ═══════════════════════════════════════════════ */
const WhyDarwin = () => (
  <section className="bg-off-white py-20 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[400px_1fr] gap-12 md:gap-16 items-center">
        <ScrollReveal direction="left">
          <img src={darwinHeadshot} alt="Darwin F. Johnson, Attorney" className="w-full h-auto rounded-lg object-cover" />
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <div className="editorial-divider mb-6" />
            <p className="font-dm text-xs text-text-muted tracking-[4px] uppercase mb-4">MEET DARWIN</p>
            <h2 className="font-bebas text-text-dark text-4xl md:text-6xl tracking-wider leading-[0.95] mb-8">
              You Deserve a Lawyer Who Answers the Phone.
            </h2>
          </ScrollReveal>

          <StaggerContainer stagger={0.08} className="space-y-5 font-dm text-lg text-text-body leading-relaxed">
            <StaggerItem><p>At most firms, you're just a file number. You talk to operators and paralegals. You wait days for a callback.</p></StaggerItem>
            <StaggerItem><p className="text-text-dark font-bold text-xl">That doesn't happen here.</p></StaggerItem>
            <StaggerItem><p>When you call Darwin's office, you get Darwin. His personal number. He answers every time. 10,000+ cases and he still picks up the phone himself.</p></StaggerItem>
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="relative pl-6 mt-8" style={{ borderLeft: "3px solid hsl(var(--cta))" }}>
              <p className="font-serif italic text-text-dark text-xl md:text-2xl leading-relaxed">
                "When you call my office, you get ME — not an operator, not a paralegal. You get Darwin."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   8. TESTIMONIALS
   ═══════════════════════════════════════════════ */
const Testimonials = () => {
  const testimonials = [
    { result: "Denied by insurance. Settled for $180K.", quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him.", name: "Nicole F." },
    { result: "Insurance offered $12K. Darwin got $95K.", quote: "He was very straightforward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M." },
    { result: "Fired after reporting injury — Darwin stepped in.", quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this!", name: "Jeremy H." },
  ];

  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-bebas text-text-dark text-4xl md:text-7xl tracking-wider leading-[0.95] text-center mb-12">
            Real Clients. Real Results.
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease }}
              className="text-center"
            >
              <p className="font-bebas text-cta text-2xl md:text-4xl tracking-wider mb-6">{t.result}</p>
              <span className="text-cta text-xl tracking-[6px]">★★★★★</span>
              <p className="font-serif italic text-text-dark text-2xl md:text-3xl leading-relaxed mt-6 mb-8">"{t.quote}"</p>
              <p className="font-dm font-bold text-sm text-text-muted tracking-[2px]">— {t.name.toUpperCase()}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`relative px-6 py-2.5 text-xs font-bold font-dm tracking-wider rounded transition-all duration-300 ${active === i ? "text-white" : "text-text-muted hover:text-text-dark"}`}
            >
              {active === i && (
                <motion.span layoutId="testimonial-tab" className="absolute inset-0 rounded bg-cta" transition={{ type: "spring", bounce: 0.18, duration: 0.5 }} />
              )}
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   9. FAQ — Accordion
   ═══════════════════════════════════════════════ */
const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Can my employer fire me for filing workers' comp in Georgia?", a: "Georgia is an 'at-will' state. But your workers' comp claim exists independently of your employment. Even if they fire you, Darwin will fight for every dollar you're entitled to." },
    { q: "How much does it cost? I can barely pay my bills.", a: "Not one dime upfront. Darwin gets paid only if he wins or settles your case. If you don't get paid, he doesn't get paid. Zero risk." },
    { q: "How long until I get a settlement?", a: "It depends on injury severity and how aggressively the insurance company fights. Darwin files hearing requests immediately. Most clients see resolution within months, not years." },
    { q: "Do I even have a case?", a: "If you were hurt performing your job duties, you very likely have a valid claim. Workers' comp is no-fault — you don't need to prove your employer did anything wrong." },
    { q: "Why Darwin instead of a big firm?", a: "At bigger firms, you're a number. At Darwin's office, you talk to Darwin. He answers his own phone. 10,000+ cases, $250M+ recovered, and he still gives every client personal attention." },
    { q: "The insurance company already made me an offer.", a: "Don't sign anything. The first offer is designed to close your case cheap. Darwin has seen clients receive 5-10x more than the initial offer." },
  ];

  return (
    <section className="bg-off-white py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-bebas text-text-dark text-4xl md:text-7xl tracking-wider leading-[0.95] text-center mb-12">
            You've Got Questions. We've Got Answers.
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-lg border border-card-border overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-dm font-bold text-text-dark text-base md:text-lg pr-4">{faq.q}</span>
                  <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-text-muted text-xl flex-shrink-0">▼</motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }}>
                      <div className="px-6 pb-5">
                        <p className="font-dm text-base text-text-body leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA — drives to form, not phone call */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <p className="font-dm text-lg text-text-body mb-6">Ready to find out what you're owed?</p>
            <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
              GET MY FREE CASE REVIEW →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   10. FORM — Dark contrast section
   ═══════════════════════════════════════════════ */
const FormSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", details: "", clientStatus: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/book-a-call");
  };

  const inputClass = "w-full bg-white/10 border border-white/20 text-white font-dm text-base p-4 rounded focus:border-cta focus:outline-none transition-all duration-200 placeholder:text-white/40";
  const labelClass = "font-dm text-xs font-bold text-white/60 tracking-[2px] uppercase mb-2 block";

  return (
    <section id="form-section" className="bg-dark py-20 md:py-32 px-6">
      <div className="max-w-[640px] mx-auto">
        <ScrollReveal>
          <h2 className="font-bebas text-white text-5xl md:text-8xl tracking-wider leading-[0.9] mb-4 text-center">
            Let's Review Your Case.
          </h2>
          <p className="font-dm text-lg text-white/70 mb-3 text-center">
            Takes 30 seconds. No obligation. Darwin reviews every submission personally.
          </p>
          <p className="font-dm text-sm text-white/40 mb-10 text-center">
            Georgia clients only. No fee unless we win.
          </p>
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
            <div><label className={labelClass}>Tell us briefly what happened</label><textarea className={`${inputClass} min-h-[120px]`} placeholder="e.g. I was hurt at my warehouse job in Atlanta..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} /></div>
            <div><label className={labelClass}>Are you a new client?</label><select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}><option value="">Select...</option><option value="new">Yes, I am a potential new client</option><option value="existing">No, I am an existing client</option><option value="neither">Neither</option></select></div>
            <button type="submit" className="cta-btn-primary w-full !h-16 !text-base">
              SUBMIT MY FREE CASE REVIEW →
            </button>
            <p className="font-dm text-xs text-white/30 text-center">
              By submitting, you agree to receive text messages from The Law Offices of Darwin F. Johnson.
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-cta text-sm">★★★★★</span>
              <span className="font-dm text-xs text-white/40">Secure & Confidential · No Fees Unless We Win</span>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   11. AWARDS & CERTIFICATIONS — Trust strip above footer
   ═══════════════════════════════════════════════ */
const AwardsBar = () => (
  <section className="bg-off-white py-16 md:py-20 px-6 border-t border-card-border">
    <div className="max-w-5xl mx-auto text-center">
      <ScrollReveal>
        <p className="font-dm text-xs text-text-muted tracking-[4px] uppercase mb-10">AWARDS & CERTIFICATIONS</p>
      </ScrollReveal>

      <StaggerContainer stagger={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          { icon: "🏆", title: "Best Workers' Comp Lawyers", subtitle: "Expertise.com · 2024" },
          { icon: "⭐", title: "4.9 Star Rating", subtitle: "Google Reviews · 7,400+" },
          { icon: "⚖️", title: "$250M+ Recovered", subtitle: "For Georgia Workers" },
          { icon: "🛡️", title: "20+ Years", subtitle: "Licensed in All GA Courts" },
        ].map((award, i) => (
          <StaggerItem key={i}>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">{award.icon}</span>
              <p className="font-dm font-bold text-text-dark text-sm">{award.title}</p>
              <p className="font-dm text-xs text-text-muted mt-1">{award.subtitle}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Badge images — contained slider */}
      <div className="mt-12 max-w-4xl mx-auto overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-off-white via-off-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-off-white via-off-white/80 to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-16 animate-marquee" style={{ width: "max-content" }}>
          {[...Array(4)].flatMap(() => [
            { src: badgeExpertise, alt: "Expertise.com Best Workers' Comp" },
            { src: badgeGoogleColor, alt: "Google Reviews 5 Stars" },
            { src: badgeAvvo, alt: "Avvo 5 Star Rating" },
            { src: badgeStateBar, alt: "State Bar of Georgia" },
          ]).map((b, i) => (
            <img key={i} src={b.src} alt={b.alt} className="h-16 md:h-24 w-auto object-contain flex-shrink-0" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Index = () => (
  <div className="bg-white min-h-screen overflow-x-hidden pb-16 md:pb-0">
    <ScrollProgress />
    <Header />
    <HeroAndVideo />
    <LetterSection />
    <Offerings />
    <StatsSection />
    <CaseResults />
    <WhyDarwin />
    <Testimonials />
    <FAQ />
    <FormSection />
    <AwardsBar />
    <Footer />
    <FloatingCTA />
    <MobileStickyBar />
  </div>
);

export default Index;
