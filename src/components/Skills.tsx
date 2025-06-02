
import React from 'react';
import { Code, User, Lightbulb, Users } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'Django', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'ReactJS', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQLite3', level: 70 },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Communication', icon: User },
    { name: 'Adaptability', icon: Code },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set covering both technical proficiencies and essential soft skills for effective collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Code className="mr-3 text-blue-500" size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 animate-scale-in"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <User className="mr-3 text-green-500" size={28} />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300 hover:scale-105 transform">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-white font-medium">{skill.name}</h4>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">Additional Tools & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {['Bootstrap', 'Git', 'VS Code', 'Codepen', 'SQL'].map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
