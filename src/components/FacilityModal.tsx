
import { X, MapPin, Clock, Users, Star } from 'lucide-react';
import { useState } from 'react';

interface FacilityModalProps {
  facility: {
    id: number;
    title: string;
    description: string;
    image: string;
    features: string[];
    icon: any;
  };
  isOpen: boolean;
  onClose: () => void;
}

const FacilityModal = ({ facility, isOpen, onClose }: FacilityModalProps) => {
  if (!isOpen) return null;

  const additionalDetails = {
    1: { // Infinity Pool
      operatingHours: '6:00 AM - 8:00 PM',
      capacity: '25 guests',
      temperature: '28°C maintained',
      specialFeatures: ['Underwater lighting', 'Infinity edge design', 'Pool bar service', 'Heated during winter'],
      gallery: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    2: { // Banquet Lawn
      operatingHours: '24/7 availability',
      capacity: '250 guests',
      area: '5000 sq ft',
      specialFeatures: ['Professional sound system', 'Stage setup available', 'Catering kitchen nearby', 'Weather-proof canopy option'],
      gallery: [
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    3: { // Café Lounge
      operatingHours: '7:00 AM - 11:00 PM',
      capacity: '60 guests',
      cuisine: 'Multi-cuisine',
      specialFeatures: ['Live cooking counter', 'Private dining area', 'Wine cellar', 'Outdoor terrace seating'],
      gallery: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    4: { // Spa & Wellness
      operatingHours: '9:00 AM - 9:00 PM',
      capacity: '4 treatment rooms',
      treatments: '15+ treatments',
      specialFeatures: ['Couple treatment rooms', 'Steam and sauna', 'Meditation room', 'Aromatherapy garden'],
      gallery: [
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    }
  };

  const details = additionalDetails[facility.id as keyof typeof additionalDetails];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
          >
            <X className="h-5 w-5 text-charcoal" />
          </button>
          
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent rounded-t-3xl" />
          
          <div className="absolute bottom-6 left-6">
            <div className="bg-gold/90 backdrop-blur-sm rounded-full p-3 mb-4">
              <facility.icon className="h-6 w-6 text-charcoal" />
            </div>
            <h2 className="font-playfair text-3xl font-bold text-white">
              {facility.title}
            </h2>
          </div>
        </div>

        <div className="p-8">
          <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
            {facility.description}
          </p>

          {details && (
            <>
              {/* Key Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-semibold text-charcoal">Operating Hours</p>
                    <p className="text-charcoal/70 text-sm">{details.operatingHours}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-semibold text-charcoal">Capacity</p>
                    <p className="text-charcoal/70 text-sm">{details.capacity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-semibold text-charcoal">Rating</p>
                    <p className="text-charcoal/70 text-sm">4.8/5 (Premium)</p>
                  </div>
                </div>
              </div>

              {/* Special Features */}
              <div className="mb-8">
                <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                  Special Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {details.specialFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-charcoal/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="mb-8">
                <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                  Gallery
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {details.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${facility.title} ${index + 1}`}
                      className="w-full h-24 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Original Features */}
          <div className="mb-8">
            <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
              Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {facility.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-bronze rounded-full" />
                  <span className="text-charcoal/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-bronze transition-colors duration-200 flex-1">
              Book Now
            </button>
            <button className="border-2 border-charcoal text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-charcoal hover:text-white transition-colors duration-200 flex-1">
              Contact for Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityModal;
