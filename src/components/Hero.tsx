import React from 'react';
import { ArrowRight, Sparkles, Code, Palette, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Code className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Palette className="w-6 h-6 text-emerald-400" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
        <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Brain className="w-7 h-7 text-purple-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            {/* <span className="text-blue-300 text-sm font-medium">Digital Innovation Studio</span> */}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            We Create
            <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Digital Magic
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            A boutique team of 4 creative minds specializing in branding, UI/UX design, 
            full-stack development, and cutting-edge AI solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300">
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              Meet the Team
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4</div>
              <div className="text-slate-400">Expert Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-slate-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;