import { Quote, Star } from 'lucide-react';
import { Card } from './ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
      text: 'Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and the quality exceeded our expectations. The attention to detail and proactive communication made the entire process smooth.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'HealthCare Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      rating: 5,
      text: 'Exceptional work on our HIPAA-compliant patient portal. They demonstrated deep understanding of both technical requirements and healthcare regulations. The platform has been running flawlessly for over a year with zero security incidents.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'Real Estate Ventures',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'The analytics dashboard they built transformed how we analyze market data. The visualizations are intuitive and the performance is outstanding even with massive datasets. Highly recommend for complex data-driven projects.',
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'SocialHub Agency',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5,
      text: 'Our social media management platform serves hundreds of agencies thanks to their excellent architecture and scalability planning. They guided us through technical decisions and delivered a robust, enterprise-grade solution.',
    },
    {
      name: 'Jennifer Lee',
      role: 'Operations Director',
      company: 'ManufacturePro',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
      rating: 5,
      text: 'The inventory management system saved our company over $200K in the first year alone. They took time to understand our complex warehouse operations and built a solution perfectly tailored to our needs. Outstanding results!',
    },
    {
      name: 'Robert Martinez',
      role: 'Co-Founder',
      company: 'EduLearn Platform',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'From concept to launch, they were instrumental in building our online learning platform. The video streaming infrastructure they implemented handles thousands of concurrent users without any issues. True professional!',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-tl from-[#CC561E] via-[#DE802B] to-[#d67429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 mx-auto bg-white"></div>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`p-8 md:p-6 hover:shadow-xl transition-all relative bg-gray-800/50 border-gray-700 hover:border-[#5C6F2B] ${
              index >= 2 ? 'hidden md:block' : ''
            }`}>
              <Quote className="absolute top-6 md:top-4 right-6 md:right-4 w-12 h-12 md:w-8 md:h-8 text-[#5C6F2B]/20" />
              
              <div className="flex items-center gap-4 mb-6 md:mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-20 h-20 md:w-16 md:h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-orange-300">{testimonial.role}</p>
                  <p className="text-sm text-orange-200">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white leading-relaxed">
                {testimonial.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}