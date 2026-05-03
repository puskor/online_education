"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()


    const HandleLoginFunction = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            remember: true,
            callbackURL: "/"
        })


        console.log(res, error, "this is error show");

        if (error) {
            alert(error.message);
        }


        if (res) {
            alert("Signin successful");
        }



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
            {/* <hr className='mt-2' /> */}
            <h1 className='text-center text-xl text-gray-400'>or</h1>
            <div className='flex items-center gap-4 justify-center text-xl text-gray-600'>
                <FaGoogle />
                <FaFacebook />
                <FaGithub />
            </div>
            <hr className='mt-2' />
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