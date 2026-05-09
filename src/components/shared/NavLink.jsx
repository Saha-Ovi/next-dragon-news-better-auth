'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathname = usePathname();
    // console.log(pathname);
    const isActive = href === pathname;
    // console.log(isActive);
    return (
        <div>
            <Link className={`${isActive ? "border-b-2 border-[#D72050]" : " "} `} href={href}>
            {children}
            </Link>
        </div>
    );
};

export default NavLink;