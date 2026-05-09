import Image from 'next/image';
import React from 'react';
import headerImg from '@/assets/logo.png'
import { format} from "date-fns"

const Header = () => {
    return (
        <div className='text-center my-8 space-y-2'>
            <Image className='mx-auto' src={headerImg} width={300} height={200} alt='logo-image'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;