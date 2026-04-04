import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProofBar = () => {
  const stats = [
    { number: "$250M+", label: "Recovered for clients" },
    { number: "10,000+", label: "Cases handled" },
    { number: "20+ Years", label: "In Georgia courts" },
    { number: "Since 2004", label: "Serving Georgia workers" },
  ];
  return (
    <section className="bg-cta w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`py-6 px-4 text-center ${i < stats.length - 1 ? "md:border-r md:border-primary-foreground/30" : ""} ${i % 2 === 0 && i < 2 ? "border-r border-primary-foreground/30 md:border-r" : ""}`}
          >
            <div className="font-bebas text-5xl text-primary-foreground tracking-wider">{s.number}</div>
            <div className="font-dm text-xs text-primary-foreground/85 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="min-h-screen bg-dark flex items-center relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")' }}>
      <div className="max-w-6xl mx-auto px-6 pt-24 w-full">
        <div className="border-l-2 border-cta pl-8">
          <p className="font-dm text-xs text-cta tracking-[4px] uppercase mb-4">
            ATLANTA'S INJURY ATTORNEYS · GEORGIA ONLY
          </p>
          <h1 className="font-bebas text-warm-white text-6xl md:text-[120px] leading-[0.9] tracking-wider">
            WE FIGHT.<br />YOU RECOVER.
          </h1>
          <p className="font-dm text-xl text-body-text max-w-xl mt-6 leading-relaxed">
            Hurt in Georgia? Whether you were injured at work or in an accident, you may be owed more than you think — and the other side is already building their case against you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={scrollToForm}
              className="h-[52px] px-8 bg-cta hover:bg-cta-hover text-primary-foreground font-dm font-bold text-sm tracking-[1px] rounded-sm transition-colors"
            >
              INJURED ON THE JOB? →
            </button>
            <button
              onClick={scrollToForm}
              className="h-[52px] px-8 border border-cta text-cta hover:bg-cta hover:text-primary-foreground font-dm font-bold text-sm tracking-[1px] rounded-sm transition-colors"
            >
              INJURED IN AN ACCIDENT? →
            </button>
          </div>
          <p className="font-dm text-xs text-muted-text mt-5">
            ✓ Free Consultation &nbsp; ✓ No Fee Unless We Win &nbsp; ✓ Georgia Clients Only
          </p>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => (
  <section className="bg-dark-alt py-20 px-6">
    <div className="max-w-[720px] mx-auto">
      <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">THE HARD TRUTH</p>
      <h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight">
        The Moment You Got Hurt, They Started Working Against You.
      </h2>
      <div className="mt-8 space-y-6 font-dm text-lg text-body-text leading-relaxed">
        <p>Your employer's insurance company has a team of lawyers whose only job is to pay you as little as possible. They know Georgia workers' comp law inside and out. And they started building their case the moment your accident was reported.</p>
        <p>Most injured Georgians don't know they have a claim. Don't know what they're entitled to. And don't know that the lowball offer they just received is the insurance company hoping they sign before speaking to an attorney.</p>
        <p>Darwin F. Johnson has spent 20+ years doing exactly one thing: fighting back. $250 million recovered. 10,000+ cases. He answers the phone himself. And he doesn't get paid unless you win.</p>
      </div>
    </div>
  </section>
);

const TwoPaths = () => (
  <section className="bg-dark py-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      {[
        {
          label: "INJURED ON THE JOB?",
          headline: "Your employer's insurance is not on your side.",
          body: "If you were hurt at work in Georgia — construction site, warehouse, factory, healthcare, trucking — you may be entitled to medical coverage, lost wages, and disability benefits. Darwin has handled cases against Amazon, Walmart, FedEx, Delta, and more.",
          cta: "See Workers' Comp cases →",
          link: "/workers-compensation",
        },
        {
          label: "INJURED IN AN ACCIDENT?",
          headline: "Don't sign anything until you know what you're owed.",
          body: "Car accidents, truck accidents, motorcycle crashes — the insurance company's first offer is almost never their best offer. Georgia gives you 2 years to file. Darwin has recovered millions for Georgia accident victims who almost walked away with nothing.",
          cta: "See Personal Injury cases →",
          link: "/personal-injury",
        },
      ].map((card, i) => (
        <div key={i} className="bg-card border border-card-border border-l-[3px] border-l-cta p-10">
          <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-3">{card.label}</p>
          <h3 className="font-serif italic text-warm-white text-2xl mb-4">{card.headline}</h3>
          <p className="font-dm text-base text-body-text leading-relaxed mb-6">{card.body}</p>
          <Link to={card.link} className="font-dm text-cta hover:underline text-sm font-bold">
            {card.cta}
          </Link>
        </div>
      ))}
    </div>
  </section>
);

