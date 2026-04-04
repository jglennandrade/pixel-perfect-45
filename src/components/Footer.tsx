import { Link } from "react-router-dom";
import darwinLogo from "@/assets/darwin-logo.png";

const scrollToForm = () => {
  document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bebas text-3xl md:text-5xl tracking-wider mb-4">
            Ready to Find Out What You're Owed?
          </p>
          <p className="font-dm text-white/60 mb-6">Free case review. No obligation. No fee unless we win.</p>
          <button onClick={scrollToForm} className="cta-btn-primary !py-4 !px-10">
            GET MY FREE CASE REVIEW →
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={darwinLogo} alt="Darwin F. Johnson" className="h-7 w-auto mb-4" />
            <p className="font-dm text-sm text-white/50 leading-relaxed">
              Atlanta's premier injury attorneys. Fighting for Georgia workers since 2004.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <p className="font-dm text-xs tracking-[2px] uppercase mb-5 font-bold text-white/40">Practice Areas</p>
            <div className="space-y-3">
              <Link to="/workers-compensation" className="block font-dm text-sm text-white/60 hover:text-white transition-colors">Workers' Compensation</Link>
              <Link to="/personal-injury" className="block font-dm text-sm text-white/60 hover:text-white transition-colors">Personal Injury</Link>
            </div>
          </div>

          {/* Take Action */}
          <div>
            <p className="font-dm text-xs tracking-[2px] uppercase mb-5 font-bold text-white/40">Take Action</p>
            <div className="space-y-3">
              <button onClick={scrollToForm} className="block font-dm text-sm text-white/60 hover:text-white transition-colors text-left">Free Case Review</button>
              <Link to="/book-a-call" className="block font-dm text-sm text-white/60 hover:text-white transition-colors">Book a Call</Link>
              <a href="tel:4045212667" className="block font-dm text-sm text-white/60 hover:text-white transition-colors">Call: 404-521-2667</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-dm text-xs tracking-[2px] uppercase mb-5 font-bold text-white/40">Office</p>
            <div className="space-y-2 font-dm text-sm text-white/50">
              <a href="tel:4045212667" className="block text-cta font-bold text-lg hover:text-cta-hover transition-colors">404-521-2667</a>
              <p>3715 Northside Pkwy</p>
              <p>Bldg 400, Suite 450</p>
              <p>Atlanta, GA 30327</p>
              <p className="text-white/30 pt-1">Mon – Fri: 9am – 6pm EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-dm text-[11px] text-white/25 max-w-3xl leading-relaxed">
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
          <p className="font-dm text-[11px] text-white/25 mt-3">
            © {new Date().getFullYear()} The Law Offices of Darwin F. Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
