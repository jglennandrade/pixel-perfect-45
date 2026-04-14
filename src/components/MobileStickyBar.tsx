import { useLanguage } from "@/contexts/LanguageContext";

export default function MobileStickyBar() {
  const { t } = useLanguage();
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-card-border px-3 py-2.5 flex gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href="tel:4045212667"
        className="cta-btn-primary flex-1 text-center !py-3.5 !text-sm font-bold truncate"
      >
        {t("cta.callNow")}
      </a>
      <button
        onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
        className="cta-btn-outline flex-1 text-center !py-3.5 !text-sm font-bold truncate"
      >
        {t("cta.freeCaseReviewShort")}
      </button>
    </div>
  );
}
