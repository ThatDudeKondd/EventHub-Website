import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, ArrowLeft } from 'lucide-react';
import { SUPPORT_URL } from './links';

export default function PageNotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto glass p-8 sm:p-12 rounded-2xl glow-soft relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-400">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <h1 className="text-6xl font-extrabold text-gradient mb-2 font-mono">404</h1>
        <h2 className="text-2xl font-bold text-white mb-3">Dispatch Not Found</h2>
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          The requested coordinate or channel route doesn't exist or has been decommissioned from the ER:LC network.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-600/25"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass hover:bg-slate-800 text-slate-300 hover:text-white font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Support Server
          </a>
        </div>
      </div>
    </div>
  );
}