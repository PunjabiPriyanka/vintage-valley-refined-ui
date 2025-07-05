import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Sparkles, Waves, TreePine, Crown, Star, MapPin, Phone, Mail, Calendar, Users, Award } from 'lucide-react';

const Index = () => {
  const amenities = [
    { 
      icon: Waves, 
      title: 'Infinity Pool', 
      description: 'Stunning infinity pool with breathtaking mountain views and luxury cabanas',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      icon: Sparkles, 
      title: 'Luxury Spa', 
      description: 'World-class wellness center with rejuvenating treatments and therapies',
      color: 'from-purple-400 to-pink-600'
    },
    { 
      icon: TreePine, 
      title: 'Nature Trails', 
      description: 'Guided eco-walks through pristine landscapes and scenic viewpoints',
      color: 'from-green-400 to-emerald-600'
    },
    { 
      icon: Crown, 
      title: 'Premium Dining', 
      description: 'Gourmet cuisine crafted with local ingredients and international flair',
      color: 'from-orange-400 to-red-600'
    },
  ];

  const rooms = [
    {
      title: 'Deluxe Studio Suite',
      image: '/images/deluxe-studio-suite-1.jpg',
      description: 'Elegant studio with modern amenities, private balcony, and stunning nature views',
      price: 'From ₹3,500',
      period: 'per night',
      features: ['King Size Bed', 'Private Balcony', 'Mountain View', 'Mini Bar'],
      badge: 'Popular'
    },
    {
      title: 'Lotus Family Suite',
      image: '/images/lotus-family-suite-1.jpg',
      description: 'Spacious family accommodation with separate living area and premium comfort',
      price: 'From ₹6,000',
      period: 'per night',
      features: ['2 Bedrooms', 'Living Area', 'Kitchenette', 'Garden View'],
      badge: 'Family Choice'
    },
    {
      title: 'Presidential Sky Villa',
      image: '/images/presidential-sky-villa-1.jpg',
      description: 'Ultimate luxury experience with panoramic valley views and premium services',
      price: 'From ₹7,000',
      period: 'per night',
      features: ['Private Terrace', 'Jacuzzi', 'Butler Service', 'Valley View'],
      badge: 'Luxury'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'An absolutely magical experience that exceeded all expectations. The perfect blend of luxury and nature creates an unforgettable retreat.',
      date: 'December 2023'
    },
    {
      name: 'Rajesh Patel',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Outstanding hospitality and breathtaking views. Every detail has been thoughtfully curated to provide the ultimate sanctuary experience.',
      date: 'November 2023'
    },
    {
      name: 'Anita Desai',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'The spa treatments were divine and the staff anticipated every need. This is luxury redefined in the heart of nature.',
      date: 'October 2023'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />

      {/* Enhanced Amenities Section */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-ivory/30 to-white"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gold/10 rounded-full mb-6">
              <span className="text-gold font-medium tracking-wide">WORLD-CLASS AMENITIES</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-8">
              Luxury Redefined
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in exceptional facilities designed to elevate every moment of your stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-ivory/50">
                  <div className="flex justify-center mb-6">
                    <div className={`bg-gradient-to-r ${amenity.color} rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <amenity.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4 text-center">
                    {amenity.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-center">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Rooms Section */}
      <section className="section-padding bg-gradient-to-b from-ivory to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-charcoal/10 rounded-full mb-6">
              <span className="text-charcoal font-medium tracking-wide">PREMIUM ACCOMMODATIONS</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-8">
              Exquisite Suites
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Choose from our thoughtfully designed accommodations, each offering unparalleled comfort and stunning views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.map((room, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                        {room.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl font-bold">{room.price}</div>
                      <div className="text-sm opacity-90">{room.period}</div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">
                      {room.title}
                    </h3>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">
                      {room.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-charcoal/70">
                          <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-gold to-bronze text-charcoal font-semibold py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      View Details & Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-16 w-60 h-60 bg-ivory/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-gold font-medium tracking-wide">GUEST EXPERIENCES</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-8">
              Stories of Bliss
            </h2>
            <p className="text-xl text-ivory/70 max-w-3xl mx-auto leading-relaxed">
              Discover why guests choose Vintage Valley as their sanctuary of luxury and tranquility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-ivory/5 backdrop-blur-xl rounded-3xl p-8 border border-ivory/10 hover:bg-ivory/10 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-gold/50"
                    />
                    <div>
                      <h4 className="font-semibold text-ivory text-lg">{testimonial.name}</h4>
                      <p className="text-ivory/60 text-sm flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </p>
                      <div className="flex space-x-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gold fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-ivory/80 leading-relaxed italic mb-4 text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="text-ivory/50 text-sm">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
