'use client';

import { useState } from 'react';
import { SITE_CONFIG } from '@/constants/site';
import Image from 'next/image';
import Link from 'next/link';

// ─── Data ─────────────────────────────────────────────────────────────────────

const G = { teal: '#36828E', red: '#E31E24' };

const CONTACT_INFO = [
  { label: 'adsoc6@gnit.ac.in', href: 'mailto:adsoc6@gnit.ac.in' },
  { label: 'GNIT, Sodepur, Kolkata', href: 'https://maps.google.com/?q=GNIT+Kolkata', external: true },
  { label: 'West Bengal — 700114', href: null },
  { label: '+91 33 2553 5252', href: 'tel:+913325535252' },
];

const PAGES = [
  { label: 'Home',             href: '/' },
  { label: 'About ADSoC',      href: '/about/adsoc' },
  { label: 'About Institute',  href: '/about/institute' },
  { label: 'Dept. of CSE',     href: '/about/department' },
  { label: 'Committee',        href: '/conference/committee' },
  { label: 'Contact',          href: '/contact' },
];

const IMPORTANT = [
  { label: 'Call for Papers',  href: '/cfp' },
  { label: 'Research Tracks',  href: '/cfp/tracks' },
  { label: 'Key Dates',        href: '/conference/dates' },
  { label: 'Speakers',         href: '/speakers' },
];

const SOCIALS = [
  { label: 'LinkedIn',         href: 'https://www.linkedin.com/school/guru-nanak-institute-of-technology-kolkata/', external: true },
  { label: 'Twitter / X',      href: 'https://x.com/gnitsodepur', external: true },
  { label: 'YouTube',          href: 'https://www.youtube.com/channel/UCsPH_rgx4nX5sZVNfBwd-Kw', external: true },
  { label: 'Instagram',        href: 'https://www.instagram.com/gurunanakinstitute/', external: true },
];

// ─── Link list ────────────────────────────────────────────────────────────────

function LinkList({ items }) {
  return (
    <ul className="space-y-2.5 mt-1">
      {items.map((l, i) => (
        <li key={i}>
          {l.href ? (
            <a
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noreferrer' : undefined}
              className="font-body text-sm text-slate-500 hover:text-white transition-colors duration-150"
            >
              {l.label}
            </a>
          ) : (
            <span className="font-body text-sm text-slate-600">{l.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

// ─── Column heading (big bold like the reference) ─────────────────────────────

function ColHead({ children }) {
  return (
    <h3
      className="font-big font-black uppercase leading-none mb-6"
      style={{
        fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
        letterSpacing: '-0.03em',
        background: `linear-gradient(100deg, #fff 30%, ${G.teal})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </h3>
  );
}

// ─── Mobile accordion ─────────────────────────────────────────────────────────

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 text-left md:hidden"
      >
        <span
          className="font-big font-black uppercase text-xl"
          style={{ color: open ? G.teal : '#fff', transition: 'color .2s', letterSpacing: '-0.03em' }}
        >
          {title}
        </span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke={G.teal} strokeWidth="2.5"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .22s ease', flexShrink: 0 }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {/* Desktop: always visible */}
      <div className="hidden md:block">{children}</div>
      {/* Mobile: toggled */}
      {open && <div className="md:hidden pb-5">{children}</div>}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#030508', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '350px', background: 'radial-gradient(ellipse at top right, rgba(54,130,142,0.09) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '250px', background: 'radial-gradient(ellipse at bottom left, rgba(227,30,36,0.04) 0%, transparent 60%)' }} />
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">

        {/* ── Main grid ──────────────────────────────────────────────────── */}
        <div
          className="py-14 grid md:grid-cols-[1.4fr_1fr_1fr_1fr_0.9fr] gap-6 md:gap-6"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 relative shrink-0">
                <Image src={SITE_CONFIG.logo} fill alt={SITE_CONFIG.name} sizes="40px" className="object-contain" />
              </div>
              <span className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors leading-none">
                {SITE_CONFIG.name}
              </span>
            </Link>

            <p className="font-body text-sm text-slate-500 leading-relaxed max-w-3xl">
              International conference on AI-Driven Smart Healthcare. Bridging researchers, clinicians, and innovators globally.
            </p>

            {/* Partner logos */}
            <div className="flex items-center gap-3 mt-1 w-fit">
              <Image src="/jisgroup.png" alt="JIS Group" width={36} height={36} className="object-contain" />
              <Image src="/GNIT.png"     alt="GNIT"      width={40} height={40} className="object-contain" />
              <Image
                src="/ieeelogoedit.png"
                alt="IEEE Kolkata Section"
                width={100}
                height={36}
                className="object-contain"
              />
            </div>
          </div>

          {/* CONTACT — desktop only ColHead, mobile accordion */}
          <div className="hidden md:block">
            <ColHead>Contact</ColHead>
            <LinkList items={CONTACT_INFO} />
          </div>
          <div className="md:hidden">
            <Accordion title="Contact">
              <LinkList items={CONTACT_INFO} />
            </Accordion>
          </div>

          {/* PAGES */}
          <div className="hidden md:block">
            <ColHead>Pages</ColHead>
            <LinkList items={PAGES} />
          </div>
          <div className="md:hidden">
            <Accordion title="Pages">
              <LinkList items={PAGES} />
            </Accordion>
          </div>

          {/* IMPORTANT */}
          <div className="hidden md:block">
            <ColHead>Important</ColHead>
            <LinkList items={IMPORTANT} />
          </div>
          <div className="md:hidden">
            <Accordion title="Important">
              <LinkList items={IMPORTANT} />
            </Accordion>
          </div>

          {/* SOCIALS */}
          <div className="hidden md:block">
            <ColHead>Socials</ColHead>
            <LinkList items={SOCIALS} />
          </div>
          <div className="md:hidden">
            <Accordion title="Socials">
              <LinkList items={SOCIALS} />
            </Accordion>
          </div>

        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-[11px] text-center sm:text-left" style={{ color: 'rgba(100,116,139,0.5)' }}>
            All rights reserved 2026 &copy;&nbsp;
            <span className="font-semibold text-slate-500">ADSoC 6.0</span>
          </p>
          <a
            href="https://www.wefik.in/"
            target="_blank"
            rel="noreferrer"
            className="font-body text-[11px] transition-colors"
            style={{ color: 'rgba(100,116,139,0.4)' }}
            onMouseEnter={e => e.currentTarget.style.color = G.teal}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(100,116,139,0.4)'}
          >
            Made by&nbsp;<span style={{ fontWeight: 700, color: 'inherit' }}>WEFIK</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
