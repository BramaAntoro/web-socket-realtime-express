import React from 'react'
import { FaImage, FaUser } from 'react-icons/fa'

export const Posting = () => {
    return (
        <div className="mb-6">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700">
                        <FaUser className="w-6 h-6 text-gray-400" />
                    </div>
                    <button className="flex-1 text-left text-gray-400 bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700">
                        What's on your mind?
                    </button>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800">
                        <FaImage className="w-5 h-5 text-green-500" />
                        <span>Photo</span>
                    </button>
                 
                </div>
            </div>
        </div>
    )
}
