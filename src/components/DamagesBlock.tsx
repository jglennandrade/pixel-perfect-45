import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import djMonogram from "@/assets/dj-monogram.png";

/* ═══════════════════════════════════════════════
   REUSABLE DAMAGES BLOCK
   Premium navy card showing Economic + Non-Economic
   damages. Use inside Personal Injury quiz results
   or any section that needs the "What You're Owed"
   framing.
   ═══════════════════════════════════════════════ */

interface DamagesBlockProps {
  onCtaClick?: () => void;
  ctaText?: string;
  eyebrow?: string;
  headline?: React.ReactNode;
  subheadline?: React.ReactNode;
  closingText?: string;
  showCta?: boolean;
  showMonogram?: boolean;
}

export default function DamagesBlock({
  onCtaClick,
  ctaText = "FIND OUT WHAT I'M OWED →",
  eyebrow = "WHAT YOU'RE ACTUALLY OWED",
  headline = <>The Insurance Company<br />Won't Tell You This.</>,
  subheadline = <>They'll mention your medical bills and hope you sign.<br className="hidden md:block" />Georgia law says you're owed a lot more.</>,
  closingText = "Most people have no idea how much they're actually owed.",
  showCta = true,
  showMonogram = false,
}: DamagesBlockProps) {
  return (
    <div className="bg-navy-dark rounded-2xl p-8 md:p-14 relative overflow-hidden">
      {showMonogram && (
        <img
          src={djMonogram}
          alt=""
          className="absolute -top-12 -right-12 w-[340px] h-auto pointer-events-none select-none opacity-[0.06]"
        />
      )}

      <div className="relative z-10">
        <ScrollReveal>
          <p className="font-dm text-xs text-cta tracking-[4px] uppercase font-bold mb-4 text-center">{eyebrow}</p>
          <h3 className="font-bebas text-white text-4xl md:text-6xl tracking-wider leading-[0.95] text-center mb-4">
            {headline}
          </h3>
          <p className="font-dm text-lg md:text-xl text-white/50 text-center max-w-xl mx-auto mb-14">
            {subheadline}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal direction="left">
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/10 p-8 h-full">
              <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center mb-5">
                <span className="text-2xl">💰</span>
              </div>
              <p className="font-bebas text-3xl text-white tracking-wider mb-2">WHAT IT COST YOU</p>
              <p className="font-dm text-sm text-white/40 mb-6">Money out of your pocket — stuff with receipts.</p>
              <div className="space-y-4">
                {[
                  { item: "Medical Bills", detail: "Past and future. Surgeries, therapy, medication. Can add up to $100K+." },
                  { item: "Missed Paychecks", detail: "Every day you couldn't work while hurt." },
                  { item: "Can't Work Like Before", detail: "If your injury stops you from doing your old job — or working at all." },
                  { item: "Damaged Stuff", detail: "Your car, your gear, anything broken in the accident." },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-cta font-bold text-lg mt-0.5">✓</span>
                    <div>
                      <p className="font-dm font-bold text-white text-sm">{d.item}</p>
                      <p className="font-dm text-xs text-white/40 mt-0.5">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/10 p-8 h-full">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5">
                <span className="text-2xl">💔</span>
              </div>
              <p className="font-bebas text-3xl text-white tracking-wider mb-2">WHAT IT TOOK FROM YOU</p>
              <p className="font-dm text-sm text-white/40 mb-6">The stuff that doesn't show up on a bill — but often matters most.</p>
              <div className="space-y-4">
                {[
                  { item: "The Physical Pain", detail: "Every ache, every sleepless night from your injuries." },
                  { item: "Stress & Anxiety", detail: "The mental toll. Depression, PTSD, constant worry." },
                  { item: "Missing Out on Life", detail: "Can't play with your kids, hit the gym, or do what you love." },
                  { item: "Strain on Your Family", detail: "How this is hurting your marriage and the people closest to you." },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg mt-0.5">✓</span>
                    <div>
                      <p className="font-dm font-bold text-white text-sm">{d.item}</p>
                      <p className="font-dm text-xs text-white/40 mt-0.5">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {showCta && (
          <ScrollReveal>
            <div className="text-center mt-12">
              <p className="font-dm text-white/40 text-base mb-5">{closingText}</p>
              <button onClick={onCtaClick} className="cta-btn-primary !py-5 !px-10 !text-base">
                {ctaText}
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
