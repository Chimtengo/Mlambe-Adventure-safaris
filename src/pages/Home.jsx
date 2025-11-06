import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { ChevronRight, Camera, Waves, Users, Mountain, Palmtree, Fish, MapPin, Calendar, DollarSign, Mail, Phone } from 'lucide-react';

const Home = () => {
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80',
      alt: 'African Safari',
      caption: 'Discover the Wild Beauty of Africa'
    },
    {
      url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80',
      alt: 'Lake Malawi',
      caption: 'Crystal Waters of Lake Malawi'
    },
    {
      url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1600&q=80',
      alt: 'Wildlife',
      caption: 'Unforgettable Wildlife Encounters'
    }
  ];

  const activities = [
    { icon: Camera, title: 'Wildlife Safaris' },
    { icon: Waves, title: 'Lake Expeditions' },
    { icon: Users, title: 'Cultural Tours' },
    { icon: Mountain, title: 'Hiking/Mountaineering and Trekking' },
    { icon: Palmtree, title: 'Beach Relaxation' },
    { icon: Waves, title: 'Water Sports' },
    { icon: Fish, title: 'Fishing' }
  ];

  const popularTrips = [
    {
      title: '12 Days Northern Malawi Classic Tour',
      validity: '1/Jan-31/Dec/2025',
      price: '2,250 P/P',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80'
    },
    {
      title: '5 Days Lake Malawi & Liwonde National Park',
      validity: '1/Jan-31/Dec/2025',
      price: '870 P/P',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80'
    },
    {
      title: '16 Days Southern Malawi Classic Tour',
      validity: '1/Jan-31/Dec/2025',
      price: '2,350 P/P',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80'
    },
    {
      title: '12 Days Malawi Cultural Tour',
      validity: '1/Jan-31/Dec/2025',
      price: '1,950 P/P',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80'
    },
    {
      title: '14 Days Malawi Typical Safari Tour',
      validity: '1/Jan-31/Dec/2025',
      price: '2,160 P/P',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80'
    },
    {
      title: '12 Days Malawi Bush & Beach Vacation',
      validity: '1/Jan-31/Dec/2025',
      price: '2,275 P/P',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Caroline',
      country: 'Switzerland',
      text: 'I had a great time with Mlambe Adventure Safaris! Jorge was very helpful from the beginning and always answered emails fast and resolved problems concerning the payment as quickly as possible. I usually don\'t like traveling alone but had an amazing trip to Cape Maclear and Liwonde National Park and would recommend Mlambe Adventure Safaris to anyone who wants to see and learn more about Malawi (without the stress of organizing everything yourself) as the tour guides have a lot of knowledge and insights. Thanks again!'
    },
    {
      name: 'Tabea',
      country: 'Germany',
      text: 'It was a great experience to enjoy our holiday with Mlambe Adventure Tours. Jorge is a courteous and well organized tour operator who picked us up spontaneously from the airport and gave us a lot of information about the country. The 2 days at Lake Malawi were very relaxed and the overnight stay in Liwonde National Park with an elephant encounter in front of the chalet in the middle of the night was incredibly impressive. We can warmly recommend Jorge as a tour operator!'
    },
    {
      name: 'Nick',
      country: 'USA',
      text: 'I knew Jorge for several months while I was living in Malawi. We met when I booked a very last minute trip with Mlambe Adventure Safaris to hike Mt. Mulanje on a holiday weekend, and when no other travel agency could accommodate my group, he managed to get everything expertly organized. Jorge Thawe is punctual, courteous, personable, humorous, and very professional, experienced, and prepared. Would highly recommend!'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        <ImageSlider images={heroImages} autoPlay={true} interval={5000} />
        
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Welcome to Mlambe Adventure Safaris</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Uncover The Hidden Gems<br />of Southern Africa
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Your gateway to unforgettable adventures in Malawi, Mozambique, and Zambia
            </p>
            <Link 
              to="/tours"
              className="bg-amber-500 text-neutral-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 inline-flex items-center"
            >
              Start Your Adventure <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                Mlambe Adventure Safaris
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                MLAMBE ADVENTURE SAFARIS is a locally owned premier tour operator in Malawi! We specialize in crafting unforgettable travel experiences that showcase the beauty, culture, and adventure of incredible destinations.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Explore the breathtaking beauty, vibrant culture, and thrilling experiences that Southern Africa has to offer. Our team of experts will guide you through the planning process, tailoring your trip to your interests, budget, and preferences.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80" 
                alt="Safari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Three Countries */}
<div className="grid md:grid-cols-3 gap-8">
  {/* Malawi Card */}
  <div className="group relative rounded-2xl overflow-hidden shadow-2xl h-96 transform hover:scale-105 transition-all duration-300">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="/images/malawi.jpg" 
        alt="Malawi" 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-amber-900/70 to-transparent"></div>
    </div>
    
    {/* Content */}
    <div className="relative h-full flex flex-col justify-end p-8 text-white">
      <MapPin className="w-12 h-12 mb-4 text-amber-300" />
      <h3 className="text-3xl font-bold mb-3">MALAWI</h3>
      <p className="text-lg font-semibold text-amber-200 mb-3">The Warm Heart of Africa</p>
      <p className="text-neutral-100 leading-relaxed">
        Discover the majestic Lake Malawi Beaches, National Parks, Game Reserves, rugged landscapes, and vibrant markets.
      </p>
      <Link 
        to="/destinations" 
        className="mt-4 inline-flex items-center text-amber-300 hover:text-amber-200 font-semibold"
      >
        Explore Malawi <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  </div>
  
  {/* Mozambique Card */}
  <div className="group relative rounded-2xl overflow-hidden shadow-2xl h-96 transform hover:scale-105 transition-all duration-300">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="/images/mozambique.jpg" 
        alt="Mozambique" 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent"></div>
    </div>
    
    {/* Content */}
    <div className="relative h-full flex flex-col justify-end p-8 text-white">
      <MapPin className="w-12 h-12 mb-4 text-blue-300" />
      <h3 className="text-3xl font-bold mb-3">MOZAMBIQUE</h3>
      <p className="text-lg font-semibold text-blue-200 mb-3">Paradise Beaches & History</p>
      <p className="text-neutral-100 leading-relaxed">
        Relax on pristine beaches, explore the historic Island of Mozambique, and experience the thrill of marine life.
      </p>
      <Link 
        to="/destinations" 
        className="mt-4 inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold"
      >
        Explore Mozambique <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  </div>
  
        {/* Zambia Card */}
        <div className="group relative rounded-2xl overflow-hidden shadow-2xl h-96 transform hover:scale-105 transition-all duration-300">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/zambia.jpg" 
              alt="Zambia" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/70 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 text-white">
            <MapPin className="w-12 h-12 mb-4 text-green-300" />
            <h3 className="text-3xl font-bold mb-3">ZAMBIA</h3>
            <p className="text-lg font-semibold text-green-200 mb-3">Wilderness & Wonder</p>
            <p className="text-neutral-100 leading-relaxed">
              Marvel at Victoria Falls' mighty power, discover Lower Zambezi, explore South Luangwa National Park's wildlife, and immerse yourself in local culture.
            </p>
            <Link 
              to="/destinations" 
              className="mt-4 inline-flex items-center text-green-300 hover:text-green-200 font-semibold"
            >
              Explore Zambia <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
       </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Expertise, Your Adventure
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              With years of experience and a passion for showcasing the region's best, our expert team crafts personalized itineraries tailored to your interests and preferences.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img 
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80" 
              alt="Adventure" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Activities */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">Choose Your Adventure</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {activities.map((activity, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center group hover:-translate-y-2 duration-300">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900">{activity.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Trips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold mb-2 uppercase tracking-wide">Unscheduled Trips</p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Popular Trips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTrips.map((trip, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="relative h-64">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{trip.title}</h3>
                  <div className="flex items-center text-neutral-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Valid from {trip.validity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-600 font-bold text-xl">
                      <DollarSign className="w-5 h-5" />
                      <span>{trip.price}</span>
                    </div>
                    <Link 
                      to="/tours"
                      className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/tours"
              className="bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all transform hover:scale-105 inline-flex items-center"
            >
              View All Tours <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Booking Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600&q=80" 
            alt="Book Your Adventure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready For Your Next Adventure?
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8">
              Book your dream safari experience today and create memories that last a lifetime.
            </p>
            <Link 
              to="/booking"
              className="bg-amber-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-400 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl"
            >
              Make a Booking <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold mb-2 uppercase tracking-wide">Testimonial</p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
              What Customers Are Saying...
            </h2>
          </div>

          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg text-neutral-900">{testimonial.name}</h4>
                    <p className="text-neutral-600">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-neutral-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact CTA Section */}
<section className="relative py-40 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80" 
      alt="Adventure Awaits" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="mb-12">
      <p className="text-amber-400 font-semibold text-lg mb-4 uppercase tracking-widest">
        Ready to Explore?
      </p>
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Let's Plan Your<br />Perfect Adventure
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Our team of safari experts is ready to craft a personalized journey that exceeds your wildest dreams. From breathtaking landscapes to unforgettable wildlife encounters.
      </p>
    </div>

    {/* Three Countries with Icons */}
    <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <div className="flex items-center backdrop-blur-md bg-white bg-opacity-10 rounded-full px-6 py-3 border border-white border-opacity-20">
        <MapPin className="w-5 h-5 text-amber-400 mr-2" />
        <span className="text-white font-semibold">Malawi</span>
      </div>
      <div className="hidden sm:block text-white text-2xl">•</div>
      <div className="flex items-center backdrop-blur-md bg-white bg-opacity-10 rounded-full px-6 py-3 border border-white border-opacity-20">
        <MapPin className="w-5 h-5 text-blue-400 mr-2" />
        <span className="text-white font-semibold">Mozambique</span>
      </div>
      <div className="hidden sm:block text-white text-2xl">•</div>
      <div className="flex items-center backdrop-blur-md bg-white bg-opacity-10 rounded-full px-6 py-3 border border-white border-opacity-20">
        <MapPin className="w-5 h-5 text-green-400 mr-2" />
        <span className="text-white font-semibold">Zambia</span>
      </div>
    </div>

    {/* CTA Button */}
    <div className="flex justify-center">
      <Link 
        to="/contact"
        className="bg-amber-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center"
      >
        <Mail className="w-6 h-6 mr-3" />
        Contact Us Now
      </Link>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;