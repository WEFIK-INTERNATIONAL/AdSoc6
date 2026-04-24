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
        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <p className="mono text-primary mb-4 font-bold tracking-[3px]">Get in Touch</p>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-8">Contact Us</h1>
                <p className="text-xl text-slate-500 font-body mb-12">
                  Have questions about submissions, registration, or travel? Our team is here to help.
                </p>
                
                <div className="space-y-10">
                  <div className="flex gap-6 border-glow">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-white mb-1">Email Inquiry</h4>
                      <p className="text-slate-600">adsoc6@gnit.ac.in</p>
                    </div>
                  </div>
                  <div className="flex gap-6 border-glow">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-white mb-1">Phone</h4>
                      <p className="text-slate-600">+91 33 2523 3900</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-soft p-12 rounded-[2.5rem] border border-white/5 shadow-sm">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="mono text-[10px] text-slate-400 mb-2 block font-bold">Full Name</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-primary transition-all text-slate-300" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="mono text-[10px] text-slate-400 mb-2 block font-bold">Email Address</label>
                      <input type="email" className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-primary transition-all text-slate-300" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="mono text-[10px] text-slate-400 mb-2 block font-bold">Subject</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-primary transition-all text-slate-300" placeholder="Submission Query" />
                  </div>
                  <div>
                    <label className="mono text-[10px] text-slate-400 mb-2 block font-bold">Message</label>
                    <textarea className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-primary transition-all text-slate-300 min-h-[150px]" placeholder="Your message here..."></textarea>
                  </div>
                  <button className="w-full py-5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/10 hover:scale-[1.02] transition-all">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

