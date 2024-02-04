'use client'

import clipboardCopy from 'clipboard-copy';
import React from 'react';
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { TbInfoOctagon } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';

const CardButtons = ({ dua }) => {

    const handleCopy = () => {
        const duaText = document.getElementById(dua.dua_id).innerText;
        const textToCopy = `${duaText}
        
        Copied from:
        Dua zone (Hisnul muslim)
        https:www.duazone.com
        `;
        clipboardCopy(textToCopy);

        // Show toast for copied text success
        toast.success('Copied to clipboard', {
            style: {
                padding: "20px",
                background: "#333",
                color: "white"
            },
            iconTheme: {
                primary: 'white',
                secondary: 'black',
            },
            position: "bottom-center"
        })

    }


    // Style for coming soon toast
    const handleToast = () => {
        toast.success('Coming Soon Insha allah.', {
            style: {
                padding: "20px",
                background: "#333",
                color: "white"
            },
            iconTheme: {
                primary: 'white',
                secondary: 'black',
            },
            position: "bottom-center"
        })
    }
    return (

        <div className='flex justify-between items-center mt-8'>
            <Toaster />
            <div>Audio</div>
            <div className="flex gap-4">
                <button onClick={handleCopy}>
                    <IoCopyOutline className='text-slate-500 text-2xl' />
                </button>
                <button>
                    <CiBookmark className='text-slate-500 text-2xl' />
                </button>
                <button onClick={handleToast}>
                    <IoBulbOutline className='text-slate-500 text-2xl' />
                </button>
                <button onClick={handleToast}>
                    <FaShareAlt className='text-slate-500 text-2xl' />
                </button>
                <button onClick={handleToast}>
                    <TbInfoOctagon className='text-slate-500 text-2xl' />
                </button>

            </div>
        </div>

    );
};

export default CardButtons;