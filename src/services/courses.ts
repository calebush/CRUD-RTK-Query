import {createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react'
import {Course, Courses, CourseUpdate} from '../models/Course'

export const myApiStore = createApi({
    reducerPath: 'myApiStore',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:2000'}),
   tagTypes: ['Course'],
    endpoints: (builder)=> ({
        getAllCourses: builder.query<Courses, void>({
            query:()=>'courses',
            providesTags: ['Course']
        }),
        addCourse: builder.mutation<void, Course>({
            query : course =>({
                url: '/course',
                method: 'POST',
                body: course,
            }),
            invalidatesTags: ['Course']
        }),
        updateCourse: builder.mutation<void, CourseUpdate>({
            query : ({_id, ...rest}) =>({
                url: `/course/${_id}`,
                method: 'PATCH',
                body: rest,
            }),
            invalidatesTags: ['Course']
        }),
        deleteCourse: builder.mutation<void, string>({
            query : (id) => ({
                url: `/course/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Course']
        })
    }),
})

export const {
    useGetAllCoursesQuery,
    useUpdateCourseMutation,
    useAddCourseMutation,
    useDeleteCourseMutation
} = myApiStore;
