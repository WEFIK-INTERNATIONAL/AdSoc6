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

        {/* About The Institution */}
        <Section className="py-24 md:py-32 px-6 bg-background relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 medical-grid opacity-5 pointer-events-none"></div>
          <div className="bg-glow-accent -bottom-40 -right-40 opacity-20 pointer-events-none"></div>
          
          <div className="w-full mx-auto max-w-[90rem] relative z-10">
            <div className="text-center mb-16">
              <p className="mono text-accent mb-4 font-bold tracking-[6px] uppercase text-xs md:text-sm">About The Institution</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight max-w-5xl mx-auto">
                Top Private Engineering College in Kolkata for <span className="text-gradient-accent">Future Innovators</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Text Side (Left) */}
              <div className="glass-dark rounded-[40px] p-8 lg:p-10 xl:p-12 border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/10 transition-colors duration-700 flex flex-col justify-center lg:col-span-8 order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full justify-center">
                  <h3 className="text-white font-heading font-semibold text-3xl md:text-4xl mb-6 leading-snug">
                    Guru Nanak Institute of Technology <span className="text-primary/60 text-xl md:text-2xl ml-2 block mt-2">(GNIT)</span>
                  </h3>
                  
                  <div className="space-y-5 text-slate-300 font-body text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[1.7] font-normal tracking-wide">
                    <p>
                      Widely recognized as one of the top private engineering colleges in Kolkata, affiliated with MAKAUT, WB. Established in 2003 under the prestigious <strong className="text-white">JIS Group Educational Initiatives</strong>, GNIT has emerged as a premier destination for technical education among the leading engineering colleges in Kolkata.
                    </p>
                    <p>
                      Approved by AICTE and accredited by UGC and NAAC, with several NBA-accredited programs, GNIT is located in a prime area of North Kolkata near Sodepur. The institute is committed to delivering quality education aligned with current industry demands and technological advancements.
                    </p>
                    <div className="p-5 mt-4 rounded-3xl bg-white/5 border border-white/10 border-l-4 border-l-primary relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none"></div>
                      <p className="relative z-10 text-white font-medium italic text-base md:text-lg">
                        &quot;For aspiring engineers looking at top engineering colleges in Kolkata, GNIT stands out for its modern infrastructure, technology-driven curriculum, and excellent placement support.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Side (Right) */}
              <div className="relative h-full min-h-[350px] md:min-h-[450px] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(54,130,142,0.2)] group lg:col-span-4 order-1 lg:order-2">
                <Image 
                  src="/GNITImage.png"
                  alt="Guru Nanak Institute of Technology"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 filter contrast-125 saturate-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              </div>

            </div>
          </div>
        </Section>

        {/* Venue Teaser */}
        <Section className="py-28 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0 medical-grid opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="w-full mx-auto max-w-[90rem] px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
              
              {/* Left Column: Typography & Cards */}
              <div className="flex flex-col justify-center">
                <p className="text-[10px] text-primary font-semibold tracking-widest uppercase mb-2">The Destination</p>
                <h2 className="text-xl md:text-2xl font-heading text-white leading-tight mb-5">
                  Hosted at <br /> <span className="text-gradient-primary">GNIT, Kolkata.</span>
                </h2>
                
                <div className="space-y-3">
                  {/* Address Card */}
                  <div className="flex border border-white/5 glass-dark rounded-lg overflow-hidden shadow-lg group hover:border-white/10 transition-colors">
                    <div className="w-10 md:w-12 bg-primary/10 flex flex-col items-center justify-center text-primary group-hover:bg-primary/20 transition-colors relative overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
                      <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="p-3 flex-1 bg-background/40">
                      <h4 className="font-heading text-sm md:text-base text-white mb-0.5">Guru Nanak Institute of Technology</h4>
                      <p className="text-[10px] md:text-xs text-slate-400 font-body leading-relaxed">157/F, Nilgunj Rd, Sahid Colony, Panihati<br/>Khardaha, West Bengal 700110</p>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="flex border border-white/5 glass-dark rounded-lg overflow-hidden shadow-lg group hover:border-white/10 transition-colors">
                    <div className="w-10 md:w-12 bg-primary/10 flex flex-col items-center justify-center text-primary group-hover:bg-primary/20 transition-colors relative overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
                      <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="p-3 flex-1 bg-background/40">
                      <h4 className="font-heading text-sm md:text-base text-white mb-0.5">Contact Details</h4>
                      <p className="text-[10px] md:text-xs text-slate-400 font-body leading-relaxed">+91 9073322523 <span className="mx-1 text-white/20">|</span> +91 9073683911<br/>adsoc6@gnit.ac.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Map Embed */}
              <div className="w-full h-full min-h-[200px] lg:min-h-[250px] relative rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(54,130,142,0.15)] group mt-6 lg:mt-0">
                <div className="absolute inset-0 bg-primary/20 mix-blend-color pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                <div className="absolute inset-0 border-[2px] border-background z-20 pointer-events-none rounded-xl lg:rounded-2xl"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.933391741164!2d88.3788995!3d22.6951326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c6df041e831%3A0x6e3fc1531d1cb33!2sGuru+Nanak+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1777140303267!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full grayscale-[50%] contrast-[1.2] invert-[90%] hue-rotate-[180deg]" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
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
      </main>

      <Footer />
    </div>
  );
}

