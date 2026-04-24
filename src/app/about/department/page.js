import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Department of CSE & EE | ADSoC 6.0",
};

export default function DepartmentPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-soft">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 aspect-video rounded-3xl bg-background border border-white/5 shadow-xl p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-heading mb-6 text-primary">Key Focus Areas</h3>
                <ul className="space-y-4 text-slate-600 font-body">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> AI & Machine Learning</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Smart Grids & Renewable Energy</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Biomedical Instrumentation</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> VLSI & Embedded Systems</li>
                </ul>
              </div>
              
              <div className="order-1 lg:order-2">
                <p className="mono text-primary mb-4 font-bold tracking-[3px]">Departmental Vision</p>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-8">CSE & EE Departments</h1>
                <p className="text-xl text-slate-500 leading-relaxed font-body mb-8">
                  The Computer Science & Engineering and Electrical Engineering departments at GNIT are the core drivers of ADSoC 6.0, fostering interdisciplinary research in healthcare automation.
                </p>
                <p className="text-slate-600 leading-relaxed font-body">
                  With state-of-the-art laboratories and a focus on industry-academic collaboration, we empower students and researchers to solve real-world problems through intelligent engineering.
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

