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
    <section className="min-h-screen bg-dark flex items-center relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")' }}>
      <div className="max-w-6xl mx-auto px-6 pt-24 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="border-l-2 border-cta pl-8">
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-dm text-xs text-cta tracking-[4px] uppercase mb-4">
              GEORGIA WORKERS' COMPENSATION ATTORNEY
            </motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }} className="font-bebas text-warm-white text-6xl md:text-[110px] leading-[0.9] tracking-wider">
              {"HURT AT WORK IN GEORGIA?".split(" ").map((w, i) => (
                <motion.span key={i} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.55, ease }} className="inline-block" style={{ marginRight: "0.18em" }}>{w}</motion.span>
              ))}
              <br />
              {"YOU HAVE 30 DAYS.".split(" ").map((w, i) => (
                <motion.span key={`b-${i}`} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.55, ease }} className="inline-block text-cta" style={{ marginRight: "0.18em" }}>{w}</motion.span>
              ))}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }} className="font-dm text-xl text-body-text max-w-xl mt-6 leading-relaxed">
              Georgia law requires you to report your workplace injury within 30 days. The clock is already running. Before you talk to HR, before you sign anything — talk to Darwin. Free call. No obligation.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }} className="mt-8">
              <button onClick={scrollToForm} className="cta-btn-primary">FIND OUT WHAT MY CASE IS WORTH →</button>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-dm text-xs text-muted-text mt-5">
              ✓ No Fee Unless We Win &nbsp; ✓ Free Consultation &nbsp; ✓ 20+ Years Georgia Experience
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease }} className="hidden md:block">
            <img src={darwinHeadshot} alt="Darwin F. Johnson" className="w-64 h-64 rounded-sm object-cover border-2 border-cta/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Qualify = () => (
  <section className="bg-dark-alt py-20 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal><p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">DO YOU QUALIFY?</p></ScrollReveal>
      <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-6">You May Have a Valid Claim and Not Even Know It.</h2></ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="font-dm text-lg text-body-text leading-relaxed mb-8">In Georgia, workers' compensation is a no-fault system. You do not need to prove your employer did anything wrong. If you were hurt while performing your job duties and your employer has 3 or more employees, you generally have a valid claim.</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="font-dm text-[13px] font-bold text-cta tracking-[2px] uppercase mb-3">ON-THE-JOB INJURY</p>
            {["Injury occurred while working", "Injured due to the job you perform", "Includes injuries during work travel"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-2">✓ {t}</p>
            ))}
          </div>
          <div>
            <p className="font-dm text-[13px] font-bold text-cta tracking-[2px] uppercase mb-3">EMPLOYMENT STATUS</p>
            {["You are a legal employee (not contractor)", "Your employer has 3 or more employees", "Applies to full-time, part-time, and seasonal workers"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-2">✓ {t}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.25}>
        <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-6">
          <p className="font-dm text-base text-body-text leading-relaxed">If you check even one box from each column, you likely have a claim. Darwin offers free consultations — call <a href="tel:4045212667" className="text-cta font-bold">404-521-2667</a> or fill out the form below and he will review your situation personally.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Benefits = () => {
  const items = [
    { stat: "MEDICAL BILLS", desc: "All current and future medical expenses related to your injury — doctor visits, surgery, physical therapy, medication." },
    { stat: "LOST WAGES", desc: "2/3 of your average weekly wage, up to $800/week, for up to 400 weeks while you cannot work." },
    { stat: "DISABILITY BENEFITS", desc: "Permanent partial or total disability payments if your injury results in long-term or permanent impairment." },
    { stat: "DEATH BENEFITS", desc: "If a family member died in a workplace accident, you may be entitled to weekly benefits plus up to $7,250 in funeral costs." },
  ];
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">WHAT YOU ARE ENTITLED TO</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-4">Most Georgia Workers Don't Know What They're Actually Owed.</h2></ScrollReveal>
        <ScrollReveal delay={0.15}><p className="font-dm text-lg text-body-text leading-relaxed mb-10">Under Georgia workers' compensation law, a valid claim can include far more than just the ER bill. Here is what Darwin fights to recover:</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.08}>
              <div className="bg-card border border-card-border p-8">
                <div className="font-bebas text-[28px] text-cta tracking-wider mb-3">{item.stat}</div>
                <p className="font-dm text-base text-body-text leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = ["Construction & Roofing", "Warehouse & Logistics", "Healthcare & Medical", "Trucking & Delivery", "Poultry Processing", "Industrial & Factory", "Airport & Airline", "Grocery & Retail", "Law Enforcement & First Responders", "Power & Utilities"];
  const employers = ["Amazon Warehouse", "Walmart", "FedEx", "UPS", "Delta Airlines", "Home Depot", "Coca-Cola", "Kia Motors", "Mohawk Industries", "Pilgrim's Pride / Tip Top Poultry"];
  return (
    <section className="bg-dark-alt py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">WE KNOW YOUR WORKPLACE</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-[56px] tracking-wider leading-tight mb-4">We've Handled Cases Against Georgia's Biggest Employers.</h2></ScrollReveal>
        <ScrollReveal delay={0.15}><p className="font-dm text-lg text-body-text leading-relaxed mb-10">Darwin has dedicated experience with injuries across every major industry and employer in Georgia. If you see your employer below, he has been there before.</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-10">
          <ScrollReveal delay={0.2} direction="left">
            <p className="font-dm text-[13px] font-bold text-cta tracking-[2px] uppercase mb-4">INDUSTRIES</p>
            {industries.map(ind => <p key={ind} className="font-dm text-base text-body-text mb-2">{ind}</p>)}
          </ScrollReveal>
          <ScrollReveal delay={0.25} direction="right">
            <p className="font-dm text-[13px] font-bold text-cta tracking-[2px] uppercase mb-4">EMPLOYERS</p>
            {employers.map(emp => <p key={emp} className="font-dm text-base text-body-text mb-2">{emp}</p>)}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Mistakes = () => {
  const mistakes = [
    { num: "01", title: "NOT REPORTING YOUR INJURY IN TIME", desc: "Georgia law requires you to report within 30 days. Miss this window and your claim can be denied entirely." },
    { num: "02", title: "NOT FOLLOWING YOUR DOCTOR'S ORDERS", desc: "If your doctor says stay off your feet and you go chop wood, you risk your benefits and give the insurance company ammunition." },
    { num: "03", title: "POSTING ON SOCIAL MEDIA", desc: "Insurance investigators watch your social media. One photo of you at a family event can be used to argue you are not as injured as claimed." },
    { num: "04", title: "ACCEPTING THE FIRST OFFER", desc: "The insurance company's first offer is almost never their best. It is a starting point designed to close your case cheaply." },
    { num: "05", title: "NOT HIRING AN ATTORNEY", desc: "Workers who hire an attorney recover significantly more than those who go it alone. Darwin's consultation is free. There is no reason to wait." },
  ];
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">PROTECT YOUR CLAIM</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-4">The Mistakes That Kill Workers' Comp Claims.</h2></ScrollReveal>
        <ScrollReveal delay={0.15}><p className="font-dm text-lg text-body-text leading-relaxed mb-8">Darwin has seen these mistakes destroy valid cases. Avoid them.</p></ScrollReveal>
        <div className="space-y-4">
          {mistakes.map((m, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.08}>
              <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-6">
                <div className="flex gap-4">
                  <span className="font-bebas text-3xl text-cta tracking-wider">{m.num}</span>
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
  <section className="bg-dark-alt py-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {[
        { quote: "We just settled! I was injured on the job and they tried to fire me. Wrong thing to do when you have attorneys like this.", name: "Jeremy H." },
        { quote: "Never had to deal with a worker's compensation claim before. Darwin got results in my brother-in-law's time of need.", name: "James J." },
        { quote: "Attorney Darwin Johnson is the best. I would tell anybody to give him the chance to work on your case.", name: "Janice C." },
      ].map((t, i) => (
        <ScrollReveal key={i} delay={i * 0.1}>
          <div className="bg-card border border-card-border p-8 h-full">
            <div className="text-cta text-lg mb-4">★★★★★</div>
            <p className="font-serif italic text-warm-white text-[17px] leading-relaxed mb-4">"{t.quote}"</p>
            <p className="font-dm font-bold text-xs text-cta">— {t.name}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

const FormSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", details: "", clientStatus: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); navigate("/book-a-call"); };
  const inputClass = "w-full bg-card border border-card-border text-warm-white font-dm text-base p-3.5 rounded-sm focus:border-cta focus:outline-none transition-colors placeholder:text-muted-text";
  const labelClass = "font-dm text-xs font-bold text-body-text tracking-[1px] uppercase mb-1.5 block";

  return (
    <section id="form-section" className="bg-dark-alt py-20 px-6">
      <div className="max-w-[640px] mx-auto">
        <ScrollReveal>
          <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">FREE CASE EVALUATION</p>
          <h2 className="font-bebas text-warm-white text-5xl md:text-7xl tracking-wider leading-tight mb-3">Find Out What Your Work Injury Case Is Worth.</h2>
          <p className="font-dm text-base text-muted-text mb-8">Free, no obligation. No fees unless we win. Georgia clients only.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>First Name</label><input type="text" required className={inputClass} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} /></div>
              <div><label className={labelClass}>Last Name</label><input type="text" required className={inputClass} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Phone Number</label><input type="tel" required className={inputClass} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
              <div><label className={labelClass}>Email Address</label><input type="email" required className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            </div>
            <div><label className={labelClass}>Tell us briefly what happened</label><textarea className={`${inputClass} min-h-[100px]`} placeholder="e.g. I was hurt at my warehouse job in Atlanta..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} /></div>
            <div><label className={labelClass}>Are you a new client?</label><select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}><option value="">Select...</option><option value="new">Yes, I am a potential new client</option><option value="existing">No, I am an existing client</option><option value="neither">Neither</option></select></div>
            <button type="submit" className="cta-btn-primary w-full !h-14 !text-base">FIND OUT WHAT MY WORKPLACE INJURY IS WORTH →</button>
            <p className="font-dm text-xs text-fine-text text-center">By submitting, you agree to receive text messages from The Law Offices of Darwin F. Johnson. Msg & data rates may apply. Text STOP to cancel.</p>
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
