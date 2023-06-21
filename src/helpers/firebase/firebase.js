// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkD4i7746F6HGIcl4aLKTfMrakc0r7gmM',
  authDomain: 'portfolio-jorge-project.firebaseapp.com',
  projectId: 'portfolio-jorge-project',
  storageBucket: 'portfolio-jorge-project.appspot.com',
  messagingSenderId: '100142552696',
  appId: '1:100142552696:web:2b60d5fa0715303edfff8d'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
