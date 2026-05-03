import Link from 'next/link';
import React from 'react';

const ShowDiteis = ({ data }) => {

    const {
        id,
        image,
        title,
        description,
        instructor,
        duration,
        level,
        rating,
        category
    } = data;

    return (
        <div className="card bg-base-100 max-w-3xl shadow-lg mx-auto mt-10">
            
            {/* Image */}
            <figure>
                <img src={image} alt={title} className="w-full h-[300px] object-cover" />
            </figure>

            {/* Body */}
            <div className="card-body space-y-3">

                <span className="text-sm text-blue-600 font-semibold">
                    {category}
                </span>

                <h2 className="card-title text-2xl">{title}</h2>

                {/* Rating */}
                <p className="text-yellow-500 font-medium">
                    ⭐ {rating}
                </p>

                {/* Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-800">
                    <p><span className="font-semibold">Instructor:</span> {instructor}</p>
                    <p><span className="font-semibold">Duration:</span> {duration}</p>
                    <p><span className="font-semibold">Level:</span> {level}</p>
                    <p><span className="font-semibold">Course ID:</span> #{id}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600">{description}</p>

                {/* Buttons */}
                <div className="card-actions justify-end mt-4">
                    <Link href={`/courses`}>
                        <button className="btn btn-outline">Cancel</button>
                    </Link>
                    <button className="btn btn-primary">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowDiteis;