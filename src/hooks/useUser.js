import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react'

export function useUser (auth) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const _signInWithEmailAndPassword = (email, password) => {
    setIsLoading(true)
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // console.log(userCredential.user)
        setUser(userCredential.user)
        // ...
      })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }

  const _signOut = () => {
    setIsLoading(true)
    setError(null)
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null)
    }).catch((error) => {
      setError(error)
    }).finally(() => setIsLoading(false))
  }

  return {
    _signInWithEmailAndPassword,
    _signOut,
    user,
    error,
    isLoading
  }
}
