import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPath from '../layouts/404/ErrorPath'
import Blogs from '../layouts/Blogs/Blogs'
import Course from '../layouts/course/Course'
import CourseSummary from '../layouts/CourseSummary/CourseSummary'
import FAQ from '../layouts/FAQ/FAQ'
import Home from '../layouts/Home/Home'
import Login from '../layouts/Login/Login'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Ragister from '../layouts/Ragister/Ragister'
import SingleItem from '../layouts/SingleItem/SingleItem'
import PrivetRoute from '../PrivetRoute/PrivetRoute'


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/FAQ',
                element:<FAQ></FAQ>
            },
            {
                path: '/ragister',
                element: <Ragister></Ragister>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('https://course-amit-hasan-rafi.vercel.app/course-category')
            },
            {
                path:'/courseSummary/:id',
                element:<CourseSummary></CourseSummary>,
                loader: ({params}) => fetch(`https://course-amit-hasan-rafi.vercel.app/course-category/${params.id}`)
            },
            {
                path:'/singleItem/:id',
                element:<PrivetRoute><SingleItem></SingleItem></PrivetRoute>,
                loader: ({params}) => fetch(`https://course-amit-hasan-rafi.vercel.app/course/${params.id}`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    },
    {
        path:'/*',
        element:<ErrorPath></ErrorPath>
    }
])
