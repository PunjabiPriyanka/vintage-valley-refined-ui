
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="font-playfair text-2xl font-bold text-ivory">
                Vintage Valley
              </div>
              <div className="font-vibes text-gold text-lg">Resort</div>
            </div>
            <p className="text-ivory/80 mb-6 leading-relaxed">
              Experience luxury nestled in nature at Igatpuri's most exclusive retreat. 
              Where modern elegance meets serene wilderness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-ivory transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gold hover:text-ivory transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gold hover:text-ivory transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {['Rooms & Suites', 'Facilities', 'Tariff', 'Gallery', 'Nearby Attractions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-gold">Services</h3>
            <ul className="space-y-3">
              {['Spa & Wellness', 'Infinity Pool', 'Banquet Hall', 'Conference Room', 'Adventure Sports'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-gold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="text-ivory/80">+91 9371179888</p>
                  <p className="text-ivory/80">+91 9371169888</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold mt-1" />
                <p className="text-ivory/80">vintagevalleyresort@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1" />
                <p className="text-ivory/80">Mumbai - Nashik Expy, opp. Parveen Industry, Talegaon, Igatpuri, Maharashtra 422402.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/20 mt-12 pt-8 text-center">
          <p className="text-ivory/60">
            © 2024 Vintage Valley Spa Resort. All rights reserved. | Crafted with luxury in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
