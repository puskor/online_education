import { courses } from "./data";

export const filterData = async (search) => {
    const data = await courses();
    if (!search) return;

    const filtered = data.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase())
    );

    console.log(filtered, "this is filtered data from filter.js");

    return filtered;

}

