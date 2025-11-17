import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Camera, Mountain, Waves, Landmark, TreePine, CheckCircle, ChevronRight, Mail } from 'lucide-react';

const TripImage = ({ image, title }) => {
  return (
    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
    </div>
  );
};

const ShortDayTrips = () => {
  const dayTrips = [
    {
      number: '1',
      title: 'LILONGWE CITY TOUR',
      icon: Landmark,
      description: 'Lilongwe is known as the garden city and is developing at a tremendous speed. Our city tour includes areas of interest like the New Parliament buildings, the Kamuzu Banda Mausoleum, War Memorial, the curio market, tobacco auction floors and Lilongwe wildlife sanctuary.',
      includes: 'all road transport, services of Driver/guide, bottled water, entrance fee to wildlife sanctuary.',
      excludes: 'lunch, personal spending money, drinks and any other excursion not mentioned.',
      image: '/images/lilongwe-tour.jpg',
      color: 'blue'
    },
    {
      number: '2',
      title: 'DEDZA POTTERY AND CHONGONI HERITAGE ROCK ART PAINTINGS',
      icon: Mountain,
      description: 'Dedza Pottery & Chongoni Rock Art: Dedza Mountain looms over the plains on the edge of the Rift Valley escarpment. Visit ancient rock art by the early settlers in the late stone age, then continue to Dedza Pottery then you will have to visit the pottery shop before returning to Lilongwe.',
      includes: 'all road transport, services of guide, bottled water',
      excludes: 'lunch, personal spending money, drinks and any other excursions not mentioned above.',
      image: '/images/dedza-pottery.jpg',
      color: 'orange'
    },
    {
      number: '3',
      title: 'CENTRAL REGION DAY TRIP',
      icon: Camera,
      description: 'A day trip visiting the Dedza pottery, then driving down the scenic Golomoti Pass to Mua Mission where we have a look at the cultural museum, then head to the lake where a couple of hours are free to relax and explore the unique shoreline, before returning back to Lilongwe.',
      itinerary: 'We pick you from your hotel / residence and drive to Dedza, Mua Mission, down the very scenic Golomoti pass. An hour is spent here then we head to the lake where you have a few hours free to enjoy the warm water and sunshine. We aim to have a late lunch at the Lake. Depart back to Lilongwe mid afternoon. and we drop you back at your hotel.',
      includes: 'all road transport, services of Driver/guide, bottled water, and entrance fee into Mua Mission.',
      excludes: 'lunch, personal spending money, drinks and any other excursion not mentioned.',
      image: '/images/central-region.jpg',
      color: 'purple'
    },
    {
      number: '4',
      title: 'LAKE MALAWI AND KUTI GAME RESERVE DAY TRIP',
      icon: TreePine,
      description: 'Kuti Park is en route to the Lake, so if you want a great wilderness experience then definitely stop here. Drives walks or horse rides are offered in a non dangerous game area. Kuti is a stunning 2000 hectare wilderness reserve with all sorts of wild animals like giraffe and sable as well as a wetland which is great for birds. We will explore the park by car, sit by your chalet and watch the zebra go by and finish off the day with one of the best sunset view point in Malawi. There after we proceed to Lake Malawi in Senga Bay.',
      includes: 'all road transport, services of guide, bottled water, and entrance fee to a lodge to use their facilities.',
      excludes: 'lunch, personal spending money, drinks, and any other excursion not mentioned.',
      image: '/images/kuti-reserve.jpg',
      color: 'green'
    },
    {
      number: '5',
      title: 'LAKE MALAWI DAY TRIP',
      icon: Waves,
      description: 'A day trip to Lake Malawi where you have time to relax on the white sandy beaches and swim in the clear water before returning back to Lilongwe.',
      itinerary: 'We pick you from your hotel / residence and drive to Senga Bay. At the lake we either go to Safari Beach Lodge or Livingstonia Beach Hotel where you are welcome to relax on the beach, swimming, sunbathing, snorkeling or for a fee use some of their watersport equipment, For the more adventurous, a boat trip to lizard Island can be arranged. Lunch at the hotel or lodge, then return to Lilongwe in the late afternoon and we drop you back at your hotel or guest house.',
      includes: 'All road Transfers to and fro Lilongwe, services of English speaking guide, entrance fee to use hotel / lodge facilities.',
      excludes: 'Food or drinks, optional excursions, use of watersport equipment.',
      image: '/images/lake-malawi-day.jpg',
      color: 'cyan'
    },
    {
      number: '6',
      title: 'KASUNGU NATIONAL PARK DAY TRIP',
      icon: Camera,
      description: 'Kasungu Park is one of Malawi\'s least known parks but hosts an impressive array of wild animals. The different habitat, coupled with dambos, streams and hills offers protections for sable, kudu, reedbuck, Lichtenstein hartebeest, impala as well as elephant, and various predator species. Lifupa Lodge, in the heart of the park overlooks a dam of the same name where an endemic group of puku have taken up residence having migrated from nearby Zambia. The park may not be blessed with big concentrations of game, but the varied scenery interspersed with animals make this an enjoyable day out.',
      includes: 'Transfer to and fro Lilongwe, services of English speaking guide, entrance fee to use hotel / lodge facilities.',
      excludes: 'Food or drinks, optional excursions, use of watersport equipment.',
      image: '/images/kasungu-park.jpg',
      color: 'amber'
    }
  ];

  const reasons = [
    'Expert local knowledge',
    'Personalized service',
    'Unique, off-the-beaten-path experiences',
    'Commitment to responsible tourism',
    '100% locally owned'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/day-trips-hero.jpg" 
            alt="Day Trips from Lilongwe" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 mr-4" />
                <p className="text-amber-400 font-bold text-lg sm:text-xl uppercase tracking-widest">
                  Day Trips From Lilongwe
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                SHORT AND DAY TRIPS<br />FROM LILONGWE, MALAWI
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                Discover the beauty of Malawi with our expertly curated short and day trips. Explore stunning landscapes, vibrant culture, and unforgettable experiences.
              </p>
              <Link 
                to="/booking"
                className="bg-amber-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-amber-400 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl"
              >
                Book Your Day Trip <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Day Trips Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {dayTrips.map((trip, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={idx % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                    <TripImage image={trip.image} title={trip.title} />
                  </div>
                  
                  {/* Content */}
                  <div className={`p-6 sm:p-8 flex flex-col justify-center ${idx % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                    <div className="flex items-start mb-4">
                      <div className={`bg-gradient-to-br from-${trip.color}-500 to-${trip.color}-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0`}>
                        {trip.number}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                          {trip.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 leading-relaxed mb-4">
                      {trip.description}
                    </p>

                    {trip.itinerary && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-neutral-900 mb-2">Itinerary:</h4>
                        <p className="text-neutral-700 leading-relaxed text-sm">
                          {trip.itinerary}
                        </p>
                      </div>
                    )}
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-neutral-900">Price includes:</span>
                          <span className="text-neutral-700"> {trip.includes}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <DollarSign className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-neutral-900">Price Excludes:</span>
                          <span className="text-neutral-700"> {trip.excludes}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      to="/contact"
                      className={`bg-${trip.color}-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-${trip.color}-600 transition-colors inline-flex items-center justify-center`}
                    >
                      Contact Us for prices <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              WHY CHOOSE MLAMBE ADVENTURE SAFARIS?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center group hover:-translate-y-2 duration-300">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-neutral-900 leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/day-trips-cta.jpg" 
            alt="Book Your Day Trip" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Explore Malawi's<br />Hidden Treasures?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Let us create an unforgettable day trip experience tailored to your interests. From cultural heritage to wildlife encounters, we've got you covered.
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
              Book Your Trip
              <ChevronRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortDayTrips;