import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Keynote Speakers | ADSoC 6.0",
};

export default function SpeakersPage() {
  const speakers = [
    { name: "Prof. (Dr.) Debabrata Das", role: "Chairperson, IEEE Kolkata Section", org: "IIIT Bangalore", bio: "Leading expert in intelligent networking and 6G technologies." },
    { name: "Prof. (Dr.) Mike Hinchey", role: "Former Director", org: "Lero - Ireland", bio: "Renowned software engineering expert and former NASA scientist." },
    { name: "Prof. (Dr.) J.K. Mandal", role: "Professor", org: "University of Kalyani", bio: "Specialist in secure communication and AI-driven data systems." },
    { name: "Dr. Deepu Sebin", role: "Founder", org: "DailyRounds", bio: "Visionary in health-tech innovation and clinical digital transformation." }
  ];

  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <p className="mono text-primary mb-4 font-bold tracking-[3px]">Global Thought Leaders</p>
              <h1 className="text-5xl md:text-7xl font-heading text-white mb-8">Keynote Speakers</h1>
              <p className="max-w-3xl mx-auto text-xl text-slate-500 font-body leading-relaxed">
                Meet the visionaries who are reshaping the landscape of intelligent healthcare and society.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {speakers.map((s, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 p-10 bg-soft rounded-[2.5rem] border border-white/5 card-hover items-center md:items-start text-center md:text-left">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-heading text-6xl">
                    {s.name[0]}
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading text-white mb-2">{s.name}</h3>
                    <p className="mono text-[10px] text-accent font-bold mb-4 tracking-widest">{s.role}</p>
                    <p className="text-sm font-bold text-slate-600 mb-6">{s.org}</p>
                    <p className="text-slate-500 leading-relaxed italic border-t border-slate-200 pt-6">&quot;{s.bio}&quot;</p>
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

