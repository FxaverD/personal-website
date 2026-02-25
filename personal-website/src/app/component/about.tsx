import { Code2 } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const coreSkills = [
    'React & Next.js',
    'Node.js & Express',
    'TypeScript',
    'PostgreSQL & MongoDB',
    'REST & GraphQL APIs',
    'AWS & Docker',
  ];

  const values = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      title: 'User-Centric',
      description: 'Focusing on exceptional user experiences and accessibility',
    },
    {
      title: 'Continuous Learning',
      description: 'Staying updated with latest technologies and best practices',
    },
    {
      title: 'Collaboration',
      description: 'Working effectively in cross-functional teams',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-tl from-[#CC561E] via-[#DE802B] to-[#d67429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 mx-auto bg-white"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">My Story</h3>
            <div className="space-y-4 text-white leading-relaxed">
              <p>
                I'm a passionate full-stack web developer currently enrolled at Purwadhika 
                learning Full Stack Development. My journey in web development 
                began with a curiosity about how websites work, which quickly evolved into 
                a deep commitment to crafting exceptional digital experiences.
              </p>
              <p>
                Throughout my learning journey at Purwadhika, I've had the chance to learn 
                alongside fellow full stack developers in a fast-paced environment. Working 
                together with people from all different backgrounds has taught me the importance 
                of collaboration and adaptability in development.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Core Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-3 rounded-lg text-center transition-all hover:scale-105 bg-[#5C6F2B] text-white font-medium flex items-center justify-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Key Values & Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all bg-gray-800/50 border-gray-700 hover:border-[#CC561E]">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-[#3d5a1f]">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-white">{value.title}</h4>
                    <p className="text-sm text-white">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}