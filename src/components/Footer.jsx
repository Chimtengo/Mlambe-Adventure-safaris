import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Facebook, Instagram, Twitter, MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Mlambe Safaris Logo" 
                className="h-14 md:h-16 w-auto"
              />
              <span className="font-bold text-lg">MLAMBE SAFARIS</span>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Your trusted partner for unforgettable Southern African adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-amber-500">
                <Facebook className="w-5 h-5" />
              </a>
              
              <a href="#" className="text-neutral-400 hover:text-amber-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-amber-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><Link to="/about" className="hover:text-amber-500">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-amber-500">Destinations</Link></li>
              <li><Link to="/tours" className="hover:text-amber-500">Tours & Safaris</Link></li>
              <li><Link to="/day-trips" className="hover:text-amber-500">Day Trips</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><Link to="/car-hire" className="hover:text-amber-500">Car Hire</Link></li>
              <li><Link to="/conservation" className="hover:text-amber-500">Conservation</Link></li>
              <li><a href="#" className="hover:text-amber-500">Custom Tours</a></li>
              <li><a href="#" className="hover:text-amber-500">Group Travel</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-neutral-400 text-sm">
               <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>P.O.BOX 1375 Lilongwe 3, Malawi</span>
              </li>

              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@mlambesafaris.com" className="hover:text-amber-500">
                  info@mlambesafaris.com
                </a>
              </li>

              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@mlambesafaris.com" className="hover:text-amber-500">
                  mlambeadventuresafaris@gmail.com
                </a>
              </li>

              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a href="tel:+265881492883" className="hover:text-amber-500">
                  +265 881 492 883
                </a>

                <a href="tel:+265881492883" className="hover:text-amber-500">
                  /
                </a>
                
                <a href="tel:+265881492883" className="hover:text-amber-500">
                  +265 881 492 883
                </a>
              </li>

              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Lilongwe, Malawi</span>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500">
                  Contact Form →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
          <p>© 2025 Mlambe Adventure Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;