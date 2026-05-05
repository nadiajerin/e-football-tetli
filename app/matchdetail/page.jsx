import React from 'react';
import { FiChevronLeft, FiBell, FiShare2 } from 'react-icons/fi';

const MatchDetailScreen = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white font-sans max-w-md mx-auto flex flex-col relative">
      
      {/* Hero Image Section */}
      <div className="relative h-72 w-full">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000" 
          alt="Match Header" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/40"></div>

        {/* Countdown Timer Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#333]/80 backdrop-blur-md rounded-2xl p-6 text-center w-64 border border-white/10">
          <p className="text-gray-300 text-xs mb-2">This match will start in:</p>
          <p className="text-4xl font-bold tracking-widest">22:19:32</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 -mt-4 relative z-10">
        <h1 className="text-2xl font-bold mb-2">Sampdoria vs Inter Milan</h1>
        <p className="text-gray-400 text-sm">Tomorrow, 12 Sep - 08.00 PM</p>
        <p className="text-gray-400 text-sm">Seria A - Gameweek 12</p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition-colors">
            <FiBell size={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition-colors">
            <FiShare2 size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mt-8 border-b border-white/10">
          <button className="pb-3 text-sm font-semibold border-b-2 border-white">Description</button>
          <button className="pb-3 text-sm font-semibold text-gray-500">Match Schedule</button>
        </div>

        {/* Article Text */}
        <div className="mt-6 space-y-4 text-sm text-gray-300 leading-relaxed pb-32">
          <p>
            Inter will face Roberto D'Aversa and his new look Sampdoria side on Sunday afternoon. 
            Though only on one point so far this season, Sampdoria have provided two decent 
            showings against strong competition in Sassuolo and AC Milan.
          </p>
          <p>
            They drew 0-0 away to Sassuolo then suffered a narrow 1-0 defeat at home to Milan. 
            The Ligurian side also added a substantial striking presence to supplement Fabio 
            Quagliarella in another veteran, Francesco Caputo... <span className="text-gray-500 italic">Read more</span>
          </p>
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-gradient-to-t from-[#1a1a1a] to-transparent">
        <button className="w-full bg-[#00acc1] hover:bg-[#0097a7] text-white font-bold py-4 rounded-full shadow-xl transition-all active:scale-[0.98]">
          Buy Streaming Access
        </button>
      </div>

    </div>
  );
};

export default MatchDetailScreen;