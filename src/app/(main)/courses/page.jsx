import ShowCourses from '@/components/courses/ShowCourses';
import React from 'react';
import SearchInput from '../search/SearchInput';

const CoursesPage = () => {
    return (
        <div>
            <SearchInput/>
            <h1 className='text-3xl font-black text-center py-5'>All Courses</h1>
            <ShowCourses/>
        </div>
    );
};

export default CoursesPage;