"use client";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const G = { teal: '#36828E', red: '#E31E24' };

const STATS = [
  { val: '2003', label: 'Established' },
  { val: 'NAAC A+', label: 'Accreditation' },
  { val: 'NBA', label: 'Accredited Programs' },
  { val: 'NIRF', label: 'Ranked' },
];

const ACADEMICS = [
  "Strong fundamentals in engineering and technology",
  "Hands-on learning through laboratories and projects",
  "Research and innovation-driven education",
  "Industry-oriented training and internships",
];

const INFRASTRUCTURE = [
  "Advanced laboratories and research facilities",
  "Digital libraries and academic resources",
  "Smart classrooms and seminar halls",
  "Sports, cultural, and co-curricular facilities",
];

const INDUSTRY = [
  "Internship opportunities",
  "Industry-driven training programs",
  "Placement support with leading organizations",
  "Exposure to emerging technologies",
];

const ACHIEVEMENTS = [
  "NAAC A+ Accreditation",
  "NBA-accredited programs",
  "NIRF Ranking — Engineering category",
  "Participation in AICTE VAANI initiative",
  "Strong alumni network in global organizations",
];

const CAMPUS_LIFE = [
  "Technical fests and hackathons",
  "Cultural events and competitions",
  "Workshops, seminars, and guest lectures",
  "Entrepreneurship and innovation programs",
];

// ─── Primitives ───────────────────────────────────────────────────────────────

function Tag({ children }) {
  return (
    <p className="font-accent uppercase text-[0.6rem] tracking-[0.22em] font-semibold mb-3" style={{ color: G.teal }}>
      {children}
    </p>
  );
}

function SectionHeading({ children, size = "large" }) {
  const cls = size === "large"
    ? "font-big font-black uppercase text-white leading-none text-4xl md:text-5xl"
    : "font-big font-black uppercase text-white leading-none text-3xl md:text-4xl";
  return <h2 className={cls} style={{ letterSpacing: '-0.04em' }}>{children}</h2>;
}

