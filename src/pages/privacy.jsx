import React from "react";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass p-8 sm:p-12 rounded-3xl laser-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Last updated: August 2026
            </p>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              1. Information We Collect
            </h2>
            <p className="text-slate-400">
              EventHub collects minimal data required for operation, including
              Discord server IDs, user IDs for command execution logs, and
              configured event preferences.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              2. How We Use Data
            </h2>
            <p className="text-slate-400">
              Data is used strictly to provide automated ER:LC roleplay
              dispatch, track server command logs, and maintain system security.
              We never sell or share data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              3. Data Security
            </h2>
            <p className="text-slate-400">
              All communications are encrypted in transit and at rest using
              industry-standard protocols to ensure your community's safety.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
