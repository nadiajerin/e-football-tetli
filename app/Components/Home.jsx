import Link from 'next/link';
import React from 'react';
import { FiSearch, FiBell, FiHome, FiPlayCircle, FiGift, FiUser } from 'react-icons/fi';
import { RiLiveLine } from 'react-icons/ri';

const NowTVApp = () => {
  const categories = [
    { name: 'ALL', active: true , link: "/"},
    { name: 'Champions', img: '/01.png' , link: "/uefachampionleague" },
    { name: 'Premier', img: '/02.png' , link: "/premierleague" },
    { name: 'LaLiga', img: '/03.png' , link: "/laliga" },
  ];

  const matches = [
    { id: 101, team1: 'Nayeem', team2: 'Ahmed Ahiya', time: '11.30 PM', img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/500px-FC_Internazionale_Milano_2021.svg.png', img2: "https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1920px-Real_Madrid_CF.svg.png" },
    // { id: 102, team1: 'Espanyol', team2: 'Atletico Madrid', status: 'LIVE', img1: 'https://cdn.freebiesupply.com/logos/large/2x/espanyol-logo-png-transparent.png', img2: "https://logodownload.org/wp-content/uploads/2017/02/atletico-madrid-logo-1-1.png" },
    // { id: 103, team1: 'Real Madrid', team2: 'Celta Vigo', time: '09.00 PM', img1: 'https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1920px-Real_Madrid_CF.svg.png', img2: "https://www.clipartmax.com/png/full/147-1471208_celta-vigo-logo-png.png"  },
    // { id: 104, team1: 'Sampdoria', team2: 'Inter Milan', time: '09.00 PM' , img1: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/U.C._Sampdoria_logo.svg/960px-U.C._Sampdoria_logo.svg.png', img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/500px-FC_Internazionale_Milano_2021.svg.png" },
    // { id: 105, team1: 'AC Milan', team2: 'Fiorentina', time: '10.00 PM' , img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1920px-Logo_of_AC_Milan.svg.png', img2: "https://assets.football-logos.cc/logos/italy/1500x1500/fiorentina.3a19a902.png"},
    // { id: 106, team1: 'Montpellier', team2: 'Saint-Etienne', time: '11.00 PM' , img1: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/HSC_Montpellier_Logo.png', img2: "https://upload.wikimedia.org/wikipedia/commons/f/fb/AS_Saint-%C3%89tienne_official_logo.png"},
  ];

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white font-sans max-w-md mx-auto flex flex-col">

      {/* League Categories */}
      <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar py-4 scroll-smooth">
        {categories.map((cat, i) => (
          <Link href={cat?.link} key={i} className="flex-shrink-0">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border border-gray-700 bg-[#2d2d2d] ${cat.active ? 'bg-[#444]' : ''}`}>
              {cat.active ? (
                <span className="text-xs font-bold">Match</span>
              ) : (
                <img src={cat.img} alt={cat.name} className="w-10 h-10 object-contain" />
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Match List */}
      <main className="flex-1 px-4 py-2 mb-20">
        <div className="bg-[#262626] rounded-2xl overflow-hidden border border-[#333]">
          {matches.map((match, idx) => (
            <Link href={`/matchdetail/${match.id}`}
              key={idx}
              className={`flex items-center justify-between p-4 ${idx !== matches.length - 1 ? 'border-b border-[#333]' : ''}`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img src={match.img1} className="w-6 h-6  rounded-full" /> {/* Placeholder Logo */}
                  <span className="text-sm font-medium">{match.team1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={match.img2} className="w-6 h-6 rounded-full" /> {/* Placeholder Logo */}
                  <span className="text-sm font-medium">{match.team2}</span>
                </div>
              </div>

              <div className="flex items-center">
                {match.status === 'LIVE' ? (
                  <span className="bg-red-600 text-[10px] font-bold px-3 py-1 rounded-full text-white">
                    LIVE
                  </span>
                ) : (
                  <div className="bg-[#333] flex items-center gap-2 px-3 py-2 rounded-full">
                    <span className="text-xs text-gray-300">{match.time}</span>
                    <FiBell className="text-xs text-gray-400" />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NowTVApp;