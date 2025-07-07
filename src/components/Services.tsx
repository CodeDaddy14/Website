import React from 'react';
import { Palette, Code, Brain, Smartphone, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      category: "Design",
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50",
      services: [
        {
          title: "Brand Identity Design",
          description: "Complete brand identity packages including logos, color schemes, and brand guidelines.",
          features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
        },
        {
          title: "UI/UX Design",
          description: "User-centered design for web and mobile applications with focus on usability and conversion.",
          features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
        },
        {
          title: "Graphic Design",
          description: "Print and digital design materials, marketing collateral, and creative assets.",
          features: ["Print Design", "Digital Assets", "Marketing Materials", "Illustrations"]
        }
      ]
    },
    {
      category: "Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50",
      services: [
        {
          title: "Full-Stack Development",
          description: "Custom web applications using modern frameworks and technologies.",
          features: ["React/Next.js", "Node.js", "Database Design", "API Development"]
        },
        {
          title: "CRM Systems",
          description: "Tailored customer relationship management solutions to streamline your business.",
          features: ["Custom CRM", "Workflow Automation", "Integration", "Analytics"]
        },
        {
          title: "PHP & Laravel",
          description: "Robust backend systems and APIs built with PHP and the Laravel framework.",
          features: ["Laravel Framework", "API Development", "Database Optimization", "Security"]
        }
      ]
    },
    {
      category: "AI & Data",
      icon: Brain,
      gradient: "from-purple-500 to-indigo-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-indigo-50",
      services: [
        {
          title: "Machine Learning",
          description: "Custom ML models and AI solutions to automate and optimize your processes.",
          features: ["Custom Models", "Predictive Analytics", "Automation", "AI Integration"]
        },
        {
          title: "Data Engineering",
          description: "Data pipeline design, ETL processes, and analytics infrastructure.",
          features: ["Data Pipelines", "ETL Processes", "Analytics", "Visualization"]
        },
        {
          title: "AI Integration",
          description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
          features: ["API Integration", "Workflow Automation", "Smart Analytics", "AI Consulting"]
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that work beautifully across all devices and screen sizes.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Scalable database design and optimization for high-performance applications.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed and performance optimization for web applications and user experiences.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
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

        {/* Main Services Grid with Flip Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((category, index) => (
            <div 
              key={index}
              className="group h-[500px] perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.gradient} p-8 text-white relative overflow-hidden h-48`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <category.icon className="w-16 h-16 mb-4" />
                      <h3 className="text-3xl font-bold">{category.category}</h3>
                      <p className="text-white/80 mt-2">Hover to explore services</p>
                    </div>
                  </div>

                  {/* Front Content */}
                  <div className="p-8 h-[calc(100%-12rem)] flex flex-col justify-center">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {category.services.length} Specialized Services
                      </h4>
                      <p className="text-slate-600 mb-6">
                        Professional {category.category.toLowerCase()} solutions tailored to your needs
                      </p>
                      <div className="inline-flex items-center text-blue-600 font-medium">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${category.bgPattern} rounded-3xl shadow-lg overflow-hidden`}>
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mr-4`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                    </div>

                    <div className="space-y-4 flex-1">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h4>
                          <p className="text-slate-600 text-sm mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {service.features.map((feature, featureIndex) => (
                              <span 
                                key={featureIndex}
                                className="inline-flex items-center px-2 py-1 bg-white/80 text-slate-700 text-xs rounded-full"
                              >
                                <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${category.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300`}>
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
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
              <div key={index} className="text-center group cursor-pointer">
                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <service.icon className={`w-10 h-10 ${service.color} transition-colors duration-300`} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full -translate-x-12 -translate-y-12"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with our comprehensive digital solutions.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Services;