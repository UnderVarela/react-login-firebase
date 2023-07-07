import { signInWithEmailAndPassword, onAuthStateChanged, updateProfile, updateEmail, updatePassword, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'

const initialValue = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: ''
}

export function useUser (auth) {
  const [user, setUser] = useState(initialValue)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const setUserFiels = payload => {
    setUser({
      ...user,
      ...payload
    })
  }

  const loadUser = () => {
    // const data = localStorage.getItem('usuario')
    // if (data) {
    //   setUser(JSON.parse(data))
    //   return
    // }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const data = { uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL, phoneNumber: user.phoneNumber }
        // localStorage.setItem('usuario', JSON.stringify(data))

        setUser(
          data
        )
      } else {
        // User is signed out
        // ...
      }
    })
  }

  useEffect(() => {
    loadUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _signInWithEmailAndPassword = (email, password) => {
    setIsLoading(true)
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // console.log(userCredential.user)
        const { user } = userCredential
        const data = { uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL }
        // localStorage.setItem('usuario', JSON.stringify(data))

        setUser(
          data
        )
        // ...
      })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }

  // Data example: { displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg" }
  const _updateProfile = (data = {}) => {
    setIsLoading(true)
    setError(null)
    updateProfile(auth.currentUser, data).then(() => {
      setUser({
        ...user,
        ...data
      })
    })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }

  const _updateEmail = (email) => {
    setIsLoading(true)
    setError(null)
    updateEmail(auth.currentUser, email).then(() => {
      setUser({
        ...user,
        email
      })
    })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }

  const _updatePassword = (newPassword) => {
    setIsLoading(true)
    setError(null)
    updatePassword(auth.currentUser, newPassword).then(() => {})
      .catch(setError)
      .finally(() => setIsLoading(false))
  }

  const _signOut = () => {
    setIsLoading(true)
    setError(null)
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(initialValue)
      // localStorage.removeItem('usuario')
    }).catch((error) => {
      setError(error)
    }).finally(() => setIsLoading(false))
  }

  const onChange = ({ target: { name, value } }) => {
    const clone = structuredClone(user)
    clone[name] = value
    setUser(clone)
  }

  return {
    _signInWithEmailAndPassword,
    _signOut,
    _updateProfile,
    _updateEmail,
    _updatePassword,
    // ...user,
    // user,
    displayName: user?.displayName,
    email: user?.email,
    error,
    isLoading,
    onChange,
    phoneNumber: user?.phoneNumber,
    photoURL: user?.photoURL,
    setUserFiels,
    uid: user?.uid
  }
}
