import { SITE_CONFIG } from '@/constants/site';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-28 pb-8 flex flex-col items-center justify-between overflow-hidden bg-background font-body text-center px-4 w-full">

      {/* Premium Gradient Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
        
        {/* Soft immersive glow nodes (Animated) */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary blur-[140px] animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent blur-[160px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
        </div>

        {/* Top cinematic wash bridging from the navbar */}
        <div className="absolute top-0 inset-x-0 h-[60vh] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-80"></div>

        {/* Precision architectural grid */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-screen"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            backgroundPosition: 'center top'
          }}
        ></div>

        {/* Intense central typographic spotlight */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-primary/20 to-accent/10 rounded-full blur-[100px] animate-pulse mix-blend-screen"></div>

        {/* Dark vignette to ground the footer constraints */}
        <div className="absolute bottom-0 inset-x-0 h-[30vh] bg-gradient-to-t from-background via-background/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,theme(colors.background)_100%)] opacity-80"></div>
      </div>

      {/* Main Content Layout: Balanced Two-Column Structure */}
      <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:gap-20 w-full max-w-7xl mx-auto my-auto px-4 lg:px-12">
        
        {/* Left Column: Primary Hero Content */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-10 flex-1 w-full">
          
          {/* Live status & Dates */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-950/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <p className="mono text-emerald-400 font-bold tracking-[3px] text-[9px] md:text-[10px] uppercase">
             Jan 24-25, 2026
            </p>
          </div>

          {/* Typography Stack */}
          <div className="flex flex-col gap-4 w-full">
            <p className="mono font-bold text-primary tracking-[6px] text-[10px] md:text-[12px] uppercase opacity-80">
             International Conference on
            </p>
            
            <h1 className="text-3xl text-white tracking-tight drop-shadow-2xl">
              AI-Driven Smart <br className="hidden lg:block" />
              Healthcare 
              <span className="text-gradient-primary"> for Society 6.0</span>
            </h1>
          </div>

          {/* Action Buttons: Anchored to the primary content */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full mt-2">
            <Link
              href={SITE_CONFIG.googleFormLink}
              target="_blank"
              className="group relative overflow-hidden flex justify-center items-center gap-3 px-8 py-4.5 bg-primary text-white font-bold rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-300 mono text-[11px] tracking-[3px]"
            >
              REGISTER NOW
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <Link
              href="/cfp"
              className="group flex justify-center items-center gap-3 px-8 py-4.5 rounded-xl border border-white/10 glass-dark text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 mono text-[11px] tracking-[3px]"
            >
              CALL FOR PAPERS
            </Link>
          </div>
        </div>

        {/* Right Column: Refined Sponsor Recognition Block */}
        <div className="flex flex-col items-center text-center gap-6 w-full px-6 py-6">
          <div className="flex flex-col gap-1.5">
            <p className="mono text-[9px] md:text-[10px] font-bold tracking-[4px] uppercase text-primary/80">
              Recognition
            </p>
            <p className="text-white font-heading text-lg md:text-xl font-bold tracking-tight uppercase leading-none">
              Technically Co-Sponsored By
            </p>
          </div>
          
          <div className="relative w-full h-[80px] md:h-[150px] flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full"></div>
            <Image 
              src="/ieeelogoedit.png" 
              alt="IEEE Kolkata Section Logo" 
              fill 
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-contain object-center drop-shadow-2xl relative z-10" 
            />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/5 self-center">
              <span className="text-slate-400 mono text-[10px] uppercase tracking-widest font-bold">Conference ID:</span>
              <span className="text-primary font-bold tracking-wider text-sm md:text-base">#72298</span>
            </div>
            
            <p className="text-slate-400 text-xs md:text-sm max-w-2xl font-medium leading-relaxed">
              Accepted papers will be submitted for inclusion into <span className="text-slate-200">IEEE Xplore</span> subject to meeting scope and quality requirements.
            </p>
          </div>
        </div>

      </div>

      {/* Footer Details: Premium Minimal Pill */}
      <div className="relative z-10 w-full max-w-4xl px-8 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-6 mx-auto mt-12 md:mt-16 rounded-2xl glass-dark border border-white/5 shadow-2xl">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="mono text-[8px] text-primary/70 font-bold tracking-[4px] uppercase">Organiser</p>
          <p className="text-white font-heading text-xs tracking-widest uppercase">Dept. of CSE — GNIT</p>
        </div>
        
        <div className="hidden md:block w-px h-8 bg-white/5"></div>

        <div className="flex flex-col items-center gap-1">
          <p className="mono text-[8px] text-slate-500 font-bold tracking-[4px] uppercase">Accreditation</p>
          <p className="text-slate-300 font-body text-[10px] tracking-wide">NAAC &apos;A+&apos; • NBA Accredited • Kolkata</p>
        </div>
      </div>
    </section>
  );
}
