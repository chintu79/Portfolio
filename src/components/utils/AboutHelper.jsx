import { motion } from 'framer-motion';
import React from 'react';
import GoogleMap from './GoogleMap';
import WindowWrapper from './WindowWrapper';

const AboutHelper = ({
    onClose,
    name = "Shreekrishna Chinta",
    position = "MERN stack powered by AI",
    email = "shreekrishna.chinta@example.com",
    phone = "+91 82759 02744",
    description = "I'm a frontend-focused developer with a strong interest in building clean, intuitive user interfaces.",
    mapCenter = { lat: 18.566255, lng: 73.87574 },
    mapZoom = 4,
    mapId = "AIzaSyD7cUEhj8htSDek0QDT3yA3ig1qTumn3bw"
}) => {
    return (
        <WindowWrapper
            onClose={onClose}
            title="About Me"
            positionClass="relative left-4/10 translate-y-1/10 -translate-x-7/10"
            className="space-grotesk-light h-120 pb-6 overflow-y-auto"
        >
            <h1 className="pl-6 pt-4 text-3xl inter-bold">About Me</h1>
            <section className="w-140 flex justify-items gap-4 px-6 pt-4 rounded-lg">
                <img src="/about.jpeg" alt="Profile" className="w-32 h-32 rounded-xl object-cover mb-4" />
                <span className="flex flex-col gap-1">
                    <h1 className="text-lg border-b border-gray-400"><span className="font-bold">NAME: </span>{name}</h1>
                    <h1 className="text-lg border-b border-gray-400"><span className="font-bold">POSITION: </span>{position}</h1>
                    <h1 className="text-lg border-b border-gray-400"><span className="font-bold">EMAIL: </span>{email}</h1>
                    <h1 className="text-lg border-b border-gray-400"><span className="font-bold">NUMBER: </span>{phone}</h1>
                </span>
            </section>
            <section className="inter-normal bg-rose-200 flex flex-col gap-4 px-6 py-4 mx-4 mb-4 rounded-lg shadow-md">
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
            <GoogleMap
                center={mapCenter}
                zoom={mapZoom}
                mapId={mapId}
                className="mx-4 py-4 h-60"
            />
        </WindowWrapper>
    )
}

export default AboutHelper