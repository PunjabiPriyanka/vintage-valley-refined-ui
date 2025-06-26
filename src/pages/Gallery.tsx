
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
    { id: 1, category: 'rooms', src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Deluxe Studio Suite' },
    { id: 2, category: 'facilities', src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Infinity Pool' },
    { id: 3, category: 'nature', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Mountain Views' },
    { id: 4, category: 'dining', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Fine Dining Restaurant' },
    { id: 5, category: 'rooms', src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80', alt: 'Lotus Family Suite' },
    { id: 6, category: 'facilities', src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Spa Treatment Room' },
    { id: 7, category: 'events', src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80', alt: 'Wedding Setup' },
    { id: 8, category: 'nature', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80', alt: 'Nature Trail' },
    { id: 9, category: 'rooms', src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Presidential Suite' },
    { id: 10, category: 'facilities', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Fitness Center' },
    { id: 11, category: 'dining', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80', alt: 'Gourmet Cuisine' },
    { id: 12, category: 'nature', src: 'https://images.unsplash.com/photo-1464822759844-d150ad6d1c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Sunset Views' },
    { id: 13, category: 'events', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80', alt: 'Corporate Event' },
    { id: 14, category: 'facilities', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Game Room' },
    { id: 15, category: 'nature', src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Valley Landscape' },
    { id: 16, category: 'dining', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80', alt: 'Outdoor Dining' }
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
