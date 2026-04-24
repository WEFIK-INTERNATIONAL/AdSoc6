import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Venue & Travel | ADSoC 6.0",
};

export default function VenuePage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <p className="mono text-primary mb-4 font-bold tracking-[3px]">Explore Kolkata</p>
            <h1 className="text-5xl md:text-7xl font-heading text-white mb-12">Venue & Travel</h1>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-lg mb-8">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1477732298634!2d88.3908852758151!3d22.693635779405625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c6d6d84f2c9%3A0x6d05f778393c593a!2sGuru%20Nanak%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1713330000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-8 bg-soft rounded-2xl border border-white/5">
                  <h4 className="font-heading text-xl mb-4 text-white">Conference Location</h4>
                  <p className="text-slate-600 mb-2">Guru Nanak Institute of Technology</p>
                  <p className="text-slate-600 italic">157/F, Nilgunj Rd, Panihati, Sodepur, Kolkata, West Bengal 700114</p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="border-glow">
                  <h3 className="text-2xl font-heading mb-4 text-white">How to Reach</h3>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-primary mb-1">By Air</h5>
                      <p className="text-sm text-slate-600 leading-relaxed">The nearest airport is Netaji Subhash Chandra Bose International Airport (CCU), approximately 15km from the campus. Taxis and app-based cabs (Uber/Ola) are readily available.</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-primary mb-1">By Rail</h5>
                      <p className="text-sm text-slate-600 leading-relaxed">Kolkata is served by Howrah, Sealdah, and Kolkata railway stations. Sodepur is well-connected by local trains from Sealdah station.</p>
                    </div>
                  </div>
                </div>

                <div className="border-glow">
                  <h3 className="text-2xl font-heading mb-4 text-white">Accommodation</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Special conference rates have been negotiated with several premium hotels in the vicinity. Delegates are advised to book early.
                  </p>
                  <ul className="text-sm text-slate-500 list-disc list-inside space-y-2">
                    <li>The Westin Kolkata Rajarhat (~25 min)</li>
                    <li>AltAir Boutique Hotel (~30 min)</li>
                    <li>Various budget options in Sodepur (~5 min)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

