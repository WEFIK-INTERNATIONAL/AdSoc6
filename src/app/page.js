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

        {/* Multi-Page Portal: Research Focus */}
        <Section className="py-24 px-6 bg-background relative neural-pattern overflow-hidden">
          <div className="absolute inset-0 medical-grid opacity-10"></div>
          <div className="bg-glow-primary -top-40 -left-40 opacity-40"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <p className="mono text-primary mb-4 font-bold tracking-[3px]">Ecosystem Analysis</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white leading-tight">Focus Research <br /> <span className="text-gradient-primary">Tracks.</span></h2>
              </div>
              <Link href="/cfp" className="px-10 py-4 glass-dark text-white rounded-2xl border border-white/10 hover:border-primary/50 transition-all font-bold mono text-[10px] tracking-[2px]">
                VIEW ALL TRACKS
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Medical Diagnostics', 
                  image: '/track_diagnostics.png',
                  desc: 'AI-driven precision diagnostics and imagery.' 
                },
                { 
                  title: 'Smart Wearables', 
                  image: '/track_wearables.png',
                  desc: 'Bio-metric sensors and real-time monitoring.' 
                },
                { 
                  title: 'Cyber-Physical Ethics', 
                  image: '/track_ethics.png',
                  desc: 'Ethics, privacy and security in digital health.' 
                }
              ].map((track, i) => (
                <Link key={i} href="/cfp" className="group relative h-[500px] rounded-[50px] overflow-hidden border border-white/5 shadow-2xl transition-all hover:-translate-y-2">
                  <Image 
                    src={track.image} 
                    alt={track.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="mono text-[8px] text-primary font-bold tracking-[3px] mb-2">TRACK 0{i+1}</p>
                    <h3 className="text-3xl font-heading text-white mb-3 group-hover:text-primary transition-colors leading-tight">{track.title}</h3>
                    <p className="text-sm text-slate-400 font-body leading-relaxed group-hover:text-slate-200 transition-colors">{track.desc}</p>
                    <div className="mt-8 w-14 h-14 rounded-full glass-dark flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
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

