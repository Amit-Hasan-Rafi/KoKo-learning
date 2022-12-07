import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CoursesSideNav from '../CoursesSideNav/CoursesSideNav'
import CouseItems from '../CouseItems/CouseItems'

function CourseSummary() {
    const items = useLoaderData()
    return (
        <div className='lg:flex md:grid sm:grid '>
            <div className='md:mx-auto sm:mx-auto mt-16' >
                <CoursesSideNav></CoursesSideNav>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'  >
                {
                    items.map(item => <CouseItems
                        key={item.id}
                        item={item}
                    ></CouseItems>)
                }
            </div>
        </div>
    )
}

export default CourseSummary