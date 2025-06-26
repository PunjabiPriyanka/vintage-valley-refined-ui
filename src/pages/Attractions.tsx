
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Clock, ExternalLink, Mountain, Droplets, Church, Grape } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      category: 'Wineries',
      icon: Grape,
      color: 'from-purple-500/20 to-pink-500/20',
      places: [
        {
          name: 'Sula Vineyards',
          distance: '25 km',
          time: '35 mins',
          description: 'Premium winery offering wine tasting experiences, vineyard tours, and gourmet dining with panoramic valley views.',
          image: 'https://images.unsplash.com/photo-1506377872008-6645d6258816?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Wine tasting', 'Vineyard tours', 'Fine dining', 'Valley views']
        },
        {
          name: 'York Winery',
          distance: '28 km',
          time: '40 mins',
          description: 'Boutique winery known for premium wines and intimate tasting sessions in a serene hillside setting.',
          image: 'https://images.unsplash.com/photo-1574870111867-089730e5a72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
          highlights: ['Boutique wines', 'Private tastings', 'Hillside views', 'Romantic setting']
        }
      ]
    },
    {
      category: 'Waterfalls',
      icon: Droplets,
      color: 'from-blue-500/20 to-cyan-500/20',
      places: [
        {
          name: 'Ashoka Waterfall',
          distance: '12 km',
          time: '20 mins',
          description: 'Spectacular waterfall cascading from great heights, perfect for nature photography and peaceful moments.',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Photography', 'Natural pools', 'Trekking', 'Monsoon beauty']
        },
        {
          name: 'Vaitarna Dam',
          distance: '15 km',
          time: '25 mins',
          description: 'Scenic dam surrounded by lush greenery, offering boating activities and stunning sunset views.',
          image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
          highlights: ['Boating', 'Sunset views', 'Picnic spots', 'Bird watching']
        }
      ]
    },
    {
      category: 'Temples & Heritage',
      icon: Church,
      color: 'from-orange-500/20 to-red-500/20',
      places: [
        {
          name: 'Ghatandevi Temple',
          distance: '8 km',
          time: '15 mins',
          description: 'Ancient temple dedicated to Goddess Ghatandevi, known for its spiritual significance and architectural beauty.',
          image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Spiritual significance', 'Architecture', 'Peaceful atmosphere', 'Cultural heritage']
        },
        {
          name: 'Tringalwadi Fort',
          distance: '20 km',
          time: '30 mins',
          description: 'Historic fort offering panoramic views of the Sahyadri ranges and a glimpse into Maharashtra\'s rich history.',
          image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Historical significance', 'Panoramic views', 'Trekking', 'Photography']
        }
      ]
    },
    {
      category: 'Hills & Viewpoints',
      icon: Mountain,
      color: 'from-green-500/20 to-emerald-500/20',
      places: [
        {
          name: 'Kalsubai Peak',
          distance: '35 km',
          time: '45 mins',
          description: 'Highest peak in Maharashtra offering breathtaking sunrise views and challenging trekking experiences.',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Highest peak', 'Sunrise views', 'Adventure trekking', 'Mountain camping']
        },
        {
          name: 'Dhamma Giri',
          distance: '10 km',
          time: '18 mins',
          description: 'Vipassana meditation center set in serene hills, perfect for spiritual retreat and mindfulness practices.',
          image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Meditation center', 'Spiritual retreat', 'Peaceful environment', 'Mindfulness']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.5)), url('https://images.unsplash.com/photo-1464822759844-d150ad6d1c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-6">
            Explore Igatpuri
          </h1>
          <p className="text-xl text-ivory/90 max-w-3xl mx-auto mb-8">
            Discover the natural wonders, spiritual destinations, and cultural treasures surrounding Vintage Valley Resort
          </p>
          <div className="inline-flex items-center space-x-2 bg-ivory/10 backdrop-blur-sm rounded-full px-6 py-3">
            <MapPin className="h-5 w-5 text-gold" />
            <span className="text-ivory font-medium">All distances from Vintage Valley Resort</span>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-16">
          {attractions.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className={`bg-gradient-to-br ${category.color} rounded-full p-3`}>
                    <category.icon className="h-8 w-8 text-charcoal" />
                  </div>
                  <h2 className="font-playfair text-4xl font-bold text-charcoal">
                    {category.category}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.places.map((place, placeIndex) => (
                  <div key={placeIndex} className="bg-white rounded-3xl overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <div className="bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-charcoal" />
                          <span className="text-charcoal font-medium text-sm">{place.distance}</span>
                        </div>
                        <div className="bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-charcoal" />
                          <span className="text-charcoal font-medium text-sm">{place.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">
                        {place.name}
                      </h3>
                      <p className="text-charcoal/80 leading-relaxed mb-6">
                        {place.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {place.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gold rounded-full" />
                            <span className="text-charcoal/70 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <button className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-bronze transition-colors duration-200 flex items-center space-x-2">
                          <ExternalLink className="h-4 w-4" />
                          <span>Open in Maps</span>
                        </button>
                        <button className="border-2 border-charcoal text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-charcoal hover:text-ivory transition-colors duration-200">
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section-padding bg-gradient-to-br from-charcoal to-charcoal/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-ivory mb-8">
            Travel Tips & Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ivory/10 backdrop-blur-sm rounded-3xl p-8 border border-ivory/20">
              <h3 className="font-playfair text-xl font-semibold text-ivory mb-4">
                Best Time to Visit
              </h3>
              <p className="text-ivory/80 leading-relaxed">
                October to March offers pleasant weather for sightseeing. Monsoon season (June-September) brings lush greenery and spectacular waterfalls.
              </p>
            </div>
            <div className="bg-ivory/10 backdrop-blur-sm rounded-3xl p-8 border border-ivory/20">
              <h3 className="font-playfair text-xl font-semibold text-ivory mb-4">
                Transportation
              </h3>
              <p className="text-ivory/80 leading-relaxed">
                Our concierge can arrange guided tours, private transportation, or rental vehicles to explore these attractions comfortably and safely.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-bronze transition-all duration-300 transform hover:scale-105">
              Plan Your Adventure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Attractions;
