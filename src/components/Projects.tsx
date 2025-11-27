import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Backend Development',
      description: 'Sistem Manajemen Gudang',
      image: 'https://i.imgur.com/kd2HPoV.png',
      technologies: ['DotNet', 'C#', 'SQL Server'],
      github: 'https://github.com/kenzonuts/UJIANAKHIR',
    },
    {
      title: 'Task Manager',
      category: 'Web Application',
      description: 'Clean, intuitive task management with real-time collaboration features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1400',
      technologies: ['reach', 'Sql Server', 'C#','Dotnet'],
      github: 'https://github.com/kenzonuts/TaskManager',
      demo: 'https://example.com'
    },
    

  ];

  return (
    <section id="projects" className="py-32 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-zinc-500 text-sm font-light tracking-[0.2em] uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extralight text-white">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-2">
                  <p className="text-zinc-500 text-sm font-light tracking-wide uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-zinc-400 font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 border border-zinc-800 text-zinc-400 text-sm font-light tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-6 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center text-zinc-500 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide uppercase"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-zinc-500 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide uppercase"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="group relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;