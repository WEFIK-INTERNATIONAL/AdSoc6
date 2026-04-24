import Image from 'next/image';
import Section from '@/components/ui/Section';

export default function About() {
  const stats = [
    { label: 'Conference Edition', value: '6th', description: 'Continuing the legacy of excellence.' },
    { label: 'Research Tracks', value: '10+', description: 'Covering AI, Bio-med & Society.' },
    { label: 'Global Speakers', value: '50+', description: 'Leading minds from 20+ countries.' },
    { label: 'Delegates', value: '400+', description: 'A massive synergy of expertise.' }
  ];

  return (
    <Section className="py-24 px-6 md:py-32 relative overflow-hidden bg-background border-t border-primary/5" id="about">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="mono text-primary mb-4 font-bold tracking-[3px]">Mission & Vision</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white leading-tight">
              Pioneering <span className="text-gradient-primary">Society 6.0</span> <br /> 
              through AI Synergy.
            </h2>
          </div>
          <p className="max-w-md text-slate-400 font-body leading-relaxed text-lg">
            ADSoC 6.0 is the premier global forum for precision medicine, medical AI, and transformative healthcare informatics at GNIT Kolkata.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[280px]">
          
          {/* Main Cinematic Image Card */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-[40px] border border-white/5 shadow-2xl">
            <Image 
              src="/about_healthcare.png" 
              alt="Cinematic Healthcare Lab" 
              fill 
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="glass-dark p-8 rounded-3xl border border-white/10 max-w-lg">
                <p className="text-xl md:text-2xl font-heading text-white italic mb-4">
                  &quot;Redefining the human-machine collaboration in surgical precision and diagnostic accuracy.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-heading text-xl">S</div>
                  <div>
                    <p className="font-bold text-white text-base">Prof. (Dr.) Santanu Kumar Sen</p>
                    <p className="mono text-[10px] text-slate-400 font-bold">General Chair, ADSoC 6.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bento Items */}
          {stats.slice(0, 2).map((stat, idx) => (
            <div key={idx} className="md:col-span-4 glass-card p-10 rounded-[40px] flex flex-col justify-between group h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={idx === 0 ? "#1B8164" : "#1B8164"} strokeWidth="2.5" className="group-hover:stroke-white"><path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h3 className="text-5xl font-heading text-white mb-2">{stat.value}</h3>
                <p className="mono text-[10px] text-primary font-bold tracking-[2.5px] mb-2">{stat.label}</p>
                <p className="text-xs text-slate-500 font-body leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}

          {/* Bottom Secondary Stats */}
          {stats.slice(2, 4).map((stat, idx) => (
            <div key={idx} className="md:col-span-3 glass-card p-8 rounded-[40px] flex flex-col justify-between border-b-4 border-primary/20 hover:border-primary transition-colors">
              <h3 className="text-4xl font-heading text-white">{stat.value}</h3>
              <div>
                <p className="mono text-[10px] text-slate-400 font-bold mb-1 tracking-wider">{stat.label}</p>
                <p className="text-xs text-slate-500 leading-tight">{stat.description}</p>
              </div>
            </div>
          ))}

          {/* Call to Action Small Bento */}
          <div className="md:col-span-6 glass-dark rounded-[40px] p-8 flex items-center justify-between group cursor-pointer border-r-4 border-accent/20 hover:border-accent transition-colors shadow-xl">
            <div className="flex flex-col">
              <p className="mono text-[10px] text-accent font-bold mb-2 tracking-widest">Technical Co-Sponsor</p>
              <h4 className="text-3xl font-heading text-white">IEEE Kolkata Section</h4>
            </div>
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all shadow-lg group-hover:shadow-accent/40">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}


