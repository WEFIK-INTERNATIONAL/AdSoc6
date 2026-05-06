"use client";

import { useEffect, useState, useRef } from 'react';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const DATES = [
  {
    id: 1,
    phase: "Phase 01",
    title: "Abstract Submission",
    deadline: "2026-05-16",
    display: "May 16, 2026",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    ),
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "Full Paper Submission",
    deadline: "2026-09-30",
    display: "Sep 30, 2026",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Notification of Acceptance",
    deadline: "2026-11-30",
    display: "Nov 30, 2026",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Final Paper Submission",
    deadline: "2026-12-31",
    display: "Dec 31, 2026",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.57.93 6.18 2.44"/>
      </svg>
    ),
    highlight: true,
  },
];

// ─── Countdown hook ───────────────────────────────────────────────────────────

function useCountdown(deadline) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const target = new Date(deadline + 'T23:59:00+05:30').getTime();
    const calc = () => {
      const diff = target - Date.now();
      if (diff <= 0) return setTimeLeft({ past: true });
      const days = Math.floor(diff / 86400000);
      const hrs  = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      setTimeLeft({ days, hrs, mins, past: false });
    };
    calc();
    const id = setInterval(calc, 30000);
    return () => clearInterval(id);
  }, [deadline]);

  return timeLeft;
}

// ─── Single timeline card ─────────────────────────────────────────────────────

