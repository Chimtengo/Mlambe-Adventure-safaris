import React from 'react';
import { MapPin, Compass, Mountain, Waves, Camera, Ship, Tent, Users, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/destinations-hero.jpg" 
            alt="Southern Africa Destinations" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-lg mb-4 uppercase tracking-widest">
            Time to Travel the World
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our Destinations
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Explore the breathtaking beauty and diversity of Southern Africa with Mlambe Adventure Safaris. Discover our handpicked destinations in Malawi, Mozambique, and Zambia.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            EXPLORE OUR DESTINATIONS
          </h2>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
            Explore the breathtaking beauty and diversity of Southern Africa with us. Discover our handpicked destinations in Malawi, Mozambique, and Zambia.
          </p>
        </div>
      </section>

      {/* MALAWI SECTION */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Malawi Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold text-2xl mb-4">
              MALAWI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              The Warm Heart of Africa
            </h2>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              Malawi, a hidden gem in southeastern Africa, offers a unique and unforgettable tourism experience. With its stunning natural beauty, diverse wildlife, and friendly locals, Malawi is an exciting destination for tours and safaris.
            </p>
          </div>

          {/* Natural Wonders */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/malawi-natural-wonders.jpg" 
                  alt="Malawi Natural Wonders" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80';
                  }}
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Mountain className="w-8 h-8 text-amber-500 mr-3" />
                  NATURAL WONDERS:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900">LAKE MALAWI:</h4>
                      <p className="text-neutral-700">a crystal-clear freshwater lake with pristine beaches and snorkeling opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900">MOUNT MULANJE:</h4>
                      <p className="text-neutral-700">a scenic mountain with hiking trails and tea plantations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900">NYIKA NATIONAL PARK:</h4>
                      <p className="text-neutral-700">a scenic park with hiking trails and stunning views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wildlife and National Parks */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Camera className="w-8 h-8 text-amber-500 mr-3" />
                  WILDLIFE AND NATIONAL PARKS:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900">Liwonde National Park:</h4>
                      <p className="text-neutral-700">home to elephants, lions, leopards, and hippos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900">Nyala Park:</h4>
                      <p className="text-neutral-700">known for its nyala antelopes and scenic hiking trails</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900">Kasungu National Park:</h4>
                      <p className="text-neutral-700">home to elephants, buffaloes, and antelopes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                <img 
                  src="/images/malawi-wildlife.jpg" 
                  alt="Malawi Wildlife" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Safaris */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/malawi-safaris.jpg" 
                  alt="Malawi Safaris" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80';
                  }}
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Compass className="w-8 h-8 text-amber-500 mr-3" />
                  SAFARIS:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Game drives in Liwonde National Park, Kasungu National Parks, Majete Game Reserve, Nkhotakota Game Reserve, Nyika National Park.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Walking safaris in Nyika National Park</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Boat safaris on Lake Malawi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Experiences */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-amber-500 mr-3" />
                  CULTURAL EXPERIENCES:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Visit traditional villages and learn about local customs</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Explore the vibrant markets and craft centers</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Discover the history and significance of the ancient rock art</p>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                <img 
                  src="/images/malawi-cultural.jpg" 
                  alt="Malawi Cultural Experiences" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Adventure Activities */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                ADVENTURE ACTIVITIES:
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                  <Waves className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <p className="text-neutral-700 font-semibold">Snorkeling and diving in Lake Malawi</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                  <Mountain className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <p className="text-neutral-700 font-semibold">Hiking and rock climbing in Mount Mulanje, Nkhoma Mountain, Bunda Mountain</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                  <Ship className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <p className="text-neutral-700 font-semibold">Kayaking and canoeing on the lakes and rivers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodations */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
                <Tent className="w-8 h-8 mr-3" />
                ACCOMMODATIONS:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <p className="font-semibold text-lg">Luxury lodges and camps</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <p className="font-semibold text-lg">Eco-lodges and community-based tourism initiatives</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <p className="font-semibold text-lg">Budget-friendly accommodations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Malawi Conclusion */}
          <div className="text-center mb-12">
            <p className="text-xl text-neutral-700 leading-relaxed italic mb-8">
              Malawi offers a unique and authentic tourism experience, with its untouched wilderness, rich culture, and friendly people. Come and discover the beauty and adventure that Malawi has to offer!
            </p>
          </div>

          {/* Popular Tour Packages */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/images/malawi-tours.jpg" 
                alt="Malawi Tour Packages" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80';
                }}
              />
            </div>

            <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Some popular tour packages in Malawi include:
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-6 py-3">
                <h4 className="font-bold text-xl text-neutral-900 mb-2">The Malawi Explorer:</h4>
                <p className="text-neutral-700">a 7-day tour covering Liwonde National Park, Lake Malawi, and Mount Mulanje</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-6 py-3">
                <h4 className="font-bold text-xl text-neutral-900 mb-2">The Wildlife Safari:</h4>
                <p className="text-neutral-700">a 5-day tour focusing on game drives in Liwonde and Majete Game Reserve</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-6 py-3">
                <h4 className="font-bold text-xl text-neutral-900 mb-2">The Cultural Adventure:</h4>
                <p className="text-neutral-700">a 7-day tour exploring the local culture, markets, and rock art.</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-6 py-3">
                <h4 className="font-bold text-xl text-neutral-900 mb-2">Northern Malawi Circuit:</h4>
                <p className="text-neutral-700">a 12 Day tour exploring the wildlife, culture Beach and historical sites.</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-6 py-3">
                <h4 className="font-bold text-xl text-neutral-900 mb-2">Southern Malawi Tour:</h4>
                <p className="text-neutral-700">a 14 Day experience that forms the best classic tour of Malawi.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-amber-600 mb-6">
                Come and experience the warm heart of Africa!
              </p>
              <Link 
                to="/tours"
                className="inline-flex items-center bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-colors"
              >
                View All Tours <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOZAMBIQUE SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mozambique Header */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img 
              src="/images/mozambique-hero.jpg" 
              alt="Mozambique" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80';
              }}
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 md:p-12 text-white">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full font-bold text-2xl mb-4">
                  MOZAMBIQUE
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  A Hidden Gem for Tourism
                </h2>
                <p className="text-lg leading-relaxed max-w-3xl">
                  Mozambique, a country located in southeastern Africa, offers a unique and unexplored tourism experience. With its rich history, stunning beaches, crystal-clear waters, and diverse wildlife, Mozambique is an exciting destination for adventure seekers, beach lovers, and cultural enthusiasts.
                </p>
              </div>
            </div>
          </div>

          {/* Beaches and Coastline */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Waves className="w-8 h-8 text-blue-500 mr-3" />
                  BEACHES AND COASTLINE:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">2,700 km (1,700 mi) of pristine coastline</p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Bazaruto Archipelago: a UNESCO Biosphere Reserve</p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Quirimbas Archipelago: a chain of 32 islands</p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Popular beach destinations: Tofo, Vilanculos, and Pemba</p>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/mozambique-beaches.jpg" 
                  alt="Mozambique Beaches" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80';
                  }}
                />
              </div>
            </div>
          </div>


          {/* Marine Life and Activities */}


          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                MARINE LIFE AND ACTIVITIES:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-4xl mb-3">🤿</div>
                  <p className="text-neutral-700 font-semibold">Diving and snorkeling: explore coral reefs and marine life</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-4xl mb-3">🐋</div>
                  <p className="text-neutral-700 font-semibold">Whale watching: humpback whales and dolphins</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-4xl mb-3">🎣</div>
                  <p className="text-neutral-700 font-semibold">Fishing: deep-sea fishing and fly fishing</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-4xl mb-3">⛵</div>
                  <p className="text-neutral-700 font-semibold">Boat cruises and sailing</p>
                </div>
              </div>
            </div>
          </div>


          {/* Wildlife and National Parks */}


          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/mozambique-wildlife.jpg" 
                  alt="Mozambique Wildlife" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80';
                  }}
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Camera className="w-8 h-8 text-blue-500 mr-3" />
                  WILDLIFE AND NATIONAL PARKS:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Gorongosa National Park: a restored wilderness area</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Niassa National Reserve: home to elephant, lion, and leopard</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Limpopo National Park: part of the Great Limpopo Transfrontier Park</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Banhine National Park: diverse wildlife and birdlife</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Culture and History */}



          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-blue-500 mr-3" />
                  CULTURE AND HISTORY:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Rich cultural heritage: Portuguese, Arab, and African influences</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Historical sites: Fortaleza de Maputo, Ilha de Mozambique, and Ponta de Ouro</p>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Vibrant markets and local cuisine</p>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                <img 
                  src="/images/mozambique-culture.jpg" 
                  alt="Mozambique Culture" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Adventure and Activities */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                ADVENTURE AND ACTIVITIES:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-4xl mb-3">🏄</div>
                  <p className="text-neutral-700 font-semibold">Surfing and kitesurfing</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-4xl mb-3">🥾</div>
                  <p className="text-neutral-700 font-semibold">Hiking and rock climbing</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-4xl mb-3">🐎</div>
                  <p className="text-neutral-700 font-semibold">Horseback riding and quad biking</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-4xl mb-3">🏝️</div>
                  <p className="text-neutral-700 font-semibold">Island hopping and sailing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodations */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
                <Tent className="w-8 h-8 mr-3" />
                ACCOMMODATIONS:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <p className="font-semibold text-lg">Luxury resorts and beach lodges</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <p className="font-semibold text-lg">Eco-lodges and bush camps</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <p className="font-semibold text-lg">Budget-friendly guesthouses and hostels</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mozambique Conclusion */}
          <div className="text-center">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/images/mozambique-conclusion.jpg" 
                alt="Mozambique Experience" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80';
                }}
              />
            </div>
            <p className="text-xl text-neutral-700 leading-relaxed italic">
              Mozambique offers a unique blend of relaxation, adventure, and cultural experiences. With its stunning coastline, diverse wildlife, and rich history, Mozambique is an exciting destination for tourists seeking an off-the-beaten-path experience
            </p>
          </div>
        </div>
      </section>

      {/* ZAMBIA SECTION */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Zambia Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-3 rounded-full font-bold text-2xl mb-4">
              ZAMBIA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              ZAMBIA EXPERIENCE
            </h2>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              Zambia a landlocked country in southern Africa offers a unique and unspoiled tourism experience. With its vast wilderness areas, majestic waterfalls, and rich cultural heritage, Zambia is an exciting destination for adventure seekers, nature lovers, and cultural enthusiasts.
            </p>
          </div>

          {/* Victoria Falls */}
          <div className="mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src="/images/zambia-victoria-falls.jpg" 
                alt="Victoria Falls" 
                className="w-full h-full object-cover"
                
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-8 md:p-12 text-white">
                  <h3 className="text-4xl font-bold mb-4">VICTORIA FALLS</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-2">-Location: Livingstone, southern Zambia</p>
                      <p className="mb-2">-Height: 108 meters (354 ft)</p>
                      <p className="mb-2">-Width: 1.7 kilometers (1.1m)</p>
                      <p className="mb-2">-one of the seven Natural wonders of the world</p>
                      <p>-Local name: Mosi-oa-Tunya (the smoke that thunders)</p>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        Victoria falls is the breathtaking spectacle that attracts millions of visitors annually. The falls are a UNESCO world heritage site and one of the largest waterfalls in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Activities include:</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-neutral-700">viewing the falls from various vantage points</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-neutral-700">white water rafting and kayaking</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-neutral-700">Bungee jumping and zip lining</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-neutral-700">Helicopter flights over the falls</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-neutral-700">Sunset cruises on the Zambezi River</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-neutral-700">Visiting the nearby Livingstone Island and devils pool</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kafue National Park */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/zambia-kafue.jpg" 
                  alt="Kafue National Park" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80';
                  }}
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6">KAFUE NATIONAL PARK</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-neutral-700">-Location: Central Zambia</p>
                  <p className="text-neutral-700">-Size: Approximately 22,400km (8,650 sqmi)</p>
                  <p className="text-neutral-700">-Zambia's oldest and largest national park</p>
                  <p className="text-neutral-700">-Diverse habitals: mlombo woodlands, glasslands, and wetlands</p>
                </div>
                
                <div className="mb-6">
                  <p className="font-semibold text-neutral-900 mb-3">Home to over 400 species of birds and wide range of wildlife, including:</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Large herds of antelope (puku, impala and lechwe)</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Lions, cheetahs and leopards</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Elephants, hippos and crocodiles</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-neutral-900 mb-3">Activities in Kafue National Park include:</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Game drives and walking safaris</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Bird watching and photography</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Fishing and boat cruises</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Camping and lodging at various camps and lodges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Zambezi National Park */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6">LOWER ZAMBEZI NATIONAL PARK</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-neutral-700">-Location: southeastern Zambia</p>
                  <p className="text-neutral-700">-Size: approximately 4,092km (1,580sqmi)</p>
                  <p className="text-neutral-700">-situated on the banks of the Zambezi River</p>
                </div>
                
                <div className="mb-6">
                  <p className="font-semibold text-neutral-900 mb-3">known for its stunning scenery and diverse wildlife, including:</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Elephants, hippos and crocodiles</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Lions, leopards and cheetahs</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">over 400 species of birds</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-neutral-900 mb-3">Activities in Lower Zambezi National Park include:</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Game drives and walking safaris</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Fishing and boat cruises</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Canoeing and kayaking</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Camping and lodging at various camps and lodges</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                <img 
                  src="/images/zambia-lower-zambezi.jpg" 
                  alt="Lower Zambezi National Park" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=80';
                  }}
                />
              </div>
            </div>
          </div>

          {/* South Luangwa National Park */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/zambia-south-luangwa.jpg" 
                  alt="South Luangwa National Park" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80';
                  }}
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6">SOUTH LUANGWA NATIONAL PARK</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-neutral-700">-Location: Eastern Zambia</p>
                  <p className="text-neutral-700">-Size: Approximately 9,050km (3,500 sqmi)</p>
                  <p className="text-neutral-700">-known for its high concentration of leopards and lions</p>
                </div>
                
                <div className="mb-6">
                  <p className="font-semibold text-neutral-900 mb-3">Home to over 400 species of birds and a wide range of wildlife, including:</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Elephants, hippos and crocodiles</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Antelopes (impala, puku and kudu)</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Buffalo and giraffes</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-neutral-900 mb-3">Activities in south Luangwa National Park include:</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Game drives and walking safaris</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Bird watching and photography</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Night drives to spot nocturnal animals</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700">Camping and lodging at various camps and lodges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zambia Summary */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/images/zambia-experience.jpg" 
                alt="Zambia Experience" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80';
                }}
              />
            </div>

            <p className="text-xl text-neutral-700 leading-relaxed text-center mb-8 italic">
              These four destinations offer a unique and unforgettable experience for tourists, showcasing Zambia's natural beauty, wildlife and adventure opportunities.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-4">Cultural Experiences:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Visit traditional villages and learn about local customs</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">explore the vibrant markets and craft centers</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Discover the history and significance of the ancient rock art.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-4">Accommodation</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Luxury lodges and camps</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Budget friendly guesthouses and backpackers</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700">Eco lodges and community-based tourism initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zambia Conclusion */}
          <div className="text-center">
            <p className="text-xl text-neutral-700 leading-relaxed italic">
              Zambia offers a unique and authentic tourism experience with its untouched wilderness, rich culture, and friendly people. Come and discover the beauty and adventure that Zambia has to offer
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            WHY CHOOSE US?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="font-semibold text-lg">Local expertise and knowledge</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <p className="font-semibold text-lg">Personalized service</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Compass className="w-12 h-12 mx-auto mb-4" />
              <p className="font-semibold text-lg">Unique, off-the-beaten-path experiences</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <p className="font-semibold text-lg">Commitment to responsible tourism</p>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            START YOUR JOURNEY TODAY!
          </h3>
          <p className="text-xl text-white mb-8">
            Contact us to plan your dream Southern African adventure. Let us show you the warm heart of Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-colors inline-block"
            >
              Get In Touch With Us
            </Link>
            <Link 
              to="/tours"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors inline-block"
            >
              View Our Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
