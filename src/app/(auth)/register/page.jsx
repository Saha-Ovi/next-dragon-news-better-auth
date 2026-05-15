'use client'
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {
     const [isPassword,setIsPassword]= useState(false);
    const
        {
            register,
            handleSubmit,
            watch,
            formState: { errors }

        } = useForm();

    const handlefunc = async (data) => {
        // console.log(data, "data");
        // console.log(errors, "errors");
        const { name, email, photo, password } = data;
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("SignUp Successful");
        }
    }
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 my-8'>
            <div className='p-10 rounded-2xl bg-white'>

                <form onSubmit={handleSubmit(handlefunc)} className='space-y-4'>
                    <h2 className='font-extrabold text-2xl my-4'>Register your account</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-xl">Your Name</legend>

                        <input type="text" className="input" {...register("name", { required: "Name Field is Required" })} placeholder="Type your Name here" />
                        {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-xl">Photo URL</legend>

                        <input type="text" className="input" {...register("photo", { required: "Photo URL Field is Required" })} placeholder="Type your Photo URL here" />
                        {errors.photo && <p className='text-red-500 text-xs'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-xl">Email address</legend>

                        <input type="email" className="input" {...register("email", { required: "Email Field is Required" })} placeholder="Type your Email here" />
                        {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-bold text-xl">Password</legend>
                        <input type={isPassword ? "text" : "password"} className="input" {...register('password', { required: "Password Field is Required" })} placeholder="Type your Password here" />
                        <span className='absolute right-2 top-4.5' onClick={() => setIsPassword(!isPassword)}> {isPassword ? <FaEye /> : <FaEyeSlash />} </span>
                        {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}

                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;