"use client";

import { useRef, useState } from 'react';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Link from "next/link";

const DateCard = ({ title, date, status, delay = 0 }) => {
  const isMainEvent = status === "Main Event";
  
  return (
    <div className="relative group">
      <div className={`glass-dark rounded-3xl p-8 md:p-10 border border-white/5 group-hover:border-primary/30 transition-all duration-700 relative overflow-hidden ${isMainEvent ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${isMainEvent ? 'bg-primary text-white border-primary' : 'bg-primary/10 text-primary border-primary/20'}`}>
                    {status}
                </span>
                <div className="h-px w-8 bg-white/10 group-hover:w-12 transition-all duration-500"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading text-white group-hover:text-primary transition-colors duration-300">
                {title}
            </h3>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <p className="text-3xl md:text-4xl font-heading text-gradient-primary leading-none mb-2">
                {date}
            </p>
            <div className="flex items-center gap-2 text-slate-500 mono text-[10px] uppercase tracking-widest">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                23:59 IST
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DatesPage() {
  const heroRef = useRef(null);

  const importantDates = [
    { title: "Abstract Submission", date: "Oct 30, 2025", status: "Open" },
    { title: "Full Paper Submission", date: "Nov 15, 2025", status: "Upcoming" },
    { title: "Notification of Acceptance", date: "Dec 15, 2025", status: "Upcoming" },
    { title: "Camera Ready Paper", date: "Jan 10, 2026", status: "Upcoming" },
    { title: "Conference Registration", date: "Jan 15, 2026", status: "Upcoming" },
    { title: "Conference Dates", date: "Feb 20-22, 2026", status: "Main Event" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden text-foreground">
      <Nav />
      
      <main className="flex-1 relative z-10">
        {/* Cinematic Hero Section */}
        <div 
          ref={heroRef}
          className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#030508]"
        >
          {/* Base Cinematic Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(54,130,142,0.3)_0%,transparent_70%)] pointer-events-none"></div>
          
          {/* Interactive Dot Grid Background */}
          <InteractiveDotGrid />
          
          {/* Gradient Overlay for Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none"></div>

          {/* Centered Typography */}
          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            <p className="mono text-primary text-sm md:text-base mb-6 tracking-[8px] uppercase font-bold opacity-90">
              Conference Roadmap
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white leading-none tracking-tighter uppercase font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              Dates
            </h1>
            
            {/* Visual Connector */}
            <div className="relative flex items-center justify-center gap-6 mt-12">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary animate-ping opacity-75"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(54,130,142,0.8)]"></div>
                </div>
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="container mx-auto px-6 max-w-5xl py-32 relative">
          <div className="space-y-8">
            {importantDates.map((d, idx) => (
              <Section key={idx} className="relative">
                <DateCard {...d} delay={idx * 0.1} />
              </Section>
            ))}
          </div>

          {/* Side Decorative Text */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none opacity-[0.03] hidden xl:block">
            <p className="text-[120px] font-black uppercase tracking-[20px] whitespace-nowrap text-white">
                CHRONOLOGY
            </p>
          </div>
        </div>

        {/* Paper Submission Teaser - CTA */}
        <Section className="py-24 px-6 bg-background relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 plus-pattern opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 mb-6">
              <p className="text-xs text-accent font-semibold tracking-widest uppercase">Call for Papers</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6">
              Ready to <span className="text-accent">Submit?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg font-body">
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
