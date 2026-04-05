import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import DamagesBlock from "@/components/DamagesBlock";
import { JusticeScale } from "@/components/JusticeScale";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import darwinHeadshot from "@/assets/darwin-headshot.jpg";
import djMonogram from "@/assets/dj-monogram.png";
import badgeExpertise from "@/assets/badge-expertise-color.png";
import badgeAvvo from "@/assets/badge-avvo.webp";
import badgeGoogleColor from "@/assets/badge-google-color.png";
import badgeStateBar from "@/assets/badge-state-bar.png";
import logoPilgrims from "@/assets/logo-pilgrims.png";
import logoAmazon from "@/assets/logo-amazon.png";
import logoMohawk from "@/assets/logo-mohawk.webp";
import logoKia from "@/assets/logo-kia.png";
import logoCocacola from "@/assets/logo-cocacola.png";
import logoHomedepot from "@/assets/logo-homedepot.png";
import logoWalmart from "@/assets/logo-walmart.png";
import logoFedex from "@/assets/logo-fedex.png";
import logoDelta from "@/assets/logo-delta.png";
import logoUps from "@/assets/logo-ups.png";
import logoTiptop from "@/assets/logo-tiptop.webp";
import logoToyotires from "@/assets/logo-toyotires.png";
import caseConstruction from "@/assets/case-construction.jpg";
import caseCarAccident from "@/assets/case-car-accident.jpg";
import caseWarehouse from "@/assets/case-warehouse.jpg";
import caseTrucking from "@/assets/case-trucking.jpg";
import caseMedical from "@/assets/case-medical.jpg";
import caseFactory from "@/assets/case-factory.jpg";
import logoAmericold from "@/assets/logo-americold.png";
import logoShaw from "@/assets/logo-shaw.webp";
import logoJbhunt from "@/assets/logo-jbhunt.png";

const row1Logos = [
  { src: logoAmazon, alt: "Amazon", h: "h-7 md:h-9" },
  { src: logoWalmart, alt: "Walmart", h: "h-7 md:h-9" },
  { src: logoFedex, alt: "FedEx", h: "h-8 md:h-10" },
  { src: logoDelta, alt: "Delta Airlines", h: "h-5 md:h-6" },
  { src: logoHomedepot, alt: "Home Depot", h: "h-12 md:h-14" },
];

const row2Logos = [
  { src: logoCocacola, alt: "Coca-Cola", h: "h-7 md:h-9" },
  { src: logoKia, alt: "Kia Motors", h: "h-4 md:h-5" },
  { src: logoMohawk, alt: "Mohawk Industries", h: "h-9 md:h-11" },
  { src: logoPilgrims, alt: "Pilgrim's", h: "h-10 md:h-12" },
  { src: logoUps, alt: "UPS", h: "h-9 md:h-11" },
];

const row3Logos = [
  { src: logoTiptop, alt: "Tip Top Poultry", h: "h-10 md:h-12" },
  { src: logoToyotires, alt: "Toyo Tires", h: "h-5 md:h-7" },
  { src: logoAmericold, alt: "Americold Logistics", h: "h-10 md:h-14" },
  { src: logoShaw, alt: "Shaw Industries", h: "h-10 md:h-12" },
  { src: logoJbhunt, alt: "J.B. Hunt", h: "h-8 md:h-10" },
];

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const scrollToForm = () => {
  document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
};

/* ═══════════════════════════════════════════════
   VIDEO PLAYER — Click to play/pause
   ═══════════════════════════════════════════════ */
