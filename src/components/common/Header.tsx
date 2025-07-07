/**
 * Header Component
 * Main navigation header with responsive design and scroll effects
 */

import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrollEffect';
import { handleNavClick } from '../../utils/scrollUtils';
import { NAV_ITEMS } from '../../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled(50);

  /**
   * Handles mobile menu item clicks
   * Closes menu and navigates to section
   */
  const handleMobileNavClick = (href: string): void => {
    handleNavClick(href, () => setIsMenuOpen(false));
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
              isScrolled ? 'bg-gradient-to-r from-blue-600 to-emerald-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Sparkles className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              DigitalCraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('#contact')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-blue-500/25' 
                  : 'bg-white text-slate-900 hover:shadow-lg hover:shadow-white/25'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-slate-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200">
            <nav className="py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-3">
                <button 
                  onClick={() => handleMobileNavClick('#contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;