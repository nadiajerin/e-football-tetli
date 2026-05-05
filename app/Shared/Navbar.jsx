import React from 'react'
import { FiBell, FiSearch } from 'react-icons/fi'

export const Navbar = () => {
    return (

        <header className="flex justify-between items-center p-6 pt-4 bg-[#1a1a1a] text-white">
            <h1 className="text-xl font-bold italic tracking-tight">e-Football Tetli</h1>
            <div className="flex gap-5 text-2xl">
                <FiSearch className="cursor-pointer" />
                <FiBell className="cursor-pointer" />
            </div>
        </header>
    )
}
