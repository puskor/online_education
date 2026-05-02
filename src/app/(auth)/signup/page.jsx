"use client"
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const HandleLoginFunction = (data) => {

        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit(HandleLoginFunction)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mt-10">
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
        </form>
    );
};

export default Signup;