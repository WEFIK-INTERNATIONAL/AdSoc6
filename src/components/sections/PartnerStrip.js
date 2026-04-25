'use client';

export default function PartnerStrip() {
  const partners = [
    { name: 'GNIT Kolkata' },
    { name: 'IEEE Kolkata' },
    { name: 'ADSOC 6.0' },
    { name: 'JIS GROUP' },
  ];

  // Duplicate elements a few times to ensure the screen is filled and scroll is seamless
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-6 md:py-8 bg-background border-y border-white/5 relative overflow-hidden font-body flex items-center">
      
      {/* Subtle Premium Background Details */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      {/* Left/Right Vignettes for fading effect */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((partner, idx) => (
          <div key={idx} className="flex items-center justify-center group px-6 md:px-10 shrink-0">
            <span className="font-heading whitespace-nowrap text-lg md:text-xl text-slate-500 uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300 cursor-default">
              {partner.name}
            </span>
            {/* Divider Dot */}
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 shrink-0 rounded-full bg-primary/20 ml-12 md:ml-20 group-hover:bg-primary transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}


