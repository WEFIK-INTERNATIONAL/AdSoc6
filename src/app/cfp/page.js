"use client";

import Image from "next/image";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import UniversalCTA from "@/components/sections/UniversalCTA";

const G = { teal: '#36828E', red: '#E31E24' };

const TRACKS = [
  {
    id: '01',
    title: 'AI & Machine Learning in Healthcare',
    topics: [
      'Explainable AI', 'Deep Learning',
      'Predictive Analytics', 'Reinforcement Learning',
      'Generative AI / LLMs', 'Federated ML',
    ],
  },
  {
    id: '02',
    title: 'Smart Healthcare Systems',
    topics: [
      'Smart Hospitals', 'Remote Monitoring',
      'Emergency AI', 'Precision Medicine',
      'Connected Care', 'Clinical IoT',
    ],
  },
  {
    id: '03',
    title: 'Internet of Medical Things (IoMT)',
    topics: [
      'Wearables', 'Edge AI', 'WBAN',
      'Biosensors', 'Real-time Data',
      'Implantables',
    ],
  },
  {
    id: '04',
    title: 'Society 6.0 & Digital Healthcare Transformation',
    topics: [
      'Human-Centric AI', 'Sustainability',
      'Rural Healthcare', 'Ethical AI',
      'Inclusive Tech', 'Digital Equity',
    ],
  },
  {
    id: '05',
    title: 'Medical Image & Signal Processing',
    topics: [
      'Radiology AI', 'MRI / CT / X-ray',
      'Computer Vision', 'Pathology AI',
      'Signal Analysis', 'Early Detection',
    ],
  },
  {
    id: '06',
    title: 'Cybersecurity & Privacy in Healthcare',
    topics: [
      'Blockchain EHR', 'Privacy-Preserving AI',
      'Secure Cloud', 'Data Governance',
      'Homomorphic Encryption', 'Zero Trust',
    ],
  },
  {
    id: '07',
    title: 'Big Data & Healthcare Informatics',
    topics: [
      'EHR Analytics', 'CDSS',
      'Recommender Systems', 'Epidemiology',
      'Knowledge Graphs', 'Health Informatics',
    ],
  },
  {
    id: '08',
    title: 'Robotics & Automation in Healthcare',
    topics: [
      'Surgical Robots', 'Rehab Robotics',
      'Assistive Systems', 'HRI',
      'Tele-surgery', 'Autonomous Care',
    ],
  },
  {
    id: '09',
    title: 'Cloud, Edge & Fog Computing',
    topics: [
      'Federated Learning', 'Edge Intelligence',
      'Fog Computing', 'Distributed Analytics',
      'Low-Latency AI', '5G/6G Health',
    ],
  },
  {
    id: '10',
    title: 'Emerging Technologies in Healthcare',
    topics: [
      'Digital Twins', 'Metaverse',
      'AR / VR Training', 'Quantum Computing',
      '6G Healthcare', 'Neuromorphic AI',
    ],
  },
  {
    id: '11',
    title: 'Public Health & Healthcare Policy',
    topics: [
      'Epidemic Prediction', 'Health Equity',
      'Policy AI', 'One Health',
      'Sustainable Health', 'Vaccine Analytics',
    ],
  },
];

