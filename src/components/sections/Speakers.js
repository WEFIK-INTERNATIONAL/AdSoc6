import Image from 'next/image';
import Section from '@/components/ui/Section';

export default function Speakers() {
  const speakers = [
    { name: 'Prof. (Dr.) Debabrata Das', role: 'IEEE Fellow', org: 'IIIT-Bangalore', topic: 'Future of Intelligent Networks', img: '/speaker_1.png' },
    { name: 'Prof. (Dr.) Mike Hinchey', role: 'Lero Director', org: 'University of Limerick', topic: 'Autonomous Space Systems', img: '/speaker_2.png' },
    { name: 'Prof. (Dr.) J.K. Mandal', role: 'AI Strategist', org: 'University of Kalyani', topic: 'Secure AI Systems', img: '/speaker_3.png' },
    { name: 'Dr. Deepu Sebin', role: 'CEO, Daily Rounds', org: 'Marrow', topic: 'Health-Tech Innovation', img: '/speaker_4.png' }
  ];

  return (
    <Section className="py-24 px-6 relative bg-[#030712] overflow-hidden" id="speakers">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="mono text-primary mb-4 font-bold tracking-[3px]">Keynote Assembly</p>
            <h2 className="text-4xl md:text-7xl font-heading text-white">Distinguished <br /><span className="text-gradient-primary">Speakers.</span></h2>
          </div>
          <p className="max-w-md text-slate-400 font-body leading-relaxed text-lg border-l-4 border-primary/20 pl-8">
            Meet the visionaries at the forefront of AI-driven medical transformation and societal evolution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="group relative">
              {/* Image Container */}
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden relative mb-8 border border-white/5 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/20 bg-slate-900">
                <Image 
                  src={speaker.img} 
                  alt={speaker.name} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent"></div>
                
                {/* Topic Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#020617]/40 backdrop-blur-[2px]">
                   <p className="mono text-[8px] text-primary font-bold tracking-[2px] mb-2 uppercase">Core Keynote</p>
                   <p className="text-white font-heading italic text-lg leading-tight">&quot;{speaker.topic}&quot;</p>
                </div>
              </div>

              {/* Info */}
              <div className="px-2">
                <h3 className="text-2xl font-heading text-white mb-2 group-hover:text-primary transition-colors">{speaker.name}</h3>
                <div className="flex flex-col gap-1">
                  <p className="mono text-[10px] text-primary font-bold tracking-[1.5px] uppercase">{speaker.role}</p>
                  <p className="text-xs text-slate-500 font-body tracking-wider">{speaker.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

