import { SITE_CONFIG } from '@/constants/site';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-28 pb-8 flex flex-col items-center justify-between overflow-hidden bg-background font-body text-center px-4 w-full">

      {/* Premium Gradient Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background">
        
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

      {/* Main hero content centered vertically */}
      <div className="relative z-10 flex flex-col items-center gap-5 md:gap-8 w-full max-w-5xl my-auto mt-auto mb-auto">
        
        {/* Live status & Dates */}
        <div className="flex items-center gap-2.5 px-4 md:px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <p className="mono text-emerald-400 font-bold tracking-[2px] md:tracking-[3px] text-[8px] md:text-[10px] uppercase">
            Registrations Open &bull; Jan 24–25, 2026
          </p>
        </div>

        {/* Typography Stack */}
        <div className="flex flex-col items-center gap-3 w-full px-2">
          <p className="mono font-bold text-primary tracking-[4px] md:tracking-[6px] text-[8px] md:text-[11px] uppercase opacity-90 drop-shadow-md">
            6th International Conference
          </p>
          
          <h1 className="font-heading text-white leading-[1.1] text-[clamp(2.2rem,8vw,5.5rem)] tracking-tight drop-shadow-2xl max-w-4xl mx-auto">
            AI-Driven Smart Healthcare
            <br className="hidden sm:block" />
            <span className="text-gradient-primary"> for Society 6.0</span>
          </h1>
          
          <p className="mono font-bold text-slate-400 tracking-[5px] md:tracking-[8px] text-[9px] md:text-[10px] uppercase mt-1 md:mt-2 drop-shadow-md">
            ( ADSoC 6.0 )
          </p>
        </div>

        {/* Button Stack: Responsive stack on mobile, row on larger */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 mt-2 sm:mt-4 w-full max-w-xs sm:max-w-none px-4 sm:px-0">
          <Link
            href={SITE_CONFIG.googleFormLink}
            target="_blank"
            className="group relative overflow-hidden flex justify-center items-center gap-2.5 px-6 md:px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_0_30px_rgba(54,130,142,0.3)] hover:shadow-[0_0_50px_rgba(54,130,142,0.5)] hover:-translate-y-1 hover:brightness-110 transition-all duration-300 mono text-[10px] md:text-[11px] tracking-[3px] text-center"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-600 ease-in-out pointer-events-none"></span>
            REGISTER NOW
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          <Link
            href="/cfp"
            className="group flex justify-center items-center gap-2.5 px-6 md:px-8 py-4 rounded-xl border border-white/10 glass-dark text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mono text-[10px] md:text-[11px] tracking-[3px] text-center"
          >
            CALL FOR PAPERS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity duration-200">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </Link>
        </div>

      </div>

      {/* Footer Details: Flows naturally at the bottom now */}
      <div className="relative z-10 w-full px-4 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-12 opacity-90 border-t border-white/5 pt-5 md:pt-6 mx-auto max-w-5xl">
        
        {/* Organiser */}
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <div className="hidden md:block w-px h-8 bg-primary/30"></div>
          <div>
            <p className="hidden md:block mono text-[7px] text-primary font-bold tracking-[3px] uppercase md:mb-0.5">Organiser</p>
            <p className="text-white font-heading text-xs sm:text-sm tracking-wide">Dept. of CSE & EE — GNIT</p>
          </div>
        </div>
        
        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></div>

        {/* Location & Meta */}
        <div className="text-center md:text-left">
          <p className="hidden md:block mono text-[7px] text-slate-400 font-bold tracking-[3px] uppercase mb-0.5">Location & Details</p>
          <p className="text-slate-400 md:text-slate-300 font-body text-[9px] sm:text-xs">NAAC &apos;A+&apos; • NBA Accredited • Kolkata</p>
        </div>

        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></div>

        {/* IEEE Sponsor */}
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
           <div>
             <p className="hidden md:block mono text-[7px] text-slate-400 font-bold tracking-[3px] uppercase mb-0.5">Co-Sponsored</p>
             <p className="text-slate-200 md:text-slate-100 font-heading text-xs sm:text-sm tracking-wide flex justify-center items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                IEEE Kolkata Section
             </p>
           </div>
           <div className="hidden md:block w-px h-8 bg-primary/30"></div>
        </div>

      </div>
    </section>
  );
}
