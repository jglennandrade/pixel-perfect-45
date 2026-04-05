import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
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
        <p className="font-dm text-xs text-text-muted tracking-[4px] uppercase mb-4 text-center">TWO PATHS. ONE MISSION.</p>
        <h2 className="font-bebas text-text-dark text-5xl md:text-8xl tracking-wider leading-[0.95] text-center mb-4">
          How Were You Hurt?
        </h2>
        <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-2xl mx-auto mb-14">
          One of these is why you can't sleep at night.<br />
          Either way, Darwin has made it right 10,000+ times.
        </p>
      </ScrollReveal>

      <StaggerContainer stagger={0.15} className="grid md:grid-cols-2 gap-6">
        {[
          {
            label: "INJURED ON THE JOB",
            headline: "WORKERS' COMP",
            desc: "Hurt at work in Georgia? Construction, warehouse, factory, healthcare, trucking — if you got injured on the clock, you're probably owed a lot more than what they're offering you.",
            cta: "Get Started",
            link: "/workers-compensation",
            stars: "4.9 stars out of 10,000+ cases",
          },
          {
            label: "INJURED IN AN ACCIDENT",
            headline: "PERSONAL INJURY",
            desc: "Car wreck, truck accident, motorcycle crash? That insurance adjuster who called isn't trying to help — they're trying to close your file cheap. Don't sign anything until you talk to Darwin.",
            cta: "Get Started",
            link: "/personal-injury",
            stars: "4.9 stars · $250M+ recovered",
          },
        ].map((card, i) => (
          <StaggerItem key={i}>
            <Link to={card.link} className="block h-full">
              <div className="bg-navy rounded-xl p-8 md:p-12 h-full card-lift relative overflow-hidden group text-center">
                <p className="font-dm text-xs text-cta tracking-[3px] uppercase font-bold mb-4">{card.label}</p>
                <h3 className="font-bebas text-white text-6xl md:text-8xl tracking-wider leading-[0.85] mb-6">{card.headline}</h3>
                <p className="font-dm text-lg md:text-xl text-white/60 leading-relaxed mb-8">{card.desc}</p>

                <div className="bg-cta rounded-lg py-4 px-6 text-center group-hover:bg-cta-hover transition-colors">
                  <span className="font-dm font-bold text-white text-base tracking-wide">See If I Qualify →</span>
                </div>

                <div className="flex flex-col items-center gap-1 mt-8">
                  <span className="text-cta text-3xl tracking-[6px]">★★★★★</span>
                  <span className="font-dm text-base text-white/60 mt-1">{card.stars}</span>
                </div>
              </div>
            </Link>
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
          <h2 className="font-bebas text-text-dark text-5xl md:text-8xl tracking-wider leading-[0.95] text-center mb-4">
            Become Our Next Success Story.
          </h2>
          <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-2xl mx-auto mb-14">
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
    { result: "Denied by insurance. Settled for $180K.", quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him.", name: "Nicole F." },
    { result: "Insurance offered $12K. Darwin got $95K.", quote: "He was very straightforward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M." },
    { result: "Fired after reporting injury — Darwin stepped in.", quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this!", name: "Jeremy H." },
  ];

  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-bebas text-text-dark text-5xl md:text-8xl tracking-wider leading-[0.95] text-center mb-12">
            Real Clients.<br />Real Results.
          </h2>
        </ScrollReveal>

        <div className="mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease }}
              className="text-center"
            >
              <p className="font-bebas text-cta text-3xl md:text-5xl tracking-wider mb-6">{t.result}</p>
              <span className="text-cta text-xl tracking-[6px]">★★★★★</span>
              <p className="font-serif italic text-text-dark text-3xl md:text-4xl leading-relaxed mt-6 mb-8">"{t.quote}"</p>
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
   11. AWARDS & CERTIFICATIONS — Trust strip above footer
   ═══════════════════════════════════════════════ */
const AwardsBar = () => (
  <section className="bg-off-white py-20 md:py-32 px-6 border-t border-card-border">
    <div className="max-w-6xl mx-auto text-center">
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
      <div className="mt-12 max-w-5xl mx-auto overflow-hidden relative">
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
