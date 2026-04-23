import React from 'react'

const NotesHelper = () => {
    const about = `A simple, focused notes app inspired by the clarity of Apple Notes. 
    Built to capture thoughts quickly and keep them organized without getting in the way. The goal is to reduce friction between thinking and writing, keeping the interface clean, fast, and distraction-free. 
    Designed with an emphasis on minimalism, usability, and performance.`

    const skills = ["Frontend Development (React, Tailwind CSS)",
        "UI/UX Design Principles",
        "Responsive Design",
        "Component-Based Architecture",
        "State Management",
        "Performance Optimization",
        "Basic Backend Integration"]

    return (
        <div className="absolute left-1/2 -translate-x-1/2 bg-[#F9F5F0] h-120 rounded-lg shadow-xl flex flex-col justify-start z-40">
            <nav className='p-2 flex items-center justify-start gap-2 border-b border-gray-300'>
                <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                <div className='inter-normal opacity-40'>Notes</div>
            </nav>
            <div className='flex gap-4 h-full'>
                <section className='inter-normal border-r border-gray-300 pr-4'>
                    <div className='p-4 flex flex-col items-start gap-2'>
                        <button>Experience</button>
                        <button>About me</button>
                        <button>Resume</button>
                    </div>

                </section>
                <section className='w-100 h-full p-4'>
                    <h1 className='inter-bold text-4xl font-extra-bold mb-2'>Why me?</h1>
                    <p className='inter-normal text-[0.9rem] opacity-80'>{about}</p>
                    <h2 className='inter-bold text-2xl font-bold mt-4 mb-2'>Skills</h2>
                    <ul className='list-disc list-inside inter-normal text-[0.9rem] opacity-80'>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default NotesHelper