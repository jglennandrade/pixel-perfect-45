import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import darwinHeadshot from "@/assets/darwin-headshot.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ProofBar = () => {
  const stats = [
    { to: 250, prefix: "$", suffix: "M+", label: "Recovered for clients" },
    { to: 10000, suffix: "+", label: "Cases handled", separator: true },
    { to: 20, suffix: "+ Years", label: "In Georgia courts" },
    { to: 2004, suffix: "", label: "Serving Georgia workers" },
  ];
  return (
    <section className="bg-cta w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className={`py-6 px-4 text-center ${i < stats.length - 1 ? "md:border-r md:border-primary-foreground/30" : ""} ${i % 2 === 0 && i < 2 ? "border-r border-primary-foreground/30" : ""}`}>
            <div className="font-bebas text-5xl text-primary-foreground tracking-wider">
              <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} separator={s.separator} decimals={0} />
            </div>
            <div className="font-dm text-xs text-primary-foreground/85 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Hero = () => {
  const scrollToForm = () => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={darwinHeadshot} alt="Darwin F. Johnson" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/85 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-32 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease }} className="editorial-divider mb-6" />
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-dm text-xs text-gold tracking-[4px] uppercase mb-6">
          GEORGIA WORKERS' COMPENSATION ATTORNEY
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }} className="font-bebas text-warm-white text-6xl md:text-[120px] leading-[0.88] tracking-wider max-w-4xl">
          {"HURT AT WORK?".split(" ").map((w, i) => (
            <motion.span key={i} variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.6, ease }} className="inline-block" style={{ marginRight: "0.2em" }}>{w}</motion.span>
          ))}
          <br />
          {"YOU HAVE 30 DAYS.".split(" ").map((w, i) => (
            <motion.span key={`b-${i}`} variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.6, ease }} className="inline-block text-cta" style={{ marginRight: "0.2em" }}>{w}</motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }} className="font-dm text-xl md:text-2xl text-warm-white/80 max-w-xl mt-8 leading-relaxed">
          Georgia law requires you to report your workplace injury within 30 days. The clock is already running. Talk to Darwin first. Free call. No obligation.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }} className="mt-10">
          <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">FIND OUT WHAT MY CASE IS WORTH →</button>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-dm text-xs text-warm-white/50 mt-6">
          ✓ No Fee Unless We Win &nbsp; ✓ Free Consultation &nbsp; ✓ 20+ Years Georgia Experience
        </motion.p>
      </div>
    </section>
  );
};

