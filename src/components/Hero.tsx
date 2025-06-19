
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const titles = ['MERN Developer', 'Software Developer', 'Full Stack Developer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Malleshwari Boya
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto h-8">
            <span className="transition-all duration-500 ease-in-out">
              {titles[currentTitleIndex]}
            </span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, responsive websites and applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/malleshwariboya79"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/malleshwariboya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:malleshwari.tech@gmail.com"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