function TrackCard({ track }) {
  return (
    <div
      className="relative rounded-2xl p-6 border transition-all duration-500 overflow-hidden group hover:scale-[1.02]"
      style={{
        background: 'rgba(15,17,23,0.7)',
        borderColor: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(54,130,142,0.2) 0%, transparent 70%)' }}
      />

      {/* Track number */}
      <span
        className="font-accent text-[0.6rem] font-black tracking-[0.22em] uppercase mb-3 block"
        style={{ color: G.teal }}
      >
        {track.id}
      </span>

      {/* Title */}
      <div
        className="font-display text-base md:text-lg font-bold text-white mb-5 leading-snug group-hover:text-primary transition-colors duration-300"
        style={{ letterSpacing: '-0.02em', fontSize: '1rem' }}
      >
        {track.title}
      </div>

      {/* Divider */}
      <div
        className="h-px w-full mb-4"
        style={{ background: 'linear-gradient(to right, rgba(54,130,142,0.4), transparent)' }}
      />

      {/* Topic pills */}
      <div className="flex flex-wrap gap-2">
        {track.topics.map((t) => (
          <span
            key={t}
            className="text-[0.65rem] px-2.5 py-1 rounded-full font-medium"
            style={{
              background: 'rgba(54,130,142,0.1)',
              color: 'rgba(203,213,225,0.85)',
              border: '1px solid rgba(54,130,142,0.2)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CFPPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />

      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────── */}
        <div className="relative h-[420px] md:h-[520px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(54,130,142,0.22) 0%, transparent 70%)' }}
          />
          <InteractiveDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ border: `1px solid rgba(54,130,142,0.3)`, background: 'rgba(54,130,142,0.07)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: G.teal }} />
              <span
                className="font-accent text-[0.6rem] uppercase tracking-[0.22em] font-semibold"
                style={{ color: G.teal }}
              >
                ADSoC 6.0 · Submissions Open
              </span>
            </div>

            <h1
              className="font-heading font-black uppercase text-white leading-none tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              style={{ fontSize: 'clamp(3rem,10vw,7rem)' }}
            >
              Call for Papers
            </h1>

            {/* Divider */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping opacity-75" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_16px_rgba(54,130,142,0.8)]" />
              </div>
              <div className="h-[2px] w-20 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* ── Content ──────────────────────────────────────── */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-20 md:py-28">

          {/* CFP Poster Image */}
          <Section>
            <div className="flex justify-center mb-12">
              <div
                className="relative w-full max-w-3xl rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  border: '1px solid rgba(54,130,142,0.25)',
                  boxShadow: '0 0 60px rgba(54,130,142,0.12), 0 20px 60px rgba(0,0,0,0.5)',
                }}
              >
                <Image
                  src="/CFP14082026.png"
                  alt="ADSoC 6.0 Call for Papers Poster"
                  width={1200}
                  height={1697}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </Section>

          {/* PDF Download Button */}
          <Section>
            <div className="flex justify-center mb-16">
              <a
                href="/CFP14082026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-bold text-sm tracking-[3px] uppercase transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(227,30,36,0.15), rgba(54,130,142,0.15))',
                  border: '1px solid rgba(227,30,36,0.35)',
                  color: '#fff',
                  boxShadow: '0 8px 32px rgba(227,30,36,0.15)',
                }}
              >
                {/* PDF icon */}
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: 'rgba(227,30,36,0.15)', color: G.red }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </span>
                Download CFP (PDF)
                {/* Arrow */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          </Section>

          {/* Section Header */}
          <Section>
            <div className="mb-12">
              <p
                className="mono text-xs font-bold tracking-[0.25em] uppercase mb-3"
                style={{ color: G.teal }}
              >
                Call for Papers · ADSoC 6.0
              </p>
              <h2
                className="font-display text-3xl md:text-5xl font-black text-white uppercase leading-none"
                style={{ letterSpacing: '-0.04em' }}
              >
                Research{' '}
                <span
                  style={{
                    background: `linear-gradient(90deg, ${G.teal}, ${G.red})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Tracks
                </span>
              </h2>
              <p className="text-slate-400 font-body mt-4 max-w-2xl leading-relaxed">
                ADSoC 6.0 welcomes original research contributions across the following thematic areas bridging advanced computing and diagnostic medical sciences.
              </p>
            </div>
          </Section>

          {/* Track Cards Grid */}
          <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {TRACKS.map((track) => (
                <TrackCard key={track.id} track={track} />
              ))}
            </div>
          </Section>

        </div>
        <UniversalCTA />
      </main>

      <Footer />
    </div>
  );
}
