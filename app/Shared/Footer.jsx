import Link from 'next/link'
import React from 'react'
import { FiGift, FiHome, FiPlayCircle, FiUser } from 'react-icons/fi'
import { RiLiveLine } from 'react-icons/ri'

export const Footer = () => {
    return (
        <nav className="fixed bottom-0 left-0 z-50 right-0 max-w-md mx-auto bg-[#1a1a1a] border-t border-[#333] flex justify-around py-4 text-white">
            <Link href="/" className="flex flex-col items-center gap-1 cursor-pointer">
                <FiHome className="text-xl" />
                <span className="text-[10px]">Home</span>
            </Link>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
                <FiPlayCircle className="text-xl" />
                <span className="text-[10px]">Explore</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
                <RiLiveLine className="text-xl" />
                <span className="text-[10px]">Live</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
                <FiGift className="text-xl" />
                <span className="text-[10px]">Reward</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
                <FiUser className="text-xl" />
                <span className="text-[10px]">Contact</span>
            </div>
        </nav>
    )
}
