import React from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../FireBaseSDK/FireBaseSDK'
import { useState } from 'react'
import { useEffect } from 'react'
export const AuthContext = createContext()
function AuthPovider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const auth = getAuth(app)
  const logOut = () => {
    return signOut(auth)
  }
  const loginwithGooglePopUp = () => {
    const provider = new GoogleAuthProvider
    return signInWithPopup(auth, provider)
  }
  const loginwithGitHubPopUp = () => {
    const provider = new GithubAuthProvider
    return signInWithPopup(auth, provider)
  }
  const loginwithFaceBookPopUp = () => {
    const provider = new FacebookAuthProvider
    return signInWithPopup(auth, provider)
  }
  const loginWithEP = (email, passsword) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, passsword)
  }
  const creatUser = (email, passsword) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, passsword)
  }
  const UpdateUserProfile = profile => {
    return updateProfile(auth.currentUser, profile)
  }
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => unsubcribe();
  }, [])

  const authInfo = {
    creatUser,
    logOut,
    loginwithGooglePopUp,
    loginwithGitHubPopUp,
    loginWithEP,
    loginwithFaceBookPopUp,
    user,
    loading,
    setLoading,
    UpdateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>

  )
}

export default AuthPovider