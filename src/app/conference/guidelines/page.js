"use client";

import { useState, useRef } from 'react';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Link from "next/link";

const GuidelineAccordion = ({ title, isOpen, onToggle, children, number }) => (
  <div className={`relative border border-white/5 bg-white/[0.02] mb-4 rounded-xl overflow-hidden transition-all duration-500 ${isOpen ? 'ring-1 ring-primary/30 shadow-[0_0_40px_rgba(54,130,142,0.1)]' : ''}`}>
    <div className={`absolute inset-0 medical-grid opacity-[0.03] pointer-events-none ${isOpen ? 'opacity-[0.07]' : ''}`}></div>
    
    <button 
      onClick={onToggle}
      className="w-full px-6 py-8 flex items-center justify-between group cursor-pointer text-left relative z-10"
    >
      <div className="flex items-center gap-6 min-w-0 flex-1">
        <span className="mono text-primary/40 text-sm font-bold tracking-widest">{number}</span>
        <h2 className={`text-xl md:text-2xl font-big tracking-[2px] uppercase transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white/60 group-hover:text-white'}`}>
          {title}
        </h2>
      </div>
      <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 bg-primary/20 border-primary/40' : 'rotate-0'}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'text-primary' : 'text-white/40'}><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </button>

    <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className="overflow-hidden">
        <div className="px-6 md:px-20 pb-12 relative z-10">
          <div className="h-px w-full bg-gradient-to-r from-primary/30 via-primary/5 to-transparent mb-10"></div>
          <div className="text-slate-300 font-body text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function GuidelinesPage() {
  const heroRef = useRef(null);
  const [openSection, setOpenSection] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden text-foreground">
      <Nav />
      
      <main className="flex-1 relative z-10">
        <div ref={heroRef} className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(54,130,142,0.3)_0%,transparent_70%)] pointer-events-none"></div>
          <InteractiveDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            <p className="mono text-primary text-sm md:text-base mb-6 tracking-[8px] uppercase font-bold opacity-90">Protocol & Standards</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-big text-white leading-none tracking-tighter uppercase font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">Guidelines</h1>
            <div className="relative flex items-center justify-center gap-6 mt-12">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
                <div className="relative"><div className="w-4 h-4 rounded-full bg-primary animate-ping opacity-75"></div><div className="absolute inset-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(54,130,142,0.8)]"></div></div>
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl py-32 relative">
          <Section className="space-y-4">
            
            {/* 1. Registration */}
            <GuidelineAccordion 
              number="01"
              title="Registration Fees" 
              isOpen={openSection === 0} 
              onToggle={() => setOpenSection(openSection === 0 ? -1 : 0)}
            >
              <div className="space-y-12">
                {/* Indian Authors */}
                <div className="relative group">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="mono text-accent text-xs font-black tracking-[4px] uppercase bg-accent/10 px-3 py-1 rounded">Regional</span>
                    <h3 className="text-2xl font-big text-white uppercase tracking-wider">Indian Authors</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { cat: "Students", eb_ieee: "₹ 5,000", eb_non: "₹ 6,000", reg_ieee: "₹ 5,500", reg_non: "₹ 7,000" },
                      { cat: "Academicians", eb_ieee: "₹ 7,000", eb_non: "₹ 8,000", reg_ieee: "₹ 8,000", reg_non: "₹ 9,000" },
                      { cat: "Industry Professionals", eb_ieee: "₹ 8,000", eb_non: "₹ 9,000", reg_ieee: "₹ 9,000", reg_non: "₹ 10,000" },
                      { cat: "Attendees", eb_ieee: "₹ 800", eb_non: "₹ 1,000", reg_ieee: "₹ 1,000", reg_non: "₹ 1,200" }
                    ].map((item, idx) => (
                      <div key={idx} className="glass-dark border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all group/card relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 -rotate-45 translate-x-8 -translate-y-8 group-hover/card:bg-accent/10 transition-colors"></div>
                        <h4 className="font-big text-white text-lg mb-6 tracking-wide uppercase">{item.cat}</h4>
                        
                        <div className="space-y-4">
                          <div className="opacity-40">
                            <p className="text-[10px] uppercase tracking-widest mb-1 italic">Early Bird (Closed)</p>
                            <div className="flex justify-between text-xs mono">
                              <span>IEEE: {item.eb_ieee}</span>
                              <span>Non: {item.eb_non}</span>
                            </div>
                          </div>
                          <div className="h-px bg-white/5"></div>
                          <div>
                            <p className="text-[10px] text-accent uppercase tracking-widest mb-2 font-bold">Regular</p>
                            <div className="space-y-2">
                              <div className="flex justify-between items-end">
                                <span className="text-[10px] opacity-60 uppercase">IEEE Member</span>
                                <span className="text-xl mono font-bold text-white leading-none">{item.reg_ieee}</span>
                              </div>
                              <div className="flex justify-between items-end">
                                <span className="text-[10px] opacity-60 uppercase">Non-IEEE</span>
                                <span className="text-xl mono font-bold text-white leading-none">{item.reg_non}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Foreign Authors */}
                <div className="relative group">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="mono text-primary text-xs font-black tracking-[4px] uppercase bg-primary/10 px-3 py-1 rounded">Global</span>
                    <h3 className="text-2xl font-big text-white uppercase tracking-wider">Foreign Authors</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { cat: "Students", eb_ieee: "$ 80", eb_non: "$ 100", reg_ieee: "$ 100", reg_non: "$ 120" },
                      { cat: "Academicians", eb_ieee: "$ 100", eb_non: "$ 120", reg_ieee: "$ 120", reg_non: "$ 140" },
                      { cat: "Industry Professionals", eb_ieee: "$ 150", eb_non: "$ 170", reg_ieee: "$ 170", reg_non: "$ 190" },
                      { cat: "Attendees", eb_ieee: "$ 40", eb_non: "$ 50", reg_ieee: "$ 50", reg_non: "$ 60" }
                    ].map((item, idx) => (
                      <div key={idx} className="glass-dark border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all group/card relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -rotate-45 translate-x-8 -translate-y-8 group-hover/card:bg-primary/10 transition-colors"></div>
                        <h4 className="font-big text-white text-lg mb-6 tracking-wide uppercase">{item.cat}</h4>
                        
                        <div className="space-y-4">
                          <div className="opacity-40">
                            <p className="text-[10px] uppercase tracking-widest mb-1 italic">Early Bird (Closed)</p>
                            <div className="flex justify-between text-xs mono">
                              <span>IEEE: {item.eb_ieee}</span>
                              <span>Non: {item.eb_non}</span>
                            </div>
                          </div>
                          <div className="h-px bg-white/5"></div>
                          <div>
                            <p className="text-[10px] text-primary uppercase tracking-widest mb-2 font-bold">Regular</p>
                            <div className="space-y-2">
                              <div className="flex justify-between items-end">
                                <span className="text-[10px] opacity-60 uppercase">IEEE Member</span>
                                <span className="text-xl mono font-bold text-white leading-none">{item.reg_ieee}</span>
                              </div>
                              <div className="flex justify-between items-end">
                                <span className="text-[10px] opacity-60 uppercase">Non-IEEE</span>
                                <span className="text-xl mono font-bold text-white leading-none">{item.reg_non}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 border-l-4 border-l-accent relative overflow-hidden">
                  <div className="absolute inset-0 plus-pattern opacity-[0.05]"></div>
                  <p className="relative z-10 text-slate-200 italic font-body text-lg leading-relaxed">
                    <span className="text-accent font-black uppercase tracking-widest mr-4 not-italic">Note:</span>
                    One Author, Indian/Foreign (Academia/Industry), can register the second paper with <strong className="text-white">50% of the registration fees</strong> for inclusion in the conference proceedings. A separate registration must be completed for each additional paper beyond the first two.
                  </p>
                </div>
              </div>
            </GuidelineAccordion>

            {/* 2. Paper Format */}
            <GuidelineAccordion 
              number="02"
              title="Paper Format" 
              isOpen={openSection === 1} 
              onToggle={() => setOpenSection(openSection === 1 ? -1 : 1)}
            >
              <div className="space-y-8 max-w-4xl">
                <p className="text-xl">Submissions must adhere to the <span className="text-white font-semibold underline decoration-primary decoration-2 underline-offset-8">IEEE Standard double-column format</span> for A4 size paper.</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { label: "Standard Limit", value: "6 Pages", sub: "Included in base fee" },
                    { label: "Maximum Limit", value: "8 Pages", sub: "Extra fee for additional 2" },
                    { label: "File Format", value: "PDF Only", sub: "Acrobat compatible" }
                  ].map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] text-primary font-bold uppercase tracking-[2px] mb-3">{stat.label}</p>
                      <p className="text-2xl font-big text-white mb-1 uppercase tracking-wider">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                    <a href="https://www.nit.ac.in/stepcon/pdf/conference-template-a4.docx" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 hover:border-primary/40 transition-all text-sm font-bold tracking-[3px] uppercase">WORD TEMPLATE</a>
                    <a href="https://www.nit.ac.in/stepcon/pdf/conference-latex-template_10-17-19.zip" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 hover:border-primary/40 transition-all text-sm font-bold tracking-[3px] uppercase">LATEX TEMPLATE</a>
                </div>
              </div>
            </GuidelineAccordion>

            {/* 3. Paper Submission */}
            <GuidelineAccordion 
              number="03"
              title="Paper Submission" 
              isOpen={openSection === 2} 
              onToggle={() => setOpenSection(openSection === 2 ? -1 : 2)}
            >
              <div className="space-y-8 max-w-4xl">
                <p className="text-xl leading-relaxed">
                  ADSoC 6.0 utilizes the <span className="text-white font-bold">Microsoft CMT</span> platform for all technical submissions and the rigorous peer-review process.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:border-primary/40 transition-colors">
                    <h4 className="text-primary font-big text-xl mb-4 tracking-widest uppercase">Double-Blind Protocol</h4>
                    <p className="text-slate-400 leading-relaxed font-body">To maintain high academic integrity, all submissions must be anonymous. Remove author names, affiliations, and explicit self-references from the PDF document.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:border-accent/40 transition-colors">
                    <h4 className="text-accent font-big text-xl mb-4 tracking-widest uppercase">Originality Audit</h4>
                    <p className="text-slate-400 leading-relaxed font-body">Papers are scanned for plagiarism. Similarity index must be <span className="text-white font-bold">below 20%</span>. Submissions must not be concurrently under review elsewhere.</p>
                  </div>
                </div>

                <div className="pt-6">
                    <Link href="https://cmt3.research.microsoft.com/STEPCon2025" target="_blank" className="inline-block px-14 py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 shadow-[0_20px_50px_rgba(54,130,142,0.3)] transition-all tracking-[4px] uppercase text-sm">
                        ACCESS CMT PORTAL
                    </Link>
                </div>
              </div>
            </GuidelineAccordion>

            {/* 4. Registration Guidelines */}
            <GuidelineAccordion 
              number="04"
              title="Registration Process" 
              isOpen={openSection === 3} 
              onToggle={() => setOpenSection(openSection === 3 ? -1 : 3)}
            >
              <div className="space-y-8 max-w-4xl">
                <p className="text-lg text-slate-400">Follow our detailed technical roadmap to complete your registration successfully.</p>
                <a href="https://www.nit.ac.in/stepcon/pdf/registration-details.pdf" className="inline-flex items-center gap-6 px-10 py-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/5 transition-all group border-l-4 border-l-primary">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    </div>
                    <div>
                        <p className="font-big text-white text-xl tracking-wider uppercase mb-1">Registration Roadmap</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">Download technical PDF (2.4 MB)</p>
                    </div>
                </a>
              </div>
            </GuidelineAccordion>

            {/* 5. Camera-Ready Submission */}
            <GuidelineAccordion 
              number="05"
              title="Camera-Ready Protocol" 
              isOpen={openSection === 4} 
              onToggle={() => setOpenSection(openSection === 4 ? -1 : 4)}
            >
              <div className="space-y-8 max-w-4xl">
                <p className="text-lg text-slate-400">Post-acceptance instructions for final manuscript preparation and copyright clearance.</p>
                <a href="https://www.nit.ac.in/stepcon/pdf/camera-Ready-opyright-submission.pdf" className="inline-flex items-center gap-6 px-10 py-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/5 transition-all group border-l-4 border-l-accent">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </div>
                    <div>
                        <p className="font-big text-white text-xl tracking-wider uppercase mb-1">Camera-Ready Guide</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">Final Submission Standards (PDF)</p>
                    </div>
                </a>
              </div>
            </GuidelineAccordion>

          </Section>
        </div>

        {/* Paper Submission Teaser - CTA */}
        <Section className="py-24 px-6 bg-background relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 plus-pattern opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 mb-6">
              <p className="text-[10px] text-accent font-semibold tracking-[4px] uppercase">Submission Open</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-big text-white mb-6 uppercase tracking-tighter">
              Ready to <span className="text-accent">Submit?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg font-body">
              Join leading globally indexed researchers. ADSoC 6.0 is technically co-sponsored by IEEE Kolkata Section. Ensure your work shapes Society 6.0.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/cfp" className="px-12 py-5 bg-accent text-white font-black rounded-xl hover:bg-accent/90 transition-all shadow-[0_20px_60px_rgba(227,30,36,0.2)] text-sm tracking-[4px] uppercase">
                SUBMISSION PORTAL
              </Link>
              <Link href="/conference/dates" className="px-12 py-5 glass-dark text-white font-bold rounded-xl border border-white/10 hover:border-white/20 transition-all text-sm tracking-[4px] uppercase">
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
