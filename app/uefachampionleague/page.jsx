import Link from 'next/link';
import React from 'react';

const KnockoutBracket = () => {

    const categories = [
        { name: 'ALL', active: true, link: "/" },
        { name: 'Champions', img: '/01.png', link: "/uefachampionleague" },
        { name: 'Premier', img: '/02.png', link: "premierleague" },
        { name: 'LaLiga', img: '/03.png', link: "laliga" },
    ];

    const roundOf16 = [
        { t1: 'LIV', s1: [0, 4], t2: 'GAL', s2: [1, 0], agg: '4-1' },
        { t1: 'CHE', s1: [2, 0], t2: 'PSG', s2: [5, 3], agg: '2-8' },
        { t1: 'FCB', s1: [6, 4], t2: 'ATA', s2: [1, 1], agg: '10-2' },
        { t1: 'MCI', s1: [0, 1], t2: 'RMA', s2: [3, 2], agg: '1-5' }
    ];

    return (
        <div className="bg-[#1a1a1a] min-h-screen text-gray-300 font-sans selection:bg-yellow-500/30">

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

            {/* Tournament Logo */}
            <div className='flex items-center gap-4 py-6 px-6'>
                <img src="/01.png" alt="" />
                <p className='text-white text-2xl'>UEFA Champions League</p>
            </div>

            {/* Container with horizontal scroll for mobile */}
            <div className="w-full overflow-x-auto overflow-y-hidden custom-scrollbar">
                <div className="min-w-[1100px] p-6 md:p-12 relative flex items-start gap-12">

                    {/* 1. Round of 16 */}
                    <div className="flex flex-col gap-10 w-64 pt-8">
                        <h3 className="absolute top-4 left-6 text-[11px] font-black uppercase text-gray-500 tracking-[0.3em]">
                            Round of 16
                        </h3>
                        {roundOf16.map((match, i) => (
                            <div key={i} className="bg-[#242424] border border-gray-800/60 rounded-xl p-4 shadow-2xl hover:border-gray-600 transition-all duration-300">
                                <div className="flex justify-between text-[9px] text-gray-500 font-bold mb-3 tracking-tighter">
                                    <span>LEG 1</span>
                                    <span>LEG 2</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-sm text-gray-100">{match.t1}</span>
                                        <div className="flex gap-4 text-sm font-mono">
                                            <span>{match.s1[0]}</span>
                                            <span className="text-white font-black">{match.s1[1]}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-sm text-gray-400">{match.t2}</span>
                                        <div className="flex gap-4 text-sm font-mono">
                                            <span>{match.s2[0]}</span>
                                            <span>{match.s2[1]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 pt-2 border-t border-gray-800/40 text-[10px] text-gray-500 font-medium text-center">
                                    AGGREGATE: <span className="text-gray-400">{match.agg}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 2. Quarter-final (Precisely Centered) */}
                    <div className="flex flex-col gap-[164px] w-64 pt-[88px]">
                        <h3 className="absolute top-4 left-[340px] text-[11px] font-black uppercase text-gray-500 tracking-[0.3em]">
                            Quarter-final
                        </h3>

                        {/* Top Match */}
                        <div className="bg-[#242424] border border-gray-800 rounded-xl p-4 mt-16 shadow-xl border-l-4 border-l-blue-600">
                            <div className="space-y-3 py-1">
                                <div className="flex justify-between items-center text-gray-400">
                                    <span className="font-bold text-sm">LIV</span>
                                    <span className="text-sm font-bold px-2">0</span>
                                </div>
                                <div className="flex justify-between items-center text-white">
                                    <span className="font-bold text-sm tracking-wide">PSG</span>
                                    <span className="text-sm font-bold bg-blue-600 px-2 rounded-md shadow-lg shadow-blue-900/20">4</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Match - Yellow Box position from image_e55b5c.png */}
                        <div className="bg-[#242424] border border-gray-800 rounded-xl p-4 mt-32 shadow-xl border-l-4 border-l-yellow-600/50">
                            <div className="space-y-3 py-1">
                                <div className="flex justify-between items-center text-white">
                                    <span className="font-bold text-sm tracking-wide">FCB</span>
                                    <span className="text-sm font-bold bg-blue-600 px-2 rounded-md">4</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-400">
                                    <span className="font-bold text-sm">RMA</span>
                                    <span className="text-sm font-bold px-2">3</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Semi-final */}
                    <div className="flex flex-col w-64 pt-[250px]">
                        <h3 className="absolute top-4 left-[640px] text-[11px] font-black uppercase text-gray-500 tracking-[0.3em]">
                            Semi-final
                        </h3>
                        <div className="bg-[#242424] border border-gray-800/80 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="space-y-4 py-1">
                                <div className="flex justify-between items-center">
                                    <span className="font-black text-xs text-gray-500 tracking-tighter italic">PSG</span>
                                    <span className="text-xl font-black text-white">5</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-black text-xs text-gray-500 tracking-tighter italic">FCB</span>
                                    <span className="text-xl font-black text-white">4</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-3 border-t border-gray-800 text-[9px] text-blue-400 font-black text-center uppercase tracking-widest">
                                Match Finished
                            </div>
                        </div>
                    </div>

                    {/* 4. Grand Final */}
                    <div className="flex flex-col w-[320px] pt-[200px]">
                        <h3 className="absolute top-4 left-[930px] text-[11px] font-black uppercase text-yellow-500 tracking-[0.4em]">
                            Grand Final
                        </h3>
                        <div className="bg-gradient-to-br from-yellow-600/20 via-[#262626] to-[#1a1a1a] border-2 border-yellow-600/30 rounded-[2rem] p-8 shadow-2xl text-center relative overflow-hidden group">
                            {/* Decorative Glow */}
                            <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-600/10 rounded-full blur-3xl group-hover:bg-yellow-600/20 transition-all duration-700"></div>

                            <p className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.3em] mb-8">Champions Final</p>

                            <div className="flex items-center justify-center gap-6 mb-8">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-[#333] rounded-full flex items-center justify-center border-2 border-gray-700 shadow-inner font-black text-white italic text-xs">PSG</div>
                                </div>
                                <div className="text-gray-700 font-black text-2xl italic tracking-tighter">VS</div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-[#333] rounded-full flex items-center justify-center border-2 border-dashed border-gray-700 font-black text-gray-600 italic text-lg">?</div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-800/80">
                                <p className="text-xs font-black text-white tracking-widest uppercase italic">Istanbul 2026</p>
                                <p className="text-[10px] text-gray-500 mt-2 font-bold">20 MAY • 21:00 CET</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Tip */}
            <div className="md:hidden text-center py-4 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                ← Swipe to view bracket →
            </div>
        </div>
    );
};

export default KnockoutBracket;