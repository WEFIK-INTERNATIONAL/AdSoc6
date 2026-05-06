"use client";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Section from "@/components/ui/Section";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { val: '2003', label: 'Established' },
  { val: '90%+', label: 'Placement Rate' },
  { val: '10 LPA', label: 'Avg. Package' },
  { val: '97+', label: 'Research Pubs.' },
];

const FOCUS_AREAS = [
  "Artificial Intelligence & Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "Data Science",
];

const HOD_MESSAGE_PARAS = [
  "As the Head of the Computer Science and Engineering department, I would like to emphasize the importance of achieving excellence in three key areas: academics, placement, and research.",
  "Our department is dedicated to providing the highest standards of education — a strong foundation in both theoretical knowledge and practical skills. We encourage students to actively participate in classes, engage in hands-on learning, and seek mentorship when needed.",
  "We are committed to preparing students for the competitive job market through comprehensive training programs, mock interviews, and industry interactions. Each year, over 90% of our students secure placements in multinational companies such as IBM, Zscaler, TCS, Capgemini, Wipro, ITC Infotech, and Mindtree, with an average package of 10 LPA.",
  "Research plays a crucial role in shaping the future of technology. Our department provides ample opportunities for research collaboration, funding, and publication. Students have received accolades at the prestigious Smart India Hackathon, and we boast over 97 student research publications including journals, conference papers, book chapters, and patents.",
  "I am proud to announce that our department is on the path towards obtaining NBA accreditation — a testament to our commitment to continuous improvement and excellence in education. I urge every student to seize every opportunity to excel academically, secure strong placements, and contribute to cutting-edge research.",
];

const MISSIONS = [
  { id: "DM-1", text: "To impart quality education with holistic development to produce professionals with leadership traits." },
  { id: "DM-2", text: "To impart knowledge on emerging technologies and entrepreneurship skills to produce technocrats of global standard and entrepreneurs." },
  { id: "DM-3", text: "To promote interdisciplinary work culture and opportunity to work in a team through collaborative research and project work." },
  { id: "DM-4", text: "To inculcate professional ethics and moral responsibility for a better society." },
];

const PSO = [
  { id: "PSO 1", text: "Ability to use efficient algorithms for designing and developing software applications and products." },
  { id: "PSO 2", text: "Ability to correlate computer science and core engineering subjects to solve real-life problems across multiple domains." },
  { id: "PSO 3", text: "Ability to write code efficiently in a competitive environment in national and international platforms." },
];

const PEO = [
  { id: "PEO 1", text: "Our graduates will establish themselves as effective professionals in industry, academia and entrepreneurship." },
  { id: "PEO 2", text: "Our graduates will become profound researchers in multiple domains." },
  { id: "PEO 3", text: "Our graduates will act as leaders in society." },
];

const PO = [
  { id: "PO1",  label: "Engineering Knowledge",        text: "Apply knowledge of mathematics, science, and engineering fundamentals to solve complex engineering problems." },
  { id: "PO2",  label: "Problem Analysis",             text: "Identify, formulate, and analyze complex engineering problems using first principles of mathematics and natural sciences." },
  { id: "PO3",  label: "Design / Development",         text: "Design solutions for complex engineering problems with consideration for public health, safety, and societal needs." },
  { id: "PO4",  label: "Investigation",                text: "Use research-based knowledge including design of experiments and data interpretation to provide valid conclusions." },
  { id: "PO5",  label: "Modern Tool Usage",            text: "Select and apply appropriate techniques, resources, and modern engineering and IT tools to complex activities." },
  { id: "PO6",  label: "Engineer & Society",           text: "Assess societal, health, safety, legal and cultural issues and consequent responsibilities relevant to engineering practice." },
  { id: "PO7",  label: "Environment & Sustainability", text: "Understand the impact of engineering solutions in societal and environmental contexts and need for sustainable development." },
  { id: "PO8",  label: "Ethics",                       text: "Apply ethical principles and commit to professional ethics, responsibilities, and norms of engineering practice." },
  { id: "PO9",  label: "Individual & Team Work",       text: "Function effectively as an individual, and as a member or leader in diverse teams and multidisciplinary settings." },
  { id: "PO10", label: "Communication",                text: "Communicate effectively on complex engineering activities with the community and society at large." },
  { id: "PO11", label: "Project Management",           text: "Apply engineering and management principles to manage projects and work in multidisciplinary environments." },
  { id: "PO12", label: "Life-long Learning",           text: "Engage in independent and life-long learning in the broadest context of technological change." },
];

