import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:info@mlambesafaris.com?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nPhone: ${contactForm.phone}\n\nMessage:\n${contactForm.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch With Us</h1>
          <p className="text-xl md:text-2xl">We'd love to hear from you. Let's plan your adventure!</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-md bg-white bg-opacity-70 rounded-2xl p-8 shadow-xl text-center border border-white border-opacity-50 hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Email Us</h3>
              <a href="mailto:info@mlambesafaris.com" className="text-amber-600 hover:text-amber-700 block mb-2">
                info@mlambesafaris.com
              </a>
              <a href="mailto:mlambeadventuresafaris@gmail.com" className="text-amber-600 hover:text-amber-700 block text-sm">
                mlambeadventuresafaris@gmail.com
              </a>
            </div>

            <div className="backdrop-blur-md bg-white bg-opacity-70 rounded-2xl p-8 shadow-xl text-center border border-white border-opacity-50 hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Call/WhatsApp</h3>
              <a href="tel:+265881492883" className="text-amber-600 hover:text-amber-700 block mb-2">
                +265 881 492 883
              </a>
              <a href="tel:+265999113389" className="text-amber-600 hover:text-amber-700 block">
                +265 999 113 389
              </a>
            </div>

            <div className="backdrop-blur-md bg-white bg-opacity-70 rounded-2xl p-8 shadow-xl text-center border border-white border-opacity-50 hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Visit Us</h3>
              <p className="text-neutral-700">Area 3, Lilongwe</p>
              <p className="text-neutral-700">P.O.BOX 1375</p>
              <p className="text-neutral-700">Malawi</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-neutral-600">Fill out the form below and we'll get back to you shortly</p>
            </div>

            <form 
              onSubmit={handleSubmit}
              className="backdrop-blur-md bg-white bg-opacity-80 rounded-2xl p-8 md:p-12 shadow-2xl border border-white border-opacity-50"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                    <User className="w-4 h-4 mr-2" />
                    Your Name:
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address:
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number:
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                    placeholder="+265 XXX XXX XXX"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Subject:
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                    placeholder="Safari Inquiry"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Your Message:
                  </label>
                  <textarea 
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                    placeholder="Tell us about your travel plans, questions, or any special requirements..."
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition-colors mt-6 shadow-lg flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can add Google Maps iframe later) */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Find Us</h2>
            <p className="text-xl text-neutral-600">Visit our office in Lilongwe, Malawi</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Mlambe Adventure Safaris</h3>
            <p className="text-lg text-neutral-700 mb-2">Area 3, Lilongwe</p>
            <p className="text-lg text-neutral-700 mb-2">P.O.BOX 1375, Lilongwe 3</p>
            <p className="text-lg text-neutral-700 mb-6">Malawi</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@mlambesafaris.com"
                className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
              <a 
                href="tel:+265881492883"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;