import ShowCourses from '@/components/courses/ShowCourses';
import React from 'react';

const CoursesPage = () => {
    return (
        <div>
            <h1 className='text-3xl font-black text-center py-5'>All Courses</h1>
            <ShowCourses/>
        </div>
    );
};

export default CoursesPage;