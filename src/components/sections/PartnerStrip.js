'use client';

export default function PartnerStrip() {
  const partners = [
    { name: 'GNIT Kolkata' },
    { name: 'IEEE Kolkata' },
    { name: 'Research Hub' },
    { name: 'Health-AI' },
    { name: 'Society 6.0' }
  ];

  return (
    <section className="py-20 bg-background border-y border-primary/10 relative overflow-hidden font-body">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-heading text-2xl md:text-4xl text-white tracking-tight hover:text-primary transition-colors cursor-default">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


