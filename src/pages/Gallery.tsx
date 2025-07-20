import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'dining', name: 'Dining' },
    { id: 'nature', name: 'Nature & Views' },
    { id: 'events', name: 'Events' }
  ];

  const galleryImages = [
    { id: 1, category: 'rooms', src: '/images/deluxe-studio-suite-1.jpg', alt: 'Deluxe Studio Suite 1' },
    { id: 2, category: 'rooms', src: '/images/deluxe-studio-suite-2.jpg', alt: 'Deluxe Studio Suite 2' },
    { id: 3, category: 'rooms', src: '/images/deluxe-studio-suite-3.jpg', alt: 'Deluxe Studio Suite 3' },
    { id: 4, category: 'rooms', src: '/images/skyline-deluxe-1.jpg', alt: 'Skyline Deluxe 1' },
    { id: 5, category: 'rooms', src: '/images/skyline-deluxe-2.jpg', alt: 'Skyline Deluxe 2' },
    { id: 6, category: 'rooms', src: '/images/skyline-deluxe-3.jpg', alt: 'Skyline Deluxe 3' },
    { id: 7, category: 'rooms', src: '/images/deluxe-edge-view-1.jpg', alt: 'Deluxe Edge View 1' },
    { id: 8, category: 'rooms', src: '/images/deluxe-edge-view-2.jpg', alt: 'Deluxe Edge View 2' },
    { id: 9, category: 'rooms', src: '/images/deluxe-edge-view-3.jpg', alt: 'Deluxe Edge View 3' },
    { id: 10, category: 'rooms', src: '/images/1.jpeg', alt: 'Lotus Family Suite 1' },
    { id: 11, category: 'rooms', src: '/images/2.jpeg', alt: 'Lotus Family Suite 2' },
    { id: 12, category: 'rooms', src: '/images/3.jpeg', alt: 'Lotus Family Suite 3' },
    { id: 13, category: 'rooms', src: '/images/presidential-sky-villa-1.jpg', alt: 'Presidential Sky Villa 1' },
    { id: 14, category: 'rooms', src: '/images/presidential-sky-villa-2.jpg', alt: 'Presidential Sky Villa 2' },
    { id: 15, category: 'rooms', src: '/images/presidential-sky-villa-3.jpg', alt: 'Presidential Sky Villa 3' },
    { id: 36, category: 'rooms', src: '/images/room/AB004964.JPG', alt: 'Room Suite AB004964' },
    { id: 37, category: 'rooms', src: '/images/room/AB004978.JPG', alt: 'Room Suite AB004978' },
    { id: 38, category: 'rooms', src: '/images/room/AB005018.JPG', alt: 'Room Suite AB005018' },
    { id: 39, category: 'rooms', src: '/images/room/AB005030.JPG', alt: 'Room Suite AB005030' },
    { id: 40, category: 'rooms', src: '/images/room/AB005053.JPG', alt: 'Room Suite AB005053' },
    { id: 41, category: 'rooms', src: '/images/room/AB005063.JPG', alt: 'Room Suite AB005063' },
    { id: 42, category: 'rooms', src: '/images/room/AB005094.JPG', alt: 'Room Suite AB005094' },
    { id: 43, category: 'rooms', src: '/images/room/AB005097.JPG', alt: 'Room Suite AB005097' },
    { id: 44, category: 'rooms', src: '/images/room/AB005123.JPG', alt: 'Room Suite AB005123' },
    { id: 45, category: 'rooms', src: '/images/room/AB004906.JPG', alt: 'Room Suite AB004906' },
    { id: 46, category: 'rooms', src: '/images/room/AB004915.JPG', alt: 'Room Suite AB004915' },
    { id: 47, category: 'rooms', src: '/images/room/AB004929.JPG', alt: 'Room Suite AB004929' },
    { id: 16, category: 'facilities', src: '/images/infinity-pool-1.jpg', alt: 'Infinity Pool 1' },
    { id: 17, category: 'facilities', src: '/images/palatio-banquet-1.jpg', alt: 'Palatio Banquet' },
    { id: 18, category: 'facilities', src: '/images/tarkari-restaurant-1.jpg', alt: 'Tarkari Restaurant' },
    { id: 19, category: 'facilities', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Spa & Wellness' },
    { id: 20, category: 'facilities', src: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Fitness Studio' },
    { id: 21, category: 'facilities', src: 'https://plus.unsplash.com/premium_photo-1742944886085-a096b536af0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8OCUyMGJhbGwlMjBwb29sfGVufDB8fDB8fHww', alt: 'Game Zone' },
    { id: 22, category: 'facilities', src: '/images/nature-trails-1.jpg', alt: 'Nature Trails' },
    { id: 23, category: 'facilities', src: '/images/conference-hall-1.jpg', alt: 'Conference Hall' },
    { id: 24, category: 'dining', src: '/images/dining-drinks-1.jpg', alt: 'Colorful Cocktails on Table' },
    { id: 25, category: 'dining', src: '/images/dining-restaurant-1.jpg', alt: 'Restaurant Dining Area' },
    { id: 26, category: 'dining', src: '/images/dining-drinks-2.jpg', alt: 'Assorted Drinks at Bar' },
    { id: 27, category: 'dining', src: '/images/dining-rose-table.jpg', alt: 'Rose on Dining Table' },
    { id: 48, category: 'dining', src: '/images/room/AB004776.JPG', alt: 'Dining Room AB004776' },
    { id: 49, category: 'dining', src: '/images/room/AB004771.JPG', alt: 'Dining Room AB004771' },
    { id: 50, category: 'dining', src: '/images/room/AB004778.JPG', alt: 'Dining Room AB004778' },
    { id: 51, category: 'dining', src: '/images/room/AB004798.JPG', alt: 'Dining Room AB004798' },
    { id: 52, category: 'dining', src: '/images/room/AB004804.JPG', alt: 'Dining Room AB004804' },
    { id: 53, category: 'dining', src: '/images/room/AB004812.JPG', alt: 'Dining Room AB004812' },
    { id: 54, category: 'dining', src: '/images/room/AB004749.JPG', alt: 'Dining Room AB004749' },
    { id: 28, category: 'nature', src: 'https://images.pexels.com/photos/17707872/pexels-photo-17707872.jpeg?cs=srgb&dl=pexels-k3ithvision-17707872.jpg&fm=jpg', alt: 'Scenic Nature View 1' },
    { id: 29, category: 'nature', src: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/09/sunrise-at-the-Kalsubai-Peak.jpg', alt: 'Sunrise at Kalsubai Peak' },
    { id: 30, category: 'nature', src: 'https://www.manasresort.in/wp-content/uploads/2021/10/160351276Camel_Valley.jpg', alt: 'Camel Valley' },
    { id: 31, category: 'nature', src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a2/c0/ca/falls.jpg?w=500&h=500&s=1', alt: 'Waterfall in Nature' },
    { id: 32, category: 'events', src: '/images/event-1.jpg', alt: 'Event Photo 1' },
    { id: 33, category: 'events', src: '/images/event-2.jpg', alt: 'Event Photo 2' },
    { id: 34, category: 'events', src: '/images/event-3.jpg', alt: 'Event Photo 3' },
    { id: 35, category: 'events', src: '/images/event-4.jpg', alt: 'Event Photo 4' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = filteredImages.find(img => img.id === lightboxImage);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-800 to-gray-800/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-6">
            Gallery
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
            Immerse yourself in the visual story of Vintage Valley Resort through our curated collection of moments
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-gray-800 shadow-lg transform scale-105'
                    : 'bg-ivory text-gray-800 hover:bg-gold/20 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Horizontal Scroll Gallery */}
          <div className="md:hidden flex overflow-x-auto space-x-4 pb-2">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-64 cursor-pointer rounded-2xl luxury-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800/60 via-transparent to-transparent p-2">
                    <p className="text-ivory font-medium text-sm truncate">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop Grid Gallery */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden rounded-2xl luxury-shadow hover:shadow-2xl transition-all duration-500 ${
                  index % 8 === 0 || index % 8 === 3 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      index % 8 === 0 || index % 8 === 3 ? 'h-96' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-ivory font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && currentLightboxImage && (
        <div className="fixed inset-0 bg-gray-800/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-ivory hover:text-gold transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-ivory hover:text-gold transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-ivory hover:text-gold transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="max-w-4xl max-h-full flex items-center justify-center">
            <img
              src={currentLightboxImage.src}
              alt={currentLightboxImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-ivory text-center">
            <p className="font-medium text-lg">{currentLightboxImage.alt}</p>
            <p className="text-ivory/60 text-sm mt-1">
              {filteredImages.findIndex(img => img.id === lightboxImage) + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-800 to-gray-800/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-ivory mb-6">
            Create Your Own Memories
          </h2>
          <p className="text-xl text-ivory/80 mb-8">
            Book your stay and become part of the Vintage Valley Resort story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-bronze transition-all duration-300 transform hover:scale-105">
              Book Your Stay
            </button>
            <button className="border-2 border-ivory text-ivory px-8 py-4 rounded-full font-semibold text-lg hover:bg-ivory hover:text-gray-800 transition-all duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
