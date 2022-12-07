import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CoursesSideNav() {
    const [categorys, setCategorys] = useState([])
    useEffect(() => {
        fetch('https://course-amit-hasan-rafi.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategorys(data))
    })
    return (
        <div className="card w-80 bg-base-100 shadow-xl image-full sticky top-20">
            <div className="card-body ">
                <h2 className="card-title">All Categorys : {categorys.length}</h2>
                {
                    categorys.map(category => <li><Link to={`/courseSummary/${category.id}`} >{category.title}</Link></li>)
                }
            </div>
        </div>
    )
}

export default CoursesSideNav