import { motion } from 'framer-motion';
import React from 'react'

const AboutHelper = ({ onClose }) => {
    return (
        <motion.div
            drag
            dragMomentum={false}
            className="space-grotesk-light h-140 pb-6 relative left-4/10 translate-y-1/10 -translate-x-7/10 w-full bg-[#F9F5F0] rounded-lg shadow-md overflow-y-auto cursor-move"
        >
            <nav className='p-2 flex items-center justify-between border-b border-gray-300'>
                <div className='flex items-center gap-2'>
                    <div onClick={onClose} className='close-tab w-3 h-3 bg-red-400 rounded-full flex justify-center items-center cursor-pointer'><span className='opacity-0 hover:opacity-100 text-[12px]'>x</span></div>
                    <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                </div>
            </nav>
            <h1 className="pl-6 pt-4 text-3xl inter-bold">About Me</h1>
            <section className="w-140 flex justify-items gap-4 px-6 pt-4 rounded-lg">
                <img src="/about.jpeg" alt="Profile" className="w-32 h-32 rounded-xl object-cover mb-4" />
                <span className="flex flex-col gap-1">
                    <h1 className="text-lg border-b border-gray-400"><span className="font-bold">NAME: </span>Shreekrishna Chinta</h1>
                    <h1 className="text-lg border-b border-gray-400"><span className="font-bold">POSITION: </span>MERN stack powered by AI</h1>
                    <h1 className="text-lg border-b border-gray-400"><span className="font-bold">EMAIL: </span>shreekrishna.chinta@example.com</h1>
                    <h1 className="text-lg border-b border-gray-400"><span className="font-bold">NUMBER: </span>+91 82759 02744</h1>
                </span>
            </section>
            <section className="inter-normal bg-rose-200 flex flex-col gap-4 px-6 py-4 mx-4 rounded-lg shadow-md">
                <p>
                    I’m a frontend-focused developer with a strong interest in building clean, intuitive user interfaces. I enjoy working with modern technologies like React and Tailwind CSS, focusing on creating applications that feel fast, responsive, and easy to use. My approach to development is centered around simplicity and clarity, making sure the user experience stays smooth and distraction-free.
                </p>
                <p>
                    I’m particularly drawn to minimal design systems inspired by products like Apple Notes, where every detail serves a purpose. From layout structure to micro-interactions, I pay attention to how small design choices impact usability and overall feel. I believe good design is not about adding more, but about removing what isn’t necessary.
                </p>
                <p>
                    Beyond just writing code, I’m constantly refining how I think about UI/UX, performance, and component architecture. I like building projects that balance aesthetics with functionality, aiming to create interfaces that not only look good but also feel natural to use.
                </p>
            </section>
        </motion.div>
    )
}

export default AboutHelper