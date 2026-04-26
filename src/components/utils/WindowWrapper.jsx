import { motion } from 'framer-motion';
import React from 'react';

/**
 * Reusable window wrapper component with drag functionality
 * Use this as a base for creating floating panels like AboutHelper, NotesHelper, etc.
 * 
 * @param {string} title - Window title (shown in nav bar)
 * @param {function} onClose - Callback when close button is clicked
 * @param {ReactNode} children - Content to render inside the window
 * @param {string} className - Additional classes for the content container
 * @param {string} positionClass - Positioning classes (default: centered)
 * @param {string} width - Width of the window (default: fit)
 * @param {string} height - Height of the window (default: fit)
 * @param {boolean} showWindowControls - Show macOS-style window dots (default: true)
 */
const WindowWrapper = ({
    title = "",
    onClose,
    children,
    className = "",
    positionClass = "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
    width = "w-fit",
    showWindowControls = true,
}) => {
    return (
        <motion.div
            drag
            dragMomentum={false}
            className={`bg-[#F9F5F0] rounded-lg shadow-xl flex flex-col justify-start z-40 cursor-move ${positionClass} ${width}`}
        >
            {/* Window Title Bar */}
            <nav className='p-2 flex items-center justify-between border-b border-gray-300 rounded-t-lg'>
                <div className='flex items-center gap-2'>
                    {showWindowControls && (
                        <>
                            <div 
                                onClick={onClose} 
                                className='close-tab w-3 h-3 bg-red-400 rounded-full flex justify-center items-center cursor-pointer hover:bg-red-500 transition-colors'
                            >
                                <span className='opacity-0 hover:opacity-100 text-[10px] text-white font-bold'>×</span>
                            </div>
                            <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                            <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                        </>
                    )}
                    {title && (
                        <div className='inter-normal opacity-40 text-sm ml-2'>{title}</div>
                    )}
                </div>
            </nav>
            
            {/* Content Area */}
            <div className={className}>
                {children}
            </div>
        </motion.div>
    );
};

export default WindowWrapper;