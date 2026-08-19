import React from 'react';
import { Lock, Sparkles, Terminal } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative min-h-screen overflow-hidden">
      
      {/* Coming Soon Overlay Modal */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 pt-10">
        <div className="bg-slate-900/90 border border-indigo-500/40 p-8 md:p-12 rounded-3xl backdrop-blur-2xl shadow-2xl text-center max-w-lg w-full laser-border animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center mx-auto mb-6 text-indigo-400 shadow-lg shadow-indigo-600/20">
            <Lock size={30} className="animate-pulse" />
          </div>
          <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 font-mono uppercase tracking-wider">
            Phase 2 Development
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-3 tracking-tight">Dashboard Coming Soon</h1>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            We are actively wiring up live ER:LC game server syncing, automated shift leaderboards, and remote command dispatch. Check back soon!
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all"
            >
              Return Home
            </a>
          </div>
        </div>
      </div>

      {/* Blurred Background Dashboard Preview */}
      <div className="filter blur-md select-none pointer-events-none opacity-30 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="h-4 w-32 bg-indigo-500/20 rounded mb-2"></div>
            <div className="h-8 w-64 bg-white/20 rounded"></div>
          </div>
          <div className="h-10 w-48 bg-slate-800 rounded-xl border border-slate-700"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 h-32"></div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl h-80"></div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl h-80"></div>
        </div>
      </div>
      
    </div>
  );
}