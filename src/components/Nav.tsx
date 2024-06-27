'use client';
import React from 'react';
import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";

export default function Nav ({path}: {path: any}) {
    return (
        <nav className='flex h-[3.5rem] justify-between items-center px-[3rem] border-[#2d2d2d] border-b'>
            <span className='text-[1.1em] font-semibold'>
                <span className='text-[1.6em] font-semibold bg-gradient-to-r from-[#800000] to-[#433838] text-transparent bg-clip-text'>EARIST </span> 
                <span className='text-[1.6em] font-semibold bg-gradient-to-r from-indigo-500 to-[#95A1F9] text-transparent bg-clip-text'> O</span>rg 
                <span className='text-[1.6em] font-semibold bg-gradient-to-r from-indigo-500 to-[#95A1F9] text-transparent bg-clip-text'> S</span>aya
            </span>
            {path === '/admin/dashboard' || path === "/admin/applications" ? <ul className='flex text-[0.9em]'>
                <li className='mr-[10px]'><Link href={"/admin/dashboard"}>Dashboard</Link></li>
                <li>/</li>
                <li className='ml-[10px]'><Link href={"/admin/applications"}> Application</Link></li>
            </ul> : <ul className='flex text-[0.9em]'>
                <li className='mr-[10px]'><Link href={"/"}>Dashboard</Link></li>
                <li>/</li>
                <li className='ml-[10px]'><Link href={"/applications"}> Application</Link></li>
            </ul>}
            <ul className='flex w-[7rem] justify-around'>
                <li><UserButton afterSignOutUrl="/sign-in" /></li>
            </ul>
        </nav>
    )
}