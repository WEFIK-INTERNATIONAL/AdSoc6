import Section from "@/components/ui/Section";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export const metadata = {
  title: "Research Tracks | ADSoC 6.0",
};

export default function TracksPage() {
  const tracks = [
    { title: 'AI-Driven Diagnostics', id: 'T1', desc: 'Advancements in medical imaging, pathology automation, and early disease detection.' },
    { title: 'Smart Wearables & IoT', id: 'T2', desc: 'Real-time patient monitoring, bio-feedback systems, and remote nursing.' },
    { title: 'Natural Language Processing', id: 'T3', desc: 'Clinical record mining, multilingual healthcare bots, and patient-doctor interfaces.' },
    { title: 'Telemedicine & Robotics', id: 'T4', desc: 'Remote robotic surgery, high-speed medical streaming, and virtual consultation.' },
    { title: 'Genomics & Precision Medicine', id: 'T5', desc: 'Deep learning for genomic sequencing, drug discovery, and personalized therapy.' },
    { title: 'Society 6.0 & Ethics', id: 'T6', desc: 'Data privacy, AI bias in healthcare, and inclusive design for accessibility.' }
  ];

  return (
    <>
      <Nav />
      <main className="pt-20">
        <Section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-20">
              <p className="mono text-primary mb-4 font-bold tracking-[3px]">Scope of Research</p>
              <h1 className="text-5xl md:text-7xl font-heading text-white mb-8">Conference Tracks</h1>
              <p className="max-w-3xl text-xl text-slate-500 leading-relaxed font-body">
                ADSoC 6.0 covers a broad spectrum of research areas bridging the gap between hardware engineering and intelligent health software.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {tracks.map((track, idx) => (
                <div key={idx} className="group card-hover bg-soft rounded-[2rem] border border-white/5 flex flex-col overflow-hidden">
                  {/* Track Image Preview */}
                  <div className="relative h-48 bg-slate-200 overflow-hidden">
                    {idx < 2 ? (
                      <Image 
                        src={idx === 0 ? "/track_diagnostics.png" : "/track_wearables.png"} 
                        alt={track.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 font-heading text-4xl">
                        T{idx + 1}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-10 flex flex-col justify-between flex-1">
                    <div>
                      <span className="mono text-[10px] text-accent mb-4 block font-bold tracking-[2px]">Track {track.id}</span>
                      <h3 className="text-2xl font-heading mb-6 group-hover:text-primary transition-colors">{track.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{track.desc}</p>
                    </div>
                    <div className="mt-10 pt-10 border-t border-slate-200 flex justify-between items-center">
                      <span className="mono text-[10px] text-slate-400">IEEE CSS Standards</span>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        →
                      </div>
                    </div>
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

