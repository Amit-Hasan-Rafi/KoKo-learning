import React from 'react'
import { Link , useLocation,useNavigate} from 'react-router-dom';
import { GrGoogle } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';

function Login() {
    
    const [error , setError] = useState('')
    const { loginwithGooglePopUp, loginwithGitHubPopUp, loginwithFaceBookPopUp, loginWithEP } = useContext(AuthContext)
    
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/courseSummary/:id'
    const navigate = useNavigate()

    const submitHandel = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginWithEP(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                alert('Congratulation you are login now!!')
                navigate(from , {replace:true})
            })
            .catch(error => {
                setError(error.message)
                toast.error(error)
                console.error(error)
            })
    }
    const googleLoginHandler = () => {
        loginwithGooglePopUp()
    }
    const githubLoginHandler = () => {
        loginwithGitHubPopUp()
    }
    const facebookLoginHandler = () => {
        loginwithFaceBookPopUp()
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-col w-fit">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold  text-green-500">Login now!</h1>
                    </div>
                    <form onSubmit={submitHandel} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <p className='text-red-600' >{error}</p>
                            <Link to='/ragister' className="label-text-alt link link-hover mt-10 text-sm ">Are you ragistered?</Link>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className="btn-group mx-auto mt-4">
                        <button onClick={googleLoginHandler} className="btn btn-outline btn-success btn-lg"><GrGoogle />oogle </button>
                        <button onClick={githubLoginHandler} className="btn btn-outline btn-ghost btn-lg"><BsGithub />Github </button>
                        <button onClick={facebookLoginHandler} className="btn btn-outline btn-primary btn-lg"><FaFacebook />Facebook </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;