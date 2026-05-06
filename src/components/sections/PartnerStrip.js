'use client';

const NOTICE_TEXT =
  'The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.';

// Repeat enough times for a seamless loop
const ITEMS = Array(6).fill(NOTICE_TEXT);

export default function PartnerStrip() {
  return (
    <section
      aria-label="Conference Notice"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(5,7,10,0) 0%, #05070A 20%, #05070A 80%, rgba(5,7,10,0) 100%)',
      }}
    >
      {/* Top gradient border line */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, #36828E55, #E31E2455, transparent)' }}
      />
      {/* Bottom gradient border line */}
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, #36828E55, #E31E2455, transparent)' }}
      />

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(54,130,142,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="py-5 md:py-7 flex items-center gap-6 md:gap-10">
        {/* Pinned label badge — sits outside the scroll track */}
        <div
          className="relative shrink-0 hidden md:flex items-center gap-2.5 pl-6 pr-4 py-2 z-20"
          style={{
            borderRight: '1px solid rgba(54,130,142,0.25)',
          }}
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: '#36828E' }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: '#36828E' }}
            />
          </span>
          <span
            className="font-accent uppercase tracking-widest text-[0.6rem] md:text-[0.7rem] font-semibold whitespace-nowrap"
            style={{ color: '#36828E', letterSpacing: '0.18em' }}
          >
            CMT&nbsp;Notice
          </span>
        </div>

        {/* Scrolling track */}
        <div className="relative flex-1 overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute inset-y-0 left-0 w-24 md:w-40 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #05070A, transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute inset-y-0 right-0 w-24 md:w-40 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #05070A, transparent)' }}
          />

          <div
            className="flex w-max hover:[animation-play-state:paused]"
            style={{ animation: 'marquee 55s linear infinite' }}
          >
            {ITEMS.map((text, idx) => (
              <div key={idx} className="flex items-center shrink-0 px-8 md:px-14">
                <p
                  className="font-body whitespace-nowrap text-base md:text-lg font-normal leading-none cursor-default select-none"
                  style={{
                    background: 'linear-gradient(90deg, #CBD5E1 0%, #94A3B8 60%, #64748b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {text}
                </p>

                {/* Separator — styled diamond */}
                <span
                  className="shrink-0 ml-8 md:ml-14 w-1.5 h-1.5 rotate-45 block"
                  style={{ background: 'linear-gradient(135deg, #36828E, #E31E24)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient border line (duplicate for symmetry) */}
    </section>
  );
}
