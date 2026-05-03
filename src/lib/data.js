import data from "@/lib/data.json"
import { auth } from "./auth";


export const courses = async () => {
    return data;
};


export const courseDetails = async (id) => {
    // console.log(id , "id from data.js");
    // console.log(data , "data from data.js");
    const course = data.find(item => item.id == id);
    return course;
};




