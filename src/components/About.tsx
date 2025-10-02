import { Code, Palette, Zap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Palette, title: '2D/3D Animation', description: 'Creating fluid and captivating animations that bring ideas to life' },
    { icon: Zap, title: 'Visual Effects', description: 'Designing stunning VFX that enhance storytelling and viewer engagement' },
    { icon: Code, title: 'Motion Graphics', description: 'Crafting dynamic motion graphics for brands and digital experiences' },
    { icon: Target, title: 'Brand Identity', description: 'Building cohesive visual identities that resonate with audiences' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate motion designer with expertise in transforming concepts into compelling visual stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Lazizbek, a motion designer with over 8 years of experience in creating stunning visual content.
              My work spans across 2D/3D animation, visual effects, and brand identity design.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I believe in the power of motion to tell stories, evoke emotions, and create memorable experiences.
              Every project is an opportunity to push creative boundaries and deliver exceptional results.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              From concept to final delivery, I collaborate closely with clients to ensure their vision comes to life
              with precision, creativity, and technical excellence.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-slate-700">
              <div className="text-center p-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  500+
                </div>
                <p className="text-xl text-slate-300">Happy Clients Worldwide</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
