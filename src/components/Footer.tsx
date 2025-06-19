
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Malleshwari Boya</h3>
            <p className="text-gray-400">Full Stack Developer & Software Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/malleshwariboya79"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 hover:bg-blue-600 rounded-full transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/malleshwariboya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 hover:bg-blue-600 rounded-full transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:malleshwari.tech@gmail.com"
              className="p-3 bg-gray-700 hover:bg-blue-600 rounded-full transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Malleshwari Boya. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
