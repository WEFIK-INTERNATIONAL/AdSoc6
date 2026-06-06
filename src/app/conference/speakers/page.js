"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import UniversalCTA from "@/components/sections/UniversalCTA";

const G = { teal: '#36828E', red: '#E31E24' };

const keynoteSpeakers = [
  {
    name: "Seyed-Sajad Ahmadpour",
    role: "Senior Member IEEE",
    title: "International Keynote Speaker",
    org: "Istanbul Atlas University, Istanbul, Türkiye",
    affiliation: "Department of Computer Engineering, Istanbul Atlas University, 34403 Istanbul, Turkey.",
    email: "seyed.ahmadpour@atlas.edu.tr",
    img: "/speakers/Seyed-Sajad.jpg",
    bio: "Seyed-Sajad Ahmadpour, Senior Member IEEE, is with the Department of Computer Engineering, Istanbul Atlas University, Istanbul, Türkiye. His research interests include quantum-dot cellular automata, silicon dangling-bond logic, reversible and quantum-inspired computing, beyond-CMOS circuit design, nanoscale digital architectures, and AI-assisted hardware optimization. His work focuses on developing energy-efficient, robust, and scalable computational circuits for future nanoelectronic and quantum-compatible systems.",
    researchInterests: [
      "Quantum-dot cellular automata",
      "Silicon dangling-bond logic",
      "Reversible & quantum-inspired computing",
      "Beyond-CMOS circuit design",
      "Nanoscale digital architectures",
      "AI-assisted hardware optimization"
    ]
  }
];

export default function SpeakersPage() {
  const heroRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />
      
      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────── */}
        <div 
          ref={heroRef}
          className="relative h-[350px] md:h-[400px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 100%, rgba(54,130,142,0.22) 0%, transparent 70%)' }}
          />
          <InteractiveDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            <p className="mono text-primary text-sm md:text-base mb-6 tracking-[8px] uppercase font-bold opacity-90">
              Intellectual Leaders
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white leading-none tracking-tighter uppercase font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              Speakers
            </h1>
            
            {/* Visual Connector */}
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

        {/* ── Content (Wider wrapper max-w-5xl, centered card style) ───────── */}
        <div className="mx-auto px-6 max-w-5xl py-20 md:py-28 w-full">
          
          {/* Speakers List */}
          <div className="space-y-16">
            {keynoteSpeakers.map((speaker, idx) => (
              <Section key={idx}>
                <div 
                  className="flex flex-col md:flex-row gap-8 md:gap-12 items-start rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/5 animate-fade-in"
                  style={{
                    background: 'rgba(15, 17, 23, 0.45)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
                  }}
                >
                  
                  {/* Speaker Image Column */}
                  <div className="w-full md:w-[240px] shrink-0">
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-lg">
                      <Image
                        src={speaker.img}
                        alt={speaker.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 240px"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority
                      />
                    </div>
                  </div>

                  {/* Speaker Info Column */}
                  <div className="flex-1 flex flex-col justify-start w-full">
                    <div>
                      {/* Badge / Category */}
                      <span className="font-accent text-[0.65rem] font-bold tracking-[0.2em] uppercase text-primary mb-3 block">
                        {speaker.title}
                      </span>

                      {/* Speaker Name */}
                      <h3 className="text-3xl md:text-5xl font-heading text-white tracking-tight uppercase mb-2 leading-none">
                        {speaker.name}
                      </h3>

                      {/* Role & Org */}
                      <p className="mono text-[10px] text-slate-400 font-medium tracking-wide mb-6">
                        {speaker.role} &nbsp;·&nbsp; <span className="text-primary">{speaker.org}</span>
                      </p>

                      {/* Bio */}
                      <p className="text-slate-300 font-body leading-relaxed text-sm md:text-base mb-8">
                        {speaker.bio}
                      </p>
                    </div>

                    {/* Details Section */}
                    <div className="border-t border-white/5 pt-6 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Affiliation info */}
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="mono text-[8px] text-slate-500 font-bold tracking-wider block mb-1">Affiliation</span>
                          <span className="text-xs text-slate-300 font-medium leading-relaxed block">{speaker.affiliation}</span>
                        </div>
                      </div>

                      {/* Direct Contact info */}
                      <div className="flex items-start gap-2.5">
                        <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="mono text-[8px] text-slate-500 font-bold tracking-wider block mb-1">Direct Contact</span>
                          <a 
                            href={`mailto:${speaker.email}`}
                            className="text-xs text-primary hover:text-white transition-colors font-mono tracking-wide hover:underline block"
                          >
                            {speaker.email}
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </Section>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <Section>
            <div className="mt-20 flex justify-center">
              <div 
                className="w-full max-w-2xl rounded-3xl p-8 text-center"
                style={{
                  background: 'rgba(15,17,23,0.4)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <p 
                  className="mono text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-2.5"
                  style={{ color: G.teal }}
                >
                  Global Visionaries
                </p>
                <p className="text-slate-400 text-xs md:text-sm font-body leading-relaxed max-w-md mx-auto">
                  We are finalizing a lineup of world-class experts, researchers, and pioneers in AI-Driven Smart Healthcare. Additional keynote and invited speakers will be announced soon.
                </p>
              </div>
            </div>
          </Section>

        </div>

        <UniversalCTA />
      </main>

      <Footer />
    </div>
  );
}
