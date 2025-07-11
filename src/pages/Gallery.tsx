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
    { id: 28, category: 'nature', src: '/images/nature-balcony-view-1.jpg', alt: 'Balcony View of Greenery and Mist' },
    { id: 29, category: 'nature', src: '/images/nature-pool-building-1.jpg', alt: 'Resort Building and Pool with Greenery' },
    { id: 30, category: 'nature', src: '/images/nature-balcony-table-flowers.jpg', alt: 'Balcony Table with Flowers and Scenic View' },
    { id: 31, category: 'nature', src: '/images/nature-playground-1.jpg', alt: 'Children Playground and Green Lawn' },
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-charcoal to-charcoal/90">
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
                    ? 'bg-gold text-charcoal shadow-lg transform scale-105'
                    : 'bg-ivory text-charcoal hover:bg-gold/20 hover:scale-105'
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        <div className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4">
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
      <section className="section-padding bg-gradient-to-r from-charcoal to-charcoal/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-ivory mb-6">
            Create Your Own Memories
          </h2>
          <p className="text-xl text-ivory/80 mb-8">
            Book your stay and become part of the Vintage Valley Resort story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-bronze transition-all duration-300 transform hover:scale-105">
              Book Your Stay
            </button>
            <button className="border-2 border-ivory text-ivory px-8 py-4 rounded-full font-semibold text-lg hover:bg-ivory hover:text-charcoal transition-all duration-300">
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
