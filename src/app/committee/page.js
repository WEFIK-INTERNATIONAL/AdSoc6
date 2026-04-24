import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const committeeData = [
  {
    category: "Chief Patron",
    featured: true,
    members: [
      { name: "Sardar Taranjit Singh", role: "Managing Director, JIS Group" }
    ]
  },
  {
    category: "Patron",
    featured: true,
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
    featured: true,
    members: [
      { name: "Prof. (Dr.) Swarup Kr. Mitra", role: "Principal, GNIT" }
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
    grid: true,
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
    category: "Advisory Committee",
    grid: true,
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
    grid: true,
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
      { name: "Md Atiqur Rahman Ahad", role: "University of East London, UK, Visiting Professor, Kyushu Institute of Technology, Japan and Aoyama Gekuin University, Japan and University, Malaysia" },
      { name: "Prof. Mrinal Kanti Naskar", role: "Jadavpur University, Kolkata, India" },
      { name: "Prof. Utpal Biswas", role: "Kalyani University, India" },
      { name: "Prof. Aswani Kumar Cherukuri", role: "Vellore Institute of Technology, Velore, India" },
      { name: "Prof. D Jude Hemanth", role: "Karunya Institute of Technology and Sciences, Coimbatore" },
      { name: "Dr Ihtiram Raza Khan", role: "Honorary Adjunct professor Sushant University, Professor Jamia Hamdard Delhi" },
      { name: "Dr Arun kumar Thangavelu", role: "VIT, Vellore, India" },
      { name: "Dr Ishu Sharma", role: "School of Computer Science and Engineering, Lovely Professional University, India" },
      { name: "Dr. Monica Apte", role: "Director, Centre for women studies and Development, Dr. Vishwanath Karad MIT-World Peace University, Pune, Maharashtra, India" },
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
    category: "Industry",
    grid: true,
    members: [
      { name: "Dr. Tanushyam Chattopadhyay", role: "Techno functional head, Computer Vision, Associate General Manager, JV of Adani AI Labs and International Holding Company. India" },
      { name: "Dr. Sujit Kr. Saha", role: "Superintending Engineer, WBSEDCL, India" },
      { name: "Mr. Indranil Roy Chowdhury", role: "Associate Director, CTS, India" },
      { name: "Mr. Abhijan Bhattacharyya", role: "Sr. Scientist in TCS Research, India" },
      { name: "Mr. Aryan Chaudhary", role: "Chief Scientific Advisor, BioTech Sphere Research, India" }
    ]
  },
  {
    category: "Technical Program Committee",
    grid: true,
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
      { name: "Dr. Mukesh Soni", role: "Research Head, Meerut ACM Professional Chapter, Meerut, India, Dr D. Y Patil Vidyapeeth, Pune, Dr. D. Y. Patil School of Science & Technology, Tathawade, Pune" },
      { name: "Prof. Rashmi Singh", role: "Amity Institute of Applied Sciences, Noida, Uttar Pradesh" },
      { name: "Dr. Anurina Tarafdar", role: "Heritage Institute of Technology, Kolkata" },
      { name: "Dr Ishu Sharma", role: "School of Computer Science and Engineering, Lovely Professional University" },
      { name: "Dr. Monica Apte", role: "Director, Centre for women studies and Development, Dr. Vishwanath Karad MIT-World Peace University, Pune, Maharashtra, India" },
      { name: "Prof. (Dr.) Anil Kumar Bag", role: "Heritage Institute of Technology, Kolkata, India" },
      { name: "Dr Pronaya Bhattacharya", role: "Amity School of Engineering and Technology, India" },
      { name: "Dr Priya Jadhav", role: "Symbiosis institute of technology, India" },
      { name: "Prof. Wenwu Wang", role: "University of Surrey, United Kingdom" },
      { name: "Dr. Soumay Shankar Basu", role: "Sheffield Hallam University, United Kingdom" },
      { name: "Prof. Arindam Biswas", role: "Kazi Nazrul University, Kolkata, India" },
      { name: "Dr. Dipayan Guha", role: "MNNIT Alahabad, Uttarpradesh" },
      { name: "Dr. Sandip Chanda", role: "Ganikhan Chaudhury Inst. Engg. & Tech, WestBengal" },
      { name: "Prof.(Dr.) Manjula Sri R", role: "VNR Vignana Jyothi Inst. Of Tech, Telangana" },
      { name: "Dr. Chittajit Sarkar", role: "Asansol Engg Coleege, WestBengal" },
      { name: "Dr. Rudra Pratap Singh", role: "Asansol Engg Coleege, WestBengal" },
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
  }
];

export const metadata = {
  title: "Committee | ADSoC 6.0",
  description: "Organizing and Advisory Committee of the International Conference on AI-Driven Smart Healthcare for Society 6.0",
};

export default function CommitteePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Nav />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Header Section */}
        <Section className="relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <p className="mono text-primary mb-4 font-bold tracking-[3px] uppercase">The Backbone</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-tight mb-6">
              Our <span className="text-gradient-primary">Committee.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-body leading-relaxed">
              Meet the visionary minds, esteemed advisors, and dedicated organizers driving ADSoC 6.0 towards shaping the future of AI in Healthcare.
            </p>
          </div>
        </Section>

        {/* Dynamic Committee Sections */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-24">
          {committeeData.map((section, idx) => (
            <div key={idx} className="relative">
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-10 pb-4 border-b border-white/10 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mono text-sm font-bold border border-primary/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {section.category}
              </h2>
              
              <div className={`grid gap-6 ${section.grid || section.members.length > 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {section.members.map((member, mIdx) => (
                  <div 
                    key={mIdx} 
                    className={`
                      group relative rounded-3xl overflow-hidden glass-dark border border-white/5 
                      p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50
                      ${section.featured ? 'bg-background/[0.03] shadow-[0_0_40px_rgba(0,0,0,0.5)]' : 'bg-transparent'}
                    `}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Typographic Avatar / Initials */}
                    <div className="w-14 h-14 rounded-2xl bg-[#0a0f1d] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <span className="font-heading text-xl text-white group-hover:text-primary transition-colors">
                        {member.name.split(' ').map(n => n[0]?.replace(/[^A-Za-z]/g, '')).filter(Boolean).slice(0, 2).join('')}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading text-white mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-body text-slate-400 leading-relaxed font-medium">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

