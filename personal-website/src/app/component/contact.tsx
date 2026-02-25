import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'siskus1602@gmail.com',
      link: 'mailto:siskus1602@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+6281117796772',
      link: 'tel:+6281117796772',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://facebook.com',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com/fransiskusxd',
      color: 'hover:bg-pink-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/6281117796772',
      color: 'hover:bg-green-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#AA2B1D] via-[#b8382a] to-[#AA2B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 mx-auto bg-white"></div>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <Card className="p-4 flex items-center gap-4 hover:shadow-xl transition-all bg-gray-800/50 border-gray-700 hover:border-[#5C6F2B]">
                      <div className="p-3 rounded-lg bg-[#DE802B]/20">
                        <Icon className="w-6 h-6 text-[#DE802B]" />
                      </div>
                      <div>
                        <p className="text-sm text-white">{info.label}</p>
                        <p className="font-medium text-white">{info.value}</p>
                      </div>
                    </Card>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-700 text-white p-3 rounded-lg transition-all hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#DE802B]/15 border border-[#DE802B]/30">
              <h4 className="font-semibold text-white mb-2">
                Available for Freelance
              </h4>
              <p className="text-white">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss your project requirements and how we can work together.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Maxwell Williams"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="maxwell@example.com"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button type="submit" className="w-full hover:opacity-90 font-semibold" style={{ backgroundColor: '#DE802B', color: '#1a2332' }}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}