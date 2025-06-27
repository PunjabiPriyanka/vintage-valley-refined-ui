
import { ChevronDown, Play } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Multiple Background Layers for Depth */}
      <div className="absolute inset-0">
        {/* Primary Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1708787101150-844cebbad46d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D')`
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-teal-300/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Badge */}
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
          <span className="text-cyan-300 text-sm font-medium tracking-wide">PREMIUM WELLNESS RETREAT</span>
        </div>

        {/* Main Headlines with Stagger Animation */}
        <div className="space-y-4 mb-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white animate-slide-up">
            Vintage Valley
          </h1>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-cyan-300 animate-slide-up delay-200">
            Spa Resort
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto animate-fade-in delay-500"></div>
        </div>

        {/* Enhanced Description */}
        <p className="text-xl md:text-2xl font-light mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-700">
          Where luxury meets serenity in the heart of Igatpuri's pristine landscapes. 
          <span className="block mt-2 text-cyan-300/80 font-vibes text-2xl">Experience the extraordinary</span>
        </p>
        
        {/* Interactive CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-1000">
          <button className="group relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Reserve Your Escape</span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          
          <button 
            className="group flex items-center gap-3 border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Experience
          </button>
          
          <button className="text-white/80 px-8 py-4 rounded-full font-medium text-lg border border-white/30 hover:bg-white/5 hover:text-white transition-all duration-300 backdrop-blur-sm">
            View Our Suites
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/60 text-sm mb-2 font-light tracking-wide">Discover More</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-300/30 opacity-60"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-300/30 opacity-60"></div>
    </section>
  );
};

export default Hero;
