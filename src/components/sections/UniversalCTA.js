"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { SITE_CONFIG } from "@/constants/site";

const PORTAL_URL = SITE_CONFIG.googleFormLink;

export default function UniversalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5" style={{ background: '#030508' }}>

      {/* ── Ambient glows ─────────────────────────────────────────────── */}
      <div
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'rgba(227,30,36,0.07)' }}
      />
      <div
        className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(54,130,142,0.08)' }}
      />
      <div className="absolute inset-0 plus-pattern opacity-[0.07] pointer-events-none" />

      {/* ── Top edge accent line ───────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(227,30,36,0.6), rgba(54,130,142,0.6), transparent)' }}
      />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Left: Copy + Buttons ───────────────────────────────────── */}
          <div>
            {/* Headline */}
            <h2
              className="font-big font-black uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.05em' }}
            >
              <span className="text-white">Ready to </span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #E31E24 0%, #ff6b6b 40%, #36828E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Submit?
              </span>
            </h2>

            {/* Sub-copy */}
            <p className="font-body text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-12">
              Join leading globally indexed researchers. ADSoC 6.0 is technically co-sponsored by
              {' '}<span className="text-slate-200 font-medium">IEEE Kolkata Section</span>.
              Ensure your work shapes Society 6.0.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary */}
              <Link
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-bold text-sm tracking-[0.18em] uppercase text-white overflow-hidden transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #E31E24 0%, #9b1c1c 100%)',
                  boxShadow: '0 0 0 1px rgba(227,30,36,0.5), 0 12px 40px rgba(227,30,36,0.3)',
                }}
              >
                {/* shine sweep */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                {/* Arrow icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
                Submission Portal
              </Link>

              {/* Secondary */}
              <Link
                href="/conference/dates"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-medium text-sm tracking-[0.18em] uppercase text-white/80 hover:text-white transition-all duration-300 hover:scale-[1.03]"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(54,130,142,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                {/* Calendar icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                Key Deadlines
              </Link>
            </div>
          </div>

          {/* ── Right: QR Panel ────────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-0 shrink-0">
            {/* Outer container */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(54,130,142,0.12) 0%, rgba(227,30,36,0.08) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '2px',
              }}
            >
              {/* Inner glow rim */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px rgba(54,130,142,0.1)' }}
              />

              <div className="relative rounded-3xl overflow-hidden" style={{ background: '#0a0c10', padding: '28px' }}>
                {/* Top label */}
                <p
                  className="mono text-[0.55rem] uppercase tracking-[0.3em] text-center mb-5"
                  style={{ color: '#36828E' }}
                >
                  Scan to Access Portal
                </p>

                {/* QR */}
                <div
                  className="rounded-2xl overflow-hidden p-3"
                  style={{ background: '#fff' }}
                >
                  <QRCodeSVG
                    value={PORTAL_URL}
                    size={160}
                    bgColor="#ffffff"
                    fgColor="#0a0c10"
                    level="M"
                  />
                </div>

                {/* Bottom label */}
                <div className="mt-5 text-center">
                  <p className="font-big font-black text-white text-[0.8rem] uppercase tracking-[0.15em]">
                    CMT Portal
                  </p>
                  <p className="mono text-[0.55rem] text-slate-600 tracking-widest mt-1">
                    cmt3.research.microsoft.com
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 rounded-tl-md" style={{ borderColor: '#36828E' }} />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 rounded-tr-md" style={{ borderColor: '#E31E24' }} />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 rounded-bl-md" style={{ borderColor: '#E31E24' }} />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 rounded-br-md" style={{ borderColor: '#36828E' }} />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom edge accent line ────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(54,130,142,0.3), transparent)' }}
      />
    </section>
  );
}
