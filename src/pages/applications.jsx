import React, { useState, useEffect, useRef } from "react";
import { Code, Headphones, ExternalLink, Sparkles } from "lucide-react";
import { APPLICATION_FORM, SUPPORT_URL } from "../lib/links";

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
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

export default function ApplicationsPage() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <div className="min-h-screen pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Custom floating keyframe animations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 6s ease-in-out infinite 3s;
        }
      `}</style>

      {/* Header */}
      <div
        ref={headerRef}
        className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm font-medium text-indigo-300 mb-4">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Careers</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Interested in joining{" "}
          <span className="text-indigo-400">EventHub?</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          We're always looking for passionate people to help improve EventHub
          and support our growing community.
        </p>
      </div>

      {/* Teams Grid with Hovering / Floating Effect */}
      <div
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-1000 transform ${
          gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Developer Team Card */}
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-500 shadow-xl shadow-indigo-950/30 animate-float-slow hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-600/30">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 shadow-inner">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Developer Team
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Help develop new features, improve existing systems, fix bugs, and
              shape the future of EventHub.
            </p>
          </div>

          <a
            href={APPLICATION_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30"
          >
            <span>Apply Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Support Team Card */}
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-500 shadow-xl shadow-indigo-950/30 animate-float-delayed hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-600/30">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 shadow-inner">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Support Team</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Help users, answer questions, moderate the support server, and
              provide technical assistance to the community.
            </p>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0wJRGcwzTUJ7MCKWwTQhpi6aSOcUG4zVyhdkD5ag2Rru-6g/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30"
          >
            <span>Apply Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Support Server Callout */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-slate-400 text-sm">
          Make sure you are in our{" "}
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline font-medium"
          >
            Support Discord server
          </a>{" "}
          before submitting your application.
        </p>
      </div>
    </div>
  );
}
