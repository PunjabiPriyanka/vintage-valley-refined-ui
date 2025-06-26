
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.6)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 hero-text">
            Luxury Nestled
          </h1>
          <h2 className="font-playfair text-4xl md:text-6xl font-light mb-8 hero-text">
            in Nature
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover serenity and sophistication at Vintage Valley Spa Resort, 
            where modern luxury meets the untouched beauty of Igatpuri
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-bronze transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Escape
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-charcoal transition-all duration-300 transform hover:scale-105">
              View Suites
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;
