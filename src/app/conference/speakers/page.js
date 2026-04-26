"use client";

import { useRef } from 'react';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Link from "next/link";

export default function SpeakersPage() {
  const heroRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden text-foreground">
      <Nav />
      
      <main className="flex-1 relative z-10">
        {/* Cinematic Hero Section */}
        <div 
          ref={heroRef}
          className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]"
        >
          {/* Base Cinematic Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(54,130,142,0.3)_0%,transparent_70%)] pointer-events-none"></div>
          
          {/* Interactive Dot Grid Background */}
          <InteractiveDotGrid />
          
          {/* Gradient Overlay for Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none"></div>

          {/* Centered Typography */}
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

        {/* Revealing Soon Section */}
        <Section className="py-48 md:py-64 relative overflow-hidden">
          <div className="absolute inset-0 medical-grid opacity-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-block relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse"></div>
              
              <div className="relative glass-dark border border-white/10 rounded-[40px] px-12 py-20 md:px-24 md:py-32 backdrop-blur-3xl">
                <p className="mono text-primary text-sm md:text-base mb-8 tracking-[10px] uppercase font-bold">
                    Global Visionaries
                </p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-tight mb-8">
                    Revealing <span className="text-gradient-primary">Soon</span>
                </h2>
                <div className="max-w-2xl mx-auto">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
                    <p className="text-slate-400 text-lg md:text-xl font-body leading-relaxed opacity-80">
                        We are finalizing a lineup of world-class experts, researchers, and pioneers in AI-Driven Smart Healthcare. Stay tuned as we unveil our keynote and invited speakers.
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Numbers (Time/Data feel) */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 mono text-[10px] text-white/5 space-y-4 hidden lg:block">
            {Array.from({ length: 10 }).map((_, i) => (
                <p key={i}>SCAN_DATA_NODE_0{i}_ACTIVE</p>
            ))}
          </div>
          <div className="absolute top-1/2 right-10 -translate-y-1/2 mono text-[10px] text-white/5 space-y-4 hidden lg:block text-right">
            {Array.from({ length: 10 }).map((_, i) => (
                <p key={i}>REVEAL_SEQUENCE_PENDING_0{i}</p>
            ))}
          </div>
        </Section>

        {/* Paper Submission Teaser - CTA */}
        <Section className="py-24 px-6 bg-background relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 plus-pattern opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 mb-6">
              <p className="text-xs text-accent font-semibold tracking-widest uppercase">Call for Papers</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6">
              Ready to <span className="text-accent">Submit?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg font-body">
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
