import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import DamagesBlock from "@/components/DamagesBlock";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import darwinLogo from "@/assets/darwin-logo.png";
import darwinHeadshot from "@/assets/darwin-headshot.jpg";
import darwinOffice from "@/assets/darwin-office.webp";
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
import caseCard01 from "@/assets/case-card-01.jpg";
import caseCard02 from "@/assets/case-card-02.jpg";
import caseCard03 from "@/assets/case-card-03.jpg";
import caseCard04 from "@/assets/case-card-04.jpg";
import caseCard05 from "@/assets/case-card-05.jpg";
import caseCard06 from "@/assets/case-card-06.jpg";
import caseCard07 from "@/assets/case-card-07.jpg";
import caseCard08 from "@/assets/case-card-08.jpg";
import caseCard09 from "@/assets/case-card-09.jpg";
import caseCard10 from "@/assets/case-card-10.jpg";
import caseCard11 from "@/assets/case-card-11.jpg";
import caseCard12 from "@/assets/case-card-12.jpg";
import logoAmericold from "@/assets/logo-americold.png";
import logoShaw from "@/assets/logo-shaw.webp";
import logoJbhunt from "@/assets/logo-jbhunt.png";
import logoAttorneyMag from "@/assets/logo-attorney-at-law-magazine.png";
import logoInsuranceNews from "@/assets/logo-insurance-news-net.webp";
import logoMorningstar from "@/assets/logo-morningstar.png";
import logoStreetInsider from "@/assets/logo-street-insider.png";
import logoPrNewswire from "@/assets/logo-pr-newswire.png";

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
  const { t } = useLanguage();
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
        className="relative z-10 aspect-video bg-dark overflow-hidden cursor-pointer group mx-2 md:mx-16 lg:mx-auto lg:max-w-5xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] rounded-xl"
        onClick={openModal}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
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
          <source src="/brand-story-preview.mp4" type="video/mp4" />
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
            {t("index.video.caption")}
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
                preload="none"
                className="w-full h-full object-contain bg-black"
              >
                <source src="/brand-story-optimized.mp4" type="video/mp4" />
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
  const { t } = useLanguage();
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
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onLoadedMetadata={(e) => {
              e.currentTarget.currentTime = 10;
            }}
            onSeeked={(e) => {
              e.currentTarget.play().catch(() => {});
            }}
          >
            <source src="/mainstage-hero-bg-optimized.mp4" type="video/mp4" />
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
            <span className="inline-block bg-white/20 border-2 border-white/50 rounded-full px-4 md:px-6 py-2 md:py-2.5 font-dm text-[10px] md:text-xs text-white/80 tracking-[2px] md:tracking-[3px] uppercase font-bold">
              ATLANTA'S INJURY ATTORNEYS · <span className="text-cta font-extrabold text-[11px] md:text-sm">EST. 2004</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-bebas text-white text-6xl md:text-[110px] lg:text-[140px] leading-[0.9] tracking-wide"
          >
            {t("index.hero.headline1")}<br />
            <span className="text-cta">{t("index.hero.headline2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="font-dm text-lg md:text-xl text-white/70 max-w-2xl mx-auto mt-8 leading-relaxed"
          >
            {t("index.hero.subtitle_1")}<br />
            <span className="text-white font-bold">{t("index.hero.subtitle_2")}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <button onClick={scrollToForm} className="cta-btn-primary cta-pulse !py-4 !px-6 md:!py-5 md:!px-10 !text-base md:!text-xl">
              {t("index.hero.cta1")}
            </button>
            <button onClick={scrollToForm} className="cta-btn-outline-light !py-4 !px-6 md:!py-5 md:!px-10 !text-base md:!text-xl">
              {t("index.hero.cta2")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <span className="text-cta text-xl md:text-3xl tracking-[3px] md:tracking-[5px] drop-shadow-[0_0_8px_rgba(var(--cta-rgb),0.4)]">★★★★★</span>
            <span className="font-dm text-xs md:text-base text-white font-bold">
              {t("index.hero.stars")}
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
          className="relative z-10 mt-8 md:mt-12 mx-4 md:mx-16 lg:mx-auto lg:max-w-5xl overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          <div className="flex items-center gap-16 animate-marquee" style={{ width: "max-content" }}>
            {[...Array(3)].flatMap(() => [
              { src: badgeExpertise, alt: "Expertise.com Best Workers' Comp", h: "h-10 md:h-14" },
              { src: badgeGoogleColor, alt: "Google Reviews 5 Stars", h: "h-8 md:h-12" },
              { src: badgeAvvo, alt: "Avvo 5 Star Rating", h: "h-8 md:h-12" },
              { src: badgeStateBar, alt: "State Bar of Georgia", h: "h-8 md:h-12" },
              { src: logoPrNewswire, alt: "PR Newswire", h: "h-5 md:h-7" },
              { src: logoMorningstar, alt: "Morningstar", h: "h-5 md:h-7" },
              { src: logoStreetInsider, alt: "Street Insider", h: "h-5 md:h-7" },
              { src: logoInsuranceNews, alt: "InsuranceNewsNet", h: "h-5 md:h-7" },
              { src: logoAttorneyMag, alt: "Attorney at Law Magazine", h: "h-4 md:h-6" },
            ]).map((b, i) => (
              <img key={i} src={b.src} alt={b.alt} className={`${b.h} w-auto object-contain flex-shrink-0 mix-blend-multiply`} />
            ))}
          </div>
        </div>

        {/* Google & Avvo Reviews — actual reviews with platform headers */}
        <div className="relative z-10 mt-10 mx-4 md:mx-16 lg:mx-auto lg:max-w-5xl">
          {/* Platform headers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4">
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJbcjfMXgE9YgRqqJDcnMQv0s"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:shadow-lg hover:border-cta/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-2">
                <span className="text-cta text-sm tracking-[2px]">★★★★★</span>
                <span className="font-dm text-sm font-bold text-text-dark">5.0</span>
                <span className="font-dm text-xs text-text-muted">· 150+ reviews</span>
              </div>
              <svg className="w-4 h-4 text-text-muted group-hover:text-cta group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://www.avvo.com/attorneys/30327-ga-darwin-johnson-475655.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:shadow-lg hover:border-cta/30 transition-all duration-300"
            >
              <img src={badgeAvvo} alt="Avvo" className="w-6 h-6 object-contain flex-shrink-0" />
              <div className="flex items-center gap-2">
                <span className="text-cta text-sm tracking-[2px]">★★★★★</span>
                <span className="font-dm text-sm font-bold text-text-dark">4.9</span>
                <span className="font-dm text-xs text-text-muted">· 17 reviews</span>
              </div>
              <svg className="w-4 h-4 text-text-muted group-hover:text-cta group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Actual review cards — show 2 on mobile, all 6 on desktop */}
          {(() => {
            const reviews = [
              { quote: "From the first call all the way to the settlement, Mr Johnson was always available to answer all my questions. This law firm is the BEST!", name: "David M.", platform: "google" as const, rating: 5 },
              { quote: "He was very straight forward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M.", platform: "google" as const, rating: 5 },
              { quote: "He was always available to answer my questions, address my concerns, and provide emotional support during what was an incredibly stressful time. His compassionate nature made me feel valued as a person, not just a client.", name: "Connie C.", platform: "google" as const, rating: 5 },
              { quote: "This was my first worker's comp case and I know I made the right decision choosing Attorney Darwin Johnson. The firm was knowledgeable, professional, and understanding.", name: "Former Client", platform: "avvo" as const, rating: 5 },
              { quote: "Attorney Johnson has a heart. He and his staff nurtured me through a very difficult time and achieved a fair settlement expediently.", name: "Sonya W.", platform: "avvo" as const, rating: 5 },
              { quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him. He responds to your calls immediately.", name: "Nicole F.", platform: "google" as const, rating: 5 },
            ];
            const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
              <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cta text-sm tracking-[2px]">{"★".repeat(review.rating)}</span>
                  {review.platform === "google" ? (
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  ) : (
                    <img src={badgeAvvo} alt="Avvo" className="w-4 h-4 object-contain" />
                  )}
                </div>
                <p className="font-dm text-sm text-text-body leading-relaxed mb-3">"{review.quote}"</p>
                <p className="font-dm text-xs font-bold text-text-dark">{review.name}</p>
              </div>
            );
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {reviews.slice(0, 2).map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
                {reviews.slice(2).map((review, i) => (
                  <div key={i + 2} className="hidden sm:block">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            );
          })()}

        </div>
      </section>
    </>
  );
};

/* ═══════════════════════════════════════════════
   3. LETTER — "Dear injured worker" long-form
   ═══════════════════════════════════════════════ */
const LetterSection = () => {
  const { t } = useLanguage();
  return (
  <section className="bg-off-white py-20 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="font-dm text-sm text-text-muted mb-8 inline-block border-b border-text-muted/40 pb-1">{t("index.letter.updated")}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-serif italic text-text-dark text-3xl md:text-4xl leading-snug mb-10">
          {t("index.letter.greeting")}
        </h2>
      </ScrollReveal>

      <div className="space-y-7 font-dm text-lg md:text-xl text-text-body leading-relaxed">
        <ScrollReveal><p>{t("index.letter.p1")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p2")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p3")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p4")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p5")}</p></ScrollReveal>
        <ScrollReveal>
          <p className="text-xl md:text-2xl">
            <span className="bg-cta/25 box-decoration-clone px-2 py-1 font-bold text-text-dark">
              {t("index.letter.p6")}
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p7")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p8")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p9")}</p></ScrollReveal>
        <ScrollReveal><p className="text-text-dark font-bold">{t("index.letter.p10")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p11")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p12")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p13")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p14")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p15")}</p></ScrollReveal>
        <ScrollReveal>
          <p className="text-xl md:text-2xl pt-2">
            <span className="bg-cta/25 box-decoration-clone px-2 py-1 font-bold text-text-dark">
              {t("index.letter.p16")}
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p17")}</p></ScrollReveal>
        <ScrollReveal><p className="text-text-dark font-bold"><span className="bg-emerald-100 box-decoration-clone px-2 py-1">{t("index.letter.p18")}</span></p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p19")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p20")}</p></ScrollReveal>
        <ScrollReveal><p>{t("index.letter.p21")} <span className="text-text-dark font-bold">{t("index.letter.p22")}</span></p></ScrollReveal>
        <ScrollReveal>
          <div className="pt-4">
            <p className="text-text-dark text-3xl md:text-4xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Darwin F. Johnson</p>
            <p className="text-text-muted text-sm mt-1">{t("index.letter.signoff")}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
  );
};

