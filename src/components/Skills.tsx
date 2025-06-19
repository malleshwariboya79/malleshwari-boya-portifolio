
import { Code, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Python, Express, FastAPI',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Database,
      title: 'Database',
      description: 'PostgreSQL, MongoDB, Redis',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, JavaScript, REST APIs',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Flutter',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, User Research',
      color: 'from-cyan-400 to-cyan-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
