
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Sparkles, Waves, TreePine, Crown, Star } from 'lucide-react';

const Index = () => {
  const amenities = [
    { icon: Waves, title: 'Infinity Pool', description: 'Stunning infinity pool with mountain views' },
    { icon: Sparkles, title: 'Luxury Spa', description: 'World-class wellness and rejuvenation' },
    { icon: TreePine, title: 'Nature Trails', description: 'Guided walks through pristine landscapes' },
    { icon: Crown, title: 'Premium Dining', description: 'Gourmet cuisine with local flavors' },
  ];

  const rooms = [
    {
      title: 'Deluxe Studio Suite',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Elegant studio with modern amenities and nature views',
      price: 'From ₹3,500/night'
    },
    {
      title: 'Lotus Family Suite',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      description: 'Spacious family accommodation with premium comfort',
      price: 'From ₹6,000/night'
    },
    {
      title: 'Presidential Sky Villa',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Ultimate luxury with panoramic valley views',
      price: 'From ₹7,000/night'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'An absolutely magical experience. The blend of luxury and nature is perfect.'
    },
    {
      name: 'Rajesh Patel',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Outstanding service and breathtaking views. A true sanctuary for the soul.'
    },
    {
      name: 'Anita Desai',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'The spa treatments were divine and the hospitality exceeded all expectations.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Amenities Section */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Luxury Amenities
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Immerse yourself in world-class facilities designed for your ultimate comfort and relaxation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <amenity.icon className="h-10 w-10 text-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                  {amenity.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Exquisite Accommodations
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Choose from our carefully crafted suites, each offering a unique blend of luxury and comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">{room.price}</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
                  {room.title}
                </h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  {room.description}
                </p>
                <button className="text-gold font-semibold hover:text-bronze transition-colors duration-200">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory mb-6">
              Guest Experiences
            </h2>
            <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
              Discover what makes Vintage Valley Resort truly special through our guests' stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-ivory/5 backdrop-blur-sm rounded-2xl p-8 border border-ivory/10">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-ivory">{testimonial.name}</h4>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-ivory/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
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
