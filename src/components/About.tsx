
import React from 'react';
import { GraduationCap, MapPin, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A driven and resourceful web developer with a strong technical foundation and eagerness to grow in software development roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate web developer with a strong foundation in computer science and a love for creating 
              efficient, user-friendly web applications. My journey began with curiosity about how websites work, 
              and has evolved into a comprehensive skill set in modern web technologies.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Currently, I'm gaining valuable hands-on experience through my internship while continuously learning 
              and adapting to new technologies. My problem-solving mindset and effective communication skills help 
              me collaborate effectively in team environments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm eager to contribute to impactful projects and grow professionally in a dynamic software development role.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                  <p className="text-gray-400">B.Tech in Computer Science</p>
                </div>
              </div>
              <p className="text-gray-300">T. John Institute of Technology (2024)</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 p-3 rounded-lg mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Current Role</h4>
                  <p className="text-gray-400">Intern at Camerinfolks Pvt Ltd</p>
                </div>
              </div>
              <p className="text-gray-300">Python Django Projects (Dec 2024 - May 2025)</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 p-3 rounded-lg mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Based in India</p>
                </div>
              </div>
              <p className="text-gray-300">Alappuzha, Kerala</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
