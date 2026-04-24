import { SITE_CONFIG } from '@/constants/site';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 px-6 relative overflow-hidden border-t border-primary/10">
      {/* Background Decorative */}
      <div className="absolute inset-0 medical-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 relative flex items-center justify-center translate-y-[-2px]">
                <Image 
                  src={SITE_CONFIG.logo} 
                  fill 
                  alt={SITE_CONFIG.name} 
                  sizes="48px"
                  className="object-contain" 
                />
              </div>
              <h2 className="text-4xl font-heading text-white tracking-tight">{SITE_CONFIG.name.split(' ')[0]} <span className="text-accent">{SITE_CONFIG.name.split(' ')[1]}</span></h2>
            </div>
            <p className="text-slate-400 max-w-sm mb-10 leading-relaxed font-body text-lg">
              The premier International Conference on AI-Driven Smart Healthcare for Society 6.0. 
              Bridging researchers, clinicians, and innovators globally.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                <div key={social} className="px-6 py-2.5 rounded-2xl border border-white/5 text-slate-400 mono text-[9px] font-bold tracking-[2px] hover:border-primary/50 hover:text-white transition-all cursor-pointer bg-background/5">
                  {social.toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mono text-primary mb-10 font-bold tracking-[4px] text-[10px]">RESOURCES</h4>
            <ul className="space-y-4 text-slate-400 font-body text-base">
              <li><Link href="/about" className="hover:text-primary transition-colors">Vision & Mission</Link></li>
              <li><Link href="/cfp" className="hover:text-primary transition-colors">Call for Papers</Link></li>
              <li><Link href="/tracks" className="hover:text-primary transition-colors">Research Tracks</Link></li>
              <li><Link href="/committee" className="hover:text-primary transition-colors">Committee 2026</Link></li>
              <li><Link href="/venue" className="hover:text-primary transition-colors">Venue & Travel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mono text-primary mb-10 font-bold tracking-[4px] text-[10px]">HEADQUARTERS</h4>
            <div className="space-y-8">
              <div>
                <p className="text-[9px] mono text-slate-500 mb-3 font-bold tracking-[2px]">PROTOCOL EMAIL</p>
                <p className="text-white text-lg font-body border-b border-white/5 pb-2">adsoc6@gnit.ac.in</p>
              </div>
              <div>
                <p className="text-[9px] mono text-slate-500 mb-3 font-bold tracking-[2px]">LOCATION</p>
                <p className="text-white text-lg font-body">Sodepur, Kolkata<br />West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-slate-500 mono tracking-widest font-bold">
            &copy; 2026 ADSoC 6.0 | RESEARCH HUB - GNIT KOLKATA.
          </p>
          <div className="flex items-center gap-8">
            <span className="mono text-[10px] text-primary/60 font-bold uppercase tracking-[3px]">TECHNICAL CO-SPONSOR</span>
            <div className="px-5 py-3 glass-dark border border-white/10 rounded-2xl flex items-center gap-4">
              <span className="text-sm font-bold text-white tracking-wide">IEEE KOLKATA SECTION</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

