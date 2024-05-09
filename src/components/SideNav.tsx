'use client';
import React from 'react';
import Link from 'next/link';

export default function SideNav () {
    return (
        <nav className='flex-[0_0_auto] w-[3rem] border-[#2d2d2d] border-r'>
            <ul className='flex flex-col items-center '>
                <li className='mb-[24px] mt-[25px]'>
                    <Link href={"/"}><img className='' src="/dashboard.svg" alt="Dashboard" width={35} height={35}/></Link>
                </li>
                <li><Link href={"/applications"}><img className='' src="/apply.svg" alt="Apply" width={35} height={35}/></Link></li>
            </ul>
        </nav>
    )
}