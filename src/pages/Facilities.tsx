import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import FacilityModal from '@/components/FacilityModal';
import { Waves, Utensils, Dumbbell, TreePine, Gamepad2, Sparkles, Users, Camera } from 'lucide-react';
import { useState } from 'react';

const Facilities = () => {
  type Facility = {
    id: number;
    title: string;
    icon: React.ElementType;
    description: string;
    image: string;
    features: string[];
  };
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facilities = [
    {
      id: 1,
      title: 'Infinity Pool',
      icon: Waves,
      description: 'Stunning infinity pool overlooking the valley with crystal-clear waters and panoramic mountain views. Perfect for relaxation and memorable moments.',
      image: '/images/infinity-pool-1.jpg',
      features: ['Pool bar service', 'Heated during winter', 'Valley views', 'Sunrise sessions']
    },
    {
      id: 2,
      title: 'Palatio Banquet',
      icon: Users,
      description: 'Elegant outdoor venue perfect for weddings, corporate events, and celebrations. Set against the backdrop of lush greenery and mountain vistas.',
      image: '/images/banquet-lawn-1.jpg',
      features: ['Capacity 200+ guests', 'Professional lighting', 'Catering services', 'Event planning']
    },
    {
      id: 3,
      title: 'Tarkari Restaurant',
      icon: Utensils,
      description: 'Premium dining experience featuring local and international cuisine. Our chefs create culinary masterpieces using fresh, locally sourced ingredients.',
      image: '/images/cafe-lounge-1.jpg',
      features: ['Multi-cuisine menu', 'Fine dining', 'Outdoor seating', 'Special dietary options']
    },
    {
      id: 4,
      title: 'Spa & Wellness',
      icon: Sparkles,
      description: 'World-class spa offering rejuvenating treatments and wellness therapies. Experience ultimate relaxation with our signature treatments and skilled therapists.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Ayurvedic treatments', 'Couple therapy rooms', 'Aromatherapy', 'Wellness consultations']
    },
    {
      id: 5,
      title: 'Fitness Studio',
      icon: Dumbbell,
      description: 'State-of-the-art fitness center equipped with modern equipment and personal training services. Maintain your fitness routine while enjoying nature views.',
      image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D',
      features: ['Modern equipment', 'Personal training', 'Outdoor workouts']
    },
    {
      id: 6,
      title: 'Game Zone',
      icon: Gamepad2,
      description: 'Indoor and outdoor recreational activities for all ages. From traditional games to modern entertainment options, ensuring fun for the entire family.',
      image: 'https://plus.unsplash.com/premium_photo-1742944886085-a096b536af0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8OCUyMGJhbGwlMjBwb29sfGVufDB8fDB8fHww',
      features: ['Pool table', 'Board games', 'Outdoor sports']
    },
    {
      id: 7,
      title: 'Nature Trails',
      icon: TreePine,
      description: 'Guided nature walks through pristine landscapes and scenic trails. Discover local flora and fauna while connecting with the natural beauty of Igatpuri.',
      image: '/images/nature-trails-1.jpg',
      features: ['Guided tours', 'Bird watching', 'Photography spots', 'Sunrise/sunset walks']
    },
    {
      id: 8,
      title: 'Conference Hall',
      icon: Camera,
      description: 'Professional meeting spaces equipped with modern technology for corporate events and business gatherings in a serene environment.',
      image: '/images/conference-hall-1.jpg',
      features: ['AV equipment', 'High-speed internet', 'Catering services', 'Professional setup']
    }
  ];

  const handleFacilityClick = (facility: Facility) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFacility(null);
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <FloatingContact />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-charcoal to-charcoal/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-6">
            World-Class Facilities
          </h1>
          <p className="text-xl text-ivory/80 max-w-3xl mx-auto">
            Discover premium amenities and exceptional services designed to enhance every moment of your stay at Vintage Valley Resort
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                  bg-white rounded-3xl overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500 cursor-pointer`}
                onClick={() => handleFacilityClick(facility)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="bg-gold/90 backdrop-blur-sm rounded-full p-3">
                      <facility.icon className="h-6 w-6 text-charcoal" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  {facility.title === 'Infinity Pool' && (
                    <div className="flex justify-center mb-2">
                      <img src="/images/wave-small.png" alt="Wave" className="h-8" />
                    </div>
                  )}
                  <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">
                    {facility.title}
                  </h2>
                  <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                    {facility.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                        <span className="text-charcoal/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-gradient-to-r from-gold to-bronze text-charcoal px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-charcoal text-center mb-12">
            Operating Hours
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gold/5 rounded-3xl p-8 border border-gold/20">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-6">
                Daily Schedule
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gold/10">
                  <span className="font-medium text-charcoal">Swimming Pool</span>
                  <span className="text-charcoal/80">08:00 AM - 06:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gold/10">
                  <span className="font-medium text-charcoal">Fitness Studio</span>
                  <span className="text-charcoal/80">07:00 AM - 11:00 AM<br/>06:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gold/10">
                  <span className="font-medium text-charcoal">Game Zone</span>
                  <span className="text-charcoal/80">08:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-charcoal">Spa & Wellness</span>
                  <span className="text-charcoal/80">09:00 AM - 09:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-charcoal/5 rounded-3xl p-8 border border-charcoal/20">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-6">
                Dining Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span className="font-medium text-charcoal">Breakfast</span>
                  <span className="text-charcoal/80">08:00 AM - 10:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span className="font-medium text-charcoal">Lunch</span>
                  <span className="text-charcoal/80">01:00 PM - 03:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span className="font-medium text-charcoal">Hi-Tea</span>
                  <span className="text-charcoal/80">04:00 PM - 06:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-charcoal">Dinner</span>
                  <span className="text-charcoal/80">07:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-charcoal to-charcoal/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-ivory mb-6">
            Experience Premium Hospitality
          </h2>
          <p className="text-xl text-ivory/80 mb-8">
            Book your stay and enjoy access to all our world-class facilities and services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-bronze transition-all duration-300 transform hover:scale-105">
              Reserve Now
            </button>
            <button className="border-2 border-ivory text-ivory px-8 py-4 rounded-full font-semibold text-lg hover:bg-ivory hover:text-charcoal transition-all duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Facility Modal */}
      {selectedFacility && (
        <FacilityModal
          facility={selectedFacility}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default Facilities;
