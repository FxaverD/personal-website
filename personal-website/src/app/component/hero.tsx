import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '../../assets/6F7E99C4-F780-4D1C-A49B-3F2277BE1E8B 2.webp';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#CC561E] via-[#DE802B] to-[#d67429] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-100">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white">Frans!</h1>
              <h2 className="text-2xl md:text-3xl text-white font-semibold">
                Full-Stack Web Developer
              </h2>
            </div>

            <p className="text-lg text-gray-100 leading-relaxed">
              Building scalable and high-performance web solutions for your business needs. 
              Specializing in creating seamless user experiences with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                style={{ backgroundColor: '#2D3C59', color: 'white' }}
                className="hover:opacity-90 font-semibold"
              >
                View Portfolio
              </Button>
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                style={{ backgroundColor: '#AA2B1D', color: 'white' }}
                className="hover:opacity-90 font-semibold"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-2 text-gray-100 animate-bounce">
              <ArrowDown size={20} />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={profileImage}
                  alt="Fransiskus X Darmawan"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}