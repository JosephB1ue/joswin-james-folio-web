
import React from 'react';
import { ExternalLink, Github, Database, Code } from 'lucide-react';

const Portfolio = () => {
  const project = {
    title: 'Library Management System',
    description: 'A comprehensive Django-based CRUD application designed for efficient library operations with intuitive user interface and robust database management.',
    features: [
      'Add new books with detailed information',
      'Advanced search functionality by author and book name',
      'Delete records with confirmation dialogs',
      'Responsive design for all devices',
      'SQLite3 database integration',
      'Bootstrap-styled user interface'
    ],
    technologies: ['Django', 'Python', 'SQLite3', 'Bootstrap', 'HTML/CSS', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/JosephB1ue',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Project</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my technical skills through a comprehensive web application that demonstrates full-stack development capabilities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover min-h-[400px] hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <Code className="mr-2 text-blue-500" size={20} />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <Database className="mr-2 text-green-500" size={20} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">More projects coming soon! I'm continuously working on new applications and expanding my portfolio.</p>
            <a
              href="https://github.com/JosephB1ue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
