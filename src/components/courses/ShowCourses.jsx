import { courses } from '@/lib/data';
import React from 'react';
import CourseCard from './CourseCard';

const ShowCourses = async() => {

    const data = await courses()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto space-y-10'>
            {
                data.map(course => <CourseCard key={course.id} course={course}/>)
            }
        </div>
    );
};

export default ShowCourses;