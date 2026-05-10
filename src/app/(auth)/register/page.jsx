'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const 
    {
        register,
        handleSubmit,
        watch,
        formState:{errors}
    
    }=useForm();

    const handlefunc = (data)=>
    {
        console.log(data,"data");
        console.log(errors,"errors");
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
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-xl">Password</legend>
                        <input type="password" className="input" {...register('password', { required: "Password Field is Required" })} placeholder="Type your Password here" />
                        {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}

                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                </form>
            </div>
        </div> 
    );
};

export default RegisterPage;