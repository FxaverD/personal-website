import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Development Student',
      company: 'Purwadhika Digital Technology School',
      period: '2026 - Now',
      type: 'Education',
      responsibilities: [
        'Intensive bootcamp program focusing on modern full-stack web development',
        'Building real-world applications using React, Node.js, Express, and MongoDB',
        'Learning industry best practices for responsive design and RESTful API development',
        'Collaborating on team projects using Git and agile methodologies',
        'Developing strong problem-solving skills through coding challenges and projects',
      ],
    },
    {
      title: 'Digital Marketing Specialist',
      company: 'Marketing Agency',
      period: '2025',
      type: 'Full-time',
      responsibilities: [
        'Developed and executed digital marketing campaigns across multiple platforms',
        'Managed social media presence and content strategy for various clients',
        'Analyzed campaign performance metrics and provided data-driven recommendations',
        'Created engaging content for websites, social media, and email marketing',
        'Collaborated with design and content teams to optimize user engagement',
      ],
    },
    {
      title: 'Business Management Student',
      company: 'RMIT University, Melbourne',
      period: '2022 - 2024',
      type: 'Education',
      responsibilities: [
        'Completed comprehensive coursework in business strategy and management',
        'Developed analytical and problem-solving skills through case studies',
        'Participated in group projects focused on business planning and operations',
        'Gained understanding of organizational behavior and project management',
        'Built foundation for understanding business requirements in software development',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-[#CC561E] via-[#DE802B] to-[#d67429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
          <div className="w-20 h-1 mx-auto bg-white"></div>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            My educational and professional path to becoming a full-stack developer
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/30"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg bg-[#FFA726]"></div>

                {/* Content */}
                <div className="md:w-1/2">
                  <Card className="p-5 hover:shadow-xl transition-all bg-gray-800/50 border-gray-700 hover:border-[#CC561E]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 font-medium text-[#FFA726]">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm bg-[#FFA726]/20 text-[#FFA726]">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-white mb-3">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white text-sm">
                          <span className="mt-1.5 text-white">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}