"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

/* ═══════════════════════════════════════════════
   JUSTICE SCALE — Animated transformation
   Scale starts tipped toward "Insurance Offer"
   On view, it dramatically tips toward "Darwin's Recovery"
   ═══════════════════════════════════════════════ */

export function JusticeScale() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimationControls();
  const [beforeAmount, setBeforeAmount] = useState(0);
  const [afterAmount, setAfterAmount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Animation sequence
  useEffect(() => {
    if (!inView) return;

    const runSequence = async () => {
      // 1. Scale appears tipped to the LEFT (insurance side weighs it down)
      await controls.start({
        rotate: -12,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
      });

      // 2. Count up the "before" amount ($12,000)
      const beforeTimer = setInterval(() => {
        setBeforeAmount((prev) => {
          if (prev >= 12000) {
            clearInterval(beforeTimer);
            return 12000;
          }
          return prev + 500;
        });
      }, 30);

      // 3. Pause, then dramatic tip to the RIGHT (Darwin's recovery)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      await controls.start({
        rotate: [-12, -14, 12],
        transition: {
          duration: 1.5,
          times: [0, 0.2, 1],
          ease: [0.68, -0.55, 0.27, 1.55], // overshoot bounce
        },
      });

      // 4. Count up the "after" amount ($95,000)
      setShowResult(true);
      const afterTimer = setInterval(() => {
        setAfterAmount((prev) => {
          if (prev >= 95000) {
            clearInterval(afterTimer);
            return 95000;
          }
          return prev + 2000;
        });
      }, 25);

      // 5. Settle into final position
      await new Promise((resolve) => setTimeout(resolve, 500));
      await controls.start({
        rotate: 10,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    };

    runSequence();
  }, [inView, controls]);

  const formatMoney = (amount: number) => `$${amount.toLocaleString()}`;

  return (
    <div ref={ref} className="relative w-full max-w-5xl mx-auto py-8">
      {/* Top labels */}
      <div className="grid grid-cols-2 gap-4 md:gap-12 mb-8 text-center">
        {/* LEFT — Insurance offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-dm text-xs tracking-[3px] uppercase font-bold text-white/40 mb-2">
            Insurance Offered
          </p>
          <p className="font-bebas text-4xl md:text-6xl text-white/50 tracking-wider">
            {formatMoney(beforeAmount)}
          </p>
          <p className="font-dm text-xs text-white/30 mt-1">Their "final" offer</p>
        </motion.div>

        {/* RIGHT — Darwin's recovery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <p className="font-dm text-xs tracking-[3px] uppercase font-bold text-cta mb-2">
            Darwin Recovered
          </p>
          <p className="font-bebas text-4xl md:text-6xl text-cta tracking-wider" style={{ textShadow: "0 0 40px rgba(232,119,46,0.3)" }}>
            {formatMoney(afterAmount)}
          </p>
          <p className="font-dm text-xs text-white/50 mt-1">
            {showResult && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-1"
              >
                <span className="text-cta font-bold">8X MORE</span>
                <span className="text-white/40">than the offer</span>
              </motion.span>
            )}
          </p>
        </motion.div>
      </div>

      {/* Scale of Justice */}
      <div className="relative h-[300px] md:h-[380px] flex items-start justify-center">
        {/* Beam + pans container — this rotates */}
        <motion.div
          className="relative w-full max-w-4xl"
          animate={controls}
          initial={{ rotate: 0 }}
          style={{ transformOrigin: "center 50px" }}
        >
          {/* Horizontal beam */}
          <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-full h-[8px] rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--cta) / 0.3) 0%, hsl(var(--cta)) 50%, hsl(var(--cta) / 0.3) 100%)",
              boxShadow: "0 0 30px rgba(232,119,46,0.4)",
            }}
          />

          {/* Center connection point */}
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cta shadow-[0_0_30px_rgba(232,119,46,0.7)]" />

          {/* LEFT chains + pan */}
          <div className="absolute top-[58px] left-[8%] flex flex-col items-center">
            {/* Chain (SVG) */}
            <svg width="110" height="130" viewBox="0 0 80 100" className="mb-2">
              <line x1="40" y1="0" x2="15" y2="90" stroke="hsl(var(--cta) / 0.5)" strokeWidth="2" />
              <line x1="40" y1="0" x2="65" y2="90" stroke="hsl(var(--cta) / 0.5)" strokeWidth="2" />
            </svg>
            {/* Pan — insurance side, heavier/fuller */}
            <div className="relative w-44 h-28 -mt-14">
              {/* Pan bowl */}
              <svg viewBox="0 0 140 80" className="w-full h-full">
                <defs>
                  <linearGradient id="leftPanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(220 40% 35%)" />
                    <stop offset="100%" stopColor="hsl(220 60% 15%)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 10 10 Q 70 50 130 10 L 130 30 Q 70 70 10 30 Z"
                  fill="url(#leftPanGrad)"
                  stroke="hsl(var(--cta) / 0.4)"
                  strokeWidth="1.5"
                />
                {/* Small coin stack */}
                <circle cx="50" cy="25" r="6" fill="hsl(220 30% 60%)" opacity="0.6" />
                <circle cx="70" cy="22" r="6" fill="hsl(220 30% 60%)" opacity="0.6" />
                <circle cx="90" cy="25" r="6" fill="hsl(220 30% 60%)" opacity="0.6" />
              </svg>
              {/* Label inside pan */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-dm text-[10px] font-bold text-white/50 tracking-wider">LOWBALL</span>
              </div>
            </div>
          </div>

          {/* RIGHT chains + pan */}
          <div className="absolute top-[58px] right-[8%] flex flex-col items-center">
            <svg width="110" height="130" viewBox="0 0 80 100" className="mb-2">
              <line x1="40" y1="0" x2="15" y2="90" stroke="hsl(var(--cta))" strokeWidth="2" strokeOpacity="0.8" />
              <line x1="40" y1="0" x2="65" y2="90" stroke="hsl(var(--cta))" strokeWidth="2" strokeOpacity="0.8" />
            </svg>
            {/* Pan — Darwin side, glowing */}
            <div className="relative w-44 h-28 -mt-14">
              <svg viewBox="0 0 140 80" className="w-full h-full" style={{ filter: "drop-shadow(0 0 20px rgba(232,119,46,0.5))" }}>
                <defs>
                  <linearGradient id="rightPanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--cta))" />
                    <stop offset="100%" stopColor="hsl(19 90% 35%)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 10 10 Q 70 50 130 10 L 130 30 Q 70 70 10 30 Z"
                  fill="url(#rightPanGrad)"
                  stroke="white"
                  strokeOpacity="0.3"
                  strokeWidth="1.5"
                />
                {/* More coins — higher value */}
                <circle cx="35" cy="22" r="7" fill="white" fillOpacity="0.9" />
                <circle cx="52" cy="20" r="7" fill="white" fillOpacity="0.9" />
                <circle cx="69" cy="19" r="7" fill="white" fillOpacity="0.9" />
                <circle cx="86" cy="20" r="7" fill="white" fillOpacity="0.9" />
                <circle cx="103" cy="22" r="7" fill="white" fillOpacity="0.9" />
                {/* Stack effect */}
                <circle cx="44" cy="15" r="7" fill="white" fillOpacity="0.7" />
                <circle cx="60" cy="13" r="7" fill="white" fillOpacity="0.7" />
                <circle cx="76" cy="13" r="7" fill="white" fillOpacity="0.7" />
                <circle cx="92" cy="15" r="7" fill="white" fillOpacity="0.7" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-dm text-[10px] font-bold text-white tracking-wider">JUSTICE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vertical pillar / stand — doesn't rotate */}
        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-1.5 h-[200px] bg-gradient-to-b from-cta via-cta/60 to-cta/20 pointer-events-none" />

        {/* Base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-5 pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-cta/40 to-cta/10 shadow-[0_4px_40px_rgba(232,119,46,0.25)]" />
        </div>

        {/* Glow circle behind everything */}
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(var(--cta) / 0.08) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />
      </div>

    </div>
  );
}
