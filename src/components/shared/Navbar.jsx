'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import navImg from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    // console.log(session);
    const user = session?.user;
    // console.log(user);
    return (
        <div className='container mx-auto'>
            <div className=' flex justify-between items-center'>
                <div></div>
                <div >
                    <ul className='flex items-center gap-3'>
                        <li>
                            <NavLink href={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/career'}>Career</NavLink>
                        </li>

                    </ul>
                </div>
                {
                    isPending ? (
                    <span className="loading loading-spinner loading-lg"></span>
                ) : user ? (
                        <div className='flex items-center gap-2'>
                            <h2>Hello, {user.name}</h2>
                            <Image className='rounded-full' src={user.image} height={30} width={30} alt='Nav-user-image'></Image>
                            <button onClick={async () => await authClient.signOut()} className='btn bg-[#403F3F] text-white'>Logout</button>
                        </div>
                    ) :
                        (
                            <Link href={'/login'}><button className='btn bg-[#403F3F] text-white'>Login</button></Link>
                        )
                }
            </div>
        </div >
    );
};

export default Navbar;