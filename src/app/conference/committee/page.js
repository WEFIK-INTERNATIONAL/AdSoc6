import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Committee | ADSoC 6.0",
};

export default function CommitteePage() {
  const leadership = [
    { name: "Sardar Taranjit Singh", role: "Chief Patron", org: "JIS Group" },
    { name: "Sardar Haranjit Singh", role: "Patron", org: "JIS Group" },
    { name: "Prof. (Dr.) Santanu Kumar Sen", role: "General Chair", org: "Principal, GNIT" },
    { name: "Prof. (Dr.) Sangeeta Bhattacharyya", role: "Organizing Chair", org: "GNIT" }
  ];

  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <p className="mono text-primary mb-4 font-bold tracking-[3px]">Leadership Board</p>
            <h1 className="text-5xl md:text-7xl font-heading text-white mb-16">Organizing Committee</h1>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((member, idx) => (
                <div key={idx} className="group p-8 bg-soft rounded-3xl border border-white/5 flex flex-col items-center text-center card-hover">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mb-6 flex items-center justify-center text-slate-400 font-heading text-4xl">
                    {member.name[0]}
                  </div>
                  <h3 className="text-xl font-heading text-white mb-2">{member.name}</h3>
                  <p className="mono text-[10px] text-primary mb-2 font-bold">{member.role}</p>
                  <p className="text-xs text-slate-500 font-bold italic line-clamp-1">{member.org}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-24 px-6 bg-soft">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-heading mb-12">Technical Program Committee</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Prof. (Dr.) Debabrata Das", org: "IIIT Bangalore" },
                { name: "Prof. (Dr.) J. K. Mandal", org: "University of Kalyani" },
                { name: "Prof. (Dr.) Mike Hinchey", org: "UL, Ireland" },
                { name: "Prof. (Dr.) Koushik Maharatna", org: "Univ. of Southampton" },
                { name: "Prof. (Dr.) Siddhartha Bhattacharyya", org: "ISI Kolkata" },
                { name: "Dr. Barnali Kundu", org: "GNIT Kolkata" }
              ].map((member, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-background rounded-2xl border border-white/5 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {member.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-white">{member.name}</h5>
                    <p className="text-xs text-slate-500">{member.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

