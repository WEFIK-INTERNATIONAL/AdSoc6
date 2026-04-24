'use client';

import Section from '@/components/ui/Section';

export default function ImportantDates() {
  const dates = [
    { title: 'Abstract Submission', date: 'Oct 30, 2025', desc: 'Preliminary research overview and topic alignment.' },
    { title: 'Full Paper Deadline', date: 'Nov 15, 2025', desc: 'Finalized research paper for peer review.' },
    { title: 'Acceptance Notice', date: 'Dec 15, 2025', desc: 'Communication of reviewer feedback and decisions.' },
    { title: 'Camera Ready Paper', date: 'Jan 10, 2026', desc: 'Final version for IEEE Xplore publication.' }
  ];

  return (
    <Section className="py-24 px-6 bg-deep-navy/80" id="dates">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-6xl font-heading mb-16 text-gradient inline-block">Important Dates</h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative mt-16">
          {/* Timeline Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-[1px] bg-gradient-to-r from-teal-accent/0 via-teal-accent/30 to-teal-accent/0"></div>

          {dates.map((item, idx) => (
            <div key={idx} className="relative z-10 group">
              {/* Step indicator */}
              <div className="w-12 h-12 rounded-full border border-teal-accent/30 bg-deep-navy flex items-center justify-center mx-auto mb-8 transition-all group-hover:bg-teal-accent group-hover:scale-110">
                <span className="mono text-teal-accent group-hover:text-deep-navy text-xs font-bold transition-colors">0{idx + 1}</span>
              </div>

              {/* Date Card */}
              <div className="glass p-8 rounded-2xl border-teal-accent/10 transition-all group-hover:border-teal-accent/40 group-hover:translate-y-[-5px]">
                <p className="mono text-teal-accent mb-2 text-xs font-bold tracking-widest">{item.date}</p>
                <h3 className="text-xl font-heading mb-4 text-white/90">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

