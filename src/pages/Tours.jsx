import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Camera, Users, Palmtree, Zap, Map, Star, Car, Crown, DollarSign, ChevronRight, Mail, ChevronLeft } from 'lucide-react';

const TourImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden group">
      {/* Images */}
      <div className="relative h-full">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`${title} - Image ${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
          {title}
        </h3>
      </div>

      {/* Navigation Arrows - Hidden by default, shown on hover */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-900 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-900 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'bg-white w-8 h-2'
                : 'bg-white/50 hover:bg-white/75 w-2 h-2'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const FeaturedToursSlider = ({ tours }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tours.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, tours.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tours.length) % tours.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tours.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {tours.map((tour, idx) => (
            <div key={idx} className="min-w-full">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-[500px] overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
                      {tour.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-neutral-700 leading-relaxed mb-6 text-base sm:text-lg">
                    {tour.description}
                  </p>
                  <Link 
                    to="/booking"
                    className={`bg-${tour.color}-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-${tour.color}-600 transition-colors inline-flex items-center`}
                  >
                    Learn More <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/3 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 p-3 rounded-full shadow-xl transition-all transform hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/3 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 p-3 rounded-full shadow-xl transition-all transform hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-6">
        {tours.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'bg-amber-500 w-12 h-3'
                : 'bg-neutral-300 hover:bg-neutral-400 w-3 h-3'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ToursSafaris = () => {
  const categories = [
    {
      icon: Camera,
      title: 'WILDLIFE SAFARIS',
      description: 'Explore national parks, game reserves, and wildlife sanctuaries.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'CULTURAL TOURS',
      description: 'Discover vibrant markets, historic sites, and local traditions.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Palmtree,
      title: 'BEACH RELAXATION',
      description: 'Unwind on pristine beaches, snorkel, or dive in crystal-clear waters.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'ADVENTURE ACTIVITIES',
      description: 'Hike, bike, kayak, or take to the skies for breathtaking views.',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Map,
      title: 'COMBINATED TOURS',
      description: 'Mix and match destinations and activities for a unique experience.',
      gradient: 'from-amber-500 to-yellow-600'
    }
  ];

  const featuredTours = [
    {
      title: 'Malawi Explorer',
      description: 'Lake Malawi Beaches, Malawi Cultural experience, Nyika N. Park, Liwonde N. Park, Majete Game reserve, Mount Mulanje; Escape to scenic lakeside resorts, water sports, relaxation and Immerse yourself in wildlife, scenic landscapes, and starry nights.',
      images: [
        '/images/malawi-explorer-1.jpg',
        '/images/malawi-explorer-2.jpg',
        '/images/malawi-explorer-3.jpg',
        '/images/malawi-explorer-4.jpg'
      ],
      color: 'amber'
    },
    {
      title: 'Mozambique Island Hopper',
      description: 'Visiting Island of Mozambique, Bazaruto Archipelago, Tofo, Pemba, Nampula and Maputo.',
      images: [
        '/images/mozambique-islands-1.jpg',
        '/images/mozambique-islands-2.jpg',
        '/images/mozambique-islands-3.jpg',
        '/images/mozambique-islands-4.jpg'
      ],
      color: 'blue'
    },
    {
      title: 'Zambia Safari',
      description: 'Exploring South Luangwa National Park, Kafue N. Park, Lower Zambezi N. Park and Victoria Falls.',
      images: [
        '/images/zambia-safari-1.jpg',
        '/images/zambia-safari-2.jpg',
        '/images/zambia-safari-3.jpg',
        '/images/zambia-safari-4.jpg'
      ],
      color: 'green'
    },
    {
      title: 'Southern Africa Odyssey',
      description: '16-day tour covering Malawi, Mozambique, and Zambia.',
      images: [
        '/images/southern-africa-1.jpg',
        '/images/southern-africa-2.jpg',
        '/images/southern-africa-3.jpg',
        '/images/southern-africa-4.jpg'
      ],
      color: 'purple'
    }
  ];

  const safariStyles = [
    {
      icon: Star,
      title: 'GUIDED SAFARIS',
      description: 'Expert guides lead you through unforgettable experiences.',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Car,
      title: 'SELF-DRIVE SAFARIS',
      description: 'Explore at your own pace with our tailored itineraries.',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Crown,
      title: 'LUXURY SAFARIS',
      description: 'Indulge in premium accommodations and exclusive experiences.',
      gradient: 'from-yellow-500 to-amber-600'
    },
    {
      icon: DollarSign,
      title: 'BUDGET SAFARIS',
      description: 'Affordable adventures without compromising on quality.',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/tours-hero.jpg" 
            alt="Safari Adventure" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6">
                <Compass className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 mr-4" />
                <p className="text-amber-400 font-bold text-lg sm:text-xl uppercase tracking-widest">
                  Lets Go Travel!
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Tours & Safaris
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                Experience the ultimate Southern African adventure with Mlambe Adventure Safaris. Our expertly curated tours and safaris offer unforgettable experiences in Malawi, Mozambique, and Zambia
              </p>
              <Link 
                to="/booking"
                className="bg-amber-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-amber-400 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl"
              >
                Book Your Adventure <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Categories Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-amber-600 font-semibold mb-2 uppercase tracking-wide">
              Tours and Safaris
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              TOUR CATEGORIES
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className={`bg-gradient-to-br ${category.gradient} p-8 text-center`}>
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral-700 leading-relaxed text-center">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-16 sm:py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-amber-600 font-semibold mb-2 uppercase tracking-wide">
              Best Destinations
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              FEATURED TOURS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {featuredTours.map((tour, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <TourImageSlider images={tour.images} title={tour.title} />
                <div className="p-5 sm:p-6">
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {tour.description}
                  </p>
                  <Link 
                    to="/booking"
                    className={`bg-${tour.color}-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-${tour.color}-600 transition-colors inline-flex items-center`}
                  >
                    Learn More <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Styles Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-amber-600 font-semibold mb-2 uppercase tracking-wide">
              Choose Your Experience
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              SAFARI STYLES
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {safariStyles.map((style, idx) => (
              <div key={idx} className="group text-center">
                <div className={`bg-gradient-to-br ${style.gradient} rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 mb-4`}>
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <style.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {style.title}
                  </h3>
                  <p className="text-white text-opacity-90 leading-relaxed text-sm sm:text-base">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/contact-cta.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-base sm:text-lg mb-4 uppercase tracking-widest">
            Get In Touch With Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Contact us to tailor your<br />Southern African adventure
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Our expert team is ready to create a personalized itinerary that matches your dreams and exceeds your expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-amber-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
              Contact Us Now
            </Link>
            <Link 
              to="/booking"
              className="bg-white text-neutral-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
            >
              Make a Booking
              <ChevronRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToursSafaris;