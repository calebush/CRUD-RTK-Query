import React from 'react'
import {useGetAllCoursesQuery} from "./services/courses";
const Home=({ id }: { id: string })=>{
    const {course}  = useGetAllCoursesQuery(undefined,{
        selectFromResult: ({data}) =>({
            // @ts-ignore
            course:data?.find((course)=>course._id === id),
        }),
    })
    return <li>{course.name}</li>
}
export default Home;