function DateCard({ phase, title, deadline, display, icon, highlight, index }) {
  const countdown = useCountdown(deadline);
  const isLeft = index % 2 === 0;

  const statusBadge = countdown?.past
    ? { label: 'Closed', color: '#64748b', bg: 'rgba(100,116,139,0.1)' }
    : { label: 'Open', color: '#36828E', bg: 'rgba(54,130,142,0.1)' };

  return (
    <div className={`relative flex flex-col md:flex-row items-center md:items-start gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

      {/* Card */}
      <div className={`w-full md:w-[calc(50%-2.5rem)] group`}>
        <div
          className="relative rounded-2xl p-7 md:p-8 border transition-all duration-500 overflow-hidden"
          style={{
            background: highlight
              ? 'linear-gradient(135deg, rgba(54,130,142,0.08) 0%, rgba(227,30,36,0.04) 100%)'
              : 'rgba(15,17,23,0.7)',
            borderColor: highlight ? 'rgba(54,130,142,0.3)' : 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Corner glow */}
          <div
            className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(54,130,142,0.18) 0%, transparent 70%)' }}
          />
          {highlight && (
            <div
              className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(227,30,36,0.10) 0%, transparent 70%)' }}
            />
          )}

          {/* Phase + status row */}
          <div className="flex items-center justify-between mb-5 relative z-10">
            <span
              className="font-accent uppercase text-[0.6rem] tracking-[0.2em] font-semibold"
              style={{ color: '#36828E' }}
            >
              {phase}
            </span>
            <span
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-widest"
              style={{ color: statusBadge.color, background: statusBadge.bg, border: `1px solid ${statusBadge.color}40` }}
            >
              {!countdown?.past && (
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusBadge.color }} />
              )}
              {statusBadge.label}
            </span>
          </div>

          {/* Icon + title */}
          <div className="flex items-start gap-3 mb-5 relative z-10">
            <div
              className="p-2.5 rounded-lg shrink-0 mt-0.5 transition-colors duration-300"
              style={{ background: 'rgba(54,130,142,0.12)', color: '#36828E' }}
            >
              {icon}
            </div>
            <h3
              className="font-display text-xl md:text-2xl font-bold leading-tight text-white group-hover:text-primary transition-colors duration-300"
              style={{ letterSpacing: '-0.03em' }}
            >
              {title}
            </h3>
          </div>

          {/* Date display */}
          <div className="relative z-10">
            <p
              className="font-big text-3xl md:text-4xl font-black leading-none mb-1"
              style={{
                background: highlight
                  ? 'linear-gradient(90deg, #36828E, #E31E24)'
                  : 'linear-gradient(90deg, #CBD5E1, #94A3B8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {display}
            </p>
            <p className="mono text-[0.65rem] text-slate-600 tracking-widest mt-1">23:59 IST · FIRM DEADLINE</p>
          </div>

          {/* Countdown strip */}
          {countdown && !countdown.past && (
            <div
              className="flex items-center gap-3 mt-5 pt-5 relative z-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              {[
                { val: countdown.days, label: 'Days' },
                { val: countdown.hrs,  label: 'Hrs'  },
                { val: countdown.mins, label: 'Min'  },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span
                    className="font-big text-2xl font-black leading-none"
                    style={{ color: '#36828E' }}
                  >
                    {String(val).padStart(2, '0')}
                  </span>
                  <span className="font-accent text-[0.55rem] uppercase tracking-widest text-slate-600 mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
              <span className="text-slate-700 text-xs ml-1">remaining</span>
            </div>
          )}
          {countdown?.past && (
            <div
              className="mt-5 pt-5 relative z-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <span className="mono text-[0.65rem] text-slate-600 uppercase tracking-widest">Deadline passed</span>
            </div>
          )}
        </div>
      </div>

      {/* Centre spine node — desktop only */}
      <div className="hidden md:flex flex-col items-center w-20 shrink-0 relative self-stretch">
        {/* vertical line top */}
        <div
          className="flex-1 w-px"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(54,130,142,0.25))' }}
        />
        {/* node */}
        <div
          className="w-4 h-4 rounded-full border-2 z-10 my-2 shrink-0"
          style={{
            borderColor: highlight ? '#E31E24' : '#36828E',
            background: highlight ? 'rgba(227,30,36,0.15)' : 'rgba(54,130,142,0.15)',
            boxShadow: highlight ? '0 0 14px rgba(227,30,36,0.35)' : '0 0 14px rgba(54,130,142,0.35)',
          }}
        />
        {/* vertical line bottom */}
        <div
          className="flex-1 w-px"
          style={{ background: 'linear-gradient(to top, transparent, rgba(54,130,142,0.25))' }}
        />
      </div>

      {/* Spacer — opposite side so card stays in correct column */}
      <div className="hidden md:block w-[calc(50%-2.5rem)]" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden text-foreground">
      <Nav />

      <main className="flex-1 relative z-10">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <div className="relative h-[420px] md:h-[520px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(54,130,142,0.22)_0%,transparent_70%)] pointer-events-none" />
          <InteractiveDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            <p className="mono text-primary text-sm md:text-base mb-6 tracking-[8px] uppercase font-bold opacity-90">
              ADSoC 6.0 · Conference Roadmap
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white leading-none tracking-tighter uppercase font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              Key Dates
            </h1>
            
            {/* Neural Hub Visualization */}
            <div className="relative flex items-center justify-center gap-6 mt-12">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary animate-ping opacity-75"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(54,130,142,0.8)]"></div>
                </div>
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        {/* ── Timeline ─────────────────────────────────────────────── */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl py-24 md:py-32 relative">

          {/* Background watermark */}
          <div
            className="absolute -left-24 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none select-none hidden xl:block"
            style={{ opacity: 0.025 }}
          >
            <p className="font-big text-[9rem] font-black uppercase tracking-[1.5rem] whitespace-nowrap text-white">
              TIMELINE
            </p>
          </div>

          <div className="space-y-0 md:space-y-0 flex flex-col gap-6 md:gap-0 relative z-10">
            {DATES.map((d, idx) => (
              <Section key={d.id}>
                <DateCard {...d} index={idx} />
              </Section>
            ))}
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <Section className="py-24 px-6 bg-background relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 plus-pattern opacity-20" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'rgba(227,30,36,0.05)' }}
          />

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ border: '1px solid rgba(227,30,36,0.3)', background: 'rgba(227,30,36,0.05)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#E31E24' }} />
              <p className="font-accent text-[0.65rem] font-semibold tracking-widest uppercase" style={{ color: '#E31E24' }}>
                Call for Papers
              </p>
            </div>

            <h2
              className="font-big text-5xl md:text-7xl font-black uppercase text-white mb-4 leading-none"
              style={{ letterSpacing: '-0.05em' }}
            >
              Ready to{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #E31E24, #36828E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Submit?
              </span>
            </h2>

            <p className="font-body text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
              Join leading globally indexed researchers. ADSoC 6.0 is technically co-sponsored by IEEE Kolkata Section. Ensure your work shapes Society 6.0.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/cfp"
                className="px-10 py-4 text-white font-semibold rounded-lg text-sm tracking-widest transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #E31E24, #b91c1c)',
                  boxShadow: '0 8px 32px rgba(227,30,36,0.25)',
                  border: '1px solid rgba(227,30,36,0.4)',
                }}
              >
                SUBMISSION PORTAL
              </Link>
              <Link
                href="/conference/guidelines"
                className="px-10 py-4 text-white font-medium rounded-lg border border-white/10 hover:border-white/25 transition-all text-sm tracking-widest"
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
              >
                PAPER GUIDELINES
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
