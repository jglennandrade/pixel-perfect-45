import { Link } from "react-router-dom";
import darwinLogo from "@/assets/darwin-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const scrollToForm = () => {
  document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={darwinLogo} alt="Darwin F. Johnson" className="h-7 w-auto mb-4" />
            <p className="font-dm text-sm text-white/50 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <p className="font-dm text-xs tracking-[2px] uppercase mb-5 font-bold text-white/40">{t("footer.practiceAreas")}</p>
            <div className="space-y-3">
              <Link to="/workers-compensation" className="block font-dm text-sm text-white/60 hover:text-white transition-colors">{t("header.workersComp")}</Link>
              <Link to="/personal-injury" className="block font-dm text-sm text-white/60 hover:text-white transition-colors">{t("header.personalInjury")}</Link>
            </div>
          </div>

          {/* Take Action */}
          <div>
            <p className="font-dm text-xs tracking-[2px] uppercase mb-5 font-bold text-white/40">{t("footer.takeAction")}</p>
            <div className="space-y-3">
              <button onClick={scrollToForm} className="block font-dm text-sm text-white/60 hover:text-white transition-colors text-left">{t("footer.freeCaseReview")}</button>
              <Link to="/book-a-call" className="block font-dm text-sm text-white/60 hover:text-white transition-colors">{t("footer.bookACall")}</Link>
              <a href="tel:4045212667" className="block font-dm text-sm text-white/60 hover:text-white transition-colors">{t("footer.call")}</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-dm text-xs tracking-[2px] uppercase mb-5 font-bold text-white/40">{t("footer.office")}</p>
            <div className="space-y-2 font-dm text-sm text-white/50">
              <a href="tel:4045212667" className="block text-cta font-bold text-lg hover:text-cta-hover transition-colors">404-521-2667</a>
              <p>3715 Northside Pkwy</p>
              <p>Bldg 400, Suite 450</p>
              <p>Atlanta, GA 30327</p>
              <p className="text-white/30 pt-1">{t("footer.hours")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-dm text-[11px] text-white/25 max-w-3xl leading-relaxed">
            {t("footer.disclaimer")}
          </p>
          <p className="font-dm text-[11px] text-white/25 mt-3">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