/* ═══════════════════════════════════════════════
   4. OUR OFFERINGS — KingKong Agency/Courses style
   ═══════════════════════════════════════════════ */
const Offerings = () => {
  const { t } = useLanguage();
  return (
  <section className="bg-white py-20 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-4">
          <span className="inline-block bg-navy/10 border-2 border-navy/30 rounded-full px-6 py-2.5 font-dm text-[10px] md:text-xs text-navy tracking-[2px] md:tracking-[3px] uppercase font-bold whitespace-nowrap">
            {t("index.offerings.badge")}
          </span>
        </div>
        <h2 className="font-bebas text-text-dark text-6xl md:text-8xl lg:text-[110px] tracking-wide leading-[0.9] text-center mb-4">
          {t("index.offerings.headline")}
        </h2>
        <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-2xl mx-auto mb-14">
          {t("index.offerings.subtitle")}<br />
          {t("index.offerings.subtitle2")}
        </p>
      </ScrollReveal>

      <StaggerContainer stagger={0.15} className="grid md:grid-cols-2 gap-6">
        {[
          {
            number: "01",
            label: t("index.offerings.wc.label"),
            headline: t("index.offerings.wc.headline"),
            desc: t("index.offerings.wc.desc"),
            path: "wc",
            stars: t("index.offerings.wc.stars"),
            // Cool navy — the brand blue
            bg: "linear-gradient(160deg, hsl(220 55% 22%) 0%, hsl(220 60% 12%) 60%, hsl(220 65% 8%) 100%)",
          },
          {
            number: "02",
            label: t("index.offerings.pi.label"),
            headline: t("index.offerings.pi.headline"),
            desc: t("index.offerings.pi.desc"),
            path: "pi",
            stars: t("index.offerings.pi.stars"),
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
                  <h3 className="font-bebas text-white text-6xl md:text-8xl tracking-wide leading-[0.85] mb-6">
                    {card.headline}
                  </h3>
                  <p className="font-dm text-lg md:text-xl text-white/60 leading-relaxed mb-8">
                    {card.desc}
                  </p>

                  <div className="rounded-lg py-4 px-6 text-center transition-colors bg-cta group-hover:bg-cta-hover">
                    <span className="font-dm font-bold text-white text-base tracking-wide">{t("index.offerings.checkCase")}</span>
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
};


/* ═══════════════════════════════════════════════
   4b. UNIFIED QUIZ — 60-Second Case Check
   ═══════════════════════════════════════════════ */
const UnifiedQuiz = () => {
  const { t } = useLanguage();
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
    { name: t("injury.backInjuries"), hook: t("hook.injury.back") },
    { name: t("injury.brainInjuries"), hook: t("hook.injury.brain") },
    { name: t("injury.carpalTunnel"), hook: t("hook.injury.carpal") },
    { name: t("injury.crushInjuries"), hook: t("hook.injury.crush") },
    { name: t("injury.headInjuries"), hook: t("hook.injury.head") },
    { name: t("injury.hipInjuries"), hook: t("hook.injury.hip") },
    { name: t("injury.kneeInjuries"), hook: t("hook.injury.knee") },
    { name: t("injury.neckInjuries"), hook: t("hook.injury.neck") },
    { name: t("injury.paralysis"), hook: t("hook.injury.paralysis") },
    { name: t("injury.shoulderInjuries"), hook: t("hook.injury.shoulder") },
    { name: t("injury.spinalCordInjuries"), hook: t("hook.injury.spinal") },
    { name: t("injury.tbi"), hook: t("hook.injury.tbi") },
  ];

  // Industries with hooks (WC only)
  const industries: { name: string; hook: string }[] = [
    { name: t("industry.airport"), hook: t("hook.industry.airport") },
    { name: t("industry.construction"), hook: t("hook.industry.construction") },
    { name: t("industry.firefighter"), hook: t("hook.industry.firefighter") },
    { name: t("industry.grocery"), hook: t("hook.industry.grocery") },
    { name: t("industry.healthcare"), hook: t("hook.industry.healthcare") },
    { name: t("industry.industrial"), hook: t("hook.industry.industrial") },
    { name: t("industry.lawEnforcement"), hook: t("hook.industry.law") },
    { name: t("industry.poultry"), hook: t("hook.industry.poultry") },
    { name: t("industry.roofing"), hook: t("hook.industry.roofing") },
    { name: t("industry.steelworker"), hook: t("hook.industry.steelworker") },
    { name: t("industry.power"), hook: t("hook.industry.power") },
    { name: t("industry.tree"), hook: t("hook.industry.tree") },
    { name: t("industry.trucking"), hook: t("hook.industry.trucking") },
  ];

  // Case types with hooks (PI only)
  const caseTypes: { name: string; hook: string }[] = [
    { name: t("caseType.car"), hook: t("hook.caseType.car") },
    { name: t("caseType.truck"), hook: t("hook.caseType.truck") },
    { name: t("caseType.motorcycle"), hook: t("hook.caseType.motorcycle") },
    { name: t("caseType.pedestrian"), hook: t("hook.caseType.pedestrian") },
    { name: t("caseType.slipFall"), hook: t("hook.caseType.slipFall") },
    { name: t("caseType.medical"), hook: t("hook.caseType.medical") },
    { name: t("caseType.wrongfulDeath"), hook: t("hook.caseType.wrongfulDeath") },
    { name: t("caseType.other"), hook: t("hook.caseType.other") },
  ];

  const injuryData = injuries.find(i => i.name === (path === "wc" ? selectedInjury : selectedPiInjury));
  const industryData = industries.find(i => i.name === selectedIndustry);
  const caseTypeData = caseTypes.find(c => c.name === selectedCaseType);

  // Step titles
  const getStepTitle = () => {
    if (path === "wc") {
      if (step === 1) return { num: "01", label: t("index.quiz.wc.step1.title") };
      if (step === 2) return { num: "02", label: t("index.quiz.wc.step2.title") };
      if (step === 3) return { num: "03", label: t("index.quiz.wc.step3.title") };
    } else if (path === "pi") {
      if (step === 1) return { num: "01", label: t("index.quiz.pi.step1.title") };
      if (step === 2) return { num: "02", label: t("index.quiz.pi.step2.title") };
      if (step === 3) return { num: "03", label: t("index.quiz.pi.step3.title") };
    }
    return { num: "00", label: "" };
  };

  return (
    <section
      id="quiz-section"
      className="relative pt-20 md:pt-32 pb-48 md:pb-72 px-6 scroll-mt-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(var(--bg-off)) 8%, hsl(var(--bg-off)) 32%, hsl(30 8% 93%) 38%, hsl(200 8% 90%) 43%, hsl(215 12% 85%) 48%, hsl(218 18% 76%) 54%, hsl(220 22% 65%) 60%, hsl(220 30% 52%) 67%, hsl(220 40% 38%) 74%, hsl(220 50% 26%) 81%, hsl(220 56% 18%) 88%, hsl(220 60% 12%) 94%, hsl(220 60% 12%) 100%)",
        marginBottom: "-4px",
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="inline-block bg-navy/10 border-2 border-navy/30 rounded-full px-6 py-2.5 font-dm text-xs text-navy tracking-[3px] uppercase font-bold">
              {t("index.quiz.badge")}
            </span>
          </div>
          <h2 className="font-bebas text-text-dark text-6xl md:text-8xl lg:text-[110px] tracking-wide leading-[0.9] text-center mb-4">
            {t("index.quiz.headline1")}<br />
            {t("index.quiz.headline2")}
          </h2>
          <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-2xl mx-auto mb-14">
            {t("index.quiz.subtitle1")}<br />
            {t("index.quiz.subtitle2")}
          </p>
        </ScrollReveal>

        {/* Quiz container — letter/paper aesthetic */}
        <div
          className="relative rounded-2xl min-h-fit md:min-h-[600px]"
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
              <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] text-center">
                <p className="font-serif italic text-text-dark text-3xl md:text-4xl mb-2">{t("index.quiz.empty.greeting")}</p>
                <p className="font-dm text-text-body text-base md:text-lg max-w-xl mb-10 leading-relaxed">
                  {t("index.quiz.empty.desc")}
                </p>

                <span className="font-dm text-xs text-text-muted tracking-[3px] uppercase mb-5">{t("index.quiz.empty.which")}</span>

                <div className="flex flex-row gap-3 md:gap-4 w-full max-w-2xl">
                  <button
                    onClick={() => { setPath("wc"); setStep(1); scrollToContent(); }}
                    className="cta-btn-primary !py-4 !px-4 md:!py-5 md:!px-6 !text-xs md:!text-sm flex-1 whitespace-nowrap"
                  >
                    {t("index.quiz.empty.wc")}
                  </button>
                  <button
                    onClick={() => { setPath("pi"); setStep(1); scrollToContent(); }}
                    className="cta-btn-outline !py-4 !px-4 md:!py-5 md:!px-6 !text-xs md:!text-sm flex-1 whitespace-nowrap"
                  >
                    {t("index.quiz.empty.pi")}
                  </button>
                </div>

                <p className="font-serif italic text-text-dark text-2xl md:text-3xl mt-10" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Darwin F. Johnson
                </p>
                <p className="font-dm text-xs text-text-muted mt-1">{t("index.letter.signoff")}</p>
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
                      {t("index.quiz.step")} {getStepTitle().num} {t("index.quiz.of")} 03
                    </span>
                    <span className="font-dm text-xs text-text-muted">
                      {path === "wc" ? "Workers' Compensation" : "Personal Injury"}
                    </span>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="font-dm text-xs text-text-muted hover:text-text-dark transition-colors underline"
                  >
                    {t("index.quiz.startOver")}
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
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wide leading-[0.95] mb-2">{t("index.quiz.wc.step1.title")}</h3>
                      <p className="font-dm text-base text-text-body mb-8">{t("index.quiz.wc.step1.desc")}</p>
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
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wide leading-[0.95] mb-2">{t("index.quiz.wc.step2.title")}</h3>
                      <p className="font-dm text-base text-text-body mb-8">{t("index.quiz.wc.step2.desc")}</p>
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
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wide leading-[0.95] mb-2">{t("index.quiz.wc.step3.title")}</h3>
                      <p className="font-dm text-base text-text-body mb-8">{t("index.quiz.wc.step3.desc")}</p>
                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-off-white rounded-lg border border-card-border p-5">
                          <p className="font-dm text-xs text-cta tracking-[2px] uppercase font-bold mb-3">{t("index.quiz.wc.onTheJob")}</p>
                          {[t("index.quiz.wc.onTheJob.1"), t("index.quiz.wc.onTheJob.2"), t("index.quiz.wc.onTheJob.3")].map((item, i) => (
                            <p key={i} className="font-dm text-sm text-text-body mb-2 flex items-start gap-2"><span className="text-cta font-bold">✓</span> {item}</p>
                          ))}
                        </div>
                        <div className="bg-off-white rounded-lg border border-card-border p-5">
                          <p className="font-dm text-xs text-cta tracking-[2px] uppercase font-bold mb-3">{t("index.quiz.wc.employment")}</p>
                          {[t("index.quiz.wc.employment.1"), t("index.quiz.wc.employment.2"), t("index.quiz.wc.employment.3")].map((item, i) => (
                            <p key={i} className="font-dm text-sm text-text-body mb-2 flex items-start gap-2"><span className="text-cta font-bold">✓</span> {item}</p>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => { setWcQualified("yes"); setStep(4); scrollToContent(); }}
                          className="cta-btn-primary !py-4 !px-6 !text-base flex-1"
                        >
                          {t("index.quiz.wc.yesIMeet")}
                        </button>
                        <button
                          onClick={() => { setWcQualified("no"); setStep(4); scrollToContent(); }}
                          className="cta-btn-outline !py-4 !px-6 !text-base flex-1"
                        >
                          {t("index.quiz.wc.notSure")}
                        </button>
                      </div>
                      <div className="mt-5 bg-off-white rounded-lg border border-cta/20 p-4 flex items-start gap-3">
                        <span className="text-cta text-lg flex-shrink-0 mt-0.5">💡</span>
                        <p className="font-dm text-sm text-text-body leading-relaxed">
                          <span className="font-bold text-text-dark">{t("index.quiz.wc.noWrongAnswer")}</span> {t("index.quiz.wc.noWrongAnswerDesc")}
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
                          <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">{t("index.quiz.wc.result.badge")}</span>
                        </div>
                        <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wide leading-[0.95] mb-6">
                          {t("index.quiz.wc.result.headline")}
                        </h4>
                        <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                          <p className="font-dm text-sm text-white/60 mb-3">{t("index.quiz.wc.result.situation")}</p>
                          <div className="space-y-2">
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.injury")}</span> {selectedInjury}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.workplace")}</span> {selectedIndustry}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.status")}</span> {t("index.quiz.wc.result.qualified")}</p>
                          </div>
                        </div>
                        {injuryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">{injuryData.hook}</p>}
                        {industryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{industryData.hook}</p>}
                        <div className="border-t border-white/10 pt-6 mb-6">
                          <p className="font-dm text-base text-white/80 leading-relaxed">
                            {t("index.quiz.wc.result.darwinTrack")}
                          </p>
                        </div>
                        <button onClick={scrollToForm} className="cta-btn-primary !py-4 !px-8 !text-base">
                          {t("index.hero.cta1")}
                        </button>
                        <p className="font-dm text-xs text-white/30 mt-3">{t("index.quiz.wc.result.freeNote")}</p>
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
                          <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">{t("index.quiz.wc.notQualified.badge")}</span>
                        </div>
                        <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wide leading-[0.95] mb-6">
                          {t("index.quiz.wc.notQualified.headline")}
                        </h4>
                        <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                          <p className="font-dm text-sm text-white/60 mb-3">{t("index.quiz.wc.result.situation")}</p>
                          <div className="space-y-2">
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.injury")}</span> {selectedInjury}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.workplace")}</span> {selectedIndustry}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.status")}</span> {t("index.quiz.wc.notQualified.status")}</p>
                          </div>
                        </div>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">
                          {t("index.quiz.wc.notQualified.p1")}
                        </p>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">
                          Based on your <span className="text-cta font-bold">{selectedInjury?.toLowerCase()}</span> at a <span className="text-cta font-bold">{selectedIndustry?.toLowerCase()}</span> workplace, you may have a claim if a third party was involved — defective equipment, a subcontractor, unsafe property, or a motor vehicle accident on the job.
                        </p>
                        {injuryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{injuryData.hook}</p>}
                        <div className="border-t border-white/10 pt-6 mb-6">
                          <p className="font-dm text-base text-white/80 leading-relaxed">
                            {t("index.quiz.wc.notQualified.both")}
                          </p>
                        </div>
                        <button onClick={scrollToForm} className="cta-btn-primary !py-4 !px-8 !text-base">
                          {t("index.hero.cta1")}
                        </button>
                        <p className="font-dm text-xs text-white/30 mt-3">{t("index.quiz.wc.notQualified.note")}</p>
                      </div>
                    </div>
                  )}

                  {/* ─── PERSONAL INJURY PATH ─── */}
                  {path === "pi" && step === 1 && (
                    <div>
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wide leading-[0.95] mb-2">{t("index.quiz.pi.step1.title")}</h3>
                      <p className="font-dm text-base text-text-body mb-8">{t("index.quiz.pi.step1.desc")}</p>
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
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wide leading-[0.95] mb-2">{t("index.quiz.pi.step2.title")}</h3>
                      <p className="font-dm text-base text-text-body mb-8">{t("index.quiz.pi.step2.desc")}</p>
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
                      <h3 className="font-bebas text-text-dark text-3xl md:text-5xl tracking-wide leading-[0.95] mb-2">{t("index.quiz.pi.step3.title")}</h3>
                      <p className="font-dm text-base text-text-body mb-8">
                        {t("index.quiz.pi.step3.desc")}
                      </p>
                      <div className="bg-off-white rounded-lg border border-card-border p-6 mb-8">
                        <p className="font-dm text-sm text-text-body leading-relaxed mb-3">
                          <span className="font-bold text-text-dark">{t("index.quiz.pi.examples.title")}</span>
                        </p>
                        <ul className="space-y-2 font-dm text-sm text-text-body">
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> {t("index.quiz.pi.examples.1")}</li>
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> {t("index.quiz.pi.examples.2")}</li>
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> {t("index.quiz.pi.examples.3")}</li>
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> {t("index.quiz.pi.examples.4")}</li>
                          <li className="flex items-start gap-2"><span className="text-cta font-bold mt-0.5">→</span> {t("index.quiz.pi.examples.5")}</li>
                        </ul>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => { setThirdPartyFault("yes"); setStep(4); scrollToContent(); }}
                          className="cta-btn-primary !py-4 !px-6 !text-base flex-1"
                        >
                          {t("index.quiz.pi.yesFault")}
                        </button>
                        <button
                          onClick={() => { setThirdPartyFault("no"); setStep(4); scrollToContent(); }}
                          className="cta-btn-outline !py-4 !px-6 !text-base flex-1"
                        >
                          {t("index.quiz.pi.notSureFault")}
                        </button>
                      </div>
                      <div className="mt-5 bg-off-white rounded-lg border border-cta/20 p-4 flex items-start gap-3">
                        <span className="text-cta text-lg flex-shrink-0 mt-0.5">💡</span>
                        <p className="font-dm text-sm text-text-body leading-relaxed">
                          <span className="font-bold text-text-dark">{t("index.quiz.pi.notSureTip")}</span> {t("index.quiz.pi.notSureTipDesc")}
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
                            <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">{t("index.quiz.wc.result.badge")}</span>
                          </div>
                          <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wide leading-[0.95] mb-6">
                            {t("index.quiz.pi.result.headline")}
                          </h4>
                          <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                            <p className="font-dm text-sm text-white/60 mb-3">{t("index.quiz.wc.result.situation")}</p>
                            <div className="space-y-2">
                              <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.pi.result.accident")}</span> {selectedCaseType}</p>
                              <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.injury")}</span> {selectedPiInjury}</p>
                              <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.status")}</span> {t("index.quiz.pi.result.status.confirmed")}</p>
                            </div>
                          </div>
                          {caseTypeData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">{caseTypeData.hook}</p>}
                          {injuryData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{injuryData.hook}</p>}

                          {/* Urgency — 2 year statute */}
                          <div className="bg-cta/10 border border-cta/20 rounded-lg p-5 mb-6">
                            <p className="font-dm text-sm text-cta font-bold tracking-wider mb-1">⏱ {t("index.quiz.pi.result.deadline.title")}</p>
                            <p className="font-dm text-sm text-white/80">{t("index.quiz.pi.result.deadline.desc")}</p>
                          </div>

                          <div className="border-t border-white/10 pt-6">
                            <p className="font-dm text-base text-white/80 leading-relaxed">
                              {t("index.quiz.pi.result.keepReading")}
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
                          <span className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta">{t("index.quiz.pi.notSureResult.badge")}</span>
                        </div>
                        <h4 className="font-bebas text-white text-4xl md:text-6xl tracking-wide leading-[0.95] mb-6">
                          {t("index.quiz.pi.notSureResult.headline")}
                        </h4>
                        <div className="bg-white/[0.06] rounded-lg border border-white/10 p-5 mb-6">
                          <p className="font-dm text-sm text-white/60 mb-3">{t("index.quiz.wc.result.situation")}</p>
                          <div className="space-y-2">
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.pi.result.accident")}</span> {selectedCaseType}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.injury")}</span> {selectedPiInjury}</p>
                            <p className="font-dm text-white"><span className="text-cta font-bold">{t("index.quiz.wc.result.status")}</span> {t("index.quiz.pi.notSureResult.status.unclear")}</p>
                          </div>
                        </div>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-4">
                          {t("index.quiz.pi.notSureResult.p1")}
                        </p>
                        <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">
                          {t("index.quiz.pi.notSureResult.p2")}
                        </p>
                        {caseTypeData && <p className="font-dm text-lg text-white/80 leading-relaxed mb-6">{caseTypeData.hook}</p>}

                        <div className="border-t border-white/10 pt-6 mb-6">
                          <p className="font-dm text-base text-white/80 leading-relaxed">
                            {t("index.quiz.pi.notSureResult.consult")}
                          </p>
                        </div>
                        <button onClick={scrollToForm} className="cta-btn-primary !py-4 !px-8 !text-base">
                          {t("index.hero.cta1")}
                        </button>
                        <p className="font-dm text-xs text-white/30 mt-3">{t("index.quiz.pi.notSureResult.freeNote")}</p>
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
                    <span>{t("index.quiz.back")}</span>
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
const StatsSection = () => {
  const { t } = useLanguage();

  return (
  <>
    {/* ── PART 1: Dark navy — headline + subtitle ── */}
    <section
      className="relative pt-24 md:pt-40 pb-0 px-6 overflow-hidden"
      style={{
        background: "hsl(220 60% 12%)",
        marginTop: "-2px",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-block mb-6">
            <span className="inline-block bg-cta/15 border-2 border-cta/40 rounded-full px-6 py-2.5 font-dm text-xs text-cta tracking-[3px] uppercase font-bold">
              {t("index.stats.badge")}
            </span>
          </div>
          <h2 className="font-bebas text-white text-6xl md:text-8xl lg:text-[110px] tracking-wide leading-[0.9] mb-6">
            {t("index.stats.headline1")}<br />
            {t("index.stats.headline2")}
          </h2>
          <p className="font-dm text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            {t("index.stats.subtitle1")}<br className="hidden md:block" />
            {t("index.stats.subtitle2")}<br className="hidden md:block" />
            <span className="text-white font-bold">{t("index.stats.subtitle3")}</span>
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* ── PART 2: Video background — justice scale center stage ── */}
    <section className="relative overflow-hidden -mt-20 md:-mt-28" style={{ background: "hsl(220 60% 12%)" }}>
      {/* Video fills this entire section */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-auto block"
      >
        <source src="/justice-scale-bg-optimized.mp4" type="video/mp4" />
      </video>

      {/* Top gradient — deep fade from solid navy into video, tall enough to be invisible */}
      <div className="absolute top-0 left-0 right-0 h-[45%] pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(220 60% 12%) 0%, hsl(220 60% 12% / 0.95) 15%, hsl(220 60% 12% / 0.7) 35%, hsl(220 60% 12% / 0.4) 55%, hsl(220 60% 12% / 0.15) 75%, transparent 100%)" }} />

      {/* Bottom gradient — longer, smoother fade from video into white */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none" style={{ background: "linear-gradient(0deg, hsl(0 0% 100%) 0%, hsl(0 0% 100% / 0.95) 12%, hsl(0 0% 100% / 0.8) 25%, hsl(0 0% 100% / 0.55) 40%, hsl(0 0% 100% / 0.3) 55%, hsl(0 0% 100% / 0.1) 72%, transparent 100%)" }} />
    </section>

    {/* ── PART 3: White — stat cards + employer logos ── */}
    <section
      className="relative pt-0 pb-24 md:pb-36 px-6 overflow-hidden -mt-16 md:-mt-24"
      style={{ background: "transparent" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Stat cards */}
        <div className="max-w-6xl mx-auto relative z-20">
          <StaggerContainer stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { to: 250, prefix: "$", suffix: "M+", title: t("index.stats.recovered"), desc: t("index.stats.recoveredDesc") },
              { to: 10000, suffix: "+", title: t("index.stats.lives"), desc: t("index.stats.livesDesc"), separator: true },
              { to: 20, suffix: "+", title: t("index.stats.years"), desc: t("index.stats.yearsDesc") },
              { to: 15, suffix: "+", title: t("index.stats.industries"), desc: t("index.stats.industriesDesc") },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-xl border border-card-border p-4 md:p-9 h-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] text-left">
                  <p className="font-dm font-bold text-xs md:text-lg text-text-dark mb-2 md:mb-3">{s.title}</p>
                  <div className="w-full h-[2px] bg-gradient-to-r from-cta via-cta/60 to-transparent mb-3 md:mb-5" />
                  <div className="font-bebas text-3xl md:text-6xl text-text-dark tracking-wide">
                    <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} separator={s.separator} decimals={0} />
                  </div>
                  <p className="font-dm text-sm md:text-base text-text-muted mt-4 leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Employer logos — colored, on white bg */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block bg-navy/10 border-2 border-navy/30 rounded-full px-6 py-2.5 font-dm text-xs text-navy tracking-[3px] uppercase font-bold">
                {t("index.stats.employersBadge")}
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
  </>
  );
};

/* ═══════════════════════════════════════════════
   6. CASE RESULTS — KingKong case study grid
   ═══════════════════════════════════════════════ */
const CaseResults = () => {
  const { t } = useLanguage();
  const cases = [
    { img: caseCard01, alt: "Construction Injury — $4,200,000" },
    { img: caseCard02, alt: "Industrial Accident — $2,400,000" },
    { img: caseCard03, alt: "Warehouse Injury — $1,200,000" },
    { img: caseCard04, alt: "Back Injury Trucking — $850,000" },
    { img: caseCard05, alt: "Head Injury Factory — $750,000" },
    { img: caseCard06, alt: "Shoulder Injury — $620,000" },
    { img: caseCard07, alt: "Car Accident — $480,000" },
    { img: caseCard08, alt: "Knee Injury Healthcare — $350,000" },
    { img: caseCard09, alt: "Truck Accident — $275,000" },
    { img: caseCard10, alt: "Insurance Denial Overturned — $180,000" },
    { img: caseCard11, alt: "Neck Injury Retail — $150,000" },
    { img: caseCard12, alt: "Motorcycle Accident — $95,000" },
  ];

  const allCards = cases.map((c, i) => (
    <article
      key={`case-${i}`}
      className="flex-shrink-0 w-[280px] md:w-[320px] h-[400px] md:h-[450px] rounded-2xl overflow-hidden card-lift cursor-default relative group isolate border-0 outline-none ring-0"
      style={{ boxShadow: 'none', borderColor: 'transparent' }}
    >
      <img
        src={c.img}
        alt={c.alt}
        loading="lazy"
        decoding="async"
        width={320}
        height={450}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </article>
  ));

  return (
    <section className="bg-dark py-20 md:py-32">
      <div className="px-6 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="inline-block bg-cta/15 border-2 border-cta/40 rounded-full px-6 py-2.5 font-dm text-xs text-cta tracking-[3px] uppercase font-bold">
              {t("index.cases.badge")}
            </span>
          </div>
          <h2 className="font-bebas text-white text-6xl md:text-8xl lg:text-[110px] tracking-wide leading-[0.9] text-center mb-4">
            {t("index.cases.headline1")}<br />{t("index.cases.headline2")}
          </h2>
          <p className="font-dm text-lg md:text-xl text-white/50 text-center max-w-2xl mx-auto mb-14">
            {t("index.cases.subtitle")}
          </p>
        </ScrollReveal>
      </div>

      {/* Auto-sliding cards — full width, KingKong style */}
      <div className="relative overflow-hidden">
        <div className="flex gap-5 animate-marquee py-2" style={{ width: "max-content" }}>
          {[...allCards, ...allCards]}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 max-w-6xl mx-auto">
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-xl">
              {t("index.cases.cta")}
            </button>
            <div className="flex items-center justify-center gap-3 mt-5">
              <span className="text-cta text-xl tracking-[4px]">★★★★★</span>
              <span className="font-dm text-sm text-white/40">{t("index.cases.stars")}</span>
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
  const { t } = useLanguage();
  const reasons = [
    {
      title: t("index.guarantee.reason1.title"),
      body: [
        t("index.guarantee.reason1.p1"),
        t("index.guarantee.reason1.p2"),
        t("index.guarantee.reason1.p3"),
      ],
    },
    {
      title: t("index.guarantee.reason2.title"),
      body: [
        t("index.guarantee.reason2.p1"),
        t("index.guarantee.reason2.p2"),
        t("index.guarantee.reason2.p3"),
        t("index.guarantee.reason2.p4"),
      ],
    },
    {
      title: t("index.guarantee.reason3.title"),
      body: [
        t("index.guarantee.reason3.p1"),
        t("index.guarantee.reason3.p2"),
        t("index.guarantee.reason3.p3"),
        t("index.guarantee.reason3.p4"),
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
                ⚠️ {t("index.guarantee.warningBadge")}
              </span>
            </div>

            {/* Massive KingKong headline */}
            <h2 className="font-bebas text-text-dark text-6xl md:text-8xl lg:text-[110px] tracking-wide leading-[0.9] mb-10">
              {t("index.guarantee.headline1")}<br />{t("index.guarantee.headline2")}<br /><span className="text-cta">{t("index.guarantee.headline3")}</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Left-aligned paragraphs — match numbered reasons column width */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="font-dm text-xl md:text-2xl text-text-body leading-relaxed space-y-7 mb-12">
              <p>
                <span className="bg-cta/25 box-decoration-clone px-2 py-1 font-bold text-text-dark">
                  {t("index.guarantee.tooGood")}
                </span>
              </p>
              <p className="text-text-dark font-bold">{t("index.guarantee.darwinBacks")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="font-dm text-xl md:text-2xl text-text-body leading-relaxed space-y-7 mb-2 italic">
              <p>{t("index.guarantee.howPromise1")}</p>
              <p>{t("index.guarantee.howPromise2")}</p>
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
              <p className="font-bebas text-cta text-7xl md:text-8xl tracking-wide leading-none mb-3">$0</p>
              <p className="font-dm text-xs md:text-sm text-text-muted uppercase tracking-[2px] font-bold">{t("index.guarantee.stat1")}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center md:px-4 md:border-x md:border-gray-200">
              <p className="font-bebas text-cta text-7xl md:text-8xl tracking-wide leading-none mb-3">$0</p>
              <p className="font-dm text-xs md:text-sm text-text-muted uppercase tracking-[2px] font-bold">{t("index.guarantee.stat2")}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center md:px-4">
              <p className="font-bebas text-cta text-5xl md:text-6xl tracking-wide leading-none mb-3 pt-2 md:pt-4">{t("index.guarantee.stat3.label")}</p>
              <p className="font-dm text-xs md:text-sm text-text-muted uppercase tracking-[2px] font-bold">{t("index.guarantee.stat3")}</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* CTA with urgency */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <button onClick={scrollToForm} className="cta-btn-primary cta-pulse !py-6 !px-12 !text-xl">
              {t("index.guarantee.cta")}
            </button>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="text-cta text-xl tracking-[4px]">★★★★★</span>
              <span className="font-dm text-sm text-text-muted font-bold">{t("index.guarantee.ctaStars")}</span>
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
  const youtubeId = "x_3rzl1dVu4";
  const thumbnail = `https://img.youtube.com/vi/7whm6WsDwBU/maxresdefault.jpg`;
  const t = { quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him. He responds to your calls immediately.", name: "Nicole F.", role: "Workers' Comp Client" };

  const [videoModalOpen, setVideoModalOpen] = useState(false);

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
          <div className="aspect-[4/3] md:aspect-[21/9] bg-gradient-to-br from-navy-dark to-dark flex items-center justify-center relative">
            {/* Video thumbnail */}
            <img
              src={thumbnail}
              alt="Client testimonial video"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

            {/* Darwin logo — top left */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
              <img src={darwinLogo} alt="Darwin Law Firm" className="h-6 md:h-8 w-auto opacity-90 drop-shadow-lg" />
            </div>

            {/* Play button */}
            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-cta/90 flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform"
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Quote overlay — bottom left */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-14 z-10">
              <div className="max-w-3xl">
                <p className="font-serif italic text-white text-base md:text-3xl leading-relaxed mb-2 md:mb-4">
                  "{t.quote}"
                </p>
                <p className="font-dm text-cta font-bold text-xs md:text-base tracking-wider">
                  {t.name}, <span className="text-white/50 font-normal">{t.role}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>


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
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
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
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: t("index.faq.q1"), a: t("index.faq.a1") },
    { q: t("index.faq.q2"), a: t("index.faq.a2") },
    { q: t("index.faq.q3"), a: t("index.faq.a3") },
    { q: t("index.faq.q4"), a: t("index.faq.a4") },
    { q: t("index.faq.q5"), a: t("index.faq.a5") },
    { q: t("index.faq.q6"), a: t("index.faq.a6") },
  ];

  return (
    <section className="bg-off-white py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="inline-block bg-navy/10 border-2 border-navy/30 rounded-full px-6 py-2.5 font-dm text-xs text-navy tracking-[3px] uppercase font-bold">
              {t("index.faq.badge")}
            </span>
          </div>
          <h2 className="font-bebas text-text-dark text-6xl md:text-8xl lg:text-[110px] tracking-wide leading-[0.9] text-center mb-6">
            {t("index.faq.headline1")}<br />
            {t("index.faq.headline2")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-text-dark">{t("index.faq.headline3")}</span>
              <span
                className="absolute inset-x-0 bottom-2 md:bottom-4 h-[0.35em] bg-cta/40 -z-0"
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="font-dm text-lg md:text-xl text-text-body text-center max-w-xl mx-auto mb-14">
            {t("index.faq.subtitle")}
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
const CheckCard = ({ amount, name, rotate, delay, bobDuration, scale = 1, blur = 0 }: { amount: string; name: string; rotate: number; delay: number; bobDuration: number; scale?: number; blur?: number }) => {
  const { t } = useLanguage();
  return (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: rotate - 3 }}
    whileInView={{ opacity: blur > 2 ? 0.6 : 1, scale, rotate }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    style={{ filter: blur ? `blur(${blur}px)` : "none" }}
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: bobDuration, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[140px] md:w-[170px]"
    >
      <div className="bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-lg p-3 md:p-4">
        {/* Check header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-cta/60" />
            <span className="font-dm text-[8px] md:text-[9px] text-white/30 uppercase tracking-wider">{t("index.final.settlement")}</span>
          </div>
          <span className="font-dm text-[8px] md:text-[9px] text-cta/60 font-bold">{t("index.final.paid")}</span>
        </div>
        {/* Amount */}
        <p className="font-bebas text-white text-2xl md:text-3xl tracking-wide leading-none mb-1.5">{amount}</p>
        {/* Dotted line + name */}
        <div className="border-t border-dashed border-white/10 pt-1.5">
          <span className="font-dm text-[9px] md:text-[10px] text-white/25">{name}</span>
        </div>
      </div>
    </motion.div>
  </motion.div>
  );
};

const FinalCTA = () => {
  const { t } = useLanguage();
  const checks = [
    // Sharp — hero cards
    { amount: "$4.2M", name: "Construction Injury", top: "10%", left: "3%", rotate: -6, delay: 0.2, bob: 7, scale: 1.1, blur: 0 },
    { amount: "$620K", name: "Shoulder Injury", top: "42%", right: "2%", rotate: 5, delay: 0.8, bob: 7.5, scale: 0.8, blur: 0 },
    { amount: "$95K", name: "Motorcycle Accident", top: "75%", right: "6%", rotate: -5, delay: 1.1, bob: 9.5, scale: 1.0, blur: 0 },
    // Mid-depth
    { amount: "$2.4M", name: "Industrial Accident", top: "5%", right: "12%", rotate: 4, delay: 0.6, bob: 8.5, scale: 0.7, blur: 2 },
    { amount: "$850K", name: "Trucking Injury", top: "55%", left: "1%", rotate: -3, delay: 1.0, bob: 9, scale: 0.75, blur: 1 },
    { amount: "$180K", name: "Insurance Denial", top: "82%", left: "10%", rotate: 3, delay: 1.4, bob: 8, scale: 0.65, blur: 3 },
    // Inner — blurred atmosphere
    { amount: "$1.2M", name: "Warehouse Injury", top: "22%", left: "18%", rotate: 3, delay: 0.9, bob: 10, scale: 0.55, blur: 4 },
    { amount: "$350K", name: "Knee Injury", top: "68%", right: "18%", rotate: -3, delay: 1.3, bob: 8.5, scale: 0.6, blur: 3 },
    // Top middle — blurred depth
    { amount: "$750K", name: "Head Injury", top: "-2%", left: "35%", rotate: 2, delay: 0.4, bob: 11, scale: 0.5, blur: 5 },
    { amount: "$275K", name: "Truck Accident", top: "1%", right: "30%", rotate: -4, delay: 0.7, bob: 9, scale: 0.45, blur: 4 },
    // Bottom middle — blurred depth
    { amount: "$480K", name: "Car Accident", top: "88%", left: "30%", rotate: -2, delay: 1.5, bob: 10.5, scale: 0.5, blur: 5 },
    { amount: "$150K", name: "Neck Injury", top: "90%", right: "28%", rotate: 3, delay: 1.7, bob: 9.5, scale: 0.45, blur: 4 },
  ];

  return (
    <section className="relative bg-dark overflow-hidden py-28 md:py-44 px-6">
      {/* Subtle radial glow behind the headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--cta) / 0.12) 0%, transparent 55%)",
        }}
      />

      {/* Floating settlement checks */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {checks.map((check, i) => (
          <div
            key={i}
            className="absolute"
            style={{ top: check.top, left: check.left, right: check.right }}
          >
            <CheckCard
              amount={check.amount}
              name={check.name}
              rotate={check.rotate}
              delay={check.delay}
              bobDuration={check.bob}
              scale={check.scale}
              blur={check.blur}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-bebas text-white text-5xl md:text-7xl lg:text-[110px] tracking-wide leading-[0.95] mb-14">
            {t("index.final.headline1")}<br />
            {t("index.final.headline2")}<br />
            <span className="text-cta">{t("index.final.headline3")}</span>
          </h2>

          <button
            onClick={scrollToForm}
            className="cta-btn-primary cta-pulse !py-7 md:!py-8 !px-10 md:!px-16 !text-lg md:!text-2xl w-full max-w-2xl"
          >
            {t("index.final.cta")}
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
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const formTestimonials = [
    { quote: "Insurance offered $12,000. Darwin got me $95,000.", name: "Adtresa M.", role: "Personal Injury Client" },
    { quote: "Darwin Johnson is the best in the state of Georgia. He responds to your calls immediately.", name: "Nicole F.", role: "Workers' Comp Client" },
    { quote: "We just settled! They tried to fire me. Wrong thing to do when you have attorneys like this.", name: "Jeremy H.", role: "Workers' Comp Client" },
    { quote: "Attorney Johnson has a heart. He achieved a fair settlement expediently.", name: "Sonya W.", role: "Workers' Comp Client" },
    { quote: "I am very pleased with my settlement! It was worth the wait!", name: "Former Client", role: "Workers' Comp Client" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % formTestimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/book-a-call");
  };

  const inputClass = "w-full bg-off-white border border-gray-200 text-text-dark font-dm text-base px-4 py-4 rounded-lg focus:border-cta focus:ring-2 focus:ring-cta/20 focus:outline-none transition-all duration-200 placeholder:text-text-muted/60";
  const labelClass = "font-dm text-sm md:text-xs font-bold text-text-dark tracking-[2px] uppercase mb-2 block";

  return (
    <section id="form-section" className="bg-dark py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Geometric dot grid — subtle premium texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Faint grid lines — layered depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Atmospheric radial glow */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 30%, hsl(var(--cta)) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Eyebrow — narrative setup */}
        <ScrollReveal delay={0.1}>
          <p className="font-dm text-xs md:text-sm text-cta tracking-[4px] uppercase font-bold text-center mb-8">
            {t("index.form.eyebrow")}
          </p>
        </ScrollReveal>

        {/* Transformation headline — word-by-word motion reveal on the punchline */}
        <motion.h2
          className="font-bebas text-white tracking-wide leading-[0.95] text-center mb-8"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
        >
          <motion.span
            className="block tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
            }}
          >
            {t("index.form.headline1")}
          </motion.span>
          <motion.span
            className="block text-cta tracking-wide"
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
            {t("index.form.headline2")}
          </motion.span>
        </motion.h2>

        {/* Subtitle */}
        <ScrollReveal delay={0.6}>
          <p className="font-dm text-lg md:text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            {t("index.form.subtitle")}
          </p>
        </ScrollReveal>

        {/* Form card wrapper — tighter width for focused form */}
        <div className="max-w-xl mx-auto">

        {/* Form card */}
        <ScrollReveal delay={0.15} direction="scale">
          <div className="bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] p-5 md:p-10 relative">
            {/* Trust bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-cta text-lg tracking-[2px]">★★★★★</span>
                <span className="font-dm text-xs text-text-muted font-bold">{t("index.form.cases")}</span>
              </div>
              <div className="flex items-center gap-1.5 font-dm text-xs text-text-muted">
                <svg className="w-4 h-4 text-cta" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1L3 5v6c0 4 3 7 7 8 4-1 7-4 7-8V5l-7-4zm0 6a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                </svg>
                <span>{t("index.form.secureConfidential")}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={labelClass}>{t("index.form.name")}</label>
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder={t("index.form.namePlaceholder")}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className={labelClass}>{t("index.form.email")}</label>
                <input
                  type="email"
                  required
                  className={inputClass}
                  placeholder={t("index.form.emailPlaceholder")}
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label className={labelClass}>{t("index.form.phone")}</label>
                <input
                  type="tel"
                  required
                  className={inputClass}
                  placeholder={t("index.form.phonePlaceholder")}
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div>
                <label className={labelClass}>{t("index.form.whatHappened")}</label>
                <textarea
                  required
                  className={`${inputClass} min-h-[100px] md:min-h-[130px] resize-none`}
                  placeholder={t("index.form.whatHappenedPlaceholder")}
                  value={form.details}
                  onChange={e => setForm({ ...form, details: e.target.value })}
                />
              </div>

              <button type="submit" className="cta-btn-primary cta-pulse w-full !h-16 !text-xl mt-2">
                {t("index.form.submit")}
              </button>

              <p className="font-dm text-xs text-text-muted text-center font-bold pt-1">
                🛡 {t("index.form.trustLine")}
              </p>
            </form>
          </div>
        </ScrollReveal>

          {/* Rotating testimonials below form */}
          <div className="mt-10 text-center min-h-[140px] md:min-h-[120px]">
            <div className="text-cta text-lg tracking-[3px] mb-3">★★★★★</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-serif italic text-white/90 text-xl md:text-2xl leading-snug mb-3">
                  "{formTestimonials[activeTestimonial].quote}"
                </p>
                <p className="font-dm text-sm text-white/50 tracking-wider">
                  — {formTestimonials[activeTestimonial].name}, {formTestimonials[activeTestimonial].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
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
