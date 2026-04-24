import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About | ADSoC 6.0",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-soft">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="mono text-primary mb-4 font-bold tracking-[3px]">The Tradition of Excellence</p>
            <h1 className="text-5xl md:text-7xl font-heading text-white mb-8">About ADSoC 6.0</h1>
            <p className="text-xl text-slate-500 leading-relaxed font-body">
              The International Conference on AI-Driven Smart Healthcare for Society 6.0 (ADSoC) is a premier global forum dedicated to the intersection of artificial intelligence and medicine.
            </p>
          </div>
        </Section>

        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="border-glow">
                  <h3 className="text-2xl font-heading mb-4">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To catalyze the development of intelligent healthcare systems that are ethically sound, technologically robust, and globally accessible, paving the way for the emergence of Society 6.0.
                  </p>
                </div>
                <div className="border-glow">
                  <h3 className="text-2xl font-heading mb-4">Host Institution</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Guru Nanak Institute of Technology (GNIT), under the aegis of JIS Group, is a premier engineering college in Kolkata known for its research-driven culture and academic excellence.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-12 rounded-3xl border border-white/5">
                <h3 className="text-3xl font-heading mb-6 text-primary">Conference Vision</h3>
                <p className="text-slate-600 mb-6 italic">
                  &quot;We believe that AI-driven solutions are the key to solving the world&apos;s most pressing healthcare challenges, from early diagnostics to precision medicine.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                  <div>
                    <p className="font-bold text-white">Prof. (Dr.) Santanu Kumar Sen</p>
                    <p className="text-xs mono text-slate-500">General Chair, ADSoC 6.0</p>
                  </div>
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

