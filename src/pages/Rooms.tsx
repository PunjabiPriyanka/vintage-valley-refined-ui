
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Wifi, Car, Tv, Bath, Users, Bed, Mountain, Coffee } from 'lucide-react';
import { useState } from 'react';

const Rooms = () => {
  const [selectedPricing, setSelectedPricing] = useState<'weekday' | 'weekend'>('weekday');

  const rooms = [
    {
      id: 1,
      title: 'Deluxe Studio Suite',
      subtitle: 'Elegant Comfort in Nature',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ],
      description: 'Our Deluxe Studio Suite offers the perfect blend of modern luxury and natural serenity. Featuring contemporary amenities, panoramic views, and thoughtful design elements that create an atmosphere of sophisticated relaxation.',
      capacity: '2 Adults',
      bedType: 'King Size Bed',
      size: '450 sq ft',
      pricing: {
        weekday: '₹3,500',
        weekend: '₹4,500'
      },
      amenities: [
        { icon: Wifi, name: 'High-Speed WiFi' },
        { icon: Car, name: 'Complimentary Parking' },
        { icon: Tv, name: 'Smart TV' },
        { icon: Bath, name: 'Luxury Bathroom' },
        { icon: Mountain, name: 'Valley Views' },
        { icon: Coffee, name: 'Tea/Coffee Maker' }
      ]
    },
    {
      id: 2,
      title: 'Skyline Deluxe',
      subtitle: 'Elevated Comfort with Panoramic Views',
      images: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ],
      description: 'Located along the edge line of each floor, these rooms offer sweeping skyline views and elevated comfort. Designed for guests who appreciate a serene atmosphere with panoramic visibility. Ideal for couples and leisure travelers seeking a premium stay with a view.',
      capacity: '2 Adults',
      bedType: 'King Size Bed',
      size: '500 sq ft',
      pricing: {
        weekday: '₹4,000',
        weekend: '₹5,000'
      },
      amenities: [
        { icon: Wifi, name: 'High-Speed WiFi' },
        { icon: Car, name: 'Complimentary Parking' },
        { icon: Tv, name: 'Smart TV' },
        { icon: Bath, name: 'Luxury Bathroom' },
        { icon: Mountain, name: 'Skyline Views' },
        { icon: Coffee, name: 'Tea/Coffee Maker' }
      ]
    },
    {
      id: 3,
      title: 'Deluxe Edge View',
      subtitle: 'Corner Privacy with Scenic Visibility',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      ],
      description: 'Rooms with stunning front-facing views, offering elevated comfort and a refined aesthetic. Positioned at the corner edge of each floor for enhanced privacy and scenic visibility.',
      capacity: '2 Adults',
      bedType: 'King Size Bed',
      size: '480 sq ft',
      pricing: {
        weekday: '₹4,200',
        weekend: '₹5,200'
      },
      amenities: [
        { icon: Wifi, name: 'High-Speed WiFi' },
        { icon: Car, name: 'Complimentary Parking' },
        { icon: Tv, name: 'Smart TV' },
        { icon: Bath, name: 'Premium Bathroom' },
        { icon: Mountain, name: 'Edge Views' },
        { icon: Coffee, name: 'Mini Bar' }
      ]
    },
    {
      id: 4,
      title: 'Lotus Family Suite',
      subtitle: 'Spacious Luxury for Families',
      images: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ],
      description: 'The Lotus Family Suite provides generous space and premium comfort for larger groups. With separate living areas, premium furnishings, and spectacular views, it offers the perfect setting for memorable family gatherings.',
      capacity: '4 Adults',
      bedType: '2 Queen Beds',
      size: '750 sq ft',
      pricing: {
        weekday: '₹6,000',
        weekend: '₹7,000'
      },
      amenities: [
        { icon: Wifi, name: 'High-Speed WiFi' },
        { icon: Car, name: 'Complimentary Parking' },
        { icon: Tv, name: 'Smart TV' },
        { icon: Bath, name: 'Premium Bathrooms' },
        { icon: Mountain, name: 'Panoramic Views' },
        { icon: Coffee, name: 'Mini Kitchenette' }
      ]
    },
    {
      id: 5,
      title: 'Presidential Sky Villa',
      subtitle: 'Ultimate Luxury Experience',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      ],
      description: 'The Presidential Sky Villa represents the pinnacle of luxury accommodation. Featuring exclusive amenities, private spaces, and unparalleled views, this suite offers an extraordinary retreat for discerning guests.',
      capacity: '4 Adults',
      bedType: 'Master Suite + Guest Room',
      size: '1200 sq ft',
      pricing: {
        weekday: '₹7,000',
        weekend: '₹8,000'
      },
      amenities: [
        { icon: Wifi, name: 'Premium WiFi' },
        { icon: Car, name: 'Valet Parking' },
        { icon: Tv, name: 'Entertainment System' },
        { icon: Bath, name: 'Spa Bathroom' },
        { icon: Mountain, name: 'Private Balcony' },
        { icon: Coffee, name: 'Butler Service' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <FloatingContact />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-charcoal to-charcoal/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-6">
            Luxury Accommodations
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto mb-8">
            Discover our collection of thoughtfully designed suites, each offering a unique blend of comfort and elegance
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex bg-ivory/10 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => setSelectedPricing('weekday')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedPricing === 'weekday'
                  ? 'bg-gold text-charcoal'
                  : 'text-ivory hover:text-gold'
              }`}
            >
              Weekday Rates
            </button>
            <button
              onClick={() => setSelectedPricing('weekend')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedPricing === 'weekend'
                  ? 'bg-gold text-charcoal'
                  : 'text-ivory hover:text-gold'
              }`}
            >
              Weekend Rates
            </button>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-16">
          {rooms.map((room, index) => (
            <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Images */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <img
                    src={room.images[0]}
                    alt={room.title}
                    className="w-full h-96 object-cover rounded-3xl luxury-shadow"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-charcoal px-4 py-2 rounded-full font-bold">
                    {room.pricing[selectedPricing]}/night
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {room.images.slice(1).map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`${room.title} ${imgIndex + 2}`}
                      className="w-full h-32 object-cover rounded-2xl"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h2 className="font-playfair text-4xl font-bold text-charcoal mb-2">
                  {room.title}
                </h2>
                <p className="font-vibes text-2xl text-gold mb-6">
                  {room.subtitle}
                </p>
                <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Room Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-gold" />
                    <span className="text-charcoal/80">{room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-gold" />
                    <span className="text-charcoal/80">{room.bedType}</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <Mountain className="h-5 w-5 text-gold" />
                    <span className="text-charcoal/80">{room.size}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4">
                    Premium Amenities
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {room.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center space-x-3">
                        <amenity.icon className="h-4 w-4 text-gold" />
                        <span className="text-charcoal/80 text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-bronze transition-colors duration-200 flex-1 sm:flex-none">
                    Book This Suite
                  </button>
                  <button className="border-2 border-charcoal text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-charcoal hover:text-ivory transition-colors duration-200 flex-1 sm:flex-none">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-8">
            Special Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gold/10 to-bronze/10 rounded-3xl p-8 border border-gold/20">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                Weekend Getaway
              </h3>
              <p className="text-charcoal/80 mb-6">
                Perfect 2-night weekend package including breakfast, spa credits, and nature activities
              </p>
              <button className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-bronze transition-colors duration-200">
                Learn More
              </button>
            </div>
            <div className="bg-gradient-to-br from-charcoal/5 to-charcoal/10 rounded-3xl p-8 border border-charcoal/20">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                Extended Stay
              </h3>
              <p className="text-charcoal/80 mb-6">
                Book 4+ nights and enjoy exclusive discounts, complimentary meals, and premium services
              </p>
              <button className="bg-charcoal text-ivory px-6 py-3 rounded-full font-semibold hover:bg-charcoal/80 transition-colors duration-200">
                Get Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