const WhyDarwin = () => (
  <section className="bg-dark-alt py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">WHY DARWIN</p>
      <h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-10">
        With Bigger Firms, You Are Just a Number.
      </h2>
      <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-8 mb-10">
        <p className="font-serif italic text-warm-white text-xl md:text-[22px] leading-relaxed">
          "When you call my office, you get ME — not an operator, not a paralegal who screens calls. You get Darwin."
        </p>
        <p className="font-dm text-xs text-muted-text mt-4">— Darwin F. Johnson, Founder & Managing Attorney</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { stat: "PERSONAL ACCESS", desc: "Darwin answers the phone himself. Every time." },
          { stat: "$250M+", desc: "Recovered for Georgia workers and accident victims." },
          { stat: "$0 UPFRONT", desc: "No fee unless we win your case. Zero risk to you." },
        ].map((b, i) => (
          <div key={i}>
            <div className="font-bebas text-3xl text-cta tracking-wider">{b.stat}</div>
            <p className="font-dm text-base text-body-text mt-2">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-dark py-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {[
        { quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him. He responds to your calls immediately.", name: "Nicole F." },
        { quote: "He was very straight forward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M." },
        { quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this that will fight for your rights!", name: "Jeremy H." },
      ].map((t, i) => (
        <div key={i} className="bg-card border border-card-border p-8">
          <div className="text-cta text-lg mb-4">★★★★★</div>
          <p className="font-serif italic text-warm-white text-[17px] leading-relaxed mb-4">"{t.quote}"</p>
          <p className="font-dm font-bold text-xs text-cta">— {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

const FormSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", details: "", clientStatus: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/book-a-call");
  };

  const inputClass = "w-full bg-card border border-card-border text-warm-white font-dm text-base p-3.5 rounded-sm focus:border-cta focus:outline-none transition-colors placeholder:text-muted-text";
  const labelClass = "font-dm text-xs font-bold text-body-text tracking-[1px] uppercase mb-1.5 block";

  return (
    <section id="form-section" className="bg-dark-alt py-20 px-6">
      <div className="max-w-[640px] mx-auto">
        <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">FREE CASE EVALUATION</p>
        <h2 className="font-bebas text-warm-white text-5xl md:text-7xl tracking-wider leading-tight mb-3">
          See What Your Case Is Worth.
        </h2>
        <p className="font-dm text-base text-muted-text mb-8">
          Free, no obligation. No fees unless we win. Georgia clients only.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>First Name</label>
              <input type="text" required className={inputClass} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>Last Name</label>
              <input type="text" required className={inputClass} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Phone Number</label>
              <input type="tel" required className={inputClass} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input type="email" required className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Tell us briefly what happened</label>
            <textarea className={`${inputClass} min-h-[100px]`} placeholder="e.g. I was hurt at my warehouse job in Atlanta..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Are you a new client?</label>
            <select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}>
              <option value="">Select...</option>
              <option value="new">Yes, I am a potential new client</option>
              <option value="existing">No, I am an existing client</option>
              <option value="neither">Neither</option>
            </select>
          </div>
          <button type="submit" className="w-full h-14 bg-cta hover:bg-cta-hover text-primary-foreground font-dm font-bold text-base tracking-[1px] rounded-sm transition-colors">
            SEE WHAT MY CASE IS WORTH →
          </button>
          <p className="font-dm text-xs text-fine-text text-center">
            By submitting, you agree to receive text messages from The Law Offices of Darwin F. Johnson. Msg & data rates may apply. Text STOP to cancel.
          </p>
          <p className="font-dm text-xs text-muted-text text-center">
            🔒 Secure & Confidential · No Fees Unless We Win · Free Consultation
          </p>
        </form>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Header />
      <Hero />
      <ProofBar />
      <ProblemSection />
      <TwoPaths />
      <WhyDarwin />
      <Testimonials />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Index;
