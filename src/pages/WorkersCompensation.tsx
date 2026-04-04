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
import badgeWorkersComp from "@/assets/badge-workers-comp.png";
import badgeGoogle from "@/assets/badge-google.png";
import badgeGoogle2 from "@/assets/badge-google-2.png";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─── SCROLLING BADGE BAR ─── */
const BadgeBar = () => {
  const badges = [
    { src: badgeWorkersComp, alt: "Workers' Comp Badge" },
    { src: badgeGoogle, alt: "Google Reviews" },
    { src: badgeGoogle2, alt: "Google Reviews" },
  ];
  const allBadges = [...badges, ...badges, ...badges, ...badges];
  return (
    <section className="bg-dark-alt border-y border-card-border py-5 overflow-hidden">
      <p className="font-dm text-[10px] text-muted-text tracking-[4px] uppercase text-center mb-4">AS SEEN ON</p>
      <div className="relative">
        <div className="flex items-center gap-16 animate-marquee" style={{ width: "max-content" }}>
          {allBadges.map((b, i) => (
            <img key={i} src={b.src} alt={b.alt} className="h-12 md:h-16 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          ))}
        </div>
      </div>
    </section>
  );
};

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
        <div className="absolute inset-0 noise-texture opacity-[0.03]" />
        {/* Large watermark "30" */}
        <div className="absolute bottom-10 right-10 font-bebas text-[300px] md:text-[400px] text-warm-white/[0.03] leading-none tracking-wider pointer-events-none select-none">30</div>
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
          Your boss says "file a report." Their insurance company says "we'll handle it." What they're really saying is: "we hope you don't call a lawyer."
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }} className="mt-10">
          <button onClick={scrollToForm} className="cta-btn-primary !py-5 !px-10 !text-base">SEE IF YOU HAVE A CASE →</button>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-dm text-xs text-warm-white/50 mt-6">
          Free. No obligation. No fee unless we win. &nbsp; ✓ 20+ Years Georgia Experience
        </motion.p>
      </div>
    </section>
  );
};

