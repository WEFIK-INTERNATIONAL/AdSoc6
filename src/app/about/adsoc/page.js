"use client";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const OBJECTIVES = [
  "Promote innovative research in AI-driven healthcare technologies",
  "Bridge the gap between academia, industry, and healthcare practitioners",
  "Foster collaboration on real-world healthcare challenges",
  "Explore ethical, secure, and sustainable AI solutions",
  "Encourage development of smart, connected healthcare infrastructures",
];

const HIGHLIGHTS = [
  { title: "Keynote Speeches", desc: "Renowned experts in AI, healthcare & emerging tech" },
  { title: "Technical Presentations", desc: "Papers across multidisciplinary research tracks" },
  { title: "Workshops & Tutorials", desc: "Hands-on sessions on cutting-edge tools" },
  { title: "Panel Discussions", desc: "Future healthcare innovations and policies" },
  { title: "Global Networking", desc: "Connect with researchers and industry leaders" },
];

const WHO_ATTENDS = [
  "Researchers & academicians in AI, healthcare, and engineering",
  "Data scientists and machine learning engineers",
  "Healthcare professionals and biomedical experts",
  "Industry practitioners and technology innovators",
  "Students and aspiring researchers",
];

const TOPICS = [
  "AI and Machine Learning in Healthcare",
  "Biomedical Signal and Image Processing",
  "IoT and Wearable Healthcare Systems",
  "Smart Medical Devices and Embedded Systems",
  "Healthcare Robotics and Automation",
  "Secure and Ethical AI in Medicine",
  "Digital Health and Telemedicine",
  "Sustainable and Accessible Healthcare Solutions",
];

