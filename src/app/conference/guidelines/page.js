import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Submission Guidelines | ADSoC 6.0",
};

export default function GuidelinesPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <p className="mono text-primary mb-4 font-bold tracking-[3px]">Author Information</p>
            <h1 className="text-5xl md:text-7xl font-heading text-white mb-12">Submission Guidelines</h1>
            
            <div className="space-y-16">
              <div className="border-glow">
                <h3 className="text-2xl font-heading mb-6 text-white">Manuscript Preparation</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-body">
                  All manuscripts must be prepared according to the IEEE Conference Template. Papers should be submitted as PDF files using the EasyChair submission portal.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-primary/5 text-primary mono text-[10px] font-bold border border-primary/20 rounded-xl hover:bg-primary/10 transition-all">Download Word Template</button>
                  <button className="px-6 py-3 bg-primary/5 text-primary mono text-[10px] font-bold border border-primary/20 rounded-xl hover:bg-primary/10 transition-all">Download LaTeX Template</button>
                </div>
              </div>

              <div className="border-glow">
                <h3 className="text-2xl font-heading mb-6 text-white">Page Limit & Format</h3>
                <ul className="space-y-4 text-slate-600 font-body list-disc list-inside">
                  <li>Full papers must be between 4 to 6 pages.</li>
                  <li>Use standard IEEE double-column format.</li>
                  <li>A4 paper size only.</li>
                  <li>Embed all fonts in the PDF.</li>
                </ul>
              </div>

              <div className="bg-accent/5 p-10 rounded-[2rem] border border-accent/20">
                <h3 className="text-2xl font-heading mb-6 text-accent">Ethical Policy</h3>
                <p className="text-slate-300 leading-relaxed font-body">
                  ADSoC 6.0 maintains a strict zero-tolerance policy against plagiarism. All submitted papers will be screened for originality using IEEE CrossCheck (iThenticate). Papers with high similarity scores will be summarily rejected without further review.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

