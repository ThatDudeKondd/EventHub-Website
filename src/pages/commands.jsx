import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, Terminal } from 'lucide-react';
import { commandCategories, commands } from '../lib/commands';

// Custom hook for scroll-triggered fade-in animation
function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

export default function CommandsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  const filteredCommands = commands.filter((cmd) => {
    const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
    const matchesSearch = cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cmd.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Custom staggered floating keyframe animations */}
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-1 { animation: floatCard 5s ease-in-out infinite; }
        .animate-float-2 { animation: floatCard 5.5s ease-in-out infinite 1.2s; }
        .animate-float-3 { animation: floatCard 6s ease-in-out infinite 2.4s; }
        .animate-float-4 { animation: floatCard 4.8s ease-in-out infinite 3.6s; }
      `}</style>

      {/* Header */}
      <div 
        ref={headerRef}
        className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 transform ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm font-medium text-indigo-300 mb-4">
          <Command className="w-4 h-4 text-indigo-400" />
          <span>Interactive Command Directory</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Master Every <span className="text-indigo-400">EventHub Command</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Browse all available slash commands, view permission requirements, and copy syntax patterns for your server.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Pills (Uniform Styling) */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all backdrop-blur-xl ${
              selectedCategory === 'all' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500/50' 
                : 'bg-slate-900/40 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800/60'
            }`}
          >
            All Commands
          </button>
          {commandCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all backdrop-blur-xl ${
                selectedCategory === cat.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500/50' 
                  : 'bg-slate-900/40 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search commands (e.g. /ping, /server)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/40 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors backdrop-blur-xl"
          />
        </div>
      </div>

      {/* Commands Grid with Floating Effect */}
      <div 
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 transform ${
          gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {filteredCommands.length > 0 ? (
          filteredCommands.map((cmd, idx) => {
            const floatClass = idx % 4 === 0 ? 'animate-float-1' : idx % 4 === 1 ? 'animate-float-2' : idx % 4 === 2 ? 'animate-float-3' : 'animate-float-4';
            return (
              <div 
                key={idx} 
                className={`bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl shadow-lg shadow-indigo-950/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600/30 ${floatClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono font-bold text-indigo-400 text-lg bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                      {cmd.name}
                    </span>
                    <span className="text-xs uppercase font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {cmd.permissions}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {cmd.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-slate-500">Example: <code className="text-indigo-300">{cmd.example}</code></span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-16 text-center bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-xl">
            <Terminal className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-1">No commands found</h3>
            <p className="text-slate-400 text-sm">Try adjusting your search query or selected category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}