'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    // way 1 using event
    // const handlefunc = (e)=>
    // {
    //     e.preventDefault();
    //     const email=e.target.email.value;
    //     const pass =e.target.password.value;
    //     console.log(email,pass,"Email and Pass");
    // }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const handlefunc = (data) => {
        console.log(data, "data");
        console.log(errors);
    }
    // using watch we can watch what we write at a time

    // const email = watch("email")
    // const password = watch("password");
    // console.log(email, password);
    
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 my-8'>
            <div className='p-10 rounded-2xl bg-white'>
                {/* <form onSubmit={handlefunc} className='space-y-4'> way-1 */}
                <form onSubmit={handleSubmit(handlefunc)} className='space-y-4'>
                    <h2 className='font-extrabold text-2xl my-4'>Login in Into Your Account</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-xl">Email address</legend>
                        {/* here name should be unique --> way-1 */}
                        {/* <input type="email" className="input" name='email' placeholder="Type your Email here" /> */}
                        <input type="email" className="input" {...register("email", { required: "Email Field is Required" })} placeholder="Type your Email here" />
                        {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-xl">Password</legend>

                        {/* here name should be unique --> way-1 */}
                        {/* <input type="password" className="input" name='password' placeholder="Type your Password here" /> */}
                        <input type="password" className="input" {...register('password', { required: "Password Field is Required" })} placeholder="Type your Password here" />
                        {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}

                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                    <p className='text-center text-sm'>Don't Have An Account ? <Link href={'/register'} className='text-blue-400 '>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;