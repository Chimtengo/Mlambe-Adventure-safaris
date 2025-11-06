import React, { useState } from 'react';
import { Calendar, Users, Mail, Phone, MessageSquare, User } from 'lucide-react';

const Booking = () => {
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    numberOfPeople: '',
    dateFrom: '',
    dateTo: '',
    interestedIn: 'Camping Tours',
    email: '',
    phone: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', bookingForm);
    alert('Thank you for your booking request! We will contact you soon.');
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600&q=80" 
            alt="Book Your Safari" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Booking</h1>
          <p className="text-xl md:text-2xl">Let's plan your perfect adventure together</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form 
            onSubmit={handleSubmit} 
            className="backdrop-blur-md bg-white bg-opacity-80 rounded-2xl p-8 md:p-12 shadow-2xl border border-white border-opacity-50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                  <User className="w-4 h-4 mr-2" />
                  Full Name:
                </label>
                <input 
                  type="text"
                  name="fullName"
                  value={bookingForm.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                  <Users className="w-4 h-4 mr-2" />
                  Number of People:
                </label>
                <input 
                  type="number"
                  name="numberOfPeople"
                  value={bookingForm.numberOfPeople}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                  placeholder="Number of travelers"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date From:
                </label>
                <input 
                  type="date"
                  name="dateFrom"
                  value={bookingForm.dateFrom}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date To:
                </label>
                <input 
                  type="date"
                  name="dateTo"
                  value={bookingForm.dateTo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Interested in:
                </label>
                <select 
                  name="interestedIn"
                  value={bookingForm.interestedIn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                >
                  <option>Camping Tours</option>
                  <option>Wildlife Safaris</option>
                  <option>Lake Expeditions</option>
                  <option>Cultural Tours</option>
                  <option>Beach Holidays</option>
                  <option>Day Trips</option>
                  <option>Hiking & Trekking</option>
                  <option>Car Hire</option>
                </select>
              </div>

              <div>
                <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address:
                </label>
                <input 
                  type="email"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                  placeholder="your@email.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number:
                </label>
                <input 
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                  placeholder="+265 XXX XXX XXX"
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-semibold mb-2 text-neutral-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Notes:
                </label>
                <textarea 
                  name="notes"
                  value={bookingForm.notes}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white bg-opacity-90"
                  placeholder="Any special requests or questions..."
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-amber-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition-colors mt-6 shadow-lg"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booking;