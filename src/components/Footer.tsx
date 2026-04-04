import { Link } from "react-router-dom";
import darwinLogo from "@/assets/darwin-logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-alt border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={darwinLogo} alt="Darwin F. Johnson" className="h-7 w-auto mb-4" />
            <p className="font-serif italic text-body-text text-lg leading-relaxed">
              "When you call my office, you get me."
            </p>
            <p className="font-dm text-xs text-muted-text mt-2">— Darwin F. Johnson</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4 font-bold">Quick Links</p>
            <div className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/workers-compensation", label: "Workers' Compensation" },
                { to: "/personal-injury", label: "Personal Injury" },
                { to: "/book-a-call", label: "Book a Free Call" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block font-dm text-sm text-body-text hover:text-cta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4 font-bold">Contact</p>
            <div className="space-y-3 font-dm text-sm text-body-text">
              <a href="tel:4045212667" className="block text-cta font-bold text-lg hover:text-cta-hover transition-colors">
                404-521-2667
              </a>
              <p>3355 Lenox Road NE, Suite 750</p>
              <p>Atlanta, GA 30326</p>
              <p className="text-muted-text">Mon – Fri: 9am – 6pm EST</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card-border pt-8">
          <p className="font-dm text-xs text-fine-text max-w-3xl leading-relaxed">
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
          <p className="font-dm text-xs text-fine-text mt-4">
            © {new Date().getFullYear()} The Law Offices of Darwin F. Johnson. All rights reserved. · <a href="/privacy" className="hover:underline text-muted-text">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
