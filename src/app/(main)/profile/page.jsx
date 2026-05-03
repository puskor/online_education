"use client"
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
    const { data: session, status } = useSession()
    const user = session?.user;


    console.log(user, "user from profile page");


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
            {user && (
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">

                    {/* Header */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                            <img src={user.image} alt={user.name} />
                        </div>

                        <h1 className="mt-3 text-xl font-semibold text-gray-800">
                            {user.name}
                        </h1>
                        <p className="text-sm text-gray-500">{user.email}</p>

                        <span
                            className={`mt-2 text-xs px-3 py-1 rounded-full ${user.emailVerified
                                    ? "bg-green-100 text-green-600"
                                    : "bg-red-100 text-red-500"
                                }`}
                        >
                            {user.emailVerified ? "Verified" : "Not Verified"}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="border-t my-4"></div>

                    {/* Info */}
                    <div className="space-y-3 text-sm text-gray-700">
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-500">User ID</span>
                            <span className="truncate max-w-[180px]">{user.id}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-medium text-gray-500">Created At</span>
                            <span>
                                {new Date(user.createdAt).toLocaleDateString()}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-medium text-gray-500">Updated At</span>
                            <span>
                                {new Date(user.updatedAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-3">
                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl transition">
                            Edit Profile
                        </button>
                
                    </div>

                </div>
            )}
        </div>
    );
};

export default ProfilePage;