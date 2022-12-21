import React from 'react'
import { Link } from 'react-router-dom'

function CoursesCategory({ course }) {
  const { title, img, discription,id } = course
  return (
    <div className="card lg:w-4/6 glass m-7 " >
      <figure><img src={img} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{discription}</p>
      </div>
        <div className="card-actions justify-end">
          <Link to={`/courseSummary/${id}`}><button className="btn btn-primary">Learn now!</button></Link>
        </div>
    </div>
  )
}

export default CoursesCategory