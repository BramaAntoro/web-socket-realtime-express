import React from 'react'
import { FaHome } from 'react-icons/fa';

export const Sidebar = () => {
    return (
        <div className="w-64 bg-black border-r border-gray-800 p-4 fixed h-full" >
            <div className="mb-8">
                <h1 className="text-2xl font-bold">PI Medsos</h1>
            </div>

            <nav className="space-y-4">
                <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                    <FaHome className="w-6 h-6" />
                    <span>Home</span>
                </div>
            </nav>
        </div >
    )
}
