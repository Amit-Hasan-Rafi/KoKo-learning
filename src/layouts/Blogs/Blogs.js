import React from 'react'
import { Link } from 'react-router-dom'
function Blogs() {
    return (
        <div className=' hero flex flex-col mt-20' >
            <div className="card w-fit bg-base-100 shadow-xl  mb-10">
                <div className="card-body">
                    <h2 className="card-title">#Cors</h2>
                    <p>Cors is a browser security feature. Its hepls to restricts cross. We can mange "port's" by this.</p>
                </div>
            </div>
            <div className="card w-fit bg-base-100 shadow-xl  mb-10">
                <div className="card-body">
                    <h2 className="card-title">#firebase</h2>
                    <p>Firebase is webside what provides people free 'authentication' service. By firebace we can have different! different! websides access ability.</p>
                </div>
            </div>
            <div className="card w-fit bg-base-100 shadow-xl  mb-10">
                <div className="card-body">
                    <h2 className="card-title">#private-Route</h2>
                    <p>Private route is a programming concept, by that we can lock a component by any condition</p>
                </div>
            </div>
            <div className="card w-fit bg-base-100 shadow-xl  mb-10">
                <div className="card-body">
                    <h2 className="card-title">#Node</h2>
                    <p>A node is a basic unit of a data structure, such as a linked list or tree data structure.</p>
                </div>
            </div>
            <Link to='/'  className='btn'>Go Home</Link>
        </div>
    )
}

export default Blogs