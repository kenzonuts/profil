import React from 'react';

const About = () => {
  const stats = [
    { number: '7+', label: 'month Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-32 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-zinc-500 text-sm font-light tracking-[0.2em] uppercase">
                About Me
              </p>
              <h2 className="text-4xl sm:text-5xl font-extralight text-white leading-tight">
                Driven to build impactful digital experiences
                <span className="block text-zinc-400">with a passion for learning and clean development.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
              <p>
                I'm an aspiring full-stack developer focused on the .NET ecosystem. Though early in my journey, I’ve already built a strong foundation across various areas of development—from backend logic to database integration.
              </p>
              <p>
                I’m passionate about crafting clean, scalable code and intuitive user experiences. I thrive in learning environments and am always exploring new technologies to sharpen my skills and contribute meaningfully to modern web projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors duration-300"
              >
                <div className="text-3xl font-extralight text-white mb-2">{stat.number}</div>
                <div className="text-zinc-500 text-sm font-light tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;