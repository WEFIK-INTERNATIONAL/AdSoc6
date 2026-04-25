import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import PartnerStrip from "@/components/sections/PartnerStrip";
import Section from "@/components/ui/Section";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Nav />
      
      <main>
        <Hero />
        <PartnerStrip />

        {/* About ADSoc 6.0 Description */}
        <Section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-background relative neural-pattern overflow-hidden">
          <div className="absolute inset-0 medical-grid opacity-10 pointer-events-none"></div>
          <div className="bg-glow-primary -top-40 -left-40 opacity-30 pointer-events-none"></div>
          
          <div className="w-full mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <p className="mono text-primary mb-5 font-bold tracking-[6px] uppercase text-xs md:text-sm">About The ADSOC 6.0</p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading text-white leading-tight">
                Pioneering <span className="text-gradient-primary">Smart Healthcare</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Image Side */}
              <div className="relative h-full min-h-[400px] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(54,130,142,0.2)] group lg:col-span-5">
                <Image 
                  src="/ai_healthcare_about.png"
                  alt="AI Healthcare Visualization"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
              </div>

              {/* Text Side */}
              <div className="glass-dark rounded-[40px] p-8 lg:p-12 xl:p-16 border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/10 transition-colors duration-700 flex flex-col justify-center lg:col-span-7">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <p className="relative z-10 text-slate-200 font-body text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[1.8] font-normal tracking-wide">
                  <strong className="text-white font-semibold text-xl md:text-2xl lg:text-3xl block mb-6 leading-snug">International Conference on AI-Driven Smart Healthcare for Society 5.0 — ADSoc6.0</strong> 
                  A prestigious technical conference organized by the Department of Computer Science and Engineering and Electrical Engineering of Guru Nanak Institute of Technology (GNIT) in collaboration with the IEEE Kolkata Section, focusing on <span className="text-primary font-medium">&quot;Artificial Intelligence in Smart Healthcare for a Human-Centric Society.&quot;</span>
                  <br /><br />
                  Scheduled in February 2026, the event will bring together leading researchers, clinicians, industry experts, research scholars, and academicians to discuss innovative solutions at the intersection of artificial intelligence and modern healthcare systems.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Paper Submission Teaser */}
        <Section className="py-24 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0 plus-pattern opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 mb-6">
              <p className="text-xs text-accent font-semibold tracking-widest uppercase">Call for Papers</p>
            </div>
            <h2 className="text-white mb-6">Ready to <span className="text-accent">Submit?</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
              Join leading globally indexed researchers. ADSoC 6.0 is technically co-sponsored by IEEE Kolkata Section. Ensure your work shapes Society 6.0.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/cfp" className="px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 text-sm tracking-widest border border-accent/30">
                SUBMISSION PORTAL
              </Link>
              <Link href="/conference/dates" className="px-10 py-4 glass-dark text-white font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all text-sm tracking-widest">
                KEY DEADLINES
              </Link>
            </div>
          </div>
        </Section>

        {/* Speakers Highlight */}
        <Section className="py-24 px-6 bg-background relative overflow-hidden">
          <div className="bg-glow-accent top-0 right-0 opacity-30"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-wrap items-center justify-between mb-16">
              <div>
                <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-3">Voice of Expertise</p>
                <h2 className="text-white">Keynote <span className="text-gradient-primary">Speakers.</span></h2>
              </div>
              <Link href="/conference/speakers" className="text-sm text-primary font-medium tracking-wider border-b border-primary/30 pb-1 hover:border-primary transition-all">MEET ALL SPEAKERS →</Link>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Prof. Debabrata Das", img: "/speaker_1.png", role: "IEEE Fellow" },
                { name: "Prof. Mike Hinchey", img: "/speaker_2.png", role: "Lero Director" },
                { name: "Prof. J.K. Mandal", img: "/speaker_3.png", role: "AI Strategist" },
                { name: "Dr. Deepu Sebin", img: "/speaker_4.png", role: "Health-Tech Lead" }
              ].map((s, idx) => (
                <div key={idx} className="group relative">
                  <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl mb-5">
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  </div>
                  <h4 className="text-white text-lg mb-1">{s.name}</h4>
                  <p className="text-xs text-primary font-medium tracking-wider uppercase">{s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Venue Teaser */}
        <Section className="py-28 px-6 bg-background relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-4">The Destination</p>
                <h2 className="text-white mb-6">Hosted at <br /> <span className="text-gradient-primary">GNIT, Kolkata.</span></h2>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                  A premier research institution nestled in the heart of West Bengal, providing the perfect atmosphere for academic excellence and innovation for Society 6.0.
                </p>
                <Link href="/venue" className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all inline-flex items-center gap-3 text-sm tracking-widest shadow-xl shadow-primary/20 border border-primary/30">
                  TRAVEL & STAY INFO <span>→</span>
                </Link>
              </div>
              <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <Image
                  src="/venue_gnit.png"
                  alt="GNIT Campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

