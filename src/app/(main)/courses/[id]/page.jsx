import CourseCard from '@/components/courses/CourseCard';
import ShowDiteis from '@/components/courses/ShowDiteis';
import { courseDetails } from '@/lib/data';
import React from 'react';

const Details = async({params}) => {
    const { id } = await params;

    const findData = await courseDetails(id)
    
    return (
        <div>
            <ShowDiteis data={findData}/>
        </div>
    );
};

export default Details;