// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { applyActionCode, getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgzqg-efbEv4lwzL3tQPtp_midQ6YyC2g",
    authDomain: "netflix-clone-yt-bd779.firebaseapp.com",
    // databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
    projectId: "netflix-clone-yt-bd779",
    storageBucket: "netflix-clone-yt-bd779.appspot.com",
    messagingSenderId: "534378690187",
    appId: "1:534378690187:web:f743aa0a51a40f29e0468e",
    measurementId: "G-7X7Q0B96K7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }