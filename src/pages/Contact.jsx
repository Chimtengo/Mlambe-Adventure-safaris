import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_x0xli2h',     
        'template_06b0o3j',    
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          phone: contactForm.phone,
          subject: contactForm.subject,
          message: contactForm.message,
        },
        'twjyyJIa_TSVz5JMY'      
      )
      .then(() => {
        alert('✅ Your message has been sent successfully! We will get back to you within 24 hours.' + '\n' + 'Thank you for contacting Mlambe Adventure Safaris.');
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('❌ EmailJS Error:', error);
        alert('Something went wrong while sending your message. Please try again or contact us directly via phone/email.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/contact-hero-bg.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-amber-400 font-semibold text-lg mb-4 uppercase tracking-widest">
            Let's Connect
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get In Touch<br />With Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Let's plan your perfect African adventure together!
          </p>
        </div>
      </section>

      {/* Main Contact Section with Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/contact-background.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-orange-800/90 to-neutral-900/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Contact Information
              </h2>
              <p className="text-gray-200 mb-12 text-lg">
                Reach out to us through any of these channels. We're here to help make your African dream come true.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email Card */}
                <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
                  <div className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-3 mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
                      <a href="mailto:info@mlambesafaris.com" className="text-amber-300 hover:text-amber-200 block mb-1 transition-colors">
                        info@mlambesafaris.com
                      </a>
                      <a href="mailto:mlambeadventuresafaris@gmail.com" className="text-amber-300 hover:text-amber-200 block text-sm transition-colors">
                        mlambeadventuresafaris@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
                  <div className="flex items-start">
                    <div className="bg-green-600 rounded-full p-3 mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Call/WhatsApp</h3>
                      <a href="tel:+265881492883" className="text-amber-300 hover:text-amber-200 block mb-1 transition-colors">
                        +265 881 492 883
                      </a>
                      <a href="tel:+265999113389" className="text-amber-300 hover:text-amber-200 block transition-colors">
                        +265 999 113 389
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-3 mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Visit Us</h3>
                      <p className="text-gray-200">Area 3, Lilongwe</p>
                      <p className="text-gray-200">P.O.BOX 1375, Lilongwe 3</p>
                      <p className="text-gray-200">Malawi</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-2xl p-6 border border-white border-opacity-20">
                  <div className="flex items-start">
                    <div className="bg-purple-600 rounded-full p-3 mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Working Hours</h3>
                      <p className="text-gray-200">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-200">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-200">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3">
              <div className="backdrop-blur-md bg-white bg-opacity-95 rounded-3xl p-8 md:p-12 shadow-2xl border border-white">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Send Us a Message</h2>
                  <p className="text-lg text-neutral-600">Fill out the form and we'll get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="flex items-center text-sm font-bold mb-2 text-neutral-800">
                        <User className="w-4 h-4 mr-2 text-amber-500" />
                        Your Name *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center text-sm font-bold mb-2 text-neutral-800">
                          <Mail className="w-4 h-4 mr-2 text-amber-500" />
                          Email Address *
                        </label>
                        <input 
                          type="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="flex items-center text-sm font-bold mb-2 text-neutral-800">
                          <Phone className="w-4 h-4 mr-2 text-amber-500" />
                          Phone Number *
                        </label>
                        <input 
                          type="tel"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white"
                          placeholder="+265 XXX XXX XXX"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="flex items-center text-sm font-bold mb-2 text-neutral-800">
                        <MessageSquare className="w-4 h-4 mr-2 text-amber-500" />
                        Subject *
                      </label>
                      <input 
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white"
                        placeholder="Safari Inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="flex items-center text-sm font-bold mb-2 text-neutral-800">
                        <MessageSquare className="w-4 h-4 mr-2 text-amber-500" />
                        Your Message *
                      </label>
                      <textarea 
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white resize-none"
                        placeholder="Tell us about your travel plans, questions, or any special requirements..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-5 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg flex items-center justify-center transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      

      {/* Map/Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Find Us in Lilongwe</h2>
            <p className="text-xl text-neutral-600">Visit our office and start planning your adventure in person</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Google Map */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.510242320193!2d33.75852477456082!3d-13.987732281069864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d3a63e9e3da3%3A0x3f3d2d693884050f!2sMlambe%20Adventure%20Safaris!5e0!3m2!1sen!2smw!4v1763055599046!5m2!1sen!2smw" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mlambe Adventure Safaris Location"
                className="rounded-2xl"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Mlambe Adventure Safaris</h3>
                <p className="text-lg text-gray-200">Area 3, Lilongwe, Malawi</p>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Visit Our Office</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Address:</p>
                    <p className="text-neutral-700">Area 3, Lilongwe</p>
                    <p className="text-neutral-700">P.O.BOX 1375, Lilongwe 3, Malawi</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="w-5 h-5 text-amber-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Country:</p>
                    <p className="text-neutral-700">Malawi, Southern Africa</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <a 
                  href="mailto:info@mlambesafaris.com"
                  className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a> */}
                <a 
                  href="tel:+265881492883"
                  className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h3>
          <p className="text-xl mb-8">Get in touch today and let us create your perfect African experience</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+265881492883"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-neutral-100 transition-colors inline-block"
            >
              Call Us Now
            </a>
            <a 
              href="https://wa.me/265881492883"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors inline-block"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;