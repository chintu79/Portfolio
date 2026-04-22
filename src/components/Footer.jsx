import React, { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';


const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "shrikrishnachinta79@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 700);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className='absolute h-screen'>
            <h1 className='space-grotesk-bold relative left-20 top-[20%] text-[22rem] tracking-tighter leading-none opacity-30 -z-20'>KRISHNA</h1>
            <div className='space-grotesk-normal absolute top-[40%] left-155 w-80 h-12 bg-black/10 backdrop-blur-sm border border-gray-300 rounded-lg p-4 flex items-center justify-center gap-2'>
                <h1>shrikrishnachinta79@gmail.com</h1>
                <button onClick={handleCopy} className="text-sm text-black/50 hover:text-black/60 transition-opacity duration-300 ">
                    {copied ? <CheckCheck /> : <Copy />}
                </button>
            </div>
            <img src="/pointing-up.png" alt="Hero Section" className="absolute top-68 left-130 w-120 h-fit object-cover drop-shadow-lg -z-10" />
        </div>
    )
}

export default Footer