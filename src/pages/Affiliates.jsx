import React, { useState, useEffect, useRef } from 'react';
import { Globe, Users, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

const partners = [
  {
    name: 'Vacant Partner Slot #1',
    description: 'This partnership tier is currently available for qualifying ER:LC communities seeking cross-network visibility.',
    members: 'Open Slot',
    category: 'Available Slot',
    invite: 'https://discord.gg/J3Dv735xg'
  },
  {
    name: 'Vacant Partner Slot #2',
    description: 'Reserved for upcoming tactical networks and dispatch coordination hubs looking to feature EventHub integration.',
    members: 'Open Slot',
    category: 'Available Slot',
    invite: 'https://discord.gg/J3Dv735xg'
  },
  {
    name: 'Vacant Partner Slot #3',
    description: 'Open listing for high-activity roleplay servers interested in official co-promotion and automated event tooling.',
    members: 'Open Slot',
    category: 'Available Slot',
    invite: 'https://discord.gg/J3Dv735xg'
  }
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

export default function Affiliates() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const [bannerRef, bannerVisible] = useScrollReveal();

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
      `}</style>

      {/* Header */}
      <div 
        ref={headerRef}
        className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          <Globe size={14} />
          <span>Community Network</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Official <span className="text-indigo-400">Affiliates</span>
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          Explore our trusted partner communities and networks that power elite ER:LC roleplay alongside EventHub.
        </p>
      </div>

      {/* Partners Grid */}
      <div 
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 transform ${
          gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {partners.map((partner, idx) => {
          const floatClass = idx === 0 ? 'animate-float-1' : idx === 1 ? 'animate-float-2' : 'animate-float-3';
          return (
            <div 
              key={idx} 
              className={`bg-card/30 border border-border border-dashed rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-lg shadow-indigo-950/20 hover:border-indigo-500/50 hover:border-solid transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600/30 ${floatClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 font-mono">
                    {partner.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                    <Users size={12} className="text-indigo-400" /> {partner.members}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors font-mono">{partner.name}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{partner.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <a
                  href={partner.invite}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-card/60 hover:bg-white/5 border border-border hover:border-indigo-500/40 text-white rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Claim Slot (Support Server)</span>
                  <ExternalLink size={16} className="text-indigo-400" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Partnership Application Banner */}
      <div 
        ref={bannerRef}
        className={`bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-card/40 border border-indigo-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl transition-all duration-1000 transform ${
          bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold">
            <Sparkles size={16} /> Partner With Us
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Want to list your community here?</h2>
          <p className="text-slate-300 text-sm max-w-xl">
            We are always looking to partner with active ER:LC communities. Join our support server to submit your partnership request.
          </p>
        </div>
        <div>
          <a
            href="https://discord.gg/J3Dv735xg"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition-all whitespace-nowrap"
          >
            <span>Apply for Partnership</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}