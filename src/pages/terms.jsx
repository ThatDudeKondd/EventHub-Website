import React from "react";
import { Shield } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass p-8 sm:p-12 rounded-3xl laser-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Last updated: August 2026
            </p>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-400">
              By adding EventHub to your Discord server or using our web
              application, you agree to comply with these Terms of Service and
              all applicable Discord Community Guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              2. Bot Usage & Conduct
            </h2>
            <p className="text-slate-400">
              Users must not abuse bot commands, attempt to exploit API
              endpoints, or use EventHub for unauthorized harassment or rule
              violations within ER:LC servers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              3. Limitation of Liability
            </h2>
            <p className="text-slate-400">
              EventHub is provided "as is" without warranty of any kind. We are
              not responsible for game server downtime, lost configurations, or
              third-party disruptions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