const WHY_ADSOC = [
  { num: "01", label: "Latest AI Advancements", sub: "Stay ahead with cutting-edge healthcare AI research" },
  { num: "02", label: "Global Visibility", sub: "Showcase your work to an international audience" },
  { num: "03", label: "Expert Insights", sub: "Learn from industry leaders and domain experts" },
  { num: "04", label: "Professional Network", sub: "Build meaningful collaborations that last" },
  { num: "05", label: "Shape Society 6.0", sub: "Contribute to the future of healthcare systems" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const G = { teal: '#36828E', red: '#E31E24' };

function Tag({ children }) {
  return (
    <span
      className="inline-block font-accent uppercase text-[0.6rem] tracking-[0.22em] font-semibold mb-3"
      style={{ color: G.teal }}
    >
      {children}
    </span>
  );
}

function SectionHeading({ children }) {
  return (
    <h2
      className="font-big font-black uppercase text-white text-4xl md:text-5xl leading-none"
      style={{ letterSpacing: '-0.04em' }}
    >
      {children}
    </h2>
  );
}

function HR() {
  return (
    <hr
      className="border-0 h-px my-0"
      style={{ background: 'linear-gradient(to right, transparent, rgba(54,130,142,0.15), rgba(227,30,36,0.1), transparent)' }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutAdsocPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <div className="relative h-[480px] md:h-[580px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(54,130,142,0.25)_0%,transparent_70%)] pointer-events-none" />
          <InteractiveDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            <p className="mono text-primary text-sm md:text-base mb-6 tracking-[8px] uppercase font-bold opacity-90">
              ADSoC 6.0
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white leading-none tracking-tighter uppercase font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              About ADSoc
            </h1>
            <div className="relative flex items-center justify-center gap-6 mt-12">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(54,130,142,0.8)]" />
              </div>
              <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* ── ABOUT ────────────────────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <Tag>About The Conference</Tag>
            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-2">
                <SectionHeading>
                  AI-Driven{' '}
                  <span style={{ background: `linear-gradient(90deg,${G.teal},${G.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Smart Healthcare
                  </span>
                  {' '}for Society 6.0
                </SectionHeading>
              </div>
              <div className="md:col-span-3 space-y-4 font-body text-slate-400 text-base leading-relaxed">
                <p>
                  The <span className="text-white font-medium">6th International Conference on Advanced Systems, Data Science, and Computing (ADSOC 6)</span> brings together leading researchers, academicians, industry professionals, and innovators from across the globe to explore the transformative potential of <span className="text-white font-medium">Artificial Intelligence in Smart Healthcare Systems</span>.
                </p>
                <p>
                  With the theme <em className="text-slate-300">&quot;AI-Driven Smart Healthcare for Society 6.0&quot;</em>, ADSOC 6 serves as a premier platform for cutting-edge research, technological advancements, and practical solutions shaping the future of healthcare.
                </p>
              </div>
            </div>
          </div>
        </section>

        <HR />

        {/* ── VISION ───────────────────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <Tag>Conference Vision</Tag>
            <div
              className="rounded-xl p-8 md:p-10 border relative overflow-hidden"
              style={{ background: 'rgba(54,130,142,0.05)', borderColor: 'rgba(54,130,142,0.18)' }}
            >
              <div
                className="absolute top-4 left-6 font-big font-black select-none pointer-events-none leading-none"
                style={{ fontSize: '6rem', color: 'rgba(54,130,142,0.07)' }}
              >
                &ldquo;
              </div>
              <p className="font-body text-xl md:text-2xl text-white leading-snug mb-4 relative z-10">
                ADSOC 6 envisions a future where{' '}
                <span style={{ color: G.teal }} className="font-semibold">
                  AI-powered technologies seamlessly integrate with healthcare systems
                </span>{' '}
                to deliver personalized, efficient, and accessible medical services for all.
              </p>
              <p className="font-body text-slate-400 text-base relative z-10">
                Inspired by <span className="text-white">Society 6.0</span>, the conference emphasizes the convergence of cyber-physical systems, data intelligence, and human well-being.
              </p>
            </div>
          </div>
        </section>

        <HR />

        {/* ── OBJECTIVES + WHO ATTENDS ─────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10">

              {/* Objectives */}
              <div>
                <Tag>Conference Objectives</Tag>
                <SectionHeading>What We Aim To Do</SectionHeading>
                <ul className="mt-6 space-y-2">
                  {OBJECTIVES.map((obj, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 py-3"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      <span
                        className="font-big font-black text-lg leading-none shrink-0 mt-0.5 w-6 text-right"
                        style={{ color: 'rgba(54,130,142,0.35)' }}
                      >
                        {i + 1}
                      </span>
                      <span className="font-body text-slate-300 text-sm leading-snug">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Should Attend */}
              <div>
                <Tag>Who Should Attend</Tag>
                <SectionHeading>Built For Everyone</SectionHeading>
                <ul className="mt-6 space-y-2">
                  {WHO_ATTENDS.map((w, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 py-3"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: G.teal }}
                      />
                      <span className="font-body text-slate-300 text-sm">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        <HR />

        {/* ── KEY HIGHLIGHTS ────────────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <Tag>Key Highlights</Tag>
                <SectionHeading>What to Expect</SectionHeading>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 border flex flex-col gap-2 transition-all duration-300 cursor-default hover:-translate-y-1"
                  style={{ background: 'rgba(15,17,23,0.7)', borderColor: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(54,130,142,0.28)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                  <span
                    className="font-big font-black text-2xl leading-none"
                    style={{ color: 'rgba(54,130,142,0.3)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display font-bold text-white text-sm">{h.title}</p>
                  <p className="font-body text-slate-500 text-xs leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HR />

        {/* ── SCOPE ────────────────────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <Tag>Scope of the Conference</Tag>
            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-2">
                <SectionHeading>Topics Covered</SectionHeading>
                <p className="font-body text-slate-500 text-sm mt-3 leading-relaxed">
                  ADSOC 6 covers a wide range of interdisciplinary research areas at the intersection of AI and healthcare.
                </p>
              </div>
              <div className="md:col-span-3">
                <div className="grid sm:grid-cols-2 gap-x-8">
                  {TOPICS.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-3"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: `linear-gradient(135deg, ${G.teal}, ${G.red})` }}
                      />
                      <span className="font-body text-slate-300 text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <HR />

        {/* ── WHY ADSOC ─────────────────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <Tag>Why ADSOC 6?</Tag>
            <SectionHeading>5 Reasons to Join</SectionHeading>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {WHY_ADSOC.map((w, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 border flex flex-col gap-2 transition-all duration-300 cursor-default hover:-translate-y-1"
                  style={{ background: 'rgba(15,17,23,0.7)', borderColor: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(54,130,142,0.28)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                  <span
                    className="font-big font-black text-2xl leading-none"
                    style={{ color: 'rgba(54,130,142,0.3)' }}
                  >
                    {w.num}
                  </span>
                  <p className="font-display font-bold text-white text-sm">{w.label}</p>
                  <p className="font-body text-slate-500 text-xs leading-relaxed">{w.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HR />

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 plus-pattern opacity-10 pointer-events-none" />
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
              style={{ border: `1px solid rgba(227,30,36,0.3)`, background: 'rgba(227,30,36,0.05)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: G.red }} />
              <span className="font-accent text-[0.6rem] font-semibold tracking-widest uppercase" style={{ color: G.red }}>
                Submissions Open
              </span>
            </div>

            <h2
              className="font-big font-black uppercase text-white leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', letterSpacing: '-0.04em' }}
            >
              Ready to{' '}
              <span style={{ background: `linear-gradient(90deg,${G.red},${G.teal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Contribute?
              </span>
            </h2>

            <p className="font-body text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed text-base">
              Submit your research and be part of the premier global forum on AI-driven smart healthcare. ADSoC 6.0 is technically co-sponsored by the IEEE Kolkata Section.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/cfp"
                className="px-8 py-3.5 text-white font-semibold rounded-lg text-sm tracking-widest transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${G.red}, #b91c1c)`,
                  boxShadow: '0 6px 24px rgba(227,30,36,0.25)',
                  border: `1px solid rgba(227,30,36,0.4)`,
                }}
              >
                SUBMIT YOUR PAPER
              </Link>
              <Link
                href="/conference/dates"
                className="px-8 py-3.5 text-white font-medium rounded-lg border border-white/10 hover:border-white/25 transition-all text-sm tracking-widest"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                VIEW KEY DATES
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
