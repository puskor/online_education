import ShowCourses from '@/components/courses/ShowCourses';
import ShowDiteis from '@/components/courses/ShowDiteis';
import { courseDetails } from '@/lib/data';
import React from 'react';

const Details = async ({params}) => {
    const { id } = await params ;
    const findData = await courseDetails(id)


    console.log(findData, "this is find data from details page");

    return (
        <div>
            <ShowDiteis data={findData} />
        </div>
    );
};

export default Details;