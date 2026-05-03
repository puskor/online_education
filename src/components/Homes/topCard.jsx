import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopCard = ({ item }) => {
    const { id, image, title, instructor, rating } = item;

    return (
        <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 w-[300px] mx-auto">

            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-[180px] object-cover"
            />

            <div className="p-4 space-y-2">

                <h2 className="text-lg font-semibold text-gray-800">
                    {title}
                </h2>

                <p className="text-sm text-gray-500">
                    Instructor: {instructor}
                </p>

                <p className="text-yellow-500 font-medium flex justify-center items-center gap-2 font-bold">
                    <FaStar/> {rating}
                </p>

                <Link href={`/details/${id}`}>
                    <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    )
};

export default TopCard;