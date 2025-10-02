import { Film, Sparkles, Video, Pen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Film,
      title: '3D Animation',
      description: 'High-quality 3D modeling, rigging, and animation for products, characters, and environments',
      features: ['Product Visualization', 'Character Animation', 'Architectural Renders', 'Motion Capture'],
    },
    {
      icon: Video,
      title: '2D Motion Graphics',
      description: 'Dynamic 2D animations perfect for explainer videos, social media, and digital marketing',
      features: ['Logo Animation', 'Infographics', 'Social Media Content', 'Explainer Videos'],
    },
    {
      icon: Sparkles,
      title: 'Visual Effects',
      description: 'Professional VFX and compositing to enhance your footage with stunning visual elements',
      features: ['Compositing', 'Color Grading', 'Green Screen', 'Particle Effects'],
    },
    {
      icon: Pen,
      title: 'Brand Identity',
      description: 'Complete brand design solutions including animated logos and brand guideline development',
      features: ['Logo Design', 'Brand Guidelines', 'Style Frames', 'Brand Animation'],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive motion design solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl border border-cyan-500/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Need a Custom Solution?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create something amazing together.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
