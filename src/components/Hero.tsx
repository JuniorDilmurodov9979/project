import { Play, Award, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-8 animate-fade-in">
            <Play size={16} className="fill-cyan-400" />
            Motion Designer & Visual Artist
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Lazizbek
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 max-w-3xl mx-auto animate-slide-up delay-200">
            Creating stunning 2D/3D animations, visual effects, and immersive brand experiences
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up delay-300">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              View Portfolio
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-full font-semibold transition-all transform hover:scale-105 border border-slate-700"
            >
              Get In Touch
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in delay-500">
            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Play className="fill-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>

            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>

            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-slate-400">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
