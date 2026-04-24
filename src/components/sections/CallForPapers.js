'use client';

import Section from '@/components/ui/Section';

export default function CallForPapers() {
  const submissionCards = [
    { title: 'Peer Review', desc: 'All papers undergo standard double-blind review by technical committees.', label: 'Quality' },
    { title: 'IEEE Xplore', desc: 'Accepted & presented papers will be submitted for inclusion into IEEE Xplore.', label: 'Indexing' },
    { title: 'Scopus / WoS', desc: 'Previous ADSoC editions are indexed in Scopus and Web of Science.', label: 'Visibility' },
    { title: 'Best Paper Award', desc: 'Special recognition for outstanding research contributions in each track.', label: 'Recognition' }
  ];

  const badges = ['IEEE', 'Scopus', 'Web of Science', 'JIS Group'];

  return (
    <Section className="py-24 px-6 bg-deep-navy relative" id="cfp">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content & Badges */}
          <div>
            <h2 className="text-4xl md:text-6xl font-heading mb-8 leading-tight">
              Call for <span className="text-teal-accent underline underline-offset-8 decoration-teal-accent/30">Papers</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              ADSoC 6.0 invites original contributions in the form of full research papers. All submissions must be original and not simultaneously submitted to another journal or conference.
            </p>
            
            {/* Indexing Badges */}
            <div className="flex flex-wrap gap-4 mb-2">
              {badges.map((badge, idx) => (
                <div key={idx} className="px-6 py-3 glass border-teal-accent/20 rounded-xl flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
                  <div className="w-2 h-2 rounded-full bg-teal-accent/50 group-hover:bg-teal-accent"></div>
                  <span className="mono text-[10px] text-teal-accent font-bold tracking-[2px]">{badge}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] mono text-slate-500 mt-4">* Subject to meeting the conference quality criteria and presentation requirements.</p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {submissionCards.map((card, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl border-white/5 hover:border-teal-accent/30 transition-all hover:bg-teal-accent/5">
                <span className="mono text-[10px] text-teal-accent mb-4 block px-2 py-1 bg-teal-accent/5 rounded-full w-fit">{card.label}</span>
                <h3 className="text-xl font-heading mb-4 text-white/90">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 glass p-10 md:p-16 rounded-3xl border-teal-accent/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h3 className="text-3xl font-heading mb-3">Submit your research today.</h3>
            <p className="text-slate-400">Join the pioneers of smart healthcare innovations.</p>
          </div>
          <button className="px-12 py-5 bg-teal-accent text-deep-navy font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(45,212,191,0.2)]">
            Submission Portal
          </button>
        </div>
      </div>
    </Section>
  );
}

