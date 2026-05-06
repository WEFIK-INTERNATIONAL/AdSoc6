'use client';

const NOTICE_TEXT =
  'The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.';

const ITEMS = Array(6).fill(NOTICE_TEXT);

const G = { teal: '#36828E', red: '#E31E24' };

export default function PartnerStrip() {
  return (
    <section aria-label="Conference Notice" className="relative overflow-hidden">

      {/* Vivid background — teal-tinted dark band */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(100deg, rgba(54,130,142,0.14) 0%, rgba(5,7,10,0.95) 40%, rgba(5,7,10,0.95) 60%, rgba(227,30,36,0.08) 100%)`,
        }}
      />

      {/* Top border — bright gradient line */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${G.teal} 30%, ${G.red} 70%, transparent 100%)` }}
      />
      {/* Bottom border */}
      <div
        className="absolute bottom-0 inset-x-0 h-[2px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${G.teal} 30%, ${G.red} 70%, transparent 100%)` }}
      />

      {/* Glow dots — left and right corners */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse at left center, rgba(54,130,142,0.18) 0%, transparent 70%)` }}
      />
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse at right center, rgba(227,30,36,0.1) 0%, transparent 70%)` }}
      />

      <div className="py-4 md:py-5 flex items-center gap-0 relative z-10">

        {/* Pinned "CMT Notice" badge */}
        <div
          className="relative shrink-0 hidden md:flex items-center gap-2.5 pl-6 pr-5 py-2 z-20"
          style={{ borderRight: `1px solid rgba(54,130,142,0.35)` }}
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: G.teal }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: G.teal }}
            />
          </span>
          <span
            className="font-accent text-[0.65rem] font-bold uppercase whitespace-nowrap"
            style={{ color: G.teal, letterSpacing: '0.2em' }}
          >
            CMT&nbsp;Notice
          </span>
        </div>

        {/* Scrolling marquee track */}
        <div className="relative flex-1 overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute inset-y-0 left-0 w-20 md:w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(5,7,10,0.98), transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute inset-y-0 right-0 w-20 md:w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(5,7,10,0.98), transparent)' }}
          />

          <div
            className="flex w-max hover:[animation-play-state:paused]"
            style={{ animation: 'marquee 120s linear infinite' }}
          >
            {ITEMS.map((text, idx) => (
              <div key={idx} className="flex items-center shrink-0 px-8 md:px-12">
                <p
                  className="whitespace-nowrap leading-none cursor-default select-none"
                  style={{
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                    fontWeight: 500,
                    color: 'rgba(203,213,225,0.92)',
                    fontFamily: 'inherit',
                  }}
                >
                  {text}
                </p>

                <span
                  className="shrink-0 ml-8 md:ml-12 w-2 h-2 rotate-45 block"
                  style={{
                    background: `linear-gradient(135deg, ${G.teal}, ${G.red})`,
                    boxShadow: `0 0 6px ${G.teal}88`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
