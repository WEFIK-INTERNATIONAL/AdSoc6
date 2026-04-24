import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About the Institute | ADSoC 6.0",
};

export default function InstitutePage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="mono text-primary mb-4 font-bold tracking-[3px]">A Legacy of Innovation</p>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-8">Guru Nanak Institute of Technology</h1>
                <p className="text-xl text-slate-500 leading-relaxed font-body mb-8">
                  GNIT, a flagship institution of the JIS Group Educational Initiative, has been at the forefront of technical education and research since its inception in 2003.
                </p>
                <div className="flex gap-12 border-t border-white/5 pt-10">
                  <div>
                    <p className="text-3xl font-heading text-white font-bold">A+</p>
                    <p className="mono text-[10px] text-slate-400">NAAC Accredited</p>
                  </div>
                  <div>
                    <p className="text-3xl font-heading text-white font-bold">20+</p>
                    <p className="mono text-[10px] text-slate-400">Years of Excellence</p>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-3xl bg-slate-800 overflow-hidden relative border border-slate-200 shadow-2xl">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-heading text-2xl italic px-10 text-center">
                  &quot;Center of Excellence in Smart Engineering &amp; Health Technology&quot;
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

