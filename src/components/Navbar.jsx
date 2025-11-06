import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Destinations', path: '/destinations' },
    { name: 'Tours & Safaris', path: '/tours' },
    { name: 'Short/Day Trips', path: '/day-trips' },
    { name: 'Car Hire', path: '/car-hire' },
    { name: 'Conservation', path: '/conservation' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-neutral-900 shadow-lg' : 'bg-neutral-900 bg-opacity-95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Mlambe Safaris Logo" 
              className="h-16 md:h-20 w-auto"
            />
            <span className="text-white font-bold text-xl">MLAMBE SAFARIS</span>
          </Link>
          
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-amber-500 transition-colors ${
                  location.pathname === link.path ? 'text-amber-500 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link 
          to="/booking"
          className="hidden lg:block bg-amber-500 text-neutral-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition-colors"
        >
          Book Now
        </Link>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-t border-neutral-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-white hover:text-amber-500 py-2 ${
                  location.pathname === link.path ? 'text-amber-500 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/booking"
              className="w-full bg-amber-500 text-neutral-900 px-6 py-2 rounded-full font-semibold mt-4 block text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;