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
import darwinOffice from "@/assets/darwin-office.webp";

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
              GEORGIA PERSONAL INJURY ATTORNEY
            </motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }} className="font-bebas text-warm-white text-6xl md:text-[110px] leading-[0.9] tracking-wider">
              {"HURT IN A GEORGIA ACCIDENT?".split(" ").map((w, i) => (
                <motion.span key={i} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.55, ease }} className="inline-block" style={{ marginRight: "0.18em" }}>{w}</motion.span>
              ))}
              <br />
              {"DON'T SIGN ANYTHING YET.".split(" ").map((w, i) => (
                <motion.span key={`b-${i}`} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.55, ease }} className="inline-block text-cta" style={{ marginRight: "0.18em" }}>{w}</motion.span>
              ))}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }} className="font-dm text-xl text-body-text max-w-xl mt-6 leading-relaxed">
              Most Georgia accident victims don't know what their case is actually worth. The insurance company does. That's why they called you first. Before you accept anything — talk to Darwin. It's free.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }} className="mt-8">
              <button onClick={scrollToForm} className="cta-btn-primary">FIND OUT WHAT MY CASE IS WORTH →</button>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-dm text-xs text-muted-text mt-5">
              ✓ No Fee Unless We Win &nbsp; ✓ Free Consultation &nbsp; ✓ Georgia Clients Only
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease }} className="hidden md:block">
            <img src={darwinOffice} alt="Darwin F. Johnson in his office" className="w-80 h-56 rounded-sm object-cover border-2 border-cta/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InsuranceAngle = () => (
  <section className="bg-dark-alt py-20 px-6">
    <div className="max-w-[720px] mx-auto">
      <ScrollReveal><p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">THE HARD TRUTH</p></ScrollReveal>
      <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-6">The Moment Your Accident Happened, They Started Building a Case Against You.</h2></ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="space-y-6 font-dm text-lg text-body-text leading-relaxed">
          <p>Insurance companies have entire legal teams whose only job is to minimize what they pay you. When they call you quickly with an offer, that is not generosity — that is them trying to close your case before you realize what it is actually worth.</p>
          <p>Once you sign a settlement release, you cannot go back — even if your injuries turn out to be more serious than first thought. Georgia gives you 2 years to file. But the sooner Darwin gets involved, the stronger your case.</p>
          <p>A free call with Darwin costs you nothing. Signing too early could cost you everything.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const CaseTypes = () => {
  const cases = [
    { title: "CAR ACCIDENTS", desc: "Georgia roads are some of the most dangerous in the Southeast. Whether you were rear-ended, T-boned, or sideswiped — Darwin fights for full compensation." },
    { title: "TRUCK ACCIDENTS", desc: "Commercial truck accidents involve federal regulations, multiple liable parties, and massive insurance policies. Darwin knows how to navigate all of it." },
    { title: "MOTORCYCLE ACCIDENTS", desc: "Motorcyclists are often blamed unfairly after accidents. Darwin builds cases that cut through that bias and recover what you deserve." },
    { title: "BRAIN & SPINAL CORD INJURIES", desc: "Catastrophic injuries require aggressive representation. Darwin has recovered millions for Georgia clients with life-altering injuries." },
    { title: "WRONGFUL DEATH", desc: "If you lost a family member due to someone else's negligence, Darwin handles wrongful death claims with care and aggression." },
    { title: "PREMISES LIABILITY", desc: "Slip and falls, negligent security, unsafe properties — if you were hurt on someone else's property, they may owe you." },
  ];
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">CASES WE HANDLE</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-10">If You Were Hurt by Someone Else's Negligence in Georgia, We Handle It.</h2></ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.08}>
              <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-6 h-full">
                <div className="font-bebas text-xl text-cta tracking-wider mb-3">{c.title}</div>
                <p className="font-dm text-base text-body-text leading-relaxed">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.5}>
          <div className="bg-card border border-card-border border-l-[3px] border-l-cta p-8 mt-10">
            <p className="font-serif italic text-warm-white text-xl leading-relaxed">"I was hit by an Uber and almost walked away with nothing. I had no idea what my case was actually worth."</p>
            <p className="font-dm text-xs text-muted-text mt-4">— The story Darwin hears every week</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const Damages = () => (
  <section className="bg-dark-alt py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal><h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-4">Two Types of Damages. Most People Only Know About One.</h2></ScrollReveal>
      <ScrollReveal delay={0.1}><p className="font-dm text-lg text-body-text leading-relaxed mb-10">Georgia personal injury law allows you to recover both economic and non-economic damages. Most people only think about their medical bills. Here is the full picture:</p></ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        <ScrollReveal delay={0.15} direction="left">
          <div className="bg-card border border-card-border p-8">
            <p className="font-bebas text-2xl text-cta tracking-wider mb-4">ECONOMIC DAMAGES</p>
            {["Medical expenses (past and future)", "Lost wages during recovery", "Lost earning capacity (long-term)", "Property damage (vehicle, etc.)"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-2">✓ {t}</p>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="right">
          <div className="bg-card border border-card-border p-8">
            <p className="font-bebas text-2xl text-cta tracking-wider mb-4">NON-ECONOMIC DAMAGES</p>
            {["Pain and suffering", "Emotional distress and anxiety", "Loss of enjoyment of life", "Loss of consortium (impact on family)"].map(t => (
              <p key={t} className="font-dm text-base text-body-text mb-2">✓ {t}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.3}>
        <div className="mt-8 space-y-4">
          <p className="font-dm text-base text-cta font-bold">Georgia has a 2-year statute of limitations for most personal injury cases. Miss that window and you lose your right to file — permanently.</p>
          <p className="font-dm text-base text-body-text">Call Darwin today at <a href="tel:4045212667" className="text-cta font-bold">404-521-2667</a>. Free, no obligation.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const PITopMistakes = () => {
  const mistakes = [
    { num: "01", title: "NOT SEEING A DOCTOR IMMEDIATELY", desc: "Gaps in medical treatment are used by insurance companies to argue your injuries are not as serious as claimed. See a doctor that day." },
    { num: "02", title: "GIVING A RECORDED STATEMENT", desc: "Insurance adjusters are trained to ask questions that sound innocent but can be used against you. Do not give a statement without Darwin." },
    { num: "03", title: "ACCEPTING THE FIRST OFFER", desc: "The first offer exists to close your case before you know what it is worth. It is almost never the real number." },
    { num: "04", title: "POSTING ON SOCIAL MEDIA", desc: "Photos, check-ins, and activity posts are used to dispute the severity of your injuries. Go dark on social after any accident." },
    { num: "05", title: "WAITING TOO LONG TO CALL", desc: "Evidence fades. Witnesses disappear. Dashcam footage gets deleted. The sooner Darwin gets involved, the stronger your case." },
  ];
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal><h2 className="font-bebas text-warm-white text-4xl md:text-6xl tracking-wider leading-tight mb-8">The 5 Mistakes That Kill Georgia Accident Claims.</h2></ScrollReveal>
        <div className="space-y-4">
          {mistakes.map((m, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
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
        { quote: "His compassionate nature and genuine interest in my recovery made me feel valued as a person, not just a client.", name: "Connie C." },
        { quote: "Darwin is a bold man. Darwin Law Firm is the best! I am very pleased with my settlement.", name: "Former Client" },
        { quote: "He was very straightforward and got me the best offer for my settlement. You'll be in great hands.", name: "Adtresa M." },
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
    <section id="form-section" className="bg-dark py-20 px-6">
      <div className="max-w-[640px] mx-auto">
        <ScrollReveal>
          <p className="font-dm text-[11px] text-cta tracking-[4px] uppercase mb-4">FREE CASE EVALUATION</p>
          <h2 className="font-bebas text-warm-white text-5xl md:text-7xl tracking-wider leading-tight mb-3">Find Out What Your Georgia Accident Case Is Worth.</h2>
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
            <div><label className={labelClass}>Tell us briefly what happened</label><textarea className={`${inputClass} min-h-[100px]`} placeholder="e.g. I was rear-ended on I-285 in Atlanta..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} /></div>
            <div><label className={labelClass}>Are you a new client?</label><select required className={inputClass} value={form.clientStatus} onChange={e => setForm({ ...form, clientStatus: e.target.value })}><option value="">Select...</option><option value="new">Yes, I am a potential new client</option><option value="existing">No, I am an existing client</option><option value="neither">Neither</option></select></div>
            <button type="submit" className="cta-btn-primary w-full !h-14 !text-base">FIND OUT WHAT MY ACCIDENT CASE IS WORTH →</button>
            <p className="font-dm text-xs text-fine-text text-center">By submitting, you agree to receive text messages from The Law Offices of Darwin F. Johnson. Msg & data rates may apply. Text STOP to cancel.</p>
            <p className="font-dm text-xs text-muted-text text-center">🔒 Secure & Confidential · No Fees Unless We Win · Free Consultation</p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

const PersonalInjury = () => (
  <div className="bg-dark min-h-screen overflow-x-hidden pb-16 md:pb-0">
    <ScrollProgress />
    <Header />
    <Hero />
    <ProofBar />
    <InsuranceAngle />
    <CaseTypes />
    <Damages />
    <PITopMistakes />
    <Testimonials />
    <FormSection />
    <Footer />
    <FloatingCTA />
    <MobileStickyBar />
  </div>
);

export default PersonalInjury;
