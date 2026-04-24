'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';

export default function Committee() {
  const [activeTab, setActiveTab] = useState('Organizing');

  const committees = {
    Organizing: [
      { name: 'Sardar Taranjit Singh', role: 'Chief Patron', org: 'MD, JIS Group' },
      { name: 'Prof. (Dr.) Santanu Kumar Sen', role: 'General Chair', org: 'Principal, GNIT' },
      { name: 'Prof. (Dr.) Sangeeta Bhattacharyya', role: 'Organizing Chair', org: 'GNIT' },
      { name: 'Dr. Sunipa Roy', role: 'Convener', org: 'GNIT' }
    ],
    TPC: [
      { name: 'Prof. (Dr.) Debabrata Das', role: 'TPC Chair', org: 'IIIT Bangalore' },
      { name: 'Prof. (Dr.) Koushik Maharatna', role: 'Member', org: 'University of Southampton' },
      { name: 'Prof. (Dr.) Valentina E. Balas', role: 'Member', org: 'Aurel Vlaicu University' },
      { name: 'Dr. Barnali Kundu', role: 'Secretary', org: 'GNIT' }
    ],
    Advisory: [
      { name: 'Prof. (Dr.) Mike Hinchey', role: 'Advisor', org: 'Lero, Ireland' },
      { name: 'Prof. (Dr.) J.K. Mandal', role: 'Advisor', org: 'University of Kalyani' },
      { name: 'Prof. (Dr.) Siddhartha Bhattacharyya', role: 'Advisor', org: 'ISI Kolkata' },
      { name: 'Dr. Mousmi Ajit Kumar', role: 'Member', org: 'GNIT' }
    ]
  };

  return (
    <Section className="py-24 px-6 bg-deep-navy/80" id="committee">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="mono text-teal-accent mb-4">Leadership & Peer Review</p>
          <h2 className="text-4xl md:text-6xl font-heading mb-10">Committee</h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 border-b border-white/5 pb-4">
            {Object.keys(committees).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 mono transition-all relative ${
                  activeTab === tab 
                    ? 'text-teal-accent' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-[-17px] left-0 right-0 h-1 bg-teal-accent shadow-[0_0_15px_rgba(45,212,191,0.5)]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Committee List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committees[activeTab].map((member, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border-white/5 transition-all hover:bg-teal-accent/5 hover:translate-y-[-2px]">
              <div className="w-10 h-10 rounded-full bg-teal-accent/10 border border-teal-accent/20 flex items-center justify-center mb-6">
                <span className="text-teal-accent font-heading text-lg">{member.name[0]}</span>
              </div>
              <h3 className="text-xl font-heading text-white mb-2">{member.name}</h3>
              <p className="mono text-[10px] text-teal-accent mb-1">{member.role}</p>
              <p className="text-xs text-slate-500 font-bold italic line-clamp-1">{member.org}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

