import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import navImg from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
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
                <div className='flex items-center gap-2'>
                    <Image src={navImg} height={30} width={30} alt='Nav-user-image'></Image>
                   <Link href={'/login'}><button className='btn bg-[#403F3F] text-white'>Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;