// ─── Primitives ───────────────────────────────────────────────────────────────

const G = { teal: '#36828E', red: '#E31E24' };

function Tag({ children }) {
  return (
    <p className="font-accent uppercase text-[0.6rem] tracking-[0.22em] font-semibold mb-3" style={{ color: G.teal }}>
      {children}
    </p>
  );
}

function HR() {
  return (
    <div
      className="h-px"
      style={{ background: 'linear-gradient(to right, transparent, rgba(54,130,142,0.18), rgba(227,30,36,0.1), transparent)' }}
    />
  );
}

function Badge({ children, color = 'teal' }) {
  const isTeal = color === 'teal';
  return (
    <span
      className="font-accent text-[0.55rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded shrink-0"
      style={{
        color: isTeal ? G.teal : G.red,
        background: isTeal ? 'rgba(54,130,142,0.1)' : 'rgba(227,30,36,0.08)',
        border: `1px solid ${isTeal ? 'rgba(54,130,142,0.22)' : 'rgba(227,30,36,0.2)'}`,
      }}
    >
      {children}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DepartmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <div className="relative h-[480px] md:h-[560px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(54,130,142,0.22)_0%,transparent_70%)] pointer-events-none" />
          <InteractiveDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            <p className="mono text-primary text-sm mb-6 tracking-[8px] uppercase font-bold opacity-90">
              Department of Computer Science & Engineering
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-none tracking-tighter uppercase font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              Dept. of CSE
            </h1>
            <p className="font-body text-slate-400 text-base md:text-lg mt-4">
              Established 2003 · GNIT, Kolkata
            </p>
            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(54,130,142,0.8)]" />
              </div>
              <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* ── ABOUT THE DEPARTMENT ─────────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">

            {/* Section label + large heading side-by-side */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Tag>About The Department</Tag>
                <h2
                  className="font-big font-black uppercase text-white leading-none"
                  style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', letterSpacing: '-0.04em' }}
                >
                  Premier CSE Education<br />
                  <span style={{ background: `linear-gradient(90deg,${G.teal},${G.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    in Kolkata
                  </span>
                </h2>
              </div>
              {/* Stat chips — right-aligned on desktop */}
              <div className="flex gap-8 shrink-0">
                {STATS.map(s => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span
                      className="font-big font-black text-2xl md:text-3xl leading-none"
                      style={{ background: `linear-gradient(90deg,${G.teal},${G.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      {s.val}
                    </span>
                    <span className="font-accent text-[0.55rem] uppercase tracking-widest text-slate-500 mt-1 text-center">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Body prose */}
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-5 font-body text-slate-400 text-sm leading-relaxed">
              <p>
                The <span className="text-slate-200 font-medium">Department of CSE</span>, established in 2003, stands as a premier destination for academic excellence and research-driven learning — ranked among the top B.Tech CSE colleges in Kolkata.
              </p>
              <p>
                Students benefit from <span className="text-slate-200 font-medium">advanced laboratories, live projects, and industry collaborations</span>. A robust research culture encourages publishing papers, working on innovative projects, and participating in technical magazines.
              </p>
              <p>
                Focus areas include <span className="text-slate-200 font-medium">AI &amp; ML, Cybersecurity, Cloud Computing, and Data Science</span>. Committed to producing graduates with leadership, entrepreneurial mindsets, and a global perspective.
              </p>
            </div>

          </div>
        </section>

        {/* ── HOD'S MESSAGE ────────────────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">

            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

              {/* Left — sticky label block */}
              <div className="md:sticky md:top-28">
                <Tag>HOD&apos;s Message</Tag>
                <h2
                  className="font-big font-black uppercase text-white leading-none mb-6"
                  style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em' }}
                >
                  Message<br />
                  <span style={{ background: `linear-gradient(90deg,${G.teal},${G.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    from HOD
                  </span>
                </h2>
                {/* Author identity */}
                <div
                  className="rounded-xl p-5 border"
                  style={{ background: 'rgba(54,130,142,0.05)', borderColor: 'rgba(54,130,142,0.16)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-big font-black text-base text-white mb-3"
                    style={{ background: `linear-gradient(135deg,${G.teal},rgba(54,130,142,0.35))` }}
                  >
                    SB
                  </div>
                  <p className="font-display font-bold text-white text-sm leading-snug">Dr. Suman Bhattacharya</p>
                  <p className="font-accent text-[0.58rem] uppercase tracking-widest mt-1" style={{ color: G.teal }}>
                    Head of Department, CSE
                  </p>
                  <div className="mt-4 space-y-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {['97+ Research Publications', '90%+ Placement Rate', 'NBA Accreditation (In Progress)'].map(t => (
                      <div key={t} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: G.teal }} />
                        <span className="font-body text-slate-500 text-xs">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — message paragraphs */}
              <div className="space-y-5 font-body text-slate-400 text-base leading-relaxed">
                {HOD_MESSAGE_PARAS.map((p, i) => <p key={i}>{p}</p>)}
              </div>

            </div>
          </div>
        </section>

        {/* ── VISION + MISSION ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">
            <Tag>Mission & Vision</Tag>

            <div className="grid md:grid-cols-2 gap-10 items-start">

              {/* Vision */}
              <div>
                <h2
                  className="font-big font-black uppercase text-white text-3xl md:text-4xl leading-none mb-5"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  Department<br />
                  <span style={{ background: `linear-gradient(90deg,${G.teal},${G.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Vision
                  </span>
                </h2>
                <p className="font-body text-slate-300 text-base leading-relaxed pl-5" style={{ borderLeft: `2px solid ${G.teal}` }}>
                  To produce proficient professionals of global standard with respect to industry, academia, and entrepreneurship who can play a key role in their respective domain and become a responsible citizen for the sustainable growth of the society.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h2
                  className="font-big font-black uppercase text-white text-3xl md:text-4xl leading-none mb-5"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  Department<br />
                  <span style={{ background: `linear-gradient(90deg,${G.teal},${G.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Mission
                  </span>
                </h2>
                <div>
                  {MISSIONS.map((m, i) => (
                    <div
                      key={m.id}
                      className="flex items-start gap-4 py-3.5"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', borderTop: i === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                    >
                      <Badge>{m.id}</Badge>
                      <p className="font-body text-slate-400 text-sm leading-relaxed">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PSO + PEO ────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 border-b border-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-14">

              {/* PSO */}
              <div>
                <Tag>Program Specific Outcomes</Tag>
                <h2 className="font-big font-black uppercase text-white text-3xl md:text-4xl leading-none mb-1" style={{ letterSpacing: '-0.04em' }}>PSO</h2>
                <p className="font-body text-slate-500 text-sm mb-5">Abilities undergraduate students will attain:</p>
                {PSO.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 py-3.5"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', borderTop: i === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                  >
                    <Badge>{item.id}</Badge>
                    <p className="font-body text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* PEO */}
              <div>
                <Tag>Program Educational Objectives</Tag>
                <h2 className="font-big font-black uppercase text-white text-3xl md:text-4xl leading-none mb-1" style={{ letterSpacing: '-0.04em' }}>PEO</h2>
                <p className="font-body text-slate-500 text-sm mb-5">Long-term goals for our graduates:</p>
                {PEO.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 py-3.5"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', borderTop: i === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                  >
                    <Badge color="red">{item.id}</Badge>
                    <p className="font-body text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        <HR />

        {/* ── PROGRAMME OUTCOMES ───────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <Tag>Programme Outcomes</Tag>
            <h2
              className="font-big font-black uppercase text-white text-4xl md:text-5xl leading-none mb-3"
              style={{ letterSpacing: '-0.04em' }}
            >
              Engineering Graduates
            </h2>
            <p className="font-body text-slate-500 text-sm mb-10">Engineering graduates will be able to:</p>

            {/* Table-style rows */}
            <div>
              {PO.map((item, i) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[5rem_12rem_1fr] gap-x-6 gap-y-1 items-start py-4"
                  style={{ borderTop: i === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <Badge>{item.id}</Badge>
                  <p className="font-display font-semibold text-white text-sm hidden md:block">{item.label}</p>
                  <p className="font-body text-slate-400 text-sm leading-relaxed col-span-1 md:col-span-1">{item.text}</p>
                  <p className="font-display font-semibold text-white text-xs mt-0.5 md:hidden col-start-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
<Section className="py-24 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0 plus-pattern opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 mb-6">
              <p className="text-xs text-accent font-semibold tracking-widest uppercase">Call for Papers</p>
            </div>
            <h2 className="text-white mb-6">Ready to <span className="text-accent">Submit?</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
              Join leading globally indexed researchers. ADSoC 6.0 is technically co-sponsored by IEEE Kolkata Section. Ensure your work shapes Society 6.0.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/cfp" className="px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 text-sm tracking-widest border border-accent/30">
                SUBMISSION PORTAL
              </Link>
              <Link href="/conference/dates" className="px-10 py-4 glass-dark text-white font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all text-sm tracking-widest">
                KEY DEADLINES
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