function GradText({ children }) {
  return (
    <span style={{ background: `linear-gradient(90deg,${G.teal},${G.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      {children}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InstitutePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <div className="relative h-[480px] md:h-[580px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(54,130,142,0.22)_0%,transparent_70%)] pointer-events-none" />
          <InteractiveDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            <p className="mono text-primary text-sm mb-6 tracking-[8px] uppercase font-bold opacity-90">
              About The Institute
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white leading-none tracking-tighter uppercase font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              Guru Nanak Institute<br />of Technology
            </h1>
            <p className="font-body text-slate-400 text-base mt-4">
              GNIT, Kolkata · JIS Group · Est. 2003
            </p>
            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(54,130,142,0.8)]" />
              </div>
              <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* ── INSTITUTE OVERVIEW ───────────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">

            {/* Heading + stats row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Tag>About The Institute</Tag>
                <SectionHeading>
                  Premier Technical<br />
                  <GradText>Education in Kolkata</GradText>
                </SectionHeading>
              </div>
              <div className="flex gap-8 shrink-0">
                {STATS.map(s => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span
                      className="font-big font-black text-xl md:text-2xl leading-none text-center"
                      style={{ background: `linear-gradient(90deg,${G.teal},${G.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      {s.val}
                    </span>
                    <span className="font-accent text-[0.5rem] uppercase tracking-widest text-slate-500 mt-1 text-center">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image + body */}
            <div className="grid md:grid-cols-5 gap-10 items-start">

              <div className="md:col-span-2 rounded-xl overflow-hidden border border-white/5 relative aspect-[4/3]">
                <Image
                  src="/GNITImage.png"
                  alt="Guru Nanak Institute of Technology campus"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    className="font-accent text-[0.55rem] uppercase tracking-widest px-2 py-1 rounded"
                    style={{ background: 'rgba(5,7,10,0.75)', color: G.teal, backdropFilter: 'blur(8px)' }}
                  >
                    GNIT Campus, Kolkata
                  </span>
                </div>
              </div>

              <div className="md:col-span-3 space-y-4 font-body text-slate-400 text-sm leading-relaxed">
                <p>
                  <span className="text-slate-200 font-medium">Guru Nanak Institute of Technology (GNIT)</span>, established in 2003 under the JIS Group Educational Initiatives, is a premier technical institution empowering aspiring professionals with cutting-edge technological knowledge and industry-relevant skills.
                </p>
                <p>
                  Affiliated with <span className="text-slate-200 font-medium">Maulana Abul Kalam Azad University of Technology (MAKAUT)</span>, West Bengal, GNIT is approved by AICTE and recognized by the UGC. The institute holds prestigious accreditations from <span className="text-slate-200 font-medium">NAAC (A+) and NBA</span>, reflecting its commitment to quality education and continuous excellence.
                </p>
                <p>
                  Located in North Kolkata near Sodepur, GNIT offers a well-connected, vibrant campus environment fostering creativity, collaboration, and holistic development — supporting students both academically and personally.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['MAKAUT Affiliated', 'AICTE Approved', 'UGC Recognized', 'NAAC A+', 'NBA'].map(b => (
                    <span
                      key={b}
                      className="font-accent text-[0.55rem] uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ border: `1px solid rgba(54,130,142,0.25)`, color: G.teal, background: 'rgba(54,130,142,0.06)' }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 1. ACADEMIC EXCELLENCE ──────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <Tag>Academic Excellence</Tag>
                <SectionHeading size="medium">
                  Programs &amp; <GradText>Curriculum</GradText>
                </SectionHeading>
              </div>
              <div>
                <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">
                  GNIT offers a wide range of undergraduate and postgraduate programs in engineering, technology, and applied sciences. The curriculum aligns with current industry trends, ensuring theoretical knowledge and practical exposure.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ACADEMICS.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg px-4 py-3 border"
                      style={{ background: 'rgba(54,130,142,0.04)', borderColor: 'rgba(54,130,142,0.14)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: G.teal }} />
                      <span className="font-body text-slate-300 text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. CAMPUS INFRASTRUCTURE ────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5" style={{ background: 'rgba(54,130,142,0.025)' }}>
          <div className="container mx-auto max-w-5xl">
            <Tag>Campus Infrastructure</Tag>
            <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
              <div>
                <SectionHeading size="medium">
                  Modern <GradText>Learning Environment</GradText>
                </SectionHeading>
                <p className="font-body text-slate-400 text-sm leading-relaxed mt-4">
                  Located in North Kolkata near Sodepur, GNIT provides a vibrant, well-connected campus conducive to learning and innovation — equipped with modern infrastructure that supports academic excellence and personal growth.
                </p>
              </div>
              <div className="space-y-3">
                {INFRASTRUCTURE.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2.5 px-1"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <span
                      className="font-big font-black text-lg leading-none w-6 shrink-0 text-right"
                      style={{ color: 'rgba(54,130,142,0.3)' }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-body text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. RESEARCH & INDUSTRY ──────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <Tag>Research &amp; Industry</Tag>
                <SectionHeading size="medium">
                  Innovation &amp; <GradText>Collaboration</GradText>
                </SectionHeading>
              </div>
              <div>
                <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">
                  GNIT actively promotes research, innovation, and interdisciplinary collaboration. Through conferences, workshops, and funded research projects, the institute drives innovative solutions to real-world challenges, while maintaining strong industry ties.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {INDUSTRY.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg px-4 py-3 border"
                      style={{ background: 'rgba(54,130,142,0.04)', borderColor: 'rgba(54,130,142,0.14)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: G.teal }} />
                      <span className="font-body text-slate-300 text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. ACHIEVEMENTS ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5" style={{ background: 'rgba(227,30,36,0.02)' }}>
          <div className="container mx-auto max-w-5xl">
            <Tag>Achievements</Tag>
            <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
              <div>
                <SectionHeading size="medium">
                  Recognition &amp; <GradText>Rankings</GradText>
                </SectionHeading>
                <p className="font-body text-slate-400 text-sm leading-relaxed mt-4">
                  Over the years, GNIT has established itself as one of the leading private engineering institutions in West Bengal — consistently demonstrating dedication to academic excellence, research, and innovation.
                </p>
              </div>
              <div className="space-y-2">
                {ACHIEVEMENTS.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 border"
                    style={{ background: 'rgba(227,30,36,0.04)', borderColor: 'rgba(227,30,36,0.12)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: G.red }} />
                    <span className="font-body text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. CAMPUS LIFE ──────────────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <Tag>Campus Life</Tag>
                <SectionHeading size="medium">
                  Holistic <GradText>Development</GradText>
                </SectionHeading>
              </div>
              <div>
                <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">
                  GNIT believes in the all-round development of students by encouraging participation in technical, cultural, and social activities that build leadership, teamwork, and a global perspective.
                </p>
                <div className="flex flex-wrap gap-3">
                  {CAMPUS_LIFE.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-full px-4 py-2 border"
                      style={{ background: 'rgba(54,130,142,0.05)', borderColor: 'rgba(54,130,142,0.18)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: G.teal }} />
                      <span className="font-body text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. VISION FOR THE FUTURE ────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">
            <Tag>Vision for the Future</Tag>
            <div
              className="rounded-xl px-8 py-8 border relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(54,130,142,0.07) 0%, rgba(5,7,10,0.95) 70%)', borderColor: 'rgba(54,130,142,0.18)' }}
            >
              <div
                className="absolute top-3 left-6 font-big font-black select-none pointer-events-none leading-none"
                style={{ fontSize: '6rem', color: 'rgba(54,130,142,0.06)' }}
              >
                &ldquo;
              </div>
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center relative z-10">
                <SectionHeading size="medium">
                  Center of <GradText>Excellence</GradText>
                </SectionHeading>
                <p className="font-body text-slate-300 text-base leading-relaxed md:pl-8">
                  With a strong foundation in engineering education and a forward-looking approach, GNIT continues to evolve as a center of excellence in technology and research. The institute aims to contribute significantly to the development of skilled professionals who can lead innovation and drive societal transformation in the era of digital and intelligent systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ADSOC CALLOUT ────────────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div
              className="rounded-xl px-8 py-8 border relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(54,130,142,0.07) 0%, rgba(227,30,36,0.04) 100%)',
                borderColor: 'rgba(54,130,142,0.18)',
              }}
            >
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(54,130,142,0.12) 0%, transparent 70%)' }}
              />
              <div className="relative z-10">
                <p className="font-accent uppercase text-[0.6rem] tracking-[0.22em] font-semibold mb-2" style={{ color: G.teal }}>
                  🚀 ADSoC 6.0 &amp; GNIT
                </p>
                <h3
                  className="font-big font-black uppercase text-white text-2xl md:text-3xl leading-tight mb-3"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  Proud to be hosted at <GradText>GNIT</GradText>
                </h3>
                <p className="font-body text-slate-400 text-sm leading-relaxed max-w-2xl">
                  ADSOC 6 is proud to be hosted in collaboration with an institute that represents excellence in education, innovation, and research. Guru Nanak Institute of Technology stands as a hub of academic excellence, innovation, and professional development — the perfect setting for a premier international conference.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Section className="py-24 px-6 bg-background relative overflow-hidden">
                  <div className="absolute inset-0 plus-pattern opacity-30"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
                  <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 mb-6">
                      <p className="text-xs text-accent font-semibold tracking-widest uppercase">Call for Papers</p>
                    </div>
                    <h2 className="text-white mb-6">Ready to <span className="text-accent">Submit?</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
                      Join leading globally indexed researchers. ADSoC 6.0 is technically co-sponsored by IEEE Kolkata Section. Ensure your work shapes Society 6.0.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                      <Link href="/cfp" className="px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 text-sm tracking-widest border border-accent/30">
                        SUBMISSION PORTAL
                      </Link>
                      <Link href="/conference/dates" className="px-10 py-4 glass-dark text-white font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all text-sm tracking-widest">
                        KEY DEADLINES
                      </Link>
                    </div>
                  </div>
                </Section>

      </main>
      <Footer />
    </div>
  );
}
