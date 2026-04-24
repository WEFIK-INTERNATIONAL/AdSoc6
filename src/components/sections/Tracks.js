'use client';

import Section from '@/components/ui/Section';

export default function Tracks() {
  const tracks = [
    { title: 'AI Diagnostics', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', desc: 'Predictive analytics, radiological imaging, and automated disease detection.' },
    { title: 'Wearable Tech', icon: 'M12 2v20a10 10 0 0 0 10-10A10 10 0 0 0 12 2z', desc: 'Real-time monitoring, bio-sensors, and smart health-assistive devices.' },
    { title: 'Clinical NLP', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', desc: 'Text mining from medical records and multilingual health chatbots.' },
    { title: 'Telemedicine', icon: 'M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z', desc: 'Remote surgical robotics and cloud-based healthcare delivery.' },
    { title: 'Genomics', icon: 'M10 3.1c.2 0 .5.1.7.3l2 2.2c.4.4.8.9 1.2 1.4s.8 1.1 1.2 1.6 1.4 1.4 2.2 2c.8.6 1.7 1.2 2.7 1.8.4.2.8.5 1.1.7.3.2.5.5.7.8.2.3.3.6.3.9s-.1.6-.3.9-.5.5-.8.7c-.3.2-.6.3-.9.4s-.7 0-1-.1l-2.2-2c-.4-.4-.9-.8-1.4-1.2s-1.1-.8-1.6-1.2-1.4-1.4-2-2.2c-.6-.8-1.2-1.7-1.8-2.7-.2-.4-.5-.8-.7-1.1s-.5-.5-.8-.7c-.3-.2-.6-.3-.9-.3z', desc: 'Precision medicine, gene sequencing, and AI-driven pharmacology.' },
    { title: 'Society 6.0', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75', desc: 'Ethical considerations, patient privacy, and intelligent social policy.' }
  ];

  return (
    <Section className="py-24 px-6 bg-deep-navy relative overflow-hidden" id="tracks">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="mono text-teal-accent mb-4">Core Focus Areas</p>
          <h2 className="text-4xl md:text-6xl font-heading mb-6">Research Tracks</h2>
          <p className="max-w-xl mx-auto text-slate-500">Multidisciplinary themes exploring the intersection of smart engineering and healthcare.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, idx) => (
            <div key={idx} className="group glass p-10 rounded-3xl border-teal-accent/10 transition-all hover:bg-teal-accent/5 hover:border-teal-accent/30 relative">
              <div className="absolute top-0 right-0 p-8 text-teal-accent/5 font-heading text-6xl group-hover:text-teal-accent/10 transition-colors">0{idx + 1}</div>
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-accent">
                  <path d={track.icon}></path>
                </svg>
              </div>
              <h3 className="text-2xl font-heading mb-4 text-white hover:text-teal-accent transition-colors">{track.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{track.desc}</p>
              <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="mono text-[10px] text-teal-accent border border-teal-accent/20 px-3 py-1 rounded-full">Explore Papers</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

