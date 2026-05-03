import { getTop3Courses } from '@/lib/data';
import React from 'react';
import TopCard from './topCard';

const Top3 = async () => {
    const data = await getTop3Courses();
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl font-bold my-5 '>Top 3 Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 '>
                {
                    data.map((item) => { return <TopCard key={item.id} item={item}></TopCard> })
                }
            </div>
        </div>
    );
};

export default Top3;