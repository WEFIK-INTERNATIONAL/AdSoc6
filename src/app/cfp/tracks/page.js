"use client";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";

const G = { teal: '#36828E', red: '#E31E24' };

export default function TracksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />

      <main className="flex-1">
        <div className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#030508]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(54,130,142,0.18)_0%,transparent_70%)] pointer-events-none" />
          <InteractiveDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

          <div className="relative z-20 text-center px-6 pointer-events-none">
            {/* Live pulsing badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ border: `1px solid rgba(54,130,142,0.3)`, background: 'rgba(54,130,142,0.07)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: G.teal }} />
              <span className="font-accent text-[0.6rem] uppercase tracking-[0.22em] font-semibold" style={{ color: G.teal }}>
                Conference Tracks
              </span>
            </div>

            <h1
              className="font-heading font-black uppercase text-white leading-none tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              style={{ fontSize: 'clamp(3.5rem,12vw,8rem)' }}
            >
              Coming
            </h1>
            <h1
              className="font-heading font-black uppercase leading-none tracking-tighter"
              style={{
                fontSize: 'clamp(3.5rem,12vw,8rem)',
                background: `linear-gradient(90deg,${G.teal},${G.red})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Soon
            </h1>

            <p className="font-body text-slate-400 text-base md:text-lg mt-6 max-w-lg mx-auto leading-relaxed">
              Research tracks for ADSoC 6.0 will be announced shortly. Stay tuned for updates.
            </p>

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
      </main>

      <Footer />
    </div>
  );
}
