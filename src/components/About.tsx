
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-300">React, TypeScript, Next.js</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Backend</h4>
                  <p className="text-gray-300">Node.js, Python, PostgreSQL</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Tools</h4>
                  <p className="text-gray-300">Git, Docker, AWS</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Design</h4>
                  <p className="text-gray-300">Figma, Adobe XD</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full p-1">
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Profile"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
