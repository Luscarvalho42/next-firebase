import Router from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../lib/firebase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [laoding, setLoading] = useState(true)

  const signinGithub = () => {
    try {
      setLoading(true)
      firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        setUser(response.user)
        Router.push('/dashboard')
      })
    } finally {
      setLoading(false)
    }
  }

  const signinGoogle = () => {
    try {
      setLoading(true)
      firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        setUser(response.user)
        Router.push('/dashboard')
      })
    } finally {
      setLoading(false)
    }
  }

  const signout = () => {
    try {
      Router.push('/')

      return firebase
        .auth()
        .signOut()
        .then(() => setUser(null))
    } finally {
      setLoading(false)
      console.log("VOCÊ SAIU")
    }
  }

  return <AuthContext.Provider value={{
    user,
    laoding,
    signinGithub,
    signinGoogle,
    signout,
  }}>{children}</AuthContext.Provider>
}

export const AuthConsumer = AuthContext.Consumer 

export default AuthContext;