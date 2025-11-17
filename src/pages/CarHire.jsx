import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Car, Users, Shield, MapPin, DollarSign, CheckCircle, Phone, Mail, Navigation, Fuel, Baby, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarHire = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: 'Economy',
    pickupDate: '',
    returnDate: '',
    location: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);

  const fleet = [
    {
      category: 'ECONOMY',
      description: 'Saloon Cars (Toyota Corolla, Honda Civic etc)',
      features: ['Fuel efficient', 'City driving', 'Comfortable', 'Air-conditioned'],
      image: '/images/car-economy.jpg',
      price: '$45'
    },
    {
      category: 'COMFORT (SUV)',
      description: 'Toyota RAV4, Honda CRV, Toyota Harrier, Nissan Extrail',
      features: ['Spacious', 'Family friendly', 'All-weather', 'Premium comfort'],
      image: '/images/car-suv.jpg',
      price: '$65'
    },
    {
      category: 'LUXURY',
      description: 'Land Rover Discovery, Toyota Prado, Ford, TX etc',
      features: ['Premium class', 'Maximum comfort', 'Advanced features', 'Executive travel'],
      image: '/images/car-luxury.jpg',
      price: '$100'
    },
    {
      category: '4X4 VEHICLES',
      description: 'For rugged terrain and off-road adventures',
      features: ['Off-road capable', 'Safari ready', 'Rugged terrain', 'Adventure ready'],
      image: '/images/car-4x4.jpg',
      price: '$85'
    },
    {
      category: '12 AND 26 SEATERS',
      description: 'Min van/Min bus, Coaster',
      features: ['Group travel', 'Large capacity', 'Tour groups', 'Event transport'],
      image: '/images/car-minibus.jpg',
      price: '$120'
    }
  ];

  const rentalOptions = [
    {
      title: 'Self-drive',
      description: 'Drive yourself and explore at your own pace',
      icon: Car
    },
    {
      title: 'Chauffeur/Guide-driven',
      description: 'Professional driver with local knowledge',
      icon: User
    },
    {
      title: 'Long-term rentals',
      description: 'Special rates for extended periods',
      icon: Shield
    }
  ];

  const inclusions = [
    'Air-conditioning',
    'Power steering',
    'Radio/CD player',
    'GPS (optional)',
    'Third Party Insurance',
    'Comprehensive insurance (Optional)'
  ];

  const additionalServices = [
    { name: 'Fuel pre-purchase', icon: Fuel },
    { name: 'Additional driver', icon: Users },
    { name: 'Child seats', icon: Baby },
    { name: 'GPS rental', icon: Navigation }
  ];

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
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
          from_name: bookingForm.name,
          from_email: bookingForm.email,
          phone: bookingForm.phone,
          location: bookingForm.location,
          vehicleType: bookingForm.vehicleType,
          pickupDate: bookingForm.pickupDate,
          returnDate: bookingForm.returnDate,
          notes: bookingForm.notes,
        },
        'twjyyJIa_TSVz5JMY'      
      )
      .then(() => {
        alert('✅ Your car hire request has been sent successfully! We will contact you soon.' + '\n' + 'Thank you for choosing Mlambe Adventure Safaris.');
        setBookingForm({
          name: '',
          email: '',
          phone: '',
          vehicleType: 'Economy',
          pickupDate: '',
          returnDate: '',
          location: '',
          notes: ''
        });
      })
      .catch((error) => {
        console.error('❌ EmailJS Error:', error);
        alert('Something went wrong while sending your request. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const scrollToBooking = (vehicleType) => {
    const bookingSection = document.getElementById('booking-section');
    const vehicleTypeSelect = document.querySelector('select[name="vehicleType"]');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        if (vehicleTypeSelect) {
          vehicleTypeSelect.value = vehicleType;
          setBookingForm({...bookingForm, vehicleType: vehicleType});
        }
      }, 500);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/car-hire-hero.jpg" 
            alt="Car Hire" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block bg-amber-500 rounded-full px-6 py-2 mb-6">
            <p className="font-bold text-lg uppercase tracking-widest">Your Journey, Your Way</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Car Hire & Road Transfer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We have different types of vehicles at your disposal. Ask us and we will advise the right vehicle for your adventure around this region of Southern Africa.
          </p>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Fleet
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from our diverse range of well-maintained vehicles
            </p>
          </div>

          <div className="space-y-16">
            {fleet.map((vehicle, idx) => (
              <div key={idx} className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group ${idx % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.category} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                      FROM {vehicle.price}/DAY
                    </span>
                  </div>
                </div>

                <div className={`bg-gradient-to-br from-neutral-50 to-amber-50 rounded-2xl p-8 shadow-xl ${idx % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-3">{vehicle.category}</h3>
                  <p className="text-neutral-700 mb-6 text-lg">
                    {vehicle.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => scrollToBooking(vehicle.category === 'COMFORT (SUV)' ? 'Comfort (SUV)' : vehicle.category === '12 AND 26 SEATERS' ? '12/26 Seater' : vehicle.category === '4X4 VEHICLES' ? '4x4 Vehicle' : vehicle.category)}
                    className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Rental Options */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Car Rental Options
            </h2>
            <p className="text-xl text-neutral-600">
              Flexible rental solutions to suit your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rentalOptions.map((option, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{option.title}</h3>
                <p className="text-neutral-700">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/car-hire-inclusions.jpg" 
                alt="Vehicle Features" 
                className="w-full h-full object-cover"
                
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg font-semibold text-neutral-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Road Transfers Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Road Transfers
            </h2>
            <p className="text-xl text-gray-300">
              Comfortable and reliable transfer services across Malawi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <MapPin className="w-12 h-12 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Airport Transfers</h3>
              <p className="text-gray-300 mb-4">Reliable pickup and drop-off services</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Lilongwe (LLW)</li>
                <li>• Blantyre (BLZ)</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <Car className="w-12 h-12 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Inter-city Transfers</h3>
              <p className="text-gray-300 mb-4">Connect between major cities</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Lilongwe</li>
                <li>• Blantyre</li>
                <li>• Mzuzu</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <Navigation className="w-12 h-12 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Tourist Destinations</h3>
              <p className="text-gray-300 mb-4">Transfers to popular attractions</p>
              <ul className="space-y-2 text-gray-400">
                <li>• National Parks</li>
                <li>• Lake Malawi</li>
                <li>• Tourist Sites</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-2xl font-bold mb-3">Transfer Types</h4>
                <p className="text-lg">Private transfers</p>
                <p className="text-lg">Shared shuttles</p>
                <p className="text-lg">Luxury transfers</p>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-3">Pricing From</h4>
                <p className="text-4xl font-bold mb-2">$45</p>
                <p className="text-lg">Per day/week/month</p>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-3">Options</h4>
                <p className="text-lg">One-way/Return</p>
                <p className="text-lg">Per person/Group</p>
                <p className="text-lg">Custom routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-neutral-600">
              Enhance your car hire experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <service.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h4 className="font-bold text-lg text-neutral-900">{service.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Choose Mlambe Adventure Safaris?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Reliable Vehicles</h3>
              <p className="text-neutral-700">Well-maintained fleet in excellent condition</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Experienced Drivers</h3>
              <p className="text-neutral-700">Knowledgeable and professional chauffeurs</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Competitive Pricing</h3>
              <p className="text-neutral-700">Best rates for quality service</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Personalized Service</h3>
              <p className="text-neutral-700">Tailored solutions for your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-section" className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Ride</h2>
            <p className="text-xl text-gray-300">Contact us for customized quotes</p>
          </div>

          <form onSubmit={handleSubmit} className="backdrop-blur-md bg-white bg-opacity-95 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700">Full Name:</label>
                <input 
                  type="text"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700">Email:</label>
                <input 
                  type="email"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700">Phone:</label>
                <input 
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+265 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700">Vehicle Type:</label>
                <select 
                  name="vehicleType"
                  value={bookingForm.vehicleType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option>Economy</option>
                  <option>Comfort (SUV)</option>
                  <option>Luxury</option>
                  <option>4x4 Vehicle</option>
                  <option>12/26 Seater</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700">Pickup Date:</label>
                <input 
                  type="date"
                  name="pickupDate"
                  value={bookingForm.pickupDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700">Return Date:</label>
                <input 
                  type="date"
                  name="returnDate"
                  value={bookingForm.returnDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-neutral-700">Pickup Location:</label>
                <input 
                  type="text"
                  name="location"
                  value={bookingForm.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Airport, Hotel, or Address"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-neutral-700">Additional Notes:</label>
                <textarea 
                  name="notes"
                  value={bookingForm.notes}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Any special requirements or questions..."
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all mt-6 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Request Quote'}
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Need Help Choosing the Right Vehicle?</h3>
          <p className="text-xl mb-8">Our team is here to help you select the perfect vehicle for your journey</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+265881492883"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-neutral-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarHire;