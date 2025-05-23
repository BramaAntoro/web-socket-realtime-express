import React from 'react'
import { FaEllipsisH, FaHeart, FaPaperPlane, FaRegBookmark, FaRegComment, FaUser } from 'react-icons/fa'

export const Post = () => {
    return (
        <div className="bg-black border border-gray-800 rounded-lg mb-6">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 flex items-center justify-center">
                        <FaUser className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold text-sm">fcbarcelona</span>
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="text-xs text-gray-400">2h</p>
                    </div>
                </div>
                <FaEllipsisH className="w-5 h-5 text-gray-400" />
            </div>

            <div className="relative">
                <img src="/api/placeholder/500/600" alt="Post" className="w-full" />
                <img src="/api/placeholder/60/60" alt="Barcelona logo" className="absolute bottom-4 right-4 w-12 h-12" />
            </div>

            <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                        <FaHeart className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                        <FaRegComment className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                        <FaPaperPlane className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                    </div>
                    <FaRegBookmark className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                </div>

                <p className="text-sm mb-2">
                    <span className="font-semibold">1,234,567 likes</span>
                </p>

                <div className="space-y-2">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-700">
                            <FaUser className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">messi</span>
                                <span className="text-sm text-gray-300">Incredible! 🔥</span>
                            </div>
                            <div className="flex items-center gap-4 mt-1">
                                <span className="text-xs text-gray-400">2h</span>
                                <span className="text-xs text-gray-400">1200 likes</span>
                                <button className="text-xs text-gray-400 hover:text-white">Reply</button>
                                <FaHeart className="w-3 h-3 text-gray-400 hover:text-red-500 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-700">
                            <FaUser className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">neymarjr</span>
                                <span className="text-sm text-gray-300">Miss playing with you bro! 💙❤️</span>
                            </div>
                            <div className="flex items-center gap-4 mt-1">
                                <span className="text-xs text-gray-400">1h</span>
                                <span className="text-xs text-gray-400">890 likes</span>
                                <button className="text-xs text-gray-400 hover:text-white">Reply</button>
                                <FaHeart className="w-3 h-3 text-gray-400 hover:text-red-500 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-800">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-700">
                        <FaUser className="w-4 h-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-1 bg-transparent text-sm outline-none placeholder-gray-500"
                    />
                    <button className="text-blue-500 text-sm font-semibold">Post</button>
                </div>
            </div>
        </div>
    )
}
