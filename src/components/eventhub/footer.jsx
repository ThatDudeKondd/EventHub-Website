import React from "react";
import { Link } from "react-router-dom";
import { Shield, Heart, ExternalLink, Bot } from "lucide-react";
import Logo from "./logo";
import { INVITE_URL, SUPPORT_URL } from "../../lib/links";

export default function Footer() {
  return (
    <footer className="glass-strong border-t border-indigo-500/15 pt-16 pb-12 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-9 h-9" />
              <span className="font-extrabold text-lg text-white tracking-tight">
                Event<span className="text-indigo-400">Hub</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The ultimate automated dispatch and roleplay scenario management
              bot for Emergency Response: Liberty County.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-sm font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  to="/commands"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Command Directory
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Event Presets
                </Link>
              </li>
              <li>
                <Link
                  to="/status"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  System Status
                </Link>
              </li>
              <li>
                <Link
                  to="/applications"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Staff Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  to="/documentation"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Development Team
                </Link>
              </li>
              <li>
                <a
                  href={SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors inline-flex items-center gap-1"
                >
                  Support Discord <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors inline-flex items-center gap-1"
                >
                  Invite Bot <Bot className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Legal & Policy
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} EventHub Bot. Not affiliated with
            Badassoft or Roblox Corporation.
          </p>
          <p className="flex items-center gap-1">
            Engineered for elite ER:LC communities with{" "}
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
