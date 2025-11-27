import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/kenzonuts', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'zhttps://www.linkedin.com/in/gunawan-yudho-satrio-645700298/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'Yudhothepublic@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="py-16 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light tracking-wider text-white mb-2">
            Gunawan Yudho Satrio  
            </h3>
            <p className="text-zinc-500 font-light">Web 3 Developer</p>
          </div>

          <div className="flex space-x-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-zinc-600 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center">
          <p className="text-zinc-600 font-light text-sm">
            © 2024 Yudho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;