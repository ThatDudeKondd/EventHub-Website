import React, { useState } from "react";
import {
  Shield,
  FileText,
  Terminal,
  Gamepad2,
  Server,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";

export default function Docs() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="max-w-7xl mx-auto pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 animate-slide-up">
      {/* Custom staggered floating keyframe animations */}
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-1 { animation: floatCard 5s ease-in-out infinite; }
        .animate-float-2 { animation: floatCard 5.5s ease-in-out infinite 1.2s; }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Side Navigation Panel */}
        <div className="lg:col-span-1 space-y-6 bg-card/40 border border-border rounded-3xl p-5 backdrop-blur-xl h-fit shadow-xl shadow-indigo-950/20 animate-float-1">
          {/* Section 1: COMMANDS */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 mb-3 px-3">
              Commands
            </h3>
            <div className="space-y-1">
              {[
                { id: "general-commands", label: "General" },
                { id: "erlc-commands", label: "ER:LC" },
                { id: "events-commands", label: "Events" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? "bg-indigo-600/30 text-white border border-indigo-500/40 font-semibold shadow-md shadow-indigo-600/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: DOCUMENTATION */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 mb-3 px-3">
              Documentation
            </h3>
            <div className="space-y-1">
              {[
                { id: "privacy", label: "Privacy Policy" },
                { id: "terms", label: "Terms of Service" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? "bg-indigo-600/30 text-white border border-indigo-500/40 font-semibold shadow-md shadow-indigo-600/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Content Panel */}
        <div className="lg:col-span-3 bg-card/40 border border-border rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-xl shadow-indigo-950/20 animate-float-2">
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === "privacy" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-gray-400 mt-2 text-base">
                  How EventHub collects, uses, and protects your data.
                </p>
              </div>

              <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed border-t border-border/60 pt-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Introduction
                  </h2>
                  <p className="text-gray-300">
                    EventHub is an advanced Discord bot built for Emergency
                    Response: Liberty County (ER:LC) communities. It allows
                    server staff to instantly create, manage, and automate
                    professional roleplay events using slash commands. This
                    Privacy Policy explains what information EventHub collects,
                    how it is used, and the choices you have regarding your
                    data.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Information We Collect
                  </h2>
                  <p className="text-gray-300 mb-3">
                    To operate EventHub, we collect only the data necessary to
                    provide the service:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>
                      <strong className="text-white">Discord User ID</strong> —
                      used to identify staff and assign roles.
                    </li>
                    <li>
                      <strong className="text-white">Discord Server ID</strong>{" "}
                      — used to associate configuration with your server.
                    </li>
                    <li>
                      <strong className="text-white">Command usage</strong> —
                      the commands your server runs to generate events.
                    </li>
                    <li>
                      <strong className="text-white">
                        Event configurations
                      </strong>{" "}
                      — presets, custom templates, and event settings you
                      create.
                    </li>
                    <li>
                      <strong className="text-white">Server settings</strong> —
                      channels, roles, and defaults configured during setup.
                    </li>
                  </ul>
                  <p className="text-xs text-indigo-400 font-mono mt-4">
                    EventHub does <strong className="text-white">not</strong>{" "}
                    collect passwords, payment information, or the contents of
                    personal conversations.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    How Information Is Used
                  </h2>
                  <p className="text-gray-300 mb-3">
                    Collected data is used only to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-300">
                    <li>Operate the bot and deliver its features.</li>
                    <li>Save and recall your server configurations.</li>
                    <li>Improve reliability and performance.</li>
                    <li>Troubleshoot issues and diagnose problems.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Data Storage & Security
                  </h2>
                  <p className="text-gray-300">
                    Configuration data is stored securely in SQLite/aiosqlite
                    databases and is only accessible to the EventHub development
                    team and infrastructure systems. Sensitive credentials are
                    never exposed, and access is restricted to authorized
                    servers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === "terms" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Terms of Service
                </h1>
                <p className="text-gray-400 mt-2 text-base">
                  Guidelines and rules governing the use of EventHub.
                </p>
              </div>

              <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed border-t border-border/60 pt-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-300">
                    By adding EventHub to your Discord server or using its
                    features, you agree to comply with and be bound by these
                    Terms of Service. If you do not agree, please remove the bot
                    from your server immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    2. Usage Guidelines & Fair Use
                  </h2>
                  <p className="text-gray-300 mb-3">
                    When using EventHub, you agree NOT to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>
                      Attempt to exploit, reverse engineer, or spam command
                      triggers.
                    </li>
                    <li>Bypass automated event rate-limits or system locks.</li>
                    <li>
                      Use EventHub for malicious activities or in violation of
                      Discord's Terms of Service.
                    </li>
                    <li>
                      Use automated scripts to overload EventHub dispatch
                      endpoints.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    3. Service Availability & Warranties
                  </h2>
                  <p className="text-gray-300">
                    EventHub is provided "as is" without warranties of any kind.
                    While we aim for 99.9% operational uptime, we are not
                    responsible for downtime caused by Discord API outages,
                    Roblox/ER:LC maintenance, or scheduled updates.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    4. Termination & Access Revocation
                  </h2>
                  <p className="text-gray-300">
                    We reserve the right to blacklist servers or terminate user
                    access to EventHub at any time without prior notice if these
                    terms are violated or if abuse is detected.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GENERAL COMMANDS */}
          {activeTab === "general-commands" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h1 className="text-3xl font-extrabold text-white">
                General Commands
              </h1>
              <p className="text-gray-400 text-sm">
                Essential bot commands available for all server members.
              </p>
              <div className="bg-card/60 border border-border/60 rounded-2xl p-6 font-mono text-xs text-indigo-300 space-y-3">
                <p>
                  <strong className="text-white">/help</strong> — Displays the
                  command menu and user manual.
                </p>
                <p>
                  <strong className="text-white">/ping</strong> — Checks current
                  bot response latency and API status.
                </p>
                <p>
                  <strong className="text-white">/info</strong> — Shows version
                  details, system status, and support links.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: ER:LC COMMANDS */}
          {activeTab === "erlc-commands" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h1 className="text-3xl font-extrabold text-white">
                ER:LC Dispatch Commands
              </h1>
              <p className="text-gray-400 text-sm">
                Automated dispatching and server management for ER:LC roleplays.
              </p>
              <div className="bg-card/60 border border-border/60 rounded-2xl p-6 font-mono text-xs text-indigo-300 space-y-3">
                <p>
                  <strong className="text-white">
                    /dispatch create [type] [location]
                  </strong>{" "}
                  — Generates an automated emergency dispatch alert.
                </p>
                <p>
                  <strong className="text-white">/shift start / end</strong> —
                  Manages active law enforcement shift logs.
                </p>
                <p>
                  <strong className="text-white">/status</strong> — Syncs with
                  ER:LC server join codes and player counts.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: EVENTS COMMANDS */}
          {activeTab === "events-commands" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h1 className="text-3xl font-extrabold text-white">
                Events Documentation
              </h1>
              <p className="text-gray-400 text-sm">
                Automated event execution for Murder Mystery, Airsoft, Car
                Shows, and Circuit Racing.
              </p>
              <div className="bg-card/60 border border-border/60 rounded-2xl p-6 font-mono text-xs text-indigo-300 space-y-3">
                <p>
                  <strong className="text-white">!startmm / !stopmm</strong> —
                  Murder Mystery event triggers.
                </p>
                <p>
                  <strong className="text-white">!startairsoft</strong> —
                  Tactical Airsoft match controller.
                </p>
                <p>
                  <strong className="text-white">!startcarshow</strong> — Car
                  Show vehicle voting and exhibition mode.
                </p>
                <p>
                  <strong className="text-white">!startrace</strong> — Circuit
                  Race lap timing and leaderboard.
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 pt-6 border-t border-border flex items-center justify-between text-xs text-gray-500 font-mono">
            <span>EVENTHUB SYSTEM DOCS</span>
            <span className="text-indigo-400">v2.4 Automated Dispatch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
