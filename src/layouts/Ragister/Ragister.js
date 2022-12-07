import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function Ragister() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { creatUser, UpdateUserProfile } = useContext(AuthContext)
  const submitHandel = event => {
    event.preventDefault()
    const form = event.target;
    const displayName = form.displayName.value
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password, displayName)
    creatUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset()
        setError('')
        alert('Congratulation you are ragister now!!')
        handelUserProfile(displayName)
        navigate('/login')

      })
      .catch(error => {
        setError(error.message)
        console.error(error)
      })
  }
  const handelUserProfile = (displayname) => {
    const profile = {
      displayName: displayname
    }
    UpdateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold  text-accent ">Ragister first!</h1>
        </div>
        <form onSubmit={submitHandel} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Displayname</span>
              </label>
              <input type="displayname" name='displayName' placeholder="displayname" className="input input-bordered" required />
            </div>
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
            <Link to='/login' className="label-text-alt link link-hover mt-10 text-sm ">Already have an account?</Link>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Ragister</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Ragister