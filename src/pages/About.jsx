import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Heart, Shield, Users, MapPin, Leaf, CheckCircle, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Responsible Tourism',
      description: 'We believe in sustainable tourism practices that benefit local communities and preserve the environment.'
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'We tailor our tours to meet your unique interests and needs.'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Our team knows Southern Africa inside out, ensuring you experience the best.'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Your safety is our top priority.'
    }
  ];

  const team = [
    {
      name: 'Jorge P. Thawe',
      role: 'Founder/Tours Coordinator',
      image: '/images/team-jorge.jpg'
    },
    {
      name: 'Edna Chiotcha',
      role: 'Tours Reservations Consultant',
      image: '/images/team-edna.jpg'
    },
    {
      name: 'Luke Stambuli',
      role: 'Driver/Guide',
      image: '/images/team-luke.jpg'
    },
    {
      name: 'Knocks Kaipa',
      role: 'Driver/Guide',
      image: '/images/team-knocks.jpg'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="About Mlambe Safaris" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            With years of experience and a passion for showcasing the region's best, our expert team crafts personalized itineraries tailored to your interests and preferences.
          </p>
        </div>
      </section>




      {/* Who We Are Section */}
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12">
    </div>

    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div>
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4 sm:mb-6">
          At Mlambe Adventure Safaris, we're passionate about sharing the beauty and wonder of Southern Africa with the world. Our team of experienced travel experts, guides, and local partners are dedicated to crafting unforgettable adventures in Malawi, Mozambique, and Zambia.
        </p>
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4 sm:mb-6">
          Founded in <span className="font-bold text-amber-600">2015</span> by <span className="font-bold text-amber-600">Jorge Promise Thawe</span>, Mlambe Adventure Safaris was born from a love for Africa's diverse landscapes, cultures, and wildlife.
        </p>
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
          With over <span className="font-bold text-amber-600">18 years of experience</span> in the tourism industry, we've built a reputation for delivering exceptional, personalized experiences that exceed our clients' expectations.
        </p>
      </div>

      <div className="relative mt-8 md:mt-0 pb-16 sm:pb-20 md:pb-24" style={{ perspective: '1000px' }}>
        {/* 3D Rotating Image Card */}
        <div className="relative h-80 sm:h-96 md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl image-3d-rotate">
          <img 
            src="/images/Mlambe-logo.png" 
            alt="Safari Experience" 
            className="w-full h-full object-contain bg-gradient-to-br from-neutral-50 to-amber-50 p-8"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80';
              e.target.className = 'w-full h-full object-cover';
            }}
          />
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent shine-effect"></div>
        </div>
        
        {/* Stats Card */}
        <div className="absolute -bottom-0 -right-4 sm:-right-6 md:-right-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl p-5 sm:p-7 md:p-10 shadow-2xl transform hover:scale-105 transition-transform duration-300 stats-card-pulse">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3">18+</div>
            <div className="text-base sm:text-lg md:text-xl font-semibold">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    /* 3D Rotation Animation */
    @keyframes rotate3D {
      0% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      25% {
        transform: rotateY(5deg) rotateX(-2deg);
      }
      50% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      75% {
        transform: rotateY(-5deg) rotateX(2deg);
      }
      100% {
        transform: rotateY(0deg) rotateX(0deg);
      }
    }

    /* Shine effect animation */
    @keyframes shine {
      0% {
        transform: translateX(-100%) translateY(-100%) rotate(30deg);
      }
      100% {
        transform: translateX(100%) translateY(100%) rotate(30deg);
      }
    }

    /* Pulse animation for stats card */
    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      50% {
        box-shadow: 0 20px 25px -5px rgba(251, 146, 60, 0.4), 0 10px 10px -5px rgba(251, 146, 60, 0.2);
      }
    }

    .image-3d-rotate {
      animation: rotate3D 8s ease-in-out infinite;
      transform-style: preserve-3d;
      will-change: transform;
    }

    .image-3d-rotate:hover {
      animation-play-state: paused;
    }

    .shine-effect {
      animation: shine 3s ease-in-out infinite;
      pointer-events: none;
    }

    .stats-card-pulse {
      animation: pulse-glow 2s ease-in-out infinite;
    }
  `}</style>
</section>







      {/* Mission Statement Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
            To preserve and protect Malawi's wildlife, culture and natural heritage through sustainable tourism practices, community engagement, and conservation efforts.
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4">
              Our Objectives
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
              What we strive to achieve every day
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Wildlife Protection</h3>
                  <p className="text-sm sm:text-base text-neutral-700">Protect and conserve Malawi's wildlife and their habitats.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start">
                <div className="bg-blue-500 rounded-full p-3 mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Community Development</h3>
                  <p className="text-sm sm:text-base text-neutral-700">Support community development through education and economic empowerment.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start">
                <div className="bg-purple-500 rounded-full p-3 mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Cultural Preservation</h3>
                  <p className="text-sm sm:text-base text-neutral-700">Preserve and promote Malawi's rich cultural heritage.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start">
                <div className="bg-amber-500 rounded-full p-3 mr-4 flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Sustainable Tourism</h3>
                  <p className="text-sm sm:text-base text-neutral-700">Foster sustainable tourism practices and responsible travel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Foundation Introduction */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-300 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            MAS Wildlife Conservation Foundation
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            At Mlambe Adventure Safaris (MAS), we're committed to responsible tourism and conservation. Our registered NGO, MAS Wildlife Conservation Foundation, works tirelessly to protect Malawi's precious wildlife, people, and culture.
          </p>
          <Link 
            to="/conservation"
            className="bg-white text-green-800 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-50 transition-colors inline-flex items-center justify-center"
          >
            Learn More About Our Conservation Work
            <CheckCircle className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-neutral-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="/images/partners-aboutus.jpg" 
                alt="Our Partners" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-500 mr-3 sm:mr-4 flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">Our Partners</h2>
              </div>
              
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4 sm:mb-6">
                We partner with local businesses, conservation organizations, and communities to ensure our tours benefit the regions we operate in.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-neutral-900 mb-1">Local Businesses</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">Supporting local economies through partnerships</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-neutral-900 mb-1">Conservation Organizations</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">Protecting wildlife and natural habitats</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-neutral-900 mb-1">Local Communities</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">Creating sustainable tourism opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              The passionate experts behind your unforgettable African adventures
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-6 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{member.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-amber-400 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to Experience Africa with Us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 px-4">
            Let our experienced team create your perfect African adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              to="/contact"
              className="bg-white text-orange-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-neutral-100 transition-colors inline-block"
            >
              Contact Us
            </Link>
            <Link 
              to="/tours"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-orange-600 transition-colors inline-block"
            >
              View Our Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;