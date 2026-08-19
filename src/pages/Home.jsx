import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Sparkles, Shield, Radio, ArrowRight, Activity, Terminal } from 'lucide-react';
import { INVITE_URL, SUPPORT_URL } from '../lib/links';


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
      { threshold: 0.15 }
    );


    if (ref.current) {
      observer.observe(ref.current);
    }


    return () => observer.disconnect();
  }, []);


  return [ref, isVisible];
}


// Counter animation hook
function useCountUp(end, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);


  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);


  return count.toFixed(decimals);
}


export default function Home() {
  // Iconic ER:LC Scenes (Changes every 10 seconds with a left-to-right slide)
  const heroScenes = [
    "Shaping the future of ER;LC events",
    "Redefining ER;LC event management",
    "The next generation of ER;LC events",
    "Elevating ER;LC event management",
    "Transforming ER;LC events, one event at a time"
  ];
 
  const [currentScene, setCurrentScene] = useState(0);
  const [slideState, setSlideState] = useState('active');


  useEffect(() => {
    const timer = setInterval(() => {
      setSlideState('exit');
      setTimeout(() => {
        setCurrentScene((prev) => (prev + 1) % heroScenes.length);
        setSlideState('pre-enter');
        setTimeout(() => {
          setSlideState('active');
        }, 50);
      }, 500);
    }, 10000);


    return () => clearInterval(timer);
  }, [heroScenes.length]);


  // Animated metric values
  const uptimeCount = useCountUp(99.9, 2000, 1);
  const communitiesCount = useCountUp(500, 2000, 0);
  const latencyCount = useCountUp(0.4, 2000, 1);


  // Scroll reveal refs for sections
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();


  return (
    <div className="min-h-screen pt-24 pb-16 overflow-hidden relative">
      {/* Custom keyframes for active sweeping purple beams of light & depth effects */}
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes beamSweep1 {
          0% { transform: translate(-10%, -20%) rotate(15deg) scale(1); opacity: 0.3; }
          50% { transform: translate(35%, 25%) rotate(45deg) scale(1.4); opacity: 0.75; }
          100% { transform: translate(-10%, -20%) rotate(15deg) scale(1); opacity: 0.3; }
        }
        @keyframes beamSweep2 {
          0% { transform: translate(25%, 15%) rotate(-25deg) scale(1.2); opacity: 0.4; }
          50% { transform: translate(-30%, -15%) rotate(-55deg) scale(0.9); opacity: 0.8; }
          100% { transform: translate(25%, 15%) rotate(-25deg) scale(1.2); opacity: 0.4; }
        }
        .animate-float-1 { animation: floatCard 5s ease-in-out infinite; }
        .animate-float-2 { animation: floatCard 5.5s ease-in-out infinite 1.2s; }
        .animate-float-3 { animation: floatCard 6s ease-in-out infinite 2.4s; }
        .animate-beam-1 { animation: beamSweep1 9s ease-in-out infinite; }
        .animate-beam-2 { animation: beamSweep2 11s ease-in-out infinite; }
      `}</style>


      {/* Dynamic Sweeping Purple Light Beams */}
      <div className="absolute top-10 left-1/4 w-[650px] h-[350px] bg-gradient-to-r from-purple-600/40 via-fuchsia-600/30 to-transparent blur-[130px] pointer-events-none rounded-full transform -rotate-12 animate-beam-1" />
      <div className="absolute top-1/3 right-1/4 w-[750px] h-[400px] bg-gradient-to-l from-purple-700/35 via-indigo-600/30 to-transparent blur-[150px] pointer-events-none rounded-full transform rotate-12 animate-beam-2" />


      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
         
          {/* Static Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 text-xs sm:text-sm font-medium text-purple-300 mb-6 shadow-xl shadow-purple-500/10 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Next-Gen ER:LC Event Operations v2.4</span>
          </div>


          {/* Main Title with Left-to-Right Sliding Rotation & Glowing Gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 min-h-[2.2em] sm:min-h-[2em] flex items-center justify-center overflow-hidden w-full">
            <span className={`inline-block transition-all duration-500 transform bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(168,85,247,0.4)] ${
              slideState === 'exit'
                ? '-translate-x-24 opacity-0 filter blur-sm'
                : slideState === 'pre-enter'
                ? 'translate-x-24 opacity-0 filter blur-sm'
                : 'translate-x-0 opacity-100 filter blur-0'
            }`}>
              {heroScenes[currentScene]}
            </span>
          </h1>


          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl font-light">
            Streamline server management with instant ER:LC command dispatch, automated event presets, live player tracking, and custom tactical briefing tools.
          </p>


          {/* CTAs with Enhanced Depth and Hover/Active Physics */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-semibold text-base transition-all duration-300 shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:shadow-[0_15px_35px_rgba(168,85,247,0.6)] hover:-translate-y-1 active:translate-y-0 border border-purple-400/30 group"
            >
              <Bot className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Add EventHub to Discord</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base transition-all duration-300 border border-slate-700/80 hover:border-purple-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.2)] hover:-translate-y-1 active:translate-y-0 backdrop-blur-md group"
            >
              <Radio className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
              <span>Join Support Discord</span>
            </a>
          </div>


          {/* Trust Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 border-t border-slate-800/80 w-full max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white font-mono">{uptimeCount}%</span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Uptime Reliability</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-purple-400 font-mono">{communitiesCount}+</span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Active Communities</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
              <span className="text-3xl font-bold text-indigo-400 font-mono">&lt; {latencyCount}s</span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Command Latency</span>
            </div>
          </div>
        </div>
      </section>


      {/* Feature Grid Section */}
      <section
        ref={featuresRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 transform relative z-10 ${
          featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-mono tracking-widest text-purple-400 mb-3">Core Capabilities</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Elite Dispatchers
          </h3>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative group hover:border-purple-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-purple-950/20 animate-float-1 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-600/30">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Radio className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">ER:LC Command Integration</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Execute remote game server commands, manage player actions, and monitor live queue statistics directly from your Discord staff channels.
            </p>
            <Link to="/commands" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group">
              <span>Explore commands</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>


          {/* Card 2 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative group hover:border-purple-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-purple-950/20 animate-float-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-600/30">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Automated Event Presets</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Launch pre-configured roleplay scenarios like hostage rescues, traffic stops, and high-speed pursuits with automated countdowns and logging.
            </p>
            <Link to="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group">
              <span>View presets</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>


          {/* Card 3 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative group hover:border-purple-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-purple-950/20 animate-float-3 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-600/30">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Live Server Telemetry</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Keep your staff and community informed with real-time API uptime monitoring, player counts, server performance charts, and instant alerts.
            </p>
            <Link to="/status" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group">
              <span>Check status</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* Bottom Banner CTA */}
      <section
        ref={ctaRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 transform relative z-10 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center backdrop-blur-2xl shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
         
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to Upgrade Your Roleplay Standard?
            </h3>
            <p className="text-slate-400 text-base sm:text-lg mb-8">
              Join hundreds of top-tier ER:LC communities using EventHub to automate dispatch and elevate gameplay.
            </p>
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-semibold text-base transition-all duration-300 shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:shadow-[0_15px_35px_rgba(168,85,247,0.6)] hover:-translate-y-1 active:translate-y-0 border border-purple-400/30 group"
            >
              <Bot className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Add EventHub to Discord Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

