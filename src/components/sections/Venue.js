'use client';

import Section from '@/components/ui/Section';

export default function Venue() {
  const travelInfo = [
    { title: 'By Flight', desc: 'Netaji Subhash Chandra Bose Int. Airport (CCU) is ~15km away.', icon: 'M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-4 4-2.3-.7c-.5-.1-1 .1-1.3.5l-.2.2c-.3.3-.3.8-.1 1.1l2.3 2.3c.3.3.8.3 1.1.1l.2-.2c.4-.3.6-.8.5-1.3L4.5 15l4-4 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z' },
    { title: 'By Train', desc: 'Kolkata/Howrah/Sealdah Stations connect to Sodepur via local rail.', icon: 'M7 15h10M7 11h10M6 19h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z' },
    { title: 'Local Transit', desc: 'App-based cabs (Uber/Ola) and local buses are frequent.', icon: 'M18.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM7 11l2-4h6l2 4M5 11h14v7H5z' },
    { title: 'Accommodation', desc: 'Tie-ups with premium hotels near Sodepur/Kolkata for delegates.', icon: 'M3 12h18M3 6h18M3 18h18' }
  ];

  return (
    <Section className="py-24 px-6 bg-deep-navy" id="venue">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="mono text-teal-accent mb-4">Location</p>
          <h2 className="text-4xl md:text-6xl font-heading mb-6">Venue & Travel</h2>
          <p className="max-w-2xl mx-auto text-slate-500">Hosted at the historic Guru Nanak Institute of Technology, a center of engineering excellence in Sodepur, Kolkata.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Map Embed */}
          <div className="aspect-video lg:aspect-auto h-full min-h-[400px] rounded-3xl overflow-hidden glass border-white/5 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1477732298634!2d88.3908852758151!3d22.693635779405625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c6d6d84f2c9%3A0x6d05f778393c593a!2sGuru%20Nanak%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1713330000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.8)' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
            <div className="absolute top-6 left-6 glass p-4 rounded-xl border-teal-accent/20">
              <p className="font-heading text-lg text-white">GNIT Campus</p>
              <p className="text-xs text-slate-400">157/F, Nilgunj Rd, Panihati, Sodepur</p>
            </div>
          </div>

          {/* Travel Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {travelInfo.map((card, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl border-white/5 hover:border-teal-accent/20 transition-all flex flex-col justify-center">
                <div className="mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-accent">
                    <path d={card.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-heading mb-3 text-white">{card.title}</h3>
                <p className="text-sm text-slate-500 italic leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

