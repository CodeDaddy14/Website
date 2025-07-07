import React from 'react';
import { Code, Palette, Database, Brain, Smartphone, Globe } from 'lucide-react';



const Tech: React.FC = () => {
  const techCategories = [
    {
      category: "Frontend",
      icon: Globe,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      category: "Backend",
      icon: Database,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      technologies: ["Node.js", "PHP", "Laravel", "Python", "MySQL", "PostgreSQL"]
    },
    {
      category: "Design",
      icon: Palette,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "Principle", "InVision", "Framer"]
    },
    {
      category: "AI/ML",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI API"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"]
    },
    {
      category: "Tools",
      icon: Code,
      color: "text-slate-600",
      bgColor: "bg-slate-100",
      technologies: ["Git", "Docker", "AWS", "Vercel", "MongoDB", "Redis"]
    }
  ];

  const capabilities = [
    {
      title: "Full-Stack Expertise",
      description: "From frontend interfaces to backend systems, we handle every layer of your application.",
      percentage: 95
    },
    {
      title: "AI Integration",
      description: "Cutting-edge AI and machine learning solutions integrated seamlessly into your workflow.",
      percentage: 88
    },
    {
      title: "Design Excellence",
      description: "User-centered design that combines aesthetics with functionality for optimal user experience.",
      percentage: 92
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast applications optimized for speed, scalability, and user satisfaction.",
      percentage: 90
    }
  ];

  return (
    <section id="tech" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Tech Stack
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We work with cutting-edge technologies and tools to deliver 
            exceptional results across all our services.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 group border border-slate-700"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="bg-slate-700 rounded-lg px-3 py-2 text-sm text-center group-hover:bg-slate-600 transition-colors duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h3>
            <p className="text-lg text-slate-300">Expertise levels across our core competencies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">{capability.title}</h4>
                  <span className="text-blue-400 font-bold">{capability.percentage}%</span>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">{capability.description}</p>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${capability.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Always Innovating</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We constantly explore new technologies and methodologies to stay at the forefront 
              of digital innovation and deliver the best solutions for our clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Blockchain", "IoT", "AR/VR", "Progressive Web Apps", "GraphQL", "Serverless"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;