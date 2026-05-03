import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
    const { id, rating, image, instructor, title, description } = course;
    return (
        <div className="card bg-base-100 w-96 shadow-sm mx-auto">
            <figure>
                <img className=' h-[200px] rounded-t-xl w-[320px]' src={image} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='line-clamp-2'>{description}</p>
                <h1 className='text-xl font-semibold'>Instructor <span className='font-bold'>: {instructor}</span></h1>

                <div className='flex items-center gap-2'>
                    <span className='m-0'>{rating}</span>
                    <p className='m-0 text-yellow-400'><FaStar />
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <Link href={`/details/${id}`}>
                        <button className="btn btn-primary hover:btn-secondary">Details</button>
                    </Link>
                    <Link href={'/signup'}>
                        <button className="btn btn-primary hover:btn-secondary">Inroll now</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;