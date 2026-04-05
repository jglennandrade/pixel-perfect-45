import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import DamagesBlock from "@/components/DamagesBlock";
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
          preload="auto"
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
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/mainstage-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/65" />
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
            className="flex items-center justify-center gap-3 mt-8"
          >
            <span className="text-cta text-xl tracking-[4px]">★★★★★</span>
            <span className="font-dm text-sm text-white/50">
              4.9 stars · 10,000+ Georgia clients served
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-36 md:bottom-44 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
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
        {/* White gradient transition from hero */}
        <div className="absolute top-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        <div className="absolute top-40 md:top-56 left-0 right-0 bottom-0 bg-white" />
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
        <p className="font-dm text-sm text-text-muted mb-8">Updated: April 2026 · Atlanta, Georgia</p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-serif italic text-text-dark text-4xl md:text-5xl leading-snug mb-10">
          Dear friend,
        </h2>
      </ScrollReveal>

      <div className="space-y-7 font-dm text-lg md:text-xl text-text-body leading-relaxed">
        <ScrollReveal><p>Right now, you're probably lying awake at 2am staring at the ceiling.</p></ScrollReveal>
        <ScrollReveal><p>Your body hurts.</p></ScrollReveal>
        <ScrollReveal><p>The bills are stacking up on the kitchen counter.</p></ScrollReveal>
        <ScrollReveal><p>You haven't worked in weeks.</p></ScrollReveal>
        <ScrollReveal><p>And that "friendly" insurance adjuster who called you yesterday?</p></ScrollReveal>
        <ScrollReveal><p className="text-text-dark font-bold text-xl md:text-2xl">They're not calling to help you.</p></ScrollReveal>
        <ScrollReveal><p className="text-text-dark font-bold text-xl md:text-2xl">They're calling to close your file — as cheaply as possible.</p></ScrollReveal>
        <ScrollReveal><p>Here's what they won't tell you:</p></ScrollReveal>
        <ScrollReveal><p>The moment you got hurt, your employer's insurance company assigned a team of lawyers to your case.</p></ScrollReveal>
        <ScrollReveal><p>Not to protect you.</p></ScrollReveal>
        <ScrollReveal><p className="text-text-dark font-bold">To protect themselves.</p></ScrollReveal>
        <ScrollReveal><p>Their playbook is simple: delay, deny, lowball.</p></ScrollReveal>
        <ScrollReveal><p>Offer you $12,000 when your case is worth $95,000.</p></ScrollReveal>
        <ScrollReveal><p>Hope you're desperate enough to sign before you talk to someone like me.</p></ScrollReveal>
        <ScrollReveal><p>Meanwhile, you're wondering if your job will be there when you recover.</p></ScrollReveal>
        <ScrollReveal><p>Wondering if you can make rent.</p></ScrollReveal>
        <ScrollReveal><p>Wondering if maybe this is just... all you're going to get.</p></ScrollReveal>
        <ScrollReveal><p className="text-cta font-bold text-xl md:text-2xl pt-2">It's not. Not even close.</p></ScrollReveal>
        <ScrollReveal><p>I've spent 20 years proving that.</p></ScrollReveal>
        <ScrollReveal><p className="text-text-dark font-medium">$250 million recovered. 10,000+ cases. Every dollar fought for personally.</p></ScrollReveal>
        <ScrollReveal><p>And unlike every other firm in Atlanta —</p></ScrollReveal>
        <ScrollReveal><p>When you call my office, I pick up the phone.</p></ScrollReveal>
        <ScrollReveal><p>Not a secretary. Not a paralegal. <span className="text-text-dark font-bold">Me.</span></p></ScrollReveal>
        <ScrollReveal>
          <div className="pt-4">
            <p className="text-text-dark text-4xl md:text-5xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Darwin F. Johnson</p>
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
        <p className="font-dm text-xs text-text-muted tracking-[4px] uppercase mb-4 text-center">PICK THE ONE THAT HAPPENED TO YOU</p>
        <h2 className="font-bebas text-text-dark text-5xl md:text-8xl tracking-wider leading-[0.95] text-center mb-4">
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
            accent: "cta", // orange
          },
          {
            number: "02",
            label: "INJURED IN AN ACCIDENT",
            headline: "PERSONAL INJURY",
            desc: "Car wreck, truck accident, motorcycle crash? That insurance adjuster who called isn't trying to help — they're trying to close your file cheap. Don't sign anything until you talk to Darwin.",
            path: "pi",
            stars: "4.9 stars · $250M+ recovered",
            accent: "gold", // gold
          },
        ].map((card, i) => (
          <StaggerItem key={i}>
            <button
              onClick={() => {
                // Trigger the quiz with the selected path
                window.dispatchEvent(new CustomEvent("startQuiz", { detail: { path: card.path } }));
                setTimeout(() => {
                  document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
              className="block h-full w-full text-left"
            >
              <div
                className="rounded-2xl p-8 md:p-12 h-full card-lift relative overflow-hidden group"
                style={{
                  background: card.accent === "cta"
                    ? "linear-gradient(160deg, hsl(220 55% 22%) 0%, hsl(220 60% 12%) 60%, hsl(220 65% 8%) 100%)"
                    : "linear-gradient(160deg, hsl(220 55% 22%) 0%, hsl(220 60% 12%) 60%, hsl(220 65% 8%) 100%)"
                }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent === "cta" ? "bg-cta" : "bg-gold"}`} />

                {/* DJ monogram watermark — background decoration */}
                <img
                  src={djMonogram}
                  alt=""
                  className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-[220px] md:w-[340px] h-auto pointer-events-none select-none opacity-[0.08]"
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className={`font-dm text-xs tracking-[3px] uppercase font-bold ${card.accent === "cta" ? "text-cta" : "text-gold"}`}>
                      {card.number} / {card.label}
                    </span>
                  </div>
                  <h3 className="font-bebas text-white text-6xl md:text-8xl tracking-wider leading-[0.85] mb-6">{card.headline}</h3>
                  <p className="font-dm text-lg md:text-xl text-white/60 leading-relaxed mb-8">{card.desc}</p>

                  <div className={`rounded-lg py-4 px-6 text-center transition-colors ${
                    card.accent === "cta"
                      ? "bg-cta group-hover:bg-cta-hover"
                      : "bg-gold group-hover:bg-gold-hover"
                  }`}>
                    <span className="font-dm font-bold text-white text-base tracking-wide">CHECK MY CASE →</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 mt-8">
                    <span className={`text-3xl tracking-[6px] ${card.accent === "cta" ? "text-cta" : "text-gold"}`}>★★★★★</span>
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
            <img key={i} src={logo.src} alt={logo.alt} className={`${logo.h} w-auto object-contain flex-shrink-0 grayscale opacity-40`} />
          ))}
        </div>
      </div>

      {/* Row 2 — slides left, grayscale */}
      <div className="max-w-5xl mx-auto overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-20 animate-marquee-reverse" style={{ width: "max-content" }}>
          {[...Array(4)].flatMap(() => row2Logos).map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className={`${logo.h} w-auto object-contain flex-shrink-0 grayscale opacity-40`} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   4b-V2. WORKERS' COMP DEEP DIVE — NEW VERSION
   ═══════════════════════════════════════════════ */
const WorkersCompDeepDive = () => {
  const [wcTab, setWcTab] = useState("injuries");
  const contentRef = useRef<HTMLDivElement>(null);

  const switchTab = (id: string) => {
    setWcTab(id);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const injuries = [
    "Back Injuries", "Brain Injuries", "Carpal Tunnel", "Crush Injuries",
    "Head Injuries", "Hip Injuries", "Knee Injuries", "Neck Injuries",
    "Paralysis", "Shoulder Injuries", "Spinal Cord Injuries", "Traumatic Brain Injury",
  ];

  const industries = [
    "Airport & Airline", "Construction", "Firefighter & EMT", "Grocery & Retail",
    "Healthcare", "Industrial & Factories", "Law Enforcement", "Poultry Processing",
    "Roofing", "Steelworker", "Power & Utilities", "Tree Services", "Trucking",
  ];

  const tabs = [
    {
      id: "injuries",
      label: "What's Hurting",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
    },
    {
      id: "industries",
      label: "Where You Got Hurt",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
    },
    {
      id: "qualify",
      label: "Do I Qualify?",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
  ];

  return (
    <section id="workers-comp-section" className="bg-off-white py-20 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-dm text-xs text-cta tracking-[4px] uppercase font-bold mb-4 text-center">WORKERS' COMPENSATION</p>
          <h2 className="font-bebas text-text-dark text-5xl md:text-8xl tracking-wider leading-[0.95] text-center mb-4">
            Your Employer Has Lawyers.<br />Now You Do Too.
          </h2>
          <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-2xl mx-auto mb-8">
            No matter where you work, what happened, or how bad it is —<br className="hidden md:block" />
            Darwin has seen it, fought it, and won it.
          </p>

          {/* Urgency strip */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-8 h-[2px] bg-cta" />
            <p className="font-dm text-sm md:text-base font-bold text-cta tracking-wide uppercase">
              You have 30 days. The insurance company is counting.
            </p>
            <div className="w-8 h-[2px] bg-cta" />
          </div>
        </ScrollReveal>

        {/* Tabs layout */}
        <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-10 items-start">
          {/* Left — Sticky tab navigation */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:border-l-2 md:border-card-border md:sticky md:top-24 md:self-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-lg md:rounded-none md:rounded-r-lg text-left whitespace-nowrap md:whitespace-normal transition-all duration-300 flex-shrink-0 md:ml-[-2px] md:border-l-2 ${
                    wcTab === tab.id
                      ? "bg-cta/10 md:border-l-cta"
                      : "hover:bg-white/50 md:border-l-transparent"
                  }`}
                >
                  <span className={`transition-colors ${wcTab === tab.id ? "text-cta" : "text-text-muted"}`}>
                    {tab.icon}
                  </span>
                  <span className={`font-dm text-sm md:text-base font-bold ${
                    wcTab === tab.id ? "text-text-dark" : "text-text-muted"
                  }`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right — Tab content */}
            <div ref={contentRef} className="min-h-[900px] scroll-mt-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={wcTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Injuries tab — What's Hurting */}
                  {wcTab === "injuries" && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-4xl md:text-6xl tracking-wider leading-[0.95] mb-3">What's Hurting?</h3>
                      <p className="font-dm text-base md:text-lg text-text-body leading-relaxed mb-8 max-w-xl">
                        If your injury is on this list, you almost certainly have a case.
                      </p>
                      <div className="bg-white rounded-xl border border-card-border overflow-hidden">
                        {injuries.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-6 px-6 py-4 hover:bg-off-white transition-colors cursor-default ${
                              i < injuries.length - 1 ? "border-b border-card-border" : ""
                            }`}
                          >
                            <span className="font-bebas text-xl text-cta/40 tracking-wider w-8">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-dm text-base font-medium text-text-dark flex-1">{item}</span>
                            <span className="text-cta opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Industries tab — Where You Got Hurt */}
                  {wcTab === "industries" && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-4xl md:text-6xl tracking-wider leading-[0.95] mb-3">Where You Got Hurt</h3>
                      <p className="font-dm text-base md:text-lg text-text-body leading-relaxed mb-8 max-w-xl">
                        Darwin has fought and won cases across every one of these industries in Georgia.
                      </p>
                      <div className="bg-white rounded-xl border border-card-border overflow-hidden">
                        {industries.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-6 px-6 py-4 hover:bg-off-white transition-colors cursor-default ${
                              i < industries.length - 1 ? "border-b border-card-border" : ""
                            }`}
                          >
                            <span className="font-bebas text-xl text-cta/40 tracking-wider w-8">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-dm text-base font-medium text-text-dark flex-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Qualify tab — Do I Qualify */}
                  {wcTab === "qualify" && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-4xl md:text-6xl tracking-wider leading-[0.95] mb-3">Do I Qualify?</h3>
                      <p className="font-dm text-base md:text-lg text-text-body leading-relaxed mb-8 max-w-xl">
                        Check one box from each column. If you can — you likely have a valid claim.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl border border-card-border p-6">
                          <p className="font-dm text-xs text-cta tracking-[2px] uppercase font-bold mb-4">ON-THE-JOB INJURY</p>
                          {["Injury occurred while working", "Injured due to the job you perform", "Includes injuries during work travel"].map((t, i) => (
                            <p key={i} className="font-dm text-sm text-text-body mb-3 flex items-start gap-2"><span className="text-cta font-bold">✓</span> {t}</p>
                          ))}
                        </div>
                        <div className="bg-white rounded-xl border border-card-border p-6">
                          <p className="font-dm text-xs text-cta tracking-[2px] uppercase font-bold mb-4">EMPLOYMENT STATUS</p>
                          {["You are a legal employee (not contractor)", "Your employer has 3+ employees", "Full-time, part-time, or seasonal"].map((t, i) => (
                            <p key={i} className="font-dm text-sm text-text-body mb-3 flex items-start gap-2"><span className="text-cta font-bold">✓</span> {t}</p>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial callout — Jeremy H. */}
                      <div className="bg-navy rounded-xl p-6 md:p-8 mb-8 relative overflow-hidden">
                        <img src={djMonogram} alt="" className="absolute -top-6 -right-6 w-[180px] h-auto opacity-[0.06] pointer-events-none" />
                        <div className="relative z-10">
                          <span className="text-cta text-lg tracking-[4px]">★★★★★</span>
                          <p className="font-serif italic text-white text-lg md:text-xl leading-relaxed mt-3 mb-4">
                            "They tried to fire me after reporting my injury. Wrong thing to do when you have attorneys like this. Darwin made them pay."
                          </p>
                          <p className="font-dm font-bold text-cta text-sm tracking-wider">
                            — JEREMY H., <span className="text-white/50 font-normal">Workers' Comp Client</span>
                          </p>
                        </div>
                      </div>

                      <button onClick={scrollToForm} className="cta-btn-primary !py-4 !px-10">
                        I QUALIFY — GET MY FREE CASE REVIEW →
                      </button>
                      <p className="font-dm text-xs text-text-muted mt-3">Don't meet these criteria? You may still have a personal injury case. Keep scrolling.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-card-border">
                <button
                  onClick={() => {
                    const currentIndex = tabs.findIndex(t => t.id === wcTab);
                    const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
                    switchTab(tabs[prevIndex].id);
                  }}
                  className="flex items-center gap-2 font-dm text-sm text-text-muted hover:text-text-dark transition-colors group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  <span>Previous</span>
                </button>
                <div className="flex items-center gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => switchTab(tab.id)}
                      aria-label={`Go to ${tab.label}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        wcTab === tab.id ? "w-8 bg-cta" : "w-2 bg-card-border hover:bg-text-muted"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => {
                    const currentIndex = tabs.findIndex(t => t.id === wcTab);
                    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
                    switchTab(tabs[nextIndex].id);
                  }}
                  className="flex items-center gap-2 font-dm text-sm font-bold text-cta hover:text-cta-hover transition-colors group"
                >
                  <span>Next</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════
   3D INTERACTIVE SCALE OF JUSTICE
   ═══════════════════════════════════════════════ */
const Interactive3DScale = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [beamAngle, setBeamAngle] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientY - centerY) / rect.height) * 20;
    const y = ((e.clientX - centerX) / rect.width) * 25;
    setRotate({ x: -x, y });
    setBeamAngle(((e.clientX - centerX) / rect.width) * 8);
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setBeamAngle(0);
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center pt-16 pb-8 cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px" }}
    >
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg viewBox="0 0 240 240" className="w-[200px] md:w-[300px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glow behind */}
          <defs>
            <radialGradient id="scaleGlow" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--cta))" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="pillarGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
              <stop offset="100%" stopColor="white" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0.08" />
              <stop offset="50%" stopColor="white" stopOpacity="0.2" />
              <stop offset="100%" stopColor="white" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Background glow */}
          <circle cx="120" cy="100" r="100" fill="url(#scaleGlow)" />

          {/* Center pillar */}
          <rect x="116" y="52" width="8" height="130" rx="4" fill="url(#pillarGrad)" />

          {/* Base — 3D trapezoid */}
          <path d="M70 182 L170 182 L160 192 L80 192 Z" fill="white" fillOpacity="0.08" />
          <rect x="85" y="175" width="70" height="8" rx="3" fill="white" fillOpacity="0.1" />

          {/* Balance beam — tilts with mouse */}
          <motion.g animate={{ rotate: beamAngle }} style={{ originX: "120px", originY: "52px" }}>
            <rect x="25" y="48" width="190" height="6" rx="3" fill="url(#beamGrad)" />

            {/* Left chains */}
            <line x1="55" y1="54" x2="40" y2="105" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="55" y1="54" x2="70" y2="105" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
            {/* Left pan — 3D arc */}
            <path d="M30 105 Q55 125 80 105" stroke="white" strokeOpacity="0.15" strokeWidth="2" fill="white" fillOpacity="0.03" />
            <ellipse cx="55" cy="108" rx="26" ry="4" fill="white" fillOpacity="0.05" />

            {/* Right chains */}
            <line x1="185" y1="54" x2="170" y2="95" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="185" y1="54" x2="200" y2="95" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
            {/* Right pan — 3D arc */}
            <path d="M160 95 Q185 115 210 95" stroke="white" strokeOpacity="0.15" strokeWidth="2" fill="white" fillOpacity="0.03" />
            <ellipse cx="185" cy="98" rx="26" ry="4" fill="white" fillOpacity="0.05" />
          </motion.g>

          {/* Top ornament — circle with CTA accent */}
          <circle cx="120" cy="42" r="12" stroke="white" strokeOpacity="0.15" strokeWidth="1.5" fill="white" fillOpacity="0.03" />
          <circle cx="120" cy="42" r="5" fill="hsl(var(--cta))" fillOpacity="0.3" />

          {/* Text */}
          <text x="120" y="215" textAnchor="middle" fill="white" fillOpacity="0.12" fontFamily="Bebas Neue" fontSize="13" letterSpacing="5">ATLANTA, GEORGIA</text>
          <text x="120" y="232" textAnchor="middle" fill="white" fillOpacity="0.08" fontFamily="DM Sans" fontSize="8" letterSpacing="2">EST. 2004</text>
        </svg>
      </motion.div>
    </div>
  );
};

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
    { name: "Slip and Fall", hook: "Slip and fall cases depend on proving negligence by the property owner. Darwin knows exactly what evidence wins these cases in Georgia courts." },
    { name: "Medical Malpractice", hook: "Medical errors — surgical mistakes, misdiagnosis, medication errors — require specialized legal knowledge. Darwin has the experience to take on hospitals and insurance companies." },
    { name: "Premises Liability", hook: "Unsafe properties — negligent security, hazardous conditions, code violations — can cause devastating injuries. Darwin holds property owners accountable." },
    { name: "Wrongful Death", hook: "Losing a loved one to someone else's negligence is devastating. Darwin handles these cases with the care and aggression they require." },
    { name: "Brain Injury", hook: "Brain injuries from accidents are among the most complex personal injury cases. Darwin has recovered millions for clients with traumatic brain injuries." },
    { name: "Catastrophic Injury", hook: "When the stakes are highest — paralysis, amputation, permanent disability — Darwin fights hardest. These cases need aggressive, experienced representation." },
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
    <section id="quiz-section" className="bg-off-white py-20 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-dm text-xs text-cta tracking-[4px] uppercase font-bold mb-4 text-center">60-SECOND CASE CHECK</p>
          <h2 className="font-bebas text-text-dark text-5xl md:text-8xl tracking-wider leading-[0.95] text-center mb-4">
            Let's See What<br />You're Owed.
          </h2>
          <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-2xl mx-auto mb-14">
            Answer 3 quick questions. Darwin will tell you — for free — if you have a case<br className="hidden md:block" />
            and what it could be worth.
          </p>
        </ScrollReveal>

        {/* Quiz container */}
        <div className="bg-white rounded-2xl border border-card-border p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] min-h-[600px]" ref={contentRef}>
          {/* Empty state — haven't picked path yet */}
          {path === null && (
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center">
              <span className="font-dm text-xs text-text-muted tracking-[3px] uppercase mb-4">GET STARTED</span>
              <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wider leading-[0.95] mb-4">
                Click one of the cards above<br />to start your case check.
              </h3>
              <p className="font-dm text-text-body text-base max-w-md">
                Or pick your situation here:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => { setPath("wc"); setStep(1); scrollToContent(); }}
                  className="cta-btn-primary !py-4 !px-8"
                >
                  I GOT HURT AT WORK →
                </button>
                <button
                  onClick={() => { setPath("pi"); setStep(1); scrollToContent(); }}
                  className="cta-btn-outline !py-4 !px-8"
                >
                  I WAS IN AN ACCIDENT →
                </button>
              </div>
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
                          className="cta-btn-primary !py-5 !px-8 !text-base flex-1"
                        >
                          ✓ YES — I MEET THESE
                        </button>
                        <button
                          onClick={() => { setWcQualified("no"); setStep(4); scrollToContent(); }}
                          className="cta-btn-outline !py-5 !px-8 !text-base flex-1"
                        >
                          ✗ NO — I DON'T
                        </button>
                      </div>
                      <p className="font-dm text-xs text-text-muted mt-3 text-center">Don't worry — we have options either way.</p>
                    </div>
                  )}

                  {/* ─── WC RESULT — QUALIFIED ─── */}
                  {path === "wc" && step === 4 && wcQualified === "yes" && (
                    <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden -mx-2 md:-mx-4">
                      <img src={djMonogram} alt="" className="absolute -top-10 -right-10 w-[280px] h-auto opacity-[0.06] pointer-events-none" />
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
                        <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
                          GET MY FREE CASE REVIEW →
                        </button>
                        <p className="font-dm text-xs text-white/30 mt-3">Free. No obligation. 30 seconds. No fee unless we win.</p>
                      </div>
                    </div>
                  )}

                  {/* ─── WC RESULT — NOT QUALIFIED ─── */}
                  {path === "wc" && step === 4 && wcQualified === "no" && (
                    <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden -mx-2 md:-mx-4">
                      <img src={djMonogram} alt="" className="absolute -top-10 -right-10 w-[280px] h-auto opacity-[0.06] pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                            <span className="text-white text-xl">!</span>
                          </span>
                          <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-gold">YOU MAY HAVE A PERSONAL INJURY CASE</span>
                        </div>
                        <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wider leading-[0.95] mb-6">
                          Don't Walk Away.<br />You Still Have Options.
                        </h4>
                        <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                          <p className="font-dm text-sm text-white/60 mb-3">Your situation:</p>
                          <div className="space-y-2">
                            <p className="font-dm text-white"><span className="text-gold font-bold">Injury:</span> {selectedInjury}</p>
                            <p className="font-dm text-white"><span className="text-gold font-bold">Workplace:</span> {selectedIndustry}</p>
                            <p className="font-dm text-white"><span className="text-gold font-bold">Status:</span> May not qualify for Workers' Comp</p>
                          </div>
                        </div>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">
                          Workers' comp has strict requirements — but that doesn't mean you're out of options. Darwin also handles <span className="text-white font-bold">Personal Injury</span> cases, which cover injuries caused by someone else's negligence or wrongdoing.
                        </p>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">
                          Based on your <span className="text-gold font-bold">{selectedInjury?.toLowerCase()}</span> at a <span className="text-gold font-bold">{selectedIndustry?.toLowerCase()}</span> workplace, you may have a claim if a third party was involved — defective equipment, a subcontractor, unsafe property, or a motor vehicle accident on the job.
                        </p>
                        {injuryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{injuryData.hook}</p>}
                        <div className="border-t border-white/10 pt-6 mb-6">
                          <p className="font-dm text-base text-white/80 leading-relaxed">
                            Darwin has recovered over <span className="text-gold font-bold">$250 million</span> across both workers' comp AND personal injury cases. He'll tell you exactly which path fits — free, 30 seconds, no obligation.
                          </p>
                        </div>
                        <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
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
                      <p className="font-dm text-base text-text-body mb-8">Personal injury cases require proving someone else's negligence or wrongdoing caused your injury.</p>
                      <div className="bg-off-white rounded-lg border border-card-border p-6 mb-8">
                        <p className="font-dm text-sm text-text-body leading-relaxed">
                          <span className="font-bold text-text-dark">Examples of "someone else's fault":</span>
                          <br />
                          • Another driver caused the accident
                          <br />
                          • A property owner failed to maintain their premises
                          <br />
                          • A doctor made a surgical or diagnostic error
                          <br />
                          • A company sold defective equipment
                          <br />
                          • A business had negligent security
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => { setThirdPartyFault("yes"); setStep(4); scrollToContent(); }}
                          className="cta-btn-primary !py-5 !px-8 !text-base flex-1"
                        >
                          ✓ YES — SOMEONE ELSE WAS AT FAULT
                        </button>
                        <button
                          onClick={() => { setThirdPartyFault("no"); setStep(4); scrollToContent(); }}
                          className="cta-btn-outline !py-5 !px-8 !text-base flex-1"
                        >
                          ✗ NO / NOT SURE
                        </button>
                      </div>
                      <p className="font-dm text-xs text-text-muted mt-3 text-center">Darwin will help you figure it out — for free.</p>
                    </div>
                  )}

                  {/* ─── PI RESULT — QUALIFIED ─── */}
                  {path === "pi" && step === 4 && thirdPartyFault === "yes" && (
                    <div className="-mx-2 md:-mx-4">
                      <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden mb-6">
                        <img src={djMonogram} alt="" className="absolute -top-10 -right-10 w-[280px] h-auto opacity-[0.06] pointer-events-none" />
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

                          <div className="border-t border-white/10 pt-6 mb-6">
                            <p className="font-dm text-base text-white/80 leading-relaxed">
                              Darwin has recovered <span className="text-cta font-bold">$250 million+</span> across both workers' comp and personal injury cases. He'll review your situation personally — and tell you exactly what your case is worth.
                            </p>
                          </div>
                          <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
                            GET MY FREE CASE REVIEW →
                          </button>
                          <p className="font-dm text-xs text-white/30 mt-3">Free. No obligation. No fee unless we win.</p>
                        </div>
                      </div>

                      {/* Damages block — shown only for PI qualified */}
                      <DamagesBlock
                        onCtaClick={scrollToForm}
                        ctaText="FIND OUT WHAT I'M OWED →"
                        showMonogram={true}
                      />
                    </div>
                  )}

                  {/* ─── PI RESULT — NOT SURE ─── */}
                  {path === "pi" && step === 4 && thirdPartyFault === "no" && (
                    <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden -mx-2 md:-mx-4">
                      <img src={djMonogram} alt="" className="absolute -top-10 -right-10 w-[280px] h-auto opacity-[0.06] pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                            <span className="text-white text-xl">?</span>
                          </span>
                          <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-gold">LET DARWIN FIGURE IT OUT</span>
                        </div>
                        <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wider leading-[0.95] mb-6">
                          Don't Rule It Out.<br />You Might Still Have a Case.
                        </h4>
                        <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                          <p className="font-dm text-sm text-white/60 mb-3">Your situation:</p>
                          <div className="space-y-2">
                            <p className="font-dm text-white"><span className="text-gold font-bold">Accident:</span> {selectedCaseType}</p>
                            <p className="font-dm text-white"><span className="text-gold font-bold">Injury:</span> {selectedPiInjury}</p>
                            <p className="font-dm text-white"><span className="text-gold font-bold">Status:</span> Third-party liability unclear</p>
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
                            One free consultation could reveal options you didn't know you had. <span className="text-gold font-bold">$250 million+ recovered</span> across 10,000+ cases. Let Darwin take a look.
                          </p>
                        </div>
                        <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
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
    </section>
  );
};

/* ═══════════════════════════════════════════════
   5. STATS + EMPLOYER LOGOS
   ═══════════════════════════════════════════════ */
const StatsSection = () => (
  <section className="relative py-24 md:py-36 px-6 overflow-hidden bg-navy-dark">

    <div className="relative z-10 max-w-6xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-bebas text-white text-5xl md:text-[90px] tracking-wider leading-[0.9] mb-6">
          RECOVER FASTER,<br />STRONGER, FULLY.
        </h2>
        <p className="font-dm text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Skip the runaround, the denied claims, and the sleepless nights<br className="hidden md:block" />
          wondering if you'll ever get paid. Darwin has done this 10,000+ times.<br className="hidden md:block" />
          <span className="text-white font-bold">Your only job is to recover.</span>
        </p>
      </ScrollReveal>

      {/* Scale of Justice — 3D interactive */}
      <Interactive3DScale />

      {/* Stat cards — on dark bg */}
      <div className="max-w-6xl mx-auto mt-8">
        <StaggerContainer stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { to: 250, prefix: "$", suffix: "M+", title: "Revenue Recovered", desc: "$250 million in workers' comp and personal injury claims won or settled." },
            { to: 10000, suffix: "+", title: "Cases Handled", desc: "Over 10,000 cases handled across every industry in Georgia.", separator: true },
            { to: 20, suffix: "+", title: "Years In Georgia", desc: "Two decades fighting for injured workers in Georgia courts." },
            { to: 15, suffix: "+", title: "Industries Served", desc: "From construction to healthcare to trucking — we know your workplace." },
          ].map((s, i) => (
            <StaggerItem key={i}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 h-full">
                <p className="font-dm font-bold text-sm text-white mb-2">{s.title}</p>
                <div className="w-10 h-[3px] bg-cta mb-4" />
                <div className="font-bebas text-4xl md:text-5xl text-cta tracking-wider">
                  <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} separator={s.separator} decimals={0} />
                </div>
                <p className="font-dm text-sm text-white/50 mt-3 leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Employer logos — white/inverted on dark */}
      <div className="mt-20">
        <ScrollReveal>
          <p className="font-dm text-xs text-white/30 tracking-[3px] uppercase mb-10">EMPLOYERS WE'VE TAKEN ON — AND WON</p>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto overflow-hidden relative mb-8"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex items-center gap-20 animate-marquee" style={{ width: "max-content" }}>
            {[...Array(4)].flatMap(() => row1Logos).map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className={`${logo.h} w-auto object-contain flex-shrink-0 brightness-0 invert opacity-30`} />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden relative mb-8"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex items-center gap-20 animate-marquee-reverse" style={{ width: "max-content" }}>
            {[...Array(4)].flatMap(() => row2Logos).map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className={`${logo.h} w-auto object-contain flex-shrink-0 brightness-0 invert opacity-30`} />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden relative mt-12"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex items-center gap-20 animate-marquee" style={{ width: "max-content" }}>
            {[...Array(4)].flatMap(() => row3Logos).map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className={`${logo.h} w-auto object-contain flex-shrink-0 brightness-0 invert opacity-30`} />
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
    { amount: "$4,200,000", type: "CATASTROPHIC\nWORKERS' COMP", industry: "Construction", bg: "from-orange-500 to-red-600" },
    { amount: "$2,400,000", type: "CATASTROPHIC\nWORKERS' COMP", industry: "Industrial", bg: "from-amber-500 to-orange-600" },
    { amount: "$1,200,000", type: "CATASTROPHIC\nWORKERS' COMP", industry: "Warehouse", bg: "from-navy to-navy-dark" },
    { amount: "$850,000", type: "WORKERS' COMP\nBACK INJURY", industry: "Trucking", bg: "from-emerald-600 to-teal-700" },
    { amount: "$750,000", type: "WORKPLACE\nHEAD INJURY", industry: "Factory", bg: "from-rose-500 to-pink-700" },
    { amount: "$620,000", type: "WORKERS' COMP\nSHOULDER INJURY", industry: "Warehouse", bg: "from-indigo-500 to-violet-700" },
    { amount: "$480,000", type: "PERSONAL INJURY\nCAR ACCIDENT", industry: "Auto Accident", bg: "from-sky-500 to-blue-700" },
    { amount: "$350,000", type: "WORKERS' COMP\nKNEE INJURY", industry: "Healthcare", bg: "from-teal-500 to-cyan-700" },
    { amount: "$275,000", type: "TRUCK ACCIDENT\nSETTLEMENT", industry: "Trucking", bg: "from-slate-600 to-gray-800" },
    { amount: "$180,000", type: "DENIAL\nOVERTURNED", industry: "Healthcare", bg: "from-violet-600 to-purple-800" },
    { amount: "$150,000", type: "WORKPLACE\nNECK INJURY", industry: "Retail", bg: "from-amber-600 to-yellow-700" },
    { amount: "$95,000", type: "PERSONAL INJURY\nSETTLEMENT", industry: "Motorcycle", bg: "from-red-600 to-rose-800" },
  ];

  return (
    <section className="bg-dark py-20 md:py-32">
      <div className="px-6 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-dm text-xs text-cta tracking-[4px] uppercase font-bold mb-4 text-center">CASE RESULTS</p>
          <h2 className="font-bebas text-white text-5xl md:text-8xl tracking-wider leading-[0.95] text-center mb-4">
            Become Our Next<br />Success Story.
          </h2>
          <p className="font-dm text-lg md:text-xl text-white/50 text-center max-w-2xl mx-auto mb-14">
            Over $250 million recovered for Georgia workers and accident victims.
          </p>
        </ScrollReveal>
      </div>

      {/* Auto-sliding cards — full width, KingKong style */}
      <div className="relative overflow-hidden">
        <div className="flex gap-5 animate-marquee py-2" style={{ width: "max-content" }}>
          {[...cases, ...cases].map((c, i) => (
            <div key={i} className={`flex-shrink-0 w-[260px] md:w-[300px] h-[360px] md:h-[400px] rounded-2xl bg-gradient-to-br ${c.bg} p-8 flex flex-col justify-between card-lift cursor-default relative overflow-hidden`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
                <div className="absolute bottom-8 left-8 w-20 h-20 border border-white/20 rounded-full" />
              </div>

              <div className="relative z-10">
                <p className="font-bebas text-white/80 text-xl tracking-wider whitespace-pre-line leading-tight">{c.type}</p>
                <p className="font-dm text-white/50 text-xs mt-2 tracking-wider uppercase">{c.industry}</p>
              </div>

              <div className="relative z-10">
                <p className="font-bebas text-white text-5xl md:text-6xl tracking-wider">{c.amount}</p>
                <div className="w-12 h-[3px] bg-white/30 mt-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 max-w-6xl mx-auto">
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">
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
            <h2 className="font-bebas text-text-dark text-5xl md:text-7xl tracking-wider leading-[0.95] mb-8">
              You Deserve a Lawyer<br />Who Answers the Phone.
            </h2>
          </ScrollReveal>

          <StaggerContainer stagger={0.08} className="space-y-5 font-dm text-lg md:text-xl text-text-body leading-relaxed">
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
    { result: "Denied by insurance. Settled for $180K.", quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him. He responds to your calls immediately.", name: "Nicole F.", role: "Workers' Comp Client", video: "" },
    { result: "Insurance offered $12K. Darwin got $95K.", quote: "He was very straightforward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M.", role: "Personal Injury Client", video: "" },
    { result: "Fired after reporting injury — Darwin stepped in.", quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this that will fight for your rights!", name: "Jeremy H.", role: "Workers' Comp Client", video: "" },
    { result: "Best attorney in Georgia. Period.", quote: "Attorney Darwin Johnson is the best! I would tell anybody to give my attorney the chance to work on your case you will be satisfied with the results.", name: "Janice C.", role: "Workers' Comp Client", video: "" },
    { result: "Heart, compassion, and results.", quote: "Attorney Johnson has a heart. He and his staff nurtured me through a very difficult time and achieved a fair settlement expediently.", name: "Sonya W.", role: "Workers' Comp Client", video: "" },
    { result: "First-time claim. Darwin handled everything.", quote: "Never had to deal with a worker's compensation claim before. Darwin got results in my brother-in-law's time of need. Did a great job.", name: "James J.", role: "Workers' Comp Client", video: "" },
    { result: "Bold. Aggressive. Got results.", quote: "Darwin is a bold man, the Business Man! Darwin Law Firm is the best! I am very pleased with my settlement! It was worth the wait!", name: "Former Client", role: "Workers' Comp Client", video: "" },
    { result: "Professional, friendly, the best.", quote: "The law office is professional, and friendly. Matt, Attorney Berman, and Yohandra are the best staff that I have ever had the chance to work with.", name: "Cheryl R.", role: "Workers' Comp Client", video: "" },
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
    <section className="bg-white pt-20 md:pt-32 pb-0">
      {/* Featured testimonial — full width video + quote overlay */}
      <ScrollReveal>
        <div className="relative overflow-hidden bg-dark cursor-pointer group" onClick={openVideo}>
          {/* Video / placeholder — full width, no rounded corners */}
          <div className="aspect-[21/9] md:aspect-[21/9] bg-gradient-to-br from-navy-dark to-dark flex items-center justify-center relative">
            {/* Placeholder — remove when real video added */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-dm text-white/5 text-sm">Video Placeholder — Drop testimonial videos here</p>
            </div>

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
              <div className={`w-[160px] md:w-[220px] h-[100px] md:h-[130px] flex flex-col items-start justify-end p-4 relative ${
                ["bg-gradient-to-br from-navy to-navy-dark",
                 "bg-gradient-to-br from-navy-dark to-dark",
                 "bg-gradient-to-br from-slate-700 to-slate-900",
                 "bg-gradient-to-br from-navy to-slate-800",
                ][i % 4]
              }`}>
                {/* Active indicator */}
                {active === i % testimonials.length && <div className="absolute top-0 left-0 right-0 h-[3px] bg-cta" />}

                {/* Play icon */}
                <div className="absolute top-3 right-3">
                  <svg className="w-4 h-4 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Name */}
                <p className="font-bebas text-white text-base md:text-lg tracking-wider leading-none">{item.name}</p>
                <p className="font-dm text-white/30 text-[10px] mt-1">{item.result.split(".")[0]}</p>
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
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-bebas text-text-dark text-5xl md:text-8xl tracking-wider leading-[0.95] text-center mb-12">
            You've Got Questions.<br />We've Got Answers.
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
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

        {/* CTA — drives to form, not phone call */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <p className="font-dm text-lg md:text-xl text-text-body mb-6">Ready to find out what you're owed?</p>
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
    <WhyDarwin />
    <Testimonials />
    <FormSection />
    <FAQ />
    <Footer />
    <FloatingCTA />
    <MobileStickyBar />
  </div>
);

export default Index;
