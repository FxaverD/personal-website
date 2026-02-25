import { useState } from 'react';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id?: number;
  title: string;
  shortDescription?: string;
  image: string;
  category: string;
  tags: string[];
  situation: string;
  task: string;
  action: string;
  result: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ["React", 'Node.js', 'PostgreSQL', 'Stripe'],
      situation: 'A retail company needed to expand their business online with a scalable e-commerce platform that could handle high traffic during sales events.',
      task: 'Design and develop a full-stack e-commerce solution with real-time inventory management, secure payment processing, and an admin dashboard.',
      action: 'Built a React-based frontend with Next.js for SEO optimization, created RESTful APIs using Node.js and Express, implemented PostgreSQL database with optimized queries, and integrated Stripe for payment processing. Added Redis caching for improved performance.',
      result: 'Successfully launched platform handling 50K+ monthly users with 99.9% uptime. Reduced page load time by 60% and increased conversion rate by 35% within the first quarter.',
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['React', 'TypeScript', 'Firebase', 'HIPAA'],
      situation: 'A healthcare provider needed a HIPAA-compliant patient portal for appointment scheduling, medical records access, and telehealth consultations.',
      task: 'Develop a secure, user-friendly web application ensuring data privacy compliance while maintaining excellent user experience.',
      action: 'Implemented end-to-end encryption using TypeScript and React, integrated Firebase for real-time updates, added video consultation using WebRTC, and ensured HIPAA compliance with audit logging and secure authentication using Auth0.',
      result: 'Deployed portal serving 10K+ patients with zero security breaches. Patient satisfaction scores increased by 45%, and appointment no-shows decreased by 28%.',
    },
    {
      title: 'Real Estate Analytics Dashboard',
      category: 'Data Visualization',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'D3.js', 'Python', 'AWS'],
      situation: 'A real estate investment firm required an analytics dashboard to visualize market trends, property valuations, and investment opportunities across multiple cities.',
      task: 'Create an interactive dashboard that processes large datasets and presents complex data in an intuitive, actionable format.',
      action: 'Built responsive React dashboard with D3.js for custom visualizations, developed Python backend for data processing and ML predictions, deployed on AWS using Lambda and S3, and implemented real-time data updates using WebSockets.',
      result: 'Dashboard now analyzes 100K+ property listings daily. Helped firm identify investment opportunities 40% faster and improved ROI predictions accuracy by 25%.',
    },
    {
      title: 'Social Media Management Tool',
      category: 'SaaS Platform',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      tags: ['Next.js', 'MongoDB', 'Docker', 'GraphQL'],
      situation: 'Marketing agencies needed a centralized platform to manage multiple client social media accounts, schedule posts, and track analytics.',
      task: 'Build a multi-tenant SaaS application with role-based access control, post scheduling, and integrated analytics from various social platforms.',
      action: 'Developed Next.js application with GraphQL API, implemented MongoDB for flexible data storage, created Docker containers for consistent deployment, integrated OAuth for social media platforms (Twitter, Facebook, Instagram, LinkedIn).',
      result: 'Platform now supports 500+ agencies managing 5K+ client accounts. Reduced post scheduling time by 70% and improved client reporting efficiency by 55%.',
    },
    {
      title: 'Inventory Management System',
      category: 'Enterprise Solution',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      tags: ['React', 'Express', 'MySQL', 'Docker'],
      situation: 'A manufacturing company struggled with manual inventory tracking across multiple warehouses, leading to stockouts and overstocking issues.',
      task: 'Develop an automated inventory management system with barcode scanning, real-time tracking, and predictive analytics.',
      action: 'Created React-based web application with mobile-responsive design, built Express.js backend with MySQL database, implemented barcode scanning using camera APIs, added ML-based demand forecasting, and containerized using Docker for easy deployment.',
      result: 'Reduced inventory discrepancies by 85%, decreased stockouts by 60%, and saved company $200K annually in inventory carrying costs.',
    },
    {
      title: 'Online Learning Platform',
      category: 'EdTech',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      tags: ['React', 'Node.js', 'AWS', 'Video Streaming'],
      situation: 'An education startup wanted to create an interactive online learning platform with video courses, quizzes, and student progress tracking.',
      task: 'Build a scalable platform that supports video streaming, interactive assessments, and personalized learning paths for thousands of concurrent users.',
      action: 'Developed React frontend with adaptive video player, created Node.js backend with RESTful APIs, implemented AWS S3 and CloudFront for video delivery, added real-time quiz functionality using WebSockets, and integrated payment processing for course purchases.',
      result: 'Platform now hosts 200+ courses with 15K+ active students. Achieved 92% course completion rate and 4.8/5 average student satisfaction rating.',
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-20 bg-gradient-to-tl from-[#CC561E] via-[#DE802B] to-[#d67429]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
            <div className="w-20 h-1 mx-auto bg-white"></div>
            <p className="mt-4 text-white max-w-2xl mx-auto">
              Explore my recent projects showcasing expertise in full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all bg-gray-800/50 border-gray-700 hover:border-[#5C6F2B] cursor-pointer ${
                  index >= 2 ? 'hidden md:block' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-orange-300 mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-gray-700/50 text-white border-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Project Detail Modal */}
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="bg-[#FF8C00] max-w-4xl max-h-[90vh] overflow-y-auto">
              {selectedProject && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-8 p-4">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tech, index) => (
                        <Badge key={index}>{tech}</Badge>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Situation</h4>
                        <p className="text-gray-900 leading-relaxed">{selectedProject.situation}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Task</h4>
                        <p className="text-gray-900 leading-relaxed">{selectedProject.task}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Action</h4>
                        <p className="text-gray-900 leading-relaxed">{selectedProject.action}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Result</h4>
                        <p className="text-gray-900 leading-relaxed">{selectedProject.result}</p>
                      </div>
                    </div>
                     <div className="flex gap-4 pt-4">
                      {selectedProject.liveUrl && (
                        <Button className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      )}
                      {selectedProject.githubUrl && (
                        <Button variant="outline" className="flex items-center gap-2">
                          <Github size={16} />
                          View Code
                        </Button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
}