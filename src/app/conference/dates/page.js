import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Important Dates | ADSoC 6.0",
};

export default function DatesPage() {
  const dates = [
    { title: "Abstract Submission", date: "Oct 30, 2025", status: "Open" },
    { title: "Notification of Acceptance", date: "Dec 15, 2025", status: "Upcoming" },
    { title: "Camera Ready Paper", date: "Jan 10, 2026", status: "Upcoming" },
    { title: "Conference Registration", date: "Jan 15, 2026", status: "Upcoming" },
    { title: "Conference Dates", date: "Feb 20-22, 2026", status: "Main Event" }
  ];

  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <p className="mono text-primary mb-4 font-bold tracking-[3px]">Timeline</p>
              <h1 className="text-5xl md:text-7xl font-heading text-white mb-8">Important Dates</h1>
              <p className="text-xl text-slate-500 font-body">Mark your calendar for these critical conference milestones.</p>
            </div>

            <div className="grid gap-6">
              {dates.map((d, idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between items-center p-10 bg-soft rounded-3xl border border-white/5 card-hover">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-heading text-white mb-2">{d.title}</h3>
                    <p className="mono text-accent font-bold tracking-[1px]">{d.status}</p>
                  </div>
                  <div className="mt-6 md:mt-0 text-center md:text-right">
                    <p className="text-3xl font-heading text-primary">{d.date}</p>
                    <p className="mono text-[10px] text-slate-400">All Deadlines: 23:59 IST</p>
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

