'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideBar = () => {
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data, "data");
    }
    const handleGithubLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
        console.log( data, "data");
    }
    return (
        <div className=' space-y-2'>
            <h2 className='font-bold text-lg'>Login With</h2>
            <div className='flex flex-col gap-3'>
                <button onClick={handleGoogleLogin} className='btn border-[#7dadf7] text-[#7dadf7]'><FaGoogle />Login With Google</button>
                <button onClick={handleGithubLogin} className='btn border-[#3e4344] text-[#3e4344]'><FaGithub />Login With Github</button>
            </div>
            <div className=' space-y-2'>
                <h2 className='font-bold text-lg'>Find Us On</h2>
                <div className='flex flex-col gap-3'>
                    <button className='btn border-[#7dadf7] text-[#7dadf7]'><FaFacebook />Facebook</button>
                    <button className='btn border-[#3e4344] text-[#3e4344]'><FaTwitter className='text-[#7dadf7]' />Twitter</button>
                    <button className='btn border-[#3e4344] text-[#3e4344]'><FaInstagram className='text-[#7dadf7]' />Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;