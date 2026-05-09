import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { manrope } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${manrope.className}`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;