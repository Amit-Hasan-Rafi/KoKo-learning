import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
function PrivetRoute({children}) {
  
    const {user , loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading){
        return <div>loading.....</div>
    }

    if(!user){
        return <Navigate to='/login' state={{from : location}} replace ></Navigate>
    }
    return children;
}

export default PrivetRoute