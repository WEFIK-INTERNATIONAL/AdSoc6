import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Call for Papers | ADSoC 6.0",
};

export default function CFPPage() {
  const guidelines = [
    { title: "Review Process", content: "All submissions will undergo a double-blind peer review process conducted by the Technical Program Committee." },
    { title: "Publication", content: "Accepted and presented papers will be submitted for inclusion into IEEE Xplore, subject to meeting IEEE's scope and quality requirements." },
    { title: "Indexing", content: "ADSoC series is known for high-quality indexing in Scopus and Web of Science (WoS)." }
  ];

  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-soft">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="mono text-primary mb-4 font-bold tracking-[3px]">Submission Open</p>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-8">Call for Papers</h1>
                <p className="text-xl text-slate-500 leading-relaxed font-body mb-10">
                  We invite researchers, academicians, and practitioners to submit their original, unpublished research contributions to ADSoC 6.0.
                </p>
                <button className="px-10 py-5 bg-primary text-white font-bold rounded-full shadow-xl shadow-primary/20">
                  Paper Submission Portal
                </button>
              </div>
              <div className="grid gap-6">
                {guidelines.map((g, idx) => (
                  <div key={idx} className="p-8 bg-background rounded-2xl border border-white/5 shadow-sm border-glow">
                    <h3 className="text-xl font-heading mb-4 text-white tracking-tight">{g.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{g.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-heading mb-12 text-center">Submission Guidelines</h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <span className="mono text-2xl font-bold text-accent">01</span>
                <div>
                  <h4 className="text-xl font-heading mb-3">Originality</h4>
                  <p className="text-slate-600">The paper must be original and should not have been published previously or be under consideration for publication elsewhere.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="mono text-2xl font-bold text-accent">02</span>
                <div>
                  <h4 className="text-xl font-heading mb-3">Format</h4>
                  <p className="text-slate-600">All submissions should be in standard IEEE conference format (Double Column, A4 size). Maximum page length is 6 pages.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="mono text-2xl font-bold text-accent">03</span>
                <div>
                  <h4 className="text-xl font-heading mb-3">Plagiarism</h4>
                  <p className="text-slate-600">All papers will be checked for plagiarism through IEEE CrossCheck. Submissions with high similarity scores will be rejected.</p>
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

