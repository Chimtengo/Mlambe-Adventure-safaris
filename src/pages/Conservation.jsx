import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Users, Globe, Shield, BookOpen, TreePine, Building2, HandHeart, Mail, Phone, MapPin, DollarSign, Share2, UserPlus } from 'lucide-react';

const Conservation = () => {
  const focusAreas = [
    {
      icon: Shield,
      title: 'WILDLIFE CONSERVATION',
      description: 'Protecting endangered species, habitats, and ecosystems.'
    },
    {
      icon: Users,
      title: 'COMMUNITY ENGAGEMENT',
      description: 'Supporting local communities through education, and economic empowerment.'
    },
    {
      icon: Globe,
      title: 'CULTURAL PRESERVATION',
      description: "Promoting and preserving Malawi's rich cultural heritage."
    },
    {
      icon: Leaf,
      title: 'SUSTAINABLE TOURISM',
      description: 'Encouraging responsible travel practices and environmentally friendly tourism.'
    }
  ];

  const projects = [
    {
      icon: BookOpen,
      title: 'WILDLIFE MONITORING',
      description: 'Collaborating with local authorities to monitor and protect wildlife populations.'
    },
    {
      icon: Users,
      title: 'COMMUNITY-BASED TOURISM',
      description: 'Supporting local entrepreneurship and job creation.'
    },
    {
      icon: TreePine,
      title: 'CULTURAL HERITAGE PRESERVATION',
      description: "Documenting and promoting Malawi's cultural traditions."
    },
    {
      icon: Leaf,
      title: 'ENVIRONMENTAL EDUCATION',
      description: 'Educating local communities on sustainable practices.'
    }
  ];

  const partnerships = [
    'Local communities',
    'Government agencies',
    'International organizations',
    'Other conservation NGOs'
  ];

  const howToHelp = [
    {
      icon: UserPlus,
      title: 'Volunteer',
      description: 'Join our conservation projects and make a difference.'
    },
    {
      icon: Share2,
      title: 'Spread Awareness',
      description: 'Share our mission and objectives with others.'
    },
    {
      icon: Leaf,
      title: 'Choose Responsible Tourism',
      description: 'Support tour operators that prioritize conservation.'
    },
    {
      icon: Heart,
      title: 'Donate',
      description: 'Support our conservation efforts through donations.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Animation */}
      <section className="relative py-32 sm:py-40 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/conservation-hero.jpg" 
            alt="Conservation" 
            className="w-full h-full object-cover animate-slow-zoom"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Leaf className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 mx-auto mb-6 animate-bounce" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            MAS Wildlife Conservation Foundation
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed animate-fade-in-up-delay">
            Protecting Malawi's Wildlife, People, and Culture
          </p>
        </div>
      </section>

      {/* Inspiration Section with Fade In */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              INSPIRATION
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed animate-fade-in-up">
            <p className="hover:text-amber-700 transition-colors duration-300">
              We motivate people and their communities to recognise that animals are living beings that love, feel and deserve a happy life. When young people and their communities can relate themselves to wildlife, they acquire a better understanding of animals' needs, growing up to be responsible citizens.
            </p>
            <p className="hover:text-amber-700 transition-colors duration-300">
              The registered trustees of MAS Wildlife Conservation Foundation, is a non-profit organization registered in the republic of Malawi, Our work involves educating young people and the communities about the importance of wildlife and their relationship to the world we live in.
            </p>
            <p className="hover:text-amber-700 transition-colors duration-300">
              MAS Wildlife Conservation Foundation-founded in the year 2021 and officially registered in the year 2024 in the Republic of Malawi as Charity organisation number <span className="font-bold text-amber-600">TRN-BVSK3K</span>.
            </p>
            <p className="hover:text-amber-700 transition-colors duration-300">
              At Mlambe Adventure Safaris (MAS), we're committed to responsible tourism and conservation. Our registered NGO, MAS Wildlife Conservation Foundation, works tirelessly to protect Malawi's precious wildlife, people, and culture.
            </p>
          </div>
        </div>
      </section>

      {/* Conservation Focus Areas with Stagger Animation */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              CONSERVATION FOCUS AREAS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {focusAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                  <area.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">{area.title}</h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact with Slide Animation */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              OUR IMPACT
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all animate-slide-in-left">
              <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mb-4 animate-bounce-slow" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Financial Support</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                2% of Mlambe Adventure Safaris' profits are donated to MAS Wildlife Conservation Foundation
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all animate-slide-in-right">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mb-4 animate-bounce-slow" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Community Reach</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                We are working with communities around Kasungu National Park, Lake Malawi National Park, Chongoni World Heritage site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects with Fade In */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              OUR PROJECTS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">{project.title}</h3>
                    <p className="text-sm sm:text-base text-neutral-700">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships with Scale Animation */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-neutral-100 to-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              PARTNERSHIPS
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 mb-8">
              We collaborate with:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {partnerships.map((partner, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg flex items-center hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-amber-100 rounded-full p-2 mr-4">
                  <HandHeart className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-neutral-900">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Can You Help Us with Hover Animations */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <HandHeart className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              HOW CAN YOU HELP US
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {howToHelp.map((help, idx) => (
              <div 
                key={idx} 
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all text-center transform hover:-translate-y-2 duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 animate-scale-in">
                  <help.icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{help.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{help.description}</p>
              </div>
            ))}
          </div>

          {/* Bank Details with Pulse Animation */}
          <div className="bg-white text-neutral-900 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl max-w-3xl mx-auto animate-fade-in-up hover:shadow-amber-500/20 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-700 mb-2">BANK DETAILS</h3>
              <p className="text-sm sm:text-base text-neutral-600">Support our conservation efforts</p>
            </div>
            
            <div className="space-y-3 sm:space-y-4 bg-amber-50 rounded-xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-amber-200 pb-2 hover:bg-amber-100 px-2 py-1 rounded transition-colors">
                <span className="font-semibold text-sm sm:text-base">Bank Name:</span>
                <span className="text-sm sm:text-base">FIRST CAPITAL BANK</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-amber-200 pb-2 hover:bg-amber-100 px-2 py-1 rounded transition-colors">
                <span className="font-semibold text-sm sm:text-base">Account Name:</span>
                <span className="text-sm sm:text-base">MAS WILDLIFE CONSERVATION FOUNDATION</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-amber-200 pb-2 hover:bg-amber-100 px-2 py-1 rounded transition-colors">
                <span className="font-semibold text-sm sm:text-base">Account Number:</span>
                <span className="text-sm sm:text-base font-mono">0002704005763</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-amber-200 pb-2 hover:bg-amber-100 px-2 py-1 rounded transition-colors">
                <span className="font-semibold text-sm sm:text-base">Swift Code:</span>
                <span className="text-sm sm:text-base font-mono">FRCGMWMW</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-amber-200 pb-2 hover:bg-amber-100 px-2 py-1 rounded transition-colors">
                <span className="font-semibold text-sm sm:text-base">Branch Code:</span>
                <span className="text-sm sm:text-base">002</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between pt-2 hover:bg-amber-100 px-2 py-1 rounded transition-colors">
                <span className="font-semibold text-sm sm:text-base">Address:</span>
                <span className="text-sm sm:text-base text-right">Livingstone Tower, 21 Glyn Jones Road, P/BAG 122, Blantyre Malawi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section with Hover Effects */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              CONTACT US
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              Get involved or learn more about us
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all animate-fade-in-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-700 mb-2">
                MAS WILDLIFE CONSERVATION FOUNDATION (MASWCF)
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start hover:bg-white rounded-lg p-4 transition-all transform hover:-translate-x-2 duration-300">
                <MapPin className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Address:</p>
                  <p className="text-neutral-700">P.O.BOX 1375, Lilongwe 3, Malawi</p>
                  <p className="text-neutral-700">Visit our office in Area 3, Plot number 3/90, Lilongwe</p>
                </div>
              </div>

              <div className="flex items-start hover:bg-white rounded-lg p-4 transition-all transform hover:-translate-x-2 duration-300">
                <Phone className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Telephone:</p>
                  <a href="tel:+265993758341" className="text-amber-600 hover:text-amber-700 block transition-colors">+265 993 758341</a>
                  <a href="tel:+265881492883" className="text-amber-600 hover:text-amber-700 block transition-colors">+265 881 492 883</a>
                </div>
              </div>

              <div className="flex items-start hover:bg-white rounded-lg p-4 transition-all transform hover:-translate-x-2 duration-300">
                <Mail className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Email:</p>
                  <a href="mailto:wildlifeconservation2024@gmail.com" className="text-amber-600 hover:text-amber-700 transition-colors">
                    wildlifeconservation2024@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Pulse Animation */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Join Us in Making a Difference
          </h3>
          <p className="text-lg sm:text-xl text-white mb-8 animate-fade-in-up">
            Every action counts. Together, we can protect Malawi's precious wildlife and heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay">
            <Link 
              to="/contact"
              className="bg-white text-orange-600 px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-neutral-100 transition-all transform hover:scale-105 inline-block shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              to="/booking"
              className="bg-transparent border-2 border-white text-white px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105 inline-block"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out backwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out backwards;
        }

        .animate-slow-zoom {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Conservation;