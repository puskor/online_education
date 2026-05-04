import CourseCard from '@/components/courses/CourseCard';
import NodataFilter from '@/components/courses/NodataFilter';
import { filterData } from '@/lib/filter';
import React from 'react';
import SearchInput from '../SearchInput';

const FilterPage = async({params}) => {
    const {id} =  await params;
    console.log(id, "this is params from search page");

    const result = await filterData(id);
    // console.log(result, "this is result from search page");

    return (
        <div className=' container mx-auto space-y-10 py-10'>
            <SearchInput/>
            {
                
                result.length >=1 ?  (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>{ result.map(course => <CourseCard key={course.id} course={course}/>)}</div> ) : (<NodataFilter/>)
                
            }

        </div>
    );
};

export default FilterPage;