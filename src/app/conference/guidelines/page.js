"use client";

import { useState, useRef } from 'react';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Link from "next/link";
import UniversalCTA from "@/components/sections/UniversalCTA";

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
              <div className="space-y-10">
                {/* Fee Table */}
                <div className="overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: 'rgba(54,130,142,0.12)' }}>
                        <th className="text-left px-6 py-5 text-white font-big uppercase tracking-wider text-base border-b border-white/10">Participants</th>
                        <th className="px-6 py-5 text-accent font-big uppercase tracking-wider text-base border-b border-white/10 text-center">Academic</th>
                        <th className="px-6 py-5 text-accent font-big uppercase tracking-wider text-base border-b border-white/10 text-center">Industry</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'National Participants (Non-IEEE Member)', academic: '₹ 7,000', industry: '₹ 7,500' },
                        { label: 'National Participants (IEEE Member)',      academic: '₹ 6,500', industry: '₹ 7,000' },
                        { label: 'International Participants',               academic: '$ 125',   industry: '$ 150'   },
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                          style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}
                        >
                          <td className="px-6 py-5 text-slate-200 font-body font-semibold">{row.label}</td>
                          <td className="px-6 py-5 text-center">
                            <span className="mono text-xl font-black text-white">{row.academic}</span>
                          </td>
                          <td className="px-6 py-5 text-center">
                            <span className="mono text-xl font-black text-white">{row.industry}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

                {/* <div className="flex flex-wrap gap-4 mt-8">
                    <a href="https://www.nit.ac.in/stepcon/pdf/conference-template-a4.docx" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 hover:border-primary/40 transition-all text-sm font-bold tracking-[3px] uppercase">WORD TEMPLATE</a>
                    <a href="https://www.nit.ac.in/stepcon/pdf/conference-latex-template_10-17-19.zip" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 hover:border-primary/40 transition-all text-sm font-bold tracking-[3px] uppercase">LATEX TEMPLATE</a>
                </div> */}
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
                    <Link href="https://cmt3.research.microsoft.com/ADSoc2027" target="_blank" className="inline-block px-14 py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 shadow-[0_20px_50px_rgba(54,130,142,0.3)] transition-all tracking-[4px] uppercase text-sm">
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
                <a href="/CFP18052026psd.pdf" target='_blank' className="inline-flex items-center gap-6 px-10 py-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/5 transition-all group border-l-4 border-l-primary">
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
            {/* <GuidelineAccordion 
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
            </GuidelineAccordion> */}

          </Section>
        </div>

        <UniversalCTA />
      </main>

      <Footer />
    </div>
  );
}
