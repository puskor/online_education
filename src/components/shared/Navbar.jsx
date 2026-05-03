"use client"
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import { authClient, useSession } from '@/lib/auth-client';




const Navbar = () => {

    const logOut = async () => {
        await authClient.signOut();
    }

    const { data: session, status } = useSession()
    const user = session?.user;


    console.log( user);



    const links =
        (<div className='space-x-4 text-[15px] font-bold md:flex'>
            <Navlink href={"/"}>Home</Navlink>
            <Navlink href={"/courses"}>Courses</Navlink>
            {
                user && <Navlink href={"/profile"}>My Profile</Navlink>
            }
        </div>
        )


    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-blue-600 font-bold shadow">EDU care</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (<button onClick={logOut} className="btn">Logout</button> ): (<Link href={"/login"} className="btn">Login</Link>)
                    }      
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;