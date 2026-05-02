import Link from 'next/link';
import React from 'react';

const NO_page = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-7xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mt-4">
                Page Not Found
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NO_page;