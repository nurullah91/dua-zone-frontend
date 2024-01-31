'use client'

import Image from 'next/image';
import React from 'react';
import profile from '@/public/profile.svg'
import { RiSettings3Fill } from "react-icons/ri";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-4">
                <div className="flex-1">
                    <h2 className="text-2xl">Duas Page</h2>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image width={50} height={50} alt="Tailwind CSS Navbar component" src={profile} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <RiSettings3Fill className='text-2xl text-green-500 mr-3' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;