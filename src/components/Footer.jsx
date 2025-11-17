import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Mlambe Safaris Logo" 
                className="h-14 md:h-16 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="font-bold text-lg">MLAMBE SAFARIS</span>
            </div>
            <p className="text-neutral-400 text-sm mb-6">
              Your trusted partner for unforgettable Southern African adventures.
            </p>
            
            {/* Social Media Icons with Brand Colors */}
            <div className="flex space-x-3">
              {/* Facebook */}
              <a 
                href="http://www.facebook.com/mlambesafaris" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Facebook"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-[#1877F2] transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="http://instagram.com/mlambesadventuresafari" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Instagram"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#833AB4] group-hover:via-[#FD1D1D] group-hover:to-[#FCB045] transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>

              {/* Twitter/X */}
              <a 
                href="https://twitter.com/mlambesafaris" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Twitter"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-black transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/265881492883" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="WhatsApp"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-amber-500 transition-colors">Destinations</Link></li>
              <li><Link to="/tours" className="hover:text-amber-500 transition-colors">Tours & Safaris</Link></li>
              <li><Link to="/day-trips" className="hover:text-amber-500 transition-colors">Day Trips</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-amber-500">Services</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><Link to="/car-hire" className="hover:text-amber-500 transition-colors">Car Hire</Link></li>
              <li><Link to="/conservation" className="hover:text-amber-500 transition-colors">Conservation</Link></li>
              <li><Link to="/booking" className="hover:text-amber-500 transition-colors">Custom Tours</Link></li>
              <li><Link to="/booking" className="hover:text-amber-500 transition-colors">Group Travel</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-amber-500">Contact Us</h3>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-amber-500" />
                <span>P.O.BOX 1375, Lilongwe 3, Malawi</span>
              </li>

              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-amber-500" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@mlambesafaris.com" className="hover:text-amber-500 transition-colors">
                    info@mlambesafaris.com
                  </a>
                  <a href="mailto:mlambeadventuresafaris@gmail.com" className="hover:text-amber-500 transition-colors">
                    mlambeadventuresafaris@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-amber-500" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+265881492883" className="hover:text-amber-500 transition-colors">
                    +265 881 492 883
                  </a>
                  <a href="tel:+265999113389" className="hover:text-amber-500 transition-colors">
                    +265 999 113 389
                  </a>
                </div>
              </li>

              <li>
                <Link to="/contact" className="text-amber-500 hover:text-amber-400 transition-colors font-semibold inline-flex items-center">
                  Contact Form →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 mt-8">
  <div className="flex flex-col sm:flex-row justify-between items-center text-neutral-400 text-sm">
    <p className="mb-4 sm:mb-0">
      © 2025 Mlambe Adventure Safaris. All rights reserved. | Developed by{' '}
      <a 
        href="https://shakesolutions.net" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-amber-500 hover:text-amber-400 transition-colors font-semibold"
      >
        ShakeSolutions
      </a>
    </p>
    <div className="flex space-x-4">
      <Link to="/contact" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
      <span>|</span>
      <Link to="/contact" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;