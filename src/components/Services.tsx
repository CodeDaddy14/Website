import React from 'react';
import { Palette, Code, Brain, Smartphone, Database, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      category: "Design",
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      services: [
        {
          title: "Brand Identity Design",
          description: "Complete brand identity packages including logos, color schemes, and brand guidelines."
        },
        {
          title: "UI/UX Design",
          description: "User-centered design for web and mobile applications with focus on usability and conversion."
        },
        {
          title: "Graphic Design",
          description: "Print and digital design materials, marketing collateral, and creative assets."
        }
      ]
    },
    {
      category: "Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      services: [
        {
          title: "Full-Stack Development",
          description: "Custom web applications using modern frameworks and technologies."
        },
        {
          title: "CRM Systems",
          description: "Tailored customer relationship management solutions to streamline your business."
        },
        {
          title: "PHP & Laravel",
          description: "Robust backend systems and APIs built with PHP and the Laravel framework."
        }
      ]
    },
    {
      category: "AI & Data",
      icon: Brain,
      gradient: "from-purple-500 to-indigo-500",
      services: [
        {
          title: "Machine Learning",
          description: "Custom ML models and AI solutions to automate and optimize your processes."
        },
        {
          title: "Data Engineering",
          description: "Data pipeline design, ETL processes, and analytics infrastructure."
        },
        {
          title: "AI Integration",
          description: "Seamlessly integrate AI capabilities into your existing systems and workflows."
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that work beautifully across all devices and screen sizes."
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Scalable database design and optimization for high-performance applications."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed and performance optimization for web applications and user experiences."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive digital solutions 
            that drive growth and create lasting impact.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <category.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
              </div>

              {/* Services List */}
              <div className="p-8">
                <div className="space-y-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Additional Capabilities</h3>
            <p className="text-lg text-slate-600">Extra services that complement our core offerings</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-emerald-100 transition-all duration-300">
                  <service.icon className="w-10 h-10 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can bring your vision to life with our comprehensive digital solutions.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;