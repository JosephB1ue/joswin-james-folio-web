
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              Hi, I'm <span className="text-blue-500">Joswin</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 animate-fade-in">
              Passionate Web Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl animate-fade-in">
              Based in Alappuzha, Kerala, India. I specialize in Django, ReactJS, and modern web technologies. 
              Currently expanding my skills through hands-on internship experience and seeking opportunities to contribute to impactful projects.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="mailto:joswin20.03james@gmail.com"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-lg transition-all duration-300"
              >
                View My Work
              </button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/JosephB1ue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/joswin-james-5a522a221"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="tel:+918943906903"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-scale-in">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/cJcYDGmN/passport.jpg"
                    alt="Joswin James"
                    className="w-72 h-72 rounded-full object-cover border-4 border-gray-700"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
