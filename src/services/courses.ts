import {createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react'
import {Course, Courses, CourseUpdate} from '../models/Course'

export const myApiStore = createApi({
    reducerPath: 'myApiStore',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:2000'}),
    endpoints: (builder)=> ({
        getAllCourses: builder.query<Courses, void>({
            query:()=>'courses',
        }),
        addCourse: builder.mutation<void, Course>({
            query : course =>({
                url: '/course',
                method: 'POST',
                body: course,
            })
        }),
        updateCourse: builder.mutation<void, CourseUpdate>({
            query : ({_id, ...rest}) =>({
                url: `/course/${_id}`,
                method: 'PATCH',
                body: rest,
            })
        }),
        deleteCourse: builder.mutation<void, string>({
            query : (id) => ({
                url: `/course/${id}`,
                method: 'DELETE',
            })
        })
    }),
})

export const {
    useGetAllCoursesQuery,
    useUpdateCourseMutation,
    useAddCourseMutation,
    useDeleteCourseMutation
} = myApiStore;