const Qualify = () => (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal><div className="editorial-divider mb-6" /><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">DO YOU QUALIFY?</p></ScrollReveal>
      <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-8">You May Have a Valid Claim and Not Even Know It.</h2></ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="font-dm text-lg md:text-xl text-body-text leading-relaxed mb-10">In Georgia, workers' compensation is a no-fault system. You do not need to prove your employer did anything wrong. If you were hurt while performing your job duties, you generally have a valid claim.</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">ON-THE-JOB INJURY</p>
            {["Injury occurred while working", "Injured due to the job you perform", "Includes injuries during work travel"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-3">✓ {t}</p>
            ))}
          </div>
          <div>
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">EMPLOYMENT STATUS</p>
            {["You are a legal employee (not contractor)", "Your employer has 3 or more employees", "Full-time, part-time, and seasonal workers"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-3">✓ {t}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.25}>
        <div className="relative pl-8 border-l-2 border-cta">
          <p className="font-dm text-lg text-body-text leading-relaxed">If you check even one box from each column, you likely have a claim. Call <a href="tel:4045212667" className="text-cta font-bold">404-521-2667</a> — Darwin will review your situation personally.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Benefits = () => {
  const items = [
    { stat: "MEDICAL BILLS", desc: "All current and future medical expenses — doctor visits, surgery, physical therapy, medication." },
    { stat: "LOST WAGES", desc: "2/3 of your average weekly wage, up to $800/week, for up to 400 weeks while you cannot work." },
    { stat: "DISABILITY BENEFITS", desc: "Permanent partial or total disability payments if your injury results in long-term impairment." },
    { stat: "DEATH BENEFITS", desc: "If a family member died in a workplace accident, you may be entitled to weekly benefits plus funeral costs." },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">WHAT YOU ARE ENTITLED TO</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-6">Most Georgia Workers Don't Know What They're Actually Owed.</h2></ScrollReveal>
        <ScrollReveal delay={0.15}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">Under Georgia workers' compensation law, a valid claim can include far more than just the ER bill:</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.08}>
              <div className="bg-card border border-card-border p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cta" />
                <div className="font-bebas text-[28px] text-cta tracking-wider mb-3 pl-4">{item.stat}</div>
                <p className="font-dm text-base text-body-text leading-relaxed pl-4">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = ["Construction & Roofing", "Warehouse & Logistics", "Healthcare & Medical", "Trucking & Delivery", "Poultry Processing", "Industrial & Factory", "Airport & Airline", "Grocery & Retail", "Law Enforcement", "Power & Utilities"];
  const employers = ["Amazon Warehouse", "Walmart", "FedEx", "UPS", "Delta Airlines", "Home Depot", "Coca-Cola", "Kia Motors", "Mohawk Industries", "Pilgrim's Pride"];
  return (
    <section className="bg-dark py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">WE KNOW YOUR WORKPLACE</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-12">We've Handled Cases Against Georgia's Biggest Employers.</h2></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-12">
          <ScrollReveal delay={0.2} direction="left">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">INDUSTRIES</p>
            {industries.map(ind => <p key={ind} className="font-dm text-base text-body-text mb-2.5">{ind}</p>)}
          </ScrollReveal>
          <ScrollReveal delay={0.25} direction="right">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">EMPLOYERS</p>
            {employers.map(emp => <p key={emp} className="font-dm text-base text-body-text mb-2.5">{emp}</p>)}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Mistakes = () => {
  const mistakes = [
    { num: "01", title: "NOT REPORTING YOUR INJURY IN TIME", desc: "Georgia law requires you to report within 30 days. Miss this window and your claim can be denied entirely." },
    { num: "02", title: "NOT FOLLOWING YOUR DOCTOR'S ORDERS", desc: "If your doctor says stay off your feet and you go chop wood, you risk your benefits." },
    { num: "03", title: "POSTING ON SOCIAL MEDIA", desc: "Insurance investigators watch your social media. One photo can be used to argue you are not as injured as claimed." },
    { num: "04", title: "ACCEPTING THE FIRST OFFER", desc: "The first offer is almost never their best. It is designed to close your case cheaply." },
    { num: "05", title: "NOT HIRING AN ATTORNEY", desc: "Workers who hire an attorney recover significantly more. Darwin's consultation is free." },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">PROTECT YOUR CLAIM</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-10">The Mistakes That Kill Workers' Comp Claims.</h2></ScrollReveal>
        <div className="space-y-5">
          {mistakes.map((m, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.08}>
              <div className="bg-card border border-card-border p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cta" />
                <div className="flex gap-5 pl-4">
                  <span className="font-bebas text-3xl text-cta/40 tracking-wider">{m.num}</span>
                  <div>
                    <p className="font-bebas text-xl text-warm-white tracking-wider mb-2">{m.title}</p>
                    <p className="font-dm text-base text-body-text leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal><div className="editorial-divider mx-auto mb-6" /><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6 text-center">REAL CLIENTS. REAL RESULTS.</p></ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this.", name: "Jeremy H." },
          { quote: "Never had to deal with a worker's compensation claim before. Darwin got results in my brother-in-law's time of need.", name: "James J." },
          { quote: "Attorney Darwin Johnson is the best. I would tell anybody to give him the chance to work on your case.", name: "Janice C." },
        ].map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="bg-card border border-card-border p-8 md:p-10 h-full">
              <div className="text-cta text-xl mb-5 tracking-widest">★★★★★</div>
              <p className="font-serif italic text-warm-white text-lg leading-relaxed mb-5">"{t.quote}"</p>
              <p className="font-dm font-bold text-xs text-gold tracking-wider">— {t.name.toUpperCase()}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const FormSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", details: "", clientStatus: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); navigate("/book-a-call"); };
  const inputClass = "w-full bg-card border border-card-border text-warm-white font-dm text-base p-4 rounded-sm focus:border-cta focus:outline-none transition-colors placeholder:text-muted-text";
  const labelClass = "font-dm text-xs font-bold text-body-text tracking-[1px] uppercase mb-2 block";

  return (
    <section id="form-section" className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-[640px] mx-auto">
        <ScrollReveal>
          <div className="editorial-divider mb-6" />
          <p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">FREE CASE EVALUATION</p>
          <h2 className="font-bebas text-warm-white text-5xl md:text-8xl tracking-wider leading-[0.9] mb-4">Find Out What Your Work Injury Is Worth.</h2>
          <p className="font-dm text-lg text-body-text mb-10">Free, no obligation. No fees unless we win. Georgia clients only.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className={labelClass}>First Name</label><input type="text" required className={inputClass} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} /></div>
              <div><label className={labelClass}>Last Name</label><input type="text" required className={inputClass} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className={labelClass}>Phone Number</label><input type="tel" required className={inputClass} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
              <div><label className={labelClass}>Email Address</label><input type="email" required className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            </div>
            <div><label className={labelClass}>Tell us briefly what happened</label><textarea className={`${inputClass} min-h-[120px]`} placeholder="e.g. I was hurt at my warehouse job in Atlanta..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} /></div>
            <div><label className={labelClass}>Are you a new client?</label><select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}><option value="">Select...</option><option value="new">Yes, I am a potential new client</option><option value="existing">No, I am an existing client</option><option value="neither">Neither</option></select></div>
            <button type="submit" className="cta-btn-primary w-full !h-16 !text-base">FIND OUT WHAT MY WORKPLACE INJURY IS WORTH →</button>
            <p className="font-dm text-xs text-fine-text text-center">By submitting, you agree to receive text messages from The Law Offices of Darwin F. Johnson.</p>
            <p className="font-dm text-xs text-muted-text text-center">🔒 Secure & Confidential · No Fees Unless We Win · Free Consultation</p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

const WorkersCompensation = () => (
  <div className="bg-dark min-h-screen overflow-x-hidden pb-16 md:pb-0">
    <ScrollProgress />
    <Header />
    <Hero />
    <ProofBar />
    <Qualify />
    <Benefits />
    <Industries />
    <Mistakes />
    <Testimonials />
    <FormSection />
    <Footer />
    <FloatingCTA />
    <MobileStickyBar />
  </div>
);

export default WorkersCompensation;
