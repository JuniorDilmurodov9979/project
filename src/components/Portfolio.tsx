import { useState } from 'react';
import { Play, Expand } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', '3D Animation', '2D Motion', 'VFX', 'Branding'];

  const projects = [
    {
      id: 1,
      title: 'Tech Brand Launch',
      category: 'Branding',
      description: 'Complete brand identity with animated logo reveal',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Product Showcase',
      category: '3D Animation',
      description: '3D product animation with dynamic camera movements',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: '2D Motion',
      description: 'Engaging motion graphics for social platforms',
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 4,
      title: 'Movie Title Sequence',
      category: 'VFX',
      description: 'Cinematic visual effects and compositing',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 5,
      title: 'App Promo Video',
      category: '2D Motion',
      description: 'Clean and modern app demonstration animation',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 6,
      title: 'Architectural Walkthrough',
      category: '3D Animation',
      description: 'Photorealistic 3D architectural visualization',
      color: 'from-slate-500 to-slate-700',
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my latest projects and creative explorations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <div className={`aspect-video bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className="flex gap-4">
                    <button className="w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="fill-slate-900 text-slate-900" size={24} />
                    </button>
                    <button className="w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Expand className="text-slate-900" size={24} />
                    </button>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-900">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
