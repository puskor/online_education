"use client"
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const HandelSighUpForm = async (data) => {

        console.log(data);

        const {data:res,error} = await authClient.signUp.email({
                email: data.email,
                password: data.password,
                name: data.name,
                photo: data.photo,
                remember: true,
                callbackURL:"/"
        })

        if(error){
            alert(error.message);
        }

        console.log(res, error ,"this is error show");
    }

    return (
        <div className='bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mt-10'>

            <form onSubmit={handleSubmit(HandelSighUpForm)}>
                <fieldset className="fieldset ">
                    <legend className="fieldset-legend text-2xl">Sign up</legend>

                    <label className="label">Name</label>
                    <input type="text" {...register("name", { required: true })} className="input" placeholder="Enter name" />

                    <label className="label" >Email</label>
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />


                    <label className="label">Photo</label>
                    <input type="text" {...register("photo", { required: true })} className="input" placeholder="Photo url" />

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true })} className="input" placeholder="Password" />


                    <button className="btn btn-neutral mt-4">Sign up</button>
                </fieldset>
                <hr className='mt-2' />
                <h1 className='text-center text-xl text-gray-400'>or</h1>
                <div className='flex items-center gap-4 justify-center text-xl text-gray-600'>
                    <FaGoogle />
                    <FaFacebook />
                    <FaGithub />
                </div>
            </form>
        </div>

    );
};

export default Signup;