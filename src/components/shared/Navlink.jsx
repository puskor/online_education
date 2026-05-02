"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href ,children}) => {

    const live = usePathname();
    const isActive = live === href;

    return (
        <div>
            <Link className={`${isActive && "border-b-4 border-red-500"}`} href={href}>{children}</Link>
        </div>
    );
};

export default Navlink;