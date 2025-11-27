import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript','Tailwind CSS','HTML', 'CSS']
    },
    {
      title: 'Backend Development',
      skills: ['C#', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs','Sql Server']
    },
    {
      title: 'Design & Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vercel','FireBase']
    }
  ];

  return (
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-zinc-500 text-sm font-light tracking-[0.2em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-extralight text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-xl font-light text-white tracking-wide">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex items-center justify-between py-3 border-b border-zinc-800/50 hover:border-zinc-700/50 transition-colors duration-300"
                  >
                    <span className="text-zinc-400 font-light group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                    <div className="w-2 h-2 bg-zinc-700 group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;