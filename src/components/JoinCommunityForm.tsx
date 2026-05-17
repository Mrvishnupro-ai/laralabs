"use client";

import React, { useState } from 'react';

const JoinCommunityForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleJoin = async () => {
        if (!email) return;
        setStatus('loading');
        try {
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9Rp_5jlI3lK-lzFDOsfJwnoj1K_oImB_zdIzDxje7Nnq7y8l09uPsEGS90BZNoPBs/exec';
            
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error joining community:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="flex gap-2 w-full max-w-md">
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 md:h-14 rounded-xl bg-white/5 border border-white/10 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all min-w-0"
            />
            <button 
                onClick={handleJoin}
                disabled={status === 'loading'}
                className={`h-12 md:h-14 px-6 md:px-8 rounded-xl font-bold transition-all whitespace-nowrap ${
                    status === 'success' 
                        ? 'bg-green-600 hover:bg-green-500 text-white shadow-[0_0_15px_rgba(22,163,74,0.4)]' 
                        : 'bg-white hover:bg-zinc-200 text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                }`}
            >
                {status === 'loading' ? '...' : status === 'success' ? 'Joined!' : 'Join'}
            </button>
        </div>
    );
};

export default JoinCommunityForm;
