import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@digitalagency.com",
      link: "mailto:hello@digitalagency.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Street, Tech City, TC 12345",
      link: "#"
    }
  ];

  const services = [
    "Brand Identity Design",
    "UI/UX Design", 
    "Web Development",
    "Mobile App Development",
    "CRM Development",
    "AI/ML Solutions",
    "Data Engineering",
    "Consulting",
    "Other"
  ];

  const budgetRanges = [
    "Under $5K",
    "$5K - $15K",
    "$15K - $30K",
    "$30K - $50K",
    "$50K+",
    "Let's Discuss"
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Start Your Project</h3>
              <p className="text-slate-300">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-200 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-200 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-200 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{info.title}</div>
                      <div className="text-slate-300">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-center">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Quick Chat</h4>
                <p className="text-emerald-100 text-sm mb-4">Have a quick question? Let's chat!</p>
                <button className="bg-white text-emerald-600 font-semibold py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300">
                  Start Chat
                </button>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-center">
                <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Schedule Call</h4>
                <p className="text-purple-100 text-sm mb-4">Book a free 30-minute consultation</p>
                <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300">
                  Book Call
                </button>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">&lt; 24hrs</div>
              <div className="text-slate-300">Average Response Time</div>
              <div className="text-sm text-slate-400 mt-2">We typically respond within a few hours</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who've transformed their business with our digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:shadow-2xl transition-all duration-300">
                View Our Portfolio
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300">
                Download Company Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;