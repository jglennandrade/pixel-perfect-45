import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import teamPhoto from "@/assets/team-photo.jpg";
import badgeWorkersComp from "@/assets/badge-workers-comp.png";
import badgeGoogle from "@/assets/badge-google.png";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ProofBar = () => {
  const stats = [
    { to: 250, prefix: "$", suffix: "M+", label: "Recovered for clients" },
    { to: 10000, suffix: "+", label: "Cases handled", separator: true },
    { to: 20, suffix: "+ Years", label: "In Georgia courts" },
    { to: 2004, suffix: "", label: "Serving Georgia workers", decimals: 0 },
  ];
  return (
    <section className="bg-cta w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`py-6 px-4 text-center ${i < stats.length - 1 ? "md:border-r md:border-primary-foreground/30" : ""} ${i % 2 === 0 && i < 2 ? "border-r border-primary-foreground/30 md:border-r" : ""}`}
          >
            <div className="font-bebas text-5xl text-primary-foreground tracking-wider">
              <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} separator={s.separator} decimals={s.decimals ?? 0} />
            </div>
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

  const headline = "WE FIGHT. YOU RECOVER.";

  return (
    <section
      className="min-h-screen bg-dark flex items-center relative"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-24 w-full">
        <div className="border-l-2 border-cta pl-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-dm text-xs text-cta tracking-[4px] uppercase mb-4"
          >
            ATLANTA'S INJURY ATTORNEYS · GEORGIA ONLY
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
            }}
            className="font-bebas text-warm-white text-6xl md:text-[120px] leading-[0.9] tracking-wider"
          >
            {headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.55, ease }}
                className="inline-block"
                style={{ marginRight: "0.18em" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="font-dm text-xl text-body-text max-w-xl mt-6 leading-relaxed"
          >
            Hurt in Georgia? Whether you were injured at work or in an accident, you may be owed more than you think — and the other side is already building their case against you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button onClick={scrollToForm} className="cta-btn-primary">
              INJURED ON THE JOB? →
            </button>
            <button onClick={scrollToForm} className="cta-btn-outline">
              INJURED IN AN ACCIDENT? →
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-dm text-xs text-muted-text mt-5"
          >
            ✓ Free Consultation &nbsp; ✓ No Fee Unless We Win &nbsp; ✓ Georgia Clients Only
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => (
  <section className="bg-dark-alt py-20 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal>
        <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">THE HARD TRUTH</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight">
          The Moment You Got Hurt, They Started Working Against You.
        </h2>
      </ScrollReveal>
      <div className="mt-8 space-y-6 font-dm text-lg text-body-text leading-relaxed">
        <ScrollReveal delay={0.15}>
          <p>Your employer's insurance company has a team of lawyers whose only job is to pay you as little as possible. They know Georgia workers' comp law inside and out. And they started building their case the moment your accident was reported.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p>Most injured Georgians don't know they have a claim. Don't know what they're entitled to. And don't know that the lowball offer they just received is the insurance company hoping they sign before speaking to an attorney.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <p>Darwin F. Johnson has spent 20+ years doing exactly one thing: fighting back. $250 million recovered. 10,000+ cases. He answers the phone himself. And he doesn't get paid unless you win.</p>
        </ScrollReveal>
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
        <ScrollReveal key={i} delay={i * 0.12} direction={i === 0 ? "left" : "right"}>
          <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-10 h-full group hover:border-cta/50 transition-colors duration-300">
            <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-3">{card.label}</p>
            <h3 className="font-serif italic text-warm-white text-2xl mb-4">{card.headline}</h3>
            <p className="font-dm text-base text-body-text leading-relaxed mb-6">{card.body}</p>
            <Link to={card.link} className="font-dm text-cta hover:underline text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
              {card.cta}
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

const WhyDarwin = () => (
  <section className="bg-dark-alt py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-10">
        <div>
          <ScrollReveal>
            <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">WHY DARWIN</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-10">
              With Bigger Firms, You Are Just a Number.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-8">
              <p className="font-serif italic text-warm-white text-xl md:text-[22px] leading-relaxed">
                "When you call my office, you get ME — not an operator, not a paralegal who screens calls. You get Darwin."
              </p>
              <p className="font-dm text-xs text-muted-text mt-4">— Darwin F. Johnson, Founder & Managing Attorney</p>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2} direction="right" className="hidden md:block">
          <img src={teamPhoto} alt="Darwin F. Johnson and his legal team" className="w-72 h-auto rounded-sm border-2 border-card-border" />
        </ScrollReveal>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {[
          { stat: "PERSONAL ACCESS", desc: "Darwin answers the phone himself. Every time." },
          { stat: "$250M+", desc: "Recovered for Georgia workers and accident victims." },
          { stat: "$0 UPFRONT", desc: "No fee unless we win your case. Zero risk to you." },
        ].map((b, i) => (
          <ScrollReveal key={i} delay={0.25 + i * 0.1}>
            <div>
              <div className="font-bebas text-3xl text-cta tracking-wider">{b.stat}</div>
              <p className="font-dm text-base text-body-text mt-2">{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      {/* Trust badges */}
      <ScrollReveal delay={0.4}>
        <div className="flex items-center justify-center gap-8 opacity-70">
          <img src={badgeWorkersComp} alt="Workers' Comp Lawyers Badge" className="h-16 w-auto" />
          <img src={badgeGoogle} alt="Google Reviews Badge" className="h-16 w-auto" />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    { quote: "Darwin Johnson is the best in the state of Georgia. He is always available whenever you need him. He responds to your calls immediately.", name: "Nicole F." },
    { quote: "He was very straight forward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M." },
    { quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this that will fight for your rights!", name: "Jeremy H." },
  ];

  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4 text-center">REAL CLIENTS. REAL RESULTS.</p>
        </ScrollReveal>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
              className="bg-card border border-card-border p-8 md:p-10"
            >
              <div className="text-cta text-lg mb-4">★★★★★</div>
              <p className="font-serif italic text-warm-white text-xl md:text-2xl leading-relaxed mb-6">"{t.quote}"</p>
              <p className="font-dm font-bold text-sm text-cta">— {t.name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Selector pills */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`relative px-5 py-2 text-xs font-bold font-dm rounded-sm transition-colors duration-200 ${
                active === i ? "text-primary-foreground" : "text-muted-text hover:text-warm-white"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="testimonial-tab"
                  className="absolute inset-0 rounded-sm bg-cta"
                  transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

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
        <ScrollReveal>
          <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">FREE CASE EVALUATION</p>
          <h2 className="font-bebas text-warm-white text-5xl md:text-7xl tracking-wider leading-tight mb-3">
            See What Your Case Is Worth.
          </h2>
          <p className="font-dm text-base text-muted-text mb-8">
            Free, no obligation. No fees unless we win. Georgia clients only.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
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
            <button type="submit" className="cta-btn-primary w-full !h-14 !text-base">
              SEE WHAT MY CASE IS WORTH →
            </button>
            <p className="font-dm text-xs text-fine-text text-center">
              By submitting, you agree to receive text messages from The Law Offices of Darwin F. Johnson. Msg & data rates may apply. Text STOP to cancel.
            </p>
            <p className="font-dm text-xs text-muted-text text-center">
              🔒 Secure & Confidential · No Fees Unless We Win · Free Consultation
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="bg-dark min-h-screen overflow-x-hidden pb-16 md:pb-0">
      <ScrollProgress />
      <Header />
      <Hero />
      <ProofBar />
      <ProblemSection />
      <TwoPaths />
      <WhyDarwin />
      <Testimonials />
      <FormSection />
      <Footer />
      <FloatingCTA />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
