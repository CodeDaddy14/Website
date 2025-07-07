import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Suvam Jaiswal",
      role: "Branding & Graphic Design",
      bio: "Creative visionary with a passion for building memorable brand identities and stunning visual experiences.",
      skills: ["Brand Identity", "Logo Design", "Print Design", "Creative Direction"],
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Chandraprakash Pandey",
      role: "UI/UX Design",
      bio: "User-centered designer crafting intuitive interfaces and seamless digital experiences that users love.",
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sumit Jaiswal",
      role: "CRM Development & PHP",
      bio: "Full-stack developer specializing in robust backend systems and custom CRM solutions for business growth.",
      skills: ["PHP", "MySQL", "Laravel", "CRM Systems"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Aditya Gupta",
      role: "Data Engineering & AI/ML",
      bio: "AI enthusiast building intelligent systems and data-driven solutions for the future of technology.",
      skills: ["Machine Learning", "Data Analysis", "Python", "AI Integration"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every pixel, every line of code, every decision is made with purpose and attention to detail."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends, embracing new technologies to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Our diverse skills complement each other, creating synergy that amplifies our impact."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We don't just meet expectations – we exceed them with every project we touch."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Our Creative Minds
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Four passionate professionals united by a shared vision: creating digital experiences 
            that inspire, engage, and deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className={`h-32 bg-gradient-to-br ${member.color} rounded-t-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-slate-500 mb-3">{member.role}</p>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h3>
            <p className="text-lg text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;