import React, { useState, useEffect, useRef } from 'react';
import { Users, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Armin',
    role: 'Founder',
    letter: 'A',
  },
  {
    name: 'XxitzAjxx100guest666',
    role: 'Lead Developer',
    letter: 'X',
  },
  {
    name: 'Kondd1123',
    role: 'Developer',
    letter: 'K',
  },
  {
    name: 'granata2012_23',
    role: 'Developer',
    letter: 'G',
  },
  {
    name: 'Ayan90083211233',
    role: 'Community Manager',
    letter: 'A',
  },
];

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

export default function Team() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <div className="max-w-6xl mx-auto pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
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
        className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          <Users size={14} />
          <span>Our Team</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Meet the <span className="text-indigo-400">team</span>
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          The people building the future of ER:LC event automation.
        </p>
      </div>

      {/* Team Grid */}
      <div 
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 transform ${
          gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {teamMembers.map((member, idx) => {
          const floatClass = idx % 4 === 0 ? 'animate-float-1' : idx % 4 === 1 ? 'animate-float-2' : idx % 4 === 2 ? 'animate-float-3' : 'animate-float-4';
          return (
            <div 
              key={idx} 
              className={`bg-card/40 border border-border rounded-3xl p-8 backdrop-blur-xl flex flex-col items-center text-center shadow-lg shadow-indigo-950/20 hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600/30 ${floatClass}`}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 text-2xl font-bold mb-6 group-hover:scale-105 transition-transform shadow-lg shadow-indigo-600/10">
                {member.letter}
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <div className="mt-3">
                <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 font-mono">
                  {member.role}
                </span>
              </div>
            </div>
          );
        })}

        {/* Join the Team Card */}
        <div className="bg-card/20 border border-border border-dashed rounded-3xl p-8 backdrop-blur-xl flex flex-col items-center justify-center text-center shadow-lg shadow-indigo-950/20 hover:border-indigo-500/40 hover:border-solid transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600/30 animate-float-2">
          <h3 className="text-lg font-bold text-white mb-2">Join the team</h3>
          <p className="text-xs text-gray-400 max-w-xs mb-6">
            We're always looking for passionate developers and support staff.
          </p>
          <a
            href="/applications"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>View openings</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}