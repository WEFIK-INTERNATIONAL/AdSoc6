"use client";

import { useRef, useState } from 'react';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";
import Link from "next/link";

// Custom Chevron Component
const ChevronIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="group-hover:translate-x-1 transition-transform"
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const committeeData = [
  // ... (data remains the same)
  {
    category: "Chief Patron",
    members: [
      { name: "Sardar Taranjit Singh", role: "Managing Director, JIS Group" }
    ]
  },
  {
    category: "Patron",
    members: [
      { name: "Sardar Haranjit Singh", role: "Joint MD, JIS Group" },
      { name: "Sardar Amrik Singh", role: "Deputy MD, JIS Group" },
      { name: "Ms. Manpreet Kaur", role: "CEO, JIS Group" },
      { name: "Sardar Simarpreet Singh", role: "Director, JIS Group" },
      { name: "Ms. Jaspreet Kaur", role: "Director, JIS Group" },
      { name: "Sardar Harjot Singh", role: "Director, JIS Group" },
      { name: "Sardar Amanjot Singh", role: "Director, JIS Group" },
      { name: "Sardar Anmol Singh Narula", role: "Director, JIS Group" }
    ]
  },
  {
    category: "General Chair",
    members: [
      { name: "Prof. (Dr.) Swarup Kr. Mitra", role: "Principal, GNIT" }
    ]
  },
  {
    category: "Advisory Committee",
    members: [
      { name: "Prof. Suparna Kar Chowdhury", role: "Chairperson, IEEE Kolkata Section" },
      { name: "Dr. Atanu Kundu", role: "Vice-Chair, IEEE Kolkata Section" },
      { name: "Dr. Tridibesh Nag", role: "Secretary, IEEE Kolkata Section" },
      { name: "Prof. Mita Nasipuri", role: "Ex-Professor, Jadavpur University" },
      { name: "Prof. Atal Chaudhuri", role: "Ex-Professor, Jadavpur University" },
      { name: "Prof. Jyotsna Kumar Mondal", role: "Senior Member IEEE, Professor, University of Kalyani" },
      { name: "Prof. Amlan Chakrabarti", role: "Senior Member IEEE, Director, AKCSIT, Professor, University of Calcutta" },
      { name: "Prof. Nabendu Chaki", role: "Senior Member IEEE, Professor, University of Calcutta" },
      { name: "Prof. Sarmistha Neogy", role: "Senior Member IEEE, Professor, Jadavpur University" },
      { name: "Prof. Nibaran Das", role: "Chair, IEEE Computer Society, IEEE Kolkata Section, Professor, Jadavpur University" },
      { name: "Prof. Ram Sarkar", role: "Senior Member IEEE, Professor, Jadavpur University" }
    ]
  },
  {
    category: "Advisory Body",
    members: [
      { name: "Prof. Alex Khang", role: "Global Research Institute of Technology and Engineering, North Carolina, USA" },
      { name: "Prof.(Dr.) Sheldon Williamson", role: "Ontario Tech. University, Canada" },
      { name: "Prof. Wenwu Wang", role: "University of Surrey, United Kingdom" },
      { name: "Dr. Soumay Shankar Basu", role: "Sheffield Hallam University, United Kingdom" },
      { name: "Dr. Khalid Elgazzar", role: "Ontario Tech University, Canada" },
      { name: "Prof. Carolyn Mc Gregor", role: "Ontario Tech University, Canada" },
      { name: "Professor Dr. Sardar M. N. Islam (Naz)", role: "Victoria University, Australia" },
      { name: "Prof Zhiyuan Thomas Tan", role: "Edinburgh Napier University, Scotland, UK" },
      { name: "Dr Santanu Pal", role: "Senior Scientist, Wipro Lab45, R&D London, United Kingdom" },
      { name: "Prof. Mufti Mahmood", role: "Nottingham Trent University (NTU). UK London" },
      { name: "Prof. Celestine Iwendi", role: "The University of Bolton, UK" },
      { name: "Prof. Cristina Rubio", role: "University of Seville, Spain" },
      { name: "Prof. Belén Vega", role: "University of Seville, Spain" },
      { name: "Prof. Jorge García", role: "University of Seville, Spain" },
      { name: "Dr. Megha Bhushan", role: "DIT University, Dehradun, India & University of Seville, Spain" },
      { name: "Dr. Debadrita Panda", role: "Luleå University of Technology, Switzerland" },
      { name: "Dr. Korhan Cengiz", role: "Faculty of Organization and Informatics University of Zagreb, Croatia" },
      { name: "Prof. Ahmed J. Obaid", role: "University of Kufa, Iraq" },
      { name: "Prof Lalit Garg", role: "University of Malta, Malta" },
      { name: "Prof(Dr.) Mohammad Tabrez Quasim", role: "College of Computing and Information Technology, University of Bisha, Saudi Arabia" },
      { name: "Prof.(Dr.) Jay Gavind Singh", role: "Asian Inst. Of Tech., Bangkok, Thailand" },
      { name: "Dr. J. Joshua Thomas", role: "KDU Penang Universiy College, Malaysia" },
      { name: "Md Atiqur Rahman Ahad", role: "University of East London, UK" },
      { name: "Prof. Mrinal Kanti Naskar", role: "Jadavpur University, Kolkata, India" },
      { name: "Prof. Utpal Biswas", role: "Kalyani University, India" },
      { name: "Prof. Aswani Kumar Cherukuri", role: "Vellore Institute of Technology, Velore, India" },
      { name: "Prof. D Jude Hemanth", role: "Karunya Institute of Technology and Sciences, Coimbatore" },
      { name: "Dr Ihtiram Raza Khan", role: "Honorary Adjunct professor Sushant University, Professor Jamia Hamdard Delhi" },
      { name: "Dr Arun kumar Thangavelu", role: "VIT, Vellore, India" },
      { name: "Dr Ishu Sharma", role: "School of Computer Science and Engineering, Lovely Professional University, India" },
      { name: "Dr. Monica Apte", role: "Director, Centre for women studies and Development, Dr. Vishwanath Karad MIT-World Peace University, Pune" },
      { name: "Dr Shalli Rani", role: "Chitkara University, Punjab, India" },
      { name: "Prof.(Dr.) Asim Datta", role: "Tezpur University, Assam, India" },
      { name: "Prof.(Dr.) Manjula Sri R", role: "VNR Vignana Jyothi Inst. Of Tech, Telangana, India" },
      { name: "Prof. (Dr.) Debashis Chatterjee", role: "Jadavpur University, India" },
      { name: "Prof. (Dr.) Kanika Das Bhattacharyya", role: "IIEST , Shibpur, India" },
      { name: "Dr. Abhinandan De", role: "IIEST, Shibpur, India" },
      { name: "Prof.(Dr.) Priyanath Das", role: "NIT Agartala, India" },
      { name: "Prof.(Dr.) Bharat Singh Rajpurohit", role: "IIT, Jodhpur, India" },
      { name: "Dr. Biman Kr. Roy", role: "NIT Durgapur, India" }
    ]
  },
  {
    category: "Technical Program Chair",
    members: [
      { name: "Dr. Suman Bhattacharya", role: "Professor, CSE Dept., GNIT" }
    ]
  },
  {
    category: "Organizing Chair",
    members: [
      { name: "Dr. Mahamuda Sultana", role: "Professor, CSE Dept., GNIT" }
    ]
  },
  {
    category: "Technical Program Committee",
    members: [
      { name: "Prof. Sayan Chatterjee", role: "Jadavpur University, Kolkata, India" },
      { name: "Dr. Reema Ajmera", role: "Professor, Global Institute of Technology, West Bengal, India" },
      { name: "Dr. Akanksha Upadhyaya", role: "JIMS Delhi" },
      { name: "Dr Sonali Vyas", role: "Associate Professor, UPES University Dehradun" },
      { name: "Prof. Aswani Kumar Cherukuri", role: "Professor, Vellore Institute of Technology, Velore, India" },
      { name: "Prof. Alex Khang", role: "Global Research Institute of Technology and Engineering, North Carolina, USA" },
      { name: "Dr Ihtiram Raza Khan", role: "Honorary Adjunct professor Sushant University, Professor Jamia Hamdard Delhi, India" },
      { name: "Dr. Saurabh Agrawal", role: "Assistant Professor, CSE, VIT Vellore, India" },
      { name: "Dr. Anand Bihari", role: "Assistant Professor, CSE, VIT Vellore, India" },
      { name: "Dr. Debashreet Das", role: "Assistant Professor, CSE, GIETU, Bhubaneswar" },
      { name: "Dr. S Kranthi Kumar", role: "CBIT, Hyderabad" },
      { name: "Dr Tusharkanta Samal", role: "DRIEMS University, CSE" },
      { name: "Prof. Mufti Mahmood", role: "Nottingham Trent University (NTU), UK, London" },
      { name: "Dr. Subhash kumar Yadav", role: "Central University of Jharkhand, India" },
      { name: "Dr. Garima Srivastava", role: "Mangalmay Institute of Engineering and Technology, Delhi" },
      { name: "Dr. Sutirtha Kumar Guha", role: "Meghnad Saha Institute of Technology, Westbengal" },
      { name: "Dr. Megha Bhushan", role: "DIT University, Dehradun, India & University of Seville, Spain" },
      { name: "Dr. Debadrita Panda", role: "Switzerland" },
      { name: "Dr. Arun kumar Thangavelu", role: "VIT, Vellore" },
      { name: "Dr. Abhijit Kumar", role: "School of Computer Science, UPES University Dehradun" },
      { name: "Dr. Mukesh Soni", role: "Research Head, Meerut ACM Professional Chapter, Meerut, India" },
      { name: "Prof. Rashmi Singh", role: "Amity Institute of Applied Sciences, Noida, Uttar Pradesh" },
      { name: "Dr. Anurina Tarafdar", role: "Heritage Institute of Technology, Kolkata" },
      { name: "Dr Ishu Sharma", role: "School of Computer Science and Engineering, Lovely Professional University" },
      { name: "Dr. Monica Apte", role: "Director, Centre for women studies and Development, Dr. Vishwanath Karad MIT-World Peace University" },
      { name: "Prof. (Dr.) Anil Kumar Bag", role: "Heritage Institute of Technology, Kolkata, India" },
      { name: "Dr Pronaya Bhattacharya", role: "Amity School of Engineering and Technology, India" },
      { name: "Dr Priya Jadhav", role: "Symbiosis institute of technology, India" },
      { name: "Prof. Wenwu Wang", role: "University of Surrey, United Kingdom" },
      { name: "Dr. Soumay Shankar Basu", role: "Sheffield Hallam University, United Kingdom" },
      { name: "Prof. Arindam Biswas", role: "Kazi Nazrul University, Kolkata, India" },
      { name: "Dr. Dipayan Guha", role: "MNNIT Alahabad, Uttarpradesh" },
      { name: "Dr. Sandip Chanda", role: "Ganikhan Chaudhury Inst. Engg. & Tech, WestBengal" },
      { name: "Prof.(Dr.) Manjula Sri R", role: "VNR Vignana Jyothi Inst. Of Tech, Telangana" },
      { name: "Dr. Chittajit Sarkar", role: "Asansol Engg College, WestBengal" },
      { name: "Dr. Rudra Pratap Singh", role: "Asansol Engg College, WestBengal" },
      { name: "Dr. Rumpa Saha", role: "Aliah University, WestBengal" },
      { name: "Dr. Debdeep Saha", role: "Manipal Institute of Technology. Karnataka" },
      { name: "Dr. Dipu Sakar", role: "NIT Nagaland" },
      { name: "Dr. Soumesh Chatterjee", role: "Nirma University, India" },
      { name: "Dr. Mithu Sarkar", role: "Vellore Inst of Tech., Chennai" },
      { name: "Prof.(Dr.) Jay Gavind Singh", role: "Asian Inst. Of Tech., Bangkok, Thailand" },
      { name: "Prof.(Dr.) Sheldon Williamson", role: "Ontario Tech. University, Canada" },
      { name: "Prof. (Dr.) Debashis Chatterjee", role: "Jadavpur University, India" },
      { name: "Prof. (Dr.) Kanika Das Bhattacharyya", role: "IIEST , Shibpur, India" },
      { name: "Dr. Abhinanda De", role: "IIEST, Shibpur, India" },
      { name: "Dr. Kaushik Das Sharma", role: "Calcutta University, India" },
      { name: "Dr. Biman Kr. Roy", role: "NIT Durgapur, India" },
      { name: "Prof.(Dr.) Priyanath Das", role: "NIT Agartala, India" },
      { name: "Prof.(Dr.) Shib Sankar Saha", role: "Kalyani Govt. Engg. College, India" },
      { name: "Prof.(Dr.) Bharat Singh Rajpurohit", role: "IIT, Jodhpur, India" },
      { name: "Dr. Soumya Sen", role: "Calcutta University, Kolkata, India" },
      { name: "Professor Dr. Sardar M. N. Islam (Naz)", role: "Victoria University, Australia" },
      { name: "Prof. Ram Sarkar", role: "Professor, Jadavpur University" },
      { name: "Prof. Nibaran Das", role: "Jadavpur University, Kolkata, India" },
      { name: "Prof. Nabendu Chaki", role: "Calcutta University, Kolkata, India" },
      { name: "Prof. Sankhayan Choudhury", role: "Calcutta University, Kolkata, India" },
      { name: "Prof. Somnath Mukhopadhyay", role: "Assam University, India" }
    ]
  },
  {
    category: "Publication Chair",
    members: [
      { name: "Prof. (Dr.) Debashis De", role: "Professor, MAKAUT, CSE" },
      { name: "Prof. (Dr.) Angsuman Sarkar", role: "Professor, ECE Dept. Kalyani Government Engineering College" },
      { name: "Mr. Sourish Mitra", role: "Assistant Professor, CSE Dept., GNIT" }
    ]
  },
  {
    category: "Publicity Chair",
    members: [
      { name: "Dr. Ananjan Maiti", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Dr. Kamarujjaman", role: "Assistant Professor, CSE Dept., GNIT" }
    ]
  },
  {
    category: "Publicity Co-Chair",
    members: [
      { name: "Mr. Dipankar Basu", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Ms. Shweta Banerjee", role: "Assistant Professor, CSE Dept., GNIT" }
    ]
  },
  {
    category: "Registration Chair",
    members: [
      { name: "Dr. Srabani Biswas", role: "Associate Professor, CSE Dept., GNIT" },
      { name: "Dr. Tinku Adhikari", role: "Assistant Professor, CSE Dept., GNIT" }
    ]
  },
  {
    category: "Registration Co-Chair",
    members: [
      { name: "Ms. Paramita Sarkar", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Ms. Priyanka Chakraborty", role: "CSE Dept., GNIT" }
    ]
  },
  {
    category: "Hospitality Chair",
    members: [
      { name: "Dr. Ipsita Saha", role: "Associate Professor, CSE Dept., GNIT" },
      { name: "Ms. Sayani Chandra", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Ms. Bidyutmala Saha", role: "Assistant Professor, CSE Dept., GNIT" }
    ]
  },
  {
    category: "Web Design and Graphics Chair",
    members: [
      { name: "Mr. Sourish Mitra", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Mr. Sk. Sahinur Islam", role: "Quality Assurance Engineer, ARC Document Solution" }
    ]
  },
  {
    category: "Web Design and Graphics Co-Chair",
    members: [
      { name: "Mr. Moloy Dhar", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Mr. Sumit Kumar Banerjee", role: "CSE Dept., GNIT" }
    ]
  },
  {
    category: "Finance Chair",
    members: [
      { name: "Dr. Adhish Chakraborty", role: "Registrar (Acting), GNIT" },
      { name: "Dr. Sayan Nath", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Mr. Kallol Pal", role: "Accountant, GNIT" }
    ]
  },
  {
    category: "Organizing Committee",
    members: [
      { name: "Dr. Mandira Banik", role: "CSE Dept., GNIT" },
      { name: "Mr. Nilanjana Adhikari", role: "Assistant Professor, EE Dept., GNIT" },
      { name: "Ms. Pallabi Das", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Mr. Nirupam Saha", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Mr. Md. Tausif", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Ms. Priyanka Ghosh", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Mr. Brijesh Kumar Choudhury", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Ms. Pramita Chakraborty", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Ms. Debapriya Sengupta", role: "Assistant Professor, CSE Dept., GNIT" },
      { name: "Ms. Sutapa Sarkar", role: "JTA, CSE Dept., GNIT" },
      { name: "Mr. Krishnendu Chowdhury", role: "JTA, CSE Dept., GNIT" },
      { name: "Mr. Suman Pandit", role: "JTA, CSE Dept., GNIT" },
      { name: "Mr. Manash Pal", role: "JTA, CSE Dept., GNIT" },
      { name: "Ms. Mou Ghosh", role: "JTA, CSE Dept., GNIT" }
    ]
  },
  {
    category: "Industry",
    members: [
      { name: "Dr. Tanushyam Chattopadhyay", role: "Techno functional head, Computer Vision, Associate General Manager, JV of Adani AI Labs and International Holding Company, India" },
      { name: "Dr. Sujit Kr. Saha", role: "Superintending Engineer, WBSEDCL, India" },
      { name: "Mr. Indranil Roy Chowdhury", role: "Associate Director, CTS, India" },
      { name: "Mr. Abhijan Bhattacharyya", role: "Sr. Scientist in TCS Research, India" },
      { name: "Mr. Aryan Chaudhary", role: "Chief Scientific Advisor, BioTech Sphere Research, India" }
    ]
  }
];

const CommitteeSection = ({ section, isOpen, onToggle }) => {
  return (
    <div className="relative border-b border-white/5 last:border-none">
      <button 
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between group cursor-pointer text-left"
      >
        <div className="flex items-center gap-4 md:gap-8 min-w-0 flex-1">
          <span className={`text-primary transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            <ChevronIcon />
          </span>
          <h2 className={`text-lg md:text-xl font-heading tracking-[2px] md:tracking-[4px] uppercase font-bold transition-colors duration-300 break-words line-clamp-2 md:line-clamp-none ${isOpen ? 'text-primary' : 'text-white/60 group-hover:text-white'}`}>
            {section.category}
          </h2>
        </div>
        
        <div className="flex items-center gap-4 ml-4">
          <span className="mono text-[10px] text-white/20 uppercase tracking-widest hidden md:block">
            {section.members.length} Members
          </span>
          <div className={`w-8 h-[1px] bg-primary/30 transition-all duration-500 ${isOpen ? 'w-16' : 'w-8'}`}></div>
        </div>
      </button>

      <div 
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-12' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 pl-4 md:pl-16 pb-8 border-l border-primary/20 ml-2 md:ml-2.5">
            {section.members.map((member, mIdx) => (
              <div key={mIdx} className="flex items-start gap-5 group py-2">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0"></div>
                <div className="flex flex-col min-w-0">
                  <span className="text-base md:text-lg font-heading text-white group-hover:text-primary transition-colors tracking-wide break-words">
                    {member.name}
                  </span>
                  <span className="text-xs md:text-sm font-body text-slate-400 font-medium italic opacity-70 group-hover:opacity-100 transition-opacity break-words">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CommitteePage() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [openSection, setOpenSection] = useState(0); // Default open first section

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <Nav />
      <main className="flex-1 relative z-10">
        {/* Interactive Dot Grid Hero */}
        <div 
          ref={heroRef}
          onMouseMove={handleMouseMove}
          className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center overflow-hidden bg-[#030508]"
        >
          {/* Base Cinematic Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(54,130,142,0.35)_0%,transparent_70%)] pointer-events-none"></div>
          
          {/* Dynamic Interactive Dot Grid */}
          <InteractiveDotGrid mousePos={mousePos} />
          
          {/* Gradient Overlay for Fade to Content */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none"></div>

          {/* Centered Content */}
          <div className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none">
            <p className="mono text-primary text-sm md:text-base mb-6 tracking-[8px] uppercase font-bold opacity-90 reveal">
              Conference Organization
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white leading-none tracking-tighter uppercase font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              Committee
            </h1>
            
            {/* Neural Hub Visualization */}
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

        {/* Committee Sections - Individual Reveal Sections */}
        <div className="container mx-auto px-6 max-w-7xl py-32 relative space-y-0">
          {committeeData.map((section, idx) => (
            <Section key={idx}>
              <CommitteeSection 
                section={section} 
                isOpen={openSection === idx}
                onToggle={() => setOpenSection(openSection === idx ? -1 : idx)}
              />
            </Section>
          ))}
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

