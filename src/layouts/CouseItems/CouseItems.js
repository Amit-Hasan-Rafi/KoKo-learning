import React from 'react'
import { Link } from 'react-router-dom';

function CouseItems({ item }) {
    const { cost, details, feature, img, title , id } = item;
    return (
        <div className="card w-fit bg-base-100 shadow-xl m-5">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0,160)+'.....'}<Link  to={`/singleItem/${id}`} className='text-blue-600' >Read more</Link></p>
                <div className="card-actions">
                   <Link to={`/singleItem/${id}`}><button className="btn btn-primary">Get Premium access!</button></Link>
                </div>
                <p>Cost:<span className='text-red-600' >{cost? cost : "free"}</span> </p>
            </div>
        </div>
    )
}

export default CouseItems