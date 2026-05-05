import React from 'react';
import { FiChevronLeft, FiBell, FiShare2 } from 'react-icons/fi';

const MatchDetailScreen = () => {
    return (
        <div className="bg-[#1a1a1a] min-h-screen text-white font-sans max-w-md mx-auto flex flex-col relative">

            {/* Hero Image Section */}
            <div className="relative h-72 w-full">
                <img
                    src="/ef.jpg"
                    alt="Match Header"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay/Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/40"></div>

            </div>

            {/* Content Section */}
            <div className="px-6 -mt-4 relative z-10">
                <h1 className="text-2xl font-bold mb-2 text-center">Nayeem vs Ahiya</h1>
                {/* Action Buttons */}
                {/* 3. Navigation Tabs */}
                {/* 4. Score Card Section */}
                <div className="px-2 mt-6">
                    <div className="bg-[#1e1e1e] rounded-[24px] p-7 flex items-center justify-between shadow-lg border border-gray-800/30">
                        {/* Home Team */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/500px-FC_Internazionale_Milano_2021.svg.png" alt="MU" className="w-12 h-12 object-contain" />
                            </div>
                            <span className="text-[13px] font-semibold text-gray-300">Inter Milan</span>
                        </div>

                        {/* Live Score */}
                        <div className="flex items-center gap-5">
                            <span className="text-[42px] font-black tracking-tighter">0</span>
                            <span className="text-gray-600 text-2xl font-bold">-</span>
                            <span className="text-[42px] font-black tracking-tighter ">0</span>
                        </div>

                        {/* Away Team */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1920px-Real_Madrid_CF.svg.png" alt="NU" className="w-12 h-12 object-contain" />
                            </div>
                            <span className="text-[13px] font-semibold text-gray-300">Real Madrid </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MatchDetailScreen;
