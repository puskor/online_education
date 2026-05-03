import Link from 'next/link';
import React from 'react';

const ShowDiteis = (data) => {

    // console.log(data, "this is data from show diteis");
    const { id, image, title, description } = data.data;
    // console.log(id, "this is id from show diteis");
    return (
        <div className="card bg-base-100 w-[40%] shadow-sm container mx-auto mt-10">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/courses`}>
                        <button className="btn btn-primary hover:btn-secondary">Cancel</button>
                    </Link>
                    <button className="btn btn-primary hover:btn-secondary">Inroll now</button>

                </div>
            </div>
        </div>
    );
};

export default ShowDiteis;