const Qualify = () => (
  <section className="bg-dark py-24 md:py-32 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal><div className="editorial-divider mb-6" /><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">DO YOU QUALIFY?</p></ScrollReveal>
      <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-8">You Probably Have a Valid Claim. You Just Don't Know It Yet.</h2></ScrollReveal>
      
      <div className="space-y-5 font-dm text-lg md:text-xl text-body-text leading-relaxed mb-10">
        <ScrollReveal delay={0.15}><p>Here's something most injured Georgia workers don't know:</p></ScrollReveal>
        <ScrollReveal delay={0.18}><p>Workers' comp is a <span className="text-warm-white font-medium">no-fault system.</span> You don't need to prove your employer did anything wrong.</p></ScrollReveal>
        <ScrollReveal delay={0.21}><p>If you were hurt while performing your job duties — that's it. You generally have a valid claim.</p></ScrollReveal>
        <ScrollReveal delay={0.24}><p>Doesn't matter if it was "your fault." Doesn't matter if your employer is "a good company." The law is the law.</p></ScrollReveal>
      </div>

      <ScrollReveal delay={0.27}>
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className="bg-card border border-card-border p-6">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">ON-THE-JOB INJURY</p>
            {["Injury occurred while working", "Injured due to the job you perform", "Includes injuries during work travel"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-3">✓ {t}</p>
            ))}
          </div>
          <div className="bg-card border border-card-border p-6">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">EMPLOYMENT STATUS</p>
            {["You are a legal employee (not contractor)", "Your employer has 3 or more employees", "Full-time, part-time, and seasonal workers"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-3">✓ {t}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className="relative pl-8 border-l-2 border-cta">
          <p className="font-dm text-lg text-warm-white leading-relaxed font-medium">Check even one box from each column? You probably have a claim. Hit the button below — Darwin will tell you for free.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Benefits = () => {
  const items = [
    { stat: "MEDICAL BILLS", desc: "All current and future medical expenses. We've seen $300K+ in coverage for a single workplace injury. Doctor visits, surgery, PT, medication — all covered." },
    { stat: "LOST WAGES", desc: "2/3 of your average weekly wage, up to $800/week, for up to 400 weeks. That's real money while you recover." },
    { stat: "DISABILITY BENEFITS", desc: "Permanent partial or total disability payments if your injury results in long-term impairment. This is often worth more than people realize." },
    { stat: "DEATH BENEFITS", desc: "If a family member died in a workplace accident, you may be entitled to weekly benefits plus $7,500 for funeral costs. Darwin handles these cases with care." },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">WHAT YOU'RE ENTITLED TO</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">Most Georgia Workers Have No Idea What They're Actually Owed.</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">And that's exactly how the insurance companies like it. Here's what a valid workers' comp claim can actually include:</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.08}>
              <div className="bg-card border border-card-border p-8 h-full relative overflow-hidden group hover:border-cta/30 transition-all duration-500">
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
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">Darwin Has Taken on Georgia's Biggest Employers. And Won.</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-12">Amazon, Walmart, FedEx — they all have insurance companies with deep pockets and aggressive lawyers. Darwin has beaten them all.</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-12">
          <ScrollReveal delay={0.2} direction="left">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">INDUSTRIES</p>
            {industries.map(ind => <p key={ind} className="font-dm text-base text-body-text mb-2.5 py-1.5 border-b border-card-border last:border-0">{ind}</p>)}
          </ScrollReveal>
          <ScrollReveal delay={0.25} direction="right">
            <p className="font-dm text-[13px] font-bold text-gold tracking-[2px] uppercase mb-4">EMPLOYERS WE'VE BEATEN</p>
            {employers.map(emp => <p key={emp} className="font-dm text-base text-body-text mb-2.5 py-1.5 border-b border-card-border last:border-0">{emp}</p>)}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Mistakes = () => {
  const mistakes = [
    { num: "01", title: "NOT REPORTING YOUR INJURY IN TIME", desc: "Georgia law requires you to report within 30 days. Miss this window and your entire claim can be denied. Not 31 days. Not 'when you get around to it.' 30 days." },
    { num: "02", title: "NOT FOLLOWING YOUR DOCTOR'S ORDERS", desc: "If your doctor says stay off your feet and they catch you mowing the lawn? Your benefits are gone. Follow the treatment plan. No exceptions." },
    { num: "03", title: "GIVING A RECORDED STATEMENT", desc: "That friendly insurance adjuster who called you? They're not trying to help you. They're trying to get you to say something they can use against you. Never give a recorded statement without your attorney present." },
    { num: "04", title: "ACCEPTING THE FIRST OFFER", desc: "The first offer is designed to close your case cheaply. It's almost never what you're actually owed. Darwin has seen clients receive 5-10x more than the initial offer." },
    { num: "05", title: "NOT HIRING AN ATTORNEY", desc: "Workers who hire an attorney recover significantly more than those who don't. Darwin's consultation is free. There's literally no reason not to call." },
  ];
  return (
    <section className="bg-dark-alt py-24 md:py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-gold tracking-[4px] uppercase mb-6">PROTECT YOUR CLAIM</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-7xl tracking-wider leading-[0.95] mb-4">5 Mistakes That Will Kill Your Workers' Comp Claim.</h2></ScrollReveal>
        <ScrollReveal delay={0.12}><p className="font-dm text-lg text-body-text leading-relaxed mb-10">Insurance companies are counting on you making at least one of these. Don't give them the satisfaction.</p></ScrollReveal>
        <div className="space-y-5">
          {mistakes.map((m, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.08}>
              <div className="bg-card border border-card-border p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cta" />
                <div className="flex gap-5 pl-4">
                  <span className="font-bebas text-4xl text-cta/30 tracking-wider">{m.num}</span>
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
          { result: "Fired after reporting injury. Won full benefits + back pay.", quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this.", name: "Jeremy H." },
          { result: "First-time claim. Darwin handled everything.", quote: "Never had to deal with a worker's compensation claim before. Darwin got results in my brother-in-law's time of need.", name: "James J." },
          { result: "Best attorney in Georgia. Period.", quote: "Attorney Darwin Johnson is the best. I would tell anybody to give him the chance to work on your case.", name: "Janice C." },
        ].map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="bg-card border border-card-border p-8 md:p-10 h-full">
              <p className="font-bebas text-cta text-lg tracking-wider mb-3">{t.result}</p>
              <div className="text-gold text-lg mb-4 tracking-widest">★★★★★</div>
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
          <p className="font-dm text-lg text-body-text mb-3">Takes 30 seconds. No obligation. No fee unless we win.</p>
          <p className="font-dm text-sm text-muted-text mb-10">Darwin reviews every submission personally. Georgia clients only.</p>
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
    <BadgeBar />
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
