import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Attractions = () => {
  const igatpuriPlaces = [
    {
      name: 'Dhamma Giri / Vipassana Meditation Center',
      distance: '10 km',
      time: '18 mins',
      description: 'World\'s largest Vipassana meditation center offering 10-day silent meditation courses in serene natural surroundings.',
      image: 'https://giri.vridhamma.org/sites/giri.vridhamma.org/files/styles/flexslider_full/public/2020-08-10%20%281%29.jpg?itok=55awi1OG',
      highlights: ['Silent meditation', 'Spiritual healing', '10-day courses', 'Peaceful environment']
    },
    {
      name: 'Bhavali Dam',
      distance: '8 km',
      time: '15 mins',
      description: 'Picturesque dam surrounded by lush greenery, perfect for picnics and enjoying nature\'s tranquility.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      highlights: ['Scenic beauty', 'Picnic spots', 'Photography', 'Nature walks']
    },
    {
      name: 'Bhandardara',
      distance: '45 km',
      time: '1 hour',
      description: 'Hill station known for its pristine lake, waterfalls, and the famous Arthur Lake with camping opportunities.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Arthur Lake', 'Camping', 'Waterfalls', 'Hill station']
    },
    {
      name: 'Tringalwadi Fort & Cave',
      distance: '20 km',
      time: '30 mins',
      description: 'Historic fort with ancient caves offering panoramic views and a glimpse into Maharashtra\'s rich heritage.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Tringalwadi_Fort.jpg',
      highlights: ['Historical fort', 'Ancient caves', 'Trekking', 'Heritage site']
    },
    {
      name: 'Ashoka Waterfall',
      distance: '12 km',
      time: '20 mins',
      description: 'Spectacular waterfall cascading from great heights, perfect for nature photography and monsoon visits.',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
      highlights: ['Waterfall', 'Photography', 'Monsoon beauty', 'Natural pools']
    },
    {
      name: 'Railway Waterfall',
      distance: '15 km',
      time: '25 mins',
      description: 'Unique waterfall visible from railway tracks, offering a spectacular view during monsoon season.',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
      highlights: ['Railway view', 'Monsoon special', 'Unique location', 'Train spotting']
    },
    {
      name: 'Karoli Ghat Top',
      distance: '18 km',
      time: '30 mins',
      description: 'Scenic viewpoint offering breathtaking views of the Western Ghats and surrounding valleys.',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
      highlights: ['Scenic viewpoint', 'Western Ghats', 'Valley views', 'Sunset point']
    },
    {
      name: 'Vallonne Vineyard',
      distance: '22 km',
      time: '35 mins',
      description: 'Boutique vineyard offering wine tasting experiences and tours amidst beautiful grape plantations.',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Wine tasting', 'Vineyard tours', 'Boutique wines', 'Grape plantations']
    },
    {
      name: 'Camel Valley Point',
      distance: '16 km',
      time: '28 mins',
      description: 'Scenic valley point with unique rock formations resembling camels, popular for photography and nature walks.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
      highlights: ['Rock formations', 'Photography', 'Nature walks', 'Unique landscape']
    },
    {
      name: 'Vaitarna Dam',
      distance: '15 km',
      time: '25 mins',
      description: 'Large dam with beautiful surroundings, offering boating facilities and scenic sunset views.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      highlights: ['Boating', 'Sunset views', 'Large reservoir', 'Water activities']
    },
    {
      name: 'Kasara Ghat',
      distance: '25 km',
      time: '40 mins',
      description: 'Mountain pass with stunning ghat views, popular for its scenic railway route and natural beauty.',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
      highlights: ['Mountain pass', 'Railway route', 'Ghat views', 'Natural beauty']
    }
  ];

  const nashikImages = [
    'https://images.app.goo.gl/TySos6pNxd2pYCGd7',
    'https://images.app.goo.gl/pysWQ4J39q2DoG1U6',
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F12%2FTrimbakeshwar_Temple-Nashik-Maharashtra-1.jpg&tbnid=ebPWg01uYIqD1M&vet=1&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTrimbakeshwar_Shiva_Temple&docid=Khj0iVQELqqlPM&w=6000&h=4000&hl=en-IN&source=sh%2Fx%2Fim%2Fm1%2F4&kgs=6dcc01fceec38801',
    'https://images.app.goo.gl/LPyVAKu79TKPm6Ej6',
    'https://images.app.goo.gl/pbq6xQevQVdhvGBN8',
    'https://images.app.goo.gl/ss41uqGjkC31a7RY6',
    'https://images.app.goo.gl/c8Bc4dA4JU8kuuLw8',
    'https://images.app.goo.gl/jFxTt7TmekQJBHhW7',
    'https://images.app.goo.gl/L4MbU1QrZsywJnU36',
    'https://images.app.goo.gl/d1SqcFmDCKWqfH3Q7',
    'https://images.app.goo.gl/LZRYphtraPszRb5P8',
    'https://images.app.goo.gl/FqevUA7N4CwQHC2R6',
    'https://images.app.goo.gl/UWDgDug69ZyKefjy9',
    'https://images.app.goo.gl/HtpMSTntSQEYxPZWA',
    'https://images.app.goo.gl/wCe3HwT2jiYhvsgEA',
    'https://images.app.goo.gl/drVCzTFXFtptjsP27',
  ];

  const nashikPlaces = [
    {
      name: 'Pandav Leni',
      distance: '45 km',
      time: '1 hour',
      description: 'Ancient Buddhist caves dating back to 1st century BC, showcasing remarkable rock-cut architecture.',
      images: [nashikImages[0], nashikImages[1]],
      highlights: ['Buddhist caves', 'Ancient architecture', 'Historical site', 'Rock-cut caves']
    },
    {
      name: 'Sita Gufa',
      distance: '50 km',
      time: '1.2 hours',
      description: 'Sacred cave associated with Ramayana, believed to be where Sita stayed during her exile period.',
      images: [nashikImages[2], nashikImages[3]],
      highlights: ['Religious site', 'Ramayana connection', 'Sacred cave', 'Spiritual significance']
    },
    {
      name: 'Trimbakeshwar Jyotirling Mandir',
      distance: '35 km',
      time: '50 mins',
      description: 'One of the 12 Jyotirlingas of Lord Shiva, ancient temple with significant religious importance.',
      images: [nashikImages[4], nashikImages[5]],
      highlights: ['Jyotirling', 'Ancient temple', 'Religious pilgrimage', 'Shiva temple']
    },
    {
      name: 'Ramkund',
      distance: '48 km',
      time: '1.1 hours',
      description: 'Sacred bathing ghat on Godavari river where devotees perform religious ceremonies and rituals.',
      images: [nashikImages[6], nashikImages[7]],
      highlights: ['Sacred bathing ghat', 'Godavari river', 'Religious ceremonies', 'Pilgrimage site']
    },
    {
      name: 'Harihar Fort',
      distance: '60 km',
      time: '1.5 hours',
      description: 'Triangular fort famous for its steep rock-cut steps and panoramic views from the summit.',
      images: [nashikImages[8], nashikImages[9]],
      highlights: ['Triangular fort', 'Rock-cut steps', 'Adventure trekking', 'Panoramic views']
    },
    {
      name: 'Sula Vineyards',
      distance: '55 km',
      time: '1.3 hours',
      description: 'India\'s leading winery offering premium wine tasting experiences and vineyard tours.',
      images: [nashikImages[10], nashikImages[11]],
      highlights: ['Premium wines', 'Wine tasting', 'Vineyard tours', 'Fine dining']
    },
    {
      name: 'Sundar Narayan Mandir',
      distance: '47 km',
      time: '1 hour',
      description: 'Beautiful temple dedicated to Lord Vishnu, known for its architectural beauty and peaceful atmosphere.',
      images: [nashikImages[12]],
      highlights: ['Vishnu temple', 'Beautiful architecture', 'Peaceful atmosphere', 'Religious site']
    },
    {
      name: 'Panchvati',
      distance: '50 km',
      time: '1.2 hours',
      description: 'Sacred place mentioned in Ramayana, believed to be where Lord Rama spent his exile period.',
      images: [nashikImages[13]],
      highlights: ['Ramayana site', 'Sacred place', 'Historical significance', 'Religious importance']
    },
    {
      name: 'Deolali Camp',
      distance: '52 km',
      time: '1.2 hours',
      description: 'Historic military cantonment town known for its pleasant climate and colonial architecture.',
      images: [nashikImages[14]],
      highlights: ['Military cantonment', 'Colonial architecture', 'Pleasant climate', 'Historical town']
    },
    {
      name: 'Anjeneri',
      distance: '58 km',
      time: '1.4 hours',
      description: 'Birthplace of Lord Hanuman, offering trekking opportunities and religious significance.',
      images: [nashikImages[15]],
      highlights: ['Hanuman birthplace', 'Trekking', 'Religious site', 'Mountain views']
    },
    {
      name: 'Bramhagiri',
      distance: '40 km',
      time: '55 mins',
      description: 'Source of river Godavari, sacred hill with temples and natural beauty.',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
      highlights: ['Godavari source', 'Sacred hill', 'Temples', 'Natural beauty']
    },
    {
      name: 'Swami Narayan Temple',
      distance: '49 km',
      time: '1.1 hours',
      description: 'Beautiful modern temple with intricate carvings and peaceful spiritual atmosphere.',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Modern temple', 'Intricate carvings', 'Spiritual atmosphere', 'Beautiful architecture']
    },
    {
      name: 'Durgawadi Waterfall',
      distance: '42 km',
      time: '1 hour',
      description: 'Scenic waterfall surrounded by dense forest, perfect for nature lovers and photography.',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
      highlights: ['Scenic waterfall', 'Dense forest', 'Nature photography', 'Trekking']
    },
    {
      name: 'Someshwar Temple',
      distance: '46 km',
      time: '1 hour',
      description: 'Ancient Shiva temple with beautiful architecture located on the banks of Godavari river.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      highlights: ['Ancient Shiva temple', 'Godavari banks', 'Beautiful architecture', 'Religious site']
    },
    {
      name: 'Gangapur Dam',
      distance: '65 km',
      time: '1.5 hours',
      description: 'Large reservoir with beautiful surroundings, popular for picnics and water sports.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Large reservoir', 'Water sports', 'Picnic spot', 'Scenic surroundings']
    },
    {
      name: 'Muktidham Mandir',
      distance: '51 km',
      time: '1.2 hours',
      description: 'White marble temple complex with replicas of all major pilgrimage sites of India.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      highlights: ['Marble temple', 'Pilgrimage replicas', 'Beautiful complex', 'Religious significance']
    }
  ];

  // Update the rest of the nashikPlaces to ensure all have an images array
  const updatedNashikPlaces = [
    ...nashikPlaces.slice(0, 10),
    ...nashikPlaces.slice(10).map(place => ({
      ...place,
      images: place.images || (place.image ? [place.image] : []),
    })),
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <FloatingContact />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.5)), url('https://images.unsplash.com/photo-1464822759844-d150ad6d1c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Removed: Explore Around Igatpuri, Discover..., All distances... */}
        </div>
      </section>

      {/* Igatpuri Places Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              Tourist Places [Igatpuri]
            </h2>
            <p className="text-xl text-charcoal/80">Discover nearby attractions around Igatpuri</p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {igatpuriPlaces.map((place, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-3xl overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500 group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <div className="bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-charcoal" />
                          <span className="text-charcoal font-medium text-xs">{place.distance}</span>
                        </div>
                        <div className="bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-charcoal" />
                          <span className="text-charcoal font-medium text-xs">{place.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">
                        {place.name}
                      </h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                        {place.description}
                      </p>

                      <div className="grid grid-cols-2 gap-1 mb-4">
                        {place.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                            <span className="text-charcoal/70 text-xs">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gold text-charcoal px-4 py-2 rounded-full font-semibold text-sm hover:bg-bronze transition-colors duration-200 flex items-center justify-center space-x-2">
                        <ExternalLink className="h-3 w-3" />
                        <span>Get Directions</span>
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Nashik Places Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              Tourist Places [Nashik]
            </h2>
            <p className="text-xl text-charcoal/80">Explore famous destinations in Nashik</p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {updatedNashikPlaces.map((place, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-ivory rounded-3xl overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500 group h-full">
                    <div className="relative overflow-hidden">
                      {Array.isArray(place.images) && place.images.length > 0 ? (
                        <Carousel className="w-full">
                          <CarouselContent>
                            {place.images.map((img, imgIdx) => (
                              <CarouselItem key={imgIdx}>
                                <img
                                  src={img}
                                  alt={place.name + ' image ' + (imgIdx + 1)}
                                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      ) : (
                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                          No image available
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <div className="bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-charcoal" />
                          <span className="text-charcoal font-medium text-xs">{place.distance}</span>
                        </div>
                        <div className="bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-charcoal" />
                          <span className="text-charcoal font-medium text-xs">{place.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">
                        {place.name}
                      </h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                        {place.description}
                      </p>

                      <div className="grid grid-cols-2 gap-1 mb-4">
                        {place.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                            <span className="text-charcoal/70 text-xs">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-charcoal text-ivory px-4 py-2 rounded-full font-semibold text-sm hover:bg-charcoal/80 transition-colors duration-200 flex items-center justify-center space-x-2">
                        <ExternalLink className="h-3 w-3" />
                        <span>Get Directions</span>
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