const VideoPlayer = ({ videoScale, videoBR, videoOpacity, videoY }: { videoScale: any; videoBR: any; videoOpacity: any; videoY: any }) => {
  const modalVideoEl = useRef<HTMLVideoElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
    const header = document.querySelector("header");
    if (header) header.style.display = "none";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
    if (modalVideoEl.current) modalVideoEl.current.pause();
    const header = document.querySelector("header");
    if (header) header.style.display = "";
  };

  // Auto-play when modal opens
  const handleModalVideoRef = (el: HTMLVideoElement | null) => {
    (modalVideoEl as any).current = el;
    if (el && modalOpen) el.play();
  };

  return (
    <>
      {/* Thumbnail — click to open modal */}
      <motion.div
        style={{ scale: videoScale, borderRadius: videoBR, opacity: videoOpacity, y: videoY }}
        className="relative z-10 aspect-video bg-dark overflow-hidden cursor-pointer group mx-8 md:mx-16 lg:mx-auto lg:max-w-5xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] rounded-xl"
        onClick={openModal}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onLoadedData={(e) => {
            const v = e.currentTarget;
            v.play().catch(() => {});
          }}
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (v.currentTime > 15) v.currentTime = 0;
          }}
        >
          <source src="/brand-story.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cta/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          <p className="font-dm text-white/90 text-sm md:text-base">
            See how Darwin fights for injured Georgia workers — in his own words.
          </p>
        </div>
      </motion.div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={closeModal}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              <span className="text-white text-2xl font-light">✕</span>
            </button>

            {/* Video */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={handleModalVideoRef}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              >
                <source src="/brand-story.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
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

  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: videoScroll } = useScroll({ target: videoRef, offset: ["start end", "end 0.7"] });

  /* Video starts very small and centered, grows to full as you scroll */
  const videoScale = useTransform(videoScroll, [0, 0.7], [0.4, 1]);
  const videoBR = useTransform(videoScroll, [0, 0.7], [32, 12]);
  const videoOpacity = useTransform(videoScroll, [0, 0.3], [0.6, 1]);
  const videoY = useTransform(videoScroll, [0, 0.7], [40, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pb-32 md:pb-40">
        {/* Video bg with parallax zoom */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            ref={(el) => {
              if (el) {
                el.currentTime = 10;
              }
            }}
          >
            <source src="/mainstage-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/65" />
        </motion.div>

        {/* Content — fades out on scroll */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-block mb-6"
          >
            <span className="inline-block bg-cta/15 border-2 border-cta/40 rounded-full px-6 py-2.5 font-dm text-xs text-cta tracking-[3px] uppercase font-bold">
              ATLANTA'S INJURY ATTORNEYS · EST. 2004
            </span>
          </motion.div>

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
            <button onClick={scrollToForm} className="cta-btn-primary cta-pulse !py-5 !px-10 !text-xl">
              GET MY FREE CASE REVIEW →
            </button>
            <button onClick={scrollToForm} className="cta-btn-outline-light !py-5 !px-10 !text-xl">
              SEE IF I QUALIFY →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <span className="text-cta text-xl tracking-[4px]">★★★★★</span>
            <span className="font-dm text-sm text-white/50">
              4.9 stars · 10,000+ Georgia clients served
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator — positioned below all content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>

      </section>

      {/* ── VIDEO SECTION — overlaps hero with white gradient transition ── */}
      <section ref={videoRef} className="relative z-20 pb-12 md:pb-20 -mt-28 md:-mt-40">
        {/* White gradient transition from hero — seamless, no visible line */}
        <div className="absolute top-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        <div className="absolute top-[10rem] md:top-[14rem] left-0 right-0 bottom-0 bg-white -mt-px" />
        <VideoPlayer videoScale={videoScale} videoBR={videoBR} videoOpacity={videoOpacity} videoY={videoY} />

        {/* Social proof badges — seamless fade using CSS mask */}
        <div
          className="relative z-10 mt-12 mx-8 md:mx-16 lg:mx-auto lg:max-w-5xl overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          <div className="flex items-center gap-16 animate-marquee" style={{ width: "max-content" }}>
            {[...Array(4)].flatMap(() => [
              { src: badgeExpertise, alt: "Expertise.com Best Workers' Comp" },
              { src: badgeGoogleColor, alt: "Google Reviews 5 Stars" },
              { src: badgeAvvo, alt: "Avvo 5 Star Rating" },
              { src: badgeStateBar, alt: "State Bar of Georgia" },
            ]).map((b, i) => (
              <img key={i} src={b.src} alt={b.alt} className="h-16 md:h-24 w-auto object-contain flex-shrink-0 mix-blend-multiply" />
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
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="font-dm text-sm text-text-muted mb-8 inline-block border-b border-text-muted/40 pb-1">Updated: April 2026 · Atlanta, Georgia</p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-serif italic text-text-dark text-3xl md:text-4xl leading-snug mb-10">
          Dear friend,
        </h2>
      </ScrollReveal>

      <div className="space-y-7 font-dm text-lg md:text-xl text-text-body leading-relaxed">
        <ScrollReveal><p>Right now, you're probably lying awake at 2am staring at the ceiling.</p></ScrollReveal>
        <ScrollReveal><p>Your body hurts.</p></ScrollReveal>
        <ScrollReveal><p>The bills are stacking up on the kitchen counter.</p></ScrollReveal>
        <ScrollReveal><p>You haven't worked in weeks.</p></ScrollReveal>
        <ScrollReveal><p>And that "friendly" insurance adjuster who called you yesterday?</p></ScrollReveal>
        <ScrollReveal>
          <p className="text-xl md:text-2xl">
            <span className="bg-cta/25 box-decoration-clone px-2 py-1 font-bold text-text-dark">
              They're calling to close your file — as cheaply as possible.
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal><p>Here's what they won't tell you:</p></ScrollReveal>
        <ScrollReveal><p>The moment you got hurt, your employer's insurance company assigned a team of lawyers to your case.</p></ScrollReveal>
        <ScrollReveal><p>Not to protect you.</p></ScrollReveal>
        <ScrollReveal><p className="text-text-dark font-bold">To protect themselves.</p></ScrollReveal>
        <ScrollReveal><p>Their playbook is simple: delay, deny, lowball.</p></ScrollReveal>
        <ScrollReveal><p>Hope you're desperate enough to sign before you talk to someone like me.</p></ScrollReveal>
        <ScrollReveal><p>Meanwhile, you're wondering if your job will be there when you recover.</p></ScrollReveal>
        <ScrollReveal><p>Wondering if you can make rent.</p></ScrollReveal>
        <ScrollReveal><p>Wondering if maybe this is just... all you're going to get.</p></ScrollReveal>
        <ScrollReveal>
          <p className="text-xl md:text-2xl pt-2">
            <span className="bg-cta/25 box-decoration-clone px-2 py-1 font-bold text-text-dark">
              It's not. Not even close.
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal><p>I've spent 20 years proving that.</p></ScrollReveal>
        <ScrollReveal><p className="text-text-dark font-medium">$250 million recovered. 10,000+ cases. Every dollar fought for personally.</p></ScrollReveal>
        <ScrollReveal><p>And unlike every other firm in Atlanta —</p></ScrollReveal>
        <ScrollReveal><p>When you call my office, I pick up the phone.</p></ScrollReveal>
        <ScrollReveal><p>Not a secretary. Not a paralegal. <span className="text-text-dark font-bold">Me.</span></p></ScrollReveal>
        <ScrollReveal>
          <div className="pt-4">
            <p className="text-text-dark text-3xl md:text-4xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Darwin F. Johnson</p>
            <p className="text-text-muted text-sm mt-1">Founder & Managing Attorney</p>
          </div>
        </ScrollReveal>
      </div>
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
        <div className="text-center mb-4">
          <span className="inline-block bg-navy/10 border-2 border-navy/30 rounded-full px-6 py-2.5 font-dm text-xs text-navy tracking-[3px] uppercase font-bold">
            PICK THE ONE THAT HAPPENED TO YOU
          </span>
        </div>
        <h2 className="font-bebas text-text-dark text-6xl md:text-8xl lg:text-[110px] tracking-wider leading-[0.9] text-center mb-4">
          How Were You Hurt?
        </h2>
        <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-2xl mx-auto mb-14">
          Pick the one that happened to you.<br />
          Either way, Darwin has made it right 10,000+ times.
        </p>
      </ScrollReveal>

      <StaggerContainer stagger={0.15} className="grid md:grid-cols-2 gap-6">
        {[
          {
            number: "01",
            label: "INJURED ON THE JOB",
            headline: "WORKERS' COMP",
            desc: "Hurt at work in Georgia? Construction, warehouse, factory, healthcare, trucking — if you got injured on the clock, you're probably owed a lot more than what they're offering you.",
            path: "wc",
            stars: "4.9 stars out of 10,000+ cases",
            // Cool navy — the brand blue
            bg: "linear-gradient(160deg, hsl(220 55% 22%) 0%, hsl(220 60% 12%) 60%, hsl(220 65% 8%) 100%)",
          },
          {
            number: "02",
            label: "INJURED IN AN ACCIDENT",
            headline: "PERSONAL INJURY",
            desc: "Car wreck, truck accident, motorcycle crash? That insurance adjuster who called isn't trying to help — they're trying to close your file cheap. Don't sign anything until you talk to Darwin.",
            path: "pi",
            stars: "4.9 stars · $250M+ recovered",
            // Warm graphite — sibling dark with subtle warmth that echoes the orange CTA
            bg: "linear-gradient(160deg, hsl(20 15% 18%) 0%, hsl(15 18% 10%) 60%, hsl(10 20% 6%) 100%)",
          },
        ].map((card, i) => (
          <StaggerItem key={i}>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("startQuiz", { detail: { path: card.path } }));
                setTimeout(() => {
                  document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
              className="block h-full w-full text-left"
            >
              <div
                className="rounded-2xl p-8 md:p-12 h-full card-lift relative overflow-hidden group"
                style={{ background: card.bg }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-cta" />

                {/* DJ monogram watermark */}
                <img
                  src={djMonogram}
                  alt=""
                  className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-[220px] md:w-[340px] h-auto pointer-events-none select-none opacity-[0.08]"
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">
                      {card.number} / {card.label}
                    </span>
                  </div>
                  <h3 className="font-bebas text-white text-6xl md:text-8xl tracking-wider leading-[0.85] mb-6">
                    {card.headline}
                  </h3>
                  <p className="font-dm text-lg md:text-xl text-white/60 leading-relaxed mb-8">
                    {card.desc}
                  </p>

                  <div className="rounded-lg py-4 px-6 text-center transition-colors bg-cta group-hover:bg-cta-hover">
                    <span className="font-dm font-bold text-white text-base tracking-wide">CHECK MY CASE →</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 mt-8">
                    <span className="text-3xl tracking-[6px] text-cta">★★★★★</span>
                    <span className="font-dm text-base text-white/60 mt-1">{card.stars}</span>
                  </div>
                </div>
              </div>
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Employer logos — below the cards, grayscale two-row slider */}
      <div className="mt-14" />

      {/* Row 1 — slides right, grayscale */}
      <div className="max-w-5xl mx-auto overflow-hidden relative mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-20 animate-marquee" style={{ width: "max-content" }}>
          {[...Array(4)].flatMap(() => row1Logos).map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} loading="lazy" decoding="async" className={`${logo.h} w-auto object-contain flex-shrink-0 grayscale opacity-40`} />
          ))}
        </div>
      </div>

      {/* Row 2 — slides left, grayscale */}
      <div className="max-w-5xl mx-auto overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-20 animate-marquee-reverse" style={{ width: "max-content" }}>
          {[...Array(4)].flatMap(() => row2Logos).map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} loading="lazy" decoding="async" className={`${logo.h} w-auto object-contain flex-shrink-0 grayscale opacity-40`} />
          ))}
        </div>
      </div>
    </div>
  </section>
);


/* ═══════════════════════════════════════════════
   4b. UNIFIED QUIZ — 60-Second Case Check
   ═══════════════════════════════════════════════ */
const UnifiedQuiz = () => {
  const [path, setPath] = useState<"wc" | "pi" | null>(null);
  const [step, setStep] = useState(1);
  // Workers' Comp state
  const [selectedInjury, setSelectedInjury] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [wcQualified, setWcQualified] = useState<"yes" | "no" | null>(null);
  // Personal Injury state
  const [selectedCaseType, setSelectedCaseType] = useState<string | null>(null);
  const [selectedPiInjury, setSelectedPiInjury] = useState<string | null>(null);
  const [thirdPartyFault, setThirdPartyFault] = useState<"yes" | "no" | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  // Listen for path selection from Offerings cards
  useEffect(() => {
    const handleStart = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setPath(detail.path);
      setStep(1);
    };
    window.addEventListener("startQuiz", handleStart);
    return () => window.removeEventListener("startQuiz", handleStart);
  }, []);

  const scrollToContent = () => {
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const resetQuiz = () => {
    setPath(null);
    setStep(1);
    setSelectedInjury(null);
    setSelectedIndustry(null);
    setWcQualified(null);
    setSelectedCaseType(null);
    setSelectedPiInjury(null);
    setThirdPartyFault(null);
  };

  // Injury list with hooks (shared between WC and PI)
  const injuries: { name: string; hook: string }[] = [
    { name: "Back Injuries", hook: "Back injuries are the #1 cause of missed workdays in Georgia — and one of the most commonly lowballed claims. Darwin fights to get you every dollar, including long-term disability." },
    { name: "Brain Injuries", hook: "Brain injuries can change your life in ways insurance companies never account for. Darwin specializes in catastrophic cases and has recovered millions for clients with traumatic brain injuries." },
    { name: "Carpal Tunnel", hook: "Carpal tunnel from repetitive work is 100% compensable under Georgia workers' comp — but insurance companies love to deny it. Darwin knows exactly how to prove it." },
    { name: "Crush Injuries", hook: "Crush injuries often lead to permanent disability, multiple surgeries, and lifelong pain. Darwin ensures you're compensated for ALL of it — not just the initial medical bills." },
    { name: "Head Injuries", hook: "Head injuries can cause hidden damage that doesn't show up for months. Darwin makes sure your settlement accounts for future medical needs, not just today's bills." },
    { name: "Hip Injuries", hook: "Hip injuries often require surgery, replacement, and months of rehab. Darwin fights for every medical expense, lost wage, and disability benefit you're owed." },
    { name: "Knee Injuries", hook: "Knee injuries end careers in construction, warehousing, and healthcare. Darwin fights to make sure your settlement covers not just the injury — but your lost earning potential." },
    { name: "Neck Injuries", hook: "Neck injuries are notoriously hard to prove with standard tests. Darwin knows the medical experts who can document the full extent of your damage." },
    { name: "Paralysis", hook: "Paralysis changes everything. Darwin handles catastrophic cases with the urgency and aggression they require — and has recovered millions for clients with life-altering injuries." },
    { name: "Shoulder Injuries", hook: "Shoulder injuries from repetitive lifting or single incidents often need surgery. Darwin fights for every dollar — including future surgeries you haven't had yet." },
    { name: "Spinal Cord Injuries", hook: "Spinal cord injuries are among the most expensive to treat over a lifetime. Darwin ensures your settlement accounts for decades of care, not just the immediate costs." },
    { name: "Traumatic Brain Injury", hook: "TBI is invisible but devastating. Darwin has recovered millions for clients whose brain injuries were initially dismissed by insurance adjusters." },
  ];

  // Industries with hooks (WC only)
  const industries: { name: string; hook: string }[] = [
    { name: "Airport & Airline", hook: "Airport and airline workers face unique hazards — Darwin has handled cases involving Delta, baggage handlers, ground crew, and mechanics." },
    { name: "Construction", hook: "Construction is one of the most dangerous industries in Georgia — falls, crush injuries, and equipment accidents are common. Darwin has fought for construction workers for 20+ years." },
    { name: "Firefighter & EMT", hook: "First responders deserve the best representation. Darwin has fought for firefighters and EMTs injured on duty in Georgia — and won." },
    { name: "Grocery & Retail", hook: "Grocery and retail workers get hurt from slips, heavy lifting, and repetitive motion. Darwin has won cases for Walmart, Home Depot, and grocery store employees." },
    { name: "Healthcare", hook: "Nurses and healthcare workers suffer back, shoulder, and lifting injuries at staggering rates. Darwin knows how to fight hospital insurance companies that try to minimize your claim." },
    { name: "Industrial & Factories", hook: "Factory work is brutal on the body — crush injuries, amputations, and repetitive stress are common. Darwin has taken on Kia, Mohawk, Toyo Tires, and more." },
    { name: "Law Enforcement", hook: "Police officers face line-of-duty injuries that require specialized legal representation. Darwin fights for every benefit Georgia law entitles you to." },
    { name: "Poultry Processing", hook: "Poultry plants are notorious for repetitive stress injuries, cuts, and chemical exposure. Darwin has beaten Pilgrim's Pride and Tip Top Poultry — and he'll fight for you." },
    { name: "Roofing", hook: "Roofing is one of the deadliest jobs in America. Falls, heat stroke, and equipment injuries are common. Darwin fights to get you every dollar you deserve." },
    { name: "Steelworker", hook: "Steelworkers face some of the most dangerous conditions in any industry. Darwin has the expertise to handle complex catastrophic injury cases." },
    { name: "Power & Utilities", hook: "Electrical workers face electrocution, burns, and fall hazards every day. Darwin has handled utility worker cases and knows exactly what they're worth." },
    { name: "Tree Services", hook: "Tree service workers get hurt from falls, chainsaw accidents, and equipment failures. Darwin fights for every dollar — including future medical care." },
    { name: "Trucking", hook: "Truck drivers suffer back injuries, accidents, and long-term health issues. Darwin has taken on FedEx, UPS, J.B. Hunt, and Americold — and won." },
  ];

  // Case types with hooks (PI only)
  const caseTypes: { name: string; hook: string }[] = [
    { name: "Car Accident", hook: "Car accidents on Atlanta's highways can leave you with life-altering injuries and medical bills you never saw coming. Darwin has handled thousands of auto cases across Georgia." },
    { name: "Truck Accident", hook: "Truck accidents involve complex federal regulations and multiple liable parties. Darwin knows how to untangle them — and has gone after the biggest trucking companies in the country." },
    { name: "Motorcycle Accident", hook: "Motorcyclists are often blamed unfairly by juries and insurance companies. Darwin builds cases that cut through the bias and get you full compensation." },
    { name: "Pedestrian Accident", hook: "If you were hit while walking, jogging, or crossing the street, you have serious legal protections. Darwin fights for every dollar — including pain, suffering, and future care." },
    { name: "Slip & Fall / Premises Liability", hook: "Property owners have a legal duty to keep their premises safe. When they fail — negligent security, unsafe conditions, code violations — Darwin holds them accountable and has won countless premises liability cases." },
    { name: "Medical Malpractice", hook: "Medical errors — surgical mistakes, misdiagnosis, medication errors — require specialized legal knowledge. Darwin has the experience to take on hospitals and insurance companies." },
    { name: "Wrongful Death", hook: "Losing a loved one to someone else's negligence is devastating. Darwin handles these cases with the care, urgency, and aggression they require — and fights for every dollar your family is owed." },
    { name: "Other / Not Sure", hook: "Not every accident fits neatly into a category — and that's OK. Darwin has seen just about everything in 20 years of practice. Whatever happened to you, it's worth a free conversation to find out if you have a case." },
  ];

  const injuryData = injuries.find(i => i.name === (path === "wc" ? selectedInjury : selectedPiInjury));
  const industryData = industries.find(i => i.name === selectedIndustry);
  const caseTypeData = caseTypes.find(c => c.name === selectedCaseType);

  // Step titles
  const getStepTitle = () => {
    if (path === "wc") {
      if (step === 1) return { num: "01", label: "What's Hurting?" };
      if (step === 2) return { num: "02", label: "Where You Got Hurt?" };
      if (step === 3) return { num: "03", label: "Do You Qualify?" };
    } else if (path === "pi") {
      if (step === 1) return { num: "01", label: "What Happened?" };
      if (step === 2) return { num: "02", label: "What's Hurting?" };
      if (step === 3) return { num: "03", label: "Was Someone Else at Fault?" };
    }
    return { num: "00", label: "" };
  };

  return (
    <section
      id="quiz-section"
      className="relative pt-20 md:pt-32 pb-48 md:pb-72 px-6 scroll-mt-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--bg-off)) 0%, hsl(var(--bg-off)) 40%, hsl(220 30% 75%) 60%, hsl(220 45% 40%) 75%, hsl(220 58% 14%) 88%, hsl(220 60% 12%) 95%, hsl(220 60% 12%) 100%)",
        marginBottom: "-4px",
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="inline-block bg-navy/10 border-2 border-navy/30 rounded-full px-6 py-2.5 font-dm text-xs text-navy tracking-[3px] uppercase font-bold">
              60-SECOND CASE CHECK
            </span>
          </div>
          <h2 className="font-bebas text-text-dark text-6xl md:text-8xl lg:text-[110px] tracking-wider leading-[0.9] text-center mb-4">
            Let's See What<br />You're Owed.
          </h2>
          <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-2xl mx-auto mb-14">
            Answer 3 questions.<br />
            I will tell you if you have a case and what it's worth.
          </p>
        </ScrollReveal>

        {/* Quiz container — letter/paper aesthetic */}
        <div
          className="relative rounded-2xl min-h-[600px]"
          style={{
            background: "linear-gradient(180deg, #fdfcf9 0%, #fbf9f4 100%)",
            boxShadow: "0 25px 60px -15px rgba(30, 41, 59, 0.18), 0 8px 20px -8px rgba(30, 41, 59, 0.08), 0 0 0 1px rgba(30, 41, 59, 0.04)",
          }}
          ref={contentRef}
        >
          {/* Paper texture overlay inside card */}
          <div
            className="absolute inset-0 rounded-2xl opacity-[0.35] pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Left navy accent stripe — brand tie-in, letter ribbon feel */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-navy rounded-l-2xl" />
          <div className="absolute left-0 top-0 bottom-0 w-[3px] ml-1.5 bg-cta/40 rounded-l-2xl" />

          {/* Top tape decorations */}
          <div className="absolute -top-3 left-12 w-20 h-6 bg-cta/15 border border-cta/20 rounded-sm rotate-[-3deg] pointer-events-none" style={{ boxShadow: "0 2px 4px rgba(30, 41, 59, 0.1)" }} />
          <div className="absolute -top-3 right-12 w-20 h-6 bg-cta/15 border border-cta/20 rounded-sm rotate-[2deg] pointer-events-none" style={{ boxShadow: "0 2px 4px rgba(30, 41, 59, 0.1)" }} />

          {/* Content wrapper */}
          <div className="relative z-10 p-8 md:p-14">
            {/* Empty state — haven't picked path yet */}
            {path === null && (
              <div className="flex flex-col items-center justify-center min-h-[500px] text-center">
                <p className="font-serif italic text-text-dark text-3xl md:text-4xl mb-2">Before you sign anything,</p>
                <p className="font-dm text-text-body text-base md:text-lg max-w-xl mb-10 leading-relaxed">
                  I'll keep this simple. Tell me what happened — and I'll tell you<br className="hidden md:block" />
                  if you have a case and what it's worth. Free. No obligation.
                </p>

                <span className="font-dm text-xs text-text-muted tracking-[3px] uppercase mb-5">Which one happened to you?</span>

                <div className="flex flex-row gap-3 md:gap-4 w-full max-w-2xl">
                  <button
                    onClick={() => { setPath("wc"); setStep(1); scrollToContent(); }}
                    className="cta-btn-primary !py-4 !px-4 md:!py-5 md:!px-6 !text-xs md:!text-sm flex-1 whitespace-nowrap"
                  >
                    I GOT HURT AT WORK →
                  </button>
                  <button
                    onClick={() => { setPath("pi"); setStep(1); scrollToContent(); }}
                    className="cta-btn-outline !py-4 !px-4 md:!py-5 md:!px-6 !text-xs md:!text-sm flex-1 whitespace-nowrap"
                  >
                    I WAS IN AN ACCIDENT →
                  </button>
                </div>

                <p className="font-serif italic text-text-dark text-2xl md:text-3xl mt-10" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Darwin F. Johnson
                </p>
                <p className="font-dm text-xs text-text-muted mt-1">Founder & Managing Attorney</p>
              </div>
            )}

          {/* Active quiz */}
          {path !== null && (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-dm text-xs text-cta tracking-[2px] uppercase font-bold">
                      STEP {getStepTitle().num} OF 03
                    </span>
                    <span className="font-dm text-xs text-text-muted">
                      {path === "wc" ? "Workers' Compensation" : "Personal Injury"}
                    </span>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="font-dm text-xs text-text-muted hover:text-text-dark transition-colors underline"
                  >
                    Start over
                  </button>
                </div>
                <div className="w-full h-1.5 bg-card-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-cta rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${path}-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* ─── WORKERS' COMP PATH ─── */}
                  {path === "wc" && step === 1 && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wider leading-[0.95] mb-2">What's Hurting?</h3>
                      <p className="font-dm text-base text-text-body mb-8">Tap the injury that matches your situation.</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {injuries.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              setSelectedInjury(item.name);
                              setTimeout(() => { setStep(2); scrollToContent(); }, 300);
                            }}
                            className={`text-left px-5 py-4 rounded-lg border-2 transition-all duration-300 ${
                              selectedInjury === item.name
                                ? "bg-cta border-cta text-white shadow-[0_8px_30px_rgba(232,119,46,0.3)] scale-[1.02]"
                                : "bg-white border-card-border text-text-dark hover:border-cta hover:-translate-y-0.5"
                            }`}
                          >
                            <span className="font-dm text-sm font-bold">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {path === "wc" && step === 2 && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wider leading-[0.95] mb-2">Where You Got Hurt?</h3>
                      <p className="font-dm text-base text-text-body mb-8">Tap your industry.</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {industries.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              setSelectedIndustry(item.name);
                              setTimeout(() => { setStep(3); scrollToContent(); }, 300);
                            }}
                            className={`text-left px-5 py-4 rounded-lg border-2 transition-all duration-300 ${
                              selectedIndustry === item.name
                                ? "bg-cta border-cta text-white shadow-[0_8px_30px_rgba(232,119,46,0.3)] scale-[1.02]"
                                : "bg-white border-card-border text-text-dark hover:border-cta hover:-translate-y-0.5"
                            }`}
                          >
                            <span className="font-dm text-sm font-bold">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {path === "wc" && step === 3 && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wider leading-[0.95] mb-2">Do You Qualify?</h3>
                      <p className="font-dm text-base text-text-body mb-8">Last step. Check if you meet Georgia's workers' comp requirements.</p>
                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-off-white rounded-lg border border-card-border p-5">
                          <p className="font-dm text-xs text-cta tracking-[2px] uppercase font-bold mb-3">ON-THE-JOB INJURY</p>
                          {["Injury occurred while working", "Injured due to the job you perform", "Includes injuries during work travel"].map((t, i) => (
                            <p key={i} className="font-dm text-sm text-text-body mb-2 flex items-start gap-2"><span className="text-cta font-bold">✓</span> {t}</p>
                          ))}
                        </div>
                        <div className="bg-off-white rounded-lg border border-card-border p-5">
                          <p className="font-dm text-xs text-cta tracking-[2px] uppercase font-bold mb-3">EMPLOYMENT STATUS</p>
                          {["You are a legal employee (not contractor)", "Your employer has 3+ employees", "Full-time, part-time, or seasonal"].map((t, i) => (
                            <p key={i} className="font-dm text-sm text-text-body mb-2 flex items-start gap-2"><span className="text-cta font-bold">✓</span> {t}</p>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => { setWcQualified("yes"); setStep(4); scrollToContent(); }}
                          className="cta-btn-primary !py-4 !px-6 !text-base flex-1"
                        >
                          YES — I MEET THESE
                        </button>
                        <button
                          onClick={() => { setWcQualified("no"); setStep(4); scrollToContent(); }}
                          className="cta-btn-outline !py-4 !px-6 !text-base flex-1"
                        >
                          NOT QUITE / I'M NOT SURE
                        </button>
                      </div>
                      <div className="mt-5 bg-off-white rounded-lg border border-cta/20 p-4 flex items-start gap-3">
                        <span className="text-cta text-lg flex-shrink-0 mt-0.5">💡</span>
                        <p className="font-dm text-sm text-text-body leading-relaxed">
                          <span className="font-bold text-text-dark">There's no wrong answer.</span> If you don't meet Workers' Comp criteria, you may still qualify for a Personal Injury claim. Darwin will help you figure out the right path — for free.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ─── WC RESULT — QUALIFIED ─── */}
                  {path === "wc" && step === 4 && wcQualified === "yes" && (
                    <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden -mx-2 md:-mx-4">
                      <img src={djMonogram} alt="" loading="lazy" decoding="async" className="absolute -top-10 -right-10 w-[280px] h-auto opacity-[0.06] pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="w-10 h-10 rounded-full bg-cta flex items-center justify-center">
                            <span className="text-white text-xl">✓</span>
                          </span>
                          <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">YOUR PERSONALIZED RESULT</span>
                        </div>
                        <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wider leading-[0.95] mb-6">
                          You Have a Case.<br />Darwin Can Help.
                        </h4>
                        <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                          <p className="font-dm text-sm text-white/60 mb-3">Your situation:</p>
                          <div className="space-y-2">
                            <p className="font-dm text-white"><span className="text-cta font-bold">Injury:</span> {selectedInjury}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">Workplace:</span> {selectedIndustry}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">Status:</span> Qualified for Workers' Comp</p>
                          </div>
                        </div>
                        {injuryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">{injuryData.hook}</p>}
                        {industryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{industryData.hook}</p>}
                        <div className="border-t border-white/10 pt-6 mb-6">
                          <p className="font-dm text-base text-white/80 leading-relaxed">
                            In 20 years, Darwin has recovered <span className="text-cta font-bold">$250 million+</span> for Georgia workers across <span className="text-cta font-bold">10,000+</span> cases. He personally reviews every new submission — and picks up the phone himself when you call.
                          </p>
                        </div>
                        <button onClick={scrollToForm} className="cta-btn-primary !py-4 !px-8 !text-base">
                          GET MY FREE CASE REVIEW →
                        </button>
                        <p className="font-dm text-xs text-white/30 mt-3">Free. No obligation. 30 seconds. No fee unless we win.</p>
                      </div>
                    </div>
                  )}

                  {/* ─── WC RESULT — NOT QUALIFIED ─── */}
                  {path === "wc" && step === 4 && wcQualified === "no" && (
                    <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden -mx-2 md:-mx-4">
                      <img src={djMonogram} alt="" loading="lazy" decoding="async" className="absolute -top-10 -right-10 w-[280px] h-auto opacity-[0.06] pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="w-10 h-10 rounded-full bg-cta flex items-center justify-center">
                            <span className="text-white text-xl">!</span>
                          </span>
                          <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">YOU MAY HAVE A PERSONAL INJURY CASE</span>
                        </div>
                        <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wider leading-[0.95] mb-6">
                          Don't Walk Away.<br />You Still Have Options.
                        </h4>
                        <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                          <p className="font-dm text-sm text-white/60 mb-3">Your situation:</p>
                          <div className="space-y-2">
                            <p className="font-dm text-white"><span className="text-cta font-bold">Injury:</span> {selectedInjury}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">Workplace:</span> {selectedIndustry}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">Status:</span> May not qualify for Workers' Comp</p>
                          </div>
                        </div>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">
                          Workers' comp has strict requirements — but that doesn't mean you're out of options. Darwin also handles <span className="text-white font-bold">Personal Injury</span> cases, which cover injuries caused by someone else's negligence or wrongdoing.
                        </p>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">
                          Based on your <span className="text-cta font-bold">{selectedInjury?.toLowerCase()}</span> at a <span className="text-cta font-bold">{selectedIndustry?.toLowerCase()}</span> workplace, you may have a claim if a third party was involved — defective equipment, a subcontractor, unsafe property, or a motor vehicle accident on the job.
                        </p>
                        {injuryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{injuryData.hook}</p>}
                        <div className="border-t border-white/10 pt-6 mb-6">
                          <p className="font-dm text-base text-white/80 leading-relaxed">
                            Darwin handles <span className="text-white font-bold">both workers' comp AND personal injury</span> under one roof. He'll look at what happened and tell you exactly which path fits — free, no obligation.
                          </p>
                        </div>
                        <button onClick={scrollToForm} className="cta-btn-primary !py-4 !px-8 !text-base">
                          GET MY FREE CASE REVIEW →
                        </button>
                        <p className="font-dm text-xs text-white/30 mt-3">Darwin reviews every submission personally.</p>
                      </div>
                    </div>
                  )}

                  {/* ─── PERSONAL INJURY PATH ─── */}
                  {path === "pi" && step === 1 && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wider leading-[0.95] mb-2">What Happened?</h3>
                      <p className="font-dm text-base text-text-body mb-8">Tap the accident or situation that matches yours.</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {caseTypes.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              setSelectedCaseType(item.name);
                              setTimeout(() => { setStep(2); scrollToContent(); }, 300);
                            }}
                            className={`text-left px-5 py-4 rounded-lg border-2 transition-all duration-300 ${
                              selectedCaseType === item.name
                                ? "bg-cta border-cta text-white shadow-[0_8px_30px_rgba(232,119,46,0.3)] scale-[1.02]"
                                : "bg-white border-card-border text-text-dark hover:border-cta hover:-translate-y-0.5"
                            }`}
                          >
                            <span className="font-dm text-sm font-bold">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {path === "pi" && step === 2 && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wider leading-[0.95] mb-2">What's Hurting?</h3>
                      <p className="font-dm text-base text-text-body mb-8">Tap your primary injury.</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {injuries.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              setSelectedPiInjury(item.name);
                              setTimeout(() => { setStep(3); scrollToContent(); }, 300);
                            }}
                            className={`text-left px-5 py-4 rounded-lg border-2 transition-all duration-300 ${
                              selectedPiInjury === item.name
                                ? "bg-cta border-cta text-white shadow-[0_8px_30px_rgba(232,119,46,0.3)] scale-[1.02]"
                                : "bg-white border-card-border text-text-dark hover:border-cta hover:-translate-y-0.5"
                            }`}
                          >
                            <span className="font-dm text-sm font-bold">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {path === "pi" && step === 3 && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wider leading-[0.95] mb-2">Was Someone Else at Fault?</h3>
                      <p className="font-dm text-base text-text-body mb-8">
                        Personal injury cases usually require proving someone else's negligence caused your injury. <span className="font-bold text-text-dark">There's no wrong answer here</span> — Darwin will help you figure it out.
                      </p>
                      <div className="bg-off-white rounded-lg border border-card-border p-6 mb-8">
                        <p className="font-dm text-sm text-text-body leading-relaxed mb-3">
                          <span className="font-bold text-text-dark">Examples of "someone else's fault":</span>
                        </p>
                        <ul className="space-y-2 font-dm text-sm text-text-body">
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> Another driver caused the accident</li>
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> A property owner failed to maintain their premises</li>
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> A doctor made a surgical or diagnostic error</li>
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> A company sold defective equipment</li>
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> A business had negligent security</li>
                        </ul>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => { setThirdPartyFault("yes"); setStep(4); scrollToContent(); }}
                          className="cta-btn-primary !py-4 !px-6 !text-base flex-1"
                        >
                          YES — SOMEONE ELSE WAS AT FAULT
                        </button>
                        <button
                          onClick={() => { setThirdPartyFault("no"); setStep(4); scrollToContent(); }}
                          className="cta-btn-outline !py-4 !px-6 !text-base flex-1"
                        >
                          I'M NOT SURE
                        </button>
                      </div>
                      <div className="mt-5 bg-off-white rounded-lg border border-cta/20 p-4 flex items-start gap-3">
                        <span className="text-cta text-lg flex-shrink-0 mt-0.5">💡</span>
                        <p className="font-dm text-sm text-text-body leading-relaxed">
                          <span className="font-bold text-text-dark">Not sure?</span> That's totally normal. Fault isn't always obvious — and Darwin has 20 years of experience finding liable parties people never knew existed. Either answer leads to a free case review.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ─── PI RESULT — QUALIFIED ─── */}
                  {path === "pi" && step === 4 && thirdPartyFault === "yes" && (
                    <div className="-mx-2 md:-mx-4">
                      <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden mb-6">
                        <img src={djMonogram} alt="" loading="lazy" decoding="async" className="absolute -top-10 -right-10 w-[280px] h-auto opacity-[0.06] pointer-events-none" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-5">
                            <span className="w-10 h-10 rounded-full bg-cta flex items-center justify-center">
                              <span className="text-white text-xl">✓</span>
                            </span>
                            <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">YOUR PERSONALIZED RESULT</span>
                          </div>
                          <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wider leading-[0.95] mb-6">
                            You Have a Case.<br />Don't Sign Anything Yet.
                          </h4>
                          <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                            <p className="font-dm text-sm text-white/60 mb-3">Your situation:</p>
                            <div className="space-y-2">
                              <p className="font-dm text-white"><span className="text-cta font-bold">Accident:</span> {selectedCaseType}</p>
                              <p className="font-dm text-white"><span className="text-cta font-bold">Injury:</span> {selectedPiInjury}</p>
                              <p className="font-dm text-white"><span className="text-cta font-bold">Status:</span> Third-party liability confirmed</p>
                            </div>
                          </div>
                          {caseTypeData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">{caseTypeData.hook}</p>}
                          {injuryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{injuryData.hook}</p>}

                          {/* Urgency — 2 year statute */}
                          <div className="bg-cta/10 border border-cta/20 rounded-lg p-5 mb-6">
                            <p className="font-dm text-sm text-cta font-bold tracking-wider mb-1">⏱ GEORGIA GIVES YOU 2 YEARS</p>
                            <p className="font-dm text-sm text-white/80">Miss the deadline and you lose your right to file — permanently. Every day you wait, the insurance company's lawyers get stronger.</p>
                          </div>

                          <div className="border-t border-white/10 pt-6">
                            <p className="font-dm text-base text-white/80 leading-relaxed">
                              Most injury victims have no idea what they're actually owed under Georgia law. Keep reading — we'll show you <span className="text-white font-bold">exactly what your case could be worth</span> →
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Damages block — the ONE CTA for PI qualified */}
                      <DamagesBlock
                        onCtaClick={scrollToForm}
                        ctaText="GET MY FREE CASE REVIEW →"
                        showMonogram={true}
                      />
                    </div>
                  )}

                  {/* ─── PI RESULT — NOT SURE ─── */}
                  {path === "pi" && step === 4 && thirdPartyFault === "no" && (
                    <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden -mx-2 md:-mx-4">
                      <img src={djMonogram} alt="" loading="lazy" decoding="async" className="absolute -top-10 -right-10 w-[280px] h-auto opacity-[0.06] pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="w-10 h-10 rounded-full bg-cta flex items-center justify-center">
                            <span className="text-white text-xl">?</span>
                          </span>
                          <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">LET DARWIN FIGURE IT OUT</span>
                        </div>
                        <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wider leading-[0.95] mb-6">
                          Don't Rule It Out.<br />You Might Still Have a Case.
                        </h4>
                        <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                          <p className="font-dm text-sm text-white/60 mb-3">Your situation:</p>
                          <div className="space-y-2">
                            <p className="font-dm text-white"><span className="text-cta font-bold">Accident:</span> {selectedCaseType}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">Injury:</span> {selectedPiInjury}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">Status:</span> Third-party liability unclear</p>
                          </div>
                        </div>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">
                          You might not realize it, but fault isn't always obvious. A manufacturer could be liable for defective equipment. A property owner might have failed their duty to maintain safe conditions. A business might be responsible for negligent security.
                        </p>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">
                          Darwin has spent 20 years finding liable parties people never knew existed — and recovering millions for clients who thought they had no case.
                        </p>
                        {caseTypeData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{caseTypeData.hook}</p>}

                        <div className="border-t border-white/10 pt-6 mb-6">
                          <p className="font-dm text-base text-white/80 leading-relaxed">
                            One free consultation could reveal options you didn't know you had. Takes 30 seconds. <span className="text-white font-bold">Worst case — you learn exactly where you stand.</span>
                          </p>
                        </div>
                        <button onClick={scrollToForm} className="cta-btn-primary !py-4 !px-8 !text-base">
                          GET MY FREE CASE REVIEW →
                        </button>
                        <p className="font-dm text-xs text-white/30 mt-3">Free. No obligation. Takes 30 seconds.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Back button — only on steps 2, 3 */}
              {step > 1 && step < 4 && (
                <div className="flex justify-start mt-8 pt-6 border-t border-card-border">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 font-dm text-sm text-text-muted hover:text-text-dark transition-colors group"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span>Back</span>
                  </button>
                </div>
              )}
            </>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   5. STATS + EMPLOYER LOGOS
   ═══════════════════════════════════════════════ */
const StatsSection = () => (
  <section
    className="relative pt-24 md:pt-40 pb-24 md:pb-36 px-6 overflow-hidden"
    style={{
      background: "linear-gradient(180deg, hsl(220 60% 12%) 0%, hsl(220 55% 18%) 25%, hsl(220 45% 35%) 45%, hsl(220 25% 82%) 70%, hsl(0 0% 100%) 78%, hsl(0 0% 100%) 100%)",
      marginTop: "-2px",
    }}
  >
    {/* Radial decorative shape — subtle orange glow */}
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-[900px] h-[900px] rounded-full pointer-events-none opacity-[0.15]"
      style={{
        background: "radial-gradient(circle, hsl(var(--cta)) 0%, transparent 60%)",
      }}
    />

    <div className="relative z-10 max-w-6xl mx-auto text-center">
      <ScrollReveal>
        <div className="inline-block mb-6">
          <span className="inline-block bg-cta/15 border-2 border-cta/40 rounded-full px-6 py-2.5 font-dm text-xs text-cta tracking-[3px] uppercase font-bold">
            YOUR RECOVERY STARTS HERE
          </span>
        </div>
        <h2 className="font-bebas text-white text-6xl md:text-8xl lg:text-[110px] tracking-wider leading-[0.9] mb-6">
          RECOVER 10X BIGGER,<br />FASTER, FULLY.
        </h2>
        <p className="font-dm text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
          <span className="md:whitespace-nowrap">Darwin's clients typically settle for <span className="text-cta font-bold">5-10x more</span> than insurance's first offer.</span><br className="hidden md:block" />
          Skip the runaround, the denied claims, and the sleepless nights.<br className="hidden md:block" />
          <span className="text-white font-bold">Your only job is to recover.</span>
        </p>
      </ScrollReveal>

      {/* Justice Scale — animated transformation */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-20 relative">
        <JusticeScale />
      </div>

      {/* Stat cards */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-16 relative z-20">
        <StaggerContainer stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { to: 250, prefix: "$", suffix: "M+", title: "Recovered for Clients", desc: "Every dollar fought for personally by Darwin." },
            { to: 10000, suffix: "+", title: "Lives Changed", desc: "Real people. Real families. Real recoveries.", separator: true },
            { to: 20, suffix: "+", title: "Years Showing Up", desc: "Two decades of being there when it matters most." },
            { to: 15, suffix: "+", title: "Industries Served", desc: "From the factory floor to the hospital ward — we know your world." },
          ].map((s, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl border border-card-border p-7 md:p-9 h-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] text-left">
                <p className="font-dm font-bold text-base md:text-lg text-text-dark mb-3">{s.title}</p>
                <div className="w-full h-[2px] bg-gradient-to-r from-cta via-cta/60 to-transparent mb-5" />
                <div className="font-bebas text-5xl md:text-6xl text-text-dark tracking-wider">
                  <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} separator={s.separator} decimals={0} />
                </div>
                <p className="font-dm text-sm md:text-base text-text-muted mt-4 leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Employer logos — colored, on cream bg */}
      <div className="mt-20">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-block bg-navy/10 border-2 border-navy/30 rounded-full px-6 py-2.5 font-dm text-xs text-navy tracking-[3px] uppercase font-bold">
              EMPLOYERS WE'VE TAKEN ON — AND WON
            </span>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto overflow-hidden relative mb-8"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex items-center gap-20 animate-marquee" style={{ width: "max-content" }}>
            {[...Array(4)].flatMap(() => row1Logos).map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} loading="lazy" decoding="async" className={`${logo.h} w-auto object-contain flex-shrink-0`} />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden relative mb-8"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex items-center gap-20 animate-marquee-reverse" style={{ width: "max-content" }}>
            {[...Array(4)].flatMap(() => row2Logos).map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} loading="lazy" decoding="async" className={`${logo.h} w-auto object-contain flex-shrink-0`} />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden relative mt-12"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex items-center gap-20 animate-marquee" style={{ width: "max-content" }}>
            {[...Array(4)].flatMap(() => row3Logos).map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} loading="lazy" decoding="async" className={`${logo.h} w-auto object-contain flex-shrink-0`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   6. CASE RESULTS — KingKong case study grid
   ═══════════════════════════════════════════════ */
const CaseResults = () => {
  const cases = [
    { amount: "$4,200,000", type: "CATASTROPHIC\nWORKERS' COMP", industry: "Construction", img: caseConstruction },
    { amount: "$2,400,000", type: "CATASTROPHIC\nWORKERS' COMP", industry: "Industrial", img: caseFactory },
    { amount: "$1,200,000", type: "CATASTROPHIC\nWORKERS' COMP", industry: "Warehouse", img: caseWarehouse },
    { amount: "$850,000", type: "WORKERS' COMP\nBACK INJURY", industry: "Trucking", img: caseTrucking },
    { amount: "$750,000", type: "WORKPLACE\nHEAD INJURY", industry: "Factory", img: caseFactory },
    { amount: "$620,000", type: "WORKERS' COMP\nSHOULDER INJURY", industry: "Warehouse", img: caseWarehouse },
    { amount: "$480,000", type: "PERSONAL INJURY\nCAR ACCIDENT", industry: "Auto Accident", img: caseCarAccident },
    { amount: "$350,000", type: "WORKERS' COMP\nKNEE INJURY", industry: "Healthcare", img: caseMedical },
    { amount: "$275,000", type: "TRUCK ACCIDENT\nSETTLEMENT", industry: "Trucking", img: caseTrucking },
    { amount: "$180,000", type: "DENIAL\nOVERTURNED", industry: "Healthcare", img: caseMedical },
    { amount: "$150,000", type: "WORKPLACE\nNECK INJURY", industry: "Retail", img: caseConstruction },
    { amount: "$95,000", type: "PERSONAL INJURY\nSETTLEMENT", industry: "Motorcycle", img: caseCarAccident },
  ];

  return (
    <section className="bg-dark py-20 md:py-32">
      <div className="px-6 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="inline-block bg-cta/15 border-2 border-cta/40 rounded-full px-6 py-2.5 font-dm text-xs text-cta tracking-[3px] uppercase font-bold">
              CASE RESULTS
            </span>
          </div>
          <h2 className="font-bebas text-white text-6xl md:text-8xl lg:text-[110px] tracking-wider leading-[0.9] text-center mb-4">
            Become Our Next<br />Success Story.
          </h2>
          <p className="font-dm text-lg md:text-xl text-white/50 text-center max-w-2xl mx-auto mb-14">
            Over $250 million recovered for Georgia workers and accident victims.
          </p>
        </ScrollReveal>
      </div>

      {/* Auto-sliding cards — full width, KingKong style with images */}
      <div className="relative overflow-hidden">
        <div className="flex gap-5 animate-marquee py-2" style={{ width: "max-content" }}>
          {[...cases, ...cases].map((c, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] h-[400px] md:h-[450px] rounded-2xl overflow-hidden card-lift cursor-default relative group">
              {/* Background image */}
              <img
                src={c.img}
                alt={c.industry}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              {/* Top content */}
              <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                <div>
                  <p className="font-bebas text-white/90 text-xl tracking-wider whitespace-pre-line leading-tight">{c.type}</p>
                  <p className="font-dm text-white/50 text-xs mt-2 tracking-wider uppercase">{c.industry}</p>
                </div>

                {/* Bottom — amount */}
                <div>
                  <p className="font-bebas text-white text-5xl md:text-6xl tracking-wider drop-shadow-lg">{c.amount}</p>
                  <div className="w-12 h-[3px] bg-cta mt-3 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 max-w-6xl mx-auto">
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-xl">
              GET MY FREE CASE REVIEW →
            </button>
            <div className="flex items-center justify-center gap-3 mt-5">
              <span className="text-cta text-xl tracking-[4px]">★★★★★</span>
              <span className="font-dm text-sm text-white/40">4.9 stars · 10,000+ cases handled</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════
   7.5 DARWIN GUARANTEE — Godfather offer / risk reversal
   ═══════════════════════════════════════════════ */
const DarwinGuarantee = () => {
  const highlight = "bg-cta/25 box-decoration-clone px-1.5 font-bold text-text-dark";
  const reasons = [
    {
      title: "20+ years. $250M+ recovered. He's the real deal.",
      body: [
        <>Darwin's won <span className={highlight}>over $250 million across 10,000+ Georgia cases</span>.</>,
        <>He's gone toe-to-toe with FedEx, UPS, Delta, Walmart, Home Depot — and beaten them.</>,
        <>When your case lands on his desk, he's already seen this movie a thousand times.</>,
      ],
    },
    {
      title: "Zero out of pocket. Not a dime. Ever.",
      body: [
        <>No retainer. No hourly rate. No hidden fees.</>,
        <><span className={highlight}>Darwin only gets paid when you get paid.</span></>,
        <>And if he doesn't win, you owe him absolutely nothing.</>,
        <>He eats the whole cost himself. That's how sure he is.</>,
      ],
    },
    {
      title: "He'll even front your medical bills.",
      body: [
        <>Need an MRI to prove your injury? A specialist visit?</>,
        <><span className={highlight}>Darwin pays for it upfront, out of his own pocket.</span></>,
        <>So insurance can't say "it's not documented enough."</>,
        <>Try finding another Georgia lawyer who'll do that.</>,
      ],
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Top break — visual separation from WhyDarwin off-white section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cta to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            {/* Warning-style badge — DR attention hook */}
            <div className="inline-block mb-8">
              <span className="inline-block bg-cta rounded-full px-6 py-3 font-dm text-xs md:text-sm text-white tracking-[3px] uppercase font-extrabold shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                ⚠️ Read This Before You Call Another Lawyer
              </span>
            </div>

            {/* Massive KingKong headline */}
            <h2 className="font-bebas text-text-dark text-6xl md:text-8xl lg:text-[110px] tracking-wider leading-[0.9] mb-10">
              You Pay Nothing<br />Unless We Win.<br /><span className="text-cta">Not One Dime.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Left-aligned paragraphs — match numbered reasons column width */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="font-dm text-xl md:text-2xl text-text-body leading-relaxed space-y-7 mb-12">
              <p className="md:whitespace-nowrap">
                <span className="bg-cta/25 box-decoration-clone px-2 py-1 font-bold text-text-dark">
                  Sound too good to be true? Every injury lawyer in Georgia says it.
                </span>
              </p>
              <p className="text-text-dark font-bold">Darwin's the one who actually backs it up.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="font-dm text-xl md:text-2xl text-text-body leading-relaxed space-y-7 mb-2 italic">
              <p>Here's how he can afford to make that promise</p>
              <p>to every injured Georgia worker who walks through his door:</p>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 numbered reasons — KingKong side-number style */}
        <StaggerContainer stagger={0.12} className="max-w-3xl mx-auto mb-14">
          {reasons.map((r, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-6 md:gap-10 py-8 md:py-10 border-b border-gray-200 last:border-b-0">
                {/* Side number */}
                <span className="font-bebas text-cta text-8xl md:text-9xl leading-[0.8] tracking-tight shrink-0 w-20 md:w-28">
                  {i + 1}
                </span>
                {/* Copy */}
                <div className="flex-1 pt-2">
                  <h3 className="font-dm font-extrabold text-text-dark text-2xl md:text-3xl mb-4 leading-tight">
                    {r.title}
                  </h3>
                  <div className="font-dm text-xl md:text-2xl text-text-body leading-relaxed space-y-7">
                    {r.body.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 3-stat row */}
        <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-4xl mx-auto mb-14">
          <StaggerItem>
            <div className="text-center md:px-4">
              <p className="font-bebas text-cta text-7xl md:text-8xl tracking-wider leading-none mb-3">$0</p>
              <p className="font-dm text-xs md:text-sm text-text-muted uppercase tracking-[2px] font-bold">to start your case</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center md:px-4 md:border-x md:border-gray-200">
              <p className="font-bebas text-cta text-7xl md:text-8xl tracking-wider leading-none mb-3">$0</p>
              <p className="font-dm text-xs md:text-sm text-text-muted uppercase tracking-[2px] font-bold">if we don't win</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center md:px-4">
              <p className="font-bebas text-cta text-5xl md:text-6xl tracking-wider leading-none mb-3 pt-2 md:pt-4">Advanced</p>
              <p className="font-dm text-xs md:text-sm text-text-muted uppercase tracking-[2px] font-bold">medical costs if needed</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* CTA with urgency */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <button onClick={scrollToForm} className="cta-btn-primary cta-pulse !py-6 !px-12 !text-xl">
              GET MY FREE CASE REVIEW — NO OBLIGATION →
            </button>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="text-cta text-xl tracking-[4px]">★★★★★</span>
              <span className="font-dm text-sm text-text-muted font-bold">4.9 stars · 10,000+ Georgia clients served</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   8. TESTIMONIALS
   ═══════════════════════════════════════════════ */
const Testimonials = () => {
  const testimonials = [
    { result: "Denied by insurance. Settled for $180K.", quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him. He responds to your calls immediately.", name: "Nicole F.", role: "Workers' Comp Client", video: "", thumbnail: "" },
    { result: "Insurance offered $12K. Darwin got $95K.", quote: "He was very straightforward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M.", role: "Personal Injury Client", video: "", thumbnail: "" },
    { result: "Fired after reporting injury — Darwin stepped in.", quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this that will fight for your rights!", name: "Jeremy H.", role: "Workers' Comp Client", video: "", thumbnail: "" },
    { result: "Best attorney in Georgia. Period.", quote: "Attorney Darwin Johnson is the best! I would tell anybody to give my attorney the chance to work on your case you will be satisfied with the results.", name: "Janice C.", role: "Workers' Comp Client", video: "", thumbnail: "" },
    { result: "Heart, compassion, and results.", quote: "Attorney Johnson has a heart. He and his staff nurtured me through a very difficult time and achieved a fair settlement expediently.", name: "Sonya W.", role: "Workers' Comp Client", video: "", thumbnail: "" },
    { result: "First-time claim. Darwin handled everything.", quote: "Never had to deal with a worker's compensation claim before. Darwin got results in my brother-in-law's time of need. Did a great job.", name: "James J.", role: "Workers' Comp Client", video: "", thumbnail: "" },
    { result: "Bold. Aggressive. Got results.", quote: "Darwin is a bold man, the Business Man! Darwin Law Firm is the best! I am very pleased with my settlement! It was worth the wait!", name: "Former Client", role: "Workers' Comp Client", video: "", thumbnail: "" },
    { result: "Professional, friendly, the best.", quote: "The law office is professional, and friendly. Matt, Attorney Berman, and Yohandra are the best staff that I have ever had the chance to work with.", name: "Cheryl R.", role: "Workers' Comp Client", video: "", thumbnail: "" },
  ];

  const [active, setActive] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const t = testimonials[active];

  const openVideo = () => {
    setVideoModalOpen(true);
    document.body.style.overflow = "hidden";
    const header = document.querySelector("header");
    if (header) header.style.display = "none";
  };

  const closeVideo = () => {
    setVideoModalOpen(false);
    document.body.style.overflow = "";
    const header = document.querySelector("header");
    if (header) header.style.display = "";
  };

  return (
    <section className="bg-dark pt-0 pb-0">
      {/* Featured testimonial — full width video + quote overlay */}
      <ScrollReveal>
        <div className="relative overflow-hidden bg-dark cursor-pointer group" onClick={openVideo}>
          {/* Video / placeholder — full width, no rounded corners */}
          <div className="aspect-[21/9] md:aspect-[21/9] bg-gradient-to-br from-navy-dark to-dark flex items-center justify-center relative">
            {/* Active testimonial thumbnail */}
            <AnimatePresence mode="wait">
              {t.thumbnail && (
                <motion.img
                  key={active}
                  src={t.thumbnail}
                  alt={`${t.name} testimonial`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
            {/* Placeholder — shown when no thumbnail */}
            {!t.thumbnail && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-dm text-white/5 text-sm">Video Placeholder — Drop testimonial videos here</p>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

            {/* Play button */}
            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cta/90 flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform"
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Quote overlay — bottom left */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-3xl"
                >
                  <p className="font-serif italic text-white text-xl md:text-3xl leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                  <p className="font-dm text-cta font-bold text-sm md:text-base tracking-wider">
                    {t.name}, <span className="text-white/50 font-normal">{t.role}</span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Thumbnail row — auto-sliding marquee */}
      <div className="relative overflow-hidden">
        <div className="flex gap-0 animate-marquee" style={{ width: "max-content", animationDuration: "40s" }}>
          {[...testimonials, ...testimonials].map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i % testimonials.length)}
              className={`flex-shrink-0 relative overflow-hidden transition-all duration-300 ${
                active === i % testimonials.length ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              <div className={`w-[160px] md:w-[220px] h-[100px] md:h-[130px] flex flex-col items-start justify-end p-4 relative overflow-hidden ${
                !item.thumbnail ? ["bg-gradient-to-br from-navy to-navy-dark",
                 "bg-gradient-to-br from-navy-dark to-dark",
                 "bg-gradient-to-br from-slate-700 to-slate-900",
                 "bg-gradient-to-br from-navy to-slate-800",
                ][i % 4] : ""
              }`}>
                {/* Thumbnail image */}
                {item.thumbnail && (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={`${item.name} testimonial`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </>
                )}

                {/* Active indicator */}
                {active === i % testimonials.length && <div className="absolute top-0 left-0 right-0 h-[3px] bg-cta z-10" />}

                {/* Play icon */}
                <div className="absolute top-3 right-3 z-10">
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Name */}
                <p className="font-bebas text-cta text-lg md:text-xl tracking-wider leading-none uppercase relative z-10">{item.name}</p>
                <p className="font-dm text-white/70 text-[10px] mt-1 relative z-10">{item.result.split(".")[0]}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={closeVideo}
          >
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              <span className="text-white text-2xl font-light">✕</span>
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-dark flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Replace with real video when available */}
              {t.video ? (
                <video controls autoPlay playsInline className="w-full h-full object-contain bg-black">
                  <source src={t.video} type="video/mp4" />
                </video>
              ) : (
                <div className="text-center">
                  <p className="font-dm text-white/20 text-lg mb-4">Video coming soon</p>
                  <p className="font-serif italic text-white/40 text-xl max-w-lg mx-auto px-6">"{t.quote}"</p>
                  <p className="font-dm text-cta text-sm mt-4">{t.name}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="inline-block bg-navy/10 border-2 border-navy/30 rounded-full px-6 py-2.5 font-dm text-xs text-navy tracking-[3px] uppercase font-bold">
              Yes, We Already Know What You're Thinking
            </span>
          </div>
          <h2 className="font-bebas text-text-dark text-6xl md:text-8xl lg:text-[110px] tracking-wider leading-[0.9] text-center mb-6">
            The Questions You're<br />
            Googling at{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-text-dark">2 A.M.</span>
              <span
                className="absolute inset-x-0 bottom-2 md:bottom-4 h-[0.35em] bg-cta/40 -z-0"
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-xl mx-auto mb-14">
            If it's been keeping you up, it's probably in here.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-lg border border-card-border overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-dm font-bold text-text-dark text-lg md:text-xl pr-4">{faq.q}</span>
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
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   FINAL CTA — KingKong self-aware closer
   Clean black panel, massive headline, massive button. Nothing else.
   ═══════════════════════════════════════════════ */
const FinalCTA = () => {
  return (
    <section className="relative bg-black overflow-hidden py-28 md:py-44 px-6">
      {/* Subtle radial glow behind the headline — gives the orange punchline weight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--cta) / 0.12) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          {/* Massive self-aware headline — ends on the exact button text */}
          <h2 className="font-bebas text-white text-5xl md:text-7xl lg:text-[110px] tracking-wider leading-[0.95] mb-14">
            You've Read The Page.<br />
            We've Made Our Case.<br />
            <span className="text-cta">Do What You Gotta Do.</span>
          </h2>

          {/* Massive pulsing orange button — echoes headline punchline exactly */}
          <button
            onClick={scrollToForm}
            className="cta-btn-primary cta-pulse !py-7 md:!py-8 !px-10 md:!px-16 !text-lg md:!text-2xl w-full max-w-2xl"
          >
            NOW DO WHAT YOU GOTTA DO →
          </button>
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
  const [form, setForm] = useState({ name: "", phone: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/book-a-call");
  };

  const inputClass = "w-full bg-off-white border border-gray-200 text-text-dark font-dm text-base px-4 py-4 rounded-lg focus:border-cta focus:ring-2 focus:ring-cta/20 focus:outline-none transition-all duration-200 placeholder:text-text-muted/60";
  const labelClass = "font-dm text-xs font-bold text-text-dark tracking-[2px] uppercase mb-2 block";

  return (
    <section id="form-section" className="bg-dark py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Atmospheric radial glow */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 20%, hsl(var(--cta)) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Darwin headshot — centered above headline */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-10 md:mb-12">
            <img
              src={darwinHeadshot}
              alt="Darwin F. Johnson, Attorney"
              loading="lazy"
              decoding="async"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-2 ring-cta/40 mb-4"
            />
            <p className="text-white text-2xl md:text-3xl mb-1" style={{ fontFamily: "'Dancing Script', cursive" }}>Darwin F. Johnson</p>
            <p className="font-dm text-[10px] text-white/50 tracking-[2px] uppercase">Founder · Managing Attorney</p>
          </div>
        </ScrollReveal>

        {/* Eyebrow — narrative setup */}
        <ScrollReveal delay={0.1}>
          <p className="font-dm text-xs md:text-sm text-cta tracking-[4px] uppercase font-bold text-center mb-8">
            This Is What Healing Looks Like
          </p>
        </ScrollReveal>

        {/* Transformation headline — word-by-word motion reveal on the punchline */}
        <motion.h2
          className="font-bebas text-white text-5xl md:text-6xl lg:text-8xl tracking-wider leading-[1] text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
        >
          <motion.span
            className="block mb-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
            }}
          >
            You're One Form Away
          </motion.span>
          <motion.span
            className="block"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
            }}
          >
            From{" "}
            <motion.span
              className="text-cta inline-block"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              Sleeping Through the Night.
            </motion.span>
          </motion.span>
        </motion.h2>

        {/* Subtitle */}
        <ScrollReveal delay={0.6}>
          <p className="font-dm text-lg md:text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            60 seconds with Darwin.<br />
            Then 2 A.M. stops meaning what it used to.
          </p>
        </ScrollReveal>

        {/* Form card wrapper — tighter width for focused form */}
        <div className="max-w-xl mx-auto">

        {/* Form card */}
        <ScrollReveal delay={0.15} direction="scale">
          <div className="bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] p-8 md:p-10 relative">
            {/* Trust bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-cta text-lg tracking-[2px]">★★★★★</span>
                <span className="font-dm text-xs text-text-muted font-bold">4.9 · 10,000+ cases</span>
              </div>
              <div className="flex items-center gap-1.5 font-dm text-xs text-text-muted">
                <svg className="w-4 h-4 text-cta" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1L3 5v6c0 4 3 7 7 8 4-1 7-4 7-8V5l-7-4zm0 6a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                </svg>
                <span>Secure & Confidential</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={labelClass}>Your name</label>
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className={labelClass}>Best number to reach you</label>
                <input
                  type="tel"
                  required
                  className={inputClass}
                  placeholder="(404) 555-0123"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div>
                <label className={labelClass}>What happened?</label>
                <textarea
                  required
                  className={`${inputClass} min-h-[130px] resize-none`}
                  placeholder="Just write a few sentences in your own words…"
                  value={form.details}
                  onChange={e => setForm({ ...form, details: e.target.value })}
                />
              </div>

              <button type="submit" className="cta-btn-primary cta-pulse w-full !h-16 !text-xl mt-2">
                SHOW ME WHAT I'M OWED →
              </button>

              <p className="font-dm text-xs text-text-muted text-center font-bold pt-1">
                🛡 Free case review · No fee unless we win
              </p>
            </form>
          </div>
        </ScrollReveal>

          {/* Testimonial card below form — social proof at the moment of conversion */}
          <ScrollReveal delay={0.25}>
            <div className="mt-10 text-center">
              <div className="text-cta text-lg tracking-[3px] mb-3">★★★★★</div>
              <p className="font-serif italic text-white/90 text-xl md:text-2xl leading-snug mb-3">
                "Insurance offered $12,000.<br />Darwin got me $95,000."
              </p>
              <p className="font-dm text-sm text-white/50 tracking-wider">
                — Adtresa M., Personal Injury Client
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Index = () => (
  <div className="bg-white min-h-screen overflow-x-clip pb-16 md:pb-0">
    <ScrollProgress />
    <Header />
    <HeroAndVideo />
    <LetterSection />
    <Offerings />
    <UnifiedQuiz />
    <StatsSection />
    <CaseResults />
    <DarwinGuarantee />
    <Testimonials />
    <FormSection />
    <FAQ />
    <FinalCTA />
    <Footer />
    <FloatingCTA />
    <MobileStickyBar />
  </div>
);

export default Index;
