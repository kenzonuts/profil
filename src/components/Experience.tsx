import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: '12-1-2024 — 3-1-2025',
      title: 'Full-Stack Developer',
      company: 'United Tractor School',
      location: 'Jakarta Timur, Indonesia',
      description: 'Bootcamp Offline Full-Stack Developer, focusing on the .NET ecosystem. Developed skills in C#, ASP.NET Core, and SQL Server, building a solid foundation in full-stack development.'
    },
    {
      period: '15-3-2025 - 10-7-2025',
      title: 'Backend Developer',
      company: 'United Tractor (DAD)',
      location: 'Jakarta Timur, Indonesia',
      description: 'Backend Developer specializing in RESTful APIs and database management using SQL Server.'
    },
    
    {
      period: '18-7-2025 - Sekarang',
      title: 'Sui Blockchain Developer',
      company: 'Block Alpha Insider',
      location: 'Web3 Project Contributor — Remote',
      description: 'Worked on smart contract development within the Sui ecosystem using Move, building on-chain logic, NFT utilities, and backend–API integrations with the blockchain. Focused on Sui’s object model, transaction flow, and gas optimization for distributed applications..'
    },


  ];

  return (
    <section id="experience" className="py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-zinc-500 text-sm font-light tracking-[0.2em] uppercase mb-4">
            Career Path
          </p>
          <h2 className="text-4xl sm:text-5xl font-extralight text-white">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-4 gap-8 py-8 border-b border-zinc-800/50 hover:border-zinc-700/50 transition-colors duration-300"
            >
              <div className="md:col-span-1">
                <p className="text-zinc-500 font-light tracking-wide">
                  {exp.period}
                </p>
              </div>
              
              <div className="md:col-span-3 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-light text-white group-hover:text-zinc-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-400 font-light">
                    {exp.company} — {exp.location}
                  </p>
                </div>
                
                <p className="text-zinc-500 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;