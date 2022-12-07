import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SingleItem() {
    const datas = useLoaderData()
    const { cost, details, feature, img, title, category_id } = datas
    return (
        <div className="card  lg:w-8/12 md:w-fit bg-base-100 shadow-xl image-full lg:mx-auto md:ml-20 md:mr-20 mt-24 m-10">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl ">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/courseSummary/${category_id}`} ><button className="btn btn-primary">go back</button></Link>
                </div>
                <p className='text-2xl'>Cost: {cost ? cost : "free"}</p>
                <p>Features: {feature}</p>

            </div>
        </div>
    )
}

export default SingleItem