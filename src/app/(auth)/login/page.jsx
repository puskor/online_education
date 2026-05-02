"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const HandleLoginFunction = (data) => {

        console.log(data);

    }
    return (
        <div className=' bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mt-10'>
            <form onSubmit={handleSubmit(HandleLoginFunction)}>
                <fieldset className="fieldset">
                    <legend className="text-center text-2xl font-bold">Login</legend>

                    <label className="label" >Email</label>
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true })} className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
            <p className="mt-4">
                Do not have an account?{" "}
                <Link href={"/signup"} className="text-blue-500">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;