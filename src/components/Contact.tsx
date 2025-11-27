import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'yudhothepublic@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+62-813-1534-8570' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Jakarta Timur,Indonesia' }
  ];

  return (
    <section id="contact" className="py-32 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-zinc-500 text-sm font-light tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-extralight text-white">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-zinc-500">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-500 text-sm font-light tracking-wide uppercase">
                      {info.label}
                    </p>
                    <p className="text-white font-light">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-zinc-500 text-sm font-light tracking-wide uppercase">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-zinc-500 text-sm font-light tracking-wide uppercase">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-zinc-500 text-sm font-light tracking-wide uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group relative px-8 py-4 bg-white text-black text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-zinc-100"
            >
              Send Message
              <span className="absolute inset-0 border border-white group-hover:border-zinc-300 transition-colors duration-300"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;