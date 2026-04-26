import { motion } from 'framer-motion';
import React, { useState } from 'react'

const NotesHelper = ({ 
  onClose,
  title = "Notes",
  about = `A simple, focused notes app inspired by the clarity of Apple Notes. 
    Built to capture thoughts quickly and keep them organized without getting in the way. The goal is to reduce friction between thinking and writing, keeping the interface clean, fast, and distraction-free. 
    Designed with an emphasis on minimalism, usability, and performance.`,
  skills = ["Frontend Development (React, Tailwind CSS)",
        "UI/UX Design Principles",
        "Responsive Design",
        "Component-Based Architecture",
        "State Management",
        "Performance Optimization",
        "Basic Backend Integration"],
  experience = [
        {
            company: "Tech Company",
            role: "Frontend Developer",
            period: "2024 - Present",
            description: "Building modern web applications with React and TypeScript."
        },
        {
            company: "Startup",
            role: "Full Stack Developer",
            period: "2022 - 2024",
            description: "Developed end-to-end solutions for client projects."
        },
        {
            company: "Startup",
            role: "Full Stack Developer",
            period: "2022 - 2024",
            description: "Developed end-to-end solutions for client projects."
        }
  ],
  tabs = [
        { id: 'experience', label: 'Experience', color: 'bg-blue-500'},
        { id: 'whyme', label: 'Why me', color: 'bg-green-500' },
        { id: 'resume', label: 'Resume', color: 'bg-yellow-500', colorfalse: 'bg-red-300' }
  ],
  resumeUrl = "/resume.pdf",
  quote = "The only way to do great work is to love what you do."
}) => {
    const [activeTab, setActiveTab] = useState('experience');

    const renderContent = () => {
        switch (activeTab) {
            case 'experience':
                return (
                    <div>
                        <h1 className='inter-bold text-2xl font-bold mb-4'>Experience</h1>
                        {experience.map((exp, index) => (
                            <div key={index} className='mb-4 pb-4 border-b border-gray-200 last:border-0'>
                                <h2 className='inter-bold text-lg'>{exp.company}</h2>
                                <p className='inter-normal text-sm opacity-70'>{exp.role}</p>
                                <p className='inter-normal text-xs opacity-50 mb-2'>{exp.period}</p>
                                <p className='inter-normal text-sm opacity-80'>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'whyme':
                return (
                    <div>
                        <h1 className='inter-bold text-2xl font-bold mb-4'>Why me?</h1>
                        <p className='inter-normal text-sm opacity-80 mb-4'>{about}</p>
                        <h2 className='inter-bold text-lg font-bold mt-4 mb-2'>Skills</h2>
                        <ul className='list-disc list-inside inter-normal text-sm opacity-80 space-y-1'>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <h1 className='inter-bold text-lg font-bold mt-4 mb-2'>A Small Quote</h1>
                        <p className='inter-normal text-sm opacity-80'>&ldquo;{quote}&rdquo;</p>
                    </div>
                );
            case 'resume':
                return (
                    <div className='flex flex-col items-center justify-center h-full py-8'>
                        <p className='inter-normal text-sm opacity-70 mb-4'>View my resume</p>
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors inter-normal text-sm'
                        >
                            Open Resume
                        </a>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div 
            drag
            dragMomentum={false}
            className="relative left-8/10 -translate-x-6/10 bg-[#F9F5F0] w-fit h-fit rounded-lg shadow-xl flex flex-col justify-start z-40 cursor-move"
        >
            <nav className='p-2 flex items-center justify-between border-b border-gray-300'>
                <div className='flex items-center gap-2'>
                    <div onClick={onClose} className='close-tab w-3 h-3 bg-red-400 rounded-full flex justify-center items-center cursor-pointer'><span className='opacity-0 hover:opacity-100 text-[12px]'>x</span></div>
                    <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                    <div className='inter-normal opacity-40'>{title}</div>
                </div>
            </nav>
            <div className='flex gap-4 max-h-[26rem]'>
                <section className='inter-normal border-r border-gray-300 pr-4 min-w-24'>
                    <div className='py-4 px-2 flex flex-col items-start gap-1'>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => tab.id === 'resume' ? window.open(resumeUrl, '_blank') : setActiveTab(tab.id)}
                                className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${activeTab === tab.id
                                        ? `${tab.color} text-zinc-100 font-medium`
                                        : `${tab.colorfalse} text-zinc-600`
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </section>
                <section className='w-[24rem] p-4 overflow-y-auto'>
                    {renderContent()}
                </section>
            </div>
        </motion.div>
    )
}

export default NotesHelper