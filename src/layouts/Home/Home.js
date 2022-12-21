import React from 'react'
import img from './banner.jpg'
function Home() {
  return (
    <div className=' lg:grid lg:grid-cols-2 md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse   ' >
      <img className='w-fit' src={img} alt="" />
      <div className='lg:text-5xl md:text-5xl text-4xl font-extrabold p-10 lg:pt-64'>
        <h1 className='lg:text-6xl md:text-6xl text-5xl font-extrabold' >Welcom to <span className='text-purple-500 ' >Koko</span>Learning</h1>
        <p>For having our service go to the <span className='text-red-500' >Courses</span></p>
      </div>
    </div>
  )
}

export default Home