import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact Us | ADSoC 6.0",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 medical-grid opacity-10 pointer-events-none"></div>
          <div className="bg-glow-primary -top-40 -left-40 opacity-20 pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Background floating 'Venue' text */}
            <div className="absolute top-0 left-0 -translate-y-16 -translate-x-8 lg:-translate-x-16 select-none pointer-events-none opacity-[0.03]">
              <span className="text-[120px] md:text-[200px] font-heading font-bold text-white uppercase whitespace-nowrap">Venue</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              
              {/* Left Column: Typography & Cards */}
              <div className="flex flex-col justify-center">
                <p className="mono text-primary mb-4 font-bold tracking-[4px] uppercase text-sm">Reach Us</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight mb-12">
                  Conference <span className="text-gradient-primary">LOCATION</span>
                </h1>
                
                <div className="space-y-6">
                  {/* Address Card */}
                  <div className="flex border border-white/5 glass-dark rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group hover:border-white/10 transition-colors">
                    <div className="w-24 md:w-32 bg-primary/10 flex flex-col items-center justify-center text-primary group-hover:bg-primary/20 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
                      <svg className="relative z-10" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="p-6 md:p-8 flex-1 bg-background/40">
                      <h4 className="font-heading text-xl md:text-2xl text-white mb-2">Guru Nanak Institute of Technology</h4>
                      <p className="text-slate-400 font-body leading-relaxed">157/F, Nilgunj Rd, Sahid Colony, Panihati<br/>Khardaha, West Bengal 700110</p>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="flex border border-white/5 glass-dark rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group hover:border-white/10 transition-colors">
                    <div className="w-24 md:w-32 bg-primary/10 flex flex-col items-center justify-center text-primary group-hover:bg-primary/20 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
                      <svg className="relative z-10" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="p-6 md:p-8 flex-1 bg-background/40">
                      <h4 className="font-heading text-xl md:text-2xl text-white mb-2">Contact Details</h4>
                      <p className="text-slate-400 font-body leading-relaxed">+91 9073322523 <span className="mx-2 text-white/20">|</span> +91 9073683911<br/>adsoc6@gnit.ac.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Map Embed */}
              <div className="w-full h-full min-h-[400px] lg:min-h-[500px] relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(54,130,142,0.15)] group mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-primary/20 mix-blend-color pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                <div className="absolute inset-0 border-[4px] border-background z-20 pointer-events-none rounded-[2.5rem]"></div>
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
      </main>
      <Footer />
    </>
  );
}
