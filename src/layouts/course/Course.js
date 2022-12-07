import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CoursesCategory from '../CoursesCategory/CoursesCategory'
function Course() {
  const courses = useLoaderData()
  return (
    <div className='mx-auto mt-10' >
      <div className='lg:flex md:flex-row' >
        {
          courses.map(course => <CoursesCategory
            key={course.id}
            course={course}
          ></CoursesCategory>)
        }
      </div>
    </div>
  )
}

export default Course