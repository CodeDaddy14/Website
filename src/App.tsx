import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import About3D from './components/About3D';
import Services from './components/Services';
import Portfolio3D from './components/Portfolio3D';
import Tech from './components/Tech';
import Testimonials from './components/Testimonials';
import InteractiveContact from './components/InteractiveContact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Mouse tracking for cursor effects
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero3D />
        </section>
        <About3D />
        <Services />
        <Portfolio3D />
        <Tech />
        <Testimonials />
        <InteractiveContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;