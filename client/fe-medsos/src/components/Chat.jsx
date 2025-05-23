import React from 'react'
import { FaUser
} from 'react-icons/fa'

export const Chat = () => {
    return (
        <div className="w-80 p-6 border-l border-gray-800">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700">
                        <FaUser className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">bramaantoro</p>
                        <p className="text-xs text-gray-400">Brama Antoro</p>
                    </div>
                </div>
                <button className="text-blue-500 text-xs font-semibold">Switch</button>
            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 font-semibold text-sm">Suggested for you</h3>
                    <button className="text-xs text-white">See All</button>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
                                <FaUser className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <p className="font-semibold text-sm">hasd</p>
                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                </div>
                                <p className="text-xs text-gray-400">Followed by savdh + 26 more</p>
                            </div>
                        </div>
                        <button className="text-blue-500 text-xs font-semibold">Follow</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
                                <FaUser className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <p className="font-semibold text-sm">svad</p>
                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                </div>
                                <p className="text-xs text-gray-400">Followed by advsb + 22 more</p>
                            </div>
                        </div>
                        <button className="text-blue-500 text-xs font-semibold">Follow</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
