import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Terminal, HelpCircle, BookOpen, Gamepad2 } from 'lucide-react';

const eventsData = [
  {
    id: 'murder-mystery',
    number: '3.1',
    title: 'Murder Mystery',
    description: 'An immersive deduction and survival game mode for ER:LC roleplay servers.',
    sections: {
      logic: 'Players are randomly assigned secret roles: Innocent, Sheriff, or Murderer. Innocents must survive and complete tasks around the map, the Sheriff must protect innocents and neutralize the threat, and the Murderer must eliminate all players without getting caught.',
      commands: '!startmm, !stopmm, !role assign [user] [role], !reveal murderer, !status',
      hints: 'Listen closely for gunshot audio cues. Check dark corners and use proximity chat carefully to avoid being ambushed.',
      walkthrough: '1. Lobby opens and roles are secretly assigned to all participants.\n2. Round begins with a 30-second preparation and grace period.\n3. Murderer targets players; eliminated players drop bodies that can be reported by Innocents.\n4. Emergency meetings or direct shootouts determine the winning faction.'
    }
  },
  {
    id: 'airsoft',
    number: '3.2',
    title: 'Airsoft',
    description: 'Tactical simulation event utilizing non-lethal roleplay mechanics and team coordination.',
    sections: {
      logic: 'Two opposing teams (Alpha and Bravo) compete in objective-based tactical skirmishes using designated airsoft loadouts, cover protocols, and single-side stacking tactics.',
      commands: '!startairsoft, !stopairsoft, !score, !loadout [team], !respawn [user]',
      hints: 'Maintain constant radio discipline. Utilize tactical smoke granades and flashbangs to breach rooms securely.',
      walkthrough: '1. Teams gather at designated staging areas for equipment checks.\n2. Safety briefing and weapon safety verification are completed.\n3. Match starts with objective capture zones activated across the map.\n4. First team to secure all tactical control points wins the match.'
    }
  },
  {
    id: 'car-show',
    number: '3.3',
    title: 'Car Show',
    description: 'Showcase custom vehicle builds, liveries, and performance tuning in a regulated meetup environment.',
    sections: {
      logic: 'Participants park their custom vehicles in designated exhibition slots while judges and community members evaluate styling, wheel choice, paint finish, and theme authenticity.',
      commands: '!startcarshow, !vote [id], !results, !spawncar [slot], !lockcars',
      hints: 'Maintain safe driving speeds in the exhibition zone. Respect other participants custom vehicle builds at all times.',
      walkthrough: '1. Vehicle registration and staging in the designated pit area.\n2. Controlled sequential entry into the main exhibition showcase pavilion.\n3. Public voting window and professional judge inspection phase.\n4. Trophy ceremony and organized cruise convoy departure.'
    }
  },
  {
    id: 'circuit-race',
    number: '3.4',
    title: 'Circuit Race',
    description: 'High-speed professional track racing event with automated checkpoint validation and lap timing.',
    sections: {
      logic: 'Racers complete a set number of laps around a sanctioned circuit track while avoiding traffic, managing tire wear, and navigating tight chicanes and hairpins.',
      commands: '!startrace, !lap [user], !leaderboard, !finishline, !disqualify [user]',
      hints: 'Watch your braking zones on sharp corners. Intentional ramming will result in immediate disqualification from the race grid.',
      walkthrough: '1. Grid lineup based on qualifying times or random draw.\n2. Countdown timer starts with synchronized visual traffic lights.\n3. Multi-lap high-speed sprint across the official circuit layout.\n4. Podium celebration and trophy handover for top 3 finishers.'
    }
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

export default function Events() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeTab, setActiveTab] = useState('logic');
  const [slideAnimation, setSlideAnimation] = useState('opacity-100 translate-x-0');

  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();

  const current = eventsData[activeEvent];

  // Handle smooth slide transition when changing events
  const handleEventSelect = (idx) => {
    if (idx === activeEvent) return;

    // 1. Slide out current box to the left
    setSlideAnimation('opacity-0 -translate-x-12');

    setTimeout(() => {
      setActiveEvent(idx);
      setActiveTab('logic');
      // 2. Instantly jump position to the right (invisible)
      setSlideAnimation('opacity-0 translate-x-12');

      // 3. Slide in new box from the right to center
      setTimeout(() => {
        setSlideAnimation('opacity-100 translate-x-0');
      }, 50);
    }, 250);
  };

  return (
    <div className="max-w-6xl mx-auto pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          <Sparkles size={14} />
          <span>3. Events Documentation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Event <span className="text-indigo-400">Guides & Manuals</span>
        </h1>
        <p className="text-slate-400 mt-4 text-base md:text-lg">
          Explore game logic, bot commands, hints, and full round walkthroughs for all official ER:LC events.
        </p>
      </div>

      {/* Event Selector Navigation Cards with Floating Effect */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {eventsData.map((ev, idx) => {
          const floatClass = idx === 0 ? 'animate-float-1' : idx === 1 ? 'animate-float-2' : idx === 2 ? 'animate-float-3' : 'animate-float-4';
          return (
            <button
              key={ev.id}
              onClick={() => handleEventSelect(idx)}
              className={`p-4 rounded-2xl border text-left transition-all backdrop-blur-xl shadow-lg shadow-indigo-950/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600/30 ${floatClass} ${
                activeEvent === idx 
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-indigo-600/30' 
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800/60'
              }`}
            >
              <div className="text-xs font-mono text-indigo-400 mb-1">{ev.number}</div>
              <div className="font-bold text-sm sm:text-base">{ev.title}</div>
            </button>
          );
        })}
      </div>

      {/* Active Event Content Box with Sliding Transition */}
      <div 
        ref={contentRef}
        className={`bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 transform ${
          contentVisible ? slideAnimation : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-indigo-400">{current.number} Event Guide</span>
            <h2 className="text-2xl font-extrabold text-white mt-1">{current.title}</h2>
            <p className="text-slate-400 text-sm mt-1">{current.description}</p>
          </div>

          {/* Section Sub-Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'logic', label: 'Game Logic', icon: Gamepad2 },
              { id: 'commands', label: 'Game Commands', icon: Terminal },
              { id: 'hints', label: 'Hints & Messages', icon: HelpCircle },
              { id: 'walkthrough', label: 'Full Walkthrough', icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all backdrop-blur-xl ${
                    activeTab === tab.id 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-500/50' 
                      : 'bg-slate-900/40 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800 hover:border-indigo-500/40'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between backdrop-blur-md">
          <div>
            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
              {activeTab === 'logic' && `${current.number}.1 Game Logic Overview`}
              {activeTab === 'commands' && `${current.number}.2 Bot & Game Commands`}
              {activeTab === 'hints' && `${current.number}.3 Hints & Broadcast Messages`}
              {activeTab === 'walkthrough' && `${current.number}.4 Full Round Walkthrough`}
            </h3>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {current.sections[activeTab]}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>EVENT MODULE: {current.title.toUpperCase()}</span>
            <span className="text-indigo-400">EventHub Automated Dispatch v2.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}