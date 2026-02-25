import { Code, Server, Wrench } from 'lucide-react';
import { Card } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Front-End Development',
      color: '#D8C9A7',
      skills: [
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'React / Next.js', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      icon: Server,
      title: 'Back-End Development',
      color: '#5C6F2B',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'PostgreSQL / MySQL', level: 85 },
        { name: 'MongoDB', level: 83 },
        { name: 'RESTful APIs', level: 92 },
      ],
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      color: '#DE802B',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'AWS Basics', level: 70 },
        { name: 'Testing (Jest)', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-[#CC561E] via-[#DE802B] to-[#d67429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 mx-auto bg-white"></div>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across the full development stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-all bg-gray-800/50 border-gray-700 hover:border-[#DE802B]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: category.color }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-white">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%`, backgroundColor: category.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}