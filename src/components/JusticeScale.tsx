"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useInView, useAnimationControls, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════
   JUSTICE SCALE — Premium Animated Transformation
   Cinematic scale tipping with particles, glows,
   and dramatic number reveals
   ═══════════════════════════════════════════════ */

// Floating particle component
function Particle({ delay, x, size, duration }: { delay: number; x: number; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: 0,
        background: `radial-gradient(circle, hsl(var(--cta) / 0.8), hsl(var(--cta) / 0))`,
      }}
      initial={{ y: 0, opacity: 0, scale: 0 }}
      animate={{
        y: [0, -120, -250],
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: duration * 0.5,
        ease: "easeOut",
      }}
    />
  );
}

// Animated chain link
function ChainLink({ index, side }: { index: number; side: "left" | "right" }) {
  const isOrange = side === "right";
  return (
    <motion.div
      className="w-3 h-5 rounded-full border-2 mx-auto"
      style={{
        borderColor: isOrange ? "hsl(var(--cta) / 0.7)" : "hsl(220 40% 50% / 0.5)",
      }}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.3, ease: "backOut" }}
    />
  );
}

// Glowing orb that pulses
function GlowOrb({ active }: { active: boolean }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: 600,
        height: 600,
        background: "radial-gradient(circle, hsl(var(--cta) / 0.12) 0%, hsl(var(--cta) / 0.04) 40%, transparent 70%)",
      }}
      animate={{
        scale: active ? [1, 1.15, 1] : 1,
        opacity: active ? [0.6, 1, 0.6] : 0.3,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function JusticeScale() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimationControls();
  const [beforeAmount, setBeforeAmount] = useState(0);
  const [afterAmount, setAfterAmount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [phase, setPhase] = useState<"idle" | "insurance" | "tipping" | "darwin">("idle");

  // Generate stable particles
  const particles = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      delay: i * 0.4 + Math.random() * 2,
      x: 35 + Math.random() * 30,
      size: 3 + Math.random() * 5,
      duration: 2.5 + Math.random() * 2,
    })), []
  );

  // Animation sequence
  useEffect(() => {
    if (!inView) return;

    const runSequence = async () => {
      setPhase("insurance");

      // 1. Scale tips LEFT — insurance side heavy
      await controls.start({
        rotate: -15,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
      });

      // 2. Count up the "before" amount ($12,000)
      let bVal = 0;
      const beforeTimer = setInterval(() => {
        bVal += 400;
        if (bVal >= 12000) { bVal = 12000; clearInterval(beforeTimer); }
        setBeforeAmount(bVal);
      }, 25);

      // 3. Dramatic pause
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPhase("tipping");

      // 4. Pre-tip tension — slight pull-back
      await controls.start({
        rotate: -18,
        transition: { duration: 0.4, ease: "easeIn" },
      });

      // 5. DRAMATIC TIP to the RIGHT with spring overshoot
      await controls.start({
        rotate: [null, 14, 11, 13, 12],
        transition: {
          duration: 2,
          times: [0, 0.45, 0.65, 0.82, 1],
          ease: [0.22, 1.36, 0.36, 1],
        },
      });

      setPhase("darwin");
      setShowResult(true);

      // 6. Count up the "after" amount ($95,000)
      let aVal = 0;
      const afterTimer = setInterval(() => {
        aVal += 1500;
        if (aVal >= 95000) { aVal = 95000; clearInterval(afterTimer); }
        setAfterAmount(aVal);
      }, 20);

      // 7. Gentle settle
      await new Promise((resolve) => setTimeout(resolve, 800));
      await controls.start({
        rotate: 11,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    };

    runSequence();
  }, [inView, controls]);

  const formatMoney = (amount: number) => `$${amount.toLocaleString()}`;

  return (
    <div ref={ref} className="relative w-full max-w-5xl mx-auto py-8 overflow-hidden">
      {/* Ambient glow */}
      <GlowOrb active={phase === "darwin"} />

      {/* Floating particles — only visible after tip */}
      <AnimatePresence>
        {phase === "darwin" && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
              <Particle key={p.id} {...p} />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Top labels */}
      <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-12 mb-6 md:mb-10 text-center">
        {/* LEFT — Insurance offer */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0, 1] }}
        >
          <p className="font-dm text-[10px] md:text-xs tracking-[3px] uppercase font-bold text-white/40 mb-2">
            Insurance Offered
          </p>
          <motion.p
            className="font-bebas text-4xl md:text-7xl tracking-wider"
            style={{ color: phase === "darwin" ? "hsl(220 20% 50% / 0.4)" : "hsl(220 20% 70% / 0.6)" }}
            animate={{
              color: phase === "darwin" ? "hsl(220 20% 50% / 0.35)" : "hsl(220 20% 70% / 0.6)",
              scale: phase === "darwin" ? 0.92 : 1,
            }}
            transition={{ duration: 0.8 }}
          >
            {formatMoney(beforeAmount)}
          </motion.p>
          <motion.p
            className="font-dm text-[10px] md:text-xs text-white/30 mt-1"
            animate={{ opacity: phase === "darwin" ? 0.3 : 0.5 }}
          >
            Their "final" offer
          </motion.p>
        </motion.div>

        {/* RIGHT — Darwin's recovery */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0, 1] }}
          className="relative"
        >
          <motion.p
            className="font-dm text-[10px] md:text-xs tracking-[3px] uppercase font-bold text-cta mb-2"
            animate={{ opacity: phase === "darwin" ? 1 : 0.7 }}
          >
            Darwin Recovered
          </motion.p>
          <motion.p
            className="font-bebas text-4xl md:text-7xl text-cta tracking-wider"
            style={{ textShadow: phase === "darwin" ? "0 0 60px rgba(232,119,46,0.5), 0 0 120px rgba(232,119,46,0.2)" : "none" }}
            animate={{ scale: phase === "darwin" ? [1, 1.08, 1.03] : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {formatMoney(afterAmount)}
          </motion.p>
          <div className="h-5 mt-1">
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="inline-flex items-center gap-2"
                >
                  <motion.span
                    className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold font-dm"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--cta) / 0.2), hsl(var(--cta) / 0.1))",
                      border: "1px solid hsl(var(--cta) / 0.3)",
                      color: "hsl(var(--cta))",
                    }}
                    animate={{ boxShadow: ["0 0 0px rgba(232,119,46,0)", "0 0 20px rgba(232,119,46,0.3)", "0 0 0px rgba(232,119,46,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    8X MORE
                  </motion.span>
                  <span className="text-white/40 text-[10px] font-dm">than the offer</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Scale of Justice */}
      <div className="relative h-[280px] md:h-[360px] flex items-start justify-center z-10">
        {/* Beam + pans container — this rotates */}
        <motion.div
          className="relative w-full max-w-4xl"
          animate={controls}
          initial={{ rotate: 0 }}
          style={{ transformOrigin: "center 50px" }}
        >
          {/* Horizontal beam — gradient bar */}
          <motion.div
            className="absolute top-[50px] left-1/2 -translate-x-1/2 w-full h-[6px] md:h-[8px] rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(220 40% 40% / 0.4) 0%, hsl(var(--cta) / 0.6) 30%, hsl(var(--cta)) 50%, hsl(var(--cta) / 0.6) 70%, hsl(220 40% 40% / 0.4) 100%)",
            }}
            animate={{
              boxShadow: phase === "darwin"
                ? "0 0 40px rgba(232,119,46,0.6), 0 0 80px rgba(232,119,46,0.2)"
                : "0 0 20px rgba(232,119,46,0.3)",
            }}
            transition={{ duration: 1 }}
          />

          {/* Center fulcrum — ornate diamond */}
          <motion.div
            className="absolute top-[34px] left-1/2 -translate-x-1/2 z-20"
            animate={{
              boxShadow: phase === "darwin"
                ? "0 0 40px rgba(232,119,46,0.8), 0 0 80px rgba(232,119,46,0.3)"
                : "0 0 20px rgba(232,119,46,0.5)",
            }}
            transition={{ duration: 1 }}
            style={{
              width: 40,
              height: 40,
              background: "linear-gradient(135deg, hsl(var(--cta)), hsl(19 90% 40%))",
              borderRadius: "50%",
              border: "3px solid hsl(var(--cta) / 0.5)",
            }}
          >
            {/* Inner detail */}
            <div className="absolute inset-[6px] rounded-full border border-white/20" />
          </motion.div>

          {/* LEFT chains + pan */}
          <div className="absolute top-[58px] left-[6%] md:left-[8%] flex flex-col items-center">
            {/* Chain links */}
            <div className="flex flex-col items-center gap-0.5 mb-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <ChainLink key={`l-${i}`} index={i} side="left" />
              ))}
            </div>
            {/* Pan */}
            <motion.div
              className="relative w-36 md:w-48 h-20 md:h-24"
              animate={{
                filter: phase === "darwin" ? "brightness(0.6) saturate(0.5)" : "brightness(1) saturate(1)",
              }}
              transition={{ duration: 1 }}
            >
              <svg viewBox="0 0 180 80" className="w-full h-full">
                <defs>
                  <linearGradient id="leftPanGradV2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(220 40% 35%)" />
                    <stop offset="100%" stopColor="hsl(220 50% 18%)" />
                  </linearGradient>
                  <filter id="leftPanShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.4)" />
                  </filter>
                </defs>
                <ellipse cx="90" cy="25" rx="82" ry="18" fill="url(#leftPanGradV2)" filter="url(#leftPanShadow)" stroke="hsl(220 40% 50% / 0.3)" strokeWidth="1" />
                <ellipse cx="90" cy="25" rx="65" ry="12" fill="none" stroke="hsl(220 40% 50% / 0.15)" strokeWidth="0.5" />
                {/* Coins */}
                <circle cx="65" cy="22" r="5" fill="hsl(220 30% 55%)" opacity="0.5" />
                <circle cx="80" cy="20" r="5" fill="hsl(220 30% 55%)" opacity="0.5" />
                <circle cx="95" cy="21" r="5" fill="hsl(220 30% 55%)" opacity="0.5" />
                <circle cx="110" cy="22" r="5" fill="hsl(220 30% 55%)" opacity="0.5" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center -mt-3">
                <span className="font-dm text-[8px] md:text-[10px] font-bold text-white/40 tracking-[3px] uppercase">Lowball</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT chains + pan */}
          <div className="absolute top-[58px] right-[6%] md:right-[8%] flex flex-col items-center">
            {/* Chain links */}
            <div className="flex flex-col items-center gap-0.5 mb-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <ChainLink key={`r-${i}`} index={i} side="right" />
              ))}
            </div>
            {/* Pan — glowing */}
            <motion.div
              className="relative w-36 md:w-48 h-20 md:h-24"
              animate={{
                filter: phase === "darwin"
                  ? ["drop-shadow(0 0 15px rgba(232,119,46,0.6))", "drop-shadow(0 0 30px rgba(232,119,46,0.8))", "drop-shadow(0 0 15px rgba(232,119,46,0.6))"]
                  : "drop-shadow(0 0 8px rgba(232,119,46,0.3))",
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 180 80" className="w-full h-full">
                <defs>
                  <linearGradient id="rightPanGradV2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--cta))" />
                    <stop offset="100%" stopColor="hsl(19 85% 30%)" />
                  </linearGradient>
                  <filter id="rightPanGlow">
                    <feDropShadow dx="0" dy="2" stdDeviation="8" floodColor="rgba(232,119,46,0.5)" />
                  </filter>
                </defs>
                <ellipse cx="90" cy="25" rx="82" ry="18" fill="url(#rightPanGradV2)" filter="url(#rightPanGlow)" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
                <ellipse cx="90" cy="25" rx="65" ry="12" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
                {/* Gold coins — more, stacked */}
                <circle cx="50" cy="21" r="6" fill="white" fillOpacity="0.85" />
                <circle cx="65" cy="19" r="6" fill="white" fillOpacity="0.85" />
                <circle cx="80" cy="18" r="6" fill="white" fillOpacity="0.85" />
                <circle cx="95" cy="18" r="6" fill="white" fillOpacity="0.85" />
                <circle cx="110" cy="19" r="6" fill="white" fillOpacity="0.85" />
                <circle cx="125" cy="21" r="6" fill="white" fillOpacity="0.85" />
                {/* Top row */}
                <circle cx="58" cy="14" r="5" fill="white" fillOpacity="0.6" />
                <circle cx="72" cy="12" r="5" fill="white" fillOpacity="0.6" />
                <circle cx="86" cy="11" r="5" fill="white" fillOpacity="0.6" />
                <circle cx="100" cy="12" r="5" fill="white" fillOpacity="0.6" />
                <circle cx="114" cy="14" r="5" fill="white" fillOpacity="0.6" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center -mt-3">
                <span className="font-dm text-[8px] md:text-[10px] font-bold text-white tracking-[3px] uppercase">Justice</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vertical pillar — stationary */}
        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="w-[3px] h-[180px] md:h-[220px] mx-auto" style={{
            background: "linear-gradient(to bottom, hsl(var(--cta)), hsl(var(--cta) / 0.5) 60%, hsl(var(--cta) / 0.1))",
          }} />
        </div>

        {/* Base platform */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none"
          animate={{
            boxShadow: phase === "darwin"
              ? "0 0 60px rgba(232,119,46,0.3), 0 0 120px rgba(232,119,46,0.1)"
              : "0 0 30px rgba(232,119,46,0.15)",
          }}
          transition={{ duration: 1.5 }}
          style={{
            width: 280,
            height: 14,
            borderRadius: "50%",
            background: "linear-gradient(to bottom, hsl(var(--cta) / 0.5), hsl(var(--cta) / 0.15))",
          }}
        />
      </div>
    </div>
  );
}
