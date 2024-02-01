import Link from 'next/link';
import { FiHome } from "react-icons/fi";
import React from 'react';

const LeftNav = () => {
    return (
        <div className='flex flex-col w-24 items-center py-10 rounded-badge m-10 bg-base-100'>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-3 rounded-full w-fit mt-6'>
                <Link href={'/'} className='text-2xl text-slate-600'><FiHome  /></Link>
            </div>
            
        </div>
    );
};

export default LeftNav;