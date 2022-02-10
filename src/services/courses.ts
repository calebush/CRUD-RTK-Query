import {createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react'
import { Courses } from '../models/Course'

export const myApiStore = createApi({
    reducerPath: 'myApiStore',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:2000'}),
    endpoints: (builder)=> ({
        getAllCourses: builder.query<Courses, void>({
            query:()=>'courses',
        }),
    }),
})

export const {useGetAllCoursesQuery} = myApiStore;
