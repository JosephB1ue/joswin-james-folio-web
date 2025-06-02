
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-gray-300">
              © {currentYear} Joswin James. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" fill="currentColor" />
              and passion for web development.
            </span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            Back to Top ↑
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Ready to collaborate? Let's build something amazing together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
