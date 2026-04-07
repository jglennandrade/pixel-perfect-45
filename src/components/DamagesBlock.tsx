import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import djMonogram from "@/assets/dj-monogram.png";
import { useLanguage } from "@/contexts/LanguageContext";

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
  ctaText,
  eyebrow,
  headline,
  subheadline,
  closingText,
  showCta = true,
  showMonogram = false,
}: DamagesBlockProps) {
  const { t } = useLanguage();

  const resolvedEyebrow = eyebrow ?? t("damages.eyebrow");
  const resolvedHeadline = headline ?? <>{t("damages.headline").split(".")[0]}.<br />{t("damages.headline").split(".").slice(1).join(".")}</>;
  const resolvedSubheadline = subheadline ?? <>{t("damages.subheadline")}</>;
  const resolvedClosingText = closingText ?? t("damages.closingText");
  const resolvedCtaText = ctaText ?? t("damages.ctaText");

  const economicItems = [
    { item: t("damages.economic.medical.item"), detail: t("damages.economic.medical.detail") },
    { item: t("damages.economic.wages.item"), detail: t("damages.economic.wages.detail") },
    { item: t("damages.economic.capacity.item"), detail: t("damages.economic.capacity.detail") },
    { item: t("damages.economic.property.item"), detail: t("damages.economic.property.detail") },
  ];

  const nonEconomicItems = [
    { item: t("damages.noneconomic.pain.item"), detail: t("damages.noneconomic.pain.detail") },
    { item: t("damages.noneconomic.stress.item"), detail: t("damages.noneconomic.stress.detail") },
    { item: t("damages.noneconomic.life.item"), detail: t("damages.noneconomic.life.detail") },
    { item: t("damages.noneconomic.family.item"), detail: t("damages.noneconomic.family.detail") },
  ];

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
          <p className="font-dm text-xs text-cta tracking-[4px] uppercase font-bold mb-4 text-center">{resolvedEyebrow}</p>
          <h3 className="font-bebas text-white text-4xl md:text-6xl tracking-wider leading-[0.95] text-center mb-4">
            {resolvedHeadline}
          </h3>
          <p className="font-dm text-lg md:text-xl text-white/50 text-center max-w-xl mx-auto mb-14">
            {resolvedSubheadline}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal direction="left">
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/10 p-8 h-full">
              <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center mb-5">
                <span className="text-2xl">💰</span>
              </div>
              <p className="font-bebas text-3xl text-white tracking-wider mb-2">{t("damages.economic.title")}</p>
              <p className="font-dm text-sm text-white/40 mb-6">{t("damages.economic.desc")}</p>
              <div className="space-y-4">
                {economicItems.map((d, i) => (
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
              <p className="font-bebas text-3xl text-white tracking-wider mb-2">{t("damages.noneconomic.title")}</p>
              <p className="font-dm text-sm text-white/40 mb-6">{t("damages.noneconomic.desc")}</p>
              <div className="space-y-4">
                {nonEconomicItems.map((d, i) => (
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
              <p className="font-dm text-white/40 text-base mb-5">{resolvedClosingText}</p>
              <button onClick={onCtaClick} className="cta-btn-primary !py-5 !px-10 !text-base">
                {resolvedCtaText}
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
