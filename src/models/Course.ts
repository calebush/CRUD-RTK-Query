export interface Course {
        _id?: string,
        name:string,
        units:number,
        compulsory?:boolean
}
export interface CourseUpdate {
        _id?: string,
        name:string,
        units:number,
        compulsory?:boolean
}

export interface Courses<>{